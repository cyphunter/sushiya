"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type MotionContextValue = { reducedMotion: boolean };

const MotionCtx = createContext<MotionContextValue>({ reducedMotion: false });

/**
 * Provider qui détecte `prefers-reduced-motion` et l'expose au reste de l'arbre.
 * Tous les composants animés (Reveal, MagneticButton, LeRituel, SmoothScrollProvider…)
 * doivent consulter ce gate via `useReducedMotion()`.
 */
export function MotionGate({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return <MotionCtx.Provider value={{ reducedMotion }}>{children}</MotionCtx.Provider>;
}

export function useReducedMotion(): boolean {
  return useContext(MotionCtx).reducedMotion;
}
