import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, type BreadcrumbStep } from "@/lib/jsonld/breadcrumb";

type BreadcrumbProps = {
  /** Liste d'étapes du fil d'Ariane, depuis "Accueil" jusqu'à la page courante. */
  steps: ReadonlyArray<BreadcrumbStep>;
  /** Variation de couleur pour fond sombre. */
  tone?: "default" | "paper";
};

/**
 * Fil d'Ariane visible + injection JSON-LD BreadcrumbList automatique.
 * À utiliser sur toute page de niveau ≥ 2.
 */
export function Breadcrumb({ steps, tone = "default" }: BreadcrumbProps) {
  const schema = buildBreadcrumbSchema(steps);
  const isPaper = tone === "paper";

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={isPaper ? "text-paper/80" : "text-muted"}
    >
      <JsonLd schema={schema} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.2em]">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.href} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className={isPaper ? "text-paper" : "text-ink"}
                >
                  {step.label}
                </span>
              ) : (
                <Link
                  href={step.href}
                  className={isPaper ? "hover:text-gold" : "hover:text-brand"}
                >
                  {step.label}
                </Link>
              )}
              {!isLast ? (
                <ChevronRight
                  className="h-3 w-3 opacity-50"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
