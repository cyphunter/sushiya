import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site Sushi-Ya Vannes — éditeur SAS VET&COOK, directrice de publication Sophie ROUSSELLE, hébergeur Cloudflare.",
  path: routes.mentionsLegales,
  noindex: true,
});

export default function MentionsLegalesPage() {
  const { legalName, legal, contact, url } = siteConfig;

  return (
    <main id="main-content" className="container-main max-w-3xl py-16 md:py-20">
      <Breadcrumb steps={[{ label: "Accueil", href: "/" }, { label: "Mentions légales", href: routes.mentionsLegales }]} />
      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:text-ink prose-a:text-brand">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>{legalName}</strong>
          <br />
          {legal.legalForm} au capital de {legal.capital}
          <br />
          SIRET : {legal.siret} — {legal.rcs}
          <br />
          {legal.tvaIntra !== "À renseigner" ? (
            <>TVA intracommunautaire : {legal.tvaIntra}<br /></>
          ) : null}
          Siège social : {contact.address}, {contact.postalCode} {contact.city}, {contact.countryName}
          <br />
          Téléphone : <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          <br />
          Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>

        <h2>Directrice de la publication</h2>
        <p>
          {legal.publisher} — {legal.publisherRole}.
        </p>

        <h2>Hébergeur</h2>
        <p>
          <strong>{legal.host.name}</strong>
          <br />
          {legal.host.address}
          <br />
          Contact : <a href={legal.host.contact} target="_blank" rel="noopener noreferrer">{legal.host.contact}</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (<a href={url}>{url}</a>) — textes, photographies,
          logos, illustrations, mises en page — sont la propriété exclusive de {legalName} ou de leurs auteurs
          respectifs. Toute reproduction, représentation, modification, publication, adaptation totale ou
          partielle sans autorisation écrite préalable est interdite et constitue une contrefaçon
          sanctionnée par les articles L335-2 et suivants du Code de la propriété intellectuelle.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées via ce site (formulaire de contact, cookies
          techniques) est détaillé dans la{" "}
          <a href={routes.confidentialite}>politique de confidentialité</a>. Pour exercer vos droits
          d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition : <a href={`mailto:${legal.dpoEmail}`}>{legal.dpoEmail}</a>.
        </p>

        <h2>Conditions d&apos;utilisation</h2>
        <p>
          Les conditions générales d&apos;utilisation du site sont détaillées dans la page <a href={routes.cgu}>CGU</a>.
        </p>

        <h2>Allergènes</h2>
        <p>
          Conformément au règlement INCO n°1169/2011, les informations relatives aux 14 allergènes majeurs
          présents dans nos préparations sont disponibles sur la page <a href={routes.mentionsAllergenes}>mentions allergènes</a>.
        </p>
      </div>
    </main>
  );
}
