import { Monitor, Layout, Paintbrush, Gauge, Accessibility, Boxes, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire Front-End",
  titleBottom: "Developers",
  description: "Scale your digital experience with front-end specialists proficient in React, Angular, Vue.js, and modern UI frameworks. Our developers deliver responsive, accessible, high-performance interfaces.",
  heroImage: "/images/stock/stock-9bc46cc9cc.jpg",
  heroImageAlt: "Frontend Web Development",
  topBadge: { icon: null as any, title: "React & Next", subtitle: "Modern frontend", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "UI Experts", subtitle: "Pixel perfect", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 500, suffix: "+", label: "Developers Placed" },
  { value: 80, suffix: "+", label: "Active Teams" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 30, suffix: "+", label: "Technologies" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Front-End Developers for", headingWhite: "Hire", subtitle: "Specialists across every modern frontend framework — from React SPAs to accessible, performance-optimized enterprise interfaces." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire Frontend", headingWhite: "Developers", subtitle: "A streamlined process to get expert frontend developers integrated with your design system and team." };
export const techHeading: ServicePageSectionProps = { headingGray: "Frontend", headingWhite: "Technologies", subtitle: "Modern frameworks, build tools, and testing libraries our frontend developers work with daily." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Frontend Developers?", description: "Get expert React, Angular, and Vue.js developers integrated with your team and design system within 48 hours." };

export const services: ServiceOffering[] = [{ icon: Monitor, title: "React Developers", description: "Expert React engineers building high-performance SPAs with hooks, context, server components, and modern state management.", features: ["React 18+", "Server components", "State management"] },
  { icon: Layout, title: "Angular Developers", description: "Angular specialists delivering enterprise-grade applications with TypeScript, RxJS, and modular architecture patterns.", features: ["TypeScript", "RxJS", "Modular architecture"] },
  { icon: Boxes, title: "Vue.js Developers", description: "Vue.js developers creating reactive, lightweight applications with Composition API, Pinia, and Nuxt.js for SSR.", features: ["Composition API", "Pinia", "Nuxt.js SSR"] },
  { icon: Paintbrush, title: "UI/UX Frontend Developers", description: "Frontend engineers who bridge design and code — implementing pixel-perfect, accessible, and animated interfaces.", features: ["Pixel-perfect", "Accessibility", "Animations"] },
  { icon: Gauge, title: "Performance Specialists", description: "Frontend performance experts optimizing Core Web Vitals, bundle sizes, lazy loading, and rendering performance.", features: ["Core Web Vitals", "Code splitting", "Lazy loading"] },
  { icon: Accessibility, title: "Accessibility Experts", description: "WCAG compliance specialists ensuring your web applications are usable by everyone — screen readers, keyboard nav, and more.", features: ["WCAG 2.1 AA", "Screen readers", "Keyboard navigation"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Define UI Requirements", description: "Share your design system, tech stack preferences, and frontend architecture needs for precise matching.", icon: ClipboardList },
  { step: "02", title: "Review Profiles", description: "Receive portfolios with live demos, code samples, and performance benchmarks from vetted frontend developers.", icon: Settings },
  { step: "03", title: "Technical Interview", description: "Evaluate coding skills, component design thinking, and framework expertise through live coding sessions.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Developers integrate with your design system, component library, and CI pipeline within 48 hours.", icon: Rocket },
  { step: "05", title: "Sprint Integration", description: "Seamless collaboration with designers and backend teams — shared standups, PRs, and design reviews.", icon: Code2 },
  { step: "06", title: "Scale & Evolve", description: "Add specialists for animations, accessibility, or performance as your frontend complexity grows.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{ label: "Frameworks", items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "Vue.js", logo: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: "Nuxt.js", logo: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
      { name: "Svelte", logo: `${DEVICON}/svelte/svelte-original.svg` }
    ] },
  { label: "Languages", items: [
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "JavaScript ES6+", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "SASS/SCSS", logo: `${DEVICON}/sassscss/sassscss-original.svg` }
    ] },
  { label: "Styling", items: [
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "Styled Components", logo: `${DEVICON}/styledcomponents/styledcomponents-original.svg` },
      { name: "CSS Modules", logo: `${DEVICON}/cssmodules/cssmodules-original.svg` },
      { name: "Material UI", logo: `${DEVICON}/materialui/materialui-original.svg` },
      { name: "Chakra UI", logo: `${DEVICON}/chakraui/chakraui-original.svg` }
    ] },
  { label: "State & Data", items: [
      { name: "Redux", logo: `${DEVICON}/redux/redux-original.svg` },
      { name: "Zustand", logo: `${DEVICON}/react/react-original.svg` },
      { name: "React Query", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Apollo GraphQL", logo: `${DEVICON}/apollographql/apollographql-original.svg` },
      { name: "SWR", logo: `${DEVICON}/swr/swr-original.svg` }
    ] },
  { label: "Testing & Tools", items: [
      { name: "Jest", logo: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Cypress", logo: `${DEVICON}/cypressio/cypressio-original.svg` },
      { name: "Playwright", logo: `${DEVICON}/playwright/playwright-original.svg` },
      { name: "Storybook", logo: `${DEVICON}/storybook/storybook-original.svg` },
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "Vite", logo: `${DEVICON}/vitejs/vitejs-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Senior Frontend Talent", description: "Pre-vetted React, Angular, and Vue.js developers with 5+ years experience and production portfolios." },
  { icon: TrendingUp, title: "Performance-First Mindset", description: "Developers who optimize for Core Web Vitals, accessibility, and SEO from the first component." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to design system integration in under 48 hours — immediate productivity." },
  { icon: HeartHandshake, title: "Design-Dev Collaboration", description: "Frontend engineers who speak design language — seamless collaboration with your UI/UX team." },];
