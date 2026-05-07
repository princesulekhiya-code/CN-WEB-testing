import {
  AlertTriangle,
  Shield,
  Siren,
  FileSearch,
  RotateCcw,
  HeartPulse,
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
  titleTop: "Incident Response",
  titleBottom: "& Recovery",
  description:
    "Rapid incident response plans, forensic analysis, breach containment, and business continuity strategies that minimize damage and accelerate recovery.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Incident Response & Recovery",
  topBadge: { icon: null as any, title: "< 15 min", subtitle: "Response time", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "24/7 SOC", subtitle: "Threat response", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
  primaryCtaLabel: "Get IR Assessment",
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Incident Response & Recovery",
  headingWhite: "Services",
  subtitle:
    "Complete incident lifecycle management — from preparation and detection through recovery and lessons learned.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Incident Response",
  headingWhite: "Process",
  subtitle: "NIST-aligned six-phase incident response methodology for comprehensive threat management.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "IR & Recovery",
  headingWhite: "Tools",
  subtitle:
    "Enterprise forensics, response automation, and disaster recovery platforms for comprehensive incident management.",
};

export const ctaProps: CTAProps = {
  headingTop: "Be Prepared Before",
  headingBottom: "An Incident Strikes",
  description:
    "Don't wait for a breach to build your response plan. Get a free IR readiness assessment and ensure your team is prepared for any security incident.",
  primaryCtaLabel: "Get IR Assessment",
};

export const services: ServiceOffering[] = [
  {
    icon: Siren,
    title: "IR Plan Development",
    description:
      "Comprehensive incident response plans with roles, escalation paths, communication templates, and response procedures tailored to your organization's threat profile.",
    features: ["Response playbooks", "Escalation paths", "Communication plans"],
  },
  {
    icon: FileSearch,
    title: "Digital Forensic Analysis",
    description:
      "Expert forensic investigation to determine root cause, attack vectors, data impact, and attribution — preserving evidence chain for legal proceedings.",
    features: ["Root cause analysis", "Evidence preservation", "Attack attribution"],
  },
  {
    icon: Shield,
    title: "Breach Containment",
    description:
      "Rapid containment procedures to isolate compromised systems, stop lateral movement, and prevent further data exfiltration while maintaining business operations.",
    features: ["System isolation", "Lateral movement stop", "Exfiltration prevention"],
  },
  {
    icon: HeartPulse,
    title: "Business Continuity Planning",
    description:
      "BCP development with disaster recovery strategies, failover procedures, and continuity testing to ensure your business survives any security incident.",
    features: ["DR strategies", "Failover procedures", "Continuity testing"],
  },
  {
    icon: RotateCcw,
    title: "Disaster Recovery",
    description:
      "Recovery point and recovery time objective planning, backup validation, system restoration procedures, and recovery orchestration for rapid service resumption.",
    features: ["RPO/RTO planning", "Backup validation", "Recovery orchestration"],
  },
  {
    icon: AlertTriangle,
    title: "Post-Incident Review & Hardening",
    description:
      "Thorough post-mortem analysis, lessons learned documentation, control hardening recommendations, and tabletop exercises to prevent recurrence.",
    features: ["Post-mortem analysis", "Lessons learned", "Control hardening"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Preparation",
    description:
      "Develop IR plans, establish communication channels, define roles, and conduct readiness assessments before incidents occur.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Detection & Analysis",
    description:
      "Identify and validate security incidents, assess severity, determine scope, and classify the incident type and business impact.",
    icon: FileSearch,
  },
  {
    step: "03",
    title: "Containment",
    description:
      "Isolate affected systems, prevent spread, preserve evidence, and implement short-term and long-term containment strategies.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Eradication",
    description:
      "Remove malware, close attack vectors, patch vulnerabilities, and eliminate the root cause of the security incident.",
    icon: AlertTriangle,
  },
  {
    step: "05",
    title: "Recovery",
    description:
      "Restore systems from clean backups, verify integrity, monitor for re-infection, and gradually return to normal operations.",
    icon: RotateCcw,
  },
  {
    step: "06",
    title: "Lessons Learned",
    description:
      "Document findings, update IR plans, implement hardening measures, and conduct training to strengthen future response capabilities.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Forensics",
    items: [
      { name: "EnCase", logo: `${DEVICON}/encase/encase-original.svg` },
      { name: "FTK", logo: `${DEVICON}/ftk/ftk-original.svg` },
      { name: "Volatility", logo: `${DEVICON}/volatility/volatility-original.svg` },
      { name: "Autopsy", logo: `${DEVICON}/autopsy/autopsy-original.svg` },
      { name: "SANS SIFT", logo: `${DEVICON}/sanssift/sanssift-original.svg` },
    ],
  },
  {
    label: "EDR & Response",
    items: [
      { name: "CrowdStrike Falcon", logo: `${DEVICON}/crowdstrikefalcon/crowdstrikefalcon-original.svg` },
      { name: "SentinelOne", logo: `${DEVICON}/sentinelone/sentinelone-original.svg` },
      { name: "Carbon Black", logo: `${DEVICON}/carbon/carbon-original.svg` },
      { name: "Microsoft Defender", logo: `${DEVICON}/microsoftdefender/microsoftdefender-original.svg` },
    ],
  },
  {
    label: "SOAR",
    items: [
      { name: "Palo Alto XSOAR", logo: `${DEVICON}/paloaltoxsoar/paloaltoxsoar-original.svg` },
      { name: "Splunk SOAR", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "Tines", logo: `${DEVICON}/tines/tines-original.svg` },
      { name: "Swimlane", logo: `${DEVICON}/swimlane/swimlane-original.svg` },
    ],
  },
  {
    label: "Backup & DR",
    items: [
      { name: "Veeam", logo: `${DEVICON}/veeam/veeam-original.svg` },
      { name: "Commvault", logo: `${DEVICON}/commvault/commvault-original.svg` },
      { name: "Rubrik", logo: `${DEVICON}/rubrik/rubrik-original.svg` },
      { name: "Zerto", logo: `${DEVICON}/zerto/zerto-original.svg` },
      { name: "AWS Backup", logo: `${DEVICON}/awsbackup/awsbackup-original.svg` },
    ],
  },
  {
    label: "Communication",
    items: [
      { name: "PagerDuty", logo: `${DEVICON}/pagerduty/pagerduty-original.svg` },
      { name: "Opsgenie", logo: `${DEVICON}/opsgenie/opsgenie-original.svg` },
      { name: "Statuspage", logo: `${DEVICON}/statuspage/statuspage-original.svg` },
      { name: "Slack", logo: `${DEVICON}/slack/slack-original.svg` },
      { name: "Teams", logo: `${DEVICON}/teams/teams-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "DFIR-Certified Team",
    description:
      "GCIH, GCFA, and EnCE certified incident responders with hands-on experience handling breaches across healthcare, finance, and technology sectors.",
  },
  {
    icon: Clock,
    title: "Rapid Response SLA",
    description:
      "Under 1-hour response time for critical incidents with 24/7 on-call coverage — because every minute counts during a security breach.",
  },
  {
    icon: TrendingUp,
    title: "Evidence-Grade Forensics",
    description:
      "Forensic investigation that meets legal and regulatory standards — ensuring evidence is admissible and root cause analysis is thorough.",
  },
  {
    icon: HeartHandshake,
    title: "Recovery-Focused Approach",
    description:
      "Beyond containment — we focus on rapid, safe recovery and long-term hardening so your business emerges stronger after every incident.",
  },
];
