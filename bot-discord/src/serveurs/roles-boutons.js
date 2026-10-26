'use strict';
/* Rôles à boutons : des panneaux préparés dans le dashboard, publiés dans un
   salon ; chaque bouton donne ou retire un rôle (mode « unique » : un seul
   rôle du panneau à la fois). */
const { SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const reglages = require('./reglages');
const { couleur } = require('./aide-discord');

const STYLES = { bleu: ButtonStyle.Primary, gris: ButtonStyle.Secondary, vert: ButtonStyle.Success, rouge: ButtonStyle.Danger };

function commandes() {
  return [new SlashCommandBuilder().setName('roles-boutons').setDescription('Publier un panneau de rôles préparé dans le dashboard').setContexts(InteractionContextType.Guild)
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addStringOption(o => o.setName('panneau').setDescription('Le panneau à publier').setRequired(true).setAutocomplete(true))
    .addChannelOption(o => o.setName('salon').setDescription('Salon (celui du panneau, sinon celui-ci)'))
    .toJSON()];
}

function messagePanneau(p, guild) {
  const lignes = (p.roles || []).filter(r => r.role && guild.roles.cache.has(r.role));
  const e = new EmbedBuilder().setColor(couleur(p.couleur)).setTitle(p.titre || 'Choisis tes rôles')
    .setDescription([p.description, '', ...lignes.map(r => `${r.emoji ? r.emoji + ' ' : ''}**${r.label || guild.roles.cache.get(r.role).name}** · <@&${r.role}>`)].filter(x => x !== undefined).join('\n').trim() || ' ');
  if (p.mode === 'unique') e.setFooter({ text: 'Un seul rôle à la fois : en choisir un retire les autres.' });
  const rangees = [];
  lignes.slice(0, 25).forEach((r, k) => {
    if (k % 5 === 0) rangees.push(new ActionRowBuilder());
    const b = new ButtonBuilder().setCustomId(`rb:${p.id}:${r.role}`).setStyle(STYLES[r.style] || ButtonStyle.Secondary).setLabel((r.label || guild.roles.cache.get(r.role).name).slice(0, 80));
    if (r.emoji) { try { b.setEmoji(r.emoji); } catch (e) { /* emoji invalide */ } }
    rangees[rangees.length - 1].addComponents(b);
  });
  return { embeds: [e], components: rangees, allowedMentions: { parse: [] } };
}

/* publie (ou met à jour si le message existe encore) */
async function publier(guild, panneauId, salonId = null) {
  const c = reglages.get(guild.id).rolesBoutons;
  const p = (c.panneaux || []).find(x => x.id === panneauId);
  if (!p) throw new Error('panneau introuvable');
  const salon = guild.channels.cache.get(salonId || p.salon) || await guild.channels.fetch(salonId || p.salon).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  const msg = messagePanneau(p, guild);
  if (p.messageId && !salonId) {
    const ancien = await salon.messages.fetch(p.messageId).catch(() => null);
    if (ancien) { await ancien.edit(msg); return ancien; }
  }
  const envoye = await salon.send(msg);
  const panneaux = c.panneaux.map(x => (x.id === p.id ? { ...x, salon: salon.id, messageId: envoye.id } : x));
  await reglages.set(guild.id, { rolesBoutons: { panneaux } });
  return envoye;
}

async function commande(i) {
  if (i.commandName !== 'roles-boutons') return false;
  try {
    const salon = i.options.getChannel('salon');
    const m = await publier(i.guild, i.options.getString('panneau'), salon ? salon.id : (reglages.get(i.guildId).rolesBoutons.panneaux.find(p => p.id === i.options.getString('panneau')) || {}).salon || i.channelId);
    await i.reply({ content: `✅ Panneau publié : ${m.url}`, flags: MessageFlags.Ephemeral });
  } catch (e) { await i.reply({ content: `❌ ${e.message}. Crée d'abord le panneau dans le dashboard.`, flags: MessageFlags.Ephemeral }); }
  return true;
}

async function autocompletion(i) {
  if (i.commandName !== 'roles-boutons') return false;
  const v = i.options.getFocused().toLowerCase();
  const l = (reglages.get(i.guildId).rolesBoutons.panneaux || []).filter(p => (p.titre || '').toLowerCase().includes(v));
  await i.respond(l.slice(0, 25).map(p => ({ name: (p.titre || p.id).slice(0, 100), value: p.id }))).catch(() => {});
  return true;
}

async function bouton(i) {
  if (!i.customId.startsWith('rb:')) return false;
  const [, pid, rid] = i.customId.split(':');
  const p = (reglages.get(i.guildId).rolesBoutons.panneaux || []).find(x => x.id === pid);
  const role = i.guild.roles.cache.get(rid);
  if (!role) { await i.reply({ content: 'Ce rôle n\'existe plus.', flags: MessageFlags.Ephemeral }); return true; }
  if (role.position >= i.guild.members.me.roles.highest.position) { await i.reply({ content: 'Je ne peux pas donner ce rôle : il est au-dessus du mien. Un admin doit monter le rôle du bot.', flags: MessageFlags.Ephemeral }); return true; }
  const membre = i.member;
  try {
    if (membre.roles.cache.has(rid)) { await membre.roles.remove(rid, 'Rôle à bouton'); await i.reply({ content: `➖ Rôle **${role.name}** retiré.`, flags: MessageFlags.Ephemeral }); }
    else {
      if (p && p.mode === 'unique') {
        const autres = (p.roles || []).map(r => r.role).filter(r => r !== rid && membre.roles.cache.has(r));
        if (autres.length) await membre.roles.remove(autres, 'Rôle à bouton (unique)');
      }
      await membre.roles.add(rid, 'Rôle à bouton');
      await i.reply({ content: `➕ Rôle **${role.name}** ajouté.`, flags: MessageFlags.Ephemeral });
    }
  } catch (e) { await i.reply({ content: 'Je n\'ai pas pu modifier tes rôles (permission « Gérer les rôles » ?).', flags: MessageFlags.Ephemeral }); }
  return true;
}

module.exports = { nom: 'roles-boutons', commandes, commande, autocompletion, bouton, publier };
