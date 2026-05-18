import type { MenuItem } from "./types";

/** Accompagnements (riz). */
export const accompagnements: ReadonlyArray<MenuItem> = [
  {
    slug: "riz-vinaigre",
    name: "Bol de riz vinaigré",
    priceEur: 3.2,
    ingredients: ["Riz bio Camargue", "Vinaigre de riz"],
    category: "accompagnement",
    flags: ["vegetarien"],
    allergens: ["soja", "sulfites"],
  },
  {
    slug: "riz-kabayaki",
    name: "Bol de riz kabayaki",
    priceEur: 4.2,
    ingredients: ["Riz bio Camargue", "Sauce kabayaki sucrée maison"],
    category: "accompagnement",
    flags: ["vegetarien"],
    allergens: ["soja", "sulfites", "gluten"],
  },
];
