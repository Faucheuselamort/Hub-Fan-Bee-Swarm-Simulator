'use strict';
/* Lien avec le dashboard du site :
   - publie la liste des salons et rôles de chaque serveur (pour les menus) ;
   - indique que le bot est en ligne (toutes les minutes) ;
   - inscrit le propriétaire de l'application comme admin du dashboard ;
   - exécute les actions demandées depuis le dashboard. */
const { ChannelType, Events, EmbedBuilder } = require('discord.js');
const db = require('../stockage');
const reglages = require('./reglages');
const { couleur, variables } = require('./aide-discord');

const TYPES = { [ChannelType.GuildText]: 'texte', [ChannelType.GuildAnnouncement]: 'annonces', [ChannelType.GuildVoice]: 'vocal', [ChannelType.GuildCategory]: 'categorie', [ChannelType.GuildForum]: 'forum', [ChannelType.GuildStageVoice]: 'scene' };

function instantane(g) {
  const salons = g.channels.cache.filter(c => TYPES[c.type]).map(c => ({ id: c.id, nom: c.name, type: TYPES[c.type], parent: c.parentId || null, position: c.rawPosition }))
    .sort((a, b) => a.position - b.position);
  const moi = g.members.me;
  const roles = g.roles.cache.filter(r => r.id !== g.id).map(r => ({ id: r.id, nom: r.name, couleur: r.hexColor, position: r.position, gere: !!r.managed, assignable: !r.managed && moi && r.position < moi.roles.highest.position }))
    .sort((a, b) => b.position - a.position);
  return { guild_id: g.id, nom: g.name, icone: g.iconURL({ size: 128 }) || null, membres: g.memberCount, salons, roles, maj: new Date().toISOString() };
}

async function publierServeurs(client) {
  try { await db.enregistrer('bot_serveurs', client.guilds.cache.map(instantane)); } catch (e) { console.warn('[synchro]', e.message); }
}
let minuterie = null;
function publierBientot(client) { clearTimeout(minuterie); minuterie = setTimeout(() => publierServeurs(client), 4000); }

async function battement(client, infos) {
  try {
    await db.enregistrer('bot_etat', { id: 1, nom: client.user.username, avatar: client.user.displayAvatarURL({ size: 128 }), en_ligne: infos.depuis, vu: new Date().toISOString(), ping: Math.round(client.ws.ping), fiches: infos.fiches(), ia: infos.ia() });
  } catch (e) { /* hors ligne */ }
}

async function inscrireAdmins(client) {
  try {
    const app = await client.application.fetch();
    const ids = new Map();
    const owner = app.owner;
    if (owner && owner.members) owner.members.forEach(m => ids.set(m.user.id, m.user.username));       // équipe
    else if (owner) ids.set(owner.id, owner.username);
    (process.env.DASHBOARD_ADMINS || '').split(/[,\s]+/).filter(Boolean).forEach(id => ids.set(id, ids.get(id) || null));
    if (ids.size) await db.enregistrer('bot_admins', [...ids].map(([discord_id, nom]) => ({ discord_id, nom })));
    return [...ids.keys()];
  } catch (e) { console.warn('[synchro] admins :', e.message); return []; }
}

/* ---------- actions du dashboard ---------- */
async function executerAction(client, a, modules) {
  const g = client.guilds.cache.get(a.guild_id);
  if (!g) throw new Error('le bot n\'est pas sur ce serveur');
  const d = a.donnees || {};
  switch (a.type) {
    case 'publier_tickets': { const s = await modules.tickets.publierPanneau(g, d.salon); return `panneau publié dans #${s.name}`; }
    case 'publier_roles': { const m = await modules.roles.publier(g, d.panneau, d.salon || null); return `panneau publié (${m.url})`; }
    case 'giveaway': { const { m } = await modules.giveaways.lancerGiveaway(g, d.salon, { lot: d.lot, dureeMs: d.dureeMs, gagnants: d.gagnants || 1, par: 'dashboard' }); return `giveaway lancé (${m.url})`; }
    case 'sondage': { const m = await modules.giveaways.lancerSondage(g, d.salon, { question: d.question, options: d.options, dureeMs: d.dureeMs || null }); return `sondage publié (${m.url})`; }
    case 'annonce': {
      const s = g.channels.cache.get(d.salon);
      if (!s || !s.isTextBased()) throw new Error('salon introuvable');
      const texte = variables(d.message, { guild: g });
      const msg = d.embed
        ? { content: d.mention || undefined, embeds: [new EmbedBuilder().setColor(couleur(d.couleur)).setTitle(d.titre || null).setDescription(texte || null).setImage(d.image || null)] }
        : { content: [d.mention, texte].filter(Boolean).join('\n') };
      const m = await s.send({ ...msg, allowedMentions: { parse: d.mention ? ['everyone', 'roles'] : [] } });
      return `annonce envoyée (${m.url})`;
    }
    case 'publier_embed': {
      const { message, modifie } = await modules.embeds.publier(g, d.id, { nouveau: !!d.nouveau });
      return `embed ${modifie ? 'mis à jour' : 'publié'} (${message.url})`;
    }
    case 'retirer_embed': return (await modules.embeds.retirer(g, d.id)) ? 'message supprimé sur Discord' : 'le message n\'existait plus';
    case 'publier_boutique': { const m = await modules.economie.publierBoutique(g, d.salon); return `boutique publiée (${m.url})`; }
    case 'argent': return await modules.economie.actionDashboard(g, d);
    case 'tester_bienvenue': {
      const m = await g.members.fetch(d.membre || g.ownerId);
      const ok = await modules.bienvenue.envoyerBienvenue(m, { test: true });
      return ok ? 'message de test envoyé' : 'aucun salon de bienvenue choisi';
    }
    case 'synchroniser': await publierServeurs(client); return 'salons et rôles mis à jour';
    default: throw new Error(`action inconnue : ${a.type}`);
  }
}

let occupe = false;
async function traiterActions(client, modules) {
  if (occupe) return; occupe = true;
  try {
    const l = (await db.lire('bot_actions', { fait: false }, { ordre: 'id', limite: 10 }));
    for (const a of l) {
      let resultat;
      try { resultat = '✅ ' + await executerAction(client, a, modules); } catch (e) { resultat = '❌ ' + e.message; }
      await db.modifier('bot_actions', { id: a.id }, { fait: true, resultat });
      console.log(`[dashboard] ${a.type} : ${resultat}`);
    }
  } catch (e) { /* base injoignable : on réessaie plus tard */ } finally { occupe = false; }
}

function demarrer(client, infos, modules) {
  publierServeurs(client);
  battement(client, infos);
  inscrireAdmins(client).then(ids => { if (ids.length && db.mode() === 'supabase') console.log(`[dashboard] accès autorisé pour : ${ids.join(', ')}`); });
  setInterval(() => battement(client, infos), 60000);
  setInterval(() => publierServeurs(client), 10 * 60000);
  setInterval(() => traiterActions(client, modules), 4000);
  ['ChannelCreate', 'ChannelDelete', 'ChannelUpdate', 'GuildRoleCreate', 'GuildRoleDelete', 'GuildRoleUpdate', 'GuildCreate', 'GuildDelete', 'GuildUpdate']
    .forEach(ev => client.on(Events[ev], () => publierBientot(client)));
}

module.exports = { demarrer, publierServeurs, instantane, executerAction };
