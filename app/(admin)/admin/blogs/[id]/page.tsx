"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import BlogForm from "../_components/blog-form";
import { getAdminBlogs, type AdminBlog } from "@/lib/api/services/admin.service";

export default function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<AdminBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminBlogs()
      .then((all) => setBlog(all.find((b) => b.id === id) ?? null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-[#4EB3E8]" /></div>;
  }

  if (!blog) {
    return <div className="text-center py-32 text-black/40 dark:text-white/35">Blog post not found.</div>;
  }

  return <BlogForm blog={blog} />;
}
