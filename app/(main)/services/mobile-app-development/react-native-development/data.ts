import { Smartphone, Globe2, Puzzle, RefreshCw, Palette, Wrench, Search, Layout, Code2, FlaskConical, Rocket, Headphones, Users, Layers, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "React Native",
  titleBottom: "Development",
  description: "Build cross-platform mobile apps with JavaScript and TypeScript — one codebase for iOS and Android, deep native module access when you need it, and hot reload for a fast, productive dev loop from prototype to production.",
  heroImage: "/images/stock/stock-ad3cd888d4.jpg",
  heroImageAlt: "React Native cross-platform development",
  topBadge: { icon: null as any, title: "JS & TypeScript", subtitle: "Cross-platform", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Hot Reload", subtitle: "Instant iterations", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "" };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Discovery through support — a clear six-step timeline so you always know where the project stands." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tech", headingWhite: "Stack", subtitle: "Languages, tooling, libraries, backends, and testing — chosen for maintainable React Native products at scale." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build with", headingBottom: "React Native?", description: "Tell us about your app — we&apos;ll map a pragmatic path to iOS, Android, and beyond with React Native." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Discovery",
    description:
      "Workshops, requirements, and technical discovery — we align on users, scope, integrations, and success metrics before a line of code ships.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes, flows, and high-fidelity UI with a reusable component library that maps cleanly to React Native primitives.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative sprints with code review, native modules where needed, and fast feedback loops powered by hot reload and robust tooling.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Unit, integration, and device testing across real hardware — catching regressions before they reach your users.",
    icon: FlaskConical,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Store-ready builds, release trains, and rollout strategy — TestFlight, Play Console, staged releases, and monitoring hooks.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support",
    description:
      "Post-launch monitoring, bug triage, performance tuning, and roadmap execution so your app evolves with your business.",
    icon: Headphones,
  },];

export const techCategories: TechCategory[] = [{ label: "Core", items: [
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Redux", logo: `${DEVICON}/redux/redux-original.svg` },
    ] },
  { label: "Navigation & UI", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` },
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
    ] },
  { label: "Backend", items: [
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    ] },
  { label: "DevOps", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Fastlane", logo: `${DEVICON}/fastlane/fastlane-original.svg` },
      { name: "Android Studio", logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: "Xcode", logo: `${DEVICON}/xcode/xcode-original.svg` },
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Users,
    title: "React Native Specialists",
    description:
      "Engineers who live in the RN ecosystem — navigation, native bridges, performance, and release pipelines are second nature.",
  },
  {
    icon: Layers,
    title: "Code Reusability",
    description:
      "Maximize shared UI, logic, and design tokens across iOS, Android, and web so you ship faster with less duplication.",
  },
  {
    icon: Zap,
    title: "Fast Development",
    description:
      "Hot reload, strong tooling, and reusable components compress iteration time from prototype to production.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    description:
      "We stay after launch — upgrades, store policies, scaling, and feature roadmaps with a team invested in your product.",
  },];
