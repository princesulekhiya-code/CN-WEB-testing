"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Cloud, Server, Database, Shield, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const offerings = [
  { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration of on-premise workloads to AWS, Azure, or GCP with minimal downtime." },
  { icon: Server, title: "Cloud-Native Apps", desc: "Microservices-based applications designed for auto-scaling, resilience, and high availability." },
  { icon: Database, title: "SaaS Architecture", desc: "Multi-tenant SaaS platforms with subscription billing, role-based access, and analytics dashboards." },
  { icon: Zap, title: "Serverless Solutions", desc: "Event-driven, serverless applications using Lambda, Cloud Functions, and managed services." },
  { icon: Shield, title: "Cloud Security", desc: "IAM policies, encryption at rest/transit, VPC design, and compliance-ready configurations." },
  { icon: Settings, title: "Cost Optimization", desc: "Right-sizing resources, reserved instances, spot fleets, and continuous cost monitoring." },
];

const process = [
  { step: "01", title: "Assessment", desc: "Evaluating current infrastructure, workloads, and cloud-readiness." },
  { step: "02", title: "Strategy", desc: "Designing cloud architecture, migration plans, and cost projections." },
  { step: "03", title: "Migration", desc: "Phased migration with data integrity checks and rollback plans." },
  { step: "04", title: "Optimization", desc: "Performance tuning, auto-scaling policies, and cost optimization." },
  { step: "05", title: "Security", desc: "Implementing security controls, monitoring, and compliance frameworks." },
  { step: "06", title: "Management", desc: "Ongoing cloud operations, monitoring, and infrastructure-as-code." },
];

const techStack = ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Lambda", "CloudFormation", "S3", "RDS", "DynamoDB", "Cloudflare"];

export default function CloudSaasSolutionsPage() {
  const { t } = useTranslation();
  const translatedOfferings = useTranslatedData(offerings);
  const translatedProcess = useTranslatedData(process);
  const translatedTechStack = useTranslatedData(techStack);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/stock/stock-7c072bda00.jpg" alt={t("cloudSaas.hero.altImage", "Cloud & SaaS Solutions")} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors mb-6"><ArrowLeft size={16} /> {t("cloudSaas.hero.backLink", "Back to Services")}</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">{t("cloudSaas.hero.title", "Cloud & SaaS Solutions")}</motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="py-16 max-w-4xl">
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">{t("cloudSaas.intro.p1", "We help businesses harness the full power of the cloud  -  from migrating legacy workloads to building cloud-native SaaS platforms from scratch. Our expertise spans AWS, Azure, and GCP.")}</p>
          <p className="mt-6 text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">{t("cloudSaas.intro.p2", "Whether you\u2019re moving to the cloud for the first time or optimizing an existing infrastructure, we deliver secure, scalable, and cost-efficient solutions that accelerate your digital transformation.")}</p>
        </motion.div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">{t("cloudSaas.offerings.heading", "What We Offer")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {translatedOfferings.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-black/[0.06] bg-black/[0.02] hover:border-[#4EB3E8]/30 hover:bg-black/[0.04] transition-all dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-white/[0.04]">
                <item.icon size={24} className="text-[#4EB3E8] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-12">{t("cloudSaas.process.heading", "Our Process")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedProcess.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <span className="text-4xl font-bold text-[#4EB3E8]/20">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-16 border-t border-black/[0.06] dark:border-white/[0.06]">
          <h2 className="text-3xl font-bold mb-8">{t("cloudSaas.techStack.heading", "Technologies We Use")}</h2>
          <div className="flex flex-wrap gap-3">
            {translatedTechStack.map((tech) => (<span key={tech} className="px-4 py-2 rounded-lg border border-black/[0.08] bg-black/[0.02] text-sm font-medium text-black/60 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/60">{tech}</span>))}
          </div>
        </div>

        <div className="py-20 border-t border-black/[0.06] dark:border-white/[0.06] text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cloudSaas.cta.heading", "Move to the Cloud with Confidence")}</h2>
          <p className="text-black/50 dark:text-white/50 mb-8 max-w-lg mx-auto">{t("cloudSaas.cta.description", "Let us help you build a scalable, secure cloud infrastructure that powers your growth.")}</p>
          <Link href="/resources/free-consultation"><Button size="lg" className="rounded-lg bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 px-8">{t("cloudSaas.cta.button", "Book a Free Consultation")} <ArrowRight size={16} className="ml-2" /></Button></Link>
        </div>
      </div>
    </section>
  );
}
