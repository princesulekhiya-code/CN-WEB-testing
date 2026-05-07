import { FlaskConical, Target, Users, Zap, FileText, BarChart3, Settings, Layers, Globe, Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Palette } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mvp-development",
  backLabel: "Back to MVP Development",
  titleTop: "MVP",
  titleBottom: "Consulting",
  description: "Our qualified team of experienced engineers and business analysts will support idea conceptualization, define must-have functionality, and select the most desirable tech stack for your MVP.",
  heroImage: "/images/stock/stock-e1f7697fb3.jpg",
  heroImageAlt: "MVP Consulting & Strategy",
  topBadge: { icon: null as any, title: "MVP Strategy", subtitle: "Expert advisory", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Validated", subtitle: "Market-tested", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "MVPs Launched" },
  { value: 6, suffix: " wk", label: "Avg Launch Time" },
  { value: 85, suffix: "%", label: "Funding Success" },
  { value: 40, suffix: "+", label: "Startup Clients" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "MVP Consulting", headingWhite: "Services", subtitle: "End-to-end consulting from idea validation and market research to investor pitch preparation." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Consulting", headingWhite: "Process", subtitle: "From idea workshop to investor-ready deliverables — structured guidance at every step." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tools We", headingWhite: "Use", subtitle: "Research, planning, and presentation tools that keep deliverables clear and investors aligned." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: FlaskConical, title: "Idea Validation & Research", description: "Validate your product idea through market research, competitive analysis, and target audience identification.", features: ["Market sizing", "Competitive landscape", "User personas"] },
  { icon: Settings, title: "Technical Feasibility Assessment", description: "Evaluate technical complexity, identify risks, and recommend architecture approaches for your MVP.", features: ["Risk assessment", "Architecture options", "Complexity scoring"] },
  { icon: Layers, title: "Tech Stack Selection", description: "Choose the optimal technology stack based on requirements, team capabilities, budget, and scalability needs.", features: ["Stack comparison", "Cost analysis", "Scalability planning"] },
  { icon: BarChart3, title: "Business Model Strategy", description: "Define revenue models, pricing strategies, and unit economics that make your startup financially viable.", features: ["Revenue modeling", "Pricing strategy", "Unit economics"] },
  { icon: Globe, title: "Go-to-Market Planning", description: "Launch strategy, user acquisition channels, marketing playbooks, and growth metrics for market entry.", features: ["Launch roadmap", "Channel strategy", "Growth metrics"] },
  { icon: FileText, title: "Investor Pitch Preparation", description: "Craft compelling pitch decks, financial projections, and product demos that win investor confidence.", features: ["Pitch deck design", "Financial projections", "Demo preparation"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Idea Workshop", description: "Collaborative session to refine your vision, define the problem, and identify key assumptions to validate.", icon: ClipboardList },
  { step: "02", title: "Market Research", description: "Analyze market size, competition, target audience, and identify unique value propositions.", icon: Target },
  { step: "03", title: "Technical Assessment", description: "Evaluate feasibility, define architecture options, estimate timelines, and recommend tech stacks.", icon: Settings },
  { step: "04", title: "Strategy Definition", description: "Craft business model, pricing, revenue streams, and go-to-market strategy aligned with your goals.", icon: Layers },
  { step: "05", title: "Roadmap Creation", description: "Build a phased development roadmap with milestones, resource requirements, and budget estimates.", icon: Palette },
  { step: "06", title: "Pitch & Plan Delivery", description: "Deliver investor-ready materials, technical specifications, and a clear action plan to move forward.", icon: Rocket },];

export const techCategories: TechCategory[] = [
  { label: "Research", items: [{ name: "Statista", logo: `${DEVICON}/statista/statista-original.svg` }, { name: "Crunchbase", logo: `${DEVICON}/crunchbase/crunchbase-original.svg` }, { name: "SimilarWeb", logo: `${DEVICON}/similarweb/similarweb-original.svg` }, { name: "Google Trends", logo: `${DEVICON}/google/google-original.svg` }, { name: "CB Insights", logo: `${DEVICON}/cbinsights/cbinsights-original.svg` }] },
  { label: "Planning", items: [{ name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` }, { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` }, { name: "Linear", logo: `${DEVICON}/linear/linear-original.svg` }, { name: "Miro", logo: `${DEVICON}/miro/miro-original.svg` }, { name: "Confluence", logo: `${DEVICON}/confluence/confluence-original.svg` }] },
  { label: "Presentation", items: [{ name: "Pitch", logo: `${DEVICON}/pitch/pitch-original.svg` }, { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` }, { name: "Canva", logo: `${DEVICON}/canva/canva-original.svg` }, { name: "Google Slides", logo: `${DEVICON}/google/google-original.svg` }, { name: "Keynote", logo: `${DEVICON}/apple/apple-original.svg` }] },
  { label: "Financial", items: [{ name: "Excel", logo: `${DEVICON}/excel/excel-original.svg` }, { name: "Google Sheets", logo: `${DEVICON}/google/google-original.svg` }, { name: "QuickBooks", logo: `${DEVICON}/quickbooks/quickbooks-original.svg` }, { name: "Stripe Atlas", logo: `${DEVICON}/stripe/stripe-original.svg` }, { name: "Wave", logo: `${DEVICON}/wave/wave-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Startup Veterans", description: "Consultants who have launched and scaled startups — we understand founder challenges firsthand." },
  { icon: Settings, title: "Technical Expertise", description: "Deep engineering knowledge to assess feasibility and recommend the right architecture from day one." },
  { icon: Target, title: "Market Insight", description: "Data-driven market analysis and competitive intelligence to position your product for success." },
  { icon: HeartHandshake, title: "End-to-End Guidance", description: "From idea validation through investor pitch — one team guiding you through every step." },];
