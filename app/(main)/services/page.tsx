"use client";

import Link from "next/link";
import {
  Smartphone, Globe, Cloud, Palette, Zap, TrendingUp, Brain,
  Shield, GitMerge, ArrowRight, CheckCircle2, Layers, Users, Clock,
  Lightbulb, Rocket, BarChart3, HeartHandshake, Building2, GraduationCap,
  CreditCard, ShoppingCart, Stethoscope, Truck, Factory, Cog,
  Monitor, UsersRound, Package, ShoppingBag, CloudCog, Blocks, Boxes,
  Settings, ServerCog, Cpu, Wrench, Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════
   INTERSECTION OBSERVER HOOK
   ═══════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════════ */

function useAnimatedCount(target: number, active: boolean, delay = 0, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      let raf: number;
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * target));
        if (progress < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay, duration]);

  return count;
}

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

interface Sublink {
  label: string;
  href: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  highlights: string[];
  sublinks?: Sublink[];
}

interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    id: "intelligent-automation",
    icon: Cpu,
    title: "Intelligent Automation",
    subtitle: "Move forward digitally with bold steps — AI-powered solutions and emerging technologies to create sustainable value and solve critical business challenges.",
    services: [
      {
        icon: Brain,
        title: "AI, ML & Data Science",
        description: "Predictive analytics, NLP, computer vision, and intelligent automation — turning raw data into actionable business intelligence.",
        href: "/services/ai-ml-data-science",
        highlights: ["Machine learning models", "NLP & chatbots", "Data pipelines"],
        sublinks: [
          { label: "Machine Learning Solutions", href: "/services/ai-ml-data-science/machine-learning" },
          { label: "Generative AI & LLMs", href: "/services/ai-ml-data-science/generative-ai" },
          { label: "Predictive Analytics", href: "/services/ai-ml-data-science/predictive-analytics" },
          { label: "Data Engineering & Pipelines", href: "/services/ai-ml-data-science/data-engineering" },
          { label: "Computer Vision", href: "/services/ai-ml-data-science/computer-vision" },
          { label: "NLP & Conversational AI", href: "/services/ai-ml-data-science/nlp-conversational-ai" },
        ],
      },
      {
        icon: Zap,
        title: "Digital Transformation",
        description: "Modernizing legacy systems, automating workflows, and integrating cutting-edge technologies to future-proof your business.",
        href: "/services/digital-transformation",
        highlights: ["Legacy modernization", "Process automation", "Change management"],
        sublinks: [
          { label: "Architecture Modernization", href: "/services/digital-transformation/architecture-modernization" },
          { label: "Technology Modernization", href: "/services/digital-transformation/technology-modernization" },
          { label: "UI/UX Modernization", href: "/services/digital-transformation/ui-ux-modernization" },
          { label: "Integration Modernization", href: "/services/digital-transformation/integration-modernization" },
          { label: "Data Engineering & AI", href: "/services/digital-transformation/data-engineering-ai" },
          { label: "Product Re-engineering", href: "/services/digital-transformation/product-re-engineering" },
        ],
      },
      {
        icon: Shield,
        title: "Cybersecurity & Compliance",
        description: "Comprehensive security audits, penetration testing, and regulatory compliance frameworks — SOC2, HIPAA, GDPR, and more.",
        href: "/services/cybersecurity-compliance",
        highlights: ["Penetration testing", "Compliance frameworks", "Threat detection"],
        sublinks: [
          { label: "Security Assessment & Pen Testing", href: "/services/cybersecurity-compliance/security-assessment" },
          { label: "Data Protection & Encryption", href: "/services/cybersecurity-compliance/data-protection" },
          { label: "Threat Monitoring & SOC", href: "/services/cybersecurity-compliance/threat-monitoring" },
          { label: "Compliance & Regulatory Frameworks", href: "/services/cybersecurity-compliance/compliance-frameworks" },
          { label: "Incident Response & Recovery", href: "/services/cybersecurity-compliance/incident-response" },
          { label: "Infrastructure & Cloud Security", href: "/services/cybersecurity-compliance/infrastructure-security" },
        ],
      },
      {
        icon: Settings,
        title: "Technology Consulting",
        description: "Big data, digital experience, AI & data science, chatbot, IoT, and augmented reality consulting to align emerging tech with your business goals.",
        href: "/services/technology-consulting",
        highlights: ["AI & data consulting", "IoT strategy", "AR consulting"],
        sublinks: [
          { label: "Big Data Consulting", href: "/services/technology-consulting/big-data-consulting" },
          { label: "Digital Experience Consulting", href: "/services/technology-consulting/digital-experience-consulting" },
          { label: "AI & Data Science Consulting", href: "/services/technology-consulting/ai-data-science-consulting" },
          { label: "Chatbot Consulting", href: "/services/technology-consulting/chatbot-consulting" },
          { label: "IoT Consulting", href: "/services/technology-consulting/iot-consulting" },
          { label: "Augmented Reality Consulting", href: "/services/technology-consulting/augmented-reality-consulting" },
        ],
      },
    ],
  },
  {
    id: "software-engineering",
    icon: Wrench,
    title: "Software Engineering",
    subtitle: "Transform your business digitally by developing mobile apps, web platforms, and software built for agility, resilience, and growth.",
    services: [
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform iOS & Android applications with seamless UI/UX, offline support, and advanced functionality.",
        href: "/services/mobile-app-development",
        highlights: ["React Native & Flutter", "Native iOS/Android", "App Store optimization"],
        sublinks: [
          { label: "iOS App Development", href: "/services/mobile-app-development/ios-app-development" },
          { label: "Android App Development", href: "/services/mobile-app-development/android-app-development" },
          { label: "Flutter Development", href: "/services/mobile-app-development/flutter-app-development" },
          { label: "React Native Development", href: "/services/mobile-app-development/react-native-development" },
          { label: "Progressive Web Apps", href: "/services/mobile-app-development/progressive-web-apps" },
        ],
      },
      {
        icon: Globe,
        title: "Web Development",
        description: "Responsive, secure, and lightning-fast web applications — from startup landing pages to complex enterprise platforms.",
        href: "/services/web-development",
        highlights: ["Next.js & React", "Progressive Web Apps", "Performance optimization"],
        sublinks: [
          { label: "Custom Website Development", href: "/services/web-development/custom-website-development" },
          { label: "CMS Website Development", href: "/services/web-development/cms-website-development" },
          { label: "Responsive Website Design", href: "/services/web-development/responsive-website-design" },
          { label: "E-Commerce Website Development", href: "/services/web-development/ecommerce-website-development" },
          { label: "Single Page App Development", href: "/services/web-development/single-page-app-development" },
          { label: "Progressive Web App Development", href: "/services/web-development/progressive-web-app-development" },
        ],
      },
      {
        icon: Monitor,
        title: "Software Development",
        description: "Full-cycle custom software solutions — enterprise apps, API development, and complex system integrations built for scale.",
        href: "/services/software-development",
        highlights: ["Enterprise apps", "API development", "System integration"],
        sublinks: [
          { label: "Custom Software", href: "/services/software-development/custom-software" },
          { label: "Enterprise Software", href: "/services/software-development/enterprise-software" },
          { label: "Custom CRM Development", href: "/services/software-development/custom-crm-development" },
          { label: "Software Product Development", href: "/services/software-development/software-product-development" },
          { label: "Legacy System Modernization", href: "/services/software-development/legacy-system-modernization" },
          { label: "Data Analytics & Information", href: "/services/software-development/data-analytics" },
        ],
      },
      {
        icon: Boxes,
        title: "MVP Development",
        description: "Prototype design, single-feature MVPs, full MVP builds, scaling to full product, and expert MVP consulting — from idea to launch-ready in weeks.",
        href: "/services/mvp-development",
        highlights: ["Prototype design", "MVP build & scale", "MVP consulting"],
        sublinks: [
          { label: "Prototype Design", href: "/services/mvp-development/prototype-design" },
          { label: "Single Feature MVP", href: "/services/mvp-development/single-feature-mvp" },
          { label: "MVP Build", href: "/services/mvp-development/mvp-build" },
          { label: "MVP to Full Scale", href: "/services/mvp-development/mvp-to-full-scale" },
          { label: "MVP Improvement", href: "/services/mvp-development/mvp-improvement" },
          { label: "MVP Consulting", href: "/services/mvp-development/mvp-consulting" },
        ],
      },
      {
        icon: UsersRound,
        title: "Hire Dedicated Developers",
        description: "Scale your team on demand with pre-vetted senior engineers — flexible hiring models from individual contributors to full pods.",
        href: "/services/hire-dedicated-developers",
        highlights: ["Staff augmentation", "Dedicated teams", "Flexible models"],
        sublinks: [
          { label: "Hire Mobile App Developers", href: "/services/hire-dedicated-developers/hire-mobile-app-developers" },
          { label: "Hire Front-End Developers", href: "/services/hire-dedicated-developers/hire-frontend-developers" },
          { label: "Hire Back-End Developers", href: "/services/hire-dedicated-developers/hire-backend-developers" },
          { label: "Hire Database Developers", href: "/services/hire-dedicated-developers/hire-database-developers" },
          { label: "Hire Digital Marketing Experts", href: "/services/hire-dedicated-developers/hire-digital-marketing-experts" },
          { label: "Hire eCommerce & CMS Experts", href: "/services/hire-dedicated-developers/hire-ecommerce-cms-experts" },
        ],
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric design solutions focused on usability, engagement, and modern aesthetics — from research to pixel-perfect interfaces.",
        href: "/services/ui-ux-design",
        highlights: ["Design systems", "User research", "Prototyping & testing"],
        sublinks: [
          { label: "UI/UX Web Design", href: "/services/ui-ux-design/web-design" },
          { label: "UI/UX Mobile Design", href: "/services/ui-ux-design/mobile-design" },
          { label: "Visual Design", href: "/services/ui-ux-design/visual-design" },
          { label: "Interaction Design", href: "/services/ui-ux-design/interaction-design" },
          { label: "Design Testing", href: "/services/ui-ux-design/design-testing" },
          { label: "UI/UX Consulting", href: "/services/ui-ux-design/ui-ux-consulting" },
        ],
      },
      {
        icon: CloudCog,
        title: "SaaS Development",
        description: "Multi-tenant SaaS platforms with subscription billing, role-based access, and scalable cloud-native architecture.",
        href: "/services/saas-development",
        highlights: ["Multi-tenant", "Subscription billing", "Cloud-native"],
        sublinks: [
          { label: "Custom SaaS Platform", href: "/services/saas-development/custom-saas-platform" },
          { label: "SaaS UI/UX Design", href: "/services/saas-development/saas-ui-ux-design" },
          { label: "SaaS Mobile Solutions", href: "/services/saas-development/saas-mobile-solutions" },
          { label: "Subscription & Billing", href: "/services/saas-development/subscription-billing" },
          { label: "SaaS Security & Compliance", href: "/services/saas-development/saas-security" },
          { label: "SaaS API & Integration", href: "/services/saas-development/saas-api-integration" },
        ],
      },
      {
        icon: ServerCog,
        title: "IT Consulting",
        description: "IT infrastructure planning, system integration, and strategic IT advisory to optimize your technology operations.",
        href: "/services/it-consulting",
        highlights: ["IT strategy", "System integration", "Infrastructure planning"],
        sublinks: [
          { label: "IT Assessments", href: "/services/it-consulting/it-assessments" },
          { label: "IT Strategy & Planning", href: "/services/it-consulting/it-strategy-planning" },
          { label: "Digital Transformation Consulting", href: "/services/it-consulting/digital-transformation-consulting" },
          { label: "Security Risk Assessments", href: "/services/it-consulting/security-risk-assessments" },
          { label: "Cloud & Data Migration", href: "/services/it-consulting/cloud-data-migration" },
          { label: "Custom App Development", href: "/services/it-consulting/custom-app-development" },
        ],
      },
    ],
  },
  {
    id: "digital-automation",
    icon: Briefcase,
    title: "Digital Automation",
    subtitle: "Shape your digital vision with expert transformation, growth marketing, and scalable cloud solutions to rewire your organization's capabilities.",
    services: [
      {
        icon: Package,
        title: "Product Engineering",
        description: "End-to-end product development from ideation and prototyping to market launch and scaling — turning ideas into market-ready products.",
        href: "/services/product-engineering",
        highlights: ["Idea to launch", "Product strategy", "Scalable architecture"],
        sublinks: [
          { label: "Digital Product Consultation", href: "/services/product-engineering/digital-product-consultation" },
          { label: "Software Product Architecting", href: "/services/product-engineering/software-product-architecting" },
          { label: "Product Experience Design", href: "/services/product-engineering/product-experience-design" },
          { label: "Product Prototyping", href: "/services/product-engineering/product-prototyping" },
          { label: "Digital Product Development", href: "/services/product-engineering/digital-product-development" },
          { label: "Quality Engineering", href: "/services/product-engineering/quality-engineering" },
        ],
      },
      {
        icon: ShoppingBag,
        title: "E-Commerce Development",
        description: "Scalable online stores with payment gateways, inventory management, and headless commerce for modern retail experiences.",
        href: "/services/ecommerce-development",
        highlights: ["Shopify & Magento", "Payment integration", "Headless commerce"],
        sublinks: [
          { label: "eCommerce Online Platform", href: "/services/ecommerce-development/ecommerce-platform" },
          { label: "eCommerce Mobile App", href: "/services/ecommerce-development/ecommerce-mobile-app" },
          { label: "Multi-Vendor Marketplace", href: "/services/ecommerce-development/multi-vendor-marketplace" },
          { label: "Payment & Checkout", href: "/services/ecommerce-development/payment-checkout" },
          { label: "Headless Commerce", href: "/services/ecommerce-development/headless-commerce" },
          { label: "Enterprise eCommerce", href: "/services/ecommerce-development/enterprise-ecommerce" },
        ],
      },
      {
        icon: Blocks,
        title: "WordPress Development",
        description: "Custom WordPress themes, plugins, WooCommerce stores, and headless WordPress solutions for content-driven businesses.",
        href: "/services/wordpress-development",
        highlights: ["Custom themes", "WooCommerce", "Headless WordPress"],
        sublinks: [
          { label: "CMS Development", href: "/services/wordpress-development/cms-development" },
          { label: "Custom WordPress Development", href: "/services/wordpress-development/custom-wordpress-development" },
          { label: "WordPress eCommerce", href: "/services/wordpress-development/wordpress-ecommerce" },
          { label: "WordPress Plugin Development", href: "/services/wordpress-development/wordpress-plugin-development" },
          { label: "Responsive Theme Development", href: "/services/wordpress-development/responsive-theme-development" },
          { label: "WordPress Migration & Maintenance", href: "/services/wordpress-development/wordpress-migration-maintenance" },
        ],
      },
      {
        icon: TrendingUp,
        title: "Digital Marketing",
        description: "Full-funnel digital marketing — SEO, PPC advertising, social media, email marketing, content strategy, and app store optimization.",
        href: "/services/digital-marketing",
        highlights: ["SEO & PPC", "Social media & email", "Content & ASO"],
        sublinks: [
          { label: "Search Engine Optimization", href: "/services/digital-marketing/seo" },
          { label: "PPC Advertising", href: "/services/digital-marketing/ppc-advertising" },
          { label: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
          { label: "Email Marketing", href: "/services/digital-marketing/email-marketing" },
          { label: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
          { label: "App Store Optimization", href: "/services/digital-marketing/app-store-optimization" },
        ],
      },
      {
        icon: Cloud,
        title: "Cloud Services",
        description: "Cloud implementation strategy, application services, management, DevOps, migration, and infrastructure — on AWS, Azure & GCP.",
        href: "/services/cloud-services",
        highlights: ["Cloud migration", "DevOps as a service", "Infrastructure & IaC"],
        sublinks: [
          { label: "Cloud Implementation Strategy", href: "/services/cloud-services/cloud-implementation-strategy" },
          { label: "Cloud Application Services", href: "/services/cloud-services/cloud-application-services" },
          { label: "Cloud Management Services", href: "/services/cloud-services/cloud-management-services" },
          { label: "DevOps As A Service", href: "/services/cloud-services/devops-as-a-service" },
          { label: "Cloud Migration Services", href: "/services/cloud-services/cloud-migration-services" },
          { label: "Cloud Infrastructure", href: "/services/cloud-services/cloud-infrastructure" },
        ],
      },
      {
        icon: GitMerge,
        title: "DevOps & Cloud Automation",
        description: "CI/CD pipelines, containerization with Docker & Kubernetes, IaC with Terraform, and automated infrastructure for faster delivery.",
        href: "/services/devops-cloud-automation",
        highlights: ["CI/CD pipelines", "Kubernetes & Docker", "Infrastructure as Code"],
        sublinks: [
          { label: "CI/CD Pipeline Engineering", href: "/services/devops-cloud-automation/ci-cd-pipelines" },
          { label: "Containerization & Orchestration", href: "/services/devops-cloud-automation/containerization" },
          { label: "Infrastructure as Code", href: "/services/devops-cloud-automation/infrastructure-as-code" },
          { label: "Monitoring & Observability", href: "/services/devops-cloud-automation/monitoring-observability" },
          { label: "DevSecOps", href: "/services/devops-cloud-automation/devsecops" },
          { label: "Cloud Automation & Auto-Scaling", href: "/services/devops-cloud-automation/cloud-automation" },
        ],
      },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals, pain points, and technical landscape to craft a tailored strategy.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs intuitive interfaces and robust system architectures that scale with your growth.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Iterative sprints with continuous feedback loops ensure transparent progress and rapid delivery.",
    icon: Cog,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous automated and manual testing across devices, browsers, and edge cases for bulletproof quality.",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Zero-downtime deployments with monitoring, rollback strategies, and performance optimization.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support & Growth",
    description: "Ongoing maintenance, analytics-driven improvements, and scaling support as your business evolves.",
    icon: HeartHandshake,
  },
];

const industries = [
  { icon: CreditCard, name: "FinTech & Banking", href: "/industry/banking-finance-insurance" },
  { icon: Stethoscope, name: "Healthcare", href: "/industry/healthcare-lifesciences" },
  { icon: ShoppingCart, name: "E-Commerce", href: "/industry/ecommerce-solutions" },
  { icon: GraduationCap, name: "Education", href: "/industry/education-elearning" },
  { icon: Truck, name: "Logistics", href: "/industry/transport-logistics" },
  { icon: Building2, name: "Real Estate", href: "/industry/real-estate" },
  { icon: Factory, name: "Manufacturing", href: "/industry/enterprise-retail-manufacturing" },
  { icon: BarChart3, name: "SaaS & Startups", href: "/industry/fintech" },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Enterprise-grade solutions shipped globally" },
  { value: 50, suffix: "+", label: "Global Clients", description: "From Fortune 500 to fast-growing startups" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Long-term partnerships built on trust" },
  { value: 10, suffix: "+", label: "Industries Served", description: "Across healthcare, fintech, retail & more" },
];

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon;
  const hasSublinks = service.sublinks && service.sublinks.length > 0;

  return (
    <div
      className="group h-full rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 transition-all duration-500 hover:border-[#006ea3]/30 hover:bg-black/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#006ea3]/5 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-[#006ea3]/30 dark:hover:bg-white/[0.04]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link href={service.href} className="block">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.05] group-hover:border-[#006ea3]/30 group-hover:bg-[#006ea3]/10 transition-all duration-500">
          <Icon className="w-5 h-5 text-black/60 dark:text-white/60 group-hover:text-[#006ea3] transition-colors duration-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#006ea3] transition-colors duration-300">
          {service.title}
        </h3>
      </Link>

      {hasSublinks ? (
        <ul className="mt-3 space-y-1.5">
          {service.sublinks!.map((sub) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-black/50 dark:text-white/50 hover:text-[#006ea3] transition-colors duration-300"
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-300">
            {service.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-black/35 dark:text-white/35 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded-md group-hover:text-[#006ea3]/70 group-hover:bg-[#006ea3]/5 transition-all duration-500"
              >
                <CheckCircle2 className="w-3 h-3" />
                {h}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center text-[13px] font-semibold text-[#006ea3] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </>
      )}
    </div>
  );
}

function CategorySection({ category, index }: { category: ServiceCategory; index: number }) {
  const { ref, visible } = useInView(0.1);
  const CatIcon = category.icon;

  return (
    <div ref={ref} className="mb-20 last:mb-0">
      {/* Category Header */}
      <div
        className={`text-center mb-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20">
          <CatIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{category.title}</h2>
        <p className="mt-2 text-sm md:text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
          {category.subtitle}
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.services.map((service, i) => (
          <div
            key={service.title}
            className={`transition-all duration-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            <ServiceCard service={service} delay={0} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsBar() {
  const { ref, visible } = useInView(0.2);
  const c0 = useAnimatedCount(stats[0].value, visible, 0);
  const c1 = useAnimatedCount(stats[1].value, visible, 150);
  const c2 = useAnimatedCount(stats[2].value, visible, 300);
  const c3 = useAnimatedCount(stats[3].value, visible, 450);
  const counts = [c0, c1, c2, c3];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#006ea3]/[0.04] via-transparent to-[#006ea3]/[0.04] dark:from-[#006ea3]/[0.03] dark:to-[#006ea3]/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#006ea3]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Numbers That <span className="text-black dark:text-white">Speak Volumes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] hover:border-[#006ea3]/30 dark:hover:border-[#006ea3]/30 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#006ea3] tabular-nums tracking-tight">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="mt-2 text-sm md:text-base font-semibold text-black/70 dark:text-white/70">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs md:text-sm text-black/40 dark:text-white/35 leading-relaxed">
                  {stat.description}
                </div>
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="mx-auto max-w-5xl px-6 py-24">
      {/* Section heading */}
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
          How We Bring <span className="text-black dark:text-white">Ideas to Life</span>
        </h2>
        <p className="mt-4 text-base font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          A proven six-step methodology that ensures quality, transparency, and on-time delivery.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connector line */}
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
              {/* Desktop: alternating layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start">
                {/* Left content */}
                <div className={`${isLeft ? "pr-10 text-right" : ""}`}>
                  {isLeft && (
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                      <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm ml-auto">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="flex justify-center relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006ea3]/10 border border-[#006ea3]/20 bg-white dark:bg-black">
                    <StepIcon className="w-5 h-5 text-[#006ea3]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Right content */}
                <div className={`${!isLeft ? "pl-10" : ""}`}>
                  {!isLeft && (
                    <div className="flex flex-col items-start">
                      <span className="text-[11px] font-bold text-[#006ea3] tracking-widest uppercase mb-1">Step {step.step}</span>
                      <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/45 leading-relaxed max-w-sm">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile: left-aligned layout */}
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
  );
}

function IndustriesSection() {
  const { ref, visible } = useInView(0.15);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/[0.04] via-transparent to-[#006ea3]/[0.03] dark:from-[#006ea3]/[0.03] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#006ea3]/[0.04] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Header — centered */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Powering Innovation Across <span className="text-black dark:text-white">Every Industry</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            Deep domain expertise from banking to healthcare, e-commerce to logistics — ensuring every solution addresses real industry challenges.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-14">
          {industries.map((industry, i) => {
            const IndIcon = industry.icon;
            return (
              <Link
                key={industry.name}
                href={industry.href}
                className={`group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] hover:border-[#006ea3]/30 dark:hover:border-[#006ea3]/30 overflow-hidden transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 70}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:bg-[#006ea3]/15 group-hover:border-[#006ea3]/30 group-hover:scale-110 transition-all duration-300">
                  <IndIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                </div>
                <span className="relative text-sm md:text-base font-semibold tracking-tight text-center group-hover:text-[#006ea3] transition-colors duration-300">
                  {industry.name}
                </span>
                <ArrowRight className="relative w-4 h-4 text-black/15 dark:text-white/15 group-hover:text-[#006ea3] group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Bottom highlights */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { text: "Customized industry solutions", icon: Lightbulb },
            { text: "Domain-expert engineering teams", icon: Users },
            { text: "Regulatory compliance built-in", icon: Shield },
            { text: "Scalable architectures for growth", icon: Layers },
          ].map((item) => {
            const HIcon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.01] dark:bg-white/[0.01]"
              >
                <HIcon className="w-4 h-4 text-[#006ea3] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-medium text-black/50 dark:text-white/45">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const { ref, visible } = useInView(0.15);

  const items = [
    { icon: Users, title: "Expert Teams", stat: "120+", statLabel: "Engineers", desc: "Senior engineers, designers, and strategists with deep domain expertise across industries.", highlights: ["Full-stack expertise", "Domain specialists", "Certified professionals"] },
    { icon: Clock, title: "On-Time Delivery", stat: "95%", statLabel: "On Schedule", desc: "Agile sprints with transparent timelines — 95% of projects delivered on or ahead of schedule.", highlights: ["Agile methodology", "Sprint-based delivery", "Transparent timelines"] },
    { icon: Layers, title: "Scalable Solutions", stat: "10x", statLabel: "Growth Ready", desc: "Architectures built to handle 10x growth — from startup MVP to enterprise-grade systems.", highlights: ["Cloud-native design", "Microservices architecture", "Auto-scaling infra"] },
    { icon: HeartHandshake, title: "Long-Term Partnership", stat: "98%", statLabel: "Retention", desc: "We don't just build and leave. Ongoing support, optimization, and strategic guidance as you grow.", highlights: ["Dedicated support", "Continuous optimization", "Strategic guidance"] },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.03] dark:from-[#006ea3]/[0.02] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006ea3]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#006ea3]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Why Businesses <span className="text-black dark:text-white">Choose Us</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that truly move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative flex flex-col rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] hover:border-[#006ea3]/30 dark:hover:border-[#006ea3]/30 overflow-hidden transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top accent line */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-7 flex flex-col flex-1">
                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20 group-hover:bg-[#006ea3]/15 group-hover:border-[#006ea3]/30 transition-all duration-300">
                      <ItemIcon className="w-6 h-6 text-[#006ea3]" strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#006ea3] tabular-nums leading-none">{item.stat}</div>
                      <div className="text-[10px] font-semibold text-black/30 dark:text-white/25 uppercase tracking-wider mt-1">{item.statLabel}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed mb-5">{item.desc}</p>

                  {/* Highlight tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#006ea3]/80 dark:text-[#006ea3]/70 bg-[#006ea3]/[0.06] dark:bg-[#006ea3]/[0.08] px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = useCallback(() => {
    const el = document.getElementById("services-grid");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-[#006ea3]/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 text-center relative">
          <h1
            className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Innovative Services.
            <br />
            <span className="text-[#006ea3]">Driving Real Growth.</span>
          </h1>
          <p
            className={`mt-6 text-lg md:text-xl font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From strategy to deployment, we deliver full-spectrum digital services that help businesses innovate, scale, and lead in their markets.
          </p>
          <p
            className={`mt-3 text-sm md:text-base font-medium text-[#006ea3]/70 max-w-xl mx-auto leading-relaxed tracking-wide transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by 50+ companies &bull; 200+ projects delivered &bull; 98% client retention
          </p>
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/resources/free-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* ── Categorized Services ── */}
      <div id="services-grid" className="mx-auto max-w-7xl px-6 py-20">
        {categories.map((category, i) => (
          <CategorySection key={category.id} category={category} index={i} />
        ))}
      </div>

      {/* ── Stats Bar ── */}
      <StatsBar />

      {/* ── Process Timeline ── */}
      <ProcessTimeline />

      {/* ── Industries ── */}
      <IndustriesSection />

      {/* ── Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── CTA ── */}
      <CTASection />
    </section>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.25);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/8 via-transparent to-[#006ea3]/5 dark:from-[#006ea3]/5 dark:to-[#006ea3]/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ready to Build Something
          <br />
          <span className="text-black dark:text-white">Extraordinary?</span>
        </h2>
        <p
          className={`mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Let&apos;s discuss your project. Our team of experts is ready to turn your vision into a market-leading reality.
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
