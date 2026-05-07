import { Monitor, Layout, Palette, Globe, BarChart3, Cloud, Smartphone, Layers, Search, LayoutGrid, Rocket, Award, TrendingUp, Zap, HeartHandshake, TestTube2 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "UI/UX",
  titleBottom: "Web Design",
  description: "Expert designers crafting exceptional user experiences to shape your brand identity by enriching user interaction and engagement across web platforms.",
  heroImage: "/images/stock/stock-164521b16d.jpg",
  heroImageAlt: "Web Design & Layout",
  topBadge: { icon: null as any, title: "Web Design", subtitle: "Modern & clean", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Responsive", subtitle: "All devices", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Web Design", headingWhite: "Services", subtitle: "From marketing sites to complex web apps — we design interfaces that feel on-brand, load fast, and guide users through every task with confidence." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Web Design", headingWhite: "Process", subtitle: "Research through handoff — a transparent sequence that keeps UX, brand, and engineering aligned from the first workshop to launch." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Design, prototype, validate, and hand off with the same toolchain your product and marketing teams already rely on." };
export const ctaProps: CTAProps = { headingTop: "Ready to Design Your", headingBottom: "Web Experience?", description: "Tell us about your product and audience — we will map a web design plan that balances brand expression with measurable usability." };

export const services: ServiceOffering[] = [{
    icon: Layout,
    title: "Landing Page Design",
    description:
      "High-impact landing experiences with clear hierarchy and focused storytelling so visitors understand your value in seconds and move confidently toward conversion.",
    features: ["Hero & CTA focus", "Social proof blocks", "SEO-friendly structure"],
  },
  {
    icon: Monitor,
    title: "Web App Interface Design",
    description:
      "Application UIs that balance density and clarity — navigation, tables, forms, and empty states that stay usable as your product grows in complexity.",
    features: ["Workflow clarity", "Scalable layouts", "State coverage"],
  },
  {
    icon: BarChart3,
    title: "Dashboard Design",
    description:
      "Analytics and operations dashboards with legible charts, filters, and drill-down patterns so teams scan metrics quickly and act on what matters.",
    features: ["Data hierarchy", "Filter patterns", "Role-aware views"],
  },
  {
    icon: Cloud,
    title: "SaaS UI Design",
    description:
      "Subscription-ready interfaces with onboarding, settings, and billing touchpoints that feel cohesive and reduce churn through predictable UX.",
    features: ["Onboarding flows", "Plan & billing UX", "Trust & security cues"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Breakpoints, fluid grids, and component behavior tuned for phones, tablets, and desktops so your brand feels intentional at every width.",
    features: ["Mobile-first layouts", "Touch-friendly targets", "Adaptive components"],
  },
  {
    icon: Layers,
    title: "Design System for Web",
    description:
      "Tokens, components, and documentation that keep marketing and product teams aligned — fewer one-off screens and faster shipping with fewer regressions.",
    features: ["Component libraries", "Usage guidelines", "Dev-ready specs"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Research & Discovery",
    description:
      "We align on business goals, audiences, and competitors, then translate insights into design criteria your whole team can reference.",
    icon: Search,
  },
  {
    step: "02",
    title: "Information Architecture",
    description:
      "Sitemaps, content models, and navigation models define how users find tasks — reducing dead ends before pixels are polished.",
    icon: LayoutGrid,
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "Low-fidelity layouts validate structure and priority; we iterate quickly on flows before committing to visual detail.",
    icon: Layout,
  },
  {
    step: "04",
    title: "Visual Design",
    description:
      "Typography, color, imagery, and component styling bring your brand to the web with accessible contrast and consistent rhythm.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Prototype Testing",
    description:
      "Clickable prototypes and moderated sessions catch confusion early — we refine copy, layout, and interactions based on real behavior.",
    icon: TestTube2,
  },
  {
    step: "06",
    title: "Developer Handoff",
    description:
      "Specs, assets, and annotations land in tools your engineers already use, with edge cases called out so build matches design.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` }
    ],
  },
  {
    label: "Prototyping",
    items: [
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` }
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ],
  },
  {
    label: "Collaboration",
    items: [
      { name: "Zeplin", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Abstract", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Web Design Excellence",
    description:
      "Interfaces judged on clarity and craft — we sweat hierarchy, spacing, and polish so your site feels premium, not generic.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused",
    description:
      "Every layout decision ties back to measurable outcomes: clearer paths, stronger CTAs, and fewer drop-offs through the funnel.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Structured critiques and reusable patterns keep momentum high without sacrificing quality or accessibility along the way.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Process",
    description:
      "Designers, stakeholders, and developers share one source of truth — fewer surprises in QA and smoother launches.",
  },];
