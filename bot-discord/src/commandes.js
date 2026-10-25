'use strict';
/* Les commandes « / » du bot. */
const {
  SlashCommandBuilder, PermissionFlagsBits, ChannelType, EmbedBuilder,
  ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, MessageFlags, InteractionContextType,
} = require('discord.js');
const { etat, lien } = require('./site');
const { suggerer, trouverParNom, chercher } = require('./recherche');
const { messageFiche, boutonSite, L } = require('./fiches');
const { repondre } = require('./reponse');
const { decomposer, catalogue } = require('./recette');
const { iaActive, config: configIA } = require('./ia');
const cfg = require('./config');
const { langueDe, fmtMiel, fmtEntier, couper } = require('./outils');

/* ---------- définitions ---------- */
const nomOption = (o, fr, en) => o.setName('nom').setNameLocalizations({ 'en-US': 'name', 'en-GB': 'name' })
  .setDescription(fr).setDescriptionLocalizations({ 'en-US': en, 'en-GB': en }).setRequired(true).setAutocomplete(true);
const cmd = (nom, fr, en) => new SlashCommandBuilder().setName(nom).setDescription(fr).setDescriptionLocalizations({ 'en-US': en, 'en-GB': en });

const FICHES = {
  item: ['item', 'Fiche d\'un objet : prix, recette, stats, où l\'obtenir', 'Item card: price, recipe, stats, where to get it', 'Nom de l\'objet', 'Item name'],
  sticker: ['sticker', 'Fiche d\'un sticker : valeur en trade, Stack Boost, où le trouver', 'Sticker card: trade value, Stack Boost, where to find it', 'Nom du sticker', 'Sticker name'],
  beequip: ['beequip', 'Fiche d\'un beequip : stats, bonus de ruche, conditions', 'Beequip card: stats, hive bonus, requirements', 'Nom du beequip', 'Beequip name'],
  mob: ['mob', 'Fiche d\'un monstre : PV, réapparition, butin', 'Mob card: HP, respawn, loot', 'Nom du monstre', 'Mob name'],
  abeille: ['abeille', 'Fiche d\'une abeille', 'Bee card', 'Nom de l\'abeille', 'Bee name'],
  mutation: ['mutation', 'Fiche d\'une mutation : chance et plage', 'Mutation card: chance and range', 'Nom de la mutation', 'Mutation name'],
  champ: ['champ', 'Fiche d\'un champ : couleur, fleurs, nectar, gardiens', 'Field card: colour, flowers, nectar, guards', 'Nom du champ', 'Field name'],
};

