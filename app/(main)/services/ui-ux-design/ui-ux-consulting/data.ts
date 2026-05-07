import { MessageCircle, Lightbulb, BarChart3, Compass, Users, FileSearch, ClipboardList, Layout, Code2, ShieldCheck, Palette, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "UI/UX",
  titleBottom: "Consulting",
  description: "Strategic UX consulting that aligns design with business goals — UX audits, design strategy, research methodology, and design system governance for products that drive measurable growth.",
  heroImage: "/images/stock/stock-3fb6f2550d.jpg",
  heroImageAlt: "UI/UX Consulting & Strategy",
  topBadge: { icon: null as any, title: "UX Advisory", subtitle: "Expert review", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "60% Better", subtitle: "User satisfaction", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "UI/UX Consulting", headingWhite: "Services", subtitle: "UX audits, design strategy, research consulting, and design system governance for business growth." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Consulting", headingWhite: "Process", subtitle: "From discovery to measurable impact — a structured consulting engagement." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies &", headingWhite: "Tools", subtitle: "Research, analytics, design, and strategy tools for comprehensive UX consulting." };
export const ctaProps: CTAProps = { headingTop: "Ready for Strategic", headingBottom: "UX Consulting?", description: "Expert UX strategy, design audits, and research consulting to drive measurable business growth." };

export const services: ServiceOffering[] = [{ icon: FileSearch, title: "UX Audit & Assessment", description: "Comprehensive heuristic evaluation, usability review, and competitive analysis of your existing digital products to identify improvement opportunities.", features: ["Heuristic review", "Competitive analysis", "Gap identification"] },
  { icon: Compass, title: "Design Strategy", description: "Align design direction with business objectives through user research, market analysis, and strategic design roadmaps.", features: ["Business alignment", "Design roadmap", "Market research"] },
  { icon: Users, title: "User Research Consulting", description: "Research methodology selection, participant recruitment, study design, and insight synthesis tailored to your product stage.", features: ["Methodology", "Recruitment", "Insight synthesis"] },
  { icon: Lightbulb, title: "Design System Consulting", description: "Establish, evaluate, or evolve your design system — token architecture, component governance, and cross-team adoption strategies.", features: ["Token architecture", "Component governance", "Adoption strategy"] },
  { icon: BarChart3, title: "Analytics & Optimization", description: "Translate analytics data into design actions — funnel analysis, conversion optimization, and experience-driven growth strategies.", features: ["Funnel analysis", "CRO strategy", "Experience growth"] },
  { icon: MessageCircle, title: "Design Team Coaching", description: "Upskill your in-house design team — process improvement, design critique frameworks, and design thinking workshops.", features: ["Process improvement", "Design critiques", "Workshops"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Assessment", description: "Deep-dive into current design maturity, business goals, user needs, and competitive landscape.", icon: ClipboardList },
  { step: "02", title: "Research & Analysis", description: "User research, analytics review, heuristic evaluation, and stakeholder alignment workshops.", icon: Layout },
  { step: "03", title: "Strategy Development", description: "Design vision, principles, success metrics, and a phased roadmap with clear milestones.", icon: Code2 },
  { step: "04", title: "Recommendations", description: "Prioritized, actionable recommendations with effort/impact assessment and implementation guidance.", icon: ShieldCheck },
  { step: "05", title: "Implementation Support", description: "Hands-on guidance during implementation — design reviews, sprint support, and quality gates.", icon: Palette },
  { step: "06", title: "Measurement & Iteration", description: "Track design KPIs, measure impact of changes, and refine strategy based on real-world results.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Research", items: [
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Dovetail", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Optimal Workshop", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Typeform", logo: `${DEVICON}/typeform/typeform-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` }
    ] },
  { label: "Design", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Sketch", logo: `${DEVICON}/sketch/sketch-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` }
    ] },
  { label: "Strategy", items: [
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "FigJam", logo: `${DEVICON}/figjam/figjam-original.svg` },
      { name: "Mural", logo: `${DEVICON}/mural/mural-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
      { name: "Confluence", logo: `${DEVICON}/confluence/confluence-original.svg` }
    ] },
  { label: "Presentation", items: [
      { name: "Pitch", logo: `${DEVICON}/pitch/pitch-original.svg` },
      { name: "Google Slides", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Loom", logo: `${DEVICON}/loom/loom-original.svg` },
      { name: "Zeroheight", logo: `${DEVICON}/zeroheight/zeroheight-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Senior Consultants", description: "10+ year UX veterans who've led design at scale — SaaS, enterprise, fintech, healthcare, and e-commerce." },
  { icon: TrendingUp, title: "Business-First Thinking", description: "Design strategy rooted in business metrics — we tie every recommendation to revenue, retention, or efficiency." },
  { icon: Zap, title: "Actionable Outcomes", description: "No fluff — prioritized recommendations with implementation roadmaps, not generic best-practice decks." },
  { icon: HeartHandshake, title: "Flexible Engagement", description: "Project-based audits, retainer consulting, or embedded team models — designed around your needs." },];
