import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Social Networking",
  subtitle: "Community and social platforms with real-time messaging and content management.",
};

export const introProps: IndustryIntroProps = {
  heading: "Building Communities at Scale",
  descriptionLeft: "We create social and community platforms that support real-time messaging, content feeds, and video collaboration for millions of users. Our architectures are designed for low-latency communication, viral content handling, and end-to-end security.",
  descriptionRight: "From WebSocket-based messaging to WebRTC video conferencing, AI content moderation, and cross-platform apps (Web, Desktop, iOS, Android), we build the infrastructure that powers modern social experiences. Our platforms scale from startup to millions of concurrent users.",
  highlights: [
      {
          "value": "500K+",
          "label": "Users supported"
      },
      {
          "value": "15ms",
          "label": "Message latency"
      },
      {
          "value": "4",
          "label": "Platforms built"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Social Networking",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your social networking needs.",
};

export const projects: Project[] = [
  {
    id: "connecthub",
    tag: "Community Platform",
    tagColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    company: "ConnectHub",
    industry: "Social Networking",
    headline: "Community platform scaling to 500K users with real-time messaging and content feeds.",
    challenge:
      "Building a low-latency real-time messaging system. Content moderation at scale. Handling viral content spikes.",
    solution:
      "WebSocket-based real-time messaging with Redis pub/sub. AI content moderation pipeline. Auto-scaling infrastructure on AWS with CDN distribution.",
    duration: "75 days",
    accentColor: "#ec4899",
    metrics: [
      { value: 500, suffix: "K", label: "Active users" },
      { value: 15, suffix: "ms", label: "Message latency" },
      { value: 99.8, suffix: "%", label: "Content accuracy" },
    ],
    timeline: [
      { phase: "Core Social Engine", detail: "User profiles, connections, activity feeds" },
      { phase: "Real-Time Messaging", detail: "WebSocket infrastructure, Redis pub/sub" },
      { phase: "AI Moderation", detail: "Content filtering, toxicity detection pipeline" },
      { phase: "Scale & CDN", detail: "Auto-scaling, CDN distribution, load testing" },
    ],
  },
  {
    id: "teamspace",
    tag: "Collaboration Tool",
    tagColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    company: "TeamSpace",
    industry: "Social Networking",
    headline: "Enterprise collaboration platform with video calls, channels, and file sharing for 50K+ teams.",
    challenge:
      "Integrating video conferencing with chat. End-to-end encryption for enterprise security. Cross-platform desktop and mobile apps.",
    solution:
      "WebRTC-based video with selective forwarding unit. E2E encrypted messaging. Electron desktop app + React Native mobile apps.",
    duration: "100 days",
    accentColor: "#f43f5e",
    metrics: [
      { value: 50, suffix: "K+", label: "Teams onboarded" },
      { value: 100, suffix: "%", label: "E2E encrypted" },
      { value: 4, suffix: " platforms", label: "Web, Desktop, iOS, Android" },
    ],
    timeline: [
      { phase: "Chat Infrastructure", detail: "E2E encrypted channels, threads, reactions" },
      { phase: "Video Integration", detail: "WebRTC with SFU for group calls" },
      { phase: "File & Search", detail: "Cloud storage integration, full-text search" },
      { phase: "Cross-Platform Launch", detail: "Electron, React Native, progressive web app" },
    ],
  },
];
