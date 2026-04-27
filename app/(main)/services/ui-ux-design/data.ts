import { Monitor, Smartphone, Palette, MousePointer, TestTube2, MessageSquare, Search, Layout, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake, Users, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "UI/UX",
  titleBottom: "Design",
  description: "Deepen engagement and lift revenue through distinguished UI and UX. From greenfield launches to refinements of mature products, we deliver uncompromising, user-centered craft.",
  heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "UI/UX design services",
  topBadge: { icon: null as any, title: "Pixel Perfect", subtitle: "Design systems", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "95% Score", subtitle: "Usability testing", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities shaped around your commercial objectives." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A field-proven framework that safeguards quality, complete transparency, and reliable delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built With", headingWhite: "Contemporary Tooling", subtitle: "Elite-grade tools and frameworks form the foundation of every solution we deliver." };
export const ctaProps: CTAProps = { headingTop: "Is It Time to Transform Your", headingBottom: "User Experience?", description: "Partner with us on interfaces your users will love—effortlessly intuitive, inclusive, and unmistakably true to your brand identity." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Research",
    description:
      "Map goals, monetization model, audience, category dynamics, and rival positioning.",
    icon: Search,
  },
  {
    step: "02",
    title: "Wireframing",
    description:
      "Produce granular wireframes that chart journeys and coalesce into fully interactive prototypes.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Visual Style",
    description:
      "Shape two or three strategic directions spanning color, typography, and supporting imagery.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Design & Delivery",
    description:
      "Deliver finished product design that respects every guideline while integrating icons, palette, type, and logo execution.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing & Iteration",
    description:
      "Facilitate usability studies with live users, then iterate using qualitative feedback paired with quantitative signals.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Developer Handoff",
    description:
      "Supply exhaustive specs, production-ready assets, living design-system documentation, and component libraries.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "User Interface & Experience Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` },
      { name: "Illustrator", logo: `${DEVICON}/illustrator/illustrator-original.svg` },
      { name: "InDesign", logo: `${DEVICON}/indesign/indesign-original.svg` }
    ],
  },
  {
    label: "Wireframing & Interactive Prototyping",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "Wireframe.cc", logo: `${DEVICON}/wireframecc/wireframecc-original.svg` },
      { name: "Mockflow", logo: `${DEVICON}/mockflow/mockflow-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` }
    ],
  },
  {
    label: "Team Collaboration & Workflow",
    items: [
      { name: "Zeplin", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Abstract", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` }
    ],
  },
  {
    label: "Motion Design & Animation",
    items: [
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
      { name: "Adobe Animate", logo: `${DEVICON}/adobeanimate/adobeanimate-original.svg` },
      { name: "Lottie", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Blender", logo: `${DEVICON}/blender/blender-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` }
    ],
  },
  {
    label: "Frontend & Developer Handoff",
    items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Bootstrap", logo: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "World-Class Design Standards",
    description:
      "Meticulous craftsmanship anchored in global best practice—showcase-ready work with international appeal.",
  },
  {
    icon: TrendingUp,
    title: "Forward-Looking Delivery & ROI",
    description:
      "Disciplined discovery that charts markets and steers strategy toward next-generation solutions with demonstrably stronger returns.",
  },
  {
    icon: Zap,
    title: "Your Priorities, Front and Center",
    description:
      "We absorb your vision and operating model to shape outcomes that stay unmistakably driven by business imperatives.",
  },
  {
    icon: HeartHandshake,
    title: "Thinking Beyond the Conventional",
    description:
      "We refuse to limit our lens to tools or passing fads—choosing instead distinctive methods and a tailored design strategy.",
  },];
