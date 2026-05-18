"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le drawer mobile quand on change de route (touch ESC ou click outside non géré ici car drawer simple)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container-main flex h-18 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2.5 transition-colors hover:text-brand"
          aria-label={`${siteConfig.fullName} — accueil`}
        >
          <span
            className={cn(
              "font-display text-3xl leading-none",
              scrolled ? "text-ink" : "text-paper drop-shadow-sm",
            )}
          >
            {siteConfig.name}
          </span>
          <span
            className={cn(
              "hidden text-[10px] uppercase tracking-[0.3em] sm:inline",
              scrolled ? "text-muted" : "text-paper/80",
            )}
          >
            · Vannes
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors",
                    scrolled
                      ? "text-ink/85 hover:bg-ink hover:text-paper"
                      : "text-paper/90 hover:bg-paper hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteConfig.ctas.reserve.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-paper shadow-warm transition-all hover:bg-brand-deep hover:shadow-md"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-paper/30 transition-colors",
            scrolled
              ? "bg-paper text-ink ring-ink/15 hover:bg-cream"
              : "bg-paper/15 text-paper backdrop-blur-sm hover:bg-paper hover:text-ink",
          )}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden border-t border-ink/10 bg-paper transition-[max-height] duration-300",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav aria-label="Navigation mobile">
          <ul className="container-main flex flex-col gap-1 py-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-ink hover:bg-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 border-t border-ink/10 pt-3">
              <a
                href={siteConfig.ctas.reserve.href}
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-paper"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
