import { Quote, Star } from "lucide-react";
import { temoignages } from "@/data/temoignages";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

export function TemoignagesCarousel() {
  return (
    <section
      aria-labelledby="temoignages-title"
      className="bg-paper py-24 md:py-32 hairline-top hairline-bottom"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Ils en parlent"
          title="Ce que disent nos hôtes."
          intro="Quelques mots de celles et ceux qui ont déjà partagé un moment chez Sushi-Ya, depuis le menu midi jusqu'à l'Omakase."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {temoignages.map((t, i) => (
            <Reveal key={t.prenom + (t.occasion ?? "")} delay={i * 0.08}>
              <figure className="group relative flex h-full flex-col border-2 border-ink/15 bg-paper p-8 transition-all duration-300 hover:border-brand hover:shadow-md hover:-translate-y-0.5 md:p-10">
                <Quote
                  className="absolute right-6 top-6 h-16 w-16 rotate-180 text-brand/12"
                  aria-hidden="true"
                />
                <div className="flex gap-0.5" aria-label={`Note ${t.note ?? 5} sur 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="relative mt-5 text-lg leading-relaxed text-ink md:text-xl">
                  <span className="font-display text-brand">«</span> {t.citation}{" "}
                  <span className="font-display text-brand">»</span>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-ink/15 pt-5 text-sm">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center bg-brand text-paper font-display text-lg font-light"
                  >
                    {t.prenom.charAt(0)}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium text-ink">
                      {t.prenom} {t.initiale} · {t.ville}
                    </span>
                    {t.occasion ? (
                      <span className="mt-0.5 text-xs uppercase tracking-wider text-brand">
                        {t.occasion}
                      </span>
                    ) : null}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
