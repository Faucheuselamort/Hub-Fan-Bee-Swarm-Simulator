'use strict';
/* Économie : une monnaie par serveur (🍯 Miel par défaut), gagnée en écrivant,
   avec /daily et /travail ; dépensée dans une boutique de rôles et d'objets
   réglée depuis le dashboard. Le bot est le seul à écrire les soldes : le
   dashboard passe par des actions (table bot_actions) pour les corriger. */
const {
  SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder, Events,
  ActionRowBuilder, StringSelectMenuBuilder,
} = require('discord.js');
const reglages = require('./reglages');
const db = require('../stockage');
const { couleur, journal } = require('./aide-discord');

/* ---------- comptes (cache mémoire, écrit dans la base toutes les 15 s) ---------- */
const cache = new Map();      // `${gid}:${uid}` → ligne
const sales = new Set();
const derniers = new Map();   // dernier gain par message

async function compte(gid, uid, user = null) {
  const k = `${gid}:${uid}`;
  let l = cache.get(k);
  if (!l) {
    try { l = (await db.lire('bot_economie', { guild_id: gid, user_id: uid }))[0]; } catch (e) { /* hors ligne */ }
    if (!l) { l = { guild_id: gid, user_id: uid, solde: Math.max(0, +reglages.get(gid).economie.depart || 0), gagne: 0, depense: 0, inventaire: {}, serie: 0 }; sales.add(k); }
    l.solde = +l.solde || 0; l.gagne = +l.gagne || 0; l.depense = +l.depense || 0; l.inventaire = l.inventaire || {};
    cache.set(k, l);
  }
  if (user) { l.nom = user.username; l.avatar = user.displayAvatarURL({ size: 128 }); }
  return l;
}
function crediter(l, n, gagne = true) {
  l.solde = Math.max(0, Math.round(l.solde + n));
  if (n > 0 && gagne) l.gagne += Math.round(n);
  sales.add(`${l.guild_id}:${l.user_id}`);
}
async function vider() {
  if (!sales.size) return;
  const lignes = [...sales].map(k => ({ ...cache.get(k), maj: new Date().toISOString() }));
  sales.clear();
  try { await db.enregistrer('bot_economie', lignes); } catch (e) { console.warn('[économie]', e.message); lignes.forEach(l => sales.add(`${l.guild_id}:${l.user_id}`)); }
}

/* une seule opération à la fois par serveur (achats, stock, paiements) */
const files = new Map();
function enFile(gid, f) { const p = (files.get(gid) || Promise.resolve()).then(f, f); files.set(gid, p.catch(() => {})); return p; }

const cfg = (gid) => reglages.get(gid).economie;
const fmt = (gid, n) => { const c = cfg(gid); return `${c.emoji ? c.emoji + ' ' : ''}**${Math.round(n).toLocaleString('fr-FR')}** ${c.nom}`; };
const hasard = (min, max) => { min = Math.max(0, +min || 0); max = Math.max(min, +max || 0); return min + Math.floor(Math.random() * (max - min + 1)); };
function attente(ms) {
  const m = Math.ceil(ms / 60000); if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60), r = m % 60; return r ? `${h} h ${r} min` : `${h} h`;
}

/* ---------- boutique ---------- */
const articles = (gid) => (cfg(gid).boutique.articles || []).filter(a => a && a.nom && a.actif !== false);
const enStock = (a) => a.stock == null || a.stock === '' || +a.stock < 0 || +a.stock > 0;

