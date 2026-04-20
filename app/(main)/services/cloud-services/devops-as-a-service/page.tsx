"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Settings, GitMerge, Rocket, Shield,
  CheckCircle2, ClipboardList, Gauge, Zap, Layers, Monitor,
  Award, HeartHandshake, Users, Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface ServiceOffering { icon: LucideIcon; title: string; description: string; features: string[]; }

const services: ServiceOffering[] = [
  { icon: GitMerge, title: "CI/CD Pipeline Design", description: "End-to-end continuous integration and delivery pipelines that automate build, test, and deployment workflows for faster releases.", features: ["Pipeline design", "Multi-env deploys", "Rollback safety"] },
  { icon: Layers, title: "Infrastructure as Code", description: "Terraform, CloudFormation, and Pulumi modules that make infrastructure repeatable, versioned, and auditable across environments.", features: ["Terraform", "CloudFormation", "Pulumi"] },
  { icon: Settings, title: "Configuration Management", description: "Ansible, Chef, and Puppet playbooks that enforce consistent server configurations and eliminate configuration drift.", features: ["Ansible", "Drift detection", "Idempotent runs"] },
  { icon: Monitor, title: "Monitoring & Observability", description: "Metrics, logs, and traces unified in a single pane — with alerting and dashboards tuned to your SLOs.", features: ["Metrics & logs", "Distributed tracing", "SLO tracking"] },
  { icon: Shield, title: "DevSecOps Integration", description: "Security scanning, vulnerability management, and compliance checks embedded directly into CI/CD pipelines.", features: ["SAST/DAST", "Container scanning", "Policy gates"] },
  { icon: Rocket, title: "Release Engineering", description: "Blue-green, canary, and feature-flag release strategies that de-risk deployments and enable instant rollback.", features: ["Blue-green", "Canary releases", "Feature flags"] },
];

const processSteps = [
  { step: "01", title: "Current-State Assessment", description: "Audit existing build, test, and deployment workflows to identify bottlenecks and manual toil.", icon: ClipboardList },
  { step: "02", title: "Pipeline Architecture", description: "Design CI/CD topology, branching strategy, environment promotion, and rollback mechanisms.", icon: GitMerge },
  { step: "03", title: "IaC & Automation", description: "Codify infrastructure, implement configuration management, and automate environment provisioning.", icon: Layers },
  { step: "04", title: "Security Integration", description: "Embed SAST, DAST, dependency scanning, and policy gates into the delivery pipeline.", icon: Shield },
  { step: "05", title: "Observability Setup", description: "Instrument applications, configure dashboards, define SLOs, and set up alert routing.", icon: Monitor },
  { step: "06", title: "Team Enablement", description: "Documentation, runbooks, and hands-on training so your team owns the pipeline confidently.", icon: Rocket },
];

const techCategories = [
  { label: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "ArgoCD", "Tekton"] },
  { label: "IaC", items: ["Terraform", "CloudFormation", "Pulumi", "Bicep", "CDK"] },
  { label: "Containers", items: ["Docker", "Kubernetes", "Helm", "Kustomize", "Skaffold"] },
  { label: "Config Management", items: ["Ansible", "Chef", "Puppet", "SaltStack"] },
  { label: "Observability", items: ["Datadog", "Prometheus", "Grafana", "ELK Stack", "Jaeger"] },
  { label: "Security", items: ["Snyk", "Trivy", "SonarQube", "Checkov", "OPA"] },
];

const whyChoose = [
  { icon: Users, title: "Senior DevOps Engineers", description: "Certified engineers with deep experience across AWS, Azure, GCP, and hybrid environments." },
  { icon: Clock, title: "Faster Release Cycles", description: "Reduce deployment lead time from weeks to hours with automated, repeatable pipelines." },
  { icon: Award, title: "Security-First DevOps", description: "DevSecOps embedded from day one — not bolted on as an afterthought." },
  { icon: HeartHandshake, title: "Knowledge Transfer", description: "We build pipelines your team can own — with documentation, runbooks, and hands-on training." },
];

export default function DevOpsAsAServicePage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/cloud-services" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
            <ArrowLeft size={16} /> Back to Cloud Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                DevOps As<br /><span className="text-[#006ea3]">A Service</span>
              </h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Enhance performance, improve efficiency, and increase ROI through CI/CD pipelines, infrastructure as code, and automated delivery workflows designed for velocity.
              </p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
              </div>
            </div>
            <HeroVisual heroReady={heroReady} />
          </div>
        </div>
      </div>
      <ServiceOfferingsSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
      <CTASection />
    </section>
  );
}

function HeroVisual({ heroReady }: { heroReady: boolean }) {
  const items = [{ icon: GitMerge, label: "CI/CD" }, { icon: Layers, label: "IaC" }, { icon: Shield, label: "DevSecOps" }, { icon: Rocket, label: "Releases" }];
  return (
    <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {items.map((item, i) => { const Icon = item.icon; return (
        <div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}>
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20"><Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div>
          <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
        </div>
      ); })}
    </div>
  );
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">DevOps Services</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">End-to-end DevOps — from pipeline design to observability — so your engineering team ships faster with confidence.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => { const Icon = service.icon; return (
          <div key={service.title} className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} /></div>
            <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3>
            <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}
            </div>
          </div>
        ); })}
      </div>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our DevOps Process</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A structured approach — assess, automate, secure, observe, and enable — so DevOps transforms delivery, not just tooling.</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />
          {processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (
            <div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}>
              <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start">
                <div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div>
                <div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div></div>
                <div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div>
              </div>
              <div className="md:hidden flex items-start gap-5 w-full">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} /></div>
                <div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div>
              </div>
            </div>
          ); })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { ref, visible } = useInView(0.15);
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">DevOps Tools & Platforms</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Industry-leading CI/CD, IaC, container, and observability tools for modern software delivery.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, ci) => (
          <div key={cat.label} className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${200 + ci * 100}ms` }}>
            <h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300">{tech}</span>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for DevOps</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChoose.map((item, i) => { const ItemIcon = item.icon; return (
          <div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20"><ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} /></div>
            <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p>
          </div>
        ); })}
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.25);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Ready to Accelerate Your<br /><span className="text-[#006ea3]">Software Delivery?</span></h2>
        <p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Book a DevOps assessment — we&apos;ll audit your pipelines and deliver a roadmap for faster, safer releases.</p>
        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20">Get a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link>
        </div>
      </div>
    </div>
  );
}
