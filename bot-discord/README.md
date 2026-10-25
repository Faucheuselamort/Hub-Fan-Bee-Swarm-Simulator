# Bot Discord « Ruche & Outils »

Le bot Discord du site [Ruche & Outils](https://faucheuselamort.github.io/Hub-Fan-Bee-Swarm-Simulator/).
Toutes ses réponses viennent du site : il le relit tout seul toutes les heures, donc **quand le site change, le bot suit**, sans rien recopier.

## Ce qu'il sait faire

| Commande | Ce qu'elle affiche |
|---|---|
| `/item` | prix, recette, stats, caractéristiques, où l'obtenir, à quoi il sert, total en ressources de base |
| `/sticker` | valeur en trade (signs), Stack Boost, Stack Reward, où le trouver |
| `/beequip` | niveau, limite, bonus sur l'abeille et de ruche, où l'obtenir |
| `/amulette` | où l'obtenir, conditions de chaque palier, statistiques possibles (option `palier`) |
| `/mob` | niveau, PV par niveau, dégâts, réapparition, où le trouver, butin |
| `/abeille`, `/mutation`, `/champ` | les fiches correspondantes |
| `/recette` | toutes les ressources de base pour fabriquer un objet (avec quantité) |
| `/niveau` | miel, bond et treats pour monter une ou plusieurs abeilles |
| `/recherche` | cherche dans tout le site, avec un menu pour ouvrir une fiche |
| `/question` | pose une question en français ou en anglais |
| `/site`, `/aide` | liens vers le site, aide |
| `/config` | réglages du serveur (réservé aux admins) |

Les noms se complètent pendant la frappe, et chaque fiche a un bouton **« Voir sur le site »** qui ouvre directement la bonne fiche.
Le bot répond dans la langue de Discord du membre (français ou anglais).

### Ruche IA, l'IA maison

Le bot a sa **propre IA**, entraînée sur les données du site, sans aucun service extérieur ni clé :

- **Elle comprend ce que veut le joueur** grâce à un petit réseau de neurones : prix, recette, où l'obtenir, stats, PV et réapparition d'un monstre, valeur en trade, comparaison de deux objets, définition, conseil de jeu, aide sur le bot… ou hors sujet (« salut », « gg », « qui veut jouer ? »), auquel cas elle se tait.
- **Elle repère de quoi on parle**, même mal écrit, abrégé ou à moitié en français : « le taky planteur », « porcelaine dipper », « ssa », « kb amulet », « le tacky ».
- **Elle a appris sur environ 27 000 questions** fabriquées automatiquement à partir du site (français, anglais, langage de joueur, fautes de frappe). Sur des questions écrites à la main comme sur un vrai Discord, elle trouve la bonne intention et le bon objet dans presque tous les cas (`npm run entrainer` affiche le score).
- **Elle se ré-entraîne toute seule** (une dizaine de secondes) quand le site change ou quand tu ajoutes des modèles de phrases dans `src/ia-maison/questions.js`.
- Sous chaque réponse libre, des boutons 👍 / 👎 notent les questions mal comprises dans `data/avis.jsonl` ; `npm run avis` les affiche pour améliorer l'IA.

Exemples de ce qu'elle sait faire :

| Question | Réponse |
|---|---|
| combien coûte le tacky planter ? | le prix et la recette, avec la fiche |
| faut combien de blue extract pour le tide popper | « Pour Tide Popper, il faut 1 500 Blue Extract » |
| kazoo ou thimble ? | les deux fiches côte à côte |
| je fais quoi après le porcelain dipper ? | les outils suivants par prix + les passages des guides |
| best red hive for endgame | les sections du guide ruche rouge |
| pv du king beetle | PV, niveau, réapparition, fiche du monstre |
| gg bien joué | rien : elle se tait |

### Le salon questions-réponses

Un admin tape `/config salon-questions` dans un salon. Ensuite, quand quelqu'un y pose une question, Ruche IA répond toute seule avec une phrase, la fiche et des boutons vers le site. Elle répond aussi aux messages sans point d'interrogation quand elle est sûre qu'on parle du jeu (« prix du tacky planter »), et reste silencieuse sur les discussions hors sujet. On peut aussi mentionner le bot dans n'importe quel salon (désactivable avec `/config mention`).

## Installation

### 1. Créer le bot sur Discord

1. Va sur le [portail développeur Discord](https://discord.com/developers/applications) → **New Application** → donne-lui un nom (par exemple *Ruche & Outils*).
2. Dans **General Information**, copie l'**Application ID** : c'est `DISCORD_CLIENT_ID`.
3. Dans **Bot** :
   - **Reset Token** → copie le jeton : c'est `DISCORD_TOKEN`. Ne le montre à personne.
   - Active **Message Content Intent** (obligatoire pour le salon questions-réponses).
4. Invite le bot sur ton serveur avec ce lien (remplace `TON_ID` par l'Application ID) :

   ```
   https://discord.com/oauth2/authorize?client_id=TON_ID&scope=bot+applications.commands&permissions=274877991936
   ```

   Il demande seulement : voir les salons, envoyer des messages (et dans les fils), intégrer des liens, lire l'historique.

### 2. Lancer le bot

Il faut [Node.js](https://nodejs.org) version 18 ou plus récente.

- **Windows** : double-clique sur `lancer.bat`. La première fois, il crée le fichier `.env` et l'ouvre : remplis `DISCORD_TOKEN` et `DISCORD_CLIENT_ID`, enregistre, puis relance `lancer.bat`.
- **Mac / Linux** : `./lancer.sh` (même principe).
- **À la main** : copie `.env.example` en `.env`, remplis-le, puis `npm install` et `npm start`.

Astuce : mets aussi `DISCORD_GUILD_ID` (clic droit sur ton serveur → *Copier l'identifiant*, avec le mode développeur de Discord activé). Les commandes apparaissent alors tout de suite au lieu d'attendre jusqu'à une heure.

Quand tout va bien, la console affiche :

```
[site] 811 fiches chargées (site)
[ruche ia] ré-entraînée sur 27170 questions en 9.3 s (réussite 99.4 %)
[discord] connecté en tant que Ruche & Outils#1234
[discord] 15 commandes publiées sur le serveur …
```

### 3. Ajouter une IA extérieure (facultatif, pas nécessaire)

Ruche IA suffit pour faire tourner le bot. Si un jour tu veux en plus des réponses rédigées librement (des phrases plus naturelles sur les questions compliquées), tu peux brancher une IA extérieure ; elle reçoit seulement les fiches trouvées par Ruche IA.

| Choix | Coût | Réglages dans `.env` |
|---|---|---|
| **Groq** | gratuit (avec limites) | `IA_FOURNISSEUR=openai` · `IA_URL=https://api.groq.com/openai/v1` · `IA_MODELE=llama-3.3-70b-versatile` · `IA_CLE=` ta clé sur [console.groq.com](https://console.groq.com) |
| **Gemini** | gratuit (avec limites) | `IA_FOURNISSEUR=openai` · `IA_URL=https://generativelanguage.googleapis.com/v1beta/openai` · `IA_MODELE=gemini-2.5-flash` · `IA_CLE=` ta clé sur [aistudio.google.com](https://aistudio.google.com) |
| **Claude** | payant, quelques centimes par mois pour un serveur moyen | `IA_FOURNISSEUR=anthropic` · `IA_MODELE=claude-haiku-5-5` · `IA_CLE=` ta clé sur [console.anthropic.com](https://console.anthropic.com) |
| **Ollama** (sur ton PC) | gratuit, hors ligne | installe [Ollama](https://ollama.com), puis `ollama pull llama3.1` · `IA_FOURNISSEUR=openai` · `IA_URL=http://localhost:11434/v1` · `IA_MODELE=llama3.1` |

Si l'IA extérieure ne répond pas (quota atteint, coupure…), Ruche IA reprend la main automatiquement.

## Le garder allumé

Le bot ne répond que tant que la machine qui le fait tourner est allumée. Deux possibilités :

- **Ton PC** : simple pour commencer. Pour qu'il redémarre tout seul en cas de plantage : `npm install -g pm2`, puis `pm2 start src/index.js --name ruche-bot` et `pm2 save`.
- **Un hébergement en ligne qui fait tourner Node.js** (un petit VPS ou un hébergeur de bots Discord) : envoie le dossier `bot-discord` (sans `node_modules`), crée le fichier `.env` sur place, et lance `npm install` puis `npm start`.

Le bot garde une copie des données du site dans `data/` : si le site est momentanément injoignable, il continue avec la dernière version.

## Comment il lit le site

Le bot télécharge `app.html`, `lang-fr.js` et `lang-en.js` du site, puis en extrait les données (ITEMS, STICKERS, BEEQUIP, AMULETTES, MOBS_DATA, ABEILLES, MUTATIONS, carte, guides…) dans un bac à sable isolé. Tu continues à modifier le site comme d'habitude : il n'y a rien à faire côté bot.

Les liens « Voir sur le site » utilisent les adresses directes du site, par exemple `app.html#fiche/items/Tacky Planter`.

## Vérifier et améliorer

- `npm test` : tests sans Discord ni Internet (depuis ce dossier, avec le site dans le dossier parent) : lecture du site, toutes les fiches dans les deux langues, Ruche IA sur des questions réelles, réponses, silence sur le hors-sujet, commandes, IA extérieure simulée.
- `npm run entrainer` : ré-entraîne Ruche IA et affiche sa réussite question par question (ajoute `-- --local` pour utiliser le site du dossier parent).
- `npm run avis` : les questions que les membres ont marquées 👎.

## Fichiers

```
bot-discord/
├── src/
│   ├── index.js        démarrage, salon questions-réponses
│   ├── commandes.js    les commandes « / »
│   ├── site.js         lecture du site, images, liens
│   ├── extraction.js   extraction des données de app.html
│   ├── ia-maison/      Ruche IA : réseau de neurones, détecteur d'objets, questions d'entraînement
│   ├── avis.js         boutons 👍 / 👎
│   ├── recherche.js    moteur de recherche (FR/EN, fautes de frappe)
│   ├── reponse.js      réponse aux questions libres
│   ├── ia.js           IA extérieure facultative (Claude ou compatible OpenAI)
│   ├── fiches.js       mise en forme des fiches Discord
│   ├── recette.js      calcul des ressources de base
│   ├── config.js       réglages par serveur
│   └── outils.js       petites fonctions communes
├── scripts/          entraîner Ruche IA, lire les avis
├── tests/            tests hors ligne et questions réelles
├── .env.example        modèle de configuration
├── lancer.bat / lancer.sh
└── package.json
```

Le fichier `.env` (avec ton jeton) et le dossier `data/` ne sont jamais envoyés sur GitHub.
