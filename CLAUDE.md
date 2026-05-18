# Sushi-Ya Vannes — instructions Claude (spécifiques projet)

> Règles agence : voir `../CLAUDE.md` à la racine de `freelance/`.
> Référence détaillée : voir `../CONVENTIONS.md`.

## Identité du projet

- **Client** : Sushi-Ya Vannes (SAS VET&COOK, dirigée par Sophie ROUSSELLE)
- **Activité** : restaurant japonais (sushis traditionnels + créations contemporaines)
- **Adresse** : 13 rue Thomas de Closmadeuc, 56000 Vannes
- **Horaires** : mardi–samedi · 12h00–13h30 · 19h00–21h00. Fermé dimanche et lundi.
- **Téléphone** : 09 83 29 03 15
- **Email** : contact@sushiya-56.fr
- **SIRET** : 84992891600022
- **Site** : `https://sushiya-56.fr`
- **SITE_ID** : `sushiya`
- **D1** : aucune (site vitrine pur — catalogue dans `src/data/menu/*.ts`)
- **R2 bucket** : `sushiya-media`
- **KV namespace** : `sushiya-kv`
- **Email expéditeur** : `contact@sushiya-56.fr` (Resend)
- **Réseaux** : Instagram `@sushiya_vannes`, Facebook `sushiya.vannes`

## Direction artistique

- **Palette japonaise raffinée** :
  - `--color-paper` : #fdfaf3 (washi naturel)
  - `--color-ink` : #0a0a0a (encre noir profond)
  - `--color-deep` / `--color-deeper` : #161616 / #050505 (zones sombres)
  - `--color-brand` : #c13b1f (vermillon / cinabre 朱)
  - `--color-gold` : #c4a14a (or antique)
  - `--color-accent` : #406b50 (jade / thé matcha)
  - `--color-indigo` : #1b365d (encre 藍)
- **Polices** :
  - Display : **Cormorant Garamond** (300/400/500/600 + italic)
  - Body : **Inter**
  - Kanji : **Noto Serif JP** (uniquement filigranes décoratifs, subset minimal)
- **Watermarks kanji** : 寿司 (sushi), 美味 (umami), 心 (cœur), 儀式 (rituel), 案内 (information), 新 (nouveau), 失 / 迷 (erreur / égaré)
- **Ton** : précis, sobre, élégant. Respect du métier japonais sans cliché orientaliste. Vouvoiement.

## Animations premium

- **Lenis** (smooth scroll global) — désactivé via `useReducedMotion()`
- **Framer Motion** — composants `Reveal`, `MagneticButton`, `ParallaxImage`
- **GSAP + ScrollTrigger** — section `LeRituel` avec fade-up sur chaque étape (4 gestes)
- **`MotionGate`** : Context React qui propage `prefers-reduced-motion` → tous les composants animés s'éteignent proprement

## URLs WordPress conservées à l'identique

Préservation totale du jus SEO existant. Slugs longs hérités de WordPress :

- `/sushiya-vannes-les-menus/` (hub carte)
- `/les-menus-midi-formules-simples-sur-place-a-emporter/`
- `/les-california-rolls-de-suhiya/`
- `/makis-nigiris-chirashis-sashimis-sushiya-vannes-sushis/`
- `/menus-sushiya-assortiments/`
- `/entrees-accompagnements-desserts-sushiya-vannes/`
- `/sushi-le-totem-de-la-cuisine-japonaise-se-decline-a-vannes-chez-sushiya-2/`

Centralisés dans `src/lib/routes.ts`. Toujours utiliser `routes.X` plutôt que de retaper l'URL.

## Sources de contenu client-éditables

- **`src/lib/site-config.ts`** — coordonnées, horaires, navigation, mentions légales, philosophie, CTAs
- **`src/lib/routes.ts`** — mapping des URLs WordPress legacy
- **`src/data/menu/*.ts`** — catalogue exhaustif typé (~80 items, 12 fichiers)
- **`src/data/faq.ts`** — FAQ infos pratiques (injectée en JSON-LD `FAQPage`)
- **`src/data/temoignages.ts`** — avis clients (avec accord écrit !)
- **`src/data/matieres-premieres.ts`** — 4 matières premières + 2 spécialités signature
- **`src/data/le-rituel.ts`** — 4 étapes scroll-pin GSAP en home

## Points d'attention spécifiques

- **V1 = vitrine pure sans DB ni auth** — pas de back-office, pas de réservation en ligne. Toute édition passe par GitHub.
- **Réservations & à emporter** : téléphone uniquement (`tel:+33983290315`). Pas de livraison directe.
- **Formulaire de contact** : Server Action → envoi Resend **× 2** (notification patron + accusé de réception visiteur).
- **JSON-LD** :
  - `Restaurant` (root layout) avec `servesCuisine`, `acceptsReservations`, `priceRange`, 2 plages d'horaires (midi + soir)
  - `Menu` + `MenuSection` + `MenuItem` sur chaque page de carte (offers EUR)
  - `FAQPage` sur `/infos-pratiques/`
  - `BreadcrumbList` sur toutes pages niveau ≥ 2
- **Mentions allergènes** : page dédiée `/mentions-allergenes/` obligatoire INCO 1169/2011.
- **Pas d'iframe Google Maps** en V1 → lien externe `siteConfig.contact.mapUrl`. CSP plus stricte.
- **Photos** : actuellement placeholders / scraping site existant. À remplacer par photos pro avant livraison (cf. `PRELAUNCH.md`).
