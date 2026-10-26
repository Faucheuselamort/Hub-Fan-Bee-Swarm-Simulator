'use strict';
/* Petites fonctions communes aux modules du serveur. */
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const reglages = require('./reglages');

/* « {membre} » → mention, « {serveur} » → nom… */
function variables(texte, { membre = null, guild = null, extra = {} } = {}) {
  const user = membre && (membre.user || membre);
  const v = {
    membre: user ? `<@${user.id}>` : '', pseudo: user ? (membre.displayName || user.globalName || user.username) : '',
    tag: user ? user.username : '', id: user ? user.id : '',
    serveur: guild ? guild.name : '', compte: guild ? String(guild.memberCount) : '',
    ...extra,
  };
  return String(texte || '').replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined ? v[k] : m));
}

function couleur(hex, defaut = 0x8FE86B) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ''));
  return m ? parseInt(m[1], 16) : defaut;
}

/* « 10m », « 2h », « 1j », « 30s », « 90 » (minutes) → millisecondes */
function duree(txt) {
  if (txt == null || txt === '') return null;
  const s = String(txt).trim().toLowerCase().replace(',', '.');
  if (/^\d+(\.\d+)?$/.test(s)) return parseFloat(s) * 60000;
  let total = 0, trouve = false;
  s.replace(/(\d+(?:\.\d+)?)\s*(s|sec|secondes?|m|min|minutes?|h|heures?|hours?|j|jours?|d|days?|sem|semaines?|w)/g, (_, n, u) => {
    trouve = true; n = parseFloat(n);
    if (/^s/.test(u)) total += n * 1000;
    else if (/^m/.test(u)) total += n * 60000;
    else if (/^h/.test(u)) total += n * 3600000;
    else if (/^(j|d)/.test(u)) total += n * 86400000;
    else total += n * 604800000;
    return '';
  });
  return trouve ? total : null;
}
function dureeTexte(ms) {
  if (!ms) return '—';
  const j = Math.floor(ms / 86400000), h = Math.floor(ms % 86400000 / 3600000), m = Math.floor(ms % 3600000 / 60000), s = Math.round(ms % 60000 / 1000);
  return [j && `${j} j`, h && `${h} h`, m && `${m} min`, !j && !h && s && `${s} s`].filter(Boolean).join(' ') || '0 s';
}

/* envoie un embed dans le salon de logs du serveur, si activé */
async function journal(guild, evenement, embed) {
  try {
    const c = reglages.get(guild.id).logs;
    if (!c.actif || !c.salon || (evenement && c.evenements && c.evenements[evenement] === false)) return;
    const salon = guild.channels.cache.get(c.salon) || await guild.channels.fetch(c.salon).catch(() => null);
    if (!salon || !salon.isTextBased()) return;
    await salon.send({ embeds: [embed.setTimestamp ? embed.setTimestamp() : embed], allowedMentions: { parse: [] } });
  } catch (e) { /* le log ne doit jamais faire planter le reste */ }
}

function embed(titre, coul = 0x8FE86B) { return new EmbedBuilder().setColor(coul).setTitle(titre); }

/* est-ce un modérateur (permission Discord ou rôle choisi dans le dashboard) ? */
function estModo(membre, permission = PermissionFlagsBits.ModerateMembers) {
  if (!membre) return false;
  if (membre.permissions && membre.permissions.has(permission)) return true;
  const roles = reglages.get(membre.guild.id).moderation.rolesModo || [];
  return roles.some(r => membre.roles.cache.has(r));
}

/* le bot peut-il agir sur ce membre (hiérarchie des rôles) ? */
function peutAgir(guild, cible, auteur) {
  const moi = guild.members.me;
  if (!cible || !moi) return 'membre introuvable';
  if (cible.id === guild.ownerId) return 'impossible sur le propriétaire du serveur';
  if (cible.id === moi.id) return 'je ne peux pas me sanctionner moi-même';
  if (auteur && cible.id === auteur.id) return 'tu ne peux pas te sanctionner toi-même';
  if (cible.roles.highest.position >= moi.roles.highest.position) return 'son rôle est au-dessus du mien : monte le rôle du bot dans la liste des rôles';
  if (auteur && auteur.id !== guild.ownerId && cible.roles.highest.position >= auteur.roles.highest.position) return 'son rôle est au-dessus du tien ou égal';
  return null;
}

module.exports = { variables, couleur, duree, dureeTexte, journal, embed, estModo, peutAgir };
