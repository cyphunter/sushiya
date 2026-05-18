import type { Metadata } from "next";
import Link from "next/link";
import { Car, Bus, Bike, MapPinned, Phone, Mail, Wallet, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { faqInfosPratiques } from "@/data/faq";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { InfoPratique } from "@/components/public/info-pratique";
import { Faq } from "@/components/public/faq";
import { SectionHeading } from "@/components/public/section-heading";
import { CtaReservation } from "@/components/public/cta-reservation";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { buildFaqSchema } from "@/lib/jsonld/faq";

export const metadata: Metadata = buildMetadata({
  title: "Infos pratiques — adresse, horaires, accès, réservation",
  description: `Sushi-Ya Vannes — adresse 13 rue Thomas de Closmadeuc, horaires mardi-samedi 12h–13h30 et 19h–21h, réservation au ${siteConfig.contact.phoneDisplay}. Accès, parking, à emporter.`,
  path: routes.infosPratiques,
});

const faqSchema = buildFaqSchema(faqInfosPratiques);

const accessItems = [
  {
    icon: Car,
    title: "En voiture",
    body: "Stationnement gratuit à proximité (rue Thomas de Closmadeuc, place de la République). Parking payant Cliscouët à 5 min à pied.",
  },
  {
    icon: Bus,
    title: "En bus",
    body: "Arrêt République (lignes 1, 4, 5, 6) à 3 min à pied. Lignes Kicéo desservant l'agglomération de Vannes.",
  },
  {
    icon: Bike,
    title: "À vélo / à pied",
    body: "Au cœur du centre-ville, à 5 min à pied de la gare SNCF et 8 min du port de plaisance. Plusieurs arceaux à vélos rue Thomas de Closmadeuc.",
  },
];

export default function InfosPratiquesPage() {
  return (
    <main id="main-content">
      <JsonLd schema={faqSchema} />

      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="案内" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-16 md:py-24">
          <Breadcrumb
            tone="paper" steps={[
              { label: "Accueil", href: "/" },
              { label: "Infos pratiques", href: routes.infosPratiques },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              tone="paper" eyebrow="Tout pour bien venir"
              title={
                <>
                  Comment{" "}
                  <span className="ital-mark-gold italic">nous trouver</span>, comment réserver.
                </>
              }
              intro="Adresse, horaires, accès, réservation, à emporter, allergies : retrouvez ici toutes les informations pratiques pour préparer votre venue à Sushi-Ya Vannes."
            />
          </div>
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <InfoPratique />
      </section>

      <section className="section-ink py-16 md:py-20">
        <div className="container-main">
          <SectionHeading
            tone="paper" eyebrow="L'accès"
            title="Comment venir nous voir"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {accessItems.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-3xl bg-paper p-7 ring-1 ring-ink/8 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-paper shadow-warm"
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-paper"
            >
              <Phone className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-2xl text-ink">Réserver une table</h3>
            <p className="text-sm leading-relaxed text-muted">
              La salle est intimiste — la réservation est fortement conseillée le soir et le week-end. Appelez-nous,
              nous prenons votre demande au téléphone et confirmons le créneau.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 font-display text-3xl text-brand link-elegant"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </article>
          <article className="flex flex-col gap-4 rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-deeper"
            >
              <Sparkles className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-2xl text-ink">Commander à emporter</h3>
            <p className="text-sm leading-relaxed text-muted">
              Toutes nos commandes à emporter sont préparées à la minute : appelez-nous, précisez votre commande,
              nous vous indiquons une heure de retrait précise. Pas de livraison directe.
            </p>
            <p className="text-xs uppercase tracking-wider text-muted">Au téléphone uniquement.</p>
          </article>
        </div>
      </section>

      <section className="section-ink py-16 md:py-20">
        <div className="container-main grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-paper"
            >
              <MapPinned className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-2xl text-ink">Allergies & régimes</h3>
            <p className="text-sm leading-relaxed text-muted">
              Toutes nos préparations peuvent contenir des traces des 14 allergènes majeurs.
              Pour toute demande spécifique, signalez-le à la réservation au {siteConfig.contact.phoneDisplay}.
            </p>
            <Link
              href={routes.mentionsAllergenes}
              className="text-sm font-medium text-brand link-elegant"
            >
              Voir nos mentions allergènes →
            </Link>
          </article>
          <article className="flex flex-col gap-4 rounded-3xl bg-paper p-8 ring-1 ring-ink/8 shadow-sm">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo text-paper"
            >
              <Wallet className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-2xl text-ink">Paiement</h3>
            <p className="text-sm leading-relaxed text-muted">
              Cartes bancaires Visa et Mastercard, espèces. Pour les tickets restaurant et chèques cadeaux,
              demandez à la réservation : nous étudions chaque cas.
            </p>
          </article>
        </div>
      </section>

      <section className="container-main py-16 md:py-20">
        <SectionHeading tone="paper" eyebrow="On vous répond" title="Questions fréquentes" />
        <div className="mt-12 max-w-3xl">
          <Faq items={faqInfosPratiques} />
        </div>
        <div className="mt-12 rounded-3xl bg-paper-warm p-6 ring-1 ring-ink/8 md:p-8">
          <p className="text-sm leading-relaxed text-muted">
            Une question qui n&apos;est pas dans la liste ?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-brand link-elegant"
            >
              Écrivez-nous
            </a>{" "}
            ou appelez le {siteConfig.contact.phoneDisplay}, nous répondons sous 48 heures ouvrées.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
            <Mail className="h-3 w-3" aria-hidden="true" />
            {siteConfig.contact.email}
          </p>
        </div>
      </section>

      <CtaReservation />
    </main>
  );
}
