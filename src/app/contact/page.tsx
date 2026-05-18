import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { SectionHeading } from "@/components/public/section-heading";
import { InfoPratique } from "@/components/public/info-pratique";
import { ContactForm } from "@/components/public/contact-form";
import { buildBreadcrumbSchema } from "@/lib/jsonld/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Nous écrire — Sushi-Ya Vannes",
  description: `Réservation, allergies, privatisation, événement : écrivez-nous via le formulaire ou appelez directement le ${siteConfig.contact.phoneDisplay}.`,
  path: routes.contact,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { label: "Accueil", href: "/" },
  { label: "Contact", href: routes.contact },
]);

export default function ContactPage() {
  return (
    <main id="main-content">
      <JsonLd schema={breadcrumbSchema} />

      <section className="relative isolate overflow-hidden section-ink">
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb tone="paper" steps={[{ label: "Accueil", href: "/" }, { label: "Contact", href: routes.contact }]} />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="On vous écoute"
              title={
                <>
                  Nous <span className="ital-mark-gold italic">écrire</span>.
                </>
              }
              intro={`Pour une réservation immédiate ou une commande à emporter, le téléphone reste le moyen le plus rapide : ${siteConfig.contact.phoneDisplay}. Pour les autres demandes — allergies, privatisation, événement — utilisez le formulaire ci-dessous.`}
            />
          </div>
        </div>
      </section>

      <section className="container-main py-16 md:py-20 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="rounded-3xl bg-paper p-8 ring-1 ring-ink/10 shadow-lg md:p-10">
            <ContactForm />
          </div>
        </div>
        <aside className="md:col-span-5 space-y-6">
          <InfoPratique />
          <div className="rounded-3xl bg-paper-warm p-8 ring-1 ring-ink/8">
            <p className="eyebrow">Délais de réponse</p>
            <h2 className="mt-3 font-display text-2xl text-ink">48 heures ouvrées</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Nous traitons les demandes du mardi au samedi. Pour une réservation urgente,
              composez directement le {siteConfig.contact.phoneDisplay} aux horaires d&apos;ouverture.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
