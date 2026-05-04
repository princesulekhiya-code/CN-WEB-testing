"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, ArrowLeft, Plus, X } from "lucide-react";
import Link from "next/link";
import { createJob, updateJob, type JobFormData, type AdminJob } from "@/lib/api/services/admin.service";

interface Props {
  job?: AdminJob;
}

export default function JobForm({ job }: Props) {
  const router = useRouter();
  const isEdit = !!job;

  const [form, setForm] = useState<JobFormData>({
    title: job?.title ?? "",
    department: job?.department ?? "",
    slug: job?.slug ?? "",
    location: job?.location ?? "Remote",
    employmentType: job?.employmentType ?? "Full-time",
    tagline: job?.tagline ?? "",
    experience: job?.experience ?? "2+ years",
    description: job?.description ?? [""],
    profileSections: job?.profileSections ?? [],
    published: job?.published ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleDescLine = (idx: number, val: string) => {
    setForm((p) => {
      const desc = [...(p.description || [])];
      desc[idx] = val;
      return { ...p, description: desc };
    });
  };

  const addDescLine = () => setForm((p) => ({ ...p, description: [...(p.description || []), ""] }));
  const removeDescLine = (idx: number) => setForm((p) => ({ ...p, description: (p.description || []).filter((_, i) => i !== idx) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = { ...form, description: (form.description || []).filter(Boolean) };
      if (isEdit) {
        await updateJob(job.id, data);
      } else {
        await createJob(data);
      }
      router.push("/admin/jobs");
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
        : undefined;
      setError(msg || "Failed to save job posting.");
    }
    setLoading(false);
  };

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25";

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/jobs" className="p-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
          {isEdit ? "Edit Job Posting" : "New Job Posting"}
        </h1>
      </div>

      {error && (
        <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Job Title *</label>
              <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Full Stack Developer" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Department *</label>
              <input name="department" value={form.department} onChange={handleChange} required placeholder="e.g. Engineering" className={inputCls} />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Location</label>
              <input name="location" value={form.location} onChange={handleChange} placeholder="Remote" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Employment Type</label>
              <select name="employmentType" value={form.employmentType} onChange={handleChange} className={inputCls}>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Experience</label>
              <input name="experience" value={form.experience} onChange={handleChange} placeholder="2+ years" className={inputCls} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Slug</label>
              <input name="slug" value={form.slug} onChange={handleChange} placeholder="auto-generated from title" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Tagline</label>
              <input name="tagline" value={form.tagline} onChange={handleChange} placeholder="Short description" className={inputCls} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-black dark:text-white">Job Description</h3>
            <button type="button" onClick={addDescLine} className="flex items-center gap-1 text-xs font-semibold text-[#4EB3E8] hover:underline">
              <Plus className="w-3.5 h-3.5" /> Add Line
            </button>
          </div>
          {(form.description || []).map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <input value={line} onChange={(e) => handleDescLine(i, e.target.value)} placeholder={`Description line ${i + 1}`} className={`${inputCls} flex-1`} />
              {(form.description || []).length > 1 && (
                <button type="button" onClick={() => removeDescLine(i)} className="p-2 rounded-lg hover:bg-red-500/10 text-black/30 dark:text-white/25 hover:text-red-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input type="checkbox" name="published" checked={form.published} onChange={handleChange} className="w-4 h-4 rounded accent-[#4EB3E8]" />
            <span className="text-sm font-medium text-black/70 dark:text-white/60">Published (visible to applicants)</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-colors disabled:opacity-60">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isEdit ? "Update Posting" : "Create Posting"}
          </button>
          <Link href="/admin/jobs" className="px-6 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-sm font-semibold hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
