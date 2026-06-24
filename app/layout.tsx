import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://investing-9otnx1jsn-willsobotka2005-6780s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FinStart — Personal Finance for Young Adults",
    template: "%s | FinStart",
  },
  description: "Free and premium personal finance courses, tools, and guides built for people in their 20s and 30s. Learn budgeting, investing, and wealth building — in plain English.",
  keywords: ["personal finance", "budgeting for beginners", "how to invest", "roth ira", "student loans", "financial education", "young adults finance"],
  authors: [{ name: "FinStart" }],
  creator: "FinStart",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FinStart",
    title: "FinStart — Personal Finance for Young Adults",
    description: "Free and premium personal finance courses, tools, and guides built for people in their 20s and 30s.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinStart — Personal Finance for Young Adults",
    description: "Free and premium personal finance courses, tools, and guides built for people in their 20s and 30s.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
