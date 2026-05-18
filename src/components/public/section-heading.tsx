import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "paper";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  tone = "default",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            tone === "paper" && "!text-gold",
            align === "center" && "justify-center",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]",
          tone === "paper" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "paper" ? "text-paper/80" : "text-ink/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
