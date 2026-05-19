import type { MenuItem } from "./types";

/** Desserts — mochis et création maison. */
export const desserts: ReadonlyArray<MenuItem> = [
  {
    slug: "mochis-traditionnels",
    name: "Assortiment de mochis traditionnels",
    priceEur: 7.3,
    description: "Pâte de riz gluant, garnitures aux saveurs japonaises.",
    ingredients: ["Mochis sésame noir", "Haricot rouge azuki", "Matcha"],
    category: "dessert",
    flags: ["vegetarien"],
    allergens: ["gluten", "lait", "sesame", "soja"],
    imageSlug: "mochi.png",
  },
  {
    slug: "mochis-glaces",
    name: "Mochis glacés",
    priceEur: 7.3,
    description: "Glace enrobée de pâte de riz, fondant et frais.",
    ingredients: ["Pâte de riz gluant", "Glace (parfums variés)"],
    category: "dessert",
    flags: ["vegetarien"],
    allergens: ["gluten", "lait", "oeufs"],
  },
  {
    slug: "assortiment-desserts",
    name: "Café gourmand",
    priceEur: 8.4,
    description: "Notre signature franco-japonaise : un classique bistronomique aux parfums asiatiques.",
    ingredients: ["Café espresso", "Mini-mochis", "Mignardise yuzu", "Mignardise matcha"],
    category: "dessert",
    flags: ["signature", "vegetarien"],
    allergens: ["gluten", "lait", "oeufs", "fruits-coque"],
    imageSlug: "cafe-gourmand.png",
  },
];
