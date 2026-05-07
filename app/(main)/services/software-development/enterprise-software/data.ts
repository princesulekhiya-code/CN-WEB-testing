import { Building2, Shield, Network, Lock, Smartphone, BarChart3, Workflow, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Enterprise",
  titleBottom: "Software",
  description: "Innovative enterprise solutions for web, mobile, and desktop — including enterprise mobility, role-based\r\n                workflows, audit trails, and seamless integration with your existing business systems.",
  heroImage: "/images/stock/stock-6ee4b43a43.jpg",
  heroImageAlt: "Enterprise",
  topBadge: { icon: null as any, title: "Enterprise", subtitle: "Mission-critical", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Compliant", subtitle: "SOC 2 & HIPAA", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Enterprise Software", headingWhite: "Services", subtitle: "ERP, mobility, BI, workflow automation, integration, and compliance — end-to-end solutions that align technology\r\n          with how your organization operates." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Enterprise Software", headingWhite: "Process", subtitle: "From discovery to deployment — a structured approach that balances security, usability, and integration at\r\n            enterprise scale." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Enterprise platforms, backend stacks, frontends, databases, and cloud infrastructure we use to deliver reliable,\r\n          integrated software." };
export const ctaProps: CTAProps = { headingTop: "Ready to Transform Your", headingBottom: "Enterprise?", description: "Partner with us to build enterprise software that drives operational efficiency, ensures compliance, and scales with\r\n          your growth." };

export const services: ServiceOffering[] = [{
    icon: Building2,
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Custom ERP systems that unify finance, HR, inventory, and operations into a single source of truth for your organization.",
    features: ["Multi-module", "Real-time data", "Custom workflows"],
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobility Solutions",
    description:
      "Secure mobile applications for enterprise teams — field operations, sales, and remote workforce management on any device.",
    features: ["MDM ready", "Offline sync", "Biometric auth"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    description:
      "Executive dashboards, automated reports, and data warehousing that transform raw data into strategic business decisions.",
    features: ["Live dashboards", "Automated reports", "Data warehousing"],
  },
  {
    icon: Workflow,
    title: "Workflow Management Systems",
    description:
      "Digital workflow automation with approval chains, SLA tracking, and audit trails for regulated enterprise environments.",
    features: ["Approval chains", "SLA tracking", "Audit trails"],
  },
  {
    icon: Network,
    title: "Enterprise Integration (ESB/iPaaS)",
    description:
      "Connect ERP, CRM, HRMS, and third-party systems with enterprise service bus or iPaaS solutions for seamless data flow.",
    features: ["ESB/iPaaS", "API gateway", "Event-driven"],
  },
  {
    icon: Lock,
    title: "Compliance & Governance Software",
    description:
      "Software that enforces regulatory compliance — SOX, HIPAA, GDPR — with automated controls, logging, and reporting.",
    features: ["SOX/HIPAA/GDPR", "Auto controls", "Audit logging"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Enterprise Discovery",
    description:
      "Stakeholder interviews, process mapping, and requirements definition across all business units and departments.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture & Security",
    description:
      "Enterprise-grade architecture with role-based access, data encryption, and compliance-first design principles.",
    icon: Settings,
  },
  {
    step: "03",
    title: "UX for Enterprise",
    description:
      "Intuitive interfaces designed for complex workflows — role-specific dashboards, bulk operations, and accessibility compliance.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Modular Development",
    description:
      "Component-based development with independent modules that can be deployed, scaled, and maintained individually.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Integration Testing",
    description:
      "End-to-end testing across all integrated systems, load testing for peak usage, and security penetration testing.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment & Training",
    description:
      "Phased rollout with user training, admin documentation, and dedicated support during and after go-live.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{
    label: "Enterprise Platforms",
    items: [
      { name: "SAP", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Oracle", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "Microsoft Dynamics", logo: `${DEVICON}/microsoftdynamics/microsoftdynamics-original.svg` },
      { name: "Salesforce", logo: `${DEVICON}/salesforce/salesforce-original.svg` },
      { name: "ServiceNow", logo: `${DEVICON}/servicenow/servicenow-original.svg` }
    ],
  },
  { label: "Backend", items: [
      { name: "Java Spring", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: "Python Django", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Blazor", logo: `${DEVICON}/blazor/blazor-original.svg` },
      { name: "Electron", logo: `${DEVICON}/electron/electron-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "SQL Server", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Oracle DB", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` }
    ] },
  {
    label: "Infrastructure",
    items: [
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` }
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Enterprise Experience",
    description:
      "Proven track record delivering mission-critical software for Fortune 500 companies and large organizations.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description:
      "Every solution built with enterprise security standards — encryption, RBAC, audit logging, and compliance frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Systems designed to handle thousands of concurrent users, millions of transactions, and petabytes of data.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support Teams",
    description:
      "24/7 support with dedicated account managers, SLA-backed response times, and proactive monitoring.",
  },];
