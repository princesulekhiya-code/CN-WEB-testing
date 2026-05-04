"use client";

import { usePathname } from "next/navigation";
import { SplashScreen } from "./splash-screen";

export function HomeSplashWrapper() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <SplashScreen />;
}
