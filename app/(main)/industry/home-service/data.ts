import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Home Service",
  subtitle: "On-demand home service platforms connecting professionals with homeowners.",
};

export const introProps: IndustryIntroProps = {
  heading: "Connecting Professionals & Homeowners",
  descriptionLeft: "We build on-demand home service platforms that intelligently match professionals with homeowners based on skills, ratings, and proximity. Our solutions include real-time scheduling, verified review systems, and subscription-based recurring service management.",
  descriptionRight: "From AI-powered matching engines and calendar integrations to escrow-based payments, automated quality checklists with photo verification, and smart cleaner rotation systems, we help home service businesses scale operations while maintaining service quality.",
  highlights: [
      {
          "value": "10K+",
          "label": "Professionals"
      },
      {
          "value": "5000+",
          "label": "Monthly bookings"
      },
      {
          "value": "4.7/5",
          "label": "Average rating"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Home Service",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your home service needs.",
};

export const projects: Project[] = [
  {
    id: "fixitpro",
    tag: "Home Service App",
    tagColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    company: "FixItPro",
    industry: "Home Service",
    headline: "On-demand home service platform connecting 10K+ professionals with homeowners.",
    challenge: "Matching right professionals to service requests. Real-time scheduling and availability. Trust and quality assurance.",
    solution: "AI-powered matching based on skills, ratings, and proximity. Real-time scheduling with calendar integration. Review system with verified service completion.",
    duration: "60 days",
    accentColor: "#14b8a6",
    metrics: [
      { value: 10, suffix: "K+", label: "Professionals" },
      { value: 4.7, suffix: "/5", label: "Avg rating" },
      { value: 15, suffix: " min", label: "Avg response time" },
    ],
    timeline: [
      { phase: "Matching Engine", detail: "Skill, rating, and proximity-based matching" },
      { phase: "Scheduling System", detail: "Real-time availability, calendar sync" },
      { phase: "Trust & Safety", detail: "Background checks, verified reviews" },
      { phase: "Payment & Support", detail: "Escrow payments, dispute resolution" },
    ],
  },
  {
    id: "cleanswift",
    tag: "Cleaning Service",
    tagColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    company: "CleanSwift",
    industry: "Home Service",
    headline: "Subscription-based cleaning service platform managing 5000+ recurring bookings monthly.",
    challenge: "Managing recurring bookings and cleaner assignments. Quality consistency across services. Last-minute cancellation handling.",
    solution: "Automated recurring scheduling with smart cleaner rotation. Post-service quality checklist with photo verification. Auto-reassignment for cancellations.",
    duration: "45 days",
    accentColor: "#06b6d4",
    metrics: [
      { value: 5000, suffix: "+", label: "Monthly bookings" },
      { value: 98, suffix: "%", label: "Service completion" },
      { value: 92, suffix: "%", label: "Retention rate" },
    ],
    timeline: [
      { phase: "Subscription Engine", detail: "Recurring plans, flexible scheduling" },
      { phase: "Cleaner Management", detail: "Smart rotation, availability tracking" },
      { phase: "Quality Assurance", detail: "Photo checklists, customer feedback loops" },
      { phase: "Auto-Reassignment", detail: "Cancellation handling, backup matching" },
    ],
  },
];
