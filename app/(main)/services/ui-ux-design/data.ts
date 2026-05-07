import { Award, Code2, HeartHandshake, Layers, Layout, MessageSquare, Monitor, MousePointer, Palette, Rocket, Search, ShieldCheck, Smartphone, TestTube2, TrendingUp, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "UI/UX",
  titleBottom: "Design",
  description: "Deepen engagement and lift revenue through distinguished UI and UX. From greenfield launches to refinements of mature products, we deliver uncompromising, user-centered craft.",
  heroImage: "/images/stock/stock-6f9a39897b.jpg",
  heroImageAlt: "UI/UX design services",
  topBadge: { icon: null as any, title: "Pixel Perfect", subtitle: "Design systems", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "95% Score", subtitle: "Usability testing", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities shaped around your commercial objectives." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A field-proven framework that safeguards quality, complete transparency, and reliable delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built With", headingWhite: "Contemporary Tooling", subtitle: "Elite-grade tools and frameworks form the foundation of every solution we deliver." };
export const ctaProps: CTAProps = { headingTop: "Is It Time to Transform Your", headingBottom: "User Experience?", description: "Partner with us on interfaces your users will love—effortlessly intuitive, inclusive, and unmistakably true to your brand identity." };

export const services: ServiceOffering[] = [
  { icon: Monitor, title: "UI/UX Web Design", description: "Seasoned specialists craft memorable experiences that crystallize your brand and enrich how people discover, use, and return to your product.", features: ["Web interface design", "Brand identity", "User engagement"], href: "/services/ui-ux-design/web-design" , logos: ["figma/figma-original.svg", "html5/html5-original.svg", "css3/css3-original.svg"], accent: "#F24E1E"},
  { icon: Smartphone, title: "UI/UX Mobile Design", description: "Forward-looking layouts across every screen and OS—calibrated to your goals and built to widen your audience.", features: ["iOS & Android", "Cross-platform", "Mobile-first"], href: "/services/ui-ux-design/mobile-design" , logos: ["figma/figma-original.svg", "sketch/sketch-original.svg", "react/react-original.svg"], accent: "#FF7262"},
  { icon: Palette, title: "Visual Design", description: "Polished, extensible, low-friction outputs and templates that scale gracefully as your business evolves.", features: ["Design systems", "Brand guidelines", "Visual identity"], href: "/services/ui-ux-design/visual-design" , logos: ["photoshop/photoshop-original.svg", "illustrator/illustrator-plain.svg", "figma/figma-original.svg"], accent: "#31A8FF"},
  { icon: MousePointer, title: "Interaction Design", description: "Human-centered interfaces that establish instant clarity by blending trusted patterns with leading-edge interaction craft.", features: ["Micro-interactions", "Animations", "User flows"], href: "/services/ui-ux-design/interaction-design" , logos: ["aftereffects/aftereffects-original.svg", "figma/figma-original.svg", "javascript/javascript-original.svg"], accent: "#9999FF"},
  { icon: TestTube2, title: "Design Testing", description: "Evidence-based, build-ready solutions verified end-to-end so they meet both operational standards and business expectations.", features: ["Usability testing", "A/B testing", "User feedback"], href: "/services/ui-ux-design/design-testing" , logos: ["figma/figma-original.svg", "react/react-original.svg", "storybook/storybook-original.svg"], accent: "#FF4785"},
  { icon: MessageSquare, title: "UI/UX Consulting", description: "Advisors analyze your users and business context to propose inventive paths that slot cleanly into Android and iOS ecosystems.", features: ["UX audit", "Strategy consulting", "Design review"], href: "/services/ui-ux-design/ui-ux-consulting" , logos: ["figma/figma-original.svg", "sketch/sketch-original.svg", "nodejs/nodejs-original.svg"], accent: "#4EB3E8"},
];

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


export const whyNeedProps: WhyNeedProps = {
  heading: "Great Design Can Be",
  headingHighlight: "Profit-Driving",
  subtitle: "Every dollar invested in UX returns $100. Strategic design reduces development costs, increases conversions, and builds lasting brand loyalty.",
  image: "/images/stock/stock-be564387dd.jpg",
  imageAlt: "UI UX design process",
  items: [
    { title: "Higher Conversion Rates", description: "Well-designed interfaces guide users toward action. Strategic UX can boost conversions by 200-400% through clearer navigation, better CTAs, and reduced friction." },
    { title: "Reduced Development Costs", description: "Design-first approach catches usability issues before a single line of code is written. Fixing problems in design costs 10x less than fixing them in development." },
    { title: "Stronger Brand Perception", description: "Consistent, polished design signals professionalism and builds trust. Users form opinions about your brand in 0.05 seconds — make every pixel count." },
    { title: "Lower Support Costs", description: "Intuitive interfaces mean fewer confused users, fewer support tickets, and lower training costs. Great UX is the best documentation your product can have." },
    { title: "Increased User Retention", description: "Apps with superior UX see 3x higher retention rates. Delightful interactions, smooth animations, and thoughtful micro-interactions keep users coming back." },
    { title: "Data-Driven Design Decisions", description: "User research, A/B testing, and analytics-informed iterations ensure every design choice is validated by real behavior, not assumptions." },
  ],
};

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

export const caseStudyProjects: Project[] = [
  {
    id: "edtech-ux",
    tag: "EdTech Design",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "EdTech",
    industry: "Education Technology",
    headline: "User-centered design for AI-driven e-learning platform achieving 3x engagement.",
    challenge: "Complex learning paths needed intuitive navigation. Balancing gamification with academic rigor.",
    solution: "Research-driven UX with adaptive interfaces, personalized dashboards, and gamification elements that boosted engagement 3x.",
    duration: "30 days",
    metrics: [
      {
        value: 3,
        suffix: "x",
        label: "Engagement increase"
      },
      {
        value: 45,
        suffix: "%",
        label: "Learner improvement"
      },
      {
        value: 92,
        suffix: "%",
        label: "User satisfaction"
      }
    ],
    timeline: [
      {
        phase: "User Research",
        detail: "Interviews, personas, journey mapping"
      },
      {
        phase: "Wireframes",
        detail: "Low-fidelity flows and navigation"
      },
      {
        phase: "Visual Design",
        detail: "High-fidelity screens and design system"
      },
      {
        phase: "Usability Testing",
        detail: "User testing and iteration"
      }
    ],
    accentColor: "#8b5cf6"
  }
];
