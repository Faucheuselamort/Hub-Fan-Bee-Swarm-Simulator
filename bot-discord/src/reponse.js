'use strict';
/* Répondre à une question libre : recherche dans les fiches, puis réponse
   rédigée (par l'IA si elle est configurée, sinon par le bot lui-même). */
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { chercher, intention } = require('./recherche');
const { messageFiche, texteFiche, L } = require('./fiches');
const { iaActive, rediger } = require('./ia');
const { decomposer } = require('./recette');
const { etat } = require('./site');
const { normaliser, fmtMiel, tr, versDiscord, texteBrut, couper, devinerLangue } = require('./outils');

const ENTITES = ['item', 'sticker', 'beequip', 'amulette', 'mob', 'abeille', 'mutation', 'champ'];
const SEUIL_SUR = 34;       // au-dessus : on sait de quoi parle la question
const SEUIL_MIN = 6;        // en dessous : rien de pertinent

const dico = () => etat.donnees.TXT_EN || {};

/* phrase de réponse sans IA, selon l'intention de la question */
function phraseAuto(f, quoi, lang) {
  const o = f.data, n = `**${f.nom}**`;
  if (f.type === 'item') {
    if (quoi === 'recette' || (quoi === 'prix' && o.mats)) {
      if (!o.mats) return L(lang, `${n} ne se fabrique pas : ${o.miel !== undefined ? `il coûte 🍯 **${fmtMiel(o.miel, lang)}**.` : "il s'obtient autrement (voir la fiche)."}`, `${n} isn't crafted: ${o.miel !== undefined ? `it costs 🍯 **${fmtMiel(o.miel, lang)}**.` : 'you get it another way (see the card).'}`);
      const mats = o.mats.map(([q, m]) => `${fmtMiel(q, lang)} ${m}`).join(', ');
      const r = decomposer(o.nom, 1);
      let p = quoi === 'prix'
        ? L(lang, `${n} coûte 🍯 **${fmtMiel(o.miel || 0, lang)}** + ${mats}.`, `${n} costs 🍯 **${fmtMiel(o.miel || 0, lang)}** + ${mats}.`)
        : L(lang, `Pour fabriquer ${n} : 🍯 **${fmtMiel(o.miel || 0, lang)}** + ${mats}.`, `To craft ${n}: 🍯 **${fmtMiel(o.miel || 0, lang)}** + ${mats}.`);
      if (r.etapes.size && r.miel > (o.miel || 0)) p += L(lang, ` En tout, ça fait 🍯 **${fmtMiel(r.miel, lang)}** de miel une fois tout décomposé.`, ` All in all that's 🍯 **${fmtMiel(r.miel, lang)}** honey once everything is broken down.`);
      return p;
    }
    if (quoi === 'prix') return o.miel !== undefined ? L(lang, `${n} coûte 🍯 **${fmtMiel(o.miel, lang)}**.`, `${n} costs 🍯 **${fmtMiel(o.miel, lang)}**.`) : L(lang, `Le site n'indique pas de prix en miel pour ${n}.`, `The site doesn't list a honey price for ${n}.`);
    if (quoi === 'lieu' && o.lieu) return L(lang, `${n} s'obtient : ${tr(o, 'lieu', lang, dico())}.`, `You get ${n} from: ${tr(o, 'lieu', lang, dico())}.`);
    if (quoi === 'stats' && o.fiche && o.fiche.stats) return L(lang, `${n} donne : ${o.fiche.stats.join(', ')}.`, `${n} gives: ${o.fiche.stats.join(', ')}.`);
  }
  if (f.type === 'sticker') {
    if (quoi === 'lieu' && o.lieu) return L(lang, `${n} s'obtient : ${tr(o, 'lieu', lang, dico())}.`, `You get ${n} from: ${tr(o, 'lieu', lang, dico())}.`);
    if (o.valeur && (quoi === 'prix' || quoi === 'general')) return L(lang, `${n} vaut environ **${o.valeur} signs** en trade.`, `${n} is worth about **${o.valeur} signs** in trades.`);
  }
  if (f.type === 'beequip') {
    if (quoi === 'lieu' && o.lieu) return L(lang, `${n} s'obtient : ${tr(o, 'lieu', lang, dico())}.`, `You get ${n} from: ${tr(o, 'lieu', lang, dico())}.`);
    if (quoi === 'stats' || quoi === 'general') return L(lang, `${n} : ${tr(o, 'stats', lang, dico())}${o.hive ? ` · bonus de ruche : ${tr(o, 'hive', lang, dico())}` : ''}.`, `${n}: ${tr(o, 'stats', lang, dico())}${o.hive ? ` · hive bonus: ${tr(o, 'hive', lang, dico())}` : ''}.`);
  }
  if (f.type === 'amulette') {
    if (quoi === 'lieu') return L(lang, `${n} s'obtient : ${versDiscord(o.lieu)}.`, `You get ${n} from: ${versDiscord(dico()[o.lieu] || o.lieu)}.`);
    return L(lang, `${n} : ${versDiscord(o.effet)}.`, `${n}: ${versDiscord(dico()[o.effet] || o.effet)}.`);
  }
  if (f.type === 'mob') {
    const m = lang === 'en' && o.en ? { ...o, ...o.en } : o, st = m.stats || {};
    if (quoi === 'lieu' && m.spots && m.spots.length) return L(lang, `${n} se trouve : ${m.spots.map(s => texteBrut(s.champ)).join(', ')}.`, `${n} is found in: ${m.spots.map(s => texteBrut(s.champ)).join(', ')}.`);
    const pv = m.pv ? Object.entries(m.pv).map(([k, v]) => `niv. ${k} : ${v}`).join(', ') : '';
    return L(lang, `${n}${st.niveau ? ` (niveau ${st.niveau})` : ''}${pv ? ` — PV : ${pv}` : ''}${st.respawn ? ` — réapparition : ${st.respawn}` : ''}.`, `${n}${st.niveau ? ` (level ${st.niveau})` : ''}${pv ? ` — HP: ${pv}` : ''}${st.respawn ? ` — respawn: ${st.respawn}` : ''}.`);
  }
  if (f.type === 'champ') {
    const t = (lang === 'en' && o.en) || o.fr || o.en;
    if (t) return `${n} : ` + t.cols.slice(1).map((c, k) => `${c.toLowerCase()} **${t.row[k + 1]}**`).join(', ') + '.';
  }
  const desc = tr(o, 'desc', lang, dico());
  return desc ? `${n} : ${versDiscord(desc)}` : L(lang, `Voici la fiche de ${n}.`, `Here is the card for ${n}.`);
}

