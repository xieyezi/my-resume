import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans"
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc"
});

export const metadata: Metadata = {
  title: "苏业纯 (xieyezi) - 前端工程师 | 个人简历",
  description: "苏业纯 (xieyezi) 的个人简历，专注于前端开发，拥有丰富的前端技术栈经验，包括 React、Next.js、TypeScript 等现代前端技术。",
  keywords: ["苏业纯", "xieyezi", "前端工程师", "React", "Next.js", "Vue", "ES6", "Node.js", "TypeScript", "个人简历", "前端开发"],
  authors: [{ name: "苏业纯", url: "https://github.com/xieyezi" }],
  creator: "苏业纯",
  publisher: "苏业纯",
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
    locale: "zh_CN",
    url: "https://www.xieyezi.info",
    title: "苏业纯 (xieyezi) - 前端工程师 | 个人简历",
    description: "苏业纯 (xieyezi) 的个人简历，专注于前端开发，拥有丰富的前端技术栈经验。",
    siteName: "苏业纯个人简历",
    images: [
      {
        url: "/img/white.png",
        width: 1200,
        height: 630,
        alt: "苏业纯个人简历"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "苏业纯 (xieyezi) - 前端工程师 | 个人简历",
    description: "苏业纯 (xieyezi) 的个人简历，专注于前端开发，拥有丰富的前端技术栈经验。",
    images: ["/img/white.png"]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh-CN'>
      <body className={cn("min-h-screen font-sans antialiased", ibmPlexSans.variable, notoSansSC.variable)}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
