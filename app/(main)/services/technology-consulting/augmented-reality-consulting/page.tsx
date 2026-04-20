"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Glasses, Package, Smartphone, Layers,
  CheckCircle2, Globe, GraduationCap, ShoppingCart,
  Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Settings, Palette, BarChart3,
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
  { icon: Glasses, title: "AR Strategy & Consulting", description: "AR readiness assessment, use case identification, and ROI projection to maximize your AR investment.", features: ["Readiness assessment", "Use case mapping", "ROI analysis"] },
  { icon: Smartphone, title: "AR App Development", description: "Native iOS and Android AR applications built with ARKit and ARCore for immersive mobile experiences.", features: ["ARKit & ARCore", "Native apps", "3D interactions"] },
  { icon: Globe, title: "WebAR Experiences", description: "Browser-based AR experiences that work without app downloads — instant access for maximum reach.", features: ["No app required", "Cross-browser", "Instant access"] },
  { icon: Package, title: "3D Modeling & Visualization", description: "Product visualization, architectural walkthroughs, and digital twins for immersive 3D experiences.", features: ["Product viz", "Digital twins", "3D walkthroughs"] },
  { icon: GraduationCap, title: "AR for Training & Education", description: "Immersive training simulations and educational AR experiences that improve learning outcomes.", features: ["Training sims", "Interactive learning", "Knowledge retention"] },
  { icon: ShoppingCart, title: "AR Commerce & Retail", description: "Virtual try-on, product placement, and interactive shopping experiences that boost conversions.", features: ["Virtual try-on", "Product placement", "Interactive shopping"] },
];

const processSteps = [
  { step: "01", title: "Discovery & Use Case", description: "Understand your goals, identify AR opportunities, and define success metrics.", icon: ClipboardList },
  { step: "02", title: "Concept Design", description: "Storyboarding, interaction design, and visual prototyping for the AR experience.", icon: Palette },
  { step: "03", title: "3D Asset Creation", description: "Model, texture, and optimize 3D assets for real-time AR rendering performance.", icon: Package },
  { step: "04", title: "AR Development", description: "Build the AR application with tracking, rendering, and interaction systems.", icon: Settings },
  { step: "05", title: "Testing & QA", description: "Device testing, environment testing, and performance optimization across platforms.", icon: ShieldCheck },
  { step: "06", title: "Launch & Optimization", description: "Deploy to app stores or web, monitor engagement, and iterate based on analytics.", icon: Rocket },
];

const techCategories = [
  { label: "AR SDKs", items: ["ARKit", "ARCore", "Vuforia", "Spark AR", "8th Wall"] },
  { label: "3D Tools", items: ["Unity", "Unreal Engine", "Blender", "Maya", "Cinema 4D"] },
  { label: "WebAR", items: ["Three.js", "A-Frame", "WebXR", "8th Wall", "Zappar"] },
  { label: "Cloud", items: ["AWS", "Azure Spatial Anchors", "Google Cloud", "Firebase"] },
];

const whyChoose = [
  { icon: Award, title: "AR/VR Specialists", description: "Dedicated AR engineers and 3D artists with production experience across industries." },
  { icon: Smartphone, title: "Cross-Platform Expertise", description: "iOS, Android, and WebAR — consistent experiences across all devices and browsers." },
  { icon: Palette, title: "Immersive Design", description: "UX-first AR design that creates intuitive, engaging, and accessible experiences." },
  { icon: HeartHandshake, title: "Measurable Engagement", description: "Analytics and tracking built in so you can measure dwell time, interactions, and conversions." },
];

export default function AugmentedRealityConsultingPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/technology-consulting" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}><ArrowLeft size={16} /> Back to Technology Consulting</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Augmented Reality<br /><span className="text-[#006ea3]">Consulting</span></h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Blend cutting-edge AR technology with strategic insights to integrate solutions that captivate users, streamline operations, and stand out in your industry.</p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[{ icon: Glasses, label: "AR/VR" }, { icon: Package, label: "3D Models" }, { icon: Smartphone, label: "Mobile AR" }, { icon: Layers, label: "Spatial" }].map((item, i) => { const Icon = item.icon; return (
                <div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20"><Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div>
                  <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
                </div>); })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">AR Consulting Services</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">End-to-end augmented reality solutions from strategy and 3D design to development and launch.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service) => { const Icon = service.icon; return (<div key={service.title} className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04]"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p><div className="mt-4 flex flex-wrap gap-2">{service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div></div>); })}</div></div>
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our AR Development Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">From concept to launch — structured delivery for immersive AR experiences.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className="relative flex items-start mb-12 last:mb-0"><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technologies We Use</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{techCategories.map((cat) => (<div key={cat.label}><h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3><div className="flex flex-wrap gap-2">{cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300">{tech}</span>))}</div></div>))}</div></div>
      <div className="mx-auto max-w-7xl px-6 py-24"><div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for AR</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item) => { const ItemIcon = item.icon; return (<div key={item.title} className="text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20"><ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>
      <div className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Bring Your Brand to Life with<br /><span className="text-[#006ea3]">Augmented Reality?</span></h2><p className="mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">Let us create immersive AR experiences that captivate your audience and deliver measurable business results.</p><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>
    </section>
  );
}
