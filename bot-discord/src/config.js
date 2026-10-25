'use strict';
/* Réglages par serveur Discord (salons questions-réponses), gardés dans data/config.json */
const fs = require('node:fs');
const path = require('node:path');

const FICHIER = path.join(__dirname, '..', 'data', 'config.json');
let cfg = {};
try { cfg = JSON.parse(fs.readFileSync(FICHIER, 'utf8')); } catch (e) { cfg = {}; }

function sauver() {
  fs.mkdirSync(path.dirname(FICHIER), { recursive: true });
  fs.writeFileSync(FICHIER, JSON.stringify(cfg, null, 2));
}
function serveur(id) {
  if (!cfg[id]) cfg[id] = { salons: {}, mention: true };
  return cfg[id];
}
/* mode : 'questions' (répond aux messages qui ressemblent à une question) ou 'tout' */
function ajouterSalon(gid, cid, mode) { serveur(gid).salons[cid] = { mode }; sauver(); }
function retirerSalon(gid, cid) { const s = serveur(gid); const ok = !!s.salons[cid]; delete s.salons[cid]; sauver(); return ok; }
function salon(gid, cid) { return cfg[gid] && cfg[gid].salons[cid] || null; }
function salons(gid) { return Object.entries(serveur(gid).salons); }
function mention(gid) { return serveur(gid).mention !== false; }
function reglerMention(gid, v) { serveur(gid).mention = !!v; sauver(); }

module.exports = { ajouterSalon, retirerSalon, salon, salons, mention, reglerMention };
