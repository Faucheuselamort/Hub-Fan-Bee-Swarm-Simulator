'use strict';
/* Chargement des données du site et construction de la base de fiches
   que le bot sait afficher et chercher. */
const fs = require('node:fs');
const path = require('node:path');
const { extraireDonnees } = require('./extraction');
const { normaliser, texteBrut } = require('./outils');

const DOSSIER_DATA = path.join(__dirname, '..', 'data');
const CACHE = path.join(DOSSIER_DATA, 'cache-site.json');

const etat = {
  donnees: null,      // tableaux bruts du site
  fiches: [],         // toutes les fiches indexées
  parId: new Map(),
  chargeLe: null,
  source: null,       // 'site' | 'cache' | 'local'
  siteUrl: '',
};

/* ---------- téléchargement ---------- */
async function telecharger(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000);
  try {
    const r = await fetch(url + (url.includes('?') ? '&' : '?') + 'v=' + Date.now(), { signal: ctrl.signal, headers: { 'User-Agent': 'RucheEtOutilsBot/1.0' } });
    if (!r.ok) throw new Error(`${url} → HTTP ${r.status}`);
    return await r.text();
  } finally { clearTimeout(t); }
}

/* Charge depuis le site en ligne ; en cas d'échec, reprend la dernière copie.
   `local` (facultatif) = dossier contenant app.html, pour les tests. */
async function charger(siteUrl, local) {
  etat.siteUrl = siteUrl.replace(/\/+$/, '');
  let donnees = null, source = null;
  try {
    let html, en, fr;
    if (local) {
      html = fs.readFileSync(path.join(local, 'app.html'), 'utf8');
      en = fs.readFileSync(path.join(local, 'lang-en.js'), 'utf8');
      fr = fs.readFileSync(path.join(local, 'lang-fr.js'), 'utf8');
      source = 'local';
    } else {
      [html, en, fr] = await Promise.all([
        telecharger(etat.siteUrl + '/app.html'),
        telecharger(etat.siteUrl + '/lang-en.js').catch(() => ''),
        telecharger(etat.siteUrl + '/lang-fr.js').catch(() => ''),
      ]);
      source = 'site';
    }
    donnees = extraireDonnees(html, en, fr);
    try {
      fs.mkdirSync(DOSSIER_DATA, { recursive: true });
      fs.writeFileSync(CACHE, JSON.stringify(donnees));
    } catch (e) { /* le cache est un bonus */ }
  } catch (err) {
    if (etat.donnees) { console.warn('[site] relecture impossible, on garde la version actuelle :', err.message); return false; }
    if (fs.existsSync(CACHE)) {
      console.warn('[site] site injoignable, utilisation de la dernière copie :', err.message);
      donnees = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
      source = 'cache';
    } else throw err;
  }
  etat.donnees = donnees;
  etat.source = source;
  etat.chargeLe = new Date();
  construireFiches();
  return true;
}

