import { Zap, Layers, Code2, Globe, ClipboardList, ShieldCheck, Rocket, Settings, Award, TrendingUp, Boxes } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "Single Page App",
  titleBottom: "Development",
  description: "Lightning-fast SPAs with seamless navigation, instant transitions, and dynamic content loading.",
  heroImage: "/images/stock/stock-c10bb94cfc.jpg",
  heroImageAlt: "Modern single page application code in editor",
  topBadge: { icon: null as any, title: "SPA Expert", subtitle: "React & Vue", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Instant Nav", subtitle: "Client-side routing", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SPAs Delivered" },
  { value: 60, suffix: "%", label: "Faster Load Times" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "+", label: "Frameworks Mastered" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Single Page App", headingWhite: "Development Services", subtitle: "Framework-native SPAs with crisp routing, disciplined state, and performance budgets baked into delivery." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Single Page App", headingWhite: "Development Process", subtitle: "From planning to deployment — architecture, APIs, and testing treated as one continuous system." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "Technologies", subtitle: "Frameworks, state management, build tooling, APIs, and test stacks for production-grade SPAs." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{
    icon: Code2,
    title: "React SPA Development",
    description: "React SPAs with routing, code splitting, and state patterns tuned for large interactive surfaces.",
    features: ["React Router", "Code splitting", "Suspense"],
  },
  {
    icon: Layers,
    title: "Vue.js SPA Development",
    description: "Vue 3 SPAs with composition API, Pinia, and lazy routes for fast navigation and maintainability.",
    features: ["Vue 3", "Pinia", "Vite"],
  },
  {
    icon: Settings,
    title: "Angular SPA Development",
    description: "Enterprise Angular apps with modules or standalone APIs, RxJS streams, and strict typing.",
    features: ["NgModules/standalone", "RxJS", "CLI"],
  },
  {
    icon: Boxes,
    title: "SPA Migration",
    description: "Incremental migration from legacy multi-page stacks with routing cutovers and SEO bridging strategies.",
    features: ["Strangler pattern", "URL parity", "Dual-run"],
  },
  {
    icon: Globe,
    title: "API-First Architecture",
    description: "Contract-driven APIs, generated clients, and error boundaries so UI and services evolve independently.",
    features: ["OpenAPI", "Generated clients", "Versioning"],
  },
  {
    icon: Zap,
    title: "SPA Performance Optimization",
    description: "Bundle analysis, prefetching, caching, and runtime profiling so interactions feel instant at scale.",
    features: ["Bundle budgets", "Prefetch", "Profiling"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Planning",
    description: "User flows, route map, state boundaries, and performance budgets before a single component ships.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture",
    description: "Folder structure, module boundaries, and shared libraries that keep SPAs navigable as they grow.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Development",
    description: "Feature slices with tests, story-driven components, and CI that catches regressions early.",
    icon: Code2,
  },
  {
    step: "04",
    title: "API Integration",
    description: "Auth, caching, pagination, and realtime channels wired with resilient loading and empty states.",
    icon: Globe,
  },
  {
    step: "05",
    title: "Testing",
    description: "Unit, component, and E2E suites across critical journeys — including offline and slow-network cases.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment",
    description: "Static or edge hosting, cache headers, feature flags, and observability for client-side errors.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Frameworks",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Svelte", logo: `${DEVICON}/svelte/svelte-original.svg` },
    ],
  },
  {
    label: "State",
    items: [
      { name: "Redux", logo: `${DEVICON}/redux/redux-original.svg` },
      { name: "Zustand", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Pinia", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "MobX", logo: `${DEVICON}/mobx/mobx-original.svg` },
      { name: "NgRx", logo: `${DEVICON}/ngrx/ngrx-original.svg` },
    ],
  },
  {
    label: "Build",
    items: [
      { name: "Vite", logo: `${DEVICON}/vitejs/vitejs-original.svg` },
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "esbuild", logo: `${DEVICON}/esbuild/esbuild-original.svg` },
      { name: "SWC", logo: `${DEVICON}/swc/swc-original.svg` },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "WebSockets", logo: `${DEVICON}/socketio/socketio-original.svg` },
      { name: "Express", logo: `${DEVICON}/express/express-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Playwright", logo: `${DEVICON}/playwright/playwright-original.svg` },
      { name: "Vitest", logo: `${DEVICON}/vitest/vitest-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "SPA Specialists",
    description: "Teams that understand routing, state, and bundle tradeoffs — not just page-level React tutorials.",
  },
  {
    icon: Zap,
    title: "Instant Navigation",
    description: "Client-side transitions, prefetch, and skeleton UX that make apps feel snappy end to end.",
  },
  {
    icon: Globe,
    title: "API-First",
    description: "Contracts and versioning discipline so your SPA and services can ship on independent cadences.",
  },
  {
    icon: TrendingUp,
    title: "SEO Solutions",
    description: "SSR/SSG hybrids, meta management, and crawl-friendly patterns when discoverability matters.",
  },];
