import type { MenuItem } from "./types";

/** Soupes miso — bouillon dashi traditionnel, miso fermenté. */
export const soupes: ReadonlyArray<MenuItem> = [
  {
    slug: "soupe-miso-nature",
    name: "Soupe miso nature",
    priceEur: 4.3,
    ingredients: ["Pâte miso", "Bouillon dashi", "Tofu", "Wakamé", "Oignon vert"],
    category: "soupe",
    flags: ["vegetarien"],
    allergens: ["soja", "poisson"],
  },
  {
    slug: "soupe-miso-saumon",
    name: "Soupe miso saumon",
    priceEur: 5.6,
    ingredients: ["Pâte miso", "Bouillon dashi", "Saumon", "Wakamé"],
    category: "soupe",
    allergens: ["poisson", "soja"],
  },
  {
    slug: "soupe-miso-saumon-spicy",
    name: "Soupe miso saumon spicy",
    priceEur: 5.9,
    ingredients: ["Pâte miso", "Bouillon dashi", "Saumon", "Wakamé", "Sauce épicée"],
    category: "soupe",
    flags: ["epice"],
    allergens: ["poisson", "soja", "moutarde"],
  },
  {
    slug: "soupe-miso-maquereau-epice",
    name: "Soupe miso maquereau épicé",
    priceEur: 5.9,
    ingredients: ["Pâte miso", "Bouillon dashi", "Maquereau mariné", "Sauce épicée"],
    category: "soupe",
    flags: ["epice"],
    allergens: ["poisson", "soja", "moutarde", "sulfites"],
  },
];
