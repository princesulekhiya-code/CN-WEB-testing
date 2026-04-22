"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Lock,
  Activity,
  FileCheck,
  ShieldAlert,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Search,
  Target,
  Layers,
  Settings,
  Database,
  Users,
  Clock,
  HeartHandshake,
  Award,
  ShieldCheck,
  Zap,
  BarChart3,
  Stethoscope,
  CreditCard,
  ShoppingCart,
  GraduationCap,
  Landmark,
  Banknote,
  Factory,
  Scale,
  Radar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useAnimatedCount(target: number, active: boolean, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      let raf: number;
      const animate = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay]);
  return count;
}

interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const services: ServiceOffering[] = [
  {
    icon: Search,
    title: "Security Assessment & Pen Testing",
    description: "Surface gaps before adversaries exploit them — disciplined evaluations, authentic attack scenarios, and remediation priorities you can execute with confidence.",
    features: ["Vulnerability scans", "Pen tests", "Executive readouts"],
    href: "/services/cybersecurity-compliance/security-assessment",
  },
  {
    icon: Lock,
    title: "Data Protection & Encryption",
    description: "Safeguard sensitive information end to end through classification, robust cryptography, and least-privilege access that reflects privacy and regulatory norms.",
    features: ["Encryption", "DLP & IAM", "Key management"],
    href: "/services/cybersecurity-compliance/data-protection",
  },
  {
    icon: Radar,
    title: "Threat Monitoring & SOC",
    description: "Round-the-clock insight into anomalous behavior — correlated signals, enriched context, and response runbooks calibrated to your risk appetite and compliance duties.",
    features: ["SIEM & SOAR", "Threat intel", "Real-time alerting"],
    href: "/services/cybersecurity-compliance/threat-monitoring",
  },
  {
    icon: FileCheck,
    title: "Compliance & Regulatory Frameworks",
    description: "Stand up audit-defensible controls for SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001, and industry-specific examinations — while preserving delivery velocity.",
    features: ["Control mapping", "Policy packs", "Audit prep"],
    href: "/services/cybersecurity-compliance/compliance-frameworks",
  },
  {
    icon: ShieldAlert,
    title: "Incident Response & Recovery",
    description: "Shorten attacker dwell time and limit operational fallout via rehearsed playbooks, digital forensics, containment, and recovery strategies validated ahead of a live event.",
    features: ["IR planning", "Forensics", "BCDR"],
    href: "/services/cybersecurity-compliance/incident-response",
  },
  {
    icon: Boxes,
    title: "Infrastructure & Cloud Security",
    description: "Strengthen networks, multi-cloud environments, containers, and endpoints using zero-trust principles, posture governance, and ongoing configuration integrity checks.",
    features: ["Zero trust", "CSPM/CWPP", "K8s security"],
    href: "/services/cybersecurity-compliance/infrastructure-security",
  },
];

const processSteps = [
  { step: "01", title: "Scope & Threat Modeling", description: "Inventory critical assets, delineate trust zones, and model credible threat paths so every control and test reflects true business exposure.", icon: Target },
  { step: "02", title: "Baseline Assessment", description: "Gather substantiating artifacts across identity, data, endpoints, cloud, and applications to produce a ranked picture of where gaps matter most.", icon: ClipboardList },
  { step: "03", title: "Control Design", description: "Engineer compensating safeguards, encryption perimeters, logging architectures, and least-privilege models that satisfy your chosen frameworks.", icon: Layers },
  { step: "04", title: "Implementation", description: "Roll out tooling, tighten configurations, weave in observability, and stress-test defenses under lifelike operating conditions.", icon: Settings },
  { step: "05", title: "Validation & Testing", description: "Penetration tests, tabletop exercises, and control-effectiveness scrutiny that demonstrate genuine preparedness rather than superficial compliance.", icon: Shield },
  { step: "06", title: "Continuous Improvement", description: "Operating metrics, periodic threat reassessments, and roadmap stewardship so security maturity evolves alongside product releases and cloud drift.", icon: Activity },
];

