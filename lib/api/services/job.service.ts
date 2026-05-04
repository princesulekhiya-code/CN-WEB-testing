import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export interface JobListing {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: string;
  tagline?: string;
  experience?: string;
  description: string[];
  profileSections: { heading: string; items: string[] }[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApplicationData {
  jobTitle: string;
  jobSlug: string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany?: string;
  ctc?: string;
  experience?: string;
  resume?: File;
}

export async function getJobListings(): Promise<JobListing[]> {
  const res = await apiClient.get(ENDPOINTS.JOB_LISTINGS.LIST);
  return res.data;
}

export async function getJobBySlug(slug: string): Promise<JobListing> {
  const res = await apiClient.get(ENDPOINTS.JOB_LISTINGS.BY_SLUG(slug));
  return res.data;
}

export async function submitApplication(data: ApplicationData) {
  const formData = new FormData();
  formData.append("jobTitle", data.jobTitle);
  formData.append("jobSlug", data.jobSlug);
  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  if (data.currentCompany) formData.append("currentCompany", data.currentCompany);
  if (data.ctc) formData.append("ctc", data.ctc);
  if (data.experience) formData.append("experience", data.experience);
  if (data.resume) formData.append("resume", data.resume);

  const res = await apiClient.post(ENDPOINTS.APPLICATIONS, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}
