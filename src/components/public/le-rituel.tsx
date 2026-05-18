"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { leRituel } from "@/data/le-rituel";
import { useReducedMotion } from "@/components/motion/motion-gate";
import { SectionHeading } from "./section-heading";
import { KanjiWatermark } from "./kanji-watermark";

gsap.registerPlugin(ScrollTrigger);

/**
 * Les 4 étapes du rituel sushi-ya, en fond sombre dramatique.
 * - Fade-up + scale au scroll via GSAP ScrollTrigger
 * - Bypass complet si reducedMotion
 */
export function LeRituel() {
  const reducedMotion = useReducedMotion();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;
      const ctx = gsap.context(() => {
        const steps = gsap.utils.toArray<HTMLElement>(".rituel-step");
        steps.forEach((step) => {
          const img = step.querySelector<HTMLElement>(".rituel-img");
          const txt = step.querySelector<HTMLElement>(".rituel-text");
          if (img) {
            gsap.fromTo(
              img,
              { y: 80, opacity: 0, scale: 0.96 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: step,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          }
          if (txt) {
            gsap.fromTo(
              txt,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                delay: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: step,
                  start: "top 65%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          }
        });
      }, root);
      return () => ctx.revert();
    },
    { scope: root, dependencies: [reducedMotion] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="rituel-title"
      className="relative isolate overflow-hidden section-ink py-28 md:py-36"
    >
      <KanjiWatermark text="儀式" position="top-right" size="xl" tone="gold" />

      <div className="container-main relative">
        <SectionHeading
          tone="paper"
          eyebrow="Le rituel"
          title={
            <>
              Quatre gestes,{" "}
              <span className="ital-mark-gold italic">une exigence</span>.
            </>
          }
          intro="Du choix du poisson au dressage minute, le sushi-ya est un rituel. Voici les quatre étapes qui structurent chacun de nos plats."
        />

        <div className="mt-20 space-y-28 md:space-y-36">
          {leRituel.map((step, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article
                key={step.number}
                className="rituel-step grid items-center gap-10 md:grid-cols-12 md:gap-14"
              >
                <div
                  className={`rituel-img relative md:col-span-6 ${
                    isReverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border border-paper/15 bg-paper/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/rituel/${step.imageSlug}.webp`}
                      alt=""
                      className="h-full w-full object-cover opacity-90"
                      loading="lazy"
                      width={800}
                      height={1000}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-4 select-none font-jp text-[8rem] leading-none text-paper/15"
                    >
                      {step.kanji}
                    </span>
                  </div>
                </div>

                <div
                  className={`rituel-text md:col-span-6 ${
                    isReverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <p
                    aria-hidden="true"
                    className="font-display text-7xl font-light tabular-nums text-gold md:text-8xl"
                  >
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-paper">
                    {step.title}
                    <span className="ml-4 align-middle font-jp text-3xl text-brand md:text-4xl">
                      {step.kanji}
                    </span>
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
                    {step.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
