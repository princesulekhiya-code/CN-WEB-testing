import {
  Server,
  Shield,
  Network,
  Cloud,
  Lock,
  Fingerprint,
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
  titleTop: "Infrastructure &",
  titleBottom: "Cloud Security",
  description:
    "Network segmentation, zero-trust architecture, cloud security posture management, and endpoint protection to secure your entire infrastructure from edge to cloud.",
  heroImage: "/images/stock/stock-d2cb4997ca.jpg",
  heroImageAlt: "Infrastructure Security & Network",
  topBadge: { icon: null as any, title: "Zero Trust", subtitle: "Network security", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Multi-Layer", subtitle: "Defense in depth", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 200, suffix: "+", label: "Security Audits" },
    { value: 99, suffix: "%", label: "Threat Detection" },
    { value: 50, suffix: "+", label: "Clients Protected" },
    { value: 15, suffix: "+", label: "Years Expertise" },
  ],
  primaryCtaLabel: "Get Security Assessment",
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Infrastructure & Cloud Security",
  headingWhite: "Services",
  subtitle:
    "Comprehensive infrastructure protection — from network perimeters to cloud workloads and everything in between.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Infrastructure Security",
  headingWhite: "Process",
  subtitle: "A systematic approach to securing your infrastructure from assessment through continuous hardening.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Infrastructure Security",
  headingWhite: "Tools",
  subtitle:
    "Enterprise-grade network, cloud, container, identity, and endpoint security platforms.",
};

export const ctaProps: CTAProps = {
  headingTop: "Secure Your Infrastructure",
  headingBottom: "From Edge to Cloud",
  description:
    "Get a comprehensive infrastructure security assessment and a clear roadmap to a hardened, zero-trust architecture that scales with your business.",
  primaryCtaLabel: "Get Security Assessment",
};

export const services: ServiceOffering[] = [
  {
    icon: Network,
    title: "Network Segmentation & Firewalls",
    description:
      "Design and implement network segmentation, next-gen firewalls, micro-segmentation, and DMZ architectures to contain threats and minimize blast radius.",
    features: ["Micro-segmentation", "Next-gen firewalls", "DMZ design"],
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description:
      "Implement zero-trust security with continuous verification, least-privilege access, and never-trust-always-verify policies across your entire infrastructure.",
    features: ["Continuous verification", "Least privilege", "Policy enforcement"],
  },
  {
    icon: Cloud,
    title: "Cloud Security Posture (CSPM)",
    description:
      "Continuous monitoring and remediation of cloud misconfigurations across AWS, Azure, and GCP with automated compliance checks and drift detection.",
    features: ["AWS/Azure/GCP", "Auto-remediation", "Drift detection"],
  },
  {
    icon: Server,
    title: "Container & Kubernetes Security",
    description:
      "Secure container images, runtime protection, pod security policies, network policies, and secrets management for production Kubernetes environments.",
    features: ["Image scanning", "Runtime protection", "Secrets management"],
  },
  {
    icon: Shield,
    title: "Endpoint Protection",
    description:
      "Next-gen endpoint protection with EDR, behavioral analysis, application whitelisting, and device management for comprehensive endpoint security.",
    features: ["EDR deployment", "Behavioral analysis", "Device management"],
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description:
      "Centralized IAM with SSO, MFA, RBAC, privileged access management, and identity governance to control who accesses what across your organization.",
    features: ["SSO & MFA", "PAM", "Identity governance"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Infrastructure Assessment",
    description:
      "Map your infrastructure landscape, identify critical assets, and assess current security controls across on-premise, cloud, and hybrid environments.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Design target security architecture with defense-in-depth, zero-trust principles, and compliance-aligned controls for your specific environment.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Deploy security controls, configure firewalls, implement IAM policies, and set up monitoring across all infrastructure components.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Testing & Validation",
    description:
      "Validate security controls with penetration testing, configuration audits, and attack simulation to ensure effective protection.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "Monitoring Setup",
    description:
      "Configure continuous monitoring, alerting, and automated response for infrastructure security events across all environments.",
    icon: Network,
  },
  {
    step: "06",
    title: "Hardening & Optimization",
    description:
      "Ongoing hardening, patch management, policy tuning, and infrastructure security reviews to maintain strong security posture.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Network Security",
    items: [
      { name: "Palo Alto", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Fortinet", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Cisco", logo: `${DEVICON}/cisco/cisco-original.svg` },
      { name: "Zscaler", logo: `${DEVICON}/zscaler/zscaler-original.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
    ],
  },
  {
    label: "Cloud Security",
    items: [
      { name: "AWS Security Hub", logo: `${DEVICON}/awssecurityhub/awssecurityhub-original.svg` },
      { name: "Azure Defender", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google SCC", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Prisma Cloud", logo: `${DEVICON}/prisma/prisma-original.svg` },
      { name: "Wiz", logo: `${DEVICON}/wiz/wiz-original.svg` },
    ],
  },
  {
    label: "Container Security",
    items: [
      { name: "Aqua Security", logo: `${DEVICON}/aquasecurity/aquasecurity-original.svg` },
      { name: "Twistlock", logo: `${DEVICON}/twistlock/twistlock-original.svg` },
      { name: "Sysdig", logo: `${DEVICON}/sysdig/sysdig-original.svg` },
      { name: "Falco", logo: `${DEVICON}/falco/falco-original.svg` },
      { name: "Trivy", logo: `${DEVICON}/trivy/trivy-original.svg` },
    ],
  },
  {
    label: "Identity & Access",
    items: [
      { name: "Okta", logo: `${DEVICON}/okta/okta-original.svg` },
      { name: "Azure AD", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "CyberArk", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/vault/vault-original.svg` },
      { name: "AWS IAM", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    ],
  },
  {
    label: "Endpoint",
    items: [
      { name: "CrowdStrike", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "SentinelOne", logo: `${DEVICON}/sentinelone/sentinelone-original.svg` },
      { name: "Microsoft Defender", logo: `${DEVICON}/microsoftdefender/microsoftdefender-original.svg` },
      { name: "Carbon Black", logo: `${DEVICON}/carbon/carbon-original.svg` },
      { name: "Tanium", logo: `${DEVICON}/tanium/tanium-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Infrastructure Security Experts",
    description:
      "Certified cloud and network security architects (CCSP, CCNP, AWS Security) with deep experience across hybrid and multi-cloud environments.",
  },
  {
    icon: Clock,
    title: "Defense-in-Depth",
    description:
      "Layered security approach that ensures no single point of failure — with overlapping controls protecting your most critical infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Cloud-Native Expertise",
    description:
      "Deep experience securing AWS, Azure, and GCP workloads with cloud-native tools and automated security controls from day one.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Hardening",
    description:
      "Ongoing vulnerability management, patch orchestration, and configuration compliance to keep your infrastructure secure as threats evolve.",
  },
];
