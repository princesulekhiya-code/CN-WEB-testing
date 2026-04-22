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
  { icon: Store, title: "eCommerce Online Platform", description: "High-performance B2B and B2C storefronts built on modern stacks — purpose-designed for rich catalogues, custom workflows, and growth at scale.", href: "/services/ecommerce-development/ecommerce-platform", features: ["B2B/B2C", "Scalable", "Custom"] },
  { icon: Smartphone, title: "eCommerce Mobile App", description: "Omnichannel mobile shopping experiences that meet customers wherever they are — driving conversions and deepening brand loyalty on every device.", href: "/services/ecommerce-development/ecommerce-mobile-app", features: ["Omnichannel", "iOS & Android", "On-the-go"] },
  { icon: Layers, title: "Multi-Vendor Marketplace", description: "Robust marketplace platforms with frictionless buyer and seller journeys, multi-gateway payments, and built-in vendor management tools.", href: "/services/ecommerce-development/multi-vendor-marketplace", features: ["Multi-vendor", "Payment gateways", "Buyer/Seller"] },
  { icon: CreditCard, title: "Payment & Checkout", description: "Stripe, PayPal, and regional gateways with intelligent retries, real-time fraud scoring, and mobile-optimized one-tap checkout flows.", href: "/services/ecommerce-development/payment-checkout", features: ["Stripe/PayPal", "Fraud detection", "One-page checkout"] },
  { icon: Globe, title: "Headless Commerce", description: "API-first, composable architecture — swap or evolve any frontend independently while the commerce engine runs uninterrupted underneath.", href: "/services/ecommerce-development/headless-commerce", features: ["Decoupled", "API-first", "Flexible frontend"] },
  { icon: ShieldCheck, title: "eCommerce Enterprise Software", description: "SEO-optimized enterprise portals that simplify complex operations and deliver a polished, conversion-focused shopping experience.", href: "/services/ecommerce-development/enterprise-ecommerce", features: ["Enterprise-grade", "SEO-friendly", "Management tools"] },
];

