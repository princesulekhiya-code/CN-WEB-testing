"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Smartphone, Globe, Cloud, Palette, Zap, TrendingUp, Brain,
  Shield, GitMerge, ArrowRight, CheckCircle2, Layers, Users, Clock,
  Lightbulb, Rocket, BarChart3, HeartHandshake, Building2, GraduationCap,
  CreditCard, ShoppingCart, Stethoscope, Truck, Factory, Cog,
  Monitor, UsersRound, Package, ShoppingBag, CloudCog, Blocks, Boxes,
  Settings, ServerCog, Cpu, Wrench, Briefcase, ChevronRight, Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView as useMotionInView } from "framer-motion";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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
  { step: "01", title: "Discovery & Strategy", description: "We deep-dive into your business goals, pain points, and technical landscape to craft a tailored strategy.", icon: Lightbulb },
  { step: "02", title: "Design & Architecture", description: "Our team designs intuitive interfaces and robust system architectures that scale with your growth.", icon: Layers },
  { step: "03", title: "Agile Development", description: "Iterative sprints with continuous feedback loops ensure transparent progress and rapid delivery.", icon: Cog },
  { step: "04", title: "Testing & QA", description: "Rigorous automated and manual testing across devices, browsers, and edge cases for bulletproof quality.", icon: CheckCircle2 },
  { step: "05", title: "Deployment & Launch", description: "Zero-downtime deployments with monitoring, rollback strategies, and performance optimization.", icon: Rocket },
  { step: "06", title: "Support & Growth", description: "Ongoing maintenance, analytics-driven improvements, and scaling support as your business evolves.", icon: HeartHandshake },
];

