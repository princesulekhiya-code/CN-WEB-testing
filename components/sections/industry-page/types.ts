import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineStep {
  phase: string;
  detail: string;
}

export interface Project {
  id: string;
  tag: string;
  tagColor: string;
  company: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  duration: string;
  metrics: Metric[];
  timeline: TimelineStep[];
  accentColor: string;
}

export interface IndustryHeroProps {
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
  accentColor?: string;
}

export interface IntroHighlight {
  value: string;
  label: string;
}

export interface IndustryIntroProps {
  heading: string;
  descriptionLeft: string;
  descriptionRight: string;
  highlights: IntroHighlight[];
  accentColor?: string;
}

export interface IndustryCTAProps {
  headingTop: string;
  headingBottom: string;
  description: string;
  primaryLink?: string;
  primaryLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  accentColor?: string;
}

export interface IndustryListItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  highlights: string[];
}
