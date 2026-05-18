# Images du site

Cette arborescence accueille les images optimisées (WebP, < 300 KB) référencées par le code.

## Structure attendue

```
public/images/
├── hero/
│   ├── hero-sushi-platter.webp     # Image hero plein écran (LCP) — 1920×1080, ≤ 200 KB
│   ├── hero-mosaic-detail.webp
│   └── hero-poster.svg              # Fallback ultra léger (optionnel)
├── menu/                            # Une image par plat vedette
│   ├── menu-midi-assortiment.webp
│   ├── menu-midi-sashimi.webp
│   ├── menu-midi-saumon.webp
│   ├── menu-midi-california.webp
│   ├── menu-midi-chirashi.webp
│   ├── menu-midi-coeur.webp
│   ├── menu-midi-maki.webp
│   ├── california-philadelphia.webp
│   ├── nigiri-wagyu.webp
│   ├── sashimi-saumon.webp
│   ├── sashimi-assortiment.webp
│   ├── chirashi-traditionnel.webp
│   ├── menu-omakase.webp
│   ├── tartare-thon-truffe.webp
│   ├── mochi.webp
│   ├── cafe-gourmand.webp
│   ├── huitres-japonaises.webp
│   └── placeholder.webp             # Fallback si imageSlug non défini
├── ambiance/                         # 8 photos d'atmosphère
│   ├── salle-1.webp                 # Vue salle, lumière tamisée
│   ├── salle-2.webp
│   ├── bar-sushi.webp               # Comptoir du chef
│   ├── facade.webp                  # Façade rue Thomas de Closmadeuc
│   ├── chef-decoupe.webp            # Couteau yanagiba en action
│   ├── nappage-detail.webp          # Détail dressage
│   ├── huitres-saveurs-japonaises.webp
│   └── cafe-gourmand.webp
├── matieres/                         # 4 matières premières
│   ├── saumon-ecossais.webp
│   ├── thon-albacore.webp
│   ├── riz-camargue.webp
│   └── algue-nori-bretagne.webp
├── rituel/                           # 4 étapes du rituel sushi-ya
│   ├── rituel-selection.webp
│   ├── rituel-decoupe.webp
│   ├── rituel-dressage.webp
│   └── rituel-degustation.webp
└── source/                           # Visuels bruts récupérés avec scripts/fetch-images.mjs
    └── (non versionnés en build final)
```

## Conversion WebP

Recommandée pour toutes les images :
- [squoosh.app](https://squoosh.app) (drag & drop, gratuit)
- `cwebp -q 78 entree.jpg -o sortie.webp` (CLI)

## Cibles de poids

| Type | Dimensions max | Poids max |
|---|---|---|
| Hero | 1920×1080 | 200 KB |
| Plats | 800×600 | 80 KB |
| Ambiance | 1200×800 | 120 KB |
| Matières premières | 800×600 | 80 KB |
| OG (Twitter/Facebook) | 1200×630 | 300 KB (JPEG q=82) |

## V1 — placeholders

En V1, les `<img src="...">` qui pointent vers des fichiers absents retournent 404 mais ne cassent pas la page. Le client fournit ensuite ses photos pro (voir `LIVRAISON.md`).
