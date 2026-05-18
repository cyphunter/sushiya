import type { Metadata } from "next";
import { AlertTriangle, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { SectionHeading } from "@/components/public/section-heading";
import { AllergenesLegend } from "@/components/public/allergenes-legend";
import { allMenuItems } from "@/data/menu";
import { ALLERGENES } from "@/lib/allergenes";

export const metadata: Metadata = buildMetadata({
  title: "Mentions allergènes",
  description:
    "Informations sur les 14 allergènes majeurs (règlement INCO 1169/2011) présents dans les plats de Sushi-Ya Vannes.",
  path: routes.mentionsAllergenes,
  noindex: true,
});

export default function MentionsAllergenesPage() {
  // Statistiques pour le résumé
  const allergenStats = ALLERGENES.map((a) => ({
    code: a.code,
    label: a.label,
    count: allMenuItems.filter((i) => i.allergens?.includes(a.code)).length,
  })).filter((s) => s.count > 0);

  return (
    <main id="main-content">
      <section className="bg-paper hairline-top hairline-bottom">
        <div className="container-main max-w-4xl py-16 md:py-20">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Mentions allergènes", href: routes.mentionsAllergenes },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Règlement INCO 1169/2011"
              title="Mentions allergènes"
              intro="Conformément à la réglementation européenne et au décret 2015-447, voici la liste des 14 allergènes majeurs susceptibles d'être présents dans nos préparations."
            />
          </div>
        </div>
      </section>

      <section className="container-main max-w-4xl py-16 md:py-20">
        <div className="rounded-3xl bg-brand/5 border border-dashed border-brand/40 p-6 md:p-8">
          <header className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl text-ink">Avant toute commande</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                Toutes nos préparations peuvent contenir des traces des allergènes listés ci-dessous,
                en raison de la promiscuité des produits sur le poste de travail. Si vous êtes allergique
                ou souffrez d&apos;une intolérance, <strong>signalez-le au moment de la réservation au {siteConfig.contact.phoneDisplay}</strong>.
                Nos équipes sont formées et adaptent les préparations quand c&apos;est possible.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                Pour une demande détaillée plat par plat, écrivez-nous à{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand link-elegant">
                  {siteConfig.contact.email}
                </a>{" "}
                ou consultez directement le restaurant.
              </p>
            </div>
          </header>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-3xl text-ink">Les 14 allergènes majeurs</h2>
          <p className="mt-3 text-muted">
            Selon l&apos;annexe II du règlement (UE) n°1169/2011, voici les substances ou produits
            provoquant des allergies ou intolérances dont la présence doit être obligatoirement signalée :
          </p>
          <div className="mt-8">
            <AllergenesLegend />
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-paper-warm p-6 ring-1 ring-ink/8 md:p-8">
          <h2 className="font-display text-3xl text-ink">Présence dans notre carte</h2>
          <p className="mt-3 text-sm text-muted">
            Aperçu du nombre de plats susceptibles de contenir chaque allergène (sur un total de
            {" "}{allMenuItems.length} plats référencés).
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {allergenStats
              .sort((a, b) => b.count - a.count)
              .map((s) => (
                <li
                  key={s.code}
                  className="flex items-center justify-between gap-3 rounded-xl bg-paper px-4 py-3 ring-1 ring-ink/8 text-sm"
                >
                  <span className="text-ink">{s.label}</span>
                  <span className="font-display text-brand tabular-nums">{s.count}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 rounded-3xl bg-deeper p-6 text-paper md:p-8">
          <Phone className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed">
            Pour toute question sur la composition d&apos;un plat ou pour signaler une allergie :
            <a href={`tel:${siteConfig.contact.phone}`} className="ml-2 font-display text-xl text-gold link-elegant">
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
