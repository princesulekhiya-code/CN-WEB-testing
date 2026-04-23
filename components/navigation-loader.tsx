"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { SplashLoaderContent } from "@/components/splash-loader-content";
import { cn } from "@/lib/utils";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

const SPLASH_KEY = "cn_splash_shown";

export function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const splashChecked = useRef(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (splashChecked.current) return;
    splashChecked.current = true;
    if (!sessionStorage.getItem(SPLASH_KEY)) {
      setShowSplash(true);
      setVisible(true);
      setLoading(true);
      const safety = window.setTimeout(() => {
        sessionStorage.setItem(SPLASH_KEY, "1");
        setLoading(false);
        setTimeout(() => { setVisible(false); setShowSplash(false); }, 300);
      }, 8000);
      return () => window.clearTimeout(safety);
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    sessionStorage.setItem(SPLASH_KEY, "1");
    setLoading(false);
    window.setTimeout(() => {
      setVisible(false);
      setShowSplash(false);
    }, 300);
  }, []);

  const startLoading = useCallback(() => {
    setLoading(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
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
