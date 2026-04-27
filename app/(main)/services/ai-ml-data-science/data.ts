import { BarChart3, Bot, Brain, Building2, Clock, Cpu, CreditCard, Database, Eye, Factory, Gamepad2, GraduationCap, HeartHandshake, Layers, Rocket, Settings, ShoppingCart, Stethoscope, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "AI, ML &",
  titleBottom: "Data Science",
  description: "Convert raw data into sharp insight and automated decisions. From predictive analytics through generative AI, we deliver machine learning systems that are production-ready and anchored in measurable business value.",
  heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop&q=80",
  heroImageAlt: "AI and machine learning solutions",
  topBadge: { icon: null as any, title: "Deep Learning", subtitle: "Custom models", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "99% Accuracy", subtitle: "Production models", colorClass: "bg-emerald-500/10" },
  stats: [],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "What We", headingWhite: "Deliver", subtitle: "Full-spectrum offerings shaped precisely around your operational and strategic priorities." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Development", headingWhite: "Process", subtitle: "A field-proven methodology that upholds quality, transparency, and predictable delivery." };
export const techHeading: ServicePageSectionProps = { headingGray: "Engineered with", headingWhite: "Leading Tools", subtitle: "Best-in-class platforms and frameworks underpinning every build we release." };
export const ctaProps: CTAProps = { headingTop: "Ready to Activate", headingBottom: "AI at Full Strength?", description: "Partner with us to apply AI and data science toward sharper decisions, streamlined automation, and intelligent products engineered to scale with demand." };

export const services: ServiceOffering[] = [
  { icon: Brain, title: "Machine Learning Solutions", description: "Bespoke machine learning for prediction, classification, clustering, and recommendations—trained on your data and engineered for reliable, large-scale deployment.", features: ["Custom ML models", "Model optimization", "Production deployment"], href: "/services/ai-ml-data-science/machine-learning" , logos: ["tensorflow/tensorflow-original.svg", "pytorch/pytorch-original.svg", "scikitlearn/scikitlearn-original.svg"], accent: "#FF6F00"},
  { icon: Bot, title: "Generative AI & LLMs", description: "Large language model integration, fine-tuning, retrieval-augmented generation, and AI-assisted content systems that intelligently automate sophisticated workflows.", features: ["LLM fine-tuning", "RAG pipelines", "AI assistants"], href: "/services/ai-ml-data-science/generative-ai" , logos: ["openai/openai-original.svg", "python/python-original.svg", "nodejs/nodejs-original.svg"], accent: "#10A37F"},
  { icon: BarChart3, title: "Predictive Analytics", description: "Forecasting for sales, demand, churn, and risk—transforming historical signals into forward-looking intelligence you can act on.", features: ["Demand forecasting", "Churn prediction", "Risk modeling"], href: "/services/ai-ml-data-science/predictive-analytics" , logos: ["python/python-original.svg", "r/r-original.svg", "postgresql/postgresql-original.svg"], accent: "#3776AB"},
  { icon: Database, title: "Data Engineering & Pipelines", description: "ETL, lakes, warehouses, and real-time streaming architectures that anchor your AI initiatives and analytics roadmap.", features: ["ETL pipelines", "Data lakes", "Real-time streaming"], href: "/services/ai-ml-data-science/data-engineering" , logos: ["apachespark/apachespark-original.svg", "apachekafka/apachekafka-original.svg", "python/python-original.svg"], accent: "#E25A1C"},
  { icon: Eye, title: "Computer Vision", description: "Image recognition, object detection, OCR, video analytics, and visual inspection tailored to manufacturing, healthcare, and retail environments.", features: ["Object detection", "OCR solutions", "Visual inspection"], href: "/services/ai-ml-data-science/computer-vision" , logos: ["opencv/opencv-original.svg", "tensorflow/tensorflow-original.svg", "python/python-original.svg"], accent: "#5C3EE8"},
  { icon: Layers, title: "NLP & Conversational AI", description: "Conversational agents, sentiment analysis, text classification, document intelligence, and voice experiences built on sophisticated natural language models.", features: ["Chatbots & voice", "Sentiment analysis", "Document AI"], href: "/services/ai-ml-data-science/nlp-conversational-ai" , logos: ["python/python-original.svg", "pytorch/pytorch-original.svg", "nodejs/nodejs-original.svg"], accent: "#4EB3E8"},
];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Data Assessment", description: "We assess data quality and coverage, then pinpoint high-impact AI opportunities that map cleanly to your strategic goals.", icon: Database },
  { step: "02", title: "Data Engineering", description: "We construct dependable pipelines to cleanse, transform, enrich, and stage data for modeling and downstream analytics.", icon: Settings },
  { step: "03", title: "Model Development", description: "We train, validate, and refine models through disciplined evaluation, hyperparameter optimization, and cross-validation.", icon: Brain },
  { step: "04", title: "Integration & Deployment", description: "We ship models as APIs, embed them in products, craft interfaces where needed, and stand up resilient inference infrastructure.", icon: Rocket },
  { step: "05", title: "Monitoring & MLOps", description: "Drift monitoring, performance telemetry, experimentation, and automated retraining keep production models dependable over time.", icon: Eye },
  { step: "06", title: "Scale & Optimize", description: "We scale serving capacity, tune economics, broaden use cases, and nurture an organization-wide, data-informed operating rhythm.", icon: TrendingUp },];

export const techCategories: TechCategory[] = [];

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Doctorate-Caliber AI Talent", description: "Data scientists and machine learning engineers fluent in frontier research and the rigor required to ship models that survive real traffic." },
  { icon: Wrench, title: "Production-First Engineering", description: "We architect for live systems from the outset—observable, elastic, and operable—rather than stopping at exploratory notebooks." },
  { icon: TrendingUp, title: "Outcomes-Led AI", description: "Each initiative maps to quantifiable KPIs: revenue lift, cost takeout, operational throughput, or customer experience gains." },
  { icon: HeartHandshake, title: "Full-Lifecycle Accountability", description: "From data strategy through deployment and continuous MLOps, we carry the thread so outcomes stay cohesive—not fragmented across vendors." },];
