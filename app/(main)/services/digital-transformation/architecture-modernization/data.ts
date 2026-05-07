import {
  Layers,
  Cloud,
  Router,
  Container,
  Zap,
  CloudLightning,
  ClipboardList,
  PenTool,
  Beaker,
  RefreshCw,
  ShieldCheck,
  Gauge,
  Award,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-transformation",
  backLabel: "Back to Digital Transformation",
  titleTop: "Architecture",
  titleBottom: "Modernization",
  description:
    "Transform aging monolithic systems into modern, cloud-native microservices architectures for scalability and resilience.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Architecture Modernization",
  topBadge: {
    icon: null as any,
    title: "Microservices",
    subtitle: "Modern arch",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "50% Faster",
    subtitle: "System perf",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 120, suffix: "+", label: "Transformations" },
    { value: 45, suffix: "%", label: "Efficiency Gain" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 60, suffix: "+", label: "Enterprise Clients" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Architecture Modernization",
  headingWhite: "Services",
  subtitle:
    "From decomposition to orchestration — services that modernize how your platform scales, integrates, and evolves.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Architecture Modernization",
  headingWhite: "Process",
  subtitle: "A structured path from current-state assessment to optimized, cloud-native operations.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technologies We",
  headingWhite: "Use",
  subtitle:
    "Cloud, architecture patterns, messaging, containers, and observability for resilient modernization.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Modernize Your",
  headingBottom: "Architecture?",
  description:
    "Partner with us to move from monoliths to resilient, cloud-native systems with a clear migration path.",
};

export const services: ServiceOffering[] = [
  {
    icon: Layers,
    title: "Monolithic-to-Microservices",
    description:
      "Strangle the monolith with bounded contexts, domain boundaries, and incremental extraction into independently deployable services.",
    features: ["Domain modeling", "Strangler pattern", "Independent deploys"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Design for elasticity, observability, and resilience using managed services, twelve-factor practices, and platform best practices.",
    features: ["Elastic scale", "Observability", "Resilience patterns"],
  },
  {
    icon: Router,
    title: "API Gateway Design",
    description:
      "Centralize routing, auth, rate limiting, and versioning with a gateway tier that keeps clients stable as services evolve.",
    features: ["Auth & rate limits", "Versioning", "Traffic shaping"],
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description:
      "Package and schedule workloads on Kubernetes with health checks, rolling updates, and GitOps-driven releases.",
    features: ["Kubernetes", "GitOps", "Rolling updates"],
  },
  {
    icon: Zap,
    title: "Event-Driven Architecture",
    description:
      "Decouple producers and consumers with streams, sagas, and idempotent handlers for scalable asynchronous workflows.",
    features: ["Event streams", "Sagas", "Idempotency"],
  },
  {
    icon: CloudLightning,
    title: "Serverless Architecture",
    description:
      "Offload burst workloads to functions and managed runtimes while keeping cold starts, IAM, and networking optimized.",
    features: ["Functions", "Managed runtimes", "Cost controls"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Assessment",
    description:
      "Inventory systems, dependencies, and constraints to define modernization goals and risk boundaries.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Produce target-state diagrams, service boundaries, and integration patterns aligned to your roadmap.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Proof of Concept",
    description: "Validate critical paths with a thin slice migration to de-risk performance, security, and operations.",
    icon: Beaker,
  },
  {
    step: "04",
    title: "Migration",
    description: "Execute phased cutovers with parallel runs, feature flags, and rollback plans for predictable delivery.",
    icon: RefreshCw,
  },
  {
    step: "05",
    title: "Testing",
    description: "Regression, contract, load, and chaos testing to ensure reliability before and after go-live.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Optimization",
    description: "Tune autoscaling, cost, latency, and observability for sustained performance at scale.",
    icon: Gauge,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Cloud",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    ],
  },
  {
    label: "Architecture",
    items: [
      { name: "Microservices", logo: `${DEVICON}/microservices/microservices-original.svg` },
      { name: "Event-Driven", logo: `${DEVICON}/eventdriven/eventdriven-original.svg` },
      { name: "CQRS", logo: `${DEVICON}/cqrs/cqrs-original.svg` },
      { name: "Domain-Driven", logo: `${DEVICON}/domaindriven/domaindriven-original.svg` },
      { name: "Serverless", logo: `${DEVICON}/serverless/serverless-original.svg` },
    ],
  },
  {
    label: "Messaging",
    items: [
      { name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "RabbitMQ", logo: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
      { name: "Redis Pub-Sub", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "AWS SQS", logo: `${DEVICON}/awssqs/awssqs-original.svg` },
      { name: "NATS", logo: `${DEVICON}/nats/nats-original.svg` },
    ],
  },
  {
    label: "Containers",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Helm", logo: `${DEVICON}/helm/helm-original.svg` },
      { name: "Istio", logo: `${DEVICON}/istio/istio-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "Jaeger", logo: `${DEVICON}/jaeger/jaeger-original.svg` },
      { name: "ELK Stack", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Zero-Downtime Migration",
    description: "Blue-green and canary strategies with health checks so users never feel the cutover.",
  },
  {
    icon: Rocket,
    title: "Future-Proof Design",
    description: "Patterns and boundaries that evolve with product growth instead of locking you in.",
  },
  {
    icon: TrendingUp,
    title: "Performance at Scale",
    description: "Load profiles, caching, and async flows tuned for throughput and predictable latency.",
  },
  {
    icon: Users,
    title: "Expert Architects",
    description: "Senior practitioners who have shipped complex migrations across regulated industries.",
  },
];
