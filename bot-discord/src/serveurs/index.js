'use strict';
/* Modules « gestion de serveur » (façon DraftBot), pilotés par le dashboard. */
const reglages = require('./reglages');
const moderation = require('./moderation');
const bienvenue = require('./bienvenue');
const logs = require('./logs');
const niveaux = require('./niveaux');
const tickets = require('./tickets');
const roles = require('./roles-boutons');
const giveaways = require('./giveaways');
const synchro = require('./synchro');

const MODULES = [moderation, bienvenue, logs, niveaux, tickets, roles, giveaways];

function commandes() { return MODULES.flatMap(m => (m.commandes ? m.commandes() : [])); }

async function commande(i) { for (const m of MODULES) if (m.commande && await m.commande(i)) return true; return false; }
async function bouton(i) { for (const m of MODULES) if (m.bouton && await m.bouton(i)) return true; return false; }
async function autocompletion(i) { for (const m of MODULES) if (m.autocompletion && await m.autocompletion(i)) return true; return false; }

/* avant la connexion : réglages chargés, événements branchés */
async function preparer(client) {
  await reglages.charger();
  await reglages.reprendreAnciens();
  reglages.surveiller();
  MODULES.forEach(m => m.evenements && m.evenements(client));
}
/* une fois connecté : minuteries et lien avec le dashboard */
function demarrer(client, infos) {
  MODULES.forEach(m => m.demarrer && m.demarrer(client));
  synchro.demarrer(client, infos, { tickets, roles, giveaways, bienvenue });
}

module.exports = { commandes, commande, bouton, autocompletion, preparer, demarrer, reglages };
