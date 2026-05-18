import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { menusAssortis, menusDecouverte } from "@/data/menu";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { MenuSection } from "@/components/public/menu-section";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildMenuSchema } from "@/lib/jsonld/menu";

export const metadata: Metadata = buildMetadata({
  title: "Menus assortis et menus Découverte — Sushi-Ya Vannes",
  description:
    "Huit menus individuels — du Cœur de Sushi à l'Omakase à 49,90 €. Trois menus Découverte à partager (2, 3 ou 4 personnes). Sushi-Ya Vannes.",
  path: routes.menu.menusAssortis,
});

const menuSchema = buildMenuSchema({
  pagePath: routes.menu.menusAssortis,
  name: "Menus assortis Sushi-Ya Vannes",
  sections: [
    { title: "Menus assortis individuels", items: menusAssortis },
    { title: "Menus Découverte à partager", items: menusDecouverte },
  ],
});

export default function MenusAssortisPage() {
  return (
    <main id="main-content">
      <JsonLd schema={menuSchema} />
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="盛" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Notre carte", href: routes.menu.hub },
              { label: "Menus assortis", href: routes.menu.menusAssortis },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Composés pour vous"
              title={
                <>
                  Menus assortis,{" "}
                  <span className="ital-mark-gold italic">l&apos;équilibre</span>.
                </>
              }
              intro="Pour celles et ceux qui veulent une carte complète sans se poser de question. Huit menus individuels équilibrés et trois menus Découverte à partager."
            />
          </div>
        </div>
      </section>

      <MenuSection
        eyebrow="Pour une personne"
        title="Menus assortis individuels"
        intro="Composés pour un repas complet, avec accompagnement et soupe selon la formule."
        items={menusAssortis}
        columns={2}
        variant="rich"
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          eyebrow="À partager"
          title="Menus Découverte"
          intro="Pour 2, 3 ou 4 convives. Composition selon l'arrivage du jour — chaque menu Découverte est unique."
          items={menusDecouverte}
          columns={3}
          variant="rich"
        />
      </section>

      <CtaReservation />
    </main>
  );
}
