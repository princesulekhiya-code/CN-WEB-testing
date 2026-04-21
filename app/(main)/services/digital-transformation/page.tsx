"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  RefreshCcw,
  Workflow,
  Bot,
  Database,
  Cloud,
  BarChart3,
  Settings,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Zap,
  Award,
  TrendingUp,
  HeartHandshake,
  Stethoscope,
  ShoppingCart,
  CreditCard,
  Truck,
  GraduationCap,
  Building2,
  Gamepad2,
  Factory,
  ClipboardList,
  Palette,
  Layers,
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
  { icon: RefreshCcw, title: "Architecture Modernization", description: "Set objectives and employ microservices, cloud-native architecture, and monolithic-to-microservices migration for future-proof systems.", href: "/services/digital-transformation/architecture-modernization", features: ["Microservices", "Cloud-native", "Migration"] },
  { icon: Code2, title: "Technology Modernization", description: "Micro-frontends, cloud development, JavaScript migration to PWA/SPA, and server-side modernization with latest tech stacks.", href: "/services/digital-transformation/technology-modernization", features: ["Micro-frontends", "PWA/SPA", "Server-side"] },
  { icon: Palette, title: "UI/UX Modernization", description: "Adopt the latest design trends and experiences to create engaging products that boost user engagement and business value.", href: "/services/digital-transformation/ui-ux-modernization", features: ["Design trends", "User engagement", "Modern UX"] },
  { icon: Workflow, title: "Integration Modernization", description: "Enterprise integration with communication protocol integration, third-party app, and API/SDK integration for a personalized experience.", href: "/services/digital-transformation/integration-modernization", features: ["API/SDK", "Third-party", "Protocols"] },
  { icon: Bot, title: "Data Engineering & AI", description: "Real-time decision-making using AI-powered data architecture to accelerate data modernization and product customization.", href: "/services/digital-transformation/data-engineering-ai", features: ["AI-powered", "Real-time data", "ML pipelines"] },
  { icon: Settings, title: "Product Re-engineering", description: "Enhance legacy products with new features, performance optimization, and faster speed-to-market through product re-engineering.", href: "/services/digital-transformation/product-re-engineering", features: ["Legacy upgrade", "Performance", "Speed-to-market"] },
];

const stats = [
  { label: "Transformations", value: 200, suffix: "+" },
  { label: "Client Retention", value: 96, suffix: "%" },
  { label: "Faster Delivery", value: 3, suffix: "x" },
  { label: "Cost Savings", value: 40, suffix: "%" },
];

