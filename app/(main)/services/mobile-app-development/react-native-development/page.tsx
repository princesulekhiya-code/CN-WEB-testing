"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Globe2,
  Puzzle,
  RefreshCw,
  Palette,
  Wrench,
  Search,
  Layout,
  Code2,
  FlaskConical,
  Rocket,
  Headphones,
  Users,
  Layers,
  Zap,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════ */

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: [string, string, string];
}

const offerings: Offering[] = [
  {
    icon: Smartphone,
    title: "React Native Mobile Apps",
    description:
      "Ship polished iOS and Android experiences from one shared JavaScript codebase — consistent UX, faster releases, and lower maintenance overhead.",
    tags: ["iOS & Android", "Shared JS", "Native feel"],
  },
  {
    icon: Globe2,
    title: "React Native for Web",
    description:
      "Extend your mobile product to the browser with React Native Web — one design system and shared components across web and mobile surfaces.",
    tags: ["RN Web", "Unified UI", "Code reuse"],
  },
  {
    icon: Puzzle,
    title: "Native Module Integration",
    description:
      "Bridge to platform APIs with custom native modules — camera, biometrics, Bluetooth, payments, and anything the OS exposes.",
    tags: ["Custom bridges", "Platform APIs", "Performance"],
  },
  {
    icon: RefreshCw,
    title: "App Migration to React Native",
    description:
      "Move legacy native or hybrid apps to React Native with minimal downtime — phased rollout, parity testing, and store-safe releases.",
    tags: ["Legacy apps", "Phased rollout", "Risk control"],
  },
  {
    icon: Palette,
    title: "React Native UI/UX Design",
    description:
      "Platform-adaptive interfaces that respect iOS Human Interface and Material guidelines while staying on-brand and delightful to use.",
    tags: ["Adaptive UI", "Design systems", "Accessibility"],
  },
  {
    icon: Wrench,
    title: "React Native Maintenance",
    description:
      "Keep apps current with OS releases, dependency upgrades, performance tuning, crash fixes, and steady delivery of new features.",
    tags: ["Updates", "Optimization", "Feature adds"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Workshops, requirements, and technical discovery — we align on users, scope, integrations, and success metrics before a line of code ships.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes, flows, and high-fidelity UI with a reusable component library that maps cleanly to React Native primitives.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative sprints with code review, native modules where needed, and fast feedback loops powered by hot reload and robust tooling.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Unit, integration, and device testing across real hardware — catching regressions before they reach your users.",
    icon: FlaskConical,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Store-ready builds, release trains, and rollout strategy — TestFlight, Play Console, staged releases, and monitoring hooks.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support",
    description:
      "Post-launch monitoring, bug triage, performance tuning, and roadmap execution so your app evolves with your business.",
    icon: Headphones,
  },
];

const techStack = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "JSX"] },
  { label: "Tools", items: ["Expo", "React Native CLI", "Metro", "Flipper"] },
  {
    label: "Libraries",
    items: ["Redux", "MobX", "React Navigation", "React Query", "Reanimated"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Firebase", "GraphQL", "REST", "AWS Amplify"],
  },
  {
    label: "Testing",
    items: ["Jest", "Detox", "React Native Testing Library"],
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "React Native Specialists",
    description:
      "Engineers who live in the RN ecosystem — navigation, native bridges, performance, and release pipelines are second nature.",
  },
  {
    icon: Layers,
    title: "Code Reusability",
    description:
      "Maximize shared UI, logic, and design tokens across iOS, Android, and web so you ship faster with less duplication.",
  },
  {
    icon: Zap,
    title: "Fast Development",
    description:
      "Hot reload, strong tooling, and reusable components compress iteration time from prototype to production.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    description:
      "We stay after launch — upgrades, store policies, scaling, and feature roadmaps with a team invested in your product.",
  },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ReactNativeDevelopmentPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <HeroSection heroReady={heroReady} />
      <OfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}

function HeroSection({ heroReady }: { heroReady: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <Link
          href="/services/mobile-app-development"
          className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
            heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <ArrowLeft size={16} /> Back to Mobile App Development
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${
                heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              React Native
              <br />
              <span className="text-[#006ea3]">Development</span>
            </h1>
            <p
              className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Build cross-platform mobile apps with JavaScript and TypeScript — one codebase for iOS and Android, deep native module access when you need it, and hot reload for a fast, productive dev loop from prototype to production.
            </p>
            <div
              className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <HeroAccent heroReady={heroReady} />
        </div>
      </div>
    </div>
  );
}

function HeroAccent({ heroReady }: { heroReady: boolean }) {
  return (
    <div
      className={`relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#006ea3]/[0.08] via-black/[0.02] to-transparent dark:from-[#006ea3]/[0.06] dark:via-white/[0.02] p-8 md:p-10 transition-all duration-700 delay-150 ${
        heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,_rgba(0,110,163,0.15),transparent_55%)] pointer-events-none" />
      <div className="relative space-y-5">
        {[
          { label: "Platforms", value: "iOS & Android" },
          { label: "Stack", value: "JS / TS + Native modules" },
          { label: "Workflow", value: "Hot reload & fast iteration" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-4 last:border-0 last:pb-0"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-black/40 dark:text-white/40">
              {row.label}
            </span>
            <span className="text-sm font-semibold text-[#006ea3] text-right">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What We Offer</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          End-to-end React Native capabilities — from greenfield apps and web extensions to native bridges, migrations, design, and ongoing care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map((offering, i) => {
          const Icon = offering.icon;
          return (
            <div
              key={offering.title}
              className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500">
                <Icon
                  className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">
                {offering.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">
                {offering.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {offering.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Process</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            Discovery through support — a clear six-step timeline so you always know where the project stands.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />

          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-10 text-right" : ""}>
                    {isLeft && (
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black">
                      <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-10" : ""}>
                    {!isLeft && (
                      <div className="flex flex-col items-start">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10">
                    <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tech Stack</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          Languages, tooling, libraries, backends, and testing — chosen for maintainable React Native products at scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((cat, ci) => (
          <div
            key={cat.label}
            className={`transition-all duration-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${200 + ci * 100}ms` }}
          >
            <h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);

  return (
    <div ref={ref} className="border-t border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            A partner focused on shipping durable React Native apps and growing with your roadmap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.title}
                className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20">
                  <ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.25);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/12 via-[#006ea3]/6 to-[#004d73]/10 dark:from-[#006ea3]/10 dark:via-[#006ea3]/5 dark:to-[#004d73]/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,720px)] h-[420px] bg-[#006ea3]/15 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ready to Build with
          <br />
          <span className="text-[#006ea3]">React Native?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us about your app — we&apos;ll map a pragmatic path to iOS, Android, and beyond with React Native.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/25"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm bg-white/80 dark:bg-black/40 backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.06] transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
