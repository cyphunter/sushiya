/**
 * Source unique de vérité pour les informations du site SUSHI-YA Vannes.
 *
 * Pour modifier coordonnées, slogans, navigation, mentions légales :
 *   éditer ce fichier (toutes les valeurs entre guillemets sont modifiables).
 *
 * NE PAS toucher aux noms de clés ni à la structure — seulement les valeurs.
 */

export const siteConfig = {
  // ─── Identité ─────────────────────────────────────────────────────
  name: "Sushi-Ya",
  shortName: "Sushi-Ya",
  fullName: "Sushi-Ya Vannes",
  legalName: "SAS VET&COOK",
  baseline: "Sushi traditionnel · Création contemporaine · Vannes",
  description:
    "Sushi-Ya Vannes — restaurant japonais au cœur de Vannes : sushis traditionnels et créations contemporaines, produits Label Rouge, huîtres du golfe du Morbihan revisitées.",

  // ─── URL & locale ────────────────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sushiya-56.fr",
  locale: "fr-FR",
  language: "fr",

  // ─── Contact & adresse restaurant ────────────────────────────────
  contact: {
    phone: "+33983290315",
    phoneDisplay: "09 83 29 03 15",
    email: "contact@sushiya-56.fr",
    address: "13 rue Thomas de Closmadeuc",
    postalCode: "56000",
    city: "Vannes",
    region: "Bretagne",
    country: "FR",
    countryName: "France",
    // Coordonnées GPS du 13 rue Thomas de Closmadeuc, Vannes (à confirmer avec Google Maps)
    geo: { latitude: 47.6571, longitude: -2.7593 },
    openingHours: ["Tu-Sa 12:00-13:30", "Tu-Sa 19:00-21:00"],
    openingHoursLabel:
      "Mardi — Samedi · 12h00 – 13h30 · 19h00 – 21h00\nFermé dimanche et lundi",
    openingHoursStructured: [
      { day: "Lundi", hours: "Fermé" },
      { day: "Mardi", hours: "12h00 – 13h30 · 19h00 – 21h00" },
      { day: "Mercredi", hours: "12h00 – 13h30 · 19h00 – 21h00" },
      { day: "Jeudi", hours: "12h00 – 13h30 · 19h00 – 21h00" },
      { day: "Vendredi", hours: "12h00 – 13h30 · 19h00 – 21h00" },
      { day: "Samedi", hours: "12h00 – 13h30 · 19h00 – 21h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
    priceRange: "€€€",
    servesCuisine: ["Japonaise", "Sushi", "Bistronomie franco-japonaise"],
    mapUrl: "https://maps.app.goo.gl/zk9eHJ8Sp1JeWQqp9",
  },

  // ─── Réseaux sociaux ─────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/sushiya_vannes/",
    facebook: "https://www.facebook.com/sushiya.vannes",
    linkedin: "",
    twitter: "",
    youtube: "",
    tripadvisor: "",
    googleBusiness: "",
  },

  // ─── Mentions légales (à compléter avec le client) ───────────────
  legal: {
    siret: "849 928 916 00022",
    legalForm: "SAS",
    capital: "À renseigner",
    rcs: "RCS Vannes",
    tvaIntra: "À renseigner",
    publisher: "Sophie ROUSSELLE",
    publisherRole: "Directrice de la publication",
    host: {
      name: "Cloudflare Inc.",
      address: "101 Townsend Street, San Francisco, CA 94107, USA",
      contact: "https://www.cloudflare.com/contact/",
    },
    dpoEmail: "contact@sushiya-56.fr",
  },

  // ─── Navigation principale (URLs WordPress legacy conservées) ────
  navigation: [
    { label: "Notre carte", href: "/sushiya-vannes-les-menus/" },
    {
      label: "Le restaurant",
      href: "/sushi-le-totem-de-la-cuisine-japonaise-se-decline-a-vannes-chez-sushiya-2/",
    },
    { label: "Infos pratiques", href: "/infos-pratiques/" },
    { label: "Actus", href: "/actus/" },
    { label: "Contact", href: "/contact/" },
  ],

  // ─── CTAs récurrents ─────────────────────────────────────────────
  ctas: {
    reserve: { label: "Réserver une table", href: "tel:+33983290315" },
    discoverMenu: { label: "Découvrir la carte", href: "/sushiya-vannes-les-menus/" },
    takeaway: { label: "Commander à emporter", href: "tel:+33983290315" },
    contact: { label: "Nous écrire", href: "/contact/" },
  },

  // ─── Navigation footer (légal + utilitaire) ──────────────────────
  footerNavigation: [
    { label: "Mentions légales", href: "/mentions-legales/" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
    { label: "Conditions générales d'utilisation", href: "/cgu/" },
    { label: "Mentions allergènes (INCO)", href: "/mentions-allergenes/" },
    { label: "Plan du site", href: "/plan-du-site/" },
  ],

  // ─── Points forts affichés en home ──────────────────────────────
  highlights: [
    {
      icon: "Fish",
      title: "Produits Label Rouge",
      body: "Saumon écossais Label Rouge, thon albacore, riz bio Camargue, algues nori bretonnes.",
    },
    {
      icon: "Anchor",
      title: "Huîtres du Morbihan",
      body: "Spécialité maison : huîtres du golfe du Morbihan revisitées aux saveurs japonaises.",
    },
    {
      icon: "ChefHat",
      title: "Bistronomie franco-japonaise",
      body: "Café gourmand inédit, fusion d'un classique français et de l'art des mochis japonais.",
    },
    {
      icon: "Clock",
      title: "Réservation conseillée",
      body: "Du mardi au samedi · midi 12h–13h30 · soir 19h–21h. Sur place ou à emporter.",
    },
  ],

  // ─── Philosophie en 3 piliers (manifest home + page Le Restaurant) ─
  philosophie: [
    {
      number: "01",
      title: "Fraîcheur",
      body: "Produits sélectionnés chaque jour. Découpe au couteau et dressage à la commande.",
    },
    {
      number: "02",
      title: "Tradition",
      body: "Riz vinaigré façonné selon la méthode edomae, makis serrés à la main, nigiris formés au millimètre.",
    },
    {
      number: "03",
      title: "Création",
      body: "Notre signature : marier le terroir breton (huîtres du golfe, légumes locaux) au répertoire japonais.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Construit une URL absolue canonique à partir d'un chemin.
 * Préserve le trailing slash (URLs WordPress).
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
