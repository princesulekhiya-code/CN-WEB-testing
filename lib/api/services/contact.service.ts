import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export interface ContactFormData {
  fullName: string;
  email: string;
  interestedIn: string;
  projectDetails: string;
  companyName?: string;
  phone?: string;
  estimatedBudget?: string;
  heardFrom?: string;
}

export async function submitContactForm(data: ContactFormData) {
  const res = await apiClient.post(ENDPOINTS.CONTACTS, data);
  return res.data;
}

export async function submitSupportForm(data: {
  fullName: string;
  email: string;
  interestedIn: string;
  projectDetails: string;
}) {
  const res = await apiClient.post(ENDPOINTS.CONTACTS, data);
  return res.data;
}
