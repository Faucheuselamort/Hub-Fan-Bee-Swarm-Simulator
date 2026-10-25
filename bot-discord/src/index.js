'use strict';
/* Bot Discord « Ruche & Outils » — point d'entrée. */
require('dotenv').config({ path: require('node:path').join(__dirname, '..', '.env') });
const { Client, GatewayIntentBits, Partials, Events, REST, Routes, ActivityType, MessageFlags } = require('discord.js');
const site = require('./site');
const { construireIndex } = require('./recherche');
const commandes = require('./commandes');
const { repondre } = require('./reponse');
const { iaActive, config: configIA } = require('./ia');
const cfg = require('./config');
const { normaliser } = require('./outils');

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = (process.env.DISCORD_GUILD_ID || '').trim();
const SITE_URL = process.env.SITE_URL || 'https://faucheuselamort.github.io/Hub-Fan-Bee-Swarm-Simulator';
const RAFRAICHIR = Math.max(10, +process.env.SITE_RAFRAICHIR_MIN || 60);
const DELAI_Q = Math.max(0, +process.env.QUESTION_DELAI_S || 8) * 1000;

if (!TOKEN || !CLIENT_ID) {
  console.error('❌ DISCORD_TOKEN et DISCORD_CLIENT_ID sont obligatoires : copie .env.example en .env et remplis-le (voir README.md).');
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel],
});

/* ---------- données du site ---------- */
async function chargerSite() {
  const ok = await site.charger(SITE_URL);
  if (ok) {
    construireIndex();
    console.log(`[site] ${site.etat.fiches.length} fiches chargées (${site.etat.source})`);
    if (client.user) client.user.setActivity(`${site.etat.fiches.length} fiches · /aide`, { type: ActivityType.Watching });
  }
}

/* ---------- commandes « / » ---------- */
async function publierCommandes() {
  const rest = new REST({ version: '10' }).setToken(TOKEN);
  const corps = commandes.definitions();
  if (GUILD_ID) {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: corps });
    console.log(`[discord] ${corps.length} commandes publiées sur le serveur ${GUILD_ID}`);
  } else {
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: corps });
    console.log(`[discord] ${corps.length} commandes publiées partout (jusqu'à 1 h avant qu'elles apparaissent)`);
  }
}

client.once(Events.ClientReady, async (c) => {
  console.log(`[discord] connecté en tant que ${c.user.tag}`);
  console.log(`[ia] ${iaActive() ? `${configIA().fournisseur} (${configIA().modele || 'modèle par défaut'})` : 'aucune — moteur de recherche intégré'}`);
  c.user.setActivity(`${site.etat.fiches.length} fiches · /aide`, { type: ActivityType.Watching });
  try { await publierCommandes(); } catch (e) { console.error('[discord] publication des commandes impossible :', e.message); }
});

client.on(Events.InteractionCreate, async (i) => {
  try {
    if (i.isAutocomplete()) return await commandes.autocompletion(i);
    if (i.isChatInputCommand()) return await commandes.executer(i);
    if (i.isStringSelectMenu()) return await commandes.menu(i);
  } catch (err) {
    console.error('[commande]', err);
    const msg = { content: '⚠️ Oups, une erreur est survenue. Réessaie dans un instant.', flags: MessageFlags.Ephemeral };
    if (i.deferred || i.replied) await i.editReply(msg).catch(() => {}); else if (i.isRepliable()) await i.reply(msg).catch(() => {});
  }
});

/* ---------- salon questions-réponses ---------- */
const MOTS_QUESTION = /^(comment|combien|pourquoi|quand|quel|quelle|quels|quelles|qui|que|quoi|ou|est ce|c est quoi|y a t il|faut il|peut on|on peut|je peux|how|what|where|which|who|why|when|is|are|can|does|do|should)\b/;
function ressembleQuestion(txt) {
  const t = txt.trim();
  if (t.endsWith('?')) return true;
  return MOTS_QUESTION.test(normaliser(t));
}
const dernier = new Map();   // membre → horodatage de sa dernière question

client.on(Events.MessageCreate, async (m) => {
  if (m.author.bot || !m.guild || !m.content) return;
  const mentionne = m.mentions.users.has(client.user.id);
  const reglage = cfg.salon(m.guild.id, m.channel.id) || (m.channel.isThread() && m.channel.parentId ? cfg.salon(m.guild.id, m.channel.parentId) : null);
  if (!reglage && !(mentionne && cfg.mention(m.guild.id))) return;

  const texte = m.content.replace(/<@!?\d+>/g, '').trim();
  if (texte.length < 3 || texte.length > 600) return;
  if (!mentionne && reglage.mode !== 'tout' && !ressembleQuestion(texte)) return;

  const maintenant = Date.now();
  if (maintenant - (dernier.get(m.author.id) || 0) < DELAI_Q) return;
  dernier.set(m.author.id, maintenant);

  try {
    await m.channel.sendTyping().catch(() => {});
    const discret = !mentionne && reglage && reglage.mode === 'tout' && !ressembleQuestion(texte);
    const msg = await repondre(texte, { discret });
    if (msg) await m.reply({ ...msg, allowedMentions: { repliedUser: false, parse: [] } });
  } catch (err) { console.error('[question]', err); }
});

/* ---------- démarrage ---------- */
(async () => {
  try { await chargerSite(); }
  catch (e) { console.error('❌ Impossible de lire le site :', e.message); process.exit(1); }
  setInterval(() => chargerSite().catch(e => console.warn('[site]', e.message)), RAFRAICHIR * 60 * 1000);
  await client.login(TOKEN);
})();

process.on('unhandledRejection', (e) => console.error('[erreur]', e));
