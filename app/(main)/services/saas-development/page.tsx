"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  CreditCard,
  Cloud,
  Lock,
  Zap,
  Database,
  Smartphone,
  Settings,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Award,
  TrendingUp,
  HeartHandshake,
  Stethoscope,
  ShoppingCart,
  Truck,
  GraduationCap,
  Building2,
  Gamepad2,
  Factory,
  ClipboardList,
  Palette,
  BarChart3,
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

interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
}

const services: ServiceOffering[] = [
  { icon: Layers, title: "Custom SaaS Platform", description: "Senior engineers apply modern stacks and proven patterns to translate your vision into a bespoke SaaS platform engineered for longevity.", href: "/services/saas-development/custom-saas-platform", features: ["Tailored logic", "Elastic scale", "Cloud-native"] },
  { icon: Palette, title: "SaaS UI/UX Design", description: "Product designers craft intuitive, engaging interfaces at enterprise caliber—purpose-built to lift adoption, retention, and revenue.", href: "/services/saas-development/saas-ui-ux-design", features: ["Intuitive UX", "Rich interaction", "Enterprise polish"] },
  { icon: Smartphone, title: "SaaS Mobile Solutions", description: "Native and hybrid mobile experiences that meet users where they are—on device—so your SaaS reaches the widest possible audience.", href: "/services/saas-development/saas-mobile-solutions", features: ["Native builds", "Hybrid delivery", "Cross-platform"] },
  { icon: CreditCard, title: "Subscription & Billing", description: "Stripe Billing or bespoke ledgers covering trials, proration, usage-based metering, and dunning—structured so finance can reconcile with confidence.", href: "/services/saas-development/subscription-billing", features: ["Stripe Billing", "Usage metering", "Dunning flows"] },
  { icon: Lock, title: "SaaS Security & Compliance", description: "Rigorous controls and recognized frameworks to harden your product, align with regulatory expectations, and uphold trust at every layer.", href: "/services/saas-development/saas-security", features: ["SOC 2", "GDPR", "Encryption"] },
  { icon: Database, title: "SaaS API & Integration", description: "Integration specialists connect diverse third-party APIs and external data sources to your SaaS so workflows stay synchronized end to end.", href: "/services/saas-development/saas-api-integration", features: ["REST APIs", "Webhooks", "SDKs"] },
];

const stats: { label: string; value: number; suffix: string; isDecimal?: boolean }[] = [
  { label: "SaaS Products Delivered", value: 120, suffix: "+" },
  { label: "Active Users", value: 2, suffix: "M+" },
  { label: "Platform Uptime", value: 99, suffix: ".9%" },
  { label: "Faster Deployments", value: 4, suffix: "x" },
];

