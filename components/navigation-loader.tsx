"use client";

import { useEffect, useRef, useReducer } from "react";
import { usePathname } from "next/navigation";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

type Phase = "splash" | "nav" | "idle";

export function NavigationLoader() {
  const pathname = usePathname();
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  const phase = useRef<Phase>("splash");
  const pathnameRef = useRef(pathname);
  const overlayRef = useRef<HTMLDivElement>(null);

  function setPhase(p: Phase) {
    phase.current = p;
    forceUpdate();
  }

  useEffect(() => {
    if (phase.current !== "splash") return;
    const safety = window.setTimeout(() => setPhase("idle"), 6000);
    return () => window.clearTimeout(safety);
  }, []);

  useEffect(() => {
    if (phase.current === "splash") return;
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      setPhase("idle");
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (phase.current === "splash") return;
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
    if (phase.current === "idle") return;
    return acquireBodyScrollLock();
  }, [phase.current]);

  const handleVideoEnd = () => setPhase("idle");

  const p = phase.current;

  if (p === "idle") {
    return null;
  }

  if (p === "splash") {
    return (
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[10001] flex min-h-dvh w-full flex-col items-center justify-center bg-black"
        style={{ opacity: 1 }}
      >
        <video
          className="h-auto w-full max-w-[1400px] max-h-[85dvh] object-contain"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          ref={(el) => {
            if (el) {
              el.playbackRate = 1.8;
            }
          }}
        >
          <source src="/loader/cloud-nexus-splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[10001] flex min-h-dvh w-full items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="h-10 w-10 rounded-full border-[3px] border-white/10 border-t-[#4EB3E8] animate-spin" />
    </div>
  );
}
