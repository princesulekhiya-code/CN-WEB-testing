import { Award, BarChart3, Briefcase, Building2, Clock, Code2, CreditCard, Database, Factory, Gamepad2, GraduationCap, Handshake, Headphones, HeartHandshake, Megaphone, Monitor, Palette, Rocket, Server, Settings, ShieldCheck, ShoppingCart, Smartphone, Stethoscope, Truck, UserPlus, Users, Utensils, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "Hire Dedicated",
  titleBottom: "Developers",
  description: "Scale with engagement models that bend to your priorities, depth you can rely on, and teams that have shipped before. Bring in pre-vetted engineers in as little as 48 hours and trim engineering spend by as much as 40%.",
  heroImage: "/images/stock/stock-6483454b17.jpg",
  heroImageAlt: "Hire dedicated developers",
  topBadge: { icon: null as any, title: "150+ Devs", subtitle: "Ready to deploy", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "48 Hours", subtitle: "To first match", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Capabilities We", headingWhite: "Deliver", subtitle: "End-to-end expertise shaped around your operating context and growth priorities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Delivery", headingWhite: "Process", subtitle: "A proven operating model that safeguards quality, visibility, and dependable release cadence." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built on", headingWhite: "Proven Tooling", subtitle: "Industry-leading frameworks and platforms form the foundation of every engagement we take on." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Dedicated Developers for Your Stack?", description: "Tell us the roles, technologies, and schedule you require—we will stand up a dedicated squad that delivers at the pace of your internal team. Begin with a seven-day trial at no risk." };

export const services: ServiceOffering[] = [
  { icon: Smartphone, title: "Hire Mobile App Developers", description: "Seasoned Android, iOS, Flutter, and React Native specialists who deliver high-performance mobile experiences on robust architecture—compressing time-to-market without cutting corners.", features: ["iOS & Android", "Flutter & React Native", "Store-ready releases"], href: "/services/hire-dedicated-developers/hire-mobile-app-developers" , logos: ["swift/swift-original.svg", "kotlin/kotlin-original.svg", "flutter/flutter-original.svg"], accent: "#F05138"},
  { icon: Monitor, title: "Hire Front-End Developers", description: "Front-end specialists at home in React, Angular, Vue.js, and modern UI stacks—shipping interfaces that remain responsive, accessible, and performance-tuned end to end.", features: ["React & Angular", "Vue.js", "Responsive design"], href: "/services/hire-dedicated-developers/hire-frontend-developers" , logos: ["react/react-original.svg", "vuejs/vuejs-original.svg", "angular/angular-original.svg"], accent: "#61DAFB"},
  { icon: Server, title: "Hire Back-End Developers", description: "Server-side experts in Node.js, Python, .NET, Java, and today’s API patterns—building dependable platforms designed for scale, throughput, and uptime.", features: ["Node.js & Python", ".NET & Java", "API design"], href: "/services/hire-dedicated-developers/hire-backend-developers" , logos: ["nodejs/nodejs-original.svg", "python/python-original.svg", "go/go-original.svg"], accent: "#68A063"},
  { icon: Database, title: "Hire Database Developers", description: "Data-layer experts spanning MySQL, MongoDB, PostgreSQL, and Redis—tuning storage, processing, and analytics pipelines from ingestion through insight.", features: ["SQL & NoSQL", "Data modeling", "Performance tuning"], href: "/services/hire-dedicated-developers/hire-database-developers" , logos: ["postgresql/postgresql-original.svg", "mongodb/mongodb-original.svg", "mysql/mysql-original.svg"], accent: "#336791"},
  { icon: Megaphone, title: "Hire Digital Marketing Experts", description: "Growth strategists who blend AI-accelerated execution with SEO, PPC, social, content, and performance initiatives—anchored to clear, measurable ROI.", features: ["SEO & PPC", "Social media", "Performance marketing"], href: "/services/hire-dedicated-developers/hire-digital-marketing-experts" , logos: ["google/google-original.svg", "facebook/facebook-original.svg", "linkedin/linkedin-original.svg"], accent: "#4285F4"},
  { icon: ShoppingCart, title: "Hire eCommerce & CMS Experts", description: "WordPress, Shopify, Magento, and custom CMS practitioners—building storefronts engineered for conversion and connected through seamless integrations.", features: ["Shopify & Magento", "WordPress", "Custom CMS"], href: "/services/hire-dedicated-developers/hire-ecommerce-cms-experts" , logos: ["wordpress/wordpress-original.svg", "woocommerce/woocommerce-original.svg", "magento/magento-original.svg"], accent: "#21759B"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Share Requirements", description: "Document your goals, technology choices, and timeline. We review the brief and recommend engineers whose skills match your needs with precision.", icon: Settings },
  { step: "02", title: "Receive Vetted Profiles", description: "Get carefully screened candidate profiles aligned to your scope—each checked for technical strength, domain fit, and clear, professional communication.", icon: Users },
  { step: "03", title: "Interview & Finalize", description: "Speak with shortlisted professionals to confirm fit, problem-solving approach, and conduct before you commit to the right people.", icon: Palette },
  { step: "04", title: "Onboard in 48 Hours", description: "Your engineer starts with tools, access, and structured onboarding in place—delivering real value from day one.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Join your backlog, definition of done, and release rhythm with shared quality standards and the agile practices your team already trusts.", icon: BarChart3 },
  { step: "06", title: "Scale or Transition", description: "Right-size the team, rotate subject-matter experts, or transition with runbooks as the program matures.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [
  { label: "Frontend", items: [
    { name: "React", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
    { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
    { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
    { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
    { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
  ] },
  { label: "Mobile", items: [
    { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
    { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
    { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
  ] },
  { label: "Cloud & DevOps", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "Dedicated Teams Can Be",
  headingHighlight: "Your Superpower",
  subtitle: "Scale your engineering capacity instantly with pre-vetted developers who integrate seamlessly with your existing team and processes.",
  image: "/images/stock/stock-bbfc4ec317.jpg",
  imageAlt: "Dedicated development team collaboration",
  items: [
    { title: "Rapid Team Scaling", description: "Go from request to productive developer in days, not months. Our bench of pre-vetted engineers lets you scale up or down based on project demands." },
    { title: "Significant Cost Savings", description: "Save 40-60% compared to local hiring — no recruitment fees, office costs, benefits overhead, or the risk and expense of bad hires." },
    { title: "Access to Niche Expertise", description: "Find specialists in React, Kotlin, DevOps, AI/ML, and 50+ other technologies. Get exact skill matches that are nearly impossible to recruit locally." },
    { title: "Full Management Control", description: "Your dedicated developers work exclusively on your project, follow your processes, attend your standups, and report directly to your team leads." },
    { title: "Zero Administrative Burden", description: "We handle payroll, taxes, benefits, hardware, and HR. You focus purely on building product while we manage the operational overhead." },
    { title: "Flexible Engagement Models", description: "Start with one developer or an entire squad. Adjust team size monthly. No long-term contracts or minimum commitments required." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Zap, title: "Breadth Across Disciplines", description: "Teams fluent in modern stacks—taking digital products from concept through launch with speed and uncompromising quality." },
  { icon: Clock, title: "Elastic, Right-Sized Capacity", description: "Grow or tighten headcount without heavy overhead. How we work adapts to your roadmap and shifting timelines." },
  { icon: Award, title: "Iterative Delivery, Full Visibility", description: "Transparent sprint rhythm, steady check-ins, and straightforward reporting—so you always know where things stand." },
  { icon: HeartHandshake, title: "Screened for Sector Fit", description: "Professionals selected for technical depth and industry context spanning healthcare, financial services, retail, and related fields." },];

export const caseStudyProjects: Project[] = [
  {
    id: "chorus-hire",
    tag: "Dedicated Team",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS (Google)",
    industry: "Healthcare",
    headline: "Dedicated cross-platform engineering team for Google's healthcare monitoring app.",
    challenge: "Needed specialized BLE and cross-platform expertise. Healthcare-grade security requirements.",
    solution: "Deployed a dedicated 8-person team with React Native, BLE, and security expertise. Full integration with Google's processes.",
    duration: "120 days",
    metrics: [
      {
        value: 8,
        suffix: " engineers",
        label: "Dedicated team"
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime achieved"
      },
      {
        value: 3,
        suffix: " platforms",
        label: "Delivered"
      }
    ],
    timeline: [
      {
        phase: "Team Assembly",
        detail: "Specialist recruitment and vetting"
      },
      {
        phase: "Client Integration",
        detail: "Process alignment and onboarding"
      },
      {
        phase: "Sprint Delivery",
        detail: "Agile development with daily standups"
      },
      {
        phase: "Knowledge Transfer",
        detail: "Documentation and handover"
      }
    ],
    accentColor: "#10b981"
  }
];
