import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Server, Database, Cloud, Shield, Terminal, Workflow, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire Back-End",
  titleBottom: "Developers",
  description: "Strengthen application performance, security, and scalability with backend engineers experienced in Node.js, Python, .NET, Java, and modern API architectures.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "Backend Development",
  topBadge: { icon: null as any, title: "Backend Pros", subtitle: "Node, Python, Go", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Senior Level", subtitle: "5+ years exp", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Backend Devs in Network" },
  { value: 48, suffix: "hr", label: "Avg. Onboarding Time" },
  { value: 500, suffix: "+", label: "APIs & Services Shipped" },
  { value: 99, suffix: "%", label: "SLA Uptime Commitment" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Back-End", headingWhite: "Developers for Hire", subtitle: "Specialists across every major backend language and framework — from REST APIs to distributed microservices." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire", headingWhite: "Backend Developers", subtitle: "From system design assessment to sprint delivery — a structured process for backend talent acquisition." };
export const techHeading: ServicePageSectionProps = { headingGray: "Backend", headingWhite: "Technologies", subtitle: "Languages, frameworks, databases, and infrastructure tools our backend developers master." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Backend Developers?", description: "Get senior Node.js, Python, Java, and .NET engineers onboarded to your team within 48 hours." };

export const services: ServiceOffering[] = [{ icon: Server, title: "Node.js Developers", description: "Full-stack JavaScript engineers building scalable APIs, real-time applications, and microservices with Express, Fastify, and NestJS.", features: ["Express & NestJS", "Real-time apps", "Microservices"] },
  { icon: Terminal, title: "Python Developers", description: "Python specialists for web backends (Django/Flask), data pipelines, machine learning integrations, and automation scripts.", features: ["Django & Flask", "ML integration", "Data pipelines"] },
  { icon: Shield, title: ".NET Developers", description: "Enterprise .NET Core engineers building secure, high-performance APIs and microservices for mission-critical applications.", features: [".NET Core", "C#", "Enterprise-grade"] },
  { icon: Database, title: "Java Developers", description: "Java Spring Boot experts delivering scalable enterprise backends, distributed systems, and cloud-native microservices.", features: ["Spring Boot", "Distributed systems", "Cloud-native"] },
  { icon: Cloud, title: "Go Developers", description: "Golang engineers building high-concurrency backends, CLI tools, and cloud infrastructure services with minimal resource footprint.", features: ["High concurrency", "Cloud infra", "Performance"] },
  { icon: Workflow, title: "API & Integration Developers", description: "REST, GraphQL, and gRPC specialists designing versioned APIs with documentation, rate limiting, and consumer-driven contracts.", features: ["REST & GraphQL", "gRPC", "API design"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define Backend Needs", description: "Share your architecture requirements, preferred languages, cloud infrastructure, and scalability expectations.", icon: ClipboardList },
  { step: "02", title: "Review Profiles", description: "Receive profiles with system design experience, code contributions, and infrastructure expertise matching your stack.", icon: Settings },
  { step: "03", title: "Technical Assessment", description: "System design interviews, code reviews, and architecture discussions to validate problem-solving depth.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Backend developers integrated with your repos, CI/CD pipelines, and infrastructure within 48 hours.", icon: Rocket },
  { step: "05", title: "Sprint Delivery", description: "API development, database optimization, and infrastructure work delivered in agile sprints with full test coverage.", icon: Code2 },
  { step: "06", title: "Scale & Optimize", description: "Add database, DevOps, or security specialists as your backend complexity and traffic demands grow.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{
    label: "Languages",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "C#/.NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Ruby", logo: `${DEVICON}/ruby/ruby-original.svg` },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Express", logo: `${DEVICON}/express/express-original.svg` },
      { name: "NestJS", logo: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: "Django", logo: `${DEVICON}/django/django-plain.svg` },
      { name: "Spring Boot", logo: `${DEVICON}/spring/spring-original.svg` },
      { name: "FastAPI", logo: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-original.svg` },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    ],
  },
  {
    label: "API & Messaging",
    items: [
      { name: "REST", logo: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "gRPC", logo: `${DEVICON}/grpc/grpc-original.svg` },
      { name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "RabbitMQ", logo: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
      { name: "WebSockets", logo: `${DEVICON}/socketio/socketio-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Senior Backend Engineers", description: "Pre-vetted architects and engineers with 5+ years building scalable, production-grade backend systems." },
  { icon: TrendingUp, title: "Scalable Architecture", description: "Developers who design for scale — microservices, event-driven patterns, and distributed systems expertise." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile to productive team member in under 48 hours with full infrastructure access." },
  { icon: HeartHandshake, title: "DevOps Integration", description: "Backend developers who understand CI/CD, containerization, and infrastructure — not just application code." },];
