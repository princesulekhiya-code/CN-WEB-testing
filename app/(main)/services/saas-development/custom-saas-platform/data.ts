import { Layers, LayoutDashboard, UserPlus, ShieldCheck, Tag, Settings, ClipboardList, Boxes, Rocket, Puzzle, TestTube2, Gauge, Cloud, Cpu, Zap, Award, TrendingUp, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "Custom",
  titleBottom: "SaaS Platform",
  description: "Tech-advanced developers leverage the latest tools and technologies to turn ideas into reality with custom SaaS platform development.",
  heroImage: "/images/stock/stock-096e5f6a26.jpg",
  heroImageAlt: "Custom SaaS Platform",
  topBadge: { icon: null as any, title: "Custom SaaS", subtitle: "Full platform", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "SOC 2 Ready", subtitle: "Enterprise-grade", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Platform Uptime" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering strategy, build, and operations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Don&apos;t let your idea remain just an idea. Partner with us to transform it into a revenue-generating SaaS reality." };

export const services: ServiceOffering[] = [{ icon: Layers, title: "Multi-Tenant Architecture", description: "Isolate customer data and scale tenants on shared infrastructure with strong boundaries and operational efficiency.", features: ["Tenant isolation", "Resource pooling", "Per-tenant config"] },
  { icon: LayoutDashboard, title: "Custom Dashboard", description: "Role-aware analytics and controls so admins and end users see the metrics and actions that matter.", features: ["Widgets & KPIs", "Saved views", "Real-time data"] },
  { icon: UserPlus, title: "Onboarding Flows", description: "Guided signup, verification, and product tours that reduce time-to-value and support load.", features: ["Step-by-step UX", "Email verification", "In-app guidance"] },
  { icon: ShieldCheck, title: "Role-Based Access", description: "Fine-grained permissions and policies aligned to your org structure and compliance needs.", features: ["RBAC/ABAC", "Audit trails", "SSO-ready"] },
  { icon: Tag, title: "White-Label Solutions", description: "Your brand, domain, and theme across the app so partners can resell without engineering overhead.", features: ["Custom domains", "Theming", "Partner portals"] },
  { icon: Settings, title: "Admin Panel Development", description: "Internal consoles for billing, support, feature flags, and operations with safe guardrails.", features: ["User management", "Feature flags", "Ops tooling"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Requirements Analysis", description: "Workshops, user journeys, and success metrics to align scope with business outcomes.", icon: ClipboardList },
  { step: "02", title: "Architecture Design", description: "Multi-tenant topology, data model, APIs, and scaling strategy documented for build and review.", icon: Boxes },
  { step: "03", title: "MVP Development", description: "Ship a thin vertical slice with core workflows, auth, and deploy pipelines in place.", icon: Rocket },
  { step: "04", title: "Feature Expansion", description: "Iterative delivery with analytics, integrations, and UX polish based on real usage.", icon: Puzzle },
  { step: "05", title: "QA & Testing", description: "Automated and exploratory testing across tenants, performance, and security scenarios.", icon: TestTube2 },
  { step: "06", title: "Launch & Scale", description: "Production hardening, observability, and capacity planning as usage grows.", icon: Gauge },];

export const techCategories: TechCategory[] = [{ label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` }
    ] },
  { label: "Database", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "CockroachDB", logo: `${DEVICON}/cockroachdb/cockroachdb-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "DigitalOcean", logo: `${DEVICON}/digitalocean/digitalocean-original.svg` },
      { name: "Heroku", logo: `${DEVICON}/heroku/heroku-original.svg` }
    ] },
  { label: "DevOps", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "ArgoCD", logo: `${DEVICON}/argocd/argocd-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
