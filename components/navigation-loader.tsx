"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

export function NavigationLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"splash" | "nav" | "idle">("splash");
  const videoRef = useRef<HTMLVideoElement>(null);
  const phaseRef = useRef(phase);
  const pathnameRef = useRef(pathname);

  phaseRef.current = phase;
  pathnameRef.current = pathname;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.playbackRate = 1.8;
    el.currentTime = 0;
    el.play().catch(() => {});

    const dismiss = () => setPhase("idle");
    el.addEventListener("ended", dismiss);
    const safety = window.setTimeout(dismiss, 6000);
    return () => {
      el.removeEventListener("ended", dismiss);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (phaseRef.current === "splash") return;
    setPhase("idle");
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (phaseRef.current === "splash") return;
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
      if (href !== pathnameRef.current) {
        setPhase("nav");
        window.setTimeout(() => setPhase("idle"), 500);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

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
