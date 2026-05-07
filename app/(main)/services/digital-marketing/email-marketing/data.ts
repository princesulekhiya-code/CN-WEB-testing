import {
  Megaphone,
  Workflow,
  Newspaper,
  Timer,
  ListFilter,
  SplitSquareHorizontal,
  UserSearch,
  Target,
  Layout,
  Rocket,
  LineChart,
  ShieldCheck,
  Sparkles,
  Scale,
  TrendingUp,
} from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-marketing",
  backLabel: "Back to Digital Marketing",
  titleTop: "Email",
  titleBottom: "Marketing",
  description: "Automated email sequences, campaigns, drip flows",
  heroImage: "/images/stock/stock-fcbdc3381c.jpg",
  heroImageAlt: "Email Marketing Automation",
  topBadge: { icon: null as any, title: "Automated", subtitle: "Drip campaigns", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Open Rate", subtitle: "Above average", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Service",
  headingWhite: "Offerings",
  subtitle:
    "Full-funnel email programs from strategy and creative through automation, testing, and ongoing optimization.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our",
  headingWhite: "Process",
  subtitle: "A structured path from insight to inbox — with quality gates at every step.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Platforms, automation, design QA, and analytics we use to ship reliable email programs.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Transform Your",
  headingBottom: "Email Strategy?",
  description: "Partner with specialists who treat email as a growth channel — from first send to long-term retention.",
};

export const services: ServiceOffering[] = [
  {
    icon: Megaphone,
    title: "Email Campaign Management",
    description:
      "End-to-end planning, scheduling, and execution of broadcast and promotional sends with clear goals and measurable outcomes.",
    features: ["Calendar & cadence", "QA & approvals", "Send-time optimization"],
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description:
      "Behavior-triggered journeys, lead scoring handoffs, and CRM-connected workflows that move prospects through the funnel.",
    features: ["Triggers & branches", "Lead scoring", "CRM sync"],
  },
  {
    icon: Newspaper,
    title: "Newsletter Design & Management",
    description: "On-brand templates, responsive HTML, and editorial rhythm so every issue reinforces trust and drives clicks.",
    features: ["Template systems", "Editorial calendar", "Mobile-first HTML"],
  },
  {
    icon: Timer,
    title: "Drip Campaign Development",
    description:
      "Multi-step nurture sequences timed to intent — onboarding, re-engagement, and post-purchase paths that feel personal.",
    features: ["Sequence mapping", "Dynamic content", "Exit rules"],
  },
  {
    icon: ListFilter,
    title: "List Building & Segmentation",
    description: "Healthy lists, suppression hygiene, and segments based on behavior, lifecycle stage, and campaign engagement.",
    features: ["Double opt-in", "Sunset policies", "RFM-style splits"],
  },
  {
    icon: SplitSquareHorizontal,
    title: "A/B Testing & Optimization",
    description: "Subject lines, creative, CTAs, and send windows tested with statistical rigor so wins compound over time.",
    features: ["Hypothesis design", "Sample sizing", "Rollout winners"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Audience Analysis",
    description:
      "List health, engagement history, and ICP alignment so messaging and frequency match real subscriber behavior.",
    icon: UserSearch,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Journey maps, KPIs, and content pillars tied to revenue goals — from acquisition drips to retention loops.",
    icon: Target,
  },
  {
    step: "03",
    title: "Template Design",
    description: "Modular, accessible email layouts tested across clients with dark-mode and mobile breakpoints in mind.",
    icon: Layout,
  },
  {
    step: "04",
    title: "Automation Setup",
    description: "Flows, triggers, and integrations wired to your stack with fallbacks, delays, and operational safeguards.",
    icon: Workflow,
  },
  {
    step: "05",
    title: "Campaign Launch",
    description: "Pre-flight checks, seed tests, and staged rollouts so every send lands in the inbox with confidence.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Performance Review",
    description: "Deliverability, engagement, and revenue reporting with clear next experiments and roadmap updates.",
    icon: LineChart,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Platforms",
    items: [
      { name: "Mailchimp", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "HubSpot", logo: `${DEVICON}/hubspot/hubspot-original.svg` },
      { name: "SendGrid", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Klaviyo", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "ActiveCampaign", logo: `${DEVICON}/javascript/javascript-original.svg` },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "Zapier", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Make", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Customer.io", logo: `${DEVICON}/customerio/customerio-original.svg` },
      { name: "Drip", logo: `${DEVICON}/drip/drip-original.svg` },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Stripo", logo: `${DEVICON}/stripo/stripo-original.svg` },
      { name: "BEE Pro", logo: `${DEVICON}/beepro/beepro-original.svg` },
      { name: "Litmus", logo: `${DEVICON}/litmus/litmus-original.svg` },
      { name: "Email on Acid", logo: `${DEVICON}/emailonacid/emailonacid-original.svg` },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Litmus Analytics", logo: `${DEVICON}/litmusanalytics/litmusanalytics-original.svg` },
      { name: "Mailchimp Reports", logo: `${DEVICON}/mailchimpreports/mailchimpreports-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Deliverability Experts",
    description: "Authentication, reputation monitoring, and list hygiene practices focused on inbox placement—not just opens.",
  },
  {
    icon: Sparkles,
    title: "Personalization at Scale",
    description: "Dynamic content, behavioral segments, and merge logic that feel one-to-one without manual overhead.",
  },
  {
    icon: Scale,
    title: "Compliance & Privacy",
    description: "CAN-SPAM, GDPR-minded consent flows, and transparent unsubscribe handling built into every program.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Driven Campaigns",
    description: "Attribution-aware reporting and tests tied to pipeline and LTV—not vanity metrics alone.",
  },
];
