import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { matieresPremieres, specialites } from "@/data/matieres-premieres";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ManifestPhilosophie } from "@/components/public/manifest-philosophie";
import { MatierePremiereCard } from "@/components/public/matiere-premiere-card";
import { AmbianceGallery } from "@/components/public/ambiance-gallery";
import { CtaReservation } from "@/components/public/cta-reservation";
import { SectionHeading } from "@/components/public/section-heading";
import { KanjiWatermark } from "@/components/public/kanji-watermark";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Le restaurant — notre philosophie et nos signatures",
  description:
    "Saumon écossais Label Rouge, thon albacore, riz bio Camargue, algues nori bretonnes : nos matières premières. Et nos signatures franco-japonaises : huîtres du golfe revisitées, café gourmand.",
  path: routes.restaurant,
});

export default function LeRestaurantPage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden section-ink">
        <KanjiWatermark text="心" position="top-right" size="xl" tone="gold" />
        <div className="container-main relative py-20 md:py-28">
          <Breadcrumb
            tone="paper"
            steps={[
              { label: "Accueil", href: "/" },
              { label: "Le restaurant", href: routes.restaurant },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <p className="eyebrow !text-gold">Notre histoire</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1] text-paper">
              Le sushi, totem de la cuisine japonaise,{" "}
              <span className="ital-mark-gold italic">se décline à Vannes</span>.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-paper/85 md:text-xl">
              Ouvert en juillet 2021, Sushi-Ya propose à Vannes une cuisine japonaise
              traditionnelle réinventée — élaborée à partir de produits ultra-frais,
              labellisés et locaux dès que possible.
            </p>
          </div>
        </div>
      </section>

      <ManifestPhilosophie withHeader tone="default" />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-main">
          <SectionHeading
            eyebrow="Nos matières premières"
            title={
              <>
                Quatre produits,{" "}
                <span className="ital-mark italic">quatre certitudes</span>.
              </>
            }
            intro="Saumon écossais Label Rouge, thon albacore pêché à la ligne, riz japonica bio cultivé en Camargue, algues nori récoltées sur le littoral breton. Notre carte est entièrement bâtie autour de ces quatre piliers."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {matieresPremieres.map((m, i) => (
              <MatierePremiereCard key={m.slug} item={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-ink py-24 md:py-32">
        <div className="container-main">
          <SectionHeading
            tone="paper"
            eyebrow="Nos signatures"
            title={
              <>
                Le terroir breton{" "}
                <span className="ital-mark-gold italic">rencontre le Japon</span>.
              </>
            }
            intro="Deux créations qui résument notre maison : nos huîtres du golfe du Morbihan revisitées avec les saveurs japonaises, et notre café gourmand bistronomique aux parfums asiatiques."
          />
          <div className="mt-14 space-y-16 md:space-y-24">
            {specialites.map((s, i) => {
              const isReverse = i % 2 === 1;
              return (
                <Reveal key={s.slug} delay={i * 0.1}>
                  <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                    <div className={`md:col-span-6 ${isReverse ? "md:order-2" : "md:order-1"}`}>
                      <div className="aspect-[4/3] overflow-hidden border border-paper/15 bg-deep">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/menu/${s.imageSlug}.webp`}
                          alt=""
                          className="h-full w-full object-cover opacity-90"
                          loading="lazy"
                          width={800}
                          height={600}
                        />
                      </div>
                    </div>
                    <div className={`md:col-span-6 ${isReverse ? "md:order-1" : "md:order-2"}`}>
                      <p className="eyebrow !text-gold">Signature maison</p>
                      <h3 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight text-paper">
                        {s.name}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-paper/80 md:text-lg">
                        {s.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <AmbianceGallery />

      <CtaReservation />
    </main>
  );
}