function definitions() {
  const liste = Object.entries(FICHES).map(([type, [nom, fr, en, ofr, oen]]) => {
    const c = cmd(nom, fr, en).addStringOption(o => nomOption(o, ofr, oen));
    if (nom === 'abeille') c.setNameLocalizations({ 'en-US': 'bee', 'en-GB': 'bee' });
    if (nom === 'champ') c.setNameLocalizations({ 'en-US': 'field', 'en-GB': 'field' });
    return c;
  });
  liste.push(cmd('amulette', 'Fiche d\'une amulette, palier par palier', 'Amulet card, tier by tier')
    .setNameLocalizations({ 'en-US': 'amulet', 'en-GB': 'amulet' })
    .addStringOption(o => nomOption(o, 'Nom de l\'amulette', 'Amulet name'))
    .addStringOption(o => o.setName('palier').setNameLocalizations({ 'en-US': 'tier', 'en-GB': 'tier' }).setDescription('Palier à afficher').setDescriptionLocalizations({ 'en-US': 'Tier to show', 'en-GB': 'Tier to show' })
      .addChoices({ name: 'Bronze', value: 'Bronze' }, { name: 'Argent / Silver', value: 'Argent' }, { name: 'Or / Gold', value: 'Or' }, { name: 'Diamant / Diamond', value: 'Diamant' }, { name: 'Suprême / Supreme', value: 'Suprême' })));
  liste.push(cmd('recette', 'Toutes les ressources de base pour fabriquer un objet', 'Every base resource needed to craft an item')
    .setNameLocalizations({ 'en-US': 'recipe', 'en-GB': 'recipe' })
    .addStringOption(o => o.setName('objet').setNameLocalizations({ 'en-US': 'item', 'en-GB': 'item' }).setDescription('Objet à fabriquer').setDescriptionLocalizations({ 'en-US': 'Item to craft', 'en-GB': 'Item to craft' }).setRequired(true).setAutocomplete(true))
    .addIntegerOption(o => o.setName('quantite').setNameLocalizations({ 'en-US': 'quantity', 'en-GB': 'quantity' }).setDescription('Combien (1 par défaut)').setDescriptionLocalizations({ 'en-US': 'How many (default 1)', 'en-GB': 'How many (default 1)' }).setMinValue(1).setMaxValue(10000)));
  liste.push(cmd('niveau', 'Miel, bond et treats pour monter une abeille d\'un niveau à un autre', 'Honey, bond and treats to level a bee from one level to another')
    .setNameLocalizations({ 'en-US': 'level', 'en-GB': 'level' })
    .addIntegerOption(o => o.setName('de').setNameLocalizations({ 'en-US': 'from', 'en-GB': 'from' }).setDescription('Niveau actuel').setDescriptionLocalizations({ 'en-US': 'Current level', 'en-GB': 'Current level' }).setRequired(true).setMinValue(1).setMaxValue(24))
    .addIntegerOption(o => o.setName('a').setNameLocalizations({ 'en-US': 'to', 'en-GB': 'to' }).setDescription('Niveau voulu').setDescriptionLocalizations({ 'en-US': 'Target level', 'en-GB': 'Target level' }).setRequired(true).setMinValue(2).setMaxValue(25))
    .addIntegerOption(o => o.setName('abeilles').setNameLocalizations({ 'en-US': 'bees', 'en-GB': 'bees' }).setDescription('Nombre d\'abeilles (1 par défaut)').setDescriptionLocalizations({ 'en-US': 'Number of bees (default 1)', 'en-GB': 'Number of bees (default 1)' }).setMinValue(1).setMaxValue(50)));
  liste.push(cmd('recherche', 'Chercher dans tout le site', 'Search the whole site')
    .setNameLocalizations({ 'en-US': 'search', 'en-GB': 'search' })
    .addStringOption(o => o.setName('texte').setNameLocalizations({ 'en-US': 'text', 'en-GB': 'text' }).setDescription('Ce que tu cherches').setDescriptionLocalizations({ 'en-US': 'What you are looking for', 'en-GB': 'What you are looking for' }).setRequired(true)));
  liste.push(cmd('question', 'Pose une question : le bot cherche la réponse sur le site', 'Ask a question: the bot looks for the answer on the site')
    .addStringOption(o => o.setName('question').setDescription('Ta question').setDescriptionLocalizations({ 'en-US': 'Your question', 'en-GB': 'Your question' }).setRequired(true).setMaxLength(500)));
  liste.push(cmd('site', 'Les liens vers le site Ruche & Outils', 'Links to the Hive & Tools site'));
  liste.push(cmd('aide', 'Tout ce que le bot sait faire', 'Everything the bot can do').setNameLocalizations({ 'en-US': 'help', 'en-GB': 'help' }));
  liste.push(cmd('config', 'Réglages du bot sur ce serveur (admins)', 'Bot settings for this server (admins)')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild).setContexts(InteractionContextType.Guild)
    .addSubcommand(s => s.setName('salon-questions').setDescription('Le bot répond tout seul aux questions posées dans ce salon').setDescriptionLocalizations({ 'en-US': 'The bot answers questions asked in this channel on its own', 'en-GB': 'The bot answers questions asked in this channel on its own' })
      .addChannelOption(o => o.setName('salon').setDescription('Salon (celui-ci par défaut)').addChannelTypes(ChannelType.GuildText, ChannelType.GuildForum, ChannelType.PublicThread))
      .addStringOption(o => o.setName('mode').setDescription('À quels messages répondre').addChoices(
        { name: 'Seulement ceux qui ressemblent à une question (conseillé)', value: 'questions' },
        { name: 'Tous les messages où il trouve quelque chose', value: 'tout' })))
    .addSubcommand(s => s.setName('retirer-salon').setDescription('Le bot arrête de répondre tout seul dans ce salon')
      .addChannelOption(o => o.setName('salon').setDescription('Salon (celui-ci par défaut)')))
    .addSubcommand(s => s.setName('mention').setDescription('Répondre quand on mentionne le bot, dans n\'importe quel salon')
      .addBooleanOption(o => o.setName('actif').setDescription('Oui ou non').setRequired(true)))
    .addSubcommand(s => s.setName('voir').setDescription('Voir les réglages actuels')));
  return liste.map(c => c.toJSON());
}

