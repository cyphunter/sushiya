import { cn } from "@/lib/utils";

type KanjiWatermarkProps = {
  /** Caractère(s) japonais à afficher (ex: "寿司"). */
  text: string;
  /** Taille préréglée. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Couleur du watermark. */
  tone?: "brand" | "gold" | "paper" | "ink";
  /** Position absolue dans le parent (parent doit être relative). */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  className?: string;
};

const SIZES: Record<NonNullable<KanjiWatermarkProps["size"]>, string> = {
  sm: "text-[8rem]",
  md: "text-[14rem]",
  lg: "text-[22rem]",
  xl: "text-[clamp(16rem,38vw,42rem)]",
};

const TONES: Record<NonNullable<KanjiWatermarkProps["tone"]>, string> = {
  brand: "kanji-watermark",
  gold: "kanji-watermark kanji-watermark-gold",
  paper: "kanji-watermark kanji-watermark-paper",
  ink: "kanji-watermark text-ink",
};

const POSITIONS: Record<NonNullable<KanjiWatermarkProps["position"]>, string> = {
  "top-right": "absolute top-0 right-0 -translate-y-1/4 translate-x-1/4",
  "top-left": "absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4",
  "bottom-right": "absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4",
  "bottom-left": "absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4",
  center: "absolute inset-0 grid place-items-center",
};

/**
 * Caractère japonais décoratif (filigrane) à utiliser dans les sections hero / CTA.
 * Le parent doit avoir `position: relative` et `overflow: hidden`.
 */
export function KanjiWatermark({
  text,
  size = "lg",
  tone = "brand",
  position = "top-right",
  className,
}: KanjiWatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(SIZES[size], TONES[tone], POSITIONS[position], className)}
    >
      {text}
    </span>
  );
}
