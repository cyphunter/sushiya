import type { AllergenCode } from "@/lib/allergenes";

export type MenuCategorySlug =
  | "menu-midi"
  | "california"
  | "maki"
  | "nigiri"
  | "sashimi"
  | "chirashi"
  | "menu-assorti"
  | "menu-decouverte"
  | "entree"
  | "soupe"
  | "accompagnement"
  | "dessert";

export type MenuFlag =
  | "vegetarien"
  | "epice"
  | "cru"
  | "fume"
  | "signature"
  | "chef"
  | "aburi";

export type MenuItem = {
  /** Slug global unique (kebab-case). */
  slug: string;
  /** Nom affiché. */
  name: string;
  /** Prix en euros (nombre — formaté à l'affichage). */
  priceEur: number;
  /** Description optionnelle en une phrase. */
  description?: string;
  /** Ingrédients affichés sous le nom. */
  ingredients: string[];
  category: MenuCategorySlug;
  /** Nombre de pièces pour les makis/californias/etc. */
  pieces?: number;
  flags?: ReadonlyArray<MenuFlag>;
  allergens?: ReadonlyArray<AllergenCode>;
  /** Slug de l'image dans public/images/menu/<imageSlug>.webp (sans extension). */
  imageSlug?: string;
};

export type MenuSectionDef = {
  slug: MenuCategorySlug;
  title: string;
  subtitle?: string;
  pageHref: string;
  shortBlurb: string;
  heroImageSlug: string;
};
