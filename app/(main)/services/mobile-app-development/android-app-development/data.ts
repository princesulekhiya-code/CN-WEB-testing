import { Smartphone, TabletSmartphone, Watch, Code2, TrendingUp, Settings2, Users, BadgeCheck, Kanban, HeartHandshake, ClipboardList, Palette, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, WhyNeedProps, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "Android App",
  titleBottom: "Development",
  description: "We build native Android experiences with the Android SDK, Kotlin, Jetpack Compose, and Material Design —\r\n                polished UI, solid architecture, and apps that scale across phones, tablets, and wearables.",
  heroImage: "/images/stock/stock-756ae29735.jpg",
  heroImageAlt: "Android app development",
  topBadge: { icon: null as any, title: "Kotlin & Compose", subtitle: "Native Android", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3B+ Devices", subtitle: "Android ecosystem", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Full-spectrum Android delivery — from native apps and tablets to Wear OS, ASO, and long-term maintenance." };
export const processHeading: ServicePageSectionProps = { headingGray: "Development", headingWhite: "Process", subtitle: "A clear six-step path from discovery to Play Store and beyond — aligned with how great Android products ship." };
export const techHeading: ServicePageSectionProps = { headingGray: "Tech", headingWhite: "Stack", subtitle: "The languages, tools, and libraries we use to ship reliable Android products." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Android App?", description: "Let&apos;s plan your Kotlin architecture, UI, and Play Store strategy — book a free session with our Android team." };

export const services: ServiceOffering[] = [{
    icon: Smartphone,
    title: "Android Phone Apps",
    description: "Native Android apps with Kotlin and Jetpack Compose — fast, fluid, and tuned for every screen size.",
    features: ["Kotlin & Jetpack Compose", "Material Design 3", "Google Play ready"],
  },
  {
    icon: TabletSmartphone,
    title: "Android Tablet Apps",
    description: "Tablet-optimized adaptive layouts with responsive grids, multi-pane navigation, and polished large-screen UX.",
    features: ["Adaptive layouts", "Multi-window support", "Density-aware UI"],
  },
  {
    icon: Watch,
    title: "Android Wear Apps",
    description: "Wear OS smartwatch apps with complications, tiles, and seamless pairing with your phone experience.",
    features: ["Wear OS", "Complications & tiles", "Health integrations"],
  },
  {
    icon: Code2,
    title: "Kotlin Development",
    description: "Modern Kotlin with coroutines, Flow, and Jetpack — clean architecture and maintainable codebases.",
    features: ["Coroutines & Flow", "Jetpack libraries", "Clean architecture"],
  },
  {
    icon: TrendingUp,
    title: "Play Store Optimization",
    description: "ASO for Google Play — keyword strategy, listing copy, screenshots, and conversion-focused store assets.",
    features: ["ASO & keywords", "Screenshots & assets", "Conversion tuning"],
  },
  {
    icon: Settings2,
    title: "Android App Maintenance",
    description: "Ongoing updates, bug fixes, dependency refreshes, and OS compatibility across the Android ecosystem.",
    features: ["Security patches", "OS compatibility", "Performance tuning"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirement Analysis",
    description: "Discovery workshops, user stories, technical constraints, and a clear roadmap aligned with Play policies.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Material Design 3 patterns, wireframes, prototypes, and pixel-perfect screens for phones, tablets, and wearables.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Sprint-based Kotlin development with Jetpack Compose, modular architecture, and CI pipelines for reliable builds.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description: "Unit, integration, and UI tests across emulators and devices — performance, accessibility, and release readiness.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Play Store Submission",
    description: "Signed bundles, store listings, staged rollouts, and compliance checks for a smooth Google Play launch.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance & Support",
    description: "Monitoring, crash analytics, OS updates, feature iterations, and long-term partnership after go-live.",
    icon: LifeBuoy,
  },];

export const techCategories: TechCategory[] = [{ label: "Languages", items: [
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "XML", logo: `${DEVICON}/xml/xml-original.svg` }
    ] },
  { label: "IDE & Tools", items: [
      { name: "Android Studio", logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: "Gradle", logo: `${DEVICON}/gradle/gradle-original.svg` },
      { name: "ADB", logo: `${DEVICON}/adb/adb-original.svg` },
      { name: "ProGuard", logo: `${DEVICON}/proguard/proguard-original.svg` }
    ] },
  { label: "Frameworks", items: [
      { name: "Jetpack Compose", logo: `${DEVICON}/jetpackcompose/jetpackcompose-original.svg` },
      { name: "Room", logo: `${DEVICON}/room/room-original.svg` },
      { name: "Retrofit", logo: `${DEVICON}/retrofit/retrofit-original.svg` },
      { name: "Dagger/Hilt", logo: `${DEVICON}/daggerhilt/daggerhilt-original.svg` },
      { name: "Navigation", logo: `${DEVICON}/navigation/navigation-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST APIs", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }
    ] },
  { label: "Testing", items: [
      { name: "JUnit", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Espresso", logo: `${DEVICON}/espresso/espresso-original.svg` },
      { name: "Mockito", logo: `${DEVICON}/mockito/mockito-original.svg` },
      { name: "Firebase Test Lab", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },];

export const whyNeedProps: WhyNeedProps = {
  heading: "Android Apps Can Be",
  headingHighlight: "Game-Changing",
  subtitle: "Our industry-focused Android development services help your business reach 3 billion+ devices and unlock access to varied benefits.",
  image: "/images/stock/stock-97571648b3.jpg",
  imageAlt: "Android app development benefits",
  items: [
    {
      title: "Massive Market Reach",
      description: "Android dominates with 72% global market share. A native Android app puts your brand in front of billions of users across phones, tablets, wearables, and TVs — maximizing your addressable audience.",
    },
    {
      title: "Higher Conversion Rates",
      description: "Push notifications, deep links, and personalized experiences drive 3x higher conversion rates compared to mobile web. Android apps keep users engaged and coming back.",
    },
    {
      title: "Revenue Through Google Play",
      description: "Monetize via in-app purchases, subscriptions, or ad placements. Google Play's flexible billing system and global payment support help you generate consistent revenue streams.",
    },
    {
      title: "Offline-First Capabilities",
      description: "Native Android apps work seamlessly without internet — caching data locally and syncing when connectivity returns. Critical for users in emerging markets and field operations.",
    },
    {
      title: "Hardware Integration",
      description: "Access device cameras, GPS, biometrics, NFC, and Bluetooth directly. Build powerful features like barcode scanning, contactless payments, and location-based services that web apps can't match.",
    },
    {
      title: "Brand Presence & Loyalty",
      description: "A dedicated app icon on the home screen keeps your brand top-of-mind. Combined with push notifications and widgets, you build a direct, always-on channel with your customers.",
    },
  ],
};

export const whyChoose: WhyChooseItem[] = [{
    icon: Users,
    title: "Expert Android Engineers",
    description: "Specialists in Kotlin, Jetpack, and Play Store delivery — from greenfield apps to complex legacy migrations.",
  },
  {
    icon: BadgeCheck,
    title: "98%+ Play Store Approval",
    description: "Rigorous pre-submission review so your listing passes policy checks and reaches users without delays.",
  },
  {
    icon: Kanban,
    title: "Agile Methodology",
    description: "Transparent sprints, demos, and backlog grooming so you always know what ships next.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "SLA-backed maintenance, monitoring, and feature evolution long after launch day.",
  },];
