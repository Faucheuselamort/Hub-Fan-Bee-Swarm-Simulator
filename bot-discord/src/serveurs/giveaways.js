'use strict';
/* Giveaways (/giveaway) et sondages (/sondage). */
const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder, PermissionFlagsBits, InteractionContextType, MessageFlags, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const reglages = require('./reglages');
const db = require('../stockage');
const { duree, dureeTexte, couleur } = require('./aide-discord');

/* ================= GIVEAWAYS ================= */
function embedGiveaway(g, c) {
  const fin = Math.floor(new Date(g.fin) / 1000);
  const e = new EmbedBuilder().setColor(couleur(c.couleur, 0xF4C542)).setTitle(`${c.emoji || '🎉'} ${g.lot}`);
  if (g.termine) {
    const w = g.gagnants_ids || [];
    e.setDescription(`Terminé <t:${fin}:R>\n**${w.length ? 'Gagnant' + (w.length > 1 ? 's' : '') + ' : ' + w.map(x => `<@${x}>`).join(', ') : 'Aucun participant 😢'}**\n${(g.participants || []).length} participant(s)`);
  } else {
    e.setDescription(`Clique sur le bouton pour participer !\nFin <t:${fin}:R> (<t:${fin}:f>)\n**${g.gagnants}** gagnant${g.gagnants > 1 ? 's' : ''} · **${(g.participants || []).length}** participant(s)`);
  }
  if (g.cree_par) e.setFooter({ text: `Organisé par ${g.cree_par}` });
  return e;
}
const boutonGiveaway = (g) => new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId(`gw:${g.id}`).setStyle(ButtonStyle.Success).setLabel('Participer').setEmoji('🎉').setDisabled(!!g.termine));

async function lancerGiveaway(guild, salonId, { lot, dureeMs, gagnants = 1, par = '' }) {
  const salon = guild.channels.cache.get(salonId) || await guild.channels.fetch(salonId).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  const g = await db.ajouter('bot_giveaways', { guild_id: guild.id, salon_id: salon.id, lot, gagnants, fin: new Date(Date.now() + dureeMs).toISOString(), participants: [], termine: false, gagnants_ids: [], cree_par: par });
  const c = reglages.get(guild.id).giveaways;
  const m = await salon.send({ embeds: [embedGiveaway(g, c)], components: [boutonGiveaway(g)] });
  await db.modifier('bot_giveaways', { id: g.id }, { message_id: m.id });
  return { g, m };
}

function tirer(liste, n) {
  const l = [...new Set(liste)], out = [];
  while (l.length && out.length < n) out.push(l.splice(Math.floor(Math.random() * l.length), 1)[0]);
  return out;
}

async function terminer(client, g, { relancer = false } = {}) {
  const guild = client.guilds.cache.get(g.guild_id); if (!guild) return;
  const gagnants = tirer(g.participants || [], g.gagnants || 1);
  const maj = { termine: true, gagnants_ids: gagnants };
  await db.modifier('bot_giveaways', { id: g.id }, maj);
  Object.assign(g, maj);
  const salon = guild.channels.cache.get(g.salon_id); if (!salon) return;
  const c = reglages.get(guild.id).giveaways;
  const m = g.message_id && await salon.messages.fetch(g.message_id).catch(() => null);
  if (m) await m.edit({ embeds: [embedGiveaway(g, c)], components: [boutonGiveaway(g)] }).catch(() => {});
  await salon.send({
    content: gagnants.length ? `${c.emoji || '🎉'} ${relancer ? 'Nouveau tirage ! ' : ''}Félicitations ${gagnants.map(x => `<@${x}>`).join(', ')} : tu remportes **${g.lot}** !` : `Personne n'a participé au giveaway **${g.lot}** 😢`,
    allowedMentions: { users: gagnants }, reply: m ? { messageReference: m.id, failIfNotExists: false } : undefined,
  });
}

async function verifierFins(client) {
  try {
    const l = await db.lire('bot_giveaways', { termine: false });
    for (const g of l) if (new Date(g.fin) <= new Date()) await terminer(client, g);
  } catch (e) { console.warn('[giveaways]', e.message); }
}

