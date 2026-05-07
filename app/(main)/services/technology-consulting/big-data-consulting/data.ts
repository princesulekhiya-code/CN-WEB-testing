import { Database, BarChart3, Layers, Server, Users, ShieldCheck, HeartHandshake, Award, Settings, Rocket, ClipboardList, Zap, LineChart } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "Big Data",
  titleBottom: "Consulting",
  description: "Identify large and complex datasets, optimize your data strategy, and gain actionable insights that power smarter business decisions.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "Big Data Analytics & Visualization",
  topBadge: { icon: null as any, title: "Big Data", subtitle: "Hadoop & Spark", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Petabyte Scale", subtitle: "Data lakes", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Engagements" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Big Data Consulting", headingWhite: "Services", subtitle: "End-to-end data solutions from strategy and architecture to analytics and governance." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Big Data Consulting", headingWhite: "Process", subtitle: "From data assessment to advanced analytics — structured delivery with clear checkpoints." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "Modern big data tools across processing, storage, visualization, and cloud infrastructure." };
export const ctaProps: CTAProps = { headingTop: "Ready to Unlock Your", headingBottom: "Data&apos;s Potential?", description: "Let us design a data strategy that turns your complex datasets into competitive advantages and actionable business insights." };

export const services: ServiceOffering[] = [{ icon: Database, title: "Data Strategy & Architecture", description: "Design scalable data architectures — data lakes, warehouses, and lakehouses — that turn raw data into strategic assets.", features: ["Data modeling", "Lake/Warehouse design", "Schema governance"] },
  { icon: Layers, title: "ETL & Data Pipeline Engineering", description: "Build robust extraction, transformation, and loading pipelines that move data reliably across your entire ecosystem.", features: ["Batch & streaming", "Data quality checks", "Orchestration"] },
  { icon: BarChart3, title: "Business Intelligence & Analytics", description: "Dashboards, KPI tracking, and self-service analytics that empower teams to make data-driven decisions in real time.", features: ["Custom dashboards", "KPI frameworks", "Self-service BI"] },
  { icon: LineChart, title: "Predictive Analytics", description: "Machine learning models and statistical analysis that forecast trends, identify risks, and uncover hidden opportunities.", features: ["Forecasting models", "Risk scoring", "Anomaly detection"] },
  { icon: Server, title: "Data Infrastructure & Cloud", description: "Cloud-native data platforms on AWS, Azure, or GCP with auto-scaling, cost optimization, and security hardening.", features: ["Cloud migration", "Auto-scaling", "Cost optimization"] },
  { icon: ShieldCheck, title: "Data Governance & Compliance", description: "Policies, lineage tracking, and access controls that keep your data accurate, secure, and regulation-compliant.", features: ["Data lineage", "Access policies", "GDPR/HIPAA ready"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Data Assessment", description: "Audit existing data sources, quality, infrastructure, and governance to identify gaps and opportunities.", icon: ClipboardList },
  { step: "02", title: "Strategy & Roadmap", description: "Define data architecture, technology stack, and a phased roadmap aligned to business priorities.", icon: Settings },
  { step: "03", title: "Pipeline Development", description: "Build ETL/ELT pipelines, data models, and integration layers connecting all critical data sources.", icon: Layers },
  { step: "04", title: "Analytics & BI", description: "Deploy dashboards, reports, and self-service analytics tools that deliver actionable insights.", icon: BarChart3 },
  { step: "05", title: "ML & Advanced Analytics", description: "Train and deploy predictive models, recommendation engines, and intelligent automation workflows.", icon: Zap },
  { step: "06", title: "Monitoring & Optimization", description: "Continuous performance tuning, cost management, data quality monitoring, and governance enforcement.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Processing", items: [
      { name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` },
      { name: "Apache Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
      { name: "Flink", logo: `${DEVICON}/flink/flink-original.svg` },
      { name: "Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` },
      { name: "dbt", logo: `${DEVICON}/python/python-original.svg` }
    ] },
  { label: "Storage", items: [
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
      { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` },
      { name: "Delta Lake", logo: `${DEVICON}/deltalake/deltalake-original.svg` }
    ] },
  { label: "BI & Visualization", items: [
      { name: "Tableau", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Power BI", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Looker", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Metabase", logo: `${DEVICON}/metabase/metabase-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` }
    ] },
  { label: "Cloud", items: [
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Terraform", logo: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` }
    ] },
  { label: "Languages", items: [
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "SQL", logo: `${DEVICON}/sql/sql-original.svg` },
      { name: "Scala", logo: `${DEVICON}/scala/scala-original.svg` },
      { name: "R", logo: `${DEVICON}/r/r-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Certified Data Engineers", description: "AWS, Azure, and GCP certified specialists with deep expertise in big data ecosystems." },
  { icon: Layers, title: "Scalable Architecture", description: "Designs that handle petabyte-scale data with cost-efficient auto-scaling and high availability." },
  { icon: ShieldCheck, title: "Governance-First", description: "Data quality, lineage, and compliance baked in from day one — not bolted on after launch." },
  { icon: HeartHandshake, title: "End-to-End Partnership", description: "From strategy through implementation to ongoing optimization — one accountable team." },];
