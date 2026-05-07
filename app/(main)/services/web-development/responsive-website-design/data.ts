import { Smartphone, Monitor, Tablet, Palette, ClipboardList, LayoutTemplate, ShieldCheck, Rocket, Code2, Award, Zap, Gauge, RefreshCw } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/web-development",
  backLabel: "Back to Web Development",
  titleTop: "Responsive Website",
  titleBottom: "Design",
  description: "Pixel-perfect responsive websites that adapt seamlessly to every screen size with mobile-first\r\n                approach.",
  heroImage: "/images/stock/stock-37761d5488.jpg",
  heroImageAlt: "Responsive website design across multiple devices",
  topBadge: { icon: null as any, title: "Responsive", subtitle: "All devices", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Pixel Perfect", subtitle: "Modern design", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Responsive Sites" },
  { value: 100, suffix: "%", label: "Mobile Friendly" },
  { value: 98, suffix: "+", label: "PageSpeed Score" },
  { value: 50, suffix: "+", label: "Clients Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Responsive Website Design", headingWhite: "Services", subtitle: "Adaptive experiences from mobile to desktop — performance, accessibility, and visual polish at every\r\n            breakpoint." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Responsive Website Design", headingWhite: "Process", subtitle: "From audit to launch — a workflow that keeps layout, performance, and QA aligned at every step." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies", headingWhite: "We Use", subtitle: "Core web technologies, styling systems, design tools, testing, and build pipelines for responsive delivery." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Touch targets, typography, and navigation patterns optimized for small screens first — then scaled up with purpose.",
    features: ["Touch-friendly UI", "Readable type", "Thumb zones"],
  },
  {
    icon: Monitor,
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge with progressive enhancement where it matters.",
    features: ["Polyfills where needed", "Feature detection", "Smoke matrices"],
  },
  {
    icon: LayoutTemplate,
    title: "Responsive Landing Pages",
    description:
      "Campaign pages that stay fast and on-brand from mobile share links to large desktop presentations.",
    features: ["Conversion layout", "Asset optimization", "A/B-ready"],
  },
  {
    icon: Tablet,
    title: "Adaptive Layouts",
    description:
      "Breakpoints, fluid grids, and container queries so components reflow cleanly at every width.",
    features: ["Fluid grids", "Container queries", "Content-aware"],
  },
  {
    icon: RefreshCw,
    title: "Responsive Redesign",
    description:
      "Modernize legacy markup and CSS debt without losing SEO equity — incremental or full replatform.",
    features: ["CSS cleanup", "Redirect plans", "Risk-managed rollout"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Core Web Vitals focus — lazy loading, font strategy, image formats, and render-path tuning.",
    features: ["LCP & CLS", "Image/CDN", "Critical CSS"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Audit",
    description:
      "Baseline performance, accessibility gaps, and breakpoint issues across real devices and browsers.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Wireframes",
    description: "Low-fidelity layouts for key breakpoints with content priority and interaction notes.",
    icon: LayoutTemplate,
  },
  {
    step: "03",
    title: "Design",
    description: "High-fidelity UI with responsive specs, component states, and design tokens for dev handoff.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    description: "Semantic HTML, resilient CSS, and componentized frontends with Storybook or equivalent previews.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing",
    description: "Device labs, BrowserStack, and performance budgets — fix regressions before users see them.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch",
    description: "CDN cache rules, monitoring, and rollout — with a rollback plan if metrics dip.",
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
    label: "Frameworks",
    items: [
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Bootstrap", logo: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: "SCSS", logo: `${DEVICON}/sass/sass-original.svg` },
      { name: "PostCSS", logo: `${DEVICON}/postcss/postcss-original.svg` },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Chrome DevTools", logo: `${DEVICON}/chrome/chrome-original.svg` },
      { name: "BrowserStack", logo: `${DEVICON}/browserstack/browserstack-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "PageSpeed", logo: `${DEVICON}/google/google-original.svg` },
      { name: "GTmetrix", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "CrossBrowserTesting", logo: `${DEVICON}/firefox/firefox-original.svg` },
    ],
  },
  {
    label: "Build",
    items: [
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "Vite", logo: `${DEVICON}/vitejs/vitejs-original.svg` },
      { name: "PostCSS", logo: `${DEVICON}/postcss/postcss-original.svg` },
      { name: "Autoprefixer", logo: `${DEVICON}/babel/babel-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "We design and build from the smallest screen up — fewer surprises and better real-world UX.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description:
      "Performance budgets and measurement loops so speed and stability stay part of the definition of done.",
  },
  {
    icon: ShieldCheck,
    title: "Cross-Browser Tested",
    description: "Real device and browser coverage — not just one laptop viewport — before every release.",
  },
  {
    icon: Award,
    title: "Pixel-Perfect",
    description: "Design fidelity with practical engineering tradeoffs called out early, not discovered late.",
  },];
