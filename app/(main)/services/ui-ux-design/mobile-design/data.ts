import { Smartphone, TabletSmartphone, Layers, Palette, Watch, Users, Search, GitBranch, Layout, ShieldCheck, Package, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "UI/UX",
  titleBottom: "Mobile Design",
  description: "Modern, innovative mobile designs for all screen sizes and platforms that align business needs and promote business reach with delightful user experiences.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "Mobile App Design",
  topBadge: { icon: null as any, title: "Mobile UX", subtitle: "iOS & Android", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Award-Winning", subtitle: "App design", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Mobile Design", headingWhite: "Services", subtitle: "Native-feeling apps for iOS, Android, wearables, and cross-platform stacks — designed for thumbs, motion, and real-world interruptions." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Mobile Design", headingWhite: "Process", subtitle: "From platform research to shipped assets — a cadence built for mobile release trains and continuous store updates." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Design, platform references, prototyping, and motion tools tuned for mobile pipelines and store-ready delivery." };
export const ctaProps: CTAProps = { headingTop: "Ready to Design Your", headingBottom: "Mobile App?", description: "Share your roadmap and platforms — we will propose a mobile design engagement that matches your release cadence and quality bar." };

export const services: ServiceOffering[] = [{
    icon: Smartphone,
    title: "iOS App Design",
    description:
      "Human Interface Guidelines–aware screens with SF-friendly typography, safe areas, and navigation patterns that feel native on iPhone and iPad.",
    features: ["HIG alignment", "Dynamic type", "Modal & sheet flows"],
  },
  {
    icon: TabletSmartphone,
    title: "Android App Design",
    description:
      "Material Design 3 layouts with adaptive components, motion, and density rules so your app feels at home across OEM skins and screen sizes.",
    features: ["Material 3", "Edge-to-edge", "Tablet split views"],
  },
  {
    icon: Layers,
    title: "Cross-Platform Design",
    description:
      "One product vision expressed consistently whether you ship on Flutter, React Native, or native stacks — shared tokens with platform-appropriate tweaks.",
    features: ["Shared design language", "Platform deltas", "Component parity"],
  },
  {
    icon: Watch,
    title: "Wearable UI Design",
    description:
      "Glanceable complications, short flows, and touch targets sized for wrists — we design for glance-first use without cramming full-phone layouts onto tiny screens.",
    features: ["Complication design", "Quick actions", "Battery-aware UX"],
  },
  {
    icon: Users,
    title: "Mobile Onboarding Design",
    description:
      "First-run experiences that respect attention: progressive disclosure, permission priming, and empty states that teach without overwhelming new users.",
    features: ["Permission UX", "Progressive profiles", "Skip & return paths"],
  },
  {
    icon: Palette,
    title: "App Icon & Branding",
    description:
      "Icons and launch assets that read at every size — from store listings to home screens — while staying aligned with your wider brand system.",
    features: ["Adaptive icons", "Store screenshots", "Brand marks"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Platform Research",
    description:
      "We review store guidelines, device matrices, and competitor patterns so design choices reflect real constraints, not desktop assumptions.",
    icon: Search,
  },
  {
    step: "02",
    title: "User Flow Design",
    description:
      "Task maps and edge-case flows document happy paths, errors, and offline moments before high-fidelity screens lock decisions in.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "Low-fidelity frames establish information priority and thumb reach — iterating quickly before visual polish hides structural issues.",
    icon: Layout,
  },
  {
    step: "04",
    title: "Visual Design",
    description:
      "Color, type, and motion express your brand while meeting accessibility targets and platform expectations for contrast and tap targets.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Prototype Testing",
    description:
      "Tap-through prototypes on real devices validate navigation labels, gesture affordances, and microcopy before engineering invests heavily.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Asset Delivery",
    description:
      "Exports, naming, and handoff notes land where mobile engineers expect them — including @2x/@3x, adaptive icons, and motion specs.",
    icon: Package,
  },];

export const techCategories: TechCategory[] = [{
    label: "Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` }
    ],
  },
  {
    label: "iOS",
    items: [
      { name: "SF Symbols", logo: `${DEVICON}/sfsymbols/sfsymbols-original.svg` },
      { name: "HIG", logo: `${DEVICON}/hig/hig-original.svg` },
      { name: "SwiftUI Preview", logo: `${DEVICON}/swiftuipreview/swiftuipreview-original.svg` }
    ],
  },
  {
    label: "Android",
    items: [
      { name: "Material Design 3", logo: `${DEVICON}/materialdesign3/materialdesign3-original.svg` },
      { name: "Jetpack Compose", logo: `${DEVICON}/jetpackcompose/jetpackcompose-original.svg` }
    ],
  },
  {
    label: "Prototyping",
    items: [
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "ProtoPie", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` }
    ],
  },
  {
    label: "Motion",
    items: [
      { name: "Lottie", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
      { name: "Rive", logo: `${DEVICON}/rive/rive-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Mobile Design Experts",
    description:
      "Dedicated mobile craft — not resized web mockups — with attention to gestures, performance budgets, and store-review–friendly flows.",
  },
  {
    icon: TrendingUp,
    title: "Platform-Native UX",
    description:
      "We lean into each OS where it helps users, while keeping your product recognizable and teachable across platforms.",
  },
  {
    icon: Zap,
    title: "Pixel-Perfect",
    description:
      "Specs, redlines, and component states that survive device labs — fewer round-trips between design and native implementation.",
  },
  {
    icon: HeartHandshake,
    title: "Design-Dev Alignment",
    description:
      "Shared libraries and review rituals keep designers and mobile engineers on one roadmap from sprint planning to release.",
  },];
