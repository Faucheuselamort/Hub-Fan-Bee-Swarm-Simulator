'use strict';
/* Fabrique les questions d'entraînement à partir des données du site.
   Chaque intention a des modèles de phrases (français et anglais, langage
   de joueur compris) ; {X} est remplacé par un vrai nom du jeu, parfois
   mal écrit, abrégé ou traduit, et la phrase reçoit des fautes de frappe. */
const { normaliser } = require('../outils');
const { alea } = require('./reseau');
const { SURNOMS } = require('./entites');

const M = {
  prix: {
    types: ['item_prix'],
    fr: ['combien coute {X}', 'combien coûte le {X}', 'combien coute la {X}', 'prix du {X}', 'prix {X}', 'c est combien le {X}', 'le {X} coute combien',
      '{X} prix', 'combien de miel pour le {X}', 'il faut combien de miel pour acheter le {X}', 'combien pour le {X}', '{X} combien', 'cmb le {X}',
      'cb coute {X}', 'combien ca coute un {X}', 'ca coute cher le {X}', 'quel est le prix du {X}', 'c quoi le prix du {X}', 'le {X} il coute cb',
      'combien de honey pour {X}', 'a combien est le {X}', 'combien faut de miel pour {X}', 'il est a combien le {X}', 'tarif du {X}', 'combien je dois avoir pour le {X}',
      'j ai {N} de miel je peux acheter le {X}', 'j ai {N} je peux me payer le {X}', '{N} de miel c est assez pour le {X}', 'avec {N} je peux avoir le {X}',
      'il me manque combien pour le {X}', 'je peux me payer le {X}', 'le {X} est trop cher ?', 'c est cher le {X}', 'vous savez si le {X} vaut le coup niveau prix'],
    en: ['how much is {X}', 'how much does the {X} cost', '{X} price', 'price of {X}', 'cost of the {X}', 'how much honey for {X}', 'what does {X} cost',
      'how much honey do i need for the {X}', 'whats the price of {X}', '{X} cost', 'how expensive is {X}', 'how much for {X}', 'is {X} expensive', 'how much is a {X}',
      'i have {N} honey can i buy {X}', 'can i afford the {X} with {N}', 'is {N} enough for {X}'],
  },
  recette: {
    types: ['item_recette'],
    fr: ['recette du {X}', 'recette {X}', 'comment fabriquer le {X}', 'comment craft le {X}', 'il faut quoi pour faire le {X}', 'ingredients du {X}',
      'quels materiaux pour le {X}', 'comment on craft {X}', 'craft {X}', 'de quoi j ai besoin pour le {X}', 'qu est ce qu il faut pour le {X}',
      'il faut quoi pour craft {X}', 'les matériaux du {X}', 'cmt on fait le {X}', 'comment faire un {X}', 'composants du {X}', 'le {X} il faut quoi',
      'besoin de quoi pour {X}', 'comment crafter {X}', 'il me faut quoi comme ressources pour le {X}', 'combien de ressources pour le {X}',
      'faut combien de {Y} pour le {X}', 'combien de {Y} pour craft le {X}', 'il faut des {Y} pour le {X} ?', 'combien de {Y} il faut pour faire le {X}',
      'pour avoir le {X} il faut des {Y} ?', 'le {X} il faut combien de {Y}', 'il faut combien de {Y} dans le {X}'],
    en: ['recipe for {X}', 'how to craft {X}', 'what do i need for {X}', '{X} recipe', 'materials for {X}', 'how do you make {X}', 'what s needed to craft the {X}',
      'how do i craft the {X}', '{X} materials', 'what does {X} need', 'ingredients for {X}', 'what items for {X}', 'craft {X}',
      'how many {Y} for {X}', 'how many {Y} do i need for the {X}', 'does {X} need {Y}'],
  },
  lieu: {
    types: ['item', 'sticker', 'beequip', 'amulette', 'mob'],
    fr: ['ou trouver {X}', 'où trouver le {X}', 'comment avoir le {X}', 'comment obtenir {X}', 'ou on drop le {X}', 'ca drop ou le {X}', 'ou est le {X}',
      'comment je peux avoir {X}', 'ou acheter le {X}', 'on trouve ou {X}', '{X} ca s obtient comment', 'comment avoir un {X}', 'comment on a le {X}',
      'cmt avoir {X}', 'comment get {X}', 'ou je peux trouver un {X}', 'je trouve ou le {X}', 'ou est ce qu on achete {X}', 'comment recuperer le {X}',
      'quel mob drop {X}', 'qui vend le {X}', 'ou farm des {X}', 'comment farm {X}', 'il est ou le {X}', 'ou il spawn le {X}', 'comment on obtient la {X}',
      'j arrive pas a trouver de {X}', 'je trouve pas de {X}', 'je trouve jamais de {X}', 'j ai besoin de {X} je les trouve ou', 'comment avoir plein de {X}'],
    en: ['where to get {X}', 'where do i find {X}', 'how to get {X}', 'how do i obtain the {X}', 'where does {X} drop', 'where can i buy {X}', 'where is {X}',
      'how do you get {X}', 'who sells {X}', 'where to farm {X}', 'how can i get a {X}', 'where does the {X} spawn', 'what drops {X}', 'how to obtain {X}',
      'i cant find {X}', 'i need {X} where do i get them', 'best way to get {X}'],
  },
  stats: {
    types: ['beequip', 'item_stats', 'amulette', 'sticker'],
    fr: ['stats du {X}', 'le {X} donne quoi', 'quels bonus donne {X}', '{X} stats', 'c est quoi les stats du {X}', 'ca fait quoi le {X}', 'effet du {X}',
      'bonus {X}', 'les bonus du {X}', 'il donne quoi le {X}', 'le {X} sert a quoi', 'a quoi sert le {X}', 'il est bien le {X}', 'il vaut le coup le {X}',
      'le {X} c est bien', 'quels buffs sur le {X}', 'c est quoi le boost du {X}', 'il fait quoi {X}', 'statistiques du {X}', 'que donne {X}',
      'qu est ce qu on peut drop sur une {X}', 'qu est ce qu on peut avoir sur une {X}', 'quelles stats sur une {X}', 'quelles stats peut avoir la {X}',
      'les stats possibles de la {X}', 'on peut avoir quoi comme bonus sur une {X}', 'quelles lignes sur une {X}', 'c est quoi les meilleures stats sur une {X}',
      'le {X} augmente la capa de combien', 'combien de capa le {X}', 'le {X} donne combien de capacite', 'combien de pollen par fleur avec le {X}',
      'le {X} il collecte combien', 'le {X} il ramasse combien de fleurs', 'combien de convert rate le {X}', 'le {X} donne combien de bonus'],
    en: ['{X} stats', 'what does {X} do', 'what bonuses does {X} give', 'stats of {X}', 'what does the {X} give', '{X} buffs', 'is {X} good',
      'is the {X} worth it', 'what is {X} good for', 'what are the stats on {X}', '{X} bonus', 'what does {X} boost',
      'what stats can roll on a {X}', 'what can i get on a {X}', 'possible stats on {X}', 'what can drop on a {X}',
      'how much capacity does {X} give', 'how many flowers does {X} collect', 'how much convert rate does {X} give'],
  },
  combat: {
    types: ['mob'],
    fr: ['pv du {X}', 'combien de pv a le {X}', '{X} respawn', 'le {X} reapparait quand', 'combien de temps pour le respawn du {X}', 'degats du {X}',
      'niveau du {X}', 'comment tuer le {X}', 'le {X} drop quoi', 'loot du {X}', 'il a combien de vie le {X}', 'cb de pv {X}', 'le {X} il fait mal',
      'respawn {X}', 'timer du {X}', 'quand revient le {X}', 'combien de temps entre deux {X}', 'ca drop quoi un {X}', 'le {X} il est fort', 'vie du {X}'],
    en: ['{X} hp', 'how much health does {X} have', '{X} respawn time', 'how strong is {X}', 'how to kill {X}', 'what does {X} drop', '{X} health',
      'when does {X} respawn', '{X} loot', 'how much damage does {X} do', '{X} level', '{X} cooldown'],
  },
  valeur: {
    types: ['sticker'],
    fr: ['valeur du {X}', 'combien vaut le {X}', 'le {X} vaut combien en trade', 'c est rare le {X}', 'ca vaut quoi {X}', 'combien de signs le {X}',
      'le {X} il vaut cb', 'valeur trade {X}', 'je peux avoir quoi contre un {X}', 'il est rare le {X}', 'combien en signs {X}', 'value {X}', 'le {X} vaut quoi'],
    en: ['{X} value', 'how much is {X} worth', 'whats {X} worth in trades', 'value of {X}', 'is {X} rare', 'how many signs is {X}', 'what is {X} worth',
      'what can i get for a {X}', '{X} trade value', 'wfl {X}'],
  },
  definition: {
    types: ['item', 'sticker', 'beequip', 'amulette', 'mob', 'abeille', 'mutation', 'champ'],
    fr: ['c est quoi le {X}', 'qu est ce que le {X}', '{X} c est quoi', 'c est quoi {X}', 'parle moi du {X}', 'info sur {X}', 'infos {X}', '{X}',
      'le {X} ?', 'tu connais {X}', 'des infos sur le {X}', 'fiche du {X}', 'montre moi le {X}', 'je veux voir le {X}', 'c koi le {X}', 'kesako {X}',
      'dis moi tout sur le {X}', 'explique moi le {X}', 'la {X} c est quoi'],
    en: ['what is {X}', 'whats the {X}', 'tell me about {X}', 'info on {X}', '{X}', 'show me {X}', 'what s a {X}', 'explain {X}', 'details on {X}', '{X} info'],
  },
  temps: {
    types: ['item_temps'],
    fr: ['combien de temps de blender pour {N} {X}', 'combien de temps pour craft {N} {X}', 'combien de temps pour faire {N} {X} au blender', 'le blender met combien de temps pour {X}',
      'temps de craft du {X}', 'temps blender {X}', 'combien de temps au blender pour le {X}', 'ca prend combien de temps de faire {N} {X}', 'en combien de temps je craft {N} {X}',
      'combien de temps met le {X} pour etre a 100%', 'combien de temps mais le {X} pour etre a 100', 'le {X} pousse en combien de temps', 'combien de temps pour que le {X} soit plein',
      'temps de pousse du {X}', 'le {X} met combien de temps', 'combien d heures pour le {X}', 'en combien de temps le {X} est pret', 'le {X} il faut attendre combien',
      'combien de temps il faut laisser le {X}', 'le {X} il met cb de temps a pousser', 'cooldown du {X}', 'recharge du {X}', 'combien de temps de recharge le {X}', 'duree du {X}'],
    en: ['how long to craft {N} {X}', 'blender time for {X}', 'how long does the blender take for {N} {X}', 'how long does {X} take to grow', 'how long for {X} to be 100%',
      '{X} grow time', 'how many hours for {X}', '{X} cooldown', 'how long is the {X} cooldown', 'how long until {X} is fully grown', 'crafting time for {N} {X}'],
  },
  comparaison: {
    types: ['beequip', 'item_stats', 'amulette', 'sticker'],
    fr: ['est ce que le {X} est mieux que le {Y}', '{X} ou {Y}', '{X} vs {Y}', 'le {X} ou le {Y} c est quoi le mieux', 'lequel est le mieux {X} ou {Y}',
      'quelle difference entre le {X} et le {Y}', '{X} ou {Y} pour ma ruche', 'je prends le {X} ou le {Y}', 'c est mieux le {X} que le {Y} ?',
      'compare {X} et {Y}', 'le {X} est meilleur que le {Y} ?', 'vaut mieux {X} ou {Y}', 'entre le {X} et le {Y} je choisis quoi'],
    en: ['is {X} better than {Y}', '{X} or {Y}', '{X} vs {Y}', 'which is better {X} or {Y}', 'difference between {X} and {Y}', 'should i get {X} or {Y}',
      'compare {X} and {Y}', '{X} or {Y} which one'],
  },
  conseil: {
    types: [],
    fr: ['c est quoi la meilleure ruche bleue', 'quelle ruche faire', 'comment progresser plus vite', 'quelle est la meilleure amulette',
      'meilleur beequip pour une ruche rouge', 'comment faire une ruche blanche', 'quelles abeilles mettre dans ma ruche', 'des conseils pour ma ruche',
      'comment monter mes abeilles plus vite', 'comment avoir plus de miel', 'comment bien boost', 'quel champ farmer', 'meilleur champ pour ruche bleue',
      'comment faire du miel rapidement', 'c est quoi la meilleure strategie', 'quand passer en ruche bleue', 'je dois acheter quoi maintenant',
      'je suis bloque qu est ce que je fais', 'je debute des conseils', 'rouge ou bleue c est mieux', 'quelle couleur de ruche choisir',
      'comment avoir des abeilles gifted', 'comment avoir des mythiques', 'comment avoir une event bee', 'comment avoir plus de bond',
      'je dois acheter quoi apres le {X}', 'quoi faire apres avoir le {X}', 'quel outil prendre apres le {X}', 'meilleur sac pour debutant',
      'je fais quoi apres le {X}', 'apres le {X} je prends quoi', 'c est quoi la suite apres le {X}', 'j ai le {X} je vise quoi maintenant',
      'j ai {N} abeilles je fais quoi maintenant', 'avec {N} abeilles je fais quelle ruche', 'je suis a {N} abeilles des conseils',
      'c est quoi l ordre des outils', 'comment faire le ant challenge', 'comment avoir beaucoup de tickets', 'comment debloquer les zones',
      'comment avoir des mutations', 'comment faire monter le blessing', 'c est quoi le meilleur planteur', 'quel planteur mettre ou',
      'comment avoir des stickers', 'c est quoi le blender', 'comment marche le blender', 'a quoi sert le blender', 'le blender ca sert a quoi', 'ou est le blender', 'c est quoi une bonne ruche pour le midgame', 'comment passer endgame', 'quelle ruche pour le rbc', 'tips pour le stick bug'],
    en: ['best blue hive', 'what hive should i go', 'how to progress faster', 'best amulet', 'best beequip for red hive', 'what bees should i use',
      'which field should i farm', 'how to make honey fast', 'tips for my hive', 'red or blue hive', 'how to get gifted bees', 'how to get mythic bees',
      'what should i buy next', 'what should i get after {X}', 'what do i do after getting {X}', 'whats next after {X}',
      'what should i upgrade after the {X}', 'i have {N} bees what now', 'what hive at {N} bees', 'best tool for beginners', 'how to do ant challenge', 'how to get more tickets',
      'how to boost properly', 'how to get mutations', 'what is the blender', 'how does the blender work', 'best planter', 'how to unlock zones', 'best hive for midgame', 'endgame tips', 'how to level bees faster'],
  },
  aide: {
    types: [],
    fr: ['aide', 'comment tu marches', 'tu sers a quoi', 'tu fais quoi bot', 'quelles sont tes commandes', 'comment utiliser le bot', 'help', 'aide moi bot',
      'c est quoi les commandes', 'tu peux faire quoi', 'bot tu sais faire quoi', 'comment on t utilise', 'liste des commandes', 'c est quoi ce bot', 'le site c est quoi'],
    en: ['help', 'what can you do', 'how do you work', 'bot commands', 'what are your commands', 'how to use the bot', 'what is this bot', 'what is the site'],
  },
  hors_sujet: {
    types: [],
    fr: ['salut', 'bonjour tout le monde', 'gg', 'lol', 'mdr', 'merci', 'merci beaucoup', 'ok', 'd accord', 'trop bien', 'quelqu un veut jouer', 'qui est co',
      'bonne nuit', 'jsp', 'je reviens', 'c est nul', 'j ai faim', 'ca va', 'ca va ?', 'tu fais quoi', 'haha', 'bien joue', 'vous etes la ?', 'quelqu un pour trade ?',
      't as quel age', 'quelle heure il est', 'vous jouez a quoi ce soir', 'je m ennuie', 'bon courage', 'trop fort', 'wsh', 'cc', 'coucou', 'yo', 'slt', 'bjr',
      'qui veut faire un vocal', 'je vais manger', 'on se voit demain', 'c etait cool', 'j ai eu une mythique', 'j ai enfin eu le {X}', 'regardez mon {X}',
      'je trade mon {X}', 'qui veut mon {X}', 'je donne un {X}', 'enfin le {X} !', 'je farm le {X} la', 'je viens d acheter le {X}', 'ma ruche est trop belle',
      'le jeu a crash', 'roblox bug encore', 'vous avez vu la maj', 'quand la prochaine maj ?', 'onett il fait quoi', 'je suis nul', 'c est qui le meilleur youtubeur',
      'vous avez fait vos devoirs', 'quelqu un connait un bon film', 'tu preferes chat ou chien', 'ptdr', 'oui', 'non', 'peut etre', 'je sais', 'grave', 'exact',
      'je suis trop content j ai eu ma premiere mythique', 'trop content', 'j ai eu une gifted', 'regardez ma ruche', 'j ai eu une mutation', 'enfin', 'j ai reussi',
      'j ai fini la quete', 'j ai eu ma premiere legendaire', 'je viens d avoir une event bee', 'c est mon anniversaire', 'merci le bot', 'merci bot c est top',
      'tu es trop fort le bot', 'bien vu', 'ah d accord merci', 'je vais essayer', 'ca marche merci', 'top merci', 'nickel'],
    en: ['hi', 'hello', 'thanks', 'thank you', 'lol', 'anyone wanna play', 'brb', 'gn', 'good game', 'who s online', 'what time is it', 'how are you', 'nice',
      'cool', 'ok', 'yes', 'no', 'bruh', 'anyone want to trade', 'i finally got {X}', 'look at my {X}', 'trading my {X}', 'just bought {X}', 'game crashed',
      'when is the next update', 'im bored', 'see you tomorrow', 'gg wp', 'nice hive', 'who wants to vc', 'lmao', 'same', 'true',
      'i got my first mythic', 'finally got a gifted', 'thanks bot', 'good bot', 'that worked thanks', 'ok thanks'],
  },
};

