import { Smartphone, TabletSmartphone, Layers, WifiOff, Bell, LineChart, Compass, PenTool, Code2, Plug, Bug, Store, Apple, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/saas-development",
  backLabel: "Back to SaaS Development",
  titleTop: "SaaS Mobile",
  titleBottom: "Solutions",
  description: "Both native and hybrid SaaS mobile app solutions leveraging smartphone users for maximum reach and engagement.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "SaaS Mobile Solutions",
  topBadge: { icon: null as any, title: "Mobile SaaS", subtitle: "iOS & Android", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Cloud-Native", subtitle: "Always synced", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 80, suffix: "+", label: "SaaS Products" },
  { value: 99, suffix: "%", label: "Platform Uptime" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Service", headingWhite: "Offerings", subtitle: "Six focused capabilities covering strategy, build, and operations." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Process", subtitle: "Six phases on an alternating vertical timeline." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Representative tools by category." };
export const ctaProps: CTAProps = { headingTop: "Ready to Launch Your", headingBottom: "SaaS Product?", description: "Don&apos;t let your idea remain just an idea. Partner with us to transform it into a revenue-generating SaaS reality." };

export const services: ServiceOffering[] = [{ icon: Apple, title: "iOS SaaS App", description: "Native Swift experiences with App Store readiness, subscriptions, and platform conventions.", features: ["SwiftUI/UIKit", "In-app purchases", "Push & background"] },
  { icon: Smartphone, title: "Android SaaS App", description: "Material-aligned Android builds with resilient networking and Play distribution.", features: ["Jetpack Compose", "Play Billing", "Foreground services"] },
  { icon: TabletSmartphone, title: "Cross-Platform SaaS App", description: "One codebase for iOS and Android when speed-to-market and parity matter most.", features: ["Shared UI", "OTA updates", "Plugin ecosystem"] },
  { icon: WifiOff, title: "Offline-First Architecture", description: "Local persistence, sync strategies, and conflict resolution for unreliable networks.", features: ["Local DB", "Delta sync", "Queue & retry"] },
  { icon: Bell, title: "Push Notification System", description: "Transactional and marketing pushes with segmentation, deep links, and analytics.", features: ["FCM/APNs", "Deep linking", "Preference center"] },
  { icon: LineChart, title: "Mobile Analytics", description: "Funnels, cohorts, and crash insights wired to your product and growth teams.", features: ["Event taxonomy", "Crash reporting", "Release health"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Platform Strategy", description: "Native vs cross-platform, store policies, and roadmap aligned to your SaaS KPIs.", icon: Compass },
  { step: "02", title: "App Design", description: "Mobile-first UX, navigation patterns, and accessibility for small screens.", icon: PenTool },
  { step: "03", title: "Development", description: "Feature sprints with CI builds, feature flags, and staged rollouts.", icon: Code2 },
  { step: "04", title: "API Integration", description: "Secure auth, caching, and resilient calls to your SaaS backend and third parties.", icon: Plug },
  { step: "05", title: "Testing", description: "Device labs, automation, and beta programs before wide release.", icon: Bug },
  { step: "06", title: "Store Submission", description: "Packaging, screenshots, review responses, and post-launch monitoring.", icon: Store },];

export const techCategories: TechCategory[] = [{ label: "iOS", items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "SwiftUI", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Core Data", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "StoreKit", logo: `${DEVICON}/storekit/storekit-original.svg` },
      { name: "CloudKit", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },
  { label: "Android", items: [
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Jetpack Compose", logo: `${DEVICON}/jetpackcompose/jetpackcompose-original.svg` },
      { name: "Room", logo: `${DEVICON}/room/room-original.svg` },
      { name: "WorkManager", logo: `${DEVICON}/workmanager/workmanager-original.svg` },
      { name: "Material 3", logo: `${DEVICON}/material3/material3-original.svg` }
    ] },
  { label: "Cross-Platform", items: [
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Ionic", logo: `${DEVICON}/ionic/ionic-original.svg` },
      { name: "Capacitor", logo: `${DEVICON}/capacitor/capacitor-original.svg` },
      { name: "Expo", logo: `${DEVICON}/react/react-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` },
      { name: "AWS Amplify", logo: `${DEVICON}/awsamplify/awsamplify-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Firebase Analytics", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Sentry", logo: `${DEVICON}/sentry/sentry-original.svg` },
      { name: "Crashlytics", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Quality Solutions", description: "Advanced features and functionalities that improve overall business operations and efficiency." },
  { icon: TrendingUp, title: "CI/CD Approach", description: "Agile SaaS development process with CI/CD and DevOps — release updates every 2-3 weeks." },
  { icon: Zap, title: "Data Security", description: "Standard practices to keep data secure with maintained security features at every stage." },
  { icon: HeartHandshake, title: "Geo-Specific Hosting", description: "Geo-specific hosting in deployment and maintenance ensuring the app stays responsive across markets." },];
