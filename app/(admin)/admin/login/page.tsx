"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Loader2, AlertCircle, Mail, Lock, KeyRound } from "lucide-react";
import Link from "next/link";
import { useAdminAuth } from "@/lib/admin-auth-context";

export default function AdminLoginPage() {
  const { login, verify2FA } = useAdminAuth();
  const router = useRouter();

  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [devCode, setDevCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await login(email, password);
      setChallengeId(res.challengeId);
      if (res.devCode) setDevCode(res.devCode);
      setStep("otp");
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
        : undefined;
      setError(msg || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await verify2FA(challengeId, otpCode);
      router.replace("/admin");
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error
        : undefined;
      setError(msg || "Invalid OTP code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3 pl-11 text-sm outline-none focus:border-[#4EB3E8] focus:ring-1 focus:ring-[#4EB3E8]/20 transition-all duration-200 placeholder:text-black/30 dark:placeholder:text-white/25";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] dark:bg-[#0a0a0a] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#4EB3E8]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">Admin Login</h1>
          <p className="text-sm text-black/45 dark:text-white/40 mt-1">
            {step === "credentials" ? "Sign in to your admin account" : "Enter the verification code"}
          </p>
        </div>

        <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111] p-6">
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-3 py-2.5 text-xs text-red-600 dark:text-red-400">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {error}
            </div>
          )}

          {step === "credentials" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25 dark:text-white/25" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@cloudnexus.com" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25 dark:text-white/25" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" className={inputCls} />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-all duration-300 disabled:opacity-60">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-center text-xs text-black/35 dark:text-white/30">
                Don&apos;t have an account?{" "}
                <Link href="/admin/signup" className="text-[#4EB3E8] font-semibold hover:underline">Create one</Link>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="text-center mb-2">
                <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-[#4EB3E8]/10 flex items-center justify-center">
                  <KeyRound className="w-5 h-5 text-[#4EB3E8]" />
                </div>
                <p className="text-xs text-black/50 dark:text-white/40">
                  A 6-digit code has been sent to <span className="font-semibold text-black/70 dark:text-white/60">{email}</span>
                </p>
                {devCode && (
                  <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-1.5 inline-block">
                    Dev code: <span className="font-mono font-bold">{devCode}</span>
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-black/70 dark:text-white/60">Verification Code</label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25 dark:text-white/25" />
                  <input type="text" value={otpCode} onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))} required placeholder="000000" maxLength={6} className={`${inputCls} text-center tracking-[0.5em] font-mono text-lg`} />
                </div>
              </div>
              <button type="submit" disabled={loading || otpCode.length < 6} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4EB3E8] hover:bg-[#3da0d5] text-white text-sm font-semibold transition-all duration-300 disabled:opacity-60">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? "Verifying..." : "Verify & Sign In"}
              </button>
              <button type="button" onClick={() => { setStep("credentials"); setError(""); }} className="w-full text-xs text-black/40 dark:text-white/35 hover:text-[#4EB3E8] transition-colors text-center">
                Back to login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
