import { LayoutDashboard, UserCircle2, SwatchBook, BarChart3, MonitorSmartphone, Accessibility, Search, PenLine, Palette, Box, FlaskConical, Figma, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "SaaS",
  titleBottom: "UI/UX Design",
  description: "User-friendly and interactive enterprise-grade UI/UX designs intending to drive higher revenue and user engagement.",
  heroImage: "/images/stock/stock-6f9a39897b.jpg",
  heroImageAlt: "SaaS UI/UX Design",
  topBadge: { icon: null as any, title: "SaaS UX", subtitle: "User-first design", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "60% Better", subtitle: "Onboarding flow", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Platform Uptime" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering strategy, build, and operations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Don&apos;t let your idea remain just an idea. Partner with us to transform it into a revenue-generating SaaS reality." };

export const services: ServiceOffering[] = [{ icon: LayoutDashboard, title: "SaaS Dashboard Design", description: "Dense data made legible — navigation, hierarchy, and component patterns tuned for daily power users.", features: ["Information architecture", "Component library", "Responsive layouts"] },
  { icon: UserCircle2, title: "User Onboarding UX", description: "Progressive disclosure, checklists, and empty states that guide users to their first success fast.", features: ["Activation metrics", "Tooltips & tours", "Progress tracking"] },
  { icon: SwatchBook, title: "Design System Creation", description: "Tokens, typography, and reusable UI primitives that keep product and marketing visually aligned.", features: ["Design tokens", "Documentation", "Accessibility baked in"] },
  { icon: BarChart3, title: "Data Visualization", description: "Charts, tables, and drill-downs that surface trends without overwhelming operators or analysts.", features: ["Chart patterns", "Filtering UX", "Export flows"] },
  { icon: MonitorSmartphone, title: "Mobile-Responsive Design", description: "Adaptive layouts and touch targets so your SaaS works beautifully on phones and tablets.", features: ["Breakpoint strategy", "Touch-first UI", "Performance-aware assets"] },
  { icon: Accessibility, title: "Accessibility Design", description: "WCAG-minded patterns, contrast, and keyboard flows so every role can use your product confidently.", features: ["WCAG alignment", "Screen reader paths", "Focus management"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "User Research", description: "Interviews, analytics review, and jobs-to-be-done mapping to ground decisions in real behavior.", icon: Search },
  { step: "02", title: "Wireframing", description: "Low-fidelity flows and IA validation before visual polish to reduce rework.", icon: PenLine },
  { step: "03", title: "Visual Design", description: "Brand-aligned UI, spacing, and states across light/dark and dense dashboards.", icon: Palette },
  { step: "04", title: "Prototyping", description: "Clickable prototypes for stakeholder alignment and usability sessions.", icon: Box },
  { step: "05", title: "Usability Testing", description: "Task-based tests with iterations on friction points and copy clarity.", icon: FlaskConical },
  { step: "06", title: "Design Handoff", description: "Specs, assets, and dev-ready documentation with parity checks in implementation.", icon: Figma },];

export const techCategories: TechCategory[] = [{ label: "Design", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` }
    ] },
  { label: "Prototyping", items: [
      { name: "ProtoPie", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "SASS", logo: `${DEVICON}/sass/sass-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lyssna", logo: `${DEVICON}/lyssna/lyssna-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Pendo", logo: `${DEVICON}/pendo/pendo-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Heap", logo: `${DEVICON}/heap/heap-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