const processSteps = [
  { step: "01", title: "Discover", description: "Understand business needs, gain clarity on modernization goals, and plan clear business outcomes.", icon: ClipboardList },
  { step: "02", title: "Elaborate", description: "Define the most suitable solution for app modernization and manage all required team resources.", icon: Settings },
  { step: "03", title: "Strategy", description: "Draft a digital transformation plan with guided strategies to define the development process.", icon: BarChart3 },
  { step: "04", title: "Build", description: "Execute planned strategies using agile methodology with CI/CD pipelines and DevOps practices.", icon: Code2 },
  { step: "05", title: "Operate", description: "Modernize legacy applications, deploy to production, and extend the required operational assistance.", icon: ShieldCheck },
  { step: "06", title: "Evolve", description: "Continuous improvement cycles with emerging technologies, user feedback, and market evolution.", icon: Rocket },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "UiPath", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Power Automate", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Apache Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` },
      { name: "n8n", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    label: "Data & AI",
    items: [
      { name: "Snowflake", logo: `${DEVICON}/python/python-original.svg` },
      { name: "dbt", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Apache Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
    ],
  },
  {
    label: "CI/CD",
    items: [
      { name: "GitHub Actions", logo: `${DEVICON}/githubactions/githubactions-original.svg` },
      { name: "Azure DevOps", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "GitLab CI", logo: `${DEVICON}/gitlab/gitlab-original.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` },
    ],
  },
]

const industries = [
  {
    icon: Stethoscope, name: "Healthcare", href: "/industry/healthcare-lifesciences",
    desc: "Digital health transformation, patient portals & healthcare modernization",
    accent: "#EF4444", stat: "15+", statLabel: "Health Apps",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: ShoppingCart, name: "Retail", href: "/industry/ecommerce-solutions",
    desc: "Omnichannel transformation, e-commerce modernization & retail digitization",
    accent: "#8B5CF6", stat: "30+", statLabel: "Stores Built",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: CreditCard, name: "Finance", href: "/industry/banking-finance-insurance",
    desc: "Digital banking transformation, fintech platforms & financial modernization",
    accent: "#10B981", stat: "25+", statLabel: "FinTech Apps",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Truck, name: "Logistics", href: "/industry/transport-logistics",
    desc: "Supply chain transformation, fleet automation & logistics digitization",
    accent: "#06B6D4", stat: "12+", statLabel: "Logistics Apps",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: GraduationCap, name: "Education", href: "/industry/education-elearning",
    desc: "EdTech transformation, LMS modernization & education digitization",
    accent: "#F59E0B", stat: "20+", statLabel: "EdTech Solutions",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2, name: "Real Estate", href: "/industry/real-estate",
    desc: "PropTech transformation, smart buildings & real estate digitization",
    accent: "#EC4899", stat: "10+", statLabel: "PropTech Apps",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Gamepad2, name: "Entertainment", href: "/industry/entertainment",
    desc: "Streaming transformation, content platform modernization & media digitization",
    accent: "#A855F7", stat: "14+", statLabel: "Media Apps",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Factory, name: "Manufacturing", href: "/industry/enterprise-retail-manufacturing",
    desc: "Industry 4.0 transformation, smart factories & manufacturing digitization",
    accent: "#F97316", stat: "8+", statLabel: "Mfg Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80",
  },
];

const whyChoose = [
  { icon: Award, title: "Low Business Disruption", description: "No alterations to existing assets and legacy code throughout the migration process." },
  { icon: TrendingUp, title: "Faster Time to Market", description: "Quick and efficient managed cloud services for greater business agility and speed to value." },
  { icon: Zap, title: "Selective Refactoring", description: "Mitigate risks by carrying out application refactoring to selective groups with precision." },
  { icon: HeartHandshake, title: "On-Time Delivery", description: "Highly adaptable, scalable tooling to achieve speed to value and reduce run costs." },
];

export default function DigitalTransformationPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

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


function TransformHeroIllustration() {
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
            <Rocket className="w-3.5 h-3.5" style={{ color: "#006ea3" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Modernize</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Legacy Systems</p>
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
            <Zap className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">5x Faster</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Operations</p>
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
            <Layers className="w-3.5 h-3.5" style={{ color: "#8b5cf6" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">Cloud-Native</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Architecture</p>
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
            <TrendingUp className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-black/70 dark:text-white/70">40% Savings</p>
            <p className="text-[9px] text-black/40 dark:text-white/40">Cost Reduction</p>
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
            <span className={`inline-block text-xs font-bold tracking-widest text-[#006ea3] uppercase mb-4 transition-all duration-500 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Drive Innovation
            </span>
            <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Digital Modernization<br />
              <span className="text-[#006ea3]">& Transformation</span>
            </h1>
            <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Automate, transform & modernize your enterprise processes with our digital modernization & transformation services to drive greater customer value.
            </p>
            <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: RefreshCcw, label: "Modernization" },
              { icon: Bot, label: "AI & Data" },
              { icon: Cloud, label: "Cloud" },
              { icon: Workflow, label: "Automation" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${ready ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20">
                    <Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
                </div>
              );
            })}
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
  { logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#2496ED" },
  { logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "typescript/typescript-original.svg"], accent: "#3178C6" },
  { logos: ["figma/figma-original.svg", "react/react-original.svg", "css3/css3-original.svg"], accent: "#F24E1E" },
  { logos: ["nodejs/nodejs-original.svg", "graphql/graphql-plain.svg", "docker/docker-original.svg"], accent: "#E10098" },
  { logos: ["tensorflow/tensorflow-original.svg", "python/python-original.svg", "apachespark/apachespark-original.svg"], accent: "#FF6F00" },
  { logos: ["react/react-original.svg", "typescript/typescript-original.svg", "nextjs/nextjs-original.svg"], accent: "#006ea3" },
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
          <p className="text-center text-sm font-semibold text-black/30 dark:text-white/25 uppercase tracking-[0.2em] mb-8">And many more technologies we work with</p>
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

function IndustriesSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/[0.04] via-transparent to-[#006ea3]/[0.03] dark:from-[#006ea3]/[0.03] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#006ea3]/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#006ea3]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">
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
                  className="group relative block h-full rounded-2xl bg-white/80 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#006ea3]/[0.02] dark:hover:bg-[#111] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#006ea3]/10 dark:hover:shadow-[#006ea3]/5 overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-[#006ea3] group-hover:border-[#006ea3]/50 transition-all duration-300">
                      <IndIcon className="w-4 h-4 text-black/60 dark:text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="text-xs font-bold text-[#006ea3]">{ind.stat}</span>
                      <span className="text-[9px] font-medium text-black/50 dark:text-white/40 ml-1">{ind.statLabel}</span>
                    </div>
                  </div>

                  <div className="relative p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] group-hover:text-[#006ea3] transition-colors duration-300">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/55 dark:group-hover:text-[#a1a1a1] transition-colors duration-300">
                      {ind.desc}
                    </p>
                    <div className="mt-4 flex items-center text-[13px] font-semibold text-[#006ea3] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
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
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Ready to Transform<br /><span className="text-[#006ea3]">Your Business?</span>
        </h2>
        <p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Leverage the power of digital transformation with a free consultation from our tech experts.
        </p>
        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20">
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
