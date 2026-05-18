import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { KanjiWatermark } from "./kanji-watermark";

export function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden bg-deeper text-paper noise-overlay">
      <KanjiWatermark text="美" position="bottom-right" size="xl" tone="gold" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />

      {/* Bandeau intro grande typo */}
      <div className="container-main relative border-b border-paper/10 py-16 md:py-20">
        <p className="eyebrow !text-gold">À tout de suite</p>
        <p className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-paper">
          Le sushi sincère. <span className="ital-mark-gold italic">Et fier.</span>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.ctas.reserve.href}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-deeper"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.ctas.reserve.label}
          </a>
          <Link
            href={siteConfig.ctas.contact.href}
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-paper/30 px-6 py-3 text-sm text-paper transition-colors hover:bg-paper hover:text-deeper"
          >
            {siteConfig.ctas.contact.label}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container-main relative py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-paper">
              {siteConfig.name}
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-gold">Vannes</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {siteConfig.baseline}
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/5 text-paper ring-1 ring-paper/20 transition-all hover:bg-brand hover:ring-brand"
                  aria-label="Instagram Sushi-Ya Vannes"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              {siteConfig.social.facebook ? (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/5 text-paper ring-1 ring-paper/20 transition-all hover:bg-brand hover:ring-brand"
                  aria-label="Facebook Sushi-Ya Vannes"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Visiter</p>
            <nav aria-label="Navigation principale (pied de page)">
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-paper/75 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Le restaurant</p>
            <address className="not-italic mt-5 space-y-3 text-sm text-paper/75">
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}
                </span>
              </span>
              <span className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="whitespace-pre-line">{siteConfig.contact.openingHoursLabel}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-paper/75 transition-colors hover:text-gold link-elegant"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-paper/75 transition-colors hover:text-gold link-elegant"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
            </address>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Informations</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-main border-t border-paper/10 py-6 text-xs text-paper/60 flex flex-wrap items-center justify-between gap-3 relative">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName} — Tous droits réservés.
        </span>
        <span className="text-paper/50">Conçu à Vannes, avec soin.</span>
      </div>
    </footer>
  );
}
