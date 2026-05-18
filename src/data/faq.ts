export type FaqItem = { question: string; reponse: string };

/** FAQ affichée sur /infos-pratiques/ + injectée en JSON-LD FAQPage. */
export const faqInfosPratiques: ReadonlyArray<FaqItem> = [
  {
    question: "Faut-il réserver pour venir manger sur place ?",
    reponse:
      "La réservation est fortement conseillée, particulièrement le soir et le week-end : la salle est intimiste. Appelez-nous au 09 83 29 03 15 pour réserver votre table.",
  },
  {
    question: "Comment commander à emporter ?",
    reponse:
      "Les commandes à emporter se font exclusivement par téléphone au 09 83 29 03 15. Tous nos plats étant préparés à la commande, nous vous donnerons une heure de retrait précise lors de l'appel.",
  },
  {
    question: "Livrez-vous à domicile ?",
    reponse:
      "Nous n'effectuons pas de livraison directe afin de garantir la fraîcheur de nos sushis, qui doivent être consommés rapidement après préparation. Vous pouvez en revanche passer commande à emporter.",
  },
  {
    question: "Proposez-vous des options végétariennes ?",
    reponse:
      "Oui. Notre carte compte plusieurs makis végétariens (avocat, chèvre-menthe-miel, concombre fromage), des california sans poisson (Fleur de sushi, Végétarien, Chèvre, Avocat fromage) et un menu Végétarien complet à 26,30 €.",
  },
  {
    question: "Comment gérer une allergie ou un régime particulier ?",
    reponse:
      "Notre page « Mentions allergènes » détaille les 14 allergènes majeurs présents dans nos plats. Pour toute demande spécifique (gluten, lactose, fruits de mer), précisez-le à la réservation : nous adaptons quand c'est possible et vous conseillons une alternative si nécessaire.",
  },
  {
    question: "Pouvez-vous privatiser le restaurant pour un événement ?",
    reponse:
      "Oui, sur réservation. Pour anniversaires, repas d'entreprise ou événement familial, contactez-nous via le formulaire ou par téléphone : nous étudions chaque demande pour proposer une formule sur mesure.",
  },
  {
    question: "Quels sont vos jours et horaires d'ouverture ?",
    reponse:
      "Nous sommes ouverts du mardi au samedi, midi de 12h00 à 13h30 et soir de 19h00 à 21h00. Fermé dimanche et lundi.",
  },
  {
    question: "Acceptez-vous les tickets restaurant ?",
    reponse:
      "Nous acceptons les principales cartes bancaires et les espèces. Pour les tickets restaurant et chèques cadeaux, demandez-nous lors de votre réservation.",
  },
];
