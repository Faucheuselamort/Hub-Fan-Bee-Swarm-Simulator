'use strict';
/* Bienvenue, départs et rôles automatiques. */
const { Events, EmbedBuilder } = require('discord.js');
const reglages = require('./reglages');
const { variables, couleur } = require('./aide-discord');

async function salonDe(guild, id) {
  if (!id) return null;
  const s = guild.channels.cache.get(id) || await guild.channels.fetch(id).catch(() => null);
  return s && s.isTextBased() ? s : null;
}

/* message de bienvenue (aussi utilisé par le bouton « tester » du dashboard) */
async function envoyerBienvenue(membre, { test = false } = {}) {
  const c = reglages.get(membre.guild.id).bienvenue;
  if (!c.actif && !test) return false;
  const salon = await salonDe(membre.guild, c.salon);
  if (salon) {
    const texte = variables(c.message, { membre, guild: membre.guild });
    if (c.embed) {
      const e = new EmbedBuilder().setColor(couleur(c.couleur)).setDescription(texte)
        .setAuthor({ name: membre.user.username, iconURL: membre.user.displayAvatarURL() });
      if (c.image) e.setThumbnail(membre.user.displayAvatarURL({ size: 256 }));
      e.setFooter({ text: `${membre.guild.name} · ${membre.guild.memberCount} membres` });
      await salon.send({ content: test ? '🧪 Test du message de bienvenue' : `<@${membre.id}>`, embeds: [e], allowedMentions: { users: test ? [] : [membre.id] } });
    } else {
      await salon.send({ content: (test ? '🧪 ' : '') + texte, allowedMentions: { users: test ? [] : [membre.id] } });
    }
  }
  if (c.mp && c.messageMp && !test) await membre.send(variables(c.messageMp, { membre, guild: membre.guild })).catch(() => {});
  return !!salon;
}

function evenements(client) {
  client.on(Events.GuildMemberAdd, async (membre) => {
    try {
      const c = reglages.get(membre.guild.id).bienvenue;
      const roles = (membre.user.bot ? c.autorolesBots : c.autoroles) || [];
      if (roles.length) await membre.roles.add(roles.filter(r => membre.guild.roles.cache.has(r)), 'Rôle automatique').catch(e => console.warn('[auto-rôle]', e.message));
      if (!membre.user.bot) await envoyerBienvenue(membre);
    } catch (e) { console.warn('[bienvenue]', e.message); }
  });
  client.on(Events.GuildMemberRemove, async (membre) => {
    try {
      const d = reglages.get(membre.guild.id).bienvenue.depart;
      if (!d.actif) return;
      const salon = await salonDe(membre.guild, d.salon);
      if (salon) await salon.send({ content: variables(d.message, { membre, guild: membre.guild }), allowedMentions: { parse: [] } });
    } catch (e) { console.warn('[départ]', e.message); }
  });
}

module.exports = { nom: 'bienvenue', evenements, envoyerBienvenue };
