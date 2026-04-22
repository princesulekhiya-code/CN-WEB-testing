'use client';

import { type FC, useRef, useCallback, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Code2, Smartphone, Globe, Cloud, Palette,
  Zap, TrendingUp, Brain, Shield, GitMerge, ChevronLeft, ChevronRight,
  Monitor, UsersRound, Package, Blocks, ShoppingBag, CloudCog, Settings, Boxes, ServerCog
} from 'lucide-react';

/* ══════════════════ PREMIUM ANIMATED VISUALS ══════════════════ */

/** 1. Custom Software – abstract overlapping isometric planes glowing */
const CustomSoftwareVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 rotate-[30deg] skew-x-[20deg] scale-90 group-hover:scale-100 transition-transform duration-1000">
      <div className="absolute inset-0 border border-[#006ea3]/20 bg-gradient-to-tr from-[#006ea3]/5 to-transparent rounded-xl translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 delay-100" />
      <div className="absolute inset-0 border border-[#8b5cf6]/20 bg-gradient-to-tr from-[#8b5cf6]/5 to-transparent rounded-xl translate-x-8 translate-y-4 group-hover:translate-x-4 transition-transform duration-1000 delay-200 backdrop-blur-sm" />
      <div className="absolute inset-0 border border-[#ec4899]/10 bg-gradient-to-tl from-[#ec4899]/5 to-transparent rounded-xl translate-x-16 group-hover:translate-x-8 transition-transform duration-1000 delay-300 backdrop-blur-md" />
    </div>
  </div>
);

/** 2. UI/UX Design – smooth morphing glassmorphism blur orbs */
const UIUXVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-0 bottom-0 w-48 h-48 blur-2xl opacity-40 mix-blend-screen translate-y-4 group-hover:translate-y-0 transition-transform duration-1000">
      <div className="absolute top-4 left-4 w-24 h-24 bg-[#006ea3] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#8b5cf6] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#ec4899] rounded-full mix-blend-multiply animate-[pulse_4s_ease-in-out_infinite_2s]" />
    </div>
  </div>
);

/** 3. AI, ML & Data Science – central node emitting soft ripple rings */
const AIMLVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute -right-8 -bottom-8 w-64 h-64 flex items-center justify-center">
      <div className="absolute w-2 h-2 bg-[#006ea3] rounded-full shadow-[0_0_20px_4px_#006ea3] z-10" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="absolute border border-[#006ea3]/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ width: `${i * 3}rem`, height: `${i * 3}rem`, animationDelay: `${i * 1}s` }} />
      ))}
      {/* Orbiting data points */}
      <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
        <div className="absolute top-4 left-1/2 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full shadow-[0_0_10px_#8b5cf6]" />
        <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 bg-[#ec4899] rounded-full shadow-[0_0_10px_#ec4899]" />
      </div>
    </div>
  </div>
);

/** 4. Mobile App – glowing minimal frame border trace */
const MobileVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-[-10%] w-24 h-48 border border-white/5 rounded-3xl overflow-hidden group-hover:-translate-y-4 transition-transform duration-1000 ease-out">
      {/* Animated gradient tracing the border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/0 via-[#006ea3]/40 to-[#006ea3]/0 opacity-50 -translate-y-[100%] group-hover:animate-[shimmer_3s_infinite]" />
      {/* Screen glow */}
      <div className="absolute inset-2 bg-gradient-to-br from-[#006ea3]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300" />
      {/* Screen elements */}
      <div className="absolute top-6 left-4 right-4 h-2 bg-white/5 rounded-full" />
      <div className="absolute top-10 left-4 right-10 h-2 bg-white/5 rounded-full" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full" />
    </div>
  </div>
);

/** 5. Web Development – fanning glassmorphism cards */
const WebVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 w-40 h-28 perspective-1000">
      <div className="relative w-full h-full transform-style-3d rotate-x-12 rotate-y-[-10deg]">
        <div className="absolute inset-0 bg-[#111] border border-white/10 rounded-xl translate-z-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-[#006ea3]/30 transition-all duration-700 shadow-2xl" />
        <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 rounded-xl -translate-z-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-700 delay-100 shadow-2xl flex flex-col p-3 gap-2">
          <div className="w-1/3 h-1.5 bg-[#006ea3]/40 rounded-full" />
          <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
          <div className="w-5/6 h-1.5 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

