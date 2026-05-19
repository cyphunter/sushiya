import type { MenuItem } from "./types";

/** Entrées et tartares. */
export const entrees: ReadonlyArray<MenuItem> = [
  {
    slug: "tataki-crevettes",
    name: "Tataki de crevettes",
    priceEur: 9.6,
    ingredients: ["Crevettes saisies à la torche", "Sauce maison"],
    category: "entree",
    allergens: ["crustaces", "soja"],
  },
  {
    slug: "salade-wakame",
    name: "Salade wakamé",
    priceEur: 6.5,
    ingredients: ["Algues wakamé", "Sésames", "Vinaigre de riz"],
    category: "entree",
    flags: ["vegetarien"],
    allergens: ["sesame", "soja"],
  },
  {
    slug: "salade-calamars",
    name: "Salade de calamars",
    priceEur: 7.6,
    ingredients: ["Calamars", "Légumes croquants", "Vinaigrette japonaise"],
    category: "entree",
    allergens: ["mollusques", "soja"],
  },
  {
    slug: "salade-chou",
    name: "Salade de chou",
    priceEur: 5.2,
    ingredients: ["Chou émincé", "Sauce ponzu"],
    category: "entree",
    flags: ["vegetarien"],
    allergens: ["soja"],
  },
  {
    slug: "salade-concombre",
    name: "Salade de concombre",
    priceEur: 4.9,
    ingredients: ["Concombre", "Sésames", "Vinaigre de riz"],
    category: "entree",
    flags: ["vegetarien"],
    allergens: ["sesame", "soja"],
  },
  {
    slug: "tartare-thon-truffe",
    name: "Tartare de thon à l'huile de truffe",
    priceEur: 14.0,
    description: "Notre tartare signature, le luxe en bouche.",
    ingredients: ["Thon albacore", "Huile de truffe", "Échalote", "Ciboulette"],
    category: "entree",
    flags: ["signature", "cru"],
    allergens: ["poisson", "soja"],
    imageSlug: "tartare-thon-truffe.jpg",
  },
];
