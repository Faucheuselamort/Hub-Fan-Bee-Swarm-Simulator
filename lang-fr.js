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

  /* --- gabarits dynamiques : %1, %2... sont remplaces par tf() --- */
  u_miel       : "miel",
  u_bond       : "bond",
  u_niveau     : "Niveau",
  u_niv        : "Niv.",
  u_pv         : "PV",
  gratuit      : "Gratuit",
  cpt_tous     : "%1 affichés",
  cpt_part     : "%1 / %2 affichés",
  respawn      : "↻ Réapparaît toutes les %1",
  craft_ok     : "✦ %1 fabricable",
  craft_ok_p   : "✦ %1 fabricables",
  craft_dont   : "dont %1 fabricable",
  craft_dont_p : "dont %1 fabricables",
  miel_ok      : "✓ tu as le miel",
  miel_manque  : "manque %1",
  bond_reste   : "Il te reste <b>%1 bond</b> pour passer du niveau %2 au niveau %3",
  bond_detail  : "%1 à acheter · 1 Treat = %2 bond avec tes bonus (10 de base +%3%) · bond total %4 → %5 : %6 · déjà accumulé : %7 bond (%8 % du palier %4 → %9, qui demande %10 bond)",
  lvl_prix     : "Prix pour faire évoluer ton %1 abeille",
  lvl_prix_p   : "Prix pour faire évoluer tes %1 abeilles",
  lvl_sous     : "Sans bonus : %1 miel · Bonus de bond appliqué : +%2%",
  trade_fair   : "⚖️ Trade équitable (écart %1 %).",
  trade_win    : "✅ À ton avantage : tu reçois %1 signs de plus (+%2 %).",
  trade_lose   : "❌ En ta défaveur : tu donnes %1 signs de trop (−%2 %).",
  bloom_stats  : "%1 valeurs sur %2 · %3 % complété",
  u_miel_c     : "Miel",
  la_page      : "la page",
  voir_page    : "Voir %1 →",
  langue_autre  : "English",
};

