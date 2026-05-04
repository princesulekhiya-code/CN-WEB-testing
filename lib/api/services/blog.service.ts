import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category?: string;
  coverImage?: string;
  authorName?: string;
  authorImage?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
  const res = await apiClient.get(ENDPOINTS.BLOGS.LIST);
  return res.data;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const res = await apiClient.get(ENDPOINTS.BLOGS.BY_SLUG(slug));
  return res.data;
}
