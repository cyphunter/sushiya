import type { MenuItem } from "@/data/menu/types";
import { MenuItemCard } from "./menu-item-card";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: ReadonlyArray<MenuItem>;
  /** Nombre de colonnes maximum sur desktop (2 ou 3). */
  columns?: 2 | 3;
  variant?: "default" | "compact" | "rich";
  /** Si vrai, n'enveloppe pas dans un container ni un padding. Utile pour intégrer dans une section parente. */
  bare?: boolean;
};

export function MenuSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  columns = 3,
  variant = "default",
  bare = false,
}: Props) {
  const gridCols = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  const content = (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className={cn("mt-12 grid gap-5 sm:grid-cols-2 md:gap-6", gridCols)}>
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={Math.min(i * 0.05, 0.4)}>
            <MenuItemCard item={item} variant={variant} />
          </Reveal>
        ))}
      </div>
    </>
  );

  if (bare) {
    return (
      <section id={id} aria-labelledby={id ? `${id}-title` : undefined}>
        {content}
      </section>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className="container-main py-20 md:py-24"
    >
      {content}
    </section>
  );
}
