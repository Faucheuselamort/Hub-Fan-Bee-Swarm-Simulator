'use strict';
/* Niveaux & XP : de l'XP à chaque message (une fois par minute au plus),
   annonces de niveau, rôles récompenses, /rang, /classement, /xp. */
const { SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder, Events } = require('discord.js');
const reglages = require('./reglages');
const db = require('../stockage');
const { variables } = require('./aide-discord');

/* XP nécessaire pour passer du niveau n au niveau n+1 (même courbe que MEE6) */
const xpPalier = (n) => 5 * n * n + 50 * n + 100;
function niveauDe(xp) {
  let n = 0, reste = xp;
  while (reste >= xpPalier(n)) { reste -= xpPalier(n); n++; }
  return { niveau: n, dansNiveau: reste, palier: xpPalier(n) };
}
const xpTotalPour = (n) => { let t = 0; for (let k = 0; k < n; k++) t += xpPalier(k); return t; };

/* cache mémoire, écrit dans la base toutes les 20 s */
const cache = new Map();      // `${gid}:${uid}` → ligne
const sales = new Set();
const derniers = new Map();   // `${gid}:${uid}` → horodatage du dernier gain

async function ligne(gid, uid) {
  const k = `${gid}:${uid}`;
  /* relu toutes les 5 min (le dashboard peut avoir modifié l'XP) */
  if (cache.has(k) && (sales.has(k) || Date.now() - cache.get(k)._lu < 300000)) return cache.get(k);
  let l = null;
  try { l = (await db.lire('bot_niveaux', { guild_id: gid, user_id: uid }))[0]; } catch (e) { /* */ }
  l = l || { guild_id: gid, user_id: uid, xp: 0, niveau: 0, messages: 0 };
  l.xp = +l.xp || 0;
  Object.defineProperty(l, '_lu', { value: Date.now(), enumerable: false, writable: true });
  cache.set(k, l);
  return l;
}
async function vider() {
  if (!sales.size) return;
  const lignes = [...sales].map(k => ({ ...cache.get(k), maj: new Date().toISOString() }));
  sales.clear();
  try { await db.enregistrer('bot_niveaux', lignes); } catch (e) { console.warn('[niveaux]', e.message); lignes.forEach(l => sales.add(`${l.guild_id}:${l.user_id}`)); }
}

async function donnerXP(membre, quantite, salon) {
  const gid = membre.guild.id, c = reglages.get(gid).niveaux;
  const l = await ligne(gid, membre.id);
  const avant = l.niveau;
  l.xp = Math.max(0, l.xp + quantite);
  l.nom = membre.user.username; l.avatar = membre.user.displayAvatarURL({ size: 128 });
  l.niveau = niveauDe(l.xp).niveau;
  sales.add(`${gid}:${membre.id}`);
  if (l.niveau !== avant) await changementNiveau(membre, avant, l.niveau, c, salon);
  return l;
}

async function changementNiveau(membre, avant, apres, c, salon) {
  /* rôles récompenses */
  const recs = (c.recompenses || []).filter(r => r.role && membre.guild.roles.cache.has(r.role)).sort((a, b) => a.niveau - b.niveau);
  const merites = recs.filter(r => r.niveau <= apres);
  const aGarder = c.cumuler ? merites : merites.slice(-1);
  const ajouter = aGarder.map(r => r.role).filter(r => !membre.roles.cache.has(r));
  const retirer = recs.filter(r => !aGarder.includes(r) && membre.roles.cache.has(r.role)).map(r => r.role);
  if (ajouter.length) await membre.roles.add(ajouter, 'Récompense de niveau').catch(() => {});
  if (retirer.length) await membre.roles.remove(retirer, 'Récompense de niveau').catch(() => {});
  /* annonce (seulement à la montée) */
  if (apres <= avant || c.annonce === 'aucune') return;
  const texte = variables(c.message, { membre, guild: membre.guild, extra: { niveau: String(apres), ancien: String(avant) } });
  try {
    if (c.annonce === 'mp') await membre.send(texte);
    else {
      const cible = c.annonce === 'fixe' && c.salonAnnonce ? membre.guild.channels.cache.get(c.salonAnnonce) : salon;
      if (cible && cible.isTextBased()) await cible.send({ content: texte, allowedMentions: { users: [membre.id] } });
    }
  } catch (e) { /* salon fermé */ }
}

function evenements(client) {
  client.on(Events.MessageCreate, async (m) => {
    if (m.author.bot || !m.guild || !m.member) return;
    const c = reglages.get(m.guild.id).niveaux;
    if (!c.actif) return;
    if ((c.salonsIgnores || []).includes(m.channelId) || (m.channel.parentId && (c.salonsIgnores || []).includes(m.channel.parentId))) return;
    if ((c.rolesIgnores || []).some(r => m.member.roles.cache.has(r))) return;
    const k = `${m.guild.id}:${m.author.id}`, maintenant = Date.now();
    const l = await ligne(m.guild.id, m.author.id);
    l.messages = (l.messages || 0) + 1; sales.add(k);
    if (maintenant - (derniers.get(k) || 0) < (c.delai || 60) * 1000) return;
    derniers.set(k, maintenant);
    const min = Math.max(0, +c.xpMin || 15), max = Math.max(min, +c.xpMax || 25);
    const gain = Math.round((min + Math.floor(Math.random() * (max - min + 1))) * (+c.multiplicateur || 1));
    await donnerXP(m.member, gain, m.channel);
  });
  setInterval(vider, 20000);
  process.on('SIGINT', async () => { await vider(); process.exit(0); });
}

