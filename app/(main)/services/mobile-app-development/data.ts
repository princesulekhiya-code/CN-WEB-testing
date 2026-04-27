import { Apple, BarChart3, Building2, Clock, Cloud, Code2, Cpu, CreditCard, Factory, Gamepad2, Globe, GraduationCap, HeartHandshake, Layers, MessageCircle, Palette, Rocket, Settings, ShieldCheck, ShoppingCart, Smartphone, Stethoscope, TabletSmartphone, Truck, Users, Utensils, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to all services",
  titleTop: "Mobile App",
  titleBottom: "Development",
  description: "We build iOS and Android experiences people return to daily. From first concept through App Store launch, our mobile practice ships refined, high-performing products with fluid UX, dependable backends, and architecture built to scale.",
  heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "Mobile app development",
  topBadge: { icon: null as any, title: "iOS + Android", subtitle: "One codebase", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "4.8★ Avg", subtitle: "App Store rating", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Mobile app", headingWhite: "development services", subtitle: "Full-lifecycle mobile engineering across every surface—native iOS and Android, cross-platform stacks, and progressive web experiences." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our development", headingWhite: "process", subtitle: "A proven six-stage framework that safeguards quality, keeps stakeholders informed, and lands releases on schedule." };
export const techHeading: ServicePageSectionProps = { headingGray: "Built with", headingWhite: "leading tools", subtitle: "Best-in-class frameworks and platforms across the complete mobile delivery lifecycle." };
export const ctaProps: CTAProps = { headingTop: "Ready to build your", headingBottom: "next mobile app?", description: "Let&apos;s translate your concept into a refined experience your audience reaches for daily. Reserve a complimentary strategy session with our mobile specialists." };

export const services: ServiceOffering[] = [
  { icon: Apple, title: "iOS App Development", description: "Native iOS experiences for iPhone, iPad, and Apple Watch, engineered in Swift and SwiftUI for seamless alignment across the Apple ecosystem.", features: ["Swift & SwiftUI", "Apple Watch apps", "App Store optimization"], href: "/services/mobile-app-development/ios-app-development" , logos: ["swift/swift-original.svg", "apple/apple-original.svg", "xcode/xcode-original.svg"], accent: "#F05138"},
  { icon: TabletSmartphone, title: "Android App Development", description: "Performance-first Android builds in Kotlin and Jetpack Compose, tuned for the full spectrum of devices and form factors in the wild.", features: ["Kotlin & Jetpack", "Material Design 3", "Play Store optimization"], href: "/services/mobile-app-development/android-app-development" , logos: ["kotlin/kotlin-original.svg", "android/android-original.svg", "androidstudio/androidstudio-original.svg"], accent: "#3DDC84"},
  { icon: Layers, title: "Flutter App Development", description: "Refined cross-platform products from one Dart codebase—near-native speed, meticulously crafted UI, and shorter iteration cycles.", features: ["Single codebase", "Native performance", "Custom widgets"], href: "/services/mobile-app-development/flutter-app-development" , logos: ["flutter/flutter-original.svg", "dart/dart-original.svg", "firebase/firebase-original.svg"], accent: "#02569B"},
  { icon: Code2, title: "React Native Development", description: "Feature-rich cross-platform applications on React Native with shared business logic, native modules, and hot reload for sustained velocity.", features: ["Shared codebase", "Native modules", "Hot reload"], href: "/services/mobile-app-development/react-native-development" , logos: ["react/react-original.svg", "javascript/javascript-original.svg", "nodejs/nodejs-original.svg"], accent: "#61DAFB"},
  { icon: Rocket, title: "MVP Development", description: "Disciplined mobile MVPs that prove the concept swiftly—from initial vision to a testable build in weeks rather than quarters.", features: ["Rapid prototyping", "User validation", "Iterative launch"], href: "/services/mobile-app-development/mvp-development" , logos: ["figma/figma-original.svg", "react/react-original.svg", "firebase/firebase-original.svg"], accent: "#4EB3E8"},
  { icon: Globe, title: "Progressive Web Apps", description: "Installable web experiences with offline resilience, push messaging, and native-feel interaction—no app-store distribution required.", features: ["Offline-first", "Push notifications", "Instant loading"], href: "/services/mobile-app-development/progressive-web-apps" , logos: ["html5/html5-original.svg", "css3/css3-original.svg", "javascript/javascript-original.svg"], accent: "#5A0FC8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Strategy & Research", description: "Market and competitive insight, user personas, and a sharpened product vision paired with a prioritized feature roadmap.", icon: BarChart3 },
  { step: "02", title: "Analysis & Planning", description: "Risk review, technical feasibility, systems architecture, and granular decomposition of work into sprint-ready tasks.", icon: Settings },
  { step: "03", title: "UI/UX Design", description: "Information architecture, wireframes, interactive prototypes, and production-grade visuals that honor each platform’s guidelines.", icon: Palette },
  { step: "04", title: "App Development", description: "Iterative sprints with CI/CD pipelines, peer code review, and continuous integration to accelerate dependable releases.", icon: Cpu },
  { step: "05", title: "QA & Testing", description: "Functional, performance, security, and device-matrix validation across 100+ physical handsets and OS releases.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Support", description: "Store submissions, ASO, post-launch observability, performance tuning, and continuous feature evolution.", icon: Rocket },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Senior Mobile Engineers", description: "Dedicated squads of iOS and Android experts averaging more than five years in production mobile work." },
  { icon: Clock, title: "Rapid Time-to-Market", description: "Agile cadence in two-week increments—move from concept to App Store readiness in as few as eight weeks." },
  { icon: ShieldCheck, title: "Enterprise-Grade Security", description: "Encryption in transit and at rest, biometric authentication, hardened storage, and adherence to HIPAA and PCI-DSS." },
  { icon: HeartHandshake, title: "Post-Launch Partnership", description: "Sustained maintenance, crash analytics, performance refinement, and thoughtful expansion of the product roadmap." },];
