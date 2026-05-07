"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Calendar, MapPin, Clock, ArrowRight, Users, Globe,
  Mic2, Trophy, Video, ChevronRight,
  CalendarCheck, Mail, Sparkles, Target, Zap,
} from "lucide-react";

const featuredEvents = [
  {
    tag: "CONFERENCE",
    title: "Cloud Nexus at GITEX Global 2026",
    desc: "Experience how Cloud Nexus transforms businesses with AI-driven solutions, cloud infrastructure, and custom software development at the world's largest tech event in Dubai.",
    date: "Oct 14–18, 2026",
    location: "Dubai World Trade Centre, UAE",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=450&fit=crop&q=80",
    color: "#4EB3E8",
    highlights: ["Live Product Demos", "1-on-1 Consultation", "Keynote Sessions"],
    status: "upcoming",
  },
  {
    tag: "SUMMIT",
    title: "AI & Cloud Innovation Summit 2026",
    desc: "A full-day summit bringing together industry leaders, CTOs, and developers to explore the future of AI, multi-cloud architecture, and scalable SaaS solutions.",
    date: "Aug 22, 2026",
    location: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&h=450&fit=crop&q=80",
    color: "#8b5cf6",
    highlights: ["Expert Panel Discussions", "Networking Lounge", "Startup Showcase"],
    status: "upcoming",
  },
  {
    tag: "EXPO",
    title: "Collision 2026  -  Toronto",
    desc: "Cloud Nexus will be showcasing next-generation digital transformation solutions at North America's fastest-growing tech conference. Meet our team at Booth #4217.",
    date: "Jun 23–26, 2026",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&h=450&fit=crop&q=80",
    color: "#10b981",
    highlights: ["Booth Exhibition", "Tech Talks", "Partnership Opportunities"],
    status: "upcoming",
  },
];

const upcomingEvents = [
  { title: "Webinar: Scaling SaaS with Microservices", date: "May 15, 2026", time: "4:00 PM IST", location: "Virtual", type: "Webinar", icon: Video, color: "#4EB3E8" },
  { title: "DevOps Workshop: CI/CD Mastery", date: "May 25, 2026", time: "2:00 PM IST", location: "Virtual", type: "Workshop", icon: Zap, color: "#8b5cf6" },
  { title: "Cloud Nexus Tech Meetup  -  Delhi NCR", date: "Jun 5, 2026", time: "6:00 PM IST", location: "New Delhi, India", type: "Meetup", icon: Users, color: "#10b981" },
  { title: "Hackathon: Build the Future of FinTech", date: "Jun 14–15, 2026", time: "9:00 AM IST", location: "Virtual", type: "Hackathon", icon: Trophy, color: "#f59e0b" },
  { title: "AI in Healthcare  -  Panel Discussion", date: "Jul 3, 2026", time: "3:00 PM IST", location: "Virtual", type: "Panel", icon: Mic2, color: "#ef4444" },
  { title: "Cloud Architecture Masterclass", date: "Jul 18, 2026", time: "11:00 AM IST", location: "Bengaluru, India", type: "Workshop", icon: Target, color: "#06b6d4" },
];

const pastEvents = [
  {
    title: "GITEX Global 2025",
    date: "Oct 2025",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=400&h=260&fit=crop&q=75",
    desc: "Showcased AI-powered enterprise solutions to 180,000+ attendees from 170+ countries.",
  },
  {
    title: "Collision 2025  -  Toronto",
    date: "Jun 2025",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=260&fit=crop&q=75",
    desc: "Connected with 40,000+ tech professionals and demonstrated our cloud-native solutions.",
  },
  {
    title: "India Cloud Summit 2025",
    date: "Mar 2025",
    location: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=260&fit=crop&q=75",
    desc: "Delivered keynote on multi-cloud strategy and digital transformation for enterprises.",
  },
  {
    title: "DevOps Days India 2025",
    date: "Feb 2025",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=260&fit=crop&q=75",
    desc: "Conducted hands-on workshops on Kubernetes, CI/CD pipelines, and infrastructure as code.",
  },
];

const stats = [
  { value: "15+", label: "Events Attended", icon: Calendar },
  { value: "5,000+", label: "Connections Made", icon: Users },
  { value: "10+", label: "Countries Covered", icon: Globe },
  { value: "30+", label: "Talks & Workshops", icon: Mic2 },
];

