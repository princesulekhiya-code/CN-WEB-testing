"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { acquireBodyScrollLock } from "@/lib/body-scroll-lock";

export function NavigationLoader() {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const prevPath = useRef(pathname);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const splashDone = useRef(false);

  const handleVideoEnd = () => {
    splashDone.current = true;
    setShowSplash(false);
  };

  useEffect(() => {
    const safety = setTimeout(() => {
      splashDone.current = true;
      setShowSplash(false);
    }, 6000);
    return () => clearTimeout(safety);
  }, []);

  useEffect(() => {
    if (!splashDone.current) return;
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    setShowNav(true);
    if (navTimeout.current) clearTimeout(navTimeout.current);
    navTimeout.current = setTimeout(() => setShowNav(false), 400);
    return () => { if (navTimeout.current) clearTimeout(navTimeout.current); };
  }, [pathname]);

  useEffect(() => {
    if (!showSplash && !showNav) return;
    return acquireBodyScrollLock();
  }, [showSplash, showNav]);

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[10001] flex min-h-dvh w-full flex-col items-center justify-center bg-black">
        <video
          className="h-auto w-full max-w-[1400px] max-h-[85dvh] object-contain"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          ref={(el) => { if (el) el.playbackRate = 1.8; }}
        >
          <source src="/loader/cloud-nexus-splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  if (showNav) {
    return (
      <div className="fixed inset-0 z-[10001] flex min-h-dvh w-full items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-200">
        <div className="h-10 w-10 rounded-full border-[3px] border-white/10 border-t-[#4EB3E8] animate-spin" />
      </div>
    );
  }

  return null;
}
