import { Smartphone, Globe, Monitor, Puzzle, RefreshCw, Wrench, ClipboardList, Palette, Code2, ShieldCheck, Rocket, Settings, Users, Layers, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "Flutter App",
  titleBottom: "Development",
  description: "Build once, ship everywhere. With Flutter and Dart you get a single codebase, native performance via Skia, and expressive UI — so your product looks sharp and feels fast on mobile, web, and desktop.",
  heroImage: "/images/stock/stock-e84b560e2e.jpg",
  heroImageAlt: "Flutter app development",
  topBadge: { icon: null as any, title: "Single Codebase", subtitle: "iOS, Android & Web", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "60fps Native", subtitle: "Skia rendering engine", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "", headingWhite: "", subtitle: "" };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Flutter", headingWhite: "Process", subtitle: "A clear six-step path from discovery to continuous improvement." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tech", headingWhite: "Stack", subtitle: "Languages, tooling, and integrations we use to ship robust Flutter products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build", headingBottom: "with Flutter?", description: "Tell us about your product — we&apos;ll help you plan architecture, ship faster, and scale with confidence." };

export const services: ServiceOffering[] = [];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirement Analysis",
    description:
      "We align on goals, users, platforms, and constraints — then translate them into a clear backlog, milestones, and acceptance criteria.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Wireframes and high-fidelity screens with Flutter-friendly components — accessibility, motion, and brand consistency baked in from day one.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Feature sprints with clean architecture, code review, and CI — so your app stays maintainable as complexity grows.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Unit, widget, and integration tests plus device coverage — catch regressions early and ship with confidence.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Store submissions, release trains, and rollout strategy — TestFlight, Play Console, web hosting, and desktop notarization handled end-to-end.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance",
    description:
      "Monitoring, dependency updates, performance budgets, and a roadmap for continuous improvement after launch.",
    icon: Settings,
  },];

export const techCategories: TechCategory[] = [{ label: "Core", items: [
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Dart", logo: `${DEVICON}/dart/dart-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    ] },
  { label: "State & Architecture", items: [
      { name: "Dart", logo: `${DEVICON}/dart/dart-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "SQLite", logo: `${DEVICON}/sqlite/sqlite-original.svg` },
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    ] },
  { label: "DevOps & Testing", items: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Android Studio", logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: "Xcode", logo: `${DEVICON}/xcode/xcode-original.svg` },
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Users,
    title: "Flutter Experts",
    description:
      "Engineers who live in Dart and Flutter — architecture, state management, and platform channels done right.",
  },
  {
    icon: Layers,
    title: "Single Codebase Savings",
    description:
      "One team, one codebase, faster releases — less duplication across iOS, Android, web, and desktop.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Hot reload, strong tooling, and reusable widgets — iterate quickly without sacrificing quality.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Partnership beyond launch: upgrades, optimizations, and new features as your product evolves.",
  },];
