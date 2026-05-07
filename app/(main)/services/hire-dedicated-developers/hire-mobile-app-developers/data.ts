import { Smartphone, TabletSmartphone, Layers, Code2, Rocket, Globe, ClipboardList, Settings, Palette, ShieldCheck, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire Mobile App",
  titleBottom: "Developers",
  description: "Build high-performing mobile products with skilled Android, iOS, Flutter, and React Native developers. Our engineers work as an extension of your team — ensuring scalable architecture and faster go-to-market.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "Mobile App Development",
  topBadge: { icon: null as any, title: "Mobile Devs", subtitle: "iOS & Android", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "150+ Apps", subtitle: "Shipped", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 500, suffix: "+", label: "Developers Placed" },
  { value: 80, suffix: "+", label: "Active Teams" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 30, suffix: "+", label: "Technologies" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Mobile App Developers for", headingWhite: "Hire", subtitle: "Dedicated mobile engineers across every platform — from native iOS and Android to cross-platform and progressive web apps." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire Mobile", headingWhite: "Developers", subtitle: "A streamlined process from requirement to productive sprint member — designed for speed and quality." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies Our Mobile Developers Excel", headingWhite: "In", subtitle: "Best-in-class mobile tools and frameworks across every platform and development paradigm." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Mobile Developers?", description: "Get pre-vetted iOS, Android, Flutter, and React Native developers onboarded to your team within 48 hours." };

export const services: ServiceOffering[] = [{ icon: Smartphone, title: "iOS App Developers", description: "Native Swift and SwiftUI engineers who build polished iPhone, iPad, and Apple Watch apps with App Store-ready quality.", features: ["Swift & SwiftUI", "Apple Watch", "App Store optimization"] },
  { icon: TabletSmartphone, title: "Android App Developers", description: "Kotlin and Jetpack Compose specialists delivering high-performance Android apps optimized for thousands of device configurations.", features: ["Kotlin & Jetpack", "Material Design 3", "Play Store ready"] },
  { icon: Layers, title: "Flutter Developers", description: "Cross-platform Flutter experts building beautiful apps from a single Dart codebase with native performance and custom widgets.", features: ["Single codebase", "Native performance", "Custom widgets"] },
  { icon: Code2, title: "React Native Developers", description: "React Native specialists leveraging shared logic, native modules, and hot-reload productivity for rapid cross-platform delivery.", features: ["Shared codebase", "Native modules", "Hot reload"] },
  { icon: Rocket, title: "MVP Developers", description: "Lean mobile MVP specialists who take your concept to testable product in weeks — validating ideas before full investment.", features: ["Rapid prototyping", "User validation", "Iterative launch"] },
  { icon: Globe, title: "PWA Developers", description: "Progressive Web App engineers building installable, offline-first web apps with push notifications and app-like experiences.", features: ["Offline-first", "Push notifications", "Instant loading"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define Requirements", description: "Share your app idea, target platforms, tech preferences, and team structure needs for precise developer matching.", icon: ClipboardList },
  { step: "02", title: "Review Profiles", description: "Receive curated profiles of mobile developers evaluated for technical skills, portfolio quality, and communication.", icon: Settings },
  { step: "03", title: "Interview & Select", description: "Conduct technical interviews, review code samples, and assess cultural fit before finalizing your mobile team.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Developers join your workflow within 48 hours — fully set up with tools, repos, and project context.", icon: Rocket },
  { step: "05", title: "Agile Development", description: "Integrated sprint cycles with daily standups, code reviews, and bi-weekly demos aligned with your release cadence.", icon: Code2 },
  { step: "06", title: "Scale & Optimize", description: "Add specialists, rotate skills, or transition knowledge as your mobile project evolves and scales.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{ label: "Native iOS", items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "SwiftUI", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Objective-C", logo: `${DEVICON}/objectivec/objectivec-plain.svg` },
      { name: "Xcode", logo: `${DEVICON}/xcode/xcode-original.svg` },
      { name: "TestFlight", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },
  { label: "Native Android", items: [
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Jetpack Compose", logo: `${DEVICON}/jetpackcompose/jetpackcompose-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Android Studio", logo: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` }
    ] },
  { label: "Cross-Platform", items: [
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Dart", logo: `${DEVICON}/dart/dart-original.svg` },
      { name: "React Native", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Expo", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Ionic", logo: `${DEVICON}/ionic/ionic-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST APIs", logo: `${DEVICON}/nodejs/nodejs-original.svg` }
    ] },
  { label: "DevOps & Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "CI/CD", logo: `${DEVICON}/cicd/cicd-original.svg` },
      { name: "Fastlane", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Senior Mobile Talent", description: "Pre-vetted iOS and Android engineers with 5+ years average experience and proven app portfolios." },
  { icon: TrendingUp, title: "98% App Store Approval", description: "Developers who understand platform guidelines, ensuring smooth submissions and high approval rates." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to productive sprint member in under 48 hours — no lengthy hiring cycles." },
  { icon: HeartHandshake, title: "Flexible Engagement", description: "Hourly, part-time, or full-time models with easy scaling — adjust your mobile team as project needs change." },];
