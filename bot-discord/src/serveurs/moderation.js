'use strict';
/* Modération : /ban /unban /kick /mute /unmute /warn /sanctions /clear
   Chaque sanction est enregistrée (visible dans le dashboard), envoyée en MP
   au membre si activé, et notée dans le salon de logs. */
const { SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder } = require('discord.js');
const reglages = require('./reglages');
const db = require('../stockage');
const { duree, dureeTexte, journal, peutAgir } = require('./aide-discord');

const COULEURS = { warn: 0xF4C542, mute: 0xF08A4B, unmute: 0x6FD3C8, kick: 0xF0736A, ban: 0xD94848, unban: 0x6FD3C8, clear: 0x93A7B0 };
const NOMS = { warn: 'Avertissement', mute: 'Mise en sourdine', unmute: 'Fin de sourdine', kick: 'Expulsion', ban: 'Bannissement', unban: 'Débannissement', clear: 'Nettoyage' };

function cmd(nom, desc, perm) {
  return new SlashCommandBuilder().setName(nom).setDescription(desc).setDefaultMemberPermissions(perm).setContexts(InteractionContextType.Guild);
}
const optMembre = (o) => o.setName('membre').setDescription('Le membre').setRequired(true);
const optRaison = (o) => o.setName('raison').setDescription('Raison (visible dans l\'historique)').setMaxLength(400);

function commandes() {
  return [
    cmd('ban', 'Bannir un membre', PermissionFlagsBits.BanMembers).addUserOption(optMembre).addStringOption(optRaison)
      .addIntegerOption(o => o.setName('supprimer_messages').setDescription('Supprimer ses messages des derniers jours').addChoices(
        { name: 'Aucun', value: 0 }, { name: '1 jour', value: 1 }, { name: '7 jours', value: 7 })),
    cmd('unban', 'Débannir un utilisateur', PermissionFlagsBits.BanMembers)
      .addStringOption(o => o.setName('id').setDescription('Identifiant Discord de la personne').setRequired(true)).addStringOption(optRaison),
    cmd('kick', 'Expulser un membre', PermissionFlagsBits.KickMembers).addUserOption(optMembre).addStringOption(optRaison),
    cmd('mute', 'Rendre muet un membre pour un temps donné', PermissionFlagsBits.ModerateMembers).addUserOption(optMembre)
      .addStringOption(o => o.setName('duree').setDescription('Ex. 10m, 2h, 1j (28 jours max)').setRequired(true)).addStringOption(optRaison),
    cmd('unmute', 'Rendre la parole à un membre', PermissionFlagsBits.ModerateMembers).addUserOption(optMembre).addStringOption(optRaison),
    cmd('warn', 'Avertir un membre', PermissionFlagsBits.ModerateMembers).addUserOption(optMembre)
      .addStringOption(o => optRaison(o).setRequired(true)),
    cmd('sanctions', 'Historique des sanctions d\'un membre', PermissionFlagsBits.ModerateMembers).addUserOption(optMembre),
    cmd('clear', 'Supprimer des messages dans ce salon', PermissionFlagsBits.ManageMessages)
      .addIntegerOption(o => o.setName('nombre').setDescription('Combien (1 à 100)').setRequired(true).setMinValue(1).setMaxValue(100))
      .addUserOption(o => o.setName('membre').setDescription('Seulement les messages de ce membre')),
  ].map(c => c.toJSON());
}

