import Link from "next/link";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { KanjiWatermark } from "./kanji-watermark";

/**
 * Bandeau d'appel à réservation en pleine largeur, noir profond.
 * Téléphone géant cliquable, horaires structurés, bouton secondaire vers /contact.
 */
export function CtaReservation() {
  return (
    <section
      aria-labelledby="cta-reservation-title"
      className="relative isolate overflow-hidden bg-deeper text-paper noise-overlay"
    >
      <KanjiWatermark text="美味" position="top-left" size="xl" tone="gold" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="container-main relative py-20 md:py-28">
        <p className="eyebrow !text-gold">Réserver une table</p>
        <h2
          id="cta-reservation-title"
          className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.98] text-paper"
        >
          Pour un repas qui mérite{" "}
          <span className="ital-mark-gold italic">le détour</span>, appelez-nous.
        </h2>

        <div className="mt-10 flex flex-wrap items-start gap-12 md:gap-16">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="group inline-flex flex-col gap-2 text-paper transition-colors hover:text-gold"
            aria-label={`Appeler Sushi-Ya au ${siteConfig.contact.phoneDisplay}`}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/90">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Réservation et à emporter
            </span>
            <span className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tabular-nums">
              {siteConfig.contact.phoneDisplay}
            </span>
          </a>

          <div className="flex flex-col gap-2 text-paper/85">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/90">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Horaires
            </span>
            <p className="whitespace-pre-line text-base leading-relaxed">
              {siteConfig.contact.openingHoursLabel}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href={siteConfig.ctas.contact.href}
            className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-7 py-3.5 text-sm font-medium text-paper ring-1 ring-paper/30 backdrop-blur-sm transition-all hover:bg-paper hover:text-ink"
          >
            {siteConfig.ctas.contact.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={siteConfig.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-paper/70 link-elegant hover:text-gold"
          >
            13 rue Thomas de Closmadeuc, 56000 Vannes
          </a>
        </div>
      </div>
    </section>
  );
}
