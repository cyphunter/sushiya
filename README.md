# Sushi-Ya Vannes

Site vitrine Next.js 16 + Cloudflare Workers pour **Sushi-Ya Vannes** — restaurant japonais (13 rue Thomas de Closmadeuc, 56000 Vannes).

> Règles agence : voir `../CLAUDE.md` et `../CONVENTIONS.md`.
> Instructions projet : `./CLAUDE.md`.

## Démarrage rapide

```bash
# 1. Installer
npm install

# 2. Ressources Cloudflare (à créer une fois)
wrangler r2 bucket create sushiya-media
wrangler kv namespace create sushiya-kv
# → coller l'id KV dans wrangler.jsonc

# 3. Dev local
npm run dev          # http://localhost:3000 (rapide, sans bindings)
npm run dev:cf       # http://localhost:3000 avec bindings R2/KV
npm run preview      # build OpenNext + preview Workers local

# 4. Secrets prod (une fois)
wrangler secret put RESEND_API_KEY
wrangler secret put RESEND_WEBHOOK_SECRET   # optionnel

# 5. Récupérer les visuels du site existant (script utilitaire)
npm run fetch-images   # télécharge dans public/images/source/

# 6. Deploy
npm run deploy
```

## Stack

- **Next.js 16** App Router + React 19 + TypeScript strict
- **Cloudflare Workers** via `@opennextjs/cloudflare`
- **Tailwind v4** (CSS-first via `@theme`) — palette japonaise vermillon/or/jade
- **Framer Motion + GSAP (ScrollTrigger) + Lenis** — animations premium et smooth scroll
- **Resend** + React Email pour le formulaire de contact (envoi + accusé de réception)
- **Zod** validation, **sanitize-html** sur contenu utilisateur
- **JSON-LD** typés `schema-dts` : `Restaurant`, `Menu`, `FAQPage`, `BreadcrumbList`
- **Aucune DB ni auth** — site vitrine pur, données catalogue dans `src/data/menu/*.ts`

## Édition de contenu (client)

| Quoi | Où |
|---|---|
| Identité, coordonnées, horaires, navigation, mentions légales | `src/lib/site-config.ts` |
| Catalogue de plats (par catégorie) | `src/data/menu/*.ts` |
| FAQ infos pratiques | `src/data/faq.ts` |
| Témoignages clients | `src/data/temoignages.ts` |
| Matières premières + spécialités signature | `src/data/matieres-premieres.ts` |
| Étapes "Le rituel" | `src/data/le-rituel.ts` |
| Images (WebP, ≤ 300 KB) | `public/images/{hero,menu,ambiance,matieres,rituel}/` |

## Pages

URLs WordPress legacy conservées à l'identique (préservation jus SEO) :

- `/` — accueil
- `/sushiya-vannes-les-menus/` — hub carte
- `/les-menus-midi-formules-simples-sur-place-a-emporter/`
- `/les-california-rolls-de-suhiya/`
- `/makis-nigiris-chirashis-sashimis-sushiya-vannes-sushis/`
- `/menus-sushiya-assortiments/`
- `/entrees-accompagnements-desserts-sushiya-vannes/`
- `/sushi-le-totem-de-la-cuisine-japonaise-se-decline-a-vannes-chez-sushiya-2/` — Le restaurant
- `/infos-pratiques/`
- `/actus/`
- `/contact/`
- `/plan-du-site/`
- `/mentions-legales/`, `/politique-de-confidentialite/`, `/cgu/`, `/mentions-allergenes/`
- `/health` — endpoint monitoring JSON
- `/sitemap.xml`, `/robots.txt`

Redirections 301 : `/accueil/` → `/`, `/tous-les-menus-commander/` → `/sushiya-vannes-les-menus/`.

## Scripts

| Script | Effet |
|---|---|
| `npm run dev` | Serveur dev Next.js (heap cap 4 Go, Turbopack) |
| `npm run dev:cf` | Idem + bindings Cloudflare (R2, KV, secrets) |
| `npm run dev:webpack` | Fallback Webpack si fuite Turbopack |
| `npm run clean` | Purge `.next` / `.open-next` / `.wrangler/state` |
| `npm run dev:clean` | `clean` + `dev` |
| `npm run build` | Build OpenNext (production Workers) |
| `npm run preview` | Build + preview Workers local |
| `npm run deploy` | Build + deploy Workers prod |
| `npm run fetch-images` | Télécharge les visuels du site sushiya-56.com existant |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript strict |
| `npm run format` | Prettier |

## Checklists

- Avant livraison : [`PRELAUNCH.md`](./PRELAUNCH.md)
- Doc client : [`LIVRAISON.md`](./LIVRAISON.md)
