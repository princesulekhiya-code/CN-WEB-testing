import { Workflow, Database, Server, Shield, Layers, Activity, ClipboardList, Settings, Rocket, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/ai-ml-data-science",
  backLabel: "Back to AI, ML & Data Science",
  titleTop: "Data Engineering",
  titleBottom: "& Pipelines",
  description: "Reliable ingestion, transformation, and delivery — so your analytics and ML teams work from a single source of truth.",
  heroImage: "/images/stock/stock-909e6b9a6d.jpg",
  heroImageAlt: "ETL Pipelines",
  topBadge: { icon: null as any, title: "ETL Pipelines", subtitle: "Big data ready", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Petabyte Scale", subtitle: "Data warehousing", colorClass: "bg-emerald-500/10" },
  stats: [
    { value: 80, suffix: "+", label: "AI Projects" },
    { value: 95, suffix: "%", label: "Model Accuracy" },
    { value: 30, suffix: "+", label: "Data Scientists" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Data Engineering", headingWhite: "Services", subtitle: "Pipelines, platforms, and governance that turn raw signals into dependable datasets for analytics, reporting, and machine learning." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our Data Engineering", headingWhite: "Process", subtitle: "A disciplined path from discovery to optimized production pipelines — transparent at every stage." };
export const techHeading: ServicePageSectionProps = { headingGray: "Data Engineering", headingWhite: "Technologies", subtitle: "Modern ETL, streaming, warehouse, and orchestration stacks we deploy and operate in production environments." };
export const ctaProps: CTAProps = { headingTop: "Ready to Build Your", headingBottom: "Data Foundation?", description: "Tell us about your sources and SLAs — we'll blueprint pipelines and a platform your teams can depend on." };

export const services: ServiceOffering[] = [
  { icon: Workflow, title: "ETL/ELT Pipeline Development", description: "Batch and incremental pipelines that move, transform, and validate data reliably — with idempotent jobs, schema evolution, and observability built in.", features: ["Batch & incremental", "Schema evolution", "Job observability"] },
  { icon: Database, title: "Data Lake & Warehouse Architecture", description: "Medallion lakehouse patterns, dimensional modeling, and cost-aware storage tiers so analytics teams can query confidently at any scale.", features: ["Medallion layers", "Dimensional models", "Cost optimization"] },
  { icon: Server, title: "Real-Time Streaming Pipelines", description: "Low-latency ingestion, event-time processing, and exactly-once semantics where required — from clickstreams to IoT telemetry.", features: ["Event-time windows", "Backpressure handling", "Exactly-once"] },
  { icon: Shield, title: "Data Quality & Governance", description: "Profiling, anomaly detection, lineage, and policy enforcement so stakeholders trust the numbers and auditors see a clear trail.", features: ["Profiling & tests", "Lineage tracking", "Policy enforcement"] },
  { icon: Layers, title: "Data Integration & APIs", description: "Connect SaaS, databases, and files through reusable connectors, CDC, and well-versioned APIs that keep downstream consumers stable.", features: ["CDC patterns", "Connector reuse", "Versioned APIs"] },
  { icon: Activity, title: "Cloud Data Platform Setup", description: "Landing zones, IAM, secrets, networking, and FinOps guardrails across AWS, Azure, or GCP — production-ready from day one.", features: ["Secure landing zones", "IAM & secrets", "FinOps guardrails"] },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Data Audit & Discovery", description: "Inventory sources, volumes, SLAs, and compliance constraints — mapping freshness needs and ownership before design begins.", icon: ClipboardList },
  { step: "02", title: "Architecture Design", description: "Choose lakehouse vs. warehouse patterns, partitioning strategy, and orchestration topology aligned to cost and latency targets.", icon: Layers },
  { step: "03", title: "Pipeline Development", description: "Implement ETL/ELT and streaming jobs with modular code, reusable transforms, and environment promotion from dev to production.", icon: Settings },
  { step: "04", title: "Quality Validation", description: "Contract tests, reconciliation checks, and alerting on drift — so bad data never silently reaches dashboards or models.", icon: Shield },
  { step: "05", title: "Deployment & Automation", description: "CI/CD for pipelines, infrastructure as code, and blue/green or canary patterns for safe releases with fast rollback.", icon: Rocket },
  { step: "06", title: "Monitoring & Optimization", description: "SLI/SLO dashboards, runbook-driven incidents, and continuous tuning of cluster sizing, file layout, and spend.", icon: Activity },
];

export const techCategories: TechCategory[] = [
  { label: "ETL/ELT", items: [{ name: "Apache Spark", logo: `${DEVICON}/apachespark/apachespark-original.svg` }, { name: "Airflow", logo: `${DEVICON}/apacheairflow/apacheairflow-original.svg` }, { name: "dbt", logo: `${DEVICON}/python/python-original.svg` }, { name: "Fivetran", logo: `${DEVICON}/fivetran/fivetran-original.svg` }, { name: "Stitch", logo: `${DEVICON}/stitch/stitch-original.svg` }] },
  { label: "Streaming", items: [{ name: "Kafka", logo: `${DEVICON}/apachekafka/apachekafka-original.svg` }, { name: "Flink", logo: `${DEVICON}/flink/flink-original.svg` }, { name: "Kinesis", logo: `${DEVICON}/kinesis/kinesis-original.svg` }, { name: "Pub/Sub", logo: `${DEVICON}/pubsub/pubsub-original.svg` }] },
  { label: "Storage", items: [{ name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` }, { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` }, { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` }, { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` }, { name: "Delta Lake", logo: `${DEVICON}/deltalake/deltalake-original.svg` }] },
  { label: "Orchestration", items: [{ name: "Dagster", logo: `${DEVICON}/dagster/dagster-original.svg` }, { name: "Prefect", logo: `${DEVICON}/prefect/prefect-original.svg` }, { name: "Luigi", logo: `${DEVICON}/luigi/luigi-original.svg` }, { name: "Mage", logo: `${DEVICON}/mage/mage-original.svg` }] },
];

export const whyChoose: WhyChooseItem[] = [
  { icon: Layers, title: "Scalable Architecture", description: "Designs that grow with data volume and user concurrency — partitioning, caching, and elastic compute where it matters." },
  { icon: Shield, title: "Data Quality Focus", description: "Testing and governance are first-class, not afterthoughts — fewer surprises in production analytics and ML." },
  { icon: Server, title: "Cloud-Native Design", description: "Managed services, IaC, and security baselines tailored to your cloud so teams move fast without trading off control." },
  { icon: HeartHandshake, title: "End-to-End Ownership", description: "From discovery through run — we stay engaged with monitoring, incidents, and roadmap planning alongside your team." },
];
