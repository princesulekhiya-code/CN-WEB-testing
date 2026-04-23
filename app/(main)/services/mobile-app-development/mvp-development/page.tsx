"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Map,
  MousePointerClick,
  Palette,
  Smartphone,
  Rocket,
  TrendingUp,
  Lightbulb,
  ListChecks,
  LayoutTemplate,
  Code2,
  FlaskConical,
  RefreshCw,
  Clock,
  Presentation,
  Layers,
  BarChart3,
  CheckCircle2,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: [string, string, string];
}

const offerings: Offering[] = [
  {
    icon: Map,
    title: "MVP Strategy & Roadmap",
    description:
      "Align your vision with evidence—market research, ruthless feature prioritization, and a path to product-market fit before a single line of production code ships.",
    tags: ["Market research", "Feature prioritization", "Product-market fit"],
  },
  {
    icon: MousePointerClick,
    title: "Rapid Prototyping",
    description:
      "Clickable prototypes in days, not weeks—validate flows with stakeholders and real users early, when changes are cheap and direction is still flexible.",
    tags: ["Clickable prototypes", "Fast iteration", "User testing"],
  },
  {
    icon: Palette,
    title: "MVP Design",
    description:
      "Lean UI/UX that maximizes engagement with the smallest feature set—clear hierarchy, frictionless onboarding, and polish where it drives retention.",
    tags: ["Lean UX", "Minimal features", "Engagement-first"],
  },
  {
    icon: Smartphone,
    title: "MVP App Development",
    description:
      "Core features built fast on a scalable foundation—clean architecture, sensible defaults, and room to grow without a rewrite when traction hits.",
    tags: ["Core features", "Scalable architecture", "Speed to market"],
  },
  {
    icon: Rocket,
    title: "MVP Launch & Testing",
    description:
      "Structured beta launches with feedback loops and analytics wired in—so every release answers what to build next with data, not opinions.",
    tags: ["Beta testing", "User feedback", "Analytics"],
  },
  {
    icon: TrendingUp,
    title: "MVP to Full Product",
    description:
      "Scale from validated MVP to full product through iterative development—same team, same codebase, expanding scope as metrics justify investment.",
    tags: ["Iterative roadmap", "Scale-up", "Continuous delivery"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Idea Validation",
    description:
      "Stress-test the problem, target users, and success metrics—so the MVP proves a real need before engineering commits.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Feature Prioritization",
    description:
      "Rank must-haves vs. nice-to-haves with impact vs. effort—scope that fits timeline without hiding critical risks.",
    icon: ListChecks,
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "Interactive flows and key screens to align stakeholders and run early usability checks before build-heavy work.",
    icon: LayoutTemplate,
  },
  {
    step: "04",
    title: "Core Development",
    description:
      "Implement the smallest vertical slice that delivers recurring value—auth, core loop, and instrumentation from day one.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Beta Launch",
    description:
      "Controlled rollout, cohort feedback, and monitoring—learn safely before a wide public release.",
    icon: FlaskConical,
  },
  {
    step: "06",
    title: "Iterate & Scale",
    description:
      "Prioritize the backlog from real usage, harden performance, and extend the product as traction validates the next bets.",
    icon: RefreshCw,
  },
];

const techCategories = [
  { label: "Frontend", items: [
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Firestore", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` }
    ] },
];

const stats = [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const whyChoose = [
  {
    icon: Clock,
    title: "4–8 Week Delivery",
    description:
      "Tight, milestone-driven sprints—ship a testable MVP on a timeline you can plan around and present with confidence.",
  },
  {
    icon: Presentation,
    title: "Investor-Ready MVPs",
    description:
      "Clear narrative, demo-ready polish on the critical path, and metrics hooks that support fundraising conversations.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Pragmatic patterns and modular boundaries so your MVP grows into a full product without starting from scratch.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Iterations",
    description:
      "Instrumentation and feedback loops baked in—prioritize what users actually do, not what they say they might do.",
  },
];

export default function MvpDevelopmentPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl font-bold leading-[1.1] tracking-tight transition-all duration-700 delay-100 sm:text-5xl lg:text-[3.5rem] ${
                  heroReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                MVP
                <br />
                <span className="text-[#006ea3]">Development</span>
              </h1>
              <p
                className={`mt-6 max-w-lg text-lg font-medium leading-relaxed text-black/50 transition-all duration-700 delay-200 dark:text-white/50 ${
                  heroReady ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                Build with lean methodology—ship the smallest product that proves your hypothesis, validate ideas fast with real users, and land investor-ready
                prototypes that show traction, not just slides.
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
                  Start Your MVP <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.03]"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <motion.div
              className="relative w-full max-w-md mx-auto aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.92, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop&q=80"
                  alt="MVP product development and prototyping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10">
                    <Target className="w-4 h-4 text-[#4EB3E8]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black dark:text-white">Lean & Fast</div>
                    <div className="text-[10px] font-medium text-black/40 dark:text-white/40">8-week delivery</div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Rocket className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black dark:text-white">Validate First</div>
                    <div className="text-[10px] font-medium text-black/40 dark:text-white/40">Ship → Learn → Iterate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
          End-to-end MVP capabilities—from strategy and design to launch, learning, and scaling—tailored for mobile-first products.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`group rounded-2xl border border-black/[0.06] bg-black/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:shadow-xl hover:shadow-[#006ea3]/5 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] transition-all duration-500 group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 dark:border-white/10 dark:bg-white/[0.05]">
                <Icon className="h-5 w-5 text-black/60 transition-colors duration-500 group-hover:text-[#006ea3] dark:text-white/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#006ea3]">{service.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-black/45 dark:text-white/45">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
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
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Our MVP <span className="text-black dark:text-white">Process</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A six-step path from hypothesis to validated product—structured for speed without skipping the decisions that matter.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/15 to-[#4EB3E8]/5" />
          </div>
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }} className="relative mb-16 last:mb-0">
                <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-12" : ""}>{isLeft && (<div className="group flex flex-col items-end text-right rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span><h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3><p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm ml-auto">{step.description}</p><div className="mt-4 flex items-center gap-2 w-full max-w-[200px] ml-auto"><div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden"><motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} /></div><span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span></div></div>)}</div>
                  <div className="flex justify-center relative z-10"><div className="group relative"><motion.div className="absolute inset-0 rounded-2xl border border-[#4EB3E8]/20" initial={{ scale: 1, opacity: 0 }} animate={visible ? { scale: [1, 1.5, 1.5], opacity: [0, 0.3, 0] } : {}} transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 3 }} /><div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#4EB3E8] flex items-center justify-center z-10"><span className="text-[9px] font-bold text-white">{step.step}</span></div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-lg shadow-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/50 group-hover:shadow-[#4EB3E8]/20 group-hover:scale-110 transition-all duration-500"><StepIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div></div></div>
                  <div className={!isLeft ? "pl-12" : ""}>{!isLeft && (<div className="group flex flex-col items-start text-left rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span><h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3><p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm">{step.description}</p><div className="mt-4 flex items-center gap-2 w-full max-w-[200px]"><div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden"><motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} /></div><span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span></div></div>)}</div>
                </div>
                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 relative z-10"><div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4EB3E8] flex items-center justify-center"><span className="text-[8px] font-bold text-white">{step.step}</span></div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-md shadow-[#4EB3E8]/10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div>
                  <div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-bold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed">{step.description}</p></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { ref, visible } = useInView(0.1);
  const [activeTab, setActiveTab] = useState(0);
  const allTechs = techCategories.flatMap((c) => c.items);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Tech <span className="text-black dark:text-white">Stack</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Modern, proven tooling across mobile, backend, cloud, data, and analytics—chosen to match your MVP and scale with it.</p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {techCategories.map((cat, i) => (<button key={cat.label} type="button" onClick={() => setActiveTab(i)} className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"}`}>{cat.label}</button>))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
              {techCategories[activeTab].items.map((tech, i) => (<motion.div key={`${tech.name}-${i}`} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }} className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-300 cursor-default"><div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /><div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" /><div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"><img src={tech.logo} alt={tech.name} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} /><span style={{ display: "none" }} className="w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 text-[#4EB3E8] text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">{tech.name.charAt(0)}</span></div><span className="relative text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-300 text-center">{tech.name}</span></motion.div>))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="relative w-full"><div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" /><div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" /><div className="group flex overflow-hidden w-full [--gap:3.5rem] md:[--gap:4.5rem] [--duration:40s] gap-[var(--gap)]">{Array(3).fill(0).map((_, i) => (<div key={i} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">{allTechs.map((tech, j) => (<div key={`${i}-${j}-${tech.name}`} className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap" title={tech.name}><img src={tech.logo} alt={tech.name} width={32} height={32} className="w-8 h-8 md:w-9 md:h-9 object-contain flex-shrink-0" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} /><span style={{ display: "none" }} className="w-8 h-8 md:w-9 md:h-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10 text-[#4EB3E8] text-sm font-bold flex-shrink-0">{tech.name.charAt(0)}</span><span className="text-sm md:text-base font-medium text-black/50 dark:text-white/40">{tech.name}</span></div>))}</div>))}</div></div>
        </motion.div>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Why Choose <span className="text-black dark:text-white">Cloud Nexus</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} className="group relative text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-white/60 dark:bg-white/[0.02] hover:border-[#4EB3E8]/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4EB3E8]/5 hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:bg-[#4EB3E8]/15 group-hover:scale-110 transition-all duration-300">
                    <ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#006ea3]/15 via-[#006ea3]/5 to-transparent dark:from-[#006ea3]/10 dark:via-[#006ea3]/5 dark:to-[#006ea3]/8" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#006ea3]/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2
          className={`text-3xl font-bold tracking-tight transition-all duration-700 md:text-4xl lg:text-5xl ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Ready to Validate
          <br />
          <span className="text-[#006ea3]">Your Idea?</span>
        </h2>
        <p
          className={`mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-black/50 transition-all duration-700 delay-150 dark:text-white/50 md:text-lg ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Tell us what you need to prove—we&apos;ll map a lean MVP plan, timeline, and stack so you can learn fast and pitch with confidence.
        </p>
        <div
          className={`mt-10 flex flex-col justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#006ea3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#006ea3]/25 transition-colors hover:bg-[#005580]"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services/mobile-app-development"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.03]"
          >
            More Mobile Services
          </Link>
        </div>
      </div>
    </div>
  );
}
