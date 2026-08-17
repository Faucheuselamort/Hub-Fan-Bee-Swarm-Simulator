/* ============================================================
   NUAGE-CONFIG.JS
   ------------------------------------------------------------
   Une seule ligne à modifier : celle de la clé.
   Remplace uniquement ce qui est ENTRE LES GUILLEMETS.

   Règles à respecter, sinon tout le fichier est ignoré :
     • garder les guillemets droits  "  et pas les typographiques « ” »
     • garder la virgule à la fin de chaque ligne
     • la clé tient sur UNE seule ligne, sans espace ni retour à la ligne
     • ne rien coller après la dernière accolode  };

   Où trouver la clé : bouton vert « Connect » du tableau de bord,
   ou ⚙️ Settings ▸ API Keys ▸ section « Publishable key ».
   ============================================================ */

window.NUAGE_CONFIG = {
  url: "https://tbgiuzatulactsvwjljq.supabase.co",
  cle: "sb_publishable_KBpi0vvtFs0ARrWsco4wvw_xTdA90Bf",
  discord: true,
};

/* ------------------------------------------------------------
   Vérification automatique : si le fichier est mal formé, ce
   message n'apparaîtra jamais dans la console — ce qui est déjà
   une information utile.
   ------------------------------------------------------------ */
console.log(
  "%cnuage-config.js lu correctement",
  "color:#8FE86B;font-weight:bold",
  "\n  url :", window.NUAGE_CONFIG.url,
  "\n  clé :", window.NUAGE_CONFIG.cle === "COLLE_LA_CLE_ICI"
             ? "⚠️ pas encore collée"
             : window.NUAGE_CONFIG.cle.slice(0, 20) + "…"
);
