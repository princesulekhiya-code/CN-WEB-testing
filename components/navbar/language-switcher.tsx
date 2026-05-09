"use client";

import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/lib/i18n/context";

interface Language {
  code: "en" | "hi" | "fr" | "es" | "zh";
  label: string;
  nativeLabel: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "US" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", flag: "IN" },
  { code: "fr", label: "French", nativeLabel: "Français", flag: "FR" },
  { code: "es", label: "Spanish", nativeLabel: "Español", flag: "ES" },
  { code: "zh", label: "Chinese", nativeLabel: "中文", flag: "CN" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const activeLang = LANGUAGES.find((l) => l.code === locale)!;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 h-9 px-2 rounded-lg text-black/60 hover:bg-black/[0.06] hover:text-black dark:text-white/60 dark:hover:bg-white/[0.06] dark:hover:text-white transition-colors text-sm font-medium"
          aria-label="Select language"
        >
          <Globe size={18} strokeWidth={1.5} />
          <span className="hidden sm:inline text-xs uppercase tracking-wide">
            {activeLang.code}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[100] w-52 rounded-xl border border-black/[0.08] bg-white shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[#0a0a0a] dark:shadow-black/60 p-1.5"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
          >
            <span className="text-xs font-bold text-black/40 dark:text-white/40 w-6 text-center">{lang.flag}</span>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-sm font-medium text-black/90 dark:text-white/90">
                {lang.label}
              </span>
              <span className="text-xs text-black/40 dark:text-white/40">
                {lang.nativeLabel}
              </span>
            </div>
            {locale === lang.code && (
              <Check
                size={16}
                className="text-black dark:text-white flex-shrink-0"
                strokeWidth={2}
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