const processSteps = [
  { step: "01", title: "Market Research", description: "Deep discovery and structured requirements work so the build targets the right problems—with the stack and architecture that fit.", icon: ClipboardList },
  { step: "02", title: "Build MVP", description: "A lean first release with the essentials—fast time-to-value for users while keeping spend disciplined.", icon: Code2 },
  { step: "03", title: "Technical Planning", description: "Clarify what must evolve technically as the MVP grows, so scaling and roadmap decisions stay coherent over time.", icon: Settings },
  { step: "04", title: "Feature Definition", description: "Prioritize capabilities that match customer expectations and sharpen the positioning that sets you apart.", icon: BarChart3 },
  { step: "05", title: "Development & QA", description: "Engineer on the chosen stack while quality assurance runs in parallel—during build and after each milestone.", icon: ShieldCheck },
  { step: "06", title: "Launch & Feedback", description: "Take the product live in market, then channel user input into measurable improvements and a sharper experience.", icon: Rocket },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "Backend Stack",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Ruby on Rails", logo: `${DEVICON}/rails/rails-original-wordmark.svg` },
    ],
  },
  {
    label: "Frontend Stack",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Mobile Stack",
    items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
    ],
  },
  {
    label: "Database Layer",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    label: "Cloud Infrastructure",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    ],
  },
  {
    label: "Payments Stack",
    items: [
      { name: "Stripe", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Chargebee", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Paddle", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Recurly", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
]

const industries = [
  { icon: CreditCard, name: "FinTech & Banking", href: "/industry/banking-finance-insurance", desc: "Secure digital banking, seamless payment rails, real-time trading interfaces & built-in regulatory safeguards", accent: "#10B981", stat: "25+", statLabel: "FinTech Apps", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&q=80" },
  { icon: Stethoscope, name: "Healthcare", href: "/industry/healthcare-lifesciences", desc: "Virtual care platforms, electronic health records, patient engagement portals & privacy-first architecture", accent: "#EF4444", stat: "15+", statLabel: "Health Apps", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop&q=80" },
  { icon: ShoppingCart, name: "E-Commerce", href: "/industry/ecommerce-solutions", desc: "Conversion-optimized storefronts, multi-vendor marketplaces, live inventory sync & composable commerce stacks", accent: "#8B5CF6", stat: "30+", statLabel: "Stores Built", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" },
  { icon: GraduationCap, name: "Education", href: "/industry/education-elearning", desc: "Immersive learning management systems, gamified courses, live virtual classrooms & adaptive EdTech experiences", accent: "#F59E0B", stat: "20+", statLabel: "EdTech Solutions", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80" },
  { icon: Truck, name: "Logistics", href: "/industry/transport-logistics", desc: "GPS fleet visibility, AI-powered route planning, warehouse automation & end-to-end supply chain orchestration", accent: "#06B6D4", stat: "12+", statLabel: "Logistics Apps", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&q=80" },
  { icon: Building2, name: "Real Estate", href: "/industry/real-estate", desc: "Smart property portals, 3D virtual walkthroughs, agent CRM tools & automated tenant lifecycle management", accent: "#EC4899", stat: "10+", statLabel: "PropTech Apps", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop&q=80" },
  { icon: Factory, name: "Manufacturing", href: "/industry/enterprise-retail-manufacturing", desc: "Real-time IoT monitoring, ERP connectors, automated QC workflows & digital production line tracking", accent: "#F97316", stat: "8+", statLabel: "Mfg Solutions", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&q=80" },
  { icon: BarChart3, name: "SaaS & Startups", href: "/industry/fintech", desc: "Lean MVP launches, multi-tenant platform architecture, recurring billing engines & growth-stage scaling playbooks", accent: "#4EB3E8", stat: "40+", statLabel: "SaaS Products", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80" },
];

const whyChoose = [
  { icon: Award, title: "Quality Solutions", description: "Sophisticated capabilities that streamline operations, elevate efficiency, and compound business outcomes." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "An agile SaaS delivery model powered by CI/CD and DevOps—shipping meaningful updates every two to three weeks." },
  { icon: Zap, title: "Data Security", description: "Established safeguards and continuous vigilance so data stays protected at every phase of the lifecycle." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Region-aware hosting across deployment and operations so performance stays crisp in every market you serve." },
];

export default function SaasDevelopmentPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <HeroSection ready={heroReady} />
      <StatsBar />
      <ServiceOfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <IndustriesSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}


function SaaSHeroIllustration() {
  return (
    <motion.div className="relative w-full max-w-md mx-auto aspect-[4/3]" initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" alt="SaaS platform development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10"><Cloud className="w-4 h-4 text-[#4EB3E8]" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">Multi-Tenant</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Cloud-native</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10"><BarChart3 className="w-4 h-4 text-emerald-500" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">99.99%</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Platform uptime</div></div>
        </div>
      </motion.div>
      <div className="absolute -inset-8 -z-10 bg-gradient-to-br from-[#4EB3E8]/20 via-[#4EB3E8]/5 to-transparent rounded-3xl blur-3xl opacity-60 dark:opacity-40" />
    </motion.div>
  );
}

function HeroSection({ ready }: { ready: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block text-xs font-bold tracking-widest text-[#4EB3E8] uppercase mb-4 transition-all duration-500 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Scalable, Secure, and Effortless to Use</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>SaaS Application<br /><span className="text-[#4EB3E8]">Development Services</span></h1>
            <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Shape a bold concept into a production-grade SaaS product that earns attention, wins trust, and compounds recurring revenue.</p>
            <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">Explore Our Work</Link>
            </div>
          </div>
          <div className={`transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SaaSHeroIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const { ref, visible } = useInView(0.3);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 100);
  const c2 = useAnimatedCount(stats[2].value, visible, 200);
  const c3 = useAnimatedCount(stats[3].value, visible, 300);
  const counts = [c0, c1, c2, c3];

  return (
    <div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-[#4EB3E8]">{counts[i]}{stat.suffix}</div>
              <div className="mt-1 text-sm font-medium text-black/40 dark:text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const serviceCardLogos: { logos: string[]; accent: string }[] = [
  { logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "postgresql/postgresql-original.svg"], accent: "#4EB3E8" },
  { logos: ["figma/figma-original.svg", "react/react-original.svg", "tailwindcss/tailwindcss-original.svg"], accent: "#F24E1E" },
  { logos: ["flutter/flutter-original.svg", "react/react-original.svg", "swift/swift-original.svg"], accent: "#02569B" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#635BFF" },
  { logos: ["linux/linux-original.svg", "docker/docker-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#38A169" },
  { logos: ["graphql/graphql-plain.svg", "nodejs/nodejs-original.svg", "docker/docker-original.svg"], accent: "#E10098" },
];

function ServiceCardIllustration({ index }: { index: number }) {
  const data = serviceCardLogos[index] || serviceCardLogos[0];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
          <Image src={`${DEVICON}/${data.logos[0]}`} alt="" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed opacity-20 group-hover:opacity-40 group-hover:rotate-[30deg] transition-all duration-1000" style={{ borderColor: data.accent }} />
      <div className="absolute top-2 right-8 md:top-3 md:right-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[1]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute bottom-2 left-8 md:bottom-3 md:left-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[2]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute top-5 left-14 w-2 h-2 rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute bottom-8 right-14 w-1.5 h-1.5 rounded-full opacity-15 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute top-12 left-6 w-1 h-1 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute w-24 h-24 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
    </div>
  );
}

function ServiceOfferingsSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-16"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">SaaS Development Offerings</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Veteran SaaS engineers craft resilient, efficient, and elastic products—each one tailored to your roadmap and operating model.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((s, i) => { const Icon = s.icon; return (<Link key={s.title} href={s.href} className={`group block p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{s.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{s.description}</p><div className="mt-4 flex flex-wrap gap-2">{s.features.map(f => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div><div className="mt-4 flex items-center text-xs font-semibold text-[#4EB3E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">See Details <ArrowRight className="w-3 h-3 ml-1" /></div></Link>); })}</div></div>); }

function ProcessSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-16"><div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">SaaS Product Development Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A measured, end-to-end framework that keeps SaaS initiatives aligned from discovery through scale.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>); }

function TechStackSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-16">
      <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built on Leading-Edge Technology</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          A curated stack of proven tools and runtimes for dependable, high-scale SaaS delivery.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, ci) => (
          <div
            key={cat.label}
            className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${200 + ci * 100}ms` }}
          >
            <h3 className="text-sm font-semibold text-[#4EB3E8] uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech, ti) => (
                <span
                  key={`${cat.label}-${tech.name}-${ti}`}
                  className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8] transition-all duration-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustriesSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/[0.04] via-transparent to-[#4EB3E8]/[0.03] dark:from-[#4EB3E8]/[0.03] dark:to-[#4EB3E8]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#4EB3E8]/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Industries We <span className="text-black dark:text-white">Serve</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            Vertical-specific knowledge baked into every engagement — from regulatory nuances in finance to patient-safety standards in healthcare.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, i) => {
            const IndIcon = industry.icon;
            return (
              <motion.div key={industry.name} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}>
                <Link href={industry.href} className="group relative block h-full rounded-2xl bg-white/80 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#111] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4EB3E8]/10 dark:hover:shadow-[#4EB3E8]/5 overflow-hidden transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl border-b border-black/[0.04] dark:border-white/[0.04]">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out saturate-[0.85] group-hover:saturate-100" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/5 dark:from-black/60 dark:via-black/20 dark:to-black/10" />
                    <div className="absolute inset-0 bg-[#4EB3E8]/[0.06] dark:bg-[#4EB3E8]/[0.08] mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8]/50 transition-all duration-300">
                      <IndIcon className="w-4 h-4 text-black/60 dark:text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="text-xs font-bold text-[#4EB3E8]">{industry.stat}</span>
                      <span className="text-[9px] font-medium text-black/50 dark:text-white/40 ml-1">{industry.statLabel}</span>
                    </div>
                  </div>
                  <div className="relative p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] group-hover:text-[#4EB3E8] transition-colors duration-300">{industry.name}</h3>
                    <p className="mt-2 text-[13px] font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/55 dark:group-hover:text-[#a1a1a1] transition-colors duration-300">{industry.desc}</p>
                    <div className="mt-4 flex items-center text-[13px] font-semibold text-[#4EB3E8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore industry <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WhyChooseSection() { const { ref, visible } = useInView(0.2); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-16"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Partner with Cloud Nexus on SaaS</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item, i) => { const ItemIcon = item.icon; return (<div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>); }

function CTASection() { const { ref, visible } = useInView(0.25); return (<div ref={ref} className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-20 text-center"><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Ready to Launch Your<br /><span className="text-[#4EB3E8]">SaaS Product?</span></h2><p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Keep your concept from stalling at the whiteboard—work with us to ship a SaaS that earns recurring revenue in market.</p><div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">Start with a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">Explore Our Work</Link></div></div></div>); }
