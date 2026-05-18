"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "./motion-gate";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  /** Sélecteur des éléments à animer en fade au scroll. */
  itemSelector?: string;
};

/**
 * Wrapper générique GSAP : déclenche fade-up sur chaque sous-élément
 * à mesure qu'il entre dans le viewport. Bypass complet si reducedMotion.
 */
export function ScrollPinSection({ children, className, itemSelector = ".pin-item" }: Props) {
  const reducedMotion = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) return;
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(itemSelector);
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 75%",
                end: "bottom 35%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }, root);
      return () => ctx.revert();
    },
    { scope: root, dependencies: [reducedMotion] },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
