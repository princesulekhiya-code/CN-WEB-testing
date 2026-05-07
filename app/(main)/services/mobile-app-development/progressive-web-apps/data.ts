import { Download, WifiOff, Bell, RefreshCw, Gauge, Settings2, ClipboardList, Palette, Code2, ShieldCheck, Rocket, TrendingUp, Store, Zap, Globe2, Search, Smartphone, Radio, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "Progressive Web",
  titleBottom: "Apps (PWA)",
  description: "Deliver installable web experiences with offline support, push notifications, and app-like UX — without waiting on app store approval.\r\n                Reach users directly from the browser while keeping one codebase and instant updates.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "Progressive web app development",
  topBadge: { icon: null as any, title: "Installable", subtitle: "No app store needed", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Offline-First", subtitle: "Works without network", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "PWA Services &", headingWhite: "Offerings", subtitle: "End-to-end progressive web apps — from first manifest line to push campaigns, performance tuning, and long-term maintenance." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our PWA Development", headingWhite: "Process", subtitle: "From strategy and design through deployment and optimization — a clear path to a reliable, measurable PWA." };
export const techHeading: ServicePageSectionProps = { headingGray: "PWA Tech", headingWhite: "Stack", subtitle: "Standards-based tooling and hosting we use to ship fast, reliable progressive web apps." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "PWA?", description: "Let us help you ship an installable, offline-ready web app with push notifications and performance that rivals native — without the app store gate." };

export const services: ServiceOffering[] = [{
    icon: Download,
    title: "PWA Development",
    description: "Build installable, offline-capable web apps that feel native — with app shell architecture, responsive UI, and smooth updates without store friction.",
    features: ["Install prompt", "Offline shell", "App-like UX"],
  },
  {
    icon: WifiOff,
    title: "Offline-First Apps",
    description: "Service workers and smart caching so users keep working when connectivity drops — precache assets, background sync, and graceful degradation.",
    features: ["Service workers", "Precache strategies", "Background sync"],
  },
  {
    icon: Bell,
    title: "Push Notification Systems",
    description: "Web push for real-time engagement — subscription flows, VAPID keys, and notification UX that respects user choice and drives retention.",
    features: ["Web Push API", "VAPID & security", "Engagement flows"],
  },
  {
    icon: RefreshCw,
    title: "PWA Migration",
    description: "Transform existing sites into PWAs — manifest, icons, service worker rollout, and migration paths that minimize risk and downtime.",
    features: ["Manifest audit", "SW rollout", "Zero-downtime cutover"],
  },
  {
    icon: Gauge,
    title: "PWA Performance Optimization",
    description: "Target Lighthouse 100, sub-second loads, and resilient caching — Core Web Vitals, code splitting, and Workbox-tuned strategies.",
    features: ["Lighthouse goals", "Cache API tuning", "Core Web Vitals"],
  },
  {
    icon: Settings2,
    title: "PWA Maintenance & Updates",
    description: "Ongoing improvements, feature releases, and compatibility with new browser APIs — so your PWA stays fast, secure, and future-proof.",
    features: ["Release cadence", "API monitoring", "Feature roadmap"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Audit & Strategy",
    description: "Assess your current stack, define PWA goals, map offline and push requirements, and align on success metrics and rollout risk.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Design",
    description: "UX for install prompts, offline states, and notification patterns — plus responsive layouts and branding that work across devices.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Implement the web app manifest, service workers, caching, and integrations — with clean, testable code and progressive enhancement.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description: "Cross-browser checks, Lighthouse audits, offline and push scenarios, and real-device validation before you ship to production.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description: "HTTPS hosting, CDN configuration, cache headers, and staged rollouts so users get updates safely and predictably.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Optimization",
    description: "Monitor vitals, refine caching, tune push cadence, and iterate on performance and engagement after launch.",
    icon: TrendingUp,
  },];

export const techCategories: TechCategory[] = [{ label: "Core", items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Frameworks", items: [
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` }
    ] },
  {
    label: "PWA APIs",
    items: [
      { name: "Service Workers", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Cache API", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Web Push", logo: `${DEVICON}/webpush/webpush-original.svg` },
      { name: "IndexedDB", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Web App Manifest", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ],
  },
  { label: "Tools", items: [
      { name: "Workbox", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "PWABuilder", logo: `${DEVICON}/pwabuilder/pwabuilder-original.svg` },
      { name: "Chrome DevTools", logo: `${DEVICON}/chrome/chrome-original.svg` }
    ] },
  { label: "Hosting", items: [
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` },
      { name: "AWS CloudFront", logo: `${DEVICON}/awscloudfront/awscloudfront-original.svg` },
      { name: "Firebase Hosting", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Store,
    title: "No App Store Required",
    description: "Ship updates instantly via the web — no review queues or store fees. Users install from the browser when they are ready.",
  },
  {
    icon: Zap,
    title: "Instant Loading (<2s)",
    description: "Aggressive caching and optimized bundles mean first paint and repeat visits feel snappy, even on slower networks.",
  },
  {
    icon: Globe2,
    title: "Cross-Platform by Default",
    description: "One codebase reaches desktop and mobile browsers — responsive layouts and PWA standards keep experiences consistent everywhere.",
  },
  {
    icon: Search,
    title: "SEO-Friendly",
    description: "Unlike wrapped native shells, your content stays indexable — combine PWA UX with solid technical SEO and structured data.",
  },];
