"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Globe,
  Monitor,
  Puzzle,
  RefreshCw,
  Wrench,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Settings,
  Users,
  Layers,
  Zap,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: [string, string, string];
}

const offerings: Offering[] = [
  {
    icon: Smartphone,
    title: "Flutter Mobile Apps",
    description:
      "Ship polished iOS and Android experiences from one Dart codebase — fast iteration, consistent UX, and native-feeling performance on every device.",
    tags: ["iOS & Android", "Single codebase", "Material & Cupertino"],
  },
  {
    icon: Globe,
    title: "Flutter Web Apps",
    description:
      "Responsive web applications with Flutter — reuse UI and logic across mobile and web while keeping load times sharp and layouts adaptive.",
    tags: ["Responsive layouts", "Shared widgets", "PWA-ready"],
  },
  {
    icon: Monitor,
    title: "Flutter Desktop Apps",
    description:
      "Target macOS, Windows, and Linux with the same Flutter project — keyboard shortcuts, window chrome, and desktop-native polish where it matters.",
    tags: ["macOS & Windows", "Linux support", "Desktop UX"],
  },
  {
    icon: Puzzle,
    title: "Custom Widget Development",
    description:
      "Composable, testable widgets tailored to your brand — animations, theming, and reusable building blocks your team can extend with confidence.",
    tags: ["Design systems", "Animations", "Reusable UI"],
  },
  {
    icon: RefreshCw,
    title: "Flutter App Migration",
    description:
      "Move legacy native or hybrid apps to Flutter safely — phased rollout, parity testing, and minimal downtime while you modernize the stack.",
    tags: ["Native → Flutter", "Hybrid → Flutter", "Risk-managed cutover"],
  },
  {
    icon: Wrench,
    title: "Flutter App Maintenance",
    description:
      "Keep releases healthy with SDK upgrades, performance tuning, crash triage, and feature delivery on a predictable cadence you can plan around.",
    tags: ["SDK updates", "Performance", "Feature velocity"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We align on goals, users, platforms, and constraints — then translate them into a clear backlog, milestones, and acceptance criteria.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Wireframes and high-fidelity screens with Flutter-friendly components — accessibility, motion, and brand consistency baked in from day one.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Feature sprints with clean architecture, code review, and CI — so your app stays maintainable as complexity grows.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Unit, widget, and integration tests plus device coverage — catch regressions early and ship with confidence.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Store submissions, release trains, and rollout strategy — TestFlight, Play Console, web hosting, and desktop notarization handled end-to-end.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance",
    description:
      "Monitoring, dependency updates, performance budgets, and a roadmap for continuous improvement after launch.",
    icon: Settings,
  },
];

const techStack = [
  {
    label: "Languages",
    items: ["Dart", "Kotlin", "Swift"],
  },
  {
    label: "Tools",
    items: ["Flutter SDK", "VS Code", "Android Studio", "DevTools"],
  },
  {
    label: "Packages",
    items: ["Riverpod", "Bloc", "GetX", "Dio", "Hive", "Provider"],
  },
  {
    label: "Backend",
    items: ["Firebase", "Supabase", "Node.js", "GraphQL"],
  },
  {
    label: "Testing",
    items: ["Flutter Test", "Integration Testing", "Mockito"],
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Flutter Experts",
    description:
      "Engineers who live in Dart and Flutter — architecture, state management, and platform channels done right.",
  },
  {
    icon: Layers,
    title: "Single Codebase Savings",
    description:
      "One team, one codebase, faster releases — less duplication across iOS, Android, web, and desktop.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Hot reload, strong tooling, and reusable widgets — iterate quickly without sacrificing quality.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Partnership beyond launch: upgrades, optimizations, and new features as your product evolves.",
  },
];

export default function FlutterAppDevelopmentPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28">
          <Link
            href="/services/mobile-app-development"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-all duration-500 hover:text-black dark:text-white/50 dark:hover:text-white ${
              heroReady ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
          >
            <ArrowLeft size={16} /> Back to Mobile App Development
          </Link>

          <div className="max-w-3xl">
            <h1
              className={`text-4xl font-bold leading-[1.1] tracking-tight transition-all duration-700 delay-100 sm:text-5xl lg:text-[3.5rem] ${
                heroReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Flutter App
              <br />
              <span className="text-[#006ea3]">Development</span>
            </h1>
            <p
              className={`mt-6 max-w-2xl text-lg font-medium leading-relaxed text-black/50 transition-all duration-700 delay-200 dark:text-white/50 ${
                heroReady ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Build once, ship everywhere. With Flutter and Dart you get a single codebase, native performance via Skia, and expressive UI — so your product looks sharp and feels fast on mobile, web, and desktop.
            </p>
            <div
              className={`mt-8 flex flex-col gap-4 transition-all duration-700 delay-300 sm:flex-row ${
                heroReady ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:shadow-white/10 dark:hover:bg-white/80"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.03]"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <OfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}

function OfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-16">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-black/50 dark:text-white/50">
          Full-spectrum Flutter delivery — from first widget to production releases and long-term care.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((o, i) => {
          const Icon = o.icon;
          return (
            <div
              key={o.title}
              className={`group rounded-2xl border border-black/[0.06] bg-black/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:shadow-xl hover:shadow-[#006ea3]/5 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] transition-all duration-500 group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 dark:border-white/10 dark:bg-white/[0.05]">
                <Icon className="h-5 w-5 text-black/60 transition-colors duration-500 group-hover:text-[#006ea3] dark:text-white/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#006ea3]">{o.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{o.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {o.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md bg-black/[0.03] px-2 py-0.5 text-[11px] font-medium text-black/35 transition-all duration-500 group-hover:bg-[#006ea3]/5 group-hover:text-[#006ea3]/70 dark:bg-white/[0.04] dark:text-white/35"
                  >
                    <CheckCircle2 className="h-3 w-3" />
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
    <div ref={ref} className="border-y border-black/[0.06] bg-black/[0.01] dark:border-white/[0.06] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Flutter Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-black/50 dark:text-white/50">
            A clear six-step path from discovery to continuous improvement.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:left-1/2 md:-translate-x-px" />

          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative mb-12 flex items-start last:mb-0 transition-all duration-700 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="hidden w-full items-start md:grid md:grid-cols-[1fr_48px_1fr]">
                  <div className={isLeft ? "pr-10 text-right" : ""}>
                    {isLeft && (
                      <div className="flex flex-col items-end">
                        <span className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#006ea3]">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="ml-auto mt-2 max-w-sm text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#006ea3]/20 bg-white dark:bg-black">
                      <StepIcon className="h-5 w-5 text-[#006ea3]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-10" : ""}>
                    {!isLeft && (
                      <div className="flex flex-col items-start">
                        <span className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[#006ea3]">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex w-full items-start gap-5 md:hidden">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#006ea3]/20 bg-white dark:bg-black">
                    <StepIcon className="h-5 w-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#006ea3]">Step {step.step}</span>
                    <h3 className="mt-1 text-base font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{step.description}</p>
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
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-16">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tech Stack</h2>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-black/50 dark:text-white/50">
          Languages, tooling, and integrations we use to ship robust Flutter products.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((cat, ci) => (
          <div
            key={cat.label}
            className={`transition-all duration-600 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${200 + ci * 100}ms` }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#006ea3]">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-black/[0.08] bg-black/[0.02] px-3 py-1.5 text-sm font-medium text-black/60 transition-all duration-300 hover:border-[#006ea3]/30 hover:text-[#006ea3] dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60"
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
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-16">
      <div
        className={`mb-14 text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Cloud Nexus</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChoose.map((item, i) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={item.title}
              className={`rounded-2xl border border-black/[0.04] p-6 text-center transition-all duration-600 hover:border-[#006ea3]/15 dark:border-white/[0.04] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#006ea3]/20 bg-[#006ea3]/10">
                <ItemIcon className="h-6 w-6 text-[#006ea3]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.25);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#006ea3]/15 via-[#006ea3]/5 to-transparent dark:from-[#006ea3]/12 dark:via-[#006ea3]/6 dark:to-[#006ea3]/4" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#006ea3]/10 blur-[120px] dark:bg-[#006ea3]/8" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2
          className={`text-3xl font-bold tracking-tight transition-all duration-700 md:text-4xl lg:text-5xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Ready to Build
          <br />
          <span className="bg-gradient-to-r from-[#006ea3] to-[#0090d0] bg-clip-text text-transparent">with Flutter?</span>
        </h2>
        <p
          className={`mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-black/50 transition-all duration-700 delay-150 md:text-lg dark:text-white/50 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Tell us about your product — we&apos;ll help you plan architecture, ship faster, and scale with confidence.
        </p>
        <div
          className={`mt-10 flex flex-col justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006ea3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#006ea3]/20 transition-colors hover:bg-[#005580]"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.03]"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
