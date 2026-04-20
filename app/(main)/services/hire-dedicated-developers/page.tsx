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
    description: "Skilled Android, iOS, Flutter, and React Native developers who build high-performing mobile apps with scalable architecture and faster go-to-market execution.",
    features: ["iOS & Android", "Flutter & React Native", "App Store ready"],
    href: "/services/hire-dedicated-developers/hire-mobile-app-developers",
  },
  {
    icon: Monitor,
    title: "Hire Front-End Developers",
    description: "Front-end specialists proficient in React, Angular, Vue.js, and modern UI frameworks — delivering responsive, accessible, high-performance interfaces.",
    features: ["React & Angular", "Vue.js", "Responsive design"],
    href: "/services/hire-dedicated-developers/hire-frontend-developers",
  },
  {
    icon: Server,
    title: "Hire Back-End Developers",
    description: "Backend engineers with expertise in Node.js, Python, .NET, Java, and modern APIs — building robust architectures and high-performance systems.",
    features: ["Node.js & Python", ".NET & Java", "API design"],
    href: "/services/hire-dedicated-developers/hire-backend-developers",
  },
  {
    icon: Database,
    title: "Hire Database Developers",
    description: "Database specialists in MySQL, MongoDB, PostgreSQL, and Redis — building optimized data storage, processing, and analytics systems.",
    features: ["SQL & NoSQL", "Data modeling", "Performance tuning"],
    href: "/services/hire-dedicated-developers/hire-database-developers",
  },
  {
    icon: Megaphone,
    title: "Hire Digital Marketing Experts",
    description: "AI-driven digital marketers specializing in SEO, PPC, social media, content strategy, and performance marketing for measurable ROI.",
    features: ["SEO & PPC", "Social media", "Performance marketing"],
    href: "/services/hire-dedicated-developers/hire-digital-marketing-experts",
  },
  {
    icon: ShoppingCart,
    title: "Hire eCommerce & CMS Experts",
    description: "Experts in WordPress, Shopify, Magento, and custom CMS platforms — building conversion-focused digital storefronts with seamless integrations.",
    features: ["Shopify & Magento", "WordPress", "Custom CMS"],
    href: "/services/hire-dedicated-developers/hire-ecommerce-cms-experts",
  },
];

const engagementModels = [
  {
    title: "Onshore/Offshore Development",
    description: "Balance global expertise with local visibility. Real-time collaboration, time zone-friendly workflows, and predictable delivery with cost efficiency.",
    icon: Users,
  },
  {
    title: "Hybrid Dedicated Development",
    description: "Combine local collaboration with remote execution. Faster execution, seamless communication, and consistent output across distributed teams.",
    icon: Handshake,
  },
  {
    title: "ODC / Build-Operate-Transfer",
    description: "Launch your offshore development center effortlessly. We handle setup, operations, and governance — then transfer complete ownership when ready.",
    icon: Building2,
  },
];

const processSteps = [
  { step: "01", title: "Share Requirements", description: "Tell us your goals, technologies, and timeline. We analyze your needs and recommend developers with the right skillset.", icon: Settings },
  { step: "02", title: "Receive Vetted Profiles", description: "Carefully screened developer profiles matching your project scope — evaluated for technical skills, domain knowledge, and communication.", icon: Users },
  { step: "03", title: "Interview & Finalize", description: "Connect with shortlisted developers to assess fit, code logic, and professionalism before finalizing your ideal team members.", icon: Palette },
  { step: "04", title: "Onboard in 48 Hours", description: "Your developer starts fully equipped with tools, access, and project onboarding support — productive from day one.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Merge into your backlog, definition of done, and release trains with shared quality bars and agile ceremonies.", icon: BarChart3 },
  { step: "06", title: "Scale or Transition", description: "Adjust headcount, rotate specialists, or hand off with runbooks when the engagement evolves.", icon: ShieldCheck },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "Mobile",
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
    label: "Frontend",
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
    label: "Backend",
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
    label: "Database",
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
    label: "Cloud & DevOps",
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
    label: "CMS & eCommerce",
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
  { icon: Stethoscope, name: "Healthcare", desc: "Telemedicine, EMR, wellness" },
  { icon: CreditCard, name: "FinTech", desc: "Banking, payments, insurance" },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Marketplaces, retail, mCommerce" },
  { icon: Truck, name: "Logistics", desc: "Fleet, delivery, supply chain" },
  { icon: GraduationCap, name: "Education", desc: "EdTech, LMS, eLearning" },
  { icon: Building2, name: "Real Estate", desc: "PropTech, listings, tours" },
  { icon: Gamepad2, name: "Entertainment", desc: "Streaming, gaming, media" },
  { icon: Factory, name: "Manufacturing", desc: "ERP, IoT, automation" },
];

