import { FlaskConical, Eye, BarChart3, Users, MousePointerClick, Target, ClipboardList, Layout, Code2, ShieldCheck, Palette, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ui-ux-design",
  backLabel: "Back to UI/UX Design",
  titleTop: "Design",
  titleBottom: "Testing",
  description: "Validate every design decision with A/B testing, usability studies, heatmap analysis, and accessibility audits — so your product is built on evidence, not assumptions.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Design Testing & Analytics",
  topBadge: { icon: null as any, title: "A/B Testing", subtitle: "Data-driven", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "40% Better", subtitle: "Conversion lift", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "Designs Delivered" },
  { value: 40, suffix: "%", label: "Engagement Lift" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 60, suffix: "+", label: "Design Experts" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Design Testing", headingWhite: "Services", subtitle: "A/B testing, usability studies, heatmap analysis, and accessibility audits for evidence-based design." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Design Testing", headingWhite: "Process", subtitle: "From hypothesis to validated improvements — a data-driven testing workflow." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies &", headingWhite: "Tools", subtitle: "Industry-standard testing, analytics, and research tools for rigorous design validation." };
export const ctaProps: CTAProps = { headingTop: "Ready to Validate Your", headingBottom: "Design Decisions?", description: "A/B testing, usability studies, and data-driven insights to build products users love." };

export const services: ServiceOffering[] = [{ icon: FlaskConical, title: "A/B Testing", description: "Controlled experiments comparing design variations to identify which version drives better conversion, engagement, and user satisfaction.", features: ["Controlled experiments", "Statistical significance", "Conversion lift"] },
  { icon: Eye, title: "Usability Testing", description: "Moderated and unmoderated task-based testing sessions that reveal how real users interact with your interface and where they struggle.", features: ["Task-based", "Think-aloud", "Real users"] },
  { icon: BarChart3, title: "Heatmap & Analytics Analysis", description: "Click maps, scroll maps, and session recordings to understand user behavior patterns, attention areas, and drop-off points.", features: ["Click maps", "Scroll depth", "Session replay"] },
  { icon: Users, title: "User Interviews & Surveys", description: "Qualitative research through structured interviews, contextual inquiry, and survey design to understand user needs and pain points.", features: ["Interviews", "Surveys", "Contextual inquiry"] },
  { icon: MousePointerClick, title: "Accessibility Testing", description: "WCAG compliance audits, screen reader testing, keyboard navigation checks, and color contrast analysis for inclusive design.", features: ["WCAG audit", "Screen readers", "Color contrast"] },
  { icon: Target, title: "Performance Benchmarking", description: "Design KPI tracking — task completion rates, error rates, time-on-task, System Usability Scale (SUS), and Net Promoter Score.", features: ["Task completion", "SUS scoring", "NPS tracking"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define Objectives", description: "Establish clear testing hypotheses, success metrics, and target user segments for meaningful results.", icon: ClipboardList },
  { step: "02", title: "Test Plan Creation", description: "Design test scenarios, recruit participants, configure tools, and create task scripts for consistent execution.", icon: Layout },
  { step: "03", title: "Test Execution", description: "Run usability sessions, deploy A/B tests, collect analytics data, and record user interactions.", icon: Code2 },
  { step: "04", title: "Data Analysis", description: "Quantitative and qualitative analysis — statistical significance, theme identification, and pattern recognition.", icon: ShieldCheck },
  { step: "05", title: "Insight Synthesis", description: "Transform raw data into actionable design recommendations prioritized by impact and effort.", icon: Palette },
  { step: "06", title: "Iterate & Validate", description: "Implement design changes, re-test, and measure improvement against baseline metrics.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Usability Testing", items: [
      { name: "UserTesting", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Maze", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lookback", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Optimal Workshop", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Lyssna", logo: `${DEVICON}/lyssna/lyssna-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Hotjar", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "FullStory", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Mixpanel", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Amplitude", logo: `${DEVICON}/javascript/javascript-original.svg` }
    ] },
  { label: "A/B Testing", items: [
      { name: "Optimizely", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "VWO", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Google Optimize", logo: `${DEVICON}/google/google-original.svg` },
      { name: "LaunchDarkly", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Split.io", logo: `${DEVICON}/splitio/splitio-original.svg` }
    ] },
  { label: "Accessibility", items: [
      { name: "Axe", logo: `${DEVICON}/axe/axe-original.svg` },
      { name: "WAVE", logo: `${DEVICON}/wave/wave-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "NVDA", logo: `${DEVICON}/nvda/nvda-original.svg` },
      { name: "VoiceOver", logo: `${DEVICON}/voiceover/voiceover-original.svg` }
    ] },
  { label: "Research", items: [
      { name: "Dovetail", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Miro", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "FigJam", logo: `${DEVICON}/figjam/figjam-original.svg` },
      { name: "Notion", logo: `${DEVICON}/notion/notion-original.svg` },
      { name: "Typeform", logo: `${DEVICON}/typeform/typeform-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Research Expertise", description: "UX researchers with backgrounds in cognitive psychology, human factors, and design research methodology." },
  { icon: TrendingUp, title: "Data-Driven Outcomes", description: "Every design recommendation backed by quantitative evidence and qualitative user insights." },
  { icon: Zap, title: "Fast Turnaround", description: "Rapid testing cycles with actionable results — from hypothesis to design recommendation in days, not weeks." },
  { icon: HeartHandshake, title: "Actionable Reports", description: "Clear, prioritized recommendations with mockups and implementation guidance — not just problem reports." },];
