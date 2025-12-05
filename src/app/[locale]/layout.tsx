// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/request";
import { LocaleProvider } from "./LocaleProvider";

type LayoutParams = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const t = messages.metadata as {
    title: string;
    description: string;
    keywords: string;
  };

  const isZh = locale === "zh-CN";

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.split(","),
    authors: [
      {
        name: isZh ? "苏业纯" : "Su Yechun",
        url: "https://github.com/xieyezi"
      }
    ],
    creator: isZh ? "苏业纯" : "Su Yechun",
    publisher: isZh ? "苏业纯" : "Su Yechun",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "website",
      locale: isZh ? "zh_CN" : "en_US",
      url: "https://www.xieyezi.info",
      title: t.title,
      description: t.description,
      siteName: isZh ? "苏业纯个人简历" : "Su Yechun Resume",
      images: [
        {
          url: "/img/white.png",
          width: 1200,
          height: 630,
          alt: isZh ? "苏业纯个人简历" : "Su Yechun Resume"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/img/white.png"]
    }
  };
}

export default async function LocaleLayout({ children, params }: LayoutParams & { children: React.ReactNode }) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <LocaleProvider locale={locale as Locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}
