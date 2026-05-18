import type { Restaurant, OpeningHoursSpecification, WithContext } from "schema-dts";
import { canonicalUrl, siteConfig } from "@/lib/site-config";

/**
 * Schema.org Restaurant — entité root injectée dans `layout.tsx`.
 * Couvre cuisine, prix, réservation, horaires (midi + soir), géo, contact.
 */
export function buildRestaurantSchema(): WithContext<Restaurant> {
  const weekdays = [
    "https://schema.org/Tuesday",
    "https://schema.org/Wednesday",
    "https://schema.org/Thursday",
    "https://schema.org/Friday",
    "https://schema.org/Saturday",
  ] as const;

  const openingHours: OpeningHoursSpecification[] = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...weekdays],
      opens: "12:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...weekdays],
      opens: "19:00",
      closes: "21:00",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": canonicalUrl("/#restaurant"),
    name: siteConfig.fullName,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    image: `${siteConfig.url}/og.jpg`,
    description: siteConfig.description,
    priceRange: siteConfig.contact.priceRange,
    servesCuisine: ["Japanese", "Sushi"],
    acceptsReservations: "True",
    hasMenu: canonicalUrl("/sushiya-vannes-les-menus/"),
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: openingHours,
    sameAs: Object.values(siteConfig.social).filter(Boolean) as string[],
  };
}
