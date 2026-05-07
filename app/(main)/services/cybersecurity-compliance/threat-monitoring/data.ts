import {
  Eye,
  Shield,
  Activity,
  Bell,
  Radio,
  Search,
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
  titleTop: "Threat Monitoring",
  titleBottom: "& SOC",
  description:
    "24/7 security monitoring, intrusion detection, and real-time threat intelligence with a dedicated Security Operations Center protecting your business around the clock.",
  heroImage: "/images/stock/stock-355399787b.jpg",
  heroImageAlt: "Threat Monitoring & SIEM",
  topBadge: { icon: null as any, title: "24/7 SIEM", subtitle: "Threat detection", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Real-Time", subtitle: "Instant alerts", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
  primaryCtaLabel: "Get Security Assessment",
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Threat Monitoring & SOC",
  headingWhite: "Services",
  subtitle:
    "Comprehensive security monitoring and operations to detect, investigate, and respond to threats in real time.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our SOC Setup",
  headingWhite: "Process",
  subtitle:
    "A structured approach to building comprehensive security monitoring from assessment through continuous improvement.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Security Monitoring",
  headingWhite: "Tools",
  subtitle:
    "Enterprise-grade SIEM, EDR, and threat intelligence platforms for comprehensive security operations.",
};

export const ctaProps: CTAProps = {
  headingTop: "Never Miss a Threat",
  headingBottom: "With 24/7 Monitoring",
  description:
    "Get round-the-clock security monitoring with expert SOC analysts who detect and respond to threats before they impact your business.",
  primaryCtaLabel: "Get Security Assessment",
};

export const services: ServiceOffering[] = [
  {
    icon: Eye,
    title: "24/7 SIEM Monitoring",
    description:
      "Round-the-clock Security Information and Event Management monitoring with real-time log aggregation, correlation, and threat detection across your entire infrastructure.",
    features: ["Log aggregation", "Event correlation", "Real-time alerts"],
  },
  {
    icon: Shield,
    title: "Intrusion Detection & Prevention",
    description:
      "Network and host-based IDS/IPS systems that detect, block, and report malicious activity before it impacts your business operations.",
    features: ["Network IDS/IPS", "Host-based detection", "Auto-blocking"],
  },
  {
    icon: Radio,
    title: "Threat Intelligence",
    description:
      "Curated threat intelligence feeds, dark web monitoring, and indicator-of-compromise tracking to stay ahead of emerging threats targeting your industry.",
    features: ["Threat feeds", "Dark web monitoring", "IOC tracking"],
  },
  {
    icon: Activity,
    title: "Security Operations Center (SOC)",
    description:
      "Dedicated SOC team with Tier 1-3 analysts providing continuous monitoring, triage, investigation, and escalation of security events.",
    features: ["Tier 1-3 analysts", "Event triage", "Incident escalation"],
  },
  {
    icon: Search,
    title: "Log Analysis & Correlation",
    description:
      "Advanced log analysis across applications, infrastructure, and cloud services with behavioral analytics and anomaly detection for proactive threat hunting.",
    features: ["Behavioral analytics", "Anomaly detection", "Threat hunting"],
  },
  {
    icon: Bell,
    title: "Real-Time Alerting & Response",
    description:
      "Automated alerting workflows with severity-based routing, on-call escalation, and playbook-driven response procedures for rapid threat containment.",
    features: ["Automated workflows", "Severity routing", "Playbook response"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Environment Assessment",
    description:
      "Map your infrastructure, identify critical assets, and design monitoring coverage to ensure no blind spots across your technology estate.",
    icon: Settings,
  },
  {
    step: "02",
    title: "SIEM Deployment",
    description:
      "Deploy and configure SIEM platform with log sources, parsers, correlation rules, and dashboards tailored to your environment.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Rule Development",
    description:
      "Create custom detection rules, use cases, and playbooks based on MITRE ATT&CK framework aligned to your threat profile.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Integration & Tuning",
    description:
      "Connect all log sources, tune alert thresholds, reduce false positives, and establish baseline behavior profiles.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "SOC Activation",
    description:
      "Activate 24/7 monitoring with trained analysts, escalation procedures, and communication channels for rapid incident response.",
    icon: Eye,
  },
  {
    step: "06",
    title: "Continuous Improvement",
    description:
      "Regular rule reviews, threat landscape updates, tabletop exercises, and metrics reporting to continuously enhance detection capabilities.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "SIEM Platforms",
    items: [
      { name: "Splunk", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "Microsoft Sentinel", logo: `${DEVICON}/microsoftsentinel/microsoftsentinel-original.svg` },
      { name: "Elastic SIEM", logo: `${DEVICON}/elasticsiem/elasticsiem-original.svg` },
      { name: "IBM QRadar", logo: `${DEVICON}/ibmqradar/ibmqradar-original.svg` },
      { name: "LogRhythm", logo: `${DEVICON}/logrhythm/logrhythm-original.svg` },
    ],
  },
  {
    label: "EDR/XDR",
    items: [
      { name: "CrowdStrike", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SentinelOne", logo: `${DEVICON}/sentinelone/sentinelone-original.svg` },
      { name: "Microsoft Defender", logo: `${DEVICON}/microsoftdefender/microsoftdefender-original.svg` },
      { name: "Carbon Black", logo: `${DEVICON}/carbon/carbon-original.svg` },
      { name: "Palo Alto Cortex", logo: `${DEVICON}/paloaltocortex/paloaltocortex-original.svg` },
    ],
  },
  {
    label: "Threat Intel",
    items: [
      { name: "MITRE ATT&CK", logo: `${DEVICON}/mitreattck/mitreattck-original.svg` },
      { name: "AlienVault OTX", logo: `${DEVICON}/alienvaultotx/alienvaultotx-original.svg` },
      { name: "VirusTotal", logo: `${DEVICON}/virustotal/virustotal-original.svg` },
      { name: "Recorded Future", logo: `${DEVICON}/recordedfuture/recordedfuture-original.svg` },
      { name: "Mandiant", logo: `${DEVICON}/mandiant/mandiant-original.svg` },
    ],
  },
  {
    label: "SOAR",
    items: [
      { name: "Palo Alto XSOAR", logo: `${DEVICON}/paloaltoxsoar/paloaltoxsoar-original.svg` },
      { name: "Splunk SOAR", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "Swimlane", logo: `${DEVICON}/swimlane/swimlane-original.svg` },
      { name: "Tines", logo: `${DEVICON}/tines/tines-original.svg` },
      { name: "Shuffle", logo: `${DEVICON}/shuffle/shuffle-original.svg` },
    ],
  },
  {
    label: "Network Security",
    items: [
      { name: "Suricata", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Zeek", logo: `${DEVICON}/zeek/zeek-original.svg` },
      { name: "Snort", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Wireshark", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Darktrace", logo: `${DEVICON}/darktrace/darktrace-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Expert SOC Analysts",
    description:
      "Certified security analysts (GCIA, GCIH, OSCP) with deep experience in threat detection, investigation, and response across industries.",
  },
  {
    icon: Clock,
    title: "24/7/365 Coverage",
    description:
      "Round-the-clock monitoring with guaranteed SLAs — because threats don't wait for business hours and neither do we.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Threat Hunting",
    description:
      "Beyond reactive monitoring — our analysts proactively hunt for threats using behavioral analytics, hypothesis-driven investigation, and threat intelligence.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Reporting",
    description:
      "Real-time dashboards, weekly threat summaries, and monthly executive reports so you always know your security posture and ROI.",
  },
];
