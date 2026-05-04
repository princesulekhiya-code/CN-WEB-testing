import apiClient from "../axios";
import { ENDPOINTS } from "../endpoints";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export async function register(data: RegisterData) {
  const res = await apiClient.post(ENDPOINTS.AUTH.REGISTER, data);
  return res.data;
}

export async function login(data: LoginData): Promise<AuthResponse> {
  const res = await apiClient.post(ENDPOINTS.AUTH.LOGIN, data);
  if (res.data.token && typeof window !== "undefined") {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
}

export async function getProfile() {
  const res = await apiClient.get(ENDPOINTS.AUTH.ME);
  return res.data;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
