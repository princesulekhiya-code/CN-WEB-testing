"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowLeft, Smartphone, Monitor, Server, Database,
  Megaphone, ShoppingCart, Users, Clock, Briefcase, UserPlus,
  Headphones, Handshake, CheckCircle2, ShieldCheck, Rocket, Code2,
  Settings, Palette, BarChart3, Zap, HeartHandshake, Award,
  Stethoscope, CreditCard, Truck, GraduationCap, Building2,
  Factory, Gamepad2, Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════ */

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
  description: string;
  features: string[];
  href: string;
}

const services: ServiceOffering[] = [
  {
    icon: Smartphone,
    title: "Hire Mobile App Developers",
    description: "Seasoned Android, iOS, Flutter, and React Native specialists who deliver high-performance mobile experiences on robust architecture—compressing time-to-market without cutting corners.",
    features: ["iOS & Android", "Flutter & React Native", "Store-ready releases"],
    href: "/services/hire-dedicated-developers/hire-mobile-app-developers",
  },
  {
    icon: Monitor,
    title: "Hire Front-End Developers",
    description: "Front-end specialists at home in React, Angular, Vue.js, and modern UI stacks—shipping interfaces that remain responsive, accessible, and performance-tuned end to end.",
    features: ["React & Angular", "Vue.js", "Responsive design"],
    href: "/services/hire-dedicated-developers/hire-frontend-developers",
  },
  {
    icon: Server,
    title: "Hire Back-End Developers",
    description: "Server-side experts in Node.js, Python, .NET, Java, and today’s API patterns—building dependable platforms designed for scale, throughput, and uptime.",
    features: ["Node.js & Python", ".NET & Java", "API design"],
    href: "/services/hire-dedicated-developers/hire-backend-developers",
  },
  {
    icon: Database,
    title: "Hire Database Developers",
    description: "Data-layer experts spanning MySQL, MongoDB, PostgreSQL, and Redis—tuning storage, processing, and analytics pipelines from ingestion through insight.",
    features: ["SQL & NoSQL", "Data modeling", "Performance tuning"],
    href: "/services/hire-dedicated-developers/hire-database-developers",
  },
  {
    icon: Megaphone,
    title: "Hire Digital Marketing Experts",
    description: "Growth strategists who blend AI-accelerated execution with SEO, PPC, social, content, and performance initiatives—anchored to clear, measurable ROI.",
    features: ["SEO & PPC", "Social media", "Performance marketing"],
    href: "/services/hire-dedicated-developers/hire-digital-marketing-experts",
  },
  {
    icon: ShoppingCart,
    title: "Hire eCommerce & CMS Experts",
    description: "WordPress, Shopify, Magento, and custom CMS practitioners—building storefronts engineered for conversion and connected through seamless integrations.",
    features: ["Shopify & Magento", "WordPress", "Custom CMS"],
    href: "/services/hire-dedicated-developers/hire-ecommerce-cms-experts",
  },
];

const engagementModels = [
  {
    title: "Onshore/Offshore Development",
    description: "Pair worldwide depth with local visibility. Collaborate in real time across time zones, keep delivery predictable, and optimize spend without sacrificing quality.",
    icon: Users,
  },
  {
    title: "Hybrid Dedicated Development",
    description: "Unite on-site alignment with remote execution—faster iteration, fluid communication, and steady throughput across distributed squads.",
    icon: Handshake,
  },
  {
    title: "ODC / Build-Operate-Transfer",
    description: "Stand up an offshore development center without the operational drag. We run setup, day-to-day operations, and governance—then hand over full ownership when you are ready.",
    icon: Building2,
  },
];

