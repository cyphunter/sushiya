/**
 * Mapping centralisé des URLs publiques de Sushi-Ya.
 *
 * Les URLs WordPress historiques sont conservées à l'identique pour préserver
 * le jus SEO. Ce fichier isole les chemins "moches" dans un seul endroit ;
 * partout ailleurs dans le code on utilise des slugs courts.
 */

export const routes = {
  home: "/",

  // Hub carte et 5 sous-pages
  menu: {
    hub: "/sushiya-vannes-les-menus/",
    menusMidi: "/les-menus-midi-formules-simples-sur-place-a-emporter/",
    californiaRolls: "/les-california-rolls-de-suhiya/",
    sushis: "/makis-nigiris-chirashis-sashimis-sushiya-vannes-sushis/",
    menusAssortis: "/menus-sushiya-assortiments/",
    entreesDesserts: "/entrees-accompagnements-desserts-sushiya-vannes/",
  },

  // Pages éditoriales
  restaurant:
    "/sushi-le-totem-de-la-cuisine-japonaise-se-decline-a-vannes-chez-sushiya-2/",
  infosPratiques: "/infos-pratiques/",
  actus: "/actus/",
  contact: "/contact/",
  planDuSite: "/plan-du-site/",

  // Pages légales
  mentionsLegales: "/mentions-legales/",
  confidentialite: "/politique-de-confidentialite/",
  cgu: "/cgu/",
  mentionsAllergenes: "/mentions-allergenes/",
} as const;

/** Liste plate de toutes les routes publiques (pour sitemap + plan du site). */
export const allPublicRoutes: ReadonlyArray<{ href: string; label: string; section: string }> = [
  { href: routes.home, label: "Accueil", section: "Principal" },
  { href: routes.menu.hub, label: "Notre carte", section: "La carte" },
  { href: routes.menu.menusMidi, label: "Menus midi", section: "La carte" },
  { href: routes.menu.californiaRolls, label: "California rolls", section: "La carte" },
  { href: routes.menu.sushis, label: "Makis, nigiris, sashimis, chirashis", section: "La carte" },
  { href: routes.menu.menusAssortis, label: "Menus assortis", section: "La carte" },
  { href: routes.menu.entreesDesserts, label: "Entrées, accompagnements, desserts", section: "La carte" },
  { href: routes.restaurant, label: "Le restaurant", section: "Principal" },
  { href: routes.infosPratiques, label: "Infos pratiques", section: "Principal" },
  { href: routes.actus, label: "Actualités", section: "Principal" },
  { href: routes.contact, label: "Contact", section: "Principal" },
  { href: routes.mentionsLegales, label: "Mentions légales", section: "Légal" },
  { href: routes.confidentialite, label: "Politique de confidentialité", section: "Légal" },
  { href: routes.cgu, label: "Conditions générales d'utilisation", section: "Légal" },
  { href: routes.mentionsAllergenes, label: "Mentions allergènes", section: "Légal" },
];

/** Redirections 301 depuis anciennes URLs vers nouvelles. */
export const LEGACY_REDIRECTS: ReadonlyArray<readonly [from: string, to: string]> = [
  ["/accueil", routes.home],
  ["/accueil/", routes.home],
  ["/tous-les-menus-commander", routes.menu.hub],
  ["/tous-les-menus-commander/", routes.menu.hub],
];
