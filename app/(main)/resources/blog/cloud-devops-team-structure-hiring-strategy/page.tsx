import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "../pennews-img";
import styles from "../erp-implementation-team/page.module.css";
import { TocNav } from "../erp-implementation-team/toc-nav";

export const metadata = {
  title: "Building a Cloud DevOps Team: Roles, Structure & Hiring Strategy",
  description: "Practical cloud DevOps team structure and hiring strategy guide for 2026.",
};

const tocItems = [
  { id: "what-is-cloud-devops-team", label: "What Is a Cloud DevOps Team and Why Does It Matter?" },
  { id: "core-roles", label: "The Core Roles in a Cloud DevOps Team Structure" },
  { id: "team-by-stage", label: "Cloud DevOps Team Structure by Company Stage" },
  { id: "how-to-hire", label: "How to Hire DevOps Engineers for AWS and Multi-Cloud" },
  { id: "tools", label: "DevOps Tools Stack Your Team Should Know in 2026" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQs" },
];

export default function CloudDevOpsPage() {
  return (
    <section
      className={cn(
        penNewsBodyLike,
        "min-h-screen bg-white text-black dark:bg-black dark:text-white",
      )}
    >
      <div className={`${styles.heroWrap} bg-[#eef2fa] dark:bg-[#0f141e]`}>
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="mb-5 text-[11px] text-black/45 dark:text-white/45">
            <Link href="/">Home</Link><span className="mx-2">›</span><Link href="/resources/blog">Hiring Resources</Link><span className="mx-2">›</span>
            <span className="text-black/55 dark:text-white/55">Building a Cloud DevOps Team</span>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.11em] text-[#4EB3E8]">
                <span className="font-semibold">Hiring Resources</span><span className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" /><span className="font-medium text-black/50 dark:text-white/50">6 min read</span>
              </div>
              <h1 className={`${styles.heroTitle} mt-4 max-w-[620px] text-[2.35rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.7rem]`}>
                Building a Cloud DevOps Team: Roles, Structure &amp; Hiring Strategy
              </h1>
              <div className="mt-7 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                    alt="Mayank Pratap Singh"
                    width={40}
                    height={40}
                    className={cn(penNewsImgDisplayBlock, "h-full w-full object-cover")}
                  />
                </div>
                <div>
                  <p className="text-[13px] font-semibold">Mayank Pratap Singh</p>
                  <p className="text-[11px] text-black/45 dark:text-white/45">Co-founder &amp; CEO of Supersourcing</p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.heroImageCard} relative overflow-hidden rounded-[20px] border border-[#bcd4eb] bg-[#e6f0ff] p-2 sm:rounded-3xl sm:p-3 dark:border-white/10 dark:bg-[#131c2c]`}
            >
              <div className="relative aspect-[3/2] w-full">
                <div className={blogArtInsetClass}>
                  <Image
                    src="https://supersourcing.com/blog/wp-content/uploads/2026/04/Building-a-Cloud-DevOps-Team_-Roles-Structure-Hiring-Strategy.png"
                    alt="Cloud DevOps team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className={cn(penNewsImgDisplayBlock, "object-contain object-center")}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article className={`${styles.articleMain} max-w-[760px]`}>
          <div className={`${styles.tldrCard} rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black`}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-black/85 dark:text-white/85">TL;DR</p>
            <p className="mt-3 text-[15.5px] leading-[1.85] text-black/72 dark:text-white/72">
              A strong cloud DevOps team needs role clarity across DevOps, SRE, Cloud Architect, DevSecOps, Platform Engineering, and FinOps.
              Hiring should prioritize real production exposure over certifications.
            </p>
          </div>

          <div className={`${styles.articleBody} mt-10`}>
            <h2 id="what-is-cloud-devops-team">What Is a Cloud DevOps Team and Why Does It Matter?</h2>
            <p>
              A cloud DevOps team is a cross-functional group responsible for automating infrastructure, enabling reliable releases, and
              maintaining cloud systems with speed and stability.
            </p>
            <p>
              Poor team design leads to failed deployments, security issues, rising cloud costs, and fragile operations.
            </p>

            <h2 id="core-roles">The Core Roles in a Cloud DevOps Team Structure</h2>
            <h3>1. DevOps Engineer</h3>
            <p>Owns CI/CD, infrastructure automation, container deployment, and operational workflows.</p>
            <h3>2. Cloud Architect</h3>
            <p>Designs scalable infrastructure blueprint and cost-performance trade-offs.</p>
            <h3>3. Site Reliability Engineer (SRE)</h3>
            <p>Owns reliability metrics, incident automation, observability, and post-mortems.</p>
            <h3>4. Cloud Security Engineer (DevSecOps)</h3>
            <p>Embeds security into delivery with IAM controls, scans, secrets, and compliance practices.</p>
            <h3>5. Platform Engineer</h3>
            <p>Builds internal developer platform and reusable infrastructure standards.</p>
            <h3>6. FinOps Analyst</h3>
            <p>Optimizes cloud spend through visibility, tagging, and rightsizing.</p>

            <h2 id="team-by-stage">Cloud DevOps Team Structure by Company Stage</h2>
            <ul>
              <li><strong>Early stage:</strong> 1-2 DevOps generalists, focus on CI/CD and basic automation.</li>
              <li><strong>Growth stage:</strong> 4-8 team members, add Cloud Architect + SRE + stronger security.</li>
              <li><strong>Enterprise:</strong> 10-25+ across Platform, SRE, Security, and FinOps pods.</li>
            </ul>

            <h2 id="how-to-hire">How to Hire DevOps Engineers for AWS and Multi-Cloud</h2>
            <h3>Step 1: Define infrastructure problem first</h3>
            <p>Clarify whether your priority is reliability, security, cost control, or deployment velocity.</p>
            <h3>Step 2: Evaluate production experience</h3>
            <p>Look for incident ownership, migrations, and measurable platform outcomes.</p>
            <h3>Step 3: Use scenario-based interviews</h3>
            <p>Test incident handling, architecture trade-offs, and practical infrastructure thinking.</p>
            <h3>Step 4: Assess AI/automation fluency</h3>
            <p>Evaluate use of AI tooling for infrastructure code, alerting, and runbook automation.</p>

            <h2 id="tools">DevOps Tools Stack Your Team Should Know in 2026</h2>
            <ul>
              <li>CI/CD: GitHub Actions, GitLab CI, ArgoCD</li>
              <li>IaC: Terraform, Pulumi, AWS CDK</li>
              <li>Containers: Docker, Kubernetes, Helm</li>
              <li>Observability: Datadog, Prometheus, Grafana</li>
              <li>Security: Vault, Trivy, Checkov</li>
              <li>FinOps: Cost Explorer, Infracost, CloudHealth</li>
            </ul>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              DevOps success is a team-structure problem before it becomes a hiring problem. Define ownership by stage, then hire for
              real production capability.
            </p>

            <h2 id="faq">FAQs</h2>
            <h3>What is ideal DevOps setup for startups?</h3>
            <p>Start with 1-2 generalists, then add specialist roles as reliability and scale complexity increases.</p>
            <h3>When should we hire platform engineer?</h3>
            <p>When app teams spend too much time on infra tasks and developer productivity starts dropping.</p>
          </div>
        </article>
        <aside className="space-y-5 lg:sticky lg:top-22 lg:h-fit">
          <div className={`${styles.tocCard} rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/55 dark:text-white/55">Table of Contents</p>
            <TocNav items={tocItems} />
          </div>
        </aside>
      </div>
    </section>
  );
}
