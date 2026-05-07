import { Apple, BarChart3, Building2, Clock, Cloud, Code2, Cpu, CreditCard, Factory, Gamepad2, Globe, GraduationCap, HeartHandshake, Layers, MessageCircle, Palette, Rocket, Settings, ShieldCheck, ShoppingCart, Smartphone, Stethoscope, TabletSmartphone, Truck, Users, Utensils, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, WhyNeedProps, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Back to all services",
  titleTop: "Mobile App",
  titleBottom: "Development",
  description: "We build iOS and Android experiences people return to daily. From first concept through App Store launch, our mobile practice ships refined, high-performing products with fluid UX, dependable backends, and architecture built to scale.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
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

export const techCategories: TechCategory[] = [
  { label: "Languages", items: [
    { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
    { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
    { name: "Dart", logo: `${DEVICON}/dart/dart-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
    { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
  ] },
  { label: "Frameworks", items: [
    { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
    { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
    { name: "SwiftUI", logo: `${DEVICON}/swift/swift-original.svg` },
    { name: "Jetpack Compose", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
  ] },
  { label: "Backend", items: [
    { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
    { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
  ] },
  { label: "DevOps", items: [
    { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    { name: "GitHub Actions", logo: `${DEVICON}/github/github-original.svg` },
    { name: "Fastlane", logo: `${DEVICON}/apple/apple-original.svg` },
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  ] },
  { label: "Testing", items: [
    { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
    { name: "Detox", logo: `${DEVICON}/react/react-original.svg` },
    { name: "XCTest", logo: `${DEVICON}/apple/apple-original.svg` },
    { name: "Appium", logo: `${DEVICON}/selenium/selenium-original.svg` },
  ] },
];

export const whyNeedProps: WhyNeedProps = {
  heading: "Mobile Apps Can Be",
  headingHighlight: "Game-Changing",
  subtitle: "Our industry-focused app development services help your business become successful and gain access to varied benefits.",
  image: "/images/stock/stock-865b79fffc.jpg",
  imageAlt: "Mobile app development benefits",
  items: [
    {
      title: "Effective Customer Connect",
      description: "Mobile apps create a direct, always-on communication channel with your customers. Push notifications, in-app messaging, and personalized content keep users engaged and informed in real-time.",
    },
    {
      title: "Raise Conversion Rates",
      description: "Apps deliver 3x higher conversion rates than mobile websites. Streamlined checkout flows, saved preferences, and one-tap actions reduce friction and drive more completed transactions.",
    },
    {
      title: "Brilliant Marketing Channel",
      description: "Your app is a 24/7 marketing platform — push promotions, loyalty programs, referral rewards, and geo-targeted offers directly to users' home screens without ad spend.",
    },
    {
      title: "Round-the-Clock Accessibility",
      description: "Unlike websites, mobile apps work offline with cached data and sync when connected. Your customers can browse products, access content, and use core features anytime, anywhere.",
    },
    {
      title: "Maximum User Engagement",
      description: "Mobile apps are highly effective in brand building, user engagement, and offer multiple benefits because of its easy accessibility for users on varied devices and browsers.",
    },
    {
      title: "Competitive Edge in Market",
      description: "A polished mobile app signals innovation and reliability. Businesses with dedicated apps see higher customer retention, stronger brand loyalty, and a clear advantage over competitors still relying on web-only presence.",
    },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Senior Mobile Engineers", description: "Dedicated squads of iOS and Android experts averaging more than five years in production mobile work." },
  { icon: Clock, title: "Rapid Time-to-Market", description: "Agile cadence in two-week increments—move from concept to App Store readiness in as few as eight weeks." },
  { icon: ShieldCheck, title: "Enterprise-Grade Security", description: "Encryption in transit and at rest, biometric authentication, hardened storage, and adherence to HIPAA and PCI-DSS." },
  { icon: HeartHandshake, title: "Post-Launch Partnership", description: "Sustained maintenance, crash analytics, performance refinement, and thoughtful expansion of the product roadmap." },];

export const caseStudyProjects: Project[] = [
  {
    id: "chorus-mobile",
    tag: "Healthcare App",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "Cross-platform healthcare app for Google with real-time patient vitals monitoring.",
    challenge: "Inconsistent BLE performance across platforms. Real-time data synchronization. Maintaining healthcare-grade data security.",
    solution: "Built CHORUS — a scalable cross-platform app (Web, Android, iOS) tracking live patient vitals such as heart rate and oxygen levels via BLE.",
    duration: "120 days",
    metrics: [
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime achieved"
      },
      {
        value: 3,
        suffix: " platforms",
        label: "Web, Android, iOS"
      },
      {
        value: 0,
        suffix: " breaches",
        label: "Security incidents"
      }
    ],
    timeline: [
      {
        phase: "Platform Architecture",
        detail: "Cross-platform framework selection, BLE protocol design"
      },
      {
        phase: "Vitals Integration",
        detail: "Real-time heart rate, oxygen level tracking"
      },
      {
        phase: "Security Hardening",
        detail: "SAST, SCA scanning, healthcare-grade encryption"
      },
      {
        phase: "Multi-Platform Launch",
        detail: "Synchronized release across all platforms"
      }
    ],
    accentColor: "#10b981"
  },
  {
    id: "edtech-mobile",
    tag: "AI-Driven Platform",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "EdTech",
    industry: "Education Technology",
    headline: "AI-driven e-learning platform with personalized learning paths and live classes.",
    challenge: "Creating a scalable AI model for personalized learning. Ensuring real-time performance for live classes.",
    solution: "Developed a web and mobile platform with AI-driven course recommendations, adaptive learning paths, and WebRTC live classes.",
    duration: "90 days",
    metrics: [
      {
        value: 45,
        suffix: "%",
        label: "Learner improvement"
      },
      {
        value: 3,
        suffix: "x",
        label: "Engagement increase"
      },
      {
        value: 10,
        suffix: "K+",
        label: "Active students"
      }
    ],
    timeline: [
      {
        phase: "AI Model Design",
        detail: "Adaptive learning algorithm, recommendation system"
      },
      {
        phase: "Live Class Engine",
        detail: "WebRTC for real-time video and chat"
      },
      {
        phase: "Gamification Layer",
        detail: "Points, badges, leaderboards"
      },
      {
        phase: "Scale & Launch",
        detail: "Platform rollout for students and educators"
      }
    ],
    accentColor: "#8b5cf6"
  },
  {
    id: "fintech-mobile",
    tag: "AI-Powered Finance",
    tagColor: "bg-[#4EB3E8]/15 text-[#4a7db8] border-[#4EB3E8]/30",
    company: "FinTech App",
    industry: "Financial Technology",
    headline: "AI-powered financial management app with fraud detection and smart budgeting.",
    challenge: "Ensuring secure handling of sensitive financial data. Building accurate AI models for spending analysis.",
    solution: "Cross-platform mobile app with AI-driven insights, bank-grade encryption, biometric auth, and ML-based budgeting.",
    duration: "80 days",
    metrics: [
      {
        value: 95,
        suffix: "%",
        label: "Fraud detection"
      },
      {
        value: 40,
        suffix: "%",
        label: "Better budgeting"
      },
      {
        value: 100,
        suffix: "%",
        label: "Data encryption"
      }
    ],
    timeline: [
      {
        phase: "Security Architecture",
        detail: "Bank-grade encryption, biometric auth"
      },
      {
        phase: "AI Model Training",
        detail: "Spending analysis, anomaly detection"
      },
      {
        phase: "Payment Integration",
        detail: "Digital wallets, payment gateways"
      },
      {
        phase: "Launch & Monitor",
        detail: "Cross-platform release with monitoring"
      }
    ],
    accentColor: "#4EB3E8"
  }
];
