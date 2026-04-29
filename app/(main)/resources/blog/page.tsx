"use client";

import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { blogArtInsetClass, penNewsBodyLike, penNewsImgDisplayBlock } from "./pennews-img";

/** Matches supersourcing.com/blog PenNews body stack: Roboto, 14px, #666, lh 1.5 */
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

type BlogItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  url: string;
};

type BlogCategory = "GCC" | "RPO" | "Staffing";

const ACCENT = "#285ff5";
const CTA_ORANGE = "#ff7a2e";

/** Featured art from supersourcing.com/blog (wp-content/uploads), plus local vectors where no CDN asset. */
const SS = "https://supersourcing.com/blog/wp-content/uploads";

const blogs: BlogItem[] = [
  {
    id: "erp-implementation-team",
    title: "ERP Implementation Teams: Roles & Hiring Strategy for Enterprises",
    excerpt:
      "Most ERP projects fail because of wrong team design, not software. This guide explains team structure, key roles, hiring model, and AI-led ERP staffing strategy for 2026.",
    date: "Apr 27, 2026",
    category: "Hiring Resources",
    readTime: "6 min Read",
    image: `${SS}/2026/04/ERP-Implementation-Teams_-Roles-Hiring-Strategy-for-Enterprises.png`,
    url: "/resources/blog/erp-implementation-team",
  },
  {
    id: "cloud-devops-team-structure-hiring-strategy",
    title: "Building a Cloud DevOps Team: Roles, Structure & Hiring Strategy",
    excerpt:
      "A practical cloud DevOps guide covering DevOps Engineers, SREs, Cloud Architects, DevSecOps, Platform Engineers, and FinOps responsibilities.",
    date: "Apr 23, 2026",
    category: "Hiring Resources",
    readTime: "6 min Read",
    image: `${SS}/2026/04/Building-a-Cloud-DevOps-Team_-Roles-Structure-Hiring-Strategy.png`,
    url: "/resources/blog/cloud-devops-team-structure-hiring-strategy",
  },
  {
    id: "scaling-engineering-teams-hiring-strategy",
    title: "Scaling Engineering Teams from 10 to 100 Developers: Hiring Strategy",
    excerpt:
      "A phased startup growth playbook to scale from 10 to 100 engineers with the right org model, hiring systems, and execution discipline.",
    date: "Apr 24, 2026",
    category: "Hiring Resources",
    readTime: "5 min Read",
    image: `${SS}/2026/04/Scaling-Engineering-Teams-from-10-to-100-Developers_-Hiring-Strategy.png`,
    url: "/resources/blog/scaling-engineering-teams-hiring-strategy",
  },
  {
    id: "how-to-hire-a-ceo-for-a-startup",
    title: "How to Hire a CEO for a Startup in India (2026 Guide)",
    excerpt:
      "A structured founder guide on when to hire a startup CEO, what to evaluate, and how to run a low-risk leadership hiring process.",
    date: "Apr 17, 2026",
    category: "Hiring Resources",
    readTime: "4 min Read",
    image: `${SS}/2026/04/How-to-Hire-a-CEO-for-a-Startup-in-India.png`,
    url: "/resources/blog/how-to-hire-a-ceo-for-a-startup",
  },
  {
    id: "sap-contract-hiring-vs-full-time",
    title: "SAP Contract Hiring vs Full-Time: What Works Better?",
    excerpt:
      "Understand the real trade-offs between SAP contract and full-time hiring across cost, speed, continuity, flexibility, and delivery risk.",
    date: "Apr 16, 2026",
    category: "Hiring Resources",
    readTime: "5 min Read",
    image: `${SS}/2026/04/SAP-Contract-Hiring-vs-Full-Time_-What-Works-Better_.png`,
    url: "/resources/blog/sap-contract-hiring-vs-full-time",
  },
  {
    id: "how-to-hire-sap-abap-developers",
    title: "How to Hire SAP ABAP Developers: Step-by-Step Guide for Businesses",
    excerpt:
      "A practical step-by-step ABAP hiring framework covering role definition, sourcing, technical validation, interview process, and fast closure.",
    date: "Apr 15, 2026",
    category: "Hiring Resources",
    readTime: "9 min Read",
    image: "/blog-vectors/sap-abap-hiring.svg",
    url: "/resources/blog/how-to-hire-sap-abap-developers",
  },
];

