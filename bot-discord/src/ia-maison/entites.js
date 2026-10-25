'use strict';
/* Repérage des noms du jeu dans une phrase, même mal écrits :
   « le taky planteur », « porcelaine dipper », « kb amulet », « ssa ».
   On compare des morceaux de 3 lettres (trigrammes) entre chaque bout de
   phrase et chaque nom connu. */
const { normaliser } = require('../outils');

/* surnoms courants dans la communauté */
const SURNOMS = {
  'ssa': 'amulette:Star Amulet', 'star amu': 'amulette:Star Amulet', 'supreme star amulet': 'amulette:Star Amulet',
  'kb': 'mob:King Beetle', 'kb amulet': 'amulette:King Beetle Amulet', 'kba': 'amulette:King Beetle Amulet',
  'pop': 'item:The Planter Of Plenty', 'potp': 'item:The Planter Of Plenty',
  'pd': 'item:Porcelain Dipper', 'tide': 'item:Tide Popper', 'coco canister': 'item:Coconut Canister',
  'mbb': 'item:Mondo Belt Bag', 'dscythe': 'item:Dark Scythe', 'gb': 'item:Gummyballer',
  'rbc': 'mob:Robo Bear', 'snail': 'mob:Stump Snail', 'crab': 'mob:Coconut Crab', 'mondo': 'mob:Mondo Chick',
  'tunnel bear': 'mob:Tunnel Bear', 'stick bug': 'mob:Stick Bug', 'vicious': 'mob:Vicious Bee', 'windy': 'mob:Windy Bee',
  'moon amu': 'amulette:Moon Amulet', 'ant amu': 'amulette:Ant Amulet', 'shell amu': 'amulette:Shell Amulet', 'cog amu': 'amulette:Cog Amulet',
  'super smoothie': 'item:Super Smoothie', 'rj': 'item:Royal Jelly', 'sj': 'item:Star Jelly',
};
/* mots français qui désignent un nom anglais du jeu */
const TRADUCTIONS = [
  [/\bplanteur\b/g, 'planter'], [/\barroseur\b/g, 'sprinkler'], [/\bmasque\b/g, 'mask'], [/\bbottes?\b/g, 'boots'],
  [/\bceinture\b/g, 'belt'], [/\bsac\b/g, 'bag'], [/\bamulette\b/g, 'amulet'], [/\babeille\b/g, 'bee'], [/\boeuf\b/g, 'egg'],
  [/\bchamp de\b/g, 'field'], [/\bcire\b/g, 'wax'], [/\bporcelaine\b/g, 'porcelain'], [/\bdore\b/g, 'golden'], [/\bpetale\b/g, 'petal'],
];
/* mots qui ne désignent jamais un objet à eux seuls */
const MOTS_VIDES = new Set('le la les un une des de du d au aux et ou est quel quelle combien comment ou pour avec dans sur the a an of to for is what how where which much many do does it its i you my'.split(' '));

function trigrammes(s) {
  const p = `  ${s} `, t = new Set();
  for (let i = 0; i + 3 <= p.length; i++) t.add(p.slice(i, i + 3));
  return t;
}
function dice(a, b) {
  let n = 0; for (const x of a) if (b.has(x)) n++;
  return (2 * n) / (a.size + b.size || 1);
}

class DetecteurEntites {
  constructor(fiches) {
    this.noms = [];              // { forme, tri, fiche, poids }
    const ajouter = (forme, fiche, poids = 1) => {
      forme = normaliser(forme);
      if (forme.length < 2) return;
      this.noms.push({ forme, tri: trigrammes(forme), fiche, poids, mots: forme.split(' ').length });
    };
    const parId = new Map(fiches.map(f => [f.id, f]));
    for (const f of fiches) {
      if (f.type === 'guide' || f.type === 'info') continue;
      ajouter(f.nom, f);
      const n = normaliser(f.nom);
      if (n.startsWith('the ')) ajouter(n.slice(4), f, 0.98);
      if (f.type === 'abeille') ajouter(n.replace(/ bee$/, ''), f, 0.8);
      if (f.type === 'amulette') ajouter(n.replace(/ amulet$/, ''), f, 0.85);
      if (/ hive skin$/.test(n)) ajouter(n.replace(/ hive skin$/, ''), f, 0.85);
    }
    for (const [s, id] of Object.entries(SURNOMS)) if (parId.has(id)) ajouter(s, parId.get(id), 1);
    /* mot distinctif d'un nom composé, s'il n'appartient qu'à un seul objet : « tacky », « porcelain »… */
    const GENERIQUES = new Set('supreme silver bronze argent diamant planter mask field bee hive skin sticker egg amulet boots belt bag guard wax vial potion extract the of and with star cub stamp bear blue red white black green pink golden gold diamond basic small big super mega mondo festive'.split(' '));
    const compte = new Map();
    for (const f of fiches) {
      if (f.type === 'guide' || f.type === 'info') continue;
      new Set(normaliser(f.nom).split(' ')).forEach(m => { if (!compte.has(m)) compte.set(m, new Set()); compte.get(m).add(f.nom); });
    }
    for (const f of fiches) {
      if (f.type === 'guide' || f.type === 'info' || f.type === 'sticker') continue;
      const mots = normaliser(f.nom).split(' ');
      if (mots.length < 2) continue;
      mots.forEach(m => { if (m.length >= 5 && !GENERIQUES.has(m) && compte.get(m).size === 1) ajouter(m, f, 0.84); });
    }
    /* index inversé trigramme → noms */
    this.index = new Map();
    this.noms.forEach((n, k) => n.tri.forEach(t => { if (!this.index.has(t)) this.index.set(t, []); this.index.get(t).push(k); }));
  }

