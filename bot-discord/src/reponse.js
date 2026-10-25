'use strict';
/* Répondre à une question libre : recherche dans les fiches, puis réponse
   rédigée (par l'IA si elle est configurée, sinon par le bot lui-même). */
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { chercher, intention } = require('./recherche');
const { messageFiche, texteFiche, L } = require('./fiches');
const { iaActive, rediger } = require('./ia');
const { comprendre } = require('./ia-maison');
const { decomposer } = require('./recette');
const { etat } = require('./site');
const { normaliser, fmtMiel, fmtQte, tr, versDiscord, texteBrut, couper, devinerLangue } = require('./outils');

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
      const mats = o.mats.map(([q, m]) => `${fmtQte(q, lang)} ${m}`).join(', ');
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

/* Après tel objet : les objets suivants de la même catégorie, par prix */
function suivants(f, lang) {
  const o = f.data;
  if (f.type !== 'item' || o.miel === undefined) return null;
  const liste = etat.donnees.ITEMS.filter(x => x.categorie === o.categorie && x.miel !== undefined && x.miel > o.miel && !x.vue)
    .sort((a, b) => a.miel - b.miel).slice(0, 3);
  if (!liste.length) return L(lang, `**${f.nom}** est déjà l'un des meilleurs de sa catégorie (${T(o.categorie, lang)}).`, `**${f.nom}** is already one of the best in its category (${T(o.categorie, lang)}).`);
  return L(lang, `Après **${f.nom}**, les ${T(o.categorie, lang).toLowerCase()} suivants sont : `, `After **${f.nom}**, the next ${T(o.categorie, lang).toLowerCase()} are: `)
    + liste.map(x => `**${x.nom}** (🍯 ${fmtMiel(x.miel, lang)}${x.mats ? ' + ' + L(lang, 'matériaux', 'materials') : ''})`).join(', ') + '.';
}
const T = (txt, lang) => (lang === 'en' && dico()[txt]) || txt;

/* recette multipliée : « 1 500 Glue » → ingrédients directs × 1 500 + total décomposé */
function phraseRecette(f, qte, lang) {
  const o = f.data, d = decomposer(f.nom, qte);
  const mats = o.mats.map(([q, m]) => `**${fmtQte(q * qte, lang)}** ${m}`).join(', ');
  const miel = (o.miel || 0) * qte;
  let p = L(lang, `Pour **${fmtQte(qte, lang)} ${f.nom}** : `, `For **${fmtQte(qte, lang)} ${f.nom}**: `) + (miel ? `🍯 **${fmtMiel(miel, lang)}** + ` : '') + mats + '.';
  if (d.etapes.size) p += L(lang, `\nEn ressources de base : `, `\nIn base resources: `) + (d.miel ? `🍯 **${fmtMiel(d.miel, lang)}**, ` : '')
    + [...d.base.entries()].map(([n, q]) => `**${fmtQte(q, lang)}** ${n}`).join(', ') + '.';
  return p;
}

/* « faut combien de Blue Extract pour le Tide Popper » : quelle fiche est la recette ? */
function cibleRecette(entites) {
  const fiches = entites.map(e => e.fiche).filter(f => f.type === 'item');
  for (const f of fiches) if (f.data.mats && fiches.some(g => g !== f && f.data.mats.some(m => m[1] === g.nom))) {
    return { cible: f, ingredient: fiches.find(g => g !== f && f.data.mats.some(m => m[1] === g.nom)) };
  }
  return { cible: fiches.find(f => f.data.mats) || fiches[0] || null, ingredient: null };
}

/* conseils : sections des guides et explications du site */
function blocConseil(question, lang, objet) {
  let res = chercher(question, { types: ['guide', 'info'], limite: 14 }).filter(x => x.score > 3);
  /* « ruche rouge », « blue hive »… : on garde le guide de la bonne couleur */
  const q = normaliser(question);
  const COUL = [['Red', /\b(rouge|red)\b/], ['Blue', /\b(bleue?|blue)\b/], ['White', /\b(blanche?|white)\b/], ['Incolore', /\b(incolore|colorless|neutre)\b/]];
  const coul = COUL.find(([, re]) => re.test(q));
  if (coul) { const filtre = res.filter(x => x.f.type === 'info' || x.f.data.cat === coul[0]); if (filtre.length) res = filtre; }
  const preferes = res.filter(x => x.f.type === 'info' || !x.f.lang || x.f.lang === lang);
  const choix = (preferes.length ? preferes : res).slice(0, 3).map(x => x.f);
  if (!choix.length) return null;
  const e = new EmbedBuilder().setColor(0x5BA7E0).setTitle(L(lang, 'Ce que disent les guides du site', 'What the site guides say'))
    .setDescription(choix.map(f => {
      const txt = f.type === 'guide' ? f.data.texte : texteBrut(`${f.data.d || ''}`);
      return `**[${f.nom}](${f.url})**\n${couper(txt.replace(/\s*\n\s*/g, ' '), 330)}`;
    }).join('\n\n'));
  return { embed: e, fiches: choix };
}

