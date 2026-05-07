import {
  Palette,
  FileSearch,
  Layout,
  Accessibility,
  Gauge,
  MousePointerClick,
  Users,
  Compass,
  PenTool,
  Hammer,
  BarChart3,
  LineChart,
  Eye,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-transformation",
  backLabel: "Back to Digital Transformation",
  titleTop: "UI/UX",
  titleBottom: "Modernization",
  description:
    "Adopt the latest design trends and experiences to create engaging products that boost user engagement and business value.",
  heroImage: "/images/stock/stock-37761d5488.jpg",
  heroImageAlt: "UI/UX Modernization",
  topBadge: {
    icon: null as any,
    title: "UX Refresh",
    subtitle: "Modern design",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "60% Better",
    subtitle: "User engagement",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 120, suffix: "+", label: "Transformations" },
    { value: 45, suffix: "%", label: "Efficiency Gain" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 60, suffix: "+", label: "Enterprise Clients" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "UI/UX Modernization",
  headingWhite: "Services",
  subtitle:
    "Design systems, research, accessibility, and performance UX — unified for products users love.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our UI/UX Modernization",
  headingWhite: "Process",
  subtitle: "Research, strategy, prototyping, build, and continuous measurement — in one loop.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Design tools, frontend stacks, testing, accessibility, and analytics for modern UX delivery.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Elevate Your",
  headingBottom: "UI/UX Experience?",
  description:
    "Partner with us to modernize design systems, accessibility, and product experiences that convert.",
};

export const services: ServiceOffering[] = [
  {
    icon: Palette,
    title: "Design System Creation",
    description: "Tokens, components, and documentation that keep product teams aligned and shipping faster.",
    features: ["Tokens & themes", "Component lib", "Figma kits"],
  },
  {
    icon: FileSearch,
    title: "UX Audit & Redesign",
    description: "Heuristic reviews, journey maps, and prioritized fixes that lift conversion and satisfaction.",
    features: ["Heuristics", "Journeys", "Prioritized backlog"],
  },
  {
    icon: Layout,
    title: "Responsive Modernization",
    description: "Fluid layouts, breakpoints, and performance budgets that feel great on every device.",
    features: ["Breakpoints", "Touch targets", "Perf budgets"],
  },
  {
    icon: Accessibility,
    title: "Accessibility Upgrade",
    description: "WCAG-aligned patterns, keyboard flows, and assistive-tech testing baked into delivery.",
    features: ["WCAG 2.1", "Keyboard", "Screen readers"],
  },
  {
    icon: Gauge,
    title: "Performance UX Optimization",
    description: "Perceived speed, skeleton states, and interaction design that reduce abandonment.",
    features: ["Core Web Vitals", "Skeletons", "Lazy media"],
  },
  {
    icon: MousePointerClick,
    title: "Interactive Prototype",
    description: "Clickable prototypes and usability loops before engineering commits to scope.",
    features: ["Hi-fi prototypes", "User tests", "Iterations"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "UX Audit",
    description:
      "Baseline the experience with analytics, session replay, and qualitative review of friction points.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "User Research",
    description: "Interviews, surveys, and usability sessions to validate problems and success metrics.",
    icon: Users,
  },
  {
    step: "03",
    title: "Design Strategy",
    description: "Information architecture, flows, and visual direction aligned to brand and outcomes.",
    icon: Compass,
  },
  {
    step: "04",
    title: "Prototype & Test",
    description: "Interactive prototypes with rapid test cycles to de-risk the build.",
    icon: PenTool,
  },
  {
    step: "05",
    title: "Implementation",
    description: "Design-to-dev handoff with specs, tokens, and QA against acceptance criteria.",
    icon: Hammer,
  },
  {
    step: "06",
    title: "Measure & Iterate",
    description: "Instrumentation, A/B tests, and continuous improvement against KPIs.",
    icon: BarChart3,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "GSAP", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Axe", logo: `${DEVICON}/axe/axe-original.svg` },
    ],
  },
  {
    label: "Accessibility",
    items: [
      { name: "WCAG 2.1", logo: `${DEVICON}/wcag21/wcag21-original.svg` },
      { name: "ARIA", logo: `${DEVICON}/aria/aria-original.svg` },
      { name: "Screen Readers", logo: `${DEVICON}/screenreaders/screenreaders-original.svg` },
      { name: "Color Contrast", logo: `${DEVICON}/colorcontrast/colorcontrast-original.svg` },
      { name: "Keyboard Nav", logo: `${DEVICON}/keyboardnav/keyboardnav-original.svg` },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "GA4", logo: `${DEVICON}/ga4/ga4-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Palette,
    title: "Design-Led Thinking",
    description: "Problems framed from user and business outcomes before pixels hit the screen.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description: "Quant and qual signals guide prioritization so every sprint moves metrics.",
  },
  {
    icon: Eye,
    title: "Accessibility First",
    description: "Inclusive patterns by default — not as an afterthought before launch.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description: "KPIs, experimentation, and dashboards tied to UX investments.",
  },
];
