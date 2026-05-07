import { RefreshCcw, Shield, Clock, Settings, Gauge, HardDrive, Package, ClipboardList, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/wordpress-development",
  backLabel: "Back to WordPress Development",
  titleTop: "WordPress Migration",
  titleBottom: "& Maintenance",
  description: "All key aspects of site maintenance — WordPress core updates, security improvements, and seamless platform migrations with zero downtime.",
  heroImage: "/images/stock/stock-d2cb4997ca.jpg",
  heroImageAlt: "WordPress Migration & Maintenance",
  topBadge: { icon: null as any, title: "Zero Downtime", subtitle: "Migration", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "24/7 Care", subtitle: "Proactive support", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 300, suffix: "+", label: "WP Sites Built" },
  { value: 99, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Migration & Maintenance", headingWhite: "Services", subtitle: "Platform migration, security monitoring, performance optimization, and ongoing WordPress maintenance." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Migration & Maintenance", headingWhite: "Process", subtitle: "From site audit to ongoing monitoring — a structured approach for reliable WordPress operations." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Migration tools, security platforms, and monitoring systems for reliable WordPress operations." };
export const ctaProps: CTAProps = { headingTop: "Ready for WordPress", headingBottom: "Migration & Support?", description: "Zero-downtime migrations, 24/7 security monitoring, and proactive WordPress maintenance." };

export const services: ServiceOffering[] = [{ icon: RefreshCcw, title: "Platform Migration", description: "Seamless migration from any CMS or hosting platform to WordPress with data integrity, SEO preservation, and zero downtime.", features: ["Zero downtime", "SEO preserved", "Data integrity"] },
  { icon: Settings, title: "WordPress Core Updates", description: "Safe, tested WordPress core updates with staging validation, rollback plans, and compatibility verification across plugins.", features: ["Staged updates", "Rollback plans", "Compatibility checks"] },
  { icon: Shield, title: "Security Monitoring", description: "24/7 malware scanning, firewall configuration, brute force protection, and incident response for WordPress sites.", features: ["Malware scanning", "Firewall", "Incident response"] },
  { icon: Gauge, title: "Performance Optimization", description: "Page speed audits, caching implementation, database optimization, and CDN configuration for fastest load times.", features: ["Page speed", "Caching", "CDN setup"] },
  { icon: HardDrive, title: "Backup & Recovery", description: "Automated daily backups, offsite storage, and rapid disaster recovery with tested restoration procedures.", features: ["Daily backups", "Offsite storage", "Rapid recovery"] },
  { icon: Package, title: "Plugin & Theme Updates", description: "Regular plugin and theme updates with compatibility testing, changelog review, and vulnerability assessment.", features: ["Compatibility testing", "Changelog review", "Vulnerability checks"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Site Audit", description: "Comprehensive audit of current site — plugins, performance, security posture, and content inventory.", icon: ClipboardList },
  { step: "02", title: "Migration Planning", description: "Detailed migration plan with timeline, risk assessment, rollback strategy, and stakeholder sign-off.", icon: Settings },
  { step: "03", title: "Data Migration", description: "Content, media, users, and SEO metadata migrated with validation checks at every step.", icon: Code2 },
  { step: "04", title: "Testing & Validation", description: "Full functional testing, broken link checks, 301 redirect verification, and performance benchmarking.", icon: ShieldCheck },
  { step: "05", title: "Go-Live", description: "DNS cutover, SSL configuration, CDN activation, and real-time monitoring during the transition.", icon: Rocket },
  { step: "06", title: "Ongoing Maintenance", description: "Scheduled updates, security patches, performance monitoring, and monthly health reports.", icon: Clock },];

export const techCategories: TechCategory[] = [{ label: "Migration", items: [
      { name: "All-in-One WP Migration", logo: `${DEVICON}/allinonewpmigration/allinonewpmigration-original.svg` },
      { name: "Duplicator", logo: `${DEVICON}/duplicator/duplicator-original.svg` },
      { name: "WP CLI", logo: `${DEVICON}/wpcli/wpcli-original.svg` },
      { name: "Custom Scripts", logo: `${DEVICON}/customscripts/customscripts-original.svg` },
      { name: "Database Export", logo: `${DEVICON}/databaseexport/databaseexport-original.svg` }
    ] },
  { label: "Security", items: [
      { name: "Wordfence", logo: `${DEVICON}/wordfence/wordfence-original.svg` },
      { name: "Sucuri", logo: `${DEVICON}/sucuri/sucuri-original.svg` },
      { name: "iThemes Security", logo: `${DEVICON}/ithemessecurity/ithemessecurity-original.svg` },
      { name: "SSL/TLS", logo: `${DEVICON}/ssltls/ssltls-original.svg` },
      { name: "2FA", logo: `${DEVICON}/2fa/2fa-original.svg` }
    ] },
  { label: "Performance", items: [
      { name: "WP Rocket", logo: `${DEVICON}/wprocket/wprocket-original.svg` },
      { name: "Cloudflare", logo: `${DEVICON}/cloudflare/cloudflare-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
      { name: "Varnish", logo: `${DEVICON}/varnish/varnish-original.svg` },
      { name: "Imagify", logo: `${DEVICON}/imagify/imagify-original.svg` }
    ] },
  { label: "Monitoring", items: [
      { name: "UptimeRobot", logo: `${DEVICON}/uptimerobot/uptimerobot-original.svg` },
      { name: "ManageWP", logo: `${DEVICON}/managewp/managewp-original.svg` },
      { name: "MainWP", logo: `${DEVICON}/mainwp/mainwp-original.svg` },
      { name: "New Relic", logo: `${DEVICON}/newrelic/newrelic-original.svg` },
      { name: "Google Search Console", logo: `${DEVICON}/google/google-original.svg` }
    ] },
  { label: "Hosting", items: [
      { name: "WP Engine", logo: `${DEVICON}/wpengine/wpengine-original.svg` },
      { name: "Kinsta", logo: `${DEVICON}/kinsta/kinsta-original.svg` },
      { name: "SiteGround", logo: `${DEVICON}/siteground/siteground-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "DigitalOcean", logo: `${DEVICON}/digitalocean/digitalocean-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Migration Expertise", description: "100+ successful WordPress migrations from Drupal, Joomla, Wix, Squarespace, and custom CMS platforms." },
  { icon: TrendingUp, title: "Zero Downtime Guarantee", description: "Phased migration approach with parallel running ensures your business never goes offline." },
  { icon: Zap, title: "Proactive Monitoring", description: "24/7 uptime monitoring, security scanning, and automated alerts before issues impact your users." },
  { icon: HeartHandshake, title: "Dedicated Support", description: "Monthly maintenance plans with priority response times, regular reporting, and strategic recommendations." },];
