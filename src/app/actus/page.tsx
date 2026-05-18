import type { Metadata } from "next";
import { Instagram, Facebook } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { SectionHeading } from "@/components/public/section-heading";
import { CtaReservation } from "@/components/public/cta-reservation";
import { KanjiWatermark } from "@/components/public/kanji-watermark";

export const metadata: Metadata = buildMetadata({
  title: "Actualités — Sushi-Ya Vannes",
  description:
    "Suivez les actualités de Sushi-Ya à Vannes : nouvelles créations, plats du jour, événements privés. Retrouvez-nous aussi sur Instagram et Facebook.",
  path: routes.actus,
});

export default function ActusPage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="新" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Actualités", href: routes.actus },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Sur Instagram et Facebook"
              title={
                <>
                  Les nouveautés <span className="ital-mark-gold italic">en direct</span>.
                </>
              }
              intro="Nos arrivages exceptionnels, nos créations éphémères, les plats du jour : nous publions tout ça en temps réel sur nos réseaux. Pour ne rien rater, suivez-nous."
            />
          </div>
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-3xl bg-deeper p-8 text-paper ring-1 ring-paper/10 transition-all hover:bg-brand hover:ring-brand md:p-10"
          >
            <Instagram className="h-10 w-10 text-gold transition-colors group-hover:text-paper" strokeWidth={1.5} />
            <h3 className="font-display text-3xl">@sushiya_vannes</h3>
            <p className="text-sm leading-relaxed text-paper/80">
              Photos de nos plats, coulisses du chef, nouveautés. Le plus complet pour suivre la maison au quotidien.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors group-hover:text-paper">
              Suivre sur Instagram →
            </span>
          </a>

          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-3xl bg-paper-warm p-8 ring-1 ring-ink/10 transition-all hover:-translate-y-1 hover:shadow-lg md:p-10"
          >
            <Facebook className="h-10 w-10 text-brand" strokeWidth={1.5} />
            <h3 className="font-display text-3xl text-ink">sushiya.vannes</h3>
            <p className="text-sm leading-relaxed text-muted">
              Événements, modifications d&apos;horaires, annonces. Le meilleur endroit pour les informations
              pratiques et les news ponctuelles.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand">
              Suivre sur Facebook →
            </span>
          </a>
        </div>

        <div className="mt-16 rounded-3xl border border-dashed border-ink/15 bg-paper p-8 text-center md:p-12">
          <p className="font-display text-2xl text-ink">Rien d&apos;autre en ce moment.</p>
          <p className="mt-4 text-sm text-muted">
            Cette page sera enrichie au fil des saisons : créations éphémères, événements, partenariats.
            En attendant, retrouvez nos actualités quotidiennes sur Instagram et Facebook.
          </p>
        </div>
      </section>

      <CtaReservation />
    </main>
  );
}
