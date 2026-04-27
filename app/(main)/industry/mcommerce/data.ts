import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "mCommerce",
  subtitle: "Mobile commerce platforms with AR try-on, one-tap checkout, and QR-based payments.",
};

export const introProps: IndustryIntroProps = {
  heading: "Mobile Commerce Revolution",
  descriptionLeft: "We build mobile-first commerce apps and QR-based payment solutions that make buying and selling seamless on smartphones. Our mCommerce platforms feature AR try-on experiences, one-tap checkout, and universal QR payment systems serving millions of users and merchants.",
  descriptionRight: "From camera-integrated AR product visualization and biometric-authenticated express payments to merchant self-onboarding in under 5 minutes and offline transaction support for rural areas, we help businesses capture the mobile commerce opportunity.",
  highlights: [
      {
          "value": "2M+",
          "label": "Active users"
      },
      {
          "value": "100K+",
          "label": "Merchants"
      },
      {
          "value": "55%",
          "label": "Less abandonment"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a mCommerce",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your mcommerce needs.",
};

export const projects: Project[] = [
  {
    id: "mshop",
    tag: "Mobile Commerce",
    tagColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    company: "mShop",
    industry: "mCommerce",
    headline: "Mobile-first commerce app with AR try-on and one-tap checkout serving 2M+ users.",
    challenge: "High cart abandonment on mobile. Lack of product visualization for fashion/beauty. Complex checkout flows on small screens.",
    solution: "AR-powered virtual try-on for products. One-tap checkout with saved payment methods. AI-personalized home feed with push notifications.",
    duration: "75 days",
    accentColor: "#ec4899",
    metrics: [
      { value: 2, suffix: "M+", label: "Active users" },
      { value: 55, suffix: "%", label: "Less abandonment" },
      { value: 3, suffix: "x", label: "Conversion lift" },
    ],
    timeline: [
      { phase: "Mobile UX Design", detail: "Thumb-friendly navigation, gesture controls" },
      { phase: "AR Try-On", detail: "Camera integration, 3D product rendering" },
      { phase: "One-Tap Checkout", detail: "Saved cards, biometric auth, express pay" },
      { phase: "Personalization", detail: "AI feed, push notifications, recommendations" },
    ],
  },
  {
    id: "scanpay",
    tag: "Scan & Pay",
    tagColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    company: "ScanPay",
    industry: "mCommerce",
    headline: "QR-based mobile payment app enabling contactless commerce for 100K+ merchants.",
    challenge: "Fragmented payment ecosystem. Merchant onboarding complexity. Offline payment support in rural areas.",
    solution: "Universal QR code supporting all major wallets. 5-minute merchant self-onboarding. Offline transaction support with sync-when-connected.",
    duration: "55 days",
    accentColor: "#f43f5e",
    metrics: [
      { value: 100, suffix: "K+", label: "Merchants" },
      { value: 5, suffix: " min", label: "Onboarding time" },
      { value: 10, suffix: "M+", label: "Monthly transactions" },
    ],
    timeline: [
      { phase: "QR Infrastructure", detail: "Dynamic QR generation, universal scanner" },
      { phase: "Merchant Platform", detail: "Self-onboarding, KYC automation" },
      { phase: "Offline Mode", detail: "Transaction queuing, sync-when-connected" },
      { phase: "Analytics & Lending", detail: "Merchant analytics, credit scoring" },
    ],
  },
];
