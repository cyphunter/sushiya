import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { menuSections } from "@/data/menu";
import { SectionHeading } from "@/components/public/section-heading";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { CtaReservation } from "@/components/public/cta-reservation";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Notre carte — sushis, makis, menus à Vannes",
  description:
    "Découvrez la carte complète de Sushi-Ya à Vannes : 7 menus midi à 16,90 €, 18 california rolls, makis, nigiris, sashimis, chirashis, menus assortis et café gourmand franco-japonais.",
  path: routes.menu.hub,
});

export default function HubCartePage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="美味" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-20 md:py-28">
          <Breadcrumb tone="paper" steps={[{ label: "Accueil", href: "/" }, { label: "Notre carte", href: routes.menu.hub }]} />
          <div className="mt-8">
            <SectionHeading
              tone="paper"
              eyebrow="La carte"
              title={
                <>
                  Tout ce qu&apos;il y a{" "}
                  <span className="ital-mark-gold italic">à savourer.</span>
                </>
              }
              intro="Cinq univers à explorer : les menus midi équilibrés, l'art du california, le cœur traditionnel maki-nigiri-sashimi-chirashi, nos menus assortis, et nos entrées-desserts signature."
            />
          </div>
        </div>
      </section>

      <section className="container-main py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {menuSections.map((section, i) => (
            <Reveal key={section.slug} delay={i * 0.08} className="h-full">
              <Link
                href={section.pageHref}
                className="group relative flex h-full flex-col overflow-hidden border-2 border-ink/15 bg-paper transition-all duration-500 hover:border-brand hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-deeper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/menu/${section.heroImageSlug}.webp`}
                    alt=""
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                    width={1200}
                    height={750}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  {section.subtitle ? (
                    <p className="eyebrow">{section.subtitle}</p>
                  ) : null}
                  <h2 className="mt-3 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {section.shortBlurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                    Voir cette section
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-main pb-16 md:pb-20">
        <div className="border-2 border-dashed border-brand/50 bg-brand/[0.06] p-6 md:p-8">
          <header className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h3 className="font-display text-xl font-light text-ink">Allergies & régimes particuliers</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Toutes nos préparations peuvent contenir des traces des 14 allergènes majeurs.
                Pour toute question, consultez nos{" "}
                <Link href={routes.mentionsAllergenes} className="text-brand link-elegant">
                  mentions allergènes
                </Link>{" "}
                ou signalez votre allergie au moment de la réservation au {siteConfig.contact.phoneDisplay}.
              </p>
            </div>
          </header>
        </div>
      </section>

      <CtaReservation />
    </main>
  );
}
