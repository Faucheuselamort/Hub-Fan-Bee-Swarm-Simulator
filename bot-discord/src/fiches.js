'use strict';
/* Mise en forme des fiches pour Discord (embeds + bouton vers le site). */
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { etat, imageValide, lien } = require('./site');
const { versDiscord, texteBrut, fmtMiel, fmtQte, tr, trTexte, couper } = require('./outils');
const { decomposer } = require('./recette');

const L = (lang, fr, en) => (lang === 'en' ? en : fr);
const COULEURS = { item: 0x8FE86B, sticker: 0xF4C542, beequip: 0x6FD3C8, amulette: 0xB8A5ED, mob: 0xF0736A, abeille: 0xF5D04B, mutation: 0xE83A36, champ: 0x7BC96F, guide: 0x5BA7E0, info: 0x93A7B0 };
const PALIER_EN = { Bronze: 'Bronze', Argent: 'Silver', Or: 'Gold', Diamant: 'Diamond', 'Suprême': 'Supreme' };
const COULEUR_PALIER = { Bronze: 0xC08457, Argent: 0xC9D1D9, Or: 0xF0B429, Diamant: 0x7FE4E0, 'Suprême': 0x8FE86B };

const dico = () => etat.donnees.TXT_EN || {};
const T = (txt, lang) => trTexte(txt, lang, dico());
const champ = (nom, valeur, enLigne = true) => valeur ? { name: nom, value: couper(String(valeur), 1024), inline: enLigne } : null;
const liste = (arr, max = 15) => {
  const l = arr.slice(0, max).map(x => '• ' + x);
  if (arr.length > max) l.push(`… +${arr.length - max}`);
  return l.join('\n');
};

function boutonSite(url, lang, label) {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(url).setLabel(label || L(lang, 'Voir sur le site', 'View on the site')).setEmoji('🐝'));
}

function base(f, lang) {
  const e = new EmbedBuilder().setColor(COULEURS[f.type] || 0x8FE86B).setTitle(f.nom).setURL(f.url)
    .setFooter({ text: L(lang, 'Ruche & Outils · données du site', 'Hive & Tools · data from the site') });
  return e;
}

/* ---------- Items ---------- */
function caracsItem(o, lang) {
  const f = o.fiche || {}, c = [];
  if (f.cap) c.push(`${L(lang, 'Capacité', 'Capacity')} : **${f.cap}** pollen`);
  if (f.outil) {
    const u = f.outil;
    if (u.portee) c.push(`${L(lang, 'Fleurs touchées', 'Flowers reached')} : **${u.portee}**`);
    if (u.motif) c.push(`${L(lang, 'Motif', 'Pattern')} : **${u.motif}**`);
    if (u.recolte) c.push(`${L(lang, 'Pollen par fleur', 'Pollen per flower')} : **${u.recolte}**`);
    if (u.cadence) c.push(`${L(lang, "Durée d'un coup", 'Time per swing')} : **${u.cadence}**`);
  }
  if (f.arroseur) {
    const a = f.arroseur;
    c.push(`${L(lang, 'Arroseurs', 'Sprinklers')} : **${a.n}** · ${L(lang, 'rayon', 'radius')} **${a.rayon}** · ${L(lang, 'puissance', 'power')} **${a.puissance}**`);
    if (a.rythme) c.push(`${L(lang, 'Rythme', 'Rate')} : ${L(lang, 'toutes les', 'every')} **${a.rythme}** · ${L(lang, 'installation', 'setup')} **${a.montage}**`);
  }
  if (f.planteur) {
    const p = f.planteur;
    c.push(`${L(lang, 'Pousse', 'Grow time')} : **${p.pousse}** · ${L(lang, 'pollen stocké', 'pollen stored')} **${p.pollen}**`);
    c.push(`${L(lang, 'Réutilisable', 'Reusable')} : **${p.reutil ? L(lang, 'oui', 'yes') : L(lang, 'non, usage unique', 'no, single use')}**${p.max ? ` · max **${p.max}**` : ''}`);
    if (p.bonusFr) c.push(L(lang, p.bonusFr, p.bonusEn || p.bonusFr));
    if (p.nectar && p.nectar.length) c.push('Nectar : ' + p.nectar.join(', '));
  }
  if (f.vol) c.push(`${L(lang, 'Vitesse', 'Speed')} : **${f.vol.vitesse}** · ${L(lang, 'chute', 'fall rate')} **${f.vol.flottement}**`);
  if (f.conso) c.push(`${L(lang, 'Recharge', 'Cooldown')} : **${f.conso.recharge}**${f.conso.max ? ` · max **${f.conso.max}**` : ''}`);
  return c.join('\n');
}

