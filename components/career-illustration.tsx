"use client";

import { motion } from "framer-motion";

export function CareerIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background circle */}
        <circle cx="200" cy="200" r="180" className="fill-[#4EB3E8]/[0.03] dark:fill-[#4EB3E8]/[0.05]" />
        <circle cx="200" cy="200" r="140" className="fill-[#4EB3E8]/[0.04] dark:fill-[#4EB3E8]/[0.06]" />

        {/* Desk */}
        <rect x="80" y="250" width="240" height="12" rx="6" className="fill-[#4EB3E8]/20 dark:fill-[#4EB3E8]/25" />
        <rect x="110" y="262" width="8" height="50" rx="4" className="fill-[#4EB3E8]/15 dark:fill-[#4EB3E8]/20" />
        <rect x="282" y="262" width="8" height="50" rx="4" className="fill-[#4EB3E8]/15 dark:fill-[#4EB3E8]/20" />

        {/* Monitor */}
        <rect x="130" y="170" width="140" height="80" rx="8" className="fill-black/[0.06] dark:fill-white/[0.08] stroke-black/[0.12] dark:stroke-white/[0.12]" strokeWidth="2" />
        <rect x="138" y="178" width="124" height="64" rx="4" className="fill-[#4EB3E8]/10 dark:fill-[#4EB3E8]/15" />

        {/* Code lines on screen */}
        <rect x="148" y="190" width="50" height="4" rx="2" className="fill-[#4EB3E8]/40" />
        <rect x="148" y="200" width="80" height="4" rx="2" className="fill-emerald-500/30" />
        <rect x="148" y="210" width="35" height="4" rx="2" className="fill-purple-500/30" />
        <rect x="188" y="210" width="45" height="4" rx="2" className="fill-[#4EB3E8]/25" />
        <rect x="148" y="220" width="65" height="4" rx="2" className="fill-amber-500/25" />
        <rect x="148" y="230" width="40" height="4" rx="2" className="fill-emerald-500/30" />

        {/* Monitor stand */}
        <rect x="190" y="250" width="20" height="4" rx="2" className="fill-black/[0.08] dark:fill-white/[0.1]" />
        <rect x="180" y="248" width="40" height="4" rx="2" className="fill-black/[0.06] dark:fill-white/[0.08]" />

        {/* Person - body */}
        <circle cx="200" cy="130" r="28" className="fill-[#4EB3E8]/15 dark:fill-[#4EB3E8]/20 stroke-[#4EB3E8]/30" strokeWidth="2" />
        {/* Face */}
        <circle cx="192" cy="126" r="3" className="fill-[#4EB3E8]/50" />
        <circle cx="208" cy="126" r="3" className="fill-[#4EB3E8]/50" />
        <path d="M192 136 Q200 142 208 136" className="stroke-[#4EB3E8]/40" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Person - body/shirt */}
        <path d="M175 158 Q175 148 185 145 L200 155 L215 145 Q225 148 225 158 L225 170 L175 170 Z" className="fill-[#4EB3E8]/20 dark:fill-[#4EB3E8]/25" />

        {/* Coffee cup */}
        <rect x="270" y="236" width="16" height="14" rx="3" className="fill-amber-500/20 dark:fill-amber-500/25 stroke-amber-500/30" strokeWidth="1.5" />
        <path d="M286 240 Q292 240 292 244 Q292 248 286 248" className="stroke-amber-500/25" strokeWidth="1.5" fill="none" />

        {/* Plant */}
        <rect x="95" y="230" width="14" height="20" rx="3" className="fill-emerald-500/15 stroke-emerald-500/25" strokeWidth="1.5" />
        <path d="M102 230 Q102 215 110 210" className="stroke-emerald-500/35" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M102 225 Q95 215 92 210" className="stroke-emerald-500/30" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="208" r="5" className="fill-emerald-500/20" />
        <circle cx="92" cy="208" r="5" className="fill-emerald-500/15" />
        <path d="M102 228 Q108 218 102 212" className="stroke-emerald-500/25" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="102" cy="210" r="4" className="fill-emerald-500/18" />

        {/* Floating icons */}
        <g className="animate-[float_4s_ease-in-out_infinite]">
          <rect x="60" y="100" width="36" height="36" rx="10" className="fill-purple-500/10 dark:fill-purple-500/15 stroke-purple-500/20" strokeWidth="1.5" />
          <text x="78" y="124" textAnchor="middle" className="fill-purple-500/60 dark:fill-purple-400/70" fontSize="16" fontWeight="bold">&lt;/&gt;</text>
        </g>

        <g className="animate-[float_5s_ease-in-out_0.5s_infinite]">
          <rect x="305" y="90" width="36" height="36" rx="10" className="fill-emerald-500/10 dark:fill-emerald-500/15 stroke-emerald-500/20" strokeWidth="1.5" />
          <text x="323" y="114" textAnchor="middle" className="fill-emerald-500/60 dark:fill-emerald-400/70" fontSize="14" fontWeight="bold">AI</text>
        </g>

        <g className="animate-[float_4.5s_ease-in-out_1s_infinite]">
          <rect x="50" y="200" width="30" height="30" rx="8" className="fill-amber-500/10 dark:fill-amber-500/15 stroke-amber-500/20" strokeWidth="1.5" />
          <text x="65" y="220" textAnchor="middle" className="fill-amber-500/60 dark:fill-amber-400/70" fontSize="13" fontWeight="bold">UX</text>
        </g>

        <g className="animate-[float_5.5s_ease-in-out_1.5s_infinite]">
          <rect x="320" y="190" width="32" height="32" rx="9" className="fill-[#4EB3E8]/10 dark:fill-[#4EB3E8]/15 stroke-[#4EB3E8]/20" strokeWidth="1.5" />
          <text x="336" y="212" textAnchor="middle" className="fill-[#4EB3E8]/60 dark:fill-[#4EB3E8]/70" fontSize="10" fontWeight="bold">☁️</text>
        </g>

        {/* Sparkle dots */}
        <circle cx="75" cy="155" r="2.5" className="fill-[#4EB3E8]/30 animate-pulse" />
        <circle cx="340" cy="145" r="2" className="fill-purple-500/25 animate-pulse" />
        <circle cx="320" cy="260" r="2.5" className="fill-emerald-500/25 animate-pulse" />
        <circle cx="85" cy="275" r="2" className="fill-amber-500/20 animate-pulse" />
      </svg>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#4EB3E8]/[0.06] rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/[0.04] rounded-full blur-[30px] pointer-events-none" />
    </div>
  );
}
