/* ============================================================
   ACCÈS AU SITE — liste des comptes autorisés
   ============================================================

   Comment ajouter quelqu'un :
   1. Ouvre generateur-mot-de-passe.html dans ton navigateur
   2. Tape le pseudo et le mot de passe, clique sur Générer
   3. Copie la ligne produite et colle-la dans la liste ci-dessous
   4. Envoie le fichier sur GitHub

   Pour retirer quelqu'un : supprime sa ligne, ou mets actif:false.
   Le pseudo n'est pas sensible à la casse ni aux espaces autour.

   ⚠️ IMPORTANT — ce que ce système fait vraiment
   Le site est entièrement public : tout ce qui est envoyé au navigateur
   peut être lu par n'importe qui, y compris ce fichier. Les mots de passe
   sont stockés sous forme d'empreintes (SHA-256 + grain de sel), donc on
   ne peut pas les relire directement, mais quelqu'un de motivé peut
   contourner la page de connexion en lisant le code source.
   C'est une barrière contre le partage désinvolte, pas une vraie sécurité.
   Ne mets jamais ici un mot de passe que tes membres utilisent ailleurs.
   ============================================================ */

/* Change ce grain de sel une bonne fois pour toutes, avant de générer tes
   comptes. Il rend les empreintes propres à ton site. Si tu le modifies
   plus tard, il faudra régénérer TOUS les comptes. */
const SEL = "FauFau-2026";

const COMPTES = [{ u: "faufau", h: "762f11bd4205f49399e686690cdf3f11a93a093eb2417cb87227d7d3615a0f1c", actif: true },{ u: "smiless", h: "b2bfd21da48c4f09c2d522a2ed1437e10c30f0222d2805c8849333e38808a724", actif: true },{ u: "g6027", h: "0e841dc9d8ddaafc50bff89f37c4e30e3a20dfc0281a0a90af8a6996de5cdb30", actif: true },

];
