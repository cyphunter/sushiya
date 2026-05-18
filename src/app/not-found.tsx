import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container-main relative isolate flex min-h-[70vh] flex-col items-center justify-center py-24 text-center"
    >
      <span
        aria-hidden="true"
        className="kanji-watermark pointer-events-none absolute inset-0 grid place-items-center text-[16rem] leading-none md:text-[26rem]"
      >
        迷
      </span>
      <p className="relative font-display text-7xl text-brand md:text-9xl">404</p>
      <h1 className="relative mt-6 font-display text-3xl text-ink md:text-4xl">Page introuvable</h1>
      <p className="relative mt-4 max-w-md text-muted">
        La page que vous cherchez n&apos;existe pas, a été déplacée ou n&apos;est plus accessible.
      </p>
      <div className="relative mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-paper shadow-warm hover:bg-brand-deep"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href={routes.menu.hub}
          className="inline-flex items-center rounded-full bg-paper px-7 py-3 text-ink ring-1 ring-ink/15 hover:bg-cream"
        >
          Voir la carte
        </Link>
      </div>
    </main>
  );
}
