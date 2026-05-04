"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cloud, Server, Shield, Gauge, GitBranch, Database,
  ArrowRight, Monitor, Wifi, Lock, Eye, Cctv,
  Cpu, Zap, Globe, CheckCircle2,
  CalendarCheck, Mail, Activity, Network, Layers,
  Timer, RefreshCcw, TrendingUp, Box, Workflow,
  ShieldCheck, Fingerprint, KeyRound, FileCheck,
} from "lucide-react";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let n = 0;
        const step = Math.max(1, Math.floor(value / 35));
        const id = setInterval(() => {
          n = Math.min(n + step, value);
          el.textContent = `${n}${suffix}`;
          if (n >= value) clearInterval(id);
        }, 25);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 99, suffix: ".9%", label: "Uptime SLA", icon: Activity },
  { value: 3, suffix: "+", label: "Cloud Regions", icon: Globe },
  { value: 256, suffix: "-bit", label: "Encryption", icon: Lock },
  { value: 24, suffix: "/7", label: "Monitoring", icon: Eye },
  { value: 50, suffix: "+", label: "Tools & Platforms", icon: Layers },
];

const officeCards = [
  { icon: Monitor, title: "Developer Workstations", desc: "High-performance machines with M-series / i9 processors, dual 4K monitors, NVMe SSDs, and 32GB+ RAM for seamless multitasking.", color: "#4EB3E8" },
  { icon: Wifi, title: "Enterprise Network", desc: "1Gbps fiber with redundant ISP failover, mesh Wi-Fi, and VLANs for dev/staging/guest network isolation.", color: "#8b5cf6" },
  { icon: Server, title: "On-Premise Servers", desc: "Dedicated build & staging servers with nightly snapshots, weekly full backups, and 30-day retention policy.", color: "#10b981" },
  { icon: Lock, title: "Physical Security", desc: "Biometric entry, RFID badge systems, visitor management, and multi-factor authentication for all sensitive areas.", color: "#f59e0b" },
  { icon: Cctv, title: "24/7 Surveillance", desc: "Video monitoring across all zones with 90-day footage retention and real-time intrusion alerts.", color: "#ef4444" },
  { icon: Zap, title: "Power Continuity", desc: "Uninterruptible power supply (UPS) with diesel generator backup ensuring zero-downtime during outages.", color: "#06b6d4" },
];

