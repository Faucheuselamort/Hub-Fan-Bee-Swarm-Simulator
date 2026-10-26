'use strict';
/* Tickets : un panneau avec un bouton ; chaque clic ouvre un salon privé
   entre le membre et le staff. À la fermeture, la conversation est envoyée
   en fichier dans le salon des transcriptions. */
const { SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,
  ChannelType, PermissionsBitField, AttachmentBuilder } = require('discord.js');
const reglages = require('./reglages');
const db = require('../stockage');
const { variables, couleur, journal } = require('./aide-discord');

function commandes() {
  return [new SlashCommandBuilder().setName('ticket').setDescription('Tickets d\'aide').setContexts(InteractionContextType.Guild)
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(s => s.setName('panneau').setDescription('Publier le panneau « Ouvrir un ticket » dans ce salon'))
    .addSubcommand(s => s.setName('fermer').setDescription('Fermer le ticket de ce salon'))
    .addSubcommand(s => s.setName('ajouter').setDescription('Ajouter un membre à ce ticket').addUserOption(o => o.setName('membre').setDescription('Le membre').setRequired(true)))
    .toJSON()];
}

function messagePanneau(c) {
  const e = new EmbedBuilder().setColor(couleur(c.couleur)).setTitle(c.titre || 'Tickets').setDescription(c.description || ' ');
  const b = new ButtonBuilder().setCustomId('ticket:ouvrir').setStyle(ButtonStyle.Primary).setLabel((c.bouton || 'Ouvrir un ticket').slice(0, 80)).setEmoji('🎫');
  return { embeds: [e], components: [new ActionRowBuilder().addComponents(b)] };
}

async function publierPanneau(guild, salonId) {
  const c = reglages.get(guild.id).tickets;
  const salon = guild.channels.cache.get(salonId) || await guild.channels.fetch(salonId).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  await salon.send(messagePanneau(c));
  return salon;
}

async function ouvrir(i) {
  const c = reglages.get(i.guildId).tickets;
  if (!c.actif) return i.reply({ content: 'Les tickets sont désactivés pour le moment.', flags: MessageFlags.Ephemeral });
  const ouverts = (await db.lire('bot_tickets', { guild_id: i.guildId, auteur_id: i.user.id, ouvert: true })).filter(t => i.guild.channels.cache.has(t.salon_id));
  if (ouverts.length >= (c.maxParMembre || 1)) return i.reply({ content: `Tu as déjà un ticket ouvert : <#${ouverts[0].salon_id}>`, flags: MessageFlags.Ephemeral });
  await i.deferReply({ flags: MessageFlags.Ephemeral });
  const staff = (c.rolesStaff || []).filter(r => i.guild.roles.cache.has(r));
  const P = PermissionsBitField.Flags;
  const droits = [
    { id: i.guild.roles.everyone.id, deny: [P.ViewChannel] },
    { id: i.user.id, allow: [P.ViewChannel, P.SendMessages, P.ReadMessageHistory, P.AttachFiles, P.EmbedLinks] },
    { id: i.client.user.id, allow: [P.ViewChannel, P.SendMessages, P.ReadMessageHistory, P.ManageChannels, P.EmbedLinks] },
    ...staff.map(r => ({ id: r, allow: [P.ViewChannel, P.SendMessages, P.ReadMessageHistory, P.AttachFiles] })),
  ];
  const nom = `ticket-${i.user.username}`.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 90) || 'ticket';
  let salon;
  try {
    salon = await i.guild.channels.create({ name: nom, type: ChannelType.GuildText, parent: c.categorie || null, permissionOverwrites: droits, topic: `Ticket de ${i.user.username} (${i.user.id})` });
  } catch (e) { return i.editReply('Impossible de créer le salon : le bot a-t-il la permission « Gérer les salons » ?'); }
  await db.ajouter('bot_tickets', { guild_id: i.guildId, salon_id: salon.id, auteur_id: i.user.id, auteur_nom: i.user.username, sujet: null, ouvert: true });
  const e = new EmbedBuilder().setColor(couleur(c.couleur)).setTitle('🎫 Ticket ouvert').setDescription(variables(c.messageOuverture, { membre: i.member, guild: i.guild }));
  const fermer = new ButtonBuilder().setCustomId('ticket:fermer').setStyle(ButtonStyle.Danger).setLabel('Fermer le ticket').setEmoji('🔒');
  await salon.send({ content: `<@${i.user.id}> ${staff.map(r => `<@&${r}>`).join(' ')}`, embeds: [e], components: [new ActionRowBuilder().addComponents(fermer)], allowedMentions: { users: [i.user.id], roles: staff } });
  journal(i.guild, null, new EmbedBuilder().setColor(0x8FE86B).setTitle('🎫 Ticket ouvert').setDescription(`<#${salon.id}> par <@${i.user.id}>`));
  return i.editReply(`✅ Ton ticket est ouvert : <#${salon.id}>`);
}

