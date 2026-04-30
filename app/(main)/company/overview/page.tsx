"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Target, Eye, Rocket, Users, Shield, Zap, Globe,
  BrainCircuit, Handshake, Award, Building2, ChevronRight,
  Code2, Layers, HeartHandshake, Lightbulb, Clock, CheckCircle2,
  MapPin, BarChart3, Smartphone, Boxes, Layout, Palette,
  ShoppingBag, Cloud, Megaphone, Settings, ServerCog, Monitor, Phone,
} from "lucide-react";

/* ═══════ ANIMATED COUNTER ═══════ */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1500;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ═══════ DATA ═══════ */
const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 90, suffix: "+", label: "Scalable Teams", icon: Users },
  { value: 15, suffix: "+", label: "Industries Served", icon: Globe },
];

const whyCloudNexus = [
  { icon: Rocket, title: "Innovative & Scalable Solutions", desc: "We leverage the latest advancements in cloud computing, AI, and automation to develop smart, future-ready IT solutions. Our approach ensures your business stays ahead in the digital era." },
  { icon: HeartHandshake, title: "Tailored Approach", desc: "Every business is unique, and so are its challenges. We take a consultative approach, designing customized IT strategies that align with your goals, industry demands, and operational needs." },
  { icon: Lightbulb, title: "Product-Driven Innovation", desc: "Beyond consulting, we develop intelligent digital products that simplify daily operations, enhance efficiency, and improve user experiences. From HRMS systems to AI-powered automation tools, our solutions make technology work for you." },
  { icon: Shield, title: "Security & Reliability", desc: "Cybersecurity and data protection are at the core of everything we do. We implement robust security protocols to safeguard your IT infrastructure, ensuring compliance, privacy, and peace of mind." },
  { icon: Globe, title: "Expert Team & Global Experience", desc: "Our team of seasoned IT consultants, engineers, and strategists brings extensive experience in helping businesses worldwide navigate complex technological landscapes." },
  { icon: BarChart3, title: "Business-Centric Results", desc: "We don't just implement technology — we align it with your business objectives, ensuring measurable improvements in efficiency, productivity, and profitability." },
  { icon: CheckCircle2, title: "End-to-End Support", desc: "From initial consultation to deployment and ongoing support, we are committed to providing seamless, 24/7 assistance, ensuring smooth and uninterrupted IT operations." },
];

const journeyMilestones = [
  { year: "2013", title: "Foundation", desc: "CloudNexus founded with a mission to bridge the global tech talent gap and deliver scalable digital solutions.", icon: Lightbulb },
  { year: "2016", title: "Enterprise Growth", desc: "Expanded to 100+ enterprise clients across India and the US, establishing a reputation for quality delivery.", icon: Building2 },
  { year: "2018", title: "Startup Ecosystem", desc: "Launched dedicated engineering pod model for Y Combinator startups, becoming a trusted technology partner.", icon: Rocket },
  { year: "2020", title: "Strategic Partnerships", desc: "Partnered with Tiger Global and Accel-backed ventures, scaling operations to serve high-growth companies.", icon: Handshake },
  { year: "2023", title: "Industry Recognition", desc: "Recognized as LinkedIn Top 20 Company — two consecutive years, validating our culture and delivery excellence.", icon: Award },
  { year: "2025", title: "AI-Powered Future", desc: "Launched AI-powered talent matching, expanded to 90+ scalable teams, and achieved 500+ successful project deliveries.", icon: BrainCircuit },
];