const typeColors: Record<string, string> = {
  Webinar: "#4EB3E8",
  Workshop: "#8b5cf6",
  Meetup: "#10b981",
  Hackathon: "#f59e0b",
  Panel: "#ef4444",
};

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">

      {/* ═══ HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#4EB3E8] rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
                Where We <span className="text-[#4EB3E8]">Connect</span>,<br />Learn & Innovate
              </h1>
              <p className="mt-6 text-base md:text-lg text-black/55 dark:text-white/50 leading-relaxed max-w-xl">
                From global tech conferences to hands-on workshops  -  discover where Cloud Nexus is sharing insights, showcasing solutions, and building the future of technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4EB3E8] text-white text-sm font-semibold hover:bg-[#3a9fd4] transition-all shadow-lg shadow-[#4EB3E8]/20">
                  Meet Us at Events <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#upcoming" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all">
                  View Schedule
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=450&fit=crop&q=80" alt="Tech conference" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-2.5">
                    {stats.slice(0, 3).map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                          <Icon className="w-4 h-4 text-[#4EB3E8] flex-shrink-0" strokeWidth={1.5} />
                          <div>
                            <span className="block text-sm font-black text-white">{s.value}</span>
                            <span className="text-[9px] font-semibold text-white/50">{s.label}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ STATS BAR ═══ */}
      <div className="border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-[#4EB3E8]/8 dark:bg-[#4EB3E8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#4EB3E8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-lg font-black text-[#4EB3E8]">{s.value}</span>
                    <span className="text-[10px] font-semibold text-black/40 dark:text-white/35">{s.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ FEATURED EVENTS ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key <span className="text-[#4EB3E8]">Events</span></h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            World-class tech conferences where Cloud Nexus unveils breakthroughs, shares insights, and connects with industry leaders.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
            {featuredEvents.map((ev, i) => (
              <button key={i} type="button" onClick={() => setActiveEvent(i)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeEvent === i ? "text-white shadow-lg" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                }`}
                style={activeEvent === i ? { backgroundColor: featuredEvents[i].color, boxShadow: `0 4px 14px ${featuredEvents[i].color}30` } : {}}>
                {ev.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Event Card */}
        <AnimatePresence mode="wait">
          <motion.div key={activeEvent} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
            {(() => {
              const ev = featuredEvents[activeEvent];
              return (
                <div className="grid lg:grid-cols-2 gap-8 rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] overflow-hidden shadow-lg">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t lg:from-black/40 lg:to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest text-white" style={{ backgroundColor: ev.color }}>
                        {ev.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight">{ev.title}</h3>
                    <p className="mt-4 text-sm text-black/55 dark:text-white/50 leading-relaxed">{ev.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-black/50 dark:text-white/45">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 flex-shrink-0" style={{ color: ev.color }} />{ev.date}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ev.color }} />{ev.location}</span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {ev.highlights.map((h) => (
                        <span key={h} className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] text-black/55 dark:text-white/45">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="/resources/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg"
                        style={{ backgroundColor: ev.color, boxShadow: `0 4px 14px ${ev.color}25` }}>
                        Reserve Your Spot <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══ UPCOMING EVENTS ═══ */}
      <div id="upcoming" className="bg-[#fafafa] dark:bg-white/[0.015] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming <span className="text-[#4EB3E8]">Schedule</span></h2>
            <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
              Webinars, workshops, meetups, and hackathons  -  join us online or in person.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingEvents.map((ev, i) => {
              const Icon = ev.icon;
              const color = typeColors[ev.type] || "#4EB3E8";
              return (
                <motion.div key={ev.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:border-[#4EB3E8]/20 dark:hover:border-[#4EB3E8]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: color }} />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${color}10`, borderColor: `${color}18` }}>
                      <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: color }}>{ev.type.toUpperCase()}</span>
                  </div>

                  <h3 className="text-base font-bold mb-3 leading-snug">{ev.title}</h3>

                  <div className="space-y-1.5 text-xs text-black/45 dark:text-white/40">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />{ev.date}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />{ev.time}</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />{ev.location}</div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                    <Link href="/resources/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors" style={{ color }}>
                      Register Now <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══ PAST EVENTS ═══ */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Past <span className="text-[#4EB3E8]">Highlights</span></h2>
          <p className="mt-4 text-base text-black/55 dark:text-white/50 max-w-2xl mx-auto leading-relaxed">
            A look back at where we&apos;ve been  -  sharing knowledge, building partnerships, and making an impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pastEvents.map((ev, i) => (
            <motion.div key={ev.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-semibold text-white/70">{ev.date} &middot; {ev.location}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold mb-2">{ev.title}</h4>
                <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ WHY ATTEND ═══ */}
      <div className="bg-[#fafafa] dark:bg-white/[0.015] border-y border-black/[0.06] dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Attend Our <span className="text-[#4EB3E8]">Events</span>?</h2>
              <p className="mt-4 text-base text-black/55 dark:text-white/50 leading-relaxed">
                Whether you&apos;re a developer, startup founder, or enterprise leader  -  our events are designed to deliver actionable insights, real connections, and hands-on learning.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Sparkles, title: "Live Product Demos", desc: "See our latest solutions in action  -  from AI platforms to cloud-native apps.", color: "#4EB3E8" },
                  { icon: Users, title: "Networking & Partnerships", desc: "Connect with CTOs, engineers, and decision-makers from leading companies.", color: "#8b5cf6" },
                  { icon: Mic2, title: "Expert-Led Sessions", desc: "Learn from industry veterans through talks, panels, and hands-on workshops.", color: "#10b981" },
                  { icon: Target, title: "Business Opportunities", desc: "Explore collaboration models, hiring opportunities, and technology partnerships.", color: "#f59e0b" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-white/[0.02]">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}18` }}>
                        <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5">{item.title}</h4>
                        <p className="text-xs text-black/50 dark:text-white/40 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#4EB3E8]/10">
                <img src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=500&fit=crop&q=80" alt="Tech event networking" className="w-full h-[480px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.03] to-purple-500/[0.03] dark:from-[#4EB3E8]/[0.05] dark:to-purple-500/[0.05] p-10 sm:p-14 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(78,179,232,0.04) 0%, transparent 70%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Meet at the Next <span className="text-[#4EB3E8]">Big Event</span>
            </h2>
            <p className="text-base text-black/55 dark:text-white/50 max-w-lg mx-auto leading-relaxed mb-8">
              Want to collaborate, sponsor, or just say hello? Get in touch with our events team and let&apos;s explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#4EB3E8] text-white font-semibold text-sm hover:bg-[#3a9fd4] transition-all shadow-lg shadow-[#4EB3E8]/20 hover:shadow-xl hover:shadow-[#4EB3E8]/30">
                <CalendarCheck className="w-4 h-4" /> Schedule a Meeting
              </Link>
              <Link href="/resources/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                <Mail className="w-4 h-4" /> Contact Events Team
              </Link>
            </div>
            <p className="mt-5 text-xs text-black/30 dark:text-white/25">work@cloudnexus.in &middot; +91 87938 30447</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