/** 6. Cloud & SaaS – faint bezier curve network */
const CloudVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute right-[-10%] bottom-[-10%] w-64 h-64 text-[#006ea3]/20" viewBox="0 0 100 100">
      <path d="M 20 80 Q 40 50 80 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_3s_linear_infinite]" />
      <path d="M 10 50 Q 50 10 90 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_4s_linear_infinite]" />
      <path d="M 30 90 Q 70 80 80 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="custom-dash group-hover:animate-[dash_5s_linear_infinite]" />
      <circle cx="20" cy="80" r="1.5" fill="#006ea3" className="opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#006ea3] transition-all duration-1000" />
      <circle cx="80" cy="20" r="1.5" fill="#006ea3" className="opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#006ea3] transition-all duration-1000 delay-100" />
      <circle cx="10" cy="50" r="1" fill="#8b5cf6" className="opacity-50 group-hover:opacity-100 transition-all duration-1000 delay-200" />
      <circle cx="90" cy="60" r="1" fill="#ec4899" className="opacity-50 group-hover:opacity-100 transition-all duration-1000 delay-300" />
      <circle cx="80" cy="40" r="2" fill="white" className="opacity-20 group-hover:opacity-80 transition-all duration-1000 delay-400" />
    </svg>
  </div>
);

/** 7. Digital Transformation – organic geometric morphing (square to circle array) */
const DigitalTransformVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden flex items-end justify-end p-6">
    <div className="grid grid-cols-4 gap-2 w-24 h-24">
      {[...Array(16)].map((_, i) => (
        <div 
          key={i} 
          className="bg-white/5 border border-white/10 w-full h-full rounded-[2px] group-hover:rounded-full group-hover:bg-[#006ea3]/20 group-hover:border-[#006ea3]/40 transition-all duration-1000 ease-in-out" 
          style={{ transitionDelay: `${(i % 4 + Math.floor(i / 4)) * 50}ms` }} 
        />
      ))}
    </div>
  </div>
);

/** 8. Digital Marketing – elegant overlapping fluid waveforms */
const DigitalMarketingVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute w-[200%] h-32 bottom-[-10%] right-[-20%] text-[#006ea3]/10 group-hover:text-[#006ea3]/30 transition-colors duration-1000" viewBox="0 0 200 50" preserveAspectRatio="none">
      <path d="M 0 50 Q 50 10 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="group-hover:animate-[wave_10s_linear_infinite]" />
      <path d="M 0 50 Q 50 30 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="text-[#8b5cf6]/10 group-hover:text-[#8b5cf6]/20 transition-colors duration-1000 group-hover:animate-[wave_8s_linear_infinite_reverse]" />
      <path d="M 0 50 Q 50 40 100 50 T 200 50 L 200 50 L 0 50 Z" fill="currentColor" className="text-[#ec4899]/10 group-hover:text-[#ec4899]/20 transition-colors duration-1000 group-hover:animate-[wave_12s_linear_infinite]" />
    </svg>
  </div>
);

/** 9. Cybersecurity – minimal intersecting rotating arcs */
const CyberVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute -right-8 -bottom-8 w-64 h-64 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute w-32 h-32 border-t-2 border-r-2 border-transparent border-t-[#006ea3]/50 rounded-full animate-[spin_4s_linear_infinite]" />
      <div className="absolute w-40 h-40 border-b-2 border-l-2 border-transparent border-b-[#8b5cf6]/50 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
      <div className="absolute w-48 h-48 border-t-[1px] border-transparent border-t-[#ec4899]/30 rounded-full animate-[spin_7s_linear_infinite]" />
      <div className="absolute w-2 h-2 bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
    </div>
  </div>
);

/** 10. DevOps – glowing infinite loop path */
const DevOpsVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute right-4 bottom-4 w-48 h-24 text-white/5" viewBox="0 0 100 50">
      {/* Background path */}
      <path d="M 25 25 C 10 10, 10 40, 25 25 C 40 10, 60 40, 75 25 C 90 10, 90 40, 75 25 C 60 10, 40 40, 25 25" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Animated glowing path */}
      <path d="M 25 25 C 10 10, 10 40, 25 25 C 40 10, 60 40, 75 25 C 90 10, 90 40, 75 25 C 60 10, 40 40, 25 25" fill="none" stroke="#006ea3" strokeWidth="2" strokeLinecap="round" className="custom-infinity opacity-0 group-hover:opacity-100 transition-opacity duration-1000 group-hover:animate-[infinity_4s_linear_infinite]" style={{ filter: 'drop-shadow(0 0 4px #006ea3)' }} />
    </svg>
  </div>
);