const whyChoose = [
  { icon: Zap, title: "Cross-Functional Expertise", description: "Developers with advanced skills in new-age technologies — delivering full-cycle digital products with speed and precision." },
  { icon: Clock, title: "Scalable & Flexible", description: "Scale your team up or down without friction. Adaptable engagement models to stay agile and meet shifting deadlines." },
  { icon: Award, title: "Agile & Transparent", description: "Open sprints, daily updates, and clear reporting — you're informed, involved, and confident at every development phase." },
  { icon: HeartHandshake, title: "Pre-Vetted Industry Talent", description: "Developers handpicked for technical depth and industry familiarity in healthcare, fintech, retail, and more." },
];

const stats = [
  { value: 250, suffix: "+", label: "Developers Available" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 48, suffix: "hr", label: "Onboarding Time" },
  { value: 40, suffix: "%", label: "Cost Savings" },
];

const pricingModels = [
  { title: "Fixed Price", description: "Quality solutions delivered within defined timeline and budget — ideal for well-scoped projects with clear requirements.", icon: Briefcase },
  { title: "Time & Material", description: "Pay for actual hours and resources used — perfect for evolving projects where scope and features may change.", icon: Clock },
  { title: "Monthly Hiring", description: "Fixed monthly charge for dedicated resources — ideal for larger, long-term projects requiring consistent capacity.", icon: UserPlus },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
              heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} /> Back to Services
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
                <span className="text-[#006ea3]">Developers</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Scale your business faster with flexible engagement models, proven expertise, and real-world experience. Onboard experienced, vetted developers within 48 hours and reduce development costs by up to 40%.
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
                  Start Hiring Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  View Our Work
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
    <motion.div
      className="relative w-full max-w-md mx-auto aspect-square"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[#006ea3]/10 dark:bg-[#006ea3]/5 rounded-full blur-[80px] scale-75" />
      <motion.svg
        viewBox="0 0 400 460"
        fill="none"
        className="relative w-full h-full drop-shadow-2xl"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Dashboard */}
        <rect x="60" y="50" width="280" height="380" rx="16" className="fill-white dark:fill-[#1a1a1a] stroke-black/10 dark:stroke-white/10" strokeWidth="2" />
        <rect x="60" y="50" width="280" height="380" rx="16" className="fill-transparent stroke-[#006ea3]/20" strokeWidth="1" />
        {/* Header */}
        <rect x="72" y="66" width="100" height="10" rx="4" className="fill-black/60 dark:fill-white/60" />
        <rect x="72" y="82" width="150" height="6" rx="3" className="fill-black/20 dark:fill-white/20" />
        <rect x="280" y="66" width="48" height="20" rx="8" className="fill-[#006ea3]" />
        <rect x="288" y="73" width="32" height="6" rx="3" className="fill-white" />
        {/* Main card */}
        <rect x="72" y="100" width="256" height="100" rx="12" className="fill-[#006ea3]/5 dark:fill-[#006ea3]/10 stroke-[#006ea3]/15" strokeWidth="1" />
        <rect x="84" y="114" width="60" height="6" rx="3" className="fill-[#006ea3]/50" />
        <rect x="84" y="128" width="90" height="12" rx="4" className="fill-[#006ea3] dark:fill-[#3ba0d6]" />
        <rect x="84" y="148" width="70" height="4" rx="2" className="fill-black/15 dark:fill-white/15" />
        <polyline points="220,186 234,164 248,172 262,152 276,158 290,144" className="stroke-[#006ea3] dark:stroke-[#3ba0d6]" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Two cards */}
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
        {/* Bottom list items */}
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
            <Users className="w-3.5 h-3.5" style={{ color: "#006ea3" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">500+ Devs</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Available</p>
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
            <Clock className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">48hr Match</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Fast Hiring</p>
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
            <Code2 className="w-3.5 h-3.5" style={{ color: "#8b5cf6" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Full-Stack</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Expertise</p>
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
            <HeartHandshake className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Dedicated</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Teams</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#006ea3]/10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#006ea3]/5"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
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
            <div className="text-xl md:text-2xl font-bold text-[#006ea3] tabular-nums">
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006ea3]/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">What We <span className="text-black dark:text-white">Offer</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Comprehensive solutions tailored to your business needs.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}>
                <Link href={service.href} className="group relative block h-full rounded-2xl border border-black/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#006ea3]/30 hover:bg-[#006ea3]/[0.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:hover:border-[#006ea3]/30 dark:hover:bg-[#006ea3]/[0.04] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.05] dark:to-[#006ea3]/[0.02] border-b border-black/[0.04] dark:border-white/[0.04] group-hover:from-[#006ea3]/[0.06] group-hover:to-[#006ea3]/[0.03] transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                      <ServiceCardIllustration index={i} />
                    </div>
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-sm group-hover:bg-[#006ea3]/10 group-hover:border-[#006ea3]/20 transition-all duration-300">
                      <Icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-[#006ea3] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="relative p-5 md:p-6">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500">
                          <CheckCircle2 className="w-3 h-3" />{f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center text-[13px] font-semibold text-[#006ea3] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flexible Engagement Models</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            Transparent collaboration options that let you scale teams, control priorities, and align developers with your workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, i) => {
            const ModelIcon = model.icon;
            return (
              <div
                key={model.title}
                className={`group p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-black hover:border-[#006ea3]/20 hover:shadow-lg hover:shadow-[#006ea3]/5 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:bg-[#006ea3]/15 transition-colors duration-300">
                  <ModelIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{model.title}</h3>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.01] dark:to-[#006ea3]/[0.01] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#006ea3]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#006ea3]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">How We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Our Development <span className="text-black dark:text-white">Process</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A battle-tested methodology that ensures quality, transparency, and on-time delivery.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#006ea3]/30 via-[#006ea3]/15 to-[#006ea3]/5" />
          </div>
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30, x: 0 }} animate={visible ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }} className="relative mb-16 last:mb-0">
                <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-12" : ""}>
                    {isLeft && (
                      <div className="group flex flex-col items-end text-right rounded-2xl p-6 border border-transparent hover:border-[#006ea3]/15 hover:bg-[#006ea3]/[0.02] dark:hover:bg-[#006ea3]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px] ml-auto">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#006ea3]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <div className="group relative">
                      <motion.div className="absolute inset-0 rounded-2xl border border-[#006ea3]/20" initial={{ scale: 1, opacity: 0 }} animate={visible ? { scale: [1, 1.5, 1.5], opacity: [0, 0.3, 0] } : {}} transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 3 }} />
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#006ea3] flex items-center justify-center z-10">
                        <span className="text-[9px] font-bold text-white">{step.step}</span>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#006ea3]/25 shadow-lg shadow-[#006ea3]/10 group-hover:border-[#006ea3]/50 group-hover:shadow-[#006ea3]/20 group-hover:scale-110 transition-all duration-500">
                        <StepIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-12" : ""}>
                    {!isLeft && (
                      <div className="group flex flex-col items-start text-left rounded-2xl p-6 border border-transparent hover:border-[#006ea3]/15 hover:bg-[#006ea3]/[0.02] dark:hover:bg-[#006ea3]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px]">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#006ea3]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#006ea3] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#006ea3]/25 shadow-md shadow-[#006ea3]/10">
                      <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.02] dark:to-[#006ea3]/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#006ea3]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Built with <span className="text-black dark:text-white">Modern Tools</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Industry-leading tools and frameworks powering our solutions.</p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {techCategories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveTab(i)} className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#006ea3] text-white shadow-lg shadow-[#006ea3]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"}`}>{cat.label}</button>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
              {techCategories[activeTab].items.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }} className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#006ea3]/30 hover:bg-[#006ea3]/[0.03] dark:hover:border-[#006ea3]/30 dark:hover:bg-[#006ea3]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-300 cursor-default">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Image src={tech.logo} alt={tech.name} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" unoptimized />
                  </div>
                  <span className="relative text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <p className="text-center text-xs font-semibold text-black/30 dark:text-white/25 uppercase tracking-[0.2em] mb-8">And many more technologies we work with</p>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="group flex overflow-hidden w-full [--gap:2.5rem] md:[--gap:3rem] [--duration:40s] gap-[var(--gap)]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
                  {allTechs.map((tech, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap" title={tech.name}>
                      <Image src={tech.logo} alt={tech.name} width={20} height={20} className="w-5 h-5 object-contain flex-shrink-0" unoptimized />
                      <span className="text-xs font-medium text-black/50 dark:text-white/40">{tech.name}</span>
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flexible Pricing Models</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          Choose a billing structure that aligns with your project scope, budget, and engagement duration.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingModels.map((model, i) => {
          const ModelIcon = model.icon;
          return (
            <div
              key={model.title}
              className={`group text-center p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] hover:border-[#006ea3]/20 hover:shadow-lg hover:shadow-[#006ea3]/5 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:bg-[#006ea3]/15 transition-colors duration-300">
                <ModelIcon className="w-7 h-7 text-[#006ea3]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{model.title}</h3>
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
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.02] dark:to-[#006ea3]/[0.01] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">Industries</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Industries We <span className="text-black dark:text-white">Build For</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">Domain expertise across verticals — every solution is built with deep understanding of your industry.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const IndIcon = ind.icon;
            return (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }} className="group relative rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] p-5 hover:border-[#006ea3]/20 hover:bg-[#006ea3]/[0.03] dark:hover:bg-[#006ea3]/[0.05] hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/15 mb-3 group-hover:bg-[#006ea3]/15 group-hover:scale-110 transition-all duration-300">
                    <IndIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{ind.name}</h3>
                  <p className="mt-1 text-xs font-medium text-black/40 dark:text-white/40">{ind.desc}</p>
                </div>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.01] dark:to-[#006ea3]/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006ea3]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">Why Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Why Choose <span className="text-black dark:text-white">Cloud Nexus</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} className="group relative text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-white/60 dark:bg-white/[0.02] hover:border-[#006ea3]/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#006ea3]/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:bg-[#006ea3]/15 group-hover:scale-110 transition-all duration-300">
                    <ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" />
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
          <span className="text-[#006ea3]">Dedicated Developers?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us the roles, stack, and timeline — we&apos;ll assemble a dedicated team that ships like your in-house org. Start with a 7-day risk-free trial.
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
            Start 7-Day Free Trial <ArrowRight className="w-4 h-4" />
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
