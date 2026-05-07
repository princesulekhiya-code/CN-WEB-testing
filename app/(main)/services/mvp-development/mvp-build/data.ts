import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Rocket, Code2, Layers, ShieldCheck, Smartphone, Server, Layout, TestTube2, Cloud, Award, Zap, HeartHandshake, HeadphonesIcon, ClipboardList, Puzzle, PartyPopper, CircleCheck } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "MVP /",
  titleBottom: "Development",
  description: "Fully featured usable version 1.0 from ideation to release with full team support",
  heroImage: "/images/stock/stock-1e05b0d347.jpg",
  heroImageAlt: "MVP Build & Development",
  topBadge: { icon: null as any, title: "MVP Build", subtitle: "8-week delivery", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Ship Fast", subtitle: "Market-ready", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "MVPs Shipped" },
  { value: 6, suffix: " wk", label: "Avg. v1 Cycle" },
  { value: 99, suffix: "%", label: "Sprint On-Time" },
  { value: 25, suffix: "+", label: "Stack Combos" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "MVP", subtitle: "From planning to production — a complete build with the team you need to ship v1.0." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "MVP Build Process", subtitle: "Structured delivery from architecture to production launch with continuous alignment." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Modern stacks across frontend, backend, data, and cloud for reliable MVP products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "MVP?", description: "Partner with a team that ships production-grade v1 products — web, mobile, and cloud." };

export const services: ServiceOffering[] = [{ icon: Code2, title: "Full-Stack MVP Development", description: "End-to-end delivery from data models to polished UI so your v1 feels cohesive and complete.", features: ["API + UI", "Auth & roles", "End-to-end flows"] },
  { icon: Smartphone, title: "Mobile MVP Development", description: "Native-quality mobile experiences for iOS and Android with pragmatic feature depth.", features: ["iOS & Android", "Push-ready", "Store prep"] },
  { icon: Server, title: "API & Backend Development", description: "Scalable services, integrations, and persistence designed for real users on day one.", features: ["REST/GraphQL", "Integrations", "Data integrity"] },
  { icon: Layout, title: "Frontend & UI Development", description: "Accessible, responsive interfaces with strong UX so your MVP is delightful to use.", features: ["Design systems", "Responsive UI", "Accessibility"] },
  { icon: TestTube2, title: "Quality Assurance & Testing", description: "Automated and manual testing coverage that protects velocity without sacrificing quality.", features: ["Test plans", "Automation", "Release QA"] },
  { icon: Cloud, title: "DevOps & Deployment", description: "CI/CD, environments, and observability so shipping updates is predictable and safe.", features: ["Pipelines", "Staging/prod", "Monitoring"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Product Planning", description: "Define scope, success metrics, and a realistic roadmap that fits your timeline and budget.", icon: ClipboardList },
  { step: "02", title: "Architecture Design", description: "Choose patterns and foundations that support rapid iteration without painting you into a corner.", icon: Layers },
  { step: "03", title: "Sprint Development", description: "Time-boxed delivery with demos, backlog grooming, and transparent progress every week.", icon: Code2 },
  { step: "04", title: "Integration & Testing", description: "Wire services together, harden edge cases, and validate flows across web and mobile.", icon: Puzzle },
  { step: "05", title: "Beta Release", description: "Controlled rollout to trusted users with feedback loops and stabilization before GA.", icon: PartyPopper },
  { step: "06", title: "Production Launch", description: "Go-live checklist, performance validation, and support readiness for real-world traffic.", icon: CircleCheck },];

export const techCategories: TechCategory[] = [{
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Full-Stack Expertise", description: "Senior engineers across web, mobile, cloud, and data — one team accountable for outcomes." },
  { icon: Zap, title: "Agile Delivery", description: "Predictable sprints, visible backlog, and frequent releases so you stay aligned with reality." },
  { icon: ShieldCheck, title: "Production-Ready Code", description: "Security, performance, and maintainability baked in — not bolted on after launch." },
  { icon: HeadphonesIcon, title: "Post-Launch Support", description: "Stabilization, monitoring, and iteration support so your first customers have a great experience." },];
