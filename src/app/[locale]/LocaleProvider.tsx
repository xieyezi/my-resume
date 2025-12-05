"use client";

import { useEffect } from "react";

export function LocaleProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
