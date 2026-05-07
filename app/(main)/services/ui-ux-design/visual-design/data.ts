import { Palette, Layers, PenTool, Type, Image as ImageIcon, Film, Search, Sparkles, BookOpen, Package, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "Visual",
  titleBottom: "Design",
  description: "Visually appealing, scalable, and risk-free design solutions and templates aligned with evolving business requirements and brand guidelines.",
  heroImage: "/images/stock/stock-ce54878e5c.jpg",
  heroImageAlt: "Visual Design & Branding",
  topBadge: { icon: null as any, title: "Pixel Perfect", subtitle: "Visual design", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Design Award", subtitle: "Excellence", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Visual Design", headingWhite: "Services", subtitle: "Identity, illustration, and motion that stay coherent as your channels multiply — from pitch decks to in-app surfaces." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Visual Design", headingWhite: "Process", subtitle: "Discovery through delivery — a creative pipeline that protects brand intent while shipping files teams can actually use." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Vector, raster, motion, and integration tools that connect visual design to living products and marketing stacks." };
export const ctaProps: CTAProps = { headingTop: "Ready to Elevate Your", headingBottom: "Visual Identity?", description: "Bring your goals and references — we will chart a visual program that scales across product, marketing, and motion without losing coherence." };

export const services: ServiceOffering[] = [{
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Logos, color logic, and verbal-visual tone that scale from pitch decks to product UI — so every touchpoint feels like one intentional brand system.",
    features: ["Logo systems", "Color & gradients", "Voice & visuals"],
  },
  {
    icon: Layers,
    title: "Design System Creation",
    description:
      "Tokens, components, and usage docs that turn one-off screens into a library teams can extend without drifting from accessibility or spacing rules.",
    features: ["Tokens & themes", "Component specs", "Governance model"],
  },
  {
    icon: PenTool,
    title: "Iconography & Illustration",
    description:
      "Custom icons and spot illustrations with consistent stroke, metaphor, and export rules — readable at 16px and expressive at hero scale.",
    features: ["Icon grids", "Spot art", "Export pipelines"],
  },
  {
    icon: Type,
    title: "Color & Typography Systems",
    description:
      "Pairings, scales, and hierarchy that survive localization and long-form content while keeping contrast ratios and readability locked in.",
    features: ["Type scales", "Pairing rules", "Contrast checks"],
  },
  {
    icon: ImageIcon,
    title: "Marketing Collateral Design",
    description:
      "Slides, one-pagers, and campaign visuals that inherit the same grid, photography direction, and CTA styling as your digital product.",
    features: ["Presentation decks", "Print & PDF", "Campaign kits"],
  },
  {
    icon: Film,
    title: "Motion Design",
    description:
      "Short loops and UI motion that reinforce hierarchy — timed for performance budgets and delivered as Lottie, video, or spec sheets for engineers.",
    features: ["Logo reveals", "UI motion", "Handoff formats"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Brand Discovery",
    description:
      "Stakeholder interviews and audits reveal positioning gaps — we capture what must stay sacred before exploring new visual directions.",
    icon: Search,
  },
  {
    step: "02",
    title: "Moodboarding",
    description:
      "Curated references align the team on lighting, texture, and energy — a shared north star before expensive illustration or photo shoots.",
    icon: ImageIcon,
  },
  {
    step: "03",
    title: "Design Exploration",
    description:
      "Multiple directions explore layout, type, and color tension; we converge through critique, not committee drift.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "System Building",
    description:
      "Components, tokens, and templates roll exploration into a scalable kit — naming and states included so adoption is straightforward.",
    icon: Layers,
  },
  {
    step: "05",
    title: "Style Guide",
    description:
      "Written rules plus do/don’t examples reduce interpretation risk — new designers and partners onboard without reverse-engineering Figma files.",
    icon: BookOpen,
  },
  {
    step: "06",
    title: "Asset Delivery",
    description:
      "Organized exports, source files, and license notes land where marketing, product, and agencies can find them on day one.",
    icon: Package,
  },];

export const techCategories: TechCategory[] = [{
    label: "Design",
    items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe Illustrator", logo: `${DEVICON}/illustrator/illustrator-original.svg` },
      { name: "Photoshop", logo: `${DEVICON}/photoshop/photoshop-original.svg` },
      { name: "InDesign", logo: `${DEVICON}/indesign/indesign-original.svg` }
    ],
  },
  {
    label: "Motion",
    items: [
      { name: "After Effects", logo: `${DEVICON}/aftereffects/aftereffects-original.svg` },
      { name: "Lottie", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Rive", logo: `${DEVICON}/rive/rive-original.svg` },
      { name: "Blender", logo: `${DEVICON}/blender/blender-original.svg` }
    ],
  },
  {
    label: "Collaboration",
    items: [
      { name: "Zeplin", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Abstract", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Brand.ai", logo: `${DEVICON}/brandai/brandai-original.svg` }
    ],
  },
  {
    label: "Prototyping",
    items: [
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Framer", logo: `${DEVICON}/framermotion/framermotion-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` }
    ],
  },
  {
    label: "Frontend Integration",
    items: [
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "CSS Variables", logo: `${DEVICON}/cssvariables/cssvariables-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Visual Excellence",
    description:
      "Craft-led art direction — we care about light, balance, and restraint so your brand feels confident, not cluttered.",
  },
  {
    icon: TrendingUp,
    title: "Brand Consistency",
    description:
      "Systems thinking ties campaigns and product together; updates propagate instead of creating silent forks of your identity.",
  },
  {
    icon: Zap,
    title: "Scalable Systems",
    description:
      "Libraries and tokens mean your next feature ships faster because the hard decisions about spacing and color are already made.",
  },
  {
    icon: HeartHandshake,
    title: "Creative Partnership",
    description:
      "We embed with marketing and product leads — workshops, async critique, and shared boards keep momentum and quality high.",
  },];
