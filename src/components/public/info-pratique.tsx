import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InfoPratique() {
  return (
    <section
      aria-labelledby="info-pratique-title"
      className="relative overflow-hidden rounded-3xl bg-deeper p-10 text-paper md:p-14 noise-overlay"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative">
        <p className="eyebrow !text-gold">Nous trouver</p>
        <h2
          id="info-pratique-title"
          className="mt-5 font-display text-3xl text-paper md:text-5xl leading-tight"
        >
          13 rue Thomas de Closmadeuc,
          <br />
          <span className="ital-mark-gold italic">au cœur de Vannes.</span>
        </h2>

        <div className="mt-10 grid gap-6 text-sm md:grid-cols-2">
          <InfoItem
            icon={MapPin}
            label="Adresse"
            value={
              <address className="not-italic">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.postalCode} {siteConfig.contact.city}
                {siteConfig.contact.mapUrl ? (
                  <>
                    <br />
                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider text-gold link-elegant"
                    >
                      Itinéraire Google Maps
                    </a>
                  </>
                ) : null}
              </address>
            }
          />
          <InfoItem
            icon={Clock}
            label="Horaires"
            value={<p className="whitespace-pre-line">{siteConfig.contact.openingHoursLabel}</p>}
          />
          <InfoItem
            icon={Phone}
            label="Téléphone"
            value={
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="link-elegant hover:text-gold"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            }
          />
          <InfoItem
            icon={Mail}
            label="Email"
            value={
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="link-elegant hover:text-gold"
              >
                {siteConfig.contact.email}
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-paper/5 p-5 ring-1 ring-paper/15 backdrop-blur-sm">
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-deeper"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="text-paper/90">
        <p className="text-xs uppercase tracking-wider text-gold/90">{label}</p>
        <div className="mt-1.5 text-paper">{value}</div>
      </div>
    </div>
  );
}