/* enregistre + MP + logs */
async function sanctionner(i, type, cible, raison, extra = {}) {
  const user = cible.user || cible;
  const ligne = {
    guild_id: i.guildId, type, cible_id: user.id, cible_nom: user.username,
    moderateur_id: i.user.id, moderateur_nom: i.user.username, raison: raison || null, duree: extra.duree || null,
  };
  try { await db.ajouter('bot_sanctions', ligne); } catch (e) { console.warn('[modération]', e.message); }
  const cfg = reglages.get(i.guildId).moderation;
  if (cfg.mpSanction && ['warn', 'mute', 'kick', 'ban'].includes(type) && extra.mp !== false) {
    const e = new EmbedBuilder().setColor(COULEURS[type]).setTitle(`${NOMS[type]} sur ${i.guild.name}`)
      .addFields({ name: 'Raison', value: raison || 'Aucune raison donnée' });
    if (extra.duree) e.addFields({ name: 'Durée', value: extra.duree });
    await user.send({ embeds: [e] }).catch(() => {});
  }
  const log = new EmbedBuilder().setColor(COULEURS[type]).setTitle(`🔨 ${NOMS[type]}`)
    .addFields({ name: 'Membre', value: `<@${user.id}> (${user.username})`, inline: true }, { name: 'Par', value: `<@${i.user.id}>`, inline: true });
  if (extra.duree) log.addFields({ name: 'Durée', value: extra.duree, inline: true });
  log.addFields({ name: 'Raison', value: raison || '—' });
  journal(i.guild, 'sanctions', log);
}

/* paliers d'avertissements automatiques */
async function paliers(i, membre) {
  const a = reglages.get(i.guildId).moderation.avertissements;
  const nb = (await db.lire('bot_sanctions', { guild_id: i.guildId, cible_id: membre.id, type: 'warn' })).length;
  const fauxI = { ...i, user: i.client.user, guildId: i.guildId, guild: i.guild };
  if (a.seuilBan && nb >= a.seuilBan && membre.bannable) {
    await membre.ban({ reason: `${nb} avertissements` }); await sanctionner(fauxI, 'ban', membre, `Automatique : ${nb} avertissements`); return `banni automatiquement (${nb} avertissements)`;
  }
  if (a.seuilKick && nb >= a.seuilKick && membre.kickable) {
    await membre.kick(`${nb} avertissements`); await sanctionner(fauxI, 'kick', membre, `Automatique : ${nb} avertissements`); return `expulsé automatiquement (${nb} avertissements)`;
  }
  if (a.seuilMute && nb >= a.seuilMute && membre.moderatable) {
    const ms = (a.dureeMute || 60) * 60000;
    await membre.timeout(ms, `${nb} avertissements`); await sanctionner(fauxI, 'mute', membre, `Automatique : ${nb} avertissements`, { duree: dureeTexte(ms) }); return `rendu muet ${dureeTexte(ms)} automatiquement (${nb} avertissements)`;
  }
  return null;
}

const NOMS_CMD = ['ban', 'unban', 'kick', 'mute', 'unmute', 'warn', 'sanctions', 'clear'];

