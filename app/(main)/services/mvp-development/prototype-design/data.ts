import { Palette, Layers, Monitor, Smartphone, FileText, Users, Zap, Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Settings } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "Prototype Design /",
  titleBottom: "PoC Development",
  description: "From discovery to dev-ready handoff — structured delivery for rapid validation.",
  heroImage: "/images/stock/stock-6f9a39897b.jpg",
  heroImageAlt: "Prototype Design & Wireframes",
  topBadge: { icon: null as any, title: "Prototype", subtitle: "Interactive design", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Click & Test", subtitle: "User validated", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "MVPs Launched" },
  { value: 6, suffix: " wk", label: "Avg Launch Time" },
  { value: 85, suffix: "%", label: "Funding Success" },
  { value: 40, suffix: "+", label: "Startup Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "From discovery to dev-ready handoff — structured delivery for rapid validation." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Prototyping", headingWhite: "Process", subtitle: "From discovery to dev-ready handoff — structured delivery for rapid validation." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "From wireframes to investor-ready demos — validate your idea before committing to full development." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: Palette, title: "Interactive Prototyping", description: "Clickable, interactive prototypes that simulate the real app experience for stakeholder validation.", features: ["Clickable flows", "User testing", "Stakeholder demos"] },
  { icon: FileText, title: "Proof of Concept (PoC)", description: "Technical feasibility validation for risky integrations, algorithms, or architecture decisions.", features: ["Technical spikes", "Feasibility study", "Risk mitigation"] },
  { icon: Layers, title: "Wireframing & Information Architecture", description: "Low-fidelity and high-fidelity wireframes that define navigation patterns and content hierarchy.", features: ["Lo-fi wireframes", "Hi-fi mockups", "IA planning"] },
  { icon: Monitor, title: "Design System Foundation", description: "Reusable design tokens, components, and patterns that accelerate development once the prototype is approved.", features: ["Design tokens", "Component library", "Style guide"] },
  { icon: Users, title: "User Research & Testing", description: "Validate prototypes with real users through interviews, usability testing, and feedback analysis.", features: ["User interviews", "Usability tests", "Feedback synthesis"] },
  { icon: Smartphone, title: "Investor-Ready Demos", description: "Polished prototypes specifically crafted to present to investors, demonstrating product vision and market fit.", features: ["Pitch-ready", "Market validation", "Visual polish"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery Workshop", description: "Understand your vision, target users, competitive landscape, and key assumptions to validate.", icon: ClipboardList },
  { step: "02", title: "User Journey Mapping", description: "Map critical user flows, identify pain points, and define the core experience to prototype.", icon: Users },
  { step: "03", title: "Wireframing", description: "Create low-fidelity wireframes that establish layout, navigation, and content structure.", icon: Layers },
  { step: "04", title: "Visual Design", description: "Apply brand identity, typography, color, and micro-interactions to bring wireframes to life.", icon: Palette },
  { step: "05", title: "Interactive Prototype", description: "Build a clickable prototype that simulates the real app for testing and stakeholder review.", icon: Settings },
  { step: "06", title: "Validation & Handoff", description: "Test with users, incorporate feedback, and deliver dev-ready specs with annotated designs.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Design", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` }
    ] },
  { label: "Prototyping", items: [
      { name: "Figma Prototyping", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "ProtoPie", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Research", items: [
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Optimal Workshop", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Collaboration", items: [
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "FigJam", logo: `${DEVICON}/figjam/figjam-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Slack", logo: `${DEVICON}/slack/slack-original.svg` },
      { name: "Loom", logo: `${DEVICON}/loom/loom-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Expert Design Team", description: "Senior UX/UI designers with experience building prototypes for 100+ startups and enterprises." },
  { icon: Zap, title: "Rapid Turnaround", description: "From workshop to interactive prototype in as little as 2 weeks with iterative feedback loops." },
  { icon: ShieldCheck, title: "User-Validated Designs", description: "Every prototype tested with real users before handoff — reducing development risk significantly." },
  { icon: HeartHandshake, title: "Dev-Ready Deliverables", description: "Annotated designs, component specs, and design tokens ready for immediate engineering handoff." },];