function messageAide(lang) {
  return L(lang,
    "🐝 Je suis **Ruche IA**, le bot du site Ruche & Outils. Pose-moi une question sur Bee Swarm Simulator (« combien coûte le Tacky Planter ? », « où trouver du Glitter ? », « pv du King Beetle », « Kazoo ou Thimble ? »), ou tape `/aide` pour voir toutes mes commandes.",
    "🐝 I'm **Hive AI**, the Hive & Tools site bot. Ask me anything about Bee Swarm Simulator (\"how much is the Tacky Planter?\", \"where do I get Glitter?\", \"King Beetle hp\", \"Kazoo or Thimble?\"), or type `/help` to see all my commands.");
}

const QUOI = { prix: 'prix', recette: 'recette', lieu: 'lieu', stats: 'stats', combat: 'mob', valeur: 'prix', definition: 'general' };

/* Réponse fabriquée par Ruche IA (l'IA maison) ; null si elle n'est pas sûre d'elle */
async function reponseMaison(question, lang, discret) {
  let c;
  try { c = comprendre(question); } catch (e) { return undefined; }
  const ents = c.entites.filter(e => e.score >= 0.8);
  const sur = c.confiance >= 0.55;
  const msg = (content, embeds = [], fiches = []) => ({ content: couper(content || '', 1900) || undefined, embeds, components: boutons(fiches, lang), allowedMentions: { parse: [] } });

  if (c.intention === 'hors_sujet' && sur) {
    if (discret) return null;
    return msg(L(lang, "🐝 Je réponds aux questions sur Bee Swarm Simulator : demande-moi un prix, une recette, où trouver un objet, les stats d'un beequip…", "🐝 I answer Bee Swarm Simulator questions: ask me for a price, a recipe, where to find an item, beequip stats…"));
  }
  if (c.intention === 'aide' && sur) return msg(messageAide(lang));

  if (c.intention === 'comparaison' && ents.length >= 2) {
    const [a, b] = [ents[0].fiche, ents[1].fiche];
    const fa = await messageFiche(a, lang), fb = await messageFiche(b, lang);
    let phrase = L(lang, `Voici **${a.nom}** et **${b.nom}** côte à côte.`, `Here are **${a.nom}** and **${b.nom}** side by side.`);
    if (a.type === 'item' && b.type === 'item' && a.data.miel !== undefined && b.data.miel !== undefined)
      phrase += L(lang, ` Prix : 🍯 ${fmtMiel(a.data.miel, lang)} contre 🍯 ${fmtMiel(b.data.miel, lang)}.`, ` Price: 🍯 ${fmtMiel(a.data.miel, lang)} vs 🍯 ${fmtMiel(b.data.miel, lang)}.`);
    if (a.type === 'beequip' && b.type === 'beequip')
      phrase += L(lang, ` Le meilleur choix dépend de ta ruche : regarde surtout le **bonus de ruche** et les abeilles autorisées.`, ` The best pick depends on your hive: look mostly at the **hive bonus** and allowed bees.`);
    if (a.type === 'sticker' && b.type === 'sticker' && a.data.valeur && b.data.valeur)
      phrase += L(lang, ` Valeur : ${a.data.valeur} contre ${b.data.valeur} signs.`, ` Value: ${a.data.valeur} vs ${b.data.valeur} signs.`);
    return msg(phrase, [fa.embeds[0], fb.embeds[0]], [a, b]);
  }

  if (c.intention === 'recette' && ents.length) {
    const { cible, ingredient } = cibleRecette(ents);
    if (cible) {
      const qte = (ents.find(e => e.fiche === cible) || {}).quantite || 1;
      const fiche = await messageFiche(cible, lang);
      let phrase = qte > 1 && cible.data.mats ? phraseRecette(cible, qte, lang) : phraseAuto(cible, 'recette', lang);
      if (ingredient && cible.data.mats) {
        const direct = (cible.data.mats.find(m => m[1] === ingredient.nom) || [0])[0] * qte;
        const d = decomposer(cible.nom, qte);
        const total = d.base.get(ingredient.nom) || d.etapes.get(ingredient.nom) || direct;
        const pour = qte > 1 ? `${fmtQte(qte, lang)} ${cible.nom}` : cible.nom;
        phrase = L(lang, `Pour **${pour}**, il faut **${fmtQte(direct, lang)} ${ingredient.nom}**`, `**${pour}** needs **${fmtQte(direct, lang)} ${ingredient.nom}**`)
          + (qte > 1 ? L(lang, ` (${fmtQte(direct / qte, lang)} par ${cible.nom})`, ` (${fmtQte(direct / qte, lang)} per ${cible.nom})`) : '')
          + (total !== direct ? L(lang, `, soit **${fmtQte(total, lang)}** en tout une fois les autres ingrédients décomposés.`, `, so **${fmtQte(total, lang)}** in total once the other ingredients are broken down.`) : '.');
      }
      return msg(phrase, fiche.embeds, [cible]);
    }
  }

  if (c.intention === 'prix' && ents[0] && ents[0].quantite > 1 && ents[0].fiche.data.miel !== undefined) {
    const f = ents[0].fiche, q = ents[0].quantite;
    const fiche = await messageFiche(f, lang);
    const phrase = f.data.mats ? phraseRecette(f, q, lang)
      : L(lang, `**${fmtQte(q, lang)} ${f.nom}** coûtent 🍯 **${fmtMiel(f.data.miel * q, lang)}** (🍯 ${fmtMiel(f.data.miel, lang)} l'unité).`, `**${fmtQte(q, lang)} ${f.nom}** cost 🍯 **${fmtMiel(f.data.miel * q, lang)}** (🍯 ${fmtMiel(f.data.miel, lang)} each).`);
    return msg(phrase, fiche.embeds, [f]);
  }

  if (c.intention === 'conseil' && sur) {
    const objet = ents[0] && ents[0].fiche;
    const bloc = blocConseil(question, lang, objet);
    const apres = objet ? suivants(objet, lang) : null;
    if (bloc || apres) return msg(apres || L(lang, 'Voici ce que les guides du site conseillent :', 'Here is what the site guides recommend:'), bloc ? [bloc.embed] : [], bloc ? bloc.fiches : [objet].filter(Boolean));
  }

  if (QUOI[c.intention] && ents.length) {
    const f = ents[0].fiche;
    const fiche = await messageFiche(f, lang);
    return msg(phraseAuto(f, QUOI[c.intention], lang), fiche.embeds, ents.slice(0, 3).map(e => e.fiche));
  }
  return undefined;     // pas assez sûr : on passe au moteur de recherche
}

