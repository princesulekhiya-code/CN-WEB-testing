import { BadgeCheck, Globe2, Shield, KeyRound, Bug, Siren, Search, Map, Wrench, Crosshair, FileCheck, Activity, Lock, Server, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "SaaS Security",
  titleBottom: "& Compliance",
  description: "Best industry practices to maintain SaaS product security and ensure meeting industry compliance standards.",
  heroImage: "/images/stock/stock-bec6bc3726.jpg",
  heroImageAlt: "SaaS Security & Compliance",
  topBadge: { icon: null as any, title: "SOC 2 & ISO", subtitle: "Compliance-first", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Zero Trust", subtitle: "Security model", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Platform Uptime" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering strategy, build, and operations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Don&apos;t let your idea remain just an idea. Partner with us to transform it into a revenue-generating SaaS reality." };

export const services: ServiceOffering[] = [{ icon: BadgeCheck, title: "SOC 2 Compliance", description: "Control mapping, evidence collection, and operating practices aligned to SOC 2 trust criteria.", features: ["Control matrix", "Evidence packs", "Vendor alignment"] },
  { icon: Globe2, title: "GDPR Implementation", description: "Data inventory, lawful bases, DSR workflows, and DPIAs for EU-facing SaaS products.", features: ["RoPA", "DSR tooling", "Privacy UX"] },
  { icon: Shield, title: "Identity & Access Management", description: "SSO, MFA, RBAC, and session policies that match your enterprise customers.", features: ["SSO/SAML", "MFA policies", "Least privilege"] },
  { icon: KeyRound, title: "Data Encryption", description: "Encryption in transit and at rest, key rotation, and secrets hygiene across services.", features: ["KMS integration", "TLS everywhere", "Secrets vault"] },
  { icon: Bug, title: "Penetration Testing", description: "Scoped offensive testing with remediation tracking and regression validation.", features: ["Web/API scope", "Findings triage", "Fix verification"] },
  { icon: Siren, title: "Incident Response", description: "Playbooks, on-call routing, and customer comms templates for security events.", features: ["IR runbooks", "Forensics hooks", "Status updates"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Security Assessment", description: "Threat modeling, asset inventory, and gap analysis against your risk appetite.", icon: Search },
  { step: "02", title: "Compliance Mapping", description: "Translate frameworks into concrete controls, owners, and evidence expectations.", icon: Map },
  { step: "03", title: "Implementation", description: "Harden configs, IAM, logging, and data protections with measurable acceptance criteria.", icon: Wrench },
  { step: "04", title: "Pen Testing", description: "Validate fixes and discover issues before adversaries do with structured retesting.", icon: Crosshair },
  { step: "05", title: "Audit Preparation", description: "Evidence readiness, auditor Q&A, and control walkthrough rehearsals.", icon: FileCheck },
  { step: "06", title: "Continuous Monitoring", description: "Detections, vulnerability management, and security metrics in your SDLC.", icon: Activity },];

export const techCategories: TechCategory[] = [{ label: "Identity", items: [
      { name: "Auth0", logo: `${DEVICON}/auth0/auth0-original.svg` },
      { name: "Okta", logo: `${DEVICON}/okta/okta-original.svg` },
      { name: "AWS Cognito", logo: `${DEVICON}/awscognito/awscognito-original.svg` },
      { name: "Firebase Auth", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Keycloak", logo: `${DEVICON}/redhat/redhat-original.svg` }
    ] },
  { label: "Encryption", items: [
      { name: "AES-256", logo: `${DEVICON}/aes256/aes256-original.svg` },
      { name: "TLS 1.3", logo: `${DEVICON}/tls13/tls13-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` },
      { name: "AWS KMS", logo: `${DEVICON}/awskms/awskms-original.svg` },
      { name: "Let's Encrypt", logo: `${DEVICON}/letsencrypt/letsencrypt-original.svg` }
    ] },
  { label: "Compliance", items: [
      { name: "SOC 2", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "GDPR", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "HIPAA", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "ISO 27001", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "PCI DSS", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Monitoring", items: [
      { name: "Datadog", logo: `${DEVICON}/datadog/datadog-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "Snyk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SonarQube", logo: `${DEVICON}/sonarqube/sonarqube-original.svg` },
      { name: "OWASP ZAP", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Infrastructure", items: [
      { name: "WAF", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "DDoS Protection", logo: `${DEVICON}/ddosprotection/ddosprotection-original.svg` },
      { name: "VPN", logo: `${DEVICON}/vpn/vpn-original.svg` },
      { name: "Zero Trust", logo: `${DEVICON}/zerotrust/zerotrust-original.svg` },
      { name: "SIEM", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
