'use strict';
/* Petit réseau de neurones écrit à la main (aucune bibliothèque) :
   texte → caractéristiques hachées (mots, paires de mots, morceaux de mots)
         → couche cachée (ReLU) → probabilités pour chaque intention.
   Assez léger pour s'entraîner en quelques secondes sur n'importe quel PC. */

const DIM = 1 << 15;          // taille de l'espace des caractéristiques

/* hachage FNV-1a 32 bits */
function hacher(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}

/* texte normalisé → indices actifs (avec répétitions fusionnées) et poids */
function caracteristiques(texte) {
  const mots = texte.split(' ').filter(Boolean);
  const cles = [];
  mots.forEach((m, i) => {
    cles.push('m:' + m);
    if (i > 0) cles.push('b:' + mots[i - 1] + '_' + m);
    const p = `<${m}>`;
    for (let n = 3; n <= 4; n++) for (let k = 0; k + n <= p.length; k++) cles.push(`c${n}:` + p.slice(k, k + n));
  });
  if (mots.length) { cles.push('debut:' + mots[0]); cles.push('fin:' + mots[mots.length - 1]); }
  const compte = new Map();
  cles.forEach(c => { const h = hacher(c) % DIM; compte.set(h, (compte.get(h) || 0) + 1); });
  const idx = [...compte.keys()];
  const norme = Math.sqrt([...compte.values()].reduce((s, v) => s + v * v, 0)) || 1;
  return { idx, val: idx.map(i => compte.get(i) / norme) };
}

/* générateur pseudo-aléatoire reproductible */
function alea(graine) { let x = graine >>> 0 || 1; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; }; }

class Reseau {
  constructor(classes, cachee = 48, graine = 7) {
    this.classes = classes;
    this.H = cachee;
    const r = alea(graine), C = classes.length, H = cachee;
    const init = (n, ech) => Float32Array.from({ length: n }, () => (r() * 2 - 1) * ech);
    this.W1 = init(DIM * H, 0.08);            // caractéristiques → cachée
    this.b1 = new Float32Array(H);
    this.W2 = init(H * C, Math.sqrt(2 / H));  // cachée → classes
    this.b2 = new Float32Array(C);
  }

  avant(x) {
    const H = this.H, C = this.classes.length, h = new Float32Array(H);
    for (let j = 0; j < H; j++) h[j] = this.b1[j];
    for (let k = 0; k < x.idx.length; k++) {
      const base = x.idx[k] * H, v = x.val[k];
      for (let j = 0; j < H; j++) h[j] += this.W1[base + j] * v;
    }
    for (let j = 0; j < H; j++) if (h[j] < 0) h[j] = 0;
    const z = new Float32Array(C);
    for (let c = 0; c < C; c++) { let s = this.b2[c]; for (let j = 0; j < H; j++) s += h[j] * this.W2[j * C + c]; z[c] = s; }
    let m = -Infinity; for (const v of z) if (v > m) m = v;
    let somme = 0; const p = new Float32Array(C);
    for (let c = 0; c < C; c++) { p[c] = Math.exp(z[c] - m); somme += p[c]; }
    for (let c = 0; c < C; c++) p[c] /= somme;
    return { h, p };
  }

  /* exemples : [{ x, y }] (y = indice de classe) */
  entrainer(exemples, { epoques = 8, pas = 0.02, l2 = 1e-6, graine = 3, journal = null } = {}) {
    const H = this.H, C = this.classes.length, r = alea(graine);
    /* Adam, paresseux sur W1 (on ne met à jour que les lignes actives) */
    const mW1 = new Float32Array(this.W1.length), vW1 = new Float32Array(this.W1.length);
    const mW2 = new Float32Array(this.W2.length), vW2 = new Float32Array(this.W2.length);
    const mb1 = new Float32Array(H), vb1 = new Float32Array(H), mb2 = new Float32Array(C), vb2 = new Float32Array(C);
    const B1 = 0.9, B2 = 0.999, EPS = 1e-8;
    let t = 0;
    const ordre = exemples.map((_, i) => i);
    for (let e = 0; e < epoques; e++) {
      for (let i = ordre.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ordre[i], ordre[j]] = [ordre[j], ordre[i]]; }
      let perte = 0, bons = 0;
      const lr = pas * (1 - e / (epoques + 2));
      for (const n of ordre) {
        const { x, y } = exemples[n];
        const { h, p } = this.avant(x);
        perte -= Math.log(p[y] + 1e-9);
        let best = 0; for (let c = 1; c < C; c++) if (p[c] > p[best]) best = c;
        if (best === y) bons++;
        t++;
        const c1 = 1 - Math.pow(B1, t), c2 = 1 - Math.pow(B2, t);
        const maj = (w, m, v, i, g) => {
          m[i] = B1 * m[i] + (1 - B1) * g; v[i] = B2 * v[i] + (1 - B2) * g * g;
          w[i] -= lr * (m[i] / c1) / (Math.sqrt(v[i] / c2) + EPS);
        };
        const dz = Float32Array.from(p); dz[y] -= 1;
        const dh = new Float32Array(H);
        for (let j = 0; j < H; j++) {
          if (h[j] <= 0) continue;
          let s = 0; for (let c = 0; c < C; c++) s += dz[c] * this.W2[j * C + c];
          dh[j] = s;
        }
        for (let j = 0; j < H; j++) for (let c = 0; c < C; c++) { const i = j * C + c; maj(this.W2, mW2, vW2, i, dz[c] * h[j] + l2 * this.W2[i]); }
        for (let c = 0; c < C; c++) maj(this.b2, mb2, vb2, c, dz[c]);
        for (let j = 0; j < H; j++) if (dh[j]) maj(this.b1, mb1, vb1, j, dh[j]);
        for (let k = 0; k < x.idx.length; k++) {
          const base = x.idx[k] * H, v = x.val[k];
          for (let j = 0; j < H; j++) if (dh[j]) maj(this.W1, mW1, vW1, base + j, dh[j] * v);
        }
      }
      if (journal) journal(e + 1, perte / ordre.length, bons / ordre.length);
    }
  }

  predire(texte) {
    const { p } = this.avant(caracteristiques(texte));
    const res = this.classes.map((c, i) => ({ classe: c, p: p[i] })).sort((a, b) => b.p - a.p);
    return res;
  }

  /* sauvegarde compacte : seules les lignes non nulles de W1 changent vraiment,
     mais on garde tout pour rester simple (≈ 6 Mo en base64) */
  exporter() {
    const b64 = (a) => Buffer.from(a.buffer, a.byteOffset, a.byteLength).toString('base64');
    return { version: 1, classes: this.classes, H: this.H, DIM, W1: b64(this.W1), b1: b64(this.b1), W2: b64(this.W2), b2: b64(this.b2) };
  }
  static importer(o) {
    if (!o || o.version !== 1 || o.DIM !== DIM) return null;
    const r = new Reseau(o.classes, o.H);
    const f = (s) => { const b = Buffer.from(s, 'base64'); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4).slice(); };
    r.W1 = f(o.W1); r.b1 = f(o.b1); r.W2 = f(o.W2); r.b2 = f(o.b2);
    return r;
  }
}

module.exports = { Reseau, caracteristiques, hacher, alea };
