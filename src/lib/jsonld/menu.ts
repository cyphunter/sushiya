import type { Menu, MenuSection, MenuItem, WithContext } from "schema-dts";
import { canonicalUrl, siteConfig } from "@/lib/site-config";
import type { MenuItem as ItemDef } from "@/data/menu/types";
import { formatPrice } from "@/lib/menu-helpers";

type MenuSectionInput = {
  title: string;
  description?: string;
  items: ReadonlyArray<ItemDef>;
};

function buildItemSchema(item: ItemDef): MenuItem {
  return {
    "@type": "MenuItem",
    name: item.name,
    description: item.description ?? item.ingredients.join(", "),
    offers: {
      "@type": "Offer",
      price: item.priceEur.toFixed(2),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: item.priceEur.toFixed(2),
        priceCurrency: "EUR",
        valueAddedTaxIncluded: true,
        // Affichage humain (avec € + virgule)
        description: formatPrice(item.priceEur),
      },
    },
  };
}

/** Construit un `Menu` complet avec une ou plusieurs sections. */
export function buildMenuSchema({
  pagePath,
  name,
  sections,
}: {
  pagePath: string;
  name: string;
  sections: ReadonlyArray<MenuSectionInput>;
}): WithContext<Menu> {
  const menuSections: MenuSection[] = sections.map((sec) => ({
    "@type": "MenuSection",
    name: sec.title,
    description: sec.description,
    hasMenuItem: sec.items.map(buildItemSchema),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": canonicalUrl(`${pagePath}#menu`),
    name,
    inLanguage: "fr-FR",
    provider: {
      "@type": "Restaurant",
      "@id": canonicalUrl("/#restaurant"),
      name: siteConfig.fullName,
    },
    hasMenuSection: menuSections,
  };
}