/* ---------- autocomplétion ---------- */
async function autocompletion(i) {
  const opt = i.options.getFocused(true);
  const types = { item: 'item', sticker: 'sticker', beequip: 'beequip', mob: 'mob', abeille: 'abeille', mutation: 'mutation', champ: 'champ', amulette: 'amulette' };
  let res = [];
  if (i.commandName === 'recette') {
    const cat = catalogue();
    res = suggerer('item', opt.value).filter(f => cat[f.nom]);
    if (!opt.value) res = Object.keys(cat).slice(0, 25).map(n => ({ nom: n }));
  } else if (types[i.commandName]) res = suggerer(types[i.commandName], opt.value);
  await i.respond(res.slice(0, 25).map(f => ({ name: couper(f.nom, 100), value: couper(f.nom, 100) }))).catch(() => {});
}

/* ---------- exécution ---------- */
const TYPE_DE_COMMANDE = { item: 'item', sticker: 'sticker', beequip: 'beequip', mob: 'mob', abeille: 'abeille', mutation: 'mutation', champ: 'champ', amulette: 'amulette' };

async function executer(i) {
  const lang = langueDe(i.locale);
  const c = i.commandName;

  if (TYPE_DE_COMMANDE[c]) {
    const nom = i.options.getString('nom');
    const f = trouverParNom(TYPE_DE_COMMANDE[c], nom);
    if (!f) return i.reply({ content: L(lang, `Je ne trouve pas « ${nom} ». Choisis un nom dans la liste proposée.`, `I can't find "${nom}". Pick a name from the suggestions.`), flags: MessageFlags.Ephemeral });
    await i.deferReply();
    return i.editReply(await messageFiche(f, lang, { palier: i.options.getString('palier') }));
  }

  if (c === 'recette') return cmdRecette(i, lang);
  if (c === 'niveau') return cmdNiveau(i, lang);

  if (c === 'recherche') {
    const texte = i.options.getString('texte');
    const res = chercher(texte, { limite: 10 }).filter(x => x.score > 3);
    if (!res.length) return i.reply({ content: L(lang, 'Aucun résultat sur le site.', 'No result on the site.'), flags: MessageFlags.Ephemeral });
    const e = new EmbedBuilder().setColor(0x8FE86B).setTitle(L(lang, `Recherche : ${texte}`, `Search: ${texte}`))
      .setDescription(res.map((x, k) => `**${k + 1}.** [${x.f.nom}](${x.f.url}) · *${x.f.type}*`).join('\n'))
      .setFooter({ text: L(lang, 'Choisis un résultat dans le menu pour ouvrir sa fiche', 'Pick a result in the menu to open its card') });
    const menu = new StringSelectMenuBuilder().setCustomId('ouvrir-fiche').setPlaceholder(L(lang, 'Ouvrir une fiche…', 'Open a card…'))
      .addOptions(res.map(x => ({ label: couper(x.f.nom, 100), description: x.f.type, value: couper(x.f.id, 100) })));
    return i.reply({ embeds: [e], components: [new ActionRowBuilder().addComponents(menu)] });
  }

  if (c === 'question') {
    await i.deferReply();
    const q = i.options.getString('question');
    const msg = await repondre(q, { lang: null });
    msg.content = `> ${couper(q, 200)}\n${msg.content || ''}`;
    return i.editReply(msg);
  }

  if (c === 'site') {
    const pages = [['Items', 'items'], ['Stickers', 'stickers'], [L(lang, 'Amulettes', 'Amulets'), 'amulettes'], ['Beequip', 'beequip'], ['Mutations', 'mutations'], ['Guide', 'guide'], ['Map infos', 'mapinfos'], [L(lang, 'Outils', 'Tools'), 'outils'], ['Build your Hive', 'outils/builder']];
    const rows = [new ActionRowBuilder(), new ActionRowBuilder()];
    pages.forEach(([t, h], k) => rows[k < 5 ? 0 : 1].addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel(t).setURL(lien(h))));
    const e = new EmbedBuilder().setColor(0x8FE86B).setTitle('Ruche & Outils').setURL(etat.siteUrl + '/')
      .setDescription(L(lang, 'Le hub fan de Bee Swarm Simulator : items, stickers, amulettes, beequips, guides de ruche et calculateurs.', 'The Bee Swarm Simulator fan hub: items, stickers, amulets, beequips, hive guides and calculators.'))
      .setThumbnail(etat.siteUrl + '/images/item/Beequip.webp');
    return i.reply({ embeds: [e], components: rows });
  }

  if (c === 'aide') return i.reply({ embeds: [aide(lang, i.guildId)], flags: MessageFlags.Ephemeral });
  if (c === 'config') return cmdConfig(i, lang);
}

