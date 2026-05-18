import type { MenuItem } from "./types";

/** Menus découverte pour partager. Composition selon arrivage poisson du jour. */
export const menusDecouverte: ReadonlyArray<MenuItem> = [
  {
    slug: "decouverte-2-personnes",
    name: "Découverte · 2 personnes",
    priceEur: 62.8,
    description: "Un voyage à deux, composé selon l'arrivage du jour.",
    ingredients: [
      "Assortiment de californias",
      "Sushis, sashimis et makis",
      "Soupes miso",
      "Salade de chou",
    ],
    category: "menu-decouverte",
    flags: ["signature"],
    allergens: ["poisson", "lait", "soja", "sesame"],
  },
  {
    slug: "decouverte-3-personnes",
    name: "Découverte · 3 personnes",
    priceEur: 94.2,
    description: "Pour trois convives qui aiment partager.",
    ingredients: [
      "Assortiment de californias",
      "Sushis, sashimis et makis",
      "Soupes miso",
      "Salade de chou",
    ],
    category: "menu-decouverte",
    flags: ["signature"],
    allergens: ["poisson", "lait", "soja", "sesame"],
  },
  {
    slug: "decouverte-4-personnes",
    name: "Découverte · 4 personnes",
    priceEur: 125.6,
    description: "Le grand format à partager. Composition selon arrivage.",
    ingredients: [
      "Assortiment de californias",
      "Sushis, sashimis et makis",
      "Soupes miso",
      "Salade de chou",
    ],
    category: "menu-decouverte",
    flags: ["signature", "chef"],
    allergens: ["poisson", "lait", "soja", "sesame"],
  },
];