/* petites variations de langage de joueur */
const ARGOT_FR = [[/\bcombien\b/g, ['cb', 'cmb', 'combien']], [/\bcomment\b/g, ['cmt', 'comment', 'comen']], [/\bc est\b/g, ['c', 'cest', 'c est', 'sa']],
  [/\bquoi\b/g, ['koi', 'quoi']], [/\bpourquoi\b/g, ['pk', 'pq']], [/\bca\b/g, ['sa', 'ca']], [/\bqu est ce que\b/g, ['kesk', 'qu est ce que', 'quest ce que']],
  [/\bil y a\b/g, ['ya', 'il y a']], [/\bje sais pas\b/g, ['jsp', 'je sais pas']]];
const ARGOT_EN = [[/\byou\b/g, ['u', 'you']], [/\bwhat is\b/g, ['whats', 'what is', 'wat is']], [/\bplease\b/g, ['pls', 'plz']], [/\bhow much\b/g, ['how much', 'hw much']]];
const AVANT_FR = ['', '', '', '', 'svp ', 'hey ', 'yo ', 'les gars ', 'quelqu un sait ', 'question ', 'bot ', 'dites ', 'aidez moi ', 'salut '];
const APRES_FR = ['', '', '', '', ' svp', ' stp', ' ?', ' ??', ' merci', ' svp les gars', ' quelqu un sait ?', ' jsp'];
const AVANT_EN = ['', '', '', 'hey ', 'yo ', 'guys ', 'quick question ', 'bot ', 'does anyone know '];
const APRES_EN = ['', '', '', ' ?', ' pls', ' please', ' thanks', ' anyone ?'];
const VERS_FR = [[/\bplanter\b/, 'planteur'], [/\bmask\b/, 'masque'], [/\bbee\b/, 'abeille'], [/\bboots\b/, 'bottes'], [/\bamulet\b/, 'amulette'],
  [/\bsprinkler\b/, 'arroseur'], [/\begg\b/, 'oeuf'], [/\bbelt\b/, 'ceinture']];

