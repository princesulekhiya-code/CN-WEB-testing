"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowLeft, FileCheck, Shield, ClipboardList, Scale,
  BookOpen, Award, Settings, BarChart3, Layers, Rocket,
  CheckCircle2, Users, Clock, HeartHandshake, TrendingUp,
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
  { icon: Shield, title: "SOC 2 Type I & Type II", description: "End-to-end SOC 2 compliance — controls design, evidence collection, gap remediation, and audit preparation for both Type I and Type II certifications.", features: ["Controls design", "Evidence collection", "Audit readiness"] },
  { icon: FileCheck, title: "HIPAA Compliance", description: "Healthcare data protection with HIPAA privacy and security rule implementation, risk assessments, BAA management, and breach notification procedures.", features: ["Privacy rules", "Security rules", "BAA management"] },
  { icon: Scale, title: "GDPR Implementation", description: "Full GDPR compliance with data mapping, privacy impact assessments, consent management, data subject rights workflows, and DPO advisory.", features: ["Data mapping", "DPIA", "Consent management"] },
  { icon: ClipboardList, title: "PCI-DSS Certification", description: "Payment card industry compliance with network segmentation, encryption standards, access controls, and vulnerability management for secure payment processing.", features: ["Network segmentation", "Encryption standards", "Access controls"] },
  { icon: Award, title: "ISO 27001 Implementation", description: "Information security management system (ISMS) implementation with risk assessment, controls implementation, internal audits, and certification preparation.", features: ["ISMS setup", "Risk assessment", "Certification prep"] },
  { icon: BookOpen, title: "Regulatory Audit Preparation", description: "Comprehensive audit readiness with control documentation, evidence repositories, staff training, and mock audit exercises to ensure smooth certification.", features: ["Control documentation", "Mock audits", "Staff training"] },
];

const processSteps = [
  { step: "01", title: "Scope & Gap Analysis", description: "Identify applicable frameworks, map current controls, and assess gaps against compliance requirements to establish a clear remediation roadmap.", icon: Settings },
  { step: "02", title: "Controls Design", description: "Design and document security controls, policies, and procedures that satisfy compliance requirements while remaining practical for your team.", icon: Shield },
  { step: "03", title: "Implementation", description: "Deploy technical controls, update policies, configure monitoring, and implement processes required by each compliance framework.", icon: Layers },
  { step: "04", title: "Evidence Collection", description: "Build automated evidence collection systems, maintain audit trails, and create documentation repositories for continuous compliance readiness.", icon: ClipboardList },
  { step: "05", title: "Internal Audit", description: "Conduct thorough internal audits and mock assessments to identify remaining gaps and ensure readiness before external auditor engagement.", icon: BarChart3 },
  { step: "06", title: "Certification & Maintenance", description: "Support through external audit process and establish ongoing monitoring, evidence refresh, and annual recertification procedures.", icon: Rocket },
];

const techCategories = [
  { label: "GRC Platforms", items: ["Vanta", "Drata", "Tugboat Logic", "Sprinto", "Secureframe"] },
  { label: "Policy Management", items: ["OneTrust", "TrustArc", "BigID", "Osano", "DataGrail"] },
  { label: "Audit & Evidence", items: ["AuditBoard", "Workiva", "ZenGRC", "LogicManager"] },
  { label: "Security Controls", items: ["Okta", "CrowdStrike", "Snyk", "HashiCorp Vault", "AWS Config"] },
  { label: "Monitoring", items: ["Datadog", "Splunk", "PagerDuty", "AWS CloudTrail", "Azure Monitor"] },
];

const whyChoose = [
  { icon: Users, title: "Certified Auditors", description: "CISA, CISSP, and framework-specific certified consultants who have guided 100+ organizations through successful compliance certifications." },
  { icon: Clock, title: "Accelerated Timelines", description: "Streamlined compliance methodology that achieves certification 40% faster than industry average — without cutting corners on quality." },
  { icon: TrendingUp, title: "Continuous Compliance", description: "Automated monitoring and evidence collection systems that maintain compliance year-round — not just at audit time." },
  { icon: HeartHandshake, title: "Multi-Framework Expertise", description: "Deep experience across SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 — with unified control mappings to reduce duplicate effort." },
];

