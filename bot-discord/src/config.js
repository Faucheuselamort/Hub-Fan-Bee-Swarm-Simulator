'use strict';
/* Salons questions-réponses de Ruche IA (réglages « ia » de chaque serveur). */
const reglages = require('./serveurs/reglages');

const ia = (gid) => reglages.get(gid).ia;

/* mode : 'questions' (répond aux messages qui ressemblent à une question) ou 'tout' */
function ajouterSalon(gid, cid, mode) { const s = { ...ia(gid).salons, [cid]: { mode } }; return reglages.remplacer(gid, ['ia', 'salons'], s); }
function retirerSalon(gid, cid) {
  const s = { ...ia(gid).salons }; const ok = !!s[cid]; delete s[cid];
  reglages.remplacer(gid, ['ia', 'salons'], s).catch(e => console.warn('[config]', e.message));
  return ok;
}
function salon(gid, cid) { return (ia(gid).salons || {})[cid] || null; }
function salons(gid) { return Object.entries(ia(gid).salons || {}); }
function mention(gid) { return ia(gid).mention !== false; }
function reglerMention(gid, v) { return reglages.set(gid, { ia: { mention: !!v } }); }

module.exports = { ajouterSalon, retirerSalon, salon, salons, mention, reglerMention };
