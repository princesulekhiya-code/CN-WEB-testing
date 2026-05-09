"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { useTranslatedData } from "@/lib/i18n/translate-data";

const faqs = [
  {
    question: "What services and solutions does CloudNexus provide?",
    answer:
      "Custom Software, Mobile Apps, Web Development, Cloud & SaaS, UI/UX Design, Digital Transformation, AI/ML, Cybersecurity, and DevOps.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "4-8 weeks for simple apps, 3-6 months for enterprise solutions. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both  -  from early-stage startups to Fortune 500s. We've partnered with YC, Tiger Global, and Accel-backed ventures.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "15+ industries: Healthcare, E-Commerce, Fintech, Education, Real Estate, Logistics, Media, and more.",
  },
  {
    question: "How do you ensure quality, security, and reliability throughout development?",
    answer:
      "Through Agile methodology, CI/CD pipelines, code reviews, automated testing, performance checks, security audits, and continuous validation. Compliant with HIPAA, SOC 2, and GDPR.",
  },
  {
    question: "How do you track and communicate project progress?",
    answer:
      "Through defined milestones, sprint reports, and transparent communication channels  -  ensuring full visibility and regular client updates at every stage.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Fixed-price, time & material, or dedicated teams  -  flexible to your scope and budget.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes  -  bug fixes, monitoring, security updates, feature enhancements, and 24/7 support based on your SLA.",
  },
  {
    question: "What tech stack does CloudNexus work with?",
    answer:
      "React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, GCP, Docker, Kubernetes, PostgreSQL, MongoDB, and more  -  we pick the best tools for your project.",
  },
  {
    question: "Can CloudNexus help migrate my existing application to the cloud?",
    answer:
      "Absolutely. We handle end-to-end cloud migration  -  infrastructure assessment, architecture redesign, data migration, and post-migration optimization on AWS, Azure, or GCP.",
  },
  {
    question: "Do you offer AI and Machine Learning solutions?",
    answer:
      "Yes  -  from computer vision and NLP to predictive analytics, recommendation engines, and custom AI model training. We build production-ready AI solutions tailored to your business.",
  },
  {
    question: "What is your process for a new project from start to finish?",
    answer:
      "Discovery & consultation → requirement analysis → UI/UX design → agile development → QA & testing → deployment → post-launch support. Every step is transparent with regular check-ins.",
  },
  {
    question: "Do you build mobile apps for both iOS and Android?",
    answer:
      "Yes  -  we build native (Swift, Kotlin) and cross-platform (Flutter, React Native) mobile applications. We help you choose the right approach based on your budget, timeline, and user needs.",
  },
  {
    question: "How can I get a free consultation with CloudNexus?",
    answer:
      "Simply visit our Free Consultation page or click 'Join Now' in the navigation bar. Book a 30-minute strategy session  -  no commitment, no cost. Our experts will assess your needs and recommend the best path forward.",
  },
];

const halfCount = Math.ceil(faqs.length / 2);

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 py-3.5 text-left group"
      >
        <span className="text-[13px] font-medium text-black dark:text-white/90 leading-snug pr-2">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-5 h-5 rounded-md border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center">
          {open ? (
            <Minus size={11} strokeWidth={2} className="text-black/40 dark:text-white/40" />
          ) : (
            <Plus size={11} strokeWidth={2} className="text-black/40 dark:text-white/40" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-3" : "max-h-0"
        }`}
      >
        <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export function FAQs() {
  const { t } = useTranslation();
  const translatedFaqs = useTranslatedData(faqs);
  const leftFaqs = translatedFaqs.slice(0, halfCount);
  const rightFaqs = translatedFaqs.slice(halfCount);
  return (
    <section className="w-full py-14 md:py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:w-[260px] flex-shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#4EB3E8] leading-tight">
              {t("faq.titleBlue", "Frequently Asked")}
              <br />
              <span className="text-black dark:text-white">{t("faq.titleWhite", "Questions")}</span>
            </h2>
            <p className="mt-3 text-xs text-black/45 dark:text-white/35 leading-relaxed max-w-[220px]">
              {t("faq.subtitle")}
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            <motion.div
              className="divide-y divide-black/[0.05] dark:divide-white/[0.05]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {leftFaqs.map((faq, i) => (
                <FAQItem key={`left-${i}`} faq={faq} index={i} />
              ))}
            </motion.div>
            <motion.div
              className="divide-y divide-black/[0.05] dark:divide-white/[0.05]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            >
              {rightFaqs.map((faq, i) => (
                <FAQItem key={`right-${i}`} faq={faq} index={i + halfCount} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
