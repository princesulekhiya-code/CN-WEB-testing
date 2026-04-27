import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Education & eLearning",
  subtitle: "EdTech platforms with AI-driven personalized learning and live class functionality.",
};

export const introProps: IndustryIntroProps = {
  heading: "Reimagining Education with AI",
  descriptionLeft: "We build EdTech platforms that personalize learning experiences using AI, enable real-time collaboration through live classes, and make education accessible through offline-first PWA technology. Our solutions serve students, educators, and enterprise training programs.",
  descriptionRight: "From adaptive learning algorithms and WebRTC-powered live classrooms to SCORM-compliant LMS platforms with white-label capabilities, our education technology solutions are built for engagement, compliance, and scale.",
  highlights: [
      {
          "value": "10K+",
          "label": "Active learners"
      },
      {
          "value": "200+",
          "label": "Companies served"
      },
      {
          "value": "45%",
          "label": "Learning improvement"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Education & eLearning",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your education & elearning needs.",
};

export const projects: Project[] = [
  {
    id: "edtech-ai",
    tag: "AI-Driven Platform",
    tagColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    company: "LearnAI",
    industry: "Education & eLearning",
    headline: "AI-driven e-learning platform with personalized learning paths and live classes.",
    challenge: "Creating scalable AI for personalized learning. Real-time performance for live classes. Balancing gamification with academic rigor.",
    solution: "Web and mobile platform with AI-driven course recommendations. Live class functionality using WebRTC. Gamification features for engagement.",
    duration: "90 days",
    accentColor: "#6366f1",
    metrics: [
      { value: 45, suffix: "%", label: "Learner improvement" },
      { value: 3, suffix: "x", label: "Engagement increase" },
      { value: 10, suffix: "K+", label: "Active students" },
    ],
    timeline: [
      { phase: "AI Model Design", detail: "Adaptive learning algorithm, recommendation engine" },
      { phase: "Live Class Engine", detail: "WebRTC for real-time video and collaboration" },
      { phase: "Gamification", detail: "Points, badges, leaderboards" },
      { phase: "Scale & Launch", detail: "Multi-tenant deployment, analytics" },
    ],
  },
  {
    id: "skillbridge",
    tag: "LMS Platform",
    tagColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    company: "SkillBridge",
    industry: "Education & eLearning",
    headline: "Enterprise LMS serving 200+ companies with SCORM-compliant course delivery.",
    challenge: "SCORM compliance across diverse content. Multi-tenant white-label requirements. Offline learning support for remote areas.",
    solution: "SCORM 2004 compliant engine with offline-first PWA. White-label theming per organization. Advanced analytics for learning outcomes.",
    duration: "80 days",
    accentColor: "#0ea5e9",
    metrics: [
      { value: 200, suffix: "+", label: "Companies served" },
      { value: 100, suffix: "%", label: "SCORM compliant" },
      { value: 30, suffix: "%", label: "Completion rate up" },
    ],
    timeline: [
      { phase: "SCORM Engine", detail: "Content packaging, tracking, bookmarking" },
      { phase: "White-Label System", detail: "Per-org theming, branding, domain mapping" },
      { phase: "Offline PWA", detail: "Service workers, content caching, sync" },
      { phase: "Analytics Suite", detail: "Learning outcomes, engagement dashboards" },
    ],
  },
];
