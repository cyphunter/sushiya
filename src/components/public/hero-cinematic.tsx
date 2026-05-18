"use client";

import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { useReducedMotion } from "@/components/motion/motion-gate";

/**
 * Hero plein écran cinématique.
 * - Image hero pleine page (LCP optimisé)
 * - Overlay dégradé simple bas pour la lisibilité texte
 * - Watermark kanji 寿司 géant en filigrane
 * - Headline serif géant + sub-baseline
 * - 2 CTA magnétiques (Réserver / Découvrir la carte)
 * - Badge horaires en bas
 */
export function HeroCinematic() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Sushi-Ya Vannes — accueil"
      className="relative isolate overflow-hidden bg-deeper"
    >
      {/* Image hero plein écran */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hero-sushi-platter.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        {/* Overlay dégradé sombre pour la lisibilité (bas → haut) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-deeper via-deeper/85 to-deeper/35"
        />
        {/* Léger voile latéral pour faire ressortir le texte gauche */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-deeper/80 via-deeper/30 to-transparent"
        />
      </div>

      {/* Watermark kanji 寿司 (sushi) géant en filigrane */}
      <span
        aria-hidden="true"
        className="kanji-watermark kanji-watermark-paper pointer-events-none absolute -top-12 -right-8 md:-right-16 select-none text-[clamp(20rem,52vw,52rem)] leading-[0.78]"
      >
        寿司
      </span>

      <div className="container-main relative flex min-h-[100svh] flex-col justify-center py-32 md:py-40">
        {/* Eyebrow */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow !text-gold"
        >
          Restaurant japonais · Vannes · depuis 2021
        </motion.p>

        {/* Headline display géant */}
        <motion.h1
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] text-paper drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          L&apos;art du{" "}
          <span className="ital-mark-paper italic">sushi.</span>
          <span className="block">À Vannes.</span>
        </motion.h1>

        {/* Sub-baseline */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-paper md:text-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          Sushis traditionnels et créations contemporaines, façonnés à la minute à partir
          de saumon écossais Label Rouge, thon albacore, riz bio Camargue et algues Nori
          bretonnes.
        </motion.p>

        {/* CTAs magnétiques */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <Link
              href={siteConfig.ctas.reserve.href}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-paper shadow-warm transition-all hover:bg-brand-deep hover:shadow-lg"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.ctas.reserve.label}
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href={siteConfig.ctas.discoverMenu.href}
              className="inline-flex items-center gap-2 rounded-full border-2 border-paper/80 bg-transparent px-7 py-4 text-base font-medium text-paper transition-all hover:bg-paper hover:text-deeper"
            >
              {siteConfig.ctas.discoverMenu.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Badge horaires bas de hero */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={reducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-16 inline-flex max-w-md items-center gap-3 rounded-2xl border border-paper/25 bg-deeper/60 px-5 py-3 text-sm text-paper backdrop-blur-md md:mt-20"
        >
          <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <span className="whitespace-pre-line leading-relaxed">
            {siteConfig.contact.openingHoursLabel}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
