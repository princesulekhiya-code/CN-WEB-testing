"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { SplashLoaderContent } from "@/components/splash-loader-content";
import { cn } from "@/lib/utils";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

export function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    setLoading(false);
    const timer = window.setTimeout(() => setVisible(false), 150);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      if (href !== pathname) {
        startLoading();
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, startLoading]);

  useEffect(() => {
    if (!visible) return;
    return acquireBodyScrollLock();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[10001] flex min-h-dvh w-full flex-col bg-black transition-opacity duration-150",
        loading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      role={loading ? "status" : "presentation"}
      aria-busy={loading}
      aria-live={loading ? "polite" : undefined}
      aria-hidden={!loading}
    >
      <SplashLoaderContent active={loading} />
    </div>
  );
}