const cloudPlatforms = [
  { name: "Amazon Web Services", logo: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg`, services: ["EC2", "S3", "Lambda", "RDS", "CloudFront", "EKS", "SQS"], color: "#FF9900", desc: "Primary cloud for compute, storage, serverless, and managed databases." },
  { name: "Microsoft Azure", logo: `${DI}/azure/azure-original.svg`, services: ["App Service", "Cosmos DB", "Functions", "AKS", "Blob Storage", "DevOps"], color: "#0078D4", desc: "Enterprise integrations, identity management, and .NET workloads." },
  { name: "Google Cloud", logo: `${DI}/googlecloud/googlecloud-original.svg`, services: ["Compute Engine", "Cloud Run", "BigQuery", "GKE", "Cloud SQL", "Vertex AI"], color: "#4285F4", desc: "Data analytics, ML/AI pipelines, and container-native hosting." },
];

const pipelineSteps = [
  { title: "Code", icon: GitBranch, desc: "Feature branches, pull requests, peer code review, and automated linting.", color: "#4EB3E8" },
  { title: "Build", icon: Box, desc: "Docker image builds, dependency resolution, and artifact registry push.", color: "#8b5cf6" },
  { title: "Test", icon: Shield, desc: "Unit tests, integration tests, E2E tests, and SAST security scanning.", color: "#10b981" },
  { title: "Stage", icon: Server, desc: "Automated deployment to staging environment with UAT and benchmarking.", color: "#f59e0b" },
  { title: "Approve", icon: CheckCircle2, desc: "QA sign-off, client approval, and release candidate tagging.", color: "#06b6d4" },
  { title: "Deploy", icon: Workflow, desc: "Blue-green or canary deployment with zero-downtime rollout.", color: "#ef4444" },
  { title: "Monitor", icon: Activity, desc: "Real-time metrics, structured logging, alerting, and APM dashboards.", color: "#10b981" },
];

const perfMetrics = [
  { metric: "< 200ms", label: "API Response", icon: Timer, color: "#4EB3E8" },
  { metric: "99.99%", label: "Availability", icon: TrendingUp, color: "#10b981" },
  { metric: "< 3s", label: "Page Load", icon: Gauge, color: "#8b5cf6" },
  { metric: "< 15min", label: "Incident Response", icon: RefreshCcw, color: "#f59e0b" },
  { metric: "50+", label: "CDN Nodes", icon: Network, color: "#ef4444" },
  { metric: "Auto", label: "Scaling", icon: Layers, color: "#06b6d4" },
];

const toolTabs = [
  { label: "Containers", tools: [
    { name: "Docker", logo: `${DI}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DI}/kubernetes/kubernetes-original.svg` },
    { name: "Helm", logo: `${DI}/helm/helm-original.svg` },
    { name: "Podman", logo: `${DI}/podman/podman-original.svg` },
  ] },
  { label: "CI/CD", tools: [
    { name: "GitHub Actions", logo: `${DI}/github/github-original.svg` },
    { name: "GitLab CI", logo: `${DI}/gitlab/gitlab-original.svg` },
    { name: "Jenkins", logo: `${DI}/jenkins/jenkins-original.svg` },
    { name: "ArgoCD", logo: `${DI}/argocd/argocd-original.svg` },
  ] },
  { label: "IaC", tools: [
    { name: "Terraform", logo: `${DI}/terraform/terraform-original.svg` },
    { name: "Ansible", logo: `${DI}/ansible/ansible-original.svg` },
    { name: "Pulumi", logo: `${DI}/pulumi/pulumi-original.svg` },
  ] },
  { label: "Monitoring", tools: [
    { name: "Grafana", logo: `${DI}/grafana/grafana-original.svg` },
    { name: "Prometheus", logo: `${DI}/prometheus/prometheus-original.svg` },
    { name: "ELK Stack", logo: `${DI}/elasticsearch/elasticsearch-original.svg` },
  ] },
  { label: "Databases", tools: [
    { name: "PostgreSQL", logo: `${DI}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DI}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DI}/redis/redis-original.svg` },
    { name: "MySQL", logo: `${DI}/mysql/mysql-original.svg` },
    { name: "Firebase", logo: `${DI}/firebase/firebase-original.svg` },
  ] },
  { label: "Collaboration", tools: [
    { name: "Git", logo: `${DI}/git/git-original.svg` },
    { name: "GitHub", logo: `${DI}/github/github-original.svg` },
    { name: "Jira", logo: `${DI}/jira/jira-original.svg` },
    { name: "Slack", logo: `${DI}/slack/slack-original.svg` },
    { name: "Figma", logo: `${DI}/figma/figma-original.svg` },
  ] },
];

const securityItems = [
  { icon: ShieldCheck, title: "Network Security", desc: "Enterprise firewalls, IDS/IPS, VPN tunnels, and network segmentation for sensitive environments.", color: "#10b981" },
  { icon: Lock, title: "Data Encryption", desc: "AES-256 at rest, TLS 1.3 in transit, and hardware security modules for key management.", color: "#4EB3E8" },
  { icon: Fingerprint, title: "Identity & Access", desc: "RBAC, MFA, SSO, and least-privilege access policies across all systems.", color: "#8b5cf6" },
  { icon: KeyRound, title: "Secrets Management", desc: "HashiCorp Vault with automated rotation, audit trails, and zero-trust policies.", color: "#f59e0b" },
  { icon: Eye, title: "Vulnerability Scanning", desc: "SAST/DAST in CI/CD, penetration testing, and dependency auditing.", color: "#ef4444" },
  { icon: FileCheck, title: "Compliance", desc: "SOC 2 ready, GDPR frameworks, ISO 27001 aligned processes, and audit logging.", color: "#06b6d4" },
];

export default function InfrastructurePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePipe, setActivePipe] = useState(-1);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* ═══ HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#4EB3E8] rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
                Our <span className="text-[#4EB3E8]">Infrastructure</span><br />& Technology Backbone
              </h1>
              <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-xl">
                Multi-cloud architecture, automated CI/CD, defense-in-depth security, and 24/7 observability — engineered for reliability, performance, and scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4EB3E8] text-white text-sm font-semibold hover:bg-[#3a9fd4] transition-all shadow-lg shadow-[#4EB3E8]/20">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  Talk to Engineers
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="/assets/images/infra-hero.png" alt="Server infrastructure data center" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-2.5">
                    {stats.slice(0, 3).map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                          <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" strokeWidth={1.5} />
                          <div>
                            <span className="block text-sm font-black text-white">{s.value}{s.suffix}</span>
                            <span className="text-[9px] font-semibold text-white/50">{s.label}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ STATS BAR ═══ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-lg font-black text-[#4EB3E8]"><Counter value={s.value} suffix={s.suffix} /></span>
                    <span className="text-[10px] font-semibold text-black/40 dark:text-white/35">{s.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ OFFICE INFRASTRUCTURE ═══ */}
      <div className="bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">World-Class <span className="text-[#4EB3E8]">Office Setup</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              Our delivery centers are designed for productivity, security, and collaboration — where world-class software gets built every day.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {officeCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-lg hover:shadow-[#4EB3E8]/[0.04] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: c.color }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-300" style={{ backgroundColor: `${c.color}10`, borderColor: `${c.color}18` }}>
                    <Icon className="w-5 h-5" style={{ color: c.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold mb-2">{c.title}</h3>
                  <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ MULTI-CLOUD ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Multi-Cloud <span className="text-[#4EB3E8]">Architecture</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              We choose the right cloud for each workload — ensuring vendor independence, geographic redundancy, and cost optimization across all deployments.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src="/assets/images/multi-cloud-arch-v2.png" alt="Multi-Cloud Architecture" className="w-full h-[300px] object-contain bg-white dark:bg-white/95 rounded-2xl p-2" />
                </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cloudPlatforms.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="h-1.5" style={{ backgroundColor: p.color }} />
              <div className="p-7">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                    <img src={p.logo} alt={p.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{p.name}</h3>
                    <p className="text-[10px] text-black/40 dark:text-white/35 mt-0.5 leading-snug">{p.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.services.map((s) => (
                    <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] text-black/55 dark:text-white/45 border border-black/[0.04] dark:border-white/[0.04]">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ CI/CD PIPELINE ═══ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Automated <span className="text-[#4EB3E8]">CI/CD Pipeline</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              Every commit triggers an automated pipeline — from code review to production. Click any stage to learn more.
            </p>
          </motion.div>

          <div className="relative">

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3 relative z-10">
              {pipelineSteps.map((s, i) => {
                const Icon = s.icon;
                const isActive = activePipe === i;
                return (
                  <motion.button key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    onClick={() => setActivePipe(isActive ? -1 : i)}
                    className={`group relative flex flex-col items-center gap-3 p-5 lg:p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-white/[0.06] shadow-xl -translate-y-3"
                        : "bg-white dark:bg-white/[0.02] border-black/[0.05] dark:border-white/[0.05] hover:-translate-y-2 hover:shadow-lg"
                    }`}
                    style={isActive ? { borderColor: s.color, boxShadow: `0 8px 30px ${s.color}18` } : {}}>
                    {/* Step number badge */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest text-white transition-all"
                      style={{ backgroundColor: isActive ? s.color : `${s.color}90` }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border"
                      style={{
                        backgroundColor: isActive ? `${s.color}18` : `${s.color}08`,
                        borderColor: isActive ? s.color : `${s.color}15`,
                      }}>
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: s.color }} strokeWidth={1.5} />
                    </div>

                    <p className="text-sm font-bold tracking-tight">{s.title}</p>

                    <p className="text-[10px] text-black/40 dark:text-white/30 leading-snug text-center line-clamp-2 hidden sm:block">{s.desc.split(",")[0]}</p>

                    {/* Arrow between steps (desktop only) */}
                    {i < pipelineSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-[0.85rem] top-1/2 -translate-y-1/2 z-20">
                        <ArrowRight className="w-4 h-4 text-black/15 dark:text-white/15" strokeWidth={2} />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {activePipe >= 0 && (
                <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 28 }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden">
                  <div className="rounded-2xl p-8 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: pipelineSteps[activePipe].color }} />
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                        style={{ backgroundColor: `${pipelineSteps[activePipe].color}12`, borderColor: `${pipelineSteps[activePipe].color}20` }}>
                        {(() => { const Icon = pipelineSteps[activePipe].icon; return <Icon className="w-6 h-6" style={{ color: pipelineSteps[activePipe].color }} strokeWidth={1.5} />; })()}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: pipelineSteps[activePipe].color }}>
                            STEP {String(activePipe + 1).padStart(2, "0")}
                          </span>
                          <h4 className="text-lg font-bold">{pipelineSteps[activePipe].title}</h4>
                        </div>
                        <p className="text-sm text-black/55 dark:text-white/50 leading-relaxed">{pipelineSteps[activePipe].desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ═══ PERFORMANCE ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Performance <span className="text-[#4EB3E8]">Benchmarks</span></h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            Real-world performance standards we maintain across all deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {perfMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group text-center p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${m.color}10` }}>
                  <Icon className="w-5 h-5" style={{ color: m.color }} strokeWidth={1.5} />
                </div>
                <span className="block text-lg md:text-xl font-black" style={{ color: m.color }}>{m.metric}</span>
                <span className="text-[10px] font-semibold text-black/40 dark:text-white/35 mt-1 block">{m.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══ DEV TOOLS ═══ */}
      <div className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.03] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.02] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight"><span className="text-[#4EB3E8]">Development</span> Tools & Platforms</h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              Industry-standard tools powering our development, deployment, and collaboration workflows.
            </p>
          </motion.div>

          <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
              {toolTabs.map((t, i) => (
                <button key={t.label} type="button" onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                    activeTab === i ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35 }} className="flex flex-wrap justify-center gap-4 md:gap-5">
              {toolTabs[activeTab].tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-300 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.9375rem)] lg:w-[calc(16.666%-1rem)]">
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#4EB3E8]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={tool.logo} alt={tool.name} width={48} height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = "none"; (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex"; }} />
                  <span style={{ display: "none" }} className="w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 text-[#4EB3E8] text-lg font-bold">{tool.name.charAt(0)}</span>
                  <span className="text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-300 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ═══ SECURITY ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Defense-in-Depth <span className="text-[#4EB3E8]">Security</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
              Multi-layered security embedded into every aspect of our infrastructure — from network perimeters to application code. Security is our standard, not an afterthought.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=350&fit=crop&q=80" alt="Cybersecurity" className="w-full h-[280px] object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: item.color }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}18` }}>
                  <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold mb-1.5">{item.title}</h4>
                <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-10 sm:p-14 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Built on a <span className="text-[#4EB3E8]">Solid Foundation</span>
              </h2>
              <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
                Our infrastructure supports your most ambitious projects. Let&apos;s discuss how we can architect, build, and scale your next product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#3a9fd4] transition-all shadow-lg shadow-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/30">
                  <CalendarCheck className="w-4 h-4" /> Book Free Consultation
                </Link>
                <Link href="/resources/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <Mail className="w-4 h-4" /> Contact Us
                </Link>
              </div>
              <p className="mt-5 text-xs text-black/30 dark:text-white/25">work@cloudnexus.in &middot; +91 87938 30447</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