  /* → [{ fiche, debut, fin, score, forme }] sans chevauchement, du plus sûr au moins sûr */
  detecter(question, { typesPreferes = [] } = {}) {
    let q = normaliser(question);
    TRADUCTIONS.forEach(([re, en]) => { q = q.replace(re, en); });
    const mots = q.split(' ').filter(Boolean);
    const candidats = [];
    for (let i = 0; i < mots.length; i++) {
      for (let L = 1; L <= 6 && i + L <= mots.length; L++) {
        const morceau = mots.slice(i, i + L);
        if (MOTS_VIDES.has(morceau[0]) || MOTS_VIDES.has(morceau[L - 1])) continue;
        const span = morceau.join(' ');
        if (span.length < 2) continue;
        const tri = trigrammes(span);
        const vus = new Map();
        tri.forEach(t => (this.index.get(t) || []).forEach(k => vus.set(k, (vus.get(k) || 0) + 1)));
        for (const [k, communs] of vus) {
          const n = this.noms[k];
          if (communs < Math.min(3, n.tri.size * 0.4)) continue;
          if (Math.abs(n.mots - L) > 1) continue;
          let s = n.forme === span ? 1 : dice(tri, n.tri);
          if (span.length <= 3 && n.forme !== span) continue;          // mots très courts : seulement l'exact
          if (n.forme.length <= 4 && n.forme !== span) continue;
          s *= n.poids;
          if (typesPreferes.includes(n.fiche.type)) s *= 1.08;
          if (s >= 0.72) candidats.push({ fiche: n.fiche, debut: i, fin: i + L, score: Math.min(1.08, s), forme: span, longueur: span.length });
        }
      }
    }
    /* on garde les meilleurs morceaux sans chevauchement (score puis longueur) */
    candidats.sort((a, b) => (b.score - a.score) || (b.longueur - a.longueur));
    const pris = [], occupe = new Set(), dejaVue = new Set();
    for (const c of candidats) {
      let libre = true; for (let p = c.debut; p < c.fin; p++) if (occupe.has(p)) { libre = false; break; }
      if (!libre || dejaVue.has(c.fiche.id)) continue;
      /* même nom pour un item et un sticker (ex. Porcelain Dipper) : on garde les deux, l'intention tranchera */
      pris.push(c); dejaVue.add(c.fiche.id);
      for (let p = c.debut; p < c.fin; p++) occupe.add(p);
    }
    /* doublons de même nom (item + sticker) : rattache l'autre fiche au même morceau */
    for (const c of candidats) {
      if (dejaVue.has(c.fiche.id)) continue;
      const jumeau = pris.find(p => p.debut === c.debut && p.fin === c.fin && p.fiche.nom === c.fiche.nom);
      if (jumeau) { pris.push(c); dejaVue.add(c.fiche.id); }
    }
    return { entites: pris, mots };
  }

  /* phrase avec les noms remplacés par « objx » (ce que voit le réseau) */
  static masquer(mots, entites) {
    const out = []; const debuts = new Map(entites.map(e => [e.debut, e]));
    for (let i = 0; i < mots.length;) {
      const e = debuts.get(i);
      if (e) { out.push('objx'); i = e.fin; } else { out.push(mots[i]); i++; }
    }
    return out.join(' ');
  }
}

module.exports = { DetecteurEntites, trigrammes, dice, SURNOMS };