function faute(mot, r) {
  if (mot.length < 4) return mot;
  const i = 1 + Math.floor(r() * (mot.length - 2)), t = r();
  if (t < 0.3) return mot.slice(0, i) + mot.slice(i + 1);                                  // lettre oubliée
  if (t < 0.55) return mot.slice(0, i) + mot[i] + mot.slice(i);                           // lettre doublée
  if (t < 0.8) return mot.slice(0, i - 1) + mot[i] + mot[i - 1] + mot.slice(i + 1);        // lettres inversées
  const voisin = 'azertyuiopqsdfghjklmwxcvbn'[Math.floor(r() * 26)];
  return mot.slice(0, i) + voisin + mot.slice(i + 1);                                     // mauvaise touche
}

/* listes de fiches par usage */
function reservoirs(fiches) {
  const par = (fn) => fiches.filter(fn);
  return {
    item: par(f => f.type === 'item'),
    item_prix: par(f => f.type === 'item' && f.data.miel !== undefined),
    item_recette: par(f => f.type === 'item' && f.data.mats),
    item_stats: par(f => f.type === 'item' && f.data.fiche && (f.data.fiche.stats || f.data.fiche.outil || f.data.fiche.cap)),
    item_temps: par(f => f.type === 'item' && ((f.data.fiche && (f.data.fiche.planteur || f.data.fiche.conso)) || (f.data.mats && /blender/i.test(f.data.lieu || '')))),
    sticker: par(f => f.type === 'sticker'), beequip: par(f => f.type === 'beequip'), amulette: par(f => f.type === 'amulette'),
    mob: par(f => f.type === 'mob'), abeille: par(f => f.type === 'abeille'), mutation: par(f => f.type === 'mutation'), champ: par(f => f.type === 'champ'),
    tout: par(f => !['guide', 'info'].includes(f.type)),
  };
}

