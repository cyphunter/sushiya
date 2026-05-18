import { Flame, Snowflake, Leaf, Sparkles, ChefHat } from "lucide-react";
import type { MenuItem, MenuFlag } from "@/data/menu/types";
import { formatPrice } from "@/lib/menu-helpers";
import { cn } from "@/lib/utils";

const FLAG_ICONS: Partial<Record<MenuFlag, { Icon: React.ComponentType<{ className?: string }>; label: string; tone: string }>> = {
  vegetarien: { Icon: Leaf, label: "Végétarien", tone: "bg-accent text-paper" },
  epice: { Icon: Flame, label: "Épicé", tone: "bg-brand text-paper" },
  cru: { Icon: Snowflake, label: "Cru", tone: "bg-indigo text-paper" },
  aburi: { Icon: Flame, label: "Aburi", tone: "bg-gold text-deeper" },
  signature: { Icon: Sparkles, label: "Signature", tone: "bg-gold text-deeper" },
  chef: { Icon: ChefHat, label: "Chef", tone: "bg-ink text-paper" },
};

type Props = {
  item: MenuItem;
  variant?: "default" | "compact" | "rich";
};

export function MenuItemCard({ item, variant = "default" }: Props) {
  const isRich = variant === "rich";
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border-2 border-ink/12 bg-paper transition-all duration-300",
        "hover:border-brand hover:shadow-md hover:-translate-y-0.5",
        isCompact ? "p-5" : "p-6 md:p-7",
      )}
    >
      <header className="flex items-start justify-between gap-4 border-b border-ink/15 pb-3">
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "font-display font-light leading-tight text-ink",
              isCompact ? "text-lg" : "text-xl md:text-2xl",
            )}
          >
            {item.name}
          </h3>
          {item.pieces ? (
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
              {item.pieces} pièces
            </p>
          ) : null}
        </div>
        <p
          className={cn(
            "shrink-0 font-display font-light tabular-nums text-brand",
            isCompact ? "text-lg" : "text-xl md:text-2xl",
          )}
          aria-label={`Prix : ${formatPrice(item.priceEur)}`}
        >
          {formatPrice(item.priceEur)}
        </p>
      </header>

      {item.description ? (
        <p
          className={cn(
            "mt-4 italic leading-relaxed text-muted",
            isCompact ? "text-xs" : "text-sm",
          )}
        >
          {item.description}
        </p>
      ) : null}

      {item.ingredients.length > 0 ? (
        <p
          className={cn(
            "mt-3 leading-relaxed text-ink/85",
            isCompact ? "text-xs" : "text-sm",
          )}
        >
          {item.ingredients.join(", ")}.
        </p>
      ) : null}

      {item.flags && item.flags.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Caractéristiques">
          {item.flags.map((flag) => {
            const cfg = FLAG_ICONS[flag];
            if (!cfg) return null;
            const { Icon, label, tone } = cfg;
            return (
              <li key={flag}>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
                    tone,
                  )}
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}

      {isRich && item.allergens && item.allergens.length > 0 ? (
        <p className="mt-4 text-[10px] uppercase tracking-wider text-muted">
          Allergènes : {item.allergens.join(", ")}
        </p>
      ) : null}
    </article>
  );
}
