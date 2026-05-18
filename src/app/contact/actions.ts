"use server";

import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { contactSchema, SUBJECT_LABELS, type ContactInput } from "@/lib/schemas/contact";
import { siteConfig } from "@/lib/site-config";
import ContactNotificationEmail from "@/emails/contact-notification";
import ContactReceiptEmail from "@/emails/contact-receipt";

export type ContactResult =
  | { ok: true }
  | { ok: false; error?: string; fieldErrors?: Partial<Record<keyof ContactInput, string>> };

export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const raw = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    subject: String(formData.get("subject") ?? "autre"),
    partySize: String(formData.get("partySize") ?? "").trim(),
    preferredDate: String(formData.get("preferredDate") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? ""),
    consent: formData.get("consent") === "true" || formData.get("consent") === "on",
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactInput | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, fieldErrors };
  }

  // Honeypot rempli → on fait semblant que c'est passé, sans envoyer
  if (parsed.data.website) {
    return { ok: true };
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    const apiKey = env.RESEND_API_KEY;
    const to = env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;

    if (!apiKey) {
      // En dev sans clé : on log et on retourne ok pour tester le flow
      console.warn("[contact] RESEND_API_KEY manquante — message non envoyé en réel.");
      console.info("[contact] Reçu :", parsed.data);
      return { ok: true };
    }

    const resend = new Resend(apiKey);
    const subjectLabel = SUBJECT_LABELS[parsed.data.subject];
    const fromAddress = `Sushi-Ya Vannes <${siteConfig.contact.email}>`;

    // 1) Notification vers le restaurant
    const { error: notifError } = await resend.emails.send({
      from: fromAddress,
      to: [to],
      replyTo: parsed.data.email,
      subject: `[Site] ${subjectLabel} — ${parsed.data.name}`,
      react: ContactNotificationEmail({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || undefined,
        subject: subjectLabel,
        partySize: parsed.data.partySize || undefined,
        preferredDate: parsed.data.preferredDate || undefined,
        message: parsed.data.message,
      }),
    });

    if (notifError) {
      console.error("[contact] Resend notification error:", notifError);
      return { ok: false, error: "L'envoi a échoué. Réessayez ou écrivez-nous directement." };
    }

    // 2) Accusé de réception au visiteur (best-effort — pas bloquant)
    try {
      await resend.emails.send({
        from: fromAddress,
        to: [parsed.data.email],
        subject: "Votre message a bien été reçu — Sushi-Ya Vannes",
        react: ContactReceiptEmail({
          name: parsed.data.name,
          subject: subjectLabel,
          message: parsed.data.message,
        }),
      });
    } catch (e) {
      console.warn("[contact] Accusé de réception non envoyé :", e);
    }

    return { ok: true };
  } catch (e) {
    console.error("[contact] unexpected error:", e);
    return { ok: false, error: "Une erreur inattendue est survenue. Réessayez plus tard." };
  }
}
