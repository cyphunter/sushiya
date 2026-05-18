import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { californiaRolls } from "@/data/menu";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { MenuSection } from "@/components/public/menu-section";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildMenuSchema } from "@/lib/jsonld/menu";

export const metadata: Metadata = buildMetadata({
  title: "California rolls — 18 recettes signature",
  description:
    "De la Philadelphia classique à la création Gourmandise chèvre-miel : 18 California rolls maison à Vannes. Végétariens, fumés, crus, crustacés. À partir de 9,50 €.",
  path: routes.menu.californiaRolls,
});

const vegetariens = californiaRolls.filter((i) => i.flags?.includes("vegetarien"));
const fumes = californiaRolls.filter((i) => i.flags?.includes("fume"));
const crus = californiaRolls.filter(
  (i) =>
    i.flags?.includes("cru") ||
    i.flags?.includes("aburi") ||
    (!i.flags?.includes("vegetarien") &&
      !i.flags?.includes("fume") &&
      !i.allergens?.includes("crustaces")),
);
const crustaces = californiaRolls.filter((i) => i.allergens?.includes("crustaces"));

const menuSchema = buildMenuSchema({
  pagePath: routes.menu.californiaRolls,
  name: "California rolls Sushi-Ya Vannes",
  sections: [
    { title: "Sans poisson", items: vegetariens },
    { title: "Poisson fumé", items: fumes },
    { title: "Poisson cru", items: crus },
    { title: "Crustacés", items: crustaces },
  ],
});

export default function CaliforniaRollsPage() {
  return (
    <main id="main-content">
      <JsonLd schema={menuSchema} />
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="巻" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Notre carte", href: routes.menu.hub },
              { label: "California rolls", href: routes.menu.californiaRolls },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="8 pièces · 9,50 € à 12,20 €"
              title={
                <>
                  California rolls.{" "}
                  <span className="ital-mark-gold italic">Dix-huit recettes.</span>
                </>
              }
              intro="Notre exploration du california, du plus végétal au plus iodé. La Philadelphia aburi reste notre signature : saumon flambé à la torche, cream cheese et concombre."
            />
          </div>
        </div>
      </section>

      <MenuSection
        id="california-vegetariens"
        eyebrow="Sans poisson"
        title="Pour les amateurs de saveurs végétales"
        intro="Quatre rolls 100 % végétariens, du plus simple au plus parfumé."
        items={vegetariens}
        columns={2}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          id="california-fumes"
          eyebrow="Poisson fumé"
          title="Le fumé, la fraîcheur"
          intro="Saumon fumé et cream cheese : la rencontre du nord japonais et du brunch newyorkais."
          items={fumes}
          columns={3}
        />
      </section>

      <MenuSection
        id="california-crus"
        eyebrow="Poisson cru · le grand classique"
        title="Le cru, la pureté"
        intro="De la Philadelphia indémodable à la Maguro thon-avocat, l'expression du poisson cru en california."
        items={crus}
        columns={3}
      />

      <section className="bg-paper hairline-top hairline-bottom">
        <MenuSection
          id="california-crustaces"
          eyebrow="Crustacés"
          title="L'iode des crevettes"
          intro="Crevettes sauvages, classiques ou épicées."
          items={crustaces}
          columns={2}
        />
      </section>

      <CtaReservation />
    </main>
  );
}