/* ================= SONDAGES ================= */
const FICHIER_SONDAGES = path.join(__dirname, '..', '..', 'data', 'sondages.json');
let sondages = {};
try { sondages = JSON.parse(fs.readFileSync(FICHIER_SONDAGES, 'utf8')); } catch (e) { sondages = {}; }
const sauverSondages = () => { try { fs.mkdirSync(path.dirname(FICHIER_SONDAGES), { recursive: true }); fs.writeFileSync(FICHIER_SONDAGES, JSON.stringify(sondages)); } catch (e) { /* */ } };
const LETTRES = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯'];

function messageSondage(s, guildId) {
  const c = reglages.get(guildId).sondages;
  const total = Object.keys(s.votes).length;
  const compte = s.options.map((_, k) => Object.values(s.votes).filter(v => v === k).length);
  const e = new EmbedBuilder().setColor(couleur(c.couleur, 0x5BA7E0)).setTitle(`📊 ${s.question}`)
    .setDescription(s.options.map((o, k) => {
      const pc = total ? Math.round(compte[k] / total * 100) : 0;
      return `${LETTRES[k]} **${o}**\n${'▰'.repeat(Math.round(pc / 10))}${'▱'.repeat(10 - Math.round(pc / 10))} ${pc} % (${compte[k]})`;
    }).join('\n\n'))
    .setFooter({ text: `${total} vote(s)${s.fin ? (s.termine ? ' · terminé' : '') : ''}` });
  if (s.fin && !s.termine) e.addFields({ name: 'Fin', value: `<t:${Math.floor(s.fin / 1000)}:R>` });
  const rangees = [];
  s.options.forEach((o, k) => {
    if (k % 5 === 0) rangees.push(new ActionRowBuilder());
    rangees[rangees.length - 1].addComponents(new ButtonBuilder().setCustomId(`sd:${s.id}:${k}`).setStyle(ButtonStyle.Secondary).setEmoji(LETTRES[k]).setDisabled(!!s.termine));
  });
  return { embeds: [e], components: rangees };
}

async function lancerSondage(guild, salonId, { question, options, dureeMs = null }) {
  const salon = guild.channels.cache.get(salonId) || await guild.channels.fetch(salonId).catch(() => null);
  if (!salon || !salon.isTextBased()) throw new Error('salon introuvable');
  const s = { id: Date.now().toString(36), guild: guild.id, salon: salon.id, question, options: options.slice(0, 10), votes: {}, fin: dureeMs ? Date.now() + dureeMs : null, termine: false };
  const m = await salon.send(messageSondage(s, guild.id));
  s.message = m.id; sondages[s.id] = s; sauverSondages();
  return m;
}

async function finirSondages(client) {
  for (const s of Object.values(sondages)) {
    if (!s.fin || s.termine || s.fin > Date.now()) continue;
    s.termine = true; sauverSondages();
    const salon = client.channels.cache.get(s.salon);
    const m = salon && await salon.messages.fetch(s.message).catch(() => null);
    if (m) await m.edit(messageSondage(s, s.guild)).catch(() => {});
  }
}

/* ================= commandes ================= */
function commandes() {
  return [
    new SlashCommandBuilder().setName('giveaway').setDescription('Tirages au sort').setContexts(InteractionContextType.Guild).setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
      .addSubcommand(s => s.setName('lancer').setDescription('Lancer un giveaway')
        .addStringOption(o => o.setName('lot').setDescription('Ce qu\'on gagne').setRequired(true).setMaxLength(200))
        .addStringOption(o => o.setName('duree').setDescription('Ex. 30m, 2h, 3j').setRequired(true))
        .addIntegerOption(o => o.setName('gagnants').setDescription('Nombre de gagnants (1 par défaut)').setMinValue(1).setMaxValue(20))
        .addChannelOption(o => o.setName('salon').setDescription('Salon (celui-ci par défaut)')))
      .addSubcommand(s => s.setName('terminer').setDescription('Terminer tout de suite le dernier giveaway de ce salon'))
      .addSubcommand(s => s.setName('relancer').setDescription('Retirer de nouveaux gagnants pour le dernier giveaway terminé de ce salon')),
    new SlashCommandBuilder().setName('sondage').setDescription('Créer un sondage avec des boutons').setContexts(InteractionContextType.Guild)
      .setNameLocalizations({ 'en-US': 'poll', 'en-GB': 'poll' })
      .addStringOption(o => o.setName('question').setDescription('La question').setRequired(true).setMaxLength(200))
      .addStringOption(o => o.setName('choix').setDescription('Les choix séparés par des ; (ex. Rouge ; Bleue ; Blanche)').setRequired(true))
      .addStringOption(o => o.setName('duree').setDescription('Durée (ex. 1h, 2j) — sans durée, il reste ouvert')),
  ].map(c => c.toJSON());
}

