import { Palette, Smartphone, Monitor, Layout, Settings, Gauge, Accessibility, ClipboardList, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "Responsive Theme",
  titleBottom: "Development",
  description: "UX designers and solution architects use design thinking to develop user-friendly, responsive WordPress themes that look stunning on every device.",
  heroImage: "/images/stock/stock-37761d5488.jpg",
  heroImageAlt: "Responsive Theme Design",
  topBadge: { icon: null as any, title: "Custom Theme", subtitle: "Responsive design", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "All Devices", subtitle: "Mobile-first", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Theme Development", headingWhite: "Services", subtitle: "Custom, responsive, accessible WordPress themes — from mobile-first design to performance optimization." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Theme Development", headingWhite: "Process", subtitle: "From design research to performance-optimized, responsive WordPress themes." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "WordPress theme APIs, responsive CSS, and modern testing tools for pixel-perfect themes." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "WordPress Theme?", description: "Custom, responsive, accessible themes built for performance and brand consistency." };

export const services: ServiceOffering[] = [{ icon: Palette, title: "Custom Theme Design", description: "Bespoke WordPress themes designed from scratch with unique layouts, brand-aligned aesthetics, and conversion-focused UX patterns.", features: ["Custom layouts", "Brand-aligned", "Conversion UX"] },
  { icon: Smartphone, title: "Mobile-First Development", description: "Themes built mobile-first with touch-optimized interactions, fast loading on cellular networks, and adaptive image delivery.", features: ["Touch-optimized", "Fast mobile load", "Adaptive images"] },
  { icon: Layout, title: "Block Theme Development", description: "Full Site Editing (FSE) themes with custom block patterns, template parts, and theme.json configuration for modern WordPress.", features: ["FSE ready", "Block patterns", "theme.json"] },
  { icon: Settings, title: "Theme Customizer Options", description: "Intuitive admin panels with live preview, color pickers, typography controls, and layout options for non-technical users.", features: ["Live preview", "Color pickers", "Layout options"] },
  { icon: Gauge, title: "Theme Performance Optimization", description: "Optimized CSS delivery, lazy loading, critical path rendering, and Core Web Vitals optimization for top Lighthouse scores.", features: ["Core Web Vitals", "Lazy loading", "Critical CSS"] },
  { icon: Accessibility, title: "Theme Accessibility", description: "WCAG 2.1 AA compliant themes with semantic HTML, ARIA labels, keyboard navigation, and screen reader compatibility.", features: ["WCAG 2.1 AA", "Keyboard nav", "Screen readers"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Design Research", description: "Analyze brand identity, target audience, competitors, and design trends for informed theme direction.", icon: ClipboardList },
  { step: "02", title: "Wireframing", description: "Low-fidelity wireframes and responsive breakpoint planning for all key page templates.", icon: Layout },
  { step: "03", title: "Theme Development", description: "PHP template hierarchy, block patterns, custom CSS, and WordPress APIs for feature-rich themes.", icon: Code2 },
  { step: "04", title: "Responsive Testing", description: "Cross-device testing on real devices, browser compatibility checks, and responsive breakpoint validation.", icon: Smartphone },
  { step: "05", title: "Performance Tuning", description: "Lighthouse audits, image optimization, CSS/JS minification, and caching strategy implementation.", icon: ShieldCheck },
  { step: "06", title: "Launch & Support", description: "Production deployment, documentation, training for content editors, and ongoing theme maintenance.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "WordPress", items: [
      { name: "Theme API", logo: `${DEVICON}/themeapi/themeapi-original.svg` },
      { name: "Block Editor", logo: `${DEVICON}/blockeditor/blockeditor-original.svg` },
      { name: "FSE", logo: `${DEVICON}/fse/fse-original.svg` },
      { name: "Customizer API", logo: `${DEVICON}/customizerapi/customizerapi-original.svg` },
      { name: "Template Hierarchy", logo: `${DEVICON}/templatehierarchy/templatehierarchy-original.svg` }
    ] },
  { label: "Frontend", items: [
      { name: "HTML5", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "SASS", logo: `${DEVICON}/sass/sass-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "PHP 8+", logo: `${DEVICON}/php/php-original.svg` }
    ] },
  { label: "Responsive", items: [
      { name: "CSS Grid", logo: `${DEVICON}/cssgrid/cssgrid-original.svg` },
      { name: "Flexbox", logo: `${DEVICON}/flexbox/flexbox-original.svg` },
      { name: "Media Queries", logo: `${DEVICON}/mediaqueries/mediaqueries-original.svg` },
      { name: "Container Queries", logo: `${DEVICON}/containerqueries/containerqueries-original.svg` },
      { name: "Fluid Typography", logo: `${DEVICON}/fluidtypography/fluidtypography-original.svg` }
    ] },
  { label: "Testing", items: [
      { name: "BrowserStack", logo: `${DEVICON}/browserstack/browserstack-original.svg` },
      { name: "Lighthouse", logo: `${DEVICON}/google/google-original.svg` },
      { name: "WAVE", logo: `${DEVICON}/wave/wave-original.svg` },
      { name: "Axe", logo: `${DEVICON}/axe/axe-original.svg` },
      { name: "GTmetrix", logo: `${DEVICON}/gtmetrix/gtmetrix-original.svg` }
    ] },
  { label: "Tools", items: [
      { name: "Figma", logo: `${DEVICON}/figma/figma-original.svg` },
      { name: "VS Code", logo: `${DEVICON}/vscode/vscode-original.svg` },
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "Webpack", logo: `${DEVICON}/webpack/webpack-original.svg` },
      { name: "Vite", logo: `${DEVICON}/vitejs/vitejs-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Design Excellence", description: "Award-worthy theme designs that stand out — unique, on-brand, and built for real business outcomes." },
  { icon: TrendingUp, title: "Mobile-First Approach", description: "Every theme starts mobile-first, ensuring flawless experiences on the devices your users actually use." },
  { icon: Zap, title: "Performance Optimized", description: "Themes that score 90+ on Lighthouse — fast load times, optimized assets, and Core Web Vitals compliance." },
  { icon: HeartHandshake, title: "Brand Consistency", description: "Design systems and style guides ensure your theme maintains brand consistency as content scales." },];
