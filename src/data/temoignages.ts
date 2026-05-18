/**
 * Avis clients — à remplacer par de vrais témoignages Google Maps
 * avec accord écrit explicite de leurs auteurs avant publication.
 */

export type Temoignage = {
  prenom: string;
  initiale: string;
  ville: string;
  occasion?: string;
  citation: string;
  note?: number; // 1–5
};

export const temoignages: ReadonlyArray<Temoignage> = [
  {
    prenom: "Marie",
    initiale: "C.",
    ville: "Vannes",
    occasion: "Menu Omakase",
    note: 5,
    citation:
      "La précision du chef, la fraîcheur du poisson, l'attention portée à chaque détail : on a passé une soirée exceptionnelle. Le café gourmand est une révélation.",
  },
  {
    prenom: "Julien",
    initiale: "B.",
    ville: "Arradon",
    occasion: "Déjeuner d'affaires",
    note: 5,
    citation:
      "Menu midi à 16,90 €, qualité au rendez-vous : on est repartis bluffés. La table parfaite pour un déjeuner d'affaires à Vannes.",
  },
  {
    prenom: "Camille",
    initiale: "L.",
    ville: "Sarzeau",
    occasion: "Tartare de thon truffe",
    note: 5,
    citation:
      "Le tartare de thon à l'huile de truffe vaut le détour à lui seul. La salle est calme, le service prévenant. Notre adresse japonaise dans le golfe.",
  },
  {
    prenom: "Thomas",
    initiale: "R.",
    ville: "Auray",
    occasion: "Chirashi traditionnel",
    note: 5,
    citation:
      "Chirashi traditionnel généreux, riz vinaigré parfait, et cette signature huîtres du golfe aux saveurs japonaises : une vraie singularité bretonne.",
  },
];
