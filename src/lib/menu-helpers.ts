/**
 * Helpers d'affichage et de manipulation pour le catalogue de plats.
 */

/** Formate un prix EUR avec virgule française et symbole €. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    // Remplace l'espace insécable mince par un espace insécable classique pour homogénéiser
    .replace(/ /g, " ");
}

/** Slugify simple (texte → kebab-case, sans accents). */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
