'use strict';
/* Tests hors ligne des modules « gestion de serveur » (sans Discord ni Supabase). */
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
process.env.SUPABASE_URL = ''; process.env.SUPABASE_CLE_SECRETE = '';
const DATA = path.join(__dirname, '..', 'data');
const base = path.join(DATA, 'base-locale.json');
const sauvegarde = fs.existsSync(base) ? fs.readFileSync(base) : null;
if (sauvegarde) fs.renameSync(base, base + '.test');

const db = require('../src/stockage');
const reglages = require('../src/serveurs/reglages');
const serveurs = require('../src/serveurs');
const { duree, dureeTexte, variables } = require('../src/serveurs/aide-discord');
const { niveauDe, xpTotalPour } = require('../src/serveurs/niveaux');
const cfg = require('../src/config');

(async () => {
  assert.strictEqual(db.initialiser(), 'local');
  /* commandes */
  const defs = serveurs.commandes();
  const noms = defs.map(d => d.name);
  assert(new Set(noms).size === noms.length, 'commande en double');
  defs.forEach(d => { assert(/^[a-z0-9_-]{1,32}$/.test(d.name), d.name); assert(d.description.length <= 100, d.name);
    (d.options || []).forEach(o => { assert(o.description.length <= 100 && o.description.length > 0, `${d.name}.${o.name}`); (o.options || []).forEach(x => assert(x.description.length <= 100, `${d.name}.${o.name}.${x.name}`)); }); });
  console.log(`✓ ${defs.length} commandes de gestion : ${noms.map(n => '/' + n).join(' ')}`);

  /* réglages : valeurs par défaut, fusion, remplacement */
  const G = 'test-guild';
  assert.strictEqual(reglages.get(G).niveaux.xpMin, 15);
  await reglages.set(G, { niveaux: { actif: true, recompenses: [{ niveau: 5, role: 'r1' }] } });
  assert(reglages.get(G).niveaux.actif && reglages.get(G).niveaux.xpMax === 25 && reglages.get(G).niveaux.recompenses.length === 1);
  await cfg.ajouterSalon(G, 'c1', 'questions'); await cfg.ajouterSalon(G, 'c2', 'tout');
  cfg.retirerSalon(G, 'c1');
  await new Promise(r => setTimeout(r, 50));
  assert.deepStrictEqual(Object.keys(reglages.get(G).ia.salons), ['c2'], 'retirer un salon doit vraiment le retirer');
  console.log('✓ réglages : défauts, fusion, retrait de salon');

  /* outils */
  assert.strictEqual(duree('10m'), 600000); assert.strictEqual(duree('2h30'), 7200000 + 0 || 7200000); assert.strictEqual(duree('1j'), 86400000); assert.strictEqual(duree('90'), 5400000);
  assert.strictEqual(duree('abc'), null); assert.strictEqual(dureeTexte(90061000), '1 j 1 h 1 min');
  assert.strictEqual(variables('Salut {membre} sur {serveur} ({compte})', { membre: { id: '42', username: 'kuro', displayName: 'Kuro' }, guild: { name: 'BSS', memberCount: 12 } }), 'Salut <@42> sur BSS (12)');
  assert.strictEqual(niveauDe(0).niveau, 0); assert.strictEqual(niveauDe(100).niveau, 1); assert.strictEqual(niveauDe(xpTotalPour(10)).niveau, 10); assert.strictEqual(niveauDe(xpTotalPour(10) - 1).niveau, 9);
  console.log('✓ durées, variables, courbe d\'XP');

  /* stockage local : sanctions, giveaways */
  const s = await db.ajouter('bot_sanctions', { guild_id: G, type: 'warn', cible_id: 'u1', raison: 'test' });
  await db.ajouter('bot_sanctions', { guild_id: G, type: 'warn', cible_id: 'u1', raison: 'test 2' });
  assert.strictEqual((await db.lire('bot_sanctions', { guild_id: G, cible_id: 'u1', type: 'warn' })).length, 2);
  await db.modifier('bot_sanctions', { id: s.id }, { raison: 'modifiée' });
  assert.strictEqual((await db.lire('bot_sanctions', { id: s.id }))[0].raison, 'modifiée');
  await db.enregistrer('bot_niveaux', [{ guild_id: G, user_id: 'a', xp: 50 }, { guild_id: G, user_id: 'b', xp: 500 }]);
  await db.enregistrer('bot_niveaux', { guild_id: G, user_id: 'a', xp: 900 });
  const top = await db.lire('bot_niveaux', { guild_id: G }, { ordre: 'xp', desc: true });
  assert.deepStrictEqual(top.map(x => x.user_id), ['a', 'b']);
  console.log('✓ stockage local : ajout, lecture filtrée, mise à jour, classement');
  await new Promise(r => setTimeout(r, 700));
  fs.unlinkSync(base);
  if (sauvegarde) fs.renameSync(base + '.test', base);
  console.log('Tests des modules de gestion passés.');
  process.exit(0);
})().catch(e => { console.error('✗', e.message); if (sauvegarde) try { fs.renameSync(base + '.test', base); } catch (x) { /* */ } process.exit(1); });
