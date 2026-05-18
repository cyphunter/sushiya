# Checklist pré-livraison — Sushi-Ya Vannes

À cocher **à 100 %** avant mise en ligne. Aucune exception.

## Contenu à valider avec le client

- [ ] **Capital social** SAS VET&COOK (`siteConfig.legal.capital`)
- [ ] **N° TVA intracommunautaire** (`siteConfig.legal.tvaIntra`)
- [ ] **Prix exacts** de chaque item du menu (`src/data/menu/*.ts`) — vérification carte papier client
- [ ] **Coordonnées GPS** exactes du 13 rue Thomas de Closmadeuc (`siteConfig.contact.geo`)
- [ ] **Lien Google Maps** réel (`siteConfig.contact.mapUrl`)
- [ ] **Note Google Maps** (étoiles + nb avis) à intégrer en JSON-LD `aggregateRating` si disponible
- [ ] **4 témoignages clients** réels avec accord écrit (`src/data/temoignages.ts`)
- [ ] **Domaine** confirmé (`sushiya-56.fr` ou autre) + redirections depuis `sushiya-56.com`
- [ ] **Photos pro** dans `public/images/` :
  - [ ] `hero/hero-sushi-platter.webp` (1920×1080, < 200 KB)
  - [ ] `menu/{nigiri-wagyu,tartare-thon-truffe,chirashi-traditionnel,menu-omakase,cafe-gourmand,california-philadelphia,…}.webp`
  - [ ] `ambiance/{salle-1,bar-sushi,facade,chef-decoupe,…}.webp` (8 visuels)
  - [ ] `matieres/{saumon-ecossais,thon-albacore,riz-camargue,algue-nori-bretagne}.webp`
  - [ ] `rituel/{rituel-selection,rituel-decoupe,rituel-dressage,rituel-degustation}.webp`
  - [ ] `og.jpg` (1200×630, < 300 KB)

## Qualité technique

- [ ] Lighthouse mobile ≥ 95 sur les 4 catégories (joindre rapport pour `/`, `/sushiya-vannes-les-menus/`, `/makis-nigiris-...sushis/`)
- [ ] LCP < 2.5s · INP < 200ms · CLS < 0.1 · FCP < 1.8s · TBT < 200ms
- [ ] `npm run typecheck` : 0 erreur
- [ ] `npm run lint` : 0 erreur
- [ ] Bundle JS initial < 170 KB gzip
- [ ] Console navigateur : 0 erreur / 0 warning bloquant

## Accessibilité (WCAG 2.1 AA)

- [ ] Navigation clavier complète (Tab / Shift+Tab / Enter / Esc)
- [ ] Focus visible partout (anneau brand vermillon)
- [ ] Skip-to-content fonctionnel (visible au focus)
- [ ] Contraste 4.5:1 vérifié avec axe DevTools (palette noir / vermillon / paper validée)
- [ ] Tous `alt` renseignés (vides si décoratif)
- [ ] Formulaire contact : `<label>` lié, erreurs lues par lecteur d'écran (testé NVDA / VoiceOver)
- [ ] `prefers-reduced-motion` respecté : Lenis OFF, GSAP bypassé, Framer Motion neutralisé

## Animations premium (effet wow)

- [ ] Smooth scroll Lenis fluide, désactivé si reducedMotion
- [ ] HeroCinematic : image LCP rapide, watermark kanji visible, magnetic CTAs OK
- [ ] LeRituel : scroll-pin GSAP fonctionnel en desktop, fallback simple en mobile
- [ ] Marquee ingrédients défile, pas de relance au resize
- [ ] AmbianceGallery : hover zoom subtil sans CLS
- [ ] Toutes les sections Reveal fade-up déclenchent correctement à l'entrée viewport

## SEO

- [ ] 1 seul `<h1>` par page (vérifier via view-source)
- [ ] `Metadata` Next.js sur toutes les pages (canonical correct, OG image)
- [ ] JSON-LD valide (Rich Results Test) :
  - [ ] `Restaurant` (layout root)
  - [ ] `Menu` + `MenuSection` + `MenuItem` (5 pages de carte + hub)
  - [ ] `FAQPage` (`/infos-pratiques/`)
  - [ ] `BreadcrumbList` (toutes pages niveau ≥ 2)
