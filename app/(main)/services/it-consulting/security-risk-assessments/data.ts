import { Shield, Lock, Eye, AlertTriangle, FileCheck, Bug, Settings, BarChart3, Layers, Rocket, Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "Security Risk",
  titleBottom: "Assessments",
  description: "Identify security vulnerabilities, assess risk levels, and implement preventive measures to protect your technology-dependent business operations from evolving threats.",
  heroImage: "/images/stock/stock-bec6bc3726.jpg",
  heroImageAlt: "Security Risk Assessment",
  topBadge: { icon: null as any, title: "Risk Audit", subtitle: "Security review", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Compliance", subtitle: "SOC 2 ready", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Clients Advised" },
  { value: 40, suffix: "+", label: "Enterprise Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Security Risk Assessment", headingWhite: "Services", subtitle: "Comprehensive security evaluations to identify threats, test defenses, and build resilient security postures across your organization." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Security Assessment", headingWhite: "Process", subtitle: "A rigorous six-phase methodology from scoping through reporting — leaving no vulnerability unexamined." };
export const techHeading: ServicePageSectionProps = { headingGray: "Security Tools &", headingWhite: "Platforms", subtitle: "Enterprise-grade security tools for comprehensive vulnerability discovery, monitoring, and compliance management." };
export const ctaProps: CTAProps = { headingTop: "Secure Your Business", headingBottom: "Before Threats Strike", description: "Don&apos;t wait for a breach to discover your weaknesses. Get a comprehensive security risk assessment and protect what matters most." };

export const services: ServiceOffering[] = [{ icon: Bug, title: "Vulnerability Assessment", description: "Automated and manual scanning of networks, applications, and endpoints to identify vulnerabilities before attackers exploit them.", features: ["Network scanning", "App vulnerabilities", "Endpoint analysis"] },
  { icon: Shield, title: "Penetration Testing", description: "Simulated real-world attacks by certified ethical hackers to test your defenses and uncover exploitable weaknesses across your attack surface.", features: ["Ethical hacking", "Attack simulation", "Exploit testing"] },
  { icon: FileCheck, title: "Compliance Assessments", description: "Gap analysis and readiness assessments for SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 — with remediation roadmaps for certification.", features: ["SOC 2 & HIPAA", "PCI-DSS", "ISO 27001"] },
  { icon: Eye, title: "Security Architecture Review", description: "In-depth review of your security architecture — firewalls, IAM, encryption, and network segmentation — to identify design weaknesses.", features: ["Architecture review", "IAM analysis", "Encryption audit"] },
  { icon: AlertTriangle, title: "Threat Modeling & Risk Analysis", description: "Systematic identification and prioritization of threats using STRIDE, DREAD, and MITRE ATT&CK frameworks tailored to your business context.", features: ["STRIDE modeling", "MITRE ATT&CK", "Risk prioritization"] },
  { icon: Lock, title: "Data Protection & Privacy", description: "Assess data handling practices, encryption standards, access controls, and privacy policies to protect sensitive data and ensure regulatory compliance.", features: ["Data classification", "Access controls", "Privacy review"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Scope Definition", description: "Define assessment boundaries, critical assets, threat landscape, and success criteria in collaboration with your security and IT teams.", icon: Settings },
  { step: "02", title: "Reconnaissance", description: "Information gathering, asset discovery, and threat intelligence to understand your organization's exposure and attack surface.", icon: Eye },
  { step: "03", title: "Vulnerability Discovery", description: "Automated scanning combined with manual testing to identify vulnerabilities across networks, applications, and infrastructure.", icon: Bug },
  { step: "04", title: "Risk Analysis & Scoring", description: "Categorize and score findings by severity, exploitability, and business impact using industry-standard frameworks like CVSS.", icon: BarChart3 },
  { step: "05", title: "Remediation Planning", description: "Prioritized action plans with quick fixes, medium-term hardening, and long-term architectural improvements for each finding.", icon: Layers },
  { step: "06", title: "Reporting & Review", description: "Executive and technical reports with clear findings, risk scores, and remediation timelines — plus a debrief session with your team.", icon: FileCheck },];

export const techCategories: TechCategory[] = [{ label: "Vulnerability Scanning", items: [
      { name: "Nessus", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Qualys", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Rapid7 InsightVM", logo: `${DEVICON}/rapid7insightvm/rapid7insightvm-original.svg` },
      { name: "OpenVAS", logo: `${DEVICON}/openvas/openvas-original.svg` }
    ] },
  { label: "Penetration Testing", items: [
      { name: "Burp Suite", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Metasploit", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Kali Linux", logo: `${DEVICON}/kalilinux/kalilinux-original.svg` },
      { name: "OWASP ZAP", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "SIEM & Monitoring", items: [
      { name: "Splunk", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "CrowdStrike", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SentinelOne", logo: `${DEVICON}/sentinelone/sentinelone-original.svg` },
      { name: "Elastic SIEM", logo: `${DEVICON}/elasticsiem/elasticsiem-original.svg` }
    ] },
  { label: "Compliance", items: [
      { name: "Vanta", logo: `${DEVICON}/vanta/vanta-original.svg` },
      { name: "Drata", logo: `${DEVICON}/drata/drata-original.svg` },
      { name: "Tugboat Logic", logo: `${DEVICON}/tugboatlogic/tugboatlogic-original.svg` },
      { name: "OneTrust", logo: `${DEVICON}/onetrust/onetrust-original.svg` }
    ] },
  { label: "Identity & Access", items: [
      { name: "Okta", logo: `${DEVICON}/okta/okta-original.svg` },
      { name: "Azure AD", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CyberArk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified Security Experts", description: "CISSP, CEH, OSCP, and CISM certified professionals with hands-on experience across industries and compliance frameworks." },
  { icon: Clock, title: "Rapid Assessment Delivery", description: "Structured methodology delivers comprehensive findings and actionable remediation plans within 2-4 weeks of engagement start." },
  { icon: TrendingUp, title: "Business-Context Scoring", description: "Risk scores tied to your specific business context — not just generic CVSS numbers — so you prioritize what matters most." },
  { icon: HeartHandshake, title: "Ongoing Security Advisory", description: "Post-assessment support with remediation verification, re-testing, and quarterly security reviews to maintain your security posture." },];
