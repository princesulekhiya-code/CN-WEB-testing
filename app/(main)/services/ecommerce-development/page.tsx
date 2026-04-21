"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Store,
  ShoppingBag,
  CreditCard,
  Truck,
  BarChart3,
  ShieldCheck,
  Smartphone,
  Globe,
  Layers,
  Settings,
  Code2,
  Rocket,
  CheckCircle2,
  Zap,
  Award,
  TrendingUp,
  HeartHandshake,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Building2,
  Gamepad2,
  Factory,
  ClipboardList,
  Palette,
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
  { icon: Store, title: "eCommerce Online Platform", description: "Advanced, scalable, and seamless B2B and B2C eCommerce online stores leveraging the latest tech stack and custom functionalities.", href: "/services/ecommerce-development/ecommerce-platform", features: ["B2B/B2C", "Scalable", "Custom"] },
  { icon: Smartphone, title: "eCommerce Mobile App", description: "Omnichannel online stores supporting convenience shopping — anytime, on the go — boosting sales and building brand awareness.", href: "/services/ecommerce-development/ecommerce-mobile-app", features: ["Omnichannel", "iOS & Android", "On-the-go"] },
  { icon: Layers, title: "Multi-Vendor Marketplace", description: "Reliable multi-vendor marketplaces with streamlined experiences for buyers and sellers, supporting multiple payment gateways.", href: "/services/ecommerce-development/multi-vendor-marketplace", features: ["Multi-vendor", "Payment gateways", "Buyer/Seller"] },
  { icon: CreditCard, title: "Payment & Checkout", description: "Stripe, PayPal, and regional gateways with retries, fraud signals, and mobile-optimized one-page checkout flows.", href: "/services/ecommerce-development/payment-checkout", features: ["Stripe/PayPal", "Fraud detection", "One-page checkout"] },
  { icon: Globe, title: "Headless Commerce", description: "Decoupled front and back-end architecture for ultimate flexibility — plug any backend to any frontend without impact.", href: "/services/ecommerce-development/headless-commerce", features: ["Decoupled", "API-first", "Flexible frontend"] },
  { icon: ShieldCheck, title: "eCommerce Enterprise Software", description: "SEO-friendly custom enterprise portals supporting effortless business management with seamless user experience.", href: "/services/ecommerce-development/enterprise-ecommerce", features: ["Enterprise-grade", "SEO-friendly", "Management tools"] },
];