function ficheItem(f, lang) {
  const o = f.data, fi = o.fiche || {}, e = base(f, lang);
  let desc = versDiscord(tr(o, 'desc', lang, dico()) || '');
  if (fi.jeu) desc += (desc ? '\n\n' : '') + `> *${fi.jeu}*`;
  if (desc) e.setDescription(couper(desc, 4000));
  const fields = [
    champ(L(lang, 'Catégorie', 'Category'), T(o.categorie, lang)),
    o.miel !== undefined ? champ(o.mats ? L(lang, 'Miel + matériaux', 'Honey + materials') : L(lang, 'Prix', 'Price'), '🍯 ' + fmtMiel(o.miel, lang)) : null,
    o.mats ? champ(L(lang, 'Recette', 'Recipe'), liste(o.mats.map(([q, n]) => `${fmtQte(q, lang)} × ${n}`)), false) : null,
    champ(L(lang, 'Condition', 'Requirement'), tr(o, 'prealable', lang, dico()), false),
    champ(L(lang, "Où l'obtenir", 'Where to get it'), tr(o, 'lieu', lang, dico()), false),
    champ(L(lang, 'Caractéristiques', 'Stats'), caracsItem(o, lang), false),
    fi.stats && fi.stats.length ? champ(L(lang, 'Bonus quand tu le portes', 'Bonuses when equipped'), liste(fi.stats, 20), false) : null,
    etat.sertA[o.nom] ? champ(L(lang, 'Sert à fabriquer', 'Used to craft'), couper(etat.sertA[o.nom].join(', '), 1000), false) : null,
  ].filter(Boolean);
  e.addFields(fields);
  if (o.mats) {
    const r = decomposer(o.nom, 1);
    if (r.etapes.size) e.addFields({ name: L(lang, 'Total en ressources de base', 'Total in base resources'),
      value: couper(`🍯 **${fmtMiel(r.miel, lang)}**\n` + [...r.base.entries()].map(([n, q]) => `${fmtQte(q, lang)} × ${n}`).join(' · '), 1024) });
  }
  return e;
}

/* ---------- Stickers ---------- */
function ficheSticker(f, lang) {
  const o = f.data, e = base(f, lang);
  const desc = tr(o, 'desc', lang, dico());
  if (desc) e.setDescription(`*${versDiscord(desc)}*`);
  e.addFields([
    champ(L(lang, 'Catégorie', 'Category'), T(o.categorie, lang)),
    champ(L(lang, 'Valeur (trade)', 'Trade value'), o.valeur ? `${o.valeur} signs` : null),
    champ('Stack Boost', tr(o, 'boost', lang, dico())),
    champ('Stack Reward', o.reward),
    champ(L(lang, "Où l'obtenir", 'Where to get it'), tr(o, 'lieu', lang, dico()), false),
  ].filter(Boolean));
  return e;
}

/* ---------- Beequips ---------- */
function ficheBeequip(f, lang) {
  const o = f.data, e = base(f, lang);
  const desc = tr(o, 'desc', lang, dico());
  if (desc) e.setDescription(versDiscord(desc));
  const st = tr(o, 'stats', lang, dico()), hv = tr(o, 'hive', lang, dico());
  e.addFields([
    champ(L(lang, 'Niveau requis', 'Required level'), o.niveau),
    champ(L(lang, 'Limite par ruche', 'Hive limit'), o.limite),
    champ(L(lang, 'Couleur de ruche', 'Hive colour'), tr(o, 'couleur', lang, dico())),
    champ(L(lang, 'Abeilles', 'Bees'), tr(o, 'abeilles', lang, dico()), false),
    st ? champ(L(lang, "Bonus sur l'abeille", 'Bonuses on the bee'), liste(String(st).split(/,\s*(?![^(]*\))/), 20), false) : null,
    hv ? champ(L(lang, 'Bonus de ruche', 'Hive bonuses'), liste(String(hv).split(/,\s*(?![^(]*\))/), 20), false) : null,
    champ(L(lang, "Où l'obtenir", 'Where to get it'), tr(o, 'lieu', lang, dico()), false),
  ].filter(Boolean));
  return e;
}