function embedBoutique(guild) {
  const c = cfg(guild.id), l = articles(guild.id);
  const e = new EmbedBuilder().setColor(couleur(c.boutique.couleur)).setTitle(c.boutique.titre || '🛒 Boutique')
    .setDescription((c.boutique.description ? c.boutique.description + '\n\n' : '') + (l.length ? '' : '*La boutique est vide pour le moment.*'));
  l.slice(0, 25).forEach(a => {
    const stock = +a.stock >= 0 && a.stock !== '' && a.stock != null ? ` · ${+a.stock > 0 ? `${a.stock} en stock` : '**épuisé**'}` : '';
    const role = a.type === 'role' && a.role ? `\nDonne le rôle <@&${a.role}>` : '';
    e.addFields({ name: `${a.emoji ? a.emoji + ' ' : ''}${a.nom} — ${fmt(guild.id, a.prix).replace(/\*\*/g, '')}`, value: `${a.description || '​'}${role}${stock}`.slice(0, 1024) });
  });
  e.setFooter({ text: 'Choisis un article dans le menu pour l\'acheter · /solde pour voir ton argent' });
  return e;
}
function menuBoutique(guild) {
  const l = articles(guild.id).filter(enStock).slice(0, 25);
  if (!l.length) return [];
  return [new ActionRowBuilder().addComponents(new StringSelectMenuBuilder().setCustomId('eco:acheter').setPlaceholder('🛒 Acheter un article…')
    .addOptions(l.map(a => ({ label: a.nom.slice(0, 100), value: a.id, description: `${Math.round(a.prix).toLocaleString('fr-FR')} ${cfg(guild.id).nom}`.slice(0, 100), emoji: emojiValide(a.emoji) })))) ];
}
function emojiValide(e) {
  const s = String(e || '').trim(); if (!s) return undefined;
  const m = /^<a?:(\w+):(\d+)>$/.exec(s); if (m) return { id: m[2], name: m[1] };
  return /\p{Extended_Pictographic}/u.test(s) && s.length <= 8 ? s : undefined;
}

async function publierBoutique(guild, salonId) {
  const salon = guild.channels.cache.get(salonId) || await guild.channels.fetch(salonId).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  const c = cfg(guild.id).boutique;
  const msg = { embeds: [embedBoutique(guild)], components: menuBoutique(guild) };
  if (c.messageId && c.salonPublie === salon.id) {
    const ancien = await salon.messages.fetch(c.messageId).catch(() => null);
    if (ancien) { await ancien.edit(msg); return ancien; }
  }
  const m = await salon.send(msg);
  await reglages.set(guild.id, { economie: { boutique: { messageId: m.id, salonPublie: salon.id } } });
  return m;
}
/* le message de boutique publié est remis à jour après un achat (stock) */
async function rafraichirBoutique(guild) {
  const c = cfg(guild.id).boutique;
  if (!c.messageId || !c.salonPublie) return;
  const salon = guild.channels.cache.get(c.salonPublie);
  const m = salon && await salon.messages.fetch(c.messageId).catch(() => null);
  if (m) await m.edit({ embeds: [embedBoutique(guild)], components: menuBoutique(guild) }).catch(() => {});
}

/* achat : renvoie le texte de réponse (erreur lisible ou confirmation) */
function acheter(membre, articleId) {
  const g = membre.guild;
  return enFile(g.id, async () => {
    const c = cfg(g.id);
    if (!c.actif) return '❌ L\'économie est désactivée sur ce serveur.';
    const a = articles(g.id).find(x => x.id === articleId || x.nom.toLowerCase() === String(articleId).toLowerCase());
    if (!a) return '❌ Cet article n\'existe pas (ou plus).';
    if (!enStock(a)) return `❌ **${a.nom}** est épuisé.`;
    const l = await compte(g.id, membre.id, membre.user);
    const possede = +(l.inventaire[a.id] || 0);
    if (a.type === 'role') {
      if (!a.role || !g.roles.cache.has(a.role)) return '❌ Le rôle de cet article n\'existe plus. Préviens le staff.';
      if (membre.roles.cache.has(a.role)) return `❌ Tu as déjà le rôle <@&${a.role}>.`;
      const r = g.roles.cache.get(a.role), moi = g.members.me;
      if (r.managed || !moi || r.position >= moi.roles.highest.position) return '❌ Je ne peux pas donner ce rôle (il est au-dessus du mien). Préviens le staff.';
    } else if (+a.max > 0 && possede >= +a.max) return `❌ Tu as déjà le maximum de **${a.nom}** (${a.max}).`;
    if (a.roleRequis && !membre.roles.cache.has(a.roleRequis)) return `❌ Il faut le rôle <@&${a.roleRequis}> pour acheter **${a.nom}**.`;
    const prix = Math.max(0, Math.round(+a.prix || 0));
    if (l.solde < prix) return `❌ Il te manque ${fmt(g.id, prix - l.solde)} pour acheter **${a.nom}** (tu as ${fmt(g.id, l.solde)}).`;

    if (a.type === 'role') await membre.roles.add(a.role, `Achat boutique : ${a.nom}`);
    crediter(l, -prix); l.depense += prix;
    l.inventaire = { ...l.inventaire, [a.id]: possede + 1 };
    if (+a.stock > 0) {
      const liste = (c.boutique.articles || []).map(x => (x.id === a.id ? { ...x, stock: +x.stock - 1 } : x));
      await reglages.remplacer(g.id, ['economie', 'boutique', 'articles'], liste);
    }
    await vider();
    db.ajouter('bot_achats', { guild_id: g.id, user_id: membre.id, nom: membre.user.username, article: a.nom, article_id: a.id, prix, date: new Date().toISOString() }).catch(() => {});
    journal(g, null, new EmbedBuilder().setColor(0xF4C542).setTitle('🛒 Achat').setDescription(`<@${membre.id}> a acheté **${a.nom}** pour ${fmt(g.id, prix)}.`)).catch(() => {});
    if (+a.stock > 0) rafraichirBoutique(g);
    const extra = a.type === 'role' ? `\nTu as reçu le rôle <@&${a.role}> 🎉` : (a.message ? `\n${a.message}` : '');
    return `✅ Tu as acheté **${a.emoji ? a.emoji + ' ' : ''}${a.nom}** pour ${fmt(g.id, prix)}. Il te reste ${fmt(g.id, l.solde)}.${extra}`;
  });
}

