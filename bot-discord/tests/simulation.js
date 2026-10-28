'use strict';
/* Simulation de Discord (faux serveur, faux membres) pour exécuter les modules
   de bout en bout sans connexion. */
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { Collection } = require('discord.js');
process.env.SUPABASE_URL = '';
const base = path.join(__dirname, '..', 'data', 'base-locale.json');
const sauvegarde = fs.existsSync(base) ? fs.readFileSync(base) : null;
if (sauvegarde) fs.renameSync(base, base + '.sim');

const db = require('../src/stockage'); db.initialiser();
const reglages = require('../src/serveurs/reglages');
const serveurs = require('../src/serveurs');
const niveaux = require('../src/serveurs/niveaux');
const giveaways = require('../src/serveurs/giveaways');
const roles = require('../src/serveurs/roles-boutons');
const synchro = require('../src/serveurs/synchro');

const envoyes = [];
let idn = 1000;
function salon(id, nom) {
  const messages = new Collection();
  return { id, name: nom, type: 0, parentId: null, rawPosition: idn++, isTextBased: () => true, isThread: () => false,
    send: async (m) => { const msg = { id: String(idn++), author: { id: 'bot' }, url: `https://discord/${id}/${idn}`, ...m, edit: async (x) => Object.assign(msg, x) }; messages.set(msg.id, msg); envoyes.push({ salon: nom, ...m }); return msg; },
    messages: { fetch: async (x) => (typeof x === 'string' ? messages.get(x) : messages) } };
}
const roleCache = new Collection([['G1', { id: 'G1', name: '@everyone', position: 0, hexColor: '#000', managed: false }], ['r5', { id: 'r5', name: 'Niveau 5', position: 2, hexColor: '#f00', managed: false }], ['r10', { id: 'r10', name: 'Niveau 10', position: 3, hexColor: '#0f0', managed: false }], ['rRouge', { id: 'rRouge', name: 'Ruche rouge', position: 4, hexColor: '#f00', managed: false }]]);
const general = salon('c-gen', 'general'), logs = salon('c-logs', 'logs');
const guild = { id: 'G1', name: 'Serveur test', memberCount: 42, ownerId: 'owner', iconURL: () => null,
  channels: { cache: new Collection([[general.id, general], [logs.id, logs]]), fetch: async (id) => (id === general.id ? general : logs) },
  roles: { cache: roleCache, everyone: roleCache.get('G1') }, members: { me: { id: 'bot', roles: { highest: { position: 99 } } } } };
function membre(id, nom) {
  const r = new Set();
  return { id, guild, displayName: nom, user: { id, username: nom, bot: false, displayAvatarURL: () => 'https://x/a.png' },
    roles: { cache: { has: (x) => r.has(x) }, add: async (l) => [].concat(l).forEach(x => r.add(x)), remove: async (l) => [].concat(l).forEach(x => r.delete(x)), _set: r },
    send: async () => {} };
}
const client = { guilds: { cache: new Collection([[guild.id, guild]]) }, channels: { cache: new Collection([[general.id, general]]) }, user: { id: 'bot', username: 'Hive & Tools', displayAvatarURL: () => '' }, ws: { ping: 42 } };

