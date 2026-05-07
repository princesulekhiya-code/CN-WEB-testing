import { BarChart3, Bot, Brain, Building2, Clock, Cpu, CreditCard, Database, Eye, Factory, Gamepad2, GraduationCap, HeartHandshake, Layers, Rocket, Settings, ShoppingCart, Stethoscope, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps, WhyNeedProps,} from "@/components/sections/service-page";
import type { Project } from "@/components/sections/industry-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services",
  backLabel: "Return to Services",
  titleTop: "AI, ML &",
  titleBottom: "Data Science",
  description: "Convert raw data into sharp insight and automated decisions. From predictive analytics through generative AI, we deliver machine learning systems that are production-ready and anchored in measurable business value.",
  heroImage: "/images/stock/stock-9d713105ce.jpg",
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

export const techCategories: TechCategory[] = [
  { label: "Languages", items: [
    { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    { name: "R", logo: `${DEVICON}/r/r-original.svg` },
    { name: "Julia", logo: `${DEVICON}/julia/julia-original.svg` },
    { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
  ] },
  { label: "ML Frameworks", items: [
    { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
    { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
    { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
    { name: "Keras", logo: `${DEVICON}/keras/keras-original.svg` },
    { name: "OpenCV", logo: `${DEVICON}/opencv/opencv-original.svg` },
  ] },
  { label: "Data Tools", items: [
    { name: "Pandas", logo: `${DEVICON}/pandas/pandas-original.svg` },
    { name: "NumPy", logo: `${DEVICON}/numpy/numpy-original.svg` },
    { name: "Jupyter", logo: `${DEVICON}/jupyter/jupyter-original.svg` },
    { name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` },
  ] },
  { label: "Cloud AI", items: [
    { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Google Cloud", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
  ] },
  { label: "Databases", items: [
    { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    { name: "Neo4j", logo: `${DEVICON}/neo4j/neo4j-original.svg` },
  ] },
];


export const whyNeedProps: WhyNeedProps = {
  heading: "AI & ML Can Be",
  headingHighlight: "Revolutionary",
  subtitle: "Harness artificial intelligence to automate decisions, uncover hidden insights, and build products that learn and improve over time.",
  image: "/images/stock/stock-3639baba1c.jpg",
  imageAlt: "AI and machine learning visualization",
  items: [
    { title: "Intelligent Automation", description: "Automate repetitive cognitive tasks — document processing, customer support, quality inspection — freeing your team to focus on high-value strategic work." },
    { title: "Predictive Business Intelligence", description: "ML models forecast demand, churn, revenue, and risks before they materialize. Make proactive decisions backed by data instead of gut feeling." },
    { title: "Personalized User Experiences", description: "Recommendation engines, dynamic pricing, and adaptive content deliver uniquely tailored experiences that increase engagement and conversion rates by 30-50%." },
    { title: "Unstructured Data Insights", description: "Extract value from images, documents, audio, and video using computer vision and NLP. Unlock insights hidden in 80% of enterprise data that traditional analytics miss." },
    { title: "Operational Efficiency", description: "AI-powered process optimization reduces waste, speeds up workflows, and identifies bottlenecks across supply chains, manufacturing, and service delivery." },
    { title: "Scalable Decision Making", description: "Deploy ML models that make thousands of accurate decisions per second — credit scoring, fraud detection, content moderation — at a scale humans simply cannot match." },
  ],
};

export const whyChoose: WhyChooseItem[] = [{ icon: Users, title: "Doctorate-Caliber AI Talent", description: "Data scientists and machine learning engineers fluent in frontier research and the rigor required to ship models that survive real traffic." },
  { icon: Wrench, title: "Production-First Engineering", description: "We architect for live systems from the outset—observable, elastic, and operable—rather than stopping at exploratory notebooks." },
  { icon: TrendingUp, title: "Outcomes-Led AI", description: "Each initiative maps to quantifiable KPIs: revenue lift, cost takeout, operational throughput, or customer experience gains." },
  { icon: HeartHandshake, title: "Full-Lifecycle Accountability", description: "From data strategy through deployment and continuous MLOps, we carry the thread so outcomes stay cohesive—not fragmented across vendors." },];

export const caseStudyProjects: Project[] = [
  {
    id: "chorus-ai",
    tag: "Healthcare AI",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    company: "CHORUS",
    industry: "Healthcare / Google",
    headline: "Cross-platform healthcare app with AI-driven vitals monitoring for Google.",
    challenge: "Real-time BLE data synchronization. Healthcare-grade data security across platforms.",
    solution: "Scalable cross-platform app tracking live patient vitals via BLE with secure AI-driven monitoring.",
    duration: "120 days",
    metrics: [
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime achieved"
      },
      {
        value: 3,
        suffix: " platforms",
        label: "Deployed on"
      },
      {
        value: 0,
        suffix: " breaches",
        label: "Security incidents"
      }
    ],
    timeline: [
      {
        phase: "AI Architecture",
        detail: "ML model for vitals prediction"
      },
      {
        phase: "BLE Integration",
        detail: "Real-time device connectivity"
      },
      {
        phase: "Security Layer",
        detail: "SAST, SCA, healthcare encryption"
      },
      {
        phase: "Multi-Platform Deploy",
        detail: "Web, Android, iOS release"
      }
    ],
    accentColor: "#10b981"
  },
  {
    id: "analytics-ai",
    tag: "Predictive Analytics",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    company: "FinTech BI",
    industry: "Business Intelligence",
    headline: "Predictive analytics platform transforming reactive decisions into proactive strategy.",
    challenge: "Reliance on static reporting. Difficulty in data analysis. Inefficient resource management.",
    solution: "Analyze large volumes of historical and real-time data. Build predictive models for demand forecasting and risk detection.",
    duration: "60 days",
    metrics: [
      {
        value: 60,
        suffix: "%",
        label: "Smarter decisions"
      },
      {
        value: 35,
        suffix: "%",
        label: "Resource optimized"
      },
      {
        value: 3,
        suffix: "x",
        label: "Risk detection speed"
      }
    ],
    timeline: [
      {
        phase: "Data Infrastructure",
        detail: "Historical and real-time data pipelines"
      },
      {
        phase: "Predictive Models",
        detail: "Demand forecasting, risk detection"
      },
      {
        phase: "Dashboard Design",
        detail: "Interactive insights dashboards"
      },
      {
        phase: "Strategy Enablement",
        detail: "Proactive decision workflows"
      }
    ],
    accentColor: "#f59e0b"
  }
];
