import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

type Photo = {
  src: string;
  alt: string;
  /** Hauteur preset pour effet masonry. */
  span?: "tall" | "wide" | "square";
};

const DEFAULT_PHOTOS: ReadonlyArray<Photo> = [
  { src: "/images/ambiance/salle-1.webp", alt: "Salle du restaurant, ambiance tamisée", span: "tall" },
  { src: "/images/ambiance/bar-sushi.webp", alt: "Comptoir sushi du chef", span: "square" },
  { src: "/images/ambiance/chef-decoupe.webp", alt: "Découpe du poisson au couteau yanagiba", span: "wide" },
  { src: "/images/ambiance/nappage-detail.webp", alt: "Détail dressage : plateau, baguettes, sauce soja", span: "square" },
  { src: "/images/ambiance/facade.webp", alt: "Façade du restaurant rue Thomas de Closmadeuc", span: "tall" },
  { src: "/images/ambiance/salle-2.webp", alt: "Vue d'ensemble de la salle, soir", span: "square" },
  { src: "/images/ambiance/huitres-saveurs-japonaises.webp", alt: "Huîtres du golfe revisitées aux saveurs japonaises", span: "square" },
  { src: "/images/ambiance/cafe-gourmand.webp", alt: "Café gourmand franco-japonais", span: "wide" },
];

const SPAN_CLASSES: Record<NonNullable<Photo["span"]>, string> = {
  tall: "aspect-[3/4] md:row-span-2",
  wide: "aspect-[16/10] md:col-span-2",
  square: "aspect-square",
};

type Props = {
  photos?: ReadonlyArray<Photo>;
  /** Variation visuelle : fond clair ou foncé. */
  tone?: "default" | "deep";
};

export function AmbianceGallery({ photos = DEFAULT_PHOTOS, tone = "default" }: Props) {
  const isDeep = tone === "deep";
  return (
    <section
      aria-labelledby="ambiance-title"
      className={isDeep ? "section-ink py-24 md:py-32" : "bg-paper py-24 md:py-32"}
    >
      <div className="container-main">
        <SectionHeading
          tone={isDeep ? "paper" : "default"}
          eyebrow="L'atmosphère"
          title="Une intimité, un comptoir, un instant."
          intro="Le restaurant accueille une trentaine de couverts. Lumière douce, comptoir sushi en face du chef : on vient pour la cuisine, on reste pour le moment."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 md:auto-rows-[180px]">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={Math.min(i * 0.05, 0.3)}
              className={`group relative overflow-hidden ${
                isDeep ? "border border-paper/15 bg-deep" : "border border-ink/15 bg-deeper"
              } ${SPAN_CLASSES[photo.span ?? "square"]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                loading={i < 2 ? "eager" : "lazy"}
                width={800}
                height={800}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
