'use strict';
/* Stockage des données du bot.
   - Avec Supabase (SUPABASE_URL + SUPABASE_CLE_SECRETE dans .env) : tout est
     dans la base, et le dashboard du site peut tout lire et modifier.
   - Sans Supabase : tout est gardé dans data/base-locale.json (le bot marche,
     mais sans dashboard). */
const fs = require('node:fs');
const path = require('node:path');

const FICHIER_LOCAL = path.join(__dirname, '..', 'data', 'base-locale.json');
const CLES = {   // clé primaire de chaque table
  bot_admins: ['discord_id'], bot_config: ['guild_id'], bot_serveurs: ['guild_id'], bot_etat: ['id'],
  bot_niveaux: ['guild_id', 'user_id'], bot_sanctions: ['id'], bot_tickets: ['id'], bot_giveaways: ['id'], bot_actions: ['id'],
};

let sb = null;          // client Supabase
let local = null;       // { table: [lignes] }
let sauvegardeLocale = null;

function initialiser() {
  const url = (process.env.SUPABASE_URL || '').trim();
  const cle = (process.env.SUPABASE_CLE_SECRETE || process.env.SUPABASE_SERVICE_KEY || '').trim();
  if (url && cle) {
    const { createClient } = require('@supabase/supabase-js');
    sb = createClient(url, cle, { auth: { persistSession: false, autoRefreshToken: false } });
    return 'supabase';
  }
  try { local = JSON.parse(fs.readFileSync(FICHIER_LOCAL, 'utf8')); } catch (e) { local = {}; }
  return 'local';
}
const mode = () => (sb ? 'supabase' : 'local');

function ecrireLocal() {
  clearTimeout(sauvegardeLocale);
  sauvegardeLocale = setTimeout(() => {
    try { fs.mkdirSync(path.dirname(FICHIER_LOCAL), { recursive: true }); fs.writeFileSync(FICHIER_LOCAL, JSON.stringify(local)); } catch (e) { console.warn('[stockage]', e.message); }
  }, 500);
}
function pret() { if (!sb && !local) initialiser(); }
const table = (t) => { pret(); return (local[t] = local[t] || []); };
const correspond = (ligne, filtre) => Object.entries(filtre || {}).every(([k, v]) => String(ligne[k]) === String(v));
const memeCle = (t, a, b) => (CLES[t] || ['id']).every(k => String(a[k]) === String(b[k]));

/* ---------- opérations génériques ---------- */
async function lire(t, filtre = {}, { ordre = null, desc = false, limite = null } = {}) {
  pret();
  if (sb) {
    let q = sb.from(t).select('*');
    Object.entries(filtre).forEach(([k, v]) => { q = q.eq(k, v); });
    if (ordre) q = q.order(ordre, { ascending: !desc });
    if (limite) q = q.limit(limite);
    const { data, error } = await q;
    if (error) throw new Error(`${t} : ${error.message}`);
    return data || [];
  }
  let l = table(t).filter(x => correspond(x, filtre));
  if (ordre) l = l.slice().sort((a, b) => ((a[ordre] > b[ordre] ? 1 : -1) * (desc ? -1 : 1)));
  return limite ? l.slice(0, limite) : l;
}

async function enregistrer(t, lignes) {
  pret();
  lignes = Array.isArray(lignes) ? lignes : [lignes];
  if (!lignes.length) return [];
  if (sb) {
    const { data, error } = await sb.from(t).upsert(lignes, { onConflict: (CLES[t] || ['id']).join(',') }).select();
    if (error) throw new Error(`${t} : ${error.message}`);
    return data || [];
  }
  const tab = table(t);
  lignes.forEach(l => {
    const i = tab.findIndex(x => memeCle(t, x, l));
    if (i >= 0) tab[i] = { ...tab[i], ...l }; else tab.push(l);
  });
  ecrireLocal();
  return lignes;
}

async function ajouter(t, ligne) {
  pret();
  if (sb) {
    const { data, error } = await sb.from(t).insert(ligne).select();
    if (error) throw new Error(`${t} : ${error.message}`);
    return data && data[0];
  }
  const tab = table(t);
  const id = tab.reduce((m, x) => Math.max(m, +x.id || 0), 0) + 1;
  const l = { id, ...ligne };
  if (!l.date && t === 'bot_sanctions') l.date = new Date().toISOString();
  if (!l.cree) l.cree = new Date().toISOString();
  tab.push(l); ecrireLocal();
  return l;
}

async function modifier(t, filtre, valeurs) {
  pret();
  if (sb) {
    let q = sb.from(t).update(valeurs);
    Object.entries(filtre).forEach(([k, v]) => { q = q.eq(k, v); });
    const { error } = await q;
    if (error) throw new Error(`${t} : ${error.message}`);
    return;
  }
  table(t).forEach((x, i, a) => { if (correspond(x, filtre)) a[i] = { ...x, ...valeurs }; });
  ecrireLocal();
}

async function supprimer(t, filtre) {
  pret();
  if (sb) {
    let q = sb.from(t).delete();
    Object.entries(filtre).forEach(([k, v]) => { q = q.eq(k, v); });
    const { error } = await q;
    if (error) throw new Error(`${t} : ${error.message}`);
    return;
  }
  local[t] = table(t).filter(x => !correspond(x, filtre));
  ecrireLocal();
}

module.exports = { initialiser, mode, lire, enregistrer, ajouter, modifier, supprimer };
