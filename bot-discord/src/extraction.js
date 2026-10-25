'use strict';
/* Lecture des données du site : on récupère app.html (le site lui-même) et on
   en extrait les tableaux de données (ITEMS, STICKERS, BEEQUIP…), exécutés
   dans un bac à sable isolé. Rien n'est recopié à la main : quand le site
   change, le bot suit. */
const vm = require('node:vm');

/* Renvoie le texte de la valeur de `const NOM = ...;` en suivant les
   accolades et crochets (en ignorant chaînes et commentaires). */
function extraireConst(source, nom) {
  const re = new RegExp(`(?:^|\\n)\\s*const\\s+${nom}\\s*=\\s*`);
  const m = re.exec(source);
  if (!m) return null;
  let i = m.index + m[0].length;
  const debut = i;
  let prof = 0, enChaine = null, echappe = false;
  for (; i < source.length; i++) {
    const c = source[i], s = source[i + 1];
    if (enChaine) {
      if (echappe) { echappe = false; continue; }
      if (c === '\\') { echappe = true; continue; }
      if (c === enChaine) enChaine = null;
      continue;
    }
    if (c === '/' && s === '/') { i = source.indexOf('\n', i); if (i < 0) break; continue; }
    if (c === '/' && s === '*') { i = source.indexOf('*/', i + 2) + 1; continue; }
    if (c === '"' || c === "'" || c === '`') { enChaine = c; continue; }
    if (c === '{' || c === '[' || c === '(') prof++;
    else if (c === '}' || c === ']' || c === ')') prof--;
    else if (c === ';' && prof === 0) return source.slice(debut, i);
    else if (c === '\n' && prof === 0 && source.slice(debut, i).trim()) return source.slice(debut, i);
  }
  return null;
}

function evaluer(code, contexte, nomFichier) {
  return vm.runInNewContext(code, contexte, { timeout: 4000, filename: nomFichier });
}

/* Bloc principal : de la section ITEMS jusqu'au réglage des images inclus. */
const NOMS_BLOC = ['ITEMS', 'ITEMS_CATS', 'STICKERS', 'STICKERS_CATS', 'STICKERS_OBTENTION', 'STICKERS_REGLES',
  'AMULETTES', 'AMULETTES_TIERS', 'AMULETTES_BUFFS', 'STAR_PASSIFS', 'AMULETTES_INFO',
  'BEEQUIP', 'BEEQUIP_INFO', 'CHAMPS', 'BLOOMS', 'MUTATIONS', 'MUTATIONS_SOURCES', 'MUTATIONS_NIVEAU', 'MUTATIONS_NOTES',
  'ABEILLES', 'PRIX_NIVEAU', 'IMG_EXT', 'IMG_EXT_DEFAUT', 'IMG_STYLE', 'IMG_STYLE_DEFAUT', 'IMG_FICHIER'];
const NOMS_ISOLES = ['MOBS_DATA', 'MOBS_FICHES', 'FLORE_FICHES', 'RARETE_LIB', 'MAPINFOS', 'RECETTES_CRAFT'];

function extraireDonnees(html, langEn, langFr) {
  const debut = html.indexOf('const ITEMS = [');
  const fin = html.indexOf('const FIL_VUES');
  if (debut < 0 || fin < 0) throw new Error("Structure du site inattendue : ITEMS ou FIL_VUES introuvable dans app.html");
  const bloc = html.slice(debut, fin);
  const ctx = { window: { LANG: 'fr' }, console: { log() {}, warn() {}, error() {} } };
  const donnees = evaluer(bloc + `\n;({${NOMS_BLOC.join(',')}})`, ctx, 'site-bloc.js');

  for (const nom of NOMS_ISOLES) {
    const txt = extraireConst(html, nom);
    if (!txt) { donnees[nom] = null; continue; }
    try {
      donnees[nom] = evaluer(`(${txt})`, { window: { LANG: 'fr' } }, `site-${nom}.js`);
    } catch (e) { donnees[nom] = null; }
  }
  /* version anglaise de la carte (zones) */
  const mapTxt = extraireConst(html, 'MAPINFOS');
  if (mapTxt) {
    try { donnees.MAPINFOS_EN = evaluer(`(${mapTxt})`, { window: { LANG: 'en' } }, 'site-MAPINFOS-en.js'); } catch (e) { /* facultatif */ }
  }
  /* dictionnaire FR -> EN du site, pour traduire les textes restants */
  donnees.TXT_EN = {};
  if (langEn) {
    try {
      const ctxL = { window: {} };
      evaluer(langEn, ctxL, 'lang-en.js');
      const pack = ctxL.window.LANGUES && ctxL.window.LANGUES.en;
      if (pack && pack.TXT) donnees.TXT_EN = pack.TXT;
      if (pack && pack.GUIDE) donnees.GUIDE_EN = pack.GUIDE;
    } catch (e) { /* facultatif */ }
  }
  if (langFr) {
    try {
      const ctxF = { window: {} };
      evaluer(langFr, ctxF, 'lang-fr.js');
      const pack = ctxF.window.LANGUES && ctxF.window.LANGUES.fr;
      if (pack && pack.GUIDE) donnees.GUIDE_FR = pack.GUIDE;
    } catch (e) { /* facultatif */ }
  }
  return JSON.parse(JSON.stringify(donnees));   // objets simples, sans lien avec le bac à sable
}

module.exports = { extraireDonnees, extraireConst };