async function fermer(i) {
  const t = (await db.lire('bot_tickets', { guild_id: i.guildId, salon_id: i.channelId }))[0];
  if (!t) return i.reply({ content: 'Ce salon n\'est pas un ticket.', flags: MessageFlags.Ephemeral });
  await i.reply('🔒 Fermeture du ticket dans 5 secondes…');
  /* transcription */
  try {
    const c = reglages.get(i.guildId).tickets;
    let msgs = [], avant;
    for (let k = 0; k < 10; k++) {
      const lot = await i.channel.messages.fetch({ limit: 100, before: avant });
      if (!lot.size) break;
      msgs.push(...lot.values()); avant = lot.last().id;
    }
    msgs = msgs.reverse();
    const texte = msgs.map(m => `[${new Date(m.createdTimestamp).toLocaleString('fr-FR')}] ${m.author.username} : ${m.content || ''}${m.embeds.length ? ' [embed]' : ''}${m.attachments.size ? ' [' + m.attachments.map(a => a.url).join(' ') + ']' : ''}`).join('\n');
    const dest = c.salonTranscripts && i.guild.channels.cache.get(c.salonTranscripts);
    if (dest) await dest.send({ embeds: [new EmbedBuilder().setColor(0x93A7B0).setTitle('📄 Ticket fermé').setDescription(`Ticket de <@${t.auteur_id}> fermé par <@${i.user.id}> · ${msgs.length} messages`)],
      files: [new AttachmentBuilder(Buffer.from(texte || '(vide)', 'utf8'), { name: `${i.channel.name}.txt` })], allowedMentions: { parse: [] } });
  } catch (e) { console.warn('[tickets] transcription :', e.message); }
  await db.modifier('bot_tickets', { id: t.id }, { ouvert: false, ferme: new Date().toISOString(), ferme_par: i.user.username });
  setTimeout(() => i.channel.delete('Ticket fermé').catch(() => {}), 5000);
}

async function commande(i) {
  if (i.commandName !== 'ticket') return false;
  const s = i.options.getSubcommand();
  if (s === 'panneau') {
    await i.channel.send(messagePanneau(reglages.get(i.guildId).tickets));
    await i.reply({ content: '✅ Panneau publié. Pense à activer les tickets et à choisir la catégorie et les rôles du staff dans le dashboard.', flags: MessageFlags.Ephemeral });
  } else if (s === 'fermer') await fermer(i);
  else if (s === 'ajouter') {
    const u = i.options.getUser('membre');
    const t = (await db.lire('bot_tickets', { guild_id: i.guildId, salon_id: i.channelId }))[0];
    if (!t) await i.reply({ content: 'Ce salon n\'est pas un ticket.', flags: MessageFlags.Ephemeral });
    else { await i.channel.permissionOverwrites.edit(u.id, { ViewChannel: true, SendMessages: true, ReadMessageHistory: true }); await i.reply(`➕ <@${u.id}> a été ajouté au ticket.`); }
  }
  return true;
}

async function bouton(i) {
  if (i.customId === 'ticket:ouvrir') { await ouvrir(i); return true; }
  if (i.customId === 'ticket:fermer') { await fermer(i); return true; }
  return false;
}

module.exports = { nom: 'tickets', commandes, commande, bouton, publierPanneau };