async function commande(i) {
  if (i.commandName === 'sondage') {
    const options = i.options.getString('choix').split(/[;|\n]/).map(x => x.trim()).filter(Boolean);
    if (options.length < 2 || options.length > 10) { await i.reply({ content: 'Il faut entre 2 et 10 choix, séparés par des « ; ».', flags: MessageFlags.Ephemeral }); return true; }
    const ms = duree(i.options.getString('duree'));
    await lancerSondage(i.guild, i.channelId, { question: i.options.getString('question'), options, dureeMs: ms });
    await i.reply({ content: '✅ Sondage publié.', flags: MessageFlags.Ephemeral });
    return true;
  }
  if (i.commandName !== 'giveaway') return false;
  const s = i.options.getSubcommand();
  if (s === 'lancer') {
    const ms = duree(i.options.getString('duree'));
    if (!ms || ms < 10000) { await i.reply({ content: 'Durée invalide : écris par exemple 30m, 2h ou 3j.', flags: MessageFlags.Ephemeral }); return true; }
    const salon = i.options.getChannel('salon') || i.channel;
    const { m } = await lancerGiveaway(i.guild, salon.id, { lot: i.options.getString('lot'), dureeMs: ms, gagnants: i.options.getInteger('gagnants') || 1, par: i.user.username });
    await i.reply({ content: `✅ Giveaway lancé pour ${dureeTexte(ms)} : ${m.url}`, flags: MessageFlags.Ephemeral });
    return true;
  }
  const l = (await db.lire('bot_giveaways', { guild_id: i.guildId, salon_id: i.channelId })).sort((a, b) => new Date(b.cree) - new Date(a.cree));
  const g = s === 'terminer' ? l.find(x => !x.termine) : l.find(x => x.termine);
  if (!g) { await i.reply({ content: s === 'terminer' ? 'Aucun giveaway en cours dans ce salon.' : 'Aucun giveaway terminé dans ce salon.', flags: MessageFlags.Ephemeral }); return true; }
  await i.reply({ content: '✅', flags: MessageFlags.Ephemeral });
  await terminer(i.client, g, { relancer: s === 'relancer' });
  return true;
}

/* une file par giveaway : deux clics simultanés ne s'écrasent pas */
const verrous = new Map();
function enFile(cle, f) { const p = (verrous.get(cle) || Promise.resolve()).then(f, f); verrous.set(cle, p.catch(() => {})); return p; }

async function participer(i) {
    const id = i.customId.slice(3);
    const g = (await db.lire('bot_giveaways', { id }))[0];
    if (!g || g.termine) { await i.reply({ content: 'Ce giveaway est terminé.', flags: MessageFlags.Ephemeral }); return true; }
    const p = new Set(g.participants || []);
    let txt;
    if (p.has(i.user.id)) { p.delete(i.user.id); txt = 'Tu ne participes plus.'; } else { p.add(i.user.id); txt = '🎉 Tu participes ! Bonne chance.'; }
    g.participants = [...p];
    await db.modifier('bot_giveaways', { id: g.id }, { participants: g.participants });
    await i.update({ embeds: [embedGiveaway(g, reglages.get(i.guildId).giveaways)], components: [boutonGiveaway(g)] });
    await i.followUp({ content: txt, flags: MessageFlags.Ephemeral });
    return true;
}

async function bouton(i) {
  if (i.customId.startsWith('gw:')) return enFile(i.customId, () => participer(i));
  if (i.customId.startsWith('sd:')) {
    const [, id, k] = i.customId.split(':');
    const s = sondages[id];
    if (!s || s.termine) { await i.reply({ content: 'Ce sondage est terminé.', flags: MessageFlags.Ephemeral }); return true; }
    if (s.votes[i.user.id] === +k) delete s.votes[i.user.id]; else s.votes[i.user.id] = +k;
    sauverSondages();
    await i.update(messageSondage(s, i.guildId));
    return true;
  }
  return false;
}

function demarrer(client) {
  setInterval(() => { verifierFins(client); finirSondages(client); }, 15000);
}

module.exports = { nom: 'giveaways', commandes, commande, bouton, demarrer, lancerGiveaway, lancerSondage };
