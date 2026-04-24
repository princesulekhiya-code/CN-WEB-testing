"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

export function NavigationLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"splash" | "nav" | "idle">("splash");
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevPathname = useRef(pathname);

  const dismissSplash = useCallback(() => {
    setPhase("idle");
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.playbackRate = 1.8;
    el.currentTime = 0;
    el.play().catch(() => {});

    const onEnd = () => dismissSplash();
    el.addEventListener("ended", onEnd);

    const safety = window.setTimeout(dismissSplash, 6000);
    return () => {
      el.removeEventListener("ended", onEnd);
      window.clearTimeout(safety);
    };
  }, [dismissSplash]);

  useEffect(() => {
    if (phase === "splash") return;
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setPhase("idle");
    }
  }, [pathname, phase]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (phase === "splash") return;
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
      ) return;
      if (href !== pathname) {
        setPhase("nav");
        window.setTimeout(() => setPhase("idle"), 500);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, phase]);

  useEffect(() => {
    if (phase === "idle") return;
    return acquireBodyScrollLock();
  }, [phase]);

  const isActive = phase !== "idle";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[10001] flex min-h-dvh w-full flex-col bg-black transition-opacity",
        phase === "splash" ? "duration-300" : "duration-200",
        isActive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!isActive}
    >
      {phase === "splash" ? (
        <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center bg-black">
          <div className="relative flex min-h-0 w-full max-w-[min(1400px,100%)] flex-1 items-center justify-center">
            <video
              ref={videoRef}
              className="h-auto w-full max-h-[min(85dvh,92vw)] object-contain"
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              <source src="/loader/cloud-nexus-splash.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      ) : phase === "nav" ? (
        <div className="flex min-h-0 w-full flex-1 items-center justify-center bg-black">
          <div className="h-10 w-10 rounded-full border-[3px] border-white/10 border-t-[#4EB3E8] animate-spin" />
        </div>
      ) : null}
    </div>
  );
}
