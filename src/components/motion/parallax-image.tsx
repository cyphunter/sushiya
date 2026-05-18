"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "./motion-gate";

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  /** Vitesse parallax (ratio par rapport au scroll). 0.15 = effet léger. */
  speed?: number;
};

/**
 * Conteneur qui translate son contenu en Y selon le scroll, en restant subtil.
 * Idéal pour images de hero, watermarks kanji, halos.
 */
export function ParallaxImage({ children, className, speed = 0.15 }: ParallaxImageProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-100 * speed}px`, `${100 * speed}px`]);

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
