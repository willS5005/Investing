import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import SessionProvider from "./components/SessionProvider";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider initialUser={user ?? null}>
          {children}
        </SessionProvider>
        <footer className="border-t border-gray-100 bg-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="col-span-2 md:col-span-1">
                <div className="text-xl font-bold mb-2" style={{ color: "#1e3a5f" }}>FinStart</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Personal finance education for the next generation. Learn budgeting, investing, and wealth building — for free.
                </p>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">Learn</div>
                <div className="space-y-2">
                  <Link href="/courses" className="block text-sm text-gray-500 hover:text-gray-800 transition">Courses</Link>
                  <Link href="/blog" className="block text-sm text-gray-500 hover:text-gray-800 transition">Articles</Link>
                  <Link href="/tools" className="block text-sm text-gray-500 hover:text-gray-800 transition">Tools</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">Company</div>
                <div className="space-y-2">
                  <Link href="/about" className="block text-sm text-gray-500 hover:text-gray-800 transition">About</Link>
                  <Link href="/pricing" className="block text-sm text-gray-500 hover:text-gray-800 transition">Pricing</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">Account</div>
                <div className="space-y-2">
                  <Link href="/login" className="block text-sm text-gray-500 hover:text-gray-800 transition">Log In</Link>
                  <Link href="/signup" className="block text-sm text-gray-500 hover:text-gray-800 transition">Sign Up Free</Link>
                  <Link href="/dashboard" className="block text-sm text-gray-500 hover:text-gray-800 transition">Dashboard</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
              <p>© 2026 FinStart. Built for the next generation of investors.</p>
              <p>Questions? <a href="mailto:willsobotka2005@gmail.com" className="hover:text-gray-600 transition">Contact us</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
