'use strict';
/* « Ruche IA » : l'IA maison du bot.
   - un réseau de neurones entraîné sur des milliers de questions fabriquées
     à partir du site devine ce que veut le joueur (prix, recette, lieu…) ;
   - un détecteur repère de quel(s) objet(s) du jeu il parle.
   Le modèle est ré-entraîné automatiquement quand les données du site changent. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { Reseau, caracteristiques } = require('./reseau');
const { DetecteurEntites } = require('./entites');
const { genererQuestions, preparer, INTENTIONS } = require('./questions');

const FICHIER = path.join(__dirname, '..', '..', 'data', 'ruche-ia.json');
const VERSION_MODELE = 5;      // à augmenter quand on change les modèles de phrases

/* intention → types de fiche attendus (pour départager les homonymes) */
const TYPES_ATTENDUS = {
  prix: ['item'], recette: ['item'], lieu: ['item', 'sticker', 'beequip', 'amulette', 'mob'], stats: ['beequip', 'item', 'amulette', 'sticker'],
  combat: ['mob'], valeur: ['sticker'], comparaison: [], definition: [], conseil: [], aide: [], hors_sujet: [],
};

let modele = null;      // { reseau, detecteur, empreinte, rapport }

function empreinteDe(fiches) {
  const h = crypto.createHash('sha1');
  h.update(String(VERSION_MODELE));
  /* les modèles de phrases et le réseau font partie de l'empreinte : les modifier relance l'entraînement */
  ['questions.js', 'reseau.js'].forEach(f => { try { h.update(fs.readFileSync(path.join(__dirname, f))); } catch (e) { /* */ } });
  fiches.forEach(f => { if (f.type !== 'guide' && f.type !== 'info') h.update(f.id + (f.data.mats ? 'm' : '') + (f.data.miel !== undefined ? 'p' : '') + '|'); });
  return h.digest('hex').slice(0, 16);
}

function entrainer(fiches, { journal = null, parIntention = 2600, epoques = 7 } = {}) {
  const t0 = Date.now();
  const questions = genererQuestions(fiches, { parIntention });
  /* 75 % des exemples avec le nom masqué (« objx »), 25 % avec le nom brut */
  const ex = questions.map((q, k) => ({ x: caracteristiques(k % 4 === 0 ? q.texte : q.masque), y: INTENTIONS.indexOf(q.intention), q }));
  /* on garde 5 % de côté pour mesurer la précision */
  const test = ex.filter((_, k) => k % 20 === 0), train = ex.filter((_, k) => k % 20 !== 0);
  const reseau = new Reseau(INTENTIONS, 40);
  reseau.entrainer(train, { epoques, journal });
  let bons = 0; test.forEach(e => { if (reseau.predire(e.q.masque)[0].classe === e.q.intention) bons++; });
  return { reseau, rapport: { exemples: train.length, precision: bons / test.length, secondes: (Date.now() - t0) / 1000 } };
}

/* Prépare l'IA : recharge le modèle sauvegardé s'il correspond aux données du site,
   sinon le ré-entraîne (quelques secondes) et le sauvegarde. */
function preparerIA(fiches, { forcer = false, journal = null } = {}) {
  const empreinte = empreinteDe(fiches);
  const detecteur = new DetecteurEntites(fiches);
  if (!forcer) {
    try {
      const o = JSON.parse(fs.readFileSync(FICHIER, 'utf8'));
      if (o.empreinte === empreinte) {
        const reseau = Reseau.importer(o.reseau);
        if (reseau) { modele = { reseau, detecteur, empreinte, rapport: o.rapport, source: 'sauvegarde' }; return modele; }
      }
    } catch (e) { /* pas encore de sauvegarde */ }
  }
  const { reseau, rapport } = entrainer(fiches, { journal });
  modele = { reseau, detecteur, empreinte, rapport, source: 'entraînement' };
  try {
    fs.mkdirSync(path.dirname(FICHIER), { recursive: true });
    fs.writeFileSync(FICHIER, JSON.stringify({ empreinte, rapport, reseau: reseau.exporter() }));
  } catch (e) { /* la sauvegarde est un bonus */ }
  return modele;
}

/* Comprendre une question → { intention, confiance, alternatives, entites, texteMasque } */
function comprendre(question) {
  if (!modele) throw new Error('Ruche IA pas encore prête');
  const { reseau, detecteur } = modele;
  /* 1re passe : objets cités, puis intention sur la phrase masquée */
  let { entites, mots } = detecteur.detecter(preparer(question).replace(/\bqmark\b/g, ' '));
  const motsQ = preparer(question).split(' ').filter(Boolean);
  const det = detecteur.detecter(motsQ.join(' '));
  entites = det.entites; mots = det.mots;
  const texteMasque = DetecteurEntites.masquer(mots, entites.filter(e => e.score >= 0.8));
  const pred = reseau.predire(texteMasque);
  const intention = pred[0].classe;
  /* 2e passe : on départage les objets selon l'intention (item ou sticker du même nom…) */
  const attendus = TYPES_ATTENDUS[intention] || [];
  if (attendus.length) {
    entites = entites.map(e => ({ ...e, score: e.score * (attendus.includes(e.fiche.type) ? 1.1 : 0.9) }));
    entites.sort((a, b) => b.score - a.score);
    /* homonymes : on ne garde que le plus adapté */
    const vus = new Set();
    entites = entites.filter(e => { const k = e.debut + ':' + e.fin; if (vus.has(k)) return false; vus.add(k); return true; });
  }
  return { intention, confiance: pred[0].p, alternatives: pred.slice(1, 3), entites, texteMasque };
}

function etatIA() { return modele ? { pret: true, source: modele.source, ...modele.rapport } : { pret: false }; }

module.exports = { preparerIA, comprendre, entrainer, etatIA, INTENTIONS };
