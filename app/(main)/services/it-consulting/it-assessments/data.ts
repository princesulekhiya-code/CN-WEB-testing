import { Server, Network, Monitor, ShieldCheck, Database, FileSearch, Settings, Layers, BarChart3, Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "IT",
  titleBottom: "Assessments",
  description: "Comprehensive evaluation of your IT environment to identify improvement areas, enhance security, boost efficiency, and build a data-driven roadmap for growth.",
  heroImage: "/images/stock/stock-61b992e785.jpg",
  heroImageAlt: "IT Assessment & Audit",
  topBadge: { icon: null as any, title: "Deep Audit", subtitle: "IT assessment", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Gap Analysis", subtitle: "Actionable report", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Clients Advised" },
  { value: 40, suffix: "+", label: "Enterprise Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "IT Assessment", headingWhite: "Services", subtitle: "End-to-end evaluation across infrastructure, security, applications, and compliance to surface risks and unlock optimization opportunities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Assessment", headingWhite: "Process", subtitle: "A structured six-phase methodology to uncover risks, benchmark performance, and deliver actionable improvements." };
export const techHeading: ServicePageSectionProps = { headingGray: "Assessment Tools &", headingWhite: "Platforms", subtitle: "Industry-leading tools for discovery, scanning, monitoring, and compliance across your entire IT landscape." };
export const ctaProps: CTAProps = { headingTop: "Know Where You Stand", headingBottom: "Before You Transform", description: "Get a comprehensive IT assessment that reveals risks, inefficiencies, and untapped opportunities — with a clear action plan to move forward." };

export const services: ServiceOffering[] = [{ icon: Server, title: "Infrastructure Assessment", description: "Thorough evaluation of servers, storage, networking, and compute resources to identify bottlenecks, aging hardware, and capacity gaps across your IT estate.", features: ["Server analysis", "Storage evaluation", "Capacity planning"] },
  { icon: ShieldCheck, title: "Security Assessment", description: "Vulnerability scanning, penetration testing, and policy review to uncover security gaps and ensure your defenses meet industry compliance standards.", features: ["Vulnerability scanning", "Pen testing", "Policy review"] },
  { icon: Network, title: "Network Assessment", description: "End-to-end network topology review covering bandwidth utilization, latency analysis, segmentation, and redundancy to optimize connectivity and reliability.", features: ["Topology review", "Bandwidth analysis", "Redundancy check"] },
  { icon: Monitor, title: "Application Assessment", description: "Evaluate your application portfolio for performance, scalability, technical debt, and modernization readiness to prioritize upgrade and migration efforts.", features: ["Performance profiling", "Tech debt analysis", "Modernization roadmap"] },
  { icon: Database, title: "Data & Database Assessment", description: "Database health checks, query performance tuning, backup strategy review, and data governance evaluation to protect and optimize your most valuable asset.", features: ["Query optimization", "Backup strategy", "Data governance"] },
  { icon: FileSearch, title: "Compliance & Audit Readiness", description: "Gap analysis against regulatory frameworks — SOC 2, HIPAA, GDPR, ISO 27001 — with remediation roadmaps to achieve and maintain compliance.", features: ["SOC 2 & HIPAA", "GDPR readiness", "Remediation plans"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Scoping & Planning", description: "Define assessment boundaries, stakeholders, timelines, and success criteria to ensure focused and actionable evaluation.", icon: Settings },
  { step: "02", title: "Data Collection", description: "Automated discovery tools and interviews to gather configuration data, performance metrics, and operational workflows.", icon: Database },
  { step: "03", title: "Analysis & Benchmarking", description: "Compare findings against industry benchmarks, best practices, and your organization's specific goals and constraints.", icon: BarChart3 },
  { step: "04", title: "Risk Identification", description: "Categorize and prioritize risks by impact and likelihood, mapping each to affected business processes and services.", icon: ShieldCheck },
  { step: "05", title: "Recommendations", description: "Actionable improvement plan with quick wins, medium-term initiatives, and strategic investments clearly prioritized.", icon: Layers },
  { step: "06", title: "Executive Reporting", description: "Clear, non-technical executive summaries alongside detailed technical reports for IT teams to act upon immediately.", icon: FileSearch },];

export const techCategories: TechCategory[] = [{ label: "Discovery & Inventory", items: [
      { name: "Lansweeper", logo: `${DEVICON}/lansweeper/lansweeper-original.svg` },
      { name: "Device42", logo: `${DEVICON}/device42/device42-original.svg` },
      { name: "ServiceNow CMDB", logo: `${DEVICON}/servicenowcmdb/servicenowcmdb-original.svg` },
      { name: "Qualys", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Security Scanning", items: [
      { name: "Nessus", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Burp Suite", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Rapid7", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Tenable", logo: `${DEVICON}/tenable/tenable-original.svg` },
      { name: "CrowdStrike", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Performance Monitoring", items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Splunk", logo: `${DEVICON}/splunk/splunk-original-wordmark.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "Dynatrace", logo: `${DEVICON}/dynatrace/dynatrace-original.svg` }
    ] },
  { label: "Compliance", items: [
      { name: "Vanta", logo: `${DEVICON}/vanta/vanta-original.svg` },
      { name: "Drata", logo: `${DEVICON}/drata/drata-original.svg` },
      { name: "OneTrust", logo: `${DEVICON}/onetrust/onetrust-original.svg` },
      { name: "Tugboat Logic", logo: `${DEVICON}/tugboatlogic/tugboatlogic-original.svg` }
    ] },
  { label: "Network Analysis", items: [
      { name: "Wireshark", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SolarWinds", logo: `${DEVICON}/solarwinds/solarwinds-original.svg` },
      { name: "PRTG", logo: `${DEVICON}/prtg/prtg-original.svg` },
      { name: "Nagios", logo: `${DEVICON}/nagios/nagios-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Certified Assessment Experts", description: "CISA, CISSP, and cloud-certified professionals who bring cross-industry assessment experience to every engagement." },
  { icon: Clock, title: "Rapid Turnaround", description: "Streamlined assessment methodology delivers actionable findings in weeks, not months — without disrupting daily operations." },
  { icon: TrendingUp, title: "Actionable Roadmaps", description: "Every assessment concludes with a prioritized improvement plan tied to business outcomes, not just a list of findings." },
  { icon: HeartHandshake, title: "Vendor-Neutral Guidance", description: "Technology recommendations based on your needs — not vendor partnerships — ensuring honest, unbiased assessments." },];
