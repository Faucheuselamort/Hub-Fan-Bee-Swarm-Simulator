/* ============================================================
   NUAGE-CONFIG.JS — les 2 seules valeurs à remplir
   ------------------------------------------------------------
   Tu les trouves dans Supabase :
     Project Settings  ▸  API
       • Project URL      -> url
       • anon public key  -> cle
   ------------------------------------------------------------
   ⚠️  Ces deux valeurs sont PUBLIQUES, c'est normal et voulu.
   Elles sont visibles par tout le monde dans le code du site.
   Ce qui protège les données, ce n'est pas le secret de la clé,
   c'est la « Row Level Security » activée par le fichier
   supabase-setup.sql : chaque personne ne peut lire et écrire
   que ses propres lignes, même en trafiquant la console.

   Ne mets JAMAIS ici la clé « service_role » de Supabase :
   celle-là ignore toutes les règles de sécurité.
   ============================================================ */

window.NUAGE_CONFIG = {

  url: "A-REMPLIR",   // ex. "https://abcdefghijklm.supabase.co"
  cle: "A-REMPLIR",   // la longue clé « anon public »

  /* Passe à true seulement APRÈS avoir activé Discord dans
     Supabase ▸ Authentication ▸ Providers. Sinon le bouton
     s'affiche mais renvoie une erreur. */
  discord: false,

};