- [ ] OpenGraph image 1200×630 testée (Facebook Debugger)
- [ ] `sitemap.xml` accessible avec 12+ URLs publiques
- [ ] `robots.txt` valide en prod (autorise) et désindex en preview Workers
- [ ] Redirections 301 testées : `/accueil/` → `/`, `/tous-les-menus-commander/` → hub
- [ ] Google Search Console : site ajouté + sitemap soumis
- [ ] Bing Webmaster Tools : ajouté

## Sécurité

- [ ] Test [securityheaders.com](https://securityheaders.com) → **A+**
  - [ ] CSP / HSTS / X-Frame-Options / X-Content-Type-Options / Referrer-Policy / Permissions-Policy
- [ ] HTTPS partout, 0 mixed content
- [ ] Validation Zod sur Server Action `contact` (avec champs partySize / preferredDate)
- [ ] Honeypot `website` + consentement RGPD obligatoire
- [ ] Secrets via `wrangler secret put`, 0 clé en clair dans le repo
- [ ] Rate limiting Cloudflare WAF activable si abus formulaire

## Légal & restauration

- [ ] Page Mentions légales complète (SAS VET&COOK SIRET 84992891600022, Sophie ROUSSELLE)
- [ ] Page Politique de confidentialité publiée
- [ ] Page CGU publiée
- [ ] Page **Mentions allergènes** publiée (obligation INCO 1169/2011)
- [ ] Case RGPD non pré-cochée + lien politique
- [ ] Pas de bandeau cookies (Cloudflare Web Analytics, sans cookie tiers)

## Email (Resend)

- [ ] Domaine `sushiya-56.fr` vérifié sur Resend (statut "verified")
- [ ] SPF + DKIM (3 CNAME) + DMARC en DNS Cloudflare
- [ ] Test envoi formulaire vers Gmail / Outlook → 2 emails reçus (notification + accusé)
- [ ] `from` = `Sushi-Ya Vannes <contact@sushiya-56.fr>`
- [ ] Webhook bounces configuré (optionnel, signature Svix)

## DNS / Domaine

- [ ] NS du registrar pointe vers Cloudflare
- [ ] A/CNAME @ et www → Workers (proxy ON 🟠)
- [ ] DNS Resend (SPF + DKIM + DMARC) propagés
- [ ] SSL/TLS mode "Full (strict)"
- [ ] Email forwarding `contact@sushiya-56.fr` → email Sophie ROUSSELLE (via Cloudflare Email Routing si pas géré ailleurs)

## Assets

- [ ] Images en WebP, < 300 KB chacune
- [ ] Hero LCP < 200 KB
- [ ] Favicon complet : `/favicon.ico`, `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png`
- [ ] Polices via `next/font` (preload + display swap) — Inter + Cormorant Garamond + Noto Serif JP (subset minimal)

## Responsive & cross-browser

- [ ] Tests sur 5 breakpoints : 375 / 768 / 1024 / 1440 / 1920
- [ ] iOS Safari + Android Chrome
- [ ] Pas de scrollbar horizontale à 320px
- [ ] Touch targets ≥ 44×44px (menu mobile vérifié)

## Pages d'erreur

- [ ] `/not-found.tsx` personnalisée et testée (URL bidon → 404 stylisée)
- [ ] `/error.tsx` personnalisée et testée (forcer une exception)

## Monitoring

- [ ] `observability.enabled = true` dans `wrangler.jsonc` ✓
- [ ] `/health` répond 200 JSON
- [ ] Cloudflare Web Analytics activé
- [ ] Uptime monitoring externe configuré (BetterStack / UptimeRobot)

## Repo & CI/CD

- [ ] README à jour ✓
- [ ] Branches protégées (main protégée, PR review)
- [ ] Secrets GitHub Actions : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- [ ] Deploy auto sur push `main` vérifié

## Livraison client

- [ ] `LIVRAISON.md` rempli (accès, comment éditer, procédures)
- [ ] Tableau d'accès remis (Cloudflare, Resend, GitHub, OVH/registrar, GSC, monitoring)
- [ ] Démo client : tour du site, comment éditer `site-config.ts` et `data/menu/*.ts` via GitHub
- [ ] Contrat de maintenance signé (si applicable)
