'use strict';
/* Calcul des ressources de base, comme le calculateur d'ingrédients du site :
   chaque matériau fabricable est décomposé jusqu'aux ressources de base. */
const { etat } = require('./site');

function catalogue() {
  const c = {};
  etat.donnees.ITEMS.forEach(o => { if (o.mats) c[o.nom] = { miel: o.miel || 0, mats: o.mats }; });
  Object.entries(etat.donnees.RECETTES_CRAFT || {}).forEach(([n, r]) => { c[n] = { miel: r.miel || 0, mats: r.mats || [] }; });
  return c;
}

/* → { miel, base: Map(nom → qté), etapes: Map(nom → qté) } */
function decomposer(nom, qte = 1) {
  const cat = catalogue();
  const base = new Map(), etapes = new Map();
  let miel = 0;
  const visiter = (n, q, prof) => {
    const r = cat[n];
    if (!r || prof > 12) { base.set(n, (base.get(n) || 0) + q); return; }
    if (prof > 0) etapes.set(n, (etapes.get(n) || 0) + q);
    miel += (r.miel || 0) * q;
    r.mats.forEach(([m, sous]) => visiter(sous, m * q, prof + 1));
  };
  visiter(nom, qte, 0);
  return { miel, base, etapes, connu: !!cat[nom] };
}

/* Durée d'un craft au Blender : 5 minutes par objet, quel qu'il soit. */
const MINUTES_BLENDER = 5;
const auBlender = (o) => !!(o && o.mats && /blender/i.test(o.lieu || ''));

module.exports = { decomposer, catalogue, MINUTES_BLENDER, auBlender };
