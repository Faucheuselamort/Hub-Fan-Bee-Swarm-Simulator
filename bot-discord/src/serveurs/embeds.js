'use strict';
/* Embeds libres écrits dans le dashboard (présentation des rôles, règlement, infos…).
   Chaque embed est enregistré dans les réglages : on peut le republier pour
   MODIFIER le message déjà posté, au lieu d'en envoyer un nouveau. */
const { EmbedBuilder } = require('discord.js');
const reglages = require('./reglages');
const { couleur, variables } = require('./aide-discord');

const coupe = (t, n) => { const s = String(t || '').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
const lien = (u) => (/^https?:\/\/\S+$/i.test(String(u || '').trim()) ? String(u).trim() : null);

/* message Discord (texte + embed) à partir d'un modèle du dashboard */
function construire(m, guild) {
  const v = (t) => variables(t, { guild });
  const e = new EmbedBuilder().setColor(couleur(m.couleur));
  if (m.titre) e.setTitle(coupe(v(m.titre), 256));
  if (m.titre && lien(m.url)) e.setURL(lien(m.url));
  if (m.description) e.setDescription(coupe(v(m.description), 4096));
  if (m.auteur) e.setAuthor({ name: coupe(v(m.auteur), 256), iconURL: lien(m.auteurIcone) || undefined });
  if (m.pied) e.setFooter({ text: coupe(v(m.pied), 2048), iconURL: lien(m.piedIcone) || undefined });
  if (lien(m.image)) e.setImage(lien(m.image));
  if (lien(m.miniature)) e.setThumbnail(lien(m.miniature));
  if (m.horodatage) e.setTimestamp(new Date());
  const champs = (m.champs || []).filter(c => c && (c.nom || c.valeur)).slice(0, 25)
    .map(c => ({ name: coupe(v(c.nom), 256) || '​', value: coupe(v(c.valeur), 1024) || '​', inline: !!c.ligne }));
  if (champs.length) e.addFields(champs);

  const vide = !m.titre && !m.description && !m.auteur && !champs.length && !lien(m.image) && !lien(m.miniature) && !m.pied;
  const contenu = coupe(v(m.contenu), 2000);
  if (vide && !contenu) throw new Error('l\'embed est vide');
  if (e.length > 6000) throw new Error('l\'embed dépasse 6000 caractères (limite de Discord)');
  return {
    content: contenu || (vide ? undefined : ''),
    embeds: vide ? [] : [e],
    /* les mentions dans le texte au-dessus peuvent pinger, celles de l'embed jamais */
    allowedMentions: { parse: m.pingMentions ? ['roles', 'everyone', 'users'] : [] },
  };
}

/* publie (ou met à jour si déjà publié dans ce salon) ; nouveau = toujours envoyer un nouveau message */
async function publier(guild, id, { nouveau = false } = {}) {
  await reglages.charger();                       // dernière version enregistrée par le dashboard
  const liste = reglages.get(guild.id).embeds.modeles || [];
  const m = liste.find(x => x.id === id);
  if (!m) throw new Error('embed introuvable (enregistre d\'abord)');
  if (!m.salon) throw new Error('choisis un salon');
  const salon = guild.channels.cache.get(m.salon) || await guild.channels.fetch(m.salon).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  const msg = construire(m, guild);

  if (!nouveau && m.messageId && m.salonPublie === salon.id) {
    const ancien = await salon.messages.fetch(m.messageId).catch(() => null);
    if (ancien && ancien.author.id === guild.client.user.id) {
      await ancien.edit({ content: msg.content || null, embeds: msg.embeds, allowedMentions: msg.allowedMentions });
      return { message: ancien, modifie: true };
    }
  }
  const envoye = await salon.send(msg);
  const modeles = liste.map(x => (x.id === m.id ? { ...x, messageId: envoye.id, salonPublie: salon.id } : x));
  await reglages.remplacer(guild.id, ['embeds', 'modeles'], modeles);
  return { message: envoye, modifie: false };
}

/* supprime le message publié sur Discord (le modèle reste dans le dashboard) */
async function retirer(guild, id) {
  await reglages.charger();
  const liste = reglages.get(guild.id).embeds.modeles || [];
  const m = liste.find(x => x.id === id);
  if (!m || !m.messageId) throw new Error('cet embed n\'est pas publié');
  const salon = guild.channels.cache.get(m.salonPublie) || await guild.channels.fetch(m.salonPublie).catch(() => null);
  const ancien = salon && await salon.messages.fetch(m.messageId).catch(() => null);
  if (ancien) await ancien.delete();
  await reglages.remplacer(guild.id, ['embeds', 'modeles'], liste.map(x => (x.id === id ? { ...x, messageId: null, salonPublie: null } : x)));
  return !!ancien;
}

module.exports = { construire, publier, retirer };
