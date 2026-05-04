"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Cake,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gift,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Music,
  PartyPopper,
  Plane,
  Rocket,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Trophy,
  UserPlus,
} from "lucide-react";

import { Marquee } from "@/components/ui/marquee";

/* ═══════ TYPES & DATA ═══════
 * Drop real photos into `public/assets/life/<year>/<slug>.jpg`
 * and set each string in `collageSrcs` (5 slots, Codiant-style mosaics) when ready. Empty strings
 * keep gradient placeholders.
 * Hero running strip (codiant.com/life-at-codiant): left column = 2 stacked;
 * middle & right = full-height portraits — URLs in `cultureHeroGallery`.
 * ═══════ */

type YearKey = "2026" | "2025" | "2024" | "2023" | "2022" | "2021" | "2020" | "2019" | "2018";

type CultureEvent = {
  id: string;
  title: string;
  excerpt: string;
  collageSrcs: [string, string, string, string, string];
};

const YEARS: YearKey[] = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const MOMENTS_PAGE_SIZE = 3;

const emptyCollage = (): [string, string, string, string, string] => ["", "", "", "", ""];

const eventsByYear: Record<YearKey, CultureEvent[]> = {
  "2026": [
    {
      id: "26-republic",
      title: "Republic Day Celebration",
      excerpt:
        "We kicked off the year with pride, colour, and quiet gratitude — a morning where the office felt less like desks and more like one shared heartbeat. Flags, stories, and chai set the tone for the months ahead.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "26-holi",
      title: "Holi @ Cloud Nexus",
      excerpt:
        "Colour in the air, laughter on every floor, and zero pretence. Holi here is permission to be playful, messy, and human together — before we ship the next big thing.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "26-hackathon",
      title: "Annual Hackathon",
      excerpt:
        "Two days of caffeine, whiteboards, and midnight demos. Teams chase wild ideas with full support — because experimentation is not a side quest; it is how we learn faster than the market moves.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "26-retreat",
      title: "Team Retreat",
      excerpt:
        "Road-trip energy, slower conversations, and bonds that Slack threads cannot build. We step away to return sharper — with trust that makes the next sprint feel lighter.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "26-diwali",
      title: "Diwali Spark",
      excerpt:
        "Lights, sweets, rangoli corners, and the warmth of people who show up for each other. Diwali at Cloud Nexus is family energy in a professional home — gratitude first, deliverables second (just for a day).",
      collageSrcs: emptyCollage(),
    },
    {
      id: "26-christmas",
      title: "Christmas & Secret Santa",
      excerpt:
        "Twinkling corners, surprise gifts, and inside jokes that will survive every sprint retro. We end the year remembering the product is important — but the people are the point.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2025": [
    {
      id: "25-diwali",
      title: "Diwali Celebration 2025",
      excerpt:
        "The office turned into a festival of colour and sound — tambola cheers, traditional fits, and that unmistakable Cloud Nexus buzz when everyone forgets their titles for a few hours and just celebrates as one crew.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "25-ganesh",
      title: "Ganesh Chaturthi",
      excerpt:
        "Prayers, prasad, music, and a shared pause to honour roots. A reminder that culture is not something we schedule — it is something we live, respectfully and joyfully, together.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "25-womens",
      title: "Women's Day 2025",
      excerpt:
        "A day built for appreciation, not performance. Games, surprises, and honest conversations about growth — because when women rise here, the whole team levels up with them.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "25-townhall",
      title: "Town Hall & Awards",
      excerpt:
        "Transparency on stage, wins in the spotlight, and hard questions welcomed from every row. We align on the mission and celebrate the humans behind the metrics — no corporate fog.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "25-cricket",
      title: "Cricket League CCL'25",
      excerpt:
        "Friendly fire on the field, loud cheering from the sidelines, and captains who would never trade their engineers for a trophy. The scoreboard resets — the friendships do not.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "25-year-end",
      title: "Year-End Bash",
      excerpt:
        "Music, food, inside jokes, and a shared exhale after a year of shipping. We toast to resilience, to learning curves, and to the people who carried each other through tight deadlines.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2024": [
    {
      id: "24-gala",
      title: "Annual Gala Night",
      excerpt:
        "Glitz without the gimmick — performances, awards, and speeches that actually mean something. The night we remember why we chose this tribe: craft, kindness, and ambition in the same room.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "24-hackathon",
      title: "Build Sprint Hackathon",
      excerpt:
        "Forty-eight hours of prototypes, mentors on call, and demos that surprised even the builders. Some ideas ship later — all of them teach us something the same day.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "24-diwali",
      title: "Diwali Celebration 2024",
      excerpt:
        "Rangolis, fairy lights, and the kind of laughter that echoes past logging off. We traded screens for sparkles for an evening — and returned with clearer heads.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "24-navratri",
      title: "Navratri / Cultural Night",
      excerpt:
        "Food stalls, dandiya beats, and teams competing with love, not ego. Culture nights here are proof that diversity is not a slide in a deck — it is the soundtrack of our office.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "24-christmas",
      title: "Christmas Celebration 2024",
      excerpt:
        "Secret Santa chaos, carols in the breakout room, and enough sugar to power a sprint. Small rituals, big warmth — the Cloud Nexus way of closing the loop on another year.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2023": [
    {
      id: "23-foundation",
      title: "Foundation Day",
      excerpt:
        "A day to remember where we started — small team, big bets, and the quiet conviction that good people doing good work compounds. Cake, candles, and stories from the early days.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "23-hackathon",
      title: "Inter-Team Hackathon",
      excerpt:
        "First time we ran the format end-to-end with judging and prizes. Some prototypes from this round eventually graduated into client engagements — proving experimentation pays off.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "23-diwali",
      title: "Diwali Celebration 2023",
      excerpt:
        "A vibrant evening of light, laughter, and shared sweets — the year we doubled down on celebrating festivals as one team, no matter where everyone joined from.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "23-gala",
      title: "Annual Gala",
      excerpt:
        "Recognition for craft, performances from unexpected corners of the team, and a dance floor that did not empty until well past midnight. The kind of memory that builds loyalty.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2022": [
    {
      id: "22-gather",
      title: "Team offsite 2022",
      excerpt:
        "We stepped away from screens to reset together — conversations that do not fit in a retro, and trust that pays off when deadlines tighten.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "22-fest",
      title: "Festive season at the office",
      excerpt:
        "Lights, playlists, and the kind of laughter that reminds us the work is serious but the people are warmer.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "22-sports",
      title: "Sports weekend",
      excerpt:
        "Friendly rivalries, loud sidelines, and captains who cheer for every team — because culture wins before the scoreboard does.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2021": [
    {
      id: "21-remote",
      title: "Hybrid reconnect week",
      excerpt:
        "When distributed teams met in one room again, the energy was instant — whiteboards filled faster and silos quietly dissolved.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "21-award",
      title: "Quarterly recognition",
      excerpt:
        "We paused to name the craft behind the commits — small awards, big gratitude, and a culture that remembers to say thank you.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "21-cultural",
      title: "Cultural potluck",
      excerpt:
        "Tables full of stories and recipes — proof that diversity here is not a talking point, it is lunch.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2020": [
    {
      id: "20-wellness",
      title: "Wellness Wednesdays",
      excerpt:
        "Short resets mid-week — stretches, breath, and permission to be human between releases.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "20-learning",
      title: "Internal learning day",
      excerpt:
        "Lightning talks, demos, and curiosity on display — a day where every desk became a classroom.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "20-year-end",
      title: "Year-end gratitude circle",
      excerpt:
        "We closed a tough year by naming what carried us — patience, humour, and each other.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2019": [
    {
      id: "19-onboard",
      title: "Welcome cohort lunch",
      excerpt:
        "New joiners met mentors over food — first-week nerves turned into first-week names.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "19-hack",
      title: "Innovation afternoon",
      excerpt:
        "Half a day to chase impractical ideas — some became practical later, all made us braver.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "19-celebration",
      title: "Milestone celebration",
      excerpt:
        "We marked a client win the right way: together, with cake, and with credit shared across teams.",
      collageSrcs: emptyCollage(),
    },
  ],
  "2018": [
    {
      id: "18-kickoff",
      title: "Founding-season memories",
      excerpt:
        "Smaller rooms, louder dreams — the early chapter when every launch felt like a family project.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "18-first",
      title: "First all-hands",
      excerpt:
        "One microphone, many questions — the day we set the tone for transparency we still protect today.",
      collageSrcs: emptyCollage(),
    },
    {
      id: "18-outing",
      title: "First team outing",
      excerpt:
        "Proof that the culture we wanted was not going to be built only from desks.",
      collageSrcs: emptyCollage(),
    },
  ],
};

const purposeValues = [
  {
    Icon: Globe,
    title: "Diversity",
    description:
      "We wholeheartedly welcome people at Cloud Nexus from diverse cultures, without discriminating on the basis of gender, race, religion, colour, age, ability, region, or orientation. Different experiences sharpen our products and our empathy — we hire for craft and character, and we protect psychological safety so every voice can speak without performing.",
  },
  {
    Icon: Scale,
    title: "Equity",
    description:
      "Our purpose is to be unbiased, impartial, and equitable toward clients and teammates alike. We aim for transparent expectations, fair processes, and outcomes people can trust — from how we scope work to how we review performance. Equity is not a slogan here; it is how we allocate attention, opportunity, and credit.",
  },
  {
    Icon: ShieldCheck,
    title: "Integrity",
    description:
      "We work with honesty, clarity, and accountability. Trust is built in small moments — timelines kept, credit shared, hard truths spoken kindly, and ownership taken when things miss. At Cloud Nexus, integrity is the default setting for how we ship, how we negotiate, and how we treat one another.",
  },
  {
    Icon: Handshake,
    title: "Inclusion",
    description:
      "Being inclusive is our operating principle: every view matters. We involve people in decisions that affect them, listen actively, and design rituals so nobody feels like a spectator in their own workplace. Inclusion is how we turn diversity from a metric into momentum.",
  },
  {
    Icon: Trophy,
    title: "Meritocracy",
    description:
      "We foster a meritocratic culture — recruiting, rewarding, promoting, and training in ways that let ideas win on merit, not noise. We sponsor growth paths that are visible and fair, because innovation needs a runway where effort and outcomes are recognised, not politics.",
  },
];

const diversityAtCloudNexus = [
  "Cloud Nexus is a company that appreciates diversity. We believe that besides employing the best talent, the range of perspectives, ideas, and cultures leads to better outcomes for clients and teams alike.",
  "We are dedicated to connecting the right person with the right opportunity at the right time — in an inclusive climate for candidates, clients, and employees.",
  "Our objective is to attract and retain the best qualified people without discrimination on the basis of place of birth, race, colour, religion, gender, sexual orientation, age, or ability.",
  "Recognising diversity as a business advantage, we maintain workplace policies and programmes that foster inclusion, access to opportunity, and sustainable work-life balance.",
  "This non-discrimination policy applies to applicants and employees and covers recruiting, hiring, transfer, performance review, and compensation. Harassment or discrimination based on any of the above factors is not tolerated.",
];

const joinPerks = [
  { Icon: CalendarDays, title: "5 Days a Week", text: "A sustainable rhythm with space to recover and do deep work." },
  { Icon: Cake, title: "Birthday Leave", text: "Take your day — celebrate life outside the calendar invites." },
  { Icon: PartyPopper, title: "Fun Connect", text: "Game nights, celebrations, and micro-moments that keep morale real." },
  { Icon: Gift, title: "Rewards & Benefits", text: "Recognition that matches effort — not just annual paperwork." },
  { Icon: GraduationCap, title: "Training Sessions", text: "Workshops, mentorship, and room to sharpen craft continuously." },
  { Icon: Plane, title: "Business Trips", text: "Travel when client work needs it — with clarity and support." },
  { Icon: HeartPulse, title: "Medical Insurance", text: "Health coverage that lets people focus on building, not worrying." },
  { Icon: Award, title: "Certifications", text: "Support for courses and certs that level up your career." },
  { Icon: Sparkles, title: "Personality Development", text: "Communication, leadership, and presence — growth beyond the IDE." },
  { Icon: UserPlus, title: "Referral Program", text: "Bring great people in — and share the upside when they thrive." },
  { Icon: Smile, title: "Positive Environment", text: "Respect by default, feedback with care, and energy that compounds." },
  { Icon: Music, title: "Cultural Programs", text: "Festivals, traditions, and team rituals that honour who we are." },
];

const everydayPerks = [
  {
    num: "01",
    title: "Work Life Balance",
    text: "We protect focus time, respect boundaries, and celebrate output over performative hours.",
    Icon: CalendarDays,
  },
  {
    num: "02",
    title: "Healthy Environment",
    text: "Psychological safety, open dialogue, and managers who listen — not just allocate tasks.",
    Icon: HeartPulse,
  },
  {
    num: "03",
    title: "Fun Activities",
    text: "Weekly and monthly touchpoints that remind us we are humans first, engineers second.",
    Icon: PartyPopper,
  },
  {
    num: "04",
    title: "Scope of Growth",
    text: "Stretch projects, internal mobility, and leaders who sponsor your next leap — not gatekeep it.",
    Icon: Rocket,
  },
  {
    num: "05",
    title: "Innovative & Interactive Workplace",
    text: "Modern tooling, async-friendly rituals, and a culture where asking why is always welcome.",
    Icon: Sparkles,
  },
];

/** Light placeholder / image cell for Codiant-style moment mosaics (white section). */
function MomentCollageCell({ src, alt }: { src: string; alt: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/mosaic:scale-[1.03]"
      />
    );
  }
  return (
    <div className="relative flex h-full min-h-[44px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-200/90 via-neutral-100 to-neutral-200/80 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(78,179,232,0.12),transparent_55%)]" />
      <Camera className="relative z-10 h-5 w-5 text-neutral-400 dark:text-zinc-500" strokeWidth={1.25} aria-hidden />
    </div>
  );
}

type MomentCollagePattern = "a" | "b";

const mosaicCell =
  "group/mosaic relative min-h-0 overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:bg-zinc-900 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]";

/**
 * codiant.com/life-at-codiant moment cards: 5 photos, thin gutters, alternating mosaics.
 * Pattern A: three tiles top row, two wide bottom. Pattern B: two wide top, three tiles bottom.
 */
function CodiantMomentCollage({
  srcs,
  title,
  pattern,
}: {
  srcs: [string, string, string, string, string];
  title: string;
  pattern: MomentCollagePattern;
}) {
  const [s0, s1, s2, s3, s4] = srcs;

  if (pattern === "a") {
    return (
      <div className="grid aspect-[5/3] w-full grid-cols-6 grid-rows-2 gap-1 bg-white p-[3px] sm:aspect-[16/10] dark:bg-zinc-950">
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s0} alt={`${title} — photo 1`} />
        </div>
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s1} alt={`${title} — photo 2`} />
        </div>
        <div className={`col-span-2 ${mosaicCell}`}>
          <MomentCollageCell src={s2} alt={`${title} — photo 3`} />
        </div>
        <div className={`col-span-3 row-start-2 ${mosaicCell}`}>
          <MomentCollageCell src={s3} alt={`${title} — photo 4`} />
        </div>
        <div className={`col-span-3 row-start-2 ${mosaicCell}`}>
          <MomentCollageCell src={s4} alt={`${title} — photo 5`} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid aspect-[5/3] w-full grid-cols-6 grid-rows-2 gap-1 bg-white p-[3px] sm:aspect-[16/10] dark:bg-zinc-950">
      <div className={`col-span-3 ${mosaicCell}`}>
        <MomentCollageCell src={s0} alt={`${title} — photo 1`} />
      </div>
      <div className={`col-span-3 ${mosaicCell}`}>
        <MomentCollageCell src={s1} alt={`${title} — photo 2`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s2} alt={`${title} — photo 3`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s3} alt={`${title} — photo 4`} />
      </div>
      <div className={`col-span-2 row-start-2 ${mosaicCell}`}>
        <MomentCollageCell src={s4} alt={`${title} — photo 5`} />
      </div>
    </div>
  );
}

/**
 * codiant.com/life-at-codiant strip: col1 = two stacked landscapes, col2–3 = tall portraits.
 * All gutters use the same spacing as the page (`gap-5` = 20px).
 */
const cultureHeroGallery = {
  leftStack: ["", ""] as [string, string],
  pillarMid: "",
  pillarRight: "",
};

function CultureHeroGalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative min-h-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#f4f4f5] via-[#ececef] to-[#e4e4e7] shadow-sm ring-1 ring-black/[0.04] transition duration-500 hover:shadow-xl hover:shadow-[#4EB3E8]/12 hover:ring-[#4EB3E8]/25 dark:from-[#18181b] dark:via-[#27272a] dark:to-[#18181b] dark:ring-white/[0.06] dark:hover:shadow-[#4EB3E8]/20 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(78,179,232,0.14),transparent_55%)] opacity-80 transition duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] opacity-0 transition duration-700 group-hover:opacity-100 dark:bg-[linear-gradient(110deg,transparent_40%,rgba(78,179,232,0.08)_50%,transparent_60%)]" />
          <div className="flex h-full min-h-[120px] w-full items-center justify-center">
            <Camera
              className="h-8 w-8 text-[#4EB3E8]/35 transition duration-500 group-hover:scale-110 group-hover:text-[#4EB3E8]/55"
              strokeWidth={1.25}
              aria-hidden
            />
          </div>
        </>
      )}
    </div>
  );
}

/** One repeating panel: Codiant 3-column strip (2-stack + portrait + portrait). */
function CodiantRunningGalleryBlock({ blockId }: { blockId: string }) {
  const { leftStack, pillarMid, pillarRight } = cultureHeroGallery;
  const [top, bottom] = leftStack;
  return (
    <div className="grid h-[clamp(320px,46vh,580px)] w-[min(92vw,1040px)] shrink-0 grid-cols-3 grid-rows-2 gap-5">
      <CultureHeroGalleryImage
        src={top}
        alt={`Cloud Nexus culture — ${blockId} left top`}
        className="col-start-1 row-start-1 h-full min-h-[120px] md:min-h-0"
      />
      <CultureHeroGalleryImage
        src={bottom}
        alt={`Cloud Nexus culture — ${blockId} left bottom`}
        className="col-start-1 row-start-2 h-full min-h-[120px] md:min-h-0"
      />
      <CultureHeroGalleryImage
        src={pillarMid}
        alt={`Cloud Nexus culture — ${blockId} center`}
        className="col-start-2 row-span-2 row-start-1 h-full min-h-[200px] md:min-h-0"
      />
      <CultureHeroGalleryImage
        src={pillarRight}
        alt={`Cloud Nexus culture — ${blockId} right`}
        className="col-start-3 row-span-2 row-start-1 h-full min-h-[200px] md:min-h-0"
      />
    </div>
  );
}

function CultureHeroGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden border-y border-black/[0.06] bg-gradient-to-b from-white via-zinc-50/80 to-white dark:border-[#1e1e1e] dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950"
      aria-label="Culture highlights"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(78,179,232,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(78,179,232,0.08),transparent)]"
      />

      {/* Desktop+: infinite horizontal band (Codiant-style). */}
      <div className="relative hidden py-8 md:block md:py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 md:w-20" />
        {prefersReducedMotion ? (
          <div className="flex gap-5 overflow-x-auto px-4 pb-1 sm:px-6 md:px-10">
            <CodiantRunningGalleryBlock blockId="static-a" />
            <CodiantRunningGalleryBlock blockId="static-b" />
          </div>
        ) : (
          <div className="overflow-hidden">
            <Marquee className="box-border !p-0 [--duration:52s] [--gap:1.25rem]" pauseOnHover repeat={4}>
              <CodiantRunningGalleryBlock blockId="run" />
            </Marquee>
          </div>
        )}
      </div>

      {/* Small screens: same panel repeated, swipe to explore (marquee motion reduced on tiny viewports). */}
      <div className="relative py-6 md:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />
        {prefersReducedMotion ? (
          <div className="flex gap-5 overflow-x-auto px-4 pb-1">
            <CodiantRunningGalleryBlock blockId="m-a" />
            <CodiantRunningGalleryBlock blockId="m-b" />
          </div>
        ) : (
          <div className="overflow-hidden">
            <Marquee className="box-border !p-0 [--duration:42s] [--gap:1.25rem]" pauseOnHover repeat={3}>
              <CodiantRunningGalleryBlock blockId="mob" />
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
}

export default function LifeAtCloudNexusPage() {
  const [year, setYear] = useState<YearKey>("2026");
  const [momentPage, setMomentPage] = useState(0);
  const [purposeIndex, setPurposeIndex] = useState(0);

  const yearEvents = eventsByYear[year];
  const momentPageCount = Math.max(1, Math.ceil(yearEvents.length / MOMENTS_PAGE_SIZE));

  useEffect(() => {
    setMomentPage((p) => Math.min(p, momentPageCount - 1));
  }, [year, momentPageCount]);

  const momentPageSafe = Math.min(momentPage, momentPageCount - 1);
  const pagedEvents = yearEvents.slice(
    momentPageSafe * MOMENTS_PAGE_SIZE,
    momentPageSafe * MOMENTS_PAGE_SIZE + MOMENTS_PAGE_SIZE
  );

  return (
    <section className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white">
      {/* Hero — layered light, brand gradient headline, premium CTA */}
      <div className="relative w-full overflow-hidden px-6 pt-24 pb-12 md:px-8 md:pb-16">
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-[28%]"
          style={{ background: "radial-gradient(circle, rgba(78,179,232,0.14) 0%, transparent 68%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[min(100%,720px)] -translate-x-1/2 translate-y-1/2 opacity-40 dark:opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(78,179,232,0.2) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%234EB3E8' stroke-opacity='0.07'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4EB3E8]/25 bg-[#4EB3E8]/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a5f7c] shadow-sm shadow-[#4EB3E8]/10 backdrop-blur-sm dark:border-[#4EB3E8]/30 dark:bg-[#4EB3E8]/10 dark:text-[#a8e6ff] sm:text-xs md:tracking-[0.28em]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4EB3E8] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4EB3E8]" />
              </span>
              One team · one dream
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            <span className="text-neutral-900 dark:text-white">Life @ </span>
            <span className="bg-gradient-to-r from-[#2d8ec4] via-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent dark:from-[#6bc9ef] dark:via-[#4EB3E8] dark:to-[#a8e6ff]">
              Cloud Nexus
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="max-w-2xl text-base font-medium leading-relaxed text-black/55 md:text-lg dark:text-white/65"
          >
            Cloud Nexus is another home for our people — showcasing diverse experiences that represent a mix of
            talents, who shine inclusively in every colour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href="/resources/career"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#3da9dc] via-[#4EB3E8] to-[#5ec4f0] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#4EB3E8]/35 ring-2 ring-white/20 transition-all hover:shadow-xl hover:shadow-[#4EB3E8]/45 hover:brightness-[1.03] dark:ring-white/10"
            >
              Find your dream job
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <CultureHeroGallery />

      {/* Moments — codiant.com/life-at-codiant: light cards, 5-photo mosaics, year bar, outlined CTA */}
      <div className="relative w-full bg-white px-6 pt-12 pb-16 md:px-8 md:pt-16 md:pb-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-4 inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 dark:border-white/10 dark:bg-zinc-900"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4EB3E8]" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-zinc-400">
                  Our moments
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl md:leading-tight dark:text-white"
              >
                Celebrating The Melody of{" "}
                <span className="bg-gradient-to-r from-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent">Moments</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-[15px] font-normal leading-relaxed text-neutral-600 lg:text-right lg:text-[16px] dark:text-zinc-400"
            >
              Laughter and joyful chatter echoed with the melody of music. See how we&apos;re building success
              together, one team, one dream at Cloud Nexus.
            </motion.p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {YEARS.map((y) => {
              const active = year === y;
              return (
                <button
                  key={y}
                  type="button"
                  onClick={() => {
                    setYear(y);
                    setMomentPage(0);
                  }}
                  className={`relative rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
                    active
                      ? "border-transparent text-white shadow-md"
                      : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-white/20"
                  }`}
                >
                  <span className="relative z-10">{y}</span>
                  {active && (
                    <motion.span
                      layoutId="year-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3da9dc] to-[#4EB3E8] shadow-[0_4px_20px_rgba(78,179,232,0.35)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-10 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${year}-${momentPageSafe}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              >
                {pagedEvents.map((ev, index) => {
                  const pattern: MomentCollagePattern = index % 2 === 0 ? "a" : "b";
                  return (
                    <motion.article
                      key={ev.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 + index * 0.05 }}
                      className="group/card flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4EB3E8]/35 hover:shadow-[0_12px_40px_-8px_rgba(78,179,232,0.2)] dark:border-white/10 dark:bg-zinc-900 dark:shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
                    >
                      <div className="relative">
                        <div className="absolute right-2 top-2 z-20 rounded-md border border-neutral-200/90 bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/90 dark:text-zinc-100">
                          {year}
                        </div>
                        <CodiantMomentCollage srcs={ev.collageSrcs} title={ev.title} pattern={pattern} />
                      </div>
                      <div className="flex flex-1 flex-col p-5 pt-5">
                        <h3 className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg dark:text-white">
                          {ev.title}
                        </h3>
                        <p className="mt-2 line-clamp-4 flex-1 text-[13px] font-normal leading-relaxed text-neutral-600 sm:text-[14px] dark:text-zinc-400">
                          {ev.excerpt}
                        </p>
                        <a
                          href="#"
                          className="mt-5 inline-flex w-fit items-center rounded-md border border-[#4EB3E8] bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4EB3E8] transition-colors hover:bg-[#4EB3E8]/8 dark:hover:bg-[#4EB3E8]/15"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          View all photos
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {momentPageCount > 1 && (
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous page"
                  disabled={momentPageSafe <= 0}
                  onClick={() => setMomentPage((p) => Math.max(0, p - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:border-[#4EB3E8] hover:text-[#4EB3E8] disabled:pointer-events-none disabled:opacity-40 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-[#4EB3E8]"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={momentPageSafe >= momentPageCount - 1}
                  onClick={() => setMomentPage((p) => Math.min(momentPageCount - 1, p + 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4EB3E8] bg-[#4EB3E8] text-white shadow-md shadow-[#4EB3E8]/25 transition hover:bg-[#3ca6df] disabled:pointer-events-none disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none dark:disabled:border-white/10 dark:disabled:bg-zinc-800"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {Array.from({ length: momentPageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to page ${i + 1}`}
                    aria-current={i === momentPageSafe ? "page" : undefined}
                    onClick={() => setMomentPage(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === momentPageSafe ? "w-6 bg-[#4EB3E8]" : "w-2 bg-neutral-300 hover:bg-[#4EB3E8]/50 dark:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Driven by Purpose — codiant-style: labels above timeline, rich mesh + constellation bg */}
      <div className="relative w-full overflow-hidden border-y border-white/10 text-white">
        {/* Base depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#07040f_0%,#1a0a28_28%,#12081c_55%,#08051a_100%)]"
        />
        {/* Magenta / violet / cyan mesh (Codiant energy) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 70% at 10% -10%, rgba(192,38,211,0.45), transparent 52%), radial-gradient(ellipse 80% 60% at 95% 15%, rgba(236,72,153,0.28), transparent 48%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(78,179,232,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(88,28,135,0.35), transparent 50%)",
          }}
        />
        {/* Low-poly triangle field */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath fill='%23ffffff' d='M24 0l24 41.57H0z'/%3E%3C/svg%3E")`,
            backgroundSize: "48px 42px",
          }}
        />
        {/* Right: subtle network / constellation */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[8%] top-0 h-[min(100%,900px)] w-[min(55vw,520px)] opacity-[0.22] md:opacity-[0.28]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' fill='none'%3E%3Cpath stroke='white' stroke-opacity='0.35' stroke-width='0.75' d='M40 120 L120 80 L200 140 L280 60 L340 160 M120 80 L160 200 M200 140 L240 260 M280 60 L320 180 M40 120 L100 240 M160 200 L240 260 M320 180 L360 280'/%3E%3Ccircle cx='40' cy='120' r='2.5' fill='white' fill-opacity='0.5'/%3E%3Ccircle cx='120' cy='80' r='2' fill='white' fill-opacity='0.45'/%3E%3Ccircle cx='200' cy='140' r='2' fill='white' fill-opacity='0.4'/%3E%3Ccircle cx='280' cy='60' r='2' fill='white' fill-opacity='0.45'/%3E%3Ccircle cx='340' cy='160' r='2.5' fill='white' fill-opacity='0.5'/%3E%3Ccircle cx='160' cy='200' r='1.8' fill='white' fill-opacity='0.35'/%3E%3Ccircle cx='240' cy='260' r='1.8' fill='white' fill-opacity='0.35'/%3E%3C/svg%3E")`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        {/* Vignette + brand cyan rim */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_50%,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(78,179,232,0.12),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:py-22">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center text-3xl font-bold tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-4xl lg:text-[2.25rem] lg:leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#f5f0ff] to-white/90 bg-clip-text text-transparent">
              Driven by Purpose
            </span>
          </motion.h2>

          <nav
            className="relative mx-auto mt-8 max-w-4xl md:mt-10"
            aria-label="Purpose values"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-[3.1rem] h-px bg-gradient-to-r from-transparent via-white/45 to-transparent sm:left-[7%] sm:right-[7%] sm:top-[3.2rem] md:left-[8%] md:right-[8%] md:top-[3.3rem] lg:top-[3.4rem]"
            />
            <div className="relative flex justify-between gap-0.5 sm:gap-1">
              {purposeValues.map((v, i) => {
                const active = purposeIndex === i;
                return (
                  <button
                    key={v.title}
                    type="button"
                    onClick={() => setPurposeIndex(i)}
                    aria-current={active ? "true" : undefined}
                    className="group/step flex min-w-0 flex-1 flex-col-reverse items-center gap-2.5 pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EB3E8]/70"
                  >
                    <span
                      className={`relative z-10 shrink-0 rounded-full border-2 transition duration-300 ${
                        active
                          ? "h-3.5 w-3.5 scale-100 border-white bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.14),0_0_28px_rgba(78,179,232,0.45)] sm:h-4 sm:w-4"
                          : "h-3 w-3 border-white/45 bg-[#1a0f24]/90 group-hover/step:scale-110 group-hover/step:border-[#4EB3E8]/70 group-hover/step:shadow-[0_0_20px_rgba(78,179,232,0.35)] sm:h-3.5 sm:w-3.5"
                      }`}
                    />
                    <span
                      className={`max-w-[5rem] text-center text-[11px] font-semibold capitalize leading-snug tracking-wide transition duration-300 sm:max-w-[6.5rem] sm:text-xs md:max-w-none md:text-[13px] ${
                        active
                          ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                          : "text-white/50 group-hover/step:text-white/90 group-hover/step:drop-shadow-[0_0_8px_rgba(78,179,232,0.25)]"
                      }`}
                    >
                      {v.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={purposeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-10 md:mt-12"
              role="region"
              aria-live="polite"
              aria-label={purposeValues[purposeIndex].title}
            >
              {(() => {
                const PurposeIcon = purposeValues[purposeIndex].Icon;
                return (
                  <>
                    <motion.div
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                      className="mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-full border border-white/45 bg-gradient-to-b from-white/[0.14] to-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_56px_rgba(78,179,232,0.35),0_0_100px_rgba(168,85,211,0.15)] backdrop-blur-sm md:h-[90px] md:w-[90px]"
                    >
                      <PurposeIcon className="h-9 w-9 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] md:h-10 md:w-10" strokeWidth={1.15} />
                    </motion.div>
                    <p className="mx-auto mt-6 max-w-xl text-center text-[15px] font-normal leading-[1.7] text-white/85 md:mt-8 md:max-w-2xl md:text-[16px] md:leading-[1.68]">
                      {purposeValues[purposeIndex].description}
                    </p>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex justify-center gap-5 md:mt-10 md:gap-7">
            <button
              type="button"
              aria-label="Previous value"
              onClick={() => setPurposeIndex((i) => (i + purposeValues.length - 1) % purposeValues.length)}
              className="group/pnav flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/[0.04] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:scale-105 hover:border-[#4EB3E8]/80 hover:bg-[#4EB3E8]/15 hover:shadow-[0_0_32px_rgba(78,179,232,0.35)] active:scale-95 md:h-[52px] md:w-[52px]"
            >
              <ChevronLeft className="h-5 w-5 transition group-hover/pnav:-translate-x-0.5 md:h-6 md:w-6" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next value"
              onClick={() => setPurposeIndex((i) => (i + 1) % purposeValues.length)}
              className="group/pnav flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/[0.04] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:scale-105 hover:border-[#4EB3E8]/80 hover:bg-[#4EB3E8]/15 hover:shadow-[0_0_32px_rgba(78,179,232,0.35)] active:scale-95 md:h-[52px] md:w-[52px]"
            >
              <ChevronRight className="h-5 w-5 transition group-hover/pnav:translate-x-0.5 md:h-6 md:w-6" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      {/* Why Should You Join — 12 compact tiles */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#4EB3E8]/20 bg-[#4EB3E8]/10 px-3 py-1.5"
          >
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4EB3E8] shadow-[0_0_8px_#4EB3E8]" />
            <span className="text-[13px] font-medium uppercase tracking-wide text-[#4EB3E8]">The perks</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Why Should You Join Cloud Nexus?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]"
          >
            Cloud Nexus is the place where you can learn, explore, and grow your craft and confidence. We weave a
            work culture with empathy, warmth, and care.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {joinPerks.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 + index * 0.04 }}
                className="group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#4EB3E8]/50 hover:bg-zinc-50/95 hover:shadow-xl hover:shadow-[#4EB3E8]/18 focus-within:ring-2 focus-within:ring-[#4EB3E8]/30 dark:bg-[#121212] dark:hover:border-[#4EB3E8]/55 dark:hover:bg-[#18181b] dark:hover:shadow-[#4EB3E8]/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#4EB3E8]/0 via-[#4EB3E8]/0 to-[#4EB3E8]/0 opacity-0 transition duration-500 group-hover:from-[#4EB3E8]/14 group-hover:via-transparent group-hover:to-[#6bc9ef]/12 group-hover:opacity-100"
                />
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-black/[0.03] text-[#4EB3E8] transition-all duration-500 group-hover:scale-110 group-hover:border-[#4EB3E8]/45 group-hover:bg-[#4EB3E8]/12 group-hover:shadow-[0_0_24px_rgba(78,179,232,0.35)] dark:bg-white/[0.04] dark:group-hover:bg-[#4EB3E8]/18 dark:group-hover:shadow-[0_0_28px_rgba(78,179,232,0.28)]">
                  <p.Icon className="h-5 w-5 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="relative z-10 text-sm font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-[#0a5f7c] dark:group-hover:text-[#7dd3fc]">
                  {p.title}
                </h3>
                <p className="relative z-10 text-xs font-medium leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75 dark:group-hover:text-white/70">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Empowering Women */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg shadow-[#4EB3E8]/10 ring-1 ring-[#4EB3E8]/10">
              <div className="relative flex h-[380px] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0a1620] via-[#121212] to-[#161616] md:h-[420px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(78,179,232,0.22),transparent_52%)]" />
                <Camera className="relative z-10 h-14 w-14 text-[#4EB3E8]/35" strokeWidth={1.25} />
                <p className="relative z-10 max-w-xs px-6 text-center text-sm font-medium text-white/40">
                  Replace this block with{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">/assets/life/women-empowerment.jpg</code>
                </p>
              </div>
              <div className="absolute bottom-5 right-5 rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-center backdrop-blur-md">
                <div className="text-2xl font-black text-[#4EB3E8]">40%+</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Women in tech roles
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#4EB3E8]/20 bg-[#4EB3E8]/10 px-3 py-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4EB3E8] shadow-[0_0_8px_#4EB3E8]" />
              <span className="text-[13px] font-medium uppercase tracking-wide text-[#4EB3E8]">Empowerment</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Empowering women is our major goal</h2>
            <p className="mt-5 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
              We invest in leadership visibility, psychological safety, and growth paths so women can thrive in
              engineering, product, and operations — not as an exception, but as the norm.
            </p>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
              From mentorship circles to flexible policies and zero-tolerance for harassment, we design a workplace
              where everyone can bring their full selves to work.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Equal opportunity in hiring and promotions",
                "Leadership sponsorship and mentorship programs",
                "Safe reporting and supportive HR practices",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-[14px] font-medium text-foreground dark:text-[#ededed]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4EB3E8]" strokeWidth={1.5} />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Recruit band */}
      <div className="w-full border-y border-black/[0.05] bg-gradient-to-b from-[#4EB3E8]/[0.07] via-white to-white px-6 py-16 md:px-8 dark:from-[#4EB3E8]/[0.08] dark:via-zinc-950 dark:to-zinc-950 dark:border-white/[0.05]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#4EB3E8]/20 bg-[#4EB3E8]/10 px-3 py-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4EB3E8] shadow-[0_0_8px_#4EB3E8]" />
            <span className="text-[13px] font-medium uppercase tracking-wide text-[#4EB3E8]">Join our tribe</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            We are always in search of enthusiastic people to join us
          </h2>
          <p className="mt-5 text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]">
            At Cloud Nexus, we thrive on the energy of driven individuals. If you&apos;re eager to make a meaningful
            impact and grow alongside a vibrant community, we&apos;d love to have you on board.
          </p>
          <Link
            href="/resources/career"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3da9dc] via-[#4EB3E8] to-[#5ec4f0] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4EB3E8]/35 transition-all hover:shadow-xl hover:brightness-[1.03]"
          >
            Apply now
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Numbered perks 01–05 */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#4EB3E8]/20 bg-[#4EB3E8]/10 px-3 py-1.5"
          >
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4EB3E8] shadow-[0_0_8px_#4EB3E8]" />
            <span className="text-[13px] font-medium uppercase tracking-wide text-[#4EB3E8]">Everyday experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Perks of Being at Cloud Nexus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-black/50 dark:text-[#8b8b8b]"
          >
            Comfort, safety, and flexibility are how we grow together — with a cheerful environment where people do
            their best work.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {everydayPerks.map((p, index) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-[#121212] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#4EB3E8]/45 hover:shadow-xl hover:shadow-[#4EB3E8]/12"
              >
                <span className="pointer-events-none absolute right-4 top-4 text-6xl font-black text-[#4EB3E8]/10 transition-colors duration-500 group-hover:text-[#4EB3E8]/25">
                  {p.num}
                </span>
                <div className="relative z-10 mt-8 flex flex-col gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-[#ededed] transition-colors group-hover:border-[#4EB3E8]/30 group-hover:text-[#4EB3E8]">
                    <p.Icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#ededed]">{p.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Diversity at Cloud Nexus (Codiant-aligned block) */}
      <div className="w-full border-t border-black/[0.06] bg-gradient-to-b from-zinc-50/90 via-white to-white px-6 py-14 md:px-8 md:py-20 dark:border-[#1e1e1e] dark:from-zinc-950 dark:via-black dark:to-black">
        <div className="mx-auto max-w-3xl rounded-3xl border border-black/[0.06] bg-white/80 p-8 shadow-[0_20px_60px_-24px_rgba(78,179,232,0.15)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.5)] md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
            Diversity at{" "}
            <span className="bg-gradient-to-r from-[#4EB3E8] to-[#6bc9ef] bg-clip-text text-transparent">Cloud Nexus</span>
          </h2>
          <ul className="mt-8 space-y-5">
            {diversityAtCloudNexus.map((line, idx) => (
              <li
                key={`diversity-${idx}`}
                className="flex gap-3 text-[15px] font-medium leading-relaxed text-black/75 dark:text-[#b8b8b8]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4EB3E8]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full border-t border-black/[0.06] px-6 py-12 md:px-8 md:py-16 dark:border-[#1e1e1e] dark:border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-gradient-to-br from-black via-black to-zinc-900 ring-1 ring-[#4EB3E8]/15 dark:border-white/[0.08] dark:from-white dark:via-white dark:to-zinc-100 dark:ring-[#4EB3E8]/25"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#4EB3E8]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/2 rounded-full bg-[#4EB3E8]/12 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-2xl dark:bg-[#4EB3E8]/10" />

            <div className="relative px-8 py-12 text-center md:px-14 md:py-16">
              <Rocket className="mx-auto mb-6 h-10 w-10 text-[#4EB3E8]" strokeWidth={1.5} />
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl dark:text-black">
                Ready to be part of
                <br className="hidden sm:block" />
                the story?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-sm font-medium leading-relaxed text-white/50 md:text-base dark:text-black/50">
                Bring your curiosity, your craft, and your kindness. We are building products and a culture worth
                showing up for — every single day.
              </p>
              <Link
                href="/resources/career"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:bg-white/90 dark:bg-black dark:text-white dark:shadow-black/10 dark:hover:bg-black/90"
              >
                Apply now
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <p className="mt-6 text-sm font-medium text-white/45 dark:text-black/45">
                Prefer a conversation first?{" "}
                <Link
                  href="/resources/contact"
                  className="font-semibold text-[#4EB3E8] underline decoration-[#4EB3E8]/40 underline-offset-4 hover:decoration-[#4EB3E8]"
                >
                  Talk to us
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