const stats = [
  { label: "Stores Built", value: 350, suffix: "+" },
  { label: "Revenue Generated", value: 50, suffix: "M+" },
  { label: "Platforms Supported", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

const processSteps = [
  { step: "01", title: "Analysis", description: "Deep-dive into your business model, catalogue structure, and customer journeys to define the ideal commerce architecture.", icon: ClipboardList },
  { step: "02", title: "Wireframing & Design", description: "Conversion-focused wireframes and mobile-first layouts that guide shoppers effortlessly from browse to buy.", icon: Palette },
  { step: "03", title: "Tech-Stack Selection", description: "Platform and stack recommendations matched to your scale, budget, and integration needs — signed off before a line of code.", icon: Settings },
  { step: "04", title: "Development", description: "Sprint-based builds with modular releases — every feature tested in isolation before merging into the production codebase.", icon: Code2 },
  { step: "05", title: "Testing", description: "Automated regression, payment-flow verification, load stress tests, and cross-device QA for a defect-free launch.", icon: ShieldCheck },
  { step: "06", title: "Deployment", description: "Zero-downtime go-live on hosting infrastructure and app stores — with monitoring, CDN, and rollback readiness in place.", icon: Rocket },
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
  {
    icon: ShoppingCart, name: "Retail", href: "/industry/ecommerce-solutions",
    desc: "Online stores, marketplaces & omnichannel retail commerce solutions",
    accent: "#8B5CF6", stat: "30+", statLabel: "Stores Built",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Stethoscope, name: "Healthcare", href: "/industry/healthcare-lifesciences",
    desc: "Medical supplies, pharmacy e-commerce & healthcare online stores",
    accent: "#EF4444", stat: "15+", statLabel: "Health Apps",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: CreditCard, name: "Finance", href: "/industry/banking-finance-insurance",
    desc: "Digital payments, fintech commerce & financial service platforms",
    accent: "#10B981", stat: "25+", statLabel: "FinTech Apps",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Truck, name: "Logistics", href: "/industry/transport-logistics",
    desc: "Supply chain commerce, delivery platforms & logistics e-commerce",
    accent: "#06B6D4", stat: "12+", statLabel: "Logistics Apps",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: GraduationCap, name: "Education", href: "/industry/education-elearning",
    desc: "Course platforms, EdTech commerce & education marketplace solutions",
    accent: "#F59E0B", stat: "20+", statLabel: "EdTech Solutions",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2, name: "Real Estate", href: "/industry/real-estate",
    desc: "Property listings, portals & real estate commerce platforms",
    accent: "#EC4899", stat: "10+", statLabel: "PropTech Apps",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Gamepad2, name: "Entertainment", href: "/industry/entertainment",
    desc: "Digital goods, subscriptions & entertainment commerce platforms",
    accent: "#A855F7", stat: "14+", statLabel: "Media Apps",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Factory, name: "Manufacturing", href: "/industry/enterprise-retail-manufacturing",
    desc: "B2B commerce, wholesale platforms & manufacturing e-commerce",
    accent: "#F97316", stat: "8+", statLabel: "Mfg Solutions",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&q=80",
  },
];

const whyChoose = [
  { icon: Award, title: "Agile Development", description: "Sprint-driven delivery with modern toolchains — shipping production-ready features fast without compromising quality." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Your feedback shapes every iteration — we build around real user needs to deliver outcomes that hit the mark." },
  { icon: Zap, title: "NDA & Security", description: "Strict confidentiality from day one — enforceable NDAs and enterprise-grade data handling protect every shared detail." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "No one-size-fits-all — each engagement gets a tailored methodology, tech stack, and team structure." },
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
    <motion.div className="relative w-full max-w-md mx-auto aspect-[4/3]" initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80" alt="E-commerce development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10"><ShoppingCart className="w-4 h-4 text-[#4EB3E8]" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">30+ Stores</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Built & scaled</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10"><BarChart3 className="w-4 h-4 text-emerald-500" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">3x Revenue</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Avg client growth</div></div>
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
            <span className={`inline-block text-xs font-bold tracking-widest text-[#4EB3E8] uppercase mb-4 transition-all duration-500 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Inspire Digital Shopping</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>eCommerce Software<br /><span className="text-[#4EB3E8]">Development Services</span></h1>
            <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Setting new benchmarks in transforming the shopping experience with custom eCommerce software solutions.</p>
            <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
            </div>
          </div>
          <div className={`transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <EcomHeroIllustration />
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
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "mongodb/mongodb-original.svg"], accent: "#96BF48" },
  { logos: ["flutter/flutter-original.svg", "react/react-original.svg", "swift/swift-original.svg"], accent: "#02569B" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "postgresql/postgresql-original.svg"], accent: "#FF6B35" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#635BFF" },
  { logos: ["nextjs/nextjs-original.svg", "react/react-original.svg", "graphql/graphql-plain.svg"], accent: "#000000" },
  { logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "docker/docker-original.svg"], accent: "#4EB3E8" },
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

function ServiceOfferingsSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our eCommerce Service Offerings</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">State-of-the-art technologies with user-centric elements for an exceptional digital commerce experience.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((s, i) => { const Icon = s.icon; return (<Link key={s.title} href={s.href} className={`group block p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{s.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{s.description}</p><div className="mt-4 flex flex-wrap gap-2">{s.features.map(f => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div><div className="mt-4 flex items-center text-xs font-semibold text-[#4EB3E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More <ArrowRight className="w-3 h-3 ml-1" /></div></Link>); })}</div></div>); }

function ProcessSection() { const { ref, visible } = useInView(0.1); return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">eCommerce Development Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">Custom requirements delivered at each phase of the eCommerce marketplace development process.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>); }

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
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/[0.04] via-transparent to-[#4EB3E8]/[0.03] dark:from-[#4EB3E8]/[0.03] dark:to-[#4EB3E8]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#4EB3E8]/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">
            Industries
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Industries We <span className="text-black dark:text-white">Build For</span>
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            Domain expertise across verticals — every solution is built with deep understanding of your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {industries.map((ind, i) => {
            const IndIcon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={ind.href}
                  className="group relative block h-full rounded-2xl bg-white/80 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/25 dark:hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#111] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4EB3E8]/10 dark:hover:shadow-[#4EB3E8]/5 overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl border-b border-black/[0.04] dark:border-white/[0.04]">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8]/50 transition-all duration-300">
                      <IndIcon className="w-4 h-4 text-black/60 dark:text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="text-xs font-bold text-[#4EB3E8]">{ind.stat}</span>
                      <span className="text-[9px] font-medium text-black/50 dark:text-white/40 ml-1">{ind.statLabel}</span>
                    </div>
                  </div>

                  <div className="relative p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] group-hover:text-[#4EB3E8] transition-colors duration-300">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/55 dark:group-hover:text-[#a1a1a1] transition-colors duration-300">
                      {ind.desc}
                    </p>
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

function WhyChooseSection() { const { ref, visible } = useInView(0.2); return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for eCommerce</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item, i) => { const ItemIcon = item.icon; return (<div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>); }

function CTASection() { const { ref, visible } = useInView(0.25); return (<div ref={ref} className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Want To Build<br /><span className="text-[#4EB3E8]">eCommerce Solutions?</span></h2><p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Hire our eCommerce web and mobile app development professionals to elevate your business.</p><div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>); }
