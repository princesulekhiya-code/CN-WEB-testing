import {
  FileCheck,
  Shield,
  ClipboardList,
  Scale,
  BookOpen,
  Award,
  Settings,
  BarChart3,
  Layers,
  Rocket,
  Users,
  Clock,
  HeartHandshake,
  TrendingUp,
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
  backHref: "/services/cybersecurity-compliance",
  backLabel: "Back to Cybersecurity & Compliance",
  titleTop: "Compliance &",
  titleBottom: "Regulatory Frameworks",
  description:
    "SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 compliance implementation — from gap analysis through certification and ongoing maintenance.",
  heroImage: "/images/stock/stock-61b992e785.jpg",
  heroImageAlt: "Compliance Frameworks & Audit",
  topBadge: { icon: null as any, title: "SOC 2 & ISO", subtitle: "Full compliance", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "GDPR Ready", subtitle: "Data protection", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
  primaryCtaLabel: "Get Compliance Assessment",
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Compliance & Regulatory",
  headingWhite: "Services",
  subtitle:
    "End-to-end compliance implementation across major regulatory frameworks — from gap analysis through certification.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Compliance",
  headingWhite: "Process",
  subtitle:
    "A proven six-phase methodology from gap analysis through certification and ongoing compliance maintenance.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Compliance Tools &",
  headingWhite: "Platforms",
  subtitle:
    "Industry-leading GRC, policy management, and evidence collection platforms for automated compliance.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Achieve",
  headingBottom: "Compliance Certification?",
  description:
    "Get a free compliance gap assessment and a clear roadmap to certification — faster and more efficiently than doing it alone.",
  primaryCtaLabel: "Get Compliance Assessment",
};

export const services: ServiceOffering[] = [
  {
    icon: Shield,
    title: "SOC 2 Type I & Type II",
    description:
      "End-to-end SOC 2 compliance — controls design, evidence collection, gap remediation, and audit preparation for both Type I and Type II certifications.",
    features: ["Controls design", "Evidence collection", "Audit readiness"],
  },
  {
    icon: FileCheck,
    title: "HIPAA Compliance",
    description:
      "Healthcare data protection with HIPAA privacy and security rule implementation, risk assessments, BAA management, and breach notification procedures.",
    features: ["Privacy rules", "Security rules", "BAA management"],
  },
  {
    icon: Scale,
    title: "GDPR Implementation",
    description:
      "Full GDPR compliance with data mapping, privacy impact assessments, consent management, data subject rights workflows, and DPO advisory.",
    features: ["Data mapping", "DPIA", "Consent management"],
  },
  {
    icon: ClipboardList,
    title: "PCI-DSS Certification",
    description:
      "Payment card industry compliance with network segmentation, encryption standards, access controls, and vulnerability management for secure payment processing.",
    features: ["Network segmentation", "Encryption standards", "Access controls"],
  },
  {
    icon: Award,
    title: "ISO 27001 Implementation",
    description:
      "Information security management system (ISMS) implementation with risk assessment, controls implementation, internal audits, and certification preparation.",
    features: ["ISMS setup", "Risk assessment", "Certification prep"],
  },
  {
    icon: BookOpen,
    title: "Regulatory Audit Preparation",
    description:
      "Comprehensive audit readiness with control documentation, evidence repositories, staff training, and mock audit exercises to ensure smooth certification.",
    features: ["Control documentation", "Mock audits", "Staff training"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Scope & Gap Analysis",
    description:
      "Identify applicable frameworks, map current controls, and assess gaps against compliance requirements to establish a clear remediation roadmap.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Controls Design",
    description:
      "Design and document security controls, policies, and procedures that satisfy compliance requirements while remaining practical for your team.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Deploy technical controls, update policies, configure monitoring, and implement processes required by each compliance framework.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Evidence Collection",
    description:
      "Build automated evidence collection systems, maintain audit trails, and create documentation repositories for continuous compliance readiness.",
    icon: ClipboardList,
  },
  {
    step: "05",
    title: "Internal Audit",
    description:
      "Conduct thorough internal audits and mock assessments to identify remaining gaps and ensure readiness before external auditor engagement.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "Certification & Maintenance",
    description:
      "Support through external audit process and establish ongoing monitoring, evidence refresh, and annual recertification procedures.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "GRC Platforms",
    items: [
      { name: "Vanta", logo: `${DEVICON}/vanta/vanta-original.svg` },
      { name: "Drata", logo: `${DEVICON}/drata/drata-original.svg` },
      { name: "Tugboat Logic", logo: `${DEVICON}/tugboatlogic/tugboatlogic-original.svg` },
      { name: "Sprinto", logo: `${DEVICON}/sprinto/sprinto-original.svg` },
      { name: "Secureframe", logo: `${DEVICON}/secureframe/secureframe-original.svg` },
    ],
  },
  {
    label: "Policy Management",
    items: [
      { name: "OneTrust", logo: `${DEVICON}/onetrust/onetrust-original.svg` },
      { name: "TrustArc", logo: `${DEVICON}/trustarc/trustarc-original.svg` },
      { name: "BigID", logo: `${DEVICON}/bigid/bigid-original.svg` },
      { name: "Osano", logo: `${DEVICON}/osano/osano-original.svg` },
      { name: "DataGrail", logo: `${DEVICON}/datagrail/datagrail-original.svg` },
    ],
  },
  {
    label: "Audit & Evidence",
    items: [
      { name: "AuditBoard", logo: `${DEVICON}/auditboard/auditboard-original.svg` },
      { name: "Workiva", logo: `${DEVICON}/workiva/workiva-original.svg` },
      { name: "ZenGRC", logo: `${DEVICON}/zengrc/zengrc-original.svg` },
      { name: "LogicManager", logo: `${DEVICON}/logicmanager/logicmanager-original.svg` },
    ],
  },
  {
    label: "Security Controls",
    items: [
      { name: "Okta", logo: `${DEVICON}/okta/okta-original.svg` },
      { name: "CrowdStrike", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Snyk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` },
      { name: "AWS Config", logo: `${DEVICON}/awsconfig/awsconfig-original.svg` },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Splunk", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "PagerDuty", logo: `${DEVICON}/pagerduty/pagerduty-original.svg` },
      { name: "AWS CloudTrail", logo: `${DEVICON}/awscloudtrail/awscloudtrail-original.svg` },
      { name: "Azure Monitor", logo: `${DEVICON}/azure/azure-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Certified Auditors",
    description:
      "CISA, CISSP, and framework-specific certified consultants who have guided 100+ organizations through successful compliance certifications.",
  },
  {
    icon: Clock,
    title: "Accelerated Timelines",
    description:
      "Streamlined compliance methodology that achieves certification 40% faster than industry average — without cutting corners on quality.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Compliance",
    description:
      "Automated monitoring and evidence collection systems that maintain compliance year-round — not just at audit time.",
  },
  {
    icon: HeartHandshake,
    title: "Multi-Framework Expertise",
    description:
      "Deep experience across SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 — with unified control mappings to reduce duplicate effort.",
  },
];
