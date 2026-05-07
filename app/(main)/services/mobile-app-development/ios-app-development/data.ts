import { Smartphone, Tablet, Watch, Code2, TrendingUp, Wrench, ClipboardList, Palette, ShieldCheck, Rocket, Settings, Award, Zap, HeartHandshake, Apple } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/mobile-app-development",
  backLabel: "Back to Mobile App Development",
  titleTop: "iOS App",
  titleBottom: "Development",
  description: "We design and build native iOS experiences for iPhone, iPad, and Apple Watch — using Swift, SwiftUI, and proven\r\n                architecture so your product feels fast, trustworthy, and unmistakably Apple.",
  heroImage: "/images/stock/stock-0967820ad3.jpg",
  heroImageAlt: "iOS app development",
  topBadge: { icon: null as any, title: "Swift & SwiftUI", subtitle: "Native iOS", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "150+ Apps", subtitle: "Shipped to App Store", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "Apps Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Avg Store Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "iOS App Development", headingWhite: "Services", subtitle: "Native Apple experiences across iPhone, iPad, and Apple Watch — from first line of Swift to App Store launch and beyond." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our iOS Development", headingWhite: "Process", subtitle: "A structured flow from discovery to long-term support — built for clarity, quality, and App Store success." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Languages, tooling, and frameworks we rely on to ship reliable iOS products end to end." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "iOS App?", description: "Partner with us for native Swift and SwiftUI development, App Store execution, and long-term product growth on Apple platforms." };

export const services: ServiceOffering[] = [{
    icon: Smartphone,
    title: "iPhone App Development",
    description: "Native iPhone apps with Swift, SwiftUI, and UIKit — polished interfaces, smooth animations, and App Store–ready quality.",
    features: ["Swift & SwiftUI", "UIKit expertise", "Human Interface Guidelines"],
  },
  {
    icon: Tablet,
    title: "iPad App Development",
    description: "Optimized tablet experiences with adaptive layouts, multitasking, and split views that feel at home on the big screen.",
    features: ["Adaptive layouts", "Split view", "Multitasking"],
  },
  {
    icon: Watch,
    title: "Apple Watch App Development",
    description: "watchOS apps for health, fitness, notifications, and complications — lightweight, glanceable, and deeply integrated.",
    features: ["watchOS", "Health & fitness", "Complications"],
  },
  {
    icon: Code2,
    title: "Swift Development",
    description: "Modern Swift and SwiftUI for performant iOS apps — structured concurrency, SwiftData where it fits, and clean architecture.",
    features: ["Swift 5+", "SwiftUI", "Structured concurrency"],
  },
  {
    icon: TrendingUp,
    title: "App Store Optimization",
    description: "ASO strategy, screenshots, descriptions, and keyword optimization so the right users discover and download your app.",
    features: ["Keyword research", "Screenshots & preview", "Metadata tuning"],
  },
  {
    icon: Wrench,
    title: "iOS App Maintenance",
    description: "Bug fixes, OS updates, performance monitoring, and feature additions — your app stays fast, stable, and compatible.",
    features: ["OS compatibility", "Performance", "Feature roadmap"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Requirement Analysis",
    description: "Discovery workshops, user stories, technical constraints, and a clear roadmap aligned with your business goals.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Wireframes, interactive prototypes, and pixel-perfect designs that follow Apple Human Interface Guidelines.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Iterative sprints with Swift and SwiftUI, code reviews, and CI pipelines for reliable, maintainable iOS code.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description: "Unit, UI, and device testing across iPhone, iPad, and Apple Watch — including TestFlight beta feedback loops.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "App Store Submission",
    description: "Build signing, App Store Connect setup, review guidelines compliance, and a smooth path to approval.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance & Support",
    description: "Monitoring, crash analytics, OS updates, performance tuning, and ongoing feature delivery after launch.",
    icon: Settings,
  },];

export const techCategories: TechCategory[] = [{ label: "Languages", items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Objective-C", logo: `${DEVICON}/objectivec/objectivec-plain.svg` },
      { name: "SwiftUI", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "UIKit", logo: `${DEVICON}/swift/swift-original.svg` }
    ] },
  { label: "IDE & Tools", items: [
      { name: "Xcode", logo: `${DEVICON}/xcode/xcode-original.svg` },
      { name: "Instruments", logo: `${DEVICON}/xcode/xcode-original.svg` },
      { name: "TestFlight", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "CocoaPods", logo: `${DEVICON}/cocoapods/cocoapods-original.svg` },
      { name: "SPM", logo: `${DEVICON}/swift/swift-original.svg` }
    ] },
  {
    label: "Frameworks",
    items: [
      { name: "Core Data", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Core ML", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "ARKit", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "MapKit", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "HealthKit", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "CloudKit", logo: `${DEVICON}/apple/apple-original.svg` }
    ],
  },
  { label: "Backend", items: [
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "REST APIs", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }
    ] },
  { label: "Testing", items: [
      { name: "XCTest", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "XCUITest", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Fastlane", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "App Store Connect", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Apple Certified Experts",
    description: "Engineers who live in the Apple ecosystem — from Swift concurrency to App Store review nuances.",
  },
  {
    icon: TrendingUp,
    title: "App Store Success Rate (98%+)",
    description: "Proven submission process and ASO practices that maximize approval odds and organic visibility.",
  },
  {
    icon: Zap,
    title: "Agile Development Process",
    description: "Transparent sprints, demos every two weeks, and backlog prioritization that keeps momentum high.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Launch Support",
    description: "SLA-backed maintenance, crash monitoring, and roadmap execution so your app evolves with iOS.",
  },];