async function cmdRecette(i, lang) {
  const nom = i.options.getString('objet'), qte = i.options.getInteger('quantite') || 1;
  const f = trouverParNom('item', nom);
  const r = f && decomposer(f.nom, qte);
  if (!r || !r.connu) return i.reply({ content: L(lang, `« ${nom} » ne se fabrique pas (ou n'a pas de recette sur le site).`, `"${nom}" can't be crafted (or has no recipe on the site).`), flags: MessageFlags.Ephemeral });
  const o = f.data;
  const e = new EmbedBuilder().setColor(0x8FE86B).setTitle(`${L(lang, 'Recette', 'Recipe')} : ${qte > 1 ? qte + ' × ' : ''}${f.nom}`).setURL(f.url)
    .addFields({ name: L(lang, 'Recette directe', 'Direct recipe'), value: `🍯 ${fmtMiel((o.miel || 0) * qte, lang)}\n` + o.mats.map(([q, n]) => `• ${fmtMiel(q * qte, lang)} × ${n}`).join('\n') });
  if (r.etapes.size) e.addFields({ name: L(lang, 'À fabriquer en chemin', 'To craft along the way'), value: couper([...r.etapes.entries()].map(([n, q]) => `• ${fmtMiel(q, lang)} × ${n}`).join('\n'), 1024) });
  e.addFields({ name: L(lang, 'Total en ressources de base', 'Total in base resources'), value: couper(`🍯 **${fmtMiel(r.miel, lang)}**\n` + [...r.base.entries()].sort((a, b) => b[1] - a[1]).map(([n, q]) => `• **${fmtMiel(q, lang)}** × ${n}`).join('\n'), 1024) });
  e.setFooter({ text: L(lang, 'Même calcul que le calculateur d\'ingrédients du site', 'Same maths as the site\'s ingredient calculator') });
  return i.reply({ embeds: [e], components: [boutonSite(lien('outils/ingredients'), lang, L(lang, 'Ouvrir le calculateur', 'Open the calculator'))] });
}

async function cmdNiveau(i, lang) {
  const de = i.options.getInteger('de'), a = i.options.getInteger('a'), n = i.options.getInteger('abeilles') || 1;
  if (a <= de) return i.reply({ content: L(lang, 'Le niveau voulu doit être plus haut que le niveau actuel.', 'The target level must be higher than the current one.'), flags: MessageFlags.Ephemeral });
  const P = etat.donnees.PRIX_NIVEAU;
  let miel = 0; const lignes = [];
  for (let l = de; l < a; l++) { miel += P[l] || 0; lignes.push(`${l} → ${l + 1} : 🍯 ${fmtMiel(P[l] || 0, lang)}`); }
  miel *= n;
  const bond = miel / 1000, treats = Math.ceil(bond / 10);
  const e = new EmbedBuilder().setColor(0xF5D04B).setTitle(L(lang, `Niveau ${de} → ${a}${n > 1 ? ` · ${n} abeilles` : ''}`, `Level ${de} → ${a}${n > 1 ? ` · ${n} bees` : ''}`))
    .addFields(
      { name: L(lang, 'Miel', 'Honey'), value: `🍯 **${fmtMiel(miel, lang)}**`, inline: true },
      { name: 'Bond', value: `**${fmtMiel(bond, lang)}**`, inline: true },
      { name: L(lang, 'Treats (sans bonus)', 'Treats (no bonus)'), value: `**${fmtMiel(treats, lang)}**`, inline: true },
      { name: L(lang, 'Détail par niveau (1 abeille)', 'Per level (1 bee)'), value: couper(lignes.join('\n'), 1024) })
    .setFooter({ text: L(lang, '1 Treat = 10 bond = 10 000 miel · le site gère aussi les bonus (Moon Charm, Puppy)', '1 Treat = 10 bond = 10,000 honey · the site also handles bonuses (Moon Charm, Puppy)') });
  return i.reply({ embeds: [e], components: [boutonSite(lien('outils/niveau'), lang, L(lang, 'Calculateur de niveau', 'Level calculator'))] });
}

