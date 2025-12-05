// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";

export const locales = ["zh-CN", "en-US"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-CN";

export default getRequestConfig(async ({ locale }) => {
  // 这里可以打 log 看看实际传进来的 locale
  console.log("[request.ts] locale from Next:", locale);

  let finalLocale: Locale;

  if (!locale || !locales.includes(locale as Locale)) {
    finalLocale = defaultLocale;
  } else {
    finalLocale = locale as Locale;
  }

  return {
    locale: finalLocale,
    messages: (await import(`./messages/${finalLocale}.json`)).default
  };
});
