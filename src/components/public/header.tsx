"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

// Routes dont la page commence par un hero à fond sombre (`section-ink` /
// `bg-deeper`). Sur ces routes uniquement, le header peut rester transparent
// avec un texte couleur `paper`. Partout ailleurs (pages légales, plan du site,
// 404, 500, ou toute nouvelle page utilitaire), on force le style "solid"
// (texte sombre sur crème translucide), sinon `text-paper` sur `bg-paper`
// donne du crème sur crème = invisible.
const DARK_HERO_ROUTES: ReadonlyArray<string> = [
  routes.home,
  routes.menu.hub,
  routes.menu.menusMidi,
  routes.menu.californiaRolls,
  routes.menu.sushis,
  routes.menu.menusAssortis,
  routes.menu.entreesDesserts,
  routes.restaurant,
  routes.infosPratiques,
  routes.actus,
  routes.contact,
  routes.mentionsAllergenes,
];

function isDarkHeroRoute(pathname: string): boolean {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return DARK_HERO_ROUTES.some((route) => {
    const routeNormalized = route.endsWith("/") ? route : `${route}/`;
    return normalized === routeNormalized;
  });
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const forceSolid = !isDarkHeroRoute(pathname);
  const solid = scrolled || forceSolid;

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
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
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
              solid ? "text-ink" : "text-paper drop-shadow-sm",
            )}
          >
            {siteConfig.name}
          </span>
          <span
            className={cn(
              "hidden text-[10px] uppercase tracking-[0.3em] sm:inline",
              solid ? "text-muted" : "text-paper/80",
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
                    solid
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
            "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 transition-colors",
            solid
              ? "bg-paper text-ink ring-ink/15 hover:bg-cream"
              : "bg-paper/15 text-paper ring-paper/30 backdrop-blur-sm hover:bg-paper hover:text-ink",
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
