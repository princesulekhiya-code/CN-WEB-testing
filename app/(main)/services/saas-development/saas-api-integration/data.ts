import { Globe, Share2, Webhook, Package, BookOpen, Puzzle, FileJson, Boxes, BookMarked, ShieldCheck, GitBranch, Network, Code2, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "SaaS API",
  titleBottom: "& Integration",
  description: "Expert developers integrate varied third-party APIs into your SaaS app by linking external data sources to enhance operations.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "SaaS API Integration",
  topBadge: { icon: null as any, title: "API Layer", subtitle: "REST & GraphQL", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Real-Time", subtitle: "Event-driven", colorClass: "bg-emerald-500/10" },
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

export const services: ServiceOffering[] = [{ icon: Globe, title: "REST API Development", description: "Versioned HTTP APIs with consistent error models, pagination, and idempotent writes.", features: ["OpenAPI-first", "Versioning", "Rate limits"] },
  { icon: Share2, title: "GraphQL API", description: "Typed schemas, federation-ready design, and resolver performance for complex domains.", features: ["Schema design", "DataLoader", "Subscriptions"] },
  { icon: Webhook, title: "Webhook System", description: "Signed deliveries, retries, and consumer dashboards for reliable event fan-out.", features: ["HMAC signing", "Backoff", "DLQ patterns"] },
  { icon: Package, title: "SDK Development", description: "Idiomatic client libraries with typed models, auth helpers, and release automation.", features: ["Multi-language", "Semantic versioning", "CI publish"] },
  { icon: BookOpen, title: "API Documentation Portal", description: "Developer portals with try-it consoles, changelogs, and migration guides.", features: ["Interactive docs", "Examples", "Changelog"] },
  { icon: Puzzle, title: "Third-Party Integration", description: "OAuth connectors, ETL hooks, and mapping layers to CRM, payments, and data warehouses.", features: ["OAuth flows", "Field mapping", "Monitoring"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "API Requirements", description: "Stakeholder workshops, consumer journeys, and SLAs captured as acceptance criteria.", icon: FileJson },
  { step: "02", title: "Schema Design", description: "Resource modeling, error taxonomy, and compatibility rules for safe evolution.", icon: Boxes },
  { step: "03", title: "Development", description: "Implement handlers, validation, authZ, and observability with contract tests.", icon: Code2 },
  { step: "04", title: "Documentation", description: "Reference docs, examples, and Postman collections kept in sync with releases.", icon: BookMarked },
  { step: "05", title: "Security Review", description: "Threat modeling for APIs, secret handling, and abuse protections.", icon: ShieldCheck },
  { step: "06", title: "Versioning & Release", description: "Semantic versioning, deprecation windows, and rollout plans for breaking changes.", icon: GitBranch },];

export const techCategories: TechCategory[] = [{ label: "API", items: [
      { name: "REST", logo: `${DEVICON}/rest/rest-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "gRPC", logo: `${DEVICON}/grpc/grpc-original.svg` },
      { name: "WebSocket", logo: `${DEVICON}/websocket/websocket-original.svg` },
      { name: "tRPC", logo: `${DEVICON}/trpc/trpc-original.svg` }
    ] },
  { label: "Documentation", items: [
      { name: "Swagger", logo: `${DEVICON}/swagger/swagger-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "ReadMe", logo: `${DEVICON}/readme/readme-original.svg` },
      { name: "Redoc", logo: `${DEVICON}/redoc/redoc-original.svg` },
      { name: "Stoplight", logo: `${DEVICON}/stoplight/stoplight-original.svg` }
    ] },
  { label: "Auth", items: [
      { name: "OAuth 2.0", logo: `${DEVICON}/oauth/oauth-original.svg` },
      { name: "JWT", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "API Keys", logo: `${DEVICON}/apikeys/apikeys-original.svg` },
      { name: "HMAC", logo: `${DEVICON}/hmac/hmac-original.svg` },
      { name: "mTLS", logo: `${DEVICON}/mtls/mtls-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "Newman", logo: `${DEVICON}/newman/newman-original.svg` },
      { name: "Pact", logo: `${DEVICON}/pact/pact-original.svg` },
      { name: "k6", logo: `${DEVICON}/k6/k6-original.svg` },
      { name: "Artillery", logo: `${DEVICON}/artillery/artillery-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "API Gateway", logo: `${DEVICON}/apigateway/apigateway-original.svg` },
      { name: "Rate Limiting", logo: `${DEVICON}/ratelimiting/ratelimiting-original.svg` },
      { name: "Caching", logo: `${DEVICON}/caching/caching-original.svg` },
      { name: "CDN", logo: `${DEVICON}/cdn/cdn-original.svg` },
      { name: "Load Balancing", logo: `${DEVICON}/loadbalancing/loadbalancing-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