/** 11. Software Development – stacking code blocks */
const SoftwareDevVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 w-40 h-32 flex flex-col gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex gap-1.5 translate-x-8 group-hover:translate-x-0 transition-transform duration-700" style={{ transitionDelay: `${i * 100}ms` }}>
          <div className="h-2 rounded-full bg-[#006ea3]/30" style={{ width: `${30 + i * 10}%` }} />
          <div className="h-2 rounded-full bg-white/10 flex-1" />
        </div>
      ))}
    </div>
  </div>
);

/** 12. Hire Dedicated Developers – avatar grid appearing */
const HireDevsVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-2 w-28 h-28">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-full aspect-square rounded-full border border-[#006ea3]/20 bg-[#006ea3]/10 scale-0 group-hover:scale-100 transition-transform duration-500" style={{ transitionDelay: `${i * 60}ms` }} />
      ))}
    </div>
  </div>
);

/** 13. Product Engineering – layered blueprint lines */
const ProductEngVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-2 bottom-2 w-44 h-36">
      {[0, 1, 2].map((i) => (
        <div key={i} className="absolute inset-0 border border-[#006ea3]/15 rounded-xl translate-y-8 group-hover:translate-y-0 transition-all duration-700" style={{ transitionDelay: `${i * 120}ms`, inset: `${i * 10}px`, borderColor: `rgba(0,110,163,${0.3 - i * 0.08})` }} />
      ))}
      <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
        <div className="h-1.5 w-1/4 rounded-full bg-[#006ea3]/30" />
        <div className="h-1.5 w-1/3 rounded-full bg-[#8b5cf6]/20" />
        <div className="h-1.5 flex-1 rounded-full bg-white/10" />
      </div>
    </div>
  </div>
);

/** 14. WordPress Development – CMS block grid */
const WordPressVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 w-36 h-28 grid grid-cols-3 grid-rows-3 gap-1">
      {[...Array(9)].map((_, i) => {
        const sizes = ['col-span-2', '', 'row-span-2', '', 'col-span-2', '', '', '', ''];
        return (
          <div key={i} className={`${sizes[i]} bg-[#006ea3]/10 border border-[#006ea3]/15 rounded-md scale-90 group-hover:scale-100 transition-transform duration-500`} style={{ transitionDelay: `${i * 50}ms` }} />
        );
      })}
    </div>
  </div>
);

