import { MessageSquare, Users, Zap, MessageCircle, HelpCircle, Palette, Globe, BarChart3, Mic, Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Settings, Layers } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "Chatbot",
  titleBottom: "Consulting",
  description: "From requirements to production — structured delivery for conversational AI.",
  heroImage: "/images/stock/stock-c0082bf1e9.jpg",
  heroImageAlt: "Chatbot & Conversational AI",
  topBadge: { icon: null as any, title: "AI Chatbots", subtitle: "NLP powered", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "24/7 Support", subtitle: "Automated CX", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Engagements" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Our", headingWhite: "Services", subtitle: "From requirements to production — structured delivery for conversational AI." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Chatbot Development", headingWhite: "Process", subtitle: "From requirements to production — structured delivery for conversational AI." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "End-to-end chatbot solutions from conversation design to deployment and optimization." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: MessageSquare, title: "AI-Powered Chatbot Development", description: "Intelligent conversational agents powered by NLP and machine learning that understand context and intent.", features: ["NLP-powered", "Context awareness", "Multi-turn dialogs"] },
  { icon: HelpCircle, title: "Customer Support Automation", description: "24/7 automated support bots that resolve queries, reduce ticket volume, and improve customer satisfaction scores.", features: ["24/7 availability", "Ticket reduction", "Smart routing"] },
  { icon: Palette, title: "Conversation Design & UX", description: "User-centered conversation flows, personality design, and dialog optimization for natural interactions.", features: ["Dialog design", "Personality crafting", "Flow optimization"] },
  { icon: Globe, title: "Multi-Channel Bot Deployment", description: "Deploy bots across web, mobile, WhatsApp, Slack, Teams, and social platforms with consistent experiences.", features: ["Omnichannel", "Platform APIs", "Unified dashboard"] },
  { icon: BarChart3, title: "Chatbot Analytics & Optimization", description: "Conversation analytics, intent tracking, and continuous improvement to maximize resolution rates.", features: ["Intent analytics", "Drop-off analysis", "Continuous tuning"] },
  { icon: Mic, title: "Voice Bot & IVR Solutions", description: "Voice-enabled assistants and intelligent IVR systems for phone support with natural language understanding.", features: ["Speech recognition", "Voice synthesis", "IVR modernization"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Requirements Analysis", description: "Understanding your support workflows, user intents, and integration requirements for the chatbot.", icon: ClipboardList },
  { step: "02", title: "Conversation Design", description: "Mapping dialog flows, defining intents and entities, and designing the bot personality and tone.", icon: Palette },
  { step: "03", title: "Bot Development", description: "Building the chatbot with NLP models, backend integrations, and fallback handling logic.", icon: Layers },
  { step: "04", title: "NLP Training", description: "Training language models with real conversation data, fine-tuning intent recognition and entity extraction.", icon: MessageSquare },
  { step: "05", title: "Testing & QA", description: "End-to-end testing across channels, edge case handling, and user acceptance testing.", icon: ShieldCheck },
  { step: "06", title: "Deployment & Monitoring", description: "Production deployment, conversation monitoring, and iterative improvement based on real interactions.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Bot Frameworks", items: [
      { name: "Dialogflow", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Rasa", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Microsoft Bot Framework", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Amazon Lex", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }
    ] },
  { label: "AI/NLP", items: [
      { name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` },
      { name: "LangChain", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Hugging Face", logo: `${DEVICON}/python/python-original.svg` },
      { name: "spaCy", logo: `${DEVICON}/python/python-original.svg` },
      { name: "NLTK", logo: `${DEVICON}/python/python-original.svg` }
    ] },
  { label: "Channels", items: [
      { name: "WhatsApp API", logo: `${DEVICON}/whatsappapi/whatsappapi-original.svg` },
      { name: "Slack", logo: `${DEVICON}/slack/slack-original.svg` },
      { name: "Microsoft Teams", logo: `${DEVICON}/microsoftteams/microsoftteams-original.svg` },
      { name: "Facebook Messenger", logo: `${DEVICON}/facebook/facebook-original.svg` },
      { name: "Web Widget", logo: `${DEVICON}/webwidget/webwidget-original.svg` }
    ] },
  { label: "Analytics", items: [
      { name: "Dashbot", logo: `${DEVICON}/dashbot/dashbot-original.svg` },
      { name: "Botanalytics", logo: `${DEVICON}/botanalytics/botanalytics-original.svg` },
      { name: "Google Analytics", logo: `${DEVICON}/google/google-original.svg` },
      { name: "Custom Dashboards", logo: `${DEVICON}/customdashboards/customdashboards-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "NLP & AI Expertise", description: "Deep expertise in natural language processing, transformer models, and conversational AI architectures." },
  { icon: Globe, title: "Omnichannel Deployment", description: "Deploy once, run everywhere — consistent bot experiences across web, mobile, and messaging platforms." },
  { icon: Palette, title: "Conversation Design Excellence", description: "Human-centered dialog design that feels natural and resolves queries effectively." },
  { icon: HeartHandshake, title: "Measurable ROI", description: "Clear metrics on ticket deflection, resolution rates, and customer satisfaction improvements." },];
