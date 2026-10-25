'use strict';
/* Entraîne Ruche IA et affiche sa précision sur des questions écrites à la main.
   Utilisation : npm run entrainer   (ajoute --local pour lire le site dans le dossier parent) */
require('dotenv').config({ path: require('node:path').join(__dirname, '..', '.env') });
const path = require('node:path');
const site = require('../src/site');
const IA = require('../src/ia-maison');
const REELLES = require('../tests/questions-reelles');

(async () => {
  const local = process.argv.includes('--local') ? path.join(__dirname, '..', '..') : null;
  await site.charger(process.env.SITE_URL || 'https://faucheuselamort.github.io/Hub-Fan-Bee-Swarm-Simulator', local);
  console.log(`Site lu : ${site.etat.fiches.length} fiches (${site.etat.source})\nEntraînement…`);
  const m = IA.preparerIA(site.etat.fiches, { forcer: true, journal: (e, perte, prec) => console.log(`  époque ${e} · erreur ${perte.toFixed(3)} · réussite ${(prec * 100).toFixed(1)} %`) });
  console.log(`\n${m.rapport.exemples} questions d'entraînement · ${m.rapport.secondes.toFixed(1)} s · réussite sur les questions mises de côté : ${(m.rapport.precision * 100).toFixed(1)} %\n`);
  let okI = 0, okE = 0, nE = 0;
  for (const [q, intention, fiche] of REELLES) {
    const c = IA.comprendre(q);
    const e = c.entites[0] ? c.entites[0].fiche.id : null;
    const bonI = c.intention === intention, bonE = !fiche || e === fiche;
    if (bonI) okI++;
    if (fiche) { nE++; if (e === fiche) okE++; }
    if (!bonI || !bonE) console.log(`  ✗ « ${q} » → ${c.intention} (${(c.confiance * 100).toFixed(0)} %)${bonI ? '' : ` au lieu de ${intention}`} · objet : ${e}${bonE ? '' : ` au lieu de ${fiche}`}`);
  }
  console.log(`\nQuestions réelles : intention ${okI}/${REELLES.length} (${(okI / REELLES.length * 100).toFixed(0)} %) · objet ${okE}/${nE} (${(okE / nE * 100).toFixed(0)} %)`);
  return { okI, okE, nE };
})().catch(e => { console.error(e); process.exit(1); });
