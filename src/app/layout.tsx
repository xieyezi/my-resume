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
  title: "苏业纯的个人简历",
  description: "苏业纯 - 前端工程师"
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
