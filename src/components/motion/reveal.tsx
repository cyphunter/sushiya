"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "./motion-gate";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Décalage Y initial en px. */
  y?: number;
  /** Durée en secondes. */
  duration?: number;
  /** Re-trigger l'animation à chaque entrée dans le viewport. */
  once?: boolean;
};

/**
 * Wrapper fade-up déclenché à l'entrée dans le viewport.
 * Respecte automatiquement `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 32,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
