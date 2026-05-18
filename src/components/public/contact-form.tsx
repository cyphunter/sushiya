"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SUBJECT_LABELS } from "@/lib/schemas/contact";
import { sendContactMessage, type ContactResult } from "@/app/contact/actions";
import { siteConfig } from "@/lib/site-config";

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactResult | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(formData: FormData) {
    setErrors({});
    setResult(null);
    startTransition(async () => {
      const res = await sendContactMessage(formData);
      setResult(res);
      if (!res.ok && res.fieldErrors) setErrors(res.fieldErrors);
    });
  }

  if (result?.ok) {
    return (
      <div
        role="status"
        className="rounded-2xl bg-accent/10 p-8 ring-1 ring-accent/30"
      >
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl text-ink">Message bien reçu</h2>
        <p className="mt-2 text-muted">
          Merci ! Nous vous répondons sous 48 heures ouvrées. Pour une réservation urgente,
          composez directement le {siteConfig.contact.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-5" noValidate>
      {result?.ok === false && !result.fieldErrors ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md bg-error/10 p-4 text-sm text-error ring-1 ring-error/30"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{result.error ?? "Une erreur est survenue. Veuillez réessayer."}</p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Nom et prénom *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2"
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2"
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="phone">Téléphone (facultatif)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-2"
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="subject">Sujet *</Label>
          <Select
            id="subject"
            name="subject"
            required
            defaultValue="reservation"
            aria-invalid={Boolean(errors.subject)}
            className="mt-2"
          >
            {Object.entries(SUBJECT_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="partySize">Nombre de personnes (si réservation)</Label>
          <Input
            id="partySize"
            name="partySize"
            type="number"
            min={1}
            max={20}
            inputMode="numeric"
            placeholder="2"
            aria-invalid={Boolean(errors.partySize)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="preferredDate">Date / créneau souhaité</Label>
          <Input
            id="preferredDate"
            name="preferredDate"
            type="text"
            placeholder="Ex : samedi 21 juin, 20h"
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Votre message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2"
          placeholder="Allergies à signaler, demande spécifique, occasion particulière… plus c'est précis, mieux c'est."
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — caché aux humains, piège les bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-paper-warm p-4 ring-1 ring-ink/10">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          value="true"
          required
          className="mt-1 h-4 w-4 rounded border-ink/30 text-brand focus-visible:ring-brand"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <Label htmlFor="consent" className="text-sm font-normal text-muted">
          J&apos;accepte que mes données soient utilisées pour me recontacter,
          conformément à la{" "}
          <a href="/politique-de-confidentialite/" className="text-brand link-elegant">
            politique de confidentialité
          </a>
          . *
        </Label>
      </div>
      {errors.consent ? (
        <p id="consent-error" role="alert" className="mt-1.5 text-xs text-error">
          {errors.consent}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">
          Pour une réservation immédiate, appelez le {siteConfig.contact.phoneDisplay}.
        </p>
        <Button type="submit" disabled={isPending} size="lg">
          {isPending ? "Envoi…" : "Envoyer"}
          {!isPending ? <Send className="h-4 w-4" aria-hidden="true" /> : null}
        </Button>
      </div>
    </form>
  );
}
