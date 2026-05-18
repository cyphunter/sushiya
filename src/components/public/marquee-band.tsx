const DEFAULT_ITEMS = [
  "Saumon écossais Label Rouge",
  "Thon albacore",
  "Bœuf Wagyu",
  "Omakase",
  "Huîtres du golfe du Morbihan",
  "Café gourmand franco-japonais",
  "Riz Camargue bio",
  "Algues Nori bretonnes",
];

type MarqueeBandProps = {
  items?: ReadonlyArray<string>;
  /** Variante de couleur. */
  tone?: "ink" | "paper";
};

export function MarqueeBand({ items = DEFAULT_ITEMS, tone = "ink" }: MarqueeBandProps) {
  const looped = [...items, ...items];
  const bg = tone === "ink" ? "bg-ink text-paper" : "bg-paper-warm text-ink";
  const dot = tone === "ink" ? "bg-gold" : "bg-brand";
  return (
    <section
      aria-hidden="true"
      className={`overflow-hidden border-y border-ink/10 py-5 ${bg}`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {looped.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-5 px-6 font-display text-2xl md:text-3xl"
          >
            <span>{item}</span>
            <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
          </span>
        ))}
      </div>
    </section>
  );
}
