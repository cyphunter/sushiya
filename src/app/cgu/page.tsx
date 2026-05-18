import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site Sushi-Ya Vannes — accès, contenu, responsabilité, propriété intellectuelle.",
  path: routes.cgu,
  noindex: true,
});

export default function CguPage() {
  return (
    <main id="main-content" className="container-main max-w-3xl py-16 md:py-20">
      <Breadcrumb steps={[{ label: "Accueil", href: "/" }, { label: "CGU", href: routes.cgu }]} />
      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:mt-12 prose-h2:text-2xl prose-h2:text-ink prose-a:text-brand">
        <h1>Conditions générales d&apos;utilisation</h1>
        <p>
          Les présentes conditions générales d&apos;utilisation (« CGU ») régissent l&apos;accès et
          l&apos;utilisation du site {siteConfig.url} édité par {siteConfig.legalName}.
        </p>

        <h2>Objet du site</h2>
        <p>
          Le site présente le restaurant {siteConfig.fullName}, sa carte, ses horaires et ses
          coordonnées. Il met à disposition un formulaire de contact. <strong>Aucune transaction
          commerciale</strong> n&apos;est effectuée directement via le site : les réservations et
          commandes à emporter se font exclusivement par téléphone au {siteConfig.contact.phoneDisplay}.
        </p>

        <h2>Acceptation des CGU</h2>
        <p>
          La consultation du site implique l&apos;acceptation pleine et entière des présentes CGU.
          Si vous n&apos;acceptez pas ces conditions, vous ne devez pas utiliser le site.
        </p>

        <h2>Accès au site</h2>
        <p>
          Le site est accessible 24 h / 24, 7 j / 7, sauf cas de force majeure, d&apos;interruption
          pour maintenance, ou de problèmes liés au réseau internet. L&apos;éditeur ne peut être
          tenu responsable des éventuelles interruptions ou ralentissements.
        </p>

        <h2>Contenu et exactitude</h2>
        <p>
          Les informations diffusées sur ce site (prix, compositions, horaires) sont données à titre
          indicatif et peuvent évoluer sans préavis. Les compositions des plats peuvent varier selon
          les arrivages. Pour toute information précise, contactez-nous au {siteConfig.contact.phoneDisplay}.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus du site (textes, photographies, logos, mise en page) sont protégés par le
          droit d&apos;auteur et appartiennent à {siteConfig.legalName} ou à leurs auteurs respectifs.
          Toute reproduction, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>

        <h2>Liens externes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers (Instagram, Facebook, Google Maps).
          L&apos;éditeur n&apos;est pas responsable du contenu de ces sites externes.
        </p>

        <h2>Responsabilité</h2>
        <p>
          L&apos;éditeur ne peut être tenu responsable d&apos;un dommage matériel ou immatériel résultant
          de l&apos;accès au site ou de son utilisation. L&apos;utilisateur est responsable de la sécurité
          de son équipement et de sa connexion.
        </p>

        <h2>Allergènes</h2>
        <p>
          Les informations sur les allergènes sont fournies à titre indicatif sur la page{" "}
          <a href={routes.mentionsAllergenes}>mentions allergènes</a>. En cas d&apos;allergie ou
          d&apos;intolérance, signalez-le impérativement au moment de la réservation au{" "}
          {siteConfig.contact.phoneDisplay}.
        </p>

        <h2>Loi applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence
          exclusive des tribunaux français.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question sur ces CGU : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </div>
    </main>
  );
}
