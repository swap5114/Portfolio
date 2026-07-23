import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, siteMeta } from "@/data/content";
import { Providers } from "@/components/Providers";
import { Grain } from "@/components/Grain";
import { Cursor } from "@/components/Cursor";

// Self-hosted at build time by next/font — no external font requests at runtime.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0C0E",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s — ${profile.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "Swapnil Jain",
    "backend engineer",
    "full-stack developer",
    "FastAPI",
    "Node.js",
    "Next.js",
    "Artha.ai",
    "software developer portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMeta.url,
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Providers>
          <Cursor />
          <Grain />
          {children}
        </Providers>
      </body>
    </html>
  );
}
