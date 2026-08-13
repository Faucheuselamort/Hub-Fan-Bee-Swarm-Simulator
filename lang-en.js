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

  /* --- gabarits dynamiques : %1, %2... sont remplaces par tf() --- */
  u_miel       : "honey",
  u_bond       : "bond",
  u_niveau     : "Level",
  u_niv        : "Lv.",
  u_pv         : "HP",
  gratuit      : "Free",
  cpt_tous     : "%1 shown",
  cpt_part     : "%1 / %2 shown",
  respawn      : "↻ Respawns every %1",
  craft_ok     : "✦ %1 craftable",
  craft_ok_p   : "✦ %1 craftable",
  craft_dont   : "incl. %1 craftable",
  craft_dont_p : "incl. %1 craftable",
  miel_ok      : "✓ you have the honey",
  miel_manque  : "%1 short",
  bond_reste   : "You still need <b>%1 bond</b> to go from level %2 to level %3",
  bond_detail  : "%1 to buy · 1 Treat = %2 bond with your bonuses (10 base +%3%) · total bond %4 → %5: %6 · already accumulated: %7 bond (%8% of the %4 → %9 tier, which needs %10 bond)",
  lvl_prix     : "Cost to level up your %1 bee",
  lvl_prix_p   : "Cost to level up your %1 bees",
  lvl_sous     : "Without the bonus: %1 honey · Bond bonus applied: +%2%",
  trade_fair   : "⚖️ Fair trade (%1% gap).",
  trade_win    : "✅ In your favour: you get %1 more signs (+%2%).",
  trade_lose   : "❌ Against you: you give %1 signs too many (−%2%).",
  bloom_stats  : "%1 of %2 values · %3% complete",
  u_miel_c     : "Honey",
  la_page      : "the page",
  voir_page    : "View %1 →",
  langue_autre  : "Français",
};

