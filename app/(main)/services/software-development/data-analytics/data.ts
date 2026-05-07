import { BarChart3, Database, Brain, PieChart, Workflow, RefreshCcw, ClipboardList, Settings, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/software-development",
  backLabel: "Back to Software Development",
  titleTop: "Data Analytics",
  titleBottom: "& Information",
  description: "Expert data management, modernization, and analysis services to help you gain actionable insights, build data pipelines, and formulate winning strategies with your business data.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "BI Dashboards",
  topBadge: { icon: null as any, title: "BI Dashboards", subtitle: "Real-time data", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Actionable", subtitle: "Business insights", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
  { value: 15, suffix: "+", label: "Years Experience" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Data Analytics & Information", headingWhite: "Services", subtitle: "Pipelines, warehousing, BI, predictive models, and visualization — engineered to turn your data into strategic advantage." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Data Analytics", headingWhite: "Process", subtitle: "From assessment to production — structured delivery with quality gates, governance, and continuous optimization." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Platforms and tools across warehousing, BI, streaming, ML, and cloud storage for reliable analytics at scale." };
export const ctaProps: CTAProps = { headingTop: "Ready to Unlock Your", headingBottom: "Data Potential?", description: "Transform raw data into strategic advantage — let's build data systems that drive smarter decisions and measurable business growth." };

export const services: ServiceOffering[] = [{
    icon: Workflow,
    title: "Data Pipeline Development",
    description: "Build robust ETL/ELT pipelines that ingest, transform, and deliver data from multiple sources into your data warehouse.",
    features: ["ETL/ELT", "Real-time streams", "Data validation"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Dashboards",
    description: "Interactive dashboards and automated reporting that give stakeholders real-time visibility into KPIs and business metrics.",
    features: ["Live dashboards", "KPI tracking", "Automated reports"],
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Machine learning models for demand forecasting, churn prediction, recommendation engines, and anomaly detection.",
    features: ["ML models", "Forecasting", "Anomaly detection"],
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Design and implement modern data warehouses with star/snowflake schemas, optimized for analytical workloads.",
    features: ["Star schema", "OLAP cubes", "Query optimization"],
  },
  {
    icon: RefreshCcw,
    title: "Data Modernization",
    description: "Migrate legacy data systems to modern cloud-native platforms with improved performance, security, and cost efficiency.",
    features: ["Cloud migration", "Schema evolution", "Data governance"],
  },
  {
    icon: PieChart,
    title: "Data Visualization & Storytelling",
    description: "Transform complex datasets into compelling visual narratives that drive understanding and accelerate decision-making.",
    features: ["Custom charts", "Interactive viz", "Executive reports"],
  },];

export const processSteps: ProcessStep[] = [{
    step: "01",
    title: "Data Assessment",
    description: "Audit existing data sources, quality, infrastructure, and identify gaps and opportunities for analytics improvement.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Design data architecture — warehousing strategy, pipeline topology, access patterns, and governance framework.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Pipeline Development",
    description: "Build and test data pipelines with validation, monitoring, and error handling for reliable data delivery.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Analytics & Modeling",
    description: "Develop analytical models, dashboards, and reporting systems tailored to your business questions.",
    icon: Brain,
  },
  {
    step: "05",
    title: "Testing & Validation",
    description: "Data quality checks, model validation, performance testing, and stakeholder review of analytics outputs.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deployment & Optimization",
    description: "Production deployment with monitoring, alerting, documentation, and continuous optimization of data systems.",
    icon: Rocket,
  },];

export const techCategories: TechCategory[] = [{ label: "Data Platforms", items: [
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
      { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` },
      { name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` }
    ] },
  { label: "BI & Visualization", items: [
      { name: "Tableau", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Power BI", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Metabase", logo: `${DEVICON}/metabase/metabase-original.svg` },
      { name: "D3.js", logo: `${DEVICON}/d3js/d3js-original.svg` },
      { name: "Plotly", logo: `${DEVICON}/plotly/plotly-original.svg` }
    ] },
  { label: "Data Engineering", items: [
      { name: "Apache Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` },
      { name: "dbt", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "Flink", logo: `${DEVICON}/flink/flink-original.svg` },
      { name: "Fivetran", logo: `${DEVICON}/fivetran/fivetran-original.svg` }
    ] },
  { label: "AI/ML", items: [
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "TensorFlow", logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: "MLflow", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Jupyter", logo: `${DEVICON}/jupyter/jupyter-original.svg` }
    ] },
  { label: "Cloud & Storage", items: [
      { name: "AWS S3", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure Data Lake", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCS", logo: `${DEVICON}/gcs/gcs-original.svg` },
      { name: "Delta Lake", logo: `${DEVICON}/deltalake/deltalake-original.svg` },
      { name: "Iceberg", logo: `${DEVICON}/iceberg/iceberg-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{
    icon: Award,
    title: "Data Engineering Excellence",
    description: "Certified data engineers with expertise across modern cloud data platforms, BI tools, and ML frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "We don't just build dashboards — we deliver analytics that directly impact revenue, efficiency, and strategic decisions.",
  },
  {
    icon: Zap,
    title: "Scalable Data Systems",
    description: "Architectures designed to handle terabytes to petabytes with consistent performance and cost optimization.",
  },
  {
    icon: HeartHandshake,
    title: "Data Partnership",
    description: "Ongoing support, model retraining, pipeline monitoring, and analytics evolution as your data needs grow.",
  },];
