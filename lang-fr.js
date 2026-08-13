/* ============================================================
   LANG-FR.JS — tous les textes du site en français
   ------------------------------------------------------------
   Ce fichier ne contient QUE du texte. Le code est dans app.html.
   Son jumeau anglais est lang-en.js : mêmes clés, même structure.
   Quand tu ajoutes une section ici, ajoute-la aussi dans lang-en.js.
   ============================================================ */

window.LANGUES = window.LANGUES || {};
window.LANGUES.fr = window.LANGUES.fr || {};
var LANGUES = window.LANGUES;

/* ---------- Libellés d'interface ---------- */
LANGUES.fr.T = {
  guide_intro   : "Les parcours de progression, classés par orientation de ruche. Choisis une voie pour voir les étapes conseillées.",
  guide_Incolore: "La ruche polyvalente, sans orientation de couleur.",
  guide_Red     : "Le parcours ruche rouge.",
  guide_Blue    : "Le parcours ruche bleue.",
  guide_White   : "Le parcours ruche blanche.",
  guide_vide    : "La section <b>%s</b> est prête mais encore vide.",
  section       : "section",
  sections      : "sections",
  langue_autre  : "English",
};

/* ---------- Contenu des guides ---------- */
LANGUES.fr.GUIDE = {
  "Incolore": [],
  "Red": [],
  "Blue": [

    { titre:"1.1 Composition de la ruche", blocs:[
      { t:'p', v:"Une ruche bleue passe par <b>3 grandes etapes</b> au cours de sa vie." },
      { t:'note', v:"Les beequips visibles sur les ruches d'exemple ne sont que des <b>exemples</b> : tu n'es pas oblige de jouer exactement les memes." },
      { t:'h', v:"Stage 1 \u2014 Transition Blue" },
      { t:'comp', v:[
        { nom:"Transition Blue", sous:"La ruche qui te fait passer du Midgame (SSA) au deblocage du RBC, et a la prise en main de celui-ci.",
          ratio:"Ratio : 16 Buoyants / 10 Tadpoles (5 gifted) / 3 Diamonds",
          notes:[
            "Si tu n'es pas encore a l'aise avec le RBC, lis la section 4. Boosting Guidance.",
            "Passe en <b>Blessing Boost Blue</b> avant de booster, pour viser une blessing de 80x+.",
            "Cette comp sert aussi si tu n'arrives pas a maintenir ta blessing.",
            "C'est une ruche orientee honeymaking qui ne depend pas d'une grosse blessing. Le faible nombre de Diamonds rend les comps plus souples : tu atteins plus vite un score de 400+ a l'Ant Challenge, tu obtiens la Diamond Stick Bug Amulet plus facilement, tu fais de meilleurs Puffshroom runs et tu boucles le Robo Bear Challenge plus vite.",
            "Tu peux faire tout cela avec plus de Diamonds, ce sera juste <b>legerement</b> plus difficile.",
          ]},
      ]},
      { t:'h', v:"Stage 2 \u2014 Blessing Boosting Blue" },
      { t:'comp', v:[
        { nom:"Blessing Boosting Blue", sous:"Sert uniquement a monter ta blessing pendant un boost RBC en bleu, par spam de Buoyants.",
          ratio:"Ratio : 25 Buoyants (16 gifted) / 9 Tadpoles",
          notes:[
            "Les Buoyants supplementaires sont ajoutes temporairement et peuvent rester ungifted pendant le boost.",
            "Cela part du principe que tu arriveras a remplir tous les ballons pendant le boost. Si tu n'exploites pas tous les ballons, remets des abeilles de fill dans cet ordre : <b>Fuzzy (solo) > Cool > 1-3 Tadpoles > Looker > n'importe quel autre type bleu gifted</b>.",
            "Si tu n'arrives pas a <b>maintenir</b> ta blessing longtemps, passer sur cette comp est inutile : une blessing standard de 50-60x suffit avant de lancer une session de macro.",
            "Si tu as deja booste avec cette comp et atteint 80x+, revenir dessus n'est pas necessaire.",
          ]},
      ]},
      { t:'p', v:"Une fois un blessing boost a <b>x80+</b> effectue, tu as deux choix : tenter une meilleure blessing (x90-x100), ou passer a <b>Honeymaking Blue</b>." },
      { t:'h', v:"Stage 3 \u2014 Honeymaking Blue" },
      { t:'comp', v:[
        { nom:"Full Diamond Comp", sous:"Pour ceux qui peuvent maintenir 80x+.",
          ratio:"Ratio : 14 Buoyants / 8 Tadpoles / 10 Diamonds" },
        { nom:"Semi Diamond Comp", sous:"Pour ceux qui ne peuvent pas maintenir 80x+.",
          ratio:"Ratio : 15 Buoyants / 10 Tadpoles / 6 Diamonds" },
      ]},
      { t:'h', v:"Objectifs d'une Honeymaking Blue" },
      { t:'etapes', v:[
        { t:"Les ballons", d:"Avoir 16 Buoyants, ou 15 Buoyants + Digi." },
        { t:"Le remplissage", d:"Etre capable de remplir ces ballons, via les abeilles, les amulettes et les beequips." },
        { t:"Les tokens", d:"Maintenir un bon uptime de tokens." },
        { t:"Les Diamonds", d:"Tout slot restant part sur des Diamond Bees. Place-les au milieu de la ruche (prends le placement des comps comme modele) et donne-leur les beequips avec un stat vert convert%." },
      ]},
      { t:'p', v:"Honeymaking Blue, aussi appelee <b>Diamond Comp</b>, est ce a quoi ressemble une vraie ruche bleue. Contrairement a une idee repandue, elle n'est pas limitee par le niveau : les seules barrieres sont d'avoir un bon sens du fill et assez de blessing (x80+)." },
      { t:'liste', v:[
        "Les <b>Diamond Bees</b> sont jouees pour leur passif <b>Shimmer</b>, qui multiplie fortement le miel via le stat Hive%.",
        "Par <i>sens du fill</i>, on entend faire des tests pour voir si tu peux retirer des abeilles de fill afin de liberer des slots, sans pour autant tomber en underfill (voir 1.2 Hive Editing).",
        "Les alts ne sont pas obligatoires pour une full diamond comp, mais fortement recommandes : les Tad alts apportent une grosse part du fill (Tad sync, 250+ pops par Popstar).",
        "Au demarrage, <b>ne joue pas 10 Diamonds</b>, tu serais largement en underfill. Monte progressivement a partir de 7 jusqu'a trouver un fill confortable.",
        "Il est fortement recommande de construire tes tad alts pendant que tu es Honeymaking Blue : le tad sync multiplie ton hourly par 2 a 3 et change beaucoup ton fill, meme si ce n'est pas une condition stricte pour transitionner.",
      ]},
      { t:'p', v:"L'alternative a la Full Diamond Comp est la <b>Semi Diamond Comp</b>, dont les prerequis de transition sont quasi nuls : ni blessing a maintenir, ni niveau, ni capacite de fill particuliere." },
      { t:'liste', v:[
        "Cela dit, la Semi Diamond devient nettement plus forte avec de bons nectars (3-4 maxes), un Gold Cog correct (avec BP et Bubble Pollen) ou une Diamond Stick bug amulet (avec un gros BP), et de preference une blessing de 55x+ (voir 4.3 Mini Blessing).",
        "Si tu <b>underfill</b>, retire des Buoyants au profit des Diamonds ; si tu <b>overfill</b>, retire des Tadpoles au profit des Diamonds. Reste au-dessus de <b>7 Tadpoles</b> et <b>14 Buoyants</b> (voir 2.3 Hourly Report).",
        "Quand une Honeymaking Blue perd sa blessing, elle peut revenir en Blessing Boost Blue pour retenter du 80x+, ou rester en l'etat si elle ne compte pas faire de miel pendant un moment. Tu peux d'ailleurs passer en Blessing Boost Blue en gardant certains Diamonds a haut <b>Convert%</b>.",
      ]},
      { t:'h', v:"Extra \u2014 Honeyday Blue (4x Macroing)" },
      { t:'comp', v:[
        { nom:"Honeyday Blue", sous:"Comp de Honeyday, pensee pour du macro en 4x.",
          ratio:"Ratio : 16 Buoyants / 6 Tadpoles / 14 Diamonds",
          notes:[
            "Pendant le <b>Honeyday</b> (un buff de 48 heures qui donne 2x pollen et 2x convert rate), les ruches bleues exploitent le buff en reglant leur macro pour auto-boost le <b>Pine Tree en 4x</b>.",
            "Cette comp peut aussi servir hors HD pour du macro en 4x, mais attention au cout eleve du maintien du boost.",
            "Si tu es encore en Transition Blue, contente-toi de retirer des abeilles de fill au profit de Buoyants et Diamonds supplementaires.",
          ]},
      ]},
    ]},

    { titre:"1.2 Hive Editing", blocs:[
      { t:'note', v:"Il est fortement recommande de bien comprendre les <b>3 stages du Blue</b> : ils sont references dans tout le guide. Si tu viens juste de passer bleu, ne lis que les instructions de <b>Transition Blue</b>. L'underfill et l'overfill sont expliques dans la section 2.3." },
      { t:'h', v:"Les classes d'abeilles" },
      { t:'p', v:"Une <i>classe</i> est un role qu'une abeille remplit dans la ruche. Par exemple : <b>Shocked</b> = Token Link et Haste Producer ; <b>Looker</b> = Fill Bee et Focus Producer." },
      { t:'liste', v:[
        "Une abeille peut remplir plusieurs roles, mais certaines sont plus efficaces que d'autres (Looker produit du focus plus vite que Commander).",
        "Les classes sont classees de <b>T0</b> (le plus efficace) a <b>T5</b> (le moins efficace) : sers-t'en pour decider quelles abeilles garder ou retirer.",
        "La liste n'est pas exhaustive, mais elle couvre les changements majeurs d'une ruche bleue.",
        "Les classes excluent les abeilles considerees comme obligatoires par defaut : <b>Festive, Bear, Digital, Windy et Diamond</b>.",
      ]},
      { t:'tab', v:{ cols:["Classe","Quantite recommandee","T0","T1","T2","T3","T4","T5"], rows:[
        ["Fill Bee <span style=\"opacity:.7\">(collectent le pollen)</span>","A reguler selon le fill","Tadpole, Bubble","Cool, Tabby","Basic, Fuzzy (solo)","Cobalt","Frosty, Vicious, Fuzzy (a plusieurs)","Looker, Commander, Lion, Shy"],
        ["Token Link Producer","4-6","Music (tres polyvalente)","Exhausted","Bead Lizard sur n'importe quelle abeille, Shocked","Paperclip sur n'importe quelle abeille","Paper Angel Photon","Paper Angel Shy"],
        ["Focus Producer","~5","Reindeer Antlers Puppy, Music (polyvalente)","Looker, Pink Shades sur n'importe quelle abeille","Commander","\u2014","\u2014","\u2014"],
        ["Haste Producer","2-3","Hasty","Toy Drum Bucko, Ninja","Whistle Cool","Shocked, Toy Drum sur une autre abeille","Photon","\u2014"],
        ["Melody Producer","3-4","Melody Bracelet Diamond, Melody Whistle Cool, Music (polyvalente)","Melody Whistle Commander","Kazoo, Toy Horn Cobalt","Toy Horn sur une autre abeille","\u2014","\u2014"],
        ["Capacity Buffer","Autant que possible, quel que soit le fill","Pinecone sur n'importe quelle abeille, Bucko, Bumble","Autumn Sunhat, Rose Headband, Reindeer Antlers Puppy, Snow Tiara, Exhausted","Buoyant (l'interet diminue a mesure que tu en ajoutes)","Autres beequips de capacite (Berets, Tree hats, etc.)","Cobalt (vide ton sac)","\u2014"],
      ]}},
      { t:'liste', v:[
        "Le <b>Token Link</b> est la source d'uptime de tokens la plus forte.",
        "Ratio recommande cote capacite : <b>15 Buoyants + Digi</b>, ou <b>16 Buoyants</b>.",
      ]},
      { t:'h', v:"Extra \u2014 la Stubborn Bee" },
      { t:'liste', v:[
        "La Stubborn peut etre bonne, mais c'est a tester toi-meme : c'est vraiment un choix de joueur.",
        "Si tu as beaucoup de Token Link Producers, ou 5%+ de Token Lifespan sur ta Cog amulet, ou des Paperclips avec un gros Token Lifespan, tu peux envisager de la retirer ou de la remplacer par <b>Hasty</b>.",
        "En revanche, son utilite augmente pour les comps Digital a gros drives (couleurs maxees, 100+ glitched).",
      ]},
      { t:'h', v:"Hive adjustments \u2014 Baseline Blue" },
      { t:'comp', v:[
        { nom:"Baseline Blue", sous:"Toutes les abeilles de cette comp sont le strict minimum d'une ruche bleue.",
          ratio:"16 Buoyant \u00b7 10 slots vides \u00b7 7 Tadpole \u00b7 4 Music",
          notes:[
            "Le reste, a 1 exemplaire chacune : Exhausted, Stubborn, Bubble, Bumble, Bucko, Cool, Ninja, Windy, Basic, Bear, Diamond, Festive, Tabby.",
          ]},
      ]},
      { t:'h', v:"Substitutions possibles" },
      { t:'liste', v:[
        "<b>Digital</b> avec les drives de couleur maxes devrait remplacer 1 Buoyant.",
        "<b>6 Tadpoles</b> suffisent si tu as 1500+ de Polar.",
        "Les <b>Buoyants</b> doivent etre retires si tu underfill, ou au fur et a mesure de tes upgrades de capacite. Ne monte jamais au-dessus de 18 ni en dessous de 14 Buoyants.",
        "<b>Tabby, Basic et Cool</b> peuvent etre retirees pendant le HD ou un boost en 4x.",
        "<b>Hasty</b> peut remplacer Stubborn : teste par toi-meme.",
      ]},
      { t:'h', v:"Utilisation des slots libres" },
      { t:'liste', v:[
        "<b>Diamond</b> doit toujours occuper les slots libres qui ne servent a rien d'autre : par exemple a la place de Buoyants quand tu underfill.",
        "Jusqu'a <b>12 Tadpoles</b> si tu underfill.",
        "<b>Puppy</b> doit toujours etre jouee si tu as les Reindeer Antlers, ou si tu es lvl 15+.",
        "<b>Gummy</b> ne se joue qu'au-dessus de 13 ou en dessous de 6 Diamonds.",
        "<b>Looker</b> a ajouter pour l'uptime de focus et un petit buff au fill. <b>Commander</b> peut s'ajouter si l'uptime de focus n'est toujours pas parfait. Comme base, vise <b>6 producteurs au total</b> puis ajuste : 4 Music, Looker, Commander ou Puppy Antlers.",
        "<b>1-2 Fuzzies</b> obligatoires si tu n'as pas d'alts avec des Fuzzies pour la pollinisation.",
        "<b>3-4 Babies</b> pour l'uptime de Baby Love si tu n'as pas de Tadpoles gifted : tu peux retirer 1 Baby par Tadpole que tu gift.",
      ]},
      { t:'note', v:"<b>Ne joue pas Shy / Lion / Frosty / Cobalt.</b> Un Diamond apportera toujours plus de miel sur ce slot." },
      { t:'liste', v:[
        "Il y a enormement de modifications possibles sur une ruche bleue, trop pour toutes les resumer : <b>experimente</b> et vois ce qui marche le mieux pour toi.",
        "Garde en tete qu'a mesure que tes amulettes, tes beequips et ta ruche s'ameliorent, tu devras faire evoluer ta composition.",
      ]},
    ]},

    { titre:"1.3 Mutations", blocs:[
      { t:'h', v:"Legende" },
      { t:'liste', v:[
        "<b>BMS</b> = Bee Movement Speed, jusqu'a +5.",
        "<b>BAR</b> = Bee Ability Rate, jusqu'a +4%.",
        "<b>CA / Convert</b> = Convert Amount, jusqu'a +28%.",
        "<b>GA / Gather</b> = Gather Amount, jusqu'a +28%.",
      ]},
      { t:'h', v:"Notes importantes" },
      { t:'liste', v:[
        "+6 BMS, +5% BAR, +29-30% CA ou GA sont <b>possibles</b>, mais extremement rares : ne compte pas dessus. Les mutations Convert et Gather doivent toujours etre en <b>+% et non en +#</b>.",
        "Les mutations sur les abeilles <b>Rare, Epic et Legendary</b> doivent etre roll au <b>Royal Jelly</b> plutot qu'aux bitterberries. Tu peux ensuite les gift avec des fruits (verifie qu'ils ne sont pas radioactifs pendant le nourrissage, ca peut roll la mutation).",
        "Tu <b>peux</b> aussi roll des mutations mythiques au RJ, mais le cout est delirant : 872T+ par mythique unique avec BMS ou BAR, a reserver au lvl 21+.",
        "Si tu ne comptes pas rester bleu sur le long terme, ne t'embete pas avec les mutations sur les mythiques. Cela dit, mutate temporairement les Musics, les Diamonds et les abeilles d'evenement peut valoir le coup quoi qu'il arrive.",
        "Ordre de mutation aux <b>Bitterberries</b> : Diamonds > Bear > Tadpoles > Event Bees > Buoyants. Au debut, de petites mutations CA% sur les Diamonds s'obtiennent aux bitterberries, puis tu passes au RJ + blueberries pour viser plus haut.",
        "Ordre de mutation au <b>RJ</b> : Diamonds > Bubble > Musics > Haste & Focus Producers > le reste des Rares, Epics et Legendaries. Priorite : <b>bleu</b> = priorite maximale (a partir du lvl 18), <b>rouge</b> = haute priorite, <b>orange</b> = priorite plus basse. Tout le reste peut s'obtenir a n'importe quel moment apres le lvl 18, en faisant attention au cout en fruits.",
      ]},
      { t:'h', v:"Mutation optimale par abeille" },
      { t:'tab', v:{ cols:["Mutation","Abeilles concernees"], rows:[
        ["BMS","Tadpole, Music, Buoyant, ainsi que toutes les autres Rare, Epic et Legendary"],
        ["BAR","Cool, Puppy, Tabby, Rage, Gummy, Commander"],
        ["CA / Convert%","Diamond"],
        ["GA / Gather%","Basic (pour un meilleur pollen de smiley en jeu actif)"],
      ]}},
      { t:'liste', v:[
        "<b>Buoyant, Tabby et Festive</b> ne doivent PAS porter de mutations CA%, car cela vole des opportunites de convert aux Diamonds.",
        "Ce tableau donne la mutation <b>optimale</b>. Pour la plupart des abeilles roll aux bitterberries, BMS et BAR sont interchangeables : si tu obtiens +4 BMS sur Tabby, passe a une autre abeille plutot que de rechercher du BAR.",
        "Cela ne s'applique pas aux abeilles mutees au RJ : ne te contente pas de BAR sur Cool, ca ne vaut pas le cout des blueberries pour la gift.",
        "Les <b>Tadpoles</b> veulent du BMS avant tout, a cause de leur grand nombre de tokens et de leur vitesse de base faible. Ne te contente jamais de BAR sur des Tadpoles.",
      ]},
    ]},

    { titre:"1.4 Beequips", blocs:[
      { t:'p', v:"Les beequips sont l'un des elements les plus importants d'une bonne ruche : ils apportent des buffs inegales au fill, a l'uptime des tokens, a la capacite et au honeymaking en general." },
      { t:'liste', v:[
        "Seuls <b>13 slots</b> sont disponibles, donc chaque slot doit apporter quelque chose a ton hourly. <b>14 et 15 slots</b> sont possibles si tu as fini la quete Beesmas 2020 de Bee Bear, ce qui peut rendre viables des comps qui ne fonctionneraient pas autrement.",
        "Les stats detaillees sont dans le <b>Beequip Spreadsheet</b> : attention, le <i>weight</i> n'est pas la meme chose que la CHANCE.",
      ]},
      { t:'h', v:"Beequips obligatoires" },
      { t:'tab', v:{ cols:["Beequip","Cout approx.","Ou l'obtenir","Stats a viser","A poser sur"], rows:[
        ["2 Pinecones \uD83C\uDF84","2 signes","Stickbug / Catalogue","Le beequip le plus important d'une ruche bleue : mets-y tous tes signes en trop. <b>+% Pine Tree Forest Capacity</b> + <b>Pollen</b>.","Bear + Bumble"],
        ["2 Elf Caps \uD83C\uDF84","0-4 signes","Facilement waxable depuis les Bugs / Stockings","Tres bon marche et excellent buff au HaH des Diamonds. Doit avoir <b>+% HaH</b> (HB).","2 Diamonds, ou Tabby + Buoyant"],
        ["Camphor Lip Balm","0-1 signe","Dapper Shop / Ant challenge","Une des principales sources de fill du bleu, inestimable. Demande un gros <b>+% Bubble Pollen</b> et du <b>+% Gold Bubble Pollen</b> (Caustic uniquement). Le GBP prend de la valeur avec des alts (2BP : 1GBP).","Bubble"],
        ["Candy Ring","0-1 signe","Dapper Shop / quete du Gummy bear","Enorme boost au HaH de tous les Diamonds et tres bon buff au convert rate. <b>+% HaH</b> (HB) et <b>+%CA</b>.","Diamond / Festive"],
        ["Snow Tiara \uD83C\uDF84","1 signe","Trade / Catalogue","Buff inestimable a la capacite, avec un bon bonus au convert. Priorise un gros <b>Blue Field Capacity</b> (HB) et du <b>+%CA</b>.","Diamond"],
      ]}},
      { t:'h', v:"Beequips recommandes" },
      { t:'tab', v:{ cols:["Beequip","Cout approx.","Ou l'obtenir","Stats a viser","A poser sur"], rows:[
        ["Toy Drums \uD83C\uDF84","0.25-1 signe","Se trade pour pas cher","Tres bon pour l'uptime de haste, excellent avec du BAP. <b>+Haste</b>, <b>+%BAP</b> (HB).","Bucko"],
        ["Rose Headband","0-1 signe","Dapper Shop","Buff correct a la capacite, boost delirant au convert rate. <b>+Capacity</b> (HB), <b>+%CA</b>.","Diamond"],
        ["Autumn Sunhat","0-1 signe","Dapper Shop / trade","Buff precieux a la capacite, bon bonus de convert rate. <b>+Capacity</b>, <b>+% White Field Capacity</b> (HB), <b>+%CA</b>.","Diamond"],
        ["Reindeer Antler \uD83C\uDF84","1-3 signes","Se trade a un prix raisonnable","Tres bon buff a la capacite et a l'uptime de focus. <b>+Focus</b>, <b>+Reindeer Fetch</b>, <b>+%Capacity</b>.","Puppy"],
        ["Bead Lizard","1 signe","5e slot du Dapper / trade pour pas cher","Tres bon pour l'uptime des tokens, essentiel avec du Bub%. Demande <b>+Token Link</b> (Caustic uniquement). Le <b>+% Bubble pollen</b> (HB) et le <b>+%BAP</b> (HB, Caustic uniquement) sont optionnels.","Basic"],
      ]}},
      { t:'liste', v:[
        "Les couts en signes sont calcules au strict minimum : si tu as des signes en rab, cherche de meilleures stats sur les beequips a forte valeur (par exemple une meilleure capacite sur le Pinecone).",
        "La <b>Tabby V Value List</b> recense toutes les valeurs documentees, en signes.",
      ]},
      { t:'h', v:"Les slots restants" },
      { t:'p', v:"Au total ces <b>12 beequips</b> constituent une Honeymaking Blue standard, ce qui laisse 1 a 3 slots libres, propres a chaque joueur :" },
      { t:'liste', v:[
        "<b>Paperclip</b> \u2014 donne du TL et de l'ATL (assez courant), sur Looker ou n'importe quelle rare / epic disponible. <span style=\"opacity:.65\">[option early-game]</span>",
        "<b>Whistle</b> \u2014 donne du +Haste, sur Cool. <span style=\"opacity:.65\">[option early-game]</span>",
        "<b>1-3 Tree hats</b> \uD83C\uDF84 \u2014 donnent du +Cap et du CRaH, sur les Diamonds. <span style=\"opacity:.65\">[placeholder en attendant mieux]</span>",
        "<b>1-2 Berets</b> \u2014 donnent du +%Blue Field Cap, du +Cap et du +%Cap, sur les Diamonds. <span style=\"opacity:.65\">[option end-game]</span>",
        "<b>Charm Bracelet</b> \u2014 peut donner du +Melody et du +%HaH, sur Diamond. <span style=\"opacity:.65\">[option end-game]</span>",
        "<b>Festive Wreath</b> \uD83C\uDF84 \u2014 demande +2% HaH (extremement rare), sur Festive. <span style=\"opacity:.65\">[option end-game]</span>",
      ]},
      { t:'note', v:"En general, commence avec <b>1 a 3 Tree hats</b>, puis remplace-les par la <b>Festive Wreath + 2 Berets</b>. Ca peut te prendre un bon moment." },
    ]},

    { titre:"1.5 Amulettes", blocs:[
      { t:'h', v:"Legende des stats" },
      { t:'liste', v:[
        "<b>Bleu</b> \u2014 stat la plus importante, requise pour l'amulette.",
        "<b>Vert</b> \u2014 bonne stat, a rechercher.",
        "<b>Orange</b> \u2014 stat de remplissage, buff correct.",
        "<b>Rouge</b> \u2014 nuisible, a eviter totalement.",
        "Toute stat non listee n'a aucune importance.",
      ]},
      { t:'p', v:"Le <b>Blue Hive Amulet Heatmap</b> de @riot003 note chaque stat de 1 a 5 : <b>1</b> = stat optimale, vraiment importante ; <b>2</b> = bonne stat ; <b>3</b> = stat de remplissage, a considerer sans en faire une priorite ; <b>4</b> = aucune raison de la chercher, mauvaise idee si elle remplace mieux ; <b>5</b> = nuisible, a eviter a tout prix ; <b>-</b> = sans importance." },
      { t:'h', v:"Star Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>BP = CR > BAR > CC = Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Blue Pollen (BP)","+70%","Requise"],
        ["Convert Rate (CR)","1.25x","Requise"],
        ["Bee Ability Rate (BAR)","+7%","Bonne"],
        ["Critical Chance (CC)","+7%","Bonne"],
        ["Pollen","+20%","Bonne"],
      ]}},
      { t:'liste', v:[
        "Une <b>5/5 solo Popstar</b> peut etre remplacee par une <b>3/5 double passive</b> (avec CR et BP) ou une <b>4/5 double passive</b> (avec BP ou CR).",
        "Toute solo Popstar en dessous de 5/5 peut toujours etre remplacee par n'importe quelle double passive, meme avec de mauvaises stats.",
        "La seconde passive peut etre <b>Star Shower</b> ou <b>Guiding Star</b> : les deux donnent 1.25x capacite.",
      ]},
      { t:'h', v:"Ant Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>BP = CC = CPower > PMS > WP</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Critical Chance (CC)","+3%","Requise"],
        ["Critical Power (CPower)","+50%","Requise"],
        ["Blue Pollen (BP)","+30%","Requise"],
        ["Player Movespeed (PMS)","+3","Bonne"],
      ]}},
      { t:'liste', v:["Player Movespeed, Pollen et Bee Attack se valent : c'est donc un meilleur BP / CC / CPower qui compte. Meme logique pour White Pollen contre Red Pollen."] },
      { t:'h', v:"Stickbug Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>BP > %BA > BBA > BA ; CR</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Convert Rate","1.25x","Garanti avec le score"],
        ["Blue Pollen (BP)","+30%","Requise"],
        ["Blue Bee Attack (BBA)","+2","Bonne"],
        ["Monster Respawn Time / Bee Attack","-10% / +1","Bonne"],
        ["Blue Bomb Pollen / Bomb Pollen","+30% / +15%","Remplissage"],
      ]}},
      { t:'liste', v:["Le BA peut etre remplace par du MRT quand tu cherches a maintenir le stack avec des tickets."] },
      { t:'h', v:"Moon Amulet \u2014 4/4" },
      { t:'p', v:"Priorite : <b>HPP > BFT >> Ticket Chance ; Cap</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Capacity","+250k","Garanti apres 11 replaces"],
        ["Honey Per Pollen (HPP)","+8%","Requise"],
        ["Bond from Treats (BFT)","+10%","Bonne"],
        ["Ticket Chance","+5%","Remplissage"],
        ["Movement collection","\u2014","A NE PAS JOUER : detruit les fleurs"],
      ]}},
      { t:'liste', v:["Le Ticket Chance est extremement rare et seulement optionnel, pour aider a maintenir le sticker stack en macro. Priorise toujours un meilleur HPP + BFT."] },
      { t:'h', v:"Cog Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>Bub > BP > ATL > BIC = BBA / BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Bubble Pollen (Bub)","+30%","Requise"],
        ["Blue Pollen (BP)","+30%","Requise"],
        ["Ability Token Lifespan (ATL)","+10%","Bonne"],
        ["Instant Blue Conversion (BIC)","+5%","Remplissage"],
        ["Blue Bee Attack / Bee Attack","+2 / +15%","Remplissage"],
      ]}},
      { t:'liste', v:["Si tu n'arrives pas a battre R25 de facon constante, te contenter du <b>Diamond Cog</b> est tout a fait acceptable."] },
      { t:'h', v:"King Beetle Amulet \u2014 4/4" },
      { t:'p', v:"Priorite : <b>CR > BA > Bamb% > n'importe quel autre field%</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Convert Rate","+100%","Garanti"],
        ["Bee Attack (BA)","+1","Bonne"],
        ["Bamboo Field Pollen (Bamb)","+100%","Bonne"],
        ["Blue Flower Field Pollen","\u2014","A NE PAS JOUER"],
      ]}},
      { t:'note', v:"Le <b>Blue Flower Field Pollen</b> desequilibre fortement le fill pendant le Tad sync. La seule exception concerne les comps construites autour d'un gros Blue Flower Pollen% (voir 6.6 BFF Mains vs General Comps)." },
      { t:'liste', v:[
        "Si tu joues le Tad sync, vise <b>75%+ de Bamb</b> : ca vaut le coup de sacrifier un peu de CR pour un meilleur Pollen%.",
        "<b>BA > Bamb%</b> si tu ne joues pas le Tad sync.",
      ]},
      { t:'h', v:"Shell Amulet" },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Goo","+15%","Garanti"],
        ["Stump Field Pollen","+65%","Garanti"],
        ["Pollen","+5%","Requise"],
        ["Convert Amount / White Pollen","+25 / +40%","Remplissage"],
        ["N'importe quel Field Pollen","+30%","Remplissage (3 champs tires)"],
      ]}},
      { t:'liste', v:[
        "La Shell donne surtout des buffs mineurs aux bleus. Le <b>Stump%</b> permet de faire un <i>self-guide blessing boost</i>, et les <b>3 autres field%</b> peuvent aider au RBC.",
        "<i>Self-guide blessing boost</i> : tu utilises ta propre Guiding Star pour la faire tomber sur Stump (en faisant de Stump l'un de tes 5 champs les moins recoltes), puis tu exploites ce 2.5x capacite et pollen. Resultat : des ballons plus gros, donc une taille de ballon plus grande pendant le blessing boost, donc une blessing plus haute.",
      ]},
    ]},

    { titre:"2.1 Reglages du macro", blocs:[
      { t:'h', v:"Revolution ou Natro ?" },
      { t:'liste', v:[
        "Actuellement, <b>Revolution Macro</b> egale les performances de <b>Natro Macro</b> et le surpasse sur plusieurs aspects. Revo propose en plus nativement le Tad Sync, le Vic Hop et le Global Relay.",
        "Ce guide couvre les reglages Natro, mais Revolution se configure de la meme maniere.",
      ]},
      { t:'h', v:"Gather" },
      { t:'tab', v:{ cols:["Reglage","Valeur"], rows:[
        ["Field Rotation","Pine Tree sur les 3 lignes"],
        ["Pattern","Kettle (ligne 1), Skillet (ligne 2), Plate (ligne 3) \u2014 M / Length 1"],
        ["Until","10 min \u00b7 95% pack"],
        ["To Hive By","Walk \u00b7 Rotate Camera Right 4 \u00b7 Gather w/Shift-Lock coche"],
        ["Sprinkler","Upper Left \u00b7 Distance 7"],
      ]}},
      { t:'liste', v:[
        "Le temps de gather doit etre regle entre <b>7 et 10 minutes</b> : teste par toi-meme. Les temps plus courts sont en general reserves aux joueurs avances.",
        "<b>Kettle</b> doit etre ton pattern principal ; utilise <b>plate / skillet</b> si tu drift ou si tu lag. Les patterns se telechargent sur le Natro Discord Server.",
      ]},
      { t:'h', v:"Collect / Kill" },
      { t:'liste', v:[
        "<b>Wealth Clock + Auto blender Blue Extract</b> doivent rester actives en permanence, en dehors du HD.",
        "N'active jamais <b>Mondo</b> sauf si tu peux atteindre une blessing de 5x+.",
        "Le reste des reglages coule de source. Pense a renseigner le Monster Respawn Time si tu joues une Vicious gifted ou du MRT sur la Stick.",
      ]},
      { t:'h', v:"Boost" },
      { t:'liste', v:[
        "Garde les <b>Blue Extracts + Blue Field Booster</b> en permanence, sauf si tu as besoin des Extracts pour l'Hydro ou la Tide. Les Enzymes + Oil + Tropical Drink font l'affaire aussi, mais tu finiras par manquer d'Pineapples, de Sunflower ou de Coconuts.",
        "N'utilise l'<b>Auto Field Boost</b> qu'avec glitter + dice pendant le HD : c'est tres cher.",
        "Ne lance le <b>sticker stack</b> que si tu as 210+ stickers (un stack de 50 minutes) et que tu peux atteindre le LB pour le remboursement en tickets. Sinon, reserve-le au HD.",
      ]},
      { t:'h', v:"Quest" },
      { t:'liste', v:[
        "Faute de detection de blooms sur Natro, tu ne peux plus macro les quetes repetables, a l'exception de la Honey Bee et du Black Bear.",
        "Pour avancer tes quetes en attendant que Natro implemente la Bloom Detection, active les quetes repetables du <b>Black Bear</b> : elles prennent quasiment aucun temps (24/7 de macro donne 720 quetes sur un mois de 30 jours).",
        "Verifie que le <b>gather interrupt</b> est desactive, pour limiter l'impact sur le honeymaking.",
      ]},
      { t:'h', v:"Planters" },
      { t:'note', v:"Le <b>nectar</b> est le moteur du pollen, via tous ses multiplicateurs precieux au HaH, au CR, au BP et aux autres stats essentielles : c'est un buff de 5 a 10x sur l'hourly. Vise toujours a maximiser le nombre de nectars que tu peux maintenir a fond." },
      { t:'liste', v:[
        "Lance <b>Planter+</b> avec le preset <b>Blue</b> (pareil sur Revo). Desactive le Candy et le Plastic planter. N'active <b>Invig</b> que si tu as l'Hydro ou le Petal et que tu macro 22h+.",
        "Pense a desactiver <b>Pine</b> pour eviter que le sirotage de nectar ne vide l'energie de tes abeilles.",
        "Tu peux sinon siroter le nectar sur le Petal Planter en Pine Tree si tu es en setup manuel et que tu as un Polar Power tres eleve (2500+).",
        "Tu peux aussi le reactiver si tu ne macro que moins de 12h et que tu as de mauvais planters (rien au-dessus du Tacky), car tu auras besoin du <b>Comforting</b> supplementaire.",
      ]},
      { t:'h', v:"Status + RDP" },
      { t:'liste', v:[
        "Pour recevoir les <b>rapports horaires</b> de ton macro, ainsi que beaucoup d'infos vitales, il faut configurer un <b>webhook</b> (guide de setup disponible sur le Natro Discord).",
        "Pour macro en arriere-plan ou sur plusieurs comptes en meme temps, il te faut un <b>Remote Desktop Protocol (RDP)</b> (guide disponible sur le Natro Discord).",
      ]},
      { t:'h', v:"Settings" },
      { t:'liste', v:[
        "Les champs encadres en rouge dans l'interface sont <b>propres a chaque joueur</b>.",
        "Regle ton <b>hive slot</b> avant de macro : 1 = le plus proche du canon rouge.",
        "Renseigne le nombre d'abeilles, la Movement Speed et le Sprinkler Type. N'active pas le <b>Drift Comp</b> sans Supreme Saturator.",
        "L'<b>input delay</b> peut etre augmente sur les machines lentes.",
        "Le lien prive se colle ici quand tu rejoins un macro server.",
        "Reconnecte-toi toutes les <b>12 a 24h</b> pour eviter le lag.",
      ]},
    ]},

    { titre:"2.2 Macro Servers", blocs:[
      { t:'p', v:"Macro avec d'autres joueurs buffe fortement ton fill et ton hourly." },
      { t:'etapes', v:[
        { t:"Plus de ballons", d:"Donc une meilleure balloon aura." },
        { t:"Plus de frogs", d:"Donc plus de pops sur la Popstar." },
        { t:"Plus de fuzzy bees", d:"Donc une meilleure pollinisation." },
      ]},
      { t:'h', v:"Comment trouver un bon macro server" },
      { t:'liste', v:[
        "Verifie que le serveur est dans ta <b>region</b> (Asie, Afrique, NA, etc.). Ce n'est pas une obligation stricte, mais ca fera baisser ton hourly.",
        "Verifie que le serveur <b>reset regulierement</b> pour eviter le lag : toutes les 6 a 24h de preference.",
        "Assure-toi qu'il y a <b>4 a 6 ruches bleues actives</b> en macro, avec <b>8 Fuzzies au total</b> repartis sur tous les joueurs pour la pollinisation, et des joueurs a peu pres a ton niveau de progression.",
        "De preference un serveur en DM uniquement, avec toujours les <b>memes joueurs</b> : la coordination est plus simple et les hourlies plus constants.",
        "Pour trouver ces serveurs, rejoins les gros Discord BSS (Natro, BSS officiel, Revolution, etc.) et utilise la barre de <b>recherche</b>.",
      ]},
      { t:'note', v:"Garde en tete qu'avoir des <b>alts</b> plutot qu'un macro server sera bien plus efficace pour le lag, les pops et la pollinisation qu'un lobby rempli de joueurs." },
    ]},

    { titre:"2.3 Hourly Report", blocs:[
      { t:'h', v:"Underfilling contre Overfilling" },
      { t:'tab', v:{ cols:["","Underfilling","Overfilling"], rows:[
        ["Symptome","Les ballons se remplissent a moins de 75% pendant la Popstar.","Les ballons se remplissent completement."],
        ["Consequence","Backpack% faible pendant le gather et lignes plates sur le honey/sec.","Retour premature a la ruche et bosses dans le honey/sec pendant la Popstar."],
        ["Cause probable","Lag, chutes frequentes d'uptime, ou mauvaise configuration du macro.","Des gathers trop courts peuvent convertir ton Hive Balloon avant que les ballons n'atteignent la ruche."],
        ["Correctifs","Amulettes (meilleurs BP, CC, CPower) \u00b7 Beequips (Lip balm, Toy drum, etc.) \u00b7 Macro servers ou Tad alts (Popstars plus grosses). Cote ruche : gifting, 10-12 Tadpoles, retirer des Buoyants au profit de Diamonds. <b>N'ajoute pas Frosty / Shy / Lion / Cobalt.</b>","Blessing (multiplicateur de capacite) \u00b7 Beequips (Sunhat, Headband, Pinecones, etc.). Cote ruche : 7-9 Tadpoles, retirer des abeilles de fill au profit de Diamonds (Cool, Basic, Tabby...), ajouter des Buoyants jusqu'a 16."],
      ]}},
      { t:'note', v:"Overfill ou underfill n'est <b>pas</b> une mauvaise chose, ca fait partie de la progression. L'objectif est d'avoir l'hourly le plus haut possible, pas un fill qui a l'air joli : tu ne peux pas attendre d'une ruche lvl 13 les memes capacites de fill qu'une lvl 17 avec le meme nombre de Buoyants." },
      { t:'liste', v:[
        "L'underfill peut etre une bonne nouvelle : ca indique que tu joues trop de <b>Buoyants</b>, donc que tu peux en retirer pour mettre des Diamonds.",
        "L'overfill aussi : ca indique que tu joues trop d'<b>abeilles de fill</b>, donc que tu peux en retirer pour mettre des Diamonds.",
      ]},
      { t:'h', v:"Gestion du lag" },
      { t:'tab', v:{ cols:["Type","Symptome et detection","Correctifs"], rows:[
        ["PC lag","FPS bas ou instables ; verifie avec <b>F5 + Shift</b>.","1. Baisser les reglages graphiques. 2. Faire tourner moins de RDP."],
        ["Ping lag","Ping eleve et input delay ; verifie avec <b>F3 + Shift</b>.","1. Macro dans ta region. 2. Ajouter de l'input delay."],
        ["Server lag","Freezes occasionnels ; se repere aux chutes du Blue Boost.","1. Reset du serveur ou deconnexions de groupe. Toutes les 6-12h dans un serveur plein."],
      ]}},
      { t:'h', v:"Points a surveiller" },
      { t:'liste', v:[
        "2 chutes ou plus du Blue Boost par heure.",
        "Un mauvais uptime de focus (avec 6+ producteurs).",
        "Des chutes de haste sans Windy.",
        "<b>Important</b> : ces chutes peuvent aussi venir d'un <b>Polar Power</b> trop faible. Assure-toi d'avoir au moins 500 de Polar avant de suspecter du lag.",
      ]},
      { t:'h', v:"Prevention du drift" },
      { t:'p', v:"Le <b>drift</b> est la sur- ou sous-compensation des mouvements de ton macro, qui te fait sortir du champ au fil du temps." },
      { t:'liste', v:[
        "Reduis le lag (voir ci-dessus).",
        "Active le <b>Drift Comp</b> dans les reglages Natro : necessite le Supreme Saturator.",
        "Si ta camera bugue, desactive <b>Gather with Shift Lock</b>, ou essaie d'entrer et sortir du plein ecran.",
        "Utilise <b>Plate / Skillet</b> plutot que Kettle comme pattern.",
        "Utilise un modele de personnage Roblox <b>R6</b>.",
      ]},
      { t:'h', v:"La deflation expliquee" },
      { t:'p', v:"La deflation est le mecanisme par lequel les ballons perdent du pollen au fil du temps. La quantite de pollen perdue par tick depend de la taille de ton ballon par rapport a ton sac." },
      { t:'liste', v:[
        "Si ton ballon contient autant de pollen que la taille de ton sac, tu perds <b>3,33% de ton pollen en 10 minutes</b>. En revanche, si ton ballon est 100x plus gros que ton sac, tu perds <b>99,9% de ton pollen en 10 minutes</b>.",
        "La deflation est donc un probleme plus important pour les joueurs avances qui ont un tres bon fill.",
        "Contrairement a une idee repandue, la deflation est <b>constante</b>, elle ne se declenche pas au-dela d'un certain seuil : tout le monde est concerne.",
      ]},
      { t:'h', v:"Limiter la deflation" },
      { t:'liste', v:[
        "Regle le temps de gather entre 7 et 10 minutes.",
        "Maximise les upgrades de capacite pour augmenter la taille du sac, meme si tu underfill : beequips, abeilles, blessing...",
        "Utilise les Diamonds comme slots de remplissage, pour du HaH supplementaire sans augmenter le fill.",
      ]},
      { t:'h', v:"Perfectionner l'uptime des tokens" },
      { t:'liste', v:[
        "<b>Polar power</b> \u2014 les abeilles dorment moins et produisent plus de tokens. C'est le moteur principal de l'uptime : vise <b>1500+</b>.",
        "<b>Abeilles</b> \u2014 Stubborn, Hasty et Shocked compensent un manque d'uptime. Stubborn est la base de toute ruche mais peut etre remplacee par Hasty (teste la difference). Les deux peuvent tourner en meme temps, mais ce n'est pas recommande : c'est une option en dessous de 500 de Polar. Shocked peut s'ajouter pour compenser un manque de beequips en early-game.",
        "<b>Beequips</b> \u2014 Bead lizard, Toy Drum, Whistle et Paperclip apportent des tokens d'uptime supplementaires (Haste / TL). Le Bead lizard et le Toy Drum se jouent de toute facon ; le Whistle et le Paperclip sont plutot des options early-game a faible Polar.",
        "<b>Amulettes</b> (Ant et Stick), <b>nectar</b> (Motivating) et <b>mutations</b> (BMS / BAR) apportent des buffs supplementaires a l'uptime et a la production de tokens.",
      ]},
      { t:'note', v:"Teste ce qui marche le mieux pour toi et ajuste. Si ton uptime est parfait sur un token precis, c'est peut-etre que tu peux retirer des producteurs de ce token au profit de Tadpoles, Diamonds ou Buoyants \u2014 par exemple lacher Commander pour un Diamond de plus si l'uptime de focus est parfait. En revanche, il est deconseille de retirer toutes les abeilles d'uptime (ni Hasty, ni Stubborn, ni Shocked) sauf si ton uptime est parfait sur tous les tokens. Une exception possible pendant le Honeyday, ou l'uptime se degrade, mais meme la les 15% de PMS de Hasty valent le coup." },
    ]},

    { titre:"3. Progression Blue", blocs:[
      { t:'h', v:"Hypotheses de depart" },
      { t:'liste', v:[
        "Tu travailles en continu a ameliorer tes <b>amulettes</b> et tes <b>beequips</b>.",
        "Tu te fixes des objectifs individuels pour les outils d'endgame : le Petal, l'Hydro, le Heat-treated et les collecteurs de couleur doivent etre obtenus des que possible, sans calendrier strict (plus d'infos sur l'ordre d'achat dans la section 6. Disambiguation).",
        "Tu es assez autonome pour prendre tes propres decisions : teste tout, ne compte pas sur cette progression pour te porter jusqu'au bout du Blue.",
        "Le developpement des alts doit se faire en parallele de la progression de ton main. Les <b>rouges</b> ont besoin de 3-4 alts on-field + des coconut helpers, les <b>blancs</b> de 4 alts on-field + des coconut helpers, les <b>bleus</b> de 2 tad alts + 2 guide alts + 1 attack alt.",
      ]},
      { t:'note', v:"Les comps donnees ici sont une progression <b>generalisee</b> : ne les copie pas au pixel pres sans comprendre ce que chaque abeille et chaque beequip apporte. Teste ce qui marche pour toi et fais evoluer ta ruche selon ce que te dit ton macro \u2014 garder 6 producteurs de focus parce que ton uptime est moins bon, jouer le whistle au lieu du bead lizard parce que tu n'as pas les moyens, mettre plus ou moins de Tadpoles selon ton fill, etc." },
    ]},

    { titre:"3.1 Earlygame Blue [lvl 12-15]", blocs:[
      { t:'h', v:"Objectifs de progression" },
      { t:'etapes', v:[
        { t:"N'importe quelle Popstar", d:"Les stats n'ont aucune importance pour l'instant." },
        { t:"Remplacer les Bubbles", d:"Par des mythiques : 12 Tadpoles + n'importe quels Buoyants." },
        { t:"Popstar 2/5", d:"Avec du Blue pollen et du Convert rate." },
        { t:"50 abeilles", d:"Ne monte pas au-dessus du lvl 12 avant d'y etre." },
        { t:"Monter au lvl 15", d:"Une fois les 50 abeilles atteintes." },
        { t:"Popstar 4/5", d:"Avec BP, CR et BAR / CC / Pollen." },
        { t:"Monter au lvl 16", d:"Fin de cette etape." },
      ]},
      { t:'h', v:"Comps d'Earlygame Blue" },
      { t:'comp', v:[
        { nom:"Post-SSA Blue", ratio:"Ratio : 14 Bubbles / 5 Diamonds" },
        { nom:"Early Blue", ratio:"Ratio : 12 Buoyants / 12 Tadpoles" },
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "Les <b>Bubbles et les Diamonds</b> n'ont pas <i>besoin</i> d'etre gifted, mais ils apportent beaucoup plus de fill et de miel s'ils le sont, surtout les Diamonds avec leur 2x shimmer.",
        "<b>Frosty, Demon et tous les Diamonds ungifted</b> peuvent etre retires une fois tous les placeholders mythiques (les Bubbles) remplaces.",
      ]},
    ]},

    { titre:"3.2 Midgame Blue [lvl 16-17]", blocs:[
      { t:'h', v:"Objectifs de progression" },
      { t:'etapes', v:[
        { t:"Gift 5 Tadpoles", d:"Pour remplacer les Baby bees." },
        { t:"Ameliorer la SSA", d:"Soit une 4/5 avec de bonnes stats, soit une 5/5 avec des stats correctes." },
        { t:"Monter au lvl 17", d:"Une fois la SSA amelioree." },
        { t:"Gift tous les Buoyants", d:"L'ensemble de tes Buoyants." },
        { t:"SSA double passive 3/5", d:"Avec BP et CR." },
        { t:"Monter au lvl 18", d:"Fin de cette etape." },
      ]},
      { t:'h', v:"Comps de Midgame Blue" },
      { t:'comp', v:[
        { nom:"Transition Blue", ratio:"Ratio : 16 Buoyants / 10 Tadpoles / 3 Diamonds" },
        { nom:"Early Diamond Comp", ratio:"Ratio : 15 Buoyants / 10 Tadpoles / 5 Diamonds" },
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "<b>Hasty</b> peut etre conservee si ton uptime est encore faible, a cause d'un Polar Power bas.",
        "Les <b>Diamonds gifted</b> doivent etre mutes avec un petit <b>CA%</b> aux bitterberries. N'en fais pas trop : les grosses mutations CA% s'obtiendront plus tard au RJ. Ici, il s'agit seulement d'ameliorer la conversion des Diamonds a moindre cout.",
        "<b>12 Tads</b> peuvent etre remis si tu es toujours en underfill, sans retirer de Diamonds. Si tu continues a underfill, tu peux retirer quelques Buoyants de plus, mais ce n'est generalement pas recommande.",
      ]},
    ]},

    { titre:"3.3 Lategame Blue [lvl 18-19]", blocs:[
      { t:'h', v:"Objectifs de progression" },
      { t:'etapes', v:[
        { t:"Finir de gift toutes les abeilles", d:"L'integralite de la ruche." },
        { t:"Ameliorer la DP SSA", d:"Soit une 3/5 avec de bonnes stats, soit une 4/5 avec des stats correctes." },
        { t:"Mutations", d:"Musics, Bear, Bubble et Diamonds. Pense a mutate les Musics, la Bubble et les Diamonds au RJ. Les Diamonds devraient deja etre a ~15%+ de CA aux bitterberries : tu peux maintenant monter a 26%+ de CA au RJ et aux blueberries, en surveillant le cout en fruits." },
      ]},
      { t:'h', v:"Comps de Lategame Blue" },
      { t:'comp', v:[
        { nom:"Full Diamond Comp", sous:"Pour ceux qui peuvent maintenir 80x+.", ratio:"Ratio : 14 Buoyants / 8 Tadpoles / 10 Diamonds" },
        { nom:"Semi Diamond Comp", sous:"Pour ceux qui ne peuvent pas maintenir 80x+.", ratio:"Ratio : 15 Buoyants / 10 Tadpoles / 6 Diamonds" },
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "<b>Musics + Diamonds + Bubble</b> se mutent au RJ : vise 27%+ de CA et 4+ de BMS. La <b>Bear</b> se mute aux Bitter Bearies : le BAR est le meilleur, mais le BMS fait l'affaire pour l'instant.",
        "Si tu peux maintenir ta blessing, saute cette partie et passe directement en <b>Blessing Boosting Blue</b>, fais un boost de blessing a 80x+, puis passe en <b>Honeymaking Blue</b>.",
      ]},
    ]},

    { titre:"3.4 Endgame Blue [lvl 20+]", blocs:[
      { t:'note', v:"Cette etape part du principe que tu <b>restes bleu</b>." },
      { t:'liste', v:[
        "Mutations sur toutes les abeilles, avec un gros CA sur les Diamonds.",
        "Progression du nombre de drives de la Digital.",
        "Passage au lvl 21, en montant les Diamonds en premier.",
        "Finalisation des alts, des amulettes, des beequips et des outils.",
        "Si tu as des connaissances en code, ou si tu comptes apprendre a faire ton propre macro ou tes propres fonctionnalites, jette un oeil au document <i>The Perfect Blue Hive Macro Setup</i>.",
      ]},
    ]},

    { titre:"4. Boosting Guidance", blocs:[
      { t:'h', v:"Informations importantes" },
      { t:'liste', v:[
        "Il existe <b>2 grands types de boosts</b> : le <b>Blessing boost</b>, pour obtenir une grosse blessing avec laquelle macro (soit en RBC, soit en boost standard), et le <b>Honey boost</b>, pour faire plus de miel qu'en macro.",
        "En general, tu feras un RBC blessing boost pour atteindre 80x+ au lvl 18, afin de passer en <b>Honeymaking Blue</b>.",
        "Cela dit, les blessing boosts standard sont accessibles a tous et necessaires pour atteindre 50x+ avant le lvl 18.",
      ]},
      { t:'h', v:"4.1 Honey" },
      { t:'note', v:"Tu ne devrais <b>jamais</b> tenter un honey boost si tu n'es pas endgame : c'est un gaspillage total de ressources pour un benefice tres decevant." },
      { t:'liste', v:[
        "Tu n'y gagnes que quelques heures de macro par boost, en echange de beaucoup de ressources precieuses.",
        "C'est pour cela que le boost en bleu est reserve aux joueurs endgame, avec beaucoup de setup. Plus d'informations dans <i>The Definitive Pop Gum Guide</i>.",
      ]},
      { t:'h', v:"4.2 RBC Blessing" },
      { t:'p', v:"Consulte la section correspondante de <i>The Official Blue RBC Guide</i> pour apprendre a faire des RBC Blessing Boosts." },
      { t:'h', v:"4.3 Mini Blessing" },
      { t:'p', v:"Si tu n'arrives pas a maintenir ta blessing, le RBC blessing boosting peut etre un gaspillage de ressources. Tu peux a la place faire un <b>Standard Blessing Boost</b> avant de commencer a macro, pour une blessing de 50-60x. Cela se fait avec un <b>boost Pine Tree en 3-4x</b>, une <b>Purple Potion</b> et un <b>Sticker Stack</b>, en restant sur le champ pendant 15 minutes (utilise des micro converters pour y arriver)." },
      { t:'tab', v:{ cols:["Pour","Contre"], rows:[
        ["Facile a mettre en place et a booster","Blessing plus faible, donc moins efficace"],
        ["Peu couteux","Cout plus eleve sur le long terme"],
        ["Accessible a la plupart des macroers","Loaded dice, Purple potion, Micro converters"],
        ["<b>Rentable si tu peux la maintenir 2-3 jours</b>","<b>Pas rentable si tu perds ta blessing 1 fois ou plus par jour</b>"],
      ]}},
    ]},

    { titre:"5. Construction des alts", blocs:[
      { t:'p', v:"Suis <i>The Complete Alt Account Guide</i> pour plus d'informations." },
    ]},

    { titre:"5.1 Tadpole Alts", blocs:[
      { t:'liste', v:[
        "Les tad alts sont le type d'alt <b>le plus important</b> pour une ruche bleue.",
        "Ils permettent des <b>Popstars bien plus grosses</b> et une meilleure pollinisation.",
        "Ils rendent les macro servers inutiles, donc <b>moins de lag</b>.",
        "Ils permettent le <b>Tadpole Alt Sync</b>, un gros boost de miel sur l'hourly.",
        "Les ruches <b>rouges</b> et <b>blanches</b> s'appuient sur des Fuzzy alts a la place.",
        "<b>Rappel</b> : les Tad Alts fonctionnent en dessous du lvl 20, mais il est vraiment recommande de ne pas passer tes alts en Tad avant le lvl 20, sauf si tu n'as pas le temps de les grind (par exemple un HD qui approche).",
      ]},
      { t:'h', v:"Comps de tad alts" },
      { t:'comp', v:[
        { nom:"Comps pour 2 Tad alts", sous:"Les deux alts partagent la meme structure.",
          ratio:"Ratio : 15 Fuzzies [11+4] / 10 Buoyants [5+5] / 47 Tadpoles [20+27]" },
        { nom:"Comp pour 1 Tad alt", ratio:"Ratio : 13 Fuzzies / 5 Buoyants / 18 Tadpoles" },
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "<b>Shocked</b> doit rester ungifted, sauf si tu as la coco belt.",
        "Si tu n'arrives pas a avoir du BMS ou du BAR sur les mythiques, utilise l'<b>Energy</b> a la place.",
        "La <b>Digital</b> est jouee pour la Map corruption : mets-lui un <b>Blue Drive</b>.",
      ]},
      { t:'h', v:"Changements de beequips" },
      { t:'liste', v:[
        "Le <b>Bead Lizard</b> a besoin de <b>Token Link</b>.",
        "Le <b>Paperclip</b> a besoin de <b>Token Link + Token Lifespan</b>.",
        "Les <b>Antennas</b> ont besoin de <b>Bee Ability Rate</b>.",
        "Utilise des <b>bubble lights</b> pour tous les slots de beequip restants.",
      ]},
      { t:'h', v:"Tadpole Alt Sync" },
      { t:'p', v:"Le <b>Tad sync</b>, c'est ton tad alt qui suit ton main sur n'importe quel champ bleu boost pour y recolter, avec une augmentation constante de 100 a 300% du pollen de champ." },
      { t:'liste', v:[
        "Cela te permet d'activer <b>Gather in Boosted Field</b> tout en gardant la Popstar et la pollinisation identiques a celles du Pine.",
        "Le gain sur le fill et le miel horaire est substantiel.",
        "Garde en tete que <b>Revolution Macro</b> propose le Tad sync nativement.",
      ]},
      { t:'h', v:"Mise en place du Tad sync" },
      { t:'etapes', v:[
        { t:"RDP", d:"Configure des RDP pour tous les comptes." },
        { t:"Installation", d:"Installe Natro Alt Synchronization." },
        { t:"Canal Discord", d:"Cree un nouveau canal dedie au Tad Sync." },
        { t:"Field Following", d:"Dans Natro, va dans Misc puis Field Following." },
        { t:"Channel ID", d:"Renseigne l'identifiant du canal." },
        { t:"Follow Mode", d:"Ton main doit etre en Leader, les alts en Follower." },
        { t:"Max Time", d:"Le Max Time des alts doit etre regle sur 900s." },
      ]},
    ]},

    { titre:"5.2 Guide Alts", blocs:[
      { t:'p', v:"Les Guide Alts font apparaitre des <b>Guiding Stars</b> sur les champs ou ton main recolte." },
      { t:'liste', v:[
        "Cela donne a ton main <b>x1.25 en capacite, convert rate et pollen</b>.",
        "Ils servent aussi au support du main : nuages, parties, cadeaux, etc.",
        "Assure-toi que <b>Pine Tree, Blue Flower et Bamboo</b> soient tes 3 champs les moins recoltes, dans cet ordre, pour que la Guiding Star y tombe plus souvent.",
      ]},
      { t:'tab', v:{ cols:["Rang du champ","Chance d'etre choisi"], rows:[
        ["Champ le moins recolte","33,33%"],
        ["2e champ le moins recolte","26,66%"],
        ["3e champ le moins recolte","20%"],
      ]}},
      { t:'note', v:"Ce n'est possible que si tu passes ton alt en <b>early red</b> : voir le <i>Complete Early Red Progression Guide</i>." },
      { t:'h', v:"Comps de guide alts" },
      { t:'comp', v:[
        { nom:"Standard Guiding Comp", ratio:"40 Boost Producers / 5 Buoyants" },
        { nom:"Mini Guiding Comp", ratio:"30 Boost Producers / 5 Buoyants" },
      ]},
      { t:'h', v:"Diamond bees ou Cool bees ?" },
      { t:'liste', v:[
        "Les Diamonds produisent le boost plus lentement que les Cools, mais elles peuvent te faire atteindre le <b>Honey Gift LB</b>, donc des revenus en star signs.",
        "En revanche, il faut <b>50 abeilles</b> pour atteindre le LB : plus de lag et un guiding plus lent. Les mini-guides sont garanties de ne pas atteindre le LB.",
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "Il est recommande de monter les Buoyants, la Festive, la Windy et la Digital au lvl 15/20.",
        "Les mini-guides a 35/45 abeilles causent moins de lag si tu joues plus d'un guide alt, mais tu n'atteindras pas le Honey Gift LB.",
        "Il est fort probable que tu n'atteignes pas le Honey Gift LB meme en Full Diamond Guide, mais ca vaut le coup d'essayer. Si ca te parait hors de portee, remplace les Diamonds par d'autres Boost Producers.",
        "Les <b>Rage bees</b> sont interchangeables avec les <b>Shocked bees</b> : teste la difference. Ce n'est en general pas benefique, sauf si tu as vraiment besoin de l'uptime de haste.",
        "La <b>Windy</b> sert a envoyer des nuages a ton main, qui buffent 25/50% de pollen et 10/20% d'UIC.",
      ]},
      { t:'h', v:"Producteurs de boost alternatifs" },
      { t:'tab', v:{ cols:["Abeille","Effet"], rows:[
        ["Cool","Production de tokens de boost plus rapide."],
        ["Riley","Tokens legerement plus lents, mais +attack et x1.25 energie."],
        ["Diamond","Plus lente, mais peut te mener au Honey Gift LB."],
        ["Shy","Plus lente que Diamond, mais fait pousser les planters bien plus vite."],
        ["Precise","Production de tokens irreguliere, utilisee pour les hybrides attaque-guide."],
      ]}},
      { t:'h', v:"Changements de beequips" },
      { t:'liste', v:[
        "Le <b>Bead Lizard</b> a besoin de <b>Token Link</b>.",
        "Le <b>Paperclip</b> a besoin de <b>Token Link + Token Lifespan</b>.",
        "Les <b>Antennas</b> ont besoin de <b>Bee Ability Rate</b>.",
        "Utilise des <b>bubble lights</b> pour les slots restants.",
      ]},
      { t:'h', v:"Guide Alt Rotation" },
      { t:'p', v:"Ce n'est pas public, mais la rotation des guide alts se code facilement. Le principe repose sur <b>2 VIP</b> : un pour charger les guides, un pour le macro principal." },
      { t:'liste', v:[
        "Les guide alts macro d'abord dans le <b>VIP de charge</b>, jusqu'a ce que leur Guiding Star soit autour de 240.",
        "Ils passent ensuite dans le <b>VIP principal</b> pour y faire apparaitre leur Guiding Star.",
        "Si leur Guiding Star tombe sur le Pine Tree, ou sur le champ que tu vises, elle y reste 10 minutes.",
        "Sinon, l'alt retourne dans le VIP de charge et le cycle recommence.",
      ]},
      { t:'p', v:"C'est la maniere la plus simple de faire une Guide Alt Rotation, et elle permet a plus de 3 guiding alts de faire spawn des guides tout en laissant beaucoup de places libres dans le serveur principal, ce qui reduit le lag et rend les Guiding Stars plus regulieres. Il existe des methodes plus completes, mais nettement plus difficiles a coder." },
    ]},

    { titre:"5.3 Attack Alts", blocs:[
      { t:'p', v:"Les attack alts sont des comptes specialises dans le fait de tuer le <b>Mondo</b> chaque heure." },
      { t:'liste', v:[
        "Cela donne a ton main une <b>Mondo blessing de x5 a x10</b> : 1.1 a 1.2x de convert rate a la ruche et de capacite, ainsi que 10% de pollen.",
        "Cela permet l'<b>attack alt sync</b> : la ruche d'attaque quitte le serveur entre deux kills de Mondo pour reduire le lag.",
        "<b>Passifs SSA</b> : <b>Scorch + Saw</b> est la norme pour tuer le Mondo le plus vite possible.",
      ]},
      { t:'h', v:"Changements de ruche" },
      { t:'liste', v:[
        "La ruche doit etre au <b>minimum lvl 20</b> pour obtenir une blessing correcte.",
        "La <b>Digital</b> doit avoir beaucoup de drives <b>Red</b> et <b>Glitched</b>. Les Red Drives augmentent les degats personnels de la Digital (priorite basse) ; les Glitched Drives augmentent les degats infliges aux mobs Mind Hacked ainsi que la duree du buff (priorite haute, mais bien plus dur a obtenir).",
      ]},
      { t:'h', v:"Changements de beequips" },
      { t:'liste', v:[
        "Le <b>Bead Lizard</b> a besoin de <b>Token Link</b>.",
        "Le <b>Paperclip</b> a besoin de <b>Token Link + Token Lifespan</b>.",
        "Les <b>Pink shades</b> ont besoin de <b>Super Critical Chance / Power</b>.",
        "Le <b>Whistle</b> a besoin de <b>Melody + Super Critical Power</b>.",
      ]},
      { t:'h', v:"Attack Alt Sync" },
      { t:'p', v:"Peu repandu, mais facile a coder. Le principe ressemble a la Guide Alt Rotation, en beaucoup moins complexe et moins gourmand en ressources." },
      { t:'liste', v:[
        "L'attack alt doit faire tourner son propre Natro Macro, avec un pattern dedie du type <b>smartatk</b> (disponible sur le serveur Natro Macro), dans le Mountain Top Field.",
        "Quand le Mondo Chick est sur le point d'apparaitre, soit entre :57 et :58 de chaque heure, envoie les commandes <b>?set PrivServer « Main Macro VIP »</b> puis <b>?close Roblox</b>.",
        "Attends ensuite l'apparition du Mondo. Tu peux lui faire utiliser des Stingers via <b>?send n</b>, n correspondant a l'emplacement dans la hotbar.",
        "Une fois le Mondo mort, envoie <b>?set PrivServer « Secondary VIP »</b> puis <b>?close Roblox</b>.",
      ]},
      { t:'p', v:"C'est la maniere la plus simple de faire un Attack Alt Sync. Elle permet d'obtenir une Mondo Blessing de x5 a x8, voire plus si tu optimises la ruche, les mutations et la Digital. Il existe des methodes plus completes mais exponentiellement plus dures a coder, et si tu veux du x10 de facon constante, il te faudra plus d'un attack alt, ou un alt assez puissant pour tuer le Mondo Chick en moins de 5 secondes." },
    ]},

    { titre:"6. Disambiguation", blocs:[
      { t:'h', v:"6.1 Tide Popper contre Petal Planter" },
      { t:'tab', v:{ cols:["","Tide Popper","Petal Planter"], rows:[
        ["Avantages","Environ 1.2x de miel horaire si tu arrives a construire une Tide blessing correcte.","Fournisseur de nectar extremement solide, surtout vu son cout, avec un gros boost de miel indirect."],
        ["Inconvenients","Gain de stats decevant pour le prix, surtout si tu n'arrives pas a monter ta blessing correctement.","Inutile si tu arrives deja a maintenir les 5 nectars confortablement."],
      ]}},
      { t:'note', v:"<b>Consensus :</b> achete le Tide Popper en premier si tu peux macro 18h+ et que tu comptes rester bleu apres le lvl 20. Sinon, le Petal d'abord." },
      { t:'h', v:"6.2 Hydroponic Planter" },
      { t:'liste', v:[
        "<b>Avantages :</b> relativement peu cher et nettement plus efficace en nectar que le BCP.",
        "<b>Inconvenients :</b> cout non negligeable en Blue extract et en Caustic, qui peut retarder l'achat de la Dark Scythe si tu vises le rouge.",
      ]},
      { t:'note', v:"<b>Consensus :</b> a acheter des que possible, sauf si tu comptes passer rouge apres le lvl 20." },
      { t:'h', v:"6.3 The Gummy Boots" },
      { t:'liste', v:[
        "<b>Avantages :</b> buff correct au pollen, au BA et au PMS. Se travaille en arriere-plan (glue dispenser) et son cout est deconnecte de celui des autres objets d'endgame.",
        "<b>Inconvenients :</b> tres cher et gadget, avec un benefice decevant sur l'hourly.",
      ]},
      { t:'note', v:"<b>Consensus :</b> ne te detourne pas de tes objectifs pour farmer cet objet. Achete-le quand tu as presque assez de materiaux (glues et glitters)." },
      { t:'h', v:"6.4 Coconut Belt" },
      { t:'liste', v:[
        "<b>Avantages :</b> tres bon buff a la capacite (+25% et +100k), au convert amount et au GBP. Son cout est generalement deconnecte de celui des autres objets.",
        "<b>Inconvenients :</b> difficile d'exploiter le coco combo en macro.",
      ]},
      { t:'note', v:"<b>Consensus :</b> a prendre des que possible, indispensable si tu changes de couleur de ruche." },
      { t:'h', v:"6.5 Changer de couleur de ruche" },
      { t:'liste', v:[
        "Environ <b>1.5qd de miel</b> pour les mythiques gifted. La ruche DOIT etre entierement gifted, avec au moins une bonne 4/5 DP SSA.",
        "<b>1 Fuzzy alt ou plus</b> pour la pollinisation. Le blanc demande 1-2 alts on-field et 3-4 gumdroppers ; le rouge demande 3-4 alts on-field.",
        "<b>Dark Scythe</b> ou <b>Gummyballer + Coconut belt</b> de preference. Les 250 quetes Riley pour la Dark Scythe peuvent se faire apres le switch.",
        "<b>Lvl 20+</b> de preference, mais ce n'est pas une obligation.",
        "Drives de couleur maxes sur la Digi, de preference <b>100+ Glitched drives</b> avant de booster.",
        "Une comprehension de base du boosting, ou au moins l'envie d'apprendre.",
      ]},
      { t:'note', v:"Si tu comptes farmer 100+ glitched drives sur la Digital, envisage de passer d'abord en <b>RBC hive</b>. Documents utiles : <i>Proper RBC Guide</i>, <i>The Definitive White Hive Guide</i>, <i>Proper Red Hive Guide</i>." },
      { t:'h', v:"6.6 BFF Mains contre General Comps" },
      { t:'p', v:"En endgame, en tant que Honeymaking Blue, tu peux choisir de main la recolte au Blue Flower Field, ou de rester sur une comp generaliste." },
      { t:'note', v:"Pour main le Blue Flower, tu es quasiment oblige de jouer le <b>Glitter Extend</b>. Main la BFF sans Glitter Extend donnera un hourly bien pire." },
      { t:'tab', v:{ cols:["","Blue Flower Field Mains","General Comps"], rows:[
        ["Avantages","Rapporte probablement plus de miel sur la duree. Moins dependant des tokens comme le Focus et la Melody, donc moins besoin de Token Links et d'%ATL : plus de slots pour les Diamond Bees et les beequips de convert.","Pas dependant du RNG. Certains buffs importants sont plus faciles a maintenir (Tide Blessing, Reindeer Blessing). Hourly constant quel que soit le champ (Bluf, Bamb, Pine). Pas dependant de l'usage du Glitter."],
        ["Inconvenients","Ton hourly depend a 100% du RNG du BFB : pas de Bluf Field Boost = mauvais hourly. Les buffs importants sont plus durs a maintenir. Plus dependant des buffs de White Field Capacity (Autumn Sunhat, Exhausted Bee). Dependance totale au Glitter Extend, qu'on attend de toi en continu. Gros engagement : il faut du +%Blue Flower Field Pollen sur la KB, et la KB est difficile a remplacer.","L'uptime des tokens devient une priorite tres haute, donc moins de slots pour les Diamond Bees et les beequips de convert. Tu es quasiment force de renoncer au +%Blue Flower Field Pollen sur la KB, pour eviter les instafills. Rapporte probablement moins de miel sur la duree."],
      ]}},
    ]},

    { titre:"Credits", blocs:[
      { t:'p', v:"Ce guide est l'adaptation francaise de <b>The Definitive Blue Hive Guide</b>, ecrit par <b>riot003</b> et <b>anthrox0</b>, publie par l'<b>Abyssal Trench Network</b>. Derniere mise a jour du document source : 26 mars 2026." },
      { t:'liste', v:[
        "Redaction originale : <b>riot003</b> et <b>anthrox0</b>.",
        "Blue Hive Amulet Heatmap : <b>@riot003</b>.",
        "Spreadsheets, outils et guides de reference : <b>Abyssal Trench Network</b>.",
        "Valeurs des signes : <b>Tabby V Value List</b>. Stats des beequips : <b>Beequip Spreadsheet</b>.",
      ]},
    ]},

  ],
  "White": [

    { titre:"1.1 Composition de la ruche", blocs:[
      { t:'comp', v:[
        { nom:"Standard White Hive Comp", sous:"La composition de référence pour une ruche blanche.",
          ratio:"Ratio : 18-19 Vector / 7 Precise" },
      ]},
      { t:'h', v:"Hive adjustments \u2014 changements possibles" },
      { t:'liste', v:[
        "<b>8 Precise</b> si les 7 autres n'ont pas de mutations <b>BMS</b>, si tu manques d'experience, ou simplement par preference. Garde toujours <b>3x Prec marks</b> (dont ~2 dans un coin pour faire grossir le baller) et <b>10x Precision</b>.",
        "<b>Tadpoles</b> peuvent remplacer 1-2 <b>Babys</b> si tu joues des Poinsettias (comps 15 slots). Les Babies produisent du Baby Love plus vite que les Tadpoles. Il faut <b>5 producteurs de baby love</b> au total, certains n'en jouent que 4 s'ils savent abuser des Duped Tokens pour prolonger le baby love (deconseille aux debutants).",
        "<b>Photon</b> peut etre retire pour un Vector / Precise de plus, mais ce n'est pas recommande : tu perds une source de Haste, un type colorless unique et un porteur de Paper Angel.",
        "<b>Bomber ou Shy</b> facilitent les Blooms (compatible avec Photon). L'un ou l'autre devient un porteur de Paper Angel supplementaire pour le Token Link. Bomber donne un acces plus simple au Rare Bee Leaderboard et un bon buff Honey From Token ; le buff 5% BAP de Shy s'applique aussi en dehors de la Gummy Star, ce qui le rend legerement plus fort. C'est plutot une option d'endgame.",
      ]},
      { t:'note', v:"<b>Ne joue jamais Ninja</b>, quelle que soit la raison. Un colorless gifted est presque toujours meilleur." },
      { t:'h', v:"Quick notes" },
      { t:'liste', v:[
        "Vise <b>+5 BMS</b> sur toutes les Legendary, Epic et Rare (via Royal Jelly).",
        "<b>BAR + BMS</b> sont interchangeables sur les <b>Precise</b> \u2014 BMS reste globalement meilleur.",
        "En revanche, <b>BMS est nettement meilleur que BAR</b> sur les <b>Vector</b>.",
      ]},
    ]},

    { titre:"1.2 Beequips", blocs:[
      { t:'p', v:"Les beequips sont l'un des elements les plus importants d'une bonne ruche : ils apportent des buffs inegales au fill, a la production de tokens, a la capacite et au boost en general." },
      { t:'liste', v:[
        "Seulement <b>13 slots</b> sont disponibles, donc chaque slot doit apporter quelque chose de reel. <b>14 et 15 slots</b> sont possibles si tu as termine la quete Beesmas 2020 de Bee Bear.",
        "Les comps sont donnees avec <b>15 beequips</b>, en precisant lesquels retirer si tu n'as que 13 slots.",
        "<b>NE SWITCHE PAS</b> tant que tu n'es pas certain de pouvoir t'offrir la majorite des beequips de cette liste.",
        "A cause de l'inflation des signes, les prix bougent vite : refere-toi a <b>Tabby V</b> pour la valeur des signes. Les stats detaillees sont dans le <b>Beequip Spreadsheet</b> \u2014 attention, le <i>weight</i> n'est pas la meme chose que la CHANCE.",
      ]},
      { t:'h', v:"Beequips recommandes" },
      { t:'tab', v:{ cols:["Beequip","Cout approx.","Stats a viser","A poser sur"], rows:[
        ["2 Smiley Stickers","20-40 signes","Tres important en White : plus de marks = plus de pollen via Triangulate. <b>Doit avoir +Honey mark</b> ; le +%mark duration (HB) est optionnel si tu as les signes.","Honey + Stubborn ; sinon n'importe quel Vector / Precise avec le meilleur BMS et le meilleur niveau, ou Basic si tu joues les Shades sur Honey"],
        ["2 Toy Drums \uD83C\uDF84","6-18 signes","Excellente source de Haste + BAP. Minimum <b>+2% BAP</b> (HB), de preference +4%.","Demo + Brave"],
        ["Sweatband","7-18 signes","Buff inestimable au White Gather Amount, buffe fortement les Smiley Tokens. Doit avoir <b>+26% WGA</b> ; le +%WP est optionnel. 28%+ recommande.","Digital"],
        ["Whistle","4-5 signes","Bon boost au SCP et a l'uptime Haste. Minimum <b>+3% SCP</b> (HB). Le +Melody est inutile si tu as deja 5 producteurs.","Commander"],
        ["Toy Horn \uD83C\uDF84","9-11 signes","Requis pour l'uptime Melody + BAP. Vise au moins <b>+2% BAP</b>.","Lion"],
        ["Paper Angel \uD83C\uDF84","12 signes","Parfait pour aligner les Smileys (ATL) et comme source de Token Link. Devrait avoir <b>+1% ATL</b> et <b>+2% BAP</b> ; tu peux viser plus haut mais le cout grimpe tres vite.","Photon"],
        ["Kazoo","4 signes","Bien pour la Melody et pour buffer SCP / CPower. Vise au moins <b>+1% SCP</b> et <b>4-5%+ CPower</b>.","Shocked"],
        ["2 Paperclips","4-6 signes","Bon pour l'uptime des tokens (ATL + TL) et le BAP. Optionnel mais tres confortable. Cherche <b>+4% ATL</b>, n'importe quel +%BAP fait l'affaire.","Looker + Hasty"],
        ["Pink Shades","20-21 signes","Bon boost SCP + SCC ; peut aider a atteindre le Common LB s'il a un bon stat vert SCC (optionnel). Vise <b>+3% SCP</b> et n'importe quel <b>+1% SCC</b>.","Basic, ou Honey si tu joues le Smiley sur Basic"],
      ]}},
      { t:'h', v:"Beequips optionnels" },
      { t:'liste', v:[
        "<b>Reindeer Antlers</b> \u2014 doit avoir Baby Love pour valoir le coup (extremement cher), sur Puppy. En general il vaut mieux depenser ses signes ailleurs.",
        "<b>Charm Bracelet</b> \u2014 bon pour l'uptime Melody, donne un peu de %Mark Duration et %Ability Rate a la Carpenter Bee. Assez mediocre, souvent surclasse par un 2e Paper Angel ou de 2es Peppermint Antennas.",
        "<b>Peppermint Antennas</b> \u2014 peuvent donner du BAR pour enchainer les 'White Boost', sur Windy. Peuvent aussi donner du BAR en HB : pas cher et correct en attendant mieux. Jouables sur Bear Bee pour un peu plus de Bear Morphs, mais le gain est minime : Windy reste recommande.",
        "<b>Bead Lizard</b> \u2014 un Paperclip au rabais, a jouer uniquement s'il a du BAP en HB, sur n'importe quelle rare bee.",
        "<b>Candy Ring</b> \u2014 seulement avec HFT et 3%+ Honey per goo, sur Gummy. Extremement rare et cher : ca ne vaut pas la peine de le chercher.",
        "<b>Poinsettias</b> \u2014 demandent un gros BGP en HB (ca buffe Digi), sur Windy / Tadpoles. Si tu les joues, remplace les Baby Bees par des Tads.",
        "<b>Beesmas Tops</b> \u2014 dernier recours si tu n'as aucun beequip : vise <b>8%+ CPower</b>.",
      ]},
    ]},

    { titre:"1.3 Amulettes", blocs:[
      { t:'h', v:"Legende des stats" },
      { t:'liste', v:[
        "<b>Bleu</b> \u2014 stat la plus importante, requise pour l'amulette.",
        "<b>Vert</b> \u2014 bonne stat, a rechercher.",
        "<b>Orange</b> \u2014 stat de remplissage, utile ailleurs dans le jeu.",
        "<b>Rouge</b> \u2014 nuisible, a eviter totalement.",
        "Toute stat non listee n'a aucune importance : la jouer ou non ne change rien.",
      ]},
      { t:'h', v:"Star Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>WP = Pollen > BGP = CC > BAR</b>. Passif : <b>Gummy Star + Star Saw</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["White Pollen","+70%","Requise"],
        ["Pollen","+20%","Requise"],
        ["Bee Gather Pollen","+70%","Requise"],
        ["Critical Chance","+7%","Requise"],
        ["Bee Ability Rate","+7%","Bonne"],
      ]}},
      { t:'note', v:"Si tu transitionnes vers le White, une <b>Star Amulet 5/5 DP SSA</b> est une exigence stricte." },
      { t:'h', v:"Ant Amulet \u2014 4/4" },
      { t:'p', v:"Priorite : <b>WP = CPower > PMS / CC / Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["White Pollen","+30%","Requise"],
        ["Critical Power","+50%","Requise"],
        ["Critical Chance","+3%","Bonne"],
        ["Player Movespeed","+3","Bonne"],
        ["Red Pollen","+30%","Remplissage"],
      ]}},
      { t:'liste', v:[
        "Pollen / PMS / CC sont interchangeables, CC et PMS etant legerement plus efficaces.",
        "Le Pollen sert parfois de remplacement au CC quand on abuse des Precise Marks pour atteindre 100% de crit chance sur Triangulate \u2014 l'inconvenient etant que les Smileys de Digi perdent ce CC.",
      ]},
      { t:'h', v:"Stickbug Amulet \u2014 4/4" },
      { t:'p', v:"Priorite : <b>HFT > WP > RBA > BA / MRT</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["White Pollen","+30%","Requise"],
        ["Honey from tokens","+100%","Requise"],
        ["Red Bee Attack","+2","Bonne"],
        ["Bee Attack / Monster Respawn Time","+1 / -10%","Bonne"],
      ]}},
      { t:'liste', v:["Le MRT peut aider a faire de meilleurs snail runs et bugruns."] },
      { t:'h', v:"Moon Amulet \u2014 2/2" },
      { t:'p', v:"Priorite : <b>WP > BGP / Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Capacity","+250k","Garanti apres 11 replaces"],
        ["White Pollen","+50%","Requise"],
        ["Bee Gather Pollen / Pollen","+25% / +5%","Requise"],
        ["Movement collection","\u2014","A NE PAS JOUER : detruit les fleurs"],
      ]}},
      { t:'liste', v:["Pollen contre BGP n'a pas ete teste a fond : le Pollen est meilleur pour la collecte globale, le BGP est meilleur pour les lineups de Smiley Token."] },
      { t:'h', v:"Cog Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>MAP = HFT > WP > WIC = BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["White Pollen","+30%","Requise"],
        ["Mark Ability Pollen","+20%","Requise"],
        ["Honey From Tokens","+75%","Requise"],
        ["Instant White Conversion","+5%","Bonne"],
        ["Bee Attack / Red Bee Attack","+15% / +2","Bonne"],
      ]}},
      { t:'liste', v:["Le Bee Attack% est meilleur que du +RBA ou du +CBA."] },
      { t:'h', v:"Shell Amulet \u2014 5/5" },
      { t:'p', v:"Priorite : <b>Goo Conv > HFT > Spider% = Dandelion%</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Goo","+15%","Garanti"],
        ["Goo Conversion","+10%","Requise"],
        ["Honey From Tokens","+50%","Requise"],
        ["Spider Field Pollen","+30%","Requise"],
        ["Dandelion Field Pollen","+30%","Bonne"],
      ]}},
      { t:'liste', v:["Dandelion% ou Spider% depend de ta preference de boost : en White on boost surtout sur Spider."] },
      { t:'h', v:"King Beetle Amulet \u2014 1/1" },
      { t:'p', v:"Priorite : <b>BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Niveau"], rows:[
        ["Bee Attack","+1","Requise"],
        ["Bamboo Field Pollen","+100%","Remplissage"],
        ["Blueflower Field Pollen","+100%","Remplissage"],
      ]}},
      { t:'liste', v:["Le pollen de champ ne compte que pour le RBC."] },
    ]},

    { titre:"2.1 Transition", blocs:[
      { t:'h', v:"Prerequis" },
      { t:'liste', v:[
        "<b>Gummyballer</b> + <b>Coconut belt</b>.",
        "Des amulettes correctes pour switcher (Cog, Stick, etc.).",
        "<b>500 white drives</b> / <b>300+ glitched drives</b>.",
        "<b>2qd+</b> (avec une 5/5 DP SSA et une ruche gifted non mutee) \u2014 <b>20qd+</b> si tu comptes roll des mutations mythiques au Royal Jelly.",
        "Au moins <b>2 alts</b> et <b>2-3 gumdroppers</b> : 2 Fuzzy-guiding, ou 1 Fuzzy + 1 Guiding. Les gumdroppers peuvent etre d'autres joueurs, mais ce n'est pas vraiment recommande.",
      ]},
      { t:'h', v:"A savoir" },
      { t:'liste', v:[
        "Pour obtenir les drives necessaires sur Digi, il est fortement recommande de passer en comp <b>red</b> ou <b>RBC</b> avant de switcher en white.",
        "Pense a avoir la <b>Dark Scythe</b> pour le confort en dehors des boosts.",
      ]},
    ]},

    { titre:"2.2 Preparation du boost", blocs:[
      { t:'h', v:"Preparation des materiaux" },
      { t:'tab', v:{ cols:["Quantite","Materiel","Notes / Usage"], rows:[
        ["2","Glitter","1. En debut de boost, avant d'utiliser les Loaded Dice. 2. Apres ~14m45s, pour prolonger le field boost x4."],
        ["4","Loaded Dice","Field boost x4 garanti."],
        ["2","Super Smoothie","Un stat stick, mais consommable."],
        ["120-160","(a confirmer)","120 pour 30 minutes, 160 pour 40 minutes."],
        ["900-1.2k","Gumdrops","1 200 sur le main + les alts on-field, pour 40 minutes."],
        ["40-60","Jelly Beans","60 sur le main + les alts on-field, pour 40 minutes. Compte <b>1 Jelly Bean par Gummy Star</b> si tu enchaines plusieurs boosts."],
        ["180-240","Coconuts","Alimente le Coconut Combo, qui fournit du haste."],
        ["10","(a confirmer)","10 sur le main + les alts on-field."],
        ["1","(a confirmer)","Optionnel, a utiliser pendant les tres bons lineups."],
      ]}},
      { t:'h', v:"Preparation des buffs" },
      { t:'tab', v:{ cols:["Buff","Quantite","Notes / Usage"], rows:[
        ["Wealth Clock","x5","x1.05 Honey Per Pollen."],
        ["Nectars","20h+","Au minimum Satisfying et Motivating au maximum."],
        ["Puffshroom Blessing","x100","Apporte UIC, HFT, Pollen et Capacity."],
        ["Mondo Blessing","\u2014","Surtout pour les 10% de pollen, mais donne aussi de la capacite."],
        ["Festive Nymph","x250","Capacity, Bee Attack, HPP et Instant Bee Gather Convert."],
        ["Robo Party Blessing","x100","Capacity, Crit Power, Red Pollen, White Pollen (et Blue Pollen)."],
        ["Honey Wreath","\u2014","Bonus Honey Bee."],
        ["Onett's Lid Art","\u2014","Des abeilles supplementaires."],
        ["Gummy Cannon","\u2014","3 Gummy Bees = beaucoup de Gummy Tokens, ce qui declenche le Gummy Morph tres frequemment."],
      ]}},
    ]},

    { titre:"2.3 Technique", blocs:[
      { t:'note', v:"<b>Avertissement :</b> tes premiers boosts seront mauvais. Meme en ayant tout fait correctement (lvl 20+, drives, ruche entierement gifted...), tu peux ne faire que ~50T sur ton premier boost. Ne te decourage pas, reste en white, ca va s'ameliorer. Les informations ci-dessous aident pour les premiers boosts, mais la pratique t'apprendra bien plus que n'importe quel guide ou video." },
      { t:'h', v:"Precise Bee" },
      { t:'p', v:"C'est de loin la partie la plus importante du White." },
      { t:'liste', v:[
        "Maintiens <b>10x precision</b> et <b>3x precise marks</b> pour le SCC et le CC.",
        "Garde au moins <b>2 precise marks cote a cote</b>.",
        "Il est recommande de jouer <b>8 Precise</b> au debut, le temps de t'habituer au white.",
      ]},
      { t:'h', v:"Gummyballer" },
      { t:'p', v:"Les choses a surveiller en permanence :" },
      { t:'liste', v:[
        "L'emplacement des precise marks, c'est-a-dire ou tu veux lancer la balle.",
        "La progression de la balle, donc sa taille.",
        "L'alignement des formations : Gummy, bear morphs, Gummy star, etc.",
        "Une fois maitrisee, la conversion elevee du goo reduit fortement les problemes de remplissage de sac.",
        "Pense au <b>Rebind Alignment Key</b> (rebind sur les boutons lateraux pour mieux lancer) et aux <b>Hotbar Extensions</b> (confort de gestion du clavier).",
      ]},
      { t:'h', v:"Corruption" },
      { t:'p', v:"Toute la logique des lineups tourne autour de la gestion des Smiley tokens." },
      { t:'liste', v:[
        "Utilise <b>Stubborn + Paperclips</b> pour retarder la collecte des Smiley tokens.",
        "Essaie de faire coincider le Smiley avec la <b>Gummy star</b> et un <b>Gummy Baller</b> deja gros.",
        "Retarder la collecte permet aussi d'empiler des Triangulate dupliques.",
      ]},
      { t:'h', v:"Coconut Combo" },
      { t:'liste', v:[
        "Jusqu'a <b>50% pollen / WP / HFT</b>, <b>75% UIC</b> et <b>1.5x pollen</b> a 100x combo.",
        "Pas trop difficile a maintenir une fois habitue, mais la vitesse augmente avec les catches : viser un combo tres haut peut etre irrealiste.",
        "Si tous tes catchers ont une Coco belt, tu peux laisser tomber le combo entre deux Gummy stars \u2014 cela demande de bien timer la pity star.",
        "Emplacements des catchers (pour 1 catcher) : <b>Spider = Straw catcher</b>, <b>Dandelion = Clover catcher</b>, <b>Coconut = Pepper catcher</b>. Avec 2 catchers, places-en 1 dans le champ ou tu boostes.",
      ]},
      { t:'h', v:"Bonus : les Winds" },
      { t:'liste', v:[
        "Ils donnent du pollen specifique au champ et des stats IC% qui buffent fortement le white.",
        "Selon la chance, ils peuvent determiner le champ dans lequel tu vas booster.",
        "Pense a ramasser tous les winds pour du WP% supplementaire.",
      ]},
      { t:'h', v:"Donations optimales" },
      { t:'etapes', v:[
        { t:"Gifted Mythic Egg", d:"A garder pour les boosts HD sauf si tu en as beaucoup. On les obtient via des 'GME Boosts' : tu remplaces quelques abeilles de ta ruche par des rare bees pour entrer sans difficulte dans le Rare Bee leaderboard." },
        { t:"Turpentine", d:"Donne de gros winds, mais coute cher." },
        { t:"Swirled", d:"Tres bonne source de Spider Winds." },
      ]},
      { t:'h', v:"Comment progresser" },
      { t:'liste', v:[
        "<b>Pratique</b> \u2014 enregistre tes boosts pour les revoir et reperer tes erreurs : precise drops, mauvais lancers, mauvais timing, combos perdus. Tu peux aussi demander a d'autres joueurs de les relire.",
        "<b>Regarder les autres booster</b> \u2014 FragileSilence, Smarti66 et WR boost sont de bonnes references pour comprendre le white.",
      ]},
    ]},

    { titre:"2.4 Analyse des champs", blocs:[
      { t:'comp', v:[
        { nom:"Spider Field", notes:[
          "<b>Pour :</b> 100% de fleurs blanches.",
          "<b>Pour :</b> petit champ, avec une bonne forme.",
          "<b>Contre :</b> les baby bees n'aiment pas ce champ (bug).",
          "<b>Contre :</b> un seul type de Bloom utile y apparait (White).",
          "<b>Contre :</b> difficile d'y construire un bon stack de White Petals.",
        ]},
        { nom:"Coconut Field", notes:[
          "<b>Pour :</b> de bons blooms, avec beaucoup de gris et de blanc, et une chance de violet, pink et periwinkle.",
          "<b>Pour :</b> les baby bees aiment ce champ (bug).",
          "<b>Pour :</b> petit champ.",
          "<b>Contre :</b> tu peux tout simplement tomber du champ.",
          "<b>Contre :</b> mauvaise visibilite.",
          "<b>Contre :</b> il faut tuer le crab sur tous les comptes, donc dedier des slots aux degats.",
          "<b>Contre :</b> tres dependant des blooms.",
        ]},
        { nom:"Dandelion Field", notes:[
          "<b>Pour :</b> les grey blooms y sont tres frequents.",
          "<b>Pour :</b> 2 duped slots de plus que Spider.",
          "<b>Pour :</b> le combo est plus facile a construire.",
          "<b>Contre :</b> un grand champ peut poser probleme.",
          "<b>Contre :</b> tres dependant des blooms.",
        ]},
      ]},
      { t:'note', v:"<b>Consensus :</b> boost principalement sur Spider. Les autres champs peuvent valoir le coup si tu n'obtiens pas de Spider winds, ou selon ta Shell Amulet. Au final, ca reste une preference personnelle." },
    ]},

    { titre:"3. Construction des alts", blocs:[
      { t:'p', v:"Les comptes alts jouent un role enorme dans la quantite de miel que tu fais. Ne les neglige pas, sinon tu ne gagneras presque rien." },
      { t:'h', v:"Les 4 mecaniques utilisees" },
      { t:'liste', v:[
        "<b>Flower Pollination</b>",
        "<b>Balloon Aura</b>",
        "<b>Guiding Star</b>",
        "<b>Autres supports</b> \u2014 Gummy Bee, Gummy Mask et Gummy Boots donnent du goo ; Festive Bee fournit les festive gifts et la Festive Wreath ; Digital Bee sert a la Map Corruption ; Inspire Coconuts et les Coconuts lancent les Coconut Combos.",
      ]},
      { t:'note', v:"Si tu joues <b>2 alts ou plus</b>, ils doivent avoir un pattern dedie, stable, qui ne s'eloigne pas trop de leur spot de gumdropping : il est vraiment important que le champ soit plein de goo en permanence pendant le boost." },
      { t:'h', v:"A savoir" },
      { t:'liste', v:[
        "<b>Precise, Rage et Vicious Bees</b> sont presentes dans chaque comp pour tuer la Wild Windy Bee, ce qui permet de preparer toutes les fioles sur un seul windy : c'est critique pour enchainer les boosts (HD).",
        "Les <b>mutations</b> doivent etre emulees du mieux possible : les producteurs de boost ont besoin de <b>BMS</b> pour des spawns de guide plus rapides, Vicious a besoin d'<b>Attack%</b> pour tuer Windy confortablement, et si tu n'arrives pas a mutate correctement les mythiques (BAR / BMS), l'<b>Energy%</b> fait un placeholder correct. Le reste des mutations coule de source.",
        "Le <b>Petal planter</b> est obligatoire pour maintenir Spider / Coconut / Dandelion parmi les 3 champs les moins recoltes, pour tous les guiding alts on-field (Fuzzy Guiding, Hybrid alts).",
        "Il est fortement recommande de monter tes alts au <b>lvl 20</b> ; le <b>lvl 15</b> reste correct a court terme.",
        "Comme ligne de conduite generale, commence par des alts standard puis passe aux composite alts (1 Fuzzy + 1 Guiding donne 2 Fuzzy-guiding). Evidemment, chaque alt existe pour une raison et cette regle ne vaut pas pour tout le monde : tu peux tres bien garder un solo guiding alt comme coco catcher, ou un solo fuzzy pour des RBC plus faciles.",
      ]},
    ]},

    { titre:"3.1 Guiding Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Combo-Guide Alt", sous:"Sert de Coconut Catcher off-field permanent.",
          ratio:"Ratio : 0 Fuzzy Bees / 0 Buoyant Bees / 39 Boost Producers",
          notes:[
            "Cette comp precise joue <b>Guiding Star + Star Shower</b>, ce qui permet d'abuser d'Inspire Coconuts pour lancer des Coco Combos a un rythme delirant.",
            "N'oublie pas que c'est aussi un coconut catcher off-field : les emplacements sont dans la section 2.3 Technique.",
          ]},
      ]},
      { t:'h', v:"Utilite : Guiding Star" },
      { t:'liste', v:[
        "Elle donne aux autres joueurs un bonus <b>x1.25 pollen et capacite</b> sur les champs ou elle est invoquee.",
        "Les alts utilisent ce passif d'amulette, associe a des abeilles boost-producers, pour tenter de faire apparaitre cette etoile dans le champ ou tu boostes.",
        "Plusieurs alts avec des cooldowns desynchronises permettent de spammer les guides.",
        "Cela permet aussi de repartir les Fuzzies sur plusieurs comptes, ce qui est moins bon pour le RBC.",
      ]},
    ]},

    { titre:"3.2 Balloon Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Buoyant Alt", sous:"Sert de balloon spammer pour remplacer d'autres alts.",
          ratio:"Ratio : 0 Fuzzy Bees / 36 Buoyant Bees",
          notes:[
            "Cette comp complete les comps multi-alts qui n'ont pas de Buoyants.",
            "Les Gifting Buoyants peuvent servir a declencher 'Surprise Party', mais c'est tres inconstant et rarement rentable vu le cout et le lag ajoute. Ils sont aussi remplis instantanement, donc leur production de tokens est negligeable.",
            "En regle generale, les Guide-Buo alts font mieux pour le miel : garde cette comp comme solution temporaire pour les ballons.",
          ]},
      ]},
      { t:'h', v:"Utilite : Balloon Aura" },
      { t:'liste', v:[
        "Rester sous les ballons donne un buff d'aura allant jusqu'a <b>x1.2 pollen</b> et <b>+20% Honey From Tokens</b> sur les ballons lances par les alts.",
        "Maintenir le maximum de stacks est difficile, mais environ <b>80 Buoyant Bees</b> repartis sur plusieurs alts on-field suffisent la plupart du temps. <b>~45</b> est le montant recommande pour maximiser les benefices.",
        "Garde en tete qu'ajouter 80 abeilles de plus sur le champ coute tres cher en lag.",
      ]},
    ]},

    { titre:"3.3 Fuzzy Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Fuzzy Alt", sous:"Priorise la pollinisation plutot que la fabrication de guiding alts.",
          ratio:"Ratio : 24 Fuzzy Bees / 0 Buoyant Bees / 15 Boost Producers",
          notes:[
            "Tous les Fuzzy alts doivent jouer <b>Scorch + Guiding</b> ou <b>Shower + Guiding</b>.",
            "Toutes les abeilles sont gifted pour 'Inspire Coconuts', afin de lancer le Coconut Combo si l'alt a une Coconut belt.",
            "Ce Solo Fuzzy Alt ne devrait servir que si tu n'as pas beaucoup d'alts, ou si tu veux centraliser les Fuzzies pour le RBC. En boost, le Fuzzy-guiding fait presque toujours mieux.",
          ]},
      ]},
      { t:'h', v:"Utilite : Flower Pollination" },
      { t:'liste', v:[
        "Permet de faire monter les tiers inferieurs jusqu'a des fleurs <b>tier 5 etoiles</b> grace aux Fuzzy Bees gifted.",
        "Il faut environ <b>24 Fuzzy Bees</b> pour polliniser entierement Spider, Coconut ou Dandelion \u2014 ce nombre varie selon le pattern et le lag.",
      ]},
    ]},

    { titre:"3.4 Composite Alts", blocs:[
      { t:'comp', v:[
        { nom:"2 Guide-Fuzzy Alts", sous:"Duo pensé pour une pollinisation complete avec des spawns de guide frequents.",
          ratio:"12 Fuzzy (24 au total) / 0 Buoyant / 27 Boost Producers",
          notes:[
            "La production d'Inspire est coupee ici, mais peut etre reactivee pour le Coco Combo.",
            "Cette comp n'utilise pas de Buoyants : il est recommande de jouer plutot 1 Fuzzy + 2 Guide-Buo, 2 Guide-Fuzzy + 2 Buo-Guide, ou 3-4 Hybrid Alts.",
          ]},
        { nom:"2 Guide-Buo Alts", sous:"A utiliser avec 1 fuzzy ou 2 hybrid alts.",
          ratio:"0 Fuzzy / 22 Buoyant (44 au total) / 17 Boost Producers",
          notes:[
            "Cette comp repose sur la pollinisation faite par les autres alts, elle peut donc se concentrer uniquement sur les ballons tout en faisant spawn des guiding stars frequemment.",
            "Une troisieme peut etre ajoutee pour une meilleure Balloon Aura.",
          ]},
        { nom:"3 Hybrid Alts", sous:"Laisse la place pour 1 alt supplementaire de ton choix.",
          ratio:"8 Fuzzy (24 au total) / 18 Buoyant (54 au total) / 13 Boost Producers",
          notes:[
            "Bonne comp si tu joues 3 clone alts. Avoir les abeilles aussi decentralisees peut etre penible pour des choses comme le RBC, mais ca boost tres bien.",
            "Balloon et Boost Producers sont interchangeables.",
          ]},
        { nom:"4 Hybrid Alts", sous:"Engagement total sur la repartition des abeilles.",
          ratio:"6 Fuzzy (24 au total) / 20 Buoyant (80 au total) / 13 Boost Producers",
          notes:[
            "Plus tu joues de comps hybrides, plus elles sont difficiles a optimiser. C'est simplement la comp 3 Hybrid Alts avec la pollinisation adaptee.",
            "Jouer davantage d'alts claimed est deconseille.",
            "Balloon et Boost Producers sont interchangeables.",
          ]},
      ]},
      { t:'note', v:"<b>Token Link Producers</b> \u2014 identiques pour les quatre comps : 4 Rage + 2 Paper Angel + 2 Paperclip + 1 Bead Lizard." },
    ]},

    { titre:"3.5 Gumdroppers", blocs:[
      { t:'liste', v:[
        "Tu dois obligatoirement faire tourner <b>3 a 4 gumdroppers</b> pour maintenir le goo et la croissance de la Gummy Star.",
        "Ce peut etre des alts on-field (Hybrid, Balloon, Fuzzy...) ou des amis et helpers.",
        "Les gumdroppers peuvent choisir de ne pas claim leur ruche pour reduire le lag : c'est en general le cas des autres joueurs, des alts sous-developpes, ou de ceux qui ont deja claim 4 ruches.",
        "Ils doivent avoir le <b>Gummy mask</b> et <b>900 a 1 200 gumdrops</b> par boost.",
        "Chaque alt ou joueur a sa propre position et son propre pattern, pour maintenir une couverture complete du champ.",
      ]},
      { t:'note', v:"Les positions de reference se repartissent en quatre points du champ : deux dans la moitie haute, deux dans la moitie basse, suffisamment espaces pour que les patterns ne se chevauchent pas." },
    ]},

    { titre:"Credits", blocs:[
      { t:'p', v:"Ce guide est l'adaptation francaise de <b>The Definitive White Hive Guide</b>, ecrit par <b>riot003</b> et <b>anthrox0</b>, publie par l'<b>Abyssal Trench Network</b>. Derniere mise a jour du document source : 26 mars 2026." },
      { t:'liste', v:[
        "Redaction originale : <b>riot003</b> et <b>anthrox0</b>.",
        "Spreadsheets, outils et guides de reference : <b>Abyssal Trench Network</b>.",
        "Valeurs des signes : <b>Tabby V</b>. Stats des beequips : <b>Beequip Spreadsheet</b>.",
      ]},
    ]},

  ],
};
