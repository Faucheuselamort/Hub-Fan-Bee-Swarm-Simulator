'use strict';
/* Moteur de recherche intégré : il comprend le français et l'anglais,
   tolère les fautes de frappe et sait reconnaître le nom d'un objet du jeu
   au milieu d'une phrase. Aucun service extérieur. */
const { normaliser, distance } = require('./outils');
const { etat } = require('./site');

/* mots vides, ignorés dans les questions */
const VIDES = new Set(`le la les l un une des de du d au aux a et ou est sont c ce cet cette ces quel quelle quels quelles
qui que quoi qu comment combien pourquoi quand dans sur sous pour par avec sans en y il elle on je tu nous vous ils elles me te se
mon ma mes ton ta tes son sa ses mais donc car ne pas plus moins tres trop faut faire peut peux veux avoir etre j ai as avez
the a an of to in on for with is are was be what which who how much many when where why do does did i you it its my your
can could should would there this that these those from by at as or and not get got have has bee bees`.split(/\s+/));

/* mots français → noms anglais du jeu */
const SYNONYMES = {
  arroseur: ['sprinkler'], arroseurs: ['sprinkler'], sac: ['backpack', 'bag'], sacs: ['backpack'], masque: ['mask'], masques: ['mask'],
  planteur: ['planter'], planteurs: ['planter'], abeille: ['bee'], abeilles: ['bee'], ourson: ['cub'], ruche: ['hive'],
  miel: ['honey'], cire: ['wax'], cires: ['wax'], botte: ['boots'], bottes: ['boots'], ceinture: ['belt'], outil: ['tool'],
  outils: ['tool'], amulette: ['amulet'], amulettes: ['amulet'], oeuf: ['egg'], oeufs: ['egg'], champ: ['field'], champs: ['field'],
  monstre: ['mob', 'monster'], monstres: ['mob'], ours: ['bear'], fleur: ['flower'], fleurs: ['flower'], pollen: ['pollen'],
  rouge: ['red'], bleu: ['blue'], bleue: ['blue'], blanc: ['white'], blanche: ['white'], incolore: ['colorless', 'white'],
  degats: ['damage', 'attack'], attaque: ['attack'], vitesse: ['speed', 'movespeed'], capacite: ['capacity'],
  conversion: ['convert'], convertir: ['convert'], fabriquer: ['craft', 'recipe'], recette: ['recipe', 'craft'],
  prix: ['price', 'cost', 'honey'], coute: ['cost', 'price'], gardien: ['guard'], garde: ['guard'], gauche: ['left'], droite: ['right'],
  etoile: ['star'], lune: ['moon'], coquille: ['shell'], engrenage: ['cog'], fourmi: ['ant'], scarabee: ['beetle'],
  araignee: ['spider'], escargot: ['snail'], crabe: ['crab'], defi: ['challenge'], quete: ['quest'], quetes: ['quest'],
  potion: ['potion'], graine: ['seed'], fraise: ['strawberry'], myrtille: ['blueberry'], ananas: ['pineapple'], tournesol: ['sunflower'],
  noix: ['coconut'], coco: ['coconut'], pin: ['pine'], cactus: ['cactus'], citrouille: ['pumpkin'], rose: ['rose'], bambou: ['bamboo'],
  champignon: ['mushroom'], trefle: ['clover'], pissenlit: ['dandelion'], montagne: ['mountain'], souche: ['stump'],
  nectar: ['nectar'], parachute: ['parachute'], planeur: ['glider'], jeton: ['token'], jetons: ['token'], palier: ['tier'],
};

/* intention de la question */
function intention(qNorm) {
  const q = ' ' + qNorm + ' ';
  if (/ (combien|prix|coute|coutent|cout|price|cost|costs|how much|achete|acheter|buy) /.test(q)) return 'prix';
  if (/ (recette|fabriquer|fabrique|craft|crafter|ingredients?|materiaux|recipe|blender|faire un|make) /.test(q)) return 'recette';
  if (/ (ou|trouver|obtenir|avoir|drop|drops|loot|lache|where|find|obtain|get|spawn|apparait) /.test(q)) return 'lieu';
  if (/ (stats?|bonus|buffs?|boost|effet|effets|donne|gives?|effect) /.test(q)) return 'stats';
  if (/ (pv|vie|hp|health|respawn|reapparition) /.test(q)) return 'mob';
  return 'general';
}

/* ---------- index BM25 ---------- */
let index = null;
function construireIndex() {
  const docs = etat.fiches.map(f => {
    const toks = normaliser(f.texteFr + ' ' + f.texteEn + ' ' + (f.motsCles || []).join(' ')).split(' ').filter(t => t && !VIDES.has(t));
    const tf = new Map();
    toks.forEach(t => tf.set(t, (tf.get(t) || 0) + 1));
    return { f, tf, len: toks.length };
  });
  const df = new Map();
  docs.forEach(d => d.tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1)));
  const moy = docs.reduce((s, d) => s + d.len, 0) / Math.max(1, docs.length);
  index = { docs, df, moy, N: docs.length, vocab: [...df.keys()], pour: etat.fiches };
}
function ind() { if (!index || index.pour !== etat.fiches) construireIndex(); return index; }

