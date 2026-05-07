import { BarChart3, Brain, Building2, Clock, Cpu, CreditCard, Database, Factory, Gamepad2, Glasses, GraduationCap, HeartHandshake, Layers, MessageSquare, Monitor, Rocket, Settings, ShieldCheck, ShoppingCart, Stethoscope, TrendingUp, Truck, Users } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to services",
  titleTop: "Technology",
  titleBottom: "Consulting",
  description: "Technology sets the pace for today's enterprises. We help leaders design ambitious, resilient roadmaps that accelerate growth and deepen return on investment.",
  heroImage: "/images/stock/stock-e6be3a594f.jpg",
  heroImageAlt: "Technology consulting services",
  topBadge: { icon: null as any, title: "CTO-Level", subtitle: "Strategic guidance", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "50+ Audits", subtitle: "Completed yearly", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "End-to-end capabilities shaped precisely to the priorities of your organization." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our delivery", headingWhite: "methodology", subtitle: "A proven framework that safeguards quality, transparency, and punctual delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "today's leading tools", subtitle: "Best-in-class platforms and frameworks form the foundation of every solution we deliver." };
export const ctaProps: CTAProps = { headingTop: "Move from technical uncertainty", headingBottom: "to a plan you can stand behind", description: "Whether you are modernizing a monolith or scaling a platform team, we help you stage the right investments at the right moment." };

