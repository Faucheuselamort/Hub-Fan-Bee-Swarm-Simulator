-- ============================================================
--  Base de données du bot « Hive & Tools » (dashboard)
--  À coller UNE fois dans Supabase : SQL Editor ▸ New query ▸ Run.
--  On peut le relancer sans risque : rien n'est effacé.
--
--  Sécurité : le site n'utilise que la clé publique. Grâce aux règles
--  « row level security » ci-dessous, seuls les comptes Discord inscrits
--  dans bot_admins peuvent lire ou modifier ces tables. Le bot, lui, utilise
--  la clé secrète (jamais mise sur le site) et n'est pas limité.
-- ============================================================

-- Comptes Discord autorisés à ouvrir le dashboard.
-- Le bot y inscrit tout seul le propriétaire de l'application Discord.
create table if not exists bot_admins (
  discord_id text primary key,
  nom        text,
  ajoute     timestamptz default now()
);

-- Identifiant Discord du compte connecté au site (connexion « avec Discord »)
create or replace function bot_discord_id() returns text
language sql stable set search_path = public as $$
  select coalesce(auth.jwt() -> 'user_metadata' ->> 'provider_id', auth.jwt() -> 'user_metadata' ->> 'sub')
$$;

create or replace function est_admin_bot() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from bot_admins where discord_id = bot_discord_id())
$$;

-- seuls les comptes connectés peuvent poser la question « suis-je admin ? »
revoke execute on function est_admin_bot() from public, anon;
grant execute on function est_admin_bot() to authenticated;
revoke execute on function bot_discord_id() from public, anon;
grant execute on function bot_discord_id() to authenticated;

-- Réglages de chaque serveur Discord (écrits par le dashboard, lus par le bot)
create table if not exists bot_config (
  guild_id text primary key,
  config   jsonb not null default '{}'::jsonb,
  maj      timestamptz default now()
);

-- Ce que le bot sait de chaque serveur : nom, salons, rôles (pour les menus du dashboard)
create table if not exists bot_serveurs (
  guild_id text primary key,
  nom      text,
  icone    text,
  membres  integer,
  salons   jsonb default '[]'::jsonb,
  roles    jsonb default '[]'::jsonb,
  maj      timestamptz default now()
);

-- État du bot (en ligne, ping…)
create table if not exists bot_etat (
  id        integer primary key default 1,
  nom       text,
  avatar    text,
  en_ligne  timestamptz,
  vu        timestamptz,
  ping      integer,
  fiches    integer,
  ia        jsonb
);

-- Historique des sanctions
create table if not exists bot_sanctions (
  id             bigserial primary key,
  guild_id       text not null,
  type           text not null,           -- warn, mute, unmute, kick, ban, unban, clear
  cible_id       text,
  cible_nom      text,
  moderateur_id  text,
  moderateur_nom text,
  raison         text,
  duree          text,
  date           timestamptz default now()
);
create index if not exists bot_sanctions_guild on bot_sanctions (guild_id, date desc);

-- Niveaux et XP
create table if not exists bot_niveaux (
  guild_id  text not null,
  user_id   text not null,
  nom       text,
  avatar    text,
  xp        bigint default 0,
  niveau    integer default 0,
  messages  integer default 0,
  maj       timestamptz default now(),
  primary key (guild_id, user_id)
);
create index if not exists bot_niveaux_xp on bot_niveaux (guild_id, xp desc);

-- Tickets
create table if not exists bot_tickets (
  id         bigserial primary key,
  guild_id   text not null,
  salon_id   text,
  auteur_id  text,
  auteur_nom text,
  sujet      text,
  ouvert     boolean default true,
  cree       timestamptz default now(),
  ferme      timestamptz,
  ferme_par  text
);

-- Giveaways
create table if not exists bot_giveaways (
  id           bigserial primary key,
  guild_id     text not null,
  salon_id     text,
  message_id   text,
  lot          text,
  gagnants     integer default 1,
  fin          timestamptz,
  participants jsonb default '[]'::jsonb,
  termine      boolean default false,
  gagnants_ids jsonb default '[]'::jsonb,
  cree_par     text,
  cree         timestamptz default now()
);

-- Économie : soldes et inventaires
create table if not exists bot_economie (
  guild_id   text not null,
  user_id    text not null,
  nom        text,
  avatar     text,
  solde      bigint default 0,
  gagne      bigint default 0,
  depense    bigint default 0,
  inventaire jsonb default '{}'::jsonb,
  serie      integer default 0,
  daily      timestamptz,
  travail    timestamptz,
  maj        timestamptz default now(),
  primary key (guild_id, user_id)
);
create index if not exists bot_economie_solde on bot_economie (guild_id, solde desc);

-- Historique des achats en boutique
create table if not exists bot_achats (
  id         bigserial primary key,
  guild_id   text not null,
  user_id    text,
  nom        text,
  article    text,
  article_id text,
  prix       bigint,
  date       timestamptz default now()
);
create index if not exists bot_achats_guild on bot_achats (guild_id, date desc);

-- Actions demandées depuis le dashboard (publier un panneau, lancer un giveaway…)
create table if not exists bot_actions (
  id        bigserial primary key,
  guild_id  text not null,
  type      text not null,
  donnees   jsonb default '{}'::jsonb,
  cree      timestamptz default now(),
  fait      boolean default false,
  resultat  text
);

-- Règles d'accès : uniquement les admins du bot
do $$
declare t text;
begin
  foreach t in array array['bot_admins','bot_config','bot_serveurs','bot_etat','bot_sanctions','bot_niveaux','bot_tickets','bot_giveaways','bot_actions','bot_economie','bot_achats'] loop
    execute format('alter table %I enable row level security', t);
    execute format('drop policy if exists "admins du bot" on %I', t);
    execute format('create policy "admins du bot" on %I for all to authenticated using (est_admin_bot()) with check (est_admin_bot())', t);
  end loop;
end $$;

-- Le dashboard voit les changements en direct
do $$
begin
  begin execute 'alter publication supabase_realtime add table bot_config'; exception when others then null; end;
  begin execute 'alter publication supabase_realtime add table bot_actions'; exception when others then null; end;
  begin execute 'alter publication supabase_realtime add table bot_etat'; exception when others then null; end;
end $$;

-- Vérification : doit afficher « ok »
select 'ok' as resultat;
