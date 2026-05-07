import { Building2, Link2, BarChart3, Store, Workflow, ShieldCheck, ClipboardList, Boxes, Code2, GraduationCap, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "Enterprise",
  titleBottom: "eCommerce",
  description: "SEO-friendly custom enterprise portals supporting effortless business management with seamless user experience.",
  heroImage: "/images/stock/stock-6ee4b43a43.jpg",
  heroImageAlt: "Enterprise Ecommerce Solution",
  topBadge: { icon: null as any, title: "Enterprise", subtitle: "High-volume", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "PCI DSS", subtitle: "Compliant", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Enterprise eCommerce", headingWhite: "Services", subtitle: "Portals, ERP, analytics, and governance for large-scale digital commerce programs." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "Assessment through training — enterprise-grade delivery for mission-critical commerce." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Enterprise platforms, ERP systems, secure frontends, and cloud-native infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Scale With", headingBottom: "Enterprise eCommerce", description: "Deploy SEO-friendly portals, ERP-connected operations, and secure experiences your teams can run with confidence." };

export const services: ServiceOffering[] = [{ icon: Building2, title: "Enterprise Portal Development", description: "Role-based portals, approvals, and self-service workflows aligned to complex org structures.", features: ["RBAC", "Approvals", "Self-service"] },
  { icon: Link2, title: "ERP Integration", description: "Bi-directional sync for orders, inventory, finance, and master data with reliable error handling.", features: ["Real-time sync", "Idempotent jobs", "Reconciliation"] },
  { icon: BarChart3, title: "Advanced Analytics", description: "Executive and operational dashboards with cohorts, attribution, and exportable reporting.", features: ["Cohorts", "Attribution", "Exports"] },
  { icon: Store, title: "Multi-Store Management", description: "Centralized governance for brands, regions, and catalogs with localized pricing and content.", features: ["Multi-brand", "Locales", "Catalog rules"] },
  { icon: Workflow, title: "Custom Workflow Automation", description: "Automate quotes, replenishment, and exception handling with auditable business rules.", features: ["Rules engine", "Audit trail", "Notifications"] },
  { icon: ShieldCheck, title: "Compliance & Security", description: "Controls, logging, and assessments mapped to enterprise policies and regulatory needs.", features: ["SOC-ready", "Encryption", "Access logs"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Enterprise Assessment", description: "Stakeholder interviews, integration inventory, and risk register for the commerce program.", icon: ClipboardList },
  { step: "02", title: "Solution Architecture", description: "Reference architecture for portals, ERP touchpoints, and non-functional requirements.", icon: Boxes },
  { step: "03", title: "Custom Development", description: "Iterative delivery with environments, QA gates, and change control aligned to IT standards.", icon: Code2 },
  { step: "04", title: "ERP Integration", description: "Connect finance, inventory, and fulfillment systems with monitored pipelines and fallbacks.", icon: Link2 },
  { step: "05", title: "Security Audit", description: "Threat modeling, penetration testing, and control validation before go-live.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Training", description: "Production rollout, admin training, and hypercare with documented runbooks.", icon: GraduationCap },];

export const techCategories: TechCategory[] = [{ label: "Platforms", items: [
      { name: "Magento Enterprise", logo: `${DEVICON}/magento/magento-original.svg` },
      { name: "Shopify Plus", logo: `${DEVICON}/shopifyplus/shopifyplus-original.svg` },
      { name: "SAP Commerce", logo: `${DEVICON}/sapcommerce/sapcommerce-original.svg` },
      { name: "Oracle Commerce", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "Salesforce Commerce", logo: `${DEVICON}/salesforce/salesforce-original.svg` }
    ] },
  { label: "ERP", items: [
      { name: "SAP", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Oracle", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "Microsoft Dynamics", logo: `${DEVICON}/microsoftdynamics/microsoftdynamics-original.svg` },
      { name: "NetSuite", logo: `${DEVICON}/netsuite/netsuite-original.svg` },
      { name: "Odoo", logo: `${DEVICON}/odoo/odoo-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Security", items: [
      { name: "SOC 2", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "PCI DSS", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "GDPR", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "ISO 27001", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "HIPAA", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
