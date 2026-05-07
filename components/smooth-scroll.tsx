"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const lenis = lenisRef.current;

    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "";
    };

    forceTop();
    requestAnimationFrame(() => {
      forceTop();
      if (lenis) lenis.start();
    });
    setTimeout(forceTop, 50);
    setTimeout(forceTop, 150);
  }, [pathname]);

  return <>{children}</>;
}