/** 15. E-Commerce Development – floating cart/product cards */
const EcommerceVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-4 w-36 h-32 flex flex-col gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 bg-white/5 border border-[#006ea3]/15 rounded-lg p-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-600" style={{ transitionDelay: `${i * 120}ms` }}>
          <div className="w-6 h-6 rounded bg-[#006ea3]/20 flex-shrink-0" />
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-[#006ea3]/15" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/** 16. SaaS Development – floating dashboard panels */
const SaaSVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-2 bottom-2 w-44 h-32">
      <div className="absolute top-0 right-0 w-32 h-20 bg-white/5 border border-[#006ea3]/20 rounded-lg p-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3].map((i) => <div key={i} className="w-1 h-1 rounded-full bg-[#006ea3]/40" />)}
        </div>
        <div className="flex gap-1.5 h-8">
          {[40, 65, 30, 55, 80].map((h, i) => (
            <div key={i} className="flex-1 bg-[#006ea3]/15 rounded-sm self-end transition-all duration-700 group-hover:bg-[#006ea3]/30" style={{ height: `${h}%`, transitionDelay: `${i * 80}ms` }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-14 bg-white/5 border border-[#8b5cf6]/15 rounded-lg p-2 translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-700 delay-200">
        <div className="h-1.5 w-3/4 rounded-full bg-white/10 mb-1.5" />
        <div className="h-1.5 w-1/2 rounded-full bg-[#8b5cf6]/20" />
      </div>
    </div>
  </div>
);

/** 17. Technology Consulting – connecting strategy nodes */
const TechConsultVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <svg className="absolute right-4 bottom-4 w-36 h-36" viewBox="0 0 100 100">
      <line x1="50" y1="50" x2="20" y2="20" stroke="#006ea3" strokeWidth="0.5" className="opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
      <line x1="50" y1="50" x2="80" y2="20" stroke="#006ea3" strokeWidth="0.5" className="opacity-0 group-hover:opacity-50 transition-opacity duration-700 delay-100" />
      <line x1="50" y1="50" x2="80" y2="80" stroke="#006ea3" strokeWidth="0.5" className="opacity-0 group-hover:opacity-50 transition-opacity duration-700 delay-200" />
      <line x1="50" y1="50" x2="20" y2="80" stroke="#006ea3" strokeWidth="0.5" className="opacity-0 group-hover:opacity-50 transition-opacity duration-700 delay-300" />
      <circle cx="50" cy="50" r="4" fill="#006ea3" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
      <circle cx="20" cy="20" r="2.5" fill="#8b5cf6" className="opacity-0 group-hover:opacity-80 transition-opacity duration-700 delay-100" />
      <circle cx="80" cy="20" r="2.5" fill="#006ea3" className="opacity-0 group-hover:opacity-80 transition-opacity duration-700 delay-200" />
      <circle cx="80" cy="80" r="2.5" fill="#ec4899" className="opacity-0 group-hover:opacity-80 transition-opacity duration-700 delay-300" />
      <circle cx="20" cy="80" r="2.5" fill="#006ea3" className="opacity-0 group-hover:opacity-80 transition-opacity duration-700 delay-400" />
    </svg>
  </div>
);

/** 18. MVP Development – rocket launch trail */
const MVPVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-8 bottom-4 w-32 h-40 flex flex-col items-center justify-end">
      <div className="w-6 h-6 border-2 border-[#006ea3]/50 rounded-full flex items-center justify-center translate-y-8 group-hover:-translate-y-4 transition-transform duration-1000 ease-out">
        <div className="w-2 h-2 bg-[#006ea3] rounded-full shadow-[0_0_12px_#006ea3]" />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-px bg-gradient-to-b from-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ height: `${20 + i * 8}px`, transitionDelay: `${300 + i * 100}ms` }} />
      ))}
    </div>
  </div>
);

/** 19. Cloud Services – floating cloud layers */
const CloudServicesVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute right-4 bottom-6 w-40 h-28">
      {[0, 1, 2].map((i) => (
        <div key={i} className="absolute rounded-full bg-[#006ea3]/10 border border-[#006ea3]/15 translate-y-4 group-hover:translate-y-0 transition-all duration-700" style={{ width: `${80 - i * 15}%`, height: '40%', bottom: `${i * 25}%`, right: `${i * 8}%`, transitionDelay: `${i * 150}ms` }} />
      ))}
    </div>
  </div>
);

/** 20. IT Consulting – gear rotation with connecting lines */
const ITConsultVisual = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden">
    <div className="absolute -right-4 -bottom-4 w-48 h-48 flex items-center justify-center">
      <div className="absolute w-20 h-20 border-2 border-dashed border-[#006ea3]/20 rounded-full group-hover:animate-[spin_8s_linear_infinite]" />
      <div className="absolute w-32 h-32 border border-dashed border-[#8b5cf6]/15 rounded-full group-hover:animate-[spin_12s_linear_infinite_reverse]" />
      <div className="absolute w-3 h-3 bg-[#006ea3]/40 rounded-full shadow-[0_0_10px_rgba(0,110,163,0.3)]" />
      <div className="absolute w-20 h-20 group-hover:animate-[spin_8s_linear_infinite]">
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#006ea3] rounded-full -translate-x-1/2" />
      </div>
      <div className="absolute w-32 h-32 group-hover:animate-[spin_12s_linear_infinite_reverse]">
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#8b5cf6] rounded-full -translate-x-1/2" />
      </div>
    </div>
  </div>
);

/* ══════════════════ SERVICES DATA ══════════════════ */

