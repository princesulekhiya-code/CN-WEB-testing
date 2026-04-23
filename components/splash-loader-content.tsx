"use client";

import { cn } from "@/lib/utils";

type SplashLoaderContentProps = {
  showIndicator?: boolean;
  active?: boolean;
  className?: string;
};

export function SplashLoaderContent({
  showIndicator = true,
  active = true,
  className,
}: SplashLoaderContentProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-4 bg-black px-4 py-6 sm:px-8",
        "motion-reduce:animate-none",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-[3px] border-white/10 border-t-[#4EB3E8] animate-spin" />
      </div>

      {showIndicator && active ? (
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="sr-only">Loading</span>
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_infinite]" />
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_0.15s_infinite]" />
          <div className="h-1 w-1 rounded-full bg-[#4EB3E8] animate-[pulse_0.8s_ease-in-out_0.3s_infinite]" />
        </div>
      ) : null}
    </div>
  );
}
