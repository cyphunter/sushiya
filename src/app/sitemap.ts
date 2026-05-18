import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { allPublicRoutes } from "@/lib/routes";

/**
 * Sitemap dynamique du site Sushi-Ya.
 *
 * Exclut les pages "Légal" (noindex via metadata) sauf le plan du site.
 * Toutes les URLs sont absolues et préservent le trailing slash WordPress.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/+$/, "");
  const now = new Date();

  type PriorityRule = { regex: RegExp; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };
  const rules: PriorityRule[] = [
    { regex: /^\/?$/, priority: 1, changeFrequency: "weekly" },
    { regex: /sushiya-vannes-les-menus/, priority: 0.95, changeFrequency: "weekly" },
    { regex: /les-menus-midi|les-california|makis-nigiris|menus-sushiya|entrees-accompagnements/, priority: 0.9, changeFrequency: "weekly" },
    { regex: /sushi-le-totem/, priority: 0.85, changeFrequency: "monthly" },
    { regex: /infos-pratiques/, priority: 0.8, changeFrequency: "monthly" },
    { regex: /contact/, priority: 0.6, changeFrequency: "yearly" },
    { regex: /actus/, priority: 0.4, changeFrequency: "monthly" },
    { regex: /plan-du-site/, priority: 0.2, changeFrequency: "yearly" },
  ];

  return allPublicRoutes
    // On exclut les pages Légal (noindex)
    .filter((r) => r.section !== "Légal")
    .map((route) => {
      const rule =
        rules.find((rule) => rule.regex.test(route.href)) ?? rules[rules.length - 1];
      return {
        url: `${base}${route.href}`,
        lastModified: now,
        changeFrequency: rule.changeFrequency,
        priority: rule.priority,
      };
    });
}
