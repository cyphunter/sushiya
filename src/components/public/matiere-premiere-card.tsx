import type { MatierePremiere } from "@/data/matieres-premieres";
import { Reveal } from "@/components/motion/reveal";

type Props = {
  item: MatierePremiere;
  index?: number;
};

export function MatierePremiereCard({ item, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border-2 border-ink/15 bg-paper transition-all duration-500 hover:border-brand hover:shadow-md hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden bg-deeper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/matieres/${item.imageSlug}.webp`}
            alt=""
            className="h-full w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="eyebrow">{item.origin}</p>
          <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ink">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        </div>
      </article>
    </Reveal>
  );
}