/* ---------- commandes ---------- */
function commandes() {
  return [
    new SlashCommandBuilder().setName('rang').setDescription('Ton niveau et ton XP (ou ceux d\'un membre)').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'rank', 'en-GB': 'rank' })
      .addUserOption(o => o.setName('membre').setDescription('Un autre membre')),
    new SlashCommandBuilder().setName('classement').setDescription('Les membres les plus actifs du serveur').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'leaderboard', 'en-GB': 'leaderboard' }),
    new SlashCommandBuilder().setName('xp').setDescription('Gérer l\'XP d\'un membre').setContexts(InteractionContextType.Guild)
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
      .addSubcommand(s => s.setName('ajouter').setDescription('Donner de l\'XP').addUserOption(o => o.setName('membre').setDescription('Le membre').setRequired(true)).addIntegerOption(o => o.setName('quantite').setDescription('XP à donner').setRequired(true).setMinValue(1)))
      .addSubcommand(s => s.setName('retirer').setDescription('Retirer de l\'XP').addUserOption(o => o.setName('membre').setDescription('Le membre').setRequired(true)).addIntegerOption(o => o.setName('quantite').setDescription('XP à retirer').setRequired(true).setMinValue(1)))
      .addSubcommand(s => s.setName('niveau').setDescription('Mettre un membre à un niveau précis').addUserOption(o => o.setName('membre').setDescription('Le membre').setRequired(true)).addIntegerOption(o => o.setName('niveau').setDescription('Niveau').setRequired(true).setMinValue(0).setMaxValue(500)))
      .addSubcommand(s => s.setName('reinitialiser').setDescription('Remettre un membre à zéro').addUserOption(o => o.setName('membre').setDescription('Le membre').setRequired(true))),
  ].map(c => c.toJSON());
}

function barre(fraction, n = 14) { const p = Math.round(Math.max(0, Math.min(1, fraction)) * n); return '▰'.repeat(p) + '▱'.repeat(n - p); }

async function classement(gid, limite = 10) {
  await vider();
  return db.lire('bot_niveaux', { guild_id: gid }, { ordre: 'xp', desc: true, limite });
}

async function commande(i) {
  if (!['rang', 'classement', 'xp'].includes(i.commandName)) return false;
  const c = reglages.get(i.guildId).niveaux;
  if (!c.actif && i.commandName !== 'xp') { await i.reply({ content: 'Le système de niveaux est désactivé sur ce serveur (dashboard).', flags: MessageFlags.Ephemeral }); return true; }

  if (i.commandName === 'rang') {
    const u = i.options.getUser('membre') || i.user;
    const l = await ligne(i.guildId, u.id);
    const n = niveauDe(l.xp);
    const top = await classement(i.guildId, 1000);
    const pos = top.findIndex(x => x.user_id === u.id) + 1;
    const e = new EmbedBuilder().setColor(0x8FE86B).setAuthor({ name: u.username, iconURL: u.displayAvatarURL() }).setThumbnail(u.displayAvatarURL({ size: 256 }))
      .addFields(
        { name: 'Niveau', value: `**${n.niveau}**`, inline: true }, { name: 'Rang', value: pos ? `**#${pos}**` : '—', inline: true },
        { name: 'Messages', value: `${l.messages || 0}`, inline: true },
        { name: `XP · ${n.dansNiveau} / ${n.palier}`, value: `${barre(n.dansNiveau / n.palier)}  (${l.xp} XP au total)` });
    const prochaine = (c.recompenses || []).filter(r => r.niveau > n.niveau).sort((a, b) => a.niveau - b.niveau)[0];
    if (prochaine) e.setFooter({ text: `Prochaine récompense au niveau ${prochaine.niveau}` });
    await i.reply({ embeds: [e] });
    return true;
  }
  if (i.commandName === 'classement') {
    const top = await classement(i.guildId, 10);
    const med = ['🥇', '🥈', '🥉'];
    const e = new EmbedBuilder().setColor(0xF4C542).setTitle(`🏆 Classement de ${i.guild.name}`)
      .setDescription(top.length ? top.map((l, k) => `${med[k] || `**${k + 1}.**`} <@${l.user_id}> · niveau **${niveauDe(+l.xp).niveau}** · ${l.xp} XP`).join('\n') : 'Personne n\'a encore d\'XP. Écrivez ! 🐝');
    await i.reply({ embeds: [e], allowedMentions: { parse: [] } });
    return true;
  }
  /* /xp */
  const sous = i.options.getSubcommand(), u = i.options.getUser('membre');
  const membre = await i.guild.members.fetch(u.id).catch(() => null);
  if (!membre) { await i.reply({ content: 'Membre introuvable.', flags: MessageFlags.Ephemeral }); return true; }
  const l = await ligne(i.guildId, u.id);
  if (sous === 'ajouter') await donnerXP(membre, i.options.getInteger('quantite'), null);
  if (sous === 'retirer') await donnerXP(membre, -i.options.getInteger('quantite'), null);
  if (sous === 'niveau') await donnerXP(membre, xpTotalPour(i.options.getInteger('niveau')) - l.xp, null);
  if (sous === 'reinitialiser') { await donnerXP(membre, -l.xp, null); l.messages = 0; }
  await vider();
  await i.reply({ content: `✅ ${u.username} : niveau **${l.niveau}** · ${l.xp} XP.`, flags: MessageFlags.Ephemeral });
  return true;
}

module.exports = { nom: 'niveaux', commandes, commande, evenements, niveauDe, xpPalier, xpTotalPour, vider };
