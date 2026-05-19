/**
 * Les 4 étapes du rituel sushi-ya — affichées en scroll-pin GSAP sur la home.
 * Chaque étape : numéro, titre, kanji, texte court, image.
 */

export type RituelStep = {
  number: string;
  kanji: string;
  title: string;
  body: string;
  imageSlug: string;
};

export const leRituel: ReadonlyArray<RituelStep> = [
  {
    number: "01",
    kanji: "選",
    title: "Sélection",
    body: "Chaque matin, le chef sélectionne le poisson au meilleur de sa fraîcheur. Saumon écossais Label Rouge, thon albacore, arrivages bretons : la qualité prime sur la quantité.",
    imageSlug: "rituel-selection.jpg",
  },
  {
    number: "02",
    kanji: "切",
    title: "Découpe",
    body: "Le couteau yanagiba glisse sur la chair en un seul mouvement. La découpe respecte les fibres : c'est elle qui révèle la texture du poisson en bouche.",
    imageSlug: "rituel-decoupe.jpg",
  },
  {
    number: "03",
    kanji: "盛",
    title: "Dressage",
    body: "Riz vinaigré façonné à la main, nigiri formé au millimètre, maki serré juste ce qu'il faut. L'esthétique du plat est aussi importante que la précision technique.",
    imageSlug: "rituel-dressage.png",
  },
  {
    number: "04",
    kanji: "味",
    title: "Dégustation",
    body: "Servi à la minute, accompagné de sauce soja, wasabi et gingembre pour nettoyer le palais. Chaque bouchée est pensée pour révéler la totalité de la saveur du poisson.",
    imageSlug: "rituel-degustation.png",
  },
];
