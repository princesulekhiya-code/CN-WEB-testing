import { RefreshCcw, Workflow, Bot, Database, Cloud, BarChart3, Settings, Code2, ShieldCheck, Rocket, Zap, Award, TrendingUp, HeartHandshake, Stethoscope, ShoppingCart, CreditCard, Truck, GraduationCap, Building2, Gamepad2, Factory, ClipboardList, Palette, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to Services",
  titleTop: "Digital Modernization",
  titleBottom: "& Transformation",
  description: "Automate, reinvent, and modernize enterprise workflows through our digital modernization and transformation services to deliver greater value to your customers.",
  heroImage: "/images/stock/stock-b48244db73.jpg",
  heroImageAlt: "Digital transformation strategy",
  topBadge: { icon: null as any, title: "360° Digital", subtitle: "Full transformation", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Faster", subtitle: "Time-to-market", colorClass: "bg-emerald-500/10" },
  stats: [{ label: "Transformation Programs", value: 200, suffix: "+" },
  { label: "Client Retention Rate", value: 96, suffix: "%" },
  { label: "Delivery Acceleration", value: 3, suffix: "x" },
  { label: "Realized Cost Savings", value: 40, suffix: "%" },],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Offer", subtitle: "Full-spectrum capabilities aligned precisely with your business priorities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A proven methodology that safeguards quality, full transparency, and dependable on-time delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered on a", headingWhite: "Modern Stack", subtitle: "Best-in-class platforms and frameworks underpinning every solution we ship." };
export const ctaProps: CTAProps = { headingTop: "Ready to Transform", headingBottom: "Your Business?", description: "Unlock the impact of digital transformation with a complimentary consultation led by our senior technology advisors." };

export const services: ServiceOffering[] = [
  { icon: RefreshCcw, title: "Architecture Modernization", description: "Establish clear goals and implement microservices, cloud-native design, and monolith-to-microservices transitions to engineer systems ready for what comes next.", features: ["Microservices", "Cloud-native", "Migration"], href: "/services/digital-transformation/architecture-modernization" , logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg"], accent: "#2496ED"},
  { icon: Code2, title: "Technology Modernization", description: "Engineer micro-frontends, cloud-native development, JavaScript modernization into PWA and SPA experiences, and server-side renewal with today's strongest stacks.", features: ["Micro-frontends", "PWA/SPA", "Server-side"], href: "/services/digital-transformation/technology-modernization" , logos: ["react/react-original.svg", "nodejs/nodejs-original.svg", "typescript/typescript-original.svg"], accent: "#3178C6"},
  { icon: Palette, title: "UI/UX Modernization", description: "Apply contemporary design patterns and experiences to shape compelling products that deepen engagement and strengthen business outcomes.", features: ["Design trends", "User engagement", "Modern UX"], href: "/services/digital-transformation/ui-ux-modernization" , logos: ["figma/figma-original.svg", "react/react-original.svg", "css3/css3-original.svg"], accent: "#F24E1E"},
  { icon: Workflow, title: "Integration Modernization", description: "Advance enterprise connectivity through protocol harmonization, third-party applications, and API and SDK integration for a cohesive, tailored experience.", features: ["API/SDK", "Third-party", "Protocols"], href: "/services/digital-transformation/integration-modernization" , logos: ["nodejs/nodejs-original.svg", "graphql/graphql-plain.svg", "docker/docker-original.svg"], accent: "#E10098"},
  { icon: Bot, title: "Data Engineering & AI", description: "Power real-time decisions with AI-led data architecture that accelerates data modernization and refines product customization.", features: ["AI-powered", "Real-time data", "ML pipelines"], href: "/services/digital-transformation/data-engineering-ai" , logos: ["tensorflow/tensorflow-original.svg", "python/python-original.svg", "apachespark/apachespark-original.svg"], accent: "#FF6F00"},
  { icon: Settings, title: "Product Re-engineering", description: "Elevate legacy products with new capabilities, performance tuning, and a faster path to market through disciplined re-engineering.", features: ["Legacy upgrade", "Performance", "Speed-to-market"], href: "/services/digital-transformation/product-re-engineering" , logos: ["react/react-original.svg", "typescript/typescript-original.svg", "nextjs/nextjs-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Discover", description: "Map business priorities, sharpen modernization objectives, and align on transparent, measurable business outcomes.", icon: ClipboardList },
  { step: "02", title: "Elaborate", description: "Shape the optimal approach to application modernization and orchestrate the teams and resources the initiative requires.", icon: Settings },
  { step: "03", title: "Strategy", description: "Produce a digital transformation roadmap with expert-led strategy that defines how delivery will proceed.", icon: BarChart3 },
  { step: "04", title: "Build", description: "Execute the roadmap through agile delivery, CI/CD automation, and mature DevOps practices.", icon: Code2 },
  { step: "05", title: "Operate", description: "Modernize legacy applications, move confidently into production, and sustain the operational support you rely on.", icon: ShieldCheck },
  { step: "06", title: "Evolve", description: "Maintain momentum through continuous improvement, emerging technology adoption, user insight, and responsiveness to market shifts.", icon: Rocket },];

export const techCategories: TechCategory[] = [
  { label: "Frontend", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    { name: ".NET Core", logo: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
  ] },
  { label: "Cloud", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  ] },
  { label: "Data & AI", items: [
    { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
    { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
    { name: "Apache Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
    { name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "Digital Transformation Is",
  headingHighlight: "Non-Negotiable",
  subtitle: "Modernize legacy systems, automate workflows, and build digital-first capabilities that keep your business competitive and resilient.",
  image: "/images/stock/stock-dea3056761.jpg",
  imageAlt: "Digital transformation in enterprise",
  items: [
    { title: "Legacy System Modernization", description: "Replace aging monoliths with cloud-native architectures. Reduce maintenance costs by 60%, improve performance, and unlock the agility that modern business demands." },
    { title: "Process Automation at Scale", description: "Automate manual workflows across HR, finance, operations, and customer service. RPA and intelligent automation free hundreds of employee hours per month." },
    { title: "Data-Driven Decision Culture", description: "Break down data silos with unified platforms. Real-time dashboards, predictive analytics, and self-service BI empower every team to make informed decisions." },
    { title: "Enhanced Customer Experience", description: "Omnichannel digital touchpoints — apps, portals, chatbots, and IoT — create seamless customer journeys that increase satisfaction and lifetime value." },
    { title: "Operational Resilience", description: "Cloud infrastructure, disaster recovery, and distributed systems ensure business continuity. Weather disruptions, scale during peaks, and operate from anywhere." },
    { title: "Innovation Velocity", description: "Modern tech stacks and DevOps practices cut release cycles from months to days. Experiment, iterate, and respond to market changes before competitors can react." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Minimal Operational Disruption", description: "Leave existing assets and legacy code unaltered for the full duration of the migration." },
  { icon: TrendingUp, title: "Compressed Time-to-Market", description: "Responsive, expertly managed cloud services that heighten agility and shorten the path to value." },
  { icon: Zap, title: "Precision Refactoring", description: "Lower risk by refactoring applications in carefully scoped cohorts with exacting control." },
  { icon: HeartHandshake, title: "Reliable On-Time Delivery", description: "Flexible, scalable tooling that pairs speed-to-value with leaner ongoing operating expense." },];

export const caseStudyProjects: Project[] = [
  {
    id: "factoryiq-dt",
    tag: "Digital Factory",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    company: "FactoryIQ",
    industry: "Manufacturing",
    headline: "Digital transformation of 12 production lines with IoT and predictive maintenance.",
    challenge: "Legacy systems causing unplanned downtime. Siloed production data across facilities.",
    solution: "IoT sensors, real-time dashboards, predictive ML models, and unified data platform replacing legacy systems.",
    duration: "100 days",
    metrics: [
      {
        value: 45,
        suffix: "%",
        label: "Downtime reduced"
      },
      {
        value: 30,
        suffix: "%",
        label: "OEE improvement"
      },
      {
        value: 12,
        suffix: " lines",
        label: "Digitized"
      }
    ],
    timeline: [
      {
        phase: "Legacy Assessment",
        detail: "Audit existing systems, identify gaps"
      },
      {
        phase: "IoT Deployment",
        detail: "1000+ sensors, edge computing"
      },
      {
        phase: "Platform Migration",
        detail: "Legacy to cloud-native transition"
      },
      {
        phase: "Digital Operations",
        detail: "Automated workflows, dashboards"
      }
    ],
    accentColor: "#f97316"
  },
  {
    id: "fleettrack-dt",
    tag: "Fleet Digitization",
    tagColor: "bg-[#4EB3E8]/15 text-[#4a7db8] border-[#4EB3E8]/30",
    company: "FleetTrack",
    industry: "Transport & Logistics",
    headline: "IoT-powered fleet management transforming manual logistics into data-driven operations.",
    challenge: "No real-time visibility. Manual route planning. High fuel costs across 2000+ vehicles.",
    solution: "GPS + IoT integration, AI route optimization, predictive maintenance, reducing fuel costs by 25%.",
    duration: "90 days",
    metrics: [
      {
        value: 25,
        suffix: "%",
        label: "Fuel cost cut"
      },
      {
        value: 2000,
        suffix: "+",
        label: "Vehicles tracked"
      },
      {
        value: 40,
        suffix: "%",
        label: "Fewer breakdowns"
      }
    ],
    timeline: [
      {
        phase: "IoT Integration",
        detail: "GPS trackers, fuel sensors"
      },
      {
        phase: "Real-Time Platform",
        detail: "Dashboard with geofencing"
      },
      {
        phase: "AI Route Engine",
        detail: "Optimization with traffic data"
      },
      {
        phase: "Predictive Maintenance",
        detail: "ML-based breakdown prediction"
      }
    ],
    accentColor: "#4EB3E8"
  }
];
