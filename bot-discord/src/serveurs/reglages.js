'use strict';
/* Réglages de chaque serveur Discord. Ils sont modifiés depuis le dashboard
   du site (ou les commandes /config) et relus par le bot toutes les 15 s. */
const fs = require('node:fs');
const path = require('node:path');
const db = require('../stockage');

const DEFAUT = {
  ia: { salons: {}, mention: true },
  bienvenue: {
    actif: false, salon: '', message: 'Bienvenue {membre} sur **{serveur}** ! Tu es notre {compte}ᵉ membre 🐝',
    embed: true, couleur: '#8FE86B', image: true,
    mp: false, messageMp: 'Bienvenue sur {serveur} ! Pense à lire le règlement.',
    depart: { actif: false, salon: '', message: '**{pseudo}** a quitté le serveur. À bientôt 👋' },
    autoroles: [], autorolesBots: [],
  },
  niveaux: {
    actif: false, xpMin: 15, xpMax: 25, delai: 60, multiplicateur: 1,
    annonce: 'salon',            // 'salon' (là où il parle), 'fixe', 'mp', 'aucune'
    salonAnnonce: '', message: '🎉 GG {membre}, tu passes **niveau {niveau}** !',
    recompenses: [],             // [{ niveau, role }]
    cumuler: true, salonsIgnores: [], rolesIgnores: [],
  },
  logs: {
    actif: false, salon: '',
    evenements: { messagesSupprimes: true, messagesModifies: true, arrivees: true, departs: true, sanctions: true, roles: true, pseudos: true, salons: false },
  },
  moderation: {
    actif: true, mpSanction: true, rolesModo: [],
    avertissements: { seuilMute: 3, dureeMute: 60, seuilKick: 5, seuilBan: 0 },
  },
  tickets: {
    actif: false, categorie: '', rolesStaff: [], salonTranscripts: '', maxParMembre: 1,
    titre: '🎫 Besoin d\'aide ?', description: 'Clique sur le bouton pour ouvrir un ticket privé avec le staff.',
    bouton: 'Ouvrir un ticket', messageOuverture: 'Salut {membre} ! Explique ta demande, un membre du staff va te répondre.',
    couleur: '#8FE86B',
  },
  rolesBoutons: { panneaux: [] },   // [{ id, titre, description, salon, mode, couleur, roles:[{role, label, emoji, style}], messageId }]
  giveaways: { couleur: '#F4C542', emoji: '🎉' },
  sondages: { couleur: '#5BA7E0' },
};

const cache = new Map();         // guild_id → réglages bruts (sans les valeurs par défaut)
let dernierChargement = 0;

function fusion(base, ajout) {
  if (Array.isArray(base) || Array.isArray(ajout)) return ajout !== undefined ? ajout : base;
  if (base && typeof base === 'object' && ajout && typeof ajout === 'object') {
    const r = { ...base };
    Object.keys(ajout).forEach(k => { r[k] = fusion(base[k], ajout[k]); });
    return r;
  }
  return ajout !== undefined ? ajout : base;
}

/* réglages complets d'un serveur (valeurs par défaut + modifications) */
function get(gid) { return fusion(JSON.parse(JSON.stringify(DEFAUT)), cache.get(gid) || {}); }

/* modification partielle, ex. set(gid, { bienvenue: { actif: true } }) */
async function set(gid, partiel) {
  const nouveau = fusion(cache.get(gid) || {}, partiel);
  cache.set(gid, nouveau);
  await db.enregistrer('bot_config', { guild_id: gid, config: nouveau, maj: new Date().toISOString() });
  return get(gid);
}

/* remplace une valeur sans fusion (pour pouvoir retirer des clés), ex. remplacer(gid, ['ia','salons'], {...}) */
async function remplacer(gid, chemin, valeur) {
  const brut = JSON.parse(JSON.stringify(cache.get(gid) || {}));
  let o = brut;
  chemin.slice(0, -1).forEach(k => { if (!o[k] || typeof o[k] !== 'object') o[k] = {}; o = o[k]; });
  o[chemin[chemin.length - 1]] = valeur;
  cache.set(gid, brut);
  await db.enregistrer('bot_config', { guild_id: gid, config: brut, maj: new Date().toISOString() });
  return get(gid);
}

async function charger() {
  try {
    const lignes = await db.lire('bot_config');
    lignes.forEach(l => cache.set(l.guild_id, l.config || {}));
    dernierChargement = Date.now();
  } catch (e) { console.warn('[réglages]', e.message); }
}

/* reprise des anciens réglages (data/config.json : salons questions-réponses) */
async function reprendreAnciens() {
  const ancien = path.join(__dirname, '..', '..', 'data', 'config.json');
  if (!fs.existsSync(ancien)) return;
  try {
    const o = JSON.parse(fs.readFileSync(ancien, 'utf8'));
    for (const [gid, c] of Object.entries(o)) {
      const actuel = cache.get(gid) || {};
      if (!actuel.ia) await set(gid, { ia: { salons: c.salons || {}, mention: c.mention !== false } });
    }
    fs.renameSync(ancien, ancien + '.repris');
    console.log('[réglages] anciens salons questions-réponses repris');
  } catch (e) { console.warn('[réglages] reprise :', e.message); }
}

function surveiller(intervalle = 15000) {
  setInterval(() => charger(), intervalle);
}

module.exports = { DEFAUT, get, set, remplacer, charger, reprendreAnciens, surveiller, fusion };