const services = [
  {
    title: 'Custom Software Development',
    description: 'End-to-end scalable software engineered to your exact specifications — from architecture to deployment.',
    icon: Code2,
    href: '/services/custom-software-development',
    Visual: CustomSoftwareVisual,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that converts — from wireframes to pixel-perfect interfaces.',
    icon: Palette,
    href: '/services/ui-ux-design',
    Visual: UIUXVisual,
  },
  {
    title: 'AI, ML & Data Science',
    description: 'Predictive analytics, NLP, computer vision, and intelligent automation tailored to your data.',
    icon: Brain,
    href: '/services/ai-ml-data-science',
    Visual: AIMLVisual,
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance iOS & Android apps with immersive, platform-native experiences.',
    icon: Smartphone,
    href: '/services/mobile-app-development',
    Visual: MobileVisual,
  },
  {
    title: 'Web Development',
    description: 'Responsive, lightning-fast web apps built for scale and conversion.',
    icon: Globe,
    href: '/services/web-development',
    Visual: WebVisual,
  },
  {
    title: 'Cloud & SaaS Solutions',
    description: 'Cloud migration, multi-tenant SaaS architecture, and managed infrastructure on AWS, Azure & GCP.',
    icon: Cloud,
    href: '/services/cloud-saas-solutions',
    Visual: CloudVisual,
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems with cloud-native, microservices-driven architectures.',
    icon: Zap,
    href: '/services/digital-transformation',
    Visual: DigitalTransformVisual,
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, paid media, social campaigns, and analytics-driven growth strategies.',
    icon: TrendingUp,
    href: '/services/digital-marketing',
    Visual: DigitalMarketingVisual,
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Advanced audits, penetration testing, and compliance frameworks (SOC2, HIPAA, GDPR).',
    icon: Shield,
    href: '/services/cybersecurity-compliance',
    Visual: CyberVisual,
  },
  {
    title: 'DevOps & Cloud Automation',
    description: 'CI/CD pipelines, containerization, IaC, and automated delivery for faster, reliable releases.',
    icon: GitMerge,
    href: '/services/devops-cloud-automation',
    Visual: DevOpsVisual,
  },
  {
    title: 'Software Development',
    description: 'Full-cycle custom software solutions — enterprise apps, API development, and complex system integrations.',
    icon: Monitor,
    href: '/services/software-development',
    Visual: SoftwareDevVisual,
  },
  {
    title: 'Hire Dedicated Developers',
    description: 'Scale your team on demand with pre-vetted senior engineers — flexible hiring from contributors to full pods.',
    icon: UsersRound,
    href: '/services/hire-dedicated-developers',
    Visual: HireDevsVisual,
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product development from ideation and prototyping to market launch and scaling.',
    icon: Package,
    href: '/services/product-engineering',
    Visual: ProductEngVisual,
  },
  {
    title: 'WordPress Development',
    description: 'Custom themes, plugins, WooCommerce stores, and headless WordPress for content-driven businesses.',
    icon: Blocks,
    href: '/services/wordpress-development',
    Visual: WordPressVisual,
  },
  {
    title: 'E-Commerce Development',
    description: 'Scalable online stores with payment gateways, inventory management, and headless commerce solutions.',
    icon: ShoppingBag,
    href: '/services/ecommerce-development',
    Visual: EcommerceVisual,
  },
  {
    title: 'SaaS Development',
    description: 'Multi-tenant SaaS platforms with subscription billing, role-based access, and cloud-native architecture.',
    icon: CloudCog,
    href: '/services/saas-development',
    Visual: SaaSVisual,
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic tech advisory, architecture reviews, and digital roadmap planning for your business.',
    icon: Settings,
    href: '/services/technology-consulting',
    Visual: TechConsultVisual,
  },
  {
    title: 'MVP Development',
    description: 'Rapid prototyping and lean methodology to validate ideas fast — concept to launch-ready MVP in weeks.',
    icon: Boxes,
    href: '/services/mvp-development',
    Visual: MVPVisual,
  },
  {
    title: 'Cloud Services',
    description: 'Cloud migration, infrastructure management, and multi-cloud strategy on AWS, Azure & GCP.',
    icon: Cloud,
    href: '/services/cloud-services',
    Visual: CloudServicesVisual,
  },
  {
    title: 'IT Consulting',
    description: 'IT infrastructure planning, system integration, and strategic advisory to optimize tech operations.',
    icon: ServerCog,
    href: '/services/it-consulting',
    Visual: ITConsultVisual,
  },
];

