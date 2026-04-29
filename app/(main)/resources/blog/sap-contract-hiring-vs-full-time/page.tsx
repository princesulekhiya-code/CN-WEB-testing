import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "../pennews-img";
import styles from "../erp-implementation-team/page.module.css";
import { TocNav } from "../erp-implementation-team/toc-nav";

export const metadata = {
  title: "SAP Contract Hiring vs Full-Time: What Works Better?",
  description: "Compare SAP contract hiring and full-time hiring across cost, speed, flexibility, and continuity.",
};

const tocItems = [
  { id: "what-is-contract", label: "What Is SAP Contract Hiring?" },
  { id: "what-is-full-time", label: "What Is Full-Time SAP Hiring?" },
  { id: "key-differences", label: "Key Differences: SAP Contract Hiring vs Full-Time" },
  { id: "comparison", label: "Quick Comparison Table" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQs" },
];

export default function SapContractVsFullTimePage() {
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
            <span className="text-black/55 dark:text-white/55">SAP Contract Hiring vs Full-Time</span>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.11em] text-[#4EB3E8]">
                <span className="font-semibold">Hiring Resources</span><span className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" /><span className="font-medium text-black/50 dark:text-white/50">5 min read</span>
              </div>
              <h1 className={`${styles.heroTitle} mt-4 max-w-[620px] text-[2.35rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.7rem]`}>
                SAP Contract Hiring vs Full-Time: What Works Better?
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
                    src="https://supersourcing.com/blog/wp-content/uploads/2026/04/SAP-Contract-Hiring-vs-Full-Time_-What-Works-Better_.png"
                    alt="SAP hiring comparison"
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
              SAP contract hiring is best for speed and niche execution. Full-time SAP hiring is stronger for continuity and long-term
              ownership. Most enterprises use a hybrid of both models.
            </p>
          </div>
          <div className={`${styles.articleBody} mt-10`}>
            <h2 id="what-is-contract">What Is SAP Contract Hiring?</h2>
            <p>
              Contract hiring means bringing SAP professionals for short-term project needs like migration, upgrades, or specialist
              modules. It improves time-to-deploy and gives targeted expertise without long fixed cost commitment.
            </p>

            <h2 id="what-is-full-time">What Is Full-Time SAP Hiring?</h2>
            <p>
              Full-time SAP hiring builds internal ownership for support, enhancements, and ongoing process alignment. It is slower to
              hire but stronger for long-term continuity.
            </p>

            <h2 id="key-differences">Key Differences: SAP Contract Hiring vs Full-Time</h2>
            <ul>
              <li><strong>Cost:</strong> Contract = variable, Full-time = fixed long-term investment</li>
              <li><strong>Speed:</strong> Contract is faster to onboard</li>
              <li><strong>Flexibility:</strong> Contract scales up/down easily</li>
              <li><strong>Knowledge retention:</strong> Full-time stronger over time</li>
              <li><strong>Specialization:</strong> Contractors often bring deep niche module expertise</li>
              <li><strong>Alignment:</strong> Full-time aligns better with long-term business goals</li>
            </ul>

            <h2 id="comparison">Quick Comparison Table</h2>
            <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
              <table className="w-full border-collapse text-[14px] leading-[1.7]">
                <thead className="bg-black/[0.03] dark:bg-white/[0.03]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold">Contract Hiring</th>
                    <th className="px-4 py-3 text-left font-semibold">Full-Time Hiring</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-black/10 dark:border-white/10"><td className="px-4 py-3">Cost</td><td className="px-4 py-3">Variable</td><td className="px-4 py-3">Fixed</td></tr>
                  <tr className="border-t border-black/10 dark:border-white/10"><td className="px-4 py-3">Hiring speed</td><td className="px-4 py-3">Fast</td><td className="px-4 py-3">Slower</td></tr>
                  <tr className="border-t border-black/10 dark:border-white/10"><td className="px-4 py-3">Continuity</td><td className="px-4 py-3">Lower</td><td className="px-4 py-3">Higher</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              There is no universal winner. Use contract specialists for time-bound initiatives and full-time SAP staff for core
              operations and continuity.
            </p>

            <h2 id="faq">FAQs</h2>
            <h3>Is contract hiring more expensive?</h3>
            <p>Per month yes in some cases, but often more efficient for short-term project needs.</p>
            <h3>Can contractors convert to full-time?</h3>
            <p>Yes, contract-to-hire is common for validating fit before long-term commitment.</p>
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