const stats = [
  { label: "Stores Built", value: 350, suffix: "+" },
  { label: "Revenue Generated", value: 50, suffix: "M+" },
  { label: "Platforms Supported", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

const processSteps = [
  { step: "01", title: "Analysis", description: "Gain details about your business, understand requirements, and propose a feasible eCommerce solution.", icon: ClipboardList },
  { step: "02", title: "Wireframing & Design", description: "Design wireframes, modules, and the app with mobile-first UX and conversion-focused layouts.", icon: Palette },
  { step: "03", title: "Tech-Stack Selection", description: "Select the suitable tech stack, create database schema, and gain approval from the client.", icon: Settings },
  { step: "04", title: "Development", description: "Start coding the solution, release codes for each module with agile sprint methodology.", icon: Code2 },
  { step: "05", title: "Testing", description: "Perform various types of testing — ensure 100% bug-free quality and seek client approval.", icon: ShieldCheck },
  { step: "06", title: "Deployment", description: "Deploy web version on the server, apps on relevant stores — available for public usage.", icon: Rocket },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "Platforms",
    items: [
      { name: "Shopify", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "OpenCart", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "BigCommerce", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    ],
  },
  {
    label: "Payments",
    items: [
      { name: "Stripe", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Razorpay", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Square", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Braintree", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
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
    label: "Infrastructure",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
]

const industries = [
  { icon: ShoppingCart, name: "Retail", desc: "Online stores, marketplaces" },
  { icon: Stethoscope, name: "Healthcare", desc: "Medical supplies, pharmacy" },
  { icon: CreditCard, name: "Finance", desc: "Digital payments, fintech" },
  { icon: Truck, name: "Logistics", desc: "Supply chain, delivery" },
  { icon: GraduationCap, name: "Education", desc: "Course platforms, EdTech" },
  { icon: Building2, name: "Real Estate", desc: "Property listings, portals" },
  { icon: Gamepad2, name: "Entertainment", desc: "Digital goods, subscriptions" },
  { icon: Factory, name: "Manufacturing", desc: "B2B commerce, wholesale" },
];

const whyChoose = [
  { icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },
];

export default function EcommerceDevelopmentPage() {
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


function EcomHeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto aspect-square"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[#006ea3]/10 dark:bg-[#006ea3]/5 rounded-full blur-[80px] scale-75" />
      <motion.svg viewBox="0 0 400 460" fill="none" className="relative w-full h-full drop-shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
        {/* Dashboard */}
        <rect x="60" y="50" width="280" height="380" rx="16" className="fill-white dark:fill-[#1a1a1a] stroke-black/10 dark:stroke-white/10" strokeWidth="2" />
        <rect x="60" y="50" width="280" height="380" rx="16" className="fill-transparent stroke-[#006ea3]/20" strokeWidth="1" />
        <rect x="72" y="66" width="100" height="10" rx="4" className="fill-black/60 dark:fill-white/60" />
        <rect x="72" y="82" width="150" height="6" rx="3" className="fill-black/20 dark:fill-white/20" />
        <rect x="280" y="66" width="48" height="20" rx="8" className="fill-[#006ea3]" />
        <rect x="288" y="73" width="32" height="6" rx="3" className="fill-white" />
        <rect x="72" y="100" width="256" height="100" rx="12" className="fill-[#006ea3]/5 dark:fill-[#006ea3]/10 stroke-[#006ea3]/15" strokeWidth="1" />
        <rect x="84" y="114" width="60" height="6" rx="3" className="fill-[#006ea3]/50" />
        <rect x="84" y="128" width="90" height="12" rx="4" className="fill-[#006ea3] dark:fill-[#3ba0d6]" />
        <rect x="84" y="148" width="70" height="4" rx="2" className="fill-black/15 dark:fill-white/15" />
        <polyline points="220,186 234,164 248,172 262,152 276,158 290,144" className="stroke-[#006ea3] dark:stroke-[#3ba0d6]" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="72" y="212" width="120" height="80" rx="10" className="fill-black/[0.03] dark:fill-white/[0.04] stroke-black/[0.06] dark:stroke-white/[0.06]" strokeWidth="1" />
        <circle cx="94" cy="238" r="10" className="fill-[#006ea3]/15" />
        <rect x="112" y="232" width="60" height="5" rx="2.5" className="fill-black/40 dark:fill-white/40" />
        <rect x="112" y="242" width="40" height="4" rx="2" className="fill-black/20 dark:fill-white/20" />
        <rect x="84" y="260" width="96" height="6" rx="3" className="fill-[#006ea3]/30" />
        <rect x="84" y="272" width="70" height="6" rx="3" className="fill-[#006ea3]/20" />
        <rect x="208" y="212" width="120" height="80" rx="10" className="fill-black/[0.03] dark:fill-white/[0.04] stroke-black/[0.06] dark:stroke-white/[0.06]" strokeWidth="1" />
        <circle cx="230" cy="238" r="10" className="fill-emerald-500/15" />
        <rect x="248" y="232" width="60" height="5" rx="2.5" className="fill-black/40 dark:fill-white/40" />
        <rect x="248" y="242" width="45" height="4" rx="2" className="fill-black/20 dark:fill-white/20" />
        <rect x="220" y="260" width="96" height="6" rx="3" className="fill-emerald-500/30" />
        <rect x="220" y="272" width="75" height="6" rx="3" className="fill-emerald-500/20" />
        <rect x="72" y="304" width="256" height="44" rx="10" className="fill-black/[0.02] dark:fill-white/[0.03] stroke-black/[0.04] dark:stroke-white/[0.04]" strokeWidth="1" />
        <circle cx="96" cy="326" r="8" className="fill-[#006ea3]/15" />
        <rect x="112" y="320" width="80" height="5" rx="2.5" className="fill-black/40 dark:fill-white/40" />
        <rect x="112" y="330" width="120" height="4" rx="2" className="fill-black/15 dark:fill-white/15" />
        <circle cx="308" cy="326" r="6" className="fill-[#006ea3]/20" />
        <rect x="72" y="356" width="256" height="44" rx="10" className="fill-black/[0.02] dark:fill-white/[0.03] stroke-black/[0.04] dark:stroke-white/[0.04]" strokeWidth="1" />
        <circle cx="96" cy="378" r="8" className="fill-violet-500/15" />
        <rect x="112" y="372" width="70" height="5" rx="2.5" className="fill-black/40 dark:fill-white/40" />
        <rect x="112" y="382" width="110" height="4" rx="2" className="fill-black/15 dark:fill-white/15" />
        <circle cx="308" cy="378" r="6" className="fill-violet-500/20" />
      </motion.svg>

      <motion.div
        className="absolute top-12 -left-4 md:top-16 md:-left-8 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/5 dark:shadow-black/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#006ea315" }}>
            <ShoppingCart className="w-3.5 h-3.5" style={{ color: "#006ea3" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Multi-Platform</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Web + Mobile</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-28 -right-2 md:top-32 md:-right-6 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/5 dark:shadow-black/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#10b98115" }}>
            <CreditCard className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Payments</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Stripe + PayPal</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 -left-2 md:bottom-28 md:-left-6 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/5 dark:shadow-black/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8b5cf615" }}>
            <TrendingUp className="w-3.5 h-3.5" style={{ color: "#8b5cf6" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">3x Conversion</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Optimized</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 -right-2 md:bottom-20 md:-right-4 px-3 py-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-black/[0.08] dark:border-white/[0.08] shadow-lg shadow-black/5 dark:shadow-black/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f59e0b15" }}>
            <Globe className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Multi-Currency</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Global Ready</p>
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#006ea3]/10" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#006ea3]/5" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
    </motion.div>
  );
}

function HeroSection({ ready }: { ready: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block text-xs font-bold tracking-widest text-[#006ea3] uppercase mb-4 transition-all duration-500 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Inspire Digital Shopping</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>eCommerce Software<br /><span className="text-[#006ea3]">Development Services</span></h1>
            <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Setting new benchmarks in transforming the shopping experience with custom eCommerce software solutions.</p>
            <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[{ icon: Store, label: "Storefronts" }, { icon: Smartphone, label: "Mobile" }, { icon: CreditCard, label: "Payments" }, { icon: BarChart3, label: "Analytics" }].map((item, i) => { const Icon = item.icon; return (<div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${ready ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20"><Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div><div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div></div>); })}
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
              <div className="text-3xl md:text-4xl font-bold text-[#006ea3]">{counts[i]}{stat.suffix}</div>
              <div className="mt-1 text-sm font-medium text-black/40 dark:text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const serviceCardLogos: { logos: string[]; accent: string }[] = [
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "mongodb/mongodb-original.svg"], accent: "#96BF48" },
  { logos: ["flutter/flutter-original.svg", "react/react-original.svg", "swift/swift-original.svg"], accent: "#02569B" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "postgresql/postgresql-original.svg"], accent: "#FF6B35" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#635BFF" },
  { logos: ["nextjs/nextjs-original.svg", "react/react-original.svg", "graphql/graphql-plain.svg"], accent: "#000000" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "docker/docker-original.svg"], accent: "#006ea3" },
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

function ServiceOfferingsSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our eCommerce Service Offerings</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">State-of-the-art technologies with user-centric elements for an exceptional digital commerce experience.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((s, i) => { const Icon = s.icon; return (<Link key={s.title} href={s.href} className={`group block p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{s.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{s.description}</p><div className="mt-4 flex flex-wrap gap-2">{s.features.map(f => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div><div className="mt-4 flex items-center text-xs font-semibold text-[#006ea3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More <ArrowRight className="w-3 h-3 ml-1" /></div></Link>); })}</div></div>); }

function ProcessSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">eCommerce Development Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">Custom requirements delivered at each phase of the eCommerce marketplace development process.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>); }

function TechStackSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technologies We Use</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          Advanced eCommerce platforms, payment gateways, and scalable infrastructure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, ci) => (
          <div
            key={cat.label}
            className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${200 + ci * 100}ms` }}
          >
            <h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech, ti) => (
                <span
                  key={`${cat.label}-${tech.name}-${ti}`}
                  className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300"
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

function IndustriesSection() { const { ref, visible } = useInView(0.15); return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Industries We Serve</h2></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-5">{industries.map((ind, i) => { const Icon = ind.icon; return (<div key={ind.name} className={`group flex flex-col items-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/20 hover:bg-[#006ea3]/[0.02] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${200 + i * 60}ms` }}><div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:scale-110 transition-transform duration-300"><Icon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div><span className="text-sm font-semibold text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-300">{ind.name}</span></div>); })}</div></div></div>); }

function WhyChooseSection() { const { ref, visible } = useInView(0.2); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for eCommerce</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item, i) => { const ItemIcon = item.icon; return (<div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20"><ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>); }

function CTASection() { const { ref, visible } = useInView(0.25); return (<div ref={ref} className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Want To Build<br /><span className="text-[#006ea3]">eCommerce Solutions?</span></h2><p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Hire our eCommerce web and mobile app development professionals to elevate your business.</p><div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>); }
