'use strict';
/* Petites fonctions partagées : textes, nombres, langue. */

/* minuscules, sans accents ni ponctuation */
function normaliser(txt) {
  return String(txt || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, '')
    .replace(/[^a-z0-9%+]+/g, ' ')
    .trim();
}

/* retire les balises HTML et les espaces en trop */
function texteBrut(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/* gras HTML du site → gras Discord */
function versDiscord(html) {
  return texteBrut(String(html || '').replace(/<\/?(b|strong)>/gi, '**'));
}

/* 25000000 → « 25 M » (comme sur le site) */
function fmtMiel(n, lang = 'fr') {
  if (n === 0) return lang === 'en' ? 'Free' : 'Gratuit';
  if (n == null || isNaN(n)) return '—';
  const paliers = [[1e18, 'Qi'], [1e15, 'Qa'], [1e12, 'T'], [1e9, 'B'], [1e6, 'M'], [1e3, 'K']];
  for (const [seuil, suf] of paliers) {
    if (n >= seuil) {
      const v = n / seuil;
      let txt = v % 1 === 0 ? String(v) : v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, '');
      if (lang !== 'en') txt = txt.replace('.', ',');
      return txt + ' ' + suf;
    }
  }
  return fmtEntier(n, lang);
}
function fmtEntier(n, lang = 'fr') {
  return Number(n).toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/ /g, ' ');
}

/* champ traduit : o.descEn, sinon le dictionnaire du site, sinon le français */
function tr(o, champ, lang, dico) {
  const fr = o && o[champ];
  if (lang !== 'en') return fr;
  if (o && o[champ + 'En']) return o[champ + 'En'];
  if (fr && dico && dico[fr]) return dico[fr];
  return fr;
}
function trTexte(txt, lang, dico) {
  if (lang !== 'en' || !txt) return txt;
  return (dico && dico[txt]) || txt;
}

/* langue de l'interface Discord du membre */
function langueDe(locale) { return String(locale || '').startsWith('fr') ? 'fr' : 'en'; }

/* langue d'un message libre (simple, mais suffisant ici) */
function devinerLangue(txt) {
  const t = ' ' + normaliser(txt) + ' ';
  const fr = (t.match(/ (le|la|les|un|une|des|est|quel|quelle|quels|comment|combien|pour|avec|ou|dans|je|tu|on|faut|coute|trouver|meilleur) /g) || []).length;
  const en = (t.match(/ (the|a|an|is|what|which|how|much|many|where|for|with|in|i|you|do|does|get|best|cost) /g) || []).length;
  return en > fr ? 'en' : 'fr';
}

function couper(txt, max) {
  txt = String(txt || '');
  return txt.length <= max ? txt : txt.slice(0, max - 1).trimEnd() + '…';
}

/* distance de Levenshtein limitée (pour tolérer les fautes de frappe) */
function distance(a, b, max = 3) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const v = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prec = v[0], mini; v[0] = i; mini = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = v[j];
      v[j] = Math.min(v[j] + 1, v[j - 1] + 1, prec + (a[i - 1] === b[j - 1] ? 0 : 1));
      prec = tmp; if (v[j] < mini) mini = v[j];
    }
    if (mini > max) return max + 1;
  }
  return v[b.length];
}

module.exports = { normaliser, texteBrut, versDiscord, fmtMiel, fmtEntier, tr, trTexte, langueDe, devinerLangue, couper, distance };
