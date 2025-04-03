import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "简单简历 - Alpine 模版",
  description: "简单简历 - 5分钟创建专业的互联网人才简历",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          ibmPlexSans.variable,
          notoSansSC.variable,
        )}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
