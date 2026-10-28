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
  economie: {
    actif: false, nom: 'Miel', emoji: '🍯', depart: 100, salonsIgnores: [],
    messages: { actif: true, min: 1, max: 5, delai: 60 },
    daily: { montant: 200, bonusSerie: 25 },
    travail: { min: 50, max: 150, delai: 60, phrases: ['Tu as récolté du pollen toute la journée et gagné {gain}.', 'Tu as aidé Black Bear à finir ses quêtes : {gain} !', 'Tu as converti ton sac à la ruche et touché {gain}.', 'Tu as défendu le champ de pin contre les mantes : {gain} de récompense.'] },
    boutique: { titre: '🛒 Boutique', description: 'Dépense ton miel ici !', couleur: '#F4C542', articles: [], messageId: null, salonPublie: null },
    // articles : [{ id, nom, description, emoji, prix, type:'role'|'objet', role, roleRequis, stock (vide = illimité), max, message, actif }]
  },
  embeds: { modeles: [] },          // [{ id, nom, salon, contenu, titre, url, description, couleur, auteur, auteurIcone, champs:[{nom, valeur, ligne}], image, miniature, pied, piedIcone, horodatage, messageId, salonPublie }]
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

/* relit la ligne d'un serveur juste avant d'écrire, pour ne pas écraser
   ce que le dashboard vient d'enregistrer (le bot ne relit que toutes les 15 s) */
async function relire(gid) {
  try { const l = await db.lire('bot_config', { guild_id: gid }); if (l[0]) cache.set(gid, l[0].config || {}); } catch (e) { /* base injoignable : on garde le cache */ }
}

/* modification partielle, ex. set(gid, { bienvenue: { actif: true } }) */
async function set(gid, partiel) {
  await relire(gid);
  const nouveau = fusion(cache.get(gid) || {}, partiel);
  cache.set(gid, nouveau);
  await db.enregistrer('bot_config', { guild_id: gid, config: nouveau, maj: new Date().toISOString() });
  return get(gid);
}

/* remplace une valeur sans fusion (pour pouvoir retirer des clés), ex. remplacer(gid, ['ia','salons'], {...}) */
async function remplacer(gid, chemin, valeur) {
  await relire(gid);
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
    /* on ne garde le fichier qu'en mode local : il sera repris dans Supabase quand il sera configuré */
    if (db.mode() === 'supabase') { fs.renameSync(ancien, ancien + '.repris'); console.log('[réglages] anciens salons questions-réponses repris dans Supabase'); }
  } catch (e) { console.warn('[réglages] reprise :', e.message); }
}

function surveiller(intervalle = 15000) {
  setInterval(() => charger(), intervalle);
}

module.exports = { DEFAUT, get, set, remplacer, charger, reprendreAnciens, surveiller, fusion };
