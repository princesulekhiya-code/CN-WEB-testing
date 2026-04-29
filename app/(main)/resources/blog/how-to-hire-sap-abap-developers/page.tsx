import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "../pennews-img";
import styles from "../erp-implementation-team/page.module.css";
import { TocNav } from "../erp-implementation-team/toc-nav";

export const metadata = {
  title: "How to Hire SAP ABAP Developers: Step-by-Step Guide for Businesses",
  description: "Structured SAP ABAP hiring guide for role clarity, screening, assessment, and fast closure.",
};

const tocItems = [
  { id: "how-to-hire-efficiently", label: "How to Hire SAP ABAP Developers Efficiently" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid When Hiring SAP ABAP Developers" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "FAQs" },
];

export default function HireSapAbapPage() {
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
            <span className="text-black/55 dark:text-white/55">How to Hire SAP ABAP Developers</span>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.11em] text-[#4EB3E8]">
                <span className="font-semibold">Hiring Resources</span><span className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/30" /><span className="font-medium text-black/50 dark:text-white/50">9 min read</span>
              </div>
              <h1 className={`${styles.heroTitle} mt-4 max-w-[620px] text-[2.35rem] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[2.7rem]`}>
                How to Hire SAP ABAP Developers: Step-by-Step Guide for Businesses
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
                    src="/blog-vectors/sap-abap-hiring.svg"
                    alt="Hire SAP ABAP developers"
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
              ABAP hiring succeeds when the role is sharply defined, assessments are practical, and interview decisions move fast.
              Resume volume does not fix poor requirement clarity.
            </p>
          </div>
          <div className={`${styles.articleBody} mt-10`}>
            <h2 id="how-to-hire-efficiently">How to Hire SAP ABAP Developers Efficiently</h2>
            <h3>Step 1: Define ABAP requirement clearly</h3>
            <p>Map the role to exact work: reports, enhancements, S/4HANA optimization, migration tasks, and module context.</p>
            <h3>Step 2: Choose hiring model</h3>
            <p>Use contract/freelance for short urgent gaps and dedicated hires for long transformation programs.</p>
            <h3>Step 3: Write high-quality JD</h3>
            <p>Describe outcomes, SAP environment, and technical expectations instead of generic SAP keywords.</p>
            <h3>Step 4: Source from relevant channels</h3>
            <p>Use SAP communities, referrals, and specialist talent networks over generic job portal volume.</p>
            <h3>Step 5: Screen for real ABAP depth</h3>
            <p>Prioritize proven project details over broad skill claims and buzzword-heavy profiles.</p>
            <h3>Step 6: Conduct practical technical assessment</h3>
            <p>Test debugging, performance tuning, and realistic requirement implementation.</p>
            <h3>Step 7: Evaluate functional understanding</h3>
            <p>Check collaboration ability with functional teams and business process awareness.</p>
            <h3>Step 8: Run structured interviews</h3>
            <p>Standardize evaluation criteria across technical and functional interviewers.</p>
            <h3>Step 9: Validate past SAP project contribution</h3>
            <p>Ask what they personally built, optimized, and delivered under constraints.</p>
            <h3>Step 10: Close quickly</h3>
            <p>Strong ABAP candidates move fast in market; delay often means losing validated talent.</p>

            <h2 id="common-mistakes">Common Mistakes to Avoid When Hiring SAP ABAP Developers</h2>
            <ul>
              <li>Hiring on generic SAP exposure without ABAP depth validation</li>
              <li>Ignoring S/4HANA relevance for modern environments</li>
              <li>Skipping practical technical assessment</li>
              <li>Slow decision-making after final interviews</li>
            </ul>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              ABAP hiring quality improves dramatically with role clarity, practical evaluation, and structured closure. The best process
              is focused on relevance and execution depth, not keyword matching.
            </p>

            <h2 id="faq">FAQs</h2>
            <h3>How long does ABAP hiring take?</h3>
            <p>Typically 2-6 weeks depending on complexity and hiring model.</p>
            <h3>Do all ABAP roles require S/4HANA?</h3>
            <p>No, but S/4HANA experience is important for migration and HANA-first projects.</p>
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
