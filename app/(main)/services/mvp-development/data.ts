import { BarChart3, Building2, Clock, CreditCard, Factory, FlaskConical, Gamepad2, Gauge, GraduationCap, HeartHandshake, Layers, Palette, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "MVP",
  titleBottom: "Development",
  description: "Reach market with disciplined capital use, learn from real users with clarity, and rely on bespoke, full-cycle MVP development—from the first sketch to the first paying customer.",
  heroImage: "/images/stock/stock-21027990d2.jpg",
  heroImageAlt: "MVP development and launch",
  topBadge: { icon: null as any, title: "8 Weeks", subtitle: "Idea to launch", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "90% Success", subtitle: "Funding rate", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "Full-spectrum offerings shaped around your objectives, constraints, and timeline." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A field-tested playbook that pairs rigorous quality, clear communication, and dependable schedules." };
export const techHeading: ServicePageSectionProps = { headingGray: "Shipped on", headingWhite: "Modern Tooling", subtitle: "Proven frameworks and platforms beneath every release we deliver." };
export const ctaProps: CTAProps = { headingTop: "Ship an MVP That Holds Up in", headingBottom: "Your Next Funding Round", description: "Tell us the challenge, your timeline, and the riskiest assumption—we will answer with a delivery plan you can defend to investors and customers alike." };

export const services: ServiceOffering[] = [
  { icon: Palette, title: "Prototype Design / PoC Development", description: "Shape a refined prototype that carries your product vision—credible with customers and compelling for investors.", features: ["Interactive prototypes", "Investor-grade narrative", "Rapid validation cycles"], href: "/services/mvp-development/prototype-design" , logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#F24E1E"},
  { icon: Target, title: "Single Feature MVP", description: "Deliver an experience anchored in one defining capability that addresses the core problem—demonstrating fit with singular clarity.", features: ["Core capability first", "Market validation", "Fast iteration cycles"], href: "/services/mvp-development/single-feature-mvp" , logos: ["react/react-original.svg", "typescript/typescript-original.svg", "firebase/firebase-original.svg"], accent: "#3178C6"},
  { icon: Rocket, title: "MVP Development", description: "A production-ready version 1.0 spanning discovery and planning through build, launch, and ongoing partnership with your team.", features: ["End-to-end delivery", "Agile sprints", "Production-grade quality"], href: "/services/mvp-development/mvp-build" , logos: ["nextjs/nextjs-original.svg", "nodejs/nodejs-original.svg", "postgresql/postgresql-original.svg"], accent: "#000000"},
  { icon: Layers, title: "MVP to Full-Scale Product", description: "Take stock of your position, define how to scale, and graduate into a full product with prioritized pain points and a sequenced roadmap.", features: ["Scaling strategy", "Feature roadmap", "Architecture evolution"], href: "/services/mvp-development/mvp-to-full-scale" , logos: ["react/react-original.svg", "docker/docker-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#61DAFB"},
  { icon: Gauge, title: "MVP Improvement", description: "After launch, establish a disciplined improvement rhythm—elevate the experience, sharpen the product, instrument KPIs, and move decisively beyond MVP.", features: ["KPI instrumentation", "UX refinement", "Iterative feature work"], href: "/services/mvp-development/mvp-improvement" , logos: ["typescript/typescript-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#3178C6"},
  { icon: FlaskConical, title: "MVP Consulting", description: "Senior engineers and analysts help sharpen the concept, sequence must-have scope, and converge on the technology stack that fits.", features: ["Concept validation", "Stack selection", "Go-to-market alignment"], href: "/services/mvp-development/mvp-consulting" , logos: ["figma/figma-original.svg", "nodejs/nodejs-original.svg", "react/react-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Ideation & Research", description: "Frame the concept, draft user stories, isolate the right features, and establish baseline navigation patterns.", icon: FlaskConical },
  { step: "02", title: "Wireframing", description: "Interactive low- and high-fidelity prototypes for alignment and planning—surfacing gaps while changes stay economical.", icon: Palette },
  { step: "03", title: "UI/UX Design", description: "Intentional decisions across color, typography, components, and micro-interactions—all rooted in genuine user empathy.", icon: Settings },
  { step: "04", title: "App Development", description: "Agile delivery in focused sprints (two weeks or less), releasing dependable capability in steady, reviewable increments.", icon: Rocket },
  { step: "05", title: "App Testing", description: "Targeted usability sessions with curated cohorts to surface defects and experience gaps before you go live.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Launch", description: "App Store submission, refined listings, on-brand copy, and optional ASO support to strengthen discoverability.", icon: BarChart3 },];

export const techCategories: TechCategory[] = [
  { label: "Frontend", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
    { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` },
    { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
  ] },
  { label: "Cloud & DevOps", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
  ] },
  { label: "Design & Testing", items: [
    { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
    { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
    { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "MVPs Can Be",
  headingHighlight: "Market Validators",
  subtitle: "Test your idea with real users in weeks, not months. Build just enough to prove the concept and attract investors.",
  image: "/images/stock/stock-0c9340f1a4.jpg",
  imageAlt: "MVP product development startup",
  items: [
    { title: "Validate Before You Invest", description: "Test your core hypothesis with real users before committing to full development. An MVP saves you from spending months building features nobody wants." },
    { title: "Attract Investors with Proof", description: "A working MVP with real user traction speaks louder than any pitch deck. Show investors validated demand, engagement metrics, and a clear growth path." },
    { title: "Weeks to Market, Not Months", description: "Go from idea to launched product in 6-8 weeks. Our rapid MVP framework prioritizes core features that prove the concept without over-engineering." },
    { title: "Learn from Real User Behavior", description: "Analytics, session recordings, and feedback loops reveal how users actually interact with your product — insights that surveys and focus groups can never provide." },
    { title: "Minimize Financial Risk", description: "Build only what's essential to test your idea. If the market responds, invest more. If it doesn't, pivot early at a fraction of the cost of full development." },
    { title: "Foundation for Scale", description: "Our MVPs aren't throwaway prototypes. Clean architecture and modular code mean your MVP evolves into your production product without costly rewrites." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: FlaskConical, title: "Creative Strategists", description: "Strategic UX leadership and growth-oriented partners who design for outcomes—not checkbox features." },
  { icon: Gauge, title: "Scalability at the Core", description: "Lean, adaptable foundations built to mature gracefully as requirements deepen and audiences expand." },
  { icon: Users, title: "Cross-Functional Delivery", description: "Analysts, designers, front- and back-end engineers, project leadership, and QA in one accountable delivery unit." },
  { icon: HeartHandshake, title: "Fuelling Startups", description: "We back founders with real upside—shortening the path from momentum to measurable returns." },];

export const caseStudyProjects: Project[] = [
  {
    id: "fintech-mvp",
    tag: "Fintech MVP",
    tagColor: "bg-[#4EB3E8]/15 text-[#4a7db8] border-[#4EB3E8]/30",
    company: "FinTech App",
    industry: "Financial Technology",
    headline: "Rapid MVP for AI-powered financial management app — concept to App Store in 80 days.",
    challenge: "Validating AI-driven budgeting with real users. Building bank-grade security for MVP.",
    solution: "Lean MVP with core AI features, bank-grade encryption, and biometric auth — launched in 80 days to validate market fit.",
    duration: "80 days",
    metrics: [
      {
        value: 95,
        suffix: "%",
        label: "Fraud detection"
      },
      {
        value: 80,
        suffix: " days",
        label: "To market"
      },
      {
        value: 40,
        suffix: "%",
        label: "Better budgeting"
      }
    ],
    timeline: [
      {
        phase: "Concept Validation",
        detail: "User research, feature prioritization"
      },
      {
        phase: "Core Build",
        detail: "AI engine, security, payments"
      },
      {
        phase: "Beta Testing",
        detail: "User feedback, iteration"
      },
      {
        phase: "App Store Launch",
        detail: "Store optimization, release"
      }
    ],
    accentColor: "#4EB3E8"
  }
];
