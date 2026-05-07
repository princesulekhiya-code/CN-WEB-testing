import { Layers, CreditCard, Cloud, Lock, Zap, Database, Smartphone, Settings, Code2, ShieldCheck, Rocket, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, Truck, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette, BarChart3 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "SaaS Application",
  titleBottom: "Development Services",
  description: "Shape a bold concept into a production-grade SaaS product that earns attention, wins trust, and compounds recurring revenue.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "SaaS platform development",
  topBadge: { icon: null as any, title: "Multi-Tenant", subtitle: "Cloud-native", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99.99%", subtitle: "Platform uptime", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "Veteran SaaS engineers craft resilient, efficient, and elastic products—each one tailored to your roadmap and operating model." };
export const processHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "A measured, end-to-end framework that keeps SaaS initiatives aligned from discovery through scale." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "A curated stack of proven tools and runtimes for dependable, high-scale SaaS delivery." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Keep your concept from stalling at the whiteboard—work with us to ship a SaaS that earns recurring revenue in market." };

export const services: ServiceOffering[] = [
  { icon: Layers, title: "Custom SaaS Platform", description: "Senior engineers apply modern stacks and proven patterns to translate your vision into a bespoke SaaS platform engineered for longevity.", features: ["Tailored logic", "Elastic scale", "Cloud-native"], href: "/services/saas-development/custom-saas-platform" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "postgresql/postgresql-original.svg"], accent: "#4EB3E8"},
  { icon: Palette, title: "SaaS UI/UX Design", description: "Product designers craft intuitive, engaging interfaces at enterprise caliber—purpose-built to lift adoption, retention, and revenue.", features: ["Intuitive UX", "Rich interaction", "Enterprise polish"], href: "/services/saas-development/saas-ui-ux-design" , logos: ["figma/figma-original.svg", "react/react-original.svg", "tailwindcss/tailwindcss-original.svg"], accent: "#F24E1E"},
  { icon: Smartphone, title: "SaaS Mobile Solutions", description: "Native and hybrid mobile experiences that meet users where they are—on device—so your SaaS reaches the widest possible audience.", features: ["Native builds", "Hybrid delivery", "Cross-platform"], href: "/services/saas-development/saas-mobile-solutions" , logos: ["flutter/flutter-original.svg", "react/react-original.svg", "swift/swift-original.svg"], accent: "#02569B"},
  { icon: CreditCard, title: "Subscription & Billing", description: "Stripe Billing or bespoke ledgers covering trials, proration, usage-based metering, and dunning—structured so finance can reconcile with confidence.", features: ["Stripe Billing", "Usage metering", "Dunning flows"], href: "/services/saas-development/subscription-billing" , logos: ["nodejs/nodejs-original.svg", "react/react-original.svg", "typescript/typescript-original.svg"], accent: "#635BFF"},
  { icon: Lock, title: "SaaS Security & Compliance", description: "Rigorous controls and recognized frameworks to harden your product, align with regulatory expectations, and uphold trust at every layer.", features: ["SOC 2", "GDPR", "Encryption"], href: "/services/saas-development/saas-security" , logos: ["linux/linux-original.svg", "docker/docker-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#38A169"},
  { icon: Database, title: "SaaS API & Integration", description: "Integration specialists connect diverse third-party APIs and external data sources to your SaaS so workflows stay synchronized end to end.", features: ["REST APIs", "Webhooks", "SDKs"], href: "/services/saas-development/saas-api-integration" , logos: ["graphql/graphql-plain.svg", "nodejs/nodejs-original.svg", "docker/docker-original.svg"], accent: "#E10098"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Market Research", description: "Deep discovery and structured requirements work so the build targets the right problems—with the stack and architecture that fit.", icon: ClipboardList },
  { step: "02", title: "Build MVP", description: "A lean first release with the essentials—fast time-to-value for users while keeping spend disciplined.", icon: Code2 },
  { step: "03", title: "Technical Planning", description: "Clarify what must evolve technically as the MVP grows, so scaling and roadmap decisions stay coherent over time.", icon: Settings },
  { step: "04", title: "Feature Definition", description: "Prioritize capabilities that match customer expectations and sharpen the positioning that sets you apart.", icon: BarChart3 },
  { step: "05", title: "Development & QA", description: "Engineer on the chosen stack while quality assurance runs in parallel—during build and after each milestone.", icon: ShieldCheck },
  { step: "06", title: "Launch & Feedback", description: "Take the product live in market, then channel user input into measurable improvements and a sharper experience.", icon: Rocket },];

export const techCategories: TechCategory[] = [
  { label: "Frontend", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
    { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: "DynamoDB", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  ] },
  { label: "Cloud & Infrastructure", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
  ] },
  { label: "Monitoring", items: [
    { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
    { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
    { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
    { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "SaaS Products Can",
  headingHighlight: "Scale Infinitely",
  subtitle: "Build multi-tenant platforms with subscription billing, seamless onboarding, and architecture that scales with every new customer.",
  image: "/images/stock/stock-5713964866.jpg",
  imageAlt: "SaaS development dashboard",
  items: [
    { title: "Predictable Recurring Revenue", description: "Subscription models create reliable monthly income streams. Combined with low churn and upsell opportunities, SaaS businesses achieve valuations 3-7x higher than traditional software." },
    { title: "Multi-Tenant Architecture", description: "Serve thousands of customers efficiently from shared infrastructure with complete data isolation. Lower per-customer costs while maintaining enterprise-grade security." },
    { title: "Self-Service Onboarding", description: "Automated sign-up, guided setup, and interactive tutorials let customers start using your product in minutes — no sales calls or manual provisioning required." },
    { title: "Usage-Based Monetization", description: "Flexible pricing tiers, usage metering, and add-on modules let customers start small and expand naturally. Grow revenue as customers grow their usage." },
    { title: "Built-In Analytics & Insights", description: "Embedded analytics dashboards give your customers valuable insights from their own data — increasing stickiness, perceived value, and willingness to pay." },
    { title: "API-First Extensibility", description: "RESTful APIs, webhooks, and marketplace integrations let customers connect your SaaS with their existing tools — making your product indispensable to their workflow." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Sophisticated capabilities that streamline operations, elevate efficiency, and compound business outcomes." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "An agile SaaS delivery model powered by CI/CD and DevOps—shipping meaningful updates every two to three weeks." },
  { icon: Zap, title: "Data Security", description: "Established safeguards and continuous vigilance so data stays protected at every phase of the lifecycle." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Region-aware hosting across deployment and operations so performance stays crisp in every market you serve." },];

export const caseStudyProjects: Project[] = [
  {
    id: "edtech-saas",
    tag: "SaaS Platform",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "EdTech",
    industry: "Education Technology",
    headline: "Multi-tenant SaaS e-learning platform serving 10K+ students with subscription billing.",
    challenge: "Multi-tenant architecture for data isolation. Subscription billing with multiple tiers.",
    solution: "Multi-tenant SaaS platform with AI-driven learning, Stripe billing, and self-service onboarding.",
    duration: "90 days",
    metrics: [
      {
        value: 10,
        suffix: "K+",
        label: "Active users"
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime"
      },
      {
        value: 3,
        suffix: " tiers",
        label: "Pricing plans"
      }
    ],
    timeline: [
      {
        phase: "Multi-Tenant Architecture",
        detail: "Data isolation, tenant management"
      },
      {
        phase: "Billing Integration",
        detail: "Stripe subscriptions, metering"
      },
      {
        phase: "Self-Service Onboarding",
        detail: "Automated setup, guided tour"
      },
      {
        phase: "Launch & Scale",
        detail: "Production deployment, monitoring"
      }
    ],
    accentColor: "#8b5cf6"
  }
];
