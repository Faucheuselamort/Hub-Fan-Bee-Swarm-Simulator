'use strict';
/* Tests sans Discord ni Internet : lecture du site local, recherche, fiches,
   réponses automatiques, définitions des commandes et IA simulée.
   Lancer depuis bot-discord/ :  npm test   (le site doit être dans le dossier parent) */
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert');

/* pas de réseau pendant les tests : les vérifications d'images répondent « absent » */
const fetchReel = global.fetch;
global.fetch = async (url, opts) => {
  if (String(url).startsWith('http://127.0.0.1')) return fetchReel(url, opts);
  return { ok: false, status: 404, text: async () => '' };
};

const site = require('../src/site');
const { construireIndex, chercher } = require('../src/recherche');
const { messageFiche } = require('../src/fiches');
const { repondre } = require('../src/reponse');
const commandes = require('../src/commandes');
const { decomposer } = require('../src/recette');

function tailleEmbed(e) {
  const d = e.data || e;
  let n = (d.title || '').length + (d.description || '').length + ((d.footer && d.footer.text) || '').length;
  (d.fields || []).forEach(f => { n += f.name.length + f.value.length; assert(f.value.length <= 1024, `champ trop long dans ${d.title}`); assert(f.value.length > 0, `champ vide dans ${d.title} (${f.name})`); });
  assert((d.fields || []).length <= 25, `trop de champs dans ${d.title}`);
  assert((d.description || '').length <= 4096);
  return n;
}

(async () => {
  await site.charger('https://faucheuselamort.github.io/Hub-Fan-Bee-Swarm-Simulator', path.join(__dirname, '..', '..'));
  construireIndex();
  const nb = {}; site.etat.fiches.forEach(f => { nb[f.type] = (nb[f.type] || 0) + 1; });
  console.log('fiches :', nb);
  assert(nb.item > 150 && nb.sticker > 250 && nb.beequip > 30 && nb.amulette === 7 && nb.mob > 30);

  /* toutes les fiches, dans les deux langues, respectent les limites Discord */
  let max = 0;
  for (const f of site.etat.fiches) for (const lang of ['fr', 'en']) {
    const m = await messageFiche(f, lang);
    const t = tailleEmbed(m.embeds[0]); max = Math.max(max, t);
    assert(t <= 6000, `fiche trop longue : ${f.id} (${t})`);
  }
  for (const p of ['Bronze', 'Argent', 'Or', 'Diamant', 'Suprême']) for (const lang of ['fr', 'en'])
    tailleEmbed((await messageFiche(site.etat.parId.get('amulette:Star Amulet'), lang, { palier: p })).embeds[0]);
  console.log('✓ toutes les fiches passent (plus longue :', max, 'caractères)');

  /* recherche */
  const attendu = {
    'combien coute le tacky planter ?': 'item:Tacky Planter',
    'how much is the porcelain dipper': 'item:Porcelain Dipper',
    'où trouver le king beetle amulet': 'amulette:King Beetle Amulet',
    'pv du king beetle': 'mob:King Beetle',
    'stats du demon talisman': 'beequip:Demon Talisman',
    'quel nectar dans le pine tree forest': 'champ:Pine Tree Forest',
    'tacky plnter': 'item:Tacky Planter',
    'recette du mondo belt bag': 'item:Mondo Belt Bag',
  };
  for (const [q, id] of Object.entries(attendu)) {
    const r = chercher(q)[0];
    assert(r && r.f.id === id, `« ${q} » → ${r && r.f.id} au lieu de ${id}`);
  }
  console.log('✓ recherche :', Object.keys(attendu).length, 'questions');

  /* recette */
  const r = decomposer('Tacky Planter', 2);
  assert(r.miel >= 100000000 && r.base.size > 0);
  console.log('✓ recette Tacky Planter ×2 :', r.miel, [...r.base.entries()].slice(0, 4));

  /* réponses sans IA */
  for (const q of ['combien coute le tacky planter ?', 'where do I get the Glitter?', 'recette du coconut canister', 'quelle est la meilleure ruche bleue', 'blablabla zzz']) {
    const m = await repondre(q);
    console.log('\nQ :', q, '\nR :', (m.content || (m.embeds && m.embeds[0].data.title) || '').slice(0, 220));
  }

  /* commandes valides */
  const defs = commandes.definitions();
  assert(defs.length >= 15);
  defs.forEach(d => { assert(/^[a-z0-9_-]{1,32}$/.test(d.name), d.name); assert(d.description.length <= 100, d.name); });
  console.log('\n✓', defs.length, 'commandes :', defs.map(d => '/' + d.name).join(' '));

  /* IA simulée (service compatible OpenAI) : on vérifie qu'elle reçoit les extraits */
  let recu = null;
  const serveur = http.createServer((req, res) => {
    let b = ''; req.on('data', c => b += c); req.on('end', () => {
      recu = JSON.parse(b);
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ choices: [{ message: { content: 'Le **Tacky Planter** coûte **50 M** de miel (réponse simulée).' } }] }));
    });
  }).listen(0);
  await new Promise(ok => serveur.once('listening', ok));
  process.env.IA_FOURNISSEUR = 'openai'; process.env.IA_URL = `http://127.0.0.1:${serveur.address().port}/v1`; process.env.IA_MODELE = 'test';
  const m = await repondre('combien coute le tacky planter ?');
  serveur.close();
  assert(recu && recu.messages[1].content.includes('Tacky Planter') && recu.messages[1].content.includes('50'), 'extraits non transmis à l\'IA');
  assert(m.content.includes('réponse simulée') && m.embeds && m.components.length);
  console.log('✓ IA simulée : extraits transmis, réponse + fiche + boutons');
  console.log('\nTous les tests sont passés.');
})().catch(e => { console.error('✗', e.message); process.exit(1); });
