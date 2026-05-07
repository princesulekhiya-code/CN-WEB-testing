import { Smartphone, Tablet, Layers, Bell, CreditCard, ScanEye, Search, Palette, Code2, Wallet, TestTube2, Upload, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ecommerce-development",
  backLabel: "Back to eCommerce Development",
  titleTop: "eCommerce",
  titleBottom: "Mobile App",
  description: "Omnichannel mobile shopping supporting anytime, on-the-go convenience — boosting sales and building brand awareness.",
  heroImage: "/images/stock/stock-be6b0ed7f1.jpg",
  heroImageAlt: "Ecommerce Mobile App",
  topBadge: { icon: null as any, title: "Mobile Store", subtitle: "iOS & Android", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "3x Conversion", subtitle: "Mobile-first", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 180, suffix: "+", label: "Stores Built" },
  { value: 35, suffix: "%", label: "Conversion Lift" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Merchants Served" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "eCommerce Mobile App", headingWhite: "Services", subtitle: "Native and cross-platform shopping apps with payments, notifications, and immersive product experiences." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "From research to app store — how we ship dependable eCommerce mobile products." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technology", headingWhite: "Stack", subtitle: "Mobile SDKs, cross-platform frameworks, backends, and payment rails for retail-grade apps." };
export const ctaProps: CTAProps = { headingTop: "Launch Your", headingBottom: "Shopping App", description: "Ship an omnichannel eCommerce mobile experience that converts on iOS, Android, and beyond." };

export const services: ServiceOffering[] = [{ icon: Smartphone, title: "iOS eCommerce App", description: "Native Swift experiences with StoreKit, push, and deep links aligned to your storefront and loyalty programs.", features: ["SwiftUI/UIKit", "StoreKit", "Push & deep links"] },
  { icon: Tablet, title: "Android eCommerce App", description: "Material Design apps with secure auth, offline-friendly browsing, and Google Play best practices.", features: ["Jetpack Compose", "Play Billing", "Material 3"] },
  { icon: Layers, title: "Cross-Platform App", description: "Shared codebase for faster iteration with native modules where performance matters most.", features: ["Code sharing", "Native bridges", "OTA updates"] },
  { icon: Bell, title: "Push Notification System", description: "Targeted campaigns, abandoned cart nudges, and transactional alerts with preference centers.", features: ["Segments", "Automation", "Opt-in UX"] },
  { icon: CreditCard, title: "Mobile Payment Integration", description: "Wallet and card flows with tokenization, SCA where required, and reconciliation hooks.", features: ["Wallets", "Tokenization", "Reconciliation"] },
  { icon: ScanEye, title: "AR Product Preview", description: "3D and AR viewers that lift confidence and returns metrics for complex or high-ticket items.", features: ["3D assets", "Room scale", "Analytics"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Market Research", description: "Competitive review, personas, and KPIs that shape feature scope and launch criteria.", icon: Search },
  { step: "02", title: "App Design", description: "Flows, components, and motion tuned for thumbs, accessibility, and conversion.", icon: Palette },
  { step: "03", title: "Development", description: "Sprint-based delivery with CI builds, feature flags, and crash reporting from day one.", icon: Code2 },
  { step: "04", title: "Payment Integration", description: "Gateway and wallet wiring with sandbox validation and reconciliation events.", icon: Wallet },
  { step: "05", title: "Testing", description: "Device labs, automation, and beta programs to harden releases.", icon: TestTube2 },
  { step: "06", title: "Store Submission", description: "Store listings, review responses, and staged rollout to production users.", icon: Upload },];

export const techCategories: TechCategory[] = [{ label: "iOS", items: [
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "SwiftUI", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "UIKit", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Core Data", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "StoreKit", logo: `${DEVICON}/storekit/storekit-original.svg` }
    ] },
  { label: "Android", items: [
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: "Jetpack Compose", logo: `${DEVICON}/jetpackcompose/jetpackcompose-original.svg` },
      { name: "Retrofit", logo: `${DEVICON}/retrofit/retrofit-original.svg` },
      { name: "Room", logo: `${DEVICON}/room/room-original.svg` },
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
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` },
      { name: "AWS Amplify", logo: `${DEVICON}/awsamplify/awsamplify-original.svg` },
      { name: "GraphQL", logo: `${DEVICON}/graphql/graphql-plain.svg` }
    ] },
  { label: "Payments", items: [
      { name: "Apple Pay", logo: `${DEVICON}/apple/apple-original.svg` },
      { name: "Google Pay", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Stripe", logo: `${DEVICON}/stripe/stripe-original.svg` },
      { name: "PayPal", logo: `${DEVICON}/paypal/paypal-original.svg` },
      { name: "Razorpay", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Agile Development", description: "Rapid development and deployment with agile methodology, advanced tools, and high-quality products within deadline." },
  { icon: TrendingUp, title: "Customer-Centric", description: "Client feedback as priority — customer-centric approach leading to quality delivery within timelines." },
  { icon: Zap, title: "NDA & Security", description: "Client data confidentiality with standard NDA policies maintaining sensitivity and secrecy of shared details." },
  { icon: HeartHandshake, title: "Flexible Approach", description: "Multiple development methodologies under a flexible approach — every project gets unique tactics and tech stack." },];
