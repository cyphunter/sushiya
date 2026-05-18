# Livraison — Sushi-Ya Vannes

> Document remis le jour de la mise en ligne. À conserver précieusement.

## Informations générales

- **Restaurant** : Sushi-Ya Vannes (SAS VET&COOK)
- **Site** : https://sushiya-56.fr
- **Mis en ligne le** : `JJ/MM/AAAA`
- **Développeur** : Kevin — fostraceur999@gmail.com
- **Repo GitHub** : `<URL>`

## Comment modifier le contenu du site

Tout le contenu textuel principal vit dans **trois zones** sur GitHub :

### 1. Coordonnées, horaires, slogans, navigation, mentions légales

Fichier : `src/lib/site-config.ts`

Pour modifier :
1. GitHub → `src/lib/site-config.ts` → crayon ✏️
2. Modifier les valeurs **entre guillemets** uniquement (ex : `phoneDisplay: "09 83 29 03 15"`)
3. "Commit changes"
4. Le site se met à jour automatiquement en 2–3 minutes.

### 2. Catalogue de plats

Dossier : `src/data/menu/`

Un fichier par catégorie : `makis.ts`, `nigiris.ts`, `sashimis.ts`, `chirashis.ts`, `california-rolls.ts`, `menus-midi.ts`, `menus-assortis.ts`, `menus-decouverte.ts`, `entrees.ts`, `soupes.ts`, `accompagnements.ts`, `desserts.ts`.

Chaque plat est un bloc avec : `slug` (identifiant unique, **ne pas changer**), `name`, `priceEur` (chiffre, ex : `9.80`), `ingredients` (liste), `description` (facultatif), `flags` (`signature`, `vegetarien`, `epice`, `cru`, `aburi`, `chef`, `fume`), `allergens` (liste).

Pour modifier un prix : éditer la valeur de `priceEur` uniquement.

Pour ajouter un plat : copier un bloc existant, changer le `slug` et les valeurs.

### 3. FAQ, témoignages, matières premières, rituel

- `src/data/faq.ts` — FAQ infos pratiques
- `src/data/temoignages.ts` — avis clients (avec accord écrit !)
- `src/data/matieres-premieres.ts` — saumon, thon, riz, algues + spécialités signature
- `src/data/le-rituel.ts` — 4 étapes affichées en home

### 4. Ajouter une image

1. Préparer l'image : **WebP** (idéal) ou JPG, max 1920×1080 px pour hero, 800×600 pour plats, **< 300 KB**.
2. GitHub → `public/images/{hero,menu,ambiance,matieres,rituel}/` → "Add file" → "Upload files".
3. Référencer l'image en utilisant son `imageSlug` dans le fichier `src/data/menu/*.ts` correspondant.

Astuce conversion WebP : déposer l'image sur [squoosh.app](https://squoosh.app) → WebP qualité 78 → télécharger.

## Réservations & commandes à emporter

Les réservations et commandes à emporter passent **uniquement par téléphone** au `09 83 29 03 15`. Le site renvoie vers ce numéro depuis le hero, le header, le footer et toutes les sections CTA.

Pas de réservation en ligne en V1. Si vous souhaitez ajouter TheFork ou un système maison plus tard, c'est faisable en V2.

## Accès importants

| Service | URL | Compte |
|---|---|---|
| **Cloudflare** (hébergement) | https://dash.cloudflare.com | `<email>` (2FA actif) |
| **Resend** (envoi mails contact) | https://resend.com | `<email>` |
| **GitHub** (code) | `<URL repo>` | `<username>` |
| **Registrar domaine** | `<OVH / Gandi / autre>` | `<identifiant>` |
| **Google Search Console** | https://search.google.com/search-console | `<email>` |
| **Google Business Profile** | https://business.google.com | `<email>` (avis Google) |
| **Instagram / Facebook** | `@sushiya_vannes` / `sushiya.vannes` | `<email>` |
| **BetterStack** (monitoring) | https://betterstack.com | `<email>` |

> Conservez ces accès dans un gestionnaire de mots de passe (1Password, Bitwarden).

## Formulaire de contact

- Les messages arrivent à `contact@sushiya-56.fr` (variable `CONTACT_TO_EMAIL` côté Cloudflare).
- Chaque visiteur reçoit un **accusé de réception** automatique sur son email.
- Vous pouvez **répondre directement au mail reçu** — il sera envoyé à la personne qui a écrit.
- Anti-spam : champ caché (honeypot) + consentement RGPD obligatoire + rate limiting Cloudflare WAF.

## Mentions allergènes

Une page dédiée `/mentions-allergenes/` recense les 14 allergènes majeurs (règlement INCO 1169/2011) et leur présence dans la carte. **Important** : les flags `allergens` dans `src/data/menu/*.ts` sont une **estimation** — à valider plat par plat avec le chef.

## Sauvegarde

- **Code & contenu** : versionnés sur GitHub (historique complet, retour arrière possible).
- **Médias** : R2 Cloudflare, redondés (durabilité 99.999999999%).
- **Email de contact** : conservé côté boîte mail.

## Procédure d'urgence

### Site cassé / inaccessible

1. Vérifier https://www.cloudflarestatus.com/
2. Contacter Kevin : fostraceur999@gmail.com
3. Rollback possible en 30s vers la version précédente (Kevin s'en charge).

### Spam / abus formulaire

Le formulaire a un honeypot, un consentement obligatoire et passe par Cloudflare. En cas d'abus persistant, Kevin peut activer un rate limiting renforcé via le WAF Cloudflare en 5 min.

### Compromission compte

1. Changer immédiatement le mot de passe Cloudflare + activer 2FA si pas déjà fait.
2. Contacter Kevin pour audit logs et rotation des secrets.

## Photos professionnelles — important

Le site fonctionne avec des images placeholders en V1. **Pour la mise en ligne définitive**, prévoyez une séance photo pro :

- 1 image hero pleine page (table dressée, plateau de sushis cinématique)
- 8 photos ambiance (salle, comptoir sushi, façade, chef en action, dressage…)
- 1 photo par plat signature (≈ 10 photos)
- 4 photos matières premières
- 4 photos pour les étapes du rituel

À défaut, le script `npm run fetch-images` récupère les visuels existants du site sushiya-56.com, à valider légalement pour droits d'usage.

## Maintenance

- **Sécurité** (mises à jour dépendances) : `<incluses / à la demande>`
- **Évolutions** (nouvelles fonctionnalités) : devis au cas par cas
- **Support** : `<email / délai>`

## Contact

**Kevin** — Développeur freelance
fostraceur999@gmail.com

---

*Document généré à la mise en ligne. N'hésitez pas à me contacter pour toute question.*
