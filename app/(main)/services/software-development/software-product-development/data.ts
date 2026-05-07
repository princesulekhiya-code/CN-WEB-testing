import { Lightbulb, Rocket, BarChart3, RefreshCcw, Target, Package, Palette, ShieldCheck, TrendingUp, Settings, Code2, Award, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Software Product",
  titleBottom: "Development",
  description: "End-to-end product engineering from requirement analysis and design through development, testing, deployment, and ongoing support — we turn your vision into a market-ready software product.",
  heroImage: "/images/stock/stock-6483454b17.jpg",
  heroImageAlt: "Full-Cycle",
  topBadge: { icon: null as any, title: "Full-Cycle", subtitle: "Product dev", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Ship Fast", subtitle: "Agile sprints", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Software Product Development", headingWhite: "Services", subtitle: "Strategy, design, engineering, and growth — everything you need to ship and evolve a product users love." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Software Product Development", headingWhite: "Process", subtitle: "From discovery to launch and iteration — structured delivery with transparency, quality gates, and continuous improvement." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Modern stacks across frontend, backend, data, cloud, and product tooling for reliable, scalable software products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Software Product?", description: "From idea to market-ready product — let&apos;s engineer software that users love and investors believe in." };

export const services: ServiceOffering[] = [{
    icon: Target,
    title: "Product Strategy & Roadmap",
    description:
      "Market research, competitive analysis, user personas, and a phased product roadmap aligned with business goals and investor expectations.",
    features: ["Market research", "Competitive analysis", "Product roadmap"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Lean MVPs to validate your idea fast — from concept to testable product in weeks, with real user feedback driving iterations.",
    features: ["Rapid prototyping", "User validation", "Iterative launch"],
  },
  {
    icon: Package,
    title: "Full Product Development",
    description:
      "Complete product engineering with scalable architecture, robust backend, polished frontend, and production-grade infrastructure.",
    features: ["Full-stack", "Scalable infra", "Production-ready"],
  },
  {
    icon: Palette,
    title: "Product UI/UX Design",
    description:
      "User research, journey mapping, wireframes, and pixel-perfect designs that create intuitive and delightful product experiences.",
    features: ["User research", "Journey mapping", "Design systems"],
  },
  {
    icon: ShieldCheck,
    title: "Product Testing & QA",
    description:
      "Automated and manual testing across functional, performance, security, and accessibility dimensions for release confidence.",
    features: ["Automated tests", "Performance", "Security"],
  },
  {
    icon: TrendingUp,
    title: "Product Growth & Optimization",
    description:
      "Analytics integration, A/B testing, performance optimization, and feature iteration to drive product-market fit and retention.",
    features: ["A/B testing", "Analytics", "Feature iteration"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Discovery & Ideation",
    description:
      "Workshops to define product vision, target users, core features, and success metrics with stakeholder alignment.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Product Architecture",
    description:
      "Technical architecture, technology selection, data modeling, and infrastructure planning for long-term scalability.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description:
      "Interactive prototypes validated with real users, design systems for consistency, and developer-ready specifications.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Sprint Development",
    description:
      "Two-week sprints with daily standups, continuous integration, code reviews, and demo sessions for stakeholder feedback.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Quality & Security",
    description:
      "Multi-layered testing strategy with automated pipelines, security audits, and performance benchmarking.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch & Iterate",
    description:
      "Production deployment, monitoring setup, user onboarding, and continuous iteration based on usage analytics.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` }
    ] },
  { label: "Cloud & DevOps", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` }
    ] },
  { label: "Product Tools", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "LaunchDarkly", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Product-First Mindset",
    description:
      "We think like product owners — every decision is driven by user value, market fit, and long-term scalability.",
  },
  {
    icon: Zap,
    title: "Startup Speed, Enterprise Quality",
    description:
      "Rapid iteration cycles with the engineering rigor needed for products that scale to millions of users.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Development",
    description:
      "Built-in analytics and experimentation from day one so every feature decision is backed by real user data.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Product Partner",
    description:
      "We stay invested in your product's success — from MVP launch through Series A and beyond.",
  },];