(async () => {
  await reglages.set('G1', { niveaux: { actif: true, recompenses: [{ niveau: 1, role: 'r5' }, { niveau: 3, role: 'r10' }], cumuler: false }, logs: { actif: true, salon: 'c-logs' } });

  /* niveaux : montée de niveau, annonce et rôles récompenses */
  const kuro = membre('u-kuro', 'Kuro');
  const reponses = [];
  const inter = (nom, opts, sous) => ({ commandName: nom, guildId: 'G1', guild, channelId: 'c-gen', channel: general, user: { id: 'owner', username: 'Owner' }, member: membre('owner', 'Owner'), client,
    options: { getSubcommand: () => sous, getUser: (k) => (opts[k] ? opts[k].user : null), getInteger: (k) => opts[k] ?? null, getString: (k) => opts[k] ?? null, getChannel: () => null, getFocused: () => '' },
    reply: async (m) => reponses.push(m), deferReply: async () => {}, editReply: async (m) => reponses.push(m), followUp: async (m) => reponses.push(m), update: async (m) => reponses.push(m) });
  guild.members.fetch = async (id) => (id === kuro.id ? kuro : null);
  await serveurs.commande(inter('xp', { membre: kuro, niveau: 3 }, 'niveau'));
  assert(kuro.roles._set.has('r10') && !kuro.roles._set.has('r5'), 'récompense niveau 3 (sans cumul)');
  await serveurs.commande(inter('rang', { membre: kuro }));
  const rang = reponses.pop().embeds[0].data;
  assert(rang.fields.find(f => f.name === 'Niveau').value.includes('3'));
  console.log('✓ niveaux : /xp niveau 3 → rôle récompense, /rang affiche niveau 3');

  /* giveaway : lancement, participation, tirage */
  const { g, m } = await giveaways.lancerGiveaway(guild, 'c-gen', { lot: 'Diamond Mask', dureeMs: 60000, gagnants: 1, par: 'test' });
  const clic = (uid) => ({ customId: `gw:${g.id}`, guildId: 'G1', user: { id: uid }, update: async () => {}, followUp: async (x) => reponses.push(x), reply: async (x) => reponses.push(x) });
  await giveaways.bouton(clic('a')); await giveaways.bouton(clic('b')); await giveaways.bouton(clic('b'));
  const gg = (await db.lire('bot_giveaways', { id: g.id }))[0];
  assert.deepStrictEqual(gg.participants, ['a'], 'participer / se retirer');
  await db.modifier('bot_giveaways', { id: g.id }, { fin: new Date(Date.now() - 1000).toISOString() });
  await serveurs.commande(inter('giveaway', {}, 'terminer'));
  const fin = (await db.lire('bot_giveaways', { id: g.id }))[0];
  assert(fin.termine && fin.gagnants_ids[0] === 'a');
  assert(envoyes.some(e => e.content && e.content.includes('<@a>') && e.content.includes('Diamond Mask')));
  void m;
  console.log('✓ giveaway : bouton participer/retirer, tirage et annonce du gagnant');

  /* sondage */
  const msgS = await giveaways.lancerSondage(guild, 'c-gen', { question: 'Quelle ruche ?', options: ['Rouge', 'Bleue', 'Blanche'] });
  const sid = msgS.components[0].components[0].data.custom_id.split(':')[1];
  let vu = null;
  await giveaways.bouton({ customId: `sd:${sid}:1`, guildId: 'G1', user: { id: 'a' }, update: async (x) => { vu = x; } });
  assert(vu.embeds[0].data.description.includes('100 %'), 'vote compté');
  console.log('✓ sondage : vote compté et affiché');

  /* rôles à boutons */
  await reglages.set('G1', { rolesBoutons: { panneaux: [{ id: 'p1', titre: 'Ta ruche', salon: 'c-gen', mode: 'unique', roles: [{ role: 'rRouge', label: 'Rouge', emoji: '🔴' }, { role: 'r5', label: 'Test' }] }] } });
  const pm = await roles.publier(guild, 'p1');
  assert(pm.components[0].components.length === 2);
  assert.strictEqual(reglages.get('G1').rolesBoutons.panneaux[0].messageId, pm.id, 'messageId mémorisé');
  const bob = membre('u-bob', 'Bob'); bob.roles._set.add('r5');
  await roles.bouton({ customId: 'rb:p1:rRouge', guildId: 'G1', guild, member: bob, reply: async (x) => reponses.push(x) });
  assert(bob.roles._set.has('rRouge') && !bob.roles._set.has('r5'), 'mode unique : retire les autres rôles du panneau');
  console.log('✓ rôles à boutons : publication, mémorisation, mode unique');

  /* action du dashboard : annonce */
  const r = await synchro.executerAction(client, { guild_id: 'G1', type: 'annonce', donnees: { salon: 'c-gen', message: 'Maj ce soir sur {serveur} !', embed: true, titre: 'Annonce' } }, {});
  assert(r.startsWith('annonce envoyée') && envoyes.some(e => e.embeds && e.embeds[0].data.description === 'Maj ce soir sur Serveur test !'));
  const inst = synchro.instantane({ ...guild, channels: { cache: guild.channels.cache.filter(() => true) }, roles: { cache: roleCache }, iconURL: () => null });
  assert(inst.salons.length === 2 && inst.roles.length === 3 && inst.roles[0].nom === 'Ruche rouge');
  console.log('✓ dashboard : action « annonce » et instantané des salons/rôles');

  /* embeds : publication puis modification du même message */
  guild.client = client;
  const mods = { embeds: require('../src/serveurs/embeds'), economie: require('../src/serveurs/economie') };
  await reglages.set('G1', { embeds: { modeles: [{ id: 'e1', salon: 'c-gen', titre: 'Les rôles', description: '<@&rRouge> — ruche rouge', couleur: '#ff0000' }] } });
  const r1 = await synchro.executerAction(client, { guild_id: 'G1', type: 'publier_embed', donnees: { id: 'e1' } }, mods);
  const id1 = reglages.get('G1').embeds.modeles[0].messageId;
  assert(r1.startsWith('embed publié') && id1, r1);
  await reglages.remplacer('G1', ['embeds', 'modeles'], [{ ...reglages.get('G1').embeds.modeles[0], titre: 'Les rôles (v2)' }]);
  const n = envoyes.length;
  const r2 = await synchro.executerAction(client, { guild_id: 'G1', type: 'publier_embed', donnees: { id: 'e1' } }, mods);
  assert(r2.startsWith('embed mis à jour') && envoyes.length === n, 'mise à jour sans nouveau message');
  assert.strictEqual((await general.messages.fetch(id1)).embeds[0].data.title, 'Les rôles (v2)');
  const r3 = await synchro.executerAction(client, { guild_id: 'G1', type: 'publier_embed', donnees: { id: 'e1', nouveau: true } }, mods);
  assert(r3.startsWith('embed publié') && envoyes.length === n + 1);
  console.log('✓ embeds : publication, modification du message existant, copie');

  /* boutique : publication avec menu d'achat, puis achat via le menu */
  await reglages.set('G1', { economie: { actif: true, depart: 1000, boutique: { articles: [{ id: 'a1', type: 'role', nom: 'Ruche rouge', prix: 300, role: 'rRouge', actif: true, emoji: '🔴' }] } } });
  const rb = await synchro.executerAction(client, { guild_id: 'G1', type: 'publier_boutique', donnees: { salon: 'c-gen' } }, mods);
  const pub = envoyes[envoyes.length - 1];
  assert(rb.startsWith('boutique publiée') && pub.components[0].components[0].data.custom_id === 'eco:acheter', rb);
  const zoe = membre('zoe', 'Zoé'); let rep = null;
  await serveurs.menu({ customId: 'eco:acheter', values: ['a1'], member: zoe, reply: async (x) => { rep = x; } });
  assert(/✅/.test(rep.content) && zoe.roles._set.has('rRouge'), rep && rep.content);
  console.log('✓ boutique : publication avec menu, achat d\'un rôle depuis le menu');

  /* commandes d'argent */
  const cmd = async (nom, opts = {}, user = zoe) => { let out = null; const i = { commandName: nom, guildId: 'G1', guild, member: user, user: user.user,
    options: { getUser: (k) => opts[k] || null, getInteger: (k) => opts[k], getString: (k) => opts[k], getSubcommand: () => opts.sous },
    reply: async (x) => { out = x; } }; assert(await serveurs.commande(i), nom); return out; };
  const d1 = await cmd('daily'); assert(/reçois/.test(d1.content), d1.content);
  assert(/Reviens/.test((await cmd('daily')).content));
  const t1 = await cmd('travail'); assert(/💼/.test(t1.content) && !/\{gain\}/.test(t1.content), t1.content);
  const bob2 = membre('bob2', 'Bob');
  const p1 = await cmd('payer', { membre: bob2.user, montant: 100 }); assert(/a donné/.test(p1.content), p1.content);
  assert(/n'as que/.test((await cmd('payer', { membre: bob2.user, montant: 1e9 })).content));
  assert((await cmd('solde')).embeds[0].data.description.includes('Solde'));
  assert((await cmd('inventaire')).embeds[0].data.description.includes('Ruche rouge'));
  await cmd('argent', { sous: 'definir', membre: bob2.user, montant: 42 });
  assert.strictEqual((await mods.economie.compte('G1', 'bob2')).solde, 42);
  const top = await cmd('richesse'); assert(top.embeds[0].data.description.includes('<@zoe>'));
  console.log('✓ argent : /daily (et délai), /travail, /payer, /solde, /inventaire, /argent, /richesse');

  await niveaux.vider();
  await new Promise(r2 => setTimeout(r2, 700));
  fs.unlinkSync(base);
  if (sauvegarde) fs.renameSync(base + '.sim', base);
  console.log('Simulation réussie.');
  process.exit(0);
})().catch(e => { console.error('✗', e.stack); try { if (sauvegarde) fs.renameSync(base + '.sim', base); } catch (x) { /* */ } process.exit(1); });
