import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBandeau({ title, body, primary, secondary }: Props) {
  return (
    <section className="container-main py-20 md:py-28">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-deeper noise-overlay px-8 py-16 text-paper md:px-16 md:py-24">
        {/* Halos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl"
        />

        {/* Sticker rotatif */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-6 hidden lg:block"
        >
          <div className="relative h-24 w-24">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-rotate-slow text-paper/60"
            >
              <defs>
                <path
                  id="cta-sticker-path"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <text fontSize="9" letterSpacing="2" fontWeight="500">
                <textPath href="#cta-sticker-path">
                  · ON VOUS ATTEND · ON VOUS ATTEND ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="relative max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05]">{title}</h2>
          {body ? (
            <p className="mt-5 text-lg text-paper/80 md:text-xl leading-relaxed">{body}</p>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-paper ring-paper/40 hover:bg-paper hover:text-ink"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