/* ---------- Guide content ---------- */
LANGUES.en.GUIDE = {
  "Incolore": [],
  "Red": [
    {
      titre: "1.0 Switching Requirements",
      blocs: [
        {
          t: "h",
          v: "High Level Hive"
        },
        {
          t: "liste",
          v: [
            "Switching usually happens at <b>lvl 20+</b>: that is roughly how long it takes to complete the other requirements (alts, drives, materials, val).",
            "You can switch earlier, at <b>lvl 18-19</b>, if you would rather do your drives and amulets as red — but every other requirement should still be met."
          ]
        },
        {
          t: "h",
          v: "1.5 qd — Transition Cost"
        },
        {
          t: "liste",
          v: [
            "This is the minimum amount of honey you can comfortably switch with.",
            "<b>400-700t</b> to guarantee a fully gifted hive. Spend the honey on Ungifted Mythics + Gift from the Ticket shop. If the ticket price goes above <b>15t for 500</b>, switch to rolling Gifted Mythics with RJ only.",
            "<b>800-1000t</b> to guarantee a good SSA with <b>Scorch + Saw</b>. That is enough for a <b>decent 5/5</b> or an <b>amazing 4/5</b>.",
            "Tip: save up 700t, then keep spending any extra honey on SSA until you roll an amulet you are happy with. You then switch instantly with the 700t you kept."
          ]
        },
        {
          t: "h",
          v: "Dark Scythe + Coconut Belt"
        },
        {
          t: "liste",
          v: [
            "<b>Dark Scythe</b> is vital for Red Hives: it turns <b>Flames</b> into <b>Dark Flames</b>, which means bigger Scorch Stars plus extra <b>SCP</b> and <b>Red Ability IC</b>.",
            "You do not need to <b>have</b> it before transitioning, only the materials: the <b>250 Riley Bee Quests</b> can be done as a Red Hive.",
            "<b>Coconut Belt</b> provides a Coco combo of up to <b>50% RP / BP / WP / HFT / Attack</b>, <b>75% UIC</b> and <b>2x Pollen</b> at 100x combo.",
            "It is not directly required for the transition, but it is a must-have for boosting."
          ]
        },
        {
          t: "h",
          v: "Decently Upgraded Digital"
        },
        {
          t: "liste",
          v: [
            "You need at least <b>500 Red + White Drives</b> for your smileys to provide any meaningful honey.",
            "Preferably <b>100+ Glitched Drives</b>, for easier lineups and more corruption. That can be farmed as an RBC hive or with daily R25s as red.",
            "Colored drives can be done as any color. See the <b>Proper RBC Guide</b> for grinding Glitched Drives."
          ]
        },
        {
          t: "h",
          v: "Alt Accounts"
        },
        {
          t: "liste",
          v: [
            "At the very least <b>1 Fuzzy alt</b>, for maximum field pollination.",
            "Preferably <b>2 Fuzzy-guiding</b>, or <b>1 Fuzzy + 1 Off-field Guiding</b>. More can and should be run, but 2 is a decent baseline to start with."
          ]
        },
        {
          t: "h",
          v: "Beequips + Sticker Stack"
        },
        {
          t: "liste",
          v: [
            "Have a decent idea of the signs you need to buy all the required beequips for a Red Hive: without that you will struggle a lot more to get anywhere with boosts. On average, <b>100 signs of val</b> is a good baseline to transition with.",
            "Start building your <b>Sticker Stack</b> early with any spare stickers: aim for <b>200+</b> by the time you switch."
          ]
        },
        {
          t: "h",
          v: "Macro Availability"
        },
        {
          t: "liste",
          v: [
            "You are not forced to macro as much as Blue Hives, but you still need to be able to farm a lot of boosting materials (stinger, gumdrops, vials...).",
            "Make sure to get an <b>Offline Voucher</b> to maintain max nectars while boosting."
          ]
        },
        {
          t: "h",
          v: "Dedication"
        },
        {
          t: "liste",
          v: [
            "Red Hives require a lot more maintenance than you might expect. Plenty of players quit grinding <b>Glitched Drives</b> or end up feeling stuck.",
            "You need the dedication to push through and develop your honey over a long period of time."
          ]
        }
      ]
    },
    {
      titre: "1.1 Hive",
      blocs: [
        {
          t: "note",
          v: "These three hives are a <b>baseline</b>, not a fixed model. You can copy them when starting, then adjust the composition based on your beequip value and playstyle once you are confident in your ability to boost. There is no exact meta red hive: new ideas get theorycrafted and tested all the time."
        },
        {
          t: "comp",
          v: [
            {
              nom: "Starter Red Comp",
              sous: "The starting point right after switching.",
              ratio: "Ratio: 11 Precise / 9 Vector / 10 Spicy",
              notes: [
                "This comp assumes you have <b>500 Red + White drives</b> on Digital, <b>under 100 val</b> in beequips, and difficulty reaching <b>90 Attack</b> on Precise.",
                "<b>Rage (to be confirmed)</b>: gives great TL production, and holds the Whistle for haste (no melody). This bee also helps increase attack on Precises to reach 90 Attack during boosts.",
                "<b>Riley (to be confirmed)</b>: used for the <b>20% Red Field Cap</b> along with a Toy Drum holder (2%+ BAP + Haste). Do not run a second drum holder unless both have 5%+ BAP.",
                "<b>Baby (to be confirmed)</b>: very fast Baby Love token uptime. At this stage, do not swap them for 2 Tadpoles with Poinsettias, as you do not have enough val to make Poins worth running (needs 12%+ RP).",
                "<b>Carpenter (to be confirmed)</b>: 3 are mandatory, as you do not have the val for Honey Mark Smiley Stickers to replace them with. Single Mittens are run on them for extra Red Pollen%.",
                "<b>Basic (to be confirmed)</b>: holds the Pink Shades for extra SCP / SCC. Focus is optional (easier X-flame growth) but you cannot afford it. If you cannot find a pair of Shades, use a TL Lizard instead.",
                "<b>Music (to be confirmed)</b>: gives TL, Focus and Melody. Can be substituted for Lion with Toy Horn for 5% GAP instead of TL + Focus.",
                "<b>Shy</b>: 5% BAP and TL from Paper Angel. A very valuable bee, since a starter red hive has very few good sources of BAP.",
                "<b>Photon</b>: 5% IC and TL from Paper Angel. Can be substituted for Hasty with a TL Paperclip, for 15% PMS and cheaper ATL."
              ]
            },
            {
              nom: "Pre-Max Digital Comp",
              sous: "The middle stage, once you have some experience.",
              ratio: "Ratio: 11 Precise / 10 Vector / 12 Spicy",
              notes: [
                "This comp assumes you have <b>100-200 Glitched Drives</b> on Digital via daily R25 runs, around <b>300 val</b> in beequips, and much more boosting experience.",
                "<b>Rage (to be confirmed)</b>: can be changed for a 2nd Riley as a Toy Drum holder, since BAP on both drums should be high enough (5%+) to beat the TL from Rage. The 15% Bee attack is useless past 90 Attack on Precise, which you should have by now.",
                "<b>Carpenter (to be confirmed)</b>: 2 Carps are replaced by Honey Mark Smiley Stickers, and the freed slots filled by 1 Spicy and 1 Vector.",
                "<b>Basic (to be confirmed)</b>: Pink Shades should now have Focus for X-flame accumulation, but this is lower priority than other beequips (Sweatband, or more SCP on the Shades).",
                "<b>Tadpole (to be confirmed)</b>: you most likely do not have enough val, and it is not worth spending it on 12-15% RP Poinsettias to run any.",
                "<b>Photon</b>: 5% IC and TL from Paper Angel. Can be substituted for Hasty with a TL Paperclip, for 15% PMS and cheaper ATL."
              ]
            },
            {
              nom: "Max Digital Comp",
              sous: "The endgame comp.",
              ratio: "Ratio: 10 Precise / 10 Vector / 12 Spicy",
              notes: [
                "This comp assumes you now have a fully maxed Digital bee with all glitched drives, <b>500+ val</b> in beequips, and a complete understanding of boosting as red.",
                "<b>Rage (to be confirmed)</b>: same note as on the Pre-Max comp, can be changed for a 2nd Riley as a Toy Drum holder.",
                "<b>Precise / Spicy (to be confirmed)</b>: thanks to the extremely high corruption of a maxed Digital, you can drop 1 Precise for a 12th Spicy while still comfortably maintaining <b>3-5x Precise Marks / 10x Precision</b>.",
                "<b>Carpenter (to be confirmed)</b>: if you can afford a Melody Whistle / Charm, or are comfortable boosting with only 2 Melody producers, you can run a 2nd Paperclip instead of the Toy Horn, for extra ATL and Token Link. Move the Lip Balm to Crimson to free up the slot on Stubborn.",
                "<b>Fire (to be confirmed)</b>: 1.25x Flame Pollen, gathers flames, and a 2nd Paperclip holder can replace Music. To make up for the loss of Melody, either run only 2 producers or buy a Melody Whistle / Charm (put the Melody Charm on Carpenter Bee).",
                "<b>Baby (to be confirmed)</b>: if you have 15 slots and nothing else important to improve with val, you can run 1 Tadpole instead of a Baby bee, provided each Poinsettia has 13%+ RP. Single Mittens are also a good option at 9% RP.",
                "<b>Photon</b>: 5% IC and TL from Paper Angel. Can be substituted for Hasty with a TL Paperclip, for 15% PMS and cheaper ATL."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Max Digi Strategies (optional)"
        },
        {
          t: "liste",
          v: [
            "The very high corruption dupes more tokens, so some bees that are usually run can be removed.",
            "Running <b>3 Baby Love</b> is a viable option, although you will be more prone to losing Baby Love (x2 Pollen) during important times of the boost.",
            "Running <b>2 Melody</b> is also viable, with the same risk (+100% Crit Power). Melody is a less powerful buff than Baby Love, but it is a lot easier to fit into the comp.",
            "During Beesmas Boosts you often have a lot of Critical Power% (Robo Party Blessing for instance), which makes Tabby's Hive Bonus of <b>+50% Critical Power%</b> diminish in value."
          ]
        },
        {
          t: "p",
          v: "After these modifications, you will want, in order:"
        },
        {
          t: "etapes",
          v: [
            {
              t: "Fire Bee / Music Bee",
              d: "Whichever of the two you are missing."
            },
            {
              t: "13th Spicy Bee",
              d: "The next one to add."
            },
            {
              t: "14th Spicy / 11th Vector / 11th Precise",
              d: "User preference."
            }
          ]
        },
        {
          t: "note",
          v: "These adjustments are <b>optional</b> and might not yield the best results. It is recommended you try these comps yourself."
        },
        {
          t: "h",
          v: "Extra: RBC Hive"
        },
        {
          t: "liste",
          v: [
            "When transitioning, you can choose to first go RBC hive to grind drives and have an easier time boosting afterwards. This saves a lot of time over just doing daily R25 runs, which takes 250 days.",
            "Only do this if you plan on getting <b>100+ Glitched Drives</b>; if not, you can grind drives out by boosting red instead.",
            "Going RBC hive means you will <b>not be able to boost or make honey at all</b> during that time: it is a decently large commitment.",
            "For colored drives you do not need an RBC hive: those can be done as any color.",
            "For more info, see the <b>Proper RBC Guide</b>."
          ]
        }
      ]
    },
    {
      titre: "1.2 Amulets",
      blocs: [
        {
          t: "h",
          v: "Key of stats"
        },
        {
          t: "liste",
          v: [
            "<b>Blue</b> — most important stat, required for the amulet.",
            "<b>Green</b> — good stat, should be sought after.",
            "<b>Orange</b> — filler stat, decent buff.",
            "<b>Red</b> — hurtful, avoid entirely.",
            "<b>Gray</b> — guaranteed, get it as high as possible.",
            "Any stat not listed doesn't matter: running it or not changes nothing."
          ]
        },
        {
          t: "h",
          v: "Star Amulet — 5/5"
        },
        {
          t: "p",
          v: "Priority: <b>RP = CC > Pol > IC > BGP / BAR</b>. Passives: <b>Scorch + Saw</b>."
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Tier"
            ],
            rows: [
              [
                "Red Pollen",
                "+70%",
                "Required"
              ],
              [
                "Critical Chance",
                "+7%",
                "Required"
              ],
              [
                "Pollen",
                "+20%",
                "Required"
              ],
              [
                "Instant Conversion",
                "+12%",
                "Required"
              ],
              [
                "Bee Gather Pollen",
                "+70%",
                "Good"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "Aim for at least a <b>4/5 DP (to be confirmed)</b> with high RP and Pollen."
        },
        {
          t: "liste",
          v: [
            "<b>BGP</b> — stronger smileys.",
            "<b>BAR</b> — more frequent smileys.",
            "<b>IC</b> — less dependence on Blooms."
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
              "Tier"
            ],
            rows: [
              [
                "Critical Power",
                "+50%",
                "Required"
              ],
              [
                "Critical Chance",
                "+3%",
                "Required"
              ],
              [
                "Red Pollen",
                "+30%",
                "Required"
              ],
              [
                "Pollen",
                "+5%",
                "Good"
              ],
              [
                "Blue Pollen",
                "+30%",
                "Filler"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "<b>PMS</b> — helps with blooms.",
            "<b>Attack</b> — only run it if the attack on your other amulets is horrible.",
            "<b>Pollen</b> — tiny buff to honeymaking."
          ]
        },
        {
          t: "h",
          v: "Cog Amulet — 5/5"
        },
        {
          t: "p",
          v: "Priority: <b>RP = SCP > EBP >> RIC > BA</b>. Stat order: <b>SCP > EBP > BGP > Flame%</b>."
        },
        {
          t: "tab",
          v: {
            cols: [
              "Stat",
              "Maximum",
              "Tier"
            ],
            rows: [
              [
                "Red Pollen",
                "+30%",
                "Required"
              ],
              [
                "Event Bee Pollen",
                "+20%",
                "Required"
              ],
              [
                "Super Crit Power",
                "+25%",
                "Required"
              ],
              [
                "Red Instant Conv",
                "+5%",
                "Good"
              ],
              [
                "Bee Attack",
                "+15%",
                "Good"
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
              "Tier"
            ],
            rows: [
              [
                "Capacity",
                "+300k",
                "Guaranteed"
              ],
              [
                "Convert Rate",
                "1.25x",
                "Guaranteed"
              ],
              [
                "Red Pollen",
                "+30%",
                "Required"
              ],
              [
                "Bee Attack",
                "+10%",
                "Required"
              ],
              [
                "Bee Attack",
                "+1",
                "Good"
              ],
              [
                "Red Bee Attack",
                "+2",
                "Good"
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
              "Tier"
            ],
            rows: [
              [
                "Convert Rate",
                "+100%",
                "Guaranteed"
              ],
              [
                "Bee Attack",
                "+1",
                "Required"
              ],
              [
                "Any field pollen%",
                "—",
                "Filler"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "Field pollen% is only useful during RBC."
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
              "Tier"
            ],
            rows: [
              [
                "Capacity",
                "+250k",
                "Guaranteed"
              ],
              [
                "Honey Per Pollen",
                "+8%",
                "Required"
              ],
              [
                "Bond From Treats",
                "+10%",
                "Good"
              ],
              [
                "Movement collection",
                "—",
                "DO NOT RUN"
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
              "Tier"
            ],
            rows: [
              [
                "Goo",
                "+15%",
                "Guaranteed"
              ],
              [
                "Goo Conversion",
                "+10%",
                "Good"
              ],
              [
                "Pollen",
                "+5%",
                "Good"
              ]
            ]
          }
        },
        {
          t: "note",
          v: "The rest of the stats don't matter on this amulet."
        }
      ]
    },
    {
      titre: "1.3 Beequips",
      blocs: [
        {
          t: "p",
          v: "Beequips are one of the most important parts of a good hive: they provide unmatched buffs to fill, token production, capacity and general boosting."
        },
        {
          t: "liste",
          v: [
            "Currently only <b>13 slots</b> are available, which is why each slot must bring something valuable to your boosts.",
            "<b>14 and 15 slots</b> are possible if you completed Bee Bear's 2020 Beesmas quest.",
            "All the comps shown include 15 beequips, along with which ones to remove for a 13-slot hive.",
            "Due to sign inflation, prices change rapidly: refer to <b>Tabby V</b> for sign values, and to the <b>Beequip Spreadsheet</b> for stats. Keep in mind that <i>weight</i> is not the same thing as CHANCE."
          ]
        },
        {
          t: "h",
          v: "Mandatory beequips"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Beequip",
              "Approx. cost",
              "Stats to look for",
              "Run on"
            ],
            rows: [
              [
                "Sweatband",
                "~9-12 signs",
                "The most important beequip for Smiley Strength. <b>+25% Red Gather Amount</b> / +1% Red Pollen (HB). White Gather Amount is not needed at all. Bought in the Dapper Shop.",
                "Digital"
              ],
              [
                "Pink Shades",
                "~14-28 signs",
                "Mainly a good source of <b>SCP</b>. +%SCC (HB) / +2% SCP (HB) / +Focus, optional but useful for faster x-flame accumulation. From Honey Bee's Beesmas questline.",
                "Basic"
              ],
              [
                "Camphor Lip Balm",
                "~3-4 signs",
                "Invaluable multiplicative buff on Pepper: <b>1.06x Pepper Field Pollen</b> (HB). Easily buyable from the Dapper Shop.",
                "Stubborn / Crimson"
              ],
              [
                "Kazoo",
                "~3-8 signs",
                "Mandatory if running Shocked / Buoyant. Easy source of Melody and crits. +Melody / +1-4% CritP (HB) / +1% SCP (HB). Dapper Shop or Stickbug.",
                "Shocked"
              ],
              [
                "Whistle",
                "~2-9 signs (Melody = 120+)",
                "Cheap source of Haste, amazing for SCP, and a possible buff to Melody uptime, necessary if running only 2 producers. +Haste / +Melody / +2-3% SCP (HB). Dapper Shop.",
                "Rage"
              ],
              [
                "1-2 Toy Drums 🎄",
                "~14 signs",
                "Amazing buff to haste and ability pollen. +Haste / +2% BAP (HB). Only run 2 Toy Drums if they each have 5%+ BAP; the second one is interchangeable with the Whistle.",
                "1-2 Riley"
              ],
              [
                "1 Toy Horn 🎄",
                "~3 signs",
                "Good source of BAP and Melody uptime. +Melody / +1% BAP (HB).",
                "Crimson"
              ],
              [
                "2 Smiley Stickers",
                "~120 signs",
                "Allow you to remove a Carpenter Bee. <b>+Honey Mark</b> / +% Mark Duration (HB, per bee), optional.",
                "2 Spicy"
              ],
              [
                "2 Paper Angels 🎄",
                "~6-7 signs",
                "Great source of TL, with BAP and ATL bonuses for boosting. +Token Link (guaranteed) / +1% BAP / +2% ATL. Prioritise high ATL, as there are more sources of BAP. Relatively cheap to trade, or from the Stick Bug Challenge.",
                "Shy + Photon"
              ],
              [
                "2 Paperclips",
                "fluctuating",
                "Great source of TL and ATL for cheap, plus BAP. <b>+Token Link (required)</b> / +1-2% BAP / +2-4% ATL. Dapper Bear or trading.",
                "Rad + Fire / Rad + Stubborn"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Recommended beequips"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Beequip",
              "Approx. cost",
              "Stats to look for",
              "Run on"
            ],
            rows: [
              [
                "Charm Bracelet",
                "~100-200 signs",
                "Luxury melody source, extremely expensive to trade. +Melody; the rest of the stats are optional.",
                "Carpenter"
              ],
              [
                "Peppermint Antennas 🎄",
                "~8-40 signs",
                "Last resort pick: only run it if you have nothing else to put on a bee. +3-4% AR / +0-1% BAR (HB).",
                "Carpenter"
              ],
              [
                "Bead Lizard",
                "fluctuating",
                "Source of TL, plus BAP and Flame Pollen, however it cannot give ATL. Can replace a Paperclip if you are missing one. +Token Link (required) / +1-2% BAP. Dapper Bear or trading.",
                "Basic / Rad / Stubborn"
              ],
              [
                "1-3 Single Mittens 🎄",
                "~20-35 signs",
                "Filler beequip, though uncommon to find. A 9% RP Single Mitten on Baby Bee outclasses a Tadpole Bee + Poinsettia, unless that one is over 15% RP. Up to +9% Red Pollen.",
                "Any Legendary bee"
              ],
              [
                "Poinsettia 🎄",
                "far too much",
                "Extremely situational, only run it with really high RP. <b>13%+ RP</b> minimum to even consider it. +% Red Pollen / +% Bee Gather Pollen as a secondary stat.",
                "1 Tadpole"
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Other beequips"
        },
        {
          t: "liste",
          v: [
            "<b>Rose Headband</b> — only run it if you are boosting in Rose (see the Boosting Fields section)."
          ]
        }
      ]
    },
    {
      titre: "1.4 Extra Advice",
      blocs: [
        {
          t: "h",
          v: "Mutations"
        },
        {
          t: "liste",
          v: [
            "Once <b>starting as red</b>, do not focus on any mutations, since they provide very little value for their cost.",
            "Use any extra Bitterberries on <b>Events</b>.",
            "If you still have leftovers: <b>BMS</b> on 1 Precise + Vector, then <b>CA%</b> on all Spicies (it will be voided for BAR later).",
            "You automatically get mutations on all Rare, Epic and Legendary bees when switching using RJ, then gifting with fruits. Extremely cheap, just a bit time-consuming: 10-20t for all mutations."
          ]
        },
        {
          t: "h",
          v: "From lvl 20 onwards"
        },
        {
          t: "liste",
          v: [
            "You can look into getting good mutations for all your Mythics.",
            "It costs <b>~10k Bitterberries</b> or <b>~500t</b> for BMS / BAR per Mythic.",
            "That means <b>~300k Bitterberries</b> / <b>~15qd</b> for a fully mutated hive.",
            "It is about 2-4x that amount if you want <b>+5 BMS</b> / <b>4% BAR</b>."
          ]
        },
        {
          t: "note",
          v: "The source document lists by icon which bees take BMS, BAR or GA / Gather%. Those icons are not legible on the screenshots <b>(to be confirmed)</b>. What is legible: BMS also covers all other Rare, Epic and Legendary bees, and BAR is a decent BMS alternative."
        },
        {
          t: "h",
          v: "Mutation priority"
        },
        {
          t: "etapes",
          v: [
            {
              t: "Rare + Epic + Legendary",
              d: "Baby > Carps > Token Producers > Rest. Use RJ to get these mutations for cheap."
            },
            {
              t: "Events",
              d: "Digital > Bear > Tabby > Crimson > Photon. Use Bitterberries; BMS and BAR are relatively interchangeable for Event bees."
            },
            {
              t: "Mythics",
              d: "Precise > Vector > Spicy. Either RJ + fruits (mainly lvl 21+) or Bitterberries (mainly lvl 20+). CA% is a cheaper alternative for Spicy, and Attack% for Precise."
            }
          ]
        },
        {
          t: "h",
          v: "Levels"
        },
        {
          t: "p",
          v: "Leveling plays a vital role in honeymaking and will be the primary honey-sink for essentially all of your boosts."
        },
        {
          t: "etapes",
          v: [
            {
              t: "Events",
              d: "Digital >>>> the rest."
            },
            {
              t: "Mythics",
              d: "Precise > Spicy > Vector. Spicy levels increase Fire Bee duration when inferno is active and raise the chance for them to be gifted, which is more useful than Vector's mark duration buff."
            },
            {
              t: "Token Producers",
              d: "Baby, Hasty, Shocked, etc."
            },
            {
              t: "The rest of the bees",
              d: "Last."
            }
          ]
        }
      ]
    },
    {
      titre: "2.1 Boosting Preparation",
      blocs: [
        {
          t: "h",
          v: "Material preparations"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Quantity",
              "Material",
              "Notes / Purpose"
            ],
            rows: [
              [
                "2",
                "Glitter",
                "1. At the start of the boost, before using Loaded Dice. 2. After ~14m45s, to extend the x4 field boost."
              ],
              [
                "4",
                "Loaded Dice",
                "Guaranteed x4 field boost."
              ],
              [
                "2",
                "Super Smoothie",
                "A stat stick, but a consumable one."
              ],
              [
                "120-160",
                "Stinger (to be confirmed)",
                "Used to activate the <b>Star Saw</b> for drain. Mandatory."
              ],
              [
                "900-1.2k",
                "Gumdrops",
                "Used for abusing goo conversion: great IC for cheap. 1,200 on the main + on-field alts, for 40 minutes."
              ],
              [
                "40-60",
                "Jelly Beans",
                "Great buff to a lot of misc stats. Count <b>1 Jelly Bean per Scorch Star</b> if boosting multiple times."
              ],
              [
                "180-240",
                "Coconuts",
                "Cycles the Coconut Combo, which provides haste."
              ],
              [
                "10",
                "Cloud Vials",
                "+25% Pollen and +10% Unique IC (double with Windy). 10 on the main + on-field alts; use Vicious + Precise on the alts to gather all vials in one windy."
              ],
              [
                "1",
                "(to be confirmed)",
                "Optional, use during great lineups."
              ],
              [
                "∞",
                "Snowflakes",
                "+25% BGP, +5% HPP and x1.25 Capacity."
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Buff preparation"
        },
        {
          t: "tab",
          v: {
            cols: [
              "Buff",
              "Quantity",
              "Notes / Purpose"
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
                "At least max <b>Invigorating + Refreshing</b>. Preferably all 5, for extra buffs and x1.05 HPP."
              ],
              [
                "Puffshroom Blessing",
                "x100",
                "Provides UIC, HFT, Pollen and Capacity."
              ],
              [
                "Mondo Blessing",
                "—",
                "Mainly for the 10% Pollen, but it also provides capacity."
              ],
              [
                "Balloon Blessing",
                "x33-66",
                "Provides x2 to x3 Capacity, up to x4."
              ],
              [
                "Festive Nymph",
                "x250",
                "Capacity, Bee Attack, HPP and Instant Bee Gather Convert."
              ],
              [
                "Robo Party Blessing",
                "x100",
                "Capacity, Crit Power, Red Pollen, White Pollen (and Blue Pollen)."
              ],
              [
                "Honeyday Candles",
                "—",
                "Chance for extra Spicy bees."
              ],
              [
                "Honey Wreath",
                "—",
                "A bonus Honey Bee."
              ],
              [
                "Onett's Lid Art",
                "—",
                "Extra bees."
              ],
              [
                "Gummy Cannon",
                "—",
                "3 Gummy Bees = a lot of Gummy Tokens, meaning great gumdrop coverage and good goo conversion."
              ]
            ]
          }
        },
        {
          t: "h",
          v: "Extra pointers"
        },
        {
          t: "liste",
          v: [
            "Check for low, stable ping and good server quality.",
            "Make sure your server is inside your region (NA / Europe / Asia / Australia).",
            "Avoid peak playing hours (12:00 -> 18:00).",
            "Free Stinger / Jelly Bean macro: <b>Syspalkius</b>.",
            "Other boosting tools, patterns and macros: <b>Spctrl's Server</b>."
          ]
        },
        {
          t: "note",
          v: "The source document also points to an <b>Alt / Boosting Manager</b> (Ayaan's macro) and to a <b>Stinger Saving Guide</b>, but neither link has been published there yet."
        }
      ]
    },
    {
      titre: "2.2 Technique",
      blocs: [
        {
          t: "note",
          v: "Your first few boosts will be bad, and that is normal. Even if you have done everything technically correct (lvl 20+, drives, fully gifted hive...), your first boost might only make ~50T. <b>Don't get discouraged.</b> What follows will help you through the first few, but hands-on experience will teach you far more than any guide or video."
        },
        {
          t: "h",
          v: "Alt set up"
        },
        {
          t: "liste",
          v: [
            "Place the alts in the field of choice: in practice, basically always Pepper.",
            "Start using <b>Snowflakes</b> for 100%, use <b>Cloud Vials</b> every 3 minutes, and use <b>Gumdrops</b> at all times.",
            "<b>Jelly Beans</b> should be timed once Scorch activates — but if you have a lot, use them at all times.",
            "Ensure the sprinkler is placed correctly and slightly offset, to irrigate the whole field.",
            "<b>Ayaan's Boosting Manager</b> helps with this setup."
          ]
        },
        {
          t: "h",
          v: "Main account preparation"
        },
        {
          t: "liste",
          v: [
            "<b>Kill Mondo</b> for 6x+ Mondo Blessing: Stack active, 10x Precision, Precise Marks on the Mountain Top.",
            "<b>Return to Pepper</b>: refresh 10x Precision, set the Scorching Star to <b>15+/30</b> and the Star Saw to <b>2/3</b>, then Glitter Pepper.",
            "<b>During Beesmas</b>: 1. Riley Bee Candles, 2. Honey Bee's Wreath, 3. Onett's Lid Art. Use the Whirligig to return to the hive.",
            "<b>Field Winds</b>: donate Purple Pot / Atomic Treat for normal boosts (Atomic Treat is basically guaranteed Pepper Winds), and Gifted Gold Egg / Mythic Egg for big boosts (Mythic Egg is basically guaranteed Pepper Winds).",
            "<b>Super Smoothie + Loaded Dice.</b>",
            "Make sure to maintain <b>10x Precision</b> during all of this setup."
          ]
        },
        {
          t: "h",
          v: "Outside of Scorch"
        },
        {
          t: "liste",
          v: [
            "Maintain <b>10x Precision / 3x Precise Marks / Bloom Stacks</b>. Stand inside Precise Shots for the TL ability.",
            "Blooms give way too much UIC to ignore: try getting <b>100x Red Petal</b> whenever possible, and as many unique blooms as possible.",
            "Focus on insta-activating Scorch as soon as it is off cooldown.",
            "Use Precise's Focus tokens to control <b>X-flame</b> timing: if timed properly, it will greatly increase Scorch instantly.",
            "<b>Delay all buffs</b> outside of Scorch: dupe Bear Morph / Smileys, dupe Inspire, and Coconut Combo so that the buff applies during the star.",
            "Right before the Scorch Star starts, set up <b>4-5 Precise Marks</b>. They should last for 50%+ of your star; if any expire, activate a new one instantly."
          ]
        },
        {
          t: "h",
          v: "Inside Scorch"
        },
        {
          t: "liste",
          v: [
            "Ideally, <b>X-flame</b> activates together with Scorch for easier growth. If it's late, focus on activating it with targets; if it's early, delay scorch until it is resynchronized.",
            "Only turn flames <b>dark</b> after ~4 seconds have elapsed, for max growth.",
            "Only use the <b>Dark Scythe</b> for converting and for blooms.",
            "Try to maintain the <b>4-5 Precise Marks / Blooms / 10x Precision</b> you set up beforehand, and aim to activate as many targets as possible.",
            "<b>Do NOT stand inside targets</b> during Scorch, since it will completely ruin your <b>Flame Heat</b>, which should always be maintained during Scorch."
          ]
        },
        {
          t: "h",
          v: "Other things to pay attention to"
        },
        {
          t: "liste",
          v: [
            "Dupe tokens: Bear Morphs / Target Practice.",
            "Smiley tokens: try collecting them while a pink petal is caught, for 2x BGP.",
            "Convert <b>Flames</b> into <b>Dark Flames</b> before important lineups, for extra SCP.",
            "Beesmas lights falling are a great lineup-starter.",
            "Keep track of refreshing <b>glitter</b> and <b>smoothie</b>. If you plan to extend the boost to 40 minutes, use field dice after the 2nd glitter to refresh it.",
            "<b>Jelly Beans</b> can be used at the start of Scorch, or whenever they are off cooldown, depending on whether you want to preserve them for other boosts.",
            "<b>Festive Beans</b> should be timed during good lineups and right before the star. Try using them in the first few minutes of a boost, so that 100% IC is active during the Guiding Star (1.25x Pollen), and to make use of the extra bees from decorations."
          ]
        },
        {
          t: "h",
          v: "Common issue: conversion"
        },
        {
          t: "liste",
          v: [
            "When the bag is full, bees stop collecting pollen and moving, meaning a considerable drop in token production, which can really mess up lineups.",
            "This is solved by maximizing: Flames / Flame Heat / Dark Flames, Star Saw, Instant Conversion, bloom upkeep, Goo Conversion, Conversion Links and Guiding Star."
          ]
        },
        {
          t: "note",
          v: "<b>Do not use Festive Beans</b> only to fix a conversion issue."
        },
        {
          t: "h",
          v: "Common issue: smiley lineups"
        },
        {
          t: "liste",
          v: [
            "At first you may find it extremely difficult to cram all the buffs for a line-up within the short smiley token window.",
            "There isn't a direct fix, but you can prepare lineups before smileys spawn: good dupe tokens (Inspire / Target / Morph), jelly beans already activated, good bloom stacks.",
            "Get <b>Ability Token Lifespan</b> on more beequips.",
            "More <b>Glitched Drives</b> means higher smiley spawn rates."
          ]
        },
        {
          t: "h",
          v: "Common issue: X-flame timings"
        },
        {
          t: "liste",
          v: [
            "Delaying or speeding up focus token accumulation to time X-flame with Scorch is not easy.",
            "Try using software to easily keep track of your Scorch / X-flame buildup.",
            "Avoid over-dependence on <b>Token Link</b>, which takes away control from the tokens you collect.",
            "Use <b>Target Practice</b>, which can give both Red Boost and Focus, to gain more control over the production of the tokens needed to activate X-flame and Scorch.",
            "Keep in mind that this takes a lot of skill, which you will gain over time."
          ]
        },
        {
          t: "h",
          v: "How to improve"
        },
        {
          t: "liste",
          v: [
            "<b>Practice</b>: record your boosts to rewatch them and spot any mistakes (Precise drops, bad blooms, bad timing, combo drops...).",
            "Ask other players to review them if you need assistance.",
            "<b>Watch others boost</b>: it is the best way to gain personal insight into red boosting."
          ]
        }
      ]
    },
    {
      titre: "2.3 Boosting Fields",
      blocs: [
        {
          t: "h",
          v: "Pepper Patch"
        },
        {
          t: "liste",
          v: [
            "<b>Pro</b>: <b>Camphor Lip Balm</b> provides up to <b>x1.08</b> more pollen collection, making Pepper easily the best field to boost in.",
            "<b>Pro</b>: good bloom options — solid amounts of scarlet, some pink and green, and the rare periwinkle or marigold.",
            "<b>Con</b>: Baby bees dislike this field (bugged)."
          ]
        },
        {
          t: "h",
          v: "Rose Field"
        },
        {
          t: "liste",
          v: [
            "<b>Pro</b>: high amount of dupe token slots.",
            "<b>Pro</b>: good blooms, with solid amounts of purple and grey.",
            "<b>Pro</b>: <b>Rose Headband</b> gives a decent % buff to Rose, though outclassed by PPP on the Lip Balm.",
            "<b>Con</b>: bad boost visibility, due to the big rose decorations.",
            "<b>Con</b>: inferior amount of pink and scarlet blooms."
          ]
        },
        {
          t: "h",
          v: "Strawberry Field"
        },
        {
          t: "liste",
          v: [
            "<b>Pro</b>: high amounts of Pink Blooms.",
            "<b>Pro</b>: <b>King Beetle Amulet</b> can give up to 100% Straw Pollen.",
            "<b>Con</b>: low red/white flower ratio.",
            "<b>Con</b>: few dupe token slots.",
            "<b>Con</b>: the size is awkward, making any smiley or bloom spawn near the edge of the field awful.",
            "<b>Con</b>: no field-specific beequip that competes with the Balm or the Headband."
          ]
        },
        {
          t: "note",
          v: "Consensus: basically, always boost in <b>Pepper</b>. Even if windless, Pepper is still better than any other option."
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
            "If you aren't willing to spend the extra time to do an RBC Blessing boost, you can do a standard blessing boost for <b>20-40x</b>.",
            "Make sure to swap to the <b>Diamond Mask</b> for extra capacity.",
            "Replace a few non-mythic / event bees with <b>Buoyants</b> (1-8) and add a few capacity-buffing beequips (Headband, Snow Tiara, Sunhat, etc.).",
            "Use a <b>4x Pepper Patch boost</b>, Purple Potion / Super Smoothie and the Sticker Stack while remaining on the field for 15 minutes: use micro converters to achieve this.",
            "Use a Whirligig when returning, to convert a balloon."
          ]
        },
        {
          t: "h",
          v: "RBC Blessing Boost"
        },
        {
          t: "liste",
          v: [
            "This part is covered in <b>The Official Blue RBC Guide</b>.",
            "Likewise, as with the Standard Blessing Boost, make sure to use the <b>Diamond Mask</b> and to replace bees and beequips with Buoyants and capacity buffers."
          ]
        },
        {
          t: "h",
          v: "Maintaining Balloon Blessing"
        },
        {
          t: "liste",
          v: [
            "For a non-buoyant hive composition, maintaining the <b>Balloon Blessing</b> can be unintuitive.",
            "While boosting, refresh it via the <b>Robo Bear Challenge</b>, since it automatically refreshes the blessing at the end of a round, even if you lose.",
            "If maintaining it overnight, replace one or two bees with <b>Buoyant Bees</b>, so that the macro automatically converts the balloons at the hive. Replace these bees when boosting again."
          ]
        }
      ]
    },
    {
      titre: "3. Alt Accounts",
      blocs: [
        {
          t: "p",
          v: "Alt accounts play a massive role in how much honey you make. Do not skip out on them, or else you'll make barely anything. The <b>Complete Alt Account Guide</b> covers the topic in detail."
        },
        {
          t: "h",
          v: "The 4 mechanics they use"
        },
        {
          t: "liste",
          v: [
            "<b>Flower Pollination.</b>",
            "<b>Balloon Aura.</b>",
            "<b>Guiding Star.</b>",
            "<b>Other support</b>: Gummy Bee, Gummy Mask and Gummy Boots give goo; Festive Bee provides festive gifts and the Festive Wreath; Digital Bee is used for Map Corruption; Inspire Coconuts and Coconuts start Coconut Combos."
          ]
        },
        {
          t: "note",
          v: "If running <b>2 alts or more</b>, they must have a dedicated pattern that's stable and doesn't move too much from their gumdropping spot: it is really important to have the field full of goo at all times mid-boost."
        },
        {
          t: "h",
          v: "Side notes"
        },
        {
          t: "liste",
          v: [
            "<b>Precise, Rage and Vicious</b> bees are used in every comp to kill the Wild Windy Bee. That allows you to prep all vials in one windy, which is critical for boosting back-to-back (HD).",
            "<b>Mutations</b> should be emulated to the best of your ability: BMS on boost producers for faster guide spawns, Attack% on Vicious for QoL when killing Windy, and Energy% as a decent placeholder if you are unable to mutate your mythics properly (BAR / BMS). The rest of the mutations are self-explanatory.",
            "A <b>Petal Planter</b> must be bought to maintain Spider / Coconut / Dandelion as the top 3 least gathered fields, for any on-field guiding alt (Fuzzy Guiding, Hybrid alts).",
            "It is highly recommended to get your alts to <b>lvl 20</b>; <b>lvl 15</b> works decently fine for the short term.",
            "As a general baseline, start with standard alts, then transition into composite alts (1 Fuzzy + 1 Guiding, then 2 Fuzzy-guiding). Obviously, every alt is there for a reason and they all serve their purpose, so this rule of thumb does not hold up for everyone. You may well keep a solo guiding alt as a coco catcher, or a solo fuzzy for easier RBC runs."
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
              sous: "Serves as a permanent off-field Coconut Catcher.",
              ratio: "Ratio: 0 Fuzzy Bees / 0 Buoyant Bees / 39 Boost Producers",
              notes: [
                "This specific comp runs <b>Guiding Star + Star Shower</b>, so you can abuse Inspire Coconuts to throw Coco Combos at insane rates.",
                "Keep in mind this is an off-field coconut catcher as well: see the Technique section for catcher field locations."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility: Guiding Star"
        },
        {
          t: "liste",
          v: [
            "Gives other players a <b>x1.25</b> pollen and capacity bonus over the fields it is summoned on.",
            "Alt accounts use this amulet passive, paired with boost-producing bees, to try to spawn this star in the field being boosted in.",
            "Multiple alts with out-of-sync cooldowns can be used for guide spam.",
            "That also allows you to slip Fuzzies over multiple accounts, though it is worse for RBC."
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
              sous: "Serves as a balloon spammer to sub other alts.",
              ratio: "Ratio: 0 Fuzzy Bees / 36 Buoyant Bees",
              notes: [
                "This comp is used to complement Multi-Alt comps without Buoyants.",
                "Gifting Buoyants can be run for Surprise Party, but it is very inconsistent and usually not worth the cost and lag increase. They will also be instantly filled, so token production from them is negligible.",
                "Generally, Guide-Buo alts outperform this comp for honey-making, so use this as a temporary solution for balloons."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility: Balloon Aura"
        },
        {
          t: "liste",
          v: [
            "Standing under balloons grants an aura buff, up to <b>x1.2 pollen</b> and <b>+20% Honey From Tokens</b> from balloons spawned by alts.",
            "Maintaining maximum balloon aura stacks can be difficult, but about <b>80 Buoyant Bees</b> across multiple on-field alts are enough to keep up max stacks most of the time.",
            "<b>~45</b> is the recommended amount to maximize benefits.",
            "Keep in mind that adding 80 more bees to the field will have a high cost in lag."
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
              sous: "Prioritizes pollinating over making guiding alts.",
              ratio: "Ratio: 24 Fuzzy Bees / 0 Buoyant Bees / 15 Boost Producers",
              notes: [
                "All Fuzzy alts should run <b>Scorch + Guiding</b> or <b>Shower + Guiding</b>.",
                "All bees are gifted for Inspire Coconuts, for starting the Coconut Combo, if the alt has a Coconut Belt.",
                "This Solo Fuzzy Alt should only be used if you don't have many alts, or are looking to centralise Fuzzies for RBC utility. When boosting, Fuzzy-guiding outperforms this comp almost always."
              ]
            }
          ]
        },
        {
          t: "h",
          v: "Utility: Flower Pollination"
        },
        {
          t: "liste",
          v: [
            "Allows lower tiers to be upgraded up to a maximum of tier 5 star flowers, using gifted Fuzzy Bees.",
            "Around <b>24 Fuzzy Bees</b> are needed to fully pollinate Spider / Coconut / Dandelion, which can change depending on pattern and lag."
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
              sous: "Duo comp for full pollination with frequent guide spawns.",
              ratio: "Ratio: 12 Fuzzy Bees (24 total) / 0 Buoyant Bees / 27 Boost Producers",
              notes: [
                "Inspire production is cut here, but can be re-enabled for Coco Combo.",
                "This comp doesn't use Buoyants: it is recommended to instead run 1 Fuzzy + 2 Guide-Buo, 2 Guide-Fuzzy + 2 Buo-Guide, or 3-4 Hybrid Alts."
              ]
            },
            {
              nom: "2 Guide-Buo Alts",
              sous: "Used alongside 1 fuzzy or 2 hybrid alts.",
              ratio: "Ratio: 0 Fuzzy Bees / 22 Buoyant Bees (44 total) / 17 Boost Producers",
              notes: [
                "This comp relies on pollination by other alts, so it can focus purely on throwing balloons while also spawning guiding stars frequently.",
                "A third one can be run for better Balloon Aura."
              ]
            },
            {
              nom: "3 Hybrid Alts",
              sous: "Leaves space for 1 extra alt of your choice.",
              ratio: "Ratio: 8 Fuzzy Bees (24 total) / 18 Buoyant Bees (54 total) / 13 Boost Producers",
              notes: [
                "A decent comp to run if you're running 3 clone alts. Having bees so decentralized can be annoying for stuff like RBC, but it still works well to boost with.",
                "Balloon and Boost Producers are interchangeable."
              ]
            },
            {
              nom: "4 Hybrid Alts",
              sous: "Fully committing to splitting bees around.",
              ratio: "Ratio: 6 Fuzzy Bees (24 total) / 20 Buoyant Bees (80 total) / 13 Boost Producers",
              notes: [
                "The more hybrid comps you run, the harder it is to optimise them. This is just the 3 Hybrid Alt comp with adapted pollination.",
                "Running more claimed alts is ill-advised. Balloon and Boost Producers are interchangeable."
              ]
            }
          ]
        },
        {
          t: "p",
          v: "<b>Token Link Producers</b>, identical across all four comps: 4 Rage + 2 Paper Angel + 2 Paperclip + 1 Bead Lizard."
        }
      ]
    },
    {
      titre: "3.5 Gumdroppers",
      blocs: [
        {
          t: "liste",
          v: [
            "You are required to run <b>3-4 alts gumdropping</b> to keep complete goo upkeep: it is a big honey buff.",
            "These can either be on-field alts (Hybrid / Balloon / Fuzzy...) or friends and helpers.",
            "Any extra gumdroppers can choose not to claim their hive to reduce lag — usually when they are other players, underdeveloped alts, or when 4 hives are already claimed.",
            "They must have a <b>Gummy Mask</b> and <b>900-1200 gumdrops</b> per boost.",
            "Each alt or player has its own position and unique pattern, to maintain full coverage of the field."
          ]
        },
        {
          t: "note",
          v: "The source document includes an image of the <b>gumdropping positions</b> in the Pepper Patch, with five spots spread across the field. It has not been reproduced here yet."
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
          v: "<b>EBP</b> directly buffs Digital Smileys, unlike <b>BGP</b>. Comparison of EBP vs BGP on the <b>Cog Amulet</b>."
        },
        {
          t: "liste",
          v: [
            "BGP sticker sources: 2% Bee Gather Voucher, 2% Pale Heart, 2% Rhubarb, 2% Orphan Dog, 3% Critter in a Stocking, 10% from all 5 Critters, 20% Stack Badge - Master.",
            "EBP sticker sources: 2% Bear Bee Offer, 2% Grey Diamond Logo, 2% Shiitake Mushroom, 2% Flying Bear Bee, 2% Nessie.",
            "Other BGP sources: 70% from SSA, and Poinsettias. Other EBP sources: none.",
            "Assumptions for the maths: BGP from Poinsettias set at 0%, BGP from SSA either 0% or 70% only, Sticker Stack maxed out, and x2 BGP Voucher / WGA / RGA / Mutations GA not included."
          ]
        },
        {
          t: "tab",
          v: {
            cols: [
              "Calculation",
              "Outside Beesmas",
              "During Beesmas"
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
                "Cog gain on BGP (0% BGP SSA)",
                "x1.21",
                "x1.17"
              ],
              [
                "Cog gain on BGP (70% BGP SSA)",
                "x1.14",
                "x1.12"
              ],
              [
                "Cog gain on EBP",
                "x1.185",
                "x1.17"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "Outside Beesmas: with a <b>BAR SSA</b>, 21/18.5 = <b>x1.13</b>; with a <b>BGP SSA</b>, 18.5/14 = <b>x1.32</b>. EBP on the Cog is therefore better.",
            "During Beesmas, BGP and EBP get an additional 35% and 10% respectively.",
            "During Beesmas: with a <b>BAR SSA</b>, 17/17 = <b>x1.00</b>, so EBP or BGP on the Cog makes no difference; with a <b>BGP SSA</b>, 17/12 = <b>x1.417</b>, EBP is a lot better."
          ]
        },
        {
          t: "h",
          v: "Super-Crit Power is more valuable in Kazoo than Crit Power"
        },
        {
          t: "liste",
          v: [
            "A previous guide concluded that 1% SCP was worth about 1.8% Critical Power. That calculation was based on <b>White Hives</b> and does not reflect the changes in the stack percentages of stickers. For <b>Red</b>, 1% SCP is worth more than 1.8% C.Power.",
            "SCP sticker sources: 1% each from Precise Eye, Squashed Head Bear, Stretched Head Bear, Purple Fleuron, Royal Symbol, Royal Bear and 4-Point Flower.",
            "Crit Power sticker sources: 1% each from Wobbly Looker Bee, Tabby From Behind, Uplooking Bear, Wishbone, Triple Exclamation, Eight Note, Green Circle, Interrobang Block and Taunting Doodle Person; 2% Blue Square; 3% Black Diamond.",
            "Other SCP sources: 200% base stat, 25% Cog Amulet, and an assumed 5% on Pink Shades. Total: <b>237%</b>.",
            "Other Crit Power sources: 200% base stat, 100% Cobalt Guard, 100% GM Battle Badge, 100% Melody, 50% Gifted Tabby, 50% Ant Amulet. Total: <b>613%</b>.",
            "SCC sources: 20% Precision, 21% Precise Marks, 3% Gifted Precise, 1% Super Smoothie, and an assumed 1% on Pink Shades. Crit Chance doesn't matter in this case.",
            "1% Crit Power affects all crits, normal and super, by (1 / base crit power). 46% of those critical strikes will be Super-Crits and will have 237% impact: [(1/613) x 0.54] + [(1/613) x 0.46 x 2.37] = 0.00265938009.",
            "1% SCP only affects Super-Crits, by (1 / base SCP): [(1/237) x 0.46 x 2.37] = 0.0046.",
            "0.0046 / 0.0025187602 = 1.734621063, therefore <b>1% SCP = 1.73% C.Power</b> only.",
            "However, Red Hives have <b>Dark Flames</b>. Assuming x20 Dark Heat stacks, which means x2 Super-Crit Power: [(1/613) x 0.54] + [(1/613) x 0.46 x 2.37 x 2] = 0.00443784665, and [(1/237) x 0.46 x 2.37 x 2] = 0.0092.",
            "0.0092 / 0.00443784665 = 2.0730774913, hence <b>1% SCP = 2.07% C.Power</b> for Red Hives."
          ]
        },
        {
          t: "h",
          v: "Why is SCC more valuable than SCP?"
        },
        {
          t: "liste",
          v: [
            "Assume 0% SCC and 0% SCP on Pink Shades.",
            "SCC sources: 20% Precision, 21% Precise Marks, 3% Gifted Precise, 1% Super Smoothie. Total: <b>45%</b>.",
            "SCP sources: 200% base stat, 25% Cog Amulet, 7% from a maxed-out Sticker Stack. Total: <b>232%</b>.",
            "45% of critical strikes will be Super-Crits with an impact of 232%, so (0.45 x 232%) = <b>104.4%</b> more on critical hits.",
            "Gaining an additional 1% SCC while retaining the SCP%: (0.46 x 232%) = <b>106.72%</b>.",
            "Determining the value of SCP when SCC is held constant: 0.45 x SCP = 106.72, so SCP = <b>237.16</b>.",
            "237.16% - 232% = <b>5.16%</b>: to match the value of 1% SCC, a 5.16% SCP value is needed."
          ]
        },
        {
          t: "h",
          v: "Why is Camphor Lip Balm better even if Rose Headband is loaded with stats?"
        },
        {
          t: "liste",
          v: [
            "The value of <b>x1.08 PPP</b> may seem small numerically, but it is significantly stronger than the Rose Headband's +20% Rose Field Pollen, since PPP is a direct multiplicative modifier applied to the total amount of field pollen.",
            "The PPP hive bonus from the beequip is a multiplier and not an additive: unlike +% Field Pollen, it doesn't get diluted in strength by additional field pollen sources.",
            "Assumptions: Lip Balm at x1.05 to x1.08 Pepper Patch Pollen, Headband at +20% Rose Field Pollen (+% RFCap not considered), Field Winds at x6, x10 and x12 for illustration, and the Field Stamps stack counted as it provides 10% Field Pollen."
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
                "453% gives 475.65% (x1.05) / 480.18% (x1.06) / 484.71% (x1.07) / 489.24% (x1.08)",
                "459% gives 479%"
              ],
              [
                "x10",
                "465% gives 488.25% / 492.9% / 497.55% / 502.2%",
                "475% gives 495%"
              ],
              [
                "x12",
                "471% gives 494.55% / 499.26% / 503.97% / 508.68%",
                "483% gives 503%"
              ]
            ]
          }
        },
        {
          t: "liste",
          v: [
            "A CLB at <b>x1.06 PPP</b>, the minimum required by the guide, is already better than a 20% Rose Headband at x6 Field Winds, which is what you usually get by donating Atomic Treats.",
            "The gap gets even wider afterwards, as PPP is multiplicative while the Headband's field pollen is additive.",
            "The CLB's x1.0* PPP also scales better than any +% SCP from other beequips, as the latter relies on RNG being +% SCC.",
            "The Rose Headband only becomes better if Galentine's Blessing's <b>+50% RFP</b> is considered. Even then it would need hive changes, and it is very much player-skill-based: Rose Field has bad visibility, and due to the field size it is harder to connect marks, thus more Vectors / Carpenters would be needed."
          ]
        }
      ]
    },
    {
      titre: "5. FAQS",
      blocs: [
        {
          t: "etapes",
          v: [
            {
              t: "Why does it cost so much honey to switch to Red Hive?",
              d: "Red relies on bees being gifted even more than Blue. Buoyant and Tadpole are the two Mythics with the least important gifted-only ability for their respective hive color, whereas Red Hives need all their bees to be gifted. On top of that, rolling for SSA costs a lot — aim for a Scorch-Saw amulet with as high stats as possible, as you will not have any passive honey source post-switch."
            },
            {
              t: "What to do during a boost when the Precision stack dies?",
              d: "Outside Scorch, try to stall Scorch while stacking up on Precision. During Scorch, continue triggering Precise Marks as usual, as Precision will passively build up by hitting all three targets."
            },
            {
              t: "Is there a way to spawn marks in specific spots in the field?",
              d: "Target Practice tends to gravitate towards the four corners of a field and will shoot towards the opposite side. For example, if aiming to make the Precise Bees shoot targets at the bottom-left, the player should be located at the top-right when activating targets. Other marks spawn randomly around the field and are impossible to control."
            },
            {
              t: "How much should I make per boost?",
              d: "It is hard to estimate, as it heavily depends on skill. While good red hives should be able to hit 1QD per boost at the minimum, it is more important to focus on what is going wrong in the boost and on perfecting the account than on the numbers. Recording your boosts and playing them back afterwards will help you identify issues."
            },
            {
              t: "Is Red fun?",
              d: "Red offers the most versatility of all three hive colors in terms of activities: Puffshroom Runs, Retro Swarm and RBC can all be done without needing major changes to the hive, while White and Blue Hives will have to make changes, and perform worse than Red Hives."
            },
            {
              t: "Why are my boosts bad?",
              d: "Red takes a lot of skill to boost well. Understanding game mechanics and timings is essential, and the first 5-10 boosts will likely go horrendously while you get used to managing all your uptime buffs along with general pollen collection. With enough practice, everyone should do better. Boosts can be practiced without using any materials, by letting Spicy Bee convert bag fill, purely to simulate buff uptime management."
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
          v: "This guide is an adaptation of <b>The Definitive Red Hive Guide</b>, written by <b>riot003</b> and <b>anthrox0</b>, published by the <b>Abyssal Trench Network</b>. Source document last updated: 3 April 2026."
        },
        {
          t: "liste",
          v: [
            "Original writing: <b>riot003</b> and <b>anthrox0</b>.",
            "Proofreading: <b>@stingerabbasiii</b>, <b>@ashirymafik</b>, <b>@veterul</b>.",
            "Reference spreadsheets, tools and guides: <b>Abyssal Trench Network</b>.",
            "Sign values: <b>Tabby V</b>. Beequip stats: <b>Beequip Spreadsheet</b>."
          ]
        }
      ]
    }
  ],

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

/* ---------- Dictionary: French source text -> English ----------
   Applied to the DOM at display time by traduireDOM() in app.html.
   A key starting with \u0000ATTR\u0000 targets an attribute
   (placeholder / title / aria-label) and not a text node.
   Game data (bee, item, sticker names, stats, categories)
   is never translated: it stays in English on both sides. ---------- */
LANGUES.en.TXT = {
  "(bssmvalues) et, pour la plupart, leur description et leur": "(bssmvalues) and, for most of them, their description and their",
  "(le Nectar Tester aussi), et toutes les gelées portant un nom d'abeille réutilisent": "(the Nectar Tester too), and every jelly named after a bee reuses",
  "(moyenne de la fourchette). Choisis dans les listes déroulantes (classées par catégorie).": "(midpoint of the range). Pick from the drop-down lists (sorted by category).",
  "(quel succès, quelle quête, quel mur) n'est publiée sur le wiki que sous forme d'icônes dans une colonne « Where it's from », que je ne peux pas lire automatiquement. Les 289 fiches ont donc leur description et leur Stack Boost, mais pas leur source individuelle : c'est le champ qu'il te restera à remplir à la main si tu veux aller jusque-là.": "(which achievement, which quest, which wall) is only published on the wiki as icons in a “Where it's from” column, which I cannot read automatically. The 289 entries therefore have their description and their Stack Boost, but not their individual source: that is the field left for you to fill in by hand if you want to go that far.",
  "(taille max d'une ruche). Les deux totaux doivent être égaux : ce sont les mêmes abeilles qui montent de niveau.": "(max hive size). Both totals must match: these are the same bees levelling up.",
  "(wiki officiel). La recherche fouille aussi dans les descriptions et les bonus : tape « Critical Power » ou « Capacity » pour voir. Images dans": "(official wiki). The search also looks through descriptions and bonuses: type “Critical Power” or “Capacity” to see. Images in",
  ") qui ne se lit pas automatiquement : les tableaux sont générés à l'affichage. J'ai donc mis tout ce qui est vérifiable — paliers, conditions, coûts en miel, passifs complets — mais pas le détail statistique ligne par ligne.": ") which cannot be read automatically: the tables are generated on display. So I have included everything verifiable — tiers, requirements, honey costs, full passives — but not the line-by-line stat detail.",
  "+25 000 à chaque nouvelle amulette": "+25,000 for each new amulet",
  ", au même endroit.": ", in the same place.",
  ", calquées sur l'inventaire du wiki.": ", modelled on the wiki inventory.",
  ", les tirets et les apostrophes étant conservés : « Basic Egg » →": ", with dashes and apostrophes kept as they are: “Basic Egg” →",
  ", palier par palier, vivent dans un module Lua du wiki (": ", tier by tier, live in a Lua module on the wiki (",
  ". Ce sont souvent les plus chers en trade.": ". They are often the most expensive in trades.",
  ". Ils ne peuvent pas être posés, donnés au Stack, ni échangés depuis l'Inbox.": ". They cannot be placed, given to the Stack, or traded from the Inbox.",
  ". La liste des emplacements connus est plus bas.": ". The list of known spots is further down.",
  ". Le coût démarre à 20 tickets et plafonne à 1 000 tickets par palier (à partir de 112 emplacements). Pour aller de 16 à 120 places, il faut": ". The cost starts at 20 tickets and caps at 1,000 tickets per tier (from 112 slots onwards). Going from 16 to 120 slots takes",
  ". Le nom du fichier reprend celui de l'item avec les": ". The file name reuses the item's name with",
  ". Les autres dossiers (stickers, beequip, amulette, bees) gardent les": ". The other folders (stickers, beequip, amulette, bees) keep",
  ". Les autres récompenses tombent quoi qu'il arrive. Si tu te déconnectes sans choisir, tu récupères le choix en revenant.": ". The other rewards drop no matter what. If you log off without choosing, you get the choice back when you return.",
  ". Pas besoin de tout remplir — mais le total est limité à": ". You don't have to fill everything in — but the total is capped at",
  ". Un seul exemplaire de chaque sticker peut y aller. Attention : un sticker": ". Only one copy of each sticker can go in. Careful: a sticker",
  ". À gauche, les objets (Mutation, Beequip) — bientôt à glisser sur les abeilles.": ". On the left, the objects (Mutation, Beequip) — soon to be dragged onto the bees.",
  "0 à 24 points": "0 to 24 points",
  "1 chance sur 100 d'avoir Guiding Star ou Star Shower": "1 in 100 chance of Guiding Star or Star Shower",
  "1 passif garanti sur 6 · 1 chance sur 50 d'en avoir deux · option 500 B miel pour garantir le double": "1 guaranteed passive out of 6 · 1 in 50 chance of getting two · 500 B honey option to guarantee the double",
  "1 seconde d'attente entre deux générations. Le Diamond Star Amulet a 1 chance sur 1 000 000 de donner un Star Cub Skin.": "1 second of cooldown between two generations. The Diamond Star Amulet has a 1 in 1,000,000 chance of giving a Star Cub Skin.",
  "1 · Ingrédients directs": "1 · Direct ingredients",
  "100 Moon Charms par génération": "100 Moon Charms per generation",
  "100 à 149 points": "100 to 149 points",
  "150 points et plus": "150 points and above",
  "25 à 49 points": "25 to 49 points",
  "26 catégories": "26 categories",
  "3 à 4 bonus au total, dont un bonus d'attaque qui n'apparaît pas toujours": "3 to 4 bonuses in total, including an attack bonus that does not always show up",
  "4 clics supplémentaires": "4 extra clicks",
  "4 contraintes à respecter": "4 requirements to meet",
  "50 à 99 points": "50 to 99 points",
  "7 à partir de 40 abeilles": "7 from 40 bees onwards",
  ": au-delà, on peut obtenir des valeurs plus élevées.": ": beyond that, higher values can show up.",
  ": il faut le remettre à la main.": ": you have to put it back by hand.",
  ": les 11 pourcentages ci-dessus sont constants quel que soit le niveau. Le niveau agit uniquement sur la": ": the 11 percentages above are constant whatever the level. The level only affects the",
  ": sauvegarde modifiable, à ré-importer plus tard pour continuer ta ruche.": ": an editable save file, to re-import later and carry on with your hive.",
  ": un +20 % Gather Amount peut redescendre à +18 %.": ": a +20% Gather Amount can drop back to +18%.",
  ": une image PNG à garder ou partager (Discord…).": ": a PNG image to keep or share (Discord…).",
  "Abeille en guimauve : objet spécial, hors des catégories habituelles.": "Marshmallow bee: special item, outside the usual categories.",
  "Abeilles Gifted découvertes": "Gifted bees discovered",
  "Accordé aux êtres divins.": "Granted to divine beings.",
  "Aimant qui attire le pollen des fleurs alentour.": "A magnet that pulls in pollen from the flowers around it.",
  "Ajoute des objets de chaque côté ; l'outil compare la valeur totale. Les valeurs sont celles des": "Add items on each side; the tool compares the total value. The values are those of the",
  "Ajoute des objets pour comparer.": "Add items to compare.",
  "Ajoute deux abilities d'un coup, mais réservé aux abeilles gifted.": "Adds two abilities at once, but restricted to gifted bees.",
  "Ajoute tes images": "Add your images",
  "Ajouter à la liste": "Add to the list",
  "Amulette : bonus permanents obtenus via les défis et les générateurs. Une de chaque type peut être portée en même temps.": "Amulet: permanent bonuses obtained through challenges and generators. One of each type can be worn at the same time.",
  "Analytique, méticuleux, pragmatique, superstitieux.": "Analytical, meticulous, pragmatic, superstitious.",
  "Ananas : friandise préférée de plusieurs abeilles incolores.": "Pineapple: favourite treat of several colourless bees.",
  "Ant Challenge (Ant Field, nécessite un Ant Pass)": "Ant Challenge (Ant Field, requires an Ant Pass)",
  "Aperçu": "Preview",
  "Arroseur de base : fait pousser les fleurs autour de lui.": "Basic sprinkler: grows flowers around it.",
  "Arroseurs argentés : plus grande zone d'effet.": "Silver sprinklers: larger area of effect.",
  "Arroseurs de diamant : haut de gamme.": "Diamond sprinklers: top of the range.",
  "Arroseurs dorés : zone et rendement nettement supérieurs.": "Golden sprinklers: much larger area and output.",
  "Arroseurs, du Basic au Supreme Saturator.": "Sprinklers, from the Basic to the Supreme Saturator.",
  "Aspirateur à pollen : large zone de collecte.": "Pollen vacuum: wide collection area.",
  "Attention : le Red Gather ne s'applique qu'au pollen récolté par l'abeille, pas à celui des abilities.": "Careful: Red Gather only applies to the pollen collected by the bee, not to pollen from abilities.",
  "Au bout de la pente vers le Rose Field": "At the bottom of the slope down to the Rose Field",
  "Au début du passage secret vers la Royal Jelly, dans la pente bleue près du Bamboo Field": "At the start of the secret passage to the Royal Jelly, in the blue slope near the Bamboo Field",
  "Au-delà du niveau 20, les valeurs peuvent dépasser les plages affichées. Exemple documenté : seule une abeille de": "Past level 20, values can go beyond the ranges shown. Documented example: only a bee of",
  "Au-dessus du Ticket Tent": "Above the Ticket Tent",
  "Aucun palier — 10 générations pour la capacité max, 25 pour maximiser le reste": "No tiers — 10 generations for max capacity, 25 to max out the rest",
  "Aucun palier — qualité liée aux victoires consécutives (max 100)": "No tiers — quality tied to consecutive wins (max 100)",
  "Aucune contrainte, une limite de 3 et cinq stats positives : un des Beesmas les plus faciles à placer.": "No requirement, a limit of 3 and five positive stats: one of the easiest Beesmas beequips to place.",
  "Audacieux, énergique, confiant, superstitieux.": "Bold, energetic, confident, superstitious.",
  "Autocollant à poser sur sa ruche, à échanger, ou à empiler dans le Sticker Stack pour un bonus permanent.": "A sticker to put on your hive, to trade, or to stack in the Sticker Stack for a permanent bonus.",
  "Avis d'expulsion : servait à retirer une abeille de la ruche. Retiré du jeu.": "Eviction notice: used to remove a bee from the hive. Removed from the game.",
  "Baie amère : 1 chance sur 1 000 de donner une mutation (1 sur 100 si l'abeille est radioactive).": "Bitterberry: 1 in 1,000 chance of giving a mutation (1 in 100 if the bee is radioactive).",
  "Baie néon : friandise rare qui donne beaucoup de bond.": "Neonberry: rare treat that gives a lot of bond.",
  "Ballon blanc : version orientée pollen blanc.": "White balloon: version geared towards white pollen.",
  "Ballon noir : le plus puissant des ballons.": "Black balloon: the most powerful of the balloons.",
  "Ballon rose : fait pleuvoir des tokens sur un champ.": "Pink balloon: rains tokens down on a field.",
  "Ballon rouge : version orientée pollen rouge.": "Red balloon: version geared towards red pollen.",
  "Bear Bee Voucher, événements": "Bear Bee Voucher, events",
  "Beaucoup de stickers sortent de quêtes d'ours, de cadeaux quotidiens, de Beesmas et des autres événements saisonniers. Les stickers de signes astrologiques ne sont obtenables que": "A lot of stickers come from bear quests, daily gifts, Beesmas and the other seasonal events. Zodiac sign stickers can only be obtained",
  "Bee Swarm Simulator est une création d'Onett. Toutes les marques appartiennent à leurs propriétaires respectifs.": "Bee Swarm Simulator is created by Onett. All trademarks belong to their respective owners.",
  "Beequip 100 % critique, avec une double contrainte gifted + abeille précise.": "100% crit beequip, with a double requirement: gifted plus a specific bee.",
  "Beequip de niche, orienté synergies flamme et bulles.": "Niche beequip, geared towards flame and bubble synergies.",
  "Beequip tardif orienté goo et miel.": "Late-game beequip geared towards goo and honey.",
  "Bidon en noix de coco : un des meilleurs sacs de fin de jeu.": "Coconut canister: one of the best end-game bags.",
  "Bidon métallique à bonne capacité.": "Metal canister with good capacity.",
  "Bien joué !": "Well done!",
  "Bien plus jolie que son nom ne le laisse croire.": "Far prettier than its name suggests.",
  "Blender, quêtes": "Blender, quests",
  "Blender, quêtes, mobs": "Blender, quests, mobs",
  "Bocal : le premier vrai gain de capacité.": "Jar: the first real capacity upgrade.",
  "Boisson tropicale : boost lié aux champs de fin de jeu.": "Tropical drink: boost tied to the end-game fields.",
  "Bon à savoir": "Good to know",
  "Bonbons gélifiés : monnaie et ingrédient liés au Gummy Bear.": "Gumdrops: currency and ingredient tied to the Gummy Bear.",
  "Bonbons haricots : friandise donnée par de nombreuses quêtes.": "Jelly beans: treat given by a lot of quests.",
  "Bond cumulé depuis le niv. 1": "Bond accumulated since lvl 1",
  "Bond déjà accumulé": "Bond already accumulated",
  "Bond nécessaire pour chaque niveau": "Bond needed for each level",
  "Bonus accordés": "Bonuses granted",
  "Bonus de goo, de conversion du goo et de défense": "Goo, goo conversion and defence bonuses",
  "Bonus orientés attaque, conversion et pollen des abilities dupliquées": "Bonuses geared towards attack, conversion and pollen from duplicated abilities",
  "Bonus très puissants, mais limités aux abeilles communes et rares, ce qui bride son potentiel.": "Very strong bonuses, but limited to common and rare bees, which caps its potential.",
  "Bonus variés selon le score obtenu au défi": "Various bonuses depending on the score reached in the challenge",
  "Bonus variés — pollen, capacité, conversion, attaque — selon le palier et le score": "Various bonuses — pollen, capacity, conversion, attack — depending on the tier and the score",
  "Boost de conversion en miel. Ingrédient de très nombreuses recettes.": "Honey conversion boost. Ingredient in a great many recipes.",
  "Bords ondulés aux couleurs de la Festive Bee.": "Wavy edges in the Festive Bee's colours.",
  "Bottes d'apiculteur. À porter avec un chapeau pour que Dapper Bear accepte de te vendre des beequips.": "Beekeeper's boots. Wear them with a hat so Dapper Bear will sell you beequips.",
  "Bottes de base : un peu de vitesse.": "Basic boots: a little speed.",
  "Bottes gélifiées : orientées goo.": "Gummy boots: geared towards goo.",
  "Boutique Robux, événements": "Robux shop, events",
  "Boutiques, quêtes, cadeaux": "Shops, quests, gifts",
  "Boutiques, quêtes, événements": "Shops, quests, events",
  "Boîte de grenouilles : invoque des grenouilles qui produisent des tokens.": "Box of frogs: summons frogs that produce tokens.",
  "Brique : monnaie d'échange utilisée par certains marchands.": "Brick: trading currency used by some merchants.",
  "Bronze 0-24 pts → Argent 25-49 → Or 50-99 → Diamant 100-149 → Suprême 150+": "Bronze 0-24 pts → Silver 25-49 → Gold 50-99 → Diamond 100-149 → Supreme 150+",
  "Bronze 1 M / niv. 5 → Argent 8 M / niv. 8 → Or 20 M / niv. 11 → Diamant 50 M / niv. 13 — seule amulette sans palier Suprême": "Bronze 1 M / lvl 5 → Silver 8 M / lvl 8 → Gold 20 M / lvl 11 → Diamond 50 M / lvl 13 — the only amulet with no Supreme tier",
  "Bronze et Argent dès 1 victoire → Or à 5 → Diamant à 7 → Suprême à 15": "Bronze and Silver from 1 win → Gold at 5 → Diamond at 7 → Supreme at 15",
  "Bronze manche 5 → Argent 10 → Or 15 → Diamant 20 → Suprême 25": "Bronze wave 5 → Silver 10 → Gold 15 → Diamond 20 → Supreme 25",
  "Bronze → Argent → Or → Diamant → Suprême": "Bronze → Silver → Gold → Diamond → Supreme",
  "Bâton électrique. Zap zap zap.": "Electric stick. Zap zap zap.",
  "C'est totalement réel. L'abeille est niveau 1.": "This is completely real. The bee is level 1.",
  "Cadeau de Beesmas : à ouvrir pour recevoir une récompense aléatoire.": "Beesmas gift: open it to receive a random reward.",
  "Calcul d'ingrédients": "Ingredient calculator",
  "Calcul d'ingrédients, niveau d'abeilles, trade équitable et Build your Hive.": "Ingredient calculator, bee levelling, fair trade and Build your Hive.",
  "Capacité +25 000 par génération, jusqu'à +250 000 · 3 à 5 bonus au total (Honey Per Pollen jusqu'à +8 %)": "Capacity +25,000 per generation, up to +250,000 · 3 to 5 bonuses in total (Honey Per Pollen up to +8%)",
  "Capacité accordée": "Capacity granted",
  "Capacité qui grimpe à chaque palier + capacités passives (Diamant et Suprême)": "Capacity that climbs with each tier + passive abilities (Diamond and Supreme)",
  "Capacités passives": "Passive abilities",
  "Carburant à l'ingéniosité. Ou quelque chose comme ça.": "Fuel for ingenuity. Or something like that.",
  "Case : 5 emplacements au départ, 15 au max (quêtes de Dapper Bear et de Bee Bear). Storage : 10 emplacements, jusqu'à 100 pour 123 500 tickets — mais on ne peut pas équiper depuis le Storage. Inbox : 25 places, supprimé après 48 h.": "Case: 5 slots to begin with, 15 at most (Dapper Bear and Bee Bear quests). Storage: 10 slots, up to 100 for 123,500 tickets — but you cannot equip from Storage. Inbox: 25 slots, deleted after 48 h.",
  "Casque de base : un peu de défense et de pollen.": "Basic helmet: a little defence and pollen.",
  "Casques et masques, du Helmet au Mondo B.B.M.": "Helmets and masks, from the Helmet to the Mondo B.B.M.",
  "Casse-le pour 50 % de chance d'avoir de la chance.": "Break it for a 50% chance of getting lucky.",
  "Catégorie": "Category",
  "Catégories": "Categories",
  "Ce golden retriever cherche un foyer.": "This golden retriever is looking for a home.",
  "Ce petit gars devient un peu trop mou.": "This little guy is getting a bit too soft.",
  "Ce petit noob ne sait pas du tout tenir une boutique.": "This little noob has no idea how to run a shop.",
  "Ce qu'il y a dedans va t'exciter et te perdre à la fois.": "What's inside will excite you and lose you at the same time.",
  "Ce que la recette réclame directement. Les quantités incluent tout ce qui en est aussi redemandé plus bas dans la chaîne.": "What the recipe asks for directly. The quantities include everything that is also required further down the chain.",
  "Ce que tu as": "What you have",
  "Ce que tu peux faire ici": "What you can do here",
  "Ce que tu veux": "What you want",
  "Ce que tu veux fabriquer": "What you want to craft",
  "Ce que voient la plupart des gens en lui parlant.": "What most people see when they talk to him.",
  "Ce qui a disparu du jeu.": "What has been removed from the game.",
  "Ce qui change, c'est le plafond": "What changes is the cap",
  "Ce tombeau traverse les âges.": "This tomb spans the ages.",
  "Ce trade est-il équitable ?": "Is this trade fair?",
  "Ceinture de pétales : haut de gamme du Petal Shop.": "Petal belt: top of the range at the Petal Shop.",
  "Ceinture en noix de coco : une des meilleures de fin de jeu.": "Coconut belt: one of the best in the end game.",
  "Ceinture en rayons de miel : bonus de conversion.": "Honeycomb belt: conversion bonus.",
  "Certaines mutations sont quasi inutiles : Attack sur Baby Bee (elle n'attaque pas — mais ça compte quand même dans l'attaque totale, donc ça booste la Star Saw), Ability Rate sur une Basic ou Brave non-gifted sans beequip (elles n'ont pas d'ability), Energy sur Photon ou Exhausted Bee (énergie infinie).": "Some mutations are almost useless: Attack on Baby Bee (it doesn't attack — but it still counts towards total attack, so it boosts the Star Saw), Ability Rate on a non-gifted Basic or Brave with no beequip (they have no ability), Energy on Photon or Exhausted Bee (infinite energy).",
  "Certains stickers récompensent un exploit précis et ne peuvent être obtenus": "Some stickers reward a specific feat and can only be obtained",
  "Cette drôle de créature se nourrit exclusivement de pièces.": "This odd creature feeds exclusively on coins.",
  "Chapeau à hélice : bonus de collecte et style garanti.": "Propeller hat: collection bonus and guaranteed style.",
  "Chaque amulette naît avec une « qualité » liée à ta performance : score au défi, victoires consécutives, nombre de générations. Une qualité élevée biaise fortement le tirage vers le haut de la plage, sans jamais garantir un bon résultat.": "Every amulet is born with a “quality” tied to your performance: challenge score, consecutive wins, number of generations. High quality skews the roll heavily towards the top of the range, without ever guaranteeing a good result.",
  "Chaque sticker, sa valeur de trade en signs, sa description et le bonus permanent qu'il donne une fois déposé dans le Sticker Stack.": "Every sticker, its trade value in signs, its description and the permanent bonus it gives once placed in the Sticker Stack.",
  "Charme lunaire : gros bond, peut mutter une abeille. Sert aussi à fabriquer et à générer le Moon Amulet.": "Moon Charm: big bond, can mutate a bee. Also used to craft and to generate the Moon Amulet.",
  "Chaussures de randonnée : vitesse et collecte en marchant.": "Hiking boots: speed and collection while walking.",
  "Choisis une abeille dans le menu de droite, clique une case vide pour la placer, une case remplie pour régler son": "Pick a bee from the menu on the right, click an empty cell to place it, a filled cell to set its",
  "Choisis une amulette": "Pick an amulet",
  "Chèvrefeuille : attire des tokens sur un champ.": "Honeysuckle: draws tokens onto a field.",
  "Cire caustique : +4 points de cire, et débloque les stats rares.": "Caustic wax: +4 wax points, and unlocks the rare stats.",
  "Cire de débogage : +4 points comme la caustique. Obtenable uniquement par certaines quêtes.": "Debug wax: +4 points, like caustic. Only obtainable through certain quests.",
  "Cire dure : +2 points de cire sur un beequip.": "Hard wax: +2 wax points on a beequip.",
  "Cire marbrée : 0 point, mais elle régénère les stats de base et relance tous les points déjà posés. La seule vraie reroll.": "Swirled wax: 0 points, but it regenerates the base stats and resets every point already spent. The only true reroll.",
  "Cire tendre : +1 point de cire sur un beequip.": "Soft wax: +1 wax point on a beequip.",
  "Ciseaux à grande portée. Ça coupe et ça claque.": "Long-reach scissors. They cut and they snap.",
  "Clique sur une carte": "Click a card",
  "Clique une abeille ou un objet, puis une case. Reclique pour désélectionner.": "Click a bee or an object, then a cell. Click again to deselect.",
  "Clique une ligne pour la déplier. Les lignes vertes sont déjà couvertes par ton stock, les branches correspondantes ne sont plus décomposées.": "Click a row to expand it. Green rows are already covered by your stock, so the matching branches are no longer broken down.",
  "Cloche de nuit : fait tomber la nuit, utile pour les Moon Charms et le Diamond Mask.": "Night bell: brings on the night, useful for Moon Charms and the Diamond Mask.",
  "Colle : ×1,25 pollen des outils et des abeilles pendant 10 minutes.": "Glue: ×1.25 pollen from tools and bees for 10 minutes.",
  "Comme le Star Amulet, elle existe en version Suprême, dont la couleur change légèrement.": "Like the Star Amulet, it exists in a Supreme version, whose colour changes slightly.",
  "Comment on obtient les stickers": "How you get stickers",
  "Compare la valeur de deux lots de stickers.": "Compare the value of two sets of stickers.",
  "Compose ta ruche, pose tes stickers et exporte l'image.": "Build your hive, place your stickers and export the image.",
  "Compresse le pollen pour en stocker davantage.": "Compresses pollen to store more of it.",
  "Considéré comme bas de tableau : capacité faible et bombe peu utile en fin de jeu. Niveau et limite à vérifier.": "Considered bottom of the pile: low capacity and a bomb that isn't much use in the end game. Level and limit to be confirmed.",
  "Conséquence pratique": "What it means in practice",
  "Contre le mur droit de l'entrée du Ant Gate": "Against the right-hand wall at the entrance of the Ant Gate",
  "Contribution minimale obligatoire : farmer le défi en groupe sans participer ne donne rien.": "A minimum contribution is required: farming the challenge in a group without taking part gives nothing.",
  "Convertit instantanément une part du pollen en miel.": "Instantly converts part of your pollen into honey.",
  "Conçue pour rouler de rire.": "Designed to roll with laughter.",
  "Coût": "Cost",
  "Coût de fabrication": "Crafting cost",
  "Coût de montée en niveau de ta ruche": "Cost of levelling up your hive",
  "Coût en miel et en bond pour monter tes abeilles, bonus compris.": "Honey and bond cost to level up your bees, bonuses included.",
  "Cyan foncé": "Dark cyan",
  "Côté droit de la plateforme du Wind Shrine, derrière le Nectar Condenser": "Right-hand side of the Wind Shrine platform, behind the Nectar Condenser",
  "Côté droit du Mountain Top Field": "Right-hand side of the Mountain Top Field",
  "Côté droit du portail du Hive Hub": "Right-hand side of the Hive Hub portal",
  "Côté gauche de la plateforme de réclamation de l'œuf de Vicious Bee": "Left-hand side of the Vicious Bee egg claim platform",
  "Côté gauche de la plateforme du Wind Shrine": "Left-hand side of the Wind Shrine platform",
  "Côté gauche du portail, à côté du Stinger Shop": "Left-hand side of the portal, next to the Stinger Shop",
  "Côté gauche du toit du Red HQ": "Left-hand side of the Red HQ roof",
  "D'avant que la démocratie ne révolutionne la montagne.": "From before democracy revolutionised the mountain.",
  "DONNÉES · ABEILLES": "DATA · BEES",
  "Dans la Guild, derrière la boutique Ace Badge Honeycomb": "In the Guild, behind the Ace Badge Honeycomb shop",
  "Dans la Guild, derrière le Mega Memory Match": "In the Guild, behind the Mega Memory Match",
  "Dans la Guild, mur entre le Blender et les Sprinklers": "In the Guild, wall between the Blender and the Sprinklers",
  "Dans la Guild, mur gauche de la salle des accessoires": "In the Guild, left-hand wall of the accessories room",
  "Dans le Blue HQ, coin du toit à côté du Blue Field Booster": "In the Blue HQ, corner of the roof next to the Blue Field Booster",
  "Dans le Blue HQ, sur le chemin vers le 2ᵉ étage": "In the Blue HQ, on the way up to the 2nd floor",
  "Dans le Noob Shop, murs du fond et de droite": "In the Noob Shop, back and right-hand walls",
  "Dans le Red HQ, caché derrière ou à côté du téléporteur rouge": "In the Red HQ, hidden behind or next to the red teleporter",
  "Dans le Red HQ, derrière l'échelle": "In the Red HQ, behind the ladder",
  "Dans le labyrinthe du Pro Shop": "In the Pro Shop maze",
  "Dans le tunnel derrière le classement des Top Ant Exterminators": "In the tunnel behind the Top Ant Exterminators leaderboard",
  "Dard : ingrédient de fabrication, et il déclenche la Star Saw du Supreme Star Amulet.": "Stinger: crafting ingredient, and it triggers the Supreme Star Amulet's Star Saw.",
  "Deltaplane : vol plané sur de longues distances.": "Hang glider: long-distance gliding.",
  "Derrière Onett": "Behind Onett",
  "Derrière l'Instant Converter": "Behind the Instant Converter",
  "Derrière le Honey Dispenser, mur droit du Noob Shop": "Behind the Honey Dispenser, right-hand wall of the Noob Shop",
  "Derrière le Petal Shop": "Behind the Petal Shop",
  "Derrière le Ticket Shop": "Behind the Ticket Shop",
  "Derrière le bâtiment du défi du Ant Field": "Behind the Ant Field challenge building",
  "Derrière les bambous du Bamboo Field": "Behind the bamboo in the Bamboo Field",
  "Des calculateurs qui font le travail à ta place. D'autres viendront s'ajouter plus tard.": "Calculators that do the work for you. More will be added later.",
  "Des courbes musicales dans une feuille en forme de lyre.": "Musical curves in a lyre-shaped leaf.",
  "Des électrons en orbite autour d'un noyau.": "Electrons orbiting a nucleus.",
  "Deux aimants en un, pour deux fois plus de pollen.": "Two magnets in one, for twice the pollen.",
  "Deux images sont mutualisées : tous les œufs portant un nom d'abeille réutilisent": "Two images are shared: every egg named after a bee reuses",
  "Deux stats négatives, mais des bonus de ruche larges et une limite de 3.": "Two negative stats, but broad hive bonuses and a limit of 3.",
  "Diamant (1/100) et Suprême · 1/6 en Suprême · recharge 30 s": "Diamond (1/100) and Supreme · 1/6 on Supreme · 30 s cooldown",
  "Diamant (1/100) et Suprême · 1/6 en Suprême · recharge 5 min": "Diamond (1/100) and Supreme · 1/6 on Supreme · 5 min cooldown",
  "Diplomate, élégant, sociable, superstitieux.": "Diplomatic, elegant, sociable, superstitious.",
  "Discipliné, ambitieux, prudent, superstitieux.": "Disciplined, ambitious, careful, superstitious.",
  "Disque blanc : ingrédient mécanique du Robo Bear.": "White disk: mechanical ingredient from Robo Bear.",
  "Disque bleu : ingrédient mécanique orienté bleu.": "Blue disk: mechanical ingredient geared towards blue.",
  "Disque cassé : version endommagée, à réparer ou à recycler.": "Broken disk: damaged version, to be repaired or recycled.",
  "Disque corrompu : le plus rare des disques.": "Corrupt disk: the rarest of the disks.",
  "Disque rouge : ingrédient mécanique orienté rouge.": "Red disk: mechanical ingredient geared towards red.",
  "Distributeur, quêtes, planteurs, mobs": "Dispenser, quests, planters, mobs",
  "Donne Melody sans Music Bee, au prix d'une pénalité d'énergie.": "Gives Melody without a Music Bee, at the cost of an energy penalty.",
  "Donné au début du jeu": "Given at the start of the game",
  "Donné aux abeilles quand leur heure est venue.": "Given to bees when their time has come.",
  "Du Pouch au Coconut Canister.": "From the Pouch to the Coconut Canister.",
  "Du sucré qui fait exactement l'effet voulu.": "Something sweet that does exactly what you'd expect.",
  "Dé de champ : relance le multiplicateur de boost d'un champ.": "Field dice: rerolls a field's boost multiplier.",
  "Dé lisse : version intermédiaire, meilleur résultat moyen.": "Smooth dice: mid-range version, better average result.",
  "Dé pipé : garantit un bon résultat sur un boost de champ.": "Loaded dice: guarantees a good result on a field boost.",
  "Débloque en plus": "Also unlocks",
  "Décompose n'importe quel craft jusqu'aux ressources de base et dit ce qu'il te manque.": "Breaks any craft down to its base resources and tells you what you're missing.",
  "Découpé dans du carton et gribouillé aux crayons magiques.": "Cut out of cardboard and scribbled on with crayons.",
  "Défends ta ruche avec style.": "Defend your hive in style.",
  "Défi": "Challenge",
  "Défi terminé + le skin Robo Cub, une seule fois par compte": "Challenge completed + the Robo Cub skin, once per account only",
  "Délicieuse, mais elle peut déclencher la trypophobie.": "Delicious, but it may trigger trypophobia.",
  "Démonstration de férocité féline.": "A display of feline ferocity.",
  "Déposer un sticker dans le Stack active son": "Putting a sticker in the Stack activates its",
  "Dés": "Dice",
  "Déséquiper coûte": "Unequipping costs",
  "Détail de la fabrication": "Crafting breakdown",
  "Effet sur la qualité": "Effect on quality",
  "Elle a bien besoin d'une pause après tout ce maternage.": "She really needs a break after all that mothering.",
  "Elle a pris son nom un peu trop au sérieux.": "She took her name a little too seriously.",
  "Elle a regardé d'un peu trop près.": "She looked a little too closely.",
  "Elle domine tout simplement le paysage.": "She simply towers over the landscape.",
  "Elle fait ce qu'elle fait de mieux.": "She's doing what she does best.",
  "Elle ne donne aucun point mais régénère les stats de base": "It gives no points but regenerates the base stats",
  "Elle perd lentement de la masse.": "She is slowly losing mass.",
  "Elle prie pour ta perte.": "She is praying for your downfall.",
  "Elle se fabrique en dépensant 100 Moon Charms au Moon Amulet Generator, situé entre le Spider Field et le Bamboo Field. On y accède par le parcours d'obstacles, en tombant depuis un canon avec un outil de vol plané, ou en se laissant tomber depuis la rampe du Lion Bee Gate. Elle permet aussi de marcher sur les plateformes en forme de lune, derrière la boutique de Dapper Bear notamment.": "It is crafted by spending 100 Moon Charms at the Moon Amulet Generator, located between the Spider Field and the Bamboo Field. You get there through the obstacle course, by dropping out of a cannon with a gliding tool, or by dropping down from the Lion Bee Gate ramp. It also lets you walk on the moon-shaped platforms, notably behind Dapper Bear's shop.",
  "Elle se tortille pour réussir dans la vie.": "She wriggles her way to success in life.",
  "Elle vient de naître et elle vient déjà pour toi.": "She was just born and she's already coming for you.",
  "Emplacement de ruche supplémentaire : de 25 à 50 abeilles maximum. Le prix augmente de façon exponentielle.": "Extra hive slot: from 25 up to 50 bees maximum. The price goes up exponentially.",
  "Emplacements relevés sur le wiki, regroupés par zone. Un lot réapparaît chaque jour et reste 7 jours.": "Spots taken from the wiki, grouped by area. A batch respawns every day and stays for 7 days.",
  "En bas à droite du Basic Bee Gate": "Bottom right of the Basic Bee Gate",
  "En haut de l'inventaire.": "At the top of the inventory.",
  "En route pour distribuer les cadeaux !": "Off to deliver the gifts!",
  "Engrenage à 7 dents. Devenu inobtenable : il ne se trouve plus dans le jeu.": "7-tooth gear. Now unobtainable: it can no longer be found in the game.",
  "Entre le Honey Bee Gate et le petit pin à côté": "Between the Honey Bee Gate and the small pine tree next to it",
  "Envoie-la hors du stade.": "Send it out of the park.",
  "Envoyé sur les lettres de la Pine Tree Forest.": "Sent on letters from the Pine Tree Forest.",
  "Envoyé sur les lettres du Ant Field.": "Sent on letters from the Ant Field.",
  "Envoyé sur les lettres du Bamboo Field.": "Sent on letters from the Bamboo Field.",
  "Envoyé sur les lettres du Blue Flower Field.": "Sent on letters from the Blue Flower Field.",
  "Envoyé sur les lettres du Cactus Field.": "Sent on letters from the Cactus Field.",
  "Envoyé sur les lettres du Clover Field.": "Sent on letters from the Clover Field.",
  "Envoyé sur les lettres du Coconut Field.": "Sent on letters from the Coconut Field.",
  "Envoyé sur les lettres du Dandelion Field.": "Sent on letters from the Dandelion Field.",
  "Envoyé sur les lettres du Hub Field.": "Sent on letters from the Hub Field.",
  "Envoyé sur les lettres du Mountain Top Field.": "Sent on letters from the Mountain Top Field.",
  "Envoyé sur les lettres du Mushroom Field.": "Sent on letters from the Mushroom Field.",
  "Envoyé sur les lettres du Pepper Patch.": "Sent on letters from the Pepper Patch.",
  "Envoyé sur les lettres du Pineapple Patch.": "Sent on letters from the Pineapple Patch.",
  "Envoyé sur les lettres du Pumpkin Patch.": "Sent on letters from the Pumpkin Patch.",
  "Envoyé sur les lettres du Rose Field.": "Sent on letters from the Rose Field.",
  "Envoyé sur les lettres du Spider Field.": "Sent on letters from the Spider Field.",
  "Envoyé sur les lettres du Strawberry Field.": "Sent on letters from the Strawberry Field.",
  "Envoyé sur les lettres du Stump Field.": "Sent on letters from the Stump Field.",
  "Envoyé sur les lettres du Sunflower Field.": "Sent on letters from the Sunflower Field.",
  "Excellent premier beequip : il touche les trois couleurs de pollen à la fois.": "An excellent first beequip: it covers all three pollen colours at once.",
  "Excellente attaque, souvent monté sur une Vicious Bee. La limite est passée de 3 à 2 lors d'une mise à jour.": "Excellent attack, often placed on a Vicious Bee. The limit went from 3 to 2 in an update.",
  "Exige une mutation Convert Amount sur l'abeille : c'est le beequip le plus contraignant côté mutation, avec Bubble Light.": "Requires a Convert Amount mutation on the bee: it is the most demanding beequip mutation-wise, along with Bubble Light.",
  "Existe encore, mais plus moyen de l'obtenir.": "Still exists, but there is no way to get it any more.",
  "Exprime le dédain ou l'envie de supprimer.": "Expresses disdain, or the urge to delete.",
  "Extrait bleu : boost du pollen bleu, ingrédient de fabrication. Se fabrique avec 50 Blueberries et 10 Royal Jellies.": "Blue extract: blue pollen boost, crafting ingredient. Crafted from 50 Blueberries and 10 Royal Jellies.",
  "Extrait rouge : boost du pollen rouge, ingrédient de fabrication.": "Red extract: red pollen boost, crafting ingredient.",
  "Fabrication, quêtes": "Crafting, quests",
  "Fabrique ton propre soleil un jour de pluie.": "Make your own sun on a rainy day.",
  "Face arrière de l'entrée du Petal Shop": "Back side of the Petal Shop entrance",
  "Fais savoir au monde que tu abandonnes.": "Let the world know you're giving up.",
  "Fait éclore une abeille Commune ou Rare. Le premier œuf du jeu.": "Hatches a Common or Rare bee. The first egg in the game.",
  "Fait éclore une abeille Légendaire ou Mythique.": "Hatches a Legendary or Mythic bee.",
  "Fait éclore une abeille Rare ou Épique.": "Hatches a Rare or Epic bee.",
  "Fait éclore une abeille Épique, Légendaire ou Mythique.": "Hatches an Epic, Legendary or Mythic bee.",
  "Faux enflammée : tranche et brûle. Favorise le pollen rouge.": "Flaming scythe: it slices and it burns. Favours red pollen.",
  "Feuille en cuillère, l'ustensile de cuisine de la nature.": "A spoon-shaped leaf, nature's kitchen utensil.",
  "Feuille en fer de lance, le chevalier de la nature.": "A spearhead-shaped leaf, nature's knight.",
  "Feuille en forme de cœur, la lettre d'amour de la nature.": "A heart-shaped leaf, nature's love letter.",
  "Feuille en forme de rein, l'organe sain de la nature.": "A kidney-shaped leaf, nature's healthy organ.",
  "Fiole de nectar apaisant : applique le buff Comforting, orienté pollen bleu.": "Comforting nectar vial: applies the Comforting buff, geared towards blue pollen.",
  "Fiole de nectar motivant : buff orienté bee ability rate.": "Motivating nectar vial: buff geared towards bee ability rate.",
  "Fiole de nectar rafraîchissant : buff orienté conversion instantanée.": "Refreshing nectar vial: buff geared towards instant conversion.",
  "Fiole de nectar revigorant : buff orienté pollen rouge.": "Invigorating nectar vial: buff geared towards red pollen.",
  "Fiole de nectar satisfaisant : buff orienté pollen blanc.": "Satisfying nectar vial: buff geared towards white pollen.",
  "Fiole de nuage : invoque un nuage qui fait pleuvoir des tokens sur un champ.": "Cloud vial: summons a cloud that rains tokens down on a field.",
  "Fiole de pluie de nectar : applique plusieurs buffs de nectar d'un coup.": "Nectar shower vial: applies several nectar buffs at once.",
  "Fioles de nectar et testeur.": "Nectar vials and tester.",
  "Flocon de neige : matériau de l'événement Beesmas.": "Snowflake: material from the Beesmas event.",
  "Fraise : friandise préférée des abeilles rouges.": "Strawberry: favourite treat of the red bees.",
  "Fraise, myrtille, ananas, graine de tournesol, Neonberry… chance très faible.": "Strawberry, blueberry, pineapple, sunflower seed, Neonberry… very low chance.",
  "Friandise atomique : garantit une mutation sur l'abeille nourrie, radioactive ou non.": "Atomic treat: guarantees a mutation on the bee it is fed to, radioactive or not.",
  "Friandise de base : donne de l'XP et du bond à une abeille.": "Basic treat: gives XP and bond to a bee.",
  "Friandise étoilée : donne énormément de bond, et peut mutter l'abeille nourrie.": "Star treat: gives a huge amount of bond, and can mutate the bee it is fed to.",
  "Fêtons notre date de fabrication !": "Let's celebrate our manufacturing date!",
  "Garantit une abeille Mythique aléatoire.": "Guarantees a random Mythic bee.",
  "Garantit une mutation, que l'abeille soit radioactive ou non.": "Guarantees a mutation, whether the bee is radioactive or not.",
  "Gelée d'événement : transforme l'abeille visée en Bear Bee.": "Event jelly: turns the target bee into a Bear Bee.",
  "Gelée d'événement : transforme l'abeille visée en Cobalt Bee.": "Event jelly: turns the target bee into a Cobalt Bee.",
  "Gelée d'événement : transforme l'abeille visée en Crimson Bee.": "Event jelly: turns the target bee into a Crimson Bee.",
  "Gelée d'événement : transforme l'abeille visée en Digital Bee.": "Event jelly: turns the target bee into a Digital Bee.",
  "Gelée d'événement : transforme l'abeille visée en Festive Bee.": "Event jelly: turns the target bee into a Festive Bee.",
  "Gelée d'événement : transforme l'abeille visée en Gummy Bee.": "Event jelly: turns the target bee into a Gummy Bee.",
  "Gelée d'événement : transforme l'abeille visée en Photon Bee.": "Event jelly: turns the target bee into a Photon Bee.",
  "Gelée d'événement : transforme l'abeille visée en Puppy Bee.": "Event jelly: turns the target bee into a Puppy Bee.",
  "Gelée d'événement : transforme l'abeille visée en Tabby Bee.": "Event jelly: turns the target bee into a Tabby Bee.",
  "Gelée d'événement : transforme l'abeille visée en Vicious Bee.": "Event jelly: turns the target bee into a Vicious Bee.",
  "Gelée d'événement : transforme l'abeille visée en Windy Bee.": "Event jelly: turns the target bee into a Windy Bee.",
  "Gelée étoilée : transforme une abeille en l'abeille exacte de ton choix.": "Star jelly: turns a bee into the exact bee of your choice.",
  "Gelées": "Jellies",
  "Gelées et charmes": "Jellies and charms",
  "Graine de tournesol : friandise préférée de plusieurs abeilles.": "Sunflower seed: favourite treat of several bees.",
  "Générateurs du Star Hall, au-dessus du Noob Shop — elle s'achète, elle ne se gagne pas en défi": "Star Hall generators, above the Noob Shop — you buy it, you don't win it in a challenge",
  "Génération": "Generation",
  "Habitat à haute densité.": "High-density housing.",
  "Haricot magique : fait pousser un Sprout géant, qui produit du pollen et des tokens sur un champ pendant plusieurs minutes. C'est aussi l'ingrédient du Glitter.": "Magic bean: grows a giant Sprout, which produces pollen and tokens on a field for several minutes. It is also the ingredient for Glitter.",
  "Huile : accélère les abeilles. Se fabrique avec 50 Sunflower Seeds et 10 Royal Jellies.": "Oil: speeds up your bees. Crafted from 50 Sunflower Seeds and 10 Royal Jellies.",
  "Hélice : téléporte instantanément le joueur à la ruche.": "Propeller: instantly teleports the player back to the hive.",
  "Idéale pour les tartes et les crumbles.": "Perfect for pies and crumbles.",
  "Il a éclos, et pourtant c'est encore un œuf.": "It hatched, and yet it's still an egg.",
  "Il apparaît spontanément dans le métro.": "It turns up spontaneously on the subway.",
  "Il couine au lieu de cancaner.": "It squeaks instead of quacking.",
  "Il dégage une aura de pure volonté de conquête.": "It gives off an aura of pure will to conquer.",
  "Il en a fini de sauter.": "He is done jumping.",
  "Il enchaîne les missions dans cette économie de petits boulots.": "He's taking gig after gig in this gig economy.",
  "Il envoie des messages contradictoires.": "It sends mixed signals.",
  "Il fait de son mieux pour baisser l'indice UV.": "It is doing its best to bring the UV index down.",
  "Il fait une entrée dramatique et pas franchement désirée.": "It makes a dramatic and not exactly welcome entrance.",
  "Il fait vivre presque toute la vie sur Terre.": "It sustains almost all life on Earth.",
  "Il gagnera des polygones en vieillissant.": "It will gain polygons as it gets older.",
  "Il gratte doucement le pollen sans abîmer les tiges.": "It gently scrapes the pollen off without damaging the stems.",
  "Il lève les yeux au ciel, ou il a la tête dans les nuages ?": "Is he rolling his eyes, or has he got his head in the clouds?",
  "Il manquait quelques Drives à la construction de ce Robo Bear.": "This Robo Bear was built a few Drives short.",
  "Il n'est pas nul pour aspirer.": "It doesn't suck at sucking.",
  "Il ne sait pas ce qu'il aime.": "He doesn't know what he likes.",
  "Il ne supporte pas la foule.": "He can't stand crowds.",
  "Il peut nous montrer des couleurs jamais vues.": "It can show us colours never seen before.",
  "Il reste planté là alors qu'il devrait faire du miel.": "He's just standing there when he should be making honey.",
  "Il se balade sans le moindre souci.": "He wanders about without a care in the world.",
  "Il t'accueille dans le top des jeux Roblox.": "He welcomes you to the top of the Roblox games.",
  "Il te pique tes friandises.": "He steals your treats.",
  "Il te reste": "You still have",
  "Il tourne dans le sens des aiguilles d'une montre, pour toujours.": "It spins clockwise, forever.",
  "Il vole à plus de 40 000 km/h.": "It flies at over 40,000 km/h.",
  "Il y a de la confiture de fraise à l'intérieur.": "There's strawberry jam inside.",
  "Il y a eu une erreur de calcul.": "There has been a miscalculation.",
  "Il y a peut-être un souci avec tes fondations.": "There may be something wrong with your foundations.",
  "Ils apparaissent collés sur les murs et les décors, et se ramassent en cliquant dessus. Un nouveau lot apparaît": "They appear stuck on walls and scenery, and are picked up by clicking on them. A new batch appears",
  "Impose un mode de vie minimaliste.": "It imposes a minimalist lifestyle.",
  "Indispensable si tu joues autour du goo et du Gummyballer.": "Essential if you play around goo and the Gummyballer.",
  "Ingrédient": "Ingredient",
  "Innovant, détaché, excentrique, superstitieux.": "Innovative, detached, eccentric, superstitious.",
  "Intense, secret, passionné, superstitieux.": "Intense, secretive, passionate, superstitious.",
  "Jerrycan géant.": "A giant jerrycan.",
  "Juste un segment de fût de colonne.": "Just one section of a column shaft.",
  "L'acolyte de la Terre.": "Earth's sidekick.",
  "L'agonie à l'état pur.": "Pure agony.",
  "L'amulette de base obtenue via l'Ant Challenge, dans le Ant Field. Ton score au défi détermine directement la qualité de l'amulette générée : plus tu marques, plus les stats sortent hautes. Le score est affiché au-dessus des récompenses.": "The basic amulet obtained through the Ant Challenge, in the Ant Field. Your challenge score directly determines the quality of the amulet generated: the more you score, the higher the stats roll. The score is shown above the rewards.",
  "L'amulette la plus puissante et la plus complexe du jeu. Elle s'achète avec du miel aux machines du Star Hall, au-dessus du Noob Shop. Chaque palier exige un nombre minimum de types d'abeilles Gifted découverts. Plus tu en as découvert, plus les stats ont de chances de sortir au maximum. Les paliers Diamant et Suprême ajoutent des capacités passives — c'est le fameux « SSA ».": "The most powerful and most complex amulet in the game. It is bought with honey at the machines in the Star Hall, above the Noob Shop. Each tier requires a minimum number of Gifted bee types discovered. The more you have discovered, the more likely the stats are to roll at maximum. The Diamond and Supreme tiers add passive abilities — this is the famous “SSA”.",
  "L'amulette mécanique du Robo Bear Challenge, qui se lance avec un Robo Pass. Comme les autres amulettes de défi, sa qualité dépend de ta performance dans le challenge.": "The mechanical amulet from the Robo Bear Challenge, which is started with a Robo Pass. Like the other challenge amulets, its quality depends on how well you do in the challenge.",
  "L'arme préférée des Gummy Soldiers.": "The Gummy Soldiers' favourite weapon.",
  "L'arme préférée des Gummy Soldiers. Seul outil capable de retirer directement le goo d'un champ. Outil le plus cher du jeu.": "The Gummy Soldiers' favourite weapon. The only tool able to remove goo from a field directly. The most expensive tool in the game.",
  "L'asymétrie à son sommet, joliment inclinée.": "Asymmetry at its finest, nicely tilted.",
  "L'empreinte de quelqu'un qui n'a jamais pu jouer à ROBLOX.": "The handprint of someone who never got to play ROBLOX.",
  "L'iconique champignon à chapeau rouge.": "The iconic red-capped mushroom.",
  "L'index recense tout — stickers, Cub Skins, Hive Skins — et coche en vert (✅) ce qui est déjà dans le Stack. Jeter un sticker déjà stacké ne retire pas la coche.": "The index lists everything — stickers, Cub Skins, Hive Skins — and ticks in green (✅) whatever is already in the Stack. Throwing away a sticker that has already been stacked does not remove the tick.",
  "L'outil de ceux qui sont encore en soi-disant early-mid game.": "The tool for those still in the so-called early-mid game.",
  "L'outil de départ de tout joueur. Petite portée, mais il fait le travail au tout début.": "Every player's starting tool. Short range, but it does the job at the very beginning.",
  "L'outil de fabrication de miel par excellence. Bonus de conversion.": "The honey-making tool par excellence. Conversion bonus.",
  "L'outil prototype de la fabrication de miel.": "The prototype honey-making tool.",
  "L'équipement des abeilles et les bonus associés à chaque pièce.": "Bee gear and the bonuses tied to each piece.",
  "L'équipement à poser sur tes abeilles : niveau minimum, limite dans la ruche, couleur, abeilles autorisées, bonus individuels et bonus de ruche. Clique une carte pour tout voir.": "The gear to put on your bees: minimum level, hive limit, colour, allowed bees, individual bonuses and hive bonuses. Click a card to see everything.",
  "La bête solitaire du Loch Ness.": "The lonely beast of Loch Ness.",
  "La contrepartie bleue de l'Electric Candle. Très bon sur Tadpole et Vector Bee — mais la mutation d'Énergie obligatoire le rend difficile à sortir.": "The blue counterpart of the Electric Candle. Very good on Tadpole and Vector Bee — but the mandatory Energy mutation makes it hard to roll.",
  "La contrepartie rouge de la Bubble Light. Avec une limite de 3, en équiper trois triple le bonus de Flame Pollen : redoutable en ruche rouge.": "The red counterpart of the Bubble Light. With a limit of 3, equipping three of them triples the Flame Pollen bonus: brutal on a red hive.",
  "La dernière chose que voient les monstres.": "The last thing monsters ever see.",
  "La description de chaque item : à quoi il sert, son coût et où l'obtenir.": "The description of each item: what it does, what it costs and where to get it.",
  "La fabrication de la Digital Bee": "Crafting the Digital Bee",
  "La liste apparaîtra ici.": "The list will appear here.",
  "La machine du Mountain Top imprime des stickers. C'est la source la plus régulière quand on cherche à remplir son index.": "The Mountain Top machine prints stickers. It is the most reliable source when you are trying to fill out your index.",
  "La peinture bleue et jaune le rend plus aérodynamique.": "The blue and yellow paint makes it more aerodynamic.",
  "La première chose que tu vois au réveil.": "The first thing you see when you wake up.",
  "La qualité progresse régulièrement": "Quality goes up steadily",
  "La ruche polyvalente, sans orientation de couleur.": "The all-round hive, with no colour focus.",
  "La réponse, mon ami…": "The answer, my friend…",
  "La sixième planète de notre système solaire.": "The sixth planet in our solar system.",
  "La toque de chef remonte au XVIe siècle.": "The chef's hat dates back to the 16th century.",
  "Le Gold Cog Amulet débloque l'achat de Glitched Drives, le Diamant la fabrication de la Digital Bee, et le Suprême le skin Robo Cub.": "The Gold Cog Amulet unlocks buying Glitched Drives, Diamond unlocks crafting the Digital Bee, and Supreme unlocks the Robo Cub skin.",
  "Le VIP discret de l'arsenal de Honeyday.": "The quiet VIP of Honeyday's arsenal.",
  "Le beequip Buzz Bomb de référence, et une limite généreuse de 3.": "The reference Buzz Bomb beequip, and a generous limit of 3.",
  "Le beequip au niveau requis le plus élevé du jeu : niveau 16.": "The beequip with the highest level requirement in the game: level 16.",
  "Le beequip bombes par excellence : il ajoute deux abilities de bombe.": "The bomb beequip par excellence: it adds two bomb abilities.",
  "Le beequip le plus basique et le plus courant. Sa vraie force est le bonus de ruche ×Convert Rate, qui grimpe très vite au-delà de +3 %.": "The most basic and most common beequip. Its real strength is the ×Convert Rate hive bonus, which climbs very fast beyond +3%.",
  "Le beequip le plus exclusif du jeu côté conditions : Demon Bee rouge ET mutée.": "The most exclusive beequip in the game requirement-wise: a red Demon Bee AND mutated.",
  "Le bond, c'est l'expérience de l'abeille. Le tableau du dessus part toujours d'un niveau tout juste atteint ; ici tu peux déduire le bond": "Bond is a bee's experience. The table above always starts from a level just reached; here you can work out the bond",
  "Le champignon préféré de Dapper Bear.": "Dapper Bear's favourite mushroom.",
  "Le ciel n'est pas la limite.": "The sky is not the limit.",
  "Le criminel a bidouillé un smartphone pour installer des apps.": "The criminal hacked a smartphone to install apps.",
  "Le cuiller de ceux qui sont encore en « early-mid game ».": "The scooper for those still in the “early-mid game”.",
  "Le dessin d'un cochon certifié sans OGM.": "A drawing of a certified GMO-free pig.",
  "Le duo incontournable du repas.": "The must-have duo of the meal.",
  "Le détail de tous les stickers, leur rareté et les bonus qu'ils donnent.": "The full breakdown of every sticker, its rarity and the bonuses it gives.",
  "Le fléau des pique-niques.": "The scourge of picnics.",
  "Le héros Bakudan Kuma.": "The hero Bakudan Kuma.",
  "Le masque du Bubble Bee Man : orienté bulles et pollen bleu.": "The Bubble Bee Man's mask: geared towards bubbles and blue pollen.",
  "Le meilleur moment du réveil.": "The best part of waking up.",
  "Le niveau de l'abeille détermine la": "The bee's level determines the",
  "Le palier Diamant peut tirer l'un des deux premiers, avec 1 chance sur 100. Le Suprême en tire toujours un parmi les six, avec 1 chance sur 6 chacun — et 1 chance sur 50 d'en avoir deux, soit 1 sur 750 pour une paire précise.": "The Diamond tier can roll one of the first two, with a 1 in 100 chance. Supreme always rolls one of the six, with a 1 in 6 chance each — and a 1 in 50 chance of getting two, so 1 in 750 for a specific pair.",
  "Le parasol de Spirit Bear.": "Spirit Bear's parasol.",
  "Le parasol de Spirit Bear. Très gros bonus de collecte.": "Spirit Bear's parasol. Very large collection bonus.",
  "Le planteur ultime du jeu : le plus long, mais le plus rentable.": "The ultimate planter in the game: the longest, but the most rewarding.",
  "Le plus récent outil du jeu. Rend visibles les Seeker Stickers cachés sur la carte.": "The newest tool in the game. Reveals the Seeker Stickers hidden around the map.",
  "Le potentiel est fixé à la création et ne change jamais. Plus il est haut : meilleures stats de base, stats rares plus accessibles aux cires, améliorations plus généreuses. En jeu on ne voit que l'arrondi au ★ (0,5 ★ chez Dapper Bear).": "Potential is set at creation and never changes. The higher it is: better base stats, rare stats more reachable with waxes, more generous upgrades. In game you only see it rounded to the nearest ★ (0.5 ★ at Dapper Bear's).",
  "Le premier planteur permanent. Rapide et polyvalent.": "The first permanent planter. Fast and versatile.",
  "Le proto-mème fouineur.": "The nosy proto-meme.",
  "Le remplacement est définitif": "Replacing is permanent",
  "Le remède contre la soif.": "The cure for thirst.",
  "Le reste.": "Everything else.",
  "Le roi contesté du groove.": "The disputed king of groove.",
  "Le rôle du niveau de l'abeille": "What the bee's level does",
  "Le sac de départ. Capacité minuscule, mais c'est un début.": "The starting bag. Tiny capacity, but it's a start.",
  "Le secouer crée des vagues.": "Shaking it creates waves.",
  "Le secouer crée des vagues. Outil bleu haut de gamme, à fabriquer.": "Shaking it creates waves. High-end blue tool, crafted.",
  "Le seul moyen de donner Buzz Bomb à une abeille commune ou rare qui ne l'a pas.": "The only way to give Buzz Bomb to a common or rare bee that doesn't have it.",
  "Le sirop qui apaise.": "The syrup that soothes.",
  "Les 11 mutations d'abeilles, leur probabilité, leur plage et leur couleur.": "The 11 bee mutations, their probability, their range and their colour.",
  "Les 11 pourcentages du tableau ci-dessus sont fixes : ils ne dépendent ni du niveau de l'abeille, ni de sa rareté, ni de la méthode utilisée. Ils décrivent uniquement": "The 11 percentages in the table above are fixed: they depend neither on the bee's level, nor on its rarity, nor on the method used. They only describe",
  "Les 14 planteurs du jeu.": "The 14 planters in the game.",
  "Les 289 stickers avec leur valeur en": "The 289 stickers with their value in",
  "Les 4 paliers du Stick Bug Amulet": "The 4 tiers of the Stick Bug Amulet",
  "Les 5 paliers du Ant Amulet": "The 5 tiers of the Ant Amulet",
  "Les 5 paliers du Cog Amulet": "The 5 tiers of the Cog Amulet",
  "Les 5 paliers du Shell Amulet": "The 5 tiers of the Shell Amulet",
  "Les 5 paliers du Star Amulet": "The 5 tiers of the Star Amulet",
  "Les 7 types d'amulettes du jeu : où les obtenir, quels bonus elles donnent et comment leur qualité est déterminée.": "The 7 amulet types in the game: where to get them, what bonuses they give and how their quality is determined.",
  "Les capacités passives": "The passive abilities",
  "Les champs et les lieux de la carte.": "The fields and locations on the map.",
  "Les cires pour améliorer les beequips.": "The waxes used to upgrade beequips.",
  "Les disques du Robo Bear.": "Robo Bear's disks.",
  "Les excuses du Bubble Bee Man : objet de quête exclusif.": "The Bubble Bee Man's apology: exclusive quest item.",
  "Les lignes marquées [Ruche] s'appliquent à toutes tes abeilles et se cumulent entre exemplaires. C'est pourquoi trois Electric Candles donnent trois fois le bonus de Flame Pollen.": "Lines marked [Hive] apply to all your bees and stack across copies. That is why three Electric Candles give three times the Flame Pollen bonus.",
  "Les ours à quêtes, marchands, voyageurs et hostiles.": "Quest bears, merchants, travellers and hostile bears.",
  "Les parcours de progression : ruche incolore, rouge, bleue ou blanche.": "The progression routes: colourless, red, blue or white hive.",
  "Les parcours de progression, classés par orientation de ruche. Choisis une voie pour voir les étapes conseillées.": "The progression routes, sorted by hive focus. Pick a path to see the recommended steps.",
  "Les plages ci-dessous valent pour les abeilles de": "The ranges below apply to bees of",
  "Les probabilités ne bougent pas": "The probabilities don't move",
  "Les rectangles colorés semblent se fondre les uns dans les autres.": "The coloured rectangles seem to blend into one another.",
  "Les statistiques de cette amulette ne sont pas encore renseignées. Envoie-moi le tableau du wiki et je l'ajoute.": "The stats for this amulet have not been filled in yet. Send me the wiki table and I'll add it.",
  "Les stats sont piochées par groupes, et certains groupes n'apparaissent qu'avec une probabilité donnée. Après le tirage, une stat peut encore se retirer elle-même. C'est pour ça que deux amulettes du même palier n'ont pas forcément le même nombre de bonus — et ce filtrage": "Stats are drawn in groups, and some groups only show up with a given probability. After the roll, a stat can still remove itself. That is why two amulets of the same tier don't necessarily have the same number of bonuses — and this filtering",
  "Les stickers s'échangent contre d'autres stickers, des beequips ou des hive skins. C'est pour ça que la colonne « Valeur » en signs existe : c'est la monnaie de référence de la communauté.": "Stickers are traded for other stickers, for beequips or for hive skins. That is why the “Value” column in signs exists: it is the community's reference currency.",
  "Les zones de la carte, les ours et leurs quêtes, et les monstres.": "The areas of the map, the bears and their quests, and the mobs.",
  "Liste partielle : il manque des statistiques que je n'ai pas encore reçues.": "Partial list: some stats are missing because I haven't received them yet.",
  "Longue et fine comme une lance verte.": "Long and thin like a green spear.",
  "Lunettes étranges : accessoire de tête à l'allure décalée.": "Strange glasses: an offbeat-looking head accessory.",
  "Légendaire": "Legendary",
  "Magic Bean Shop, quêtes": "Magic Bean Shop, quests",
  "Manche 10 et plus": "Wave 10 and above",
  "Manche 15 et plus": "Wave 15 and above",
  "Manche 20 et plus": "Wave 20 and above",
  "Manche 5 et plus": "Wave 5 and above",
  "Masque d'apiculteur : le premier vrai masque de progression.": "Beekeeper's mask: the first real progression mask.",
  "Masque de diamant, fabriqué dans la Diamond Room après le parcours des nuages. Il rend les plateformes de la salle solides de jour comme de nuit.": "Diamond mask, crafted in the Diamond Room after the cloud course. It makes the platforms in the room solid by day as well as by night.",
  "Masque de feu : orienté pollen rouge et flammes.": "Fire mask: geared towards red pollen and flames.",
  "Masque de miel : bonus de conversion et de miel.": "Honey mask: conversion and honey bonuses.",
  "Masque démoniaque : gros bonus d'attaque et de flammes.": "Demon mask: big attack and flame bonuses.",
  "Masque gélifié : bonus de goo et de conversion du goo.": "Gummy mask: goo and goo conversion bonuses.",
  "Masque à bulles : orienté pollen bleu et bulles.": "Bubble mask: geared towards blue pollen and bubbles.",
  "Matériaux de craft et leurs recettes.": "Crafting materials and their recipes.",
  "Miel + matériaux": "Honey + materials",
  "Mobs, quêtes, cadeaux quotidiens": "Mobs, quests, daily gifts",
  "Monnaie secondaire : emplacements de stickers et de beequips, Ticket Tent, boutiques spéciales.": "Secondary currency: sticker and beequip slots, Ticket Tent, special shops.",
  "Monstres, boss et créatures de défi, avec leurs zones et leurs loots.": "Mobs, bosses and challenge creatures, with their areas and their drops.",
  "Moon Amulet Generator (100 Moon Charms par génération)": "Moon Amulet Generator (100 Moon Charms per generation)",
  "Mother Bear, nuit, quêtes": "Mother Bear, night, quests",
  "Movement Collection et Ticket Chance sont deux bonus très rares : c'est en les décrochant qu'on atteint 5 lignes. Avec le King Beetle Amulet, c'est la seule amulette sans paliers.": "Movement Collection and Ticket Chance are two very rare bonuses: getting them is how you reach 5 lines. Along with the King Beetle Amulet, it is the only amulet with no tiers.",
  "Mur bleu près du Bamboo Field": "Blue wall near the Bamboo Field",
  "Mur droit du bâtiment de la boutique de Dapper Bear": "Right-hand wall of Dapper Bear's shop building",
  "Mur droit à côté du Coconut Field": "Right-hand wall next to the Coconut Field",
  "Mur droit à l'intérieur de la Coconut Cave": "Right-hand wall inside the Coconut Cave",
  "Mur en face de la Honey Bee": "Wall facing the Honey Bee",
  "Mur extérieur droit du Blue HQ, près de la Wealth Clock": "Right-hand outer wall of the Blue HQ, near the Wealth Clock",
  "Mur gauche au début des escaliers vers la boutique de Dapper Bear": "Left-hand wall at the bottom of the stairs to Dapper Bear's shop",
  "Mur gauche de l'entrée de la boutique de Dapper Bear": "Left-hand wall at the entrance of Dapper Bear's shop",
  "Mur gauche du Sunflower Field, sous le Red HQ": "Left-hand wall of the Sunflower Field, under the Red HQ",
  "Mur gauche juste derrière le Windy Bee Gate": "Left-hand wall just behind the Windy Bee Gate",
  "Mur gauche ou droit du Blue Flower Field": "Left-hand or right-hand wall of the Blue Flower Field",
  "Mur gauche à l'intérieur de la boutique de Dapper Bear": "Left-hand wall inside Dapper Bear's shop",
  "Mur près de l'entrée du Mountain Top Shop": "Wall near the Mountain Top Shop entrance",
  "Mur près du Clover Field": "Wall near the Clover Field",
  "Mur près du Strawberry Dispenser": "Wall near the Strawberry Dispenser",
  "Mur sous le téléporteur bleu": "Wall under the blue teleporter",
  "Mur à côté du Bubble Bee Man": "Wall next to the Bubble Bee Man",
  "Mur à gauche, sous l'entrée du Ant Gate": "Wall on the left, under the Ant Gate entrance",
  "Myrtille : friandise préférée des abeilles bleues.": "Blueberry: favourite treat of the blue bees.",
  "Même le soleil ne l'empêche pas de voler.": "Not even the sun stops it from flying.",
  "Ne booste qu'un seul champ : utile surtout en ruche bleue qui farm la Pine Tree Forest.": "It only boosts a single field: mostly useful for a blue hive farming the Pine Tree Forest.",
  "Nectar Condenser, quêtes": "Nectar Condenser, quests",
  "Niveau 21 et plus": "Level 21 and above",
  "Niveau de toutes les abeilles": "Level of all bees",
  "Niveau visé": "Target level",
  "Noix de coco : friandise du Coconut Field, aussi utilisée en fabrication.": "Coconut: treat from the Coconut Field, also used in crafting.",
  "Noob Shop, quêtes, tokens": "Noob Shop, quests, tokens",
  "Nourrir une abeille mutée et radioactive avec sa friandise préférée peut lui faire gagner une nouvelle mutation": "Feeding a mutated, radioactive bee its favourite treat can give it a new mutation",
  "Objets de l'événement Beesmas.": "Items from the Beesmas event.",
  "Objets du bloc Regular de l'inventaire.": "Items from the Regular block of the inventory.",
  "Objets qu'on ne trouve que dans certaines quêtes.": "Items only found in certain quests.",
  "Obtenue en battant le Stump Snail, dans le Stump Field. C'est la seule amulette du jeu qui donne des bonus de goo, de conversion du goo et de défense — un profil unique qu'aucune autre ne remplace.": "Obtained by defeating the Stump Snail, in the Stump Field. It is the only amulet in the game that gives goo, goo conversion and defence bonuses — a unique profile that no other one replaces.",
  "Offre à durée limitée ! (la durée de ta vie).": "Limited-time offer! (as long as you live).",
  "On dirait un peu un homard.": "It looks a bit like a lobster.",
  "On l'a forcée à aller là où elle ne voulait pas.": "She was forced to go where she didn't want to.",
  "On l'appelle le vieux Saint Puff.": "They call him old Saint Puff.",
  "On ne court pas avec ça.": "You don't run with these.",
  "On ne marche pas là-dessus.": "You don't walk on this.",
  "Orange : tu as de quoi le fabriquer sur-le-champ": "Orange: you have what it takes to craft it right now",
  "Orienté bulles et conversion instantanée.": "Geared towards bubbles and instant conversion.",
  "Orienté ruche blanche. Fiable sans être décisif. Niveau et limite à vérifier.": "White hive oriented. Reliable without being decisive. Level and limit to be confirmed.",
  "Ours en pain d'épices : objet de Beesmas, donné notamment par les Reindeer Antlers.": "Gingerbread bear: Beesmas item, given notably by the Reindeer Antlers.",
  "Ours en pain d'épices rassis : version vieillie, plus rare.": "Stale gingerbread bear: aged version, rarer.",
  "Outil à impulsions. Possiblement radioactif.": "A pulse tool. Possibly radioactive.",
  "Où l'obtenir": "Where to get it",
  "Où les trouver": "Where to find them",
  "Où trouver les stickers cachés": "Where to find the hidden stickers",
  "Page dédiée": "Dedicated page",
  "Paillettes : boost puissant et ingrédient rare. Se fabrique avec 25 Moon Charms et 1 Magic Bean.": "Glitter: powerful boost and rare ingredient. Crafted from 25 Moon Charms and 1 Magic Bean.",
  "Parachute : ralentit la chute pour traverser la carte en douceur.": "Parachute: slows your fall so you can cross the map gently.",
  "Pare ta ruche de diamants.": "Deck your hive out in diamonds.",
  "Parfait pour monter ta propre boutique de stickers.": "Perfect for setting up your own sticker shop.",
  "Parfaitement construit pour la chasse au trésor.": "Perfectly built for treasure hunting.",
  "Pas assez de pattes pour être techniquement une araignée.": "Not enough legs to technically be a spider.",
  "Pas d'essence, pas de réseau, pas d'équipe de secours…": "No fuel, no signal, no rescue team…",
  "Pas encore de description.": "No description yet.",
  "Pas pour les skieurs débutants.": "Not for beginner skiers.",
  "Passe fourmi : donne accès à l'Ant Challenge dans le Ant Field.": "Ant pass: gives access to the Ant Challenge in the Ant Field.",
  "Pente bleue près du Strawberry Field": "Blue slope near the Strawberry Field",
  "Permet d'attraper des choses de loin, deux ou trois fois.": "Lets you grab things from a distance, two or three times.",
  "Permet de choisir précisément n'importe quelle abeille du jeu.": "Lets you pick exactly any bee in the game.",
  "Permet de choisir soi-même quelle abeille Mythique obtenir.": "Lets you choose which Mythic bee you get.",
  "Petite poche de ceinture : la première capacité en plus.": "Small belt pouch: the first bit of extra capacity.",
  "Peu intéressant pour l'abeille elle-même, mais son bonus de ruche est excellent. Niveau et limite à vérifier.": "Not much use for the bee itself, but its hive bonus is excellent. Level and limit to be confirmed.",
  "Peut aussi vouloir dire Victoire.": "It can also mean Victory.",
  "Peut signifier une addition, ou une pharmacie.": "It can mean an addition, or a pharmacy.",
  "Planteur bonbon : orienté gumdrops et goo.": "Candy planter: geared towards gumdrops and goo.",
  "Planteur collant : très bon rendement en cires et beequips.": "Sticky planter: very good output in waxes and beequips.",
  "Planteur d'argile bleue : boosté sur les champs bleus.": "Blue clay planter: boosted on blue fields.",
  "Planteur d'argile rouge : boosté sur les champs rouges. Peut lâcher un Thumbtack.": "Red clay planter: boosted on red fields. Can drop a Thumbtack.",
  "Planteur de Beesmas : usage unique, récompenses de l'événement.": "Beesmas planter: single use, event rewards.",
  "Planteur en papier : usage unique, très rapide, petites récompenses. Idéal pour débuter.": "Paper planter: single use, very fast, small rewards. Ideal to start with.",
  "Planteur pesticide : élimine les mobs. Meilleure chance de Bang Snap et Bead Lizard.": "Pesticide planter: wipes out mobs. Better chance of Bang Snaps and Bead Lizards.",
  "Planteur pétale : la seule voie réaliste pour le Lei et le Charm Bracelet.": "Petal planter: the only realistic route to the Lei and the Charm Bracelet.",
  "Planteur traité à la chaleur : orienté rouge. Peut lâcher un Thumbtack.": "Heat-treated planter: red oriented. Can drop a Thumbtack.",
  "Planteur à stickers : usage unique, orienté stickers.": "Sticker planter: single use, sticker oriented.",
  "Planteur à tickets : usage unique, récompense surtout en tickets.": "Ticket planter: single use, rewards mostly in tickets.",
  "Planteurs, quêtes": "Planters, quests",
  "Planteurs, quêtes, Sticker Stack": "Planters, quests, Sticker Stack",
  "Plateforme de réclamation, événements": "Claim platform, events",
  "Polyvalent et facile à obtenir. Le ×Bee Attack de ruche en fait un bon choix de début.": "Versatile and easy to get. The ×Bee Attack hive bonus makes it a good early pick.",
  "Porté par les gens autonomes.": "Worn by self-sufficient people.",
  "Position visuelle : au-dessus de la tête avec 1 amulette, épaule gauche avec 2, épaule droite avec 3 ou plus.": "Where they show: above your head with 1 amulet, left shoulder with 2, right shoulder with 3 or more.",
  "Pour chaque niveau, indique combien d'abeilles tu": "For each level, enter how many bees you",
  "Pour couvrir les fleurs d'eau savonneuse.": "For covering the flowers in soapy water.",
  "Pour les ruches débordant de richesse.": "For hives overflowing with wealth.",
  "Pour les skieurs débutants.": "For beginner skiers.",
  "Pour les skieurs intermédiaires.": "For intermediate skiers.",
  "Pour moissonner les flammes.": "For reaping the flames.",
  "Pour moissonner les flammes. Outil rouge haut de gamme, à fabriquer.": "For reaping the flames. High-end red tool, crafted.",
  "Pour quand les mots ne suffisent pas.": "For when words are not enough.",
  "Pourquoi le nombre de lignes varie": "Why the number of lines varies",
  "Pourrait dévier un caillou ou deux.": "It might deflect a pebble or two.",
  "Pousse sur les souches et la mousse.": "It grows on stumps and moss.",
  "Protection liée à Bomber Bee : bonus de bombes.": "Guard tied to Bomber Bee: bomb bonuses.",
  "Protection liée à Brave Bee : bonus d'attaque.": "Guard tied to Brave Bee: attack bonuses.",
  "Protection liée à Bucko Bee.": "Guard tied to Bucko Bee.",
  "Protection liée à Cobalt Bee : haut de gamme bleu.": "Guard tied to Cobalt Bee: high-end blue.",
  "Protection liée à Crimson Bee : haut de gamme rouge.": "Guard tied to Crimson Bee: high-end red.",
  "Protection liée à Hasty Bee : bonus de vitesse.": "Guard tied to Hasty Bee: speed bonuses.",
  "Protection liée à Looker Bee : bonus de critique.": "Guard tied to Looker Bee: crit bonuses.",
  "Protection liée à Riley Bee.": "Guard tied to Riley Bee.",
  "Près de l'entrée de la Badge Bearer's Guild, derrière un pan de mur": "Near the entrance of the Badge Bearer's Guild, behind a section of wall",
  "Près de l'invocation de la Mythic Meteor Shower": "Near the Mythic Meteor Shower summon",
  "Puffshrooms et blooms, avec le pollen requis par niveau.": "Puffshrooms and blooms, with the pollen required per level.",
  "Pétale spirituel : objet de quête exclusif lié à Spirit Bear.": "Spirit petal: exclusive quest item tied to Spirit Bear.",
  "Qualité = performance": "Quality = performance",
  "Qualité du King Beetle Amulet": "King Beetle Amulet quality",
  "Qualité maximale — au-delà, plus d'amélioration": "Maximum quality — no further improvement beyond this",
  "Qualité minimale": "Minimum quality",
  "Quand le Book est plein, les nouveaux stickers tombent dans l'Inbox (200 places, non extensible). Ils y sont": "When the Book is full, new stickers drop into the Inbox (200 slots, not expandable). They stay there",
  "Quand le Mythic Egg se trompe dans ses calculs.": "When the Mythic Egg gets its maths wrong.",
  "Quand tu lui souris, il te sourit.": "When you smile at him, he smiles back.",
  "Quand un seul point ne suffit pas.": "When a single dot is not enough.",
  "Quantité": "Quantity",
  "Quelqu'un brûle de la crème de tartre.": "Someone is burning cream of tartar.",
  "Quête exclusive": "Exclusive quest",
  "Quêtes avancées, Sticker Stack": "Advanced quests, Sticker Stack",
  "Quêtes avancées, boss": "Advanced quests, bosses",
  "Quêtes avancées, événements": "Advanced quests, events",
  "Quêtes de haut niveau, événements": "High-level quests, events",
  "Quêtes et événements": "Quests and events",
  "Quêtes exclusives": "Exclusive quests",
  "Quêtes, Blender": "Quests, Blender",
  "Quêtes, Sticker Stack": "Quests, Sticker Stack",
  "Quêtes, cadeaux": "Quests, gifts",
  "Quêtes, codes, événements": "Quests, codes, events",
  "Quêtes, planteurs": "Quests, planters",
  "Quêtes, planteurs, Sticker Stack": "Quests, planters, Sticker Stack",
  "Quêtes, planteurs, mobs": "Quests, planters, mobs",
  "Quêtes, événements": "Quests, events",
  "Quêtes, événements (très rare)": "Quests, events (very rare)",
  "Quêtes, événements, Robux": "Quests, events, Robux",
  "Re-mutter une abeille peut redonner": "Re-mutating a bee can give back",
  "Recouvre les fleurs d'eau savonneuse. Favorise le pollen bleu.": "Covers the flowers in soapy water. Favours blue pollen.",
  "Regarde dans cet abîme, et… il te regardera aussi…": "Look into this abyss, and… it will look back at you…",
  "Renseigne ce que tu possèdes déjà dans la colonne": "Enter what you already own in the",
  "Renseigne tes abeilles pour voir le prix.": "Enter your bees to see the price.",
  "Ressemble à une disposition de manette célèbre.": "It looks like a famous controller layout.",
  "Retirer un beequip d'une abeille coûte du miel, ou des tickets pour les niveaux élevés. Le coût augmente avec le niveau du beequip. Et mutter une abeille déséquipe automatiquement son beequip.": "Taking a beequip off a bee costs honey, or tickets at high levels. The cost goes up with the beequip's level. And mutating a bee automatically unequips its beequip.",
  "Retiré": "Removed",
  "Retiré du jeu": "Removed from the game",
  "Rien d'intéressant chez cet ours, à part son t-shirt.": "Nothing interesting about this bear, apart from his t-shirt.",
  "Rien pour l'instant. Choisis un objet ci-dessus et clique sur": "Nothing for now. Pick an item above and click",
  "Robo Pass Dispenser, quêtes": "Robo Pass Dispenser, quests",
  "Royal Jelly, Star Jelly et gelées d'abeilles.": "Royal Jelly, Star Jelly and bee jellies.",
  "Royal Jelly, Star Jelly, Moon Charm et friandises spéciales ont une chance de mutter l'abeille — chance non publiée.": "Royal Jelly, Star Jelly, Moon Charm and special treats have a chance to mutate the bee — the chance is not published.",
  "Ruche portative : capacité énorme et bonus de conversion.": "Portable hive: huge capacity and conversion bonus.",
  "Ruche portative en porcelaine : sac blanc haut de gamme.": "Porcelain portable hive: high-end white bag.",
  "Râteau qui gratte le pollen des fleurs sans abîmer leur tige.": "A rake that scrapes the pollen off the flowers without damaging their stems.",
  "Réalisé par": "Made by",
  "Réchauffe ta ruche.": "Warm up your hive.",
  "Rêveur, empathique, artiste, superstitieux.": "Dreamy, empathetic, artistic, superstitious.",
  "S'obtient en terminant le Stick Bug Challenge. Attention au piège : même avec un Stick Bug de haut niveau, si ta contribution au score du défi est trop faible, tu ne reçois aucune amulette. Comme pour l'Ant Amulet, ton score s'affiche au-dessus des récompenses.": "Obtained by completing the Stick Bug Challenge. Watch out for the trap: even with a high-level Stick Bug, if your contribution to the challenge score is too low, you get no amulet at all. As with the Ant Amulet, your score is shown above the rewards.",
  "Sa Melody peut libérer deux emplacements de ruche en remplaçant des Music Bees. Niveau et limite à vérifier.": "Its Melody can free up two hive slots by replacing Music Bees. Level and limit to be confirmed.",
  "Sabots en noix de coco : bottes de fin de jeu.": "Coconut clogs: end-game boots.",
  "Sac à dos classique.": "Classic backpack.",
  "Sacoche géante.": "Giant satchel.",
  "Sans couleur : à récolter ou à acheter": "Colourless: gathered or bought",
  "Science Bear, quêtes": "Science Bear, quests",
  "Scooper, Gummyballer et tout ce qu'il y a entre les deux.": "Scooper, Gummyballer and everything in between.",
  "Score au défi": "Challenge score",
  "Secoueur de floraison : fait fleurir un champ pour booster la récolte.": "Bloom shaker: makes a field bloom to boost your harvest.",
  "Ses bulbes peuvent valoir très cher.": "Its bulbs can be worth a fortune.",
  "Ses palmes peuvent peser plus de 45 kg.": "Its flippers can weigh over 45 kg.",
  "Smoothie : gros boost combiné de fin de jeu.": "Smoothie: big combined end-game boost.",
  "Soft Wax = 1 point, Hard Wax = 2, Caustic Wax et Debug Wax = 4, Swirled Wax = 0. Un point améliore exactement une stat. Une stat au maximum sort du tirage, ce qui améliore les chances des autres.": "Soft Wax = 1 point, Hard Wax = 2, Caustic Wax and Debug Wax = 4, Swirled Wax = 0. One point upgrades exactly one stat. A maxed-out stat drops out of the roll, which improves the odds for the others.",
  "Son allure est aussi grande que son appétit.": "His stature is as big as his appetite.",
  "Son cou est long pour voir par-dessus les chevaux devant elle.": "Her neck is long so she can see over the horses in front of her.",
  "Son pessimisme s'est matérialisé en nuage permanent.": "His pessimism has materialised into a permanent cloud.",
  "Sous le Magic Bean Shop, murs avant et gauche": "Under the Magic Bean Shop, front and left-hand walls",
  "Souvent tranché dans les salades.": "Often sliced into salads.",
  "Spécialisé abilities : très bon sur les abeilles à tokens.": "Ability specialist: very good on token bees.",
  "Statut gifted de toute la ruche": "Gifted status of the whole hive",
  "Sticker Stack, quêtes": "Sticker Stack, quests",
  "Sticker secret : la récompense des spectateurs fidèles de la chaîne officielle. Il ne figure pas dans l'index normal et ne se trouve pas sur la carte.": "Secret sticker: the reward for loyal viewers of the official channel. It is not in the normal index and cannot be found on the map.",
  "Sticker secret : récompense pour une contribution positive aux discussions de la communauté, sur le Discord officiel. Introuvable en jeu.": "Secret sticker: reward for contributing positively to community discussions, on the official Discord. Not findable in game.",
  "Stickers cachés sur la carte": "Stickers hidden around the map",
  "Stinger Shop, mobs, quêtes": "Stinger Shop, mobs, quests",
  "Succès (achievements)": "Achievements",
  "Suprême": "Supreme",
  "Suprême uniquement · 1/6": "Supreme only · 1/6",
  "Suprême uniquement · 1/6 · recharge 60 s": "Supreme only · 1/6 · 60 s cooldown",
  "Sur la plateforme du Panda Bear": "On the Panda Bear platform",
  "Sur la rampe qui mène au portail des 5 abeilles": "On the ramp leading to the 5-bee gate",
  "Sur la ruche": "On the hive",
  "Sur le côté de la plateforme de l'Instant Converter": "On the side of the Instant Converter platform",
  "Sur le côté de la plateforme du Pepper Patch": "On the side of the Pepper Patch platform",
  "Sur le côté de la plateforme enneigée derrière le Polar Bear": "On the side of the snowy platform behind the Polar Bear",
  "Sur le côté de la plateforme sous celle du Sticker Printer": "On the side of the platform below the Sticker Printer one",
  "Sur le côté du sol, près du Robo Pass Dispenser": "On the side of the ground, near the Robo Pass Dispenser",
  "Sur le flanc de la pente marron près du Rose Field": "On the side of the brown slope near the Rose Field",
  "Sur le mur, près du bord de la plateforme d'Onett": "On the wall, near the edge of Onett's platform",
  "Sur le toit de la boutique de Dapper Bear": "On the roof of Dapper Bear's shop",
  "Sur un rocher juste à côté du Ant Gate": "On a rock right next to the Ant Gate",
  "Sur une abeille normale : 1 chance sur 1 000 de déclencher une mutation aléatoire.": "On a normal bee: a 1 in 1,000 chance of triggering a random mutation.",
  "Sécateur rapide. Ne cours pas avec ça.": "Fast clippers. Don't run with these.",
  "Taillé dans la boule de neige d'un Snowbear niveau 20.": "Carved out of the snowball of a level 20 Snowbear.",
  "Te prévient qu'il se passe quelque chose.": "It warns you that something is happening.",
  "Testeur de nectar : objet de quête pour analyser le nectar.": "Nectar tester: quest item used to analyse nectar.",
  "Théâtral, extraverti, vaniteux, superstitieux.": "Theatrical, extroverted, vain, superstitious.",
  "Tonneau d'élite. Grosse capacité de milieu de jeu.": "Elite barrel. Big mid-game capacity.",
  "Tous les 250 Boost Tokens, une Guiding Star apparaît 10 minutes au-dessus d'un champ au hasard, choisi parmi les 5 champs où tu as le moins récolté. Elle donne ×2,5 pollen, capacité et convert rate au joueur qui l'a invoquée, et ×1,25 aux autres joueurs présents. Pendant ce temps elle pollinise 15 fleurs (+1 par type d'abeille gifted) toutes les 15 secondes. En Suprême, elle accorde en plus ×1,25 capacité en permanent.": "Every 250 Boost Tokens, a Guiding Star appears for 10 minutes above a random field, picked from the 5 fields you have gathered from the least. It gives ×2.5 pollen, capacity and convert rate to the player who summoned it, and ×1.25 to the other players present. Meanwhile it pollinates 15 flowers (+1 per gifted bee type) every 15 seconds. On Supreme, it also grants a permanent ×1.25 capacity.",
  "Tous les 30 Boost Tokens, une Pop Star donne +10 % Instant Blue Conversion et ×2 Blue Pollen pendant 45 s, plus 2 minutes de « Bubble Bloat ». Chaque bulle éclatée fait grossir l'étoile : +1 % Blue Pollen (jusqu'à ×4,5) et +4 s de Bubble Bloat (1 s si la bulle n'est pas la tienne, 6 s si elle est dorée), ce qui pousse la Blue Field Capacity et le Convert Rate At Hive jusqu'à ×6 pendant 2 h 30. Accorde ×1,25 Blue Field Capacity en permanent.": "Every 30 Boost Tokens, a Pop Star gives +10% Instant Blue Conversion and ×2 Blue Pollen for 45 s, plus 2 minutes of “Bubble Bloat”. Each bubble popped makes the star grow: +1% Blue Pollen (up to ×4.5) and +4 s of Bubble Bloat (1 s if the bubble isn't yours, 6 s if it's golden), which pushes Blue Field Capacity and Convert Rate At Hive up to ×6 for 2 h 30. Grants a permanent ×1.25 Blue Field Capacity.",
  "Tous les 30 Boost Tokens, une Scorching Star apparaît 45 s : +50 % Instant Flame Conversion, +5 Conversion Links, ×2 Red Pollen et Convert Rate. Rester près des flammes la fait grossir, jusqu'à ×5 et 30 Conversion Links. À l'expiration, tout le pollen de ton conteneur est converti instantanément. Accorde ×1,25 Red Field Capacity en permanent.": "Every 30 Boost Tokens, a Scorching Star appears for 45 s: +50% Instant Flame Conversion, +5 Conversion Links, ×2 Red Pollen and Convert Rate. Staying near the flames makes it grow, up to ×5 and 30 Conversion Links. When it expires, all the pollen in your container is converted instantly. Grants a permanent ×1.25 Red Field Capacity.",
  "Tous les 40 Boost ou Mark Tokens, 10 étoiles filantes tombent sur le champ et convertissent instantanément 30 pollen (+50 % par type d'abeille gifted, +100 % par stack de Field Boost) sur 5 fleurs. Attraper une étoile donne un stack d'Inspire et convertit 1 M + 200 % de ton Convert Total. Accorde ×1,25 capacité en permanent.": "Every 40 Boost or Mark Tokens, 10 shooting stars fall on the field and instantly convert 30 pollen (+50% per gifted bee type, +100% per Field Boost stack) on 5 flowers. Catching a star gives an Inspire stack and converts 1 M + 200% of your Convert Total. Grants a permanent ×1.25 capacity.",
  "Tous les autres fruits": "All the other fruits",
  "Tous les objets du jeu, classés par famille : à quoi ils servent, combien ils coûtent et où les trouver.": "Every item in the game, sorted by family: what they do, what they cost and where to find them.",
  "Tous les œufs, gifted et événements compris.": "Every egg, gifted and event ones included.",
  "Tout ce qui se trouve sur la carte : les zones, les ours et leurs quêtes, et les monstres.": "Everything you can find on the map: the areas, the bears and their quests, and the mobs.",
  "Tout le monde a besoin d'un coup de main de temps en temps.": "Everyone needs a hand from time to time.",
  "Tout pour ta": "Everything for your",
  "Toutes les amulettes, leurs effets et comment les fabriquer.": "Every amulet, what it does and how to craft it.",
  "Toutes les couleurs visibles existent dans la lumière blanche.": "Every visible colour is contained in white light.",
  "Toutes les pousses ne deviennent pas géantes.": "Not every sprout grows into a giant one.",
  "Trade équitable": "Fair trade",
  "Traducteur : objet de quête exclusif, sert à comprendre certains personnages.": "Translator: exclusive quest item, used to understand certain characters.",
  "Transforme l'abeille visée en Bubble Bee.": "Turns the target bee into a Bubble Bee.",
  "Transforme l'abeille visée en Bumble Bee.": "Turns the target bee into a Bumble Bee.",
  "Transforme l'abeille visée en Buoyant Bee.": "Turns the target bee into a Buoyant Bee.",
  "Transforme l'abeille visée en Diamond Bee.": "Turns the target bee into a Diamond Bee.",
  "Transforme l'abeille visée en Exhausted Bee.": "Turns the target bee into an Exhausted Bee.",
  "Transforme l'abeille visée en Honey Bee.": "Turns the target bee into a Honey Bee.",
  "Transforme l'abeille visée en Music Bee.": "Turns the target bee into a Music Bee.",
  "Transforme l'abeille visée en Rascal Bee.": "Turns the target bee into a Rascal Bee.",
  "Transforme l'abeille visée en Shocked Bee.": "Turns the target bee into a Shocked Bee.",
  "Transforme ta ruche en vraie maison.": "Turn your hive into a real home.",
  "Transforme une abeille en une autre abeille aléatoire. Fait perdre mutation et statut Gifted.": "Turns a bee into another random bee. It loses its mutation and its Gifted status.",
  "Treat Shop, quêtes, tokens": "Treat Shop, quests, tokens",
  "Trinitrotoluène.": "Trinitrotoluene.",
  "Trois beequips dépendent des mutations : le": "Three beequips depend on mutations: the",
  "Très bon car la mutation demandée n'a pas de type imposé : ça le rend posable sur presque n'importe quelle abeille mutée. Niveau et limite à vérifier.": "Very good because the required mutation has no imposed type: that makes it placeable on almost any mutated bee. Level and limit to be confirmed.",
  "Très fort pour une ruche bleue : il booste à la fois la conversion et le miel à la ruche.": "Very strong for a blue hive: it boosts both conversion and honey at the hive.",
  "Tu peux porter les 7 types en même temps — King Beetle, Star, Ant, Moon, Shell, Stick Bug, Cog — mais une seule de chaque.": "You can wear all 7 types at once — King Beetle, Star, Ant, Moon, Shell, Stick Bug, Cog — but only one of each.",
  "Térébenthine : ingrédient obtenu par certaines quêtes seulement.": "Turpentine: ingredient obtained through certain quests only.",
  "Têtu, sensuel, loyal, superstitieux.": "Stubborn, sensual, loyal, superstitious.",
  "Un M stylé. Parfait en bordure.": "A stylish M. Perfect along an edge.",
  "Un Stinger sur trois est gratuit et invoque une Star Saw pendant 30 s. Elle tourne autour de toi, infligeant 15 % de ton attaque totale (précision liée au niveau moyen de ta ruche, sans compter les invocations), ramasse les tokens et convertit instantanément 3 pollen (+0,5 par 100 d'attaque totale) sur 5 fleurs, 10 fois par seconde. Elle convertit en plus autant de pollen dans ton conteneur.": "One Stinger in three is free and summons a Star Saw for 30 s. It spins around you, dealing 15% of your total attack (accuracy tied to your hive's average level, summons excluded), picks up tokens and instantly converts 3 pollen (+0.5 per 100 total attack) on 5 flowers, 10 times per second. It also converts the same amount of pollen in your container.",
  "Un beequip impose un": "A beequip imposes a",
  "Un centre de ressources pour Bee Swarm Simulator : parcours les items, stickers, amulettes et beequips du jeu, et utilise des outils qui font les calculs à ta place.": "A resource hub for Bee Swarm Simulator: browse the game's items, stickers, amulets and beequips, and use tools that do the maths for you.",
  "Un cycle épuisant et sans fin, automatisé.": "An exhausting, endless cycle, automated.",
  "Un des beequips les plus recherchés du jeu, pour son +% Loot Luck de ruche.": "One of the most sought-after beequips in the game, for its +% hive Loot Luck.",
  "Un des célèbres monolithes insulaires.": "One of the famous island monoliths.",
  "Un des huit beequips à donner une statistique négative.": "One of the eight beequips that give a negative stat.",
  "Un des huit beequips à statistique négative. Détails à compléter.": "One of the eight beequips with a negative stat. Details to be completed.",
  "Un des meilleurs beequips de capacité pour les ruches bleues et blanches. Peu utile en rouge.": "One of the best capacity beequips for blue and white hives. Not much use in red.",
  "Un des meilleurs beequips de capacité pour une ruche bleue.": "One of the best capacity beequips for a blue hive.",
  "Un des trois beequips à ability unique, et un des deux seuls visibles en 3D sur l'abeille. Il peut donner des Gingerbread Bears.": "One of the three beequips with a unique ability, and one of only two visible in 3D on the bee. It can give Gingerbread Bears.",
  "Un des trois beequips à ability unique. Avant 2024 c'était un beequip permanent, avec un potentiel fixe de 3 ★.": "One of the three beequips with a unique ability. Before 2024 it was a permanent beequip, with a fixed potential of 3 ★.",
  "Un des trois beequips à ability unique. Hors Beesmas, c'est la seule source du buff Cool Breeze.": "One of the three beequips with a unique ability. Outside Beesmas, it is the only source of the Cool Breeze buff.",
  "Un des trois beequips à donner Gather Pollination Chance, avec le Lei et la Poinsettia.": "One of the three beequips that give Gather Pollination Chance, along with the Lei and the Poinsettia.",
  "Un des trois beequips à donner Gather Pollination Chance. Niveau et limite à vérifier sur le wiki.": "One of the three beequips that give Gather Pollination Chance. Level and limit to be checked on the wiki.",
  "Un dessin animé inoffensif qui a mal tourné.": "A harmless cartoon gone wrong.",
  "Un délice en forme de trompette.": "A trumpet-shaped delicacy.",
  "Un geste irrévérencieux.": "An irreverent gesture.",
  "Un goût riche et terreux qui écrase tout le reste.": "A rich, earthy taste that overpowers everything else.",
  "Un indicateur de direction.": "A direction marker.",
  "Un jeune ours polaire en pleine crise d'identité.": "A young polar bear in the middle of an identity crisis.",
  "Un losange éblouissant aux teintes jaunes.": "A dazzling diamond shape in shades of yellow.",
  "Un minuscule insecte suceur de sève qui te fixe.": "A tiny sap-sucking insect staring at you.",
  "Un orage se prépare.": "A storm is brewing.",
  "Un ourson cosmique venu d'une autre galaxie.": "A cosmic cub from another galaxy.",
  "Un ourson en biscuit, ramené à la vie par la magie de Honeyday.": "A biscuit cub, brought back to life by the magic of Honeyday.",
  "Un ourson mécanique fait d'engrenages et de sucres d'orge.": "A mechanical cub made of gears and candy canes.",
  "Un ourson un peu joufflu qui a goûté à la Royal Jelly.": "A slightly chubby cub that has tasted Royal Jelly.",
  "Un outil venu de nos humbles débuts.": "A tool from our humble beginnings.",
  "Un regard extrêmement jugeant.": "An extremely judgemental look.",
  "Un râteau de jardinage totalement superflu… mais très efficace.": "A completely unnecessary garden rake… but a very effective one.",
  "Un sirop psychoactif qui donne envie de travailler.": "A psychoactive syrup that makes you want to work.",
  "Un sirop épicé qui fait circuler le sang.": "A spicy syrup that gets the blood flowing.",
  "Un soupçon discret d'amour.": "A quiet hint of love.",
  "Un tableau compare l'ancienne et la nouvelle. « Keep Old » garde l'ancienne, « Replace » la remplace, et c'est": "A table compares the old one and the new one. “Keep Old” keeps the old one, “Replace” swaps it in, and that is",
  "Un éclair venu des cieux.": "A bolt of lightning from the heavens.",
  "Un équipement de jardinage totalement superflu.": "A completely unnecessary piece of gardening equipment.",
  "Un étrange Tadpole Bee sans ailes.": "A strange wingless Tadpole Bee.",
  "Une LED magique qui dégage l'aura de Beesmas.": "A magic LED that gives off the Beesmas aura.",
  "Une Mythic Meteor lui est tombée dessus. Plus jamais comme avant.": "A Mythic Meteor fell on him. Never the same again.",
  "Une Windy Bee a failli lui arracher la tête. Plus jamais comme avant.": "A Windy Bee nearly took his head off. Never the same again.",
  "Une abeille mutée a son numéro de niveau coloré, sur la case de ruche": "A mutated bee has its level number coloured in, on its hive cell",
  "Une abeille mutée devient parfois radioactive, et la radioactivité se propage aux cases voisines de la ruche. La Bitterberry passe alors à 1 sur 100 : c'est de très loin la meilleure méthode.": "A mutated bee sometimes becomes radioactive, and radioactivity spreads to the neighbouring hive cells. The Bitterberry then goes up to 1 in 100: by far the best method.",
  "Une armée à elle seule, en version tubercule.": "An army all by itself, in tuber form.",
  "Une bille qui ressemble un peu à la Terre.": "A marble that looks a bit like Earth.",
  "Une catégorie spéciale de stickers cachés,": "A special category of hidden stickers,",
  "Une citrouille sculptée pour un Honeyday rarement évoqué.": "A pumpkin carved for a rarely mentioned Honeyday.",
  "Une croche, en solfège.": "An eighth note, in music notation.",
  "Une de chaque type": "One of each type",
  "Une des toutes premières amulettes accessibles. Elle a 1 chance sur 7 de tomber en battant le King Beetle, et la Loot Luck n'y change rien. Elle n'a pas de paliers : sa qualité monte avec le nombre de victoires consécutives, jusqu'à 100. C'est aussi la seule amulette donnée directement, sans passer par un token.": "One of the very first amulets you can get. It has a 1 in 7 chance of dropping when you beat the King Beetle, and Loot Luck makes no difference. It has no tiers: its quality goes up with the number of consecutive wins, up to 100. It is also the only amulet given directly, without going through a token.",
  "Une feuille effilée comme un coucher de soleil.": "A leaf as tapered as a sunset.",
  "Une fioriture décorative éclatante.": "A bright decorative flourish.",
  "Une fioriture réservée aux plus grands.": "A flourish reserved for the greatest.",
  "Une fleur indigo, haute et anguleuse.": "An indigo flower, tall and angular.",
  "Une force destructrice de la nature.": "A destructive force of nature.",
  "Une forme géométrique que seuls les gens cool savent dessiner.": "A geometric shape only cool people know how to draw.",
  "Une mutation booste définitivement une statistique d'une abeille. Son numéro de niveau change alors de couleur, sur la case de ruche comme sur ses ailes — c'est cette couleur qui est reprise dans le": "A mutation permanently boosts one of a bee's stats. Its level number then changes colour, on its hive cell as well as on its wings — and that colour is the one used in the",
  "Une méthode de mesure du temps à peu près fiable.": "A roughly reliable way of measuring time.",
  "Une méthode omniprésente de représenter des données.": "An ever-present way of representing data.",
  "Une nymphe de phasme qui a évolué pour se camoufler en ours.": "A stick bug nymph that evolved to disguise itself as a bear.",
  "Une petite bille de verre striée d'orange et de rouge.": "A small glass marble streaked with orange and red.",
  "Une petite bille traversée d'une strie jaune.": "A small marble with a yellow streak running through it.",
  "Une petite créature qui vit sur les Sprouts.": "A small creature that lives on Sprouts.",
  "Une pièce maîtresse incroyable.": "An incredible centrepiece.",
  "Une ruche aux bords ondulés.": "A hive with wavy edges.",
  "Une ruche couronnée de pics de glace ascendants.": "A hive crowned with rising ice spikes.",
  "Une ruche ondulée entièrement gribouillée au crayon.": "A wavy hive scribbled all over in crayon.",
  "Une seule abeille, déjà entamée": "A single bee, already part-way there",
  "Une source d'umami incontournable en cuisine végane.": "A must-have source of umami in vegan cooking.",
  "Une structure venue d'un autre monde.": "A structure from another world.",
  "Une variante du proto-mème.": "A variant of the proto-meme.",
  "Une version recolorée de la ruche de tous les jours.": "A recoloured version of the everyday hive.",
  "Utiliser des Gumdrops sur un champ a 2 % de chances d'invoquer une Gummy Star — garantie au bout de 75 gumdrops sans apparition. Elle donne ×2 White Field Capacity et +10 % Goo Conversion pendant 45 s, et grossit à mesure que tu ramasses du goo (jusqu'à ×4 de goo bonus). À la fin elle éclate et disperse des Honey Tokens et des Gumdrops. Accorde ×1,25 White Field Capacity en permanent.": "Using Gumdrops on a field has a 2% chance of summoning a Gummy Star — guaranteed after 75 gumdrops with no spawn. It gives ×2 White Field Capacity and +10% Goo Conversion for 45 s, and grows as you collect goo (up to ×4 bonus goo). At the end it bursts and scatters Honey Tokens and Gumdrops. Grants a permanent ×1.25 White Field Capacity.",
  "Venue d'un village de Norvège.": "From a village in Norway.",
  "Version améliorée du Scooper, peinture bleu et jaune plus aérodynamique.": "Upgraded version of the Scooper, with more aerodynamic blue and yellow paint.",
  "Version améliorée du masque du Bubble Bee Man, bien plus puissante.": "Upgraded version of the Bubble Bee Man's mask, far more powerful.",
  "Version bleue de la ruche portative : bonus orientés pollen bleu.": "Blue version of the portable hive: bonuses geared towards blue pollen.",
  "Version rouge de la ruche portative : bonus orientés pollen rouge.": "Red version of the portable hive: bonuses geared towards red pollen.",
  "Version « gifted » de l'œuf argent : l'abeille éclose est directement Gifted.": "“Gifted” version of the silver egg: the bee that hatches is Gifted straight away.",
  "Version « gifted » de l'œuf diamant.": "“Gifted” version of the diamond egg.",
  "Version « gifted » de l'œuf mythique.": "“Gifted” version of the mythic egg.",
  "Version « gifted » de l'œuf or.": "“Gifted” version of the gold egg.",
  "Version élite de la protection bleue.": "Elite version of the blue guard.",
  "Version élite de la protection rouge.": "Elite version of the red guard.",
  "Vert : couvert par ce que tu possèdes": "Green: covered by what you own",
  "Vision rare : la Ninja Bee reste dans l'ombre.": "A rare sight: the Ninja Bee stays in the shadows.",
  "Wind Shrine, quêtes": "Wind Shrine, quests",
  "Zone de départ · Noob Shop · Ticket Tent": "Starting area · Noob Shop · Ticket Tent",
  "a la meilleure chance) et": "has the best chance) and",
  "atteignable. Le wiki ne documente que le seuil du niveau 20 et un exemple au niveau 21 (+5 % Bee Ability Rate) — le reste n'est pas connu publiquement.": "reachable. The wiki only documents the level 20 threshold and one example at level 21 (+5% Bee Ability Rate) — the rest is not publicly known.",
  "au départ, +8 par amélioration payée en tickets, jusqu'à": "to start with, +8 per upgrade paid in tickets, up to",
  "avant de disparaître. Le nombre présent en même temps dépend de ta ruche : 1 sticker à 0 abeille, jusqu'à": "before they disappear. How many are around at the same time depends on your hive: 1 sticker with 0 bees, up to",
  "capacité maximale atteinte": "maximum capacity reached",
  "collés sur ta ruche en même temps. Interdit sur le pad de spawn et sur la section des abeilles.": "stuck on your hive at the same time. Not allowed on the spawn pad or on the bee section.",
  "d'exemplaires équipés simultanément (1 à 3). Certains exigent en plus une mutation précise.": "of copies equipped at the same time (1 to 3). Some also require a specific mutation.",
  "dans le bloc": "in the block",
  "de chercher la mutation. Mutter une abeille de bas niveau, c'est se condamner à des petites valeurs — et il faudra retenter plus tard.": "before going for the mutation. Mutating a low-level bee means locking in small values — and you will have to try again later.",
  "de la qualité.": "on quality.",
  "de ruche, parfois une": "hive, sometimes a",
  "donne 10 bond et coûte 10 000 miel, soit 1 000 miel par bond — les bonus Puppy et Moon augmentent le bond gagné par Treat.": "gives 10 bond and costs 10,000 honey, i.e. 1,000 honey per bond — the Puppy and Moon bonuses increase the bond gained per Treat.",
  "définitivement et donne son": "permanently and gives its",
  "déjà accumulé": "already accumulated",
  "déséquipe automatiquement son beequip": "automatically unequips its beequip",
  "en haut du script.": "block, at the top of the script.",
  "espaces remplacés par des underscores": "spaces replaced by underscores",
  "est prête mais encore vide.": "is ready but still empty.",
  "et combien tu": "and how many you",
  "et le": "and the",
  "et pendant une quête active de la Sticker-Seeker Quest Machine. Ils sont plus faciles à repérer, peuvent être côte à côte, et ne donnent pas de récompense : ils font avancer la quête.": "and while a Sticker-Seeker Quest Machine quest is active. They are easier to spot, can sit side by side, and give no reward: they advance the quest.",
  "et reste": "and stays",
  "exige aussi une Demon Bee mutée.": "also requires a mutated Demon Bee.",
  "exige une mutation quelconque, la": "requires any mutation at all, the",
  "irréversible": "irreversible",
  "la 7ᵉ génération n'augmente pas la capacité": "the 7th generation does not increase capacity",
  "la même stat en moins bien": "the same stat but worse",
  "les autres bonus atteignent leur maximum": "the other bonuses reach their maximum",
  "monter l'abeille au niveau maximum avant": "level the bee up to the maximum before",
  "ne dépend pas": "does not depend",
  "niveau 21 ou plus": "level 21 or above",
  "ou la passer": "or make it",
  "ou un": "or a",
  "ou une rareté, et il a une": "or a rarity, and it has a",
  "pas de table publiée « probabilité par niveau »": "no published “probability per level” table",
  "pendant la période du signe correspondant": "during the period of the matching sign",
  "peut obtenir un +5 % Bee Ability Rate, alors que le plafond est +4 % en dessous.": "can get a +5% Bee Ability Rate, whereas the cap is +4% below that.",
  "plages de valeurs exactes et les probabilités de chaque statistique": "exact value ranges and the probabilities of each stat",
  "posé sur la ruche n'active pas": "placed on the hive does not activate",
  "pour les donner au Stack : c'est une protection volontaire contre les dons accidentels d'objets de grande valeur.": "to give them to the Stack: this is a deliberate safeguard against accidentally giving away high-value items.",
  "pour ouvrir sa fiche ; les prix seront ajoutés plus tard, chaque item indique pour l'instant où le trouver.": "to open its entry; prices will be added later, for now each item tells you where to find it.",
  "pour passer du niveau 20 au niveau 21": "to go from level 20 to level 21",
  "qu'une mutation peut atteindre. Les plages du tableau valent pour les abeilles de": "that a mutation can reach. The ranges in the table apply to bees of",
  "qu'une seule fois par joueur": "only once per player",
  "relance tous les points de cire déjà posés. C'est la seule vraie relance.": "resets every wax point already spent. It is the only true reroll.",
  "se met à jour toute seule.": "updates on its own.",
  "son boost — décoration et bonus sont deux choses distinctes.": "its boost — decoration and bonus are two separate things.",
  "source précise de chaque sticker": "exact source of each sticker",
  "stat sort quand une mutation se déclenche.": "stat rolls when a mutation triggers.",
  "stickers sur la ruche · le skin ne compte pas": "stickers on the hive · the skin does not count",
  "supprimés automatiquement au bout de 48 h": "deleted automatically after 48 h",
  "sur le niveau ou la limite — Lei, Single Mitten, Warm Scarf, Beesmas Tree Hat, Toy Horn, Paper Angel, Toy Drum, Electric Candle. Leurs pages wiki n'étaient pas lisibles automatiquement ; les autres valeurs sont vérifiées. Les plages chiffrées exactes de chaque statistique sont, elles aussi, générées par un module Lua non lisible : seules celles que le wiki écrit en texte sont reprises (Bubble Light, Pinecone, Snowglobe, Icicles).": "on the level or the limit — Lei, Single Mitten, Warm Scarf, Beesmas Tree Hat, Toy Horn, Paper Angel, Toy Drum, Electric Candle. Their wiki pages were not machine-readable; the other values are verified. The exact numeric ranges of each stat are also generated by an unreadable Lua module: only the ones the wiki writes out as text are included (Bubble Light, Pinecone, Snowglobe, Icicles).",
  "sur ses ailes — la couleur dépend de la stat mutée.": "on its wings — the colour depends on the mutated stat.",
  "sur une abeille mutée lui fait presque toujours perdre sa mutation, exactement comme le statut Gifted.": "on a mutated bee almost always makes it lose its mutation, exactly like Gifted status.",
  "une mutation d'Énergie, le": "an Energy mutation, the",
  "une mutation de Convert Amount. Le": "a Convert Amount mutation. The",
  "vers le niveau suivant. Un": "towards the next level. A",
  "visibles uniquement avec le Sticker-Seeker équipé": "only visible with the Sticker-Seeker equipped",
  "À côté de la Honey Bee, caché derrière un pin": "Next to the Honey Bee, hidden behind a pine tree",
  "À côté du Blueberry Dispenser dans le Blue HQ": "Next to the Blueberry Dispenser in the Blue HQ",
  "À côté du panneau d'information de l'Ant Challenge": "Next to the Ant Challenge information sign",
  "À droite du Robo Bear": "To the right of Robo Bear",
  "À droite du Royal Jelly Dispenser": "To the right of the Royal Jelly Dispenser",
  "À gauche du Robo Bear": "To the left of Robo Bear",
  "À gauche du Treat Shop": "To the left of the Treat Shop",
  "À gauche en sortant de la boutique de Dapper Bear": "On the left as you leave Dapper Bear's shop",
  "À l'avant du Blue HQ : entrer dans le tunnel à gauche, puis sauter à droite": "At the front of the Blue HQ: go into the tunnel on the left, then jump to the right",
  "À l'entrée du White Tunnel": "At the entrance of the White Tunnel",
  "À l'entrée du parkour du Diamond Mask": "At the entrance of the Diamond Mask parkour",
  "À l'intérieur de la planque du Commando Chick": "Inside the Commando Chick's hideout",
  "À l'intérieur du Mountain Top Shop, sur les murs": "Inside the Mountain Top Shop, on the walls",
  "À l'intérieur du Ticket Tent, murs gauche et droit": "Inside the Ticket Tent, left and right walls",
  "À la sortie du Ticket Tent, à gauche du Red Cannon": "On the way out of the Ticket Tent, to the left of the Red Cannon",
  "À savoir": "Worth knowing",
  "À utiliser pour activer x2 Bee Gather (une fois par compte).": "Use it to activate x2 Bee Gather (once per account).",
  "À utiliser pour activer x2 Convert Speed (une fois par compte).": "Use it to activate x2 Convert Speed (once per account).",
  "Ça a l'air pointu et piquant, mais c'est une illusion.": "It looks sharp and prickly, but that's an illusion.",
  "Ça coupe et ça claque.": "It cuts and it snaps.",
  "Ça tranche et ça brûle.": "It slices and it burns.",
  "Ça veut dire qu'il est temps d'arrêter.": "It means it's time to stop.",
  "Échangeable contre un Cub Buddy, si tu n'en as pas déjà un.": "Trade it in for a Cub Buddy, if you don't already have one.",
  "Échangeable contre un œuf de Bear Bee (une fois par compte).": "Trade it in for a Bear Bee egg (once per account).",
  "Électromagnétisme exagéré.": "Exaggerated electromagnetism.",
  "Élégance ovale dans chaque murmure vert.": "Oval elegance in every green whisper.",
  "Émotif, protecteur, lunatique, superstitieux.": "Emotional, protective, moody, superstitious.",
  "Épais, court et trapu.": "Thick, short and stocky.",
  "Épique": "Epic",
  "Équipement à poser sur une abeille. Stats aléatoires selon un potentiel de 0 à 5 ★, renforçables aux cires.": "Gear to place on a bee. Random stats based on a potential of 0 to 5 ★, which can be improved with waxes.",
  "Étude d'un tableau d'un maître hollandais de l'époque baroque.": "A study of a painting by a Dutch master of the Baroque period.",
  "Événement": "Event",
  "Événement Beesmas": "Beesmas event",
  "Événements": "Events",
  "Événements, codes": "Events, codes",
  "Événements, codes, Robux": "Events, codes, Robux",
  "Événements, quêtes de haut niveau": "Events, high-level quests",
  "×1,25 capacité et convert rate à la ruche, ×1,5 pollen rouge et bleu, ×1,3 bee gather et pollen d'outils, pendant 15 minutes.": "×1.25 capacity and convert rate at the hive, ×1.5 red and blue pollen, ×1.3 bee gather and tool pollen, for 15 minutes.",
  "Œuf d'événement : donne directement une Bear Bee.": "Event egg: gives a Bear Bee directly.",
  "Œuf d'événement : donne directement une Cobalt Bee.": "Event egg: gives a Cobalt Bee directly.",
  "Œuf d'événement : donne directement une Crimson Bee.": "Event egg: gives a Crimson Bee directly.",
  "Œuf d'événement : donne directement une Digital Bee.": "Event egg: gives a Digital Bee directly.",
  "Œuf d'événement : donne directement une Festive Bee.": "Event egg: gives a Festive Bee directly.",
  "Œuf d'événement : donne directement une Gummy Bee.": "Event egg: gives a Gummy Bee directly.",
  "Œuf d'événement : donne directement une Photon Bee.": "Event egg: gives a Photon Bee directly.",
  "Œuf d'événement : donne directement une Puppy Bee.": "Event egg: gives a Puppy Bee directly.",
  "Œuf d'événement : donne directement une Tabby Bee.": "Event egg: gives a Tabby Bee directly.",
  "Œuf d'événement : donne directement une Vicious Bee.": "Event egg: gives a Vicious Bee directly.",
  "Œuf d'événement : donne directement une Windy Bee.": "Event egg: gives a Windy Bee directly.",
  "Œuf en plastique : objet d'un ancien événement. Retiré du jeu.": "Plastic egg: item from an old event. Removed from the game.",
  "Œuf super rare : donne directement une Bubble Bee.": "Super rare egg: gives a Bubble Bee directly.",
  "Œuf super rare : donne directement une Bumble Bee.": "Super rare egg: gives a Bumble Bee directly.",
  "Œuf super rare : donne directement une Honey Bee.": "Super rare egg: gives a Honey Bee directly.",
  "Œuf super rare : donne directement une Music Bee.": "Super rare egg: gives a Music Bee directly.",
  "Œuf super rare : donne directement une Rascal Bee.": "Super rare egg: gives a Rascal Bee directly.",
  "Œuf super rare : donne une Carpenter Bee déjà Gifted.": "Super rare egg: gives an already Gifted Carpenter Bee.",
  "Œuf super rare : donne une Diamond Bee déjà Gifted.": "Super rare egg: gives an already Gifted Diamond Bee.",
  "Œuf super rare : donne une Exhausted Bee déjà Gifted.": "Super rare egg: gives an already Gifted Exhausted Bee.",
  "Œuf super rare : donne une Frosty Bee déjà Gifted.": "Super rare egg: gives an already Gifted Frosty Bee.",
  "œuf": "egg",
  "— dangereux si la mutation actuelle est rare.": "— risky if the current mutation is a rare one.",
  "— il refuse de commercer si tu ne portes pas les Beekeeper's Boots et un chapeau. Beesmas : uniquement pendant l'événement, sauf Icicles et Poinsettia.": "— he refuses to trade if you are not wearing the Beekeeper's Boots and a hat. Beesmas: during the event only, except Icicles and Poinsettia.",
  "— tout se règle dans le bloc": "— it's all set in the block",
  "— tu peux en empiler autant que tu veux.": "— you can stack as many as you like.",
  "⚖️ Trade équitable": "⚖️ Fair trade",
  "🧪 Calcul d'ingrédients": "🧪 Ingredient calculator",
  "\u0000ATTR\u0000Baby · Légendaire": "Baby · Legendary",
  "\u0000ATTR\u0000Bear · Événement": "Bear · Event",
  "\u0000ATTR\u0000Bubble · Épique": "Bubble · Epic",
  "\u0000ATTR\u0000Bucko · Épique": "Bucko · Epic",
  "\u0000ATTR\u0000Carpenter · Légendaire": "Carpenter · Legendary",
  "\u0000ATTR\u0000Cobalt · Événement": "Cobalt · Event",
  "\u0000ATTR\u0000Commander · Épique": "Commander · Epic",
  "\u0000ATTR\u0000Crimson · Événement": "Crimson · Event",
  "\u0000ATTR\u0000Demo · Épique": "Demo · Epic",
  "\u0000ATTR\u0000Demon · Légendaire": "Demon · Legendary",
  "\u0000ATTR\u0000Diamond · Légendaire": "Diamond · Legendary",
  "\u0000ATTR\u0000Digital · Événement": "Digital · Event",
  "\u0000ATTR\u0000Exhausted · Épique": "Exhausted · Epic",
  "\u0000ATTR\u0000Festive · Événement": "Festive · Event",
  "\u0000ATTR\u0000Fire · Épique": "Fire · Epic",
  "\u0000ATTR\u0000Frosty · Épique": "Frosty · Epic",
  "\u0000ATTR\u0000Gummy · Événement": "Gummy · Event",
  "\u0000ATTR\u0000Honey · Épique": "Honey · Epic",
  "\u0000ATTR\u0000Les abeilles placées seront gifted": "Bees placed will be gifted",
  "\u0000ATTR\u0000Lion · Légendaire": "Lion · Legendary",
  "\u0000ATTR\u0000Music · Légendaire": "Music · Legendary",
  "\u0000ATTR\u0000Ninja · Légendaire": "Ninja · Legendary",
  "\u0000ATTR\u0000Photon · Événement": "Photon · Event",
  "\u0000ATTR\u0000Puppy · Événement": "Puppy · Event",
  "\u0000ATTR\u0000Quantité": "Quantity",
  "\u0000ATTR\u0000Rage · Épique": "Rage · Epic",
  "\u0000ATTR\u0000Riley · Épique": "Riley · Epic",
  "\u0000ATTR\u0000Shocked · Épique": "Shocked · Epic",
  "\u0000ATTR\u0000Shy · Légendaire": "Shy · Legendary",
  "\u0000ATTR\u0000Tabby · Événement": "Tabby · Event",
  "\u0000ATTR\u0000Vicious · Événement": "Vicious · Event",
  "\u0000ATTR\u0000Windy · Événement": "Windy · Event",
  ", au format": ", in",
  "1 fois par compte": "once per account",
  ": la colonne": ": the column",
  ": recharge une sauvegarde": ": loads a save file back in",
  "\u0000ATTR\u0000Rechercher un item…": "Search for an item…",
  "\u0000ATTR\u0000Rechercher un sticker…": "Search for a sticker…",
  "\u0000ATTR\u0000Rechercher un beequip…": "Search for a beequip…",
  "\u0000ATTR\u0000Rechercher une abeille…": "Search for a bee…",
  "Abeilles": "Bees",
  "Aucun palier": "No tiers",
  "Beequip Shop de Dapper Bear": "Dapper Bear's Beequip Shop",
  "Beequip d'attaque pour ruche rouge.": "Attack beequip for a red hive.",
  "Bip et boup.": "Beep and boop.",
  "Bitterberry sur abeille radioactive": "Bitterberry on a radioactive bee",
  "Bonus de ruche cumulables": "Hive bonuses stack",
  "Bottes et sabots.": "Boots and clogs.",
  "Ceintures et sacoches.": "Belts and pouches.",
  "Certainement pas dorique.": "Definitely not Doric.",
  "Choisir une abeille": "Pick a bee",
  "Classe et anguleux.": "Sharp and angular.",
  "Comment obtenir une mutation": "How to get a mutation",
  "Couleur du niveau": "Level colour",
  "Cub Skins et Hive Skins": "Cub Skins and Hive Skins",
  "Devant le Nectar Pot": "In front of the Nectar Pot",
  "Devant le Robo Pass Dispenser": "In front of the Robo Pass Dispenser",
  "Engrenage : monnaie du Robo Bear Challenge.": "Cog: currency of the Robo Bear Challenge.",
  "Explore le site": "Explore the site",
  "Field, Smooth et Loaded Dice.": "Field, Smooth and Loaded Dice.",
  "Friandises et fruits.": "Treats and fruit.",
  "Haricot festif : version Beesmas du haricot magique.": "Festive bean: the Beesmas version of the magic bean.",
  "Huit beequips gardent un": "Eight beequips keep a",
  "Il faut": "You need",
  "Images dans": "Images in",
  "Items du jeu": "Game items",
  "Jaune": "Yellow",
  "L'arroseur ultime du jeu.": "The ultimate sprinkler in the game.",
  "Le M veut dire « Most useful bee ».": "The M stands for “Most useful bee”.",
  "Le sceau d'approbation standard.": "The standard seal of approval.",
  "Les": "The",
  "Les 11 mutations possibles": "The 11 possible mutations",
  "Les cires": "The waxes",
  "Les quatre ballons.": "The four balloons.",
  "Leur offre": "Their offer",
  "Liste de courses": "Shopping list",
  "Manque": "Missing",
  "Mur droit du Pro Shop": "Right-hand wall of the Pro Shop",
  "Mur gauche du Pineapple Patch": "Left-hand wall of the Pineapple Patch",
  "Mutations d'abeilles": "Bee mutations",
  "Mutter une abeille": "Mutating a bee",
  "Niveau": "Level",
  "Niveau / limite": "Level / limit",
  "Niveau actuel": "Current level",
  "Niveau d'abeilles": "Bee levelling",
  "Non-Event : planteurs (le": "Non-Event: planters (the",
  "Oui (+20% bond)": "Yes (+20% bond)",
  "Palier": "Tier",
  "Paliers": "Tiers",
  "Parcourir les items": "Browse the items",
  "Passe robot : lance le Robo Bear Challenge.": "Robo pass: starts the Robo Bear Challenge.",
  "Peint un dimanche matin.": "Painted on a Sunday morning.",
  "Planteur hydroponique : gros rendement, temps de pousse long.": "Hydroponic planter: big output, long growing time.",
  "Protection bleue : pollen et attaque bleus.": "Blue guard: blue pollen and attack.",
  "Protection rouge : pollen et attaque rouges.": "Red guard: red pollen and attack.",
  "Protections de droite.": "Right-hand guards.",
  "Protections de gauche.": "Left-hand guards.",
  "Sacoche de ceinture.": "Belt pouch.",
  "Sticker Book, Stack et Inbox": "Sticker Book, Stack and Inbox",
  "Sticker Stack = bonus permanents": "Sticker Stack = permanent bonuses",
  "Ticket, Brick et Cog.": "Ticket, Brick and Cog.",
  "Ton offre": "Your offer",
  "Tous": "All",
  "Tout normal": "All normal",
  "Tout vider": "Clear everything",
  "Trade entre joueurs": "Player trading",
  "Tu as": "You have",
  "Un petit heureux hasard.": "A small happy accident.",
  "Une fioriture pompeuse.": "A pompous flourish.",
  "Une fondation solide.": "A solid foundation.",
  "Une rondeur anormale.": "An abnormal roundness.",
  "Une vivace toute simple.": "A plain and simple perennial.",
  "Utiliser une": "Using a",
  "Vibrante et fonctionnelle.": "Vibrant and functional.",
  "Vide": "Empty",
  "Vider cette case": "Clear this cell",
  "Voir →": "View →",
  "au total.": "in total.",
  "chaque jour": "every day",
  "couleur": "colour",
  "d'abeille, parfois une": "bee, sometimes a",
  "et perdre l'ancienne": "and lose the old one",
  "l'abeille choisie": "the chosen bee",
  "liste d'abeilles": "list of bees",
  "niveau": "level",
  "niveau 20 ou moins": "level 20 or below",
  "niveau minimum": "minimum level",
  "par 1": "by 1",
  "par 1 %": "by 1%",
  "ruche": "hive",
  "— hub fan pour Bee Swarm Simulator.": "— a fan hub for Bee Swarm Simulator.",
  "↻ Remplacer par": "↻ Replace with",
  "✨ Tout gifted": "✨ All gifted",
  "🌙 Moon Amulet (bond)": "🌙 Moon Amulet (bond)",
  "🐝 Abeilles": "🐝 Bees",
  "🐝 Niveau d'abeilles": "🐝 Bee levelling",
  "🛠️ Ouvrir les outils": "🛠️ Open the tools",
  "RUCHE&": "HIVE&",
  "OUTILS": "TOOLS",
  "Ruche & Outils": "Hive & Tools",
  "Ruche & Outils — Hub Bee Swarm Simulator": "Hive & Tools — Bee Swarm Simulator Hub",
  "Hub fan · Bee Swarm Simulator": "Fan hub · Bee Swarm Simulator",
  "\u0000ATTR\u0000Changer de langue / Switch language": "Switch language / Changer de langue",
  "\u0000ATTR\u0000Fil d'Ariane": "Breadcrumb",
  "Accueil": "Home",
  "Amulettes": "Amulets",
  "Map infos": "Map info",
  "Outils": "Tools",
  "Beequips": "Beequips",
  "Trier": "Sort",
  "A → Z": "A → Z",
  "Z → A": "Z → A",
  "Valeur ↓": "Value ↓",
  "Valeur ↑": "Value ↑",
  "Valeur": "Value",
  "Obtention": "How to get it",
  "Ouvrir →": "Open →",
  "Toutes": "All",
  "Masque": "Mask",
  "Bottes": "Boots",
  "Accessoire": "Accessory",
  "Œufs": "Eggs",
  "Fabrication": "Crafting",
  "Divers": "Miscellaneous",
  "Monnaie": "Currency",
  "Inobtenable": "Unobtainable",
  "Autre": "Other",
  "Zone": "Area",
  "Flore": "Flora",
  "FORMAT DES IMAGES": "IMAGE FORMAT",
  "espaces": "spaces",
  ", « Box-O-Frogs » →": ", “Box-O-Frogs” →",
  ", « Beekeeper's Boots » →": ", “Beekeeper's Boots” →",
  "Parachute, hive slot, amulettes, beequips, stickers.": "Parachute, hive slot, amulets, beequips, stickers.",
  "+1% Capacité": "+1% Capacity",
  "+2% Capacité": "+2% Capacity",
  "+3% Capacité": "+3% Capacity",
  "+10 000 Capacité": "+10,000 Capacity",
  "+15 000 Capacité": "+15,000 Capacity",
  "+20 000 Capacité": "+20,000 Capacity",
  "+19% Cactus Field Capacity (affiché 10% en jeu)": "+19% Cactus Field Capacity (shown as 10% in game)",
  "+19% Coconut Field Capacity (affiché 10% en jeu)": "+19% Coconut Field Capacity (shown as 10% in game)",
  "+19% Mountain Top Field Capacity (affiché 10% en jeu)": "+19% Mountain Top Field Capacity (shown as 10% in game)",
  "+19% Pumpkin Patch Capacity (affiché 10% en jeu)": "+19% Pumpkin Patch Capacity (shown as 10% in game)",
  "Aventurier, optimiste, direct, superstitieux.": "Adventurous, optimistic, direct, superstitious.",
  "Bavard, curieux, intelligent, superstitieux.": "Talkative, curious, clever, superstitious.",
  "Elle dort, promis.": "She's asleep, promise.",
  "Nom scientifique : Taraxacum.": "Scientific name: Taraxacum.",
  "Possiblement radioactif.": "Possibly radioactive.",
  "Salutation en anglais.": "A greeting, in English.",
  "Scintillement turquoise.": "A turquoise shimmer.",
  "Pour ta contribution positive aux discussions BSS.": "For your positive contribution to BSS discussions.",
  "Pour ta fidélité de spectateur.": "For your loyalty as a viewer.",
  "Blue HQ (fabrication)": "Blue HQ (crafting)",
  "Red HQ (fabrication)": "Red HQ (crafting)",
  "Coconut Cave (fabrication)": "Coconut Cave (crafting)",
  "Diamond Room (fabrication)": "Diamond Room (crafting)",
  "Gummy Bear (fabrication)": "Gummy Bear (crafting)",
  "Gummy Bear's Lair (fabrication)": "Gummy Bear's Lair (crafting)",
  "Distributeur Blue HQ": "Blue HQ dispenser",
  "Boutique": "Shop",
  "Gummy Bear, planteurs, mobs": "Gummy Bear, planters, mobs",
  "Inobtenable aujourd'hui": "Unobtainable today",
  "Murs cachés, Sticker Printer, quêtes": "Hidden walls, Sticker Printer, quests",
  "Défis et générateurs": "Challenges and generators",
  "L'achat de Glitched Drives": "Buying Glitched Drives",
  "Petal Planter (drop très rare)": "Petal Planter (very rare drop)",
  "Petal Planter (drop très rare) — la seule voie réaliste": "Petal Planter (very rare drop) — the only realistic route",
  "Petal Planter · planteurs rouges": "Petal Planter · red planters",
  "Planteurs (Dandelion Field) · Beequip Shop de Dapper Bear": "Planters (Dandelion Field) · Dapper Bear's Beequip Shop",
  "Planteurs (très rare)": "Planters (very rare)",
  "Planteurs · Beequip Shop de Dapper Bear": "Planters · Dapper Bear's Beequip Shop",
  "Planteurs, Dapper Bear": "Planters, Dapper Bear",
  "Drop du Rogue Vicious Bee — 1er beequip Beesmas obtenable hors événement": "Drops from the Rogue Vicious Bee — the first Beesmas beequip obtainable outside the event",
  "Drop très rare du Red Clay Planter et du Heat-Treated Planter · Beequip Shop de Dapper Bear": "Very rare drop from the Red Clay Planter and the Heat-Treated Planter · Dapper Bear's Beequip Shop",
  "Catalogue de Bee Bear pendant Beesmas (bundles Royal Winter, Royal Blue, Snow Queen)": "Bee Bear's catalogue during Beesmas (Royal Winter, Royal Blue, Snow Queen bundles)",
  "Stockings de Beesmas (machine des ours)": "Beesmas Stockings (bear machine)",
  "Stockings de Beesmas · scorpions · cadeau à Dapper Bear (Beesmas 2021)": "Beesmas Stockings · scorpions · gift to Dapper Bear (Beesmas 2021)",
  "Toujours obtenable hors Beesmas (2ᵉ cas après les Icicles)": "Still obtainable outside Beesmas (the 2nd case, after the Icicles)",
  "Événement Beesmas — plus obtenable autrement que par trade": "Beesmas event — no longer obtainable except by trading",
  "Abeilles avec une mutation Convert Amount": "Bees with a Convert Amount mutation",
  "Abeilles avec une mutation d'Énergie": "Bees with an Energy mutation",
  "Abeilles bleues uniquement": "Blue bees only",
  "Abeilles rouges uniquement": "Red bees only",
  "Abeilles connaissant l'ability Blue Bomb": "Bees that know the Blue Bomb ability",
  "Abeilles connaissant l'ability Bomb": "Bees that know the Bomb ability",
  "Abeilles connaissant l'ability Boost": "Bees that know the Boost ability",
  "Communes et Rares uniquement": "Common and Rare only",
  "Communes, Rares et Épiques uniquement": "Common, Rare and Epic only",
  "Rares et Épiques uniquement": "Rare and Epic only",
  "Légendaires uniquement": "Legendary only",
  "Mythique": "Mythic",
  "Demon Bee uniquement, et elle doit avoir une mutation": "Demon Bee only, and it must have a mutation",
  "L'abeille doit avoir une mutation, n'importe laquelle": "The bee must have a mutation, any of them",
  "Niveau 5 minimum": "Level 5 minimum",
  "Niveau 8 minimum": "Level 8 minimum",
  "Niveau 11 minimum": "Level 11 minimum",
  "Niveau 13 minimum": "Level 13 minimum",
  "1 (gauche)": "1 (left)",
  "1 (droite)": "1 (right)",
  "1 B miel": "1 B honey",
  "10 B miel": "10 B honey",
  "25 M miel": "25 M honey",
  "50 M miel": "50 M honey",
  "250 M miel": "250 M honey",
  "4 paliers": "4 tiers",
  "5 paliers": "5 tiers",
  "Sans palier": "No tier",
  "Aucune": "None",
  "Au moins 1 M": "At least 1 M",
  "Au moins 8 M": "At least 8 M",
  "Au moins 20 M": "At least 20 M",
  "Au moins 50 M": "At least 50 M",
  "Au moins 1 Stump Snail vaincu": "At least 1 Stump Snail defeated",
  "Au moins 5 Stump Snail vaincus": "At least 5 Stump Snails defeated",
  "Au moins 7 Stump Snail vaincus": "At least 7 Stump Snails defeated",
  "Au moins 15 Stump Snail vaincus": "At least 15 Stump Snails defeated",
  "Score au Ant Challenge": "Ant Challenge score",
  "Niveau du Stick Bug": "Stick Bug level",
  "Victoires consécutives": "Consecutive wins",
  "Progression du Moon Amulet": "Moon Amulet progress",
  "250 quêtes de Bucko Bee terminées": "250 Bucko Bee quests completed",
  "250 quêtes de Riley Bee terminées": "250 Riley Bee quests completed",
  "2 % · par 1, 5 ou 10": "2% · by 1, 5 or 10",
  "par 1 ou 5": "by 1 or 5",
  "par 1 ou 50": "by 1 or 50",
  "par 1, 5 ou 10": "by 1, 5 or 10",
  "5 minutes · 4 min 15 s avec une Gifted Vicious Bee": "5 minutes · 4 min 15 s with a Gifted Vicious Bee",
  "75, augmenté par le Honey From Tokens": "75, increased by Honey From Tokens",
  "à compléter": "to be completed",
  "à vérifier": "to be checked",
  "les 291 stickers": "all 291 stickers",
  "les 41 beequips": "all 41 beequips",
  "les 7 amulettes": "all 7 amulets",
  "Le parcours ruche blanche.": "The white hive route.",
  "Le parcours ruche bleue.": "The blue hive route.",
  "Le parcours ruche rouge.": "The red hive route.",
  "Valeur estimée": "Estimated value",
  "Prix en miel": "Price in honey",
  "Niveau minimum de l'abeille": "Minimum bee level",
  "Limite dans la ruche": "Limit in the hive",
  "Couleur de ruche": "Hive colour",
  "Abeilles autorisées": "Allowed bees",
  "Bonus sur l'abeille": "Bonus on the bee",
  "Bonus de ruche": "Hive bonus",
  "Effet": "Effect",
  "Condition": "Requirement",
  "Rareté": "Rarity",
  "Gratuit": "Free",
  "Aucune description pour le moment. Ajoute-la dans le bloc DONNÉES du fichier index.html.": "No description yet. Add it in the DONNÉES block of index.html.",
  "Rien à afficher pour le moment.": "Nothing to show for now.",
  "la page": "the page",
  "Miel": "Honey",
  "Commun": "Common",
  "Bronze": "Bronze",
  "Argent": "Silver",
  "Or": "Gold",
  "Diamant": "Diamond",
  "La": "The",
  "valeur maximale": "maximum value",
  "Ours": "Bears",
  "et": "and",
  "Plage (niv. ≤ 20)": "Range (lvl ≤ 20)",
  "Rouge": "Red",
  "Bleu": "Blue",
  "Orange": "Orange",
  "Vert": "Green",
  "Vert clair": "Light green",
  "Marron": "Brown",
  "Violet": "Purple",
  "Blanc": "White",
  "Incolore": "Colourless",
  "Plage": "Range",
  "Manche atteinte": "Wave reached",
  "Remarque": "Note",
};