/* ---------- Amulettes ---------- */
function ficheAmulette(f, lang, palier) {
  const o = f.data, d = etat.donnees, e = base(f, lang);
  const buffs = d.AMULETTES_BUFFS[o.nom] || {};
  const paliers = buffs.paliers ? Object.keys(buffs.paliers) : [];
  if (paliers.length && !paliers.includes(palier)) palier = paliers[paliers.length - 1];
  if (!paliers.length) palier = null;
  if (palier) {
    e.setTitle(`${o.nom} · ${L(lang, palier, PALIER_EN[palier])}`).setColor(COULEUR_PALIER[palier] || COULEURS.amulette);
    e.setThumbnail(`${etat.siteUrl}/images/amulette/${encodeURIComponent(o.nom + ' ' + PALIER_EN[palier])}.webp`);
  }
  e.setDescription(couper(versDiscord(T(o.desc, lang)), 1500));
  e.addFields([
    champ(L(lang, "Où l'obtenir", 'Where to get it'), T(o.lieu, lang), false),
    champ(L(lang, 'Bonus accordés', 'Bonuses granted'), T(o.effet, lang), false),
  ].filter(Boolean));
  const tiers = d.AMULETTES_TIERS[o.tiersId];
  if (tiers && palier) {
    const ligne = tiers.lignes.find(l => l[0] === palier);
    if (ligne) e.addFields({ name: L(lang, `Palier ${palier}`, `${PALIER_EN[palier]} tier`), value: ligne.slice(1).map((v, k) => `${T(tiers.colonnes[k + 1], lang)} : **${versDiscord(T(v, lang))}**`).join('\n') });
  } else if (tiers) {
    e.addFields({ name: T(tiers.titre, lang), value: couper(tiers.lignes.map(l => `**${l[0]}** — ${l.slice(1).map(v => versDiscord(T(v, lang))).join(' · ')}`).join('\n'), 1024) });
  }
  const groupes = buffs.unique || (palier && buffs.paliers[palier]) || [];
  groupes.slice(0, 6).forEach(g => {
    e.addFields({ name: T(g.prise, lang) + ` (${g.stats.length})`, value: couper(g.stats.map(s => `${s.nom} — ${T(s.plage, lang)} · ${s.proba}`).join('\n'), 1024), inline: groupes.length > 2 });
  });
  if (o.notes) e.addFields({ name: L(lang, 'À savoir', 'Worth knowing'), value: couper(versDiscord(T(o.notes, lang)), 1024) });
  if (paliers.length) e.setFooter({ text: L(lang, `Paliers : ${paliers.join(', ')} · option « palier » pour en voir un autre`, `Tiers: ${paliers.map(p => PALIER_EN[p]).join(', ')} · use the "tier" option to see another`) });
  return e;
}

/* ---------- Mobs ---------- */
function ficheMob(f, lang) {
  const m0 = f.data, m = lang === 'en' && m0.en ? { ...m0, ...m0.en } : m0, e = base(f, lang);
  const st = m.stats || {};
  e.addFields([
    champ(L(lang, 'Niveau', 'Level'), st.niveau), champ(L(lang, 'Dégâts', 'Damage'), st.degats),
    champ(L(lang, 'Miel', 'Honey'), st.miel), champ('Bond', st.bond), champ(L(lang, 'Points', 'Points'), st.points),
    champ(L(lang, 'Réapparition', 'Respawn'), st.respawn, false),
  ].filter(Boolean));
  if (m.pv && Object.keys(m.pv).length) e.addFields({ name: L(lang, 'Points de vie par niveau', 'HP by level'), value: couper(Object.entries(m.pv).map(([n, v]) => `niv. ${n} : **${v}**`).join(' · '), 1024) });
  if (m.spots && m.spots.length) e.addFields({ name: L(lang, 'Où le trouver', 'Where to find it'), value: liste(m.spots.map(s => texteBrut(s.champ) + (s.spawn && s.spawn !== '—' ? ` (×${s.spawn})` : '')), 10) });
  const drops = (m.sur || []).map(x => `${x.nom}${x.note ? ' — ' + texteBrut(x.note) : ''}`)
    .concat((m.drops || []).map(x => `${x.nom}${x.chance || x.note ? ' — ' + texteBrut(x.chance || x.note) : ''}`));
  if (drops.length) e.addFields({ name: L(lang, 'Butin', 'Loot'), value: liste(drops, 14) });
  return e;
}

