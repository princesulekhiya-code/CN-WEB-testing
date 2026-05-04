"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import JobForm from "../_components/job-form";
import { getAdminJobs, type AdminJob } from "@/lib/api/services/admin.service";

export default function EditJobPage() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<AdminJob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminJobs()
      .then((all) => setJob(all.find((j) => j.id === id) ?? null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" /></div>;
  }

  if (!job) {
    return <div className="text-center py-32 text-black/40 dark:text-white/35">Job posting not found.</div>;
  }

  return <JobForm job={job} />;
}
