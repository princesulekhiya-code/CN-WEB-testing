"use client";

import { useEffect } from "react";
import { SplashLoaderContent } from "@/components/splash-loader-content";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

/**
 * Full-viewport route loading UI (App Router `loading.tsx`).
 * z-index above site chrome (e.g. sticky nav at z-50).
 */
export function SplashLoaderScreen() {
  useEffect(() => {
    return acquireBodyScrollLock();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[10000] flex min-h-dvh w-full flex-col bg-black"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <SplashLoaderContent active />
    </div>
  );
}
