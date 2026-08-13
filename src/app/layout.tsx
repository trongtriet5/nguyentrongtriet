import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nguyentrongtriet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nguyen Trong Triet — Data Analyst, Business Intelligence",
  description:
    "Portfolio of Nguyen Trong Triet, a Business Intelligence Data Analyst specializing in Power BI, SQL, and Python — retail, recruitment, and e-commerce analytics.",
  openGraph: {
    title: "Nguyen Trong Triet — Data Analyst, Business Intelligence",
    description:
      "Power BI dashboards, SQL reporting, and analytics case studies from retail, recruitment, and e-commerce projects.",
    url: siteUrl,
    siteName: "Nguyen Trong Triet",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-accent-ink"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
