'use strict';
/* Boutons 👍 / 👎 sous les réponses libres : les questions mal comprises sont
   notées dans data/avis.jsonl pour améliorer Ruche IA (npm run avis). */
const fs = require('node:fs');
const path = require('node:path');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');

const FICHIER = path.join(__dirname, '..', 'data', 'avis.jsonl');
const memoire = new Map();    // id → { question, intention }
let compteur = 0;

function rangeeAvis(question, intention) {
  const id = (Date.now().toString(36) + (compteur++).toString(36)).slice(-10);
  memoire.set(id, { question, intention });
  if (memoire.size > 1000) memoire.delete(memoire.keys().next().value);
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId(`avis:+:${id}`).setStyle(ButtonStyle.Secondary).setEmoji('👍'),
    new ButtonBuilder().setCustomId(`avis:-:${id}`).setStyle(ButtonStyle.Secondary).setEmoji('👎'));
}

async function bouton(i) {
  const [, sens, id] = i.customId.split(':');
  const q = memoire.get(id);
  if (q) {
    try {
      fs.mkdirSync(path.dirname(FICHIER), { recursive: true });
      fs.appendFileSync(FICHIER, JSON.stringify({ date: new Date().toISOString(), avis: sens === '+' ? 'bon' : 'mauvais', ...q, serveur: i.guildId }) + '\n');
    } catch (e) { /* rien de grave */ }
  }
  const fr = String(i.locale || '').startsWith('fr');
  return i.reply({ content: sens === '+' ? (fr ? 'Merci ! 🐝' : 'Thanks! 🐝') : (fr ? 'Merci, c\'est noté : ça m\'aidera à mieux comprendre ce genre de question.' : 'Thanks, noted: it will help me understand this kind of question better.'), flags: MessageFlags.Ephemeral });
}

function lireAvis() {
  try { return fs.readFileSync(FICHIER, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)); } catch (e) { return []; }
}

module.exports = { rangeeAvis, bouton, lireAvis };
