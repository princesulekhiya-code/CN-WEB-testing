"use client";

import { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";

const clients = [
  { name: "Deutsche Bank", logo: "/clients/deutsche-bank.svg" },
  { name: "Bank of America", logo: "/clients/bank-of-america.svg" },
  { name: "NEC", logo: "/clients/nec.svg" },
  { name: "TD Bank", logo: "/clients/td-bank.svg" },
  { name: "CVS Health", logo: "/clients/cvs-health.svg" },
  { name: "Black Knight", logo: "/clients/black-knight.svg" },
  { name: "Maniyar INC", logo: "/clients/maniyar-inc.svg" },
  { name: "ITEInfotech", logo: "/clients/iteinfotech.svg" },
  { name: "Y&L Consulting", logo: "/clients/yl-consulting.svg" },
  { name: "Bhashini", logo: "/clients/bhashini.svg" },
  { name: "Rekkoz", logo: "/clients/rekkoz.svg" },
  { name: "Karmyogi Bharat", logo: "/clients/karmyogi-bharat.svg" },
  { name: "VSN", logo: "/clients/vsn.svg" },
];

const row1 = clients.slice(0, 7);
const row2 = clients.slice(7);

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export const TopClients: FC = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white dark:bg-black overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Companies That <span className="text-black dark:text-white">Trust Us</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            From Fortune 500 enterprises to high-growth startups, we deliver results that matter.
          </p>
        </div>

        {/* Marquee Row 1 — left to right */}
        <div
          className={`relative mb-6 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="group flex overflow-hidden w-full [--gap:2.5rem] md:[--gap:3.5rem] [--duration:35s] gap-[var(--gap)]">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
                >
                  {row1.map((client, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-center shrink-0 h-20 md:h-24 px-8 md:px-10 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/90 hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.04] dark:hover:bg-white dark:hover:border-[#4EB3E8]/30 transition-all duration-300 group/card"
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={40}
                        className="h-7 sm:h-9 w-auto object-contain opacity-70 group-hover/card:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        {/* Marquee Row 2 — right to left */}
        <div
          className={`relative transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="group flex overflow-hidden w-full [--gap:2.5rem] md:[--gap:3.5rem] [--duration:30s] gap-[var(--gap)]">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee direction-reverse group-hover:[animation-play-state:paused]"
                  style={{ animationDirection: "reverse" }}
                >
                  {row2.map((client, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-center shrink-0 h-20 md:h-24 px-8 md:px-10 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/90 hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.04] dark:hover:bg-white dark:hover:border-[#4EB3E8]/30 transition-all duration-300 group/card"
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={40}
                        className="h-7 sm:h-9 w-auto object-contain opacity-70 group-hover/card:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};
