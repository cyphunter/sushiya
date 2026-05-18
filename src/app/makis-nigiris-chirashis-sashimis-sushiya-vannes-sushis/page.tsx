import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { makis, nigiris, sashimis, chirashis } from "@/data/menu";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { MenuSection } from "@/components/public/menu-section";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildMenuSchema } from "@/lib/jsonld/menu";

export const metadata: Metadata = buildMetadata({
  title: "Makis, nigiris, sashimis, chirashis — Sushi-Ya Vannes",
  description:
    "Le cœur traditionnel de notre carte : makis main, nigiris au millimètre, sashimis épurés, chirashis généreux. Saumon écossais Label Rouge, thon albacore, bœuf Wagyu.",
  path: routes.menu.sushis,
});

const menuSchema = buildMenuSchema({
  pagePath: routes.menu.sushis,
  name: "Sushis Sushi-Ya Vannes — Makis, Nigiris, Sashimis, Chirashis",
  sections: [
    { title: "Makis (6 pièces)", items: makis },
    { title: "Nigiris (2 pièces)", items: nigiris },
    { title: "Sashimis", items: sashimis },
    { title: "Chirashis", items: chirashis },
  ],
});

const ANCRES = [
  { id: "makis", label: "Makis" },
  { id: "nigiris", label: "Nigiris" },
  { id: "sashimis", label: "Sashimis" },
  { id: "chirashis", label: "Chirashis" },
] as const;

export default function SushisPage() {
  return (
    <main id="main-content">
      <JsonLd schema={menuSchema} />

      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="寿司" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Notre carte", href: routes.menu.hub },
              { label: "Sushis", href: routes.menu.sushis },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="L'âme traditionnelle"
              title={
                <>
                  Makis, nigiris, sashimis,{" "}
                  <span className="ital-mark-gold italic">chirashis</span>.
                </>
              }
              intro="Le sushi-ya dans son expression la plus pure. Riz vinaigré façonné selon la méthode edomae, poissons sélectionnés chaque jour, dressage à la commande."
            />
            <nav
              aria-label="Sections de la page sushis"
              className="mt-10 flex flex-wrap gap-2"
            >
              {ANCRES.map((a) => (
                <Link
                  key={a.id}
                  href={`#${a.id}`}
                  className="inline-flex items-center rounded-full bg-paper px-5 py-2 text-sm text-ink ring-1 ring-ink/15 transition-colors hover:bg-ink hover:text-paper"
                >
                  {a.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <MenuSection
        id="makis"
        eyebrow="Makis · 6 pièces"
        title="Makis"
        intro="Roulés serrés à la main, autour d'algues nori bretonnes. Du concombre-fromage au saumon-menthe, douze recettes."
        items={makis}
        columns={3}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          id="nigiris"
          eyebrow="Nigiris · 2 pièces"
          title="Nigiris"
          intro="Le sushi par excellence : boulette de riz vinaigré, lamelle de poisson, parfois flambée à la torche (aburi) ou rehaussée au yuzukosho. Notre nigiri Wagyu reste le préféré des habitués."
          items={nigiris}
          columns={3}
        />
      </section>

      <MenuSection
        id="sashimis"
        eyebrow="Sashimis"
        title="Sashimis"
        intro="La pureté du poisson, sans riz. Tranches précises, dressage minimaliste. Disponibles en 5 ou 10 pièces, avec un assortiment chef qui suit l'arrivage."
        items={sashimis}
        columns={3}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          id="chirashis"
          eyebrow="Chirashis"
          title="Chirashis"
          intro="Bols généreux, lit de riz vinaigré, sashimis colorés et accompagnements. Notre chirashi traditionnel reste notre version signature."
          items={chirashis}
          columns={2}
        />
      </section>

      <CtaReservation />
    </main>
  );
}
