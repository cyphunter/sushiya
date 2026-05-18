#!/usr/bin/env node
/**
 * Script de scraping des images existantes du site sushiya-56.com.
 * Télécharge les visuels identifiés dans `public/images/source/`.
 *
 * Étapes manuelles ensuite :
 *   1. Convertir les images en WebP via https://squoosh.app ou `cwebp -q 78 in.jpg -o out.webp`.
 *   2. Cibles de poids :
 *      - Hero ≤ 200 KB (1920×1080 max)
 *      - Plats ≤ 80 KB (800×600 max)
 *      - Ambiance ≤ 120 KB (1200×800 max)
 *   3. Renommer / déplacer dans public/images/{hero,menu,ambiance,matieres,rituel}/
 *      en respectant les `imageSlug` référencés dans `src/data/menu/*.ts`.
 *
 * Usage : npm run fetch-images
 */

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const OUT = "public/images/source";

/**
 * Liste des URLs WordPress identifiées sur sushiya-56.com.
 * Format : { url: string, out: string }
 * Le nom de sortie reprend le slug attendu côté code (sans extension).
 */
const URLS = [
  // Hero / ambiance
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/rec-IMG_0078-1024x556.jpg", out: "ambiance-salle-1024.jpg" },
  // Logo
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/logo_rond-removebg-preview-3.png", out: "logo-rond.png" },
  // Plats — page sushis
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/sashimis-sushiya-vannes-300x225.png", out: "sashimis-300.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/nigiri-sushis-sushiya-vannes-300x269.png", out: "nigiri-sushis-300.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/california-fabrication-artisanale-sushiya-vannes-300x200.jpg", out: "california-fabrication-300.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2024/05/CHIRASHI-TRAD-225x300.jpg", out: "chirashi-traditionnel-225.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2024/05/DONBURI-198x300.jpg", out: "donburi-198.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2024/05/NIIGIRI-WAGYU-300x225.jpg", out: "nigiri-wagyu-300.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2024/05/PHILA-225x300.jpg", out: "california-philadelphia-225.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2024/05/SASHIMI-SERIOLE-2-300x232.jpg", out: "sashimi-seriole-300.jpg" },
  // Menus midi
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/assortiment-sushis-restaurant-suhiya-vannes.png", out: "menu-midi-assortiment.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/menu-makis-a-emporter-suhiya-vannes.png", out: "menu-midi-maki.png" },
  // Détails
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/decoupe-poisson-sushiya-vannes-150x150.jpg", out: "decoupe-poisson-150.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/nigiri-saumon-ecossais-thon-albacore-150x150.jpg", out: "nigiri-saumon-thon-150.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/physalis-dessert-sushiya-150x150.jpg", out: "dessert-physalis-150.jpg" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/huitre-golfe-morbihan-150x150.jpg", out: "huitre-golfe-150.jpg" },
  // Entrées / accompagnements / desserts
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/salade-removebg-preview.png", out: "salade.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/bol_riz-removebg-preview__2_-removebg-preview.png", out: "bol-riz.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/moji-fleur-de-cerisier-sushiya-vannes.png", out: "mochi-fleur-cerisier.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/02/cafe-gourmand-sushiya-vannes.png", out: "cafe-gourmand.png" },
  { url: "https://sushiya-56.com/wp-content/uploads/2021/01/physalis-sushiya-vannes.png", out: "physalis.png" },
];

async function main() {
  await mkdir(OUT, { recursive: true });
  let ok = 0;
  let fail = 0;
  for (const { url, out } of URLS) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (sushiya-56.fr site fetch)" },
      });
      if (!res.ok) {
        console.warn(`SKIP ${url} → ${res.status}`);
        fail++;
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(join(OUT, out), buf);
      console.log(`OK  ${out} (${(buf.length / 1024).toFixed(1)} KB)`);
      ok++;
    } catch (e) {
      console.warn(`ERR ${url} : ${e instanceof Error ? e.message : "unknown"}`);
      fail++;
    }
  }
  console.log("\n──────────────────────────");
  console.log(`Téléchargé : ${ok} / ${URLS.length}  (échecs : ${fail})`);
  console.log("Source brute déposée dans :", OUT);
  console.log("\nÉtape suivante :");
  console.log("  1. Convertir en WebP (squoosh.app ou cwebp -q 78)");
  console.log("  2. Renommer + déposer dans public/images/{hero,menu,ambiance,matieres,rituel}/");
  console.log("     en respectant les `imageSlug` des fichiers src/data/menu/*.ts");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
