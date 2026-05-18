import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  /** Variation visuelle : fond clair ou foncé. */
  tone?: "default" | "deep";
  /** Affiche la section "eyebrow + titre" en haut. */
  withHeader?: boolean;
};

export function ManifestPhilosophie({ tone = "deep", withHeader = true }: Props) {
  const isDeep = tone === "deep";
  return (
    <section
      aria-labelledby="manifest-title"
      className={cn(
        "relative isolate overflow-hidden py-24 md:py-32",
        isDeep ? "section-ink" : "bg-paper hairline-bottom",
      )}
    >
      <div className="container-main relative">
        {withHeader ? (
          <div className="max-w-3xl">
            <p
              className={cn(
                "eyebrow",
                isDeep && "!text-gold",
              )}
            >
              Notre maison
            </p>
            <h2
              id="manifest-title"
              className={cn(
                "mt-5 font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1] font-light",
                isDeep ? "text-paper" : "text-ink",
              )}
            >
              Trois gestes,{" "}
              <span className={isDeep ? "ital-mark-gold italic" : "ital-mark italic"}>une obsession</span> :
              le sushi qui parle juste.
            </h2>
          </div>
        ) : null}

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {siteConfig.philosophie.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.1}>
              <article
                className={cn(
                  "group relative h-full p-8 md:p-10 transition-all duration-500",
                  isDeep
                    ? "border border-paper/15 bg-paper/[0.04] hover:border-gold/60 hover:bg-paper/[0.08]"
                    : "border-2 border-ink/12 bg-paper hover:border-brand/60",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "block font-display text-7xl font-light tabular-nums",
                    isDeep ? "text-gold" : "text-brand",
                  )}
                >
                  {p.number}
                </span>
                <h3
                  className={cn(
                    "mt-6 font-display text-3xl font-light",
                    isDeep ? "text-paper" : "text-ink",
                  )}
                >
                  {p.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-base leading-relaxed",
                    isDeep ? "text-paper/80" : "text-muted",
                  )}
                >
                  {p.body}
                </p>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-8 right-8 h-px w-12 transition-all duration-500 group-hover:w-20",
                    isDeep ? "bg-gold" : "bg-brand",
                  )}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
