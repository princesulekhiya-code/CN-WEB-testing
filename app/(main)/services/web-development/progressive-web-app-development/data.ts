import { Globe, Wifi, Bell, Smartphone, Wrench, ClipboardList, Palette, ShieldCheck, Rocket, Code2, Award, Zap, Gauge } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "Progressive Web App",
  titleBottom: "Development",
  description: "Installable, offline-capable web apps with push notifications and native-like experiences.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "Progressive web app on mobile device",
  topBadge: { icon: null as any, title: "PWA Expert", subtitle: "Offline-first", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Instant Load", subtitle: "App-like web", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 60, suffix: "+", label: "PWAs Shipped" },
  { value: 70, suffix: "%", label: "Engagement Boost" },
  { value: 99, suffix: "%", label: "Offline Reliability" },
  { value: 50, suffix: "+", label: "Global Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Progressive Web App", headingWhite: "Development Services", subtitle: "Offline-capable experiences with install prompts, push, and performance budgets — without sacrificing web\r\n            strengths." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Progressive Web App", headingWhite: "Development Process", subtitle: "From audit to deployment — service workers, UX, and testing treated as core product concerns." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies", headingWhite: "We Use", subtitle: "PWA platform APIs, frameworks, tooling, and hosting patterns for reliable installable web apps." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "PWA?", description: "" };

export const services: ServiceOffering[] = [{
    icon: Globe,
    title: "PWA Development",
    description:
      "Installable web apps with app shell architecture, routing, and offline-ready data layers.",
    features: ["App shell", "Manifest", "HTTPS"],
  },
  {
    icon: Wifi,
    title: "Offline-First Apps",
    description:
      "Cache strategies, background sync, and conflict resolution so work continues without connectivity.",
    features: ["Cache recipes", "Sync", "Resilience"],
  },
  {
    icon: Bell,
    title: "Push Notification Systems",
    description: "Web Push with VAPID keys, permission UX, and analytics on engagement — done responsibly.",
    features: ["VAPID", "Opt-in UX", "Delivery metrics"],
  },
  {
    icon: Smartphone,
    title: "PWA Migration",
    description: "Progressive enhancement paths from legacy sites with phased service worker rollout.",
    features: ["Phased SW", "Fallbacks", "Risk controls"],
  },
  {
    icon: Gauge,
    title: "PWA Performance Optimization",
    description: "Lighthouse-driven tuning — precaching, image strategy, and runtime budgets for instant loads.",
    features: ["Precache", "Runtime budgets", "Profiling"],
  },
  {
    icon: Wrench,
    title: "PWA Maintenance",
    description: "Service worker lifecycle management, cache busting, and OS/browser compatibility watch.",
    features: ["SW updates", "Cache busting", "Compat matrix"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Audit",
    description:
      "Baseline performance, installability criteria, and offline scenarios mapped to user journeys.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Design",
    description: "Install prompts, offline states, and push permission flows designed to respect users.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "App shell, routing, and feature modules with progressive enhancement as the default.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Service Workers",
    description: "Caching policies, background tasks, and update strategies that stay predictable in production.",
    icon: Wifi,
  },
  {
    step: "05",
    title: "Testing",
    description: "Device labs, flaky-network simulation, and push delivery drills before broad rollout.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment",
    description: "CDN headers, HTTPS, versioning, and monitoring for SW errors and cache health.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Core",
    items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "PWA APIs",
    items: [
      { name: "Service Workers", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Cache API", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Web Push", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "IndexedDB", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Manifest", logo: `${DEVICON}/json/json-original.svg` },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Nuxt.js", logo: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Workbox", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "PWABuilder", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Chrome DevTools", logo: `${DEVICON}/chrome/chrome-original.svg` },
    ],
  },
  {
    label: "Hosting",
    items: [
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` },
      { name: "AWS CloudFront", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Smartphone,
    title: "No App Store",
    description: "Ship updates instantly — no gatekeeping review cycles for every bugfix or experiment.",
  },
  {
    icon: Zap,
    title: "Instant Loading",
    description: "App shell + smart caching so repeat visits feel native-fast on real-world networks.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "One codebase for desktop and mobile browsers — responsive layouts with install affordances.",
  },
  {
    icon: Award,
    title: "SEO-Friendly",
    description: "Server rendering or hybrid patterns when needed — PWAs can still be discoverable and linkable.",
  },];
