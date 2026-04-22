"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Gauge, TrendingUp, Target, Zap,
  CheckCircle2, Palette, BarChart3, Settings, Users, ShieldCheck,
  Award, HeartHandshake, ClipboardList, Rocket, Layers,
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

interface ServiceOffering { icon: LucideIcon; title: string; description: string; features: string[]; }

const services: ServiceOffering[] = [
  { icon: Palette, title: "UX/UI Refinement", description: "Redesign user flows, improve visual hierarchy, and polish interactions based on real usage data and user feedback.", features: ["Flow optimization", "Visual polish", "Interaction design"] },
  { icon: Layers, title: "Feature Enhancement", description: "Prioritize and build the next wave of features based on user demand, analytics data, and competitive benchmarks.", features: ["Feature prioritization", "User-requested", "Competitive edge"] },
  { icon: Zap, title: "Performance Optimization", description: "Speed up load times, optimize database queries, reduce bundle sizes, and improve Core Web Vitals scores.", features: ["Load time reduction", "Query optimization", "Bundle analysis"] },
  { icon: BarChart3, title: "Analytics & KPI Setup", description: "Implement event tracking, build custom dashboards, and define KPIs that connect product metrics to business goals.", features: ["Event tracking", "Custom dashboards", "KPI frameworks"] },
  { icon: Users, title: "User Retention Strategy", description: "Onboarding improvements, engagement loops, push notifications, and re-engagement campaigns to reduce churn.", features: ["Onboarding flows", "Engagement loops", "Churn reduction"] },
  { icon: Settings, title: "Technical Debt Reduction", description: "Refactor critical paths, upgrade dependencies, improve test coverage, and modernize architecture incrementally.", features: ["Code refactoring", "Test coverage", "Dependency updates"] },
];

const processSteps = [
  { step: "01", title: "Performance Audit", description: "Analyze current product performance, user behavior, conversion funnels, and technical health.", icon: ClipboardList },
  { step: "02", title: "User Research", description: "Gather qualitative and quantitative feedback through surveys, interviews, and analytics review.", icon: Users },
  { step: "03", title: "Prioritize Improvements", description: "Rank improvements by impact and effort using data-driven frameworks like RICE or ICE scoring.", icon: Target },
  { step: "04", title: "Implement Changes", description: "Agile sprints focused on high-impact improvements with feature flags for safe rollouts.", icon: Rocket },
  { step: "05", title: "Measure Impact", description: "A/B test changes, track KPIs, and validate that improvements deliver measurable business results.", icon: BarChart3 },
  { step: "06", title: "Iterate & Improve", description: "Continuous improvement cycles — learning from each release to inform the next round of optimizations.", icon: TrendingUp },
];

const techCategories = [
  { label: "Analytics", items: ["Mixpanel", "Amplitude", "Hotjar", "FullStory", "Google Analytics"] },
  { label: "A/B Testing", items: ["Optimizely", "LaunchDarkly", "Statsig", "GrowthBook"] },
  { label: "Performance", items: ["Lighthouse", "WebPageTest", "Sentry", "Datadog", "Vercel Analytics"] },
  { label: "UX Research", items: ["UserTesting", "Maze", "Lookback", "Hotjar Surveys"] },
];

const whyChoose = [
  { icon: BarChart3, title: "Data-Driven Improvements", description: "Every change backed by analytics, user research, and measurable business impact." },
  { icon: Users, title: "User-Centric Approach", description: "Improvements prioritized by real user needs, not assumptions or internal opinions." },
  { icon: TrendingUp, title: "Continuous Optimization", description: "Iterative improvement cycles that compound gains and accelerate product-market fit." },
  { icon: HeartHandshake, title: "Measurable Results", description: "Clear before-after metrics for every improvement with transparent ROI tracking." },
];

export default function MvpImprovementPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/mvp-development" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}><ArrowLeft size={16} /> Back to MVP Development</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>MVP<br /><span className="text-[#4EB3E8]">Improvement</span></h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>After your primary product launch, we create an improvement strategy — refine the experience, customize features, set KPIs, and turn your MVP into a market-ready product.</p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[{ icon: Gauge, label: "Performance" }, { icon: TrendingUp, label: "Growth" }, { icon: Target, label: "KPIs" }, { icon: Zap, label: "Optimization" }].map((item, i) => { const Icon = item.icon; return (
                <div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div>
                  <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
                </div>); })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">MVP Improvement Services</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Comprehensive post-launch optimization from UX refinement to performance tuning and growth engineering.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service) => { const Icon = service.icon; return (<div key={service.title} className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04]"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{service.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p><div className="mt-4 flex flex-wrap gap-2">{service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div></div>); })}</div></div>
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-16"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our MVP Improvement Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">Data-driven improvement cycles that compound gains and accelerate product-market fit.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className="relative flex items-start mb-12 last:mb-0"><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>
      <div className="mx-auto max-w-7xl px-6 py-16"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tools We Use</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{techCategories.map((cat) => (<div key={cat.label}><h3 className="text-sm font-semibold text-[#4EB3E8] uppercase tracking-wider mb-4">{cat.label}</h3><div className="flex flex-wrap gap-2">{cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8] transition-all duration-300">{tech}</span>))}</div></div>))}</div></div>
      <div className="mx-auto max-w-7xl px-6 py-16"><div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for MVP Improvement</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item) => { const ItemIcon = item.icon; return (<div key={item.title} className="text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/15 transition-all duration-600"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>
      <div className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-20 text-center"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Improve Your<br /><span className="text-[#4EB3E8]">MVP?</span></h2><p className="mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">Let us turn your launched MVP into a polished product with data-driven improvements that users love.</p><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>
    </section>
  );
}
