import { Smartphone, Globe, Code, Layers, Palette, Rocket, Settings, BarChart3, GitMerge, Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/it-consulting",
  backLabel: "Back to IT Consulting",
  titleTop: "Custom Web & Mobile",
  titleBottom: "App Development",
  description: "Enterprise-grade web and mobile applications delivered by experienced tech teams to help your business grow, compete, and innovate in the digital market.",
  heroImage: "/images/stock/stock-a41ee3d1d8.jpg",
  heroImageAlt: "Custom App Development",
  topBadge: { icon: null as any, title: "Custom Apps", subtitle: "Tailored solutions", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "200+ Apps", subtitle: "Delivered", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Clients Advised" },
  { value: 40, suffix: "+", label: "Enterprise Projects" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Custom App Development", headingWhite: "Services", subtitle: "Full-cycle application development — from web and mobile to enterprise systems and APIs — built for performance, scale, and growth." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "An agile, six-phase process from requirements through post-launch support — delivering quality applications on time." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Modern, battle-tested technology stacks across frontend, backend, mobile, databases, and cloud infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Have an App Idea?", headingBottom: "Let&apos;s Build It Together", description: "Share your project requirements and get a free technical consultation. Our team will evaluate your idea and propose the best technology approach." };

export const services: ServiceOffering[] = [{ icon: Globe, title: "Custom Web Applications", description: "Responsive, high-performance web applications built with modern frameworks — from complex enterprise dashboards to customer-facing SaaS platforms.", features: ["React & Next.js", "Progressive Web Apps", "Enterprise dashboards"] },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android with seamless UX, offline support, and push notifications.", features: ["iOS & Android", "React Native & Flutter", "Offline-first design"] },
  { icon: Code, title: "Enterprise Software Solutions", description: "Mission-critical enterprise applications — ERP modules, CRM systems, and workflow platforms — built for scalability, security, and compliance.", features: ["ERP & CRM", "Workflow automation", "Role-based access"] },
  { icon: Layers, title: "API & Integration Development", description: "RESTful and GraphQL API design, third-party integrations, and middleware development to connect your systems and enable seamless data flow.", features: ["REST & GraphQL", "Third-party APIs", "Middleware design"] },
  { icon: Palette, title: "UI/UX Design & Prototyping", description: "User-centric interface design with wireframing, prototyping, usability testing, and design systems that ensure consistent, delightful experiences.", features: ["Wireframing", "Design systems", "Usability testing"] },
  { icon: GitMerge, title: "DevOps & Continuous Delivery", description: "CI/CD pipelines, containerization, and infrastructure-as-code to accelerate delivery cycles, improve quality, and reduce deployment risk.", features: ["CI/CD pipelines", "Docker & K8s", "Infrastructure-as-code"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Requirements Discovery", description: "Understand your business goals, user needs, and technical constraints through stakeholder workshops, user research, and competitive analysis.", icon: Settings },
  { step: "02", title: "Architecture & Design", description: "Design scalable system architecture, database schemas, API contracts, and UI wireframes — validated before a single line of code is written.", icon: Layers },
  { step: "03", title: "Agile Development", description: "Iterative sprints with continuous integration, code reviews, and demo sessions so you see progress weekly and can steer direction early.", icon: Code },
  { step: "04", title: "Quality Assurance", description: "Rigorous testing across functional, performance, security, and accessibility dimensions to ensure production-ready quality at launch.", icon: BarChart3 },
  { step: "05", title: "Deployment & Launch", description: "Zero-downtime deployments with containerized infrastructure, monitoring setup, and rollback plans for a confident production launch.", icon: Rocket },
  { step: "06", title: "Support & Evolution", description: "Post-launch optimization, feature enhancements, performance monitoring, and dedicated support to keep your application evolving.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [{ label: "Frontend", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: ".NET", logo: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` }
    ] },
  { label: "Mobile", items: [
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Expo", logo: `${DEVICON}/react/react-original.svg` }
    ] },
  { label: "Databases", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` }
    ] },
  { label: "DevOps", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Jenkins", logo: `${DEVICON}/jenkins/jenkins-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Vercel", logo: `${DEVICON}/vercel/vercel-original.svg` },
      { name: "Netlify", logo: `${DEVICON}/netlify/netlify-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Experienced Tech Team", description: "Senior engineers, designers, and QA specialists with an average of 7+ years experience building complex custom applications across industries." },
  { icon: Clock, title: "Agile Delivery", description: "Two-week sprints with transparent reporting, sprint demos, and iterative refinement — ensuring you get exactly what you need, on time." },
  { icon: TrendingUp, title: "Scalable Architecture", description: "Every application built with scalability in mind — microservices, cloud-native patterns, and infrastructure that grows with your business." },
  { icon: HeartHandshake, title: "Long-Term Partnership", description: "Beyond launch support with dedicated maintenance, feature development, and optimization — we grow with your product and business." },];