function boutons(fiches, lang) {
  const vus = new Set(), row = new ActionRowBuilder();
  fiches.forEach(f => {
    if (vus.has(f.url) || row.components.length >= 5) return;
    vus.add(f.url);
    row.addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(f.url).setLabel(couper(f.nom, 70)).setEmoji('🐝'));
  });
  return row.components.length ? [row] : [];
}

/* → message Discord prêt à envoyer, ou null si rien de pertinent (mode discret) */
async function repondre(question, { lang = null, discret = false } = {}) {
  lang = lang || devinerLangue(question);
  const quoi = intention(normaliser(question));
  const res = chercher(question, { limite: 6 });
  const top = res[0];

  if (!top || top.score < SEUIL_MIN) {
    if (discret) return null;
    return { content: L(lang, "🐝 Je n'ai rien trouvé sur le site pour cette question. Essaie avec le nom exact de l'objet, ou regarde directement sur le site.", "🐝 I couldn't find anything on the site for that. Try the item's exact name, or have a look on the site directly."),
      components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setURL(etat.siteUrl + '/app.html').setLabel('Ruche & Outils').setEmoji('🐝'))] };
  }

  const pertinentes = res.filter(x => x.score >= Math.max(SEUIL_MIN, top.score * 0.35)).map(x => x.f);
  const sur = top.score >= SEUIL_SUR && ENTITES.includes(top.f.type) ? top.f : null;

  /* 1. avec IA : réponse rédigée à partir des fiches trouvées */
  if (iaActive()) {
    try {
      const extraits = pertinentes.slice(0, 5).map(f => couper(texteFiche(f, lang), 2500));
      const texte = await rediger(couper(question, 600), extraits);
      if (texte) {
        const msg = { content: couper(texte, 1900), components: boutons(pertinentes, lang), allowedMentions: { parse: [] } };
        if (sur) { const fiche = await messageFiche(sur, lang); msg.embeds = fiche.embeds; }
        return msg;
      }
    } catch (err) { console.warn('[ia]', err.message); }
  }

  /* 2. sans IA (ou si elle échoue) : phrase automatique + fiche */
  if (sur) {
    const fiche = await messageFiche(sur, lang);
    return { content: couper(phraseAuto(sur, quoi, lang), 1900), embeds: fiche.embeds, components: boutons(pertinentes, lang), allowedMentions: { parse: [] } };
  }
  if (discret && top.score < 12) return null;
  const e = new EmbedBuilder().setColor(0x8FE86B)
    .setTitle(L(lang, 'Ce que j\'ai trouvé sur le site', 'What I found on the site'))
    .setDescription(pertinentes.slice(0, 6).map(f => {
      const extrait = f.type === 'guide' ? couper(f.data.texte, 140) : couper(texteBrut(tr(f.data, 'desc', lang, dico()) || f.data.d || ''), 120);
      return `**[${f.nom}](${f.url})**${extrait ? '\n' + extrait : ''}`;
    }).join('\n\n'));
  return { embeds: [e], components: boutons(pertinentes, lang), allowedMentions: { parse: [] } };
}

module.exports = { repondre, phraseAuto };
