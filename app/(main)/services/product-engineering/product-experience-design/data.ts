import { Palette, Eye, Smartphone, Monitor, Search, Layout, Layers, Boxes, TestTube2, ClipboardList, Settings, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Product Experience",
  titleBottom: "Design",
  description: "Our UI/UX experts understand business specifics and follow the latest industry trends to create intuitive flow and responsive design for your digital products.",
  heroImage: "/images/stock/stock-6f9a39897b.jpg",
  heroImageAlt: "Product Experience Design",
  topBadge: { icon: null as any, title: "UX Design", subtitle: "User-centered", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Better", subtitle: "Engagement lift", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Product Experience Design", headingWhite: "Services", subtitle: "Research-led UX, polished UI, systems, and validation — so your digital product feels intuitive, accessible, and ready to scale across web and mobile." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Design", headingWhite: "Process", subtitle: "From research and journey mapping through visual design, testing, and handoff — structured for clarity, speed, and build-ready quality." };
export const techHeading: ServicePageSectionProps = { headingGray: "Design &amp; Research", headingWhite: "Tools", subtitle: "Industry-standard design, prototyping, research, and collaboration tools — integrated into workflows your teams already use." };
export const ctaProps: CTAProps = { headingTop: "Ready to Design Your", headingBottom: "Product Experience?", description: "Ship interfaces users love — backed by research, systems, and a handoff your developers will thank you for." };

export const services: ServiceOffering[] = [{
    icon: Search,
    title: "UX Research & Strategy",
    description:
      "We uncover user goals, mental models, and friction through interviews, analytics, and competitive scans. Insights become a prioritized UX strategy tied to business outcomes.",
    features: ["User interviews", "Journey insights", "Opportunity themes"],
  },
  {
    icon: Layout,
    title: "Information Architecture",
    description:
      "Navigation, taxonomy, and content structure are designed for findability and scale. IA aligns customer tasks with your product story — reducing support load and drop-off.",
    features: ["Taxonomy design", "Task flows", "Content hierarchy"],
  },
  {
    icon: Layers,
    title: "Wireframing & Prototyping",
    description:
      "Low to high fidelity flows validate ideas before engineering commits. Interactive prototypes make feedback concrete and shorten the distance from concept to build.",
    features: ["Flow validation", "Clickable prototypes", "Iteration loops"],
  },
  {
    icon: Palette,
    title: "Visual UI Design",
    description:
      "Typography, color, spacing, and components create a cohesive interface that feels on-brand and accessible. Visual polish reinforces trust — especially in competitive markets.",
    features: ["Brand-aligned UI", "Accessibility", "Responsive layouts"],
  },
  {
    icon: Boxes,
    title: "Design System Creation",
    description:
      "Tokens, components, and documentation give product and engineering a shared language. A living system speeds delivery while keeping experiences consistent.",
    features: ["Component library", "Design tokens", "Usage guidelines"],
  },
  {
    icon: TestTube2,
    title: "Usability Testing",
    description:
      "Moderated and unmoderated tests validate assumptions with real users. Findings are triaged into fixes, fast-follows, and roadmap inputs — not ignored slide fodder.",
    features: ["Test plans", "Session analysis", "Prioritized fixes"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "User Research",
    description:
      "We synthesize qualitative and quantitative signals into personas, scenarios, and pain maps. Research sets a shared baseline before pixels appear.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Journey Mapping",
    description:
      "End-to-end journeys expose moments that matter — and where the experience breaks. Maps align product, marketing, and support around the same customer story.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "Structure and hierarchy come first so teams debate the right problems. Wireframes keep feedback focused on flow before visual detail distracts the conversation.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Visual Design",
    description:
      "Brand, accessibility, and interaction patterns converge into high-fidelity screens. Design decisions are documented for consistency across breakpoints and states.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Prototype Testing",
    description:
      "Users exercise realistic tasks on interactive prototypes. Issues are captured with severity so engineering tackles what moves metrics — not noise.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Design Handoff",
    description:
      "Specs, assets, and component references land where developers work — with rationale, states, and edge cases. Handoff reduces rework and keeps design intent intact.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Design", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` },
      { name: "Illustrator", logo: `${DEVICON}/illustrator/illustrator-original.svg` }
    ] },
  { label: "Prototyping", items: [
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` }
    ] },
  { label: "Research", items: [
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Optimal Workshop", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Collaboration", items: [
      { name: "Zeplin", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Abstract", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` }
    ] },
  { label: "Animation", items: [
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
      { name: "Lottie", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Rive", logo: `${DEVICON}/rive/rive-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Design Excellence",
    description:
      "Craft-led designers who sweat details — from typography rhythm to motion — so your product feels premium and trustworthy.",
  },
  {
    icon: TrendingUp,
    title: "User-Centric Approach",
    description:
      "Decisions trace back to user evidence and business goals, not subjective taste alone — improving adoption and retention.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Fast cycles from sketch to interactive prototype help you learn before you build, saving engineering time and budget.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Process",
    description:
      "Embedded collaboration with product and engineering — critiques, async updates, and shared systems — keeps design and delivery aligned.",
  },];
