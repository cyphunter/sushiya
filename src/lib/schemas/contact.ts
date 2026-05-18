import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(120, "Nom trop long"),
  email: z.string().email("Email invalide").max(254),
  phone: z
    .string()
    .max(20)
    .regex(/^[\d\s+()-]*$/, "Numéro invalide")
    .optional()
    .or(z.literal("")),
  subject: z.enum(
    ["reservation", "emporter", "allergies", "privatisation", "evenement", "autre"],
    {
      errorMap: () => ({ message: "Sujet invalide" }),
    },
  ),
  // Champs spécifiques restauration (facultatifs)
  partySize: z.string().regex(/^\d{0,3}$/, "Nombre invalide").optional().or(z.literal("")),
  preferredDate: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(20, "Message trop court (20 caractères min)").max(5000),
  // Honeypot anti-spam (champ caché, doit rester vide)
  website: z.string().max(0).optional().or(z.literal("")),
  // Consentement RGPD obligatoire
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const SUBJECT_LABELS: Record<ContactInput["subject"], string> = {
  reservation: "Réservation de table",
  emporter: "Commande à emporter",
  allergies: "Allergies ou régime alimentaire",
  privatisation: "Privatisation du restaurant",
  evenement: "Événement ou groupe",
  autre: "Autre demande",
};