const techCategories: { label: string; items: { name: string; logo: string }[] }[] = [
  {
    label: "SIEM & Detection",
    items: [
      { name: "Splunk", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Microsoft Sentinel", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Elastic SIEM", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Chronicle", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "QRadar", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Devo", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
  {
    label: "Vulnerability & AppSec",
    items: [
      { name: "Qualys", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Tenable", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Burp Suite", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Snyk", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Veracode", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Checkmarx", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "OWASP ZAP", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
  {
    label: "Identity & Access",
    items: [
      { name: "Okta", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Azure AD", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Ping", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "CyberArk", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "HashiCorp Vault", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "AWS IAM", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    ],
  },
  {
    label: "Cloud Posture",
    items: [
      { name: "Prisma Cloud", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Wiz", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Orca", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Defender for Cloud", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "AWS Security Hub", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Falco", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
  {
    label: "Endpoint & Email",
    items: [
      { name: "CrowdStrike", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "SentinelOne", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Microsoft Defender", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Proofpoint", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Mimecast", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
  {
    label: "GRC & Evidence",
    items: [
      { name: "Vanta", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Drata", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "ServiceNow GRC", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Archer", logo: `${DEVICON}/devicon/devicon-original.svg` },
      { name: "Jira + Confluence", logo: `${DEVICON}/devicon/devicon-original.svg` },
    ],
  },
]

const industries = [
  { icon: Stethoscope, name: "Healthcare", desc: "Safeguards aligned with HIPAA and robust BAAs" },
  { icon: CreditCard, name: "FinTech", desc: "Stacks engineered for fraud resistance and audit readiness" },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Narrowed PCI footprint and hardened checkout flows" },
  { icon: GraduationCap, name: "Education", desc: "Protection of student records and disciplined access governance" },
  { icon: Landmark, name: "Government", desc: "FedRAMP-caliber discipline and third-party risk oversight" },
  { icon: Banknote, name: "Banking", desc: "Operational resilience, fraud controls, and regulatory fit" },
  { icon: Factory, name: "Manufacturing", desc: "OT/IT separation and disciplined vendor assurance" },
  { icon: Scale, name: "Legal", desc: "Client confidentiality, retention policy, and eDiscovery preparedness" },
];

const whyChoose = [
  { icon: Award, title: "Credentialed Security Practitioners", description: "Specialists spanning offensive operations, cloud architecture, and governance, risk, and compliance — certified and battle-tested in highly regulated settings." },
  { icon: Activity, title: "Always-On Threat Oversight", description: "Detection engineering and analyst depth scaled to your incident classifications and the service levels you promise customers." },
  { icon: FileCheck, title: "Evidence-Led Compliance", description: "Controls conceived as proof — documentation, telemetry, and change trails reviewers can trace without last-minute rescue work." },
  { icon: Shield, title: "Forward-Looking Defense", description: "Adversary simulations, ongoing validation, and drift sensing so weaknesses appear in scheduled reviews — not breaking news." },
];

const stats: { label: string; value: number; suffix: string; isDecimal?: boolean }[] = [
  { value: 500, suffix: "+", label: "Security Audits Delivered" },
  { value: 99, suffix: ".9%", label: "Threat-Detection Accuracy" },
  { value: 50, suffix: "+", label: "Earned Compliance Certifications" },
  { value: 24, suffix: "/7", label: "Security Operations Coverage" },
];

export default function CybersecurityCompliancePage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            <ArrowLeft size={16} /> Return to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Cybersecurity
                <br />
                <span className="text-[#4EB3E8]">& Compliance</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Lower breach exposure and meet regulatory expectations through structured assessments, continuous monitoring, and compliance initiatives engineered for modern cloud platforms and software delivery.
              </p>
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
                >
                  Request a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
            <HeroStats />
          </div>
        </div>
      </div>

      <ServiceOfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <IndustriesSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}


function SecurityHeroIllustration() {
  return (
    <motion.div className="relative w-full max-w-md mx-auto aspect-[4/3]" initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-black/[0.06] dark:border-white/[0.06]">
        <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80" alt="Cybersecurity and compliance" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#4EB3E8]/10 dark:from-black/50 dark:via-black/10 dark:to-[#4EB3E8]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4EB3E8]/10"><ShieldCheck className="w-4 h-4 text-[#4EB3E8]" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">Zero Breach</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Track record</div></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
          <div><div className="text-sm font-bold text-black dark:text-white">SOC 2 Ready</div><div className="text-[10px] font-medium text-black/40 dark:text-white/40">Compliance certified</div></div>
        </div>
      </motion.div>
      <div className="absolute -inset-8 -z-10 bg-gradient-to-br from-[#4EB3E8]/20 via-[#4EB3E8]/5 to-transparent rounded-3xl blur-3xl opacity-60 dark:opacity-40" />
    </motion.div>
  );
}

function HeroStats() {
  const { ref, visible } = useInView(0.3);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 150);
  const c2 = useAnimatedCount(stats[2].value, visible, 300);
  const counts = [c0, c1, c2];

  return (
    <div ref={ref} className="space-y-8">
      <SecurityHeroIllustration />
      <div
        className={`grid grid-cols-4 gap-3 transition-all duration-700 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl md:text-2xl font-bold text-[#4EB3E8] tabular-nums">
              {stat.isDecimal ? stat.value : counts[Math.min(i, 2)]}{stat.suffix}
            </div>
            <div className="mt-0.5 text-[10px] md:text-xs font-medium text-black/40 dark:text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


const serviceCardLogos: { logos: string[]; accent: string }[] = [
  { logos: ["linux/linux-original.svg", "python/python-original.svg", "bash/bash-original.svg"], accent: "#E53E3E" },
  { logos: ["python/python-original.svg", "linux/linux-original.svg", "nodejs/nodejs-original.svg"], accent: "#38A169" },
  { logos: ["elasticsearch/elasticsearch-original.svg", "grafana/grafana-original.svg", "prometheus/prometheus-original.svg"], accent: "#F6AD55" },
  { logos: ["python/python-original.svg", "nodejs/nodejs-original.svg", "linux/linux-original.svg"], accent: "#4299E1" },
  { logos: ["linux/linux-original.svg", "python/python-original.svg", "docker/docker-original.svg"], accent: "#9F7AEA" },
  { logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "azure/azure-original.svg", "googlecloud/googlecloud-original.svg"], accent: "#4EB3E8" },
];

function ServiceCardIllustration({ index }: { index: number }) {
  const data = serviceCardLogos[index] || serviceCardLogos[0];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
          <Image src={`${DEVICON}/${data.logos[0]}`} alt="" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed opacity-20 group-hover:opacity-40 group-hover:rotate-[30deg] transition-all duration-1000" style={{ borderColor: data.accent }} />
      <div className="absolute top-2 right-8 md:top-3 md:right-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[1]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute bottom-2 left-8 md:bottom-3 md:left-12 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[2]}`} alt="" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7 object-contain" unoptimized />
        </div>
      </div>
      <div className="absolute top-5 left-14 w-2 h-2 rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute bottom-8 right-14 w-1.5 h-1.5 rounded-full opacity-15 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute top-12 left-6 w-1 h-1 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute w-24 h-24 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
    </div>
  );
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EB3E8]/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">Capabilities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">What We <span className="text-black dark:text-white">Deliver</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Full-spectrum offerings calibrated to your risk profile, regulatory landscape, and pace of delivery.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}>
                <Link href={service.href} className="group relative block h-full rounded-2xl border border-black/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.04] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.05] dark:to-[#4EB3E8]/[0.02] border-b border-black/[0.04] dark:border-white/[0.04] group-hover:from-[#4EB3E8]/[0.06] group-hover:to-[#4EB3E8]/[0.03] transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                      <ServiceCardIllustration index={i} />
                    </div>
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-sm group-hover:bg-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/20 transition-all duration-300">
                      <Icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-[#4EB3E8] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="relative p-5 md:p-6">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500">
                          <CheckCircle2 className="w-3 h-3" />{f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center text-[13px] font-semibold text-[#4EB3E8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Discover more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">Engagement Model</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Our Delivery <span className="text-black dark:text-white">Process</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A proven, field-hardened approach that upholds rigor, clear communication, and dependable timelines.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/15 to-[#4EB3E8]/5" />
          </div>
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30, x: 0 }} animate={visible ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }} className="relative mb-16 last:mb-0">
                <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-12" : ""}>
                    {isLeft && (
                      <div className="group flex flex-col items-end text-right rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px] ml-auto">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <div className="group relative">
                      <motion.div className="absolute inset-0 rounded-2xl border border-[#4EB3E8]/20" initial={{ scale: 1, opacity: 0 }} animate={visible ? { scale: [1, 1.5, 1.5], opacity: [0, 0.3, 0] } : {}} transition={{ duration: 2, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 3 }} />
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#4EB3E8] flex items-center justify-center z-10">
                        <span className="text-[9px] font-bold text-white">{step.step}</span>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-lg shadow-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/50 group-hover:shadow-[#4EB3E8]/20 group-hover:scale-110 transition-all duration-500">
                        <StepIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-12" : ""}>
                    {!isLeft && (
                      <div className="group flex flex-col items-start text-left rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500">
                        <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">Step {step.step}</span>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{step.title}</h3>
                        <p className="mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm">{step.description}</p>
                        <div className="mt-4 flex items-center gap-2 w-full max-w-[200px]">
                          <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
                            <motion.div className="h-full rounded-full bg-[#4EB3E8]/30" initial={{ width: 0 }} animate={visible ? { width: `${((i + 1) / processSteps.length) * 100}%` } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }} />
                          </div>
                          <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">{i + 1}/{processSteps.length}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4EB3E8] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-md shadow-[#4EB3E8]/10">
                      <StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-bold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { ref, visible } = useInView(0.1);
  const [activeTab, setActiveTab] = useState(0);
  const allTechs = techCategories.flatMap((c) => c.items);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4EB3E8]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">Tooling Ecosystem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Powered by <span className="text-black dark:text-white">Leading Platforms</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Enterprise-grade technologies and frameworks underpinning every engagement we run.</p>
        </motion.div>
        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {techCategories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveTab(i)} className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${activeTab === i ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"}`}>{cat.label}</button>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
              {techCategories[activeTab].items.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }} className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-300 cursor-default">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Image src={tech.logo} alt={tech.name} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" unoptimized />
                  </div>
                  <span className="relative text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div className="mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06]" initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <p className="text-center text-sm font-semibold text-black/30 dark:text-white/25 uppercase tracking-[0.2em] mb-8">Plus a broad portfolio of additional platforms in active use</p>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="group flex overflow-hidden w-full [--gap:3.5rem] md:[--gap:4.5rem] [--duration:40s] gap-[var(--gap)]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
                  {allTechs.map((tech, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap" title={tech.name}>
                      <Image src={tech.logo} alt={tech.name} width={32} height={32} className="w-8 h-8 md:w-9 md:h-9 object-contain flex-shrink-0" unoptimized />
                      <span className="text-sm md:text-base font-medium text-black/50 dark:text-white/40">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function IndustriesSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">Sectors</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Industries We <span className="text-black dark:text-white">Serve</span></h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">Depth across regulated and commercial verticals — each program reflects the nuances of how you operate.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const IndIcon = ind.icon;
            return (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }} className="group relative rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] p-5 hover:border-[#4EB3E8]/20 hover:bg-[#4EB3E8]/[0.03] dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/15 mb-3 group-hover:bg-[#4EB3E8]/15 group-hover:scale-110 transition-all duration-300">
                    <IndIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{ind.name}</h3>
                  <p className="mt-1 text-xs font-medium text-black/40 dark:text-white/40">{ind.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block text-[11px] font-semibold text-[#4EB3E8] uppercase tracking-[0.2em] mb-4">The Cloud Nexus Difference</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">Why Partner With <span className="text-black dark:text-white">Cloud Nexus</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} className="group relative text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-white/60 dark:bg-white/[0.02] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4EB3E8]/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 group-hover:bg-[#4EB3E8]/15 group-hover:scale-110 transition-all duration-300">
                    <ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.25);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Ready to Protect Your
          <br />
          <span className="text-[#4EB3E8]">Digital Estate?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Outline your technical footprint and compliance objectives — we will return a sequenced plan covering validation, continuous monitoring, and defensible evidence capture.
        </p>
        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20"
          >
            Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