/* ---------- images (même logique que le site) ---------- */
function imgNom(d, dossier, nom) {
  const cle = dossier + '/' + nom;
  if (d.IMG_FICHIER && d.IMG_FICHIER[cle]) return encodeURIComponent(d.IMG_FICHIER[cle]);
  if ((d.IMG_STYLE[dossier] || d.IMG_STYLE_DEFAUT) === 'underscore')
    return encodeURIComponent(String(nom).replace(/[’`]/g, "'").replace(/\s+/g, '_'));
  return encodeURIComponent(nom);
}
function imagesPossibles(dossier, o) {
  const d = etat.donnees, base = etat.siteUrl + '/';
  if (o && o.img) return [base + o.img.replace(/^\.?\//, '')];
  const ext = d.IMG_EXT[dossier] || d.IMG_EXT_DEFAUT;
  const nom = String(o.nom), propre = imgNom(d, dossier, nom), l = [];
  if (dossier === 'stickers') {
    const bas = nom.replace(/[’'`]/g, '').replace(/\s+/g, '_').toLowerCase();
    const motif = `images/stickers/Hivesticker_${encodeURIComponent(bas)}.${ext}`;
    const brut = `images/stickers/${propre}.${ext}`;
    if ({ 'Cub Skins': 1, 'Hive Skins': 1, 'Vouchers': 1 }[o.categorie]) l.push(brut, motif); else l.push(motif, brut);
  } else if (dossier === 'mobs' || dossier === 'bears') {
    const bas = nom.replace(/[’'`]/g, '').replace(/\s+/g, '_').toLowerCase();
    l.push(`images/${dossier}/${encodeURIComponent(bas)}.${ext}`, `images/${dossier}/${propre}.${ext}`);
  } else l.push(`images/${dossier}/${propre}.${ext}`);
  return l.map(x => base + x);
}

/* Discord n'a pas de « image de secours » : on vérifie une fois quelle
   adresse existe vraiment, puis on la garde en mémoire. */
const imagesVerifiees = new Map();
async function imageValide(candidats) {
  if (!candidats || !candidats.length) return null;
  const cle = candidats.join('|');
  if (imagesVerifiees.has(cle)) return imagesVerifiees.get(cle);
  let trouvee = null;
  for (const url of candidats) {
    try {
      const r = await fetch(url, { method: 'HEAD' });
      if (r.ok) { trouvee = url; break; }
    } catch (e) { /* on essaie la suivante */ }
  }
  if (!trouvee && candidats.length === 1) trouvee = candidats[0];
  imagesVerifiees.set(cle, trouvee);
  return trouvee;
}

/* ---------- adresses du site ---------- */
function lien(hash) { return `${etat.siteUrl}/app.html#${hash.split('/').map(encodeURIComponent).join('/')}`; }

/* ---------- texte de tous les blocs (guides, carte) ---------- */
function aplatir(v, acc = []) {
  if (v == null) return acc;
  if (typeof v === 'string') acc.push(texteBrut(v));
  else if (Array.isArray(v)) v.forEach(x => aplatir(x, acc));
  else if (typeof v === 'object') Object.entries(v).forEach(([k, x]) => { if (k !== 't' && k !== 'img' && k !== 'dossier') aplatir(x, acc); });
  return acc;
}

/* ---------- construction des fiches ---------- */
function construireFiches() {
  const d = etat.donnees, fiches = [];
  const ajouter = (f) => { f.id = f.type + ':' + f.nom; f.nomNorm = normaliser(f.nom); fiches.push(f); };

  /* qui sert à fabriquer quoi */
  const sertA = {};
  d.ITEMS.forEach(o => (o.mats || []).forEach(([, n]) => { (sertA[n] = sertA[n] || []).push(o.nom); }));
  etat.sertA = sertA;

  d.ITEMS.forEach(o => {
    if (o.vue) return;   // cartes « voir la page » (Amulet, Beequip, Sticker)
    const f = o.fiche || {};
    ajouter({
      type: 'item', nom: o.nom, data: o, url: lien(`fiche/items/${o.nom}`),
      images: imagesPossibles('item', o),
      motsCles: [o.categorie],
      texteFr: [o.nom, o.categorie, o.desc, o.lieu, o.prealable, f.jeu, (f.stats || []).join(' '), (o.mats || []).map(m => m[1]).join(' ')].join(' \n'),
      texteEn: [o.nom, o.categorie, o.descEn, o.lieuEn, o.prealableEn, f.jeu, (f.stats || []).join(' ')].join(' \n'),
    });
  });
  d.STICKERS.forEach(o => ajouter({
    type: 'sticker', nom: o.nom, data: o, url: lien(`fiche/stickers/${o.nom}`),
    images: imagesPossibles('stickers', o), motsCles: [o.categorie, 'sticker'],
    texteFr: [o.nom, o.categorie, o.desc, o.boost, o.lieu, 'sticker'].join(' \n'),
    texteEn: [o.nom, o.categorie, o.descEn, o.boostEn, o.lieuEn, 'sticker'].join(' \n'),
  }));
  d.BEEQUIP.forEach(o => ajouter({
    type: 'beequip', nom: o.nom, data: o, url: lien(`fiche/beequip/${o.nom}`),
    images: imagesPossibles('beequip', o), motsCles: ['beequip'],
    texteFr: [o.nom, 'beequip', o.desc, o.stats, o.hive, o.lieu, o.abeilles, o.couleur].join(' \n'),
    texteEn: [o.nom, 'beequip', o.descEn, o.statsEn, o.hiveEn, o.lieuEn, o.abeillesEn, o.couleurEn].join(' \n'),
  }));
  d.AMULETTES.forEach(o => {
    const buffs = d.AMULETTES_BUFFS[o.nom] || {};
    const paliers = buffs.paliers ? Object.keys(buffs.paliers) : [];
    const stats = new Set();
    Object.values(buffs.paliers || {}).concat(buffs.unique ? [buffs.unique] : []).forEach(gs => gs.forEach(g => g.stats.forEach(s => stats.add(s.nom))));
    ajouter({
      type: 'amulette', nom: o.nom, data: o, paliers, url: lien(`amulettes/${o.nom}`),
      images: [`${etat.siteUrl}/images/amulette/${encodeURIComponent(o.nom + (paliers.length ? ' ' + ({ Bronze: 'Bronze', Argent: 'Silver', Or: 'Gold', Diamant: 'Diamond', 'Suprême': 'Supreme' })[paliers[paliers.length - 1]] : ''))}.webp`],
      motsCles: ['amulette', 'amulet', o.categorie],
      texteFr: [o.nom, 'amulette', o.categorie, o.desc, o.effet, o.lieu, o.paliers, o.notes, [...stats].join(' ')].join(' \n'),
      texteEn: [o.nom, 'amulet', o.desc, o.effet, o.lieu, o.paliers, o.notes, [...stats].join(' ')].join(' \n'),
    });
  });
  Object.entries(d.MOBS_DATA || {}).forEach(([nom, m]) => {
    const en = m.en || {};
    const drops = (m.sur || []).concat(m.drops || []).map(x => x.nom).join(' ');
    ajouter({
      type: 'mob', nom, data: m, url: lien('mapinfos'),
      images: imagesPossibles('mobs', { nom }), motsCles: ['mob', 'monstre', 'monster', m.cat],
      texteFr: [nom, 'monstre mob', m.cat, (m.spots || []).map(s => s.champ).join(' '), drops, JSON.stringify(m.stats || {})].join(' \n'),
      texteEn: [nom, 'monster mob', (en.spots || []).map(s => s.champ).join(' '), drops].join(' \n'),
    });
  });
  d.ABEILLES.forEach(o => ajouter({
    type: 'abeille', nom: o.nom + ' Bee', data: o, url: lien('outils/builder'),
    images: imagesPossibles('bees', o), motsCles: ['abeille', 'bee', o.couleur, o.rarete],
    texteFr: [o.nom, 'abeille bee', o.couleur, o.rarete].join(' '),
    texteEn: [o.nom, 'bee', o.couleur, o.rarete].join(' '),
  }));
  d.MUTATIONS.forEach(o => ajouter({
    type: 'mutation', nom: o.nom, data: o, url: lien('mutations'),
    images: o.img ? [etat.siteUrl + '/' + o.img] : [], motsCles: ['mutation'],
    texteFr: [o.nom, 'mutation', o.couleurNom].join(' '), texteEn: [o.nom, 'mutation'].join(' '),
  }));

  /* champs : tableaux de la carte (FR + EN) */
  const champs = {};
  const lireZones = (zones, lang) => (zones || []).forEach(z => (z.blocs || []).forEach(b => {
    if (b.t !== 'tab' || !b.v || !b.v.rows) return;
    b.v.rows.forEach(r => {
      const nom = texteBrut(r[0]);
      const c = champs[nom] = champs[nom] || { nom, zoneFr: '', zoneEn: '', fr: null, en: null };
      c[lang] = { cols: b.v.cols, row: r.map(texteBrut) };
      c[lang === 'fr' ? 'zoneFr' : 'zoneEn'] = z.titre;
    });
  }));
  lireZones(d.MAPINFOS && d.MAPINFOS.Zone, 'fr');
  lireZones(d.MAPINFOS_EN && d.MAPINFOS_EN.Zone, 'en');
  Object.values(champs).forEach(c => {
    const cp = (d.CHAMPS || []).find(x => x.nom === c.nom);
    ajouter({
      type: 'champ', nom: c.nom, data: { ...c, petales: cp }, url: lien('mapinfos'),
      images: [], motsCles: ['champ', 'field'],
      texteFr: [c.nom, 'champ', c.zoneFr, c.fr ? c.fr.row.join(' ') : ''].join(' \n'),
      texteEn: [c.nom, 'field', c.zoneEn, c.en ? c.en.row.join(' ') : ''].join(' \n'),
    });
  });

  /* guides et explications générales (pour les questions « comment… ») */
  const guides = (g, lang) => Object.entries(g || {}).forEach(([cat, sections]) => (sections || []).forEach((s, k) => {
    const texte = aplatir(s.blocs).join('\n');
    if (texte.length < 40) return;
    ajouter({
      type: 'guide', nom: `${cat} · ${texteBrut(s.titre)}`, lang, data: { cat, titre: texteBrut(s.titre), texte }, url: lien(`guide/${cat}`),
      images: [], motsCles: ['guide', cat],
      texteFr: lang === 'fr' ? texte : '', texteEn: lang === 'en' ? texte : '',
    });
  }));
  guides(d.GUIDE_FR, 'fr');
  guides(d.GUIDE_EN, 'en');

  const infos = [
    ['amulettes', d.AMULETTES_INFO], ['beequip', d.BEEQUIP_INFO], ['stickers', d.STICKERS_OBTENTION],
    ['stickers', d.STICKERS_REGLES], ['mutations', d.MUTATIONS_SOURCES],
  ];
  infos.forEach(([page, liste]) => (liste || []).forEach(i => {
    if (!i || !i.t) return;
    ajouter({
      type: 'info', nom: texteBrut(i.t), data: { page, ...i }, url: lien(page), images: [], motsCles: [page],
      texteFr: texteBrut(`${i.t}\n${i.d || ''}\n${i.fort || ''}`),
      texteEn: texteBrut(`${i.tEn || d.TXT_EN[i.t] || ''}\n${i.dEn || d.TXT_EN[i.d] || ''}`),
    });
  }));
  (d.MUTATIONS_NOTES || []).forEach((n, k) => ajouter({
    type: 'info', nom: `Mutations · note ${k + 1}`, data: { page: 'mutations', t: 'Mutations', d: n }, url: lien('mutations'),
    images: [], motsCles: ['mutation'], texteFr: texteBrut(n), texteEn: texteBrut(d.TXT_EN[n] || ''),
  }));

  etat.fiches = fiches;
  etat.parId = new Map(fiches.map(f => [f.id, f]));
}

function fichesDeType(type) { return etat.fiches.filter(f => f.type === type); }

module.exports = { etat, charger, fichesDeType, imageValide, lien };
