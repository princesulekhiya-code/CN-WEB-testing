"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Briefcase, Users, Mail, ArrowRight, Loader2 } from "lucide-react";
import { getAdminBlogs, getAdminJobs, getApplications, getContacts } from "@/lib/api/services/admin.service";

interface DashStats {
  blogs: number;
  jobs: number;
  applications: number;
  contacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAdminBlogs(), getAdminJobs(), getApplications(), getContacts()])
      .then(([b, j, a, c]) => setStats({ blogs: b.length, jobs: j.length, applications: a.length, contacts: c.length }))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Blog Posts", count: stats?.blogs ?? 0, icon: FileText, href: "/admin/blogs", color: "#4EB3E8" },
    { label: "Job Postings", count: stats?.jobs ?? 0, icon: Briefcase, href: "/admin/jobs", color: "#22c55e" },
    { label: "Applications", count: stats?.applications ?? 0, icon: Users, href: "/admin/applications", color: "#f59e0b" },
    { label: "Contact Inquiries", count: stats?.contacts ?? 0, icon: Mail, href: "/admin/contacts", color: "#8b5cf6" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">Dashboard</h1>
        <p className="text-sm text-black/45 dark:text-white/40 mt-1">Welcome back. Here&apos;s an overview of your site.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.href} href={card.href} className="group rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6 hover:border-black/[0.12] dark:hover:border-white/[0.12] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: card.color }} strokeWidth={1.5} />
                </div>
                <ArrowRight className="w-4 h-4 text-black/20 dark:text-white/20 group-hover:text-black/50 dark:group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-3xl font-black tracking-tight" style={{ color: card.color }}>{card.count}</div>
              <div className="text-xs font-semibold text-black/45 dark:text-white/40 mt-1 uppercase tracking-wider">{card.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