export default function ComplianceFrameworksPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4EB3E8]/10 via-transparent to-transparent dark:from-[#4EB3E8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link href="/services/cybersecurity-compliance" className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}><ArrowLeft size={16} /> Back to Cybersecurity & Compliance</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Compliance &<br /><span className="text-[#4EB3E8]">Regulatory Frameworks</span></h1>
              <p className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001 compliance implementation — from gap analysis through certification and ongoing maintenance.</p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">Get Compliance Assessment <ArrowRight className="w-4 h-4" /></Link>
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
  const items = [{ icon: Shield, label: "SOC 2" }, { icon: FileCheck, label: "HIPAA" }, { icon: Scale, label: "GDPR" }, { icon: Award, label: "ISO 27001" }];
  return (<div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>{items.map((item, i) => { const Icon = item.icon; return (<div key={item.label} className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${400 + i * 100}ms` }}><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><Icon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div></div>); })}</div>);
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compliance & Regulatory Services</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">End-to-end compliance implementation across major regulatory frameworks — from gap analysis through certification.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{services.map((service, i) => { const Icon = service.icon; return (<div key={service.title} className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4EB3E8]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#4EB3E8]/30 group-hover:bg-[#4EB3E8]/10 transition-all duration-500"><Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#4EB3E8] transition-colors duration-500" strokeWidth={1.5} /></div><h3 className="text-lg font-semibold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">{service.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p><div className="mt-4 flex flex-wrap gap-2">{service.features.map((f) => (<span key={f} className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#4EB3E8]/70 group-hover:bg-[#4EB3E8]/5 transition-all duration-500"><CheckCircle2 className="w-3 h-3" />{f}</span>))}</div></div>); })}</div></div>);
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);
  return (<div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]"><div className="mx-auto max-w-5xl px-6 py-24"><div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Compliance Process</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">A proven six-phase methodology from gap analysis through certification and ongoing compliance maintenance.</p></div><div className="relative"><div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />{processSteps.map((step, i) => { const StepIcon = step.icon; const isLeft = i % 2 === 0; return (<div key={step.step} className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 120}ms` }}><div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start"><div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && (<div className="flex flex-col items-end"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p></div>)}</div><div className="flex justify-center relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div></div><div className={!isLeft ? "pl-10" : ""}>{!isLeft && (<div className="flex flex-col items-start"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-1">Step {step.step}</span><h3 className="text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p></div>)}</div></div><div className="md:hidden flex items-start gap-5 w-full"><div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 bg-white dark:bg-black relative z-10"><StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} /></div><div className="flex-1 pt-0.5"><span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">Step {step.step}</span><h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p></div></div></div>); })}</div></div></div>);
}

function TechStackSection() {
  const { ref, visible } = useInView(0.15);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compliance Tools & Platforms</h2><p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">Industry-leading GRC, policy management, and evidence collection platforms for automated compliance.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{techCategories.map((cat, ci) => (<div key={cat.label} className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${200 + ci * 100}ms` }}><h3 className="text-sm font-semibold text-[#4EB3E8] uppercase tracking-wider mb-4">{cat.label}</h3><div className="flex flex-wrap gap-2">{cat.items.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#4EB3E8]/30 hover:text-[#4EB3E8] transition-all duration-300">{tech}</span>))}</div></div>))}</div></div>);
}

function WhyChooseSection() {
  const { ref, visible } = useInView(0.2);
  return (<div ref={ref} className="mx-auto max-w-7xl px-6 py-24"><div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for Compliance</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{whyChoose.map((item, i) => { const ItemIcon = item.icon; return (<div key={item.title} className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#4EB3E8]/15 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 100}ms` }}><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20"><ItemIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} /></div><h3 className="text-base font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p></div>); })}</div></div>);
}

function CTASection() {
  const { ref, visible } = useInView(0.25);
  return (<div ref={ref} className="relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#4EB3E8]/8 via-transparent to-[#4EB3E8]/5 dark:from-[#4EB3E8]/5 dark:to-[#4EB3E8]/3 pointer-events-none" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4EB3E8]/5 rounded-full blur-[120px] pointer-events-none" /><div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} /><div className="relative mx-auto max-w-7xl px-6 py-28 text-center"><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Ready to Achieve<br /><span className="text-[#4EB3E8]">Compliance Certification?</span></h2><p className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Get a free compliance gap assessment and a clear roadmap to certification — faster and more efficiently than doing it alone.</p><div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}><Link href="/resources/free-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#4EB3E8]/20">Get Compliance Assessment <ArrowRight className="w-4 h-4" /></Link><Link href="/our-work" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">View Our Work</Link></div></div></div>);
}
