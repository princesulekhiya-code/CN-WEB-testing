"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SplashLoaderContentProps = {
  showIndicator?: boolean;
  /** Pause playback when overlay is fading out or hidden (e.g. client navigation). */
  active?: boolean;
  className?: string;
};

export function SplashLoaderContent({
  showIndicator = true,
  active = true,
  className,
}: SplashLoaderContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (!active) {
      el.pause();
      return;
    }

    el.muted = true;
    el.currentTime = 0;
    void el.play().catch(() => {
      /* Autoplay may be blocked; user still sees poster / first frame */
    });
  }, [active]);

  return (
    <div
      className={cn(
        "flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-6 bg-black px-4 py-6 sm:px-8",
        "pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]",
        "motion-reduce:animate-none",
        className
      )}
    >
      <div
        className={cn(
          "relative flex min-h-0 w-full max-w-[min(1400px,100%)] flex-1 items-center justify-center",
          "animate-[fadeInScale_0.4s_ease-out_both] motion-reduce:animate-none"
        )}
      >
        <video
          ref={videoRef}
          className={cn(
            "h-auto w-full max-h-[min(85dvh,92vw)] object-contain",
            "motion-reduce:transition-none"
          )}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          aria-label="Cloud Nexus loading animation"
        >
          <source src="/loader/cloud-nexus-splash.mp4" type="video/mp4" />
        </video>
      </div>

      {showIndicator ? (
        <div
          className="flex shrink-0 items-center justify-center gap-1.5 animate-[fadeIn_0.4s_ease-out_0.2s_both] motion-reduce:animate-none"
          aria-hidden
        >
          <span className="sr-only">Loading</span>
          <div className="h-1.5 w-1.5 rounded-full bg-[#4EB3E8] motion-reduce:animate-none animate-[pulse_1.2s_ease-in-out_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4EB3E8] motion-reduce:animate-none animate-[pulse_1.2s_ease-in-out_0.2s_infinite]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4EB3E8] motion-reduce:animate-none animate-[pulse_1.2s_ease-in-out_0.4s_infinite]" />
        </div>
      ) : null}
    </div>
  );
}
