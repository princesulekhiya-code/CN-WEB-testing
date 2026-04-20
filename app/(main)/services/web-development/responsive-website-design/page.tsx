"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Monitor,
  Tablet,
  Palette,
  ClipboardList,
  LayoutTemplate,
  ShieldCheck,
  Rocket,
  Code2,
  Award,
  Zap,
  CheckCircle2,
  Gauge,
  RefreshCw,
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

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceOffering[] = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Touch targets, typography, and navigation patterns optimized for small screens first — then scaled up with purpose.",
    features: ["Touch-friendly UI", "Readable type", "Thumb zones"],
  },
  {
    icon: Monitor,
    title: "Cross-Browser Compatibility",
    description: "Consistent rendering across Chrome, Safari, Firefox, and Edge with progressive enhancement where it matters.",
    features: ["Polyfills where needed", "Feature detection", "Smoke matrices"],
  },
  {
    icon: LayoutTemplate,
    title: "Responsive Landing Pages",
    description: "Campaign pages that stay fast and on-brand from mobile share links to large desktop presentations.",
    features: ["Conversion layout", "Asset optimization", "A/B-ready"],
  },
  {
    icon: Tablet,
    title: "Adaptive Layouts",
    description: "Breakpoints, fluid grids, and container queries so components reflow cleanly at every width.",
    features: ["Fluid grids", "Container queries", "Content-aware"],
  },
  {
    icon: RefreshCw,
    title: "Responsive Redesign",
    description: "Modernize legacy markup and CSS debt without losing SEO equity — incremental or full replatform.",
    features: ["CSS cleanup", "Redirect plans", "Risk-managed rollout"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Core Web Vitals focus — lazy loading, font strategy, image formats, and render-path tuning.",
    features: ["LCP & CLS", "Image/CDN", "Critical CSS"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description: "Baseline performance, accessibility gaps, and breakpoint issues across real devices and browsers.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Wireframes",
    description: "Low-fidelity layouts for key breakpoints with content priority and interaction notes.",
    icon: LayoutTemplate,
  },
  {
    step: "03",
    title: "Design",
    description: "High-fidelity UI with responsive specs, component states, and design tokens for dev handoff.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    description: "Semantic HTML, resilient CSS, and componentized frontends with Storybook or equivalent previews.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing",
    description: "Device labs, BrowserStack, and performance budgets — fix regressions before users see them.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    description: "CDN cache rules, monitoring, and rollout — with a rollback plan if metrics dip.",
    icon: Rocket,
  },
];

const techCategories = [
  { label: "Core", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { label: "Frameworks", items: ["Tailwind CSS", "Bootstrap", "SCSS", "PostCSS"] },
  { label: "Tools", items: ["Figma", "Adobe XD", "Chrome DevTools", "BrowserStack"] },
  { label: "Testing", items: ["Lighthouse", "PageSpeed", "GTmetrix", "CrossBrowserTesting"] },
  { label: "Build", items: ["Webpack", "Vite", "PostCSS", "Autoprefixer"] },
];

const whyChoose = [
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "We design and build from the smallest screen up — fewer surprises and better real-world UX.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description: "Performance budgets and measurement loops so speed and stability stay part of the definition of done.",
  },
  {
    icon: ShieldCheck,
    title: "Cross-Browser Tested",
    description: "Real device and browser coverage — not just one laptop viewport — before every release.",
  },
  {
    icon: Award,
    title: "Pixel-Perfect",
    description: "Design fidelity with practical engineering tradeoffs called out early, not discovered late.",
  },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ResponsiveWebsiteDesignPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services/web-development"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
              heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} /> Back to Web Development
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Responsive Website
                <br />
                <span className="text-[#006ea3]">Design</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Pixel-perfect responsive websites that adapt seamlessly to every screen size with mobile-first approach.
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

            <HeroVisual heroReady={heroReady} />
          </div>
        </div>
      </div>

      <ServiceOfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}

function HeroVisual({ heroReady }: { heroReady: boolean }) {
  const items = [
    { icon: Smartphone, label: "Mobile" },
    { icon: Monitor, label: "Desktop" },
    { icon: Tablet, label: "Tablet" },
    { icon: Palette, label: "Design" },
  ];
  return (
    <div
      className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
        heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${
              heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${400 + i * 100}ms` }}
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20">
              <Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
            </div>
            <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Responsive Website Design Services</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          Adaptive experiences from mobile to desktop — performance, accessibility, and visual polish at every breakpoint.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500">
                <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3>
              <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {f}
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Responsive Website Design Process</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            From audit to launch — a workflow that keeps layout, performance, and QA aligned at every step.
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
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p>
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
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10">
                    <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technologies We Use</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          Core web technologies, styling systems, design tools, testing, and build pipelines for responsive delivery.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, ci) => (
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
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for Responsive Website Design</h2>
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
              <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p>
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ready for a
          <br />
          <span className="text-[#006ea3]">Responsive Website?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Partner with us for mobile-first design, cross-browser confidence, and Core Web Vitals that stay green in production.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
