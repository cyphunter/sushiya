import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";
import type { MenuItem } from "@/data/menu/types";
import { formatPrice } from "@/lib/menu-helpers";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

type Props = {
  items: ReadonlyArray<MenuItem>;
};

/**
 * Affichage des plats vedettes en home.
 * Scroll-snap horizontal en mobile, grid 3×2 en desktop. Cartes fortement marquées.
 */
export function VedettesCarte({ items }: Props) {
  return (
    <section
      aria-labelledby="vedettes-title"
      className="container-main py-24 md:py-32"
    >
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Nos signatures"
          title="Les plats qu'on vient chercher."
          intro="Les indispensables maison : tartare de thon truffe, nigiri Wagyu, omakase au choix du chef. À déguster sur place ou à emporter."
        />
        <Link
          href={routes.menu.hub}
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand hover:text-brand-deep link-elegant"
        >
          Voir toute la carte
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div
        className="mt-14 grid gap-5 grid-flow-col auto-cols-[85%] overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 md:auto-cols-fr md:grid-flow-row md:grid-cols-2 md:overflow-visible md:px-0 md:mx-0 lg:grid-cols-3"
        role="list"
        aria-label="Plats vedettes"
      >
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={Math.min(i * 0.08, 0.4)} className="snap-start">
            <article
              role="listitem"
              className="group relative h-full overflow-hidden border-2 border-ink/15 bg-paper transition-all duration-500 hover:border-brand hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-deeper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSlug ? `/images/menu/${item.imageSlug}.webp` : "/images/menu/placeholder.webp"}
                  alt=""
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-7 md:p-8">
                <header className="flex items-start justify-between gap-3 border-b border-ink/12 pb-4">
                  <h3 className="font-display text-2xl font-light leading-tight text-ink">
                    {item.name}
                  </h3>
                  <p className="shrink-0 font-display text-xl font-light tabular-nums text-brand">
                    {formatPrice(item.priceEur)}
                  </p>
                </header>
                {item.description ? (
                  <p className="mt-4 text-sm italic leading-relaxed text-muted">
                    {item.description}
                  </p>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">
                    {item.ingredients.join(", ")}.
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href={routes.menu.hub}
          className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-brand"
        >
          Voir toute la carte
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
