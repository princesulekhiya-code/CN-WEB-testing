"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, FileText, Briefcase, Users, Mail,
  LogOut, Menu, X, ChevronRight, Sun, Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin-auth-context";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/jobs", label: "Job Postings", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/contacts", label: "Contacts", icon: Mail },
];

function AdminShell({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAdminAuth();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (pathname === "/admin/login" || pathname === "/admin/signup") return <>{children}</>;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] dark:bg-[#0a0a0a]">
        <div className="w-8 h-8 border-2 border-[#4EB3E8] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#111] border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-16 flex items-center gap-3 px-5 border-b border-black/[0.06] dark:border-white/[0.06]">
          <Link href="/admin" className="relative w-[120px] h-[34px] flex-shrink-0">
            <Image src="/asset/cn-logo.png" alt="Cloud Nexus" fill className="object-contain [filter:saturate(1.6)_hue-rotate(-12deg)_brightness(0.7)_contrast(1.15)] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.2)_brightness(1.15)]" sizes="120px" />
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[9px] text-black/30 dark:text-white/25 font-semibold tracking-wider uppercase hidden sm:block">Admin</span>
            <button className="lg:hidden p-1" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#4EB3E8]/10 text-[#4EB3E8]"
                    : "text-black/60 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:text-black dark:hover:text-white"
                }`}
              >
                <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                {item.label}
                {active && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-black/[0.06] dark:border-white/[0.06]">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500/70 hover:bg-red-500/[0.06] hover:text-red-500 transition-all duration-200"
          >
            <LogOut className="w-4.5 h-4.5" strokeWidth={1.5} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 flex items-center gap-4 px-6 bg-white dark:bg-[#111] border-b border-black/[0.06] dark:border-white/[0.06]">
          <button className="lg:hidden p-1.5 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.04]" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center h-9 w-9 rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.04] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-[#4EB3E8]/30 hover:bg-[#4EB3E8]/5 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
            )}
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold">{user.name}</div>
              <div className="text-[10px] text-black/40 dark:text-white/35">{user.email}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#4EB3E8]/10 border border-[#4EB3E8]/20 flex items-center justify-center">
              <span className="text-xs font-bold text-[#4EB3E8]">{user.name?.charAt(0).toUpperCase()}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminShell>{children}</AdminShell>
    </AdminAuthProvider>
  );
}