const gccBlogs: BlogItem[] = [
  {
    id: "gcc-why-india-2026",
    title: "Why Are Global Companies Moving Their GCCs to India in 2026?",
    excerpt: "A market-led breakdown of why India is becoming the preferred GCC destination.",
    date: "Apr 29, 2026",
    category: "GCC",
    readTime: "5 min Read",
    image: `${SS}/2026/04/Why-Are-Global-Companies-Moving-Their-GCCs-to-India-in-2026_.png`,
    url: "/resources/blog/gcc-india-benefits",
  },
  {
    id: "gcc-bangalore-vs-indore",
    title: "Bangalore vs Indore for GCCs: Cost, Talent, Infrastructure, and More",
    excerpt: "A practical location comparison for global teams planning India GCC expansion.",
    date: "Apr 15, 2026",
    category: "GCC",
    readTime: "5 min Read",
    image: `${SS}/2025/05/Bangalore-vs-Indore-for-GCCs-Cost-Talent-Infrastructure-and-More.png`,
    url: "/resources/blog",
  },
  {
    id: "gcc-flash-gcc",
    title: "What Is a Flash GCC and Why It’s Gaining Traction?",
    excerpt: "Learn the rapid-launch GCC model, where it works, and the execution risks to avoid.",
    date: "Apr 8, 2026",
    category: "GCC",
    readTime: "7 min Read",
    image: `${SS}/2026/04/What-is-a-flash-GCC_.png`,
    url: "/resources/blog",
  },
  {
    id: "gcc-barcelona",
    title: "Global Capability Center or GCC Setup in Barcelona, Spain (2026)",
    excerpt: "Cost, control, and operating model considerations for a Europe-focused GCC setup.",
    date: "Apr 7, 2026",
    category: "GCC",
    readTime: "4 min Read",
    image: `${SS}/2025/12/Global-Capability-Center-GCC-Setup-in-Barcelona-Spain-2026.png`,
    url: "/resources/blog",
  },
  {
    id: "gcc-india-setup",
    title: "How to Set Up a GCC in India",
    excerpt: "A practical setup guide covering legal, talent, and operating design decisions.",
    date: "Apr 7, 2026",
    category: "GCC",
    readTime: "7 min Read",
    image: `${SS}/2024/11/how_to_set_up_a_gcc_in_india_a_strategic_overview_for_global_businesses.webp`,
    url: "/resources/blog",
  },
  {
    id: "gcc-vs-bpo",
    title: "GCC vs BPO: Which Is More Strategic for Your Business?",
    excerpt: "Compare control, long-term value, and capability depth across GCC and BPO models.",
    date: "Apr 6, 2026",
    category: "GCC",
    readTime: "6 min Read",
    image: `${SS}/2025/05/20250517_0847_GCC-and-BPO-Comparison_simple_compose_01jve3vkm9e0pt7s3w1dpnvwwy.png`,
    url: "/resources/blog",
  },
  {
    id: "eor-vs-gcc",
    title: "EOR vs GCC in India: Cost, Control, and Hiring Model Comparison",
    excerpt: "An executive guide to choosing between EOR speed and GCC strategic ownership.",
    date: "Mar 31, 2026",
    category: "GCC",
    readTime: "6 min Read",
    image: `${SS}/2023/05/undraw_meet_the_team_re_4h08-1.svg`,
    url: "/resources/blog",
  },
];