function termesRequete(qNorm) {
  const base = qNorm.split(' ').filter(t => t && !VIDES.has(t));
  const out = new Set();
  const { df, vocab } = ind();
  base.forEach(t => {
    out.add(t);
    (SYNONYMES[t] || []).forEach(s => out.add(s));
    if (t.endsWith('s') && t.length > 4) out.add(t.slice(0, -1));
    if (!df.has(t) && t.length >= 5) {                     // faute de frappe : mot le plus proche du vocabulaire
      let meilleur = null, dmin = 2;
      for (const v of vocab) { if (Math.abs(v.length - t.length) > 1) continue; const dd = distance(t, v, 1); if (dd < dmin) { dmin = dd; meilleur = v; if (dd === 0) break; } }
      if (meilleur) out.add(meilleur);
    }
  });
  return [...out];
}

function bm25(termes) {
  const { docs, df, moy, N } = ind();
  const k1 = 1.3, b = 0.7, scores = new Map();
  termes.forEach(t => {
    const n = df.get(t); if (!n) return;
    const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
    docs.forEach(d => {
      const f = d.tf.get(t); if (!f) return;
      scores.set(d.f, (scores.get(d.f) || 0) + idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * d.len / moy)));
    });
  });
  return scores;
}

/* noms reconnus dans la phrase (le plus long d'abord : « Tacky Planter » avant « Planter ») */
const SUFFIXES = /\s(bee|amulet|hive skin|skin|planter)$/;
function nomsCites(qNorm) {
  const q = ' ' + qNorm + ' ';
  const qs = ' ' + qNorm.split(' ').map(w => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w)).join(' ') + ' ';   // pluriels
  const trouves = [];
  for (const f of etat.fiches) {
    if (f.type === 'guide' || f.type === 'info') continue;
    const n = f.nomNorm; if (!n || n.length < 3) continue;
    const sansThe = n.replace(/^the /, '');
    if (q.includes(' ' + n + ' ') || qs.includes(' ' + n + ' ') || (sansThe !== n && q.includes(' ' + sansThe + ' '))) { trouves.push({ f, long: n.length, exact: true }); continue; }
    /* nom court : « king beetle » pour le mob, « demon » pour la Demon Bee seulement si on parle d'abeille */
    const court = n.replace(SUFFIXES, '');
    if (court === n || court.length < 4 || f.type === 'item') continue;
    if (f.type === 'abeille' && !/ (abeille|abeilles|bee|bees) /.test(q)) continue;
    if (q.includes(' ' + court + ' ')) trouves.push({ f, long: court.length, exact: false });
  }
  trouves.sort((a, b) => (b.long - a.long) || (b.exact - a.exact));
  /* on retire un nom contenu dans un nom plus long réellement écrit dans la phrase */
  const gardes = [];
  trouves.forEach(t => { if (!gardes.some(g => g.exact && g.f.nomNorm !== t.f.nomNorm && g.f.nomNorm.includes(t.f.nomNorm.replace(SUFFIXES, '')))) gardes.push(t); });
  return gardes.map(t => t.f);
}

/* Recherche principale. Renvoie [{ f, score }] du plus pertinent au moins pertinent. */
function chercher(question, { types = null, limite = 8 } = {}) {
  const qNorm = normaliser(question);
  if (!qNorm) return [];
  const termes = termesRequete(qNorm);
  const s = bm25(termes);
  const cites = nomsCites(qNorm);
  const res = new Map();
  s.forEach((v, f) => res.set(f, v));
  cites.forEach((f, k) => res.set(f, (res.get(f) || 0) + 40 - k * 3));
  /* l'intention oriente vers le bon type de fiche */
  const prefere = { prix: ['item'], recette: ['item'], mob: ['mob'], stats: ['beequip', 'amulette', 'sticker', 'item'], lieu: [] }[intention(qNorm)] || [];
  res.forEach((v, f) => { if (prefere.includes(f.type)) res.set(f, v * 1.25 + 4); });
  /* nom proche (fautes) quand rien n'est cité exactement */
  if (!cites.length) {
    for (const f of etat.fiches) {
      if (f.type === 'guide' || f.type === 'info') continue;
      const d = distance(qNorm, f.nomNorm, 2);
      if (d <= 2 && f.nomNorm.length >= 5) res.set(f, (res.get(f) || 0) + 25 - d * 8);
    }
  }
  let liste = [...res.entries()].map(([f, score]) => ({ f, score }));
  if (types) liste = liste.filter(x => types.includes(x.f.type));
  liste.sort((a, b) => b.score - a.score);
  return liste.slice(0, limite);
}

/* autocomplétion d'un nom pour une commande */
function suggerer(type, saisie, lang = 'fr') {
  const q = normaliser(saisie);
  const liste = etat.fiches.filter(f => f.type === type);
  if (!q) return liste.slice(0, 25);
  const notes = [];
  for (const f of liste) {
    const n = f.nomNorm;
    let s = -1;
    if (n === q) s = 100;
    else if (n.startsWith(q)) s = 80 - n.length / 100;
    else if (n.split(' ').some(m => m.startsWith(q))) s = 60;
    else if (n.includes(q)) s = 40;
    else { const d = distance(q, n.slice(0, q.length + 1), 2); if (d <= 2 && q.length >= 4) s = 20 - d; }
    if (s >= 0) notes.push({ f, s });
  }
  notes.sort((a, b) => b.s - a.s);
  return notes.slice(0, 25).map(x => x.f);
}

function trouverParNom(type, nom) {
  const q = normaliser(nom);
  return etat.fiches.find(f => f.type === type && f.nomNorm === q) || suggerer(type, nom)[0] || null;
}

module.exports = { chercher, suggerer, trouverParNom, intention, nomsCites, construireIndex };
