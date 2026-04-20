"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Palette, Layers, Monitor, Smartphone,
  CheckCircle2, FileText, Users, Zap,
  Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Settings,
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
  { icon: Palette, title: "Interactive Prototyping", description: "Clickable, interactive prototypes that simulate the real app experience for stakeholder validation.", features: ["Clickable flows", "User testing", "Stakeholder demos"] },
  { icon: FileText, title: "Proof of Concept (PoC)", description: "Technical feasibility validation for risky integrations, algorithms, or architecture decisions.", features: ["Technical spikes", "Feasibility study", "Risk mitigation"] },
  { icon: Layers, title: "Wireframing & Information Architecture", description: "Low-fidelity and high-fidelity wireframes that define navigation patterns and content hierarchy.", features: ["Lo-fi wireframes", "Hi-fi mockups", "IA planning"] },
  { icon: Monitor, title: "Design System Foundation", description: "Reusable design tokens, components, and patterns that accelerate development once the prototype is approved.", features: ["Design tokens", "Component library", "Style guide"] },
  { icon: Users, title: "User Research & Testing", description: "Validate prototypes with real users through interviews, usability testing, and feedback analysis.", features: ["User interviews", "Usability tests", "Feedback synthesis"] },
  { icon: Smartphone, title: "Investor-Ready Demos", description: "Polished prototypes specifically crafted to present to investors, demonstrating product vision and market fit.", features: ["Pitch-ready", "Market validation", "Visual polish"] },
];

const processSteps = [
  { step: "01", title: "Discovery Workshop", description: "Understand your vision, target users, competitive landscape, and key assumptions to validate.", icon: ClipboardList },
  { step: "02", title: "User Journey Mapping", description: "Map critical user flows, identify pain points, and define the core experience to prototype.", icon: Users },
  { step: "03", title: "Wireframing", description: "Create low-fidelity wireframes that establish layout, navigation, and content structure.", icon: Layers },
  { step: "04", title: "Visual Design", description: "Apply brand identity, typography, color, and micro-interactions to bring wireframes to life.", icon: Palette },
  { step: "05", title: "Interactive Prototype", description: "Build a clickable prototype that simulates the real app for testing and stakeholder review.", icon: Settings },
  { step: "06", title: "Validation & Handoff", description: "Test with users, incorporate feedback, and deliver dev-ready specs with annotated designs.", icon: Rocket },
];

const techCategories = [
  { label: "Design", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"] },
  { label: "Prototyping", items: ["Figma Prototyping", "Principle", "ProtoPie", "Marvel", "Maze"] },
  { label: "Research", items: ["UserTesting", "Hotjar", "Lookback", "Optimal Workshop"] },
  { label: "Collaboration", items: ["Miro", "FigJam", "Notion", "Slack", "Loom"] },
];

const whyChoose = [
  { icon: Award, title: "Expert Design Team", description: "Senior UX/UI designers with experience building prototypes for 100+ startups and enterprises." },
  { icon: Zap, title: "Rapid Turnaround", description: "From workshop to interactive prototype in as little as 2 weeks with iterative feedback loops." },
  { icon: ShieldCheck, title: "User-Validated Designs", description: "Every prototype tested with real users before handoff — reducing development risk significantly." },
  { icon: HeartHandshake, title: "Dev-Ready Deliverables", description: "Annotated designs, component specs, and design tokens ready for immediate engineering handoff." },
];

export default function PrototypeDesignPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/mvp-development" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}><ArrowLeft size={16} /> Back to MVP Development</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Prototype Design /<br /><span className="text-[#006ea3]">PoC Development</span></h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Create a presentable prototype that perfectly captures your project vision so you can showcase it to customers and investors.</p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[{ icon: Palette, label: "Design" }, { icon: Layers, label: "Wireframes" }, { icon: Monitor, label: "Prototypes" }, { icon: Smartphone, label: "Mobile" }].map((item, i) => { const Icon = item.icon; return (<div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20"><Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div><div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div></div>); })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prototype & PoC Services</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">From wireframes to investor-ready demos — validate your idea before committing to full development.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service) => { const Icon = service.icon; return (<div key={service.title} className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04]"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p><div className="mt-4 flex flex-wrap gap-2">{service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div></div>); })}</div></div>
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Prototyping Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">From discovery to dev-ready handoff — structured delivery for rapid validation.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className="relative flex items-start mb-12 last:mb-0"><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tools We Use</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{techCategories.map((cat) => (<div key={cat.label}><h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3><div className="flex flex-wrap gap-2">{cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300">{tech}</span>))}</div></div>))}</div></div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for Prototyping</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item) => { const ItemIcon = item.icon; return (<div key={item.title} className="text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20"><ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>
      <div className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Validate Your<br /><span className="text-[#006ea3]">Product Idea?</span></h2><p className="mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">Let us create a prototype that wins stakeholder buy-in and validates your concept with real users.</p><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>
    </section>
  );
}