const rpoBlogs: BlogItem[] = [
  {
    id: "rpo-headhunting",
    title: "7 Proven Ways to Use RPO for Global Headhunting",
    excerpt: "A tactical framework to build high-conversion global hiring pipelines with RPO.",
    date: "Mar 10, 2026",
    category: "RPO",
    readTime: "5 min Read",
    image: `${SS}/2025/05/How-to-use-RPO-for-global-headhunting.jpg`,
    url: "/resources/blog",
  },
  {
    id: "rpo-enterprise-provider",
    title: "How to Choose the Right Enterprise RPO Provider for High-Volume Hiring",
    excerpt: "Selection checkpoints, SLA expectations, and governance controls for enterprise RPO.",
    date: "Feb 24, 2026",
    category: "RPO",
    readTime: "5 min Read",
    image: `${SS}/2026/02/How-to-Choose-the-Right-Enterprise-RPO-Provider-for-High-Volume-Hiring.png`,
    url: "/resources/blog",
  },
  {
    id: "rpo-slas",
    title: "SLAs to Expect From an RPO Provider: What Businesses Should Look For",
    excerpt: "From speed-to-hire to quality-of-hire, metrics that make RPO outcomes measurable.",
    date: "Feb 19, 2026",
    category: "RPO",
    readTime: "6 min Read",
    image: `${SS}/2026/02/SLAs-to-Expect-From-an-RPO-Provider.png`,
    url: "/resources/blog",
  },
  {
    id: "rpo-project-based",
    title: "What is Project-Based RPO: A Complete Guide",
    excerpt: "When project-based RPO is ideal, and how to operationalize it without quality drop.",
    date: "Feb 17, 2026",
    category: "RPO",
    readTime: "3 min Read",
    image: `${SS}/2025/04/What-is-Project-Based-RPO.jpg`,
    url: "/resources/blog",
  },
  {
    id: "rpo-acceptance-rates",
    title: "7 Ways Structured RPO Hiring Boosts Offer Acceptance Rates",
    excerpt: "Offer acceptance levers that structured RPO programs consistently improve.",
    date: "Feb 17, 2026",
    category: "RPO",
    readTime: "6 min Read",
    image: `${SS}/2025/04/How-structured-RPO-hiring-improves-offer-acceptance-rates.jpg`,
    url: "/resources/blog",
  },
  {
    id: "rpo-trends",
    title: "Top 10 RPO Trends in 2025: Why More Businesses Are Making a Shift",
    excerpt: "A concise snapshot of the delivery, tech, and market shifts driving modern RPO.",
    date: "Feb 17, 2026",
    category: "RPO",
    readTime: "6 min Read",
    image: `${SS}/2025/02/Top-10-RPO-Trends-in-2025_-Why-More-Businesses-Are-Making-a-Shift_.png`,
    url: "/resources/blog",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("GCC");
  const INITIAL_VISIBLE_POSTS = 6;
  const LOAD_MORE_BATCH = 3;
  const [visibleCategoryPosts, setVisibleCategoryPosts] = useState(INITIAL_VISIBLE_POSTS);
  const featuredBlog = gccBlogs[0];
  const categoryTabs: BlogCategory[] = ["GCC", "RPO", "Staffing"];
  const categoryMap: Record<BlogCategory, BlogItem[]> = {
    GCC: gccBlogs,
    RPO: rpoBlogs,
    Staffing: blogs,
  };
  const activeCategoryBlogs = categoryMap[activeCategory];
  const displayedCategoryBlogs = activeCategoryBlogs.slice(0, visibleCategoryPosts);
  const hasMoreCategoryBlogs = visibleCategoryPosts < activeCategoryBlogs.length;
  const author = {
    name: "Mayank Pratap Singh",
    role: "Co-founder & CEO of Supersourcing",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  };

  /** Safe zone + contain so PNG/SVG art is not cropped (Supersourcing-style). */
  const cardImageFrameClass =
    "relative aspect-[3/2] w-full overflow-hidden rounded-[16px] border border-[#bcd4eb] bg-[#e6f0ff] p-0 shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-transform duration-500 group-hover:scale-[1.01] sm:rounded-[22px] dark:border-white/12 dark:bg-[#152030] dark:shadow-[0_8px_28px_rgba(0,0,0,0.35)]";

  return (
    <section
      className={cn(
        roboto.className,
        penNewsBodyLike,
        "relative min-h-screen bg-[#eee] text-[14px] leading-[1.5] text-[#666] [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] dark:bg-zinc-950 dark:text-zinc-300",
      )}
    >
      <div className="bg-[#f4f7fa] pt-12 dark:border-b dark:border-white/[0.06] dark:bg-[#0b1220] sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14"
          >
            <Link
              href={featuredBlog.url}
              className="contents min-w-0 cursor-pointer no-underline outline-offset-2 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#285ff5] group"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[16px] border border-[#bcd4eb] bg-[#e6f0ff] p-0 shadow-[0_10px_36px_rgba(15,23,42,0.07)] dark:border-white/12 dark:bg-[#152030] dark:shadow-[0_10px_36px_rgba(0,0,0,0.35)] sm:rounded-[22px]">
                <div className={blogArtInsetClass}>
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className={cn(
                      penNewsImgDisplayBlock,
                      "h-full w-full object-contain object-center transition-opacity duration-300 group-hover:opacity-95",
                    )}
                    priority
                  />
                </div>
              </div>
              <div className="max-w-[600px] min-w-0 px-0 sm:pl-1 lg:pr-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#285ff5] dark:text-[#6b9aff] sm:text-[11px] sm:tracking-[0.16em]">
                  {featuredBlog.category}
                </p>
                <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.1] tracking-[-0.035em] text-[#1d2434] dark:text-white sm:text-[2.05rem] sm:leading-[1.08] sm:tracking-[-0.04em] lg:text-[2.65rem] lg:leading-[1.06]">
                  {featuredBlog.title}
                </h1>
                <div className="mt-8 flex items-center gap-3.5 sm:mt-9">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={52}
                    height={52}
                    className={cn(
                      penNewsImgDisplayBlock,
                      "h-[52px] w-[52px] shrink-0 rounded-full object-cover ring-1 ring-black/[0.06] dark:ring-white/15",
                    )}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug tracking-tight text-[#1d2434] dark:text-white">
                      {author.name}
                    </p>
                    <p className="mt-0.5 text-sm font-normal leading-[1.5] text-[#666] dark:text-zinc-400">
                      {author.role}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-14 lg:px-8">
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#1d2434] dark:text-white sm:text-[2.25rem] lg:text-[2.5rem]">
              The Latest Blogs
            </h3>
          </div>
          <Link
            href="/resources/blog"
            className="shrink-0 text-sm font-semibold tracking-[0.02em] text-[#285ff5] transition-colors hover:text-[#3f51b5] dark:text-[#6b9aff] dark:hover:text-[#8fb2ff]"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-full"
            >
              <Link
                href={blog.url}
                className="group flex h-full flex-col rounded-2xl border border-transparent bg-card p-1 transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/90 dark:hover:border-white/[0.14]"
              >
                <div className={cardImageFrameClass}>
                  <div className={blogArtInsetClass}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={cn(penNewsImgDisplayBlock, "h-full w-full object-contain object-center")}
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#285ff5] dark:text-[#6b9aff]">
                      {blog.category}
                    </span>
                    <span className="text-[13px] font-medium leading-normal tracking-[0.01em] text-[#666] dark:text-zinc-400">
                      {blog.readTime}
                    </span>
                  </div>
                  <h4 className="text-[1.375rem] font-bold leading-[1.18] tracking-[-0.03em] text-[#1d2434] transition-colors group-hover:text-[#285ff5] sm:text-[1.5rem] sm:leading-[1.14] dark:text-zinc-50 dark:group-hover:text-[#6b9aff]">
                    {blog.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-sm font-normal leading-[1.5] text-[#666] dark:text-zinc-400">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2.5 border-t border-black/[0.06] pt-4 dark:border-white/10">
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={28}
                      height={28}
                      className={cn(
                        penNewsImgDisplayBlock,
                        "h-7 w-7 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/15",
                      )}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold leading-snug tracking-tight text-[#1d2434] dark:text-zinc-100">
                        {author.name}
                      </p>
                      <p className="truncate text-[13px] font-normal leading-[1.45] tracking-[0.01em] text-[#666] dark:text-zinc-400">
                        {author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-[24px] px-8 py-10 shadow-sm ring-1 ring-black/5 dark:ring-white/10 sm:px-12 sm:py-12"
          style={{ backgroundColor: CTA_ORANGE }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h4 className="text-[1.625rem] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[2rem] sm:tracking-[-0.03em]">
                Hire trusted, pre-vetted developers that fit your needs
              </h4>
              <p className="mt-3 text-sm font-normal leading-[1.5] text-white/90">
                Get senior tech talent for full-time, contract, and managed roles with fast turnaround.
              </p>
            </div>
            <Link
              href="/resources/free-consultation"
              className="inline-flex shrink-0 items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold leading-normal tracking-[0.02em] text-white shadow-md transition-opacity hover:opacity-95"
              style={{ backgroundColor: ACCENT }}
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="mx-auto mb-7 flex w-fit items-center gap-8 border-b border-black/[0.08] px-2 dark:border-white/10">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveCategory(tab);
                  setVisibleCategoryPosts(INITIAL_VISIBLE_POSTS);
                }}
                className={`border-b-2 pb-2 text-xl font-semibold tracking-[-0.02em] transition-colors sm:text-[1.5rem] sm:tracking-[-0.025em] ${
                  activeCategory === tab
                    ? "border-[#285ff5] text-[#1d2434] dark:text-white"
                    : "border-transparent text-muted-foreground hover:text-foreground dark:text-zinc-500 dark:hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {displayedCategoryBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
                className="h-full"
              >
                <Link
                  href={blog.url}
                  className="group flex h-full flex-col rounded-2xl border border-transparent bg-card p-1 transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/90 dark:hover:border-white/[0.14]"
                >
                  <div className={cardImageFrameClass}>
                    <div className={blogArtInsetClass}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className={cn(penNewsImgDisplayBlock, "h-full w-full object-contain object-center")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#285ff5] dark:text-[#6b9aff]">
                        {blog.category}
                      </span>
                      <span className="text-[13px] font-medium leading-normal tracking-[0.01em] text-[#666] dark:text-zinc-400">
                        {blog.readTime}
                      </span>
                    </div>
                    <h4 className="text-[1.375rem] font-bold leading-[1.18] tracking-[-0.03em] text-[#1d2434] transition-colors group-hover:text-[#285ff5] sm:text-[1.5rem] sm:leading-[1.14] dark:text-zinc-50 dark:group-hover:text-[#6b9aff]">
                      {blog.title}
                    </h4>
                    <div className="mt-4 flex items-center gap-2.5 border-t border-black/[0.06] pt-4 dark:border-white/10">
                      <Image
                        src={author.image}
                        alt={author.name}
                        width={30}
                        height={30}
                        className={cn(
                          penNewsImgDisplayBlock,
                          "h-8 w-8 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/15",
                        )}
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold leading-snug tracking-tight text-[#1d2434] dark:text-zinc-100">
                          {author.name}
                        </p>
                        <p className="truncate text-[13px] font-normal leading-[1.45] tracking-[0.01em] text-[#666] dark:text-zinc-400">
                          {author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {hasMoreCategoryBlogs && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setVisibleCategoryPosts((prev) => prev + LOAD_MORE_BATCH);
                }}
                className="inline-flex items-center gap-2 rounded-lg px-9 py-3.5 text-sm font-bold uppercase leading-normal tracking-[0.08em] text-white transition-opacity hover:opacity-95"
                style={{ backgroundColor: ACCENT }}
              >
                Load more posts
                <RotateCw className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
