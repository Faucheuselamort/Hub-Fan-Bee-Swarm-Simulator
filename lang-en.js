/* ============================================================
   LANG-EN.JS — every text on the site, in English
   ------------------------------------------------------------
   This file holds TEXT ONLY. The code lives in app.html.
   Its French twin is lang-fr.js: same keys, same structure.
   When you add a section there, add it here too.
   ============================================================ */

window.LANGUES = window.LANGUES || {};
window.LANGUES.en = window.LANGUES.en || {};
var LANGUES = window.LANGUES;

/* ---------- Interface labels ---------- */
LANGUES.en.T = {
  guide_intro   : "Progression paths, sorted by hive colour. Pick a route to see the recommended steps.",
  guide_Incolore: "The all-round hive, with no colour focus.",
  guide_Red      : "The red hive route.",
  guide_Blue    : "The blue hive route.",
  guide_White   : "The white hive route.",
  guide_vide    : "The <b>%s</b> section is ready but still empty.",
  section       : "section",
  sections      : "sections",
  langue_autre  : "Français",
};

/* ---------- Guide content ---------- */
LANGUES.en.GUIDE = {
  "Incolore": [],
  "Red": [],

  "Blue": [

    { titre:"1.1 Hive Composition", blocs:[
      { t:'p', v:"There are <b>3 main stages</b> a Blue Hive goes through in its playtime." },
      { t:'note', v:"The beequips shown on the example hives are <b>example beequips</b>: you don't have to run the same ones." },
      { t:'h', v:"Stage 1 \u2014 Transition Blue" },
      { t:'comp', v:[
        { nom:"Transition Blue", sous:"The hive you use to get from Midgame (SSA) to unlocking RBC, and getting familiar with it.",
          ratio:"Ratio: 16 Buoyants / 10 Tadpoles (5 gifted) / 3 Diamonds",
          notes:[
            "If you aren't yet comfortable with RBC, read section 4. Boosting Guidance.",
            "Transition to <b>Blessing Boost Blue</b> before boosting, to aim for an 80x+ blessing.",
            "This comp can also be used if you're unable to maintain your blessing.",
            "It's a honeymaking hive that isn't reliant on a high blessing. The lower Diamond count also allows for more flexible comps: you'll attain a 400+ score in the Ant Challenge faster, reach the Diamond Stick Bug Amulet with more ease, do Puffshroom runs with better results, and complete Robo Bear Challenge runs quicker.",
            "You'll still be able to do all of this with more Diamonds, it may just be <b>slightly</b> more challenging.",
          ]},
      ]},
      { t:'h', v:"Stage 2 \u2014 Blessing Boosting Blue" },
      { t:'comp', v:[
        { nom:"Blessing Boosting Blue", sous:"Used solely to increase your blessing when RBC boosting as blue, through Buoyant spam.",
          ratio:"Ratio: 25 Buoyants (16 gifted) / 9 Tadpoles",
          notes:[
            "Extra Buoyants are added temporarily and can remain ungifted while boosting.",
            "This assumes you'll be able to fill all balloons while boosting. If you can't take advantage of every balloon, add filling bees back in this order: <b>Fuzzy (solo) > Cool > 1-3 Tadpoles > Looker > any other gifted blue type</b>.",
            "If you're unable to <b>maintain</b> your blessing for long periods, switching to this comp is unnecessary: a standard blessing boost of 50-60x is enough before starting a macro session.",
            "If you've already boosted with this comp and attained an 80x+ blessing, switching back isn't required.",
          ]},
      ]},
      { t:'p', v:"Once you've done a blessing boost for <b>x80+</b>, you can decide: try for a better blessing (x90-x100), or switch to <b>Honeymaking Blue</b>." },
      { t:'h', v:"Stage 3 \u2014 Honeymaking Blue" },
      { t:'comp', v:[
        { nom:"Full Diamond Comp", sous:"For those who can maintain 80x+.",
          ratio:"Ratio: 14 Buoyants / 8 Tadpoles / 10 Diamonds" },
        { nom:"Semi Diamond Comp", sous:"For those who can't maintain 80x+.",
          ratio:"Ratio: 15 Buoyants / 10 Tadpoles / 6 Diamonds" },
      ]},
      { t:'h', v:"Honeymaking Blue goals" },
      { t:'etapes', v:[
        { t:"Balloons", d:"Have 16 Buoyants, or 15 Buoyants plus Digi." },
        { t:"Filling", d:"Be able to fill those balloons, with bees, amulets and beequips." },
        { t:"Tokens", d:"Maintain good token uptime." },
        { t:"Diamonds", d:"Any slots beyond that go to Diamond Bees. Place them in the middle of the hive, using the comp placement as a model, and give them any beequips with a convert% green stat." },
      ]},
      { t:'p', v:"Honeymaking Blue, also known as <b>Diamond Comp</b>, is what a real Blue Hive looks like. Contrary to popular belief, it is not level-restricted: the only barriers to running it are having a sense of fill and enough blessing (x80+)." },
      { t:'liste', v:[
        "<b>Diamond Bees</b> are used for their <b>Shimmer</b> passive, which significantly multiplies honey through the Hive% stat.",
        "By <i>sense of fill</i>, we mean running tests to see whether you can remove fill bees to free slots, without reaching the point where you underfill (see 1.2 Hive Editing).",
        "Alts aren't required for a full diamond comp, but they're heavily recommended: Tad alts provide a good chunk of fill (Tad sync, 250+ pops per Popstar).",
        "Starting out, do <b>not</b> use 10 Diamonds, as you'll strongly underfill. Work your way up from 7 until you reach a comfortable place of fill.",
        "It's strongly recommended to build tad alts while being Honeymaking Blue, as tad sync will 2-3x your hourly and greatly alter your fill, though it isn't a hard requirement for the transition.",
      ]},
      { t:'p', v:"The alternative to Full Diamond Comp is the <b>Semi Diamond Comp</b>, where the requirements for transition are essentially null: no blessing to maintain, no level requirement, no particular fill capability." },
      { t:'liste', v:[
        "That said, Semi Diamond becomes considerably stronger with good nectars (3-4 maxed), a decent Gold Cog (with BP and Bubble Pollen) or a Diamond Stick bug amulet (with high BP), and preferably a 55x+ blessing (see 4.3 Mini Blessing).",
        "If you <b>underfill</b>, remove Buoyants in place of Diamonds; if you <b>overfill</b>, remove Tadpoles in place of Diamonds. Remember to stay above <b>7 Tadpoles</b> and <b>14 Buoyants</b> (see 2.3 Hourly Report).",
        "When a Honeymaking Blue loses its blessing, it can go back to Blessing Boost Blue to try for 80x+, or stay as it is if it doesn't plan to do honey for a while. You can still transition to Blessing Boost Blue while retaining some Diamonds with high <b>Convert%</b> mutations.",
      ]},
      { t:'h', v:"Extra \u2014 Honeyday Blue (4x Macroing)" },
      { t:'comp', v:[
        { nom:"Honeyday Blue", sous:"A Honeyday comp, built for 4x macroing.",
          ratio:"Ratio: 16 Buoyants / 6 Tadpoles / 14 Diamonds",
          notes:[
            "During <b>Honeyday</b> (a 48-hour buff that gives 2x pollen and 2x convert rate), blue hives utilise the buff by setting their macro to auto-boost <b>Pine Tree for 4x</b>.",
            "This comp can also be used outside of HD when 4x macroing, but be wary of the high cost of maintaining the boost.",
            "If you're still in Transition Blue, simply remove fill bees for more Buoyants and Diamonds.",
          ]},
      ]},
    ]},

    { titre:"1.2 Hive Editing", blocs:[
      { t:'note', v:"It's highly recommended that you understand the <b>3 Stages of Blue</b>, as they're referenced throughout this guide. If you've just become blue, only read the <b>Transition Blue</b> instructions. Underfilling versus overfilling is explained in section 2.3." },
      { t:'h', v:"Bee classes" },
      { t:'p', v:"A <i>class</i> is a role a bee can provide to the hive. For example: <b>Shocked</b> = Token Link and Haste Producer; <b>Looker</b> = Fill Bee and Focus Producer." },
      { t:'liste', v:[
        "One bee can provide multiple roles, however some bees are more efficient at completing those roles than others (Looker is a faster focus producer than Commander).",
        "Bee classes are ordered from <b>T0</b> (most efficient) to <b>T5</b> (least efficient), so use these to decide what bees to keep or remove.",
        "This list is not exhaustive, however the major changes to a Blue hive are listed.",
        "Classes exclude bees that are deemed necessary by default: <b>Festive, Bear, Digital, Windy and Diamond</b>.",
      ]},
      { t:'tab', v:{ cols:["Class","Recommended amount","T0","T1","T2","T3","T4","T5"], rows:[
        ["Fill Bee <span style=\"opacity:.7\">(they collect pollen)</span>","Regulate based on fill","Tadpole, Bubble","Cool, Tabby","Basic, Fuzzy (solo)","Cobalt","Frosty, Vicious, Fuzzy (with people)","Looker, Commander, Lion, Shy"],
        ["Token Link Producer","4-6","Music (really versatile)","Exhausted","Bead Lizard on any bee, Shocked","Paperclip on any bee","Paper Angel Photon","Paper Angel Shy"],
        ["Focus Producer","~5","Reindeer Antlers Puppy, Music (versatile)","Looker, Pink Shades on any bee","Commander","\u2014","\u2014","\u2014"],
        ["Haste Producer","2-3","Hasty","Toy Drum Bucko, Ninja","Whistle Cool","Shocked, Toy Drum on any other bee","Photon","\u2014"],
        ["Melody Producer","3-4","Melody Bracelet Diamond, Melody Whistle Cool, Music (versatile)","Melody Whistle Commander","Kazoo, Toy Horn Cobalt","Toy Horn on any other bee","\u2014","\u2014"],
        ["Capacity Buffer","As many as possible, regardless of fill","Pinecone on any bee, Bucko, Bumble","Autumn Sunhat, Rose Headband, Reindeer Antlers Puppy, Snow Tiara, Exhausted","Buoyant (usefulness diminishes as you get more)","Other capacity-buffing beequips (Berets, Tree hats, etc.)","Cobalt (drains your bag)","\u2014"],
      ]}},
      { t:'liste', v:[
        "<b>Token Link</b> provides the strongest source of token uptime.",
        "Recommended capacity ratio: <b>15 Buoyants + Digi</b>, or <b>16 Buoyants</b>.",
      ]},
      { t:'h', v:"Extra \u2014 the Stubborn Bee" },
      { t:'liste', v:[
        "Stubborn can be good, but you have to test it yourself, since it's really just a player's choice.",
        "If you have a high number of Token Link Producers, or 5%+ Token Lifespan on your cog amulet, or you're running Paperclips with high Token Lifespan, you can consider removing it from your hive or substituting it for <b>Hasty</b>.",
        "However, Stubborn's usefulness increases for high drive Digital comps (max coloured, 100+ glitched).",
      ]},
      { t:'h', v:"Hive adjustments \u2014 Baseline Blue" },
      { t:'comp', v:[
        { nom:"Baseline Blue", sous:"All bees in this comp are the bare minimum for a Blue hive.",
          ratio:"16 Buoyant \u00b7 10 empty \u00b7 7 Tadpole \u00b7 4 Music",
          notes:[
            "The rest, one of each: Exhausted, Stubborn, Bubble, Bumble, Bucko, Cool, Ninja, Windy, Basic, Bear, Diamond, Festive, Tabby.",
          ]},
      ]},
      { t:'h', v:"Possible substitutions" },
      { t:'liste', v:[
        "<b>Digital</b> with max coloured drives should replace 1 Buoyant.",
        "<b>6 Tadpoles</b> can be run with 1500+ Polar.",
        "<b>Buoyants</b> should be removed if you underfill, or as you get capacity upgrades. Never go above 18 or below 14 Buoyants.",
        "<b>Tabby, Basic and Cool</b> can be removed during HD or 4x boosting.",
        "<b>Hasty</b> can be a substitute for Stubborn: test it for yourself.",
      ]},
      { t:'h', v:"Free slot utilisation" },
      { t:'liste', v:[
        "<b>Diamond</b> should always fill any free slots not being actively utilised: for example, Buoyants when underfilling.",
        "Up to <b>12 Tadpoles</b> can be used if you underfill.",
        "<b>Puppy</b> should always be run if you have Reindeer Antlers, or are level 15+.",
        "<b>Gummy</b> is only run at over 13 or under 6 Diamonds.",
        "<b>Looker</b> should be added for focus uptime and a minor buff to fill. <b>Commander</b> can be run if focus uptime is still not perfect. As a baseline, ensure you have <b>6 total producers</b>, then adjust: 4 Music, Looker, Commander or Puppy Antlers.",
        "<b>1-2 Fuzzies</b> must be run if you don't have access to alts with Fuzzies for pollination.",
        "<b>3-4 Babies</b> must be used for Baby Love uptime if you have no gifted Tadpoles: you can remove 1 Baby for every Tadpole you gift.",
      ]},
      { t:'note', v:"<b>Do not run Shy / Lion / Frosty / Cobalt.</b> A Diamond will always provide more honey for that slot." },
      { t:'liste', v:[
        "There are a lot of changes you can make to a blue hive, too many to summarise: <b>experiment</b> and see what works best for you.",
        "Keep in mind that as you improve your amulets, beequips and hive, you may need to change your hive composition.",
      ]},
    ]},

    { titre:"1.3 Mutations", blocs:[
      { t:'h', v:"Key of mutations" },
      { t:'liste', v:[
        "<b>BMS</b> = Bee Movement Speed, up to +5.",
        "<b>BAR</b> = Bee Ability Rate, up to +4%.",
        "<b>CA / Convert</b> = Convert Amount, up to +28%.",
        "<b>GA / Gather</b> = Gather Amount, up to +28%.",
      ]},
      { t:'h', v:"Important notes" },
      { t:'liste', v:[
        "+6 BMS, +5% BAR and +29-30% CA or GA are <b>possible</b>, but extremely rare to find and not worth expecting. Convert and Gather mutations should always be <b>+% and not +#</b>.",
        "Mutations on <b>Rare, Epic and Legendary</b> bees should be rolled with <b>Royal Jelly</b> instead of bitterberries. You can then gift them with fruits, making sure they aren't radioactive while feeding, as that may roll the mutation off.",
        "You <b>can</b> also roll mythic mutations with RJ, but the cost will be insane: 872T+ per unique mythic with either BMS or BAR, reserved for lvl 21+.",
        "If you don't plan to stay blue long-term, don't bother with mutations on mythics. With that said, mutating Musics, Diamonds and event bees temporarily may be worth getting regardless.",
        "<b>Bitterberry</b> mutation order: Diamonds > Bear > Tadpoles > Event Bees > Buoyants. Initially, low CA% mutations on Diamonds can be obtained through bitterberries, then switch to RJ and blueberries once looking for higher mutations.",
        "<b>RJ</b> mutation order: Diamonds > Bubble > Musics > Haste and Focus Producers > remaining Rares, Epics and Legendaries. Priority: <b>blue</b> = highest priority (get at lvl 18), <b>red</b> = high priority, <b>orange</b> = lower priority. All other Rares, Epics and Legendaries can be gotten at any time past lvl 18, so be wary of fruit cost.",
      ]},
      { t:'h', v:"Optimal mutation per bee" },
      { t:'tab', v:{ cols:["Mutation","Bees"], rows:[
        ["BMS","Tadpole, Music, Buoyant, plus all other Rare, Epic and Legendary"],
        ["BAR","Cool, Puppy, Tabby, Rage, Gummy, Commander"],
        ["CA / Convert%","Diamond"],
        ["GA / Gather%","Basic (for better smiley pollen during active play)"],
      ]}},
      { t:'liste', v:[
        "<b>Buoyant, Tabby and Festive</b> should NOT hold CA% mutations, as it steals convert opportunities from Diamonds.",
        "This table shows the <b>optimal</b> mutation. For most bees whose mutations are rolled with bitterberries, BMS and BAR are interchangeable: if you get +4 BMS on Tabby, move on to mutating another bee instead of rolling for BAR.",
        "This does not apply to bees you mutate with RJ: don't settle for BAR on Cool, as it isn't worth the cost of blueberries to gift.",
        "<b>Tadpoles</b> specifically want BMS above anything else, due to both the high amount of tokens they have and their low base movespeed. Do not settle for BAR on Tadpoles under any circumstance.",
      ]},
    ]},

    { titre:"1.4 Beequips", blocs:[
      { t:'p', v:"Beequips are one of the most important parts of a good hive: they provide unmatched buffs to fill, token uptime, capacity and general honey-making." },
      { t:'liste', v:[
        "Currently only <b>13 slots</b> are available, which is why each slot must bring something valuable to your hourly. <b>14 and 15 slots</b> are possible if you completed Bee Bear's 2020 Beesmas quest, which may allow different comps to become viable that otherwise wouldn't work.",
        "You can find specific stats on beequips in the <b>Beequip Spreadsheet</b>: keep in mind that <i>weight</i> is not the same thing as CHANCE.",
      ]},
      { t:'h', v:"Mandatory beequips" },
      { t:'tab', v:{ cols:["Beequip","Approx. cost","Where to get it","Stats to look for","Run on"], rows:[
        ["2 Pinecones \uD83C\uDF84","2 signs","Stickbug / Catalogue","The most important beequip for a Blue Hive: use any extra signs on it. <b>+% Pine Tree Forest Capacity</b> and <b>Pollen</b>.","Bear + Bumble"],
        ["2 Elf Caps \uD83C\uDF84","0-4 signs","Easily waxable from Bugs / Stockings","Very cheap and a great buff to HaH for Diamonds. Needs <b>+% HaH</b> (HB) to run.","2 Diamonds, or Tabby + Buoyant"],
        ["Camphor Lip Balm","0-1 sign","Dapper Shop / Ant challenge","One of the main sources of fill for Blue, invaluable. Needs high <b>+% Bubble Pollen</b> and <b>+% Gold Bubble Pollen</b> (Caustic only). GBP becomes more valuable with alts (2BP : 1GBP).","Bubble"],
        ["Candy Ring","0-1 sign","Dapper Shop / Gummy bear quest","Amazing boost to HaH for all Diamonds, and a great convert rate buff. <b>+% HaH</b> (HB) and <b>+%CA</b>.","Diamond / Festive"],
        ["Snow Tiara \uD83C\uDF84","1 sign","Trade / Catalogue","Invaluable buff to cap, with a nice bonus to convert. Prioritise high <b>Blue Field Capacity</b> (HB) and <b>+%CA</b>.","Diamond"],
      ]}},
      { t:'h', v:"Recommended beequips" },
      { t:'tab', v:{ cols:["Beequip","Approx. cost","Where to get it","Stats to look for","Run on"], rows:[
        ["Toy Drums \uD83C\uDF84","0.25-1 sign","Can be traded for cheap","Great for haste uptime, amazing with BAP. <b>+Haste</b>, <b>+%BAP</b> (HB).","Bucko"],
        ["Rose Headband","0-1 sign","Dapper Shop","Decent buff to cap, insane convert rate boost. <b>+Capacity</b> (HB), <b>+%CA</b>.","Diamond"],
        ["Autumn Sunhat","0-1 sign","Dapper Shop / traded","Valuable buff to cap, good convert rate bonus. <b>+Capacity</b>, <b>+% White Field Capacity</b> (HB), <b>+%CA</b>.","Diamond"],
        ["Reindeer Antler \uD83C\uDF84","1-3 signs","Can be traded for a reasonable price","Great buff to capacity and focus uptime. <b>+Focus</b>, <b>+Reindeer Fetch</b>, <b>+%Capacity</b>.","Puppy"],
        ["Bead Lizard","1 sign","5th Dapper slot / traded for cheap","Great for token uptime, essential with Bub%. Needs <b>+Token Link</b> (Caustic only). <b>+% Bubble pollen</b> (HB) and <b>+%BAP</b> (HB, Caustic only) are optional.","Basic"],
      ]}},
      { t:'liste', v:[
        "Sign costs are calculated as the bare minimum: if you have extra signs, feel free to look for better stats on high-value beequips, such as a higher cap on the Pinecone.",
        "The <b>Tabby V Value List</b> documents all known values, in signs.",
      ]},
      { t:'h', v:"The remaining slots" },
      { t:'p', v:"In total these <b>12 beequips</b> are run for a standard Honeymaking Blue, leaving 1 to 3 extra slots that can be unique to each player's use case:" },
      { t:'liste', v:[
        "<b>Paperclip</b> \u2014 gives TL and ATL (decently common), run on Looker or any available rare or epic. <span style=\"opacity:.65\">[early-game option]</span>",
        "<b>Whistle</b> \u2014 gives +Haste, run on Cool. <span style=\"opacity:.65\">[early-game option]</span>",
        "<b>1-3 Tree hats</b> \uD83C\uDF84 \u2014 give +Cap and CRaH, run on Diamonds. <span style=\"opacity:.65\">[placeholder for more expensive options]</span>",
        "<b>1-2 Berets</b> \u2014 give +%Blue Field Cap, +Cap and +%Cap, run on Diamonds. <span style=\"opacity:.65\">[end-game option]</span>",
        "<b>Charm Bracelet</b> \u2014 can give +Melody and +%HaH, run on Diamond. <span style=\"opacity:.65\">[end-game option]</span>",
        "<b>Festive Wreath</b> \uD83C\uDF84 \u2014 needs +2% HaH (extremely rare), run on Festive. <span style=\"opacity:.65\">[end-game option]</span>",
      ]},
      { t:'note', v:"Generally, start with <b>1 to 3 Tree hats</b>, then remove them for the <b>Festive Wreath + 2 Berets</b>. This might take you a while." },
    ]},

    { titre:"1.5 Amulets", blocs:[
      { t:'h', v:"Key of stats" },
      { t:'liste', v:[
        "<b>Blue</b> \u2014 most important stat, required for the amulet.",
        "<b>Green</b> \u2014 good stat, should be sought after.",
        "<b>Orange</b> \u2014 filler stat, decent buff.",
        "<b>Red</b> \u2014 hurtful, avoid entirely.",
        "Any stat not listed doesn't matter.",
      ]},
      { t:'p', v:"The <b>Blue Hive Amulet Heatmap</b> by @riot003 rates each stat from 1 to 5: <b>1</b> = most optimal stat, really important on the amulet; <b>2</b> = good stat, pretty good to have; <b>3</b> = filler stat, consider taking but not a priority; <b>4</b> = no reason to get it, bad idea to run if it's replacing something better; <b>5</b> = hurtful, avoid at all costs; <b>-</b> = doesn't matter either way." },
      { t:'h', v:"Star Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>BP = CR > BAR > CC = Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Blue Pollen (BP)","+70%","Required"],
        ["Convert Rate (CR)","1.25x","Required"],
        ["Bee Ability Rate (BAR)","+7%","Good"],
        ["Critical Chance (CC)","+7%","Good"],
        ["Pollen","+20%","Good"],
      ]}},
      { t:'liste', v:[
        "A <b>5/5 solo Popstar</b> can be replaced with a <b>3/5 double passive</b> (with CR and BP) or a <b>4/5 double passive</b> (with BP or CR).",
        "Any solo Popstar below 5/5 can always be replaced by any double passive, even with low stats.",
        "The second passive can be either <b>Star Shower</b> or <b>Guiding Star</b>, as both give 1.25x capacity.",
      ]},
      { t:'h', v:"Ant Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>BP = CC = CPower > PMS > WP</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Critical Chance (CC)","+3%","Required"],
        ["Critical Power (CPower)","+50%","Required"],
        ["Blue Pollen (BP)","+30%","Required"],
        ["Player Movespeed (PMS)","+3","Good"],
      ]}},
      { t:'liste', v:["Player Movespeed, Pollen and Bee Attack are all similar, so a higher BP, CC or CPower matters more. Same with White pollen versus Red pollen."] },
      { t:'h', v:"Stickbug Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>BP > %BA > BBA > BA; CR</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Convert Rate","1.25x","Guaranteed with score"],
        ["Blue Pollen (BP)","+30%","Required"],
        ["Blue Bee Attack (BBA)","+2","Good"],
        ["Monster Respawn Time / Bee Attack","-10% / +1","Good"],
        ["Blue Bomb Pollen / Bomb Pollen","+30% / +15%","Filler"],
      ]}},
      { t:'liste', v:["BA can be replaced by MRT when trying to maintain the stack with tickets."] },
      { t:'h', v:"Moon Amulet \u2014 4/4" },
      { t:'p', v:"Priority: <b>HPP > BFT >> Ticket Chance; Cap</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Capacity","+250k","Guaranteed after 11 replaces"],
        ["Honey Per Pollen (HPP)","+8%","Required"],
        ["Bond from Treats (BFT)","+10%","Good"],
        ["Ticket Chance","+5%","Filler"],
        ["Movement collection","\u2014","DO NOT RUN: destroys flowers"],
      ]}},
      { t:'liste', v:["Ticket Chance is extremely rare and only optional, to help maintain the sticker stack when macroing. Always prioritise higher HPP and BFT."] },
      { t:'h', v:"Cog Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>Bub > BP > ATL > BIC = BBA / BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Bubble Pollen (Bub)","+30%","Required"],
        ["Blue Pollen (BP)","+30%","Required"],
        ["Ability Token Lifespan (ATL)","+10%","Good"],
        ["Instant Blue Conversion (BIC)","+5%","Filler"],
        ["Blue Bee Attack / Bee Attack","+2 / +15%","Filler"],
      ]}},
      { t:'liste', v:["If you can't consistently beat R25, settling with the <b>Diamond Cog</b> is fine."] },
      { t:'h', v:"King Beetle Amulet \u2014 4/4" },
      { t:'p', v:"Priority: <b>CR > BA > Bamb% > any other field%</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Convert Rate","+100%","Guaranteed"],
        ["Bee Attack (BA)","+1","Good"],
        ["Bamboo Field Pollen (Bamb)","+100%","Good"],
        ["Blue Flower Field Pollen","\u2014","DO NOT RUN"],
      ]}},
      { t:'note', v:"<b>Blue Flower Field Pollen</b> heavily unbalances fill during Tad sync. The only exception is comps revolving around high Blue Flower Pollen% (see 6.6 BFF Mains vs General Comps)." },
      { t:'liste', v:[
        "If you run Tad sync, aim for <b>75%+ Bamb</b>: it's worth sacrificing a bit of CR for higher Pollen%.",
        "<b>BA > Bamb%</b> if you don't run Tad sync.",
      ]},
      { t:'h', v:"Shell Amulet" },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Goo","+15%","Guaranteed"],
        ["Stump Field Pollen","+65%","Guaranteed"],
        ["Pollen","+5%","Required"],
        ["Convert Amount / White Pollen","+25 / +40%","Filler"],
        ["Any Field Pollen","+30%","Filler (3 fields chosen)"],
      ]}},
      { t:'liste', v:[
        "Shell gives more minor buffs to Blues. <b>Stump%</b> can be used to self-guide a blessing boost, and the <b>3 other field%</b> can help with RBC.",
        "<i>Self-guide blessing boost</i> means using your own Guiding Star to make it land on Stump, by making Stump one of your top 5 least gathered fields, then using that for 2.5x capacity and pollen. That means bigger balloons, which increases your balloon size when blessing boosting, which means a higher blessing is achieved.",
      ]},
    ]},

    { titre:"2.1 Macro Settings", blocs:[
      { t:'h', v:"Revolution or Natro?" },
      { t:'liste', v:[
        "Currently, <b>Revolution Macro</b> can match <b>Natro Macro</b>'s performance and outperform it in several aspects. Revo also has native Tad Sync, Vic Hop and Global Relay.",
        "This guide covers Natro settings, but Revolution can be configured the same way.",
      ]},
      { t:'h', v:"Gather" },
      { t:'tab', v:{ cols:["Setting","Value"], rows:[
        ["Field Rotation","Pine Tree on all 3 lines"],
        ["Pattern","Kettle (line 1), Skillet (line 2), Plate (line 3) \u2014 M / Length 1"],
        ["Until","10 min \u00b7 95% pack"],
        ["To Hive By","Walk \u00b7 Rotate Camera Right 4 \u00b7 Gather w/Shift-Lock checked"],
        ["Sprinkler","Upper Left \u00b7 Distance 7"],
      ]}},
      { t:'liste', v:[
        "Gather time should be set at <b>7-10 minutes</b>: test for yourself. Typically, lower gather times are reserved for later game players.",
        "<b>Kettle</b> should be the main pattern you run; use <b>plate or skillet</b> if you drift or lag. Pattern downloads can be found in the Natro Discord Server.",
      ]},
      { t:'h', v:"Collect / Kill" },
      { t:'liste', v:[
        "<b>Wealth Clock + Auto blender Blue Extract</b> should permanently stay on, outside of HD.",
        "Never turn on <b>Mondo</b> unless you can achieve a 5x+ blessing.",
        "The rest of the settings are self-explanatory. Make sure you enter the Monster Respawn Time if running a gifted Vicious or MRT on the Stick.",
      ]},
      { t:'h', v:"Boost" },
      { t:'liste', v:[
        "Keep <b>Blue Extracts + Blue Field Booster</b> on permanently, unless you need the Extracts for Hydro or Tide. Enzymes + Oil + Tropical Drink can be used as well, however you'll eventually run out of Pineapples, Sunflower or Coconuts.",
        "Only use <b>Auto Field Boost</b> with glitter and dice during HD, as it's very expensive.",
        "Only run the <b>sticker stack</b> if you have 210+ stickers (a 50-minute long stack) and can reach LB for the ticket refund. Otherwise, only run it during HD.",
      ]},
      { t:'h', v:"Quest" },
      { t:'liste', v:[
        "Due to the lack of bloom detection on Natro, you're no longer able to macro any repeatable quests, besides Honey Bee and Black Bear.",
        "If you want to progress quests whilst Natro is being fixed to implement Bloom Detection, you can enable <b>Black Bear</b>'s repeatable quests, as they take near to no time to complete: 24/7 macroing gets you 720 quests over a 30-day month.",
        "Ensure <b>gather interrupt</b> is turned off to reduce the impact on honeymaking.",
      ]},
      { t:'h', v:"Planters" },
      { t:'note', v:"<b>Nectar</b> is the driving force for pollen, as a result of all the invaluable multipliers to HaH, CR, BP and other essential stats \u2014 it gives a 5-10x buff in hourly. Always aim to maximise how many you can fully maintain." },
      { t:'liste', v:[
        "Run <b>Planter+</b> with the <b>Blue Preset</b> (same for Revo). Turn off the Candy and Plastic planter. Only turn on <b>Invig</b> if you have Hydro or Petal and macro for 22h+.",
        "Remember to turn off <b>Pine</b> to avoid nectar sipping draining bee energy.",
        "Alternatively, you can sip nectar off the Petal Planter in Pine Tree if using a manual setup and you have incredibly high Polar Power (2500+).",
        "You may also turn it back on if you can only macro for less than 12h and have bad planters (nothing above Tacky), so you need the extra <b>Comforting</b>.",
      ]},
      { t:'h', v:"Status + RDP" },
      { t:'liste', v:[
        "To receive <b>hourly reports</b> from your macro, along with a lot more vital info, you need to set up a <b>webhook</b> (setup guide available on the Natro Discord).",
        "To be able to macro in the background or on multiple accounts simultaneously, you need a <b>Remote Desktop Protocol (RDP)</b> (guide available on the Natro Discord).",
      ]},
      { t:'h', v:"Settings" },
      { t:'liste', v:[
        "The fields outlined in red in the interface are <b>unique to each player</b>.",
        "Set your <b>hive slot</b> before macroing: 1 = closest to the red cannon.",
        "Fill in your bee count, Movement Speed and Sprinkler Type. Don't turn on <b>Drift Comp</b> without a Supreme Saturator.",
        "<b>Input delay</b> can be added for slower devices.",
        "The private link is pasted in when joining macro servers.",
        "Make sure you reconnect every <b>12-24h</b> to prevent lag.",
      ]},
    ]},

    { titre:"2.2 Macro Servers", blocs:[
      { t:'p', v:"Macroing with other people will substantially buff your fill and hourly." },
      { t:'etapes', v:[
        { t:"More balloons", d:"Means a higher balloon aura." },
        { t:"More frogs", d:"Means more pops on the Popstar." },
        { t:"More fuzzy bees", d:"Means better pollination." },
      ]},
      { t:'h', v:"How to find a good macro server" },
      { t:'liste', v:[
        "Make sure the server is in your <b>region</b> (Asia, Africa, NA, etc.). Not a strict requirement, but it will lower your hourly.",
        "Check that the server <b>resets regularly</b> to prevent lag: every 6-24h preferably.",
        "Ensure the server has <b>4-6 active Blue hives</b> macroing, with <b>8 total Fuzzies</b> across all players for pollination, and players at around your level of progression.",
        "Preferably a DM-only server with the <b>same players</b>: it allows easier coordination and more consistent hourlies.",
        "To find these servers, try joining big BSS Discord servers (Natro, BSS official, Revolution, etc.) and use the <b>search</b> bar.",
      ]},
      { t:'note', v:"Keep in mind that having <b>alts</b> instead of a macro server will be much more efficient and effective for lag, pops and pollination than a lobby full of players." },
    ]},

    { titre:"2.3 Hourly Report", blocs:[
      { t:'h', v:"Underfilling versus overfilling" },
      { t:'tab', v:{ cols:["","Underfilling","Overfilling"], rows:[
        ["Symptom","Balloons fill under 75% during Popstar.","Balloons completely fill up."],
        ["Consequence","Low backpack% when gathering and flat lines in honey/sec.","Returning to the hive prematurely, and bumps in honey/sec during Popstar."],
        ["Likely cause","Lag, frequent drops in uptime, or bad macro configuration.","Really short gathers might result in converting your Hive Balloon before balloons can reach your hive."],
        ["Fixes","Amulets (higher BP, CC, CPower) \u00b7 Beequips (Lip balm, Toy drum, etc.) \u00b7 Macro servers or Tad alts (bigger Popstars). Hive changes: gifting, 10-12 Tadpoles, remove Buoyants for Diamonds. <b>Don't add Frosty / Shy / Lion / Cobalt.</b>","Blessing (capacity multiplier) \u00b7 Beequips (Sunhat, Headband, Pinecones, etc.). Hive changes: 7-9 Tadpoles, remove filling bees for Diamonds (Cool, Basic, Tabby, etc.), add more Buoyants up to 16."],
      ]}},
      { t:'note', v:"Overfilling or underfilling is <b>not</b> a bad thing, it's just part of progression. You aim to get your hourly as high as possible, not to make your fill look nice: you cannot expect your fill capabilities at lvl 13 to be as strong as a lvl 17 hive with the same Buoyant count." },
      { t:'liste', v:[
        "Underfilling can be good, as it indicates you run too many <b>Buoyants</b>, meaning you can remove a few for more Diamonds.",
        "Overfilling can also be good, as it indicates you run too many <b>filling bees</b>, meaning you can remove a few for more Diamonds.",
      ]},
      { t:'h', v:"Lag management" },
      { t:'tab', v:{ cols:["Type","Symptom and detection","Fixes"], rows:[
        ["PC lag","Low or unstable FPS; check with <b>F5 + Shift</b>.","1. Lower graphics settings. 2. Run fewer RDPs."],
        ["Ping lag","High ping and input delay; check with <b>F3 + Shift</b>.","1. Macro in your region. 2. Add input delay."],
        ["Server lag","Occasional freezing; check with drops of Blue Boost.","1. Reset the server or group disconnects. Every 6-12h in a full server."],
      ]}},
      { t:'h', v:"Points to look out for" },
      { t:'liste', v:[
        "2 or more drops in Blue Boost per hour.",
        "Bad focus uptime, with 6+ producers.",
        "Haste drops without Windy.",
        "<b>Important</b>: these drops may also be caused by low <b>Polar Power</b>. Make sure you have at least 500 Polar before considering lag.",
      ]},
      { t:'h', v:"Drift prevention" },
      { t:'p', v:"<b>Drift</b> is the over- or under-compensation of movements from your macro, causing you to move outside the field over time." },
      { t:'liste', v:[
        "Reduce lag, as explained above.",
        "Turn on <b>Drift Comp</b> in Natro settings: requires the Supreme Saturator.",
        "If your camera is buggy, disable <b>Gather with Shift Lock</b>, or try going in and out of fullscreen.",
        "Use <b>Plate / Skillet</b> instead of Kettle as a pattern.",
        "Use an <b>R6</b> Roblox character model.",
      ]},
      { t:'h', v:"Deflation explained" },
      { t:'p', v:"Deflation is a mechanic of balloons where they lose pollen over time. The amount of pollen deflated per tick depends on your balloon's size relative to your bag." },
      { t:'liste', v:[
        "If your balloon holds the same amount of pollen as your bag size, you'll lose <b>3.33% of your pollen in 10 minutes</b>. In contrast, if your balloon is 100x larger than your bag, you'll lose <b>99.9% of your pollen in 10 minutes</b>.",
        "This means deflation is a bigger issue for later-game players with great fill.",
        "Contrary to popular belief, deflation is constantly occurring, not just over a certain threshold, meaning everyone is affected.",
      ]},
      { t:'h', v:"Preventing deflation" },
      { t:'liste', v:[
        "Set gather time to 7-10 minutes.",
        "Maximise capacity upgrades to increase backpack size, even if you underfill: beequips, bees, blessing.",
        "Use Diamonds as filler slots for extra HaH without increasing fill.",
      ]},
      { t:'h', v:"Perfecting token uptime" },
      { t:'liste', v:[
        "<b>Polar power</b> \u2014 bees sleep less and produce more tokens. It's the main driving force for uptime: aim for <b>1500+</b>.",
        "<b>Bees</b> \u2014 Stubborn, Hasty and Shocked all help with a lack of buff uptime. Stubborn is the baseline for every hive but may be substituted for Hasty (test the difference for yourself). Both can be run simultaneously, but it isn't recommended: it's an option below 500 Polar. Shocked can be added to combat any lack of beequips as an early-game blue.",
        "<b>Beequips</b> \u2014 Bead lizard, Toy Drum, Whistle and Paperclip all provide extra uptime tokens (Haste / TL). Bead lizard and Toy Drum should be run either way; Whistle and Paperclip are more early-game options with low Polar power.",
        "<b>Amulets</b> (Ant and Stick), <b>nectar</b> (Motivating) and <b>mutations</b> (BMS / BAR) can serve as additional buffs to token uptime and production.",
      ]},
      { t:'note', v:"Test what options work best for you and adjust as you see fit. If your uptime is perfect for a specific token, it may mean you can remove some producers of that token for more Tadpoles, Diamonds or Buoyants \u2014 for example, dropping Commander in place of another Diamond if focus uptime is perfect. It's generally not recommended to remove all token uptime bees (no Hasty, Stubborn or Shocked) unless your uptime is perfect across all tokens. An exception may be during Honeyday, where token uptime is degraded, but even then Hasty's 15% PMS is valuable enough to run." },
    ]},

    { titre:"3. Blue Progression", blocs:[
      { t:'h', v:"Assumptions" },
      { t:'liste', v:[
        "You continually work on improving your <b>amulets</b> and <b>beequips</b>.",
        "You set individual goals for endgame tools: Petal, Hydro, Heat-treated and colour-specific collectors should be obtained as soon as possible, without a strict timeline (more info on purchasing order in section 6. Disambiguation).",
        "You're competent enough to make personal decisions: test everything, don't rely on this progression to get you through Blue.",
        "Development of alts should always be occurring independently of the progress on your main. <b>Reds</b> need 3-4 on-field alts plus coconut helpers, <b>whites</b> need 4 on-field alts plus coconut helpers, <b>blues</b> need 2 tad alts, 2 guide alts and 1 attack alt.",
      ]},
      { t:'note', v:"The comps here are a <b>generalised</b> progression: do not copy them 1:1 without a proper understanding of what each bee and beequip contributes. Test what works best for you and develop based on what your macro tells you \u2014 keeping 6 focus producers because you have worse uptime, running whistle instead of bead lizard because you can't afford it, using more or fewer Tadpoles based on how you fill, and so on." },
    ]},

    { titre:"3.1 Earlygame Blue [lvl 12-15]", blocs:[
      { t:'h', v:"Progression goals" },
      { t:'etapes', v:[
        { t:"Any Popstar", d:"Stats don't matter for now." },
        { t:"Replace Bubbles", d:"With mythics: 12 Tadpoles plus any Buoyants." },
        { t:"2/5 Popstar", d:"With Blue pollen and Convert rate." },
        { t:"50 bees", d:"Don't level above 12 before this." },
        { t:"Level up to 15", d:"Once you have 50 bees." },
        { t:"4/5 Popstar", d:"With BP, CR and BAR / CC / Pollen." },
        { t:"Level up to 16", d:"End of this stage." },
      ]},
      { t:'h', v:"Earlygame Blue comps" },
      { t:'comp', v:[
        { nom:"Post-SSA Blue", ratio:"Ratio: 14 Bubbles / 5 Diamonds" },
        { nom:"Early Blue", ratio:"Ratio: 12 Buoyants / 12 Tadpoles" },
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "<b>Bubbles and Diamonds</b> don't <i>need</i> to be gifted; however, they will provide much more substantial fill and honey if gifted, especially Diamonds with 2x shimmer.",
        "<b>Frosty, Demon and all ungifted Diamonds</b> can be removed once all mythic placeholders (the Bubbles) are replaced.",
      ]},
    ]},

    { titre:"3.2 Midgame Blue [lvl 16-17]", blocs:[
      { t:'h', v:"Progression goals" },
      { t:'etapes', v:[
        { t:"Gift 5 Tadpoles", d:"To replace the Baby bees." },
        { t:"Improve the SSA", d:"Either a high stat 4/5 or a decent stat 5/5." },
        { t:"Level up to 17", d:"Once the SSA is improved." },
        { t:"Gift all Buoyants", d:"Your whole Buoyant line." },
        { t:"3/5 double passive SSA", d:"With BP and CR." },
        { t:"Level up to 18", d:"End of this stage." },
      ]},
      { t:'h', v:"Midgame Blue comps" },
      { t:'comp', v:[
        { nom:"Transition Blue", ratio:"Ratio: 16 Buoyants / 10 Tadpoles / 3 Diamonds" },
        { nom:"Early Diamond Comp", ratio:"Ratio: 15 Buoyants / 10 Tadpoles / 5 Diamonds" },
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "<b>Hasty</b> can be kept if uptime is still low, due to low Polar Power.",
        "<b>Gifted Diamonds</b> should be mutated with low <b>CA%</b> using bitterberries. Try not to go overboard, as high CA% mutations will be gotten later on with RJ instead. This is only to improve the Diamonds' conversion cheaply.",
        "<b>12 Tads</b> can be added back if you're still underfilling, without removing Diamonds. If you continue underfilling, you can remove a few more Buoyants, though that isn't usually recommended.",
      ]},
    ]},

    { titre:"3.3 Lategame Blue [lvl 18-19]", blocs:[
      { t:'h', v:"Progression goals" },
      { t:'etapes', v:[
        { t:"Finish gifting all bees", d:"The entire hive." },
        { t:"Improve the DP SSA", d:"Either a high stat 3/5 or a decent stat 4/5." },
        { t:"Mutations", d:"Musics, Bear, Bubble and Diamonds. Remember to mutate Musics, Bubble and Diamonds with RJ. Diamonds should already be mutated with around 15%+ CA using bitterberries, so now you can improve the mutations to 26%+ CA using RJ and blueberries, being wary of fruit costs." },
      ]},
      { t:'h', v:"Lategame Blue comps" },
      { t:'comp', v:[
        { nom:"Full Diamond Comp", sous:"For those who can maintain 80x+.", ratio:"Ratio: 14 Buoyants / 8 Tadpoles / 10 Diamonds" },
        { nom:"Semi Diamond Comp", sous:"For those who can't maintain 80x+.", ratio:"Ratio: 15 Buoyants / 10 Tadpoles / 6 Diamonds" },
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "<b>Musics + Diamonds + Bubble</b> are mutated using RJ: aim for 27%+ CA and 4+ BMS. <b>Bear</b> is mutated using Bitter Bearies: BAR is best, but BMS works fine for now.",
        "If you can maintain your blessing, skip this part and go straight to <b>Blessing Boosting Blue</b>, boost an 80x+ balloon blessing, then transition to <b>Honeymaking Blue</b>.",
      ]},
    ]},

    { titre:"3.4 Endgame Blue [lvl 20+]", blocs:[
      { t:'note', v:"This stage is under the assumption that you <b>stay Blue</b>." },
      { t:'liste', v:[
        "Mutations on all bees, with high CA on Diamonds.",
        "Progression of your Digital drive count.",
        "Moving to lvl 21, Diamonds first.",
        "Finalisation of alts, amulets, beequips and tools.",
        "If you have coding knowledge, or you're planning to learn how to make your own macro or macro features, check out <i>The Perfect Blue Hive Macro Setup</i>.",
      ]},
    ]},

    { titre:"4. Boosting Guidance", blocs:[
      { t:'h', v:"Important boosting information" },
      { t:'liste', v:[
        "There are <b>2 main types of boosts</b>: the <b>blessing boost</b>, for a high blessing to macro with (either RBC or standard boost), and the <b>honey boost</b>, for more honey than macroing.",
        "Generally, you'll be RBC blessing boosting for 80x+ at lvl 18 to transition to <b>Honeymaking Blue</b>.",
        "However, standard blessing boosts are accessible to all and needed to attain 50x+ blessing before lvl 18.",
      ]},
      { t:'h', v:"4.1 Honey" },
      { t:'note', v:"You should <b>never</b> try honey boosting if you aren't endgame. It's a complete waste of resources for very underwhelming benefits." },
      { t:'liste', v:[
        "You only get about a few hours' worth of macroing per boost, in exchange for many valuable resources.",
        "This is why boosting as blue is saved for endgame players with a lot of setup. More information in <i>The Definitive Pop Gum Guide</i>.",
      ]},
      { t:'h', v:"4.2 RBC Blessing" },
      { t:'p', v:"Check the relevant section of <i>The Official Blue RBC Guide</i> to learn how to do RBC Blessing Boosts." },
      { t:'h', v:"4.3 Mini Blessing" },
      { t:'p', v:"If you aren't able to maintain your blessing, RBC blessing boosting may be a waste of resources. Instead, you can do a <b>Standard Blessing Boost</b> before starting to macro, for a 50-60x blessing. This can be done with a <b>3-4x Pine Tree boost</b>, a <b>Purple Potion</b> and a <b>Sticker Stack</b>, while remaining on the field for 15 minutes \u2014 use micro converters to achieve this." },
      { t:'tab', v:{ cols:["Pros","Cons"], rows:[
        ["Easy to set up and boost","Lower blessing, so not as effective"],
        ["Low cost","Long-term higher cost"],
        ["Accessible to most macroers","Loaded dice, Purple potion, Micro converters"],
        ["<b>Worth it if you can maintain for 2-3 days</b>","<b>Not worth it if you lose blessing 1+ times per day</b>"],
      ]}},
    ]},

    { titre:"5. Alt Construction", blocs:[
      { t:'p', v:"Follow <i>The Complete Alt Account Guide</i> for more info." },
    ]},

    { titre:"5.1 Tadpole Alts", blocs:[
      { t:'liste', v:[
        "Tadpole alts are the <b>most important</b> kind of alt for blue hives.",
        "They allow for much <b>bigger Popstars</b> and better pollination.",
        "They make macro servers redundant, meaning <b>lower lag</b>.",
        "They allow <b>Tadpole Alt Sync</b>, a high honey boost in hourly.",
        "<b>Red</b> and <b>white</b> hives rely on Fuzzy alts instead.",
        "<b>Reminder</b>: Tad Alts can work below level 20, but it's really recommended not to go Tad on your alts until lvl 20, unless you don't have enough time to grind them, such as an HD nearing.",
      ]},
      { t:'h', v:"Tad alt comps" },
      { t:'comp', v:[
        { nom:"Comps for 2 Tad alts", sous:"Both alts share the same structure.",
          ratio:"Ratio: 15 Fuzzies [11+4] / 10 Buoyants [5+5] / 47 Tadpoles [20+27]" },
        { nom:"Comp for 1 Tad alt", ratio:"Ratio: 13 Fuzzies / 5 Buoyants / 18 Tadpoles" },
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "<b>Shocked</b> should remain ungifted unless you have the coco belt.",
        "If you cannot get BMS or BAR on mythics, use <b>Energy</b> instead.",
        "<b>Digital</b> is run for Map corruption: use a <b>Blue Drive</b> on it.",
      ]},
      { t:'h', v:"Beequip changes" },
      { t:'liste', v:[
        "<b>Bead Lizard</b> needs <b>Token Link</b>.",
        "<b>Paperclip</b> needs <b>Token Link + Token Lifespan</b>.",
        "<b>Antennas</b> need <b>Bee Ability Rate</b>.",
        "Use <b>bubble lights</b> for any extra beequip slots.",
      ]},
      { t:'h', v:"Tadpole Alt Sync" },
      { t:'p', v:"<b>Tad sync</b> is when your Tad alt follows your main to any boosted blue field to gather, with a constant 100-300% field pollen increase." },
      { t:'liste', v:[
        "This allows you to turn on <b>Gather in Boosted Field</b> while still keeping Popstar and pollination the same as in Pine.",
        "It will substantially boost fill and hourly honey.",
        "Keep in mind that <b>Revolution Macro</b> has native Tad sync.",
      ]},
      { t:'h', v:"Tad sync setup" },
      { t:'etapes', v:[
        { t:"RDP", d:"Set up RDPs for all accounts." },
        { t:"Install", d:"Install Natro Alt Synchronization." },
        { t:"Discord channel", d:"Create a new channel for Tad Sync." },
        { t:"Field Following", d:"In Natro, go to Misc then Field Following." },
        { t:"Channel ID", d:"Insert the channel ID." },
        { t:"Follow Mode", d:"Your main should be set to Leader, alts set to Follower." },
        { t:"Max Time", d:"Max Time for alts should be at 900s." },
      ]},
    ]},

    { titre:"5.2 Guide Alts", blocs:[
      { t:'p', v:"Guide Alts spawn <b>Guiding Stars</b> in the fields your main is grinding on." },
      { t:'liste', v:[
        "This gives your main <b>x1.25 capacity, convert rate and pollen</b>.",
        "They're also used for main support: clouds, parties, gifts and so on.",
        "Ensure that <b>Pine Tree, Blue Flower and Bamboo</b> are your top 3 least gathered fields, in that order, for the Guiding Star to land more frequently.",
      ]},
      { t:'tab', v:{ cols:["Field rank","Chance of being picked"], rows:[
        ["Lowest gathered field","33.33%"],
        ["Second lowest field","26.66%"],
        ["Third lowest field","20%"],
      ]}},
      { t:'note', v:"This is only possible if you go <b>early red</b> with your alt: see the <i>Complete Early Red Progression Guide</i>." },
      { t:'h', v:"Guide alt comps" },
      { t:'comp', v:[
        { nom:"Standard Guiding Comp", ratio:"40 Boost Producers / 5 Buoyants" },
        { nom:"Mini Guiding Comp", ratio:"30 Boost Producers / 5 Buoyants" },
      ]},
      { t:'h', v:"Diamond bees versus Cool bees" },
      { t:'liste', v:[
        "Diamonds are slower boost producers than Cools; however, they can get you to the <b>Honey Gift LB</b>, which means star signs income.",
        "However, you need <b>50 bees</b> to get to LB. This means higher lag and slower guiding. Mini-guides are guaranteed not to get to LB.",
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "It's recommended you level up Buoyants, Festive, Windy and Digital to lvl 15/20.",
        "35/45 bee mini-guides cause less lag if you run more than 1 guide alt, but you will not be able to reach the Honey Gift LB.",
        "It's more than likely that you won't get to the Honey Gift LB even if you run a Full Diamond Guide, but it's still worth trying. If you don't see it as achievable, replace Diamonds with other Boost Producers.",
        "<b>Rage bees</b> are interchangeable with <b>Shocked bees</b>: test the difference. Usually not beneficial unless you desperately require the haste uptime.",
        "<b>Windy</b> is used to send clouds to your main that buff 25/50% pollen and 10/20% UIC.",
      ]},
      { t:'h', v:"Alternative boost token producers" },
      { t:'tab', v:{ cols:["Bee","Effect"], rows:[
        ["Cool","Faster boost token production."],
        ["Riley","Slightly slower tokens, but +attack and x1.25 energy."],
        ["Diamond","Slower, but can get you to the Honey Gift LB."],
        ["Shy","Slower than Diamond, but can grow planters much faster."],
        ["Precise","Inconsistent token production, used for attack-guide hybrids."],
      ]}},
      { t:'h', v:"Beequip changes" },
      { t:'liste', v:[
        "<b>Bead Lizard</b> needs <b>Token Link</b>.",
        "<b>Paperclip</b> needs <b>Token Link + Token Lifespan</b>.",
        "<b>Antennas</b> need <b>Bee Ability Rate</b>.",
        "Use <b>bubble lights</b> for any extra slots.",
      ]},
      { t:'h', v:"Guide Alt Rotation" },
      { t:'p', v:"Although not public, Guiding Alt Rotation can be coded easily. It mainly works by having <b>2 VIPs</b>: one for charging guides, and one for the main macro." },
      { t:'liste', v:[
        "First, guide alts macro in the <b>charging VIP</b>, until their Guiding Star is at around 240.",
        "Then, they move to the <b>main VIP</b> to spawn their Guiding Star.",
        "If their Guiding Star hits on Pine Tree, or any field you want it to hit, then it stays for 10 minutes.",
        "Otherwise, it returns to the charging VIP, and the cycle starts again.",
      ]},
      { t:'p', v:"This is the simplest way of doing Guide Alt Rotation, and it allows more than 3 guiding alts to spawn guides while leaving a lot of spots free in the main server, to reduce lag and to have more consistent Guiding Stars. There are more complex and complete ways of coding these, but they're exponentially harder to code." },
    ]},

    { titre:"5.3 Attack Alts", blocs:[
      { t:'p', v:"Attack alts are accounts that specialise in killing the <b>Mondo</b> every hour." },
      { t:'liste', v:[
        "This gives your main an <b>x5-10 Mondo blessing</b>: 1.1-1.2x convert rate at hive and capacity, plus 10% pollen.",
        "It allows <b>attack alt sync</b>: the attack hive leaves in between Mondo kills to reduce lag.",
        "<b>SSA passives</b>: <b>Scorch + Saw</b> is the norm to kill Mondo the fastest.",
      ]},
      { t:'h', v:"Hive changes" },
      { t:'liste', v:[
        "The hive should be a <b>minimum of lvl 20</b> to achieve a decent blessing.",
        "<b>Digital</b> should have high <b>Red</b> and <b>Glitched</b> drives. Red Drives increase Digital's personal damage (low priority); Glitched Drives increase the damage dealt to Mind Hacked mobs and the duration of the buff (high priority, but a lot harder to obtain).",
      ]},
      { t:'h', v:"Beequip changes" },
      { t:'liste', v:[
        "<b>Bead Lizard</b> needs <b>Token Link</b>.",
        "<b>Paperclip</b> needs <b>Token Link + Token Lifespan</b>.",
        "<b>Pink shades</b> need <b>Super Critical Chance / Power</b>.",
        "<b>Whistle</b> needs <b>Melody + Super Critical Power</b>.",
      ]},
      { t:'h', v:"Attack Alt Sync" },
      { t:'p', v:"Although not widespread, Attack Alt Sync can be coded easily. It works similarly to Guide Alt Rotation, but takes much less complexity and fewer resources." },
      { t:'liste', v:[
        "The attack alt has to be running its own Natro Macro, with a designated pattern such as <b>smartatk</b> (find it in the Natro Macro server), running in the Mountain Top Field.",
        "When it's about time for the Mondo Chick to spawn, so :57 to :58 of each hour, send <b>?set PrivServer \u00ab Main Macro VIP \u00bb</b> then <b>?close Roblox</b>.",
        "Then wait until Mondo spawns. You can make it use Stingers via <b>?send n</b>, n corresponding to the hotbar placement.",
        "After Mondo dies, send <b>?set PrivServer \u00ab Secondary VIP \u00bb</b> then <b>?close Roblox</b>.",
      ]},
      { t:'p', v:"This is the simplest way of doing Attack Alt Sync. It will allow you to get an x5-x8 Mondo Blessing, or even higher if you optimise the hive, mutations and Digital Bee. There are more complex and complete ways of coding these, but they're exponentially harder, and if you want x10 Mondo Blessing consistently you'll need more than 1 attack alt, or one powerful enough to kill the Mondo Chick in under 5 seconds." },
    ]},

    { titre:"6. Disambiguation", blocs:[
      { t:'h', v:"6.1 Tide Popper versus Petal Planter" },
      { t:'tab', v:{ cols:["","Tide Popper","Petal Planter"], rows:[
        ["Benefits","Around 1.2x boost in hourly honey if you can build a decent Tide blessing.","Extremely strong nectar provider, especially for its cost, delivering a great honey boost indirectly."],
        ["Drawbacks","Underwhelming stat boost for the cost, especially if you aren't able to build blessing properly.","Unnecessary if you're already able to maintain all 5 nectars comfortably."],
      ]}},
      { t:'note', v:"<b>Consensus:</b> buy the Tide Popper first if you can macro 18h+ and you're planning to stay Blue after level 20. Otherwise, Petal first." },
      { t:'h', v:"6.2 Hydroponic Planter" },
      { t:'liste', v:[
        "<b>Benefits:</b> relatively cheap and considerably more efficient for nectar compared to the BCP.",
        "<b>Drawbacks:</b> sizable Blue extract and Caustic cost, which may delay purchasing the Dark Scythe for players aiming to go red.",
      ]},
      { t:'note', v:"<b>Consensus:</b> buy whenever possible, unless you plan on going red after lvl 20." },
      { t:'h', v:"6.3 The Gummy Boots" },
      { t:'liste', v:[
        "<b>Benefits:</b> decent buff to pollen, BA and PMS. Can be worked on in the background (glue dispenser), and the cost is disconnected from other endgame items.",
        "<b>Drawbacks:</b> very high cost and gimmicky, with an underwhelming benefit to hourly.",
      ]},
      { t:'note', v:"<b>Consensus:</b> do not go out of your way to grind for this item. Buy it when you have close to enough materials (glues and glitters)." },
      { t:'h', v:"6.4 Coconut Belt" },
      { t:'liste', v:[
        "<b>Benefits:</b> very good buff to capacity (+25% and +100k), convert amount and GBP. Generally disconnected from the cost of other items.",
        "<b>Drawbacks:</b> difficult to utilise the coco combo while macroing.",
      ]},
      { t:'note', v:"<b>Consensus:</b> get whenever possible, a must-have if switching hive colours." },
      { t:'h', v:"6.5 Switching hive colours" },
      { t:'liste', v:[
        "Around <b>1.5qd honey</b> for gifted mythics. The hive MUST be fully gifted, with at least a good 4/5 DP SSA.",
        "<b>1+ Fuzzy alts</b> for pollination. White requires 1-2 on-field alts and 3-4 gumdroppers; reds require 3-4 on-field alts.",
        "<b>Dark Scythe</b> or <b>Gummyballer + Coconut belt</b> preferably. The 250 Riley quests for the Dark Scythe can be completed after switching.",
        "Preferably <b>lvl 20+</b>, but not a necessary requirement.",
        "Maxed coloured drives on Digi, preferably <b>100+ Glitched drives</b> before boosting.",
        "A foundational understanding of boosting, or the desire to learn how to.",
      ]},
      { t:'note', v:"If you're planning on grinding 100+ glitched drives on Digital, consider switching to an <b>RBC hive</b> first. Useful documents: <i>Proper RBC Guide</i>, <i>The Definitive White Hive Guide</i>, <i>Proper Red Hive Guide</i>." },
      { t:'h', v:"6.6 BFF Mains versus General Comps" },
      { t:'p', v:"If you're in endgame, as a Honeymaking Blue Hive, you can decide if you want to main Blue Flower Field gathering, or if you want to be a general comp." },
      { t:'note', v:"To main Blue Flower, you're pretty much required to run <b>Glitter Extend</b>. Maining BFF without running Glitter Extend will end up in a way worse hourly." },
      { t:'tab', v:{ cols:["","Blue Flower Field Mains","General Comps"], rows:[
        ["Benefits","Will probably yield a higher amount of honey over time. Less reliance on tokens like Focus and Melody, so less need for Token Links and %ATL: more slots for Diamond Bees and convert beequips.","Not reliant on RNG. Some important buffs are easier to upkeep (Tide Blessing, Reindeer Blessing). Hourly consistency no matter the field (Bluf, Bamb, Pine). Not reliant on Glitter usage."],
        ["Drawbacks","Your hourly depends 100% on BFB RNG: no Bluf Field Boost means a bad hourly. Important buffs are harder to upkeep. More reliance on White Field Capacity buffs (Autumn Sunhat, Exhausted Bee). 100% reliance on Glitter Extend, and you're expected to run it non-stop. Big commitment: it needs +%Blue Flower Field Pollen from the KB, and the KB is hard to replace.","Token uptime becomes a very high priority, so fewer slots for Diamond Bees and convert beequips. You're pretty much forced to lose out on +%Blue Flower Field Pollen in the KB, to prevent instafills. Will probably yield a lower amount of honey over time."],
      ]}},
    ]},

    { titre:"Credits", blocs:[
      { t:'p', v:"This guide is an adaptation of <b>The Definitive Blue Hive Guide</b>, written by <b>riot003</b> and <b>anthrox0</b>, published by the <b>Abyssal Trench Network</b>. Source document last updated: 26 March 2026." },
      { t:'liste', v:[
        "Original writing: <b>riot003</b> and <b>anthrox0</b>.",
        "Blue Hive Amulet Heatmap: <b>@riot003</b>.",
        "Reference spreadsheets, tools and guides: <b>Abyssal Trench Network</b>.",
        "Sign values: <b>Tabby V Value List</b>. Beequip stats: <b>Beequip Spreadsheet</b>.",
      ]},
    ]},

  ],


  "White": [

    { titre:"1.1 Hive Composition", blocs:[
      { t:'comp', v:[
        { nom:"Standard White Hive Comp", sous:"The reference build for a white hive.",
          ratio:"Ratio: 18-19 Vector / 7 Precise" },
      ]},
      { t:'h', v:"Hive adjustments \u2014 possible changes" },
      { t:'liste', v:[
        "<b>8 Precise</b> if the other 7 don't have <b>BMS</b> mutations, if you're inexperienced, or simply as a matter of preference. Always keep <b>3x Prec marks</b> (roughly 2 tucked in a corner to grow the baller) and <b>10x Precision</b>.",
        "<b>Tadpoles</b> can replace 1-2 <b>Babys</b> if you run Poinsettias (15-slot comps). Babies produce Baby Love faster than Tadpoles. You want <b>5 baby love producers</b> in total; some players run only 4 if they can abuse Duped Tokens to extend baby love, which isn't recommended for beginners.",
        "<b>Photon</b> can be dropped for one more Vector or Precise, but it isn't recommended: you lose a source of Haste, a unique colorless type and a Paper Angel holder.",
        "<b>Bomber or Shy</b> make Blooms easier to handle, and either works alongside Photon. Both become an extra Paper Angel holder for Token Link. Bomber gives you a cleaner shot at the Rare Bee Leaderboard and a solid Honey From Token buff; Shy's 5% BAP buff also applies outside Gummy Star, which makes it slightly stronger. Either one is really an endgame option.",
      ]},
      { t:'note', v:"<b>Never run Ninja</b>, for any reason. A gifted colorless is almost always better." },
      { t:'h', v:"Quick notes" },
      { t:'liste', v:[
        "Aim for <b>+5 BMS</b> on every Legendary, Epic and Rare, through Royal Jelly.",
        "<b>BAR + BMS</b> are interchangeable on <b>Precise</b> bees \u2014 BMS is better overall.",
        "However, <b>BMS is substantially better than BAR</b> on <b>Vectors</b>.",
      ]},
    ]},

    { titre:"1.2 Beequips", blocs:[
      { t:'p', v:"Beequips are one of the most important parts of a good hive: they give unmatched buffs to fill, token production, capacity and boosting in general." },
      { t:'liste', v:[
        "Only <b>13 slots</b> are available, which is why every slot has to earn its place. <b>14 and 15 slots</b> are possible if you completed Bee Bear's 2020 Beesmas quest.",
        "The comps below are given with <b>15 beequips</b>, noting which ones to drop if you only have 13 slots.",
        "<b>DO NOT SWITCH</b> unless you're confident you can afford most of the beequips on this list.",
        "Sign inflation moves prices quickly, so check <b>Tabby V</b> for sign values. Detailed stats are in the <b>Beequip Spreadsheet</b> \u2014 keep in mind that <i>weight</i> is not the same thing as CHANCE.",
      ]},
      { t:'h', v:"Recommended beequips" },
      { t:'tab', v:{ cols:["Beequip","Approx. cost","Stats to look for","Run on"], rows:[
        ["2 Smiley Stickers","20-40 signs","Really important for White: more marks means more pollen from Triangulate. <b>Must have +Honey mark</b>; +%mark duration (HB) is optional if you have the signs for it.","Honey + Stubborn; otherwise any Vector or Precise with the highest BMS and level, or Basic if you're running Shades on Honey"],
        ["2 Toy Drums \uD83C\uDF84","6-18 signs","Great source of Haste and BAP. Minimum <b>+2% BAP</b> (HB), preferably +4%.","Demo + Brave"],
        ["Sweatband","7-18 signs","Invaluable buff to White Gather Amount, heavily buffing Smiley Tokens. Must have <b>+26% WGA</b>; +%WP is optional. 28%+ recommended.","Digital"],
        ["Whistle","4-5 signs","Good boost to SCP and Haste uptime. Minimum <b>+3% SCP</b> (HB). +Melody is unnecessary once you have 5 producers.","Commander"],
        ["Toy Horn \uD83C\uDF84","9-11 signs","Required for Melody uptime and BAP. Aim for at least <b>+2% BAP</b>.","Lion"],
        ["Paper Angel \uD83C\uDF84","12 signs","Great for lining Smileys up (ATL) and as a Token Link source. Should have <b>+1% ATL</b> and <b>+2% BAP</b>; you can aim higher, but the cost scales fast.","Photon"],
        ["Kazoo","4 signs","Nice for Melody and a buff to SCP and CPower. Aim for at least <b>+1% SCP</b> and <b>4-5%+ CPower</b>.","Shocked"],
        ["2 Paperclips","4-6 signs","Great for token uptime (ATL + TL) and BAP. Optional but excellent for quality of life. Look for <b>+4% ATL</b>; any amount of +%BAP is fine.","Looker + Hasty"],
        ["Pink Shades","20-21 signs","Good boost to SCP and SCC; can help reach the Common LB if it has a high green SCC stat (optional). Aim for <b>+3% SCP</b> and any <b>+1% SCC</b>.","Basic, or Honey if you're running the Smiley on Basic"],
      ]}},
      { t:'h', v:"Optional beequips" },
      { t:'liste', v:[
        "<b>Reindeer Antlers</b> \u2014 must have Baby Love to be worth running, and it's insanely expensive; on Puppy. You're normally better off spending signs elsewhere.",
        "<b>Charm Bracelet</b> \u2014 good for Melody uptime, and gives Carpenter Bee a little %Mark Duration and %Ability Rate. Fairly mediocre, usually outclassed by a second Paper Angel or a second set of Peppermint Antennas.",
        "<b>Peppermint Antennas</b> \u2014 can give BAR for more consecutive 'White Boost', on Windy. Can also give BAR in HB, which is cheap and a decent placeholder. You can run it on Bear Bee for a slightly higher chance at Bear Morphs, but it's barely a buff, and Windy stays the recommendation.",
        "<b>Bead Lizard</b> \u2014 a washed-down Paperclip, only worth running if it has BAP in HB, on any rare bee.",
        "<b>Candy Ring</b> \u2014 only with HFT and 3%+ Honey per goo, on Gummy. Extremely rare and expensive: not worth going for.",
        "<b>Poinsettias</b> \u2014 needs a high BGP in HB, which buffs Digi; on Windy or Tadpoles. Replace your Baby Bees with Tads if you run it.",
        "<b>Beesmas Tops</b> \u2014 last resort if you have no beequips at all: aim for <b>8%+ CPower</b>.",
      ]},
    ]},

    { titre:"1.3 Amulets", blocs:[
      { t:'h', v:"Key of stats" },
      { t:'liste', v:[
        "<b>Blue</b> \u2014 most important stat, required for the amulet.",
        "<b>Green</b> \u2014 good stat, should be sought after.",
        "<b>Orange</b> \u2014 filler stat, useful elsewhere in the game.",
        "<b>Red</b> \u2014 hurtful, avoid entirely.",
        "Any stat not listed doesn't matter: running it or not changes nothing.",
      ]},
      { t:'h', v:"Star Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>WP = Pollen > BGP = CC > BAR</b>. Passive: <b>Gummy Star + Star Saw</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["White Pollen","+70%","Required"],
        ["Pollen","+20%","Required"],
        ["Bee Gather Pollen","+70%","Required"],
        ["Critical Chance","+7%","Required"],
        ["Bee Ability Rate","+7%","Good"],
      ]}},
      { t:'note', v:"If you're transitioning to White, a <b>5/5 DP SSA</b> is a strict requirement." },
      { t:'h', v:"Ant Amulet \u2014 4/4" },
      { t:'p', v:"Priority: <b>WP = CPower > PMS / CC / Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["White Pollen","+30%","Required"],
        ["Critical Power","+50%","Required"],
        ["Critical Chance","+3%","Good"],
        ["Player Movespeed","+3","Good"],
        ["Red Pollen","+30%","Filler"],
      ]}},
      { t:'liste', v:[
        "Pollen, PMS and CC are interchangeable, with CC and PMS being slightly more effective.",
        "Pollen is sometimes used to replace CC when players abuse Precise Marks to reach 100% crit chance on Triangulate \u2014 the downside being that Digi's Smileys lose that CC.",
      ]},
      { t:'h', v:"Stickbug Amulet \u2014 4/4" },
      { t:'p', v:"Priority: <b>HFT > WP > RBA > BA / MRT</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["White Pollen","+30%","Required"],
        ["Honey from tokens","+100%","Required"],
        ["Red Bee Attack","+2","Good"],
        ["Bee Attack / Monster Respawn Time","+1 / -10%","Good"],
      ]}},
      { t:'liste', v:["MRT can help you get better snail runs and bugruns."] },
      { t:'h', v:"Moon Amulet \u2014 2/2" },
      { t:'p', v:"Priority: <b>WP > BGP / Pollen</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Capacity","+250k","Guaranteed after 11 replaces"],
        ["White Pollen","+50%","Required"],
        ["Bee Gather Pollen / Pollen","+25% / +5%","Required"],
        ["Movement collection","\u2014","DO NOT RUN: destroys flowers"],
      ]}},
      { t:'liste', v:["Pollen versus BGP hasn't been tested fully: Pollen is better for overall collection, BGP is better for Smiley Token lineups."] },
      { t:'h', v:"Cog Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>MAP = HFT > WP > WIC = BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["White Pollen","+30%","Required"],
        ["Mark Ability Pollen","+20%","Required"],
        ["Honey From Tokens","+75%","Required"],
        ["Instant White Conversion","+5%","Good"],
        ["Bee Attack / Red Bee Attack","+15% / +2","Good"],
      ]}},
      { t:'liste', v:["Bee Attack% is better than +RBA or +CBA."] },
      { t:'h', v:"Shell Amulet \u2014 5/5" },
      { t:'p', v:"Priority: <b>Goo Conv > HFT > Spider% = Dandelion%</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Goo","+15%","Guaranteed"],
        ["Goo Conversion","+10%","Required"],
        ["Honey From Tokens","+50%","Required"],
        ["Spider Field Pollen","+30%","Required"],
        ["Dandelion Field Pollen","+30%","Good"],
      ]}},
      { t:'liste', v:["Dandelion% or Spider% depends on your boosting preference: White usually boosts on Spider."] },
      { t:'h', v:"King Beetle Amulet \u2014 1/1" },
      { t:'p', v:"Priority: <b>BA</b>." },
      { t:'tab', v:{ cols:["Stat","Maximum","Tier"], rows:[
        ["Bee Attack","+1","Required"],
        ["Bamboo Field Pollen","+100%","Filler"],
        ["Blueflower Field Pollen","+100%","Filler"],
      ]}},
      { t:'liste', v:["Field pollen% only matters for RBC."] },
    ]},

    { titre:"2.1 Transition", blocs:[
      { t:'h', v:"Requirements" },
      { t:'liste', v:[
        "<b>Gummyballer</b> and <b>Coconut belt</b>.",
        "Decent amulets to switch with (Cog, Stick, and so on).",
        "<b>500 white drives</b> / <b>300+ glitched drives</b>.",
        "<b>2qd+</b>, with a 5/5 DP SSA and an unmuted gifted hive \u2014 <b>20qd+</b> if you plan to roll mythic mutations with Royal Jelly.",
        "At least <b>2 alt accounts</b> and <b>2-3 gumdroppers</b>: either 2 Fuzzy-guiding, or 1 Fuzzy + 1 Guiding. Gumdroppers can be other players, though that isn't really recommended.",
      ]},
      { t:'h', v:"Side notes" },
      { t:'liste', v:[
        "To get the drives you need on Digi, it's strongly recommended to go <b>red</b> or <b>RBC</b> comp before switching to white.",
        "Make sure you have the <b>Dark Scythe</b> for quality of life outside of boosting.",
      ]},
    ]},

    { titre:"2.2 Boosting Preparation", blocs:[
      { t:'h', v:"Material preparation" },
      { t:'tab', v:{ cols:["Quantity","Material","Notes / Purpose"], rows:[
        ["2","Glitter","1. At the start of the boost, before using Loaded Dice. 2. After roughly 14m45s, to extend the x4 field boost."],
        ["4","Loaded Dice","Guaranteed x4 field boost."],
        ["2","Super Smoothie","A stat stick, but consumable."],
        ["120-160","(to confirm)","120 for 30 minutes, 160 for 40 minutes."],
        ["900-1.2k","Gumdrops","1,200 on the main plus on-field alts, for 40 minutes."],
        ["40-60","Jelly Beans","60 on the main plus on-field alts, for 40 minutes. Budget <b>1 Jelly Bean per Gummy Star</b> if you're boosting multiple times."],
        ["180-240","Coconuts","Cycles the Coconut Combo, which provides haste."],
        ["10","(to confirm)","10 on the main plus on-field alts."],
        ["1","(to confirm)","Optional, use during great lineups."],
      ]}},
      { t:'h', v:"Buff preparation" },
      { t:'tab', v:{ cols:["Buff","Quantity","Notes / Purpose"], rows:[
        ["Wealth Clock","x5","x1.05 Honey Per Pollen."],
        ["Nectars","20h+","At minimum, Satisfying and Motivating maxed."],
        ["Puffshroom Blessing","x100","Provides UIC, HFT, Pollen and Capacity."],
        ["Mondo Blessing","\u2014","Mainly for the 10% pollen, but it also provides capacity."],
        ["Festive Nymph","x250","Capacity, Bee Attack, HPP and Instant Bee Gather Convert."],
        ["Robo Party Blessing","x100","Capacity, Crit Power, Red Pollen, White Pollen (and Blue Pollen)."],
        ["Honey Wreath","\u2014","Bonus Honey Bee."],
        ["Onett's Lid Art","\u2014","Extra bees."],
        ["Gummy Cannon","\u2014","3 Gummy Bees means a lot of Gummy Tokens, which makes Gummy Morph trigger insanely often."],
      ]}},
    ]},

    { titre:"2.3 Technique", blocs:[
      { t:'note', v:"<b>Important warning:</b> your first few boosts will be bad. Even having done everything technically correct (lvl 20+, drives, fully gifted and so on), you might only make around 50T on your first boost. Don't get discouraged, stick with white and trust that it gets better. Use the information below to help through your first boosts, but hands-on experience will teach you far more than any guide or video." },
      { t:'h', v:"Precise Bee" },
      { t:'p', v:"Hands down the most important part of White." },
      { t:'liste', v:[
        "Maintain <b>10x precision</b> and <b>3x precise marks</b> for SCC and CC.",
        "Keep at least <b>2 precise marks next to each other</b>.",
        "Running <b>8 Precise</b> is recommended at first, while you get used to white.",
      ]},
      { t:'h', v:"Gummyballer" },
      { t:'p', v:"Things to keep track of at all times:" },
      { t:'liste', v:[
        "Precise mark locations \u2014 where you want to throw the ball.",
        "The progress of the ball, meaning its size.",
        "Lining up formations: Gummy, bear morphs, Gummy star and so on.",
        "Once mastered, the high goo conversion drastically reduces bag-filling issues.",
        "Look into the <b>Rebind Alignment Key</b> (rebinding to the side buttons for better throws) and <b>Hotbar Extensions</b> (keyboard management quality of life).",
      ]},
      { t:'h', v:"Corruption" },
      { t:'p', v:"The driving force behind lineups is Smiley token management." },
      { t:'liste', v:[
        "Use <b>Stubborn + Paperclips</b> to delay the collection of Smiley tokens.",
        "Try to time the Smiley with <b>Gummy star</b> and a high <b>Gummy Baller</b>.",
        "Delaying collection also lets you stack duped Triangulates.",
      ]},
      { t:'h', v:"Coconut Combo" },
      { t:'liste', v:[
        "Up to <b>50% pollen / WP / HFT</b>, <b>75% UIC</b> and <b>1.5x pollen</b> at 100x combo.",
        "Not too difficult to maintain once you're used to it, but speed increases with catches, so a very high combo may be unreasonable to expect.",
        "If all your combo catchers have Coco belts, you can drop the combo between Gummy stars \u2014 this requires timing the pity star.",
        "Catcher locations for 1 catcher: <b>Spider = Straw catcher</b>, <b>Dandelion = Clover catcher</b>, <b>Coconut = Pepper catcher</b>. With 2 catchers, place one inside the field you're boosting in.",
      ]},
      { t:'h', v:"Bonus: Winds" },
      { t:'liste', v:[
        "They give vital field-specific pollen and IC% stats that strongly buff whites.",
        "Depending on luck, they may determine which field you boost in.",
        "Remember to collect all winds for extra WP%.",
      ]},
      { t:'h', v:"Optimal donations" },
      { t:'etapes', v:[
        { t:"Gifted Mythic Egg", d:"Save these for HD boosts unless you have a lot. They're obtained through 'GME Boosts': you replace a few bees in your hive with rare bees to get onto the Rare Bee leaderboard without much issue." },
        { t:"Turpentine", d:"High winds, but expensive." },
        { t:"Swirled", d:"A really good source of Spider Winds." },
      ]},
      { t:'h', v:"How to improve" },
      { t:'liste', v:[
        "<b>Practice</b> \u2014 record your boosts so you can rewatch them and spot mistakes: precise drops, bad throws, bad timing, dropped combos. You can also ask other players to review them.",
        "<b>Watch others boost</b> \u2014 FragileSilence, Smarti66 and WR boost are good references for understanding white.",
      ]},
    ]},

    { titre:"2.4 Fields Analysis", blocs:[
      { t:'comp', v:[
        { nom:"Spider Field", notes:[
          "<b>Pro:</b> 100% white flowers.",
          "<b>Pro:</b> small field, with a good shape.",
          "<b>Con:</b> baby bees dislike this field (bugged).",
          "<b>Con:</b> only 1 type of useful Bloom spawns there (White).",
          "<b>Con:</b> hard to build a good stack of White Petals.",
        ]},
        { nom:"Coconut Field", notes:[
          "<b>Pro:</b> good blooms, with solid amounts of grey and white, plus a chance of violet, pink and periwinkle.",
          "<b>Pro:</b> baby bees like this field (bugged).",
          "<b>Pro:</b> small field.",
          "<b>Con:</b> you might simply fall off the field.",
          "<b>Con:</b> bad visibility.",
          "<b>Con:</b> you have to kill the crab on every account, and dedicate slots to damage.",
          "<b>Con:</b> heavily reliant on blooms.",
        ]},
        { nom:"Dandelion Field", notes:[
          "<b>Pro:</b> grey blooms are very common here.",
          "<b>Pro:</b> 2 more duped slots than Spider.",
          "<b>Pro:</b> the combo is easier to build.",
          "<b>Con:</b> a large field can be problematic.",
          "<b>Con:</b> heavily reliant on blooms.",
        ]},
      ]},
      { t:'note', v:"<b>Consensus:</b> mainly boost in Spider. The other fields may be worth boosting in if you don't get Spider winds, or depending on your Shell Amulet. The choice is personal preference, after all." },
    ]},

    { titre:"3. Alt Construction", blocs:[
      { t:'p', v:"Alt accounts play a massive role in how much honey you make. Do not skip out on them, or you'll make barely anything." },
      { t:'h', v:"The 4 mechanics they use" },
      { t:'liste', v:[
        "<b>Flower Pollination</b>",
        "<b>Balloon Aura</b>",
        "<b>Guiding Star</b>",
        "<b>Other support</b> \u2014 Gummy Bee, Gummy Mask and Gummy Boots give goo; Festive Bee provides festive gifts and the Festive Wreath; Digital Bee handles Map Corruption; Inspire Coconuts and Coconuts start Coconut Combos.",
      ]},
      { t:'note', v:"If you're running <b>2 alts or more</b>, they must have a dedicated pattern that's stable and doesn't move too far from their gumdropping spot: it's really important to keep the field full of goo at all times mid-boost." },
      { t:'h', v:"Side notes" },
      { t:'liste', v:[
        "<b>Precise, Rage and Vicious Bees</b> are used in every comp to kill the Wild Windy Bee, which lets you prep all vials in one windy \u2014 critical for boosting back-to-back (HD).",
        "<b>Mutations</b> should be emulated as best you can: boost producers need <b>BMS</b> for faster guide spawns, Vicious needs <b>Attack%</b> for comfort when killing Windy, and if you can't mutate mythics properly (BAR / BMS), <b>Energy%</b> makes a decent placeholder. The rest of the mutations are self-explanatory.",
        "A <b>Petal planter</b> must be bought to keep Spider, Coconut and Dandelion as the top 3 least gathered fields, for any on-field guiding alts (Fuzzy Guiding or Hybrid alts).",
        "It's highly recommended to get your alts to <b>lvl 20</b>; <b>lvl 15</b> works decently fine in the short term.",
        "As a general baseline, start with standard alts then transition into composite alts (1 Fuzzy + 1 Guiding becomes 2 Fuzzy-guiding). Obviously every alt is there for a reason, so this rule of thumb doesn't hold up for everyone: you might keep a solo guiding alt as a coco catcher, or a solo fuzzy for easier RBC runs.",
      ]},
    ]},

    { titre:"3.1 Guiding Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Combo-Guide Alt", sous:"Serves as a permanent off-field Coconut Catcher.",
          ratio:"Ratio: 0 Fuzzy Bees / 0 Buoyant Bees / 39 Boost Producers",
          notes:[
            "This specific comp runs <b>Guiding Star + Star Shower</b>, so you can abuse Inspire Coconuts to throw Coco Combos at insane rates.",
            "Keep in mind this is an off-field coconut catcher as well: catcher locations are in section 2.3 Technique.",
          ]},
      ]},
      { t:'h', v:"Utility: Guiding Star" },
      { t:'liste', v:[
        "It gives other players a <b>x1.25 pollen and capacity</b> bonus over the fields it's summoned on.",
        "Alt accounts use this amulet passive, paired with boost-producing bees, to try to spawn this star in the field being boosted.",
        "Multiple alts on out-of-sync cooldowns can be used for guide spam.",
        "That also lets you split Fuzzies over multiple accounts, which is worse for RBC.",
      ]},
    ]},

    { titre:"3.2 Balloon Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Buoyant Alt", sous:"Serves as a balloon spammer to sub in for other alts.",
          ratio:"Ratio: 0 Fuzzy Bees / 36 Buoyant Bees",
          notes:[
            "This comp complements multi-alt comps that have no Buoyants.",
            "Gifting Buoyants can be run for 'Surprise Party', but it's very inconsistent and usually not worth the cost and added lag. They'll also be instantly filled, so token production from them is negligible.",
            "Generally, Guide-Buo alts outperform this comp for honey-making, so use it as a temporary solution for balloons.",
          ]},
      ]},
      { t:'h', v:"Utility: Balloon Aura" },
      { t:'liste', v:[
        "Standing under balloons grants an aura buff of up to <b>x1.2 pollen</b> and <b>+20% Honey From Tokens</b> from balloons spawned by alts.",
        "Maintaining maximum stacks is difficult, but around <b>80 Buoyant Bees</b> across multiple on-field alts is enough most of the time. <b>~45</b> is the recommended amount to maximise the benefits.",
        "Keep in mind that adding 80 more bees to the field comes at a high cost in lag.",
      ]},
    ]},

    { titre:"3.3 Fuzzy Alts", blocs:[
      { t:'comp', v:[
        { nom:"Solo Fuzzy Alt", sous:"Prioritises pollinating over making guiding alts.",
          ratio:"Ratio: 24 Fuzzy Bees / 0 Buoyant Bees / 15 Boost Producers",
          notes:[
            "All Fuzzy alts should run <b>Scorch + Guiding</b> or <b>Shower + Guiding</b>.",
            "All bees are gifted for 'Inspire Coconuts', to start the Coconut Combo if the alt has a Coconut belt.",
            "This Solo Fuzzy Alt should only be used if you don't have many alts, or if you're looking to centralise Fuzzies for RBC utility. When boosting, Fuzzy-guiding outperforms this comp almost always.",
          ]},
      ]},
      { t:'h', v:"Utility: Flower Pollination" },
      { t:'liste', v:[
        "Allows lower tiers to be upgraded up to <b>tier 5 star flowers</b> using gifted Fuzzy Bees.",
        "Around <b>24 Fuzzy Bees</b> are needed to fully pollinate Spider, Coconut or Dandelion \u2014 this can change depending on pattern and lag.",
      ]},
    ]},

    { titre:"3.4 Composite Alts", blocs:[
      { t:'comp', v:[
        { nom:"2 Guide-Fuzzy Alts", sous:"A duo comp for full pollination with frequent guide spawns.",
          ratio:"12 Fuzzy (24 total) / 0 Buoyant / 27 Boost Producers",
          notes:[
            "Inspire production is cut here, but can be re-enabled for the Coco Combo.",
            "This comp doesn't use Buoyants: it's recommended to instead run 1 Fuzzy + 2 Guide-Buo, 2 Guide-Fuzzy + 2 Buo-Guide, or 3-4 Hybrid Alts.",
          ]},
        { nom:"2 Guide-Buo Alts", sous:"Used alongside 1 fuzzy or 2 hybrid alts.",
          ratio:"0 Fuzzy / 22 Buoyant (44 total) / 17 Boost Producers",
          notes:[
            "This comp relies on pollination by other alts, so it can focus purely on throwing balloons while also spawning guiding stars frequently.",
            "A third one can be run for better Balloon Aura.",
          ]},
        { nom:"3 Hybrid Alts", sous:"Leaves space for 1 extra alt of your choice.",
          ratio:"8 Fuzzy (24 total) / 18 Buoyant (54 total) / 13 Boost Producers",
          notes:[
            "A decent comp to run if you're running 3 clone alts. Having bees so decentralised can be annoying for things like RBC, but it still works well to boost with.",
            "Balloon and Boost Producers are interchangeable.",
          ]},
        { nom:"4 Hybrid Alts", sous:"Fully committing to splitting bees around.",
          ratio:"6 Fuzzy (24 total) / 20 Buoyant (80 total) / 13 Boost Producers",
          notes:[
            "The more hybrid comps you run, the harder they are to optimise. This is just the 3 Hybrid Alt comp with adapted pollination.",
            "Running more claimed alts is ill-advised.",
            "Balloon and Boost Producers are interchangeable.",
          ]},
      ]},
      { t:'note', v:"<b>Token Link Producers</b> \u2014 identical across all four comps: 4 Rage + 2 Paper Angel + 2 Paperclip + 1 Bead Lizard." },
    ]},

    { titre:"3.5 Gumdroppers", blocs:[
      { t:'liste', v:[
        "You are <b>required</b> to run <b>3 to 4 gumdroppers</b> to keep complete goo upkeep and growth of the Gummy Star.",
        "These can be on-field alts (Hybrid, Balloon, Fuzzy and so on) or friends and helpers.",
        "Gumdroppers can choose not to claim their hive to reduce lag, usually when they're other players, underdeveloped alts, or have already claimed 4 hives.",
        "They must have the <b>Gummy mask</b> and <b>900 to 1,200 gumdrops</b> per boost.",
        "Each alt or player has its own position and unique pattern, to maintain full coverage of the field.",
      ]},
      { t:'note', v:"The reference positions spread across four points of the field: two in the upper half, two in the lower half, far enough apart that the patterns don't overlap." },
    ]},

    { titre:"Credits", blocs:[
      { t:'p', v:"This guide is an adaptation of <b>The Definitive White Hive Guide</b>, written by <b>riot003</b> and <b>anthrox0</b>, published by the <b>Abyssal Trench Network</b>. Source document last updated: 26 March 2026." },
      { t:'liste', v:[
        "Original writing: <b>riot003</b> and <b>anthrox0</b>.",
        "Reference spreadsheets, tools and guides: <b>Abyssal Trench Network</b>.",
        "Sign values: <b>Tabby V</b>. Beequip stats: <b>Beequip Spreadsheet</b>.",
      ]},
    ]},

  ],
};
