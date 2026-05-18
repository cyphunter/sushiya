import type { BreadcrumbList, ListItem, WithContext } from "schema-dts";
import { canonicalUrl } from "@/lib/site-config";

export type BreadcrumbStep = { label: string; href: string };

export function buildBreadcrumbSchema(
  steps: ReadonlyArray<BreadcrumbStep>,
): WithContext<BreadcrumbList> {
  const items: ListItem[] = steps.map((step, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: step.label,
    item: canonicalUrl(step.href),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
