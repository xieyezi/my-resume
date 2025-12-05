import { IBM_Plex_Sans, Noto_Sans_SC } from "next/font/google";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh-CN'>
      <body className={cn("min-h-screen font-sans antialiased", ibmPlexSans.variable, notoSansSC.variable)}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
