import {
  Waypoints,
  Blocks,
  Link2,
  Radio,
  Puzzle,
  Workflow,
  ClipboardList,
  Boxes,
  Webhook,
  Code2,
  TestTube2,
  Activity,
  Zap,
  Building2,
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
  titleTop: "Integration",
  titleBottom: "Modernization",
  description:
    "Enterprise integration with communication protocol integration, third-party apps, and API/SDK integration for seamless connectivity.",
  heroImage: "/images/stock/stock-cb6adb58aa.jpg",
  heroImageAlt: "Integration & API Modernization",
  topBadge: {
    icon: null as any,
    title: "API-First",
    subtitle: "Modern integration",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Real-Time",
    subtitle: "Event-driven",
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
  headingGray: "Integration Modernization",
  headingWhite: "Services",
  subtitle:
    "Gateways, iPaaS, streaming, and automation — engineered for reliability across your enterprise footprint.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Integration Modernization",
  headingWhite: "Process",
  subtitle: "Audit through operations — a playbook for dependable enterprise connectivity.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle:
    "API styles, iPaaS platforms, messaging, protocols, and observability for enterprise integrations.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Modernize Your",
  headingBottom: "Integrations?",
  description:
    "Connect systems, partners, and protocols with APIs and automation built for the long haul.",
};

export const services: ServiceOffering[] = [
  {
    icon: Waypoints,
    title: "API Gateway Implementation",
    description: "Centralized routing, auth, throttling, and observability for internal and partner APIs.",
    features: ["Policies", "Traffic shaping", "Observability"],
  },
  {
    icon: Blocks,
    title: "iPaaS Solutions",
    description: "Connect SaaS and on-prem systems with low-code flows, error handling, and replay.",
    features: ["Connectors", "Orchestration", "Monitoring"],
  },
  {
    icon: Link2,
    title: "Legacy System Integration",
    description:
      "Adapters, message bridges, and phased strangler patterns that respect mainframe and ERP constraints.",
    features: ["Adapters", "Batch + real-time", "Governance"],
  },
  {
    icon: Radio,
    title: "Real-time Data Sync",
    description: "Change data capture, streaming, and conflict resolution for always-current systems of record.",
    features: ["CDC", "Streams", "Idempotency"],
  },
  {
    icon: Puzzle,
    title: "Third-party Connectors",
    description: "Prebuilt and custom connectors for CRM, payments, identity, and industry-specific platforms.",
    features: ["OAuth", "Webhooks", "SDKs"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Human-in-the-loop and straight-through processing with SLAs, retries, and audit trails.",
    features: ["BPMN", "Retries", "Audit"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Integration Audit",
    description: "Map systems, protocols, data contracts, and failure modes to prioritize modernization.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Planning",
    description: "Target integration topology with gateways, buses, and ownership boundaries.",
    icon: Boxes,
  },
  {
    step: "03",
    title: "API Design",
    description: "Versioned contracts, schemas, and developer experience for producers and consumers.",
    icon: Webhook,
  },
  {
    step: "04",
    title: "Development",
    description: "Build connectors, transformations, and policies with test harnesses and environments.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing",
    description: "Contract, load, and chaos testing so integrations behave under real-world conditions.",
    icon: TestTube2,
  },
  {
    step: "06",
    title: "Monitoring & Ops",
    description: "Dashboards, alerts, and runbooks for throughput, errors, and partner SLAs.",
    icon: Activity,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "API",
    items: [
      { name: "REST", logo: `${DEVICON}/rest/rest-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "gRPC", logo: `${DEVICON}/grpc/grpc-original.svg` },
      { name: "WebSocket", logo: `${DEVICON}/websocket/websocket-original.svg` },
      { name: "OpenAPI", logo: `${DEVICON}/openapi/openapi-original.svg` },
    ],
  },
  {
    label: "iPaaS",
    items: [
      { name: "MuleSoft", logo: `${DEVICON}/mulesoft/mulesoft-original.svg` },
      { name: "Dell Boomi", logo: `${DEVICON}/dellboomi/dellboomi-original.svg` },
      { name: "Workato", logo: `${DEVICON}/workato/workato-original.svg` },
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "n8n", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "Messaging",
    items: [
      { name: "Apache Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "RabbitMQ", logo: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
      { name: "AWS SNS-SQS", logo: `${DEVICON}/awssnssqs/awssnssqs-original.svg` },
      { name: "Redis Streams", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "NATS", logo: `${DEVICON}/nats/nats-original.svg` },
    ],
  },
  {
    label: "Protocols",
    items: [
      { name: "HTTP-2", logo: `${DEVICON}/http2/http2-original.svg` },
      { name: "MQTT", logo: `${DEVICON}/mqtt/mqtt-original.svg` },
      { name: "AMQP", logo: `${DEVICON}/amqp/amqp-original.svg` },
      { name: "WebSocket", logo: `${DEVICON}/websocket/websocket-original.svg` },
      { name: "Server-Sent Events", logo: `${DEVICON}/serversentevents/serversentevents-original.svg` },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "Prometheus", logo: `${DEVICON}/prometheus/prometheus-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
      { name: "ELK", logo: `${DEVICON}/elk/elk-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Link2,
    title: "Seamless Connectivity",
    description: "Fewer manual handoffs with reliable pipes between cloud, on-prem, and partners.",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Streaming and CDC patterns that keep operational data aligned across systems.",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade",
    description: "Security, compliance, and operational controls fit for regulated environments.",
  },
  {
    icon: Webhook,
    title: "Future-Proof APIs",
    description: "Versioned contracts and gateway policies that evolve without breaking clients.",
  },
];
