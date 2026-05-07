import { MousePointerClick, Layers, Workflow, Repeat2, Sparkles, Smartphone, ClipboardList, Layout, Code2, ShieldCheck, Palette, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "Interaction",
  titleBottom: "Design",
  description: "Design meaningful micro-interactions, motion systems, and gesture-based patterns that make digital products feel natural, responsive, and delightful.",
  heroImage: "/images/stock/stock-cb3f8d7866.jpg",
  heroImageAlt: "Interaction Design",
  topBadge: { icon: null as any, title: "IxD Expert", subtitle: "Micro-interactions", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "60fps Smooth", subtitle: "Fluid animations", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Interaction Design", headingWhite: "Services", subtitle: "From micro-interactions to full motion systems — interactions that make products feel natural." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Interaction Design", headingWhite: "Process", subtitle: "From audit to handoff — a rigorous process for interaction patterns that work." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies &", headingWhite: "Tools", subtitle: "Industry-leading prototyping, animation, and testing tools for interaction design." };
export const ctaProps: CTAProps = { headingTop: "Ready to Elevate Your", headingBottom: "Interaction Design?", description: "Meaningful micro-interactions, motion systems, and gesture patterns that delight users." };

export const services: ServiceOffering[] = [{ icon: MousePointerClick, title: "Micro-Interaction Design", description: "Purposeful hover states, button feedback, loading animations, and transition effects that make interfaces feel alive and intuitive.", features: ["Hover states", "Button feedback", "Transitions"] },
  { icon: Workflow, title: "User Flow Design", description: "Optimized task flows, decision trees, and navigation paths that reduce friction and guide users to their goals effortlessly.", features: ["Task flows", "Decision trees", "Path optimization"] },
  { icon: Layers, title: "Component Interaction Patterns", description: "Reusable interaction patterns — modals, dropdowns, accordions, carousels, and tabs with consistent behavior across your product.", features: ["Modals", "Dropdowns", "Pattern library"] },
  { icon: Repeat2, title: "Animation & Motion Design", description: "Meaningful motion design that communicates state changes, draws attention, and creates spatial context within digital interfaces.", features: ["State changes", "Focus cues", "Spatial context"] },
  { icon: Sparkles, title: "Gesture-Based Interaction", description: "Touch gestures, swipe actions, pinch-to-zoom, and drag-and-drop interactions designed for natural mobile and tablet experiences.", features: ["Swipe actions", "Drag & drop", "Pinch-to-zoom"] },
  { icon: Smartphone, title: "Responsive Interaction", description: "Adaptive interactions that shift gracefully between devices — from mouse hover on desktop to touch-friendly targets on mobile.", features: ["Adaptive hover", "Touch targets", "Cross-device"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Interaction Audit", description: "Evaluate existing interaction patterns, identify friction points, and benchmark against industry standards.", icon: ClipboardList },
  { step: "02", title: "Interaction Mapping", description: "Map user journeys, task flows, and interaction states to design cohesive behavior across all touchpoints.", icon: Layout },
  { step: "03", title: "Prototype & Animate", description: "High-fidelity interactive prototypes with realistic animations, transitions, and micro-interactions.", icon: Code2 },
  { step: "04", title: "Usability Testing", description: "Task-based testing with real users to validate interaction patterns and identify usability issues.", icon: ShieldCheck },
  { step: "05", title: "Interaction Style Guide", description: "Document interaction patterns, motion principles, and timing curves in a reusable design system.", icon: Palette },
  { step: "06", title: "Developer Handoff", description: "Detailed specs with animation curves, timing, interaction states, and responsive behavior guidelines.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Prototyping", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "ProtoPie", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
      { name: "InVision Studio", logo: `${DEVICON}/invisionstudio/invisionstudio-original.svg` }
    ] },
  { label: "Animation", items: [
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
      { name: "Lottie", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "CSS Animations", logo: `${DEVICON}/cssanimations/cssanimations-original.svg` },
      { name: "GSAP", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Rive", logo: `${DEVICON}/rive/rive-original.svg` }
    ] },
  { label: "Design Systems", items: [
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` },
      { name: "Zeroheight", logo: `${DEVICON}/zeroheight/zeroheight-original.svg` },
      { name: "Tokens Studio", logo: `${DEVICON}/tokensstudio/tokensstudio-original.svg` },
      { name: "Figma Variables", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Style Dictionary", logo: `${DEVICON}/styledictionary/styledictionary-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Optimal Workshop", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Development", items: [
      { name: "Framer Motion", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
      { name: "CSS Transitions", logo: `${DEVICON}/csstransitions/csstransitions-original.svg` },
      { name: "Web Animations API", logo: `${DEVICON}/webanimationsapi/webanimationsapi-original.svg` },
      { name: "Three.js", logo: `${DEVICON}/threejs/threejs-original.svg` },
      { name: "GSAP", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Interaction Expertise", description: "Senior interaction designers who understand cognitive psychology, motor patterns, and Fitts's law." },
  { icon: TrendingUp, title: "Data-Driven Design", description: "Interaction decisions backed by analytics, heatmaps, and user testing — not just aesthetic preference." },
  { icon: Zap, title: "Performance-Conscious", description: "Animations optimized for 60fps with GPU-accelerated transforms and minimal layout thrashing." },
  { icon: HeartHandshake, title: "Developer-Friendly", description: "Interaction specs delivered with exact timing curves, easing functions, and responsive breakpoints." },];