function varianteNom(f, r, lang) {
  let n = normaliser(f.nom);
  if (n.startsWith('the ') && r() < 0.6) n = n.slice(4);
  if (f.type === 'abeille' && r() < 0.4) n = n.replace(/ bee$/, '');
  if (f.type === 'amulette' && r() < 0.3) n = n.replace(/ amulet$/, ' amu');
  if (f.type === 'amulette' && r() < 0.4) n = (lang === 'fr' ? ['supreme', 'diamant', 'or', 'argent', 'bronze', 'diamond'] : ['supreme', 'diamond', 'gold', 'silver', 'bronze'])[Math.floor(r() * 5)] + ' ' + n;
  if (lang === 'fr' && r() < 0.25) VERS_FR.forEach(([re, fr]) => { n = n.replace(re, fr); });
  const surnoms = Object.entries(SURNOMS).filter(([, id]) => id === f.id).map(([s]) => s);
  if (surnoms.length && r() < 0.25) n = surnoms[Math.floor(r() * surnoms.length)];
  if (r() < 0.22) n = n.split(' ').map(m => (r() < 0.5 ? faute(m, r) : m)).join(' ');
  return n;
}

/* → [{ texte, masque, intention }] */
function genererQuestions(fiches, { parIntention = 2600, graine = 42 } = {}) {
  const r = alea(graine), res = reservoirs(fiches), out = [];
  const choisir = (a) => a[Math.floor(r() * a.length)];
  for (const [intention, def] of Object.entries(M)) {
    for (let k = 0; k < parIntention; k++) {
      const lang = r() < 0.62 ? 'fr' : 'en';
      let modele = choisir(def[lang]);
      let f = null;
      if (modele.includes('{X}')) {
        const types = def.types.length ? def.types : ['tout'];
        const pool = res[choisir(types)];
        f = choisir(pool && pool.length ? pool : res.tout);
      }
      let phrase = modele;
      const argot = lang === 'fr' ? ARGOT_FR : ARGOT_EN;
      argot.forEach(([re, alts]) => { if (r() < 0.35) phrase = phrase.replace(re, () => choisir(alts)); });
      if (r() < 0.25 && lang === 'fr') phrase = phrase.replace(/\b(le|la|du|un|une) \{X\}/, '{X}');
      phrase = (lang === 'fr' ? choisir(AVANT_FR) : choisir(AVANT_EN)) + phrase + (lang === 'fr' ? choisir(APRES_FR) : choisir(APRES_EN));
      const nom = f ? varianteNom(f, r, lang) : '';
      /* second objet {Y} : un ingrédient pour une recette, sinon un objet du même genre */
      let nomY = '';
      if (phrase.includes('{Y}')) {
        let g = null;
        if (intention === 'recette' && f && f.data.mats) { const m = choisir(f.data.mats)[1]; g = res.tout.find(x => x.nom === m); nomY = g ? varianteNom(g, r, lang) : normaliser(m); }
        else { g = choisir(res.tout.filter(x => f && x.type === f.type && x !== f)) || choisir(res.tout); nomY = varianteNom(g, r, lang); }
      }
      phrase = phrase.replace('{N}', () => choisir(['40m', '1b', '500k', '25', '35', '10 m', '2 milliards', '300m', '45', '15']));
      let mots = preparer(phrase.replace('{X}', ' xxnomxx ').replace('{Y}', ' xxnomyy ')).split(' ').filter(Boolean);
      mots = mots.map(m => (m !== 'xxnomxx' && m !== 'xxnomyy' && r() < 0.06 ? faute(m, r) : m));
      const texte = mots.join(' ').replace('xxnomxx', nom).replace('xxnomyy', nomY);
      const masque = mots.join(' ').replace('xxnomxx', 'objx').replace('xxnomyy', 'objx');
      out.push({ texte, masque, intention, fiche: f ? f.id : null });
    }
  }
  return out;
}

/* même préparation à l'entraînement et à l'usage : le « ? » devient un mot */
function preparer(txt) { return normaliser(String(txt).replace(/\?/g, ' qmark ')); }

const INTENTIONS = Object.keys(M);
module.exports = { genererQuestions, preparer, INTENTIONS };