/* ---------- gains en écrivant ---------- */
function evenements(client) {
  client.on(Events.MessageCreate, async (m) => {
    if (m.author.bot || !m.guild || !m.member) return;
    const c = cfg(m.guild.id);
    if (!c.actif || !c.messages.actif) return;
    if ((c.salonsIgnores || []).includes(m.channelId) || (m.channel.parentId && (c.salonsIgnores || []).includes(m.channel.parentId))) return;
    const k = `${m.guild.id}:${m.author.id}`, t = Date.now();
    if (t - (derniers.get(k) || 0) < (+c.messages.delai || 60) * 1000) return;
    derniers.set(k, t);
    crediter(await compte(m.guild.id, m.author.id, m.author), hasard(c.messages.min, c.messages.max));
  });
  setInterval(vider, 15000);
}

/* ---------- commandes ---------- */
function commandes() {
  const membre = (o, req = false) => o.setName('membre').setDescription('Le membre').setRequired(req);
  return [
    new SlashCommandBuilder().setName('solde').setDescription('Ton argent (ou celui d\'un membre)').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'balance', 'en-GB': 'balance' }).addUserOption(o => membre(o)),
    new SlashCommandBuilder().setName('daily').setDescription('Ta récompense quotidienne').setContexts(InteractionContextType.Guild),
    new SlashCommandBuilder().setName('travail').setDescription('Travailler pour gagner de l\'argent').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'work', 'en-GB': 'work' }),
    new SlashCommandBuilder().setName('payer').setDescription('Donner de l\'argent à un membre').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'pay', 'en-GB': 'pay' })
      .addUserOption(o => membre(o, true)).addIntegerOption(o => o.setName('montant').setDescription('Combien').setRequired(true).setMinValue(1)),
    new SlashCommandBuilder().setName('richesse').setDescription('Les membres les plus riches').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'richest', 'en-GB': 'richest' }),
    new SlashCommandBuilder().setName('boutique').setDescription('Voir la boutique du serveur').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'shop', 'en-GB': 'shop' }),
    new SlashCommandBuilder().setName('acheter').setDescription('Acheter un article de la boutique').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'buy', 'en-GB': 'buy' })
      .addStringOption(o => o.setName('article').setDescription('L\'article').setRequired(true).setAutocomplete(true)),
    new SlashCommandBuilder().setName('inventaire').setDescription('Tes achats (ou ceux d\'un membre)').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'inventory', 'en-GB': 'inventory' }).addUserOption(o => membre(o)),
    new SlashCommandBuilder().setName('argent').setDescription('Gérer l\'argent d\'un membre').setContexts(InteractionContextType.Guild)
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
      .addSubcommand(s => s.setName('ajouter').setDescription('Donner de l\'argent').addUserOption(o => membre(o, true)).addIntegerOption(o => o.setName('montant').setDescription('Montant').setRequired(true).setMinValue(1)))
      .addSubcommand(s => s.setName('retirer').setDescription('Retirer de l\'argent').addUserOption(o => membre(o, true)).addIntegerOption(o => o.setName('montant').setDescription('Montant').setRequired(true).setMinValue(1)))
      .addSubcommand(s => s.setName('definir').setDescription('Fixer le solde').addUserOption(o => membre(o, true)).addIntegerOption(o => o.setName('montant').setDescription('Nouveau solde').setRequired(true).setMinValue(0))),
  ].map(c => c.toJSON());
}
const NOMS = ['solde', 'daily', 'travail', 'payer', 'richesse', 'boutique', 'acheter', 'inventaire', 'argent'];
const prive = (i, content) => i.reply({ content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });

