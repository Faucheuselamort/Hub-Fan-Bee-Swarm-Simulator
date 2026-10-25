'use strict';
/* Affiche les questions que les membres ont jugées mal comprises (👎). */
const { lireAvis } = require('../src/avis');
const a = lireAvis();
const mauvais = a.filter(x => x.avis === 'mauvais');
console.log(`${a.length} avis · 👍 ${a.length - mauvais.length} · 👎 ${mauvais.length}\n`);
mauvais.slice(-50).forEach(x => console.log(`👎 [${x.intention || '?'}] ${x.question}`));
if (mauvais.length) console.log('\nAjoute des modèles de phrases proches dans src/ia-maison/questions.js, puis relance le bot : Ruche IA se ré-entraîne toute seule.');
