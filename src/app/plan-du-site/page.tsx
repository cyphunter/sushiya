import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { routes, allPublicRoutes } from "@/lib/routes";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { SectionHeading } from "@/components/public/section-heading";

export const metadata: Metadata = buildMetadata({
  title: "Plan du site",
  description: "Toutes les pages du site Sushi-Ya Vannes.",
  path: routes.planDuSite,
});

export default function PlanDuSitePage() {
  const sections = ["Principal", "La carte", "Légal"] as const;

  return (
    <main id="main-content">
      <section className="container-main py-20 md:py-28">
        <Breadcrumb
          steps={[
            { label: "Accueil", href: "/" },
            { label: "Plan du site", href: routes.planDuSite },
          ]}
        />
        <div className="mt-10">
          <SectionHeading
            eyebrow="Plan du site"
            title="Toutes nos pages"
            intro="Un aperçu de l'ensemble des pages disponibles sur le site de Sushi-Ya Vannes."
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section}>
              <h2 className="font-display text-2xl text-ink">{section}</h2>
              <ul className="mt-5 space-y-2 text-sm">
                {allPublicRoutes
                  .filter((r) => r.section === section)
                  .map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="text-ink/80 hover:text-brand link-elegant"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
