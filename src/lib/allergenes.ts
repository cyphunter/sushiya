/**
 * Liste officielle des 14 allergènes majeurs déclarables selon
 * le règlement INCO 1169/2011 (annexe II) et le décret 2015-447.
 *
 * Affichage obligatoire en restauration commerciale (sur place ou à emporter).
 */

export type AllergenCode =
  | "gluten"
  | "crustaces"
  | "oeufs"
  | "poisson"
  | "arachides"
  | "soja"
  | "lait"
  | "fruits-coque"
  | "celeri"
  | "moutarde"
  | "sesame"
  | "sulfites"
  | "lupin"
  | "mollusques";

export type Allergen = {
  code: AllergenCode;
  label: string;
  description: string;
};

export const ALLERGENES: ReadonlyArray<Allergen> = [
  { code: "gluten", label: "Gluten", description: "Blé, seigle, orge, avoine, épeautre, kamut et produits dérivés." },
  { code: "crustaces", label: "Crustacés", description: "Crevettes, langoustines, crabes et produits à base de crustacés." },
  { code: "oeufs", label: "Œufs", description: "Œufs et produits à base d'œufs." },
  { code: "poisson", label: "Poisson", description: "Poisson et produits à base de poisson (sauf gélatine et isinglass)." },
  { code: "arachides", label: "Arachides", description: "Arachides et produits à base d'arachides." },
  { code: "soja", label: "Soja", description: "Soja et produits à base de soja (sauce soja, tofu, etc.)." },
  { code: "lait", label: "Lait", description: "Lait et produits à base de lait (lactose, cream cheese, etc.)." },
  { code: "fruits-coque", label: "Fruits à coque", description: "Amandes, noisettes, noix, noix de cajou, pécan, du Brésil, pistaches, macadamia." },
  { code: "celeri", label: "Céleri", description: "Céleri et produits à base de céleri." },
  { code: "moutarde", label: "Moutarde", description: "Moutarde et produits à base de moutarde." },
  { code: "sesame", label: "Graines de sésame", description: "Graines de sésame et produits à base de graines de sésame." },
  { code: "sulfites", label: "Sulfites", description: "Anhydride sulfureux et sulfites en concentration > 10 mg/kg ou 10 mg/litre." },
  { code: "lupin", label: "Lupin", description: "Lupin et produits à base de lupin." },
  { code: "mollusques", label: "Mollusques", description: "Mollusques (huîtres, moules, calamars, poulpes…) et produits dérivés." },
];

export function getAllergen(code: AllergenCode): Allergen | undefined {
  return ALLERGENES.find((a) => a.code === code);
}
