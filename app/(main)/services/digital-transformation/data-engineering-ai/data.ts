import {
  Workflow,
  Brain,
  Database,
  LineChart,
  Bot,
  BarChart3,
  ClipboardList,
  PenTool,
  Rocket,
  Gauge,
  Sparkles,
  Layers,
  Activity,
  Award,
} from "lucide-react";
import type {
  ServiceOffering,
  ProcessStep,
  TechCategory,
  WhyChooseItem,
  ServicePageHeroProps,
  ServicePageSectionProps,
  CTAProps,
} from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/digital-transformation",
  backLabel: "Back to Digital Transformation",
  titleTop: "Data Engineering",
  titleBottom: "& AI",
  description:
    "Real-time decision-making using AI-powered data architecture to accelerate data modernization and product customization.",
  heroImage: "/images/stock/stock-b7269deaf9.jpg",
  heroImageAlt: "Data Engineering & AI",
  topBadge: {
    icon: null as any,
    title: "AI Pipeline",
    subtitle: "Data engineering",
    colorClass: "bg-[#4EB3E8]/10",
  },
  bottomBadge: {
    icon: null as any,
    title: "ML Ready",
    subtitle: "Production AI",
    colorClass: "bg-emerald-500/10",
  },
  stats: [
    { value: 120, suffix: "+", label: "Transformations" },
    { value: 45, suffix: "%", label: "Efficiency Gain" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 60, suffix: "+", label: "Enterprise Clients" },
  ],
};

export const servicesHeading: ServicePageSectionProps = {
  headingGray: "Data Engineering & AI",
  headingWhite: "Services",
  subtitle:
    "Pipelines, lakehouses, ML, and BI — engineered for reliability, governance, and measurable business outcomes.",
};

export const processHeading: ServicePageSectionProps = {
  headingGray: "Our Data Engineering & AI",
  headingWhite: "Process",
  subtitle:
    "From assessment to production ML — a disciplined path that keeps data trustworthy and models accountable.",
};

export const techHeading: ServicePageSectionProps = {
  headingGray: "Technologies We",
  headingWhite: "Use",
  subtitle:
    "Modern data platforms, ML tooling, orchestration, visualization, and MLOps for end-to-end delivery.",
};

export const ctaProps: CTAProps = {
  headingTop: "Ready to Scale Your",
  headingBottom: "Data & AI?",
  description:
    "Build trustworthy pipelines and production ML with a partner focused on outcomes, not slide decks.",
};

export const services: ServiceOffering[] = [
  {
    icon: Workflow,
    title: "Data Pipeline Design",
    description:
      "Batch and streaming pipelines with idempotent stages, quality checks, and lineage for trustworthy analytics.",
    features: ["Batch & stream", "Data quality", "Lineage"],
  },
  {
    icon: Brain,
    title: "ML Model Development",
    description:
      "From experimentation to reproducible training with feature stores, evaluation, and responsible AI guardrails.",
    features: ["Experiment tracking", "Feature stores", "Evaluation"],
  },
  {
    icon: Database,
    title: "Data Lake Architecture",
    description:
      "Lakehouse patterns with open table formats, partitioning, and governance for scalable storage and compute.",
    features: ["Open formats", "Partitioning", "Governance"],
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    description: "Low-latency metrics, alerts, and dashboards on live data for operational and product decisions.",
    features: ["Streaming SQL", "Alerts", "Live dashboards"],
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Agents, copilots, and workflow automation that embed models safely into business processes.",
    features: ["Agents", "Copilots", "Workflow hooks"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Semantic layers, curated datasets, and self-serve reporting aligned to finance and operations KPIs.",
    features: ["Semantic layer", "Self-serve", "KPI alignment"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Data Assessment",
    description:
      "Inventory sources, freshness SLAs, privacy constraints, and analytics gaps to scope modernization.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Target lakehouse or warehouse topology with ingestion, transformation, and serving layers.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Pipeline Development",
    description: "Build orchestrated pipelines with tests, backfills, and environments that mirror production.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "ML Training",
    description: "Train, validate, and register models with reproducible artifacts and promotion criteria.",
    icon: Brain,
  },
  {
    step: "05",
    title: "Deployment",
    description: "Deploy batch, streaming, and model endpoints with autoscaling, IAM, and rollback paths.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Drift detection, data quality monitors, and cost-performance tuning for sustained value.",
    icon: Gauge,
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Data",
    items: [
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
      { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` },
      { name: "Delta Lake", logo: `${DEVICON}/deltalake/deltalake-original.svg` },
    ],
  },
  {
    label: "ML/AI",
    items: [
      { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: "Hugging Face", logo: `${DEVICON}/python/python-original.svg` },
      { name: "OpenAI", logo: `${DEVICON}/openai/openai-original.svg` },
    ],
  },
  {
    label: "Pipeline",
    items: [
      { name: "Apache Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` },
      { name: "Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` },
      { name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "dbt", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Fivetran", logo: `${DEVICON}/fivetran/fivetran-original.svg` },
    ],
  },
  {
    label: "Visualization",
    items: [
      { name: "Tableau", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Power BI", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Metabase", logo: `${DEVICON}/metabase/metabase-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "AWS SageMaker", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure ML", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP Vertex AI", logo: `${DEVICON}/gcpvertexai/gcpvertexai-original.svg` },
      { name: "MLflow", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Kubeflow", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Sparkles,
    title: "AI-First Approach",
    description: "Models and data products designed together — not bolted on after the warehouse ships.",
  },
  {
    icon: Layers,
    title: "Scalable Pipelines",
    description: "Patterns that grow from gigabytes to petabytes without re-architecting every quarter.",
  },
  {
    icon: Activity,
    title: "Real-time Insights",
    description:
      "Streaming and near-real-time paths for operations and product teams that cannot wait for nightly batches.",
  },
  {
    icon: Award,
    title: "Domain Expertise",
    description: "Practitioners who have shipped analytics and ML in regulated and high-scale environments.",
  },
];
