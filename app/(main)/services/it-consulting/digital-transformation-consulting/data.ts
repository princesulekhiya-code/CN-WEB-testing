import { Zap, Layers, Workflow, RefreshCw, Cpu, Settings, BarChart3, Rocket, GitMerge, Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "Digital Transformation",
  titleBottom: "Consulting",
  description: "Study your business processes to improve efficiency, automate workflows, and guide digital transformation initiatives that drive measurable business outcomes.",
  heroImage: "/images/stock/stock-dc982244ba.jpg",
  heroImageAlt: "Digital Transformation Consulting",
  topBadge: { icon: null as any, title: "Digital First", subtitle: "Transformation", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "15+ Years", subtitle: "Industry experts", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Clients Advised" },
  { value: 40, suffix: "+", label: "Enterprise Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Digital Transformation Consulting", headingWhite: "Services", subtitle: "End-to-end transformation advisory — from process automation to AI integration — that turns digital ambition into business reality." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Transformation", headingWhite: "Process", subtitle: "A structured approach from discovery through optimization — ensuring your transformation delivers lasting value." };
export const techHeading: ServicePageSectionProps = { headingGray: "Transformation", headingWhite: "Technologies", subtitle: "Modern platforms and tools that power successful digital transformation across automation, AI, cloud, and integration." };
export const ctaProps: CTAProps = { headingTop: "Ready to Start Your", headingBottom: "Digital Transformation?", description: "Let our consultants analyze your processes, identify automation opportunities, and build a transformation roadmap tailored to your business." };

export const services: ServiceOffering[] = [{ icon: Workflow, title: "Business Process Automation", description: "Identify, redesign, and automate repetitive workflows using RPA, AI-powered bots, and intelligent document processing to reduce costs and accelerate operations.", features: ["RPA implementation", "Workflow redesign", "Cost reduction"] },
  { icon: RefreshCw, title: "Legacy System Modernization", description: "Transform outdated monolithic systems into modern, cloud-ready architectures with microservices, APIs, and containerization — without disrupting daily operations.", features: ["Monolith to microservices", "API-first design", "Zero-downtime migration"] },
  { icon: Cpu, title: "AI & Intelligent Automation", description: "Integrate machine learning, NLP, and computer vision into your business processes to automate decision-making, predict outcomes, and enhance customer experiences.", features: ["ML integration", "NLP solutions", "Predictive analytics"] },
  { icon: Layers, title: "Data-Driven Decision Making", description: "Build data pipelines, analytics dashboards, and BI platforms that turn raw data into strategic insights for faster, evidence-based decision-making.", features: ["Data pipelines", "BI dashboards", "Strategic insights"] },
  { icon: GitMerge, title: "Change Management & Adoption", description: "People-centric change management strategies including training programs, stakeholder communication, and adoption metrics to ensure successful digital transitions.", features: ["Training programs", "Stakeholder alignment", "Adoption tracking"] },
  { icon: Zap, title: "Digital Experience Transformation", description: "Redesign customer-facing and employee-facing digital experiences with modern UX, omnichannel integration, and personalization to drive engagement and satisfaction.", features: ["UX modernization", "Omnichannel design", "Personalization"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discovery & Vision", description: "Understand your business challenges, digital maturity, and transformation goals to establish a clear vision for the digital future.", icon: Settings },
  { step: "02", title: "Current State Analysis", description: "Map existing processes, technology stack, and organizational capabilities to identify transformation opportunities and quick wins.", icon: BarChart3 },
  { step: "03", title: "Strategy Development", description: "Create a comprehensive digital transformation strategy with prioritized initiatives, timelines, and measurable KPIs.", icon: Layers },
  { step: "04", title: "Technology Selection", description: "Evaluate and recommend the right mix of platforms, tools, and technologies aligned with your strategy and budget constraints.", icon: Cpu },
  { step: "05", title: "Implementation Support", description: "Hands-on guidance during execution — vendor management, sprint planning, and quality oversight to keep transformation on track.", icon: Rocket },
  { step: "06", title: "Measure & Optimize", description: "Track transformation KPIs, gather feedback, and continuously optimize processes to maximize ROI and business impact.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [{ label: "Automation", items: [
      { name: "UiPath", logo: `${DEVICON}/uipath/uipath-original.svg` },
      { name: "Automation Anywhere", logo: `${DEVICON}/automationanywhere/automationanywhere-original.svg` },
      { name: "Power Automate", logo: `${DEVICON}/powerautomate/powerautomate-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "n8n", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "AI & Analytics", items: [
      { name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` },
      { name: "Azure AI", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "AWS SageMaker", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` }
    ] },
  { label: "Cloud & Infrastructure", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` }
    ] },
  { label: "Integration", items: [
      { name: "MuleSoft", logo: `${DEVICON}/mulesoft/mulesoft-original.svg` },
      { name: "Boomi", logo: `${DEVICON}/boomi/boomi-original.svg` },
      { name: "Workato", logo: `${DEVICON}/workato/workato-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` }
    ] },
  { label: "Low-Code/No-Code", items: [
      { name: "Power Apps", logo: `${DEVICON}/powerapps/powerapps-original.svg` },
      { name: "OutSystems", logo: `${DEVICON}/outsystems/outsystems-original.svg` },
      { name: "Mendix", logo: `${DEVICON}/mendix/mendix-original.svg` },
      { name: "Retool", logo: `${DEVICON}/retool/retool-original.svg` },
      { name: "Appian", logo: `${DEVICON}/appian/appian-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Cross-Functional Expertise", description: "Consultants with deep expertise across technology, operations, and change management — ensuring holistic transformation, not just tech upgrades." },
  { icon: Clock, title: "Phased Delivery", description: "Transformation roadmaps with quick wins in the first 90 days and strategic milestones over 12-18 months to maintain momentum and stakeholder buy-in." },
  { icon: TrendingUp, title: "Measurable ROI", description: "Every initiative tied to clear KPIs and business metrics — from cost savings and efficiency gains to revenue growth and customer satisfaction." },
  { icon: HeartHandshake, title: "People-First Approach", description: "Change management baked into every phase — because technology only transforms when people adopt it and processes actually change." },];
