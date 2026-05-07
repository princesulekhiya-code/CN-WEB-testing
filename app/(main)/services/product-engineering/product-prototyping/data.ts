import { Target, RefreshCcw, Lightbulb, Rocket, MousePointer, Users, Code2, Zap, ClipboardList, Palette, Award, TrendingUp, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/product-engineering",
  backLabel: "Back to Product Engineering",
  titleTop: "Product",
  titleBottom: "Prototyping",
  description: "We leverage the latest market insights and research to build software prototypes — validate, iterate, and optimize to fulfill your software requirements.",
  heroImage: "/images/stock/stock-37761d5488.jpg",
  heroImageAlt: "Product Prototyping & Wireframes",
  topBadge: { icon: null as any, title: "Rapid Proto", subtitle: "Interactive demos", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Fast Iterate", subtitle: "Test & learn", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Products Shipped" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "On-Time Delivery" },
  { value: 12, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Product Prototyping", headingWhite: "Services", subtitle: "Concept through MVP prototypes — interactive, testable, and technically grounded — so you validate ideas before committing full build capacity." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Prototyping", headingWhite: "Process", subtitle: "From concept and rapid sketching through testing, iteration, and validated handoff — built for learning velocity and build-ready clarity." };
export const techHeading: ServicePageSectionProps = { headingGray: "Prototyping", headingWhite: "Stack", subtitle: "Design and no-code tools, modern front-end stacks, user testing platforms, and collaboration backends — matched to your validation goals." };
export const ctaProps: CTAProps = { headingTop: "Ready to Prototype Your", headingBottom: "Product Idea?", description: "Turn assumptions into tested flows — and give your team the confidence to invest in what users already love." };

export const services: ServiceOffering[] = [{
    icon: Lightbulb,
    title: "Concept Prototyping",
    description:
      "We translate rough ideas into tangible concepts — sketches, storyboards, and lightweight models — so teams align on the problem space before heavy build investment.",
    features: ["Idea framing", "Concept models", "Stakeholder alignment"],
  },
  {
    icon: MousePointer,
    title: "Interactive Prototypes",
    description:
      "Clickable flows simulate real tasks and UI states, making feedback specific and actionable. Interactivity exposes navigation gaps that static mocks hide.",
    features: ["Clickable flows", "State coverage", "Feedback loops"],
  },
  {
    icon: Rocket,
    title: "MVP Prototyping",
    description:
      "We scope the smallest slice that proves value — prototype depth matched to learning goals — so you validate demand without overbuilding features nobody wants.",
    features: ["Scope discipline", "Learning goals", "Lean scope"],
  },
  {
    icon: Users,
    title: "User Testing Prototypes",
    description:
      "Sessions with target users reveal comprehension, confidence, and drop-off points. Insights feed prioritized iterations rather than endless opinion loops.",
    features: ["Moderated tests", "Task success", "Issue triage"],
  },
  {
    icon: Code2,
    title: "Technical Prototypes",
    description:
      "When risk is technical — integrations, performance, or device constraints — we build thin vertical slices to de-risk architecture and APIs early.",
    features: ["Integration spikes", "Perf checks", "API feasibility"],
  },
  {
    icon: Zap,
    title: "Design Sprint Facilitation",
    description:
      "Structured sprints compress discovery, sketching, prototyping, and testing into focused days. Teams leave with validated direction — not another backlog of guesses.",
    features: ["Facilitation", "Time-boxed", "Validated direction"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Concept Definition",
    description:
      "We clarify personas, scenarios, and success signals so prototyping answers the right questions. Definition prevents beautiful prototypes that solve the wrong problem.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Rapid Sketching",
    description:
      "Multiple directions are explored quickly — diverge before converging. Sketches keep the team focused on flow and priority, not premature visual polish.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Prototype Building",
    description:
      "Fidelity matches the decision at hand — from paper to coded spikes. We build just enough realism for credible feedback without gold-plating throwaway work.",
    icon: Code2,
  },
  {
    step: "04",
    title: "User Testing",
    description:
      "Representative users attempt realistic tasks while we capture confusion, workarounds, and delight. Sessions produce ranked issues tied to observed behavior.",
    icon: Users,
  },
  {
    step: "05",
    title: "Iteration & Refinement",
    description:
      "Findings drive rapid cycles — adjust flows, copy, and interactions — until metrics and qualitative signals improve. Iteration is disciplined, not endless churn.",
    icon: RefreshCcw,
  },
  {
    step: "06",
    title: "Validation & Handoff",
    description:
      "We summarize what was learned, what ships, and what waits — with artifacts engineering can estimate. Handoff connects validation to roadmap and backlog reality.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Prototyping", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Adobe XD", logo: `${DEVICON}/xd/xd-original.svg` },
      { name: "InVision", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Marvel", logo: `${DEVICON}/marvel/marvel-original.svg` },
      { name: "Principle", logo: `${DEVICON}/apple/apple-original.svg` }
    ] },
  { label: "Development", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Flutter", logo: `${DEVICON}/flutter/flutter-original.svg` },
      { name: "Swift", logo: `${DEVICON}/swift/swift-original.svg` },
      { name: "Kotlin", logo: `${DEVICON}/kotlin/kotlin-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "Collaboration", items: [
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Slack", logo: `${DEVICON}/slack/slack-original.svg` },
      { name: "Jira", logo: `${DEVICON}/jira/jira-original.svg` }
    ] },
  { label: "Backend", items: [
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Rapid Validation",
    description:
      "Purpose-built prototypes and test plans that compress months of debate into evidence you can act on this sprint.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Iteration",
    description:
      "Qualitative and quantitative signals guide each cycle — so improvements map to user behavior, not internal hunches.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description:
      "Lean fidelity and focused scope help you learn faster — reducing waste and getting the right MVP in front of users sooner.",
  },
  {
    icon: HeartHandshake,
    title: "User-Centered Process",
    description:
      "Users stay in the loop from sketch to validated handoff — building products people actually adopt and recommend.",
  },];
