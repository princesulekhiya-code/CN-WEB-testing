import { Glasses, Package, Smartphone, Layers, Globe, GraduationCap, ShoppingCart, Award, HeartHandshake, ClipboardList, Rocket, Settings, Palette, ShieldCheck } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "Augmented Reality",
  titleBottom: "Consulting",
  description: "Blend cutting-edge AR technology with strategic insights to integrate solutions that captivate users, streamline operations, and stand out in your industry.",
  heroImage: "/images/stock/stock-027514f12b.jpg",
  heroImageAlt: "Augmented Reality & VR",
  topBadge: { icon: null as any, title: "AR/VR Expert", subtitle: "Immersive tech", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Innovation", subtitle: "Cutting-edge", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Engagements" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "AR Consulting", headingWhite: "Services", subtitle: "End-to-end augmented reality solutions from strategy and 3D design to development and launch." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our AR Development", headingWhite: "Process", subtitle: "From concept to launch — structured delivery for immersive AR experiences." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "AR SDKs, 3D pipelines, WebAR, and cloud tools we use to build immersive AR products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Bring Your Brand to Life with", headingBottom: "Augmented Reality?", description: "Let us create immersive AR experiences that captivate your audience and deliver measurable business results." };

export const services: ServiceOffering[] = [{ icon: Glasses, title: "AR Strategy & Consulting", description: "AR readiness assessment, use case identification, and ROI projection to maximize your AR investment.", features: ["Readiness assessment", "Use case mapping", "ROI analysis"] },
  { icon: Smartphone, title: "AR App Development", description: "Native iOS and Android AR applications built with ARKit and ARCore for immersive mobile experiences.", features: ["ARKit & ARCore", "Native apps", "3D interactions"] },
  { icon: Globe, title: "WebAR Experiences", description: "Browser-based AR experiences that work without app downloads — instant access for maximum reach.", features: ["No app required", "Cross-browser", "Instant access"] },
  { icon: Package, title: "3D Modeling & Visualization", description: "Product visualization, architectural walkthroughs, and digital twins for immersive 3D experiences.", features: ["Product viz", "Digital twins", "3D walkthroughs"] },
  { icon: GraduationCap, title: "AR for Training & Education", description: "Immersive training simulations and educational AR experiences that improve learning outcomes.", features: ["Training sims", "Interactive learning", "Knowledge retention"] },
  { icon: ShoppingCart, title: "AR Commerce & Retail", description: "Virtual try-on, product placement, and interactive shopping experiences that boost conversions.", features: ["Virtual try-on", "Product placement", "Interactive shopping"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Use Case", description: "Understand your goals, identify AR opportunities, and define success metrics.", icon: ClipboardList },
  { step: "02", title: "Concept Design", description: "Storyboarding, interaction design, and visual prototyping for the AR experience.", icon: Palette },
  { step: "03", title: "3D Asset Creation", description: "Model, texture, and optimize 3D assets for real-time AR rendering performance.", icon: Package },
  { step: "04", title: "AR Development", description: "Build the AR application with tracking, rendering, and interaction systems.", icon: Settings },
  { step: "05", title: "Testing & QA", description: "Device testing, environment testing, and performance optimization across platforms.", icon: ShieldCheck },
  { step: "06", title: "Launch & Optimization", description: "Deploy to app stores or web, monitor engagement, and iterate based on analytics.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "AR SDKs", items: [
      { name: "ARKit", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "ARCore", logo: `${DEVICON}/android/android-original.svg` },
      { name: "Vuforia", logo: `${DEVICON}/unity/unity-original.svg` },
      { name: "Spark AR", logo: `${DEVICON}/sparkar/sparkar-original.svg` },
      { name: "8th Wall", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "3D Tools", items: [
      { name: "Unity", logo: `${DEVICON}/unity/unity-original.svg` },
      { name: "Unreal Engine", logo: `${DEVICON}/unrealengine/unrealengine-original.svg` },
      { name: "Blender", logo: `${DEVICON}/blender/blender-original.svg` },
      { name: "Maya", logo: `${DEVICON}/maya/maya-original.svg` },
      { name: "Cinema 4D", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "WebAR", items: [
      { name: "Three.js", logo: `${DEVICON}/threejs/threejs-original.svg` },
      { name: "A-Frame", logo: `${DEVICON}/aframe/aframe-original.svg` },
      { name: "WebXR", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "8th Wall", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Zappar", logo: `${DEVICON}/zappar/zappar-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure Spatial Anchors", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "AR/VR Specialists", description: "Dedicated AR engineers and 3D artists with production experience across industries." },
  { icon: Smartphone, title: "Cross-Platform Expertise", description: "iOS, Android, and WebAR — consistent experiences across all devices and browsers." },
  { icon: Palette, title: "Immersive Design", description: "UX-first AR design that creates intuitive, engaging, and accessible experiences." },
  { icon: HeartHandshake, title: "Measurable Engagement", description: "Analytics and tracking built in so you can measure dwell time, interactions, and conversions." },];
