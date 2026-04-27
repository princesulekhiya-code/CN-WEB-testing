import type {
  Project,
  IndustryHeroProps,
  IndustryIntroProps,
  IndustryCTAProps,
} from "@/components/sections/industry-page";

export const heroProps: IndustryHeroProps = {
  title: "Media & Entertainment",
  subtitle: "Streaming platforms and content delivery solutions with DRM protection and AI recommendations.",
};

export const introProps: IndustryIntroProps = {
  heading: "Streaming & Content Innovation",
  descriptionLeft: "We build OTT streaming platforms, podcast hosting solutions, and content management systems that deliver media to millions of users worldwide. Our architectures handle adaptive bitrate streaming, DRM protection, and real-time viewer analytics at scale.",
  descriptionRight: "From multi-CDN delivery strategies and Widevine/FairPlay DRM integration to AI-powered content recommendations and sponsorship marketplaces, we help media companies monetize content and engage audiences across every screen.",
  highlights: [
      {
          "value": "2M+",
          "label": "Concurrent viewers"
      },
      {
          "value": "5000+",
          "label": "Content creators"
      },
      {
          "value": "99.5%",
          "label": "Stream uptime"
      }
  ],
};

export const ctaProps: IndustryCTAProps = {
  headingTop: "Have a Media & Entertainment",
  headingBottom: "Project in Mind?",
  description: "Let\u0027s discuss how we can build the right solution for your media & entertainment needs.",
};

export const projects: Project[] = [
  {
    id: "streamvault",
    tag: "OTT Platform",
    tagColor: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
    company: "StreamVault",
    industry: "Media & Entertainment",
    headline: "OTT streaming platform with adaptive bitrate serving 2M+ concurrent viewers.",
    challenge: "Buffering issues during peak viewership. Content delivery across geographies. DRM protection for premium content.",
    solution: "ABR streaming with multi-CDN strategy. AI-driven content recommendations. Widevine/FairPlay DRM integration. Real-time viewer analytics.",
    duration: "100 days",
    accentColor: "#d946ef",
    metrics: [
      { value: 2, suffix: "M+", label: "Concurrent viewers" },
      { value: 99.5, suffix: "%", label: "Stream uptime" },
      { value: 0, suffix: " piracy", label: "DRM protected" },
    ],
    timeline: [
      { phase: "Streaming Infrastructure", detail: "ABR encoding, multi-CDN delivery" },
      { phase: "DRM & Security", detail: "Widevine, FairPlay, content encryption" },
      { phase: "Recommendation Engine", detail: "Watch history, collaborative filtering" },
      { phase: "Analytics & Scale", detail: "Real-time viewer metrics, auto-scaling" },
    ],
  },
  {
    id: "podcastpro",
    tag: "Audio Platform",
    tagColor: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    company: "PodcastPro",
    industry: "Media & Entertainment",
    headline: "Podcast hosting and analytics platform used by 5000+ creators with AI transcription.",
    challenge: "No affordable hosting with detailed analytics. Manual transcription processes. Monetization tools for independent creators.",
    solution: "Scalable audio hosting with per-episode analytics. AI-powered transcription and chapter markers. Built-in sponsorship marketplace for creators.",
    duration: "60 days",
    accentColor: "#8b5cf6",
    metrics: [
      { value: 5000, suffix: "+", label: "Creators" },
      { value: 98, suffix: "%", label: "Transcription accuracy" },
      { value: 3, suffix: "x", label: "Creator revenue" },
    ],
    timeline: [
      { phase: "Hosting Infrastructure", detail: "S3-based storage, RSS feed generation" },
      { phase: "AI Transcription", detail: "Speech-to-text, chapter detection, search" },
      { phase: "Analytics Dashboard", detail: "Downloads, retention, listener demographics" },
      { phase: "Monetization", detail: "Sponsorship marketplace, premium subscriptions" },
    ],
  },
];
