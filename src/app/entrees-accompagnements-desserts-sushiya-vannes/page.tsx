import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { entrees, soupes, accompagnements, desserts } from "@/data/menu";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { MenuSection } from "@/components/public/menu-section";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildMenuSchema } from "@/lib/jsonld/menu";

export const metadata: Metadata = buildMetadata({
  title: "Entrées, accompagnements & desserts — Sushi-Ya Vannes",
  description:
    "Tartare de thon à la truffe, salades japonaises, soupes miso, riz vinaigré, mochis traditionnels et café gourmand franco-japonais. Sushi-Ya, restaurant japonais à Vannes.",
  path: routes.menu.entreesDesserts,
});

const menuSchema = buildMenuSchema({
  pagePath: routes.menu.entreesDesserts,
  name: "Entrées, accompagnements, desserts — Sushi-Ya Vannes",
  sections: [
    { title: "Entrées", items: entrees },
    { title: "Soupes miso", items: soupes },
    { title: "Accompagnements", items: accompagnements },
    { title: "Desserts", items: desserts },
  ],
});

export default function EntreesDessertsPage() {
  return (
    <main id="main-content">
      <JsonLd schema={menuSchema} />
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="味" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Notre carte", href: routes.menu.hub },
              { label: "Entrées · accompagnements · desserts", href: routes.menu.entreesDesserts },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Tout autour du sushi"
              title={
                <>
                  Entrées, soupes,{" "}
                  <span className="ital-mark-gold italic">mochis</span>.
                </>
              }
              intro="Le repas commence par une entrée, se prolonge avec une soupe miso, se conclut par notre café gourmand franco-japonais. Tout ce qui entoure le sushi avec autant de soin."
            />
          </div>
        </div>
      </section>

      <MenuSection
        eyebrow="Entrées · Tartares · Salades"
        title="Pour commencer"
        intro="Du tartare de thon à l'huile de truffe à la salade de wakamé : nos plats d'entrée explorent le grain, la fraîcheur et la coupe."
        items={entrees}
        columns={3}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          eyebrow="Soupes miso"
          title="Le bouillon dashi"
          intro="Quatre déclinaisons de notre soupe miso : nature, saumon, saumon spicy, maquereau épicé."
          items={soupes}
          columns={2}
        />
      </section>

      <MenuSection
        eyebrow="Accompagnements"
        title="Riz vinaigré · Riz kabayaki"
        intro="Le bol de riz vinaigré ou kabayaki, à commander seul ou en complément."
        items={accompagnements}
        columns={2}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          eyebrow="Desserts"
          title="Mochis · café gourmand"
          intro="Mochis traditionnels (sésame noir, haricot rouge, matcha), mochis glacés, et notre café gourmand franco-japonais — signature maison."
          items={desserts}
          columns={3}
        />
      </section>

      <CtaReservation />
    </main>
  );
}