async function commande(i) {
  if (!NOMS.includes(i.commandName)) return false;
  const gid = i.guildId, c = cfg(gid);
  if (!c.actif && i.commandName !== 'argent') { await prive(i, 'L\'économie est désactivée sur ce serveur (dashboard).'); return true; }

  switch (i.commandName) {
    case 'solde': {
      const u = i.options.getUser('membre') || i.user, l = await compte(gid, u.id);
      const e = new EmbedBuilder().setColor(0xF4C542).setAuthor({ name: u.username, iconURL: u.displayAvatarURL() })
        .setDescription(`Solde : ${fmt(gid, l.solde)}`).addFields({ name: 'Gagné au total', value: fmt(gid, l.gagne), inline: true }, { name: 'Dépensé', value: fmt(gid, l.depense), inline: true });
      await i.reply({ embeds: [e] }); return true;
    }
    case 'daily': {
      const l = await compte(gid, i.user.id, i.user), t = Date.now(), dernier = l.daily ? new Date(l.daily).getTime() : 0;
      const reste = dernier + 22 * 36e5 - t;                       // un peu de marge sur 24 h
      if (reste > 0) { await prive(i, `⏳ Reviens dans **${attente(reste)}** pour ta récompense quotidienne.`); return true; }
      l.serie = t - dernier < 48 * 36e5 ? (+l.serie || 0) + 1 : 1;
      const bonus = Math.min(l.serie - 1, 6) * (+c.daily.bonusSerie || 0);
      const gain = Math.max(0, +c.daily.montant || 0) + bonus;
      l.daily = new Date(t).toISOString(); crediter(l, gain); await vider();
      await i.reply({ content: `🎁 Tu reçois ${fmt(gid, gain)}${bonus ? ` (dont ${fmt(gid, bonus)} de bonus pour **${l.serie} jours** d'affilée 🔥)` : ''}. Solde : ${fmt(gid, l.solde)}.` });
      return true;
    }
    case 'travail': {
      const l = await compte(gid, i.user.id, i.user), t = Date.now(), dernier = l.travail ? new Date(l.travail).getTime() : 0;
      const reste = dernier + (+c.travail.delai || 60) * 60000 - t;
      if (reste > 0) { await prive(i, `⏳ Tu es fatigué ! Retravaille dans **${attente(reste)}**.`); return true; }
      const gain = hasard(c.travail.min, c.travail.max);
      const phrases = (c.travail.phrases || []).filter(Boolean);
      const phrase = (phrases[Math.floor(Math.random() * phrases.length)] || 'Tu as travaillé dur et gagné {gain}.').replace(/\{gain\}/g, fmt(gid, gain));
      l.travail = new Date(t).toISOString(); crediter(l, gain); await vider();
      await i.reply({ content: `💼 ${phrase}` });
      return true;
    }
    case 'payer': {
      const u = i.options.getUser('membre'), n = i.options.getInteger('montant');
      if (u.bot || u.id === i.user.id) { await prive(i, '❌ Choisis un autre membre.'); return true; }
      const texte = await enFile(gid, async () => {
        const a = await compte(gid, i.user.id, i.user);
        if (a.solde < n) return `❌ Tu n'as que ${fmt(gid, a.solde)}.`;
        const b = await compte(gid, u.id, u);
        crediter(a, -n); crediter(b, n, false); await vider();
        return `💸 <@${i.user.id}> a donné ${fmt(gid, n)} à <@${u.id}>.`;
      });
      await i.reply({ content: texte, allowedMentions: { users: [u.id] } });
      return true;
    }
    case 'richesse': {
      await vider();
      const top = await db.lire('bot_economie', { guild_id: gid }, { ordre: 'solde', desc: true, limite: 10 });
      const med = ['🥇', '🥈', '🥉'];
      const e = new EmbedBuilder().setColor(0xF4C542).setTitle(`💰 Les plus riches de ${i.guild.name}`)
        .setDescription(top.length ? top.map((l, k) => `${med[k] || `**${k + 1}.**`} <@${l.user_id}> · ${fmt(gid, +l.solde)}`).join('\n') : 'Personne n\'a encore d\'argent.');
      await i.reply({ embeds: [e], allowedMentions: { parse: [] } });
      return true;
    }
    case 'boutique': await i.reply({ embeds: [embedBoutique(i.guild)], components: menuBoutique(i.guild), flags: MessageFlags.Ephemeral }); return true;
    case 'acheter': await prive(i, await acheter(i.member, i.options.getString('article'))); return true;
    case 'inventaire': {
      const u = i.options.getUser('membre') || i.user, l = await compte(gid, u.id);
      const tous = cfg(gid).boutique.articles || [];
      const lignes = Object.entries(l.inventaire || {}).filter(([, q]) => q > 0).map(([id, q]) => { const a = tous.find(x => x.id === id); return `${a && a.emoji ? a.emoji + ' ' : '• '}**${a ? a.nom : 'article retiré'}** × ${q}`; });
      const e = new EmbedBuilder().setColor(0x8FE86B).setAuthor({ name: `Inventaire de ${u.username}`, iconURL: u.displayAvatarURL() }).setDescription(lignes.join('\n') || 'Rien pour le moment. Va voir la /boutique !');
      await i.reply({ embeds: [e], flags: u.id === i.user.id ? MessageFlags.Ephemeral : undefined });
      return true;
    }
    case 'argent': {
      const u = i.options.getUser('membre'), n = i.options.getInteger('montant'), sous = i.options.getSubcommand();
      const l = await enFile(gid, () => ajuster(gid, u, sous, n));
      await prive(i, `✅ ${u.username} a maintenant ${fmt(gid, l.solde)}.`);
      return true;
    }
  }
  return false;
}

async function ajuster(gid, user, op, n) {
  const l = await compte(gid, user.id || user, user.id ? user : null);
  if (op === 'ajouter') crediter(l, n, false); else if (op === 'retirer') crediter(l, -n, false); else crediter(l, n - l.solde, false);
  await vider();
  return l;
}

/* action du dashboard : { user, op, montant } ; vider = remise à zéro des inventaires et soldes */
async function actionDashboard(guild, d) {
  return enFile(guild.id, async () => {
    if (d.op === 'tout_reinitialiser') {
      await vider();
      const l = await db.lire('bot_economie', { guild_id: guild.id });
      const depart = Math.max(0, +cfg(guild.id).depart || 0);
      l.forEach(x => cache.delete(`${guild.id}:${x.user_id}`));
      await db.supprimer('bot_economie', { guild_id: guild.id });
      return `${l.length} compte(s) remis à zéro (départ : ${depart})`;
    }
    const membre = await guild.members.fetch(d.user).catch(() => null);
    const l = await ajuster(guild.id, membre ? membre.user : d.user, d.op, Math.max(0, Math.round(+d.montant || 0)));
    return `${l.nom || d.user} : ${Math.round(l.solde).toLocaleString('fr-FR')} ${cfg(guild.id).nom}`;
  });
}

async function menu(i) {
  if (i.customId !== 'eco:acheter') return false;
  await i.reply({ content: await acheter(i.member, i.values[0]), flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
  return true;
}

async function autocompletion(i) {
  if (i.commandName !== 'acheter') return false;
  const v = i.options.getFocused().toLowerCase();
  await i.respond(articles(i.guildId).filter(a => a.nom.toLowerCase().includes(v)).slice(0, 25)
    .map(a => ({ name: `${a.nom} — ${Math.round(a.prix).toLocaleString('fr-FR')} ${cfg(i.guildId).nom}${enStock(a) ? '' : ' (épuisé)'}`.slice(0, 100), value: a.id })));
  return true;
}

module.exports = { nom: 'economie', commandes, commande, menu, autocompletion, evenements, publierBoutique, actionDashboard, acheter, compte, vider, embedBoutique };