const offerings = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform iOS & Android apps built for performance, scalability, and exceptional user experience.", href: "/services/mobile-app-development" },
  { icon: Globe, title: "Web Development", desc: "Responsive, fast, and SEO-optimized web applications using modern frameworks like Next.js, React, and Node.js.", href: "/services/web-development" },
  { icon: Code2, title: "Software Development", desc: "Full-cycle custom software solutions from architecture design to deployment, tailored to your business needs.", href: "/services/software-development" },
  { icon: Users, title: "Hire Dedicated Developers", desc: "Pre-vetted engineers in 48 hours — full-stack, mobile, AI/ML, DevOps, and QA specialists on flexible engagement models.", href: "/services/hire-dedicated-developers" },
  { icon: Boxes, title: "Product Engineering", desc: "End-to-end product development from ideation to market-ready launch with continuous iteration and optimization.", href: "/services/product-engineering" },
  { icon: Layout, title: "WordPress Development", desc: "Custom themes, plugins, and enterprise WordPress solutions with performance optimization and security hardening.", href: "/services/wordpress-development" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centric design solutions with research-driven wireframes, prototypes, and pixel-perfect interfaces.", href: "/services/ui-ux-design" },
  { icon: Zap, title: "Digital Transformation", desc: "Modernize legacy systems, digitize operations, and build data-driven workflows that accelerate business growth.", href: "/services/digital-transformation" },
  { icon: ShoppingBag, title: "E-Commerce Development", desc: "Scalable online store platforms with payment integrations, inventory management, and conversion optimization.", href: "/services/ecommerce-development" },
  { icon: Cloud, title: "SaaS Development", desc: "Multi-tenant SaaS products with subscription management, analytics dashboards, and enterprise-grade security.", href: "/services/saas-development" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media marketing, PPC campaigns, and content strategies that drive traffic, leads, and revenue.", href: "/services/digital-marketing" },
  { icon: Settings, title: "Technology Consulting", desc: "Strategic technology advisory, architecture reviews, and roadmaps aligned with your business objectives.", href: "/services/technology-consulting" },
  { icon: Rocket, title: "MVP Development", desc: "Rapid prototyping and MVP launches to validate your idea, attract investors, and enter the market faster.", href: "/services/mvp-development" },
  { icon: ServerCog, title: "Cloud Services", desc: "AWS, Azure & GCP solutions — cloud migration, multi-cloud architecture, CI/CD pipelines, and infrastructure automation.", href: "/services/cloud-services" },
  { icon: Monitor, title: "IT Consulting", desc: "Infrastructure planning, IT strategy, and technology audits to optimize your IT ecosystem for long-term success.", href: "/services/it-consulting" },
];

const locations = [
  { region: "Hyderabad", city: "Hitech City, Hyderabad, Telangana, India", phone: "+91 000 000 0000", icon: Building2 },
  { region: "Bhopal", city: "Plot No 20, Kusturi Arched, Barrai, Bhopal, MP 462042, India", phone: "+91 87938 30447", icon: Building2 },
  { region: "Bengaluru", city: "2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India", phone: "+91 87938 30447", icon: Building2 },
];

/* ═══════ VISION & MISSION SECTION ═══════ */
const missionPoints = [
  { icon: Zap, text: "Developing industry-leading IT solutions and products that enable businesses to operate efficiently, automate workflows, and stay ahead in a rapidly evolving digital world." },
  { icon: Layers, text: "Transforming outdated methodologies by replacing legacy systems with modern, intelligent, and scalable solutions tailored to each business's needs." },
  { icon: BrainCircuit, text: "Driving digital innovation through AI, cloud computing, and automation, ensuring seamless integration of technology into daily business operations." },
  { icon: Shield, text: "Empowering businesses of all sizes with accessible, secure, and intelligent IT infrastructure that fosters productivity and long-term success." },
];

function VisionMissionSection() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">Our Purpose</span>{" "}
            <span>& Direction</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-xl bg-[#f0f0f0] dark:bg-white/[0.04] p-1 border border-black/[0.05] dark:border-white/[0.05]">
            {(["vision", "mission"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-black/50 dark:text-white/40 hover:text-black/70 dark:hover:text-white/60"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="vm-tab"
                    className="absolute inset-0 rounded-lg bg-[#4EB3E8]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">Our {tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "vision" ? (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <Eye className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Our Vision</h3>
                </div>
                <p className="text-base text-black/55 dark:text-white/50 leading-relaxed">
                  To be the global leader in IT solutions and digital product innovation, empowering businesses with progressive technology that enhances efficiency, scalability, and growth. At CloudNexus, we envision a future where businesses thrive by leveraging smart, automated, and future-ready solutions.
                </p>
              </div>
              <div className="md:col-span-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80&fit=crop"
                  alt="Futuristic technology and digital innovation"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-5 gap-8"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                    <Rocket className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">Our Mission</h3>
                    <p className="text-sm text-black/40 dark:text-white/35">Redefining the IT landscape</p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {missionPoints.map((point, i) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 * i }}
                        className="group flex gap-4 p-4 rounded-2xl bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-4.5 h-4.5 text-[#4EB3E8]" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed">{point.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-2 relative flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop"
                  alt="Team working together on digital innovation"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════ PAGE ═══════ */
export default function OverviewPage() {
  const [activeJourney, setActiveJourney] = useState(5);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ═══════ HERO ═══════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4EB3E8] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#4EB3E8] rounded-full blur-[100px]"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="ov-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ov-dots)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                Innovators, Problem-Solvers &{" "}
                <span className="text-[#4EB3E8]">Architects of the Digital Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-xl"
              >
                At CloudNexus, we are more than just an IT consulting company. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting, helping businesses thrive in an ever-evolving tech landscape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:opacity-90 transition-all shadow-lg"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/company/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all"
                >
                  Learn About Us
                </Link>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&fit=crop"
                  alt="Team collaborating on digital solutions"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />

                {/* Floating info cards on image */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-5 left-5 right-5 flex gap-3"
                >
                  {[
                    { val: "200+", lbl: "Projects" },
                    { val: "10+", lbl: "Years" },
                    { val: "90+", lbl: "Teams" },
                  ].map((s) => (
                    <div key={s.lbl} className="flex-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5 text-center">
                      <div className="text-lg font-black text-white">{s.val}</div>
                      <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{s.lbl}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════ STATS ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="flex items-center gap-4"
              >
                <div className="text-4xl md:text-5xl font-black tracking-tight text-[#4EB3E8]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider leading-tight max-w-[80px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ ABOUT INTRO ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-[#4EB3E8]">Who We Are</span>
            </h2>
            <p className="text-base text-black/55 dark:text-white/50 leading-relaxed mb-4">
              At CloudNexus, we are more than just an IT consulting company — we are innovators, problem-solvers, and architects of the digital future. We specialize in progressive IT solutions, cloud transformation, AI-driven automation, and enterprise consulting, helping businesses thrive in an ever-evolving tech landscape.
            </p>
            <p className="text-base text-black/55 dark:text-white/50 leading-relaxed">
              Our team of technology experts, strategists, and problem-solvers collaborates closely with clients to design tailored solutions that enhance efficiency, drive growth, and future-proof operations. Whether it&apos;s cloud migration, software development, automation, or cybersecurity, we ensure that your IT ecosystem is agile, secure, and optimized for success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=650&q=80&fit=crop"
                alt="Team strategy and innovation"
                className="w-full h-[380px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent rounded-2xl" />

              {/* Overlay capabilities */}
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
                {[
                  { icon: Rocket, label: "Cloud Transformation" },
                  { icon: BrainCircuit, label: "AI & Automation" },
                  { icon: Code2, label: "Software Dev" },
                  { icon: Shield, label: "Cybersecurity" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[11px] font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border-2 border-[#4EB3E8]/15 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* ═══════ MISSION & VISION ═══════ */}
      <VisionMissionSection />

      {/* ═══════ OUR SERVICES ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">Our</span>{" "}
              <span>Services</span>
            </h2>
            <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
              End-to-end technology capabilities tailored to your business stage and growth ambitions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.04 * i }}
                    className="group h-full rounded-2xl p-5 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 cursor-pointer"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight mb-1.5 group-hover:text-[#4EB3E8] transition-colors duration-300">{item.title}</h3>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed line-clamp-3">{item.desc}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ WHY CLOUDNEXUS ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">Why</span>{" "}
            <span>CloudNexus?</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-2xl mx-auto">
            Choosing the right technology partner is crucial for business success. We don&apos;t just offer IT solutions — we create transformative experiences that drive innovation, efficiency, and growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Image + Stats */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop"
                alt="Professional team delivering IT solutions"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating stats on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                {[
                  { num: "200+", label: "Projects Delivered" },
                  { num: "10+", label: "Years of Excellence" },
                  { num: "90+", label: "Scalable Teams" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl font-bold text-[#4EB3E8]">{s.num}</span>
                    <span className="text-sm text-white/70">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl border-2 border-[#4EB3E8]/15 -z-10" />
          </motion.div>

          {/* Right - Cards grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {whyCloudNexus.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.06 * i }}
                  className={`group relative rounded-2xl p-5 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ${i === 6 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8] group-hover:border-[#4EB3E8] transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#4EB3E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{val.title}</h3>
                      <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed line-clamp-3">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ JOURNEY TIMELINE ═══════ */}
      <div className="border-y border-black/[0.05] dark:border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#4EB3E8]">Our</span>{" "}
              <span>Journey</span>
            </h2>
            <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
              A decade of growth, innovation, and relentless pursuit of excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left - Year selector */}
            <div className="lg:col-span-2 space-y-2">
              {journeyMilestones.map((m, i) => {
                const isActive = activeJourney === i;
                return (
                  <motion.button
                    key={m.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.06 * i }}
                    onClick={() => setActiveJourney(i)}
                    className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white dark:bg-[#0c1322] border border-[#4EB3E8]/20 shadow-lg shadow-[#4EB3E8]/[0.04]"
                        : "bg-transparent hover:bg-[#f5f5f5] dark:hover:bg-white/[0.02] border border-transparent"
                    }`}
                  >
                    {isActive && <div className="w-1 h-8 rounded-full bg-[#4EB3E8] flex-shrink-0" />}
                    <div className={`text-xl font-black tracking-tight transition-colors duration-300 ${isActive ? "text-[#4EB3E8]" : "text-black/25 dark:text-white/20"}`}>
                      {m.year}
                    </div>
                    <div className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "" : "text-black/40 dark:text-white/35"}`}>
                      {m.title}
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-[#4EB3E8] ml-auto flex-shrink-0" />}
                  </motion.button>
                );
              })}
            </div>

            {/* Right - Active milestone detail */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeJourney}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-8 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]"
              >
                {(() => {
                  const m = journeyMilestones[activeJourney];
                  const Icon = m.icon;
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20">
                          <Icon className="w-7 h-7 text-[#4EB3E8]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#4EB3E8] uppercase tracking-wider">{m.year}</div>
                          <h3 className="text-2xl font-bold tracking-tight">{m.title}</h3>
                        </div>
                      </div>
                      <p className="text-base text-black/50 dark:text-white/45 leading-relaxed">{m.desc}</p>

                      {/* Decorative */}
                      <div className="mt-8 flex items-center gap-2">
                        {journeyMilestones.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveJourney(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeJourney ? "w-8 bg-[#4EB3E8]" : "w-1.5 bg-black/10 dark:bg-white/10 hover:bg-[#4EB3E8]/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ GLOBAL PRESENCE ═══════ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-[#4EB3E8]">Our</span>{" "}
            <span>Offices</span>
          </h2>
          <p className="mt-4 text-base text-black/45 dark:text-white/45 max-w-xl mx-auto">
            Strategically located across Rajasthan, India — delivering world-class IT solutions from our development centers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {locations.map((loc, i) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={loc.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group rounded-2xl p-7 bg-[#f8f9fa] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] hover:border-[#4EB3E8]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 text-center"
              >
                <div className="flex items-start gap-3 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4EB3E8]/8 border border-[#4EB3E8]/12 group-hover:bg-[#4EB3E8]/15 transition-all duration-300 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight mb-1 group-hover:text-[#4EB3E8] transition-colors duration-300">{loc.region}</h3>
                    <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed mb-2">{loc.city}</p>
                    <div className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/35">
                      <Phone className="w-3.5 h-3.5 text-[#4EB3E8]" strokeWidth={1.5} />
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="relative rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#4EB3E8]/10">
                <Rocket className="w-6 h-6 text-[#4EB3E8]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Innovate?
                <br />
                <span className="text-[#4EB3E8]">Let&apos;s Build Together</span>
              </h2>

              <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                Join 500+ companies who trust CloudNexus to deliver technology solutions that drive real business outcomes.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
