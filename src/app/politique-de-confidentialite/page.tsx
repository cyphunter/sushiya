import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Sushi-Ya Vannes — collecte de données, finalités, durées de conservation, droits RGPD.",
  path: routes.confidentialite,
  noindex: true,
});

export default function ConfidentialitePage() {
  const { legal, contact } = siteConfig;
  return (
    <main id="main-content" className="container-main max-w-3xl py-16 md:py-20">
      <Breadcrumb
        steps={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité", href: routes.confidentialite },
        ]}
      />
      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:text-ink prose-a:text-brand">
        <h1>Politique de confidentialité</h1>

        <p>
          La présente politique décrit comment {siteConfig.legalName} (ci-après « Sushi-Ya ») collecte,
          utilise et protège les données personnelles des visiteurs du site {siteConfig.url},
          conformément au Règlement Général sur la Protection des Données (RGPD, règlement UE 2016/679)
          et à la loi Informatique et Libertés modifiée.
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          {siteConfig.legalName} — {contact.address}, {contact.postalCode} {contact.city}.
          <br />
          Contact RGPD : <a href={`mailto:${legal.dpoEmail}`}>{legal.dpoEmail}</a>.
        </p>

        <h2>Données collectées</h2>
        <p>Sushi-Ya collecte les données suivantes via son site :</p>
        <ul>
          <li>
            <strong>Formulaire de contact</strong> : nom, email, téléphone (facultatif), sujet,
            nombre de personnes (facultatif), date / créneau souhaité (facultatif), message et
            consentement RGPD.
          </li>
          <li>
            <strong>Données techniques</strong> : adresse IP (anonymisée), type de navigateur,
            pages visitées, durée de visite, via Cloudflare Web Analytics (sans cookie tiers, conforme RGPD).
          </li>
        </ul>

        <h2>Finalités du traitement</h2>
        <ul>
          <li>Répondre aux demandes de contact (réservations, allergies, privatisation, événements).</li>
          <li>Mesurer l&apos;audience du site de manière agrégée et anonyme.</li>
          <li>Améliorer l&apos;expérience utilisateur et la sécurité du site.</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Les données du formulaire de contact sont traitées sur la base du consentement explicite
          de l&apos;utilisateur (case à cocher obligatoire). Les données techniques sont traitées
          sur la base de l&apos;intérêt légitime (analyse statistique anonymisée et sécurité).
        </p>

        <h2>Durée de conservation</h2>
        <ul>
          <li>Messages de contact : <strong>3 ans</strong> à compter du dernier contact.</li>
          <li>Données techniques : <strong>13 mois</strong> maximum.</li>
        </ul>

        <h2>Destinataires</h2>
        <p>
          Les données sont strictement réservées à Sushi-Ya. Aucune donnée n&apos;est transmise
          à des tiers à des fins commerciales. Nos sous-traitants techniques :
        </p>
        <ul>
          <li>
            <strong>Cloudflare Inc.</strong> — hébergement et analytics (sans cookie). Données hébergées
            sur le réseau global edge de Cloudflare, conforme RGPD via clauses contractuelles types.
          </li>
          <li>
            <strong>Resend Inc.</strong> — envoi des emails du formulaire de contact.
          </li>
        </ul>

        <h2>Vos droits</h2>
        <p>Vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li>Droit d&apos;accès, de rectification et d&apos;effacement.</li>
          <li>Droit à la limitation du traitement.</li>
          <li>Droit à la portabilité.</li>
          <li>Droit d&apos;opposition et de retrait du consentement à tout moment.</li>
          <li>
            Droit d&apos;introduire une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
          </li>
        </ul>
        <p>
          Pour exercer vos droits : <a href={`mailto:${legal.dpoEmail}`}>{legal.dpoEmail}</a>. Nous répondons
          dans un délai d&apos;un mois maximum.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise <strong>aucun cookie de suivi tiers</strong>. Cloudflare Web Analytics
          fonctionne sans cookie. Aucun bandeau de consentement n&apos;est nécessaire.
        </p>

        <h2>Sécurité</h2>
        <p>
          Les données sont chiffrées en transit (HTTPS) et stockées sur l&apos;infrastructure Cloudflare,
          conforme aux standards ISO 27001 / SOC 2. Le formulaire est protégé contre le spam (honeypot)
          et les attaques (Cloudflare WAF).
        </p>

        <h2>Modifications</h2>
        <p>
          Cette politique peut être mise à jour. Dernière modification : 2026. La date de mise à jour
          fait foi.
        </p>
      </div>
    </main>
  );
}
