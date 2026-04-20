"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Target,
  BarChart3,
  Users,
  ClipboardList,
  Settings,
  Search,
  ShieldCheck,
  Code2,
  Rocket,
  Award,
  TrendingUp,
  Zap,
  HeartHandshake,
  CheckCircle2,
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

interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceOffering[] = [
  {
    icon: ClipboardList,
    title: "Business Needs Analysis",
    description:
      "We capture goals, constraints, and success metrics across teams so product decisions align with revenue, operations, and customer outcomes. Workshops and interviews surface what truly matters before any roadmap is drawn.",
    features: ["Stakeholder alignment", "Success metrics", "Gap analysis"],
  },
  {
    icon: Settings,
    title: "Technology Strategy",
    description:
      "We translate business priorities into a pragmatic technology direction — buy vs build, platform choices, and phased adoption. The strategy balances speed, risk, and total cost of ownership for your context.",
    features: ["Platform fit", "Risk posture", "TCO view"],
  },
  {
    icon: Search,
    title: "Market Research & Validation",
    description:
      "Evidence-backed insight into users, segments, and demand signals reduces guesswork. We combine qualitative discovery with quantitative signals so you invest in problems worth solving.",
    features: ["Segment clarity", "Demand signals", "Validation plan"],
  },
  {
    icon: Target,
    title: "Product Roadmapping",
    description:
      "A sequenced roadmap ties outcomes to themes, milestones, and dependencies. We align scope to capacity so leadership sees a credible path from today to the next major release.",
    features: ["Outcome themes", "Milestone clarity", "Dependency map"],
  },
  {
    icon: BarChart3,
    title: "Competitive Analysis",
    description:
      "Structured benchmarking of positioning, features, and experience helps you differentiate with intent. We highlight whitespace, threats, and opportunities your roadmap can exploit.",
    features: ["Feature parity", "Positioning map", "Opportunity gaps"],
  },
  {
    icon: ShieldCheck,
    title: "Feasibility Assessment",
    description:
      "We stress-test ideas against technical, operational, and regulatory realities early. The result is a clear go / pivot / pause recommendation with transparent assumptions and trade-offs.",
    features: ["Technical fit", "Compliance scan", "Go-no-go clarity"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Workshops",
    description:
      "Facilitated sessions with stakeholders to align on vision, pains, and measurable outcomes. We capture workflows, constraints, and decision criteria that anchor every later deliverable.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Business Analysis",
    description:
      "We document processes, data flows, and dependencies so requirements reflect how work really happens. This reduces rework and keeps technology choices tied to operational reality.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Strategy Formulation",
    description:
      "Options are synthesized into a coherent strategy — product narrative, value proposition, and phased bets. Leaders get a concise rationale they can communicate to boards and teams.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "Technology Assessment",
    description:
      "Current systems, integrations, and skills are evaluated against the target experience. Gaps become a prioritized remediation plan rather than surprises during delivery.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Roadmap Design",
    description:
      "Themes, epics, and horizons are sequenced with dependencies and checkpoints. The roadmap is built for execution — not a slide that drifts from reality after week one.",
    icon: Target,
  },
  {
    step: "06",
    title: "Implementation Planning",
    description:
      "We define teams, governance, and delivery cadence so execution starts cleanly. Handoff includes success metrics, risks, and a path to measure value after launch.",
    icon: Rocket,
  },
];

const techCategories = [
  { label: "Strategy", items: ["Lean Canvas", "Business Model Canvas", "OKRs", "KPIs"] },
  { label: "Research", items: ["Mixpanel", "Hotjar", "SurveyMonkey", "Google Analytics"] },
  { label: "Prototyping", items: ["Figma", "Miro", "Notion", "Jira"] },
  { label: "Architecture", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { label: "Development", items: ["React", "Node.js", "Python", "Flutter", "Swift"] },
];

const whyChoose = [
  {
    icon: Award,
    title: "Strategic Expertise",
    description:
      "Senior consultants who have shipped products across industries — balancing vision with delivery discipline so recommendations survive contact with engineering and GTM.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Decisions are grounded in evidence — analytics, research, and benchmarks — so your roadmap reflects markets and users, not only internal opinions.",
  },
  {
    icon: Zap,
    title: "Rapid Assessment",
    description:
      "Structured artifacts and workshops compress months of drift into weeks of clarity, with actionable outputs your teams can run with immediately.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We stay engaged through execution checkpoints, helping you adapt the plan as learning and priorities evolve without losing strategic coherence.",
  },
];

export default function DigitalProductConsultationPage() {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 relative">
          <Link
            href="/services/product-engineering"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-all duration-500 mb-8 ${
              heroReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <ArrowLeft size={16} /> Back to Product Engineering
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Digital Product
                <br />
                <span className="text-[#006ea3]">Consultation</span>
              </h1>
              <p
                className={`mt-6 text-lg font-medium text-black/50 dark:text-white/50 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Our tech consultants analyze your business needs and formulate strategies to build the aptest solution that benefits and accelerates your business operations.
              </p>
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                  heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  View Our Work
                </Link>
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
  const items = [
    { icon: Lightbulb, label: "Strategy" },
    { icon: Target, label: "Analysis" },
    { icon: BarChart3, label: "Insights" },
    { icon: Users, label: "Stakeholders" },
  ];
  return (
    <div
      className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
        heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 text-center transition-all duration-500 ${
              heroReady ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${400 + i * 100}ms` }}
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20">
              <Icon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
            </div>
            <div className="text-sm font-semibold text-black/70 dark:text-white/70">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceOfferingsSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Digital Product Consultation Services</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          From needs analysis and market validation to roadmaps and feasibility — a structured consulting engagement that turns ambiguity into an executable product plan.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 transition-all duration-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500">
                <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">{service.title}</h3>
              <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProcessSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="border-y border-black/[0.06] dark:border-white/[0.06] bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Consultation Process</h2>
          <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            A proven sequence from discovery to implementation planning — designed for clarity, stakeholder alignment, and decisions you can defend with evidence.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08] md:-translate-x-px" />

          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start">
                  <div className={isLeft ? "pr-10 text-right" : ""}>
                    {isLeft && (
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black">
                      <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className={!isLeft ? "pl-10" : ""}>
                    {!isLeft && (
                      <div className="flex flex-col items-start">
                        <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:hidden flex items-start gap-5 w-full">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black relative z-10">
                    <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-base font-semibold mt-1 tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technologies &amp; Frameworks</h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
          Familiar tools across strategy, research, prototyping, architecture, and development — chosen to match your stack and accelerate collaboration with your teams.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, ci) => (
          <div
            key={cat.label}
            className={`transition-all duration-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${200 + ci * 100}ms` }}
          >
            <h3 className="text-sm font-semibold text-[#006ea3] uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60 hover:border-[#006ea3]/30 hover:text-[#006ea3] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
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
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Cloud Nexus for Consultation</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChoose.map((item, i) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={item.title}
              className={`text-center p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.04] hover:border-[#006ea3]/15 transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20">
                <ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
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
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ready for Your
          <br />
          <span className="text-[#006ea3]">Product Consultation?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Partner with consultants who connect business outcomes to technology choices — and leave you with a roadmap your teams can execute with confidence.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/resources/free-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#006ea3] text-white font-semibold text-sm hover:bg-[#005580] transition-colors shadow-lg shadow-[#006ea3]/20"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