const industries = [
  {
    icon: CreditCard, name: "FinTech & Banking", href: "/industry/banking-finance-insurance",
    desc: "Mobile banking, payment gateways, trading platforms & regulatory compliance",
    accent: "#10B981", stat: "25+", statLabel: "FinTech Apps",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Stethoscope, name: "Healthcare", href: "/industry/healthcare-lifesciences",
    desc: "Telemedicine, EHR systems, patient portals & HIPAA-compliant solutions",
    accent: "#EF4444", stat: "15+", statLabel: "Health Apps",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: ShoppingCart, name: "E-Commerce", href: "/industry/ecommerce-solutions",
    desc: "Online stores, marketplaces, inventory management & headless commerce",
    accent: "#8B5CF6", stat: "30+", statLabel: "Stores Built",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: GraduationCap, name: "Education", href: "/industry/education-elearning",
    desc: "LMS platforms, interactive courses, virtual classrooms & EdTech apps",
    accent: "#F59E0B", stat: "20+", statLabel: "EdTech Solutions",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Truck, name: "Logistics", href: "/industry/transport-logistics",
    desc: "Fleet tracking, route optimization, warehouse management & supply chain",
    accent: "#06B6D4", stat: "12+", statLabel: "Logistics Apps",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2, name: "Real Estate", href: "/industry/real-estate",
    desc: "Property listings, virtual tours, CRM systems & tenant management",
    accent: "#EC4899", stat: "10+", statLabel: "PropTech Apps",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Factory, name: "Manufacturing", href: "/industry/enterprise-retail-manufacturing",
    desc: "IoT dashboards, ERP integrations, quality control & production tracking",
    accent: "#F97316", stat: "8+", statLabel: "Mfg Solutions",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: BarChart3, name: "SaaS & Startups", href: "/industry/fintech",
    desc: "MVP builds, multi-tenant platforms, subscription billing & rapid scaling",
    accent: "#006ea3", stat: "40+", statLabel: "SaaS Products",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Enterprise-grade solutions shipped globally" },
  { value: 50, suffix: "+", label: "Global Clients", description: "From Fortune 500 to fast-growing startups" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Long-term partnerships built on trust" },
  { value: 10, suffix: "+", label: "Industries Served", description: "Across healthcare, fintech, retail & more" },
];

/* ═══════════════════════════════════════════════════════
   MOTION VARIANTS
   ═══════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ═══════════════════════════════════════════════════════
   SERVICE CARD ILLUSTRATIONS (Tech Logo Icons)
   ═══════════════════════════════════════════════════════ */

interface CardLogoData {
  logos: string[];
  accent: string;
}

const serviceCardLogos: Record<string, CardLogoData> = {
  "AI, ML & Data Science": {
    logos: ["python/python-original.svg", "tensorflow/tensorflow-original.svg", "jupyter/jupyter-original-wordmark.svg"],
    accent: "#FF6F00",
  },
  "Digital Transformation": {
    logos: ["kubernetes/kubernetes-original.svg", "docker/docker-original.svg", "terraform/terraform-original.svg"],
    accent: "#326CE5",
  },
  "Cybersecurity & Compliance": {
    logos: ["linux/linux-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg", "nginx/nginx-original.svg"],
    accent: "#E53935",
  },
  "Technology Consulting": {
    logos: ["jira/jira-original.svg", "confluence/confluence-original.svg", "googlecloud/googlecloud-original.svg"],
    accent: "#4285F4",
  },
  "Mobile App Development": {
    logos: ["swift/swift-original.svg", "kotlin/kotlin-original.svg", "flutter/flutter-original.svg"],
    accent: "#F05138",
  },
  "Web Development": {
    logos: ["react/react-original.svg", "nextjs/nextjs-original.svg", "typescript/typescript-original.svg"],
    accent: "#61DAFB",
  },
  "Software Development": {
    logos: ["java/java-original.svg", "dotnetcore/dotnetcore-original.svg", "postgresql/postgresql-original.svg"],
    accent: "#5382A1",
  },
  "MVP Development": {
    logos: ["firebase/firebase-original.svg", "react/react-original.svg", "figma/figma-original.svg"],
    accent: "#FFCA28",
  },
  "Hire Dedicated Developers": {
    logos: ["github/github-original.svg", "javascript/javascript-original.svg", "react/react-original.svg"],
    accent: "#8B5CF6",
  },
  "UI/UX Design": {
    logos: ["figma/figma-original.svg", "sketch/sketch-original.svg", "illustrator/illustrator-plain.svg"],
    accent: "#A259FF",
  },
  "SaaS Development": {
    logos: ["react/react-original.svg", "amazonwebservices/amazonwebservices-plain-wordmark.svg", "redis/redis-original.svg"],
    accent: "#FF9900",
  },
  "IT Consulting": {
    logos: ["jira/jira-original.svg", "azure/azure-original.svg", "confluence/confluence-original.svg"],
    accent: "#0078D4",
  },
  "Product Engineering": {
    logos: ["figma/figma-original.svg", "react/react-original.svg", "nodejs/nodejs-original.svg"],
    accent: "#00BCD4",
  },
  "E-Commerce Development": {
    logos: ["woocommerce/woocommerce-original.svg", "shopify/shopify-original.svg", "magento/magento-original.svg"],
    accent: "#96588A",
  },
  "WordPress Development": {
    logos: ["wordpress/wordpress-original.svg", "php/php-original.svg", "mysql/mysql-original.svg"],
    accent: "#21759B",
  },
  "Digital Marketing": {
    logos: ["google/google-original.svg", "wordpress/wordpress-original.svg", "googlecloud/googlecloud-original.svg"],
    accent: "#34A853",
  },
  "Cloud Services": {
    logos: ["amazonwebservices/amazonwebservices-plain-wordmark.svg", "googlecloud/googlecloud-original.svg", "azure/azure-original.svg"],
    accent: "#FF9900",
  },
  "DevOps & Cloud Automation": {
    logos: ["docker/docker-original.svg", "kubernetes/kubernetes-original.svg", "terraform/terraform-original.svg"],
    accent: "#2496ED",
  },
};

function ServiceCardIllustration({ title }: { title: string }) {
  const data = serviceCardLogos[title];
  if (!data) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
          <Image src={`${DEVICON}/${data.logos[0]}`} alt="" width={40} height={40} className="w-9 h-9 md:w-10 md:h-10 object-contain" unoptimized />
        </div>
      </div>

      <div className="absolute w-32 h-32 md:w-36 md:h-36 rounded-full border border-dashed opacity-20 group-hover:opacity-40 group-hover:rotate-[30deg] transition-all duration-1000" style={{ borderColor: data.accent }} />

      <div className="absolute top-1 right-6 md:top-2 md:right-10 z-10">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[1]}`} alt="" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6 object-contain" unoptimized />
        </div>
      </div>

      <div className="absolute bottom-1 left-6 md:bottom-2 md:left-10 z-10">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-white/10 shadow-md shadow-black/5 dark:shadow-black/20 border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
          <Image src={`${DEVICON}/${data.logos[2]}`} alt="" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6 object-contain" unoptimized />
        </div>
      </div>

      <div className="absolute top-4 left-12 w-1.5 h-1.5 rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
      <div className="absolute bottom-6 right-12 w-1.5 h-1.5 rounded-full opacity-15 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: data.accent }} />

      <div className="absolute w-20 h-20 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500" style={{ backgroundColor: data.accent }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════ */

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const hasSublinks = service.sublinks && service.sublinks.length > 0;
  const hasIllustration = !!serviceCardLogos[service.title];

  return (
    <motion.div
      variants={cardVariant}
      className="group relative h-full rounded-2xl bg-white/80 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#006ea3]/[0.02] dark:hover:bg-[#111] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#006ea3]/10 dark:hover:shadow-[#006ea3]/5 overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {hasIllustration && (
        <div className="relative h-32 md:h-36 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.02] dark:from-[#006ea3]/[0.05] dark:to-[#006ea3]/[0.02] border-b border-black/[0.04] dark:border-white/[0.04] group-hover:from-[#006ea3]/[0.06] group-hover:to-[#006ea3]/[0.03] transition-all duration-500">
          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
            <ServiceCardIllustration title={service.title} />
          </div>
          <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-sm group-hover:bg-[#006ea3]/10 group-hover:border-[#006ea3]/20 transition-all duration-300">
            <Icon className="w-4 h-4 text-black/50 dark:text-white/50 group-hover:text-[#006ea3] transition-colors duration-300" strokeWidth={1.5} />
          </div>
        </div>
      )}

      <div className={`relative z-10 ${hasIllustration ? "p-5 md:p-6" : "p-6 sm:p-7"} h-full flex flex-col`}>
        {!hasIllustration && (
          <Link href={service.href} className="block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#006ea3]/20 dark:border-white/10 bg-white dark:bg-[#161616] text-[#006ea3] dark:text-[#ededed] group-hover:text-[#006ea3] group-hover:border-[#006ea3]/30 group-hover:bg-white dark:group-hover:bg-[#1a1a1a] transition-all duration-500 shadow-sm">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </Link>
        )}

        <Link href={service.href} className="block">
          <h3 className="text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] group-hover:text-[#006ea3] transition-colors duration-300">
            {service.title}
          </h3>
        </Link>

        {hasSublinks ? (
          <ul className="mt-3 space-y-1.5 flex-1">
            {service.sublinks!.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-black/50 dark:text-white/50 hover:text-[#006ea3] transition-colors duration-300"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex-1 flex flex-col">
            <p className="mt-2 text-sm font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/60 dark:group-hover:text-[#a1a1a1] transition-colors duration-300 line-clamp-2">
              {service.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#006ea3]/70 dark:text-[#006ea3]/60 bg-[#006ea3]/[0.06] dark:bg-[#006ea3]/[0.08] px-2.5 py-1 rounded-full group-hover:text-[#006ea3] group-hover:bg-[#006ea3]/10 transition-all duration-500"
                >
                  <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center text-[13px] font-semibold text-[#006ea3] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, index }: { category: ServiceCategory; index: number }) {
  const CatIcon = category.icon;
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-24 last:mb-0">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.div variants={fadeUp} custom={index * 0.1} className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20">
          <CatIcon className="w-7 h-7 text-[#006ea3]" strokeWidth={1.5} />
        </motion.div>
        <motion.h2 variants={fadeUp} custom={index * 0.1 + 0.1} className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          {category.title}
        </motion.h2>
        <motion.p variants={fadeUp} custom={index * 0.1 + 0.2} className="mt-3 text-sm md:text-base font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
          {category.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {category.services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </div>
  );
}

function StatsBar() {
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });
  const c0 = useAnimatedCount(stats[0].value, isInView, 0);
  const c1 = useAnimatedCount(stats[1].value, isInView, 150);
  const c2 = useAnimatedCount(stats[2].value, isInView, 300);
  const c3 = useAnimatedCount(stats[3].value, isInView, 450);
  const counts = [c0, c1, c2, c3];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#006ea3]/[0.04] via-transparent to-[#006ea3]/[0.04] dark:from-[#006ea3]/[0.03] dark:to-[#006ea3]/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#006ea3]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Numbers That <span className="text-black dark:text-white">Speak Volumes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#0a0a0a] border border-[#006ea3]/10 dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#cde3fc] dark:hover:bg-[#111] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#006ea3]/8 overflow-hidden transition-all duration-500 p-6 md:p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#006ea3]/[0.04] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#006ea3] tabular-nums tracking-tight">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="mt-2 text-sm md:text-base font-semibold text-black/70 dark:text-white/70">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs md:text-sm text-black/40 dark:text-white/35 leading-relaxed font-medium">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
          How We Bring <span className="text-black dark:text-white">Ideas to Life</span>
        </h2>
        <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
          A proven six-step methodology that ensures quality, transparency, and on-time delivery.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {processSteps.map((step, i) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="group relative rounded-2xl bg-[#D9EAFD] dark:bg-[#0a0a0a] border border-[#006ea3]/10 dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#cde3fc] dark:hover:bg-[#111] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#006ea3]/8 overflow-hidden transition-all duration-500 p-6 sm:p-7"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#006ea3]/[0.04] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#006ea3]/20 dark:border-white/10 bg-white dark:bg-[#161616] text-[#006ea3] group-hover:border-[#006ea3]/30 transition-all duration-500 shadow-sm">
                    <StepIcon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-bold text-[#006ea3]/20 dark:text-[#006ea3]/15 tabular-nums group-hover:text-[#006ea3]/35 transition-colors duration-500">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/55 dark:group-hover:text-[#a1a1a1] transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/[0.04] via-transparent to-[#006ea3]/[0.03] dark:from-[#006ea3]/[0.03] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#006ea3]/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#006ea3]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-semibold text-[#006ea3] uppercase tracking-[0.2em] mb-4">Industries We Serve</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Powering Innovation Across <span className="text-black dark:text-white">Every Industry</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            Deep domain expertise from banking to healthcare, e-commerce to logistics — ensuring every solution addresses real industry challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-14">
          {industries.map((industry, i) => {
            const IndIcon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={industry.href}
                  className="group relative block h-full rounded-2xl bg-white/80 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#006ea3]/[0.02] dark:hover:bg-[#111] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#006ea3]/10 dark:hover:shadow-[#006ea3]/5 overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image header */}
                  <div className="relative h-36 md:h-40 overflow-hidden rounded-t-2xl border-b border-black/[0.04] dark:border-white/[0.04]">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-[#006ea3] group-hover:border-[#006ea3]/50 transition-all duration-300">
                      <IndIcon className="w-4 h-4 text-black/60 dark:text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-black/50 border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="text-xs font-bold text-[#006ea3]">{industry.stat}</span>
                      <span className="text-[9px] font-medium text-black/50 dark:text-white/40 ml-1">{industry.statLabel}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-black/85 dark:text-[#ededed] group-hover:text-[#006ea3] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium text-black/45 dark:text-[#8b8b8b] leading-relaxed group-hover:text-black/55 dark:group-hover:text-[#a1a1a1] transition-colors duration-300">
                      {industry.desc}
                    </p>
                    <div className="mt-4 flex items-center text-[13px] font-semibold text-[#006ea3] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore industry <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
                className="flex items-center gap-3 p-4 rounded-xl border border-[#006ea3]/10 dark:border-white/[0.04] bg-white/60 dark:bg-white/[0.01]"
              >
                <HIcon className="w-4 h-4 text-[#006ea3] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-medium text-black/50 dark:text-white/45">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });

  const items = [
    { icon: Users, title: "Expert Teams", stat: "120+", statLabel: "Engineers", desc: "Senior engineers, designers, and strategists with deep domain expertise across industries.", highlights: ["Full-stack expertise", "Domain specialists", "Certified professionals"] },
    { icon: Clock, title: "On-Time Delivery", stat: "95%", statLabel: "On Schedule", desc: "Agile sprints with transparent timelines — 95% of projects delivered on or ahead of schedule.", highlights: ["Agile methodology", "Sprint-based delivery", "Transparent timelines"] },
    { icon: Layers, title: "Scalable Solutions", stat: "10x", statLabel: "Growth Ready", desc: "Architectures built to handle 10x growth — from startup MVP to enterprise-grade systems.", highlights: ["Cloud-native design", "Microservices architecture", "Auto-scaling infra"] },
    { icon: HeartHandshake, title: "Long-Term Partnership", stat: "98%", statLabel: "Retention", desc: "We don't just build and leave. Ongoing support, optimization, and strategic guidance as you grow.", highlights: ["Dedicated support", "Continuous optimization", "Strategic guidance"] },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#006ea3]/[0.03] via-transparent to-[#006ea3]/[0.03] dark:from-[#006ea3]/[0.02] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006ea3]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]">
            Why Businesses <span className="text-black dark:text-white">Choose Us</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that truly move the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-[#D9EAFD] dark:bg-[#0a0a0a] border border-[#006ea3]/10 dark:border-white/[0.06] hover:border-[#006ea3]/25 dark:hover:border-[#006ea3]/30 hover:bg-[#cde3fc] dark:hover:bg-[#111] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#006ea3]/8 overflow-hidden transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006ea3]/[0.04] rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#006ea3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#006ea3]/20 dark:border-white/10 bg-white dark:bg-[#161616] text-[#006ea3] group-hover:border-[#006ea3]/30 transition-all duration-500 shadow-sm">
                      <ItemIcon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#006ea3] tabular-nums leading-none">{item.stat}</div>
                      <div className="text-[10px] font-semibold text-black/30 dark:text-white/25 uppercase tracking-wider mt-1">{item.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-black/85 dark:text-[#ededed] mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-black/50 dark:text-[#8b8b8b] leading-relaxed mb-5 font-medium">{item.desc}</p>

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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useMotionInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006ea3]/[0.06] via-transparent to-[#006ea3]/[0.04] dark:from-[#006ea3]/[0.04] dark:to-[#006ea3]/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006ea3]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,110,163,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,163,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]"
        >
          Ready to Build Something
          <br />
          <span className="text-black dark:text-white">Extraordinary?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed"
        >
          Let&apos;s discuss your project. Our team of experts is ready to turn your vision into a market-leading reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ServicesPage() {
  const scrollToServices = useCallback(() => {
    const el = document.getElementById("services-grid");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#006ea3]/10 via-transparent to-transparent dark:from-[#006ea3]/8 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-[#006ea3]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-[#006ea3]/[0.03] via-transparent to-transparent pointer-events-none" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,110,163,0.5) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 pt-28 sm:pt-32 pb-24 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006ea3]/10 border border-[#006ea3]/20 text-[#006ea3] text-xs font-semibold tracking-wide mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Full-Spectrum Digital Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Innovative Services.
            <br />
            <span className="text-[#006ea3]">Driving Real Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to deployment, we deliver full-spectrum digital services that help businesses innovate, scale, and lead in their markets.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-3 text-sm md:text-base font-medium text-[#006ea3]/70 max-w-xl mx-auto leading-relaxed tracking-wide"
          >
            Trusted by 50+ companies &bull; 200+ projects delivered &bull; 98% client retention
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
          </motion.div>
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
