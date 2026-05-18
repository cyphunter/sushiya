/**
 * Aggregator central pour tout le catalogue de plats.
 * Chaque sous-fichier (`makis.ts`, `nigiris.ts`, etc.) exporte sa propre liste typée.
 */

import { routes } from "@/lib/routes";
import type { MenuItem, MenuSectionDef, MenuCategorySlug } from "./types";

import { menusMidi } from "./menus-midi";
import { californiaRolls } from "./california-rolls";
import { makis } from "./makis";
import { nigiris } from "./nigiris";
import { sashimis } from "./sashimis";
import { chirashis } from "./chirashis";
import { menusAssortis } from "./menus-assortis";
import { menusDecouverte } from "./menus-decouverte";
import { entrees } from "./entrees";
import { soupes } from "./soupes";
import { accompagnements } from "./accompagnements";
import { desserts } from "./desserts";

export type { MenuItem, MenuSectionDef, MenuCategorySlug } from "./types";
export { menusMidi } from "./menus-midi";
export { californiaRolls } from "./california-rolls";
export { makis } from "./makis";
export { nigiris } from "./nigiris";
export { sashimis } from "./sashimis";
export { chirashis } from "./chirashis";
export { menusAssortis } from "./menus-assortis";
export { menusDecouverte } from "./menus-decouverte";
export { entrees } from "./entrees";
export { soupes } from "./soupes";
export { accompagnements } from "./accompagnements";
export { desserts } from "./desserts";

/** Liste plate de tous les items de la carte. */
export const allMenuItems: ReadonlyArray<MenuItem> = [
  ...menusMidi,
  ...californiaRolls,
  ...makis,
  ...nigiris,
  ...sashimis,
  ...chirashis,
  ...menusAssortis,
  ...menusDecouverte,
  ...entrees,
  ...soupes,
  ...accompagnements,
  ...desserts,
];

/** Sections de la carte affichées sur le hub `/sushiya-vannes-les-menus/`. */
export const menuSections: ReadonlyArray<MenuSectionDef> = [
  {
    slug: "menu-midi",
    title: "Menus midi",
    subtitle: "16,90 € · du mardi au vendredi",
    pageHref: routes.menu.menusMidi,
    shortBlurb:
      "Sept formules équilibrées à 16,90 € seulement, servies du mardi au vendredi midi.",
    heroImageSlug: "menu-midi-assortiment",
  },
  {
    slug: "california",
    title: "California rolls",
    subtitle: "18 recettes maison",
    pageHref: routes.menu.californiaRolls,
    shortBlurb:
      "De la classique Philadelphia à la création Gourmandise au chèvre-miel, 18 rolls signature.",
    heroImageSlug: "california-philadelphia",
  },
  {
    slug: "maki",
    title: "Makis, Nigiris, Sashimis, Chirashis",
    subtitle: "Le cœur de la tradition",
    pageHref: routes.menu.sushis,
    shortBlurb:
      "L'art du sushi dans sa forme la plus pure : makis main, nigiris au millimètre, sashimis épurés, chirashis généreux.",
    heroImageSlug: "nigiri-wagyu",
  },
  {
    slug: "menu-assorti",
    title: "Menus assortis",
    subtitle: "Composés pour vous",
    pageHref: routes.menu.menusAssortis,
    shortBlurb:
      "Huit menus individuels (du Coeur de Sushi à l'Omakase) et nos menus Découverte 2, 3 ou 4 personnes.",
    heroImageSlug: "menu-omakase",
  },
  {
    slug: "entree",
    title: "Entrées, accompagnements & desserts",
    subtitle: "Tartare truffe, mochis, café gourmand",
    pageHref: routes.menu.entreesDesserts,
    shortBlurb:
      "Tartare de thon à la truffe, soupes miso, salades, mochis traditionnels et notre café gourmand franco-japonais.",
    heroImageSlug: "tartare-thon-truffe",
  },
];

/** Helper : récupère un item par slug. */
export function getMenuItem(slug: string): MenuItem | undefined {
  return allMenuItems.find((item) => item.slug === slug);
}

/** Helper : items filtrés par catégorie. */
export function getMenuItemsByCategory(
  category: MenuCategorySlug,
): ReadonlyArray<MenuItem> {
  return allMenuItems.filter((item) => item.category === category);
}

/** Helper : items signature pour la home. */
export function getSignatureItems(): ReadonlyArray<MenuItem> {
  return allMenuItems.filter((item) => item.flags?.includes("signature"));
}
