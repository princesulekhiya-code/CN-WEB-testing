import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "../pennews-img";
import styles from "../erp-implementation-team/page.module.css";
import { TocNav } from "../erp-implementation-team/toc-nav";

export const metadata = {
  title: "Scaling Engineering Teams from 10 to 100 Developers: Hiring Strategy",
  description: "Phased strategy to scale engineering teams from 10 to 100 without breaking delivery and culture.",
};

const tocItems = [
  { id: "what-makes-scaling-hard", label: "What Makes Scaling Engineering Team So Hard?" },
  { id: "three-phases", label: "The Three Phases of Engineering Team Growth" },
  { id: "hiring-framework", label: "Building the Right Hiring Framework for Each Stage" },
  { id: "high-performance", label: "What Separates High-Performance Engineering Teams" },
  { id: "common-mistakes", label: "Common Mistakes When Scaling Engineering Teams" },
  { id: "conclusion", label: "Conclusion: Scaling Is a Strategy, Not a Headcount Milestone" },
  { id: "faq", label: "FAQs" },
];

export default function ScalingEngineeringTeamsPage() {
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
            <Link href="/">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/resources/blog">Hiring Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-black/55 dark:text-white/55">Scaling Engineering Teams from 10 to 100 Developers</span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.11em] text-[#4EB3E8]">
                <span className="font-semibold">Hiring Resources</span>
                <span className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" />
                <span className="font-medium text-black/50 dark:text-white/50">5 min read</span>
              </div>
              <h1 className={`${styles.heroTitle} mt-4 max-w-[620px] text-[2.35rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.7rem]`}>
                Scaling Engineering Teams from 10 to 100 Developers: Hiring Strategy
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
                    src="https://supersourcing.com/blog/wp-content/uploads/2026/04/Scaling-Engineering-Teams-from-10-to-100-Developers_-Hiring-Strategy.png"
                    alt="Scaling engineering teams"
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
              Scaling from 10 to 100 engineers is not about adding headcount quickly. It requires phased org design, stronger recruiting
              systems, better onboarding, and technical leadership layers that keep delivery quality stable.
            </p>
          </div>

          <div className={`${styles.articleBody} mt-10`}>
            <h2 id="what-makes-scaling-hard">What Makes Scaling Engineering Team So Hard?</h2>
            <p>
              As teams grow, communication overhead, review cycles, and dependency management increase sharply. Hiring bottlenecks,
              onboarding failure, architecture fragility, and leadership gaps often show up between 30 and 60 engineers.
            </p>
            <ul>
              <li>Hiring pipeline pressure and weak sourcing capacity</li>
              <li>Slow onboarding and low time-to-productivity</li>
              <li>Architecture not ready for parallel squads</li>
              <li>Culture dilution when values are undocumented</li>
            </ul>

            <h2 id="three-phases">The Three Phases of Engineering Team Growth</h2>
            <h3>Phase 1 (10-30): Foundation</h3>
            <p>Document engineering culture, define role levels, and hire for ownership.</p>
            <h3>Phase 2 (30-60): Scaling</h3>
            <p>Move to squad-based structure, add engineering managers, and build dedicated recruiting function.</p>
            <h3>Phase 3 (60-100): Maturity</h3>
            <p>Invest in DevEx, staff-level technical ownership, AI-augmented development, and global hiring model.</p>

            <h2 id="hiring-framework">Building the Right Hiring Framework for Each Stage</h2>
            <h3>Step 1: Define role profiles before opening requisitions</h3>
            <p>Each role needs clear 90-day impact expectations and skill boundaries.</p>
            <h3>Step 2: Use structured interviews with scorecards</h3>
            <p>Consistent evaluation improves signal quality and reduces bias.</p>
            <h3>Step 3: Use real-work technical assessments</h3>
            <p>System design and practical coding tasks should mirror real engineering challenges.</p>
            <h3>Step 4: Build 30-60-90 onboarding</h3>
            <p>Structured onboarding improves early productivity and retention.</p>
            <h3>Step 5: Track hiring health metrics</h3>
            <p>Monitor time-to-hire, offer acceptance, 90-day retention, and hiring manager satisfaction.</p>

            <h2 id="high-performance">What Separates High-Performance Engineering Teams</h2>
            <ul>
              <li>They document decisions, not only outcomes (ADRs, RFCs)</li>
              <li>They treat internal mobility as retention strategy</li>
              <li>They standardize AI tooling as productivity infrastructure</li>
            </ul>

            <h2 id="common-mistakes">Common Mistakes When Scaling Engineering Teams</h2>
            <ul>
              <li>Hiring ahead of org structure and unclear ownership</li>
              <li>Skipping dedicated engineering management hires</li>
              <li>Letting culture drift at 50+ headcount</li>
              <li>Underinvesting in tooling and internal developer experience</li>
            </ul>

            <h2 id="conclusion">Conclusion: Scaling Is a Strategy, Not a Headcount Milestone</h2>
            <p>
              Companies that scale well align hiring, structure, and culture in phases. The goal is resilient execution, not just
              bigger teams.
            </p>

            <h2 id="faq">FAQs</h2>
            <h3>When should a startup scale beyond 10 engineers?</h3>
            <p>When current team productivity is high but delivery demand still exceeds capacity.</p>
            <h3>What works best for a 50-person engineering org?</h3>
            <p>Squad-based structure with clear ownership and dedicated engineering management.</p>
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
