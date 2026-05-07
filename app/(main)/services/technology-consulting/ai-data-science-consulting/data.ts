import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Brain, Zap, LineChart, Cpu, MessageSquare, Eye, Target, Settings, Award, ShieldCheck, HeartHandshake, ClipboardList, Rocket, Layers, BarChart3 } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "AI & Data Science",
  titleBottom: "Consulting",
  description: "Implement advanced algorithms, predictive analytics, and intelligent automation to drive innovation and competitive\r\n                advantage.",
  heroImage: "/images/stock/stock-b7269deaf9.jpg",
  heroImageAlt: "AI & Data Science Consulting",
  topBadge: { icon: null as any, title: "AI Advisory", subtitle: "ML strategy", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "ROI Focused", subtitle: "Business impact", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 150, suffix: "+", label: "ML Models in Production" },
  { value: 85, suffix: "+", label: "Data Science Clients" },
  { value: 99, suffix: "%", label: "Uptime in Production" },
  { value: 40, suffix: "+", label: "NLP & Vision Pipelines" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "AI & Data Science", headingWhite: "Services", subtitle: "End-to-end AI solutions from strategy and model development to deployment and monitoring." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our AI", headingWhite: "Consulting Process", subtitle: "From assessment to production — structured AI delivery with measurable outcomes." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Industry-leading AI/ML frameworks, cloud platforms, and programming languages." };
export const ctaProps: CTAProps = { headingTop: "Ready to Harness the Power of", headingBottom: "Artificial Intelligence?", description: "Let us build AI solutions that drive real business outcomes — from predictive models to intelligent automation." };

export const services: ServiceOffering[] = [{
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models for classification, prediction, and recommendation that drive business outcomes from your data.",
    features: ["Custom models", "Feature engineering", "Model optimization"],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, sentiment analysis, and document processing powered by state-of-the-art NLP models.",
    features: ["Text analytics", "Sentiment analysis", "Document AI"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and video analytics solutions for manufacturing, retail, and security.",
    features: ["Object detection", "Image classification", "Video analytics"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecasting, trend analysis, and demand prediction models that help businesses anticipate and prepare for the future.",
    features: ["Time-series forecasting", "Risk scoring", "Demand prediction"],
  },
  {
    icon: Target,
    title: "AI Strategy & Roadmap",
    description: "AI readiness assessment, use case identification, and implementation planning to maximize AI investment returns.",
    features: ["Readiness assessment", "Use case mapping", "ROI projection"],
  },
  {
    icon: Settings,
    title: "MLOps & Model Deployment",
    description: "Model lifecycle management, monitoring, and production deployment ensuring reliable AI at enterprise scale.",
    features: ["CI/CD for ML", "Model monitoring", "A/B testing"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "AI Readiness Assessment",
    description: "Evaluate data maturity, infrastructure, team capabilities, and identify high-impact AI use cases.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Data collection, cleaning, feature engineering, and pipeline setup for reliable model training.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Model Development",
    description: "Algorithm selection, model architecture design, and iterative development with cross-validation.",
    icon: Brain,
  },
  {
    step: "04",
    title: "Training & Validation",
    description: "Distributed training, hyperparameter tuning, and rigorous validation against business metrics.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "Deployment & Integration",
    description: "Containerized model serving, API endpoints, and seamless integration with existing systems.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Model drift detection, performance monitoring, retraining pipelines, and continuous improvement.",
    icon: Settings,
  },];

export const techCategories: TechCategory[] = [{
    label: "ML Frameworks",
    items: [
      { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: "Keras", logo: `${DEVICON}/keras/keras-original.svg` },
      { name: "XGBoost", logo: `${DEVICON}/python/python-original.svg` },
    ],
  },
  {
    label: "NLP & LLM",
    items: [
      { name: "Hugging Face", logo: `${DEVICON}/python/python-original.svg` },
      { name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` },
      { name: "LangChain", logo: `${DEVICON}/python/python-original.svg` },
      { name: "spaCy", logo: `${DEVICON}/python/python-original.svg` },
      { name: "NLTK", logo: `${DEVICON}/python/python-original.svg` },
    ],
  },
  {
    label: "Cloud ML",
    items: [
      { name: "AWS SageMaker", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure ML", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Vertex AI", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "R", logo: `${DEVICON}/r/r-original.svg` },
      { name: "Julia", logo: `${DEVICON}/julia/julia-original.svg` },
      { name: "SQL", logo: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: "Scala", logo: `${DEVICON}/scala/scala-original.svg` },
    ],
  },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "PhD-Level AI Experts",
    description: "Data scientists and ML engineers with advanced degrees and production-scale AI experience.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Models",
    description: "Models built for production from day one — scalable, monitored, and maintainable.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical AI Practices",
    description: "Bias detection, explainability, and responsible AI frameworks baked into every project.",
  },
  {
    icon: HeartHandshake,
    title: "Measurable Business Impact",
    description: "Every AI solution tied to clear business KPIs with transparent ROI tracking.",
  },];
