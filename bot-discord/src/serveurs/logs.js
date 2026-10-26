'use strict';
/* Logs : messages supprimés ou modifiés, arrivées, départs, rôles, pseudos, salons. */
const { Events, EmbedBuilder, AuditLogEvent } = require('discord.js');
const { journal } = require('./aide-discord');

const coupe = (t, n = 1000) => { t = String(t || ''); return t.length > n ? t.slice(0, n - 1) + '…' : (t || '*vide*'); };
const age = (d) => `<t:${Math.floor(d / 1000)}:R>`;

function evenements(client) {
  client.on(Events.MessageDelete, async (m) => {
    if (!m.guild || (m.author && m.author.bot)) return;
    const e = new EmbedBuilder().setColor(0xF0736A).setTitle('🗑️ Message supprimé')
      .addFields({ name: 'Salon', value: `<#${m.channelId}>`, inline: true });
    if (m.author) e.addFields({ name: 'Auteur', value: `<@${m.author.id}>`, inline: true }).setThumbnail(m.author.displayAvatarURL());
    e.addFields({ name: 'Contenu', value: m.partial ? '*message trop ancien : contenu inconnu*' : coupe(m.content) });
    if (m.attachments && m.attachments.size) e.addFields({ name: 'Pièces jointes', value: coupe(m.attachments.map(a => a.name).join(', '), 500) });
    journal(m.guild, 'messagesSupprimes', e);
  });

  client.on(Events.MessageUpdate, async (avant, apres) => {
    if (!apres.guild || (apres.author && apres.author.bot) || avant.content === apres.content || avant.partial) return;
    const e = new EmbedBuilder().setColor(0xF4C542).setTitle('✏️ Message modifié').setURL(apres.url)
      .addFields(
        { name: 'Salon', value: `<#${apres.channelId}>`, inline: true }, { name: 'Auteur', value: `<@${apres.author.id}>`, inline: true },
        { name: 'Avant', value: coupe(avant.content) }, { name: 'Après', value: coupe(apres.content) });
    journal(apres.guild, 'messagesModifies', e);
  });

  client.on(Events.GuildMemberAdd, (m) => journal(m.guild, 'arrivees', new EmbedBuilder().setColor(0x8FE86B).setTitle('📥 Arrivée')
    .setThumbnail(m.user.displayAvatarURL()).setDescription(`<@${m.id}> (${m.user.username})\nCompte créé ${age(m.user.createdTimestamp)}\n${m.guild.memberCount} membres`)));

  client.on(Events.GuildMemberRemove, (m) => journal(m.guild, 'departs', new EmbedBuilder().setColor(0x93A7B0).setTitle('📤 Départ')
    .setThumbnail(m.user.displayAvatarURL()).setDescription(`<@${m.id}> (${m.user.username})${m.joinedTimestamp ? `\nArrivé ${age(m.joinedTimestamp)}` : ''}\nRôles : ${m.roles ? m.roles.cache.filter(r => r.id !== m.guild.id).map(r => `<@&${r.id}>`).join(' ') || '—' : '—'}`)));

  client.on(Events.GuildMemberUpdate, (avant, apres) => {
    if (avant.partial) return;
    if (avant.nickname !== apres.nickname) journal(apres.guild, 'pseudos', new EmbedBuilder().setColor(0x5BA7E0).setTitle('🏷️ Pseudo modifié')
      .setDescription(`<@${apres.id}>\n**${avant.nickname || avant.user.username}** → **${apres.nickname || apres.user.username}**`));
    const ajoutes = apres.roles.cache.filter(r => !avant.roles.cache.has(r.id)), retires = avant.roles.cache.filter(r => !apres.roles.cache.has(r.id));
    if (ajoutes.size || retires.size) journal(apres.guild, 'roles', new EmbedBuilder().setColor(0xB8A5ED).setTitle('🎭 Rôles modifiés')
      .setDescription(`<@${apres.id}>${ajoutes.size ? `\n➕ ${ajoutes.map(r => `<@&${r.id}>`).join(' ')}` : ''}${retires.size ? `\n➖ ${retires.map(r => `<@&${r.id}>`).join(' ')}` : ''}`));
  });

  client.on(Events.GuildBanAdd, async (ban) => {
    let par = '';
    try { const a = await ban.guild.fetchAuditLogs({ type: AuditLogEvent.MemberBanAdd, limit: 1 }); const x = a.entries.first(); if (x && x.target.id === ban.user.id && x.executor.id !== client.user.id) par = `\nPar <@${x.executor.id}>${x.reason ? ` · ${x.reason}` : ''}`; else return; } catch (e) { /* pas d'accès au journal */ }
    journal(ban.guild, 'sanctions', new EmbedBuilder().setColor(0xD94848).setTitle('🔨 Bannissement (hors bot)').setDescription(`${ban.user.username} (${ban.user.id})${par}`));
  });

  client.on(Events.ChannelCreate, (c) => c.guild && journal(c.guild, 'salons', new EmbedBuilder().setColor(0x8FE86B).setTitle('➕ Salon créé').setDescription(`<#${c.id}> (${c.name})`)));
  client.on(Events.ChannelDelete, (c) => c.guild && journal(c.guild, 'salons', new EmbedBuilder().setColor(0xF0736A).setTitle('➖ Salon supprimé').setDescription(`#${c.name}`)));
}

module.exports = { nom: 'logs', evenements };
