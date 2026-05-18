import { ALLERGENES } from "@/lib/allergenes";

/**
 * Liste lisible des 14 allergènes INCO.
 * Affichée sur /mentions-allergenes/.
 */
export function AllergenesLegend() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ALLERGENES.map((a, i) => (
        <article
          key={a.code}
          className="rounded-2xl bg-paper p-5 ring-1 ring-ink/8"
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 font-display text-sm text-brand tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-lg text-ink">{a.label}</h3>
          </header>
          <p className="mt-3 text-xs leading-relaxed text-muted">{a.description}</p>
        </article>
      ))}
    </div>
  );
}