/* → message Discord prêt à envoyer, ou null si rien de pertinent (mode discret) */
async function repondre(question, { lang = null, discret = false } = {}) {
  lang = lang || devinerLangue(question);

  /* 1. l'IA externe facultative (si configurée) rédige à partir des fiches */
  if (iaActive()) {
    let c = null; try { c = comprendre(question); } catch (e) { /* pas prête */ }
    if (c && c.intention === 'hors_sujet' && c.confiance >= 0.55 && discret) return null;
    const res = chercher(question, { limite: 6 });
    const ents = c ? c.entites.filter(e => e.score >= 0.8).map(e => e.fiche) : [];
    const fiches = [...new Set([...ents, ...res.filter(x => x.score >= SEUIL_MIN).map(x => x.f)])].slice(0, 5);
    if (fiches.length) {
      try {
        const texte = await rediger(couper(question, 600), fiches.map(f => couper(texteFiche(f, lang), 2500)));
        if (texte) {
          const m = { content: couper(texte, 1900), components: boutons(fiches, lang), allowedMentions: { parse: [] } };
          if (ents[0]) m.embeds = (await messageFiche(ents[0], lang)).embeds;
          return m;
        }
      } catch (err) { console.warn('[ia externe]', err.message); }
    }
  }

  /* 2. Ruche IA, l'IA maison */
  const maison = await reponseMaison(question, lang, discret);
  if (maison !== undefined) return maison;

  /* 3. moteur de recherche */
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
