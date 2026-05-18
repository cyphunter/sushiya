import type { MenuItem } from "./types";

/** Chirashis — bols généreux sur lit de riz vinaigré. 15 à 16 pièces. */
export const chirashis: ReadonlyArray<MenuItem> = [
  {
    slug: "chirashi-saumon",
    name: "Chirashi Saumon",
    priceEur: 25.2,
    pieces: 15,
    ingredients: ["15 sashimi saumon", "Riz vinaigré", "Wakamé", "Sésames"],
    category: "chirashi",
    flags: ["cru"],
    allergens: ["poisson", "soja", "sesame"],
  },
  {
    slug: "chirashi-saumon-thon",
    name: "Chirashi Saumon & Thon",
    priceEur: 28.3,
    pieces: 16,
    ingredients: ["Sashimi saumon", "Sashimi thon", "Riz vinaigré", "Wakamé"],
    category: "chirashi",
    flags: ["cru"],
    allergens: ["poisson", "soja"],
  },
  {
    slug: "chirashi-thon",
    name: "Chirashi Thon",
    priceEur: 29.3,
    pieces: 15,
    ingredients: ["15 sashimi thon albacore", "Riz vinaigré", "Wakamé", "Sésames"],
    category: "chirashi",
    flags: ["cru"],
    allergens: ["poisson", "soja", "sesame"],
  },
  {
    slug: "chirashi-traditionnel",
    name: "Chirashi Traditionnel",
    priceEur: 34.0,
    description: "Notre version signature, l'assortiment complet.",
    ingredients: [
      "Saumon",
      "Thon",
      "Maquereau",
      "Crevette",
      "Œufs de poisson",
      "Riz vinaigré",
      "Wakamé",
    ],
    category: "chirashi",
    flags: ["signature", "chef"],
    allergens: ["poisson", "crustaces", "oeufs", "soja", "sulfites"],
    imageSlug: "chirashi-traditionnel",
  },
];
