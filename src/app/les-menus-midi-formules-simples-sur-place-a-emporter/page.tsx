import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { menusMidi } from "@/data/menu";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { MenuSection } from "@/components/public/menu-section";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildMenuSchema } from "@/lib/jsonld/menu";

export const metadata: Metadata = buildMetadata({
  title: "Menus midi à 16,90 € — Sushi-Ya Vannes",
  description:
    "Sept formules midi à 16,90 € seulement, servies du mardi au vendredi de 12h00 à 13h30. Sur place ou à emporter. Sushi-Ya, restaurant japonais à Vannes.",
  path: routes.menu.menusMidi,
});

const menuSchema = buildMenuSchema({
  pagePath: routes.menu.menusMidi,
  name: "Menus midi Sushi-Ya Vannes",
  sections: [
    {
      title: "Menus midi · 16,90 €",
      description:
        "Servis du mardi au vendredi midi, à emporter ou sur place. Tous nos plats sont préparés à la commande.",
      items: menusMidi,
    },
  ],
});

export default function MenusMidiPage() {
  return (
    <main id="main-content">
      <JsonLd schema={menuSchema} />
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="昼" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Notre carte", href: routes.menu.hub },
              { label: "Menus midi", href: routes.menu.menusMidi },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Du mardi au vendredi · 12h–13h30"
              title={
                <>
                  Menus midi à <span className="ital-mark-gold italic">16,90 €.</span>
                </>
              }
              intro="Sept formules équilibrées au même prix, à savourer sur place ou à emporter. Tous nos plats sont préparés à la commande — confirmation de la composition par téléphone."
            />
          </div>
        </div>
      </section>

      <MenuSection
        eyebrow="Sept formules au choix"
        title="Au menu cette semaine"
        items={menusMidi}
        columns={2}
      />

      <CtaReservation />
    </main>
  );
}
