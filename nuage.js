/* ============================================================
   NUAGE.JS — comptes et sauvegarde en ligne
   ------------------------------------------------------------
   Tout passe par un objet unique : window.Nuage
   Le site reste 100 % statique : c'est le navigateur qui parle
   directement à Supabase, il n'y a aucun serveur à toi.

   ─── AJOUTER UNE NOUVELLE DONNÉE À SAUVEGARDER ───────────────
   Une seule chose à écrire, n'importe où après le chargement :

     Nuage.emplacement({
       cle: "favoris",                     // identifiant libre
       lire:   () => mesFavoris,           // -> ce qu'on sauvegarde
       ecrire: (v) => { mesFavoris = v; renderFavoris(); }
     });

   C'est tout. Pas de table à créer, pas de colonne à ajouter :
   la base stocke du JSON libre, une ligne par (personne, clé).
   La sauvegarde est ensuite automatique.
   ============================================================ */

window.Nuage = (function(){
  "use strict";

  var client = null;          // le client Supabase
  var session = null;         // la session en cours (null = déconnecté)
  var emplacements = new Map();
  var ecouteurs = [];         // callbacks d'état pour l'interface
  var minuteur = null;
  var enCours = false;

  var DELAI = 2500;           // on regarde toutes les 2,5 s s'il y a du neuf
  var TAILLE_MAX = 400 * 1024; // garde-fou : 400 Ko par emplacement

  /* ---------- disponibilité ---------- */

  function configure(){
    return typeof NUAGE_CONFIG !== "undefined"
        && NUAGE_CONFIG.url && NUAGE_CONFIG.cle
        && NUAGE_CONFIG.url.indexOf("A-REMPLIR") === -1
        && NUAGE_CONFIG.cle.indexOf("A-REMPLIR") === -1;
  }
  function bibliothequePresente(){
    return typeof supabase !== "undefined" && typeof supabase.createClient === "function";
  }
  function disponible(){ return configure() && bibliothequePresente(); }

  /* ---------- état affiché dans l'interface ---------- */

  function surEtat(fn){ ecouteurs.push(fn); }
  function etat(nom, detail){
    ecouteurs.forEach(function(fn){ try{ fn(nom, detail); }catch(e){} });
  }

  /* ---------- démarrage ---------- */

  async function demarrer(){
    if(!disponible()) return null;
    client = supabase.createClient(NUAGE_CONFIG.url, NUAGE_CONFIG.cle, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    var res = await client.auth.getSession();
    session = (res.data && res.data.session) || null;

    client.auth.onAuthStateChange(function(evt, s){
      session = s || null;
      if(!session) arreterBoucle();
    });
    return session;
  }

  /* ---------- comptes ---------- */

  async function inscription(email, motDePasse, pseudo){
    exigeClient();
    var r = await client.auth.signUp({
      email: email,
      password: motDePasse,
      options: { data: { pseudo: pseudo || "" } }
    });
    if(r.error) throw new Error(messageFr(r.error));
    session = r.data.session || null;
    /* session null = Supabase attend une confirmation par e-mail */
    return { session: session, confirmationRequise: !session };
  }

  async function connexion(email, motDePasse){
    exigeClient();
    var r = await client.auth.signInWithPassword({ email: email, password: motDePasse });
    if(r.error) throw new Error(messageFr(r.error));
    session = r.data.session;
    return session;
  }

  async function connexionDiscord(){
    exigeClient();
    var r = await client.auth.signInWithOAuth({
      provider: "discord",
      options: { redirectTo: location.href.split("#")[0] }
    });
    if(r.error) throw new Error(messageFr(r.error));
  }

  async function motDePasseOublie(email){
    exigeClient();
    var r = await client.auth.resetPasswordForEmail(email, {
      redirectTo: location.href.split("#")[0]
    });
    if(r.error) throw new Error(messageFr(r.error));
  }

  async function deconnexion(){
    if(!client) return;
    await sauverMaintenant();      // on n'abandonne pas le travail en cours
    arreterBoucle();
    await client.auth.signOut();
    session = null;
    emplacements.forEach(function(e){ e.dernier = undefined; });
  }

  function connecte(){ return !!session; }

  function utilisateur(){
    if(!session) return null;
    var u = session.user;
    var meta = u.user_metadata || {};
    return {
      id: u.id,
      email: u.email || "",
      pseudo: meta.pseudo || meta.full_name || meta.name
            || (u.email ? u.email.split("@")[0] : "Membre")
    };
  }

  function exigeClient(){
    if(!client) throw new Error("La connexion au serveur n'est pas configurée (voir nuage-config.js).");
  }

  /* ---------- emplacements de sauvegarde ---------- */

  function emplacement(def){
    if(!def || !def.cle || typeof def.lire !== "function" || typeof def.ecrire !== "function"){
      console.warn("Nuage.emplacement : il faut { cle, lire, ecrire }.");
      return;
    }
    emplacements.set(def.cle, { lire: def.lire, ecrire: def.ecrire, dernier: undefined });
  }

  /* Lit tout ce qui est en base et le réinjecte dans la page. */
  async function toutCharger(){
    if(!client || !session) return;
    etat("chargement");
    var r = await client.from("sauvegardes").select("cle,valeur");
    if(r.error){ etat("erreur", messageFr(r.error)); throw new Error(messageFr(r.error)); }

    (r.data || []).forEach(function(ligne){
      var e = emplacements.get(ligne.cle);
      if(!e) return;                       // donnée d'une version future : on n'y touche pas
      try{ e.ecrire(ligne.valeur); }
      catch(err){ console.warn('Nuage : impossible de restaurer "' + ligne.cle + '"', err); }
    });

    /* On mémorise l'état obtenu : tant que rien ne bouge, on n'écrit rien. */
    emplacements.forEach(function(e){
      try{ e.dernier = JSON.stringify(e.lire()); }catch(err){ e.dernier = undefined; }
    });
    etat("ok");
  }

  /* Compare chaque emplacement à sa dernière version enregistrée. */
  function aEnvoyer(){
    var lignes = [];
    emplacements.forEach(function(e, cle){
      var valeur;
      try{ valeur = e.lire(); }catch(err){ return; }
      var texte;
      try{ texte = JSON.stringify(valeur); }catch(err){ return; }
      if(texte === e.dernier) return;
      if(texte.length > TAILLE_MAX){
        console.warn('Nuage : "' + cle + '" dépasse ' + Math.round(TAILLE_MAX/1024) + ' Ko, non sauvegardé.');
        return;
      }
      e.enAttente = texte;
      lignes.push({ utilisateur: session.user.id, cle: cle, valeur: valeur });
    });
    return lignes;
  }

  async function sauverMaintenant(){
    if(!client || !session || enCours) return;
    var lignes = aEnvoyer();
    if(!lignes.length) return;
    enCours = true;
    etat("sauvegarde");
    var r = await client.from("sauvegardes")
                        .upsert(lignes, { onConflict: "utilisateur,cle" });
    enCours = false;
    if(r.error){ etat("erreur", messageFr(r.error)); return; }
    lignes.forEach(function(l){
      var e = emplacements.get(l.cle);
      if(e) e.dernier = e.enAttente;
    });
    etat("ok");
  }

  function demarrerBoucle(){
    arreterBoucle();
    minuteur = setInterval(function(){ sauverMaintenant(); }, DELAI);
    document.addEventListener("visibilitychange", surMasquage);
    window.addEventListener("pagehide", surMasquage);
  }
  function arreterBoucle(){
    if(minuteur){ clearInterval(minuteur); minuteur = null; }
    document.removeEventListener("visibilitychange", surMasquage);
    window.removeEventListener("pagehide", surMasquage);
  }
  function surMasquage(ev){
    if((ev && ev.type === "pagehide") || document.visibilityState === "hidden") sauverMaintenant();
  }

  /* Efface toutes les données du compte (bouton « repartir de zéro »). */
  async function toutEffacer(){
    if(!client || !session) return;
    var r = await client.from("sauvegardes").delete().eq("utilisateur", session.user.id);
    if(r.error) throw new Error(messageFr(r.error));
    emplacements.forEach(function(e){ e.dernier = undefined; });
  }

  /* ---------- messages d'erreur en français ---------- */

  function messageFr(err){
    var m = (err && (err.message || err.error_description)) || "Erreur inconnue.";
    var b = m.toLowerCase();
    if(b.indexOf("invalid login credentials") > -1) return "E-mail ou mot de passe incorrect.";
    if(b.indexOf("email not confirmed") > -1)       return "Ton e-mail n'est pas encore confirmé : regarde ta boîte de réception.";
    if(b.indexOf("user already registered") > -1
    || b.indexOf("already been registered") > -1)   return "Un compte existe déjà avec cet e-mail.";
    if(b.indexOf("password should be at least") > -1) return "Mot de passe trop court (6 caractères minimum).";
    if(b.indexOf("unable to validate email") > -1
    || b.indexOf("invalid email") > -1)             return "Cette adresse e-mail n'est pas valide.";
    if(b.indexOf("email rate limit") > -1
    || b.indexOf("too many requests") > -1)         return "Trop d'essais d'un coup. Attends une minute.";
    if(b.indexOf("failed to fetch") > -1
    || b.indexOf("networkerror") > -1)              return "Serveur injoignable. Vérifie ta connexion.";
    if(b.indexOf("row-level security") > -1)        return "Accès refusé par la base. Le fichier supabase-setup.sql a-t-il bien été exécuté ?";
    return m;
  }

  /* ---------- ce que le reste du site peut utiliser ---------- */

  return {
    disponible: disponible,
    configure: configure,
    demarrer: demarrer,
    inscription: inscription,
    connexion: connexion,
    connexionDiscord: connexionDiscord,
    motDePasseOublie: motDePasseOublie,
    deconnexion: deconnexion,
    connecte: connecte,
    utilisateur: utilisateur,
    emplacement: emplacement,
    toutCharger: toutCharger,
    sauverMaintenant: sauverMaintenant,
    demarrerBoucle: demarrerBoucle,
    arreterBoucle: arreterBoucle,
    toutEffacer: toutEffacer,
    surEtat: surEtat
  };
})();
