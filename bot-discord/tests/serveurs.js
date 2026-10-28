'use strict';
/* Tests hors ligne des modules « gestion de serveur » (sans Discord ni Supabase). */
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
process.env.SUPABASE_URL = ''; process.env.SUPABASE_CLE_SECRETE = '';
const DATA = path.join(__dirname, '..', 'data');
const base = path.join(DATA, 'base-locale.json');
const sauvegarde = fs.existsSync(base) ? fs.readFileSync(base) : null;
if (sauvegarde) fs.renameSync(base, base + '.test');

const db = require('../src/stockage');
const reglages = require('../src/serveurs/reglages');
const serveurs = require('../src/serveurs');
const { duree, dureeTexte, variables } = require('../src/serveurs/aide-discord');
const { niveauDe, xpTotalPour } = require('../src/serveurs/niveaux');
const cfg = require('../src/config');

(async () => {
  assert.strictEqual(db.initialiser(), 'local');
  /* commandes */
  const defs = serveurs.commandes();
  const noms = defs.map(d => d.name);
  assert(new Set(noms).size === noms.length, 'commande en double');
  defs.forEach(d => { assert(/^[a-z0-9_-]{1,32}$/.test(d.name), d.name); assert(d.description.length <= 100, d.name);
    (d.options || []).forEach(o => { assert(o.description.length <= 100 && o.description.length > 0, `${d.name}.${o.name}`); (o.options || []).forEach(x => assert(x.description.length <= 100, `${d.name}.${o.name}.${x.name}`)); }); });
  console.log(`✓ ${defs.length} commandes de gestion : ${noms.map(n => '/' + n).join(' ')}`);

  /* réglages : valeurs par défaut, fusion, remplacement */
  const G = 'test-guild';
  assert.strictEqual(reglages.get(G).niveaux.xpMin, 15);
  await reglages.set(G, { niveaux: { actif: true, recompenses: [{ niveau: 5, role: 'r1' }] } });
  assert(reglages.get(G).niveaux.actif && reglages.get(G).niveaux.xpMax === 25 && reglages.get(G).niveaux.recompenses.length === 1);
  await cfg.ajouterSalon(G, 'c1', 'questions'); await cfg.ajouterSalon(G, 'c2', 'tout');
  cfg.retirerSalon(G, 'c1');
  await new Promise(r => setTimeout(r, 50));
  assert.deepStrictEqual(Object.keys(reglages.get(G).ia.salons), ['c2'], 'retirer un salon doit vraiment le retirer');
  console.log('✓ réglages : défauts, fusion, retrait de salon');

  /* outils */
  assert.strictEqual(duree('10m'), 600000); assert.strictEqual(duree('2h30'), 7200000 + 0 || 7200000); assert.strictEqual(duree('1j'), 86400000); assert.strictEqual(duree('90'), 5400000);
  assert.strictEqual(duree('abc'), null); assert.strictEqual(dureeTexte(90061000), '1 j 1 h 1 min');
  assert.strictEqual(variables('Salut {membre} sur {serveur} ({compte})', { membre: { id: '42', username: 'kuro', displayName: 'Kuro' }, guild: { name: 'BSS', memberCount: 12 } }), 'Salut <@42> sur BSS (12)');
  assert.strictEqual(niveauDe(0).niveau, 0); assert.strictEqual(niveauDe(100).niveau, 1); assert.strictEqual(niveauDe(xpTotalPour(10)).niveau, 10); assert.strictEqual(niveauDe(xpTotalPour(10) - 1).niveau, 9);
  console.log('✓ durées, variables, courbe d\'XP');

  /* stockage local : sanctions, giveaways */
  const s = await db.ajouter('bot_sanctions', { guild_id: G, type: 'warn', cible_id: 'u1', raison: 'test' });
  await db.ajouter('bot_sanctions', { guild_id: G, type: 'warn', cible_id: 'u1', raison: 'test 2' });
  assert.strictEqual((await db.lire('bot_sanctions', { guild_id: G, cible_id: 'u1', type: 'warn' })).length, 2);
  await db.modifier('bot_sanctions', { id: s.id }, { raison: 'modifiée' });
  assert.strictEqual((await db.lire('bot_sanctions', { id: s.id }))[0].raison, 'modifiée');
  await db.enregistrer('bot_niveaux', [{ guild_id: G, user_id: 'a', xp: 50 }, { guild_id: G, user_id: 'b', xp: 500 }]);
  await db.enregistrer('bot_niveaux', { guild_id: G, user_id: 'a', xp: 900 });
  const top = await db.lire('bot_niveaux', { guild_id: G }, { ordre: 'xp', desc: true });
  assert.deepStrictEqual(top.map(x => x.user_id), ['a', 'b']);
  console.log('✓ stockage local : ajout, lecture filtrée, mise à jour, classement');
  /* embeds */
  const embeds = require('../src/serveurs/embeds');
  const g0 = { id: G, name: 'Ruche', memberCount: 5 };
  const msg = embeds.construire({ titre: 'Rôles de {serveur}', description: '<@&1> — modo', couleur: '#F4C542', champs: [{ nom: 'A', valeur: 'b', ligne: true }, { nom: '', valeur: '' }], image: 'pas une url', pied: 'pied', horodatage: true }, g0);
  const e0 = msg.embeds[0].toJSON();
  assert.strictEqual(e0.title, 'Rôles de Ruche'); assert.strictEqual(e0.color, 0xF4C542); assert.strictEqual(e0.fields.length, 1); assert(e0.fields[0].inline);
  assert(!e0.image, 'une image invalide est ignorée'); assert(e0.timestamp); assert.deepStrictEqual(msg.allowedMentions.parse, []);
  assert.throws(() => embeds.construire({}, g0), /vide/);
  assert.strictEqual(embeds.construire({ contenu: 'juste du texte' }, g0).embeds.length, 0);
  console.log('✓ embeds : construction, champs vides ignorés, liens vérifiés, embed vide refusé');

  /* économie */
  const eco = require('../src/serveurs/economie');
  await reglages.set(G, { economie: { actif: true, depart: 100, boutique: { articles: [
    { id: 'r', type: 'role', nom: 'Ruche rouge', prix: 150, role: 'R', actif: true },
    { id: 'o', type: 'objet', nom: 'Code', prix: 20, stock: 2, max: 1, actif: true },
    { id: 'x', type: 'objet', nom: 'Caché', prix: 1, actif: false }] } } });
  const roles = new Map([['R', { id: 'R', position: 1, managed: false }]]);
  const guild = { id: G, name: 'Ruche', roles: { cache: roles }, members: { me: { roles: { highest: { position: 5 } } }, fetch: async () => null }, channels: { cache: new Map() } };
  const membre = (id) => { const mr = new Map(); return { id, guild, user: { id, username: 'u' + id, displayAvatarURL: () => '' }, roles: { cache: mr, add: async (r) => mr.set(r, 1) } }; };
  const kuro = membre('k');
  assert.strictEqual((await eco.compte(G, 'k')).solde, 100, 'solde de départ');
  assert(/manque/.test(await eco.acheter(kuro, 'r')), 'pas assez d\'argent');
  (await eco.compte(G, 'k')).solde = 200;
  assert(/✅/.test(await eco.acheter(kuro, 'r'))); assert(kuro.roles.cache.has('R')); assert.strictEqual((await eco.compte(G, 'k')).solde, 50);
  assert(/déjà le rôle/.test(await eco.acheter(kuro, 'r')));
  assert(/✅/.test(await eco.acheter(kuro, 'o'))); assert.strictEqual(reglages.get(G).economie.boutique.articles.find(a => a.id === 'o').stock, 1, 'stock décrémenté');
  assert(/maximum/.test(await eco.acheter(kuro, 'o')));
  assert(/n'existe pas/.test(await eco.acheter(kuro, 'x')), 'article désactivé invisible');
  const mimi = membre('m'); (await eco.compte(G, 'm')).solde = 500;
  assert(/✅/.test(await eco.acheter(mimi, 'o')));
  assert(/épuisé/.test(await eco.acheter(membre('z'), 'o')));
  /* deux achats simultanés ne doivent pas dépasser le stock */
  await reglages.remplacer(G, ['economie', 'boutique', 'articles'], [{ id: 's', type: 'objet', nom: 'Rare', prix: 1, stock: 1, actif: true }]);
  const res = await Promise.all(['p1', 'p2', 'p3'].map(id => eco.acheter(membre(id), 's')));
  assert.strictEqual(res.filter(r => r.startsWith('✅')).length, 1, 'un seul achat pour un stock de 1');
  assert.strictEqual(await eco.actionDashboard(guild, { user: 'k', op: 'definir', montant: 1234 }).then(() => eco.compte(G, 'k')).then(l => l.solde), 1234);
  await eco.vider();
  assert((await db.lire('bot_achats', { guild_id: G })).length >= 4, 'achats enregistrés');
  console.log('✓ économie : départ, achats rôle/objet, stock, maximum, achats simultanés, correction dashboard');

  await new Promise(r => setTimeout(r, 700));
  fs.unlinkSync(base);
  if (sauvegarde) fs.renameSync(base + '.test', base);
  console.log('Tests des modules de gestion passés.');
  process.exit(0);
})().catch(e => { console.error('✗', e.message); if (sauvegarde) try { fs.renameSync(base + '.test', base); } catch (x) { /* */ } process.exit(1); });