/* ---------- Abeilles, mutations, champs ---------- */
const COULEUR_ABEILLE = { rouge: ['Rouge', 'Red'], bleu: ['Bleue', 'Blue'], incolore: ['Incolore', 'Colorless'] };
function ficheAbeille(f, lang) {
  const o = f.data, e = base(f, lang);
  const c = COULEUR_ABEILLE[o.couleur] || [o.couleur, o.couleur];
  e.addFields([champ(L(lang, 'Couleur', 'Colour'), lang === 'en' ? c[1] : c[0]), champ(L(lang, 'Rareté', 'Rarity'), T(o.rarete, lang))].filter(Boolean));
  const bq = etat.donnees.BEEQUIP.filter(b => new RegExp('\\b' + o.nom + '\\b', 'i').test(b.abeilles || '')).map(b => b.nom);
  if (bq.length) e.addFields({ name: L(lang, 'Beequips réservés', 'Restricted beequips'), value: bq.join(', ') });
  e.setDescription(L(lang, 'Compose ta ruche avec cette abeille dans le Build your Hive du site.', 'Build a hive with this bee in the site\'s Build your Hive.'));
  return e;
}
function ficheMutation(f, lang) {
  const o = f.data, e = base(f, lang);
  if (o.couleur) e.setColor(parseInt(o.couleur.replace('#', ''), 16));
  e.addFields([champ(L(lang, 'Chance', 'Chance'), o.chance), champ(L(lang, 'Plage', 'Range'), o.plage), champ(L(lang, 'Palier', 'Step'), o.incr),
    champ(L(lang, 'Plage au niveau 1', 'Range at level 1'), o.plage1), champ(L(lang, 'Couleur du niveau', 'Level colour'), T(o.couleurNom, lang))].filter(Boolean));
  return e;
}
function ficheChamp(f, lang) {
  const o = f.data, e = base(f, lang);
  const t = (lang === 'en' && o.en) || o.fr || o.en;
  if (t) e.addFields(t.cols.slice(1).map((c, k) => champ(c, t.row[k + 1])).filter(Boolean));
  const zone = lang === 'en' ? o.zoneEn || o.zoneFr : o.zoneFr;
  if (zone) e.setDescription(zone);
  if (o.petales) {
    const p = o.petales, l = [];
    if (p.d && p.d.length) l.push(`${L(lang, 'dominants', 'dominant')} : ${p.d.map(x => T(x, lang)).join(', ')}`);
    if (p.p && p.p.length) l.push(`${L(lang, 'possibles', 'possible')} : ${p.p.map(x => T(x, lang)).join(', ')}`);
    if (p.r && p.r.length) l.push(`${L(lang, 'rares', 'rare')} : ${p.r.map(x => T(x, lang)).join(', ')}`);
    if (l.length) e.addFields({ name: L(lang, 'Pétales (blooms)', 'Petals (blooms)'), value: l.join('\n') });
  }
  return e;
}
function ficheTexte(f, lang) {
  const e = base(f, lang);
  const txt = f.type === 'guide' ? f.data.texte : texteBrut(`${f.data.d || ''}${f.data.fort ? '\n\n' + f.data.fort : ''}`);
  e.setDescription(couper(txt, 1800));
  return e;
}

const CONSTRUCTEURS = { item: ficheItem, sticker: ficheSticker, beequip: ficheBeequip, amulette: ficheAmulette, mob: ficheMob, abeille: ficheAbeille, mutation: ficheMutation, champ: ficheChamp, guide: ficheTexte, info: ficheTexte };

/* message complet : embed + image vérifiée + bouton vers le site */
async function messageFiche(f, lang, opts = {}) {
  const e = CONSTRUCTEURS[f.type](f, lang, opts.palier);
  if (!e.data.thumbnail && f.images && f.images.length) {
    const img = await imageValide(f.images);
    if (img) e.setThumbnail(img);
  }
  return { embeds: [e], components: [boutonSite(f.url, lang)] };
}

/* version texte d'une fiche, donnée à l'IA comme source */
function texteFiche(f, lang) {
  const e = CONSTRUCTEURS[f.type](f, lang).data;
  const l = [`# ${e.title} (${f.type}) — ${f.url}`];
  if (e.description) l.push(e.description);
  (e.fields || []).forEach(x => l.push(`${x.name} : ${x.value}`));
  return l.join('\n').replace(/\*\*/g, '');
}

module.exports = { messageFiche, texteFiche, boutonSite, COULEURS, L, liste };
