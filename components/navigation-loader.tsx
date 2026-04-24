"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { SplashLoaderContent } from "@/components/splash-loader-content";
import { cn } from "@/lib/utils";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

export function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const isFirstNav = useRef(true);

  const handleVideoEnd = useCallback(() => {
    setLoading(false);
    setShowSplash(false);
    window.setTimeout(() => setVisible(false), 300);
  }, []);

  useEffect(() => {
    const safety = window.setTimeout(handleVideoEnd, 6000);
    return () => window.clearTimeout(safety);
  }, [handleVideoEnd]);

  const startLoading = useCallback(() => {
    setLoading(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }
    if (showSplash) return;
    setLoading(false);
    const timer = window.setTimeout(() => setVisible(false), 200);
    return () => window.clearTimeout(timer);
  }, [pathname, showSplash]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (showSplash) return;
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
  }, [pathname, startLoading, showSplash]);

  useEffect(() => {
    if (!visible) return;
    return acquireBodyScrollLock();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[10001] flex min-h-dvh w-full flex-col bg-black transition-opacity",
        showSplash ? "duration-300" : "duration-200",
        loading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      role={loading ? "status" : "presentation"}
      aria-busy={loading}
      aria-live={loading ? "polite" : undefined}
      aria-hidden={!loading}
    >
      <SplashLoaderContent
        active={loading}
        mode={showSplash ? "video" : "spinner"}
        onVideoEnd={handleVideoEnd}
      />
    </div>
  );
}
