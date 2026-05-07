import { Target, Compass, Map, Lightbulb, TrendingUp, Settings, BarChart3, Layers, Rocket, Users, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "IT Strategy",
  titleBottom: "& Planning",
  description: "Align technology investments with your business vision. We help you build strategic IT roadmaps and guide you to invest in the right technology at the right time.",
  heroImage: "/images/stock/stock-3fb6f2550d.jpg",
  heroImageAlt: "IT Strategy & Planning",
  topBadge: { icon: null as any, title: "IT Strategy", subtitle: "Future-proof plan", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Quick Wins", subtitle: "& long-term goals", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Clients Advised" },
  { value: 40, suffix: "+", label: "Enterprise Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "IT Strategy & Planning", headingWhite: "Services", subtitle: "Strategic advisory that transforms IT from a cost center into a competitive advantage driving measurable business outcomes." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Strategy", headingWhite: "Process", subtitle: "A proven methodology from business alignment through execution support — ensuring strategy translates into results." };
export const techHeading: ServicePageSectionProps = { headingGray: "Strategy Frameworks &", headingWhite: "Tools", subtitle: "Industry-standard frameworks and modern tools that power our strategic advisory and planning engagements." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build a", headingBottom: "Winning IT Strategy?", description: "Let our strategic advisors help you align technology with business goals — and build a roadmap you can execute with confidence." };

export const services: ServiceOffering[] = [{ icon: Compass, title: "Technology Roadmap Development", description: "Create multi-year technology roadmaps aligned with business objectives, market trends, and budget constraints to guide investment decisions strategically.", features: ["Multi-year planning", "Budget alignment", "Market analysis"] },
  { icon: Target, title: "IT Investment Planning", description: "Evaluate and prioritize technology investments with ROI analysis, TCO modeling, and risk assessment to ensure every dollar delivers measurable business value.", features: ["ROI analysis", "TCO modeling", "Risk assessment"] },
  { icon: Map, title: "Enterprise Architecture Planning", description: "Design target-state architectures for applications, data, infrastructure, and integration that support business agility and scalable growth.", features: ["Target architecture", "Integration design", "Scalability planning"] },
  { icon: Lightbulb, title: "Innovation & Emerging Tech Advisory", description: "Stay ahead with expert guidance on AI, blockchain, IoT, and cloud-native technologies — evaluating which innovations are worth investing in for your context.", features: ["AI & ML advisory", "Blockchain evaluation", "IoT readiness"] },
  { icon: TrendingUp, title: "IT Governance & Frameworks", description: "Establish governance structures, ITIL processes, and decision-making frameworks that balance speed of delivery with risk management and compliance.", features: ["ITIL alignment", "Governance design", "Decision frameworks"] },
  { icon: Layers, title: "Resource & Capacity Planning", description: "Optimize team structures, skill gaps, and capacity allocation to ensure your IT organization is staffed to deliver on strategic priorities effectively.", features: ["Skill gap analysis", "Team structuring", "Capacity optimization"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Business Alignment", description: "Understand business vision, competitive landscape, and growth targets to ensure IT strategy directly supports organizational objectives.", icon: Target },
  { step: "02", title: "Current State Assessment", description: "Map existing IT capabilities, pain points, and maturity levels across people, processes, and technology dimensions.", icon: Settings },
  { step: "03", title: "Gap Analysis", description: "Identify gaps between current state and target state, quantifying impact on business outcomes and operational efficiency.", icon: BarChart3 },
  { step: "04", title: "Strategy Formulation", description: "Develop comprehensive IT strategy with prioritized initiatives, investment timelines, and measurable success criteria.", icon: Compass },
  { step: "05", title: "Roadmap Creation", description: "Build a phased execution roadmap with milestones, dependencies, resource requirements, and risk mitigation plans.", icon: Map },
  { step: "06", title: "Execution Support", description: "Hands-on support during strategy execution with regular reviews, course corrections, and stakeholder alignment checkpoints.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Strategy Frameworks", items: [
      { name: "TOGAF", logo: `${DEVICON}/togaf/togaf-original.svg` },
      { name: "Zachman", logo: `${DEVICON}/zachman/zachman-original.svg` },
      { name: "ITIL 4", logo: `${DEVICON}/itil4/itil4-original.svg` },
      { name: "COBIT", logo: `${DEVICON}/cobit/cobit-original.svg` },
      { name: "SAFe", logo: `${DEVICON}/safe/safe-original.svg` }
    ] },
  { label: "Portfolio Management", items: [
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` },
      { name: "Azure DevOps", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "ServiceNow", logo: `${DEVICON}/servicenow/servicenow-original.svg` },
      { name: "Planview", logo: `${DEVICON}/planview/planview-original.svg` }
    ] },
  { label: "Architecture Tools", items: [
      { name: "ArchiMate", logo: `${DEVICON}/archimate/archimate-original.svg` },
      { name: "Sparx EA", logo: `${DEVICON}/sparxea/sparxea-original.svg` },
      { name: "LeanIX", logo: `${DEVICON}/leanix/leanix-original.svg` },
      { name: "Ardoq", logo: `${DEVICON}/ardoq/ardoq-original.svg` }
    ] },
  { label: "Analytics & BI", items: [
      { name: "Power BI", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Tableau", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` }
    ] },
  { label: "Cloud Platforms", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Oracle Cloud", logo: `${DEVICON}/oracle/oracle-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Executive-Level Advisors", description: "Former CIOs and CTOs who understand both boardroom priorities and engineering realities, bridging the strategy-execution gap." },
  { icon: Clock, title: "Pragmatic Planning", description: "Strategies grounded in what's achievable — considering your budget, team capabilities, and organizational readiness for change." },
  { icon: ShieldCheck, title: "Framework Expertise", description: "Deep experience with TOGAF, ITIL, COBIT, and agile frameworks adapted to your specific organizational context and culture." },
  { icon: HeartHandshake, title: "Long-Term Partnership", description: "We stay engaged through execution, providing advisory support, quarterly reviews, and strategy refinements as your business evolves." },];
