"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string } } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, [router]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </main>
    );
  }

  const name = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there";
  const firstName = name.split(" ")[0];

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user?.email}</span>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-800">Log out</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-gray-500">Here&apos;s where you left off.</p>
        </div>

        {/* Upgrade banner */}
        <div className="rounded-2xl p-6 mb-10 flex items-center justify-between gap-6" style={{ background: "#1e3a5f" }}>
          <div>
            <div className="text-white font-bold text-lg mb-1">Unlock the full FinStart library</div>
            <p className="text-slate-300 text-sm">Get all 5 courses, 4 tools, premium guides, and community access for $9.99/month.</p>
          </div>
          <Link href="/signup?plan=premium" className="shrink-0 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold text-sm">
            Upgrade to Premium
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Continue learning */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-bold text-lg mb-4" style={{ color: "#1e3a5f" }}>Continue Learning</h2>
            <Link href="/courses/budgeting-basics" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-gray-100 transition group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">💰</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 group-hover:text-emerald-700 transition">Budgeting Basics</div>
                <div className="text-sm text-gray-400">5 lessons · Free</div>
              </div>
              <span className="text-emerald-500">→</span>
            </Link>
            <div className="mt-3 space-y-2 opacity-50">
              {["Investing 101", "Wealth Building for Young Adults", "Student Finance", "First Job Finance"].map((c) => (
                <div key={c} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl">🔒</div>
                  <div>
                    <div className="font-semibold text-gray-500">{c}</div>
                    <div className="text-sm text-gray-400">Premium</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1e3a5f" }}>Free Tools</h2>
              <Link href="/tools" className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-700 py-2 border-b border-gray-50">
                <span>🧮</span> Budget Calculator
              </Link>
              <Link href="/blog" className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-700 py-2">
                <span>📖</span> Free Articles
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold text-lg mb-3" style={{ color: "#1e3a5f" }}>Account</h2>
              <div className="text-sm text-gray-500 mb-1">Plan</div>
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Free</div>
            </div>
          </div>
        </div>

        {/* Recent articles */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Start Reading</h2>
            <Link href="/blog" className="text-sm text-emerald-600 hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { slug: "build-your-first-budget", title: "How to Build Your First Budget in 30 Minutes" },
              { slug: "50-30-20-rule", title: "The 50/30/20 Rule: The Only Budget Formula You Need" },
              { slug: "start-investing-with-50-dollars", title: "How to Start Investing with Just $50" },
              { slug: "roth-ira-for-beginners", title: "What Is a Roth IRA and Why Every 18-Year-Old Should Open One" },
            ].map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition group">
                <span className="text-emerald-500 mt-0.5">→</span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
