"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowLeft, Users, Target, BarChart3, Smartphone,
  Layers, Database, Plug, Cloud,
  ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket,
  Award, TrendingUp, Zap, HeartHandshake, CheckCircle2,
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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useAnimatedCount(target: number, active: boolean, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      let raf: number;
      const animate = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay]);
  return count;
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  titleRest: string;
  titleEmphasis: string;
  description: string;
  features: string[];
}

const services: ServiceOffering[] = [
  { icon: Layers, title: "CRM Module Development", titleRest: "CRM Module", titleEmphasis: "Development", description: "Custom CRM modules for sales, marketing, support, and operations — tailored to your specific business processes and customer lifecycle.", features: ["Sales automation", "Marketing tools", "Support desk"] },
  { icon: Database, title: "CRM Data Migration", titleRest: "CRM Data", titleEmphasis: "Migration", description: "Seamless migration from legacy CRM systems or spreadsheets with data mapping, cleansing, and validation for zero data loss.", features: ["Data mapping", "Zero data loss", "Legacy migration"] },
  { icon: Smartphone, title: "Mobile CRM Applications", titleRest: "Mobile CRM", titleEmphasis: "Applications", description: "Native mobile CRM apps for field sales teams with offline access, GPS tracking, and real-time sync across all devices.", features: ["Offline access", "GPS tracking", "Real-time sync"] },
  { icon: Plug, title: "CRM Integration Services", titleRest: "CRM Integration", titleEmphasis: "Services", description: "Connect your CRM with email, ERP, marketing automation, telephony, and third-party business tools for unified workflows.", features: ["Email & calendar", "ERP sync", "Marketing tools"] },
  { icon: BarChart3, title: "CRM Analytics & Reporting", titleRest: "CRM", titleEmphasis: "Analytics & Reporting", description: "Custom dashboards, sales forecasting, pipeline analytics, and automated reporting for data-driven customer relationship decisions.", features: ["Sales forecasting", "Pipeline views", "Custom reports"] },
  { icon: Cloud, title: "Cloud CRM Solutions", titleRest: "Cloud CRM", titleEmphasis: "Solutions", description: "Scalable cloud-native CRM platforms with multi-tenant architecture, auto-scaling, and enterprise-grade security and compliance.", features: ["Multi-tenant", "Auto-scaling", "Cloud-native"] },
];

