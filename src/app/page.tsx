import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { HeroCinematic } from "@/components/public/hero-cinematic";
import { MarqueeBand } from "@/components/public/marquee-band";
import { ManifestPhilosophie } from "@/components/public/manifest-philosophie";
import { VedettesCarte } from "@/components/public/vedettes-carte";
import { LeRituel } from "@/components/public/le-rituel";
import { AmbianceGallery } from "@/components/public/ambiance-gallery";
import { TemoignagesCarousel } from "@/components/public/temoignages-carousel";
import { CtaReservation } from "@/components/public/cta-reservation";
import { InfoPratique } from "@/components/public/info-pratique";
import { getMenuItem, type MenuItem } from "@/data/menu";

export const metadata: Metadata = buildMetadata({
  title: null,
  description: siteConfig.description,
  path: "/",
});

const VEDETTES_SLUGS = [
  "nigiri-boeuf-wagyu",
  "tartare-thon-truffe",
  "chirashi-traditionnel",
  "menu-omakase",
  "assortiment-desserts",
  "california-philadelphia",
] as const;

export default function HomePage() {
  const vedettes = VEDETTES_SLUGS.map((slug) => getMenuItem(slug)).filter(
    (item): item is MenuItem => Boolean(item),
  );

  return (
    <main id="main-content">
      <HeroCinematic />
      <MarqueeBand />
      <ManifestPhilosophie tone="default" />
      <VedettesCarte items={vedettes} />
      <LeRituel />
      <AmbianceGallery />
      <TemoignagesCarousel />
      <CtaReservation />
      <section className="container-main py-20 md:py-28">
        <InfoPratique />
      </section>
    </main>
  );
}
