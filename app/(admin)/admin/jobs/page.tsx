"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Pencil, Loader2, Eye, EyeOff } from "lucide-react";
import { getAdminJobs, deleteJob, type AdminJob } from "@/lib/api/services/admin.service";

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    getAdminJobs().then(setJobs).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    setDeleting(id);
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((j) => j.id !== id));
    } catch { /* ignore */ }
    setDeleting(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" /></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">Job Postings</h1>
          <p className="text-sm text-black/45 dark:text-white/40 mt-0.5">{jobs.length} postings total</p>
        </div>
        <Link href="/admin/jobs/new" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-colors">
          <Plus className="w-4 h-4" /> New Job
        </Link>
      </div>

      <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/[0.06] dark:border-white/[0.06]">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider">Title</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden md:table-cell">Department</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden sm:table-cell">Location</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider hidden lg:table-cell">Status</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-black/40 dark:text-white/35 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-black/[0.04] dark:border-white/[0.04] last:border-0 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-black dark:text-white">{job.title}</div>
                    <div className="text-xs text-black/35 dark:text-white/30 mt-0.5">{job.employmentType} &middot; {job.experience}</div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04]">{job.department}</span>
                  </td>
                  <td className="px-5 py-4 text-xs text-black/50 dark:text-white/40 hidden sm:table-cell">{job.location}</td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    {job.published ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400"><Eye className="w-3 h-3" /> Active</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-black/35 dark:text-white/30"><EyeOff className="w-3 h-3" /> Draft</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/admin/jobs/${job.id}`} className="p-2 rounded-lg hover:bg-[#4EB3E8]/10 text-black/40 dark:text-white/40 hover:text-[#4EB3E8] transition-colors">
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(job.id)} disabled={deleting === job.id} className="p-2 rounded-lg hover:bg-red-500/10 text-black/40 dark:text-white/40 hover:text-red-500 transition-colors disabled:opacity-40">
                        {deleting === job.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr><td colSpan={5} className="px-5 py-16 text-center text-sm text-black/30 dark:text-white/25">No job postings yet. Create your first one.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
