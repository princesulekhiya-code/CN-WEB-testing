"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./locales/en.json";

type Locale = "en" | "hi" | "fr" | "es" | "zh";
type TranslationValue = string | { [k: string]: TranslationValue };
type Translations = Record<string, TranslationValue>;

const STORAGE_KEY = "cn_locale";

const localeModules: Record<Locale, () => Promise<{ default: Translations }>> = {
  en: () => Promise.resolve({ default: en as Translations }),
  hi: () => import("./locales/hi.json"),
  fr: () => import("./locales/fr.json"),
  es: () => import("./locales/es.json"),
  zh: () => import("./locales/zh.json"),
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be inside I18nProvider");
  return ctx;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [translations, setTranslations] = useState<Translations>(en as Translations);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && saved in localeModules) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      localeModules[saved]().then((mod) => {
        setTranslations(mod.default);
        setReady(true);
      });
    } else {
      setReady(true);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
    localeModules[l]().then((mod) => setTranslations(mod.default));
  }, []);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const flat = (obj: Record<string, unknown>): string | undefined => {
        const v = obj[key];
        return typeof v === "string" ? v : undefined;
      };
      const nested = (obj: Record<string, unknown>): string | undefined => {
        const parts = key.split(".");
        if (parts.length <= 1) return undefined;
        let cur: unknown = obj;
        for (const p of parts) {
          if (cur == null || typeof cur !== "object") return undefined;
          cur = (cur as Record<string, unknown>)[p];
        }
        return typeof cur === "string" ? cur : undefined;
      };
      const t = translations as Record<string, unknown>;
      const e = en as Record<string, unknown>;
      return flat(t) ?? nested(t) ?? flat(e) ?? nested(e) ?? fallback ?? key;
    },
    [translations]
  );

  if (!ready) return null;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