/* ══════════════════ SECTION ══════════════════ */

export const KnownFor: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = services.length;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const step = 2;
    const next = direction === 'left'
      ? Math.max(0, activeIndex - step)
      : Math.min(totalCards - 1, activeIndex + step);
    scrollToIndex(next);
  }, [activeIndex, totalCards, scrollToIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const firstChild = el.children[0] as HTMLElement | undefined;
      if (!firstChild) return;
      const cardWidth = firstChild.offsetWidth + 16;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, totalCards - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  return (
    <section ref={sectionRef} className="relative w-full py-12 bg-white dark:bg-black overflow-hidden">
      <motion.div style={{ y: orbY }} className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {/* Carousel within max-w-7xl container */}
        <div className="relative group/carousel overflow-hidden">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full outline-none border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] text-gray-700 dark:text-white shadow-md hover:bg-gray-100 hover:border-gray-300 hover:text-black dark:hover:bg-white/10 dark:hover:border-white/20 active:bg-gray-200 dark:active:bg-white/15 focus-visible:ring-2 focus-visible:ring-[#006ea3] transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full outline-none border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] text-gray-700 dark:text-white shadow-md hover:bg-gray-100 hover:border-gray-300 hover:text-black dark:hover:bg-white/10 dark:hover:border-white/20 active:bg-gray-200 dark:active:bg-white/15 focus-visible:ring-2 focus-visible:ring-[#006ea3] transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 scroll-pl-0"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.href}
                  className="shrink-0 snap-start w-[85vw] sm:w-[calc(50%-0.5rem)] group relative flex flex-col items-start bg-[#D9EAFD] dark:bg-[#0a0a0a] border border-[#006ea3]/10 dark:border-white/5 hover:border-[#006ea3]/25 dark:hover:border-white/10 hover:bg-[#cde3fc] dark:hover:bg-[#111] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#006ea3]/10 dark:hover:shadow-[#006ea3]/5 transition-all duration-700 ease-out rounded-2xl overflow-hidden cursor-pointer h-[17rem] sm:h-[16.5rem] md:h-[16rem]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <service.Visual />

                  <div className="relative z-10 flex flex-col h-full pointer-events-none w-full p-6 sm:p-7">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#006ea3]/20 dark:border-white/10 bg-white dark:bg-[#161616] text-[#006ea3] dark:text-[#ededed] group-hover:text-[#006ea3] group-hover:border-[#006ea3]/30 group-hover:bg-white dark:group-hover:bg-[#1a1a1a] transition-all duration-500 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <h3 className="text-lg font-medium text-black/85 dark:text-[#ededed] mb-2 tracking-tight leading-snug group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[13px] text-black/50 dark:text-[#8b8b8b] group-hover:text-black/65 dark:group-hover:text-[#a1a1a1] leading-relaxed transition-colors duration-300 font-medium line-clamp-2 w-[90%]">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-3 flex items-center text-[#006ea3] text-[13px] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                      Explore Service <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Scroll indicator dots — one per page of 2 */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {Array.from({ length: Math.ceil(totalCards / 2) }, (_, i) => {
              const pageIndex = i * 2;
              const isActive = activeIndex >= pageIndex && activeIndex < pageIndex + 2;
              return (
                <button
                  key={i}
                  onClick={() => scrollToIndex(pageIndex)}
                  className="transition-all duration-300"
                  style={{
                    width: isActive ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? '#006ea3' : '#333',
                  }}
                  aria-label={`Go to page ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CSS for custom abstract animations and hiding scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes dash {
            0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
            100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
          }
          .custom-dash {
            stroke-dasharray: 4, 12;
          }
          @keyframes shimmer {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes infinity {
            0% { stroke-dasharray: 0, 300; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 100, 300; stroke-dashoffset: -100; }
            100% { stroke-dasharray: 0, 300; stroke-dashoffset: -300; }
          }
          .custom-infinity {
            stroke-dasharray: 300, 300;
            stroke-dashoffset: 300;
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .translate-z-0 { transform: translateZ(0); }
          .-translate-z-4 { transform: translateZ(-1rem); }
        `
      }} />
    </section>
  );
};
