import { Activity, Award, Banknote, BarChart3, Boxes, Building2, ClipboardList, Clock, CreditCard, Database, Factory, FileCheck, GraduationCap, HeartHandshake, Landmark, Layers, Lock, Radar, Scale, Search, Settings, Shield, ShieldAlert, ShieldCheck, ShoppingCart, Stethoscope, Target, Truck, Users, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "Cybersecurity",
  titleBottom: "& Compliance",
  description: "Lower breach exposure and meet regulatory expectations through structured assessments, continuous monitoring, and compliance initiatives engineered for modern cloud platforms and software delivery.",
  heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Cybersecurity and compliance",
  topBadge: { icon: null as any, title: "Zero Breach", subtitle: "Track record", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "SOC 2 Ready", subtitle: "Compliance certified", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "Full-spectrum offerings calibrated to your risk profile, regulatory landscape, and pace of delivery." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Delivery", headingWhite: "Process", subtitle: "A proven, field-hardened approach that upholds rigor, clear communication, and dependable timelines." };
export const techHeading: ServicePageSectionProps = { headingGray: "Powered by", headingWhite: "Leading Platforms", subtitle: "Enterprise-grade technologies and frameworks underpinning every engagement we run." };
export const ctaProps: CTAProps = { headingTop: "Ready to Protect Your", headingBottom: "Digital Estate?", description: "Outline your technical footprint and compliance objectives — we will return a sequenced plan covering validation, continuous monitoring, and defensible evidence capture." };

export const services: ServiceOffering[] = [
  { icon: Search, title: "Security Assessment & Pen Testing", description: "Surface gaps before adversaries exploit them — disciplined evaluations, authentic attack scenarios, and remediation priorities you can execute with confidence.", features: ["Vulnerability scans", "Pen tests", "Executive readouts"], href: "/services/cybersecurity-compliance/security-assessment" , logos: ["linux/linux-original.svg", "python/python-original.svg", "bash/bash-original.svg"], accent: "#E53E3E"},
  { icon: Lock, title: "Data Protection & Encryption", description: "Safeguard sensitive information end to end through classification, robust cryptography, and least-privilege access that reflects privacy and regulatory norms.", features: ["Encryption", "DLP & IAM", "Key management"], href: "/services/cybersecurity-compliance/data-protection" , logos: ["python/python-original.svg", "linux/linux-original.svg", "nodejs/nodejs-original.svg"], accent: "#38A169"},
  { icon: Radar, title: "Threat Monitoring & SOC", description: "Round-the-clock insight into anomalous behavior — correlated signals, enriched context, and response runbooks calibrated to your risk appetite and compliance duties.", features: ["SIEM & SOAR", "Threat intel", "Real-time alerting"], href: "/services/cybersecurity-compliance/threat-monitoring" , logos: ["elasticsearch/elasticsearch-original.svg", "grafana/grafana-original.svg", "prometheus/prometheus-original.svg"], accent: "#F6AD55"},
  { icon: FileCheck, title: "Compliance & Regulatory Frameworks", description: "Stand up audit-defensible controls for SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001, and industry-specific examinations — while preserving delivery velocity.", features: ["Control mapping", "Policy packs", "Audit prep"], href: "/services/cybersecurity-compliance/compliance-frameworks" , logos: ["python/python-original.svg", "nodejs/nodejs-original.svg", "linux/linux-original.svg"], accent: "#4299E1"},
  { icon: ShieldAlert, title: "Incident Response & Recovery", description: "Shorten attacker dwell time and limit operational fallout via rehearsed playbooks, digital forensics, containment, and recovery strategies validated ahead of a live event.", features: ["IR planning", "Forensics", "BCDR"], href: "/services/cybersecurity-compliance/incident-response" , logos: ["linux/linux-original.svg", "python/python-original.svg", "docker/docker-original.svg"], accent: "#9F7AEA"},
  { icon: Boxes, title: "Infrastructure & Cloud Security", description: "Strengthen networks, multi-cloud environments, containers, and endpoints using zero-trust principles, posture governance, and ongoing configuration integrity checks.", features: ["Zero trust", "CSPM/CWPP", "K8s security"], href: "/services/cybersecurity-compliance/infrastructure-security" , logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "azure/azure-original.svg", "googlecloud/googlecloud-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Scope & Threat Modeling", description: "Inventory critical assets, delineate trust zones, and model credible threat paths so every control and test reflects true business exposure.", icon: Target },
  { step: "02", title: "Baseline Assessment", description: "Gather substantiating artifacts across identity, data, endpoints, cloud, and applications to produce a ranked picture of where gaps matter most.", icon: ClipboardList },
  { step: "03", title: "Control Design", description: "Engineer compensating safeguards, encryption perimeters, logging architectures, and least-privilege models that satisfy your chosen frameworks.", icon: Layers },
  { step: "04", title: "Implementation", description: "Roll out tooling, tighten configurations, weave in observability, and stress-test defenses under lifelike operating conditions.", icon: Settings },
  { step: "05", title: "Validation & Testing", description: "Penetration tests, tabletop exercises, and control-effectiveness scrutiny that demonstrate genuine preparedness rather than superficial compliance.", icon: Shield },
  { step: "06", title: "Continuous Improvement", description: "Operating metrics, periodic threat reassessments, and roadmap stewardship so security maturity evolves alongside product releases and cloud drift.", icon: Activity },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Credentialed Security Practitioners", description: "Specialists spanning offensive operations, cloud architecture, and governance, risk, and compliance — certified and battle-tested in highly regulated settings." },
  { icon: Activity, title: "Always-On Threat Oversight", description: "Detection engineering and analyst depth scaled to your incident classifications and the service levels you promise customers." },
  { icon: FileCheck, title: "Evidence-Led Compliance", description: "Controls conceived as proof — documentation, telemetry, and change trails reviewers can trace without last-minute rescue work." },
  { icon: Shield, title: "Forward-Looking Defense", description: "Adversary simulations, ongoing validation, and drift sensing so weaknesses appear in scheduled reviews — not breaking news." },];