export const services: ServiceOffering[] = [
  { icon: Database, title: "Big Data Consulting", description: "Locate vast, intricate data estates, sharpen your data roadmap, and surface intelligence you can trust when it is time to decide.", features: ["Data platform architecture", "ETL pipelines", "Analytics and insights strategy"], href: "/services/technology-consulting/big-data-consulting" , logos: ["apachespark/apachespark-original.svg", "python/python-original.svg", "apachekafka/apachekafka-original.svg"], accent: "#E25A1C"},
  { icon: Monitor, title: "Digital Experience Consulting", description: "Shape strategies for digital products built to convert—pairing immersive journeys with experiences that pull audiences in and build lasting loyalty.", features: ["UX strategy", "Conversion rate optimization", "Digital product roadmap"], href: "/services/technology-consulting/digital-experience-consulting" , logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"], accent: "#F24E1E"},
  { icon: Brain, title: "AI & Data Science Consulting", description: "Put advanced models, forecasting, and intelligent automation into production to move innovation faster and sustain a lasting competitive edge.", features: ["Machine learning models", "Predictive analytics", "Intelligent automation"], href: "/services/technology-consulting/ai-data-science-consulting" , logos: ["tensorflow/tensorflow-original.svg", "python/python-original.svg", "pytorch/pytorch-original.svg"], accent: "#FF6F00"},
  { icon: MessageSquare, title: "Chatbot Consulting", description: "Design tailored conversational assistants that strengthen support, raise conversion, and personalize every touchpoint while simplifying day-to-day operations.", features: ["Custom conversational agents", "NLP integration", "Conversation design"], href: "/services/technology-consulting/chatbot-consulting" , logos: ["python/python-original.svg", "nodejs/nodejs-original.svg", "react/react-original.svg"], accent: "#4EB3E8"},
  { icon: Cpu, title: "IoT Consulting", description: "Sharpen operations and decisions by guiding you through connected ecosystems—from architecture and device strategy through analytics at the edge and core.", features: ["IoT solution architecture", "Edge computing", "Connected device management"], href: "/services/technology-consulting/iot-consulting" , logos: ["raspberrypi/raspberrypi-original.svg", "arduino/arduino-original.svg", "python/python-original.svg"], accent: "#C51A4A"},
  { icon: Glasses, title: "Augmented Reality Consulting", description: "Pair leading AR craft with strategic counsel to launch experiences that engage users and elevate how your teams collaborate.", features: ["Immersive AR experiences", "3D visualization", "Spatial computing"], href: "/services/technology-consulting/augmented-reality-consulting" , logos: ["unity/unity-original.svg", "unrealengine/unrealengine-original.svg", "threejs/threejs-original.svg"], accent: "#000000"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assessment & Discovery", description: "A thorough review of your needs, challenges, goals, and the technology environment you operate in today.", icon: BarChart3 },
  { step: "02", title: "Strategic Planning", description: "Crafting a tailored technology blueprint with prioritized recommendations tied directly to your business outcomes.", icon: Settings },
  { step: "03", title: "Solution Design", description: "Designing end-to-end solutions across hardware, software, and UX/UI aligned with your product and brand vision.", icon: Layers },
  { step: "04", title: "Implementation", description: "Controlled integration through custom engineering, ecosystem connectivity, and careful data migration.", icon: Rocket },
  { step: "05", title: "Testing & QA", description: "Comprehensive validation so capabilities perform as expected—catching issues early and strengthening reliability.", icon: ShieldCheck },
  { step: "06", title: "Ongoing Support", description: "Proactive maintenance, observability, and continuous improvement so your technology keeps performing at its best.", icon: HeartHandshake },];

export const techCategories: TechCategory[] = [
  { label: "Cloud & DevOps", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  ] },
  { label: "AI & Data", items: [
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
    { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
    { name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` },
  ] },
  { label: "IoT & AR", items: [
    { name: "Arduino", logo: `${DEVICON}/arduino/arduino-original.svg` },
    { name: "Raspberry Pi", logo: `${DEVICON}/raspberrypi/raspberrypi-original.svg` },
    { name: "Unity", logo: `${DEVICON}/unity/unity-original.svg` },
    { name: "Unreal Engine", logo: `${DEVICON}/unrealengine/unrealengine-original.svg` },
  ] },
  { label: "Development", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    { name: "Neo4j", logo: `${DEVICON}/neo4j/neo4j-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "Tech Consulting Can",
  headingHighlight: "Save Millions",
  subtitle: "The right technology decisions today prevent costly mistakes tomorrow. Expert guidance aligns your tech strategy with business outcomes.",
  image: "/images/stock/stock-3e96fb6ff3.jpg",
  imageAlt: "Technology consulting strategy session",
  items: [
    { title: "Avoid Costly Tech Mistakes", description: "Wrong technology choices cost enterprises millions in rewrites and migrations. Expert evaluation of architectures, tools, and vendors prevents expensive dead ends." },
    { title: "Strategic Technology Roadmap", description: "Align your technology investments with 3-5 year business goals. Prioritize initiatives that deliver maximum impact and avoid shiny-object syndrome." },
    { title: "Vendor-Neutral Recommendations", description: "No hidden partnerships or reseller incentives. Get honest, unbiased advice on cloud providers, tools, and platforms based solely on your needs." },
    { title: "Technical Due Diligence", description: "Evaluating an acquisition or investment? Our deep-dive code audits, architecture reviews, and scalability assessments reveal the true state of technology assets." },
    { title: "Team & Process Optimization", description: "Identify bottlenecks in your engineering organization. Improve development workflows, CI/CD practices, and team structures for measurable velocity gains." },
    { title: "Risk Mitigation", description: "Security audits, compliance gap analysis, and disaster recovery planning protect your business from technical failures, breaches, and regulatory penalties." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Accomplished technology strategists", description: "Trusted advisors who untangle complexity with depth across industries and today's technology stacks." },
  { icon: Clock, title: "A client-first partnership", description: "We anchor every decision in your objectives—working side by side until the outcomes you expect are realized." },
  { icon: ShieldCheck, title: "Full-lifecycle partnership", description: "From discovery and planning through delivery and long-term stewardship—we stay with you at every stage." },
  { icon: HeartHandshake, title: "Value-led engagement models", description: "Advisory shaped for measurable impact—raising ROI while keeping technical depth uncompromised." },];

export const caseStudyProjects: Project[] = [
  {
    id: "pharma-tc",
    tag: "Tech Assessment",
    tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    company: "Pharma",
    industry: "Pharmaceutical",
    headline: "Technology assessment and IoT strategy for cold chain monitoring across 5 regions.",
    challenge: "Evaluating IoT vendors and architectures. Compliance requirements across multiple regions.",
    solution: "Comprehensive technology assessment, vendor evaluation, and architecture design leading to successful IoT deployment.",
    duration: "30 days",
    metrics: [
      {
        value: 5,
        suffix: " vendors",
        label: "Evaluated"
      },
      {
        value: 40,
        suffix: "%",
        label: "Cost savings identified"
      },
      {
        value: 100,
        suffix: "%",
        label: "Compliance aligned"
      }
    ],
    timeline: [
      {
        phase: "Current State Audit",
        detail: "Systems, processes, pain points"
      },
      {
        phase: "Technology Evaluation",
        detail: "Vendor comparison, POCs"
      },
      {
        phase: "Architecture Design",
        detail: "Target state, migration plan"
      },
      {
        phase: "Roadmap Delivery",
        detail: "Prioritized implementation plan"
      }
    ],
    accentColor: "#0ea5e9"
  }
];