function aide(lang, gid) {
  const ia = iaActive() ? L(lang, `IA activée (${configIA().fournisseur})`, `AI enabled (${configIA().fournisseur})`) : L(lang, 'moteur de recherche intégré', 'built-in search engine');
  const salons = gid ? cfg.salons(gid).map(([id]) => `<#${id}>`).join(', ') : '';
  return new EmbedBuilder().setColor(0x8FE86B).setTitle(L(lang, 'Ce que je sais faire', 'What I can do'))
    .setDescription(L(lang,
      `Toutes mes réponses viennent du site **Ruche & Outils**, que je relis régulièrement.\n
**Fiches** : \`/item\` \`/sticker\` \`/beequip\` \`/amulette\` \`/mob\` \`/abeille\` \`/mutation\` \`/champ\`
**Calculs** : \`/recette\` (ressources de base) · \`/niveau\` (miel et treats)
**Chercher** : \`/recherche\` dans tout le site · \`/question\` pour une question en français ou en anglais
**Liens** : \`/site\`
**Questions libres** : ${salons ? `écris ta question dans ${salons}` : 'un admin peut choisir un salon avec `/config salon-questions`'}${cfg.mention(gid) ? ', ou mentionne-moi n\'importe où' : ''}.\n
Réponses : ${ia}.`,
      `All my answers come from the **Hive & Tools** site, which I re-read regularly.\n
**Cards**: \`/item\` \`/sticker\` \`/beequip\` \`/amulet\` \`/mob\` \`/bee\` \`/mutation\` \`/field\`
**Maths**: \`/recipe\` (base resources) · \`/level\` (honey and treats)
**Search**: \`/search\` the whole site · \`/question\` for a question in English or French
**Links**: \`/site\`
**Free questions**: ${salons ? `ask in ${salons}` : 'an admin can pick a channel with `/config salon-questions`'}${cfg.mention(gid) ? ', or mention me anywhere' : ''}.\n
Answers: ${ia}.`));
}

async function cmdConfig(i, lang) {
  const sub = i.options.getSubcommand();
  const salon = i.options.getChannel('salon') || i.channel;
  if (sub === 'salon-questions') {
    const mode = i.options.getString('mode') || 'questions';
    cfg.ajouterSalon(i.guildId, salon.id, mode);
    return i.reply({ content: L(lang, `✅ Je réponds maintenant ${mode === 'tout' ? 'aux messages postés' : 'aux questions posées'} dans <#${salon.id}>.${iaActive() ? '' : '\nℹ️ Sans clé d\'IA, je réponds avec mon moteur de recherche (fiches et liens).'}\n⚠️ Il me faut l'option **Message Content Intent** activée sur le portail développeur Discord.`,
      `✅ I now answer ${mode === 'tout' ? 'messages' : 'questions'} posted in <#${salon.id}>.${iaActive() ? '' : '\nℹ️ Without an AI key, I answer with my search engine (cards and links).'}\n⚠️ I need **Message Content Intent** enabled in the Discord developer portal.`), flags: MessageFlags.Ephemeral });
  }
  if (sub === 'retirer-salon') {
    const ok = cfg.retirerSalon(i.guildId, salon.id);
    return i.reply({ content: ok ? L(lang, `✅ Je ne réponds plus tout seul dans <#${salon.id}>.`, `✅ I no longer answer on my own in <#${salon.id}>.`) : L(lang, 'Ce salon n\'était pas configuré.', 'This channel wasn\'t set up.'), flags: MessageFlags.Ephemeral });
  }
  if (sub === 'mention') {
    cfg.reglerMention(i.guildId, i.options.getBoolean('actif'));
    return i.reply({ content: '✅', flags: MessageFlags.Ephemeral });
  }
  const s = cfg.salons(i.guildId);
  const e = new EmbedBuilder().setColor(0x8FE86B).setTitle(L(lang, 'Réglages', 'Settings')).addFields(
    { name: L(lang, 'Salons questions-réponses', 'Q&A channels'), value: s.length ? s.map(([id, v]) => `<#${id}> · ${v.mode}`).join('\n') : '—' },
    { name: L(lang, 'Réponse aux mentions', 'Reply to mentions'), value: cfg.mention(i.guildId) ? '✅' : '❌', inline: true },
    { name: 'IA', value: iaActive() ? `${configIA().fournisseur} · ${configIA().modele || 'défaut'}` : L(lang, 'aucune (moteur de recherche)', 'none (search engine)'), inline: true },
    { name: L(lang, 'Données du site', 'Site data'), value: `${etat.fiches.length} ${L(lang, 'fiches', 'cards')} · ${etat.source} · ${etat.chargeLe ? `<t:${Math.floor(etat.chargeLe / 1000)}:R>` : '—'}`, inline: false });
  return i.reply({ embeds: [e], flags: MessageFlags.Ephemeral });
}

/* menu « ouvrir une fiche » de /recherche */
async function menu(i) {
  if (i.customId !== 'ouvrir-fiche') return;
  const f = etat.parId.get(i.values[0]);
  if (!f) return i.reply({ content: '❓', flags: MessageFlags.Ephemeral });
  await i.deferReply();
  return i.editReply(await messageFiche(f, langueDe(i.locale)));
}

module.exports = { definitions, autocompletion, executer, menu };
