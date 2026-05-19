/**
 * Les matières premières emblématiques mises en avant sur la page Le Restaurant.
 * Chaque entrée doit pouvoir tenir dans une carte 2×2 ou 4 colonnes.
 */

export type MatierePremiere = {
  slug: string;
  name: string;
  origin: string;
  description: string;
  imageSlug: string;
};

export const matieresPremieres: ReadonlyArray<MatierePremiere> = [
  {
    slug: "saumon-ecossais",
    name: "Saumon écossais Label Rouge",
    origin: "Écosse · Label Rouge",
    description:
      "Élevé en haute mer dans les eaux froides des Highlands, le saumon Label Rouge offre une chair ferme, grasse à point et une saveur incomparable.",
    imageSlug: "saumon-ecossais.jpg",
  },
  {
    slug: "thon-albacore",
    name: "Thon albacore",
    origin: "Atlantique · ligne",
    description:
      "Un thon noble à la chair rosée, pêché à la ligne pour préserver sa texture. Idéal en nigiri, sashimi ou tartare à l'huile de truffe.",
    imageSlug: "thon-albacore.jpg",
  },
  {
    slug: "riz-camargue",
    name: "Riz bio japonica",
    origin: "Camargue · bio · français",
    description:
      "Variété japonaise cultivée en agriculture biologique en Camargue, vinaigré chaque jour selon la méthode traditionnelle edomae.",
    imageSlug: "riz-camargue.png",
  },
  {
    slug: "algue-nori",
    name: "Algues Nori bretonnes",
    origin: "Bretagne · récolte locale",
    description:
      "Récoltées sur le littoral breton, séchées et grillées : nos algues Nori conjuguent tradition japonaise et terroir local.",
    imageSlug: "algue-nori-bretagne.png",
  },
];

/** Spécialités franco-japonaises de la maison. */
export type Specialite = {
  slug: string;
  name: string;
  description: string;
  imageSlug: string;
};

export const specialites: ReadonlyArray<Specialite> = [
  {
    slug: "huitres-golfe",
    name: "Huîtres du golfe du Morbihan",
    description:
      "Nos huîtres locales revisitées aux saveurs japonaises : ponzu, yuzu, gingembre frais. Une rencontre du terroir breton et de la finesse nippone, selon arrivage.",
    imageSlug: "huitres-japonaises.jpg",
  },
  {
    slug: "cafe-gourmand",
    name: "Café gourmand franco-japonais",
    description:
      "Notre signature : un classique de la bistronomie française décliné aux parfums asiatiques — mini-mochis, mignardise yuzu, mignardise matcha et café espresso.",
    imageSlug: "cafe-gourmand.png",
  },
];