const processSteps = [
  { step: "01", title: "Share Requirements", description: "Document your goals, technology choices, and timeline. We review the brief and recommend engineers whose skills match your needs with precision.", icon: Settings },
  { step: "02", title: "Receive Vetted Profiles", description: "Get carefully screened candidate profiles aligned to your scope—each checked for technical strength, domain fit, and clear, professional communication.", icon: Users },
  { step: "03", title: "Interview & Finalize", description: "Speak with shortlisted professionals to confirm fit, problem-solving approach, and conduct before you commit to the right people.", icon: Palette },
  { step: "04", title: "Onboard in 48 Hours", description: "Your engineer starts with tools, access, and structured onboarding in place—delivering real value from day one.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Join your backlog, definition of done, and release rhythm with shared quality standards and the agile practices your team already trusts.", icon: BarChart3 },
  { step: "06", title: "Scale or Transition", description: "Right-size the team, rotate subject-matter experts, or transition with runbooks as the program matures.", icon: ShieldCheck },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "Mobile Product Engineering",
    items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Dart", logo: `${DEVICON}/dart/dart-original.svg` },
      { name: "Objective-C", logo: `${DEVICON}/objectivec/objectivec-plain.svg` },
    ],
  },
  {
    label: "Front-End Engineering",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "HTML/CSS", logo: `${DEVICON}/html5/html5-original.svg` },
    ],
  },
  {
    label: "Back-End Engineering",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "PHP Laravel", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
  {
    label: "Data & Storage Platforms",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    ],
  },
  {
    label: "Cloud Infrastructure & DevOps",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "CI/CD", logo: `${DEVICON}/githubactions/githubactions-original.svg` },
    ],
  },
  {
    label: "CMS & Commerce",
    items: [
      { name: "WordPress", logo: `${DEVICON}/wordpress/wordpress-original.svg` },
      { name: "Shopify", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Magento", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "WooCommerce", logo: `${DEVICON}/woocommerce/woocommerce-original.svg` },
      { name: "Strapi", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Contentful", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
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
  { icon: Zap, title: "Breadth Across Disciplines", description: "Teams fluent in modern stacks—taking digital products from concept through launch with speed and uncompromising quality." },
  { icon: Clock, title: "Elastic, Right-Sized Capacity", description: "Grow or tighten headcount without heavy overhead. How we work adapts to your roadmap and shifting timelines." },
  { icon: Award, title: "Iterative Delivery, Full Visibility", description: "Transparent sprint rhythm, steady check-ins, and straightforward reporting—so you always know where things stand." },
  { icon: HeartHandshake, title: "Screened for Sector Fit", description: "Professionals selected for technical depth and industry context spanning healthcare, financial services, retail, and related fields." },
];

const stats: { label: string; value: number; suffix: string; isDecimal?: boolean }[] = [
  { value: 250, suffix: "+", label: "Developers Available to Start" },
  { value: 100, suffix: "+", label: "Projects Delivered to Production" },
  { value: 48, suffix: "hr", label: "Standard Time to Onboard" },
  { value: 40, suffix: "%", label: "Typical Engineering Cost Savings" },
];

const pricingModels = [
  { title: "Fixed Price", description: "Outcome-focused delivery within an agreed schedule and cap—best suited to initiatives with crisp scope and stable requirements.", icon: Briefcase },
  { title: "Time & Material", description: "Invest only in the hours and assets consumed—ideal when priorities shift and the feature set is still taking shape.", icon: Clock },
  { title: "Monthly Hiring", description: "A predictable monthly investment in dedicated capacity—tailored to sustained programs that demand continuous throughput.", icon: UserPlus },
];

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function HireDedicatedDevelopersPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
              heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} /> Return to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Hire Dedicated
                <br />
                <span className="text-[#4EB3E8]">Developers</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Scale with engagement models that bend to your priorities, depth you can rely on, and teams that have shipped before. Bring in pre-vetted engineers in as little as 48 hours and trim engineering spend by as much as 40%.
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
                  Begin Hiring Today <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  Explore Our Portfolio
                </Link>
              </div>
            </div>

            <HeroStats />
          </div>
        </div>
      </div>

      <ServiceOfferingsSection />
      <EngagementModelsSection />
      <ProcessSection />
      <TechStackSection />
      <PricingModelsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════════════ */


function HireHeroIllustration() {
  return (
    <motion.div className="relative w-full max-w-md mx-auto aspect-[4/3]" initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" alt="Hire dedicated developers" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10"><Users className="w-4 h-4 text-[#4EB3E8]" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">150+ Devs</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Ready to deploy</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10"><Clock className="w-4 h-4 text-emerald-500" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">48 Hours</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">To first match</div></div>
        </div>
      </motion.div>
      <div className="absolute -inset-8 -z-10 bg-gradient-to-br from-[#4EB3E8]/20 via-[#4EB3E8]/5 to-transparent rounded-3xl blur-3xl opacity-60 dark:opacity-40" />
    </motion.div>
  );
}

function HeroStats() {
  const { ref, visible } = useInView(0.3);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 150);
  const c2 = useAnimatedCount(stats[2].value, visible, 300);
  const counts = [c0, c1, c2];

  return (
    <div ref={ref} className="space-y-8">
      <HireHeroIllustration />
      <div
        className={`grid grid-cols-4 gap-3 transition-all duration-700 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl md:text-2xl font-bold text-[#4EB3E8] tabular-nums">
              {stat.isDecimal ? stat.value : counts[Math.min(i, 2)]}{stat.suffix}
            </div>
            <div className="mt-0.5 text-[10px] md:text-xs font-medium text-black/40 dark:text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


const serviceCardLogos: { logos: string[]; accent: string }[] = [
  { logos: ["swift/swift-original.svg", "kotlin/kotlin-original.svg", "flutter/flutter-original.svg"], accent: "#F05138" },
  { logos: ["react/react-original.svg", "vuejs/vuejs-original.svg", "angular/angular-original.svg"], accent: "#61DAFB" },
  { logos: ["nodejs/nodejs-original.svg", "python/python-original.svg", "go/go-original.svg"], accent: "#68A063" },
  { logos: ["postgresql/postgresql-original.svg", "mongodb/mongodb-original.svg", "mysql/mysql-original.svg"], accent: "#336791" },
  { logos: ["google/google-original.svg", "facebook/facebook-original.svg", "linkedin/linkedin-original.svg"], accent: "#4285F4" },
  { logos: ["wordpress/wordpress-original.svg", "woocommerce/woocommerce-original.svg", "magento/magento-original.svg"], accent: "#21759B" },
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

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EB3E8]/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Capabilities We <span className="text-black dark:text-white">Deliver</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">End-to-end expertise shaped around your operating context and growth priorities.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}>
                <Link href={service.href} className="group relative block h-full rounded-2xl border border-black/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.04] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.05] dark:to-[#4EB3E8]/[0.02] border-b border-black/[0.04] dark:border-white/[0.04] group-hover:from-[#4EB3E8]/[0.06] group-hover:to-[#4EB3E8]/[0.03] transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                      <ServiceCardIllustration index={i} />
                    </div>
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-sm group-hover:bg-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/20 transition-all duration-300">
                      <Icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-[#4EB3E8] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="relative p-5 md:p-6">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500">
                          <CheckCircle2 className="w-3 h-3" />{f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center text-[13px] font-semibold text-[#4EB3E8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore the offering <ArrowRight className="w-3.5 h-3.5 ml-1" />
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

function EngagementModelsSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engagement Models That Flex With You</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            Clear, adaptable ways of working that let you scale capacity, steer priorities, and embed engineers in your rituals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, i) => {
            const ModelIcon = model.icon;
            return (
              <div
                key={model.title}
                className={`group p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-black hover:border-[#4EB3E8]/20 hover:shadow-lg hover:shadow-[#4EB3E8]/5 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:bg-[#4EB3E8]/15 transition-colors duration-300">
                  <ModelIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{model.title}</h3>
                <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{model.description}</p>
              </div>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Our Delivery <span className="text-black dark:text-white">Process</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A proven operating model that safeguards quality, visibility, and dependable release cadence.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/15 to-[#4EB3E8]/5" />
          </div>
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30, x: 0 }} animate={visible ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }} className="relative mb-16 last:mb-0">
                <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-12" : ""}>
                    {isLeft && (
                      <div className="group flex flex-col items-end text-right rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px] ml-auto">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <div className="group relative">
                      <motion.div className="absolute inset-0 rounded-2xl border border-[#4EB3E8]/20" initial={{ scale: 1, opacity: 0 }} animate={visible ? { scale: [1, 1.5, 1.5], opacity: [0, 0.3, 0] } : {}} transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 3 }} />
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#4EB3E8] flex items-center justify-center z-10">
                        <span className="text-[9px] font-bold text-white">{step.step}</span>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-lg shadow-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/50 group-hover:shadow-[#4EB3E8]/20 group-hover:scale-110 transition-all duration-500">
                        <StepIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-12" : ""}>
                    {!isLeft && (
                      <div className="group flex flex-col items-start text-left rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px]">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4EB3E8] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-md shadow-[#4EB3E8]/10">
                      <StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-bold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed">{step.description}</p>
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
  const { ref, visible } = useInView(0.1);
  const [activeTab, setActiveTab] = useState(0);
  const allTechs = techCategories.flatMap((c) => c.items);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Built on <span className="text-black dark:text-white">Proven Tooling</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Industry-leading frameworks and platforms form the foundation of every engagement we take on.</p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {techCategories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveTab(i)} className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"}`}>{cat.label}</button>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
              {techCategories[activeTab].items.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }} className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-300 cursor-default">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Image src={tech.logo} alt={tech.name} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" unoptimized />
                  </div>
                  <span className="relative text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="group flex overflow-hidden w-full [--gap:3.5rem] md:[--gap:4.5rem] [--duration:40s] gap-[var(--gap)]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
                  {allTechs.map((tech, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap" title={tech.name}>
                      <Image src={tech.logo} alt={tech.name} width={32} height={32} className="w-8 h-8 md:w-9 md:h-9 object-contain flex-shrink-0" unoptimized />
                      <span className="text-sm md:text-base font-medium text-black/50 dark:text-white/40">{tech.name}</span>
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

function PricingModelsSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing Models That Fit the Brief</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          Select commercial terms that mirror your scope, investment appetite, and expected runway.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingModels.map((model, i) => {
          const ModelIcon = model.icon;
          return (
            <div
              key={model.title}
              className={`group text-center p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 hover:shadow-lg hover:shadow-[#4EB3E8]/5 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:bg-[#4EB3E8]/15 transition-colors duration-300">
                <ModelIcon className="w-7 h-7 text-[#4EB3E8]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{model.title}</h3>
              <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{model.description}</p>
            </div>
          );
        })}
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
      <div className="relative mx-auto max-w-7xl px-6 py-28">
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

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Why Partner With <span className="text-black dark:text-white">Cloud Nexus</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} className="group relative text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-white/60 dark:bg-white/[0.02] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4EB3E8]/5 transition-all duration-500 overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ready to Hire
          <br />
          <span className="text-[#4EB3E8]">Dedicated Developers for Your Stack?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us the roles, technologies, and schedule you require—we will stand up a dedicated squad that delivers at the pace of your internal team. Begin with a seven-day trial at no risk.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20"
          >
            Start Your 7-Day Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
