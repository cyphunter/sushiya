"use client";

import { useEffect } from "react";
import { routes } from "@/lib/routes";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="container-main flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"
    >
      <span aria-hidden="true" className="kanji-watermark text-[12rem] leading-none md:text-[18rem]">
        失
      </span>
      <p className="-mt-32 font-display text-7xl text-brand md:text-9xl md:-mt-44">Oups</p>
      <h1 className="mt-6 font-display text-3xl text-ink md:text-4xl">Une erreur est survenue</h1>
      <p className="mt-4 max-w-md text-muted">
        Nous sommes désolés, quelque chose s&apos;est mal passé. Vous pouvez réessayer ou nous écrire.
        {error.digest ? <span className="mt-2 block text-xs">Référence : {error.digest}</span> : null}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-paper shadow-warm hover:bg-brand-deep"
        >
          Réessayer
        </button>
        <a
          href={routes.contact}
          className="inline-flex items-center rounded-full bg-paper px-7 py-3 text-ink ring-1 ring-ink/15 hover:bg-cream"
        >
          Nous écrire
        </a>
      </div>
    </main>
  );
}
