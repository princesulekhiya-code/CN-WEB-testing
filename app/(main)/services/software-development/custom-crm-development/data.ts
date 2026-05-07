import { Users, Target, BarChart3, Smartphone, Layers, Database, Plug, Cloud, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Custom CRM",
  titleBottom: "Development",
  description: "Purpose-built CRM software including modules, migration services, mobile CRM apps, custom databases, and cloud solutions — designed for your specific industry and workflows.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Custom CRM",
  topBadge: { icon: null as any, title: "Custom CRM", subtitle: "360° view", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "30% More", subtitle: "Sales efficiency", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 35, suffix: "%", label: "Avg. sales productivity lift" },
  { value: 50, suffix: "%", label: "Lead conversion improvement" },
  { value: 15, suffix: "+", label: "Industries covered" },
  { value: 8, suffix: " wk", label: "Typical MVP rollout" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Custom", headingWhite: "CRM", subtitle: "End-to-end CRM solutions — from module development and data migration to mobile CRM apps and cloud-native platforms." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "CRM", subtitle: "A structured approach from CRM audit through launch — built for accuracy, adoption, and long-term CRM success." };
export const techHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "Technologies", subtitle: "Industry-leading CRM platforms and modern development tools for reliable, scalable CRM solutions." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Custom CRM?", description: "Transform your customer relationships with a CRM built specifically for your business processes and growth goals." };

export const services: ServiceOffering[] = [{ icon: Layers, title: "CRM Module Development", titleRest: "CRM Module", titleEmphasis: "Development", description: "Custom CRM modules for sales, marketing, support, and operations — tailored to your specific business processes and customer lifecycle.", features: ["Sales automation", "Marketing tools", "Support desk"] },
  { icon: Database, title: "CRM Data Migration", titleRest: "CRM Data", titleEmphasis: "Migration", description: "Seamless migration from legacy CRM systems or spreadsheets with data mapping, cleansing, and validation for zero data loss.", features: ["Data mapping", "Zero data loss", "Legacy migration"] },
  { icon: Smartphone, title: "Mobile CRM Applications", titleRest: "Mobile CRM", titleEmphasis: "Applications", description: "Native mobile CRM apps for field sales teams with offline access, GPS tracking, and real-time sync across all devices.", features: ["Offline access", "GPS tracking", "Real-time sync"] },
  { icon: Plug, title: "CRM Integration Services", titleRest: "CRM Integration", titleEmphasis: "Services", description: "Connect your CRM with email, ERP, marketing automation, telephony, and third-party business tools for unified workflows.", features: ["Email & calendar", "ERP sync", "Marketing tools"] },
  { icon: BarChart3, title: "CRM Analytics & Reporting", titleRest: "CRM", titleEmphasis: "Analytics & Reporting", description: "Custom dashboards, sales forecasting, pipeline analytics, and automated reporting for data-driven customer relationship decisions.", features: ["Sales forecasting", "Pipeline views", "Custom reports"] },
  { icon: Cloud, title: "Cloud CRM Solutions", titleRest: "Cloud CRM", titleEmphasis: "Solutions", description: "Scalable cloud-native CRM platforms with multi-tenant architecture, auto-scaling, and enterprise-grade security and compliance.", features: ["Multi-tenant", "Auto-scaling", "Cloud-native"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "CRM Audit & Discovery", description: "Analyze your current CRM landscape, sales processes, and customer touchpoints to define the ideal system.", icon: ClipboardList },
  { step: "02", title: "CRM Architecture", description: "Design data models, workflow rules, role permissions, and integration points for your custom CRM platform.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "User-friendly interfaces with intuitive navigation, role-based dashboards, and mobile-responsive designs.", icon: Palette },
  { step: "04", title: "CRM Development", description: "Agile development of CRM modules with continuous integration, automated testing, and bi-weekly demos.", icon: Code2 },
  { step: "05", title: "Data Migration & Testing", description: "Migrate existing data with validation, run comprehensive testing, and verify all integrations work flawlessly.", icon: ShieldCheck },
  { step: "06", title: "Launch & Training", description: "Production deployment with user onboarding, admin training, documentation, and ongoing CRM support.", icon: Rocket },];

export const techCategories: TechCategory[] = [{
    label: "CRM Platforms",
    items: [
      { name: "Salesforce", logo: `${DEVICON}/salesforce/salesforce-original.svg` },
      { name: "HubSpot", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Zoho", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Dynamics 365", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Custom", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Django", logo: `${DEVICON}/django/django-plain.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Spring", logo: `${DEVICON}/spring/spring-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Twilio", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "CRM Domain Expertise", description: "Deep understanding of sales processes, marketing funnels, and customer service workflows across 15+ industries." },
  { icon: TrendingUp, title: "Measurable Sales Growth", description: "Our CRM solutions deliver an average 35% increase in sales productivity and 50% improvement in lead conversion." },
  { icon: Zap, title: "Rapid Implementation", description: "Get your custom CRM up and running in weeks, not months — with phased rollouts and iterative improvements." },
  { icon: HeartHandshake, title: "Ongoing CRM Support", description: "Continuous optimization, feature additions, and user training to ensure your CRM evolves with your business." },];
