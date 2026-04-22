"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Monitor, Layout, Paintbrush, Gauge,
  Accessibility, Boxes, ClipboardList, Settings, Palette, Code2,
  ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake, CheckCircle2,
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
  { icon: Monitor, title: "React Developers", description: "Expert React engineers building high-performance SPAs with hooks, context, server components, and modern state management.", features: ["React 18+", "Server components", "State management"] },
  { icon: Layout, title: "Angular Developers", description: "Angular specialists delivering enterprise-grade applications with TypeScript, RxJS, and modular architecture patterns.", features: ["TypeScript", "RxJS", "Modular architecture"] },
  { icon: Boxes, title: "Vue.js Developers", description: "Vue.js developers creating reactive, lightweight applications with Composition API, Pinia, and Nuxt.js for SSR.", features: ["Composition API", "Pinia", "Nuxt.js SSR"] },
  { icon: Paintbrush, title: "UI/UX Frontend Developers", description: "Frontend engineers who bridge design and code — implementing pixel-perfect, accessible, and animated interfaces.", features: ["Pixel-perfect", "Accessibility", "Animations"] },
  { icon: Gauge, title: "Performance Specialists", description: "Frontend performance experts optimizing Core Web Vitals, bundle sizes, lazy loading, and rendering performance.", features: ["Core Web Vitals", "Code splitting", "Lazy loading"] },
  { icon: Accessibility, title: "Accessibility Experts", description: "WCAG compliance specialists ensuring your web applications are usable by everyone — screen readers, keyboard nav, and more.", features: ["WCAG 2.1 AA", "Screen readers", "Keyboard navigation"] },
];

const processSteps = [
  { step: "01", title: "Define UI Requirements", description: "Share your design system, tech stack preferences, and frontend architecture needs for precise matching.", icon: ClipboardList },
  { step: "02", title: "Review Profiles", description: "Receive portfolios with live demos, code samples, and performance benchmarks from vetted frontend developers.", icon: Settings },
  { step: "03", title: "Technical Interview", description: "Evaluate coding skills, component design thinking, and framework expertise through live coding sessions.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Developers integrate with your design system, component library, and CI pipeline within 48 hours.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Seamless collaboration with designers and backend teams — shared standups, PRs, and design reviews.", icon: Code2 },
  { step: "06", title: "Scale & Evolve", description: "Add specialists for animations, accessibility, or performance as your frontend complexity grows.", icon: ShieldCheck },
];

const techCategories = [
  { label: "Frameworks", items: ["React", "Next.js", "Angular", "Vue.js", "Nuxt.js", "Svelte"] },
  { label: "Languages", items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "SASS/SCSS"] },
  { label: "Styling", items: ["Tailwind CSS", "Styled Components", "CSS Modules", "Material UI", "Chakra UI"] },
  { label: "State & Data", items: ["Redux", "Zustand", "React Query", "Apollo GraphQL", "SWR"] },
  { label: "Testing & Tools", items: ["Jest", "Cypress", "Playwright", "Storybook", "Webpack", "Vite"] },
];

const whyChoose = [
  { icon: Award, title: "Senior Frontend Talent", description: "Pre-vetted React, Angular, and Vue.js developers with 5+ years experience and production portfolios." },
  { icon: TrendingUp, title: "Performance-First Mindset", description: "Developers who optimize for Core Web Vitals, accessibility, and SEO from the first component." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to design system integration in under 48 hours — immediate productivity." },
  { icon: HeartHandshake, title: "Design-Dev Collaboration", description: "Frontend engineers who speak design language — seamless collaboration with your UI/UX team." },
];

export default function HireFrontendDevelopersPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/hire-dedicated-developers" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}><ArrowLeft size={16} /> Back to Hire Dedicated Developers</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Hire Front-End<br /><span className="text-[#4EB3E8]">Developers</span></h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Scale your digital experience with front-end specialists proficient in React, Angular, Vue.js, and modern UI frameworks. Our developers deliver responsive, accessible, high-performance interfaces.</p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Start Hiring <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
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
  const items = [{ icon: Monitor, label: "React" }, { icon: Layout, label: "Angular" }, { icon: Boxes, label: "Vue.js" }, { icon: Paintbrush, label: "UI/UX" }];
  return (<div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>{items.map((item, i) => { const Icon = item.icon; return (<div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div></div>); })}</div>);
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Front-End Developers for Hire</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Specialists across every modern frontend framework — from React SPAs to accessible, performance-optimized enterprise interfaces.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service, i) => { const Icon = service.icon; return (<div key={service.title} className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{service.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p><div className="mt-4 flex flex-wrap gap-2">{service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div></div>); })}</div></div>);
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);
  return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">How to Hire Frontend Developers</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A streamlined process to get expert frontend developers integrated with your design system and team.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>);
}

function TechStackSection() {
  const { ref, visible } = useInView(0.15);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frontend Technologies</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Modern frameworks, build tools, and testing libraries our frontend developers work with daily.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{techCategories.map((cat, ci) => (<div key={cat.label} className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${200 + ci * 100}ms` }}><h3 className="text-sm font-semibold text-[#4EB3E8] uppercase tracking-wider mb-4">{cat.label}</h3><div className="flex flex-wrap gap-2">{cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8] transition-all duration-300">{tech}</span>))}</div></div>))}</div></div>);
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Hire Frontend Developers from Cloud Nexus</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item, i) => { const ItemIcon = item.icon; return (<div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>);
}

function CTASection() {
  const { ref, visible } = useInView(0.25);
  return (<div ref={ref} className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Ready to Hire<br /><span className="text-[#4EB3E8]">Frontend Developers?</span></h2><p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Get expert React, Angular, and Vue.js developers integrated with your team and design system within 48 hours.</p><div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">Start Hiring <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>);
}
