import { Lightbulb, Target, BarChart3, Users, ClipboardList, Settings, Search, ShieldCheck, Code2, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Digital Product",
  titleBottom: "Consultation",
  description: "Our tech consultants analyze your business needs and formulate strategies to build the aptest solution that benefits and accelerates your business operations.",
  heroImage: "/images/stock/stock-e1f7697fb3.jpg",
  heroImageAlt: "Digital Product Consultation",
  topBadge: { icon: null as any, title: "Strategy", subtitle: "Product roadmap", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Expert Team", subtitle: "Advisory board", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Digital Product Consultation", headingWhite: "Services", subtitle: "From needs analysis and market validation to roadmaps and feasibility — a structured consulting engagement that turns ambiguity into an executable product plan." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Consultation", headingWhite: "Process", subtitle: "A proven sequence from discovery to implementation planning — designed for clarity, stakeholder alignment, and decisions you can defend with evidence." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies &amp;", headingWhite: "Frameworks", subtitle: "Familiar tools across strategy, research, prototyping, architecture, and development — chosen to match your stack and accelerate collaboration with your teams." };
export const ctaProps: CTAProps = { headingTop: "Ready for Your", headingBottom: "Product Consultation?", description: "Partner with consultants who connect business outcomes to technology choices — and leave you with a roadmap your teams can execute with confidence." };

export const services: ServiceOffering[] = [{
    icon: ClipboardList,
    title: "Business Needs Analysis",
    description:
      "We capture goals, constraints, and success metrics across teams so product decisions align with revenue, operations, and customer outcomes. Workshops and interviews surface what truly matters before any roadmap is drawn.",
    features: ["Stakeholder alignment", "Success metrics", "Gap analysis"],
  },
  {
    icon: Settings,
    title: "Technology Strategy",
    description:
      "We translate business priorities into a pragmatic technology direction — buy vs build, platform choices, and phased adoption. The strategy balances speed, risk, and total cost of ownership for your context.",
    features: ["Platform fit", "Risk posture", "TCO view"],
  },
  {
    icon: Search,
    title: "Market Research & Validation",
    description:
      "Evidence-backed insight into users, segments, and demand signals reduces guesswork. We combine qualitative discovery with quantitative signals so you invest in problems worth solving.",
    features: ["Segment clarity", "Demand signals", "Validation plan"],
  },
  {
    icon: Target,
    title: "Product Roadmapping",
    description:
      "A sequenced roadmap ties outcomes to themes, milestones, and dependencies. We align scope to capacity so leadership sees a credible path from today to the next major release.",
    features: ["Outcome themes", "Milestone clarity", "Dependency map"],
  },
  {
    icon: BarChart3,
    title: "Competitive Analysis",
    description:
      "Structured benchmarking of positioning, features, and experience helps you differentiate with intent. We highlight whitespace, threats, and opportunities your roadmap can exploit.",
    features: ["Feature parity", "Positioning map", "Opportunity gaps"],
  },
  {
    icon: ShieldCheck,
    title: "Feasibility Assessment",
    description:
      "We stress-test ideas against technical, operational, and regulatory realities early. The result is a clear go / pivot / pause recommendation with transparent assumptions and trade-offs.",
    features: ["Technical fit", "Compliance scan", "Go-no-go clarity"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Discovery Workshops",
    description:
      "Facilitated sessions with stakeholders to align on vision, pains, and measurable outcomes. We capture workflows, constraints, and decision criteria that anchor every later deliverable.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Business Analysis",
    description:
      "We document processes, data flows, and dependencies so requirements reflect how work really happens. This reduces rework and keeps technology choices tied to operational reality.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Strategy Formulation",
    description:
      "Options are synthesized into a coherent strategy — product narrative, value proposition, and phased bets. Leaders get a concise rationale they can communicate to boards and teams.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "Technology Assessment",
    description:
      "Current systems, integrations, and skills are evaluated against the target experience. Gaps become a prioritized remediation plan rather than surprises during delivery.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Roadmap Design",
    description:
      "Themes, epics, and horizons are sequenced with dependencies and checkpoints. The roadmap is built for execution — not a slide that drifts from reality after week one.",
    icon: Target,
  },
  {
    step: "06",
    title: "Implementation Planning",
    description:
      "We define teams, governance, and delivery cadence so execution starts cleanly. Handoff includes success metrics, risks, and a path to measure value after launch.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Strategy", items: [
      { name: "Lean Canvas", logo: `${DEVICON}/leancanvas/leancanvas-original.svg` },
      { name: "Business Model Canvas", logo: `${DEVICON}/businessmodelcanvas/businessmodelcanvas-original.svg` },
      { name: "OKRs", logo: `${DEVICON}/okrs/okrs-original.svg` },
      { name: "KPIs", logo: `${DEVICON}/kpis/kpis-original.svg` }
    ] },
  { label: "Research", items: [
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "SurveyMonkey", logo: `${DEVICON}/surveymonkey/surveymonkey-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` }
    ] },
  { label: "Prototyping", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` }
    ] },
  { label: "Architecture", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` }
    ] },
  { label: "Development", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Strategic Expertise",
    description:
      "Senior consultants who have shipped products across industries — balancing vision with delivery discipline so recommendations survive contact with engineering and GTM.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Decisions are grounded in evidence — analytics, research, and benchmarks — so your roadmap reflects markets and users, not only internal opinions.",
  },
  {
    icon: Zap,
    title: "Rapid Assessment",
    description:
      "Structured artifacts and workshops compress months of drift into weeks of clarity, with actionable outputs your teams can run with immediately.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We stay engaged through execution checkpoints, helping you adapt the plan as learning and priorities evolve without losing strategic coherence.",
  },];
