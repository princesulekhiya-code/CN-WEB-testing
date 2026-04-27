"use client";

import { useState, useEffect } from "react";

export function useAnimatedCount(target: number, active: boolean, delay = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const timeout = setTimeout(() => {
      const start = performance.now();
      let raf: number;

      const animate = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, delay);

    return () => clearTimeout(timeout);
  }, [active, target, delay]);

  return count;
}
