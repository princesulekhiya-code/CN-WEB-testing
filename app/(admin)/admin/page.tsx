"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, Briefcase, Users, Mail, ArrowRight, Loader2,
  Eye, Clock, Plus, BarChart3, Calendar, Globe, Zap,
  ArrowUpRight, CheckCircle2, AlertCircle, CircleDot,
  Sparkles, Shield, Server, Activity,
} from "lucide-react";
import {
  getAdminBlogs, getAdminJobs, getApplications, getContacts,
  AdminBlog, AdminJob, AdminApplication, AdminContact,
} from "@/lib/api/services/admin.service";
import { useAdminAuth } from "@/lib/admin-auth-context";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let start = 0;
    const dur = 1200;
    const step = Math.ceil(value / (dur / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good Morning";
  if (h < 17) return "Good Afternoon";
  return "Good Evening";
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

interface RawData {
  blogs: AdminBlog[];
  jobs: AdminJob[];
  applications: AdminApplication[];
  contacts: AdminContact[];
}

function StatusBar({ label, published, total, color }: { label: string; published: number; total: number; color: string }) {
  const pct = total > 0 ? (published / total) * 100 : 0;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-black/60 dark:text-white/50">{label}</span>
        <span className="text-[10px] font-bold text-black/40 dark:text-white/30">
          {published}/{total}
        </span>
      </div>
      <div className="h-2 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { user } = useAdminAuth();
  const [raw, setRaw] = useState<RawData | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiOk, setApiOk] = useState(true);

  useEffect(() => {
    Promise.all([getAdminBlogs(), getAdminJobs(), getApplications(), getContacts()])
      .then(([b, j, a, c]) => {
        setRaw({ blogs: b, jobs: j, applications: a, contacts: c });
        setApiOk(true);
      })
      .catch(() => setApiOk(false))
      .finally(() => setLoading(false));
  }, []);

  const stats = useMemo(() => {
    if (!raw) return null;
    return {
      blogsTotal: raw.blogs.length,
      blogsPublished: raw.blogs.filter((b) => b.published).length,
      blogsDraft: raw.blogs.filter((b) => !b.published).length,
      jobsTotal: raw.jobs.length,
      jobsActive: raw.jobs.filter((j) => j.published).length,
      jobsInactive: raw.jobs.filter((j) => !j.published).length,
      appsTotal: raw.applications.length,
      appsPending: raw.applications.filter((a) => a.status === "PENDING").length,
      appsApproved: raw.applications.filter((a) => a.status === "APPROVED").length,
      contactsTotal: raw.contacts.length,
    };
  }, [raw]);

  const recentActivity = useMemo(() => {
    if (!raw) return [];
    type ActivityItem = { icon: typeof FileText; text: string; sub: string; time: string; color: string; href: string };
    const items: ActivityItem[] = [];

    raw.blogs.forEach((b) => items.push({
      icon: FileText,
      text: b.title,
      sub: b.published ? "Published" : "Draft",
      time: timeAgo(b.createdAt),
      color: "#4EB3E8",
      href: `/admin/blogs/${b.id}`,
    }));
    raw.jobs.forEach((j) => items.push({
      icon: Briefcase,
      text: j.title,
      sub: j.published ? "Active" : "Inactive",
      time: timeAgo(j.createdAt),
      color: "#22c55e",
      href: `/admin/jobs/${j.id}`,
    }));
    raw.applications.forEach((a) => items.push({
      icon: Users,
      text: a.fullName,
      sub: `Applied for ${a.jobTitle}`,
      time: timeAgo(a.createdAt),
      color: "#f59e0b",
      href: "/admin/applications",
    }));
    raw.contacts.forEach((c) => items.push({
      icon: Mail,
      text: c.fullName,
      sub: c.interestedIn,
      time: timeAgo(c.createdAt),
      color: "#8b5cf6",
      href: "/admin/contacts",
    }));

    items.sort((a, b) => {
      const parse = (t: string) => {
        if (t === "Just now") return 0;
        const n = parseInt(t);
        if (t.includes("m ago")) return n;
        if (t.includes("h ago")) return n * 60;
        if (t.includes("d ago")) return n * 1440;
        return n * 43200;
      };
      return parse(a.time) - parse(b.time);
    });

    return items.slice(0, 8);
  }, [raw]);

  const statCards = [
    {
      label: "Blog Posts", count: stats?.blogsTotal ?? 0, icon: FileText,
      href: "/admin/blogs", color: "#4EB3E8",
      detail: stats ? `${stats.blogsPublished} published · ${stats.blogsDraft} drafts` : "",
      bgGrad: "from-[#4EB3E8]/10 to-[#4EB3E8]/[0.02]",
    },
    {
      label: "Job Postings", count: stats?.jobsTotal ?? 0, icon: Briefcase,
      href: "/admin/jobs", color: "#22c55e",
      detail: stats ? `${stats.jobsActive} active · ${stats.jobsInactive} inactive` : "",
      bgGrad: "from-[#22c55e]/10 to-[#22c55e]/[0.02]",
    },
    {
      label: "Applications", count: stats?.appsTotal ?? 0, icon: Users,
      href: "/admin/applications", color: "#f59e0b",
      detail: stats ? `${stats.appsPending} pending · ${stats.appsApproved} approved` : "",
      bgGrad: "from-[#f59e0b]/10 to-[#f59e0b]/[0.02]",
    },
    {
      label: "Contacts", count: stats?.contactsTotal ?? 0, icon: Mail,
      href: "/admin/contacts", color: "#8b5cf6",
      detail: stats ? `${stats.contactsTotal} total inquiries` : "",
      bgGrad: "from-[#8b5cf6]/10 to-[#8b5cf6]/[0.02]",
    },
  ];

  const quickActions = [
    { label: "New Blog Post", icon: Plus, href: "/admin/blogs/new", color: "#4EB3E8" },
    { label: "New Job Posting", icon: Plus, href: "/admin/jobs/new", color: "#22c55e" },
    { label: "Review Applications", icon: Users, href: "/admin/applications", color: "#f59e0b" },
    { label: "View Contacts", icon: Mail, href: "/admin/contacts", color: "#8b5cf6" },
  ];

  const actionPrompts = useMemo(() => {
    if (!stats) return [];
    const items: { text: string; color: string; icon: typeof AlertCircle; href: string }[] = [];
    if (stats.blogsDraft > 0)
      items.push({ text: `${stats.blogsDraft} blog draft${stats.blogsDraft > 1 ? "s" : ""} pending`, color: "#4EB3E8", icon: FileText, href: "/admin/blogs" });
    if (stats.appsPending > 0)
      items.push({ text: `${stats.appsPending} application${stats.appsPending > 1 ? "s" : ""} to review`, color: "#f59e0b", icon: AlertCircle, href: "/admin/applications" });
    if (stats.contactsTotal > 0)
      items.push({ text: `${stats.contactsTotal} contact inquir${stats.contactsTotal > 1 ? "ies" : "y"}`, color: "#8b5cf6", icon: Mail, href: "/admin/contacts" });
    if (stats.jobsInactive > 0)
      items.push({ text: `${stats.jobsInactive} inactive job${stats.jobsInactive > 1 ? "s" : ""}`, color: "#22c55e", icon: Briefcase, href: "/admin/jobs" });
    return items;
  }, [stats]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8] mx-auto mb-3" />
          <p className="text-xs text-black/40 dark:text-white/30">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ─── Welcome Banner ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#4EB3E8]/[0.04] via-purple-500/[0.02] to-[#22c55e]/[0.03] dark:from-[#4EB3E8]/[0.06] dark:via-purple-500/[0.03] dark:to-[#22c55e]/[0.04] p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#4EB3E8]/8 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/4 translate-y-1/3 rounded-full bg-purple-500/8 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Sparkles className="w-4 h-4 text-[#4EB3E8]" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-[#4EB3E8] tracking-wide">{getGreeting()}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Welcome back, <span className="text-[#4EB3E8]">{user?.name?.split(" ")[0] ?? "Admin"}</span>
            </h1>
            <p className="text-sm text-black/40 dark:text-white/35 mt-1.5 max-w-md">
              Here&apos;s what&apos;s happening across your platform today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.04]">
              <div className={`w-1.5 h-1.5 rounded-full ${apiOk ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
              <span className={`text-[10px] font-bold uppercase tracking-wider ${apiOk ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                {apiOk ? "API Connected" : "API Error"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.04]">
              <Calendar className="w-3 h-3 text-black/30 dark:text-white/25" />
              <span className="text-[10px] font-semibold text-black/40 dark:text-white/30">
                {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Action Prompts ─── */}
      {actionPrompts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {actionPrompts.map((prompt) => {
            const Icon = prompt.icon;
            return (
              <Link
                key={prompt.text}
                href={prompt.href}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-white/[0.02] hover:border-black/[0.1] dark:hover:border-white/[0.1] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: `${prompt.color}15` }}>
                  <Icon className="w-3 h-3" style={{ color: prompt.color }} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-semibold text-black/55 dark:text-white/45 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {prompt.text}
                </span>
                <ArrowRight className="w-3 h-3 text-black/15 dark:text-white/15 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            );
          })}
        </motion.div>
      )}

      {/* ─── Stat Cards ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
            >
              <Link
                href={card.href}
                className="group block rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 hover:border-black/[0.12] dark:hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${card.color}10`, borderColor: `${card.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: card.color }} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black/10 dark:text-white/10 group-hover:text-black/35 dark:group-hover:text-white/35 transition-colors" />
                  </div>

                  <div className="text-3xl font-black tracking-tight mb-0.5">
                    <AnimatedCounter value={card.count} />
                  </div>
                  <div className="text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider mb-2">
                    {card.label}
                  </div>
                  {card.detail && (
                    <div className="flex items-center gap-1.5">
                      <CircleDot className="w-2.5 h-2.5" style={{ color: card.color }} />
                      <span className="text-[10px] font-medium text-black/35 dark:text-white/25">{card.detail}</span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Three Column Layout ─── */}
      <div className="grid lg:grid-cols-12 gap-5">
        {/* Left: Quick Actions */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold tracking-tight">Quick Actions</h2>
              <Zap className="w-4 h-4 text-black/15 dark:text-white/15" />
            </div>
            <div className="space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-black/[0.04] dark:border-white/[0.04] hover:border-black/[0.1] dark:hover:border-white/[0.1] hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${action.color}12` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: action.color }} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold text-black/55 dark:text-white/45 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {action.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-auto text-black/10 dark:text-white/10 group-hover:text-black/30 dark:group-hover:text-white/30 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Center: Content Status */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 h-full">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold tracking-tight">Content Status</h2>
              <BarChart3 className="w-4 h-4 text-black/15 dark:text-white/15" />
            </div>
            <div className="space-y-5">
              <StatusBar label="Blogs Published" published={stats?.blogsPublished ?? 0} total={stats?.blogsTotal ?? 0} color="#4EB3E8" />
              <StatusBar label="Jobs Active" published={stats?.jobsActive ?? 0} total={stats?.jobsTotal ?? 0} color="#22c55e" />
              <StatusBar label="Apps Approved" published={stats?.appsApproved ?? 0} total={stats?.appsTotal ?? 0} color="#f59e0b" />
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Pages", value: "180+", icon: Globe, color: "#4EB3E8" },
                  { label: "Services", value: "20+", icon: Zap, color: "#8b5cf6" },
                  { label: "Industries", value: "15", icon: BarChart3, color: "#22c55e" },
                  { label: "Uptime", value: "99.9%", icon: Activity, color: "#f59e0b" },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-black/[0.015] dark:bg-white/[0.02]">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: m.color }} strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-black tracking-tight">{m.value}</div>
                        <div className="text-[9px] text-black/30 dark:text-white/25 font-semibold uppercase tracking-wider">{m.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Recent Activity */}
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold tracking-tight">Recent Activity</h2>
              <Clock className="w-4 h-4 text-black/15 dark:text-white/15" />
            </div>
            <div className="space-y-0.5">
              {recentActivity.length === 0 ? (
                <div className="py-8 text-center">
                  <Activity className="w-6 h-6 text-black/15 dark:text-white/10 mx-auto mb-2" />
                  <p className="text-xs text-black/30 dark:text-white/20">No activity yet</p>
                </div>
              ) : (
                recentActivity.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={`${item.text}-${i}`}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-black/[0.015] dark:hover:bg-white/[0.02] transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}10` }}>
                          <Icon className="w-3 h-3" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-semibold text-black/70 dark:text-white/60 truncate">{item.text}</div>
                          <div className="text-[9px] text-black/30 dark:text-white/20 truncate">{item.sub}</div>
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0">
                          <span className="text-[9px] font-medium text-black/25 dark:text-white/20">{item.time}</span>
                          <Eye className="w-2.5 h-2.5 text-black/10 dark:text-white/10 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── System Status Strip ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4"
      >
        {[
          { icon: Shield, text: "2FA Protected" },
          { icon: Server, text: "256-bit Encryption" },
          { icon: CheckCircle2, text: `v1.0 · ${new Date().getFullYear()}` },
        ].map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.text} className="flex items-center gap-1.5 text-[10px] text-black/20 dark:text-white/12 font-medium tracking-wide">
              <Icon className="w-3 h-3" strokeWidth={1.5} />
              {badge.text}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
