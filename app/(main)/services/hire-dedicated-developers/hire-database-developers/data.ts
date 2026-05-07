import { Database, HardDrive, BarChart3, Shield, Search, RefreshCcw, ClipboardList, Settings, Palette, Code2, ShieldCheck, Rocket, Award, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/hire-dedicated-developers",
  backLabel: "Back to Hire Dedicated Developers",
  titleTop: "Hire Database",
  titleBottom: "Developers",
  description: "Specialists in MySQL, MongoDB, PostgreSQL, Redis, and scalable data architectures. Our database experts build optimized storage, processing, and analytics systems for real-time performance.",
  heroImage: "/images/stock/stock-d2cb4997ca.jpg",
  heroImageAlt: "Database Infrastructure",
  topBadge: { icon: null as any, title: "DB Experts", subtitle: "SQL & NoSQL", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Certified", subtitle: "Database admin", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 500, suffix: "+", label: "Developers Placed" },
  { value: 80, suffix: "+", label: "Active Teams" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 30, suffix: "+", label: "Technologies" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Database Developers for", headingWhite: "Hire", subtitle: "From relational databases to NoSQL, data warehouses, and search engines — hire the right database talent." };
export const processHeading: ServicePageSectionProps = { headingGray: "How to Hire Database", headingWhite: "Developers", subtitle: "A structured process to match you with database engineers who understand your data architecture needs." };
export const techHeading: ServicePageSectionProps = { headingGray: "Database", headingWhite: "Technologies", subtitle: "Relational, NoSQL, data warehouse, and search technologies our database developers specialize in." };
export const ctaProps: CTAProps = { headingTop: "Ready to Hire", headingBottom: "Database Developers?", description: "Get expert SQL, NoSQL, and data warehouse engineers onboarded to your team within 48 hours." };

export const services: ServiceOffering[] = [{ icon: Database, title: "SQL Database Developers", description: "Experts in PostgreSQL, MySQL, SQL Server, and Oracle — designing normalized schemas, stored procedures, and high-performance queries.", features: ["PostgreSQL", "MySQL", "Query optimization"] },
  { icon: HardDrive, title: "NoSQL Database Developers", description: "MongoDB, Cassandra, DynamoDB, and Redis specialists building flexible document stores and key-value caches for modern applications.", features: ["MongoDB", "Redis", "DynamoDB"] },
  { icon: BarChart3, title: "Data Warehouse Engineers", description: "Snowflake, BigQuery, and Redshift experts designing analytical data warehouses with star schemas and optimized query performance.", features: ["Snowflake", "BigQuery", "Star schema"] },
  { icon: RefreshCcw, title: "Database Migration Specialists", description: "Seamless database migrations between platforms with zero downtime, data validation, and rollback strategies.", features: ["Zero downtime", "Data validation", "Cross-platform"] },
  { icon: Shield, title: "Database Security Experts", description: "Encryption, access control, audit logging, and compliance implementation for databases handling sensitive data.", features: ["Encryption", "Access control", "HIPAA/GDPR"] },
  { icon: Search, title: "Search & Analytics Engineers", description: "Elasticsearch, Apache Solr, and ClickHouse specialists building full-text search, log analytics, and real-time query engines.", features: ["Elasticsearch", "Full-text search", "Log analytics"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "Assess Data Needs", description: "Understand your data volumes, query patterns, scalability requirements, and compliance constraints for precise matching.", icon: ClipboardList },
  { step: "02", title: "Review Profiles", description: "Receive database developer profiles with schema design samples, performance tuning experience, and migration track records.", icon: Settings },
  { step: "03", title: "Technical Interview", description: "Evaluate query optimization skills, data modeling approaches, and production database management experience.", icon: Palette },
  { step: "04", title: "Rapid Onboarding", description: "Database developers integrated with your infrastructure, access controls, and monitoring tools within 48 hours.", icon: Rocket },
  { step: "05", title: "Sprint Delivery", description: "Schema design, query optimization, migration execution, and monitoring setup delivered in agile sprints.", icon: Code2 },
  { step: "06", title: "Scale & Optimize", description: "Add specialists for data warehousing, search, or database security as your data infrastructure evolves.", icon: ShieldCheck },];

export const techCategories: TechCategory[] = [{ label: "Relational", items: [
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "SQL Server", logo: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "Oracle", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "MariaDB", logo: `${DEVICON}/mariadb/mariadb-original.svg` },
      { name: "SQLite", logo: `${DEVICON}/sqlite/sqlite-original.svg` }
    ] },
  { label: "NoSQL", items: [
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Cassandra", logo: `${DEVICON}/cassandra/cassandra-original.svg` },
      { name: "DynamoDB", logo: `${DEVICON}/dynamodb/dynamodb-original.svg` },
      { name: "CouchDB", logo: `${DEVICON}/couchdb/couchdb-original.svg` },
      { name: "Neo4j", logo: `${DEVICON}/neo4j/neo4j-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` }
    ] },
  { label: "Data Warehouse", items: [
      { name: "Snowflake", logo: `${DEVICON}/snowflake/snowflake-original.svg` },
      { name: "BigQuery", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Redshift", logo: `${DEVICON}/redshift/redshift-original.svg` },
      { name: "Databricks", logo: `${DEVICON}/python/python-original.svg` },
      { name: "Apache Hive", logo: `${DEVICON}/apache/apache-original.svg` }
    ] },
  { label: "Search & Analytics", items: [
      { name: "Elasticsearch", logo: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
      { name: "Apache Solr", logo: `${DEVICON}/apache/apache-original.svg` },
      { name: "ClickHouse", logo: `${DEVICON}/clickhouse/clickhouse-original.svg` },
      { name: "Kibana", logo: `${DEVICON}/kibana/kibana-original.svg` },
      { name: "Grafana", logo: `${DEVICON}/grafana/grafana-original.svg` }
    ] },
  { label: "Tools & Infra", items: [
      { name: "pgAdmin", logo: `${DEVICON}/pgadmin/pgadmin-original.svg` },
      { name: "MongoDB Compass", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "DBeaver", logo: `${DEVICON}/dbeaver/dbeaver-original.svg` },
      { name: "Flyway", logo: `${DEVICON}/flyway/flyway-original.svg` },
      { name: "Liquibase", logo: `${DEVICON}/liquibase/liquibase-original.svg` },
      { name: "AWS RDS", logo: `${DEVICON}/awsrds/awsrds-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "Database Domain Expertise", description: "Pre-vetted database engineers with deep expertise in schema design, query optimization, and data architecture." },
  { icon: TrendingUp, title: "Performance-Focused", description: "Developers who optimize for millisecond response times, handling millions of queries with consistent performance." },
  { icon: Zap, title: "48-Hour Onboarding", description: "From profile approval to productive database work in under 48 hours with secure infrastructure access." },
  { icon: HeartHandshake, title: "Security & Compliance", description: "Database experts who understand encryption, RBAC, audit logging, and regulatory compliance requirements." },];