/* ---------- Contenu des guides ---------- */
LANGUES.fr.GUIDE = {
  "Incolore": [],
  "Red": [
    {
      titre: "1.0 Conditions pour switcher",
      blocs: [
        {
          t: "h",
          v: "High Level Hive"
        },
        {
          t: "liste",
          v: [
            "Le switch se fait generalement au <b>lvl 20+</b> : c'est a peu pres le temps qu'il faut pour remplir les autres conditions (alts, drives, materiaux, val).",
            "Tu peux switcher plus tot, au <b>lvl 18-19</b>, si tu preferes faire tes drives et tes amulettes en red — mais toutes les autres conditions doivent quand meme etre remplies."
          ]
        },
        {
          t: "h",
          v: "1.5 qd — cout de la transition"
        },
        {
          t: "liste",
          v: [
            "C'est le minimum de miel avec lequel tu peux switcher confortablement.",
            "<b>400-700t</b> pour garantir une ruche entierement gifted. Depense le miel en Ungifted Mythics + Gift au Ticket shop. Si le prix du ticket depasse <b>15t pour 500</b>, passe plutot au roll de Gifted Mythics avec de la RJ uniquement.",
            "<b>800-1000t</b> pour garantir une bonne SSA avec <b>Scorch + Saw</b>. C'est assez pour une <b>5/5 correcte</b> ou une <b>4/5 excellente</b>.",
            "Astuce : mets 700t de cote, puis continue a depenser tout le miel supplementaire en SSA jusqu'a tomber sur une amulette qui te plait. Tu switches ensuite instantanement avec les 700t gardes."
          ]
        },
        {
          t: "h",
          v: "Dark Scythe + Coconut Belt"
        },
        {
          t: "liste",
          v: [
            "<b>Dark Scythe</b> est vital pour une ruche rouge : il transforme les <b>Flames</b> en <b>Dark Flames</b>, donc des Scorch Stars plus grosses, plus de <b>SCP</b> et de <b>Red Ability IC</b>.",
            "Tu n'as pas besoin de le <b>posseder</b> avant de transitionner, seulement d'avoir les materiaux : les <b>250 Riley Bee Quests</b> peuvent se faire en ruche rouge.",
            "<b>Coconut Belt</b> donne un Coco combo allant jusqu'a <b>50% RP / BP / WP / HFT / Attack</b>, <b>75% UIC</b> et <b>2x Pollen</b> a 100x de combo.",
            "Il n'est pas directement requis pour la transition, mais il est indispensable pour booster."
          ]
        },
        {
          t: "h",
          v: "Digital correctement upgrade"
        },
        {
          t: "liste",
          v: [
            "Il te faut au minimum <b>500 Red + White Drives</b> pour que tes smileys rapportent du miel de facon significative.",
            "De preference <b>100+ Glitched Drives</b>, pour des lineups plus faciles et plus de corruption. Ca se farme en ruche RBC ou avec les R25 quotidiens en red.",
            "Les colored drives peuvent se faire dans n'importe quelle couleur. Voir le <b>Proper RBC Guide</b> pour le farm des Glitched Drives."
          ]
        },
        {
          t: "h",
          v: "Alt accounts"
        },
        {
          t: "liste",
          v: [
            "Au strict minimum <b>1 Fuzzy alt</b>, pour une pollinisation maximale du champ.",
            "De preference <b>2 Fuzzy-guiding</b>, ou <b>1 Fuzzy + 1 Off-field Guiding</b>. On peut et on devrait en faire tourner plus, mais 2 est une base correcte pour demarrer."
          ]
        },
        {
          t: "h",
          v: "Beequips + Sticker Stack"
        },
        {
          t: "liste",
          v: [
            "Aie une idee claire du nombre de signes necessaires pour acheter tous les beequips requis en red : sans ca, tu galereras enormement a progresser en boost. En moyenne, <b>100 signes de val</b> est une bonne base pour transitionner.",
            "Commence tot a monter ton <b>Sticker Stack</b> avec tous les stickers en trop : vise <b>200+</b> au moment du switch."
          ]
        },
        {
          t: "h",
          v: "Disponibilite du macro"
        },
        {
          t: "liste",
          v: [
            "Tu n'es pas oblige de macro autant qu'en ruche bleue, mais il faut pouvoir farmer beaucoup de materiaux de boost (stinger, gumdrops, vials...).",
            "Pense a prendre un <b>Offline Voucher</b> pour garder tes nectars au maximum pendant les boosts."
          ]
        },
        {
          t: "h",
          v: "Motivation"
        },
        {
          t: "liste",
          v: [
            "Une ruche rouge demande beaucoup plus d'entretien qu'on ne le croit. Beaucoup de joueurs abandonnent le farm des <b>Glitched Drives</b> ou ont l'impression de stagner.",
            "Il faut de la constance pour tenir et faire monter son miel sur la duree."
          ]
        }
      ]
    },
    {
      titre: "1.1 Composition de la ruche",
      blocs: [
        {
          t: "note",
          v: "Ces trois ruches sont une <b>base</b>, pas un modele fige. Tu peux les copier au debut, puis ajuster la composition selon la valeur de tes beequips et ton style de jeu une fois que tu maitrises le boost. Il n'existe pas de ruche rouge meta exacte : de nouvelles idees sont theorycraftees et testees en permanence."
        },
        {
          t: "comp",
          v: [
            {
              nom: "Starter Red Comp",
              sous: "Le point de depart juste apres le switch.",
              ratio: "Ratio : 11 Precise / 9 Vector / 10 Spicy",
              notes: [
                "Cette comp part du principe que tu as <b>500 Red + White drives</b> sur Digital, <b>moins de 100 de val</b> en beequips, et du mal a atteindre <b>90 Attack</b> sur les Precise.",
                "<b>Rage (a confirmer)</b> : excellente production de TL, et porte le Whistle pour le haste (sans melody). Cette abeille aide aussi a monter l'attack des Precise jusqu'a 90 pendant les boosts.",
                "<b>Riley (a confirmer)</b> : sert au <b>20% Red Field Cap</b> avec un porteur de Toy Drum (2%+ BAP + Haste). Ne joue pas un second porteur de drum si les deux n'ont pas 5%+ BAP.",
                "<b>Baby (a confirmer)</b> : uptime tres rapide du Baby Love token. A ce stade, ne les remplace pas par 2 Tadpoles avec Poinsettias : tu n'as pas assez de val pour que les Poins valent le coup (il faut 12%+ RP).",
                "<b>Carpenter (a confirmer)</b> : 3 sont obligatoires, faute de val pour des Honey Mark Smiley Stickers qui les remplaceraient. On leur met des Single Mittens pour du Red Pollen% en plus.",
                "<b>Basic (a confirmer)</b> : porte les Pink Shades pour du SCP / SCC. Le Focus est optionnel (croissance de la X-flame plus facile) mais tu n'as pas les moyens de te le payer. Si tu ne trouves pas de Shades, joue un TL Lizard a la place.",
                "<b>Music (a confirmer)</b> : donne TL, Focus et Melody. Peut etre remplacee par Lion avec Toy Horn pour 5% GAP au lieu de TL + Focus.",
                "<b>Shy</b> : 5% BAP et TL via Paper Angel. Tres precieuse, car une ruche rouge debutante a tres peu de bonnes sources de BAP.",
                "<b>Photon</b> : 5% IC et TL via Paper Angel. Remplacable par Hasty avec un TL Paperclip, pour 15% PMS et un ATL moins cher."
              ]
            },
            {
              nom: "Pre-Max Digital Comp",
              sous: "L'etape intermediaire, une fois de l'experience accumulee.",
              ratio: "Ratio : 11 Precise / 10 Vector / 12 Spicy",
              notes: [
                "Cette comp part du principe que tu as <b>100-200 Glitched Drives</b> sur Digital via les runs R25 quotidiens, environ <b>300 de val</b> en beequips, et bien plus d'experience en boost.",
                "<b>Rage (a confirmer)</b> : peut laisser place a un 2e Riley porteur de Toy Drum, des lors que le BAP des deux drums est assez haut (5%+) pour battre le TL de Rage. Les 15% de Bee attack ne servent plus une fois les 90 Attack atteints sur Precise, ce qui devrait etre le cas.",
                "<b>Carpenter (a confirmer)</b> : 2 Carps sont remplaces par des Honey Mark Smiley Stickers, et les cases liberees comblees par 1 Spicy et 1 Vector.",
                "<b>Basic (a confirmer)</b> : les Pink Shades devraient maintenant avoir du Focus pour l'accumulation de X-flame, mais c'est moins prioritaire que d'autres beequips (Sweatband, ou plus de SCP sur les Shades).",
                "<b>Tadpole (a confirmer)</b> : tu n'as tres probablement pas assez de val, et ca ne vaut pas le coup de la depenser sur des Poinsettias 12-15% RP pour en jouer.",
                "<b>Photon</b> : 5% IC et TL via Paper Angel. Remplacable par Hasty avec un TL Paperclip, pour 15% PMS et un ATL moins cher."
              ]
            },
            {
              nom: "Max Digital Comp",
              sous: "La comp de fin de parcours.",
              ratio: "Ratio : 10 Precise / 10 Vector / 12 Spicy",
              notes: [
                "Cette comp part du principe que tu as un Digital entierement max avec tous les Glitched Drives, <b>500+ de val</b> en beequips, et une comprehension complete du boost en red.",
                "<b>Rage (a confirmer)</b> : meme remarque que sur la Pre-Max, remplacable par un 2e Riley porteur de Toy Drum.",
                "<b>Precise / Spicy (a confirmer)</b> : grace a la corruption tres elevee d'un Digital max, tu peux retirer 1 Precise pour une 12e Spicy tout en gardant confortablement <b>3-5x Precise Marks / 10x Precision</b>.",
                "<b>Carpenter (a confirmer)</b> : si tu peux te payer un Melody Whistle / Charm, ou si tu es a l'aise en boostant avec seulement 2 producteurs de Melody, joue un 2e Paperclip au lieu du Toy Horn, pour plus d'ATL et de Token Link. Deplace le Lip Balm sur Crimson pour liberer la case sur Stubborn.",
                "<b>Fire (a confirmer)</b> : 1.25x Flame Pollen, ramasse les flames, et un 2e porteur de Paperclip peut remplacer Music. Pour compenser la perte de Melody, joue seulement 2 producteurs ou achete un Melody Whistle / Charm (mets le Melody Charm sur Carpenter Bee).",
                "<b>Baby (a confirmer)</b> : si tu as 15 slots et plus rien d'important a ameliorer avec ta val, tu peux jouer 1 Tadpole a la place d'une Baby, a condition que chaque Poinsettia ait 13%+ RP. Les Single Mittens sont aussi une bonne option a 9% RP.",
                "<b>Photon</b> : 5% IC et TL via Paper Angel. Remplacable par Hasty avec un TL Paperclip, pour 15% PMS et un ATL moins cher."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Max Digi Strategies (optionnel)"
        },
        {
          t: "liste",
          v: [
            "La corruption tres elevee dupe davantage de tokens : certaines abeilles habituellement jouees peuvent donc etre retirees.",
            "Jouer <b>3 Baby Love</b> est viable, mais tu risques davantage de perdre le Baby Love (x2 Pollen) aux moments importants du boost.",
            "Jouer <b>2 Melody</b> est viable aussi, avec le meme risque de perte (+100% Crit Power). Melody est un buff moins puissant que Baby Love, mais bien plus facile a caser dans la comp.",
            "Pendant les Beesmas Boosts, tu as souvent beaucoup de Critical Power% (Robo Party Blessing par exemple), ce qui reduit l'interet du Hive Bonus <b>+50% Critical Power%</b> de Tabby."
          ]
        },
        {
          t: "p",
          v: "Apres ces modifications, tu voudras, dans l'ordre :"
        },
        {
          t: "etapes",
          v: [
            {
              t: "Fire Bee / Music Bee",
              d: "Celle des deux qui te manque."
            },
            {
              t: "13e Spicy Bee",
              d: "La suivante a ajouter."
            },
            {
              t: "14e Spicy / 11e Vector / 11e Precise",
              d: "Au choix, selon ta preference."
            }
          ]
        },
        {
          t: "note",
          v: "Ces ajustements sont <b>optionnels</b> et ne donnent pas forcement les meilleurs resultats. Le mieux reste de tester ces comps par toi-meme."
        },
        {
          t: "h",
          v: "Extra : RBC Hive"
        },
        {
          t: "liste",
          v: [
            "Au moment de transitionner, tu peux d'abord passer en ruche RBC pour farmer tes drives et booster plus facilement ensuite. Ca fait gagner beaucoup de temps par rapport aux seuls runs R25 quotidiens, qui demandent 250 jours.",
            "Ne le fais que si tu comptes obtenir <b>100+ Glitched Drives</b> ; sinon tu peux sortir tes drives en boostant en red.",
            "Passer en ruche RBC veut dire que tu ne pourras <b>ni booster ni faire de miel</b> pendant tout ce temps : c'est un engagement consequent.",
            "Pour les colored drives, pas besoin de ruche RBC : ils peuvent se faire dans n'importe quelle couleur.",
            "Plus d'infos dans le <b>Proper RBC Guide</b>."
          ]
        }
      ]
    },
    {
      titre: "1.2 Amulettes",
      blocs: [
        {
          t: "h",
          v: "Legende des stats"
        },
        {
          t: "liste",
          v: [
            "<b>Bleu</b> — stat la plus importante, requise pour l'amulette.",
            "<b>Vert</b> — bonne stat, a rechercher.",
            "<b>Orange</b> — stat de remplissage, buff correct.",
            "<b>Rouge</b> — nuisible, a eviter totalement.",
            "<b>Gris</b> — garantie, a monter le plus haut possible.",
            "Toute stat non listee n'a aucune importance : la jouer ou non ne change rien."
          ]
        },
        {
          t: "h",
          v: "Star Amulet — 5/5"
        },
        {
          t: "p",
          v: "Priorite : <b>RP = CC > Pol > IC > BGP / BAR</b>. Passifs : <b>Scorch + Saw</b>."
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Red Pollen",
                "+70%",
                "Requise"
              ],
              [
                "Critical Chance",
                "+7%",
                "Requise"
              ],
              [
                "Pollen",
                "+20%",
                "Requise"
              ],
              [
                "Instant Conversion",
                "+12%",
                "Requise"
              ],
              [
                "Bee Gather Pollen",
                "+70%",
                "Bonne"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "Vise au minimum une <b>4/5 DP (a confirmer)</b> avec un RP et un Pollen eleves."
        },
        {
          t: "liste",
          v: [
            "<b>BGP</b> — des smileys plus forts.",
            "<b>BAR</b> — des smileys plus frequents.",
            "<b>IC</b> — moins de dependance aux Blooms."
          ]
        },
        {
          t: "h",
          v: "Ant Amulet"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Critical Power",
                "+50%",
                "Requise"
              ],
              [
                "Critical Chance",
                "+3%",
                "Requise"
              ],
              [
                "Red Pollen",
                "+30%",
                "Requise"
              ],
              [
                "Pollen",
                "+5%",
                "Bonne"
              ],
              [
                "Blue Pollen",
                "+30%",
                "Remplissage"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "<b>PMS</b> — aide pour les blooms.",
            "<b>Attack</b> — a ne jouer que si l'attack est catastrophique sur tes autres amulettes.",
            "<b>Pollen</b> — petit buff au honeymaking."
          ]
        },
        {
          t: "h",
          v: "Cog Amulet — 5/5"
        },
        {
          t: "p",
          v: "Priorite : <b>RP = SCP > EBP >> RIC > BA</b>. Ordre des stats : <b>SCP > EBP > BGP > Flame%</b>."
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Red Pollen",
                "+30%",
                "Requise"
              ],
              [
                "Event Bee Pollen",
                "+20%",
                "Requise"
              ],
              [
                "Super Crit Power",
                "+25%",
                "Requise"
              ],
              [
                "Red Instant Conv",
                "+5%",
                "Bonne"
              ],
              [
                "Bee Attack",
                "+15%",
                "Bonne"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Stick Bug Amulet"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Capacity",
                "+300k",
                "Garanti"
              ],
              [
                "Convert Rate",
                "1.25x",
                "Garanti"
              ],
              [
                "Red Pollen",
                "+30%",
                "Requise"
              ],
              [
                "Bee Attack",
                "+10%",
                "Requise"
              ],
              [
                "Bee Attack",
                "+1",
                "Bonne"
              ],
              [
                "Red Bee Attack",
                "+2",
                "Bonne"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "King Beetle Amulet"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Convert Rate",
                "+100%",
                "Garanti"
              ],
              [
                "Bee Attack",
                "+1",
                "Requise"
              ],
              [
                "Field pollen% (n'importe lequel)",
                "—",
                "Remplissage"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "Le field pollen% n'est utile que pendant le RBC."
        },
        {
          t: "h",
          v: "Moon Amulet"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Capacity",
                "+250k",
                "Garanti"
              ],
              [
                "Honey Per Pollen",
                "+8%",
                "Requise"
              ],
              [
                "Bond From Treats",
                "+10%",
                "Bonne"
              ],
              [
                "Movement collection",
                "—",
                "A NE PAS JOUER"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Shell Amulet"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Niveau"
            ],
            rows: [
              [
                "Goo",
                "+15%",
                "Garanti"
              ],
              [
                "Goo Conversion",
                "+10%",
                "Bonne"
              ],
              [
                "Pollen",
                "+5%",
                "Bonne"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "Le reste des stats n'a aucune importance sur cette amulette."
        }
      ]
    },
    {
      titre: "1.3 Beequips",
      blocs: [
        {
          t: "p",
          v: "Les beequips sont l'une des parties les plus importantes d'une bonne ruche : ils apportent des buffs inegales au fill, a la production de tokens, a la capacite et au boost en general."
        },
        {
          t: "liste",
          v: [
            "Seuls <b>13 slots</b> sont disponibles actuellement : chaque slot doit donc apporter quelque chose de reel a tes boosts.",
            "<b>14 et 15 slots</b> sont possibles si tu as termine la quete Beesmas 2020 de Bee Bear.",
            "Toutes les comps presentees comptent 15 beequips, en indiquant lesquels retirer pour une ruche a 13 slots.",
            "L'inflation des signes fait bouger les prix tres vite : reference-toi a <b>Tabby V</b> pour la valeur des signes, et au <b>Beequip Spreadsheet</b> pour les stats. Attention, le <i>weight</i> n'est pas la meme chose que la CHANCE."
          ]
        },
        {
          t: "h",
          v: "Beequips obligatoires"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Beequip",
              "Cout approx.",
              "Stats a viser",
              "A poser sur"
            ],
            rows: [
              [
                "Sweatband",
                "~9-12 signes",
                "Le beequip le plus important pour la Smiley Strength. <b>+25% Red Gather Amount</b> / +1% Red Pollen (HB). Le White Gather Amount ne sert a rien. Achetable au Dapper Shop.",
                "Digital"
              ],
              [
                "Pink Shades",
                "~14-28 signes",
                "Surtout une bonne source de <b>SCP</b>. +%SCC (HB) / +2% SCP (HB) / +Focus, optionnel mais utile pour accumuler la x-flame plus vite. Vient de la questline Beesmas de Honey Bee.",
                "Basic"
              ],
              [
                "Camphor Lip Balm",
                "~3-4 signes",
                "Buff multiplicatif inestimable sur Pepper : <b>1.06x Pepper Field Pollen</b> (HB). Facilement achetable au Dapper Shop.",
                "Stubborn / Crimson"
              ],
              [
                "Kazoo",
                "~3-8 signes",
                "Obligatoire si tu joues Shocked / Buoyant. Source facile de Melody et de crits. +Melody / +1-4% CritP (HB) / +1% SCP (HB). Dapper Shop ou Stickbug.",
                "Shocked"
              ],
              [
                "Whistle",
                "~2-9 signes (Melody = 120+)",
                "Source de Haste bon marche, excellente pour le SCP, et buff possible a l'uptime Melody, necessaire si tu ne joues que 2 producteurs. +Haste / +Melody / +2-3% SCP (HB). Dapper Shop.",
                "Rage"
              ],
              [
                "1-2 Toy Drums 🎄",
                "~14 signes",
                "Excellent buff au haste et a l'ability pollen. +Haste / +2% BAP (HB). Ne joue 2 Toy Drums que s'ils ont chacun 5%+ BAP ; le second est interchangeable avec le Whistle.",
                "1-2 Riley"
              ],
              [
                "1 Toy Horn 🎄",
                "~3 signes",
                "Bonne source de BAP et d'uptime Melody. +Melody / +1% BAP (HB).",
                "Crimson"
              ],
              [
                "2 Smiley Stickers",
                "~120 signes",
                "Permettent de retirer un Carpenter Bee. <b>+Honey Mark</b> / +% Mark Duration (HB, par abeille), optionnel.",
                "2 Spicy"
              ],
              [
                "2 Paper Angels 🎄",
                "~6-7 signes",
                "Grosse source de TL, avec des bonus BAP et ATL pour le boost. +Token Link (garanti) / +1% BAP / +2% ATL. Privilegie un ATL eleve : les sources de BAP sont plus nombreuses. Relativement peu cher en trade, ou via le Stick Bug Challenge.",
                "Shy + Photon"
              ],
              [
                "2 Paperclips",
                "fluctuant",
                "Grosse source de TL et d'ATL pour pas cher, plus du BAP. <b>+Token Link (requis)</b> / +1-2% BAP / +2-4% ATL. Dapper Bear ou trade.",
                "Rad + Fire / Rad + Stubborn"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Beequips recommandes"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Beequip",
              "Cout approx.",
              "Stats a viser",
              "A poser sur"
            ],
            rows: [
              [
                "Charm Bracelet",
                "~100-200 signes",
                "Source de Melody de luxe, extremement chere en trade. +Melody ; le reste des stats est optionnel.",
                "Carpenter"
              ],
              [
                "Peppermint Antennas 🎄",
                "~8-40 signes",
                "Choix de dernier recours : a ne jouer que si tu n'as rien d'autre a mettre sur une abeille. +3-4% AR / +0-1% BAR (HB).",
                "Carpenter"
              ],
              [
                "Bead Lizard",
                "fluctuant",
                "Source de TL, plus du BAP et du Flame Pollen, mais ne peut pas donner d'ATL. Peut remplacer un Paperclip s'il t'en manque un. +Token Link (requis) / +1-2% BAP. Dapper Bear ou trade.",
                "Basic / Rad / Stubborn"
              ],
              [
                "1-3 Single Mittens 🎄",
                "~20-35 signes",
                "Beequip de remplissage, mais peu courant. Un Single Mitten 9% RP sur Baby Bee fait mieux qu'un Tadpole Bee + Poinsettia, sauf si celui-ci depasse 15% RP. Jusqu'a +9% Red Pollen.",
                "N'importe quelle Legendary"
              ],
              [
                "Poinsettia 🎄",
                "beaucoup trop cher",
                "Extremement situationnel, a ne jouer qu'avec un RP vraiment eleve. <b>13%+ RP</b> minimum pour meme y penser. +% Red Pollen / +% Bee Gather Pollen en stat secondaire.",
                "1 Tadpole"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Autres beequips"
        },
        {
          t: "liste",
          v: [
            "<b>Rose Headband</b> — a jouer uniquement si tu boostes dans Rose (voir la section Champs de boost)."
          ]
        }
      ]
    },
    {
      titre: "1.4 Conseils supplementaires",
      blocs: [
        {
          t: "h",
          v: "Mutations"
        },
        {
          t: "liste",
          v: [
            "Quand tu <b>demarres en red</b>, ne te concentre sur aucune mutation : le rapport valeur / cout est tres faible.",
            "Utilise tes Bitterberries en trop sur les <b>Events</b>.",
            "S'il t'en reste ensuite : <b>BMS</b> sur 1 Precise + Vector, puis <b>CA%</b> sur toutes les Spicy (ce sera annule par le BAR plus tard).",
            "Tu obtiens automatiquement des mutations sur toutes les Rare, Epic et Legendary en switchant avec de la RJ, puis en giftant avec des fruits. C'est tres bon marche, juste un peu long : 10-20t pour l'ensemble des mutations."
          ]
        },
        {
          t: "h",
          v: "A partir du lvl 20"
        },
        {
          t: "liste",
          v: [
            "Tu peux viser de bonnes mutations sur toutes tes Mythics.",
            "Compte <b>~10k Bitterberries</b> ou <b>~500t</b> pour du BMS / BAR par Mythic.",
            "Soit <b>~300k Bitterberries</b> / <b>~15qd</b> pour une ruche entierement mutee.",
            "Compte 2 a 4 fois plus si tu veux du <b>+5 BMS</b> / <b>4% BAR</b>."
          ]
        },
        {
          t: "note",
          v: "Le document source detaille par icones quelles abeilles prennent BMS, BAR ou GA / Gather%. Ces icones ne sont pas lisibles sur les captures <b>(a confirmer)</b>. Ce qui est lisible : le BMS concerne aussi toutes les autres Rare, Epic et Legendary, et le BAR est une alternative correcte au BMS."
        },
        {
          t: "h",
          v: "Priorite des mutations"
        },
        {
          t: "etapes",
          v: [
            {
              t: "Rare + Epic + Legendary",
              d: "Baby > Carps > Token Producers > le reste. Utilise la RJ pour ces mutations, c'est peu cher."
            },
            {
              t: "Events",
              d: "Digital > Bear > Tabby > Crimson > Photon. Utilise des Bitterberries ; BMS et BAR sont relativement interchangeables sur les Event bees."
            },
            {
              t: "Mythics",
              d: "Precise > Vector > Spicy. Soit RJ + fruits (surtout lvl 21+), soit Bitterberries (surtout lvl 20+). Le CA% est une alternative moins chere pour Spicy, et l'Attack% pour Precise."
            }
          ]
        },
        {
          t: "h",
          v: "Levels"
        },
        {
          t: "p",
          v: "Le niveau des abeilles joue un role vital dans le honeymaking : c'est le principal puits a miel de la quasi-totalite de tes boosts."
        },
        {
          t: "etapes",
          v: [
            {
              t: "Events",
              d: "Digital >>>> le reste."
            },
            {
              t: "Mythics",
              d: "Precise > Spicy > Vector. Les niveaux de Spicy allongent la duree du Fire Bee quand l'inferno est actif et augmentent la chance qu'elles soient gifted, ce qui est plus utile que le buff de duree de mark de Vector."
            },
            {
              t: "Token Producers",
              d: "Baby, Hasty, Shocked, etc."
            },
            {
              t: "Le reste des abeilles",
              d: "En dernier."
            }
          ]
        }
      ]
    },
    {
      titre: "2.1 Preparation du boost",
      blocs: [
        {
          t: "h",
          v: "Preparation des materiaux"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Quantite",
              "Materiel",
              "Notes / Usage"
            ],
            rows: [
              [
                "2",
                "Glitter",
                "1. En debut de boost, avant d'utiliser les Loaded Dice. 2. Apres ~14m45s, pour prolonger le field boost x4."
              ],
              [
                "4",
                "Loaded Dice",
                "Field boost x4 garanti."
              ],
              [
                "2",
                "Super Smoothie",
                "Un stat stick, mais consommable."
              ],
              [
                "120-160",
                "Stinger (a confirmer)",
                "Sert a activer le <b>Star Saw</b> pour le drain. Obligatoire."
              ],
              [
                "900-1.2k",
                "Gumdrops",
                "Pour abuser de la goo conversion : beaucoup d'IC pour pas cher. 1 200 sur le main + les alts on-field, pour 40 minutes."
              ],
              [
                "40-60",
                "Jelly Beans",
                "Bon buff sur beaucoup de stats diverses. Compte <b>1 Jelly Bean par Scorch Star</b> si tu enchaines plusieurs boosts."
              ],
              [
                "180-240",
                "Coconuts",
                "Alimente le Coconut Combo, qui fournit du haste."
              ],
              [
                "10",
                "Cloud Vials",
                "+25% Pollen et +10% Unique IC (double avec Windy). 10 sur le main + les alts on-field ; utilise Vicious + Precise sur les alts pour recuperer tous les vials en une seule windy."
              ],
              [
                "1",
                "(a confirmer)",
                "Optionnel, a utiliser pendant les tres bons lineups."
              ],
              [
                "∞",
                "Snowflakes",
                "+25% BGP, +5% HPP et x1.25 Capacity."
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Preparation des buffs"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Buff",
              "Quantite",
              "Notes / Usage"
            ],
            rows: [
              [
                "Wealth Clock",
                "x5",
                "x1.05 Honey Per Pollen."
              ],
              [
                "Nectars",
                "20h+",
                "Au minimum <b>Invigorating + Refreshing</b> au maximum. De preference les 5, pour des buffs supplementaires et x1.05 HPP."
              ],
              [
                "Puffshroom Blessing",
                "x100",
                "Apporte UIC, HFT, Pollen et Capacity."
              ],
              [
                "Mondo Blessing",
                "—",
                "Surtout pour les 10% Pollen, mais donne aussi de la capacite."
              ],
              [
                "Balloon Blessing",
                "x33-66",
                "Donne x2 a x3 Capacity, jusqu'a x4."
              ],
              [
                "Festive Nymph",
                "x250",
                "Capacity, Bee Attack, HPP et Instant Bee Gather Convert."
              ],
              [
                "Robo Party Blessing",
                "x100",
                "Capacity, Crit Power, Red Pollen, White Pollen (et Blue Pollen)."
              ],
              [
                "Honeyday Candles",
                "—",
                "Chance d'avoir des Spicy bees en plus."
              ],
              [
                "Honey Wreath",
                "—",
                "Une Honey Bee bonus."
              ],
              [
                "Onett's Lid Art",
                "—",
                "Des abeilles en plus."
              ],
              [
                "Gummy Cannon",
                "—",
                "3 Gummy Bees = beaucoup de Gummy Tokens, donc une bonne couverture en gumdrops et une bonne goo conversion."
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Points de vigilance"
        },
        {
          t: "liste",
          v: [
            "Verifie que ton ping est bas et stable, et que la qualite du serveur est bonne.",
            "Assure-toi que le serveur se trouve dans ta region (NA / Europe / Asia / Australia).",
            "Evite les heures de pointe (12:00 -> 18:00).",
            "Macro Stinger / Jelly Bean gratuit : <b>Syspalkius</b>.",
            "Autres outils, patterns et macros de boost : <b>Spctrl's Server</b>."
          ]
        },
        {
          t: "note",
          v: "Le document source renvoie aussi vers un <b>Alt / Boosting Manager</b> (la macro d'Ayaan) et vers un <b>Stinger Saving Guide</b>, mais ces deux liens n'y sont pas encore publies."
        }
      ]
    },
    {
      titre: "2.2 Technique",
      blocs: [
        {
          t: "note",
          v: "Tes premiers boosts seront mauvais, c'est normal. Meme en ayant tout fait correctement sur le papier (lvl 20+, drives, ruche fully gifted...), ton premier boost peut ne rapporter que ~50T. <b>Ne te decourage pas.</b> Ce qui suit t'aidera pour les premieres fois, mais la pratique t'apprendra bien plus que n'importe quel guide ou video."
        },
        {
          t: "h",
          v: "Reglage des alts"
        },
        {
          t: "liste",
          v: [
            "Place les alts dans le champ choisi : en pratique, toujours Pepper.",
            "Commence les <b>Snowflakes</b> pour 100%, utilise les <b>Cloud Vials</b> toutes les 3 minutes, et des <b>Gumdrops</b> en permanence.",
            "Les <b>Jelly Beans</b> se calent au moment ou le Scorch s'active — mais si tu en as beaucoup, utilise-les en continu.",
            "Verifie que le sprinkler est bien place, legerement decale, pour arroser tout le champ.",
            "L'<b>Ayaan's Boosting Manager</b> aide a gerer cette mise en place."
          ]
        },
        {
          t: "h",
          v: "Preparation du compte principal"
        },
        {
          t: "liste",
          v: [
            "<b>Tue Mondo</b> pour 6x+ Mondo Blessing : Stack actif, 10x Precision, Precise Marks sur le Mountain Top.",
            "<b>Retour a Pepper</b> : refais 10x Precision, regle la Scorching Star sur <b>15+/30</b> et le Star Saw sur <b>2/3</b>, puis Glitter sur Pepper.",
            "<b>Pendant Beesmas</b> : 1. Riley Bee Candles, 2. Honey Bee's Wreath, 3. Onett's Lid Art. Utilise le Whirligig pour revenir a la ruche.",
            "<b>Field Winds</b> : donne Purple Pot / Atomic Treat pour les boosts normaux (l'Atomic Treat garantit quasiment des Pepper Winds), et Gifted Gold Egg / Mythic Egg pour les gros boosts (le Mythic Egg garantit quasiment des Pepper Winds).",
            "<b>Super Smoothie + Loaded Dice.</b>",
            "Garde <b>10x Precision</b> pendant toute cette preparation."
          ]
        },
        {
          t: "h",
          v: "En dehors du Scorch"
        },
        {
          t: "liste",
          v: [
            "Maintiens <b>10x Precision / 3x Precise Marks / Bloom Stacks</b>. Reste dans les Precise Shots pour l'ability TL.",
            "Les Blooms donnent beaucoup trop d'UIC pour etre ignores : vise <b>100x Red Petal</b> des que possible, et le plus de blooms uniques possible.",
            "Concentre-toi sur l'activation instantanee du Scorch des sa sortie de cooldown.",
            "Utilise les Focus tokens de Precise pour controler le timing de la <b>X-flame</b> : bien synchronisee, elle fait grimper le Scorch instantanement.",
            "<b>Retarde tous les buffs</b> en dehors du Scorch : dupe Bear Morph / Smileys, dupe Inspire, et Coconut Combo pour que le buff s'applique pendant la star.",
            "Juste avant le demarrage de la Scorch Star, prepare <b>4-5 Precise Marks</b>. Elles doivent tenir sur 50%+ de ta star ; si l'une expire, relance-en une immediatement."
          ]
        },
        {
          t: "h",
          v: "Pendant le Scorch"
        },
        {
          t: "liste",
          v: [
            "Idealement, la <b>X-flame</b> s'active en meme temps que le Scorch, pour une croissance plus facile. Si elle est en retard, active-la avec des targets ; si elle est en avance, retarde le scorch jusqu'a resynchronisation.",
            "Ne passe les flames en <b>dark</b> qu'apres ~4 secondes, pour une croissance maximale.",
            "N'utilise le <b>Dark Scythe</b> que pour convertir et pour les blooms.",
            "Essaie de conserver les <b>4-5 Precise Marks / Blooms / 10x Precision</b> prepares en amont, et active autant de targets que possible.",
            "<b>Ne reste pas dans les targets</b> pendant le Scorch : ca detruit completement ta <b>Flame Heat</b>, qui doit etre maintenue en permanence pendant le Scorch."
          ]
        },
        {
          t: "h",
          v: "Autres points d'attention"
        },
        {
          t: "liste",
          v: [
            "Dupe tokens : Bear Morphs / Target Practice.",
            "Smiley tokens : essaie de les ramasser pendant qu'un pink petal est attrape, pour 2x BGP.",
            "Convertis les <b>Flames</b> en <b>Dark Flames</b> avant les lineups importants, pour du SCP en plus.",
            "Les lumieres de Beesmas qui tombent sont un excellent declencheur de lineup.",
            "Surveille le rafraichissement du <b>glitter</b> et du <b>smoothie</b>. Si tu comptes prolonger le boost a 40 minutes, utilise les field dice apres le 2e glitter pour le rafraichir.",
            "Les <b>Jelly Beans</b> s'utilisent au debut du Scorch, ou des qu'ils sortent de cooldown, selon que tu veuilles les garder pour d'autres boosts.",
            "Les <b>Festive Beans</b> se calent pendant les bons lineups et juste avant la star. Essaie de les utiliser dans les premieres minutes du boost, pour avoir 100% d'IC pendant la Guiding Star (1.25x Pollen) et profiter des abeilles supplementaires des decorations."
          ]
        },
        {
          t: "h",
          v: "Probleme frequent : la conversion"
        },
        {
          t: "liste",
          v: [
            "Quand le sac est plein, les abeilles arretent de ramasser et de bouger : la production de tokens chute fortement, ce qui casse les lineups.",
            "On corrige en maximisant : Flames / Flame Heat / Dark Flames, Star Saw, Instant Conversion, entretien des Blooms, Goo Conversion, Conversion Links et Guiding Star."
          ]
        },
        {
          t: "note",
          v: "<b>N'utilise pas les Festive Beans</b> uniquement pour resoudre un probleme de conversion."
        },
        {
          t: "h",
          v: "Probleme frequent : les lineups de smileys"
        },
        {
          t: "liste",
          v: [
            "Au debut, il est extremement difficile de caser tous les buffs d'un lineup dans la courte fenetre du smiley token.",
            "Il n'y a pas de solution directe, mais tu peux preparer tes lineups avant l'apparition des smileys : bons dupe tokens (Inspire / Target / Morph), jelly beans deja actives, bons stacks de blooms.",
            "Mets de l'<b>Ability Token Lifespan</b> sur davantage de beequips.",
            "Plus de <b>Glitched Drives</b> = un taux d'apparition de smileys plus eleve."
          ]
        },
        {
          t: "h",
          v: "Probleme frequent : les timings de X-flame"
        },
        {
          t: "liste",
          v: [
            "Retarder ou accelerer l'accumulation de focus tokens pour caler la X-flame sur le Scorch n'est pas simple.",
            "Utilise un logiciel pour suivre facilement la montee de ton Scorch et de ta X-flame.",
            "Evite de trop dependre du <b>Token Link</b>, qui te retire du controle sur les tokens ramasses.",
            "Utilise <b>Target Practice</b>, qui donne a la fois Red Boost et Focus, pour mieux controler la production des tokens necessaires a la X-flame et au Scorch.",
            "Ca demande beaucoup de technique, qui vient avec le temps."
          ]
        },
        {
          t: "h",
          v: "Comment progresser"
        },
        {
          t: "liste",
          v: [
            "<b>Entraine-toi</b> : enregistre tes boosts pour les revoir et reperer tes erreurs (Precise qui tombe, mauvais blooms, mauvais timings, combos perdus...).",
            "Demande a d'autres joueurs de les regarder si tu as besoin d'aide.",
            "<b>Regarde les autres booster</b> : c'est le meilleur moyen de comprendre concretement le boost en red."
          ]
        }
      ]
    },
    {
      titre: "2.3 Champs de boost",
      blocs: [
        {
          t: "h",
          v: "Pepper Patch"
        },
        {
          t: "liste",
          v: [
            "<b>Pour</b> : le <b>Camphor Lip Balm</b> apporte jusqu'a <b>x1.08</b> de collecte de pollen en plus, ce qui fait de Pepper le meilleur champ de boost, et de loin.",
            "<b>Pour</b> : de bonnes options de blooms — beaucoup de scarlet, un peu de pink et de green, et parfois du periwinkle ou du marigold.",
            "<b>Contre</b> : les Baby bees n'aiment pas ce champ (bug)."
          ]
        },
        {
          t: "h",
          v: "Rose Field"
        },
        {
          t: "liste",
          v: [
            "<b>Pour</b> : beaucoup de slots de dupe tokens.",
            "<b>Pour</b> : de bons blooms, avec beaucoup de purple et de grey.",
            "<b>Pour</b> : le <b>Rose Headband</b> donne un buff en % correct sur Rose, mais surclasse par le PPP du Lip Balm.",
            "<b>Contre</b> : mauvaise visibilite du boost, a cause des grosses decorations de roses.",
            "<b>Contre</b> : moins de blooms pink et scarlet."
          ]
        },
        {
          t: "h",
          v: "Strawberry Field"
        },
        {
          t: "liste",
          v: [
            "<b>Pour</b> : beaucoup de Pink Blooms.",
            "<b>Pour</b> : la <b>King Beetle Amulet</b> peut donner jusqu'a 100% de Straw Pollen.",
            "<b>Contre</b> : mauvais ratio de fleurs rouges / blanches.",
            "<b>Contre</b> : peu de slots de dupe tokens.",
            "<b>Contre</b> : la taille du champ est ingrate — tout smiley ou bloom qui apparait pres du bord est penible a exploiter.",
            "<b>Contre</b> : aucun beequip specifique au champ capable de concurrencer le Balm ou le Headband."
          ]
        },
        {
          t: "note",
          v: "Conclusion : boost toujours dans <b>Pepper</b>. Meme sans vent, Pepper reste meilleur que toutes les autres options."
        }
      ]
    },
    {
      titre: "2.4 Blessing Boosts",
      blocs: [
        {
          t: "h",
          v: "Standard Blessing Boost"
        },
        {
          t: "liste",
          v: [
            "Si tu n'es pas pret a passer le temps supplementaire d'un RBC Blessing boost, tu peux faire un blessing boost standard pour <b>20-40x</b>.",
            "Passe sur le <b>Diamond Mask</b> pour de la capacite en plus.",
            "Remplace quelques abeilles non-mythic / event par des <b>Buoyants</b> (1-8) et ajoute quelques beequips qui buffent la capacite (Headband, Snow Tiara, Sunhat, etc.).",
            "Utilise un <b>4x Pepper Patch boost</b>, une Purple Potion / Super Smoothie et le Sticker Stack, en restant 15 minutes sur le champ : des micro converters permettent d'y arriver.",
            "Utilise un Whirligig au retour pour convertir un ballon."
          ]
        },
        {
          t: "h",
          v: "RBC Blessing Boost"
        },
        {
          t: "liste",
          v: [
            "Cette partie est traitee dans <b>The Official Blue RBC Guide</b>.",
            "Comme pour le Standard Blessing Boost, pense au <b>Diamond Mask</b> et au remplacement d'abeilles et de beequips par des Buoyants et des buffs de capacite."
          ]
        },
        {
          t: "h",
          v: "Maintenir la Balloon Blessing"
        },
        {
          t: "liste",
          v: [
            "Avec une composition sans Buoyants, maintenir la <b>Balloon Blessing</b> n'a rien d'intuitif.",
            "Pendant un boost, rafraichis-la via le <b>Robo Bear Challenge</b> : la blessing se rafraichit automatiquement en fin de manche, meme si tu perds.",
            "Pour la maintenir pendant la nuit, remplace une ou deux abeilles par des <b>Buoyant Bees</b>, pour que le macro convertisse automatiquement les ballons a la ruche. Remets les abeilles d'origine quand tu reprends les boosts."
          ]
        }
      ]
    },
    {
      titre: "3. Comptes alts",
      blocs: [
        {
          t: "p",
          v: "Les comptes alts jouent un role enorme dans la quantite de miel que tu fais. Ne fais pas l'impasse dessus, sinon tu ne gagneras presque rien. Le <b>Complete Alt Account Guide</b> traite le sujet en detail."
        },
        {
          t: "h",
          v: "Les 4 mecaniques exploitees"
        },
        {
          t: "liste",
          v: [
            "<b>Flower Pollination.</b>",
            "<b>Balloon Aura.</b>",
            "<b>Guiding Star.</b>",
            "<b>Support divers</b> : Gummy Bee, Gummy Mask et Gummy Boots donnent de la goo ; Festive Bee fournit des festive gifts et la Festive Wreath ; Digital Bee sert a la Map Corruption ; Inspire Coconuts et Coconuts lancent les Coconut Combos."
          ]
        },
        {
          t: "note",
          v: "Si tu fais tourner <b>2 alts ou plus</b>, ils doivent avoir un pattern dedie, stable, qui ne s'eloigne pas trop de leur point de gumdropping : il est vraiment important que le champ soit couvert de goo en permanence pendant le boost."
        },
        {
          t: "h",
          v: "Notes annexes"
        },
        {
          t: "liste",
          v: [
            "<b>Precise, Rage et Vicious</b> sont presentes dans toutes les comps pour tuer la Wild Windy Bee. Ca permet de preparer tous les vials sur une seule windy, ce qui est critique pour enchainer les boosts (HD).",
            "Les <b>mutations</b> doivent etre reproduites du mieux possible : BMS sur les boost producers pour des guides plus rapides, Attack% sur Vicious pour le confort face a Windy, et Energy% comme solution d'attente si tu n'arrives pas a muter correctement tes mythics (BAR / BMS). Le reste des mutations coule de source.",
            "Le <b>Petal Planter</b> doit etre achete pour garder Spider / Coconut / Dandelion parmi les 3 champs les moins ramasses, pour tout guiding alt on-field (Fuzzy Guiding, Hybrid alts).",
            "Il est fortement recommande de monter tes alts au <b>lvl 20</b> ; le <b>lvl 15</b> fait l'affaire a court terme.",
            "En regle generale, commence par des alts standards, puis passe a des composite alts (1 Fuzzy + 1 Guiding, puis 2 Fuzzy-guiding). Evidemment, chaque alt a sa raison d'etre : la regle ne vaut pas pour tout le monde. Tu peux tres bien garder un solo guiding alt comme coco catcher, ou un solo fuzzy pour des runs RBC plus simples."
          ]
        }
      ]
    },
    {
      titre: "3.1 Guiding Alts",
      blocs: [
        {
          t: "comp",
          v: [
            {
              nom: "Solo Combo-Guide Alt",
              sous: "Sert de Coconut Catcher permanent off-field.",
              ratio: "Ratio : 0 Fuzzy Bees / 0 Buoyant Bees / 39 Boost Producers",
              notes: [
                "Cette comp joue <b>Guiding Star + Star Shower</b> : tu peux abuser d'Inspire Coconuts pour lancer des Coco Combos a un rythme delirant.",
                "C'est aussi un coconut catcher off-field : voir la section Technique pour les emplacements des catchers."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility : Guiding Star"
        },
        {
          t: "liste",
          v: [
            "Donne aux autres joueurs un bonus de <b>x1.25</b> en pollen et en capacite sur les champs ou elle est invoquee.",
            "Les alts utilisent ce passif d'amulette, associe a des abeilles boost-producers, pour faire apparaitre cette star dans le champ en cours de boost.",
            "Plusieurs alts avec des cooldowns desynchronises permettent de spammer les guides.",
            "Ca permet aussi de repartir les Fuzzies sur plusieurs comptes, mais c'est moins bon pour le RBC."
          ]
        }
      ]
    },
    {
      titre: "3.2 Balloon Alts",
      blocs: [
        {
          t: "comp",
          v: [
            {
              nom: "Solo Buoyant Alt",
              sous: "Sert de spammeur de ballons pour completer les autres alts.",
              ratio: "Ratio : 0 Fuzzy Bees / 36 Buoyant Bees",
              notes: [
                "Cette comp complete les comps multi-alts qui n'ont pas de Buoyants.",
                "Gifter les Buoyants permet de jouer Surprise Party, mais c'est tres inconstant et generalement pas rentable vu le cout et le lag. Les ballons sont aussi remplis instantanement, donc leur production de tokens est negligeable.",
                "En general, les alts Guide-Buo font mieux que cette comp pour le miel : garde-la comme solution temporaire pour les ballons."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility : Balloon Aura"
        },
        {
          t: "liste",
          v: [
            "Se tenir sous les ballons donne un buff d'aura, jusqu'a <b>x1.2 pollen</b> et <b>+20% Honey From Tokens</b> sur les ballons lances par les alts.",
            "Maintenir le maximum de stacks d'aura est difficile, mais environ <b>80 Buoyant Bees</b> repartis sur plusieurs alts on-field suffisent a tenir le max la plupart du temps.",
            "<b>~45</b> est la quantite recommandee pour maximiser les benefices.",
            "Ajouter 80 abeilles de plus sur le champ coute cher en lag."
          ]
        }
      ]
    },
    {
      titre: "3.3 Fuzzy Alts",
      blocs: [
        {
          t: "comp",
          v: [
            {
              nom: "Solo Fuzzy Alt",
              sous: "Privilegie la pollinisation plutot que la creation de guiding alts.",
              ratio: "Ratio : 24 Fuzzy Bees / 0 Buoyant Bees / 15 Boost Producers",
              notes: [
                "Tous les Fuzzy alts doivent jouer <b>Scorch + Guiding</b> ou <b>Shower + Guiding</b>.",
                "Toutes les abeilles sont gifted pour Inspire Coconuts, afin de lancer le Coconut Combo, si l'alt a une Coconut Belt.",
                "Ce Solo Fuzzy Alt ne devrait servir que si tu as peu d'alts, ou si tu veux centraliser les Fuzzies pour l'utilite en RBC. En boost, le Fuzzy-guiding fait presque toujours mieux."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility : Flower Pollination"
        },
        {
          t: "liste",
          v: [
            "Permet de faire monter les fleurs de tier inferieur jusqu'a des fleurs 5 etoiles, avec des Fuzzy Bees gifted.",
            "Il faut environ <b>24 Fuzzy Bees</b> pour polliniser entierement Spider / Coconut / Dandelion, ce qui varie selon le pattern et le lag."
          ]
        }
      ]
    },
    {
      titre: "3.4 Composite Alts",
      blocs: [
        {
          t: "comp",
          v: [
            {
              nom: "2 Guide-Fuzzy Alts",
              sous: "Duo pour une pollinisation complete avec des guides frequents.",
              ratio: "Ratio : 12 Fuzzy Bees (24 au total) / 0 Buoyant Bees / 27 Boost Producers",
              notes: [
                "La production d'Inspire est sacrifiee ici, mais peut etre reactivee pour le Coco Combo.",
                "Cette comp n'utilise pas de Buoyants : il est recommande de jouer plutot 1 Fuzzy + 2 Guide-Buo, 2 Guide-Fuzzy + 2 Buo-Guide, ou 3-4 Hybrid Alts."
              ]
            },
            {
              nom: "2 Guide-Buo Alts",
              sous: "A utiliser avec 1 fuzzy ou 2 hybrid alts.",
              ratio: "Ratio : 0 Fuzzy Bees / 22 Buoyant Bees (44 au total) / 17 Boost Producers",
              notes: [
                "Cette comp compte sur les autres alts pour la pollinisation : elle peut donc se consacrer entierement aux ballons, tout en faisant apparaitre des guiding stars souvent.",
                "Un troisieme exemplaire peut etre lance pour une meilleure Balloon Aura."
              ]
            },
            {
              nom: "3 Hybrid Alts",
              sous: "Laisse la place a 1 alt supplementaire de ton choix.",
              ratio: "Ratio : 8 Fuzzy Bees (24 au total) / 18 Buoyant Bees (54 au total) / 13 Boost Producers",
              notes: [
                "Bonne comp si tu fais tourner 3 alts clones. Avoir les abeilles aussi decentralisees est penible pour le RBC, mais ca fonctionne tres bien en boost.",
                "Les Balloon et les Boost Producers sont interchangeables."
              ]
            },
            {
              nom: "4 Hybrid Alts",
              sous: "Repartition complete des abeilles entre les alts.",
              ratio: "Ratio : 6 Fuzzy Bees (24 au total) / 20 Buoyant Bees (80 au total) / 13 Boost Producers",
              notes: [
                "Plus tu fais tourner de comps hybrides, plus elles sont difficiles a optimiser. Celle-ci est la comp 3 Hybrid Alts avec une pollinisation adaptee.",
                "Lancer davantage d'alts claimed est deconseille. Les Balloon et les Boost Producers sont interchangeables."
              ]
            }
          ]
        },
        {
          t: "p",
          v: "<b>Token Link Producers</b>, identiques sur les quatre comps : 4 Rage + 2 Paper Angel + 2 Paperclip + 1 Bead Lizard."
        }
      ]
    },
    {
      titre: "3.5 Gumdroppers",
      blocs: [
        {
          t: "liste",
          v: [
            "Il te faut <b>3-4 alts en gumdropping</b> pour maintenir la goo en permanence : c'est un gros buff au miel.",
            "Ca peut etre des alts on-field (Hybrid / Balloon / Fuzzy...) ou des amis et helpers.",
            "Les gumdroppers en trop peuvent choisir de ne pas claim leur ruche pour reduire le lag — en general quand ce sont d'autres joueurs, des alts peu developpes, ou que 4 ruches sont deja claimed.",
            "Ils doivent avoir un <b>Gummy Mask</b> et <b>900-1200 gumdrops</b> par boost.",
            "Chaque alt ou joueur a sa propre position et son propre pattern, pour couvrir entierement le champ."
          ]
        },
        {
          t: "note",
          v: "Le document source contient une image des <b>positions de gumdropping</b> dans le Pepper Patch, avec cinq points repartis sur le champ. Elle n'est pas encore reproduite ici."
        }
      ]
    },
    {
      titre: "4. Disambiguation",
      blocs: [
        {
          t: "h",
          v: "Event Bee Pollen > Bee Gather Pollen > Flame Pollen"
        },
        {
          t: "p",
          v: "L'<b>EBP</b> buffe directement les Digital Smileys, contrairement au <b>BGP</b>. Comparaison EBP vs BGP sur la <b>Cog Amulet</b>."
        },
        {
          t: "liste",
          v: [
            "Sources de BGP en stickers : 2% Bee Gather Voucher, 2% Pale Heart, 2% Rhubarb, 2% Orphan Dog, 3% Critter in a Stocking, 10% pour les 5 Critters, 20% Stack Badge - Master.",
            "Sources d'EBP en stickers : 2% Bear Bee Offer, 2% Grey Diamond Logo, 2% Shiitake Mushroom, 2% Flying Bear Bee, 2% Nessie.",
            "Autres sources de BGP : 70% via la SSA, et les Poinsettias. Autres sources d'EBP : aucune.",
            "Hypotheses de calcul : BGP des Poinsettias a 0%, BGP de la SSA a 0% ou 70% uniquement, Sticker Stack au maximum, et x2 BGP Voucher / WGA / RGA / Mutations GA non pris en compte."
          ]
        },
        {
          t: "tab",
          v: {
            cols: [
              "Calcul",
              "Hors Beesmas",
              "Pendant Beesmas"
            ],
            rows: [
              [
                "Base BGP + stack (BAR SSA)",
                "141%",
                "206%"
              ],
              [
                "Base BGP + stack (BGP SSA)",
                "211%",
                "276%"
              ],
              [
                "Base EBP + stack",
                "108%",
                "138%"
              ],
              [
                "Apport de la Cog sur le BGP (0% BGP SSA)",
                "x1.21",
                "x1.17"
              ],
              [
                "Apport de la Cog sur le BGP (70% BGP SSA)",
                "x1.14",
                "x1.12"
              ],
              [
                "Apport de la Cog sur l'EBP",
                "x1.185",
                "x1.17"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "Hors Beesmas : avec une <b>BAR SSA</b>, 21/18.5 = <b>x1.13</b> ; avec une <b>BGP SSA</b>, 18.5/14 = <b>x1.32</b>. L'EBP sur la Cog est donc meilleur.",
            "Pendant Beesmas, le BGP et l'EBP gagnent respectivement 35% et 10% supplementaires.",
            "Pendant Beesmas : avec une <b>BAR SSA</b>, 17/17 = <b>x1.00</b>, donc EBP ou BGP sur la Cog revient exactement au meme ; avec une <b>BGP SSA</b>, 17/12 = <b>x1.417</b>, l'EBP est nettement meilleur."
          ]
        },
        {
          t: "h",
          v: "Le Super-Crit Power vaut mieux que le Crit Power sur le Kazoo"
        },
        {
          t: "liste",
          v: [
            "Un guide precedent concluait qu'1% de SCP valait environ 1.8% de Critical Power. Ce calcul se basait sur les <b>White Hives</b> et ne tenait pas compte des changements dans les pourcentages du stack de stickers. En <b>Red</b>, 1% de SCP vaut plus que 1.8% de C.Power.",
            "Sources de SCP en stickers : 1% pour chacun de Precise Eye, Squashed Head Bear, Stretched Head Bear, Purple Fleuron, Royal Symbol, Royal Bear et 4-Point Flower.",
            "Sources de Crit Power en stickers : 1% pour chacun de Wobbly Looker Bee, Tabby From Behind, Uplooking Bear, Wishbone, Triple Exclamation, Eight Note, Green Circle, Interrobang Block et Taunting Doodle Person ; 2% Blue Square ; 3% Black Diamond.",
            "Autres sources de SCP : 200% de stat de base, 25% Cog Amulet, et 5% suppose sur les Pink Shades. Total : <b>237%</b>.",
            "Autres sources de Crit Power : 200% de stat de base, 100% Cobalt Guard, 100% GM Battle Badge, 100% Melody, 50% Gifted Tabby, 50% Ant Amulet. Total : <b>613%</b>.",
            "Sources de SCC : 20% Precision, 21% Precise Marks, 3% Gifted Precise, 1% Super Smoothie, et 1% suppose sur les Pink Shades. Le Crit Chance n'entre pas en jeu ici.",
            "1% de Crit Power affecte tous les crits, normaux et super, a hauteur de (1 / crit power de base). 46% de ces coups critiques sont des Super-Crits, avec un impact de 237% : [(1/613) x 0.54] + [(1/613) x 0.46 x 2.37] = 0.00265938009.",
            "1% de SCP n'affecte que les Super-Crits, a hauteur de (1 / SCP de base) : [(1/237) x 0.46 x 2.37] = 0.0046.",
            "0.0046 / 0.0025187602 = 1.734621063, soit <b>1% SCP = 1.73% de C.Power</b> seulement.",
            "Mais les Red Hives ont les <b>Dark Flames</b>. En supposant x20 stacks de Dark Heat, soit x2 Super-Crit Power : [(1/613) x 0.54] + [(1/613) x 0.46 x 2.37 x 2] = 0.00443784665, et [(1/237) x 0.46 x 2.37 x 2] = 0.0092.",
            "0.0092 / 0.00443784665 = 2.0730774913, soit <b>1% SCP = 2.07% de C.Power</b> en ruche rouge."
          ]
        },
        {
          t: "h",
          v: "Pourquoi le SCC vaut mieux que le SCP"
        },
        {
          t: "liste",
          v: [
            "On suppose 0% SCC et 0% SCP sur les Pink Shades.",
            "Sources de SCC : 20% Precision, 21% Precise Marks, 3% Gifted Precise, 1% Super Smoothie. Total : <b>45%</b>.",
            "Sources de SCP : 200% de stat de base, 25% Cog Amulet, 7% de Sticker Stack au maximum. Total : <b>232%</b>.",
            "45% des coups critiques sont des Super-Crits avec un impact de 232%, soit (0.45 x 232%) = <b>104.4%</b> de plus sur les coups critiques.",
            "Avec 1% de SCC en plus, a SCP constant : (0.46 x 232%) = <b>106.72%</b>.",
            "A SCC constant, il faudrait 0.45 x SCP = 106.72, soit SCP = <b>237.16</b>.",
            "237.16% - 232% = <b>5.16%</b> : il faut donc 5.16% de SCP pour valoir 1% de SCC."
          ]
        },
        {
          t: "h",
          v: "Pourquoi le Camphor Lip Balm reste meilleur qu'un Rose Headband charge en stats"
        },
        {
          t: "liste",
          v: [
            "La valeur de <b>x1.08 PPP</b> parait faible, mais elle est nettement plus forte que les +20% Rose Field Pollen du Rose Headband : le PPP est un modificateur multiplicatif applique au total du field pollen.",
            "Le hive bonus PPP du beequip est un multiplicateur, pas un additif : contrairement au +% Field Pollen, il n'est pas dilue par les autres sources de field pollen.",
            "Hypotheses : Lip Balm de x1.05 a x1.08 Pepper Patch Pollen, Headband a +20% Rose Field Pollen (le +% RFCap n'est pas compte), Field Winds a x6, x10 et x12 pour l'exemple, et le stack Field Stamps compte pour 10% de Field Pollen."
          ]
        },
        {
          t: "tab",
          v: {
            cols: [
              "Field Winds",
              "Pepper Patch",
              "Rose Field"
            ],
            rows: [
              [
                "x6",
                "43%",
                "49%"
              ],
              [
                "x10",
                "55%",
                "65%"
              ],
              [
                "x12",
                "61%",
                "73%"
              ]
            ]
          }
        },
        {
          t: "tab",
          v: {
            cols: [
              "Field Winds",
              "Pepper x Camphor Lip Balm",
              "Rose x Rose Headband (20%)"
            ],
            rows: [
              [
                "x6",
                "453% donne 475.65% (x1.05) / 480.18% (x1.06) / 484.71% (x1.07) / 489.24% (x1.08)",
                "459% donne 479%"
              ],
              [
                "x10",
                "465% donne 488.25% / 492.9% / 497.55% / 502.2%",
                "475% donne 495%"
              ],
              [
                "x12",
                "471% donne 494.55% / 499.26% / 503.97% / 508.68%",
                "483% donne 503%"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "Un CLB a <b>x1.06 PPP</b>, le minimum demande par le guide, fait deja mieux qu'un Rose Headband a 20% avec des Field Winds x6, ce qu'on obtient habituellement en donnant des Atomic Treats.",
            "L'ecart se creuse ensuite, puisque le PPP est multiplicatif la ou le field pollen du Headband est additif.",
            "Le x1.0* PPP du CLB scale aussi mieux que n'importe quel +% SCP d'un autre beequip, ce dernier dependant du RNG du +% SCC.",
            "Le Rose Headband ne devient meilleur que si on compte le <b>+50% RFP</b> de la Galentine's Blessing. Encore faudrait-il modifier la ruche, et ca depend beaucoup du niveau du joueur : Rose a une mauvaise visibilite, et sa taille rend les marks plus difficiles a relier, ce qui demanderait plus de Vector / Carpenter."
          ]
        }
      ]
    },
    {
      titre: "5. FAQ",
      blocs: [
        {
          t: "etapes",
          v: [
            {
              t: "Pourquoi le switch vers le Red coute-t-il autant de miel ?",
              d: "Le Red depend du gifting de ses abeilles plus encore que le Blue. Buoyant et Tadpole sont les deux Mythics dont l'ability reservee au gifted est la moins importante pour leur couleur : une ruche rouge, elle, a besoin que toutes ses abeilles soient gifted. En plus, roll la SSA coute cher — vise un amulet Scorch-Saw avec les meilleures stats possibles, car tu n'auras plus aucune source passive de miel apres le switch."
            },
            {
              t: "Que faire pendant un boost quand le stack de Precision tombe ?",
              d: "En dehors du Scorch, essaie de retarder le Scorch pendant que tu remontes la Precision. Pendant le Scorch, continue a declencher les Precise Marks normalement : la Precision remonte passivement en touchant les trois targets."
            },
            {
              t: "Peut-on faire apparaitre des marks a des endroits precis du champ ?",
              d: "Le Target Practice a tendance a graviter vers les quatre coins du champ et tire vers le cote oppose. Par exemple, pour que les Precise tirent des targets en bas a gauche, place-toi en haut a droite au moment de les activer. Les autres marks apparaissent au hasard et sont impossibles a controler."
            },
            {
              t: "Combien faut-il faire par boost ?",
              d: "C'est difficile a estimer, ca depend enormement du niveau. Une bonne ruche rouge devrait au minimum atteindre 1QD par boost, mais il est plus utile de chercher ce qui se passe mal dans le boost et de perfectionner le compte que de fixer un chiffre. Enregistrer ses boosts et les revoir ensuite aide beaucoup a identifier les problemes."
            },
            {
              t: "Le Red, c'est fun ?",
              d: "C'est la couleur la plus polyvalente des trois en termes d'activites : Puffshroom Runs, Retro Swarm et RBC se font sans changement majeur de la ruche, la ou le White et le Blue doivent adapter la leur et s'en sortent moins bien."
            },
            {
              t: "Pourquoi mes boosts sont-ils mauvais ?",
              d: "Le Red demande beaucoup de technique. Comprendre les mecaniques et les timings est indispensable, et les 5 a 10 premiers boosts se passeront tres mal, le temps d'apprendre a gerer tous les uptimes de buffs et la collecte de pollen. Avec de l'entrainement, tout le monde progresse. Tu peux t'entrainer sans consommer de materiaux, en laissant la Spicy Bee convertir le fill du sac, juste pour travailler la gestion des buffs."
            }
          ]
        }
      ]
    },
    {
      titre: "Credits",
      blocs: [
        {
          t: "p",
          v: "Ce guide est l'adaptation francaise de <b>The Definitive Red Hive Guide</b>, ecrit par <b>riot003</b> et <b>anthrox0</b>, publie par l'<b>Abyssal Trench Network</b>. Derniere mise a jour du document source : 3 avril 2026."
        },
        {
          t: "liste",
          v: [
            "Redaction originale : <b>riot003</b> et <b>anthrox0</b>.",
            "Relecture : <b>@stingerabbasiii</b>, <b>@ashirymafik</b>, <b>@veterul</b>.",
            "Spreadsheets, outils et guides de reference : <b>Abyssal Trench Network</b>.",
            "Valeurs des signes : <b>Tabby V</b>. Stats des beequips : <b>Beequip Spreadsheet</b>."
          ]
        }
      ]
    }
  ],
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
