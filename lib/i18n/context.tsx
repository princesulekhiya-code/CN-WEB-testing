"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./locales/en.json";

type Locale = "en" | "hi" | "fr" | "es" | "zh";
type Translations = Record<string, string>;

const STORAGE_KEY = "cn_locale";

const localeModules: Record<Locale, () => Promise<{ default: Translations }>> = {
  en: () => Promise.resolve({ default: en }),
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
  const [translations, setTranslations] = useState<Translations>(en);
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
      return translations[key] ?? (en as Translations)[key] ?? fallback ?? key;
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
