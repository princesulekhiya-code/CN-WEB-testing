"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Tech {
  name: string;
  logo: string;
}

interface TechCategory {
  label: string;
  items: Tech[];
}

const categories: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Spring", logo: `${DEVICON}/spring/spring-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
    ],
  },
  {
    label: "Data & AI",
    items: [
      { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    ],
  },
  {
    label: "Tools & CI/CD",
    items: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/githubactions/githubactions-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "Kibana", logo: `${DEVICON}/kibana/kibana-original.svg` },
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function TechStack() {
  const { ref, visible } = useInView(0.1);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      ref={ref}
      className="w-full py-14 md:py-20 bg-white dark:bg-black overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Built with <span className="text-black dark:text-white">modern technology</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            We leverage industry-leading tools and frameworks to build scalable, high-performance solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-[#4EB3E8] text-white shadow-lg shadow-[#4EB3E8]/20"
                    : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {categories[activeTab].items.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
              }}
              className="group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/[0.03] dark:hover:border-[#4EB3E8]/30 dark:hover:bg-[#4EB3E8]/[0.05] transition-all duration-300 cursor-default"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-black/70 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling marquee of all tech */}
        <div
          className={`mt-16 pt-12 border-t border-black/[0.06] dark:border-white/[0.06] transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

            <div className="group flex overflow-hidden w-full [--gap:3.5rem] md:[--gap:4.5rem] [--duration:40s] gap-[var(--gap)]">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
                  >
                    {categories.flatMap((c) => c.items).map((tech, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default whitespace-nowrap"
                        title={tech.name}
                      >
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 md:w-9 md:h-9 object-contain flex-shrink-0"
                          unoptimized
                        />
                        <span className="text-sm md:text-base font-medium text-black/50 dark:text-white/40">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