async function commande(i) {
  if (!NOMS_CMD.includes(i.commandName)) return false;
  if (!reglages.get(i.guildId).moderation.actif) { await i.reply({ content: 'Le module de modération est désactivé sur ce serveur (dashboard).', flags: MessageFlags.Ephemeral }); return true; }
  const raison = i.options.getString('raison');
  const fini = async (p) => { await p; return true; };
  const ok = (t) => i.reply({ content: t, allowedMentions: { parse: [] } });
  const non = (t) => i.reply({ content: `❌ ${t}`, flags: MessageFlags.Ephemeral });
  const c = i.commandName;

  if (c === 'unban') {
    const id = i.options.getString('id').replace(/\D/g, '');
    try { const u = await i.client.users.fetch(id); await i.guild.members.unban(id, raison || undefined); await sanctionner(i, 'unban', u, raison); return fini(ok(`✅ **${u.username}** est débanni.`)); }
    catch (e) { return fini(non('Impossible de débannir : identifiant inconnu ou pas banni.')); }
  }
  if (c === 'clear') {
    const n = i.options.getInteger('nombre'), u = i.options.getUser('membre');
    await i.deferReply({ flags: MessageFlags.Ephemeral });
    let msgs = await i.channel.messages.fetch({ limit: u ? 100 : n });
    if (u) msgs = msgs.filter(m => m.author.id === u.id).first(n);
    const supp = await i.channel.bulkDelete(msgs, true).catch(() => null);
    const nb = supp ? supp.size : 0;
    journal(i.guild, 'sanctions', new EmbedBuilder().setColor(COULEURS.clear).setTitle('🧹 Nettoyage').setDescription(`${nb} message(s) supprimé(s) dans <#${i.channelId}> par <@${i.user.id}>${u ? ` (messages de <@${u.id}>)` : ''}.`));
    await i.editReply(`🧹 ${nb} message(s) supprimé(s).${nb < n ? ' Les messages de plus de 14 jours ne peuvent pas être supprimés en masse.' : ''}`);
    return true;
  }
  if (c === 'sanctions') {
    const u = i.options.getUser('membre');
    const l = await db.lire('bot_sanctions', { guild_id: i.guildId, cible_id: u.id }, { ordre: 'date', desc: true, limite: 25 });
    const e = new EmbedBuilder().setColor(0x93A7B0).setTitle(`Sanctions de ${u.username}`).setThumbnail(u.displayAvatarURL())
      .setDescription(l.length ? l.map(s => `**${NOMS[s.type] || s.type}** · <t:${Math.floor(new Date(s.date) / 1000)}:d> · par ${s.moderateur_nom}${s.duree ? ` · ${s.duree}` : ''}\n${s.raison || '—'}`).join('\n\n').slice(0, 4000) : 'Aucune sanction. 🐝');
    await i.reply({ embeds: [e], flags: MessageFlags.Ephemeral });
    return true;
  }

  const u = i.options.getUser('membre');
  const membre = await i.guild.members.fetch(u.id).catch(() => null);
  if (c === 'ban') {
    if (membre) { const p = peutAgir(i.guild, membre, i.member); if (p) return fini(non(p)); }
    await sanctionner(i, 'ban', u, raison);      // MP avant le ban, sinon il n'arrive plus
    try { await i.guild.members.ban(u.id, { reason: raison || undefined, deleteMessageSeconds: (i.options.getInteger('supprimer_messages') || 0) * 86400 }); }
    catch (e) { return fini(non('Bannissement impossible (permissions du bot ?).')); }
    return fini(ok(`🔨 **${u.username}** est banni.${raison ? ` Raison : ${raison}` : ''}`));
  }
  if (!membre) return fini(non('Ce membre n\'est pas sur le serveur.'));
  const p = peutAgir(i.guild, membre, i.member);
  if (p && c !== 'warn') return fini(non(p));

  if (c === 'kick') {
    await sanctionner(i, 'kick', membre, raison);
    try { await membre.kick(raison || undefined); } catch (e) { return fini(non('Expulsion impossible (permissions du bot ?).')); }
    return fini(ok(`👢 **${u.username}** est expulsé.${raison ? ` Raison : ${raison}` : ''}`));
  }
  if (c === 'mute') {
    const ms = duree(i.options.getString('duree'));
    if (!ms || ms < 5000 || ms > 28 * 86400000) return fini(non('Durée invalide : écris par exemple 10m, 2h ou 3j (28 jours maximum).'));
    try { await membre.timeout(ms, raison || undefined); } catch (e) { return fini(non('Impossible de le rendre muet (permissions du bot ?).')); }
    await sanctionner(i, 'mute', membre, raison, { duree: dureeTexte(ms) });
    return fini(ok(`🔇 **${u.username}** est muet pendant **${dureeTexte(ms)}**.${raison ? ` Raison : ${raison}` : ''}`));
  }
  if (c === 'unmute') {
    try { await membre.timeout(null, raison || undefined); } catch (e) { return fini(non('Impossible (permissions du bot ?).')); }
    await sanctionner(i, 'unmute', membre, raison, { mp: false });
    return fini(ok(`🔊 **${u.username}** peut de nouveau parler.`));
  }
  if (c === 'warn') {
    await sanctionner(i, 'warn', membre, raison);
    const nb = (await db.lire('bot_sanctions', { guild_id: i.guildId, cible_id: membre.id, type: 'warn' })).length;
    let txt = `⚠️ **${u.username}** a reçu un avertissement (${nb} au total). Raison : ${raison}`;
    try { const auto = await paliers(i, membre); if (auto) txt += `\n➡️ Il a été ${auto}.`; } catch (e) { /* */ }
    return fini(ok(txt));
  }
  return false;
}

module.exports = { nom: 'moderation', commandes, commande, sanctionner };
