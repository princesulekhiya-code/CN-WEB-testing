import {
  Box,
  Boxes,
  Package,
  Network,
  Container,
  Globe2,
  Target,
  Server,
  Plug,
  Layers,
  Rocket,
  Award,
  TrendingUp,
  Zap,
  HeartHandshake,
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
  backHref: "/services/devops-cloud-automation",
  backLabel: "Back to DevOps & Cloud Automation",
  titleTop: "Containerization",
  titleBottom: "& Orchestration",
  description:
    "Package applications consistently, run them at scale on Kubernetes, and add mesh-level controls when traffic complexity demands it.",
  heroImage: "/images/stock/stock-6355372f4e.jpg",
  heroImageAlt: "Docker & Kubernetes Containers",
  topBadge: {
    icon: null as any,
    title: "Docker & K8s",
    subtitle: "Container experts",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "Auto-Scale",
    subtitle: "Elastic infra",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 150, suffix: "+", label: "Pipelines Built" },
    { value: 70, suffix: "%", label: "Deploy Faster" },
    { value: 99, suffix: "%", label: "Uptime Achieved" },
    { value: 40, suffix: "+", label: "Teams Enabled" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Service",
  headingWhite: "Offerings",
  subtitle:
    "Six focused capabilities covering images, Kubernetes operations, packaging, mesh, registries, and multi-cluster patterns.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our",
  headingWhite: "Process",
  subtitle: "Six phases on an alternating vertical timeline.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technology",
  headingWhite: "Stack",
  subtitle: "Representative tools by category.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Containerize Your",
  headingBottom: "Applications?",
  description:
    "Let us help you standardize packaging, streamline Kubernetes operations, and scale confidently across environments.",
};

export const services: ServiceOffering[] = [
  {
    icon: Box,
    title: "Docker Containerization",
    description:
      "Production-ready images with minimal attack surface, reproducible builds, and clear supply-chain metadata.",
    features: ["Multi-stage builds", "SBOM hooks", "Base image policy"],
  },
  {
    icon: Boxes,
    title: "Kubernetes Cluster Management",
    description: "Cluster lifecycle, upgrades, node pools, and reliability patterns tuned for your workloads and SLOs.",
    features: ["HA control plane", "Upgrades", "Capacity planning"],
  },
  {
    icon: Package,
    title: "Helm Chart Development",
    description: "Versioned charts, values layering, and release automation that keep environments consistent and auditable.",
    features: ["Chart testing", "GitOps hooks", "Rollback paths"],
  },
  {
    icon: Network,
    title: "Service Mesh Implementation",
    description:
      "mTLS, traffic policies, and observability across services without scattering cross-cutting logic in app code.",
    features: ["Traffic shaping", "Retries/timeouts", "Golden signals"],
  },
  {
    icon: Container,
    title: "Container Registry Management",
    description: "Signing, retention, vulnerability workflows, and promotion rules from dev artifacts to production.",
    features: ["Image signing", "CVE gates", "Promotion flows"],
  },
  {
    icon: Globe2,
    title: "Multi-Cluster & Federation",
    description: "Patterns for active-active, disaster recovery, and fleet operations when one cluster is not enough.",
    features: ["Fleet policy", "DR drills", "Ingress strategy"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Workload Discovery",
    description: "Inventory services, dependencies, data gravity, and non-negotiables like compliance and latency.",
    icon: Target,
  },
  {
    step: "02",
    title: "Container Baseline",
    description: "Define image standards, CI build steps, and registry strategy aligned to your security posture.",
    icon: Box,
  },
  {
    step: "03",
    title: "Cluster Design",
    description: "Networking, identity, autoscaling, and add-ons chosen for operability at day two and beyond.",
    icon: Server,
  },
  {
    step: "04",
    title: "Implementation",
    description: "Roll out workloads, ingress, secrets, and GitOps workflows with safe promotion paths.",
    icon: Plug,
  },
  {
    step: "05",
    title: "Mesh & Hardening",
    description: "Optional mesh rollout, policy guardrails, and chaos-ready health checks before peak traffic.",
    icon: Layers,
  },
  {
    step: "06",
    title: "Operational Handover",
    description: "Dashboards, runbooks, and training so your platform team can run the stack confidently.",
    icon: Rocket,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Containers",
    items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Podman", logo: `${DEVICON}/podman/podman-original.svg` },
      { name: "Buildah", logo: `${DEVICON}/buildah/buildah-original.svg` },
      { name: "containerd", logo: `${DEVICON}/containerd/containerd-original.svg` },
    ],
  },
  {
    label: "Orchestration",
    items: [
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "EKS", logo: `${DEVICON}/eks/eks-original.svg` },
      { name: "AKS", logo: `${DEVICON}/aks/aks-original.svg` },
      { name: "GKE", logo: `${DEVICON}/gke/gke-original.svg` },
      { name: "Rancher", logo: `${DEVICON}/rancher/rancher-original.svg` },
    ],
  },
  {
    label: "Service Mesh",
    items: [
      { name: "Istio", logo: `${DEVICON}/istio/istio-original.svg` },
      { name: "Linkerd", logo: `${DEVICON}/linkerd/linkerd-original.svg` },
      { name: "Consul Connect", logo: `${DEVICON}/consul/consul-original.svg` },
      { name: "Envoy", logo: `${DEVICON}/envoy/envoy-original.svg` },
    ],
  },
  {
    label: "Package Management",
    items: [
      { name: "Helm", logo: `${DEVICON}/helm/helm-original.svg` },
      { name: "Kustomize", logo: `${DEVICON}/kustomize/kustomize-original.svg` },
      { name: "Skaffold", logo: `${DEVICON}/skaffold/skaffold-original.svg` },
      { name: "Tilt", logo: `${DEVICON}/tilt/tilt-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Quality Solutions",
    description:
      "Advanced features and functionalities that improve overall business operations and efficiency.",
  },
  {
    icon: TrendingUp,
    title: "CI/CD Approach",
    description:
      "Agile delivery with automated pipelines — ship smaller changes with confidence and measurable lead time.",
  },
  {
    icon: Zap,
    title: "Data Security",
    description:
      "Standard practices to keep secrets, artifacts, and environments protected at every stage of delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Knowledge Transfer",
    description:
      "Runbooks, templates, and team enablement so your engineers own and extend the platform long term.",
  },
];