const processSteps = [
  { step: "01", title: "CRM Audit & Discovery", description: "Analyze your current CRM landscape, sales processes, and customer touchpoints to define the ideal system.", icon: ClipboardList },
  { step: "02", title: "CRM Architecture", description: "Design data models, workflow rules, role permissions, and integration points for your custom CRM platform.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "User-friendly interfaces with intuitive navigation, role-based dashboards, and mobile-responsive designs.", icon: Palette },
  { step: "04", title: "CRM Development", description: "Agile development of CRM modules with continuous integration, automated testing, and bi-weekly demos.", icon: Code2 },
  { step: "05", title: "Data Migration & Testing", description: "Migrate existing data with validation, run comprehensive testing, and verify all integrations work flawlessly.", icon: ShieldCheck },
  { step: "06", title: "Launch & Training", description: "Production deployment with user onboarding, admin training, documentation, and ongoing CRM support.", icon: Rocket },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "CRM Platforms",
    items: [
      { name: "Salesforce", logo: `${DEVICON}/salesforce/salesforce-original.svg` },
      { name: "HubSpot", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Zoho", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Dynamics 365", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Custom", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Django", logo: `${DEVICON}/django/django-plain.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Spring", logo: `${DEVICON}/spring/spring-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Twilio", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
];

const whyChoose = [
  { icon: Award, title: "CRM Domain Expertise", description: "Deep understanding of sales processes, marketing funnels, and customer service workflows across 15+ industries." },
  { icon: TrendingUp, title: "Measurable Sales Growth", description: "Our CRM solutions deliver an average 35% increase in sales productivity and 50% improvement in lead conversion." },
  { icon: Zap, title: "Rapid Implementation", description: "Get your custom CRM up and running in weeks, not months — with phased rollouts and iterative improvements." },
  { icon: HeartHandshake, title: "Ongoing CRM Support", description: "Continuous optimization, feature additions, and user training to ensure your CRM evolves with your business." },
];

const stats = [
  { value: 35, suffix: "%", label: "Avg. sales productivity lift" },
  { value: 50, suffix: "%", label: "Lead conversion improvement" },
  { value: 15, suffix: "+", label: "Industries covered" },
  { value: 8, suffix: " wk", label: "Typical MVP rollout" },
];

export default function CustomCRMDevelopmentPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services/software-development"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
              heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} /> Back to Software Development
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Custom CRM
                <br />
                <span className="text-[#4EB3E8]">Development</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Purpose-built CRM software including modules, migration services, mobile CRM apps, custom databases, and cloud solutions — designed for your specific industry and workflows.
              </p>
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              <motion.div
                className="relative w-full max-w-md mx-auto aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.92, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                    alt="Custom CRM"
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
                      <Users className="w-4 h-4 text-[#4EB3E8]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black dark:text-white">Custom CRM</div>
                      <div className="text-[10px] font-medium text-black/40 dark:text-white/40">360° view</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black dark:text-white">30% More</div>
                      <div className="text-[10px] font-medium text-black/40 dark:text-white/40">Sales efficiency</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <HeroStats heroReady={heroReady} />
            </div>
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

function HeroStats({ heroReady }: { heroReady: boolean }) {
  const { ref, visible } = useInView(0.25);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 150);
  const c2 = useAnimatedCount(stats[2].value, visible, 300);
  const c3 = useAnimatedCount(stats[3].value, visible, 450);
  const counts = [c0, c1, c2, c3];
  const items = [
    { icon: Users, label: "Contacts" },
    { icon: Target, label: "Sales Pipeline" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Smartphone, label: "Mobile CRM" },
  ];
  return (
    <div ref={ref} className="space-y-6">
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {stats.map((stat, i) => (
          <div key={stat.label} className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] px-3 py-3 text-center">
            <div className="text-lg md:text-xl font-bold text-[#4EB3E8] tabular-nums">
              {counts[i]}
              {stat.suffix}
            </div>
            <div className="mt-1 text-[10px] md:text-xs font-medium text-black/40 dark:text-white/40 leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EB3E8]/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Custom <span className="text-black dark:text-white">CRM</span> Development Services
          </h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            End-to-end CRM solutions — from module development and data migration to mobile CRM apps and cloud-native platforms.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="group relative h-full rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#999] dark:text-[#8b8b8b] group-hover:text-[#4EB3E8] transition-colors duration-300">
                    <span className="text-[#999] dark:text-[#8b8b8b] group-hover:text-inherit">{service.titleRest} </span>
                    <span className="text-black dark:text-white group-hover:text-inherit">{service.titleEmphasis}</span>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500">
                        <CheckCircle2 className="w-3 h-3" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[360px] h-[360px] bg-[#4EB3E8]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[280px] h-[280px] bg-indigo-500/[0.04] rounded-full blur-[90px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Our <span className="text-black dark:text-white">CRM</span> Development Process
          </h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            A structured approach from CRM audit through launch — built for accuracy, adoption, and long-term CRM success.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#4EB3E8]/40 via-[#4EB3E8]/20 to-[#4EB3E8]/5" />
          </div>
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="relative mb-14 last:mb-0">
                <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-12" : ""}>
                    {isLeft && (
                      <div className="group flex flex-col items-end text-right rounded-2xl p-5 border border-transparent hover:border-[#4EB3E8]/20 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                        <div className="mt-3 flex items-center gap-2 w-full max-w-[200px] ml-auto">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.05] dark:bg-white/[0.05] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-gradient-to-r from-[#4EB3E8]/50 to-[#4EB3E8]/25" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/25 dark:text-white/20 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10 pt-1">
                    <div className="group relative">
                      <motion.div className="absolute inset-0 rounded-2xl border border-[#4EB3E8]/30" initial={{ scale: 1, opacity: 0 }} animate={visible ? { scale: [1, 1.6, 1.6], opacity: [0, 0.35, 0] } : {}} transition={{ duration: 2.2, delay: 0.4 + i * 0.15, repeat: Infinity, repeatDelay: 2.5 }} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4EB3E8] flex items-center justify-center z-20 shadow-md shadow-[#4EB3E8]/30">
                        <span className="text-[9px] font-bold text-white leading-none">{step.step}</span>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/30 shadow-lg shadow-[#4EB3E8]/10 group-hover:scale-110 transition-transform duration-500">
                        <StepIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-12" : ""}>
                    {!isLeft && (
                      <div className="group flex flex-col items-start text-left rounded-2xl p-5 border border-transparent hover:border-[#4EB3E8]/20 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p>
                        <div className="mt-3 flex items-center gap-2 w-full max-w-[200px]">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.05] dark:bg-white/[0.05] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-gradient-to-r from-[#4EB3E8]/50 to-[#4EB3E8]/25" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/25 dark:text-white/20 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:hidden flex items-start gap-5 w-full pl-1">
                  <div className="flex-shrink-0 relative z-10 pt-0.5">
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#4EB3E8] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25">
                      <StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p>
                  </div>
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
  const { ref, visible } = useInView(0.15);
  const [activeTab, setActiveTab] = useState(0);
  const allTechs = techCategories.flatMap((c) => c.items);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            <span className="text-black dark:text-white">Technologies</span> We Use
          </h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            Industry-leading CRM platforms and modern development tools for reliable, scalable CRM solutions.
          </p>
        </motion.div>
        <motion.div className="flex justify-center mb-10" initial={{ opacity: 0, y: 16 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {techCategories.map((cat, i) => (
              <button key={cat.label} type="button" onClick={() => setActiveTab(i)} className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"}`}>{cat.label}</button>
            ))}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {techCategories[activeTab].items.map((tech) => (
              <div key={tech.name} className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4EB3E8]/[0.04] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} width={40} height={40} className="object-contain w-9 h-9 group-hover:scale-110 transition-transform" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} /><span style={{ display: "none" }} className="w-9 h-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10 text-[#4EB3E8] text-base font-bold group-hover:scale-110 transition-transform">{tech.name.charAt(0)}</span>
                </div>
                <span className="relative text-xs md:text-sm font-semibold text-center text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8]">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <motion.div className="mt-14 pt-10 border-t border-black/[0.06] dark:border-white/[0.06]" initial={{ opacity: 0 }} animate={visible ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="group flex overflow-hidden w-full [--gap:3rem] md:[--gap:4rem] gap-[var(--gap)]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
                  {allTechs.map((tech, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap">
                      <img src={tech.logo} alt={tech.name} width={28} height={28} className="w-7 h-7 object-contain flex-shrink-0" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} /><span style={{ display: "none" }} className="w-7 h-7 items-center justify-center rounded-md bg-[#4EB3E8]/10 text-[#4EB3E8] text-xs font-bold flex-shrink-0">{tech.name.charAt(0)}</span>
                      <span className="text-sm font-medium text-black/50 dark:text-white/45">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#4EB3E8]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Why Choose <span className="text-black dark:text-white">Cloud Nexus</span> for CRM
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.08 * i }} className="group relative text-center p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/50 dark:bg-white/[0.02] overflow-hidden hover:border-[#4EB3E8]/25 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4EB3E8]/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:scale-110 transition-transform duration-300">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Ready to Build Your
          <br />
          <span className="text-[#4EB3E8]">Custom CRM?</span>
        </h2>
        <p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Transform your customer relationships with a CRM built specifically for your business processes and growth goals.
        </p>
        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
