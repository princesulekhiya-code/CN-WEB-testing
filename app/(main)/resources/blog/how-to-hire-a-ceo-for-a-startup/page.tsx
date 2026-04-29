import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "../pennews-img";
import styles from "../erp-implementation-team/page.module.css";
import { TocNav } from "../erp-implementation-team/toc-nav";

export const metadata = {
  title: "How to Hire a CEO for a Startup in India (2026 Guide)",
  description: "Practical framework to hire the right startup CEO in India.",
};

const tocItems = [
  { id: "why-critical", label: "Why Hiring the Right CEO Is Critical for Startup Success" },
  { id: "how-to-hire", label: "How to Hire a CEO for Startups in India" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQs" },
];

export default function HireCeoPage() {
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
            <span className="text-black/55 dark:text-white/55">How to Hire a CEO for a Startup in India</span>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.11em] text-[#4EB3E8]">
                <span className="font-semibold">Hiring Resources</span><span className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" /><span className="font-medium text-black/50 dark:text-white/50">4 min read</span>
              </div>
              <h1 className={`${styles.heroTitle} mt-4 max-w-[620px] text-[2.35rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.7rem]`}>
                How to Hire a CEO for a Startup in India (2026 Guide)
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
                    src="https://supersourcing.com/blog/wp-content/uploads/2026/04/How-to-Hire-a-CEO-for-a-Startup-in-India.png"
                    alt="Startup CEO hiring"
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
              Hiring the right startup CEO is a stage-critical decision. The best process aligns founders and investors first, defines a
              clear mandate, evaluates execution ability, and closes with explicit expectations.
            </p>
          </div>
          <div className={`${styles.articleBody} mt-10`}>
            <h2 id="why-critical">Why Hiring the Right CEO Is Critical for Startup Success</h2>
            <p>
              In early stages, founders often lead as CEO. As scale grows, fundraising, team design, and operating cadence need a
              different leadership profile. A strong CEO brings clarity and execution discipline; a weak hire creates drift and slow-down.
            </p>

            <h2 id="how-to-hire">How to Hire a CEO for Startups in India</h2>
            <h3>Step 1: Align founders and stakeholders</h3>
            <p>Define why this role is needed now and what changes after onboarding.</p>
            <h3>Step 2: Define CEO mandate</h3>
            <p>Set concrete outcomes for 12-18 months: growth, fundraising, structure, or turnaround.</p>
            <h3>Step 3: Source through trusted networks</h3>
            <p>Strong candidates usually come from founder-investor networks and specialized leadership search channels.</p>
            <h3>Step 4: Run structured interviews</h3>
            <p>Evaluate real decision patterns, not only presentation confidence.</p>
            <h3>Step 5: Evaluate founder fit</h3>
            <p>Execution speed, risk tolerance, and communication style alignment are critical for stability.</p>
            <h3>Step 6: Deep reference checks</h3>
            <p>Check leadership behavior under pressure and consistency across teams/investors.</p>
            <h3>Step 7: Close with clear expectations</h3>
            <p>Define compensation mix, first-year priorities, and measurable milestones.</p>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              CEO hiring is not a title-based decision. It is a growth operating decision. A structured process significantly reduces
              leadership risk and improves scale readiness.
            </p>

            <h2 id="faq">FAQs</h2>
            <h3>When should a startup hire CEO?</h3>
            <p>Usually when fundraising, scale, and team complexity outgrow founder-led operating bandwidth.</p>
            <h3>How long does this process usually take?</h3>
            <p>Typically 2-4 months depending on role clarity and network quality.</p>
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
