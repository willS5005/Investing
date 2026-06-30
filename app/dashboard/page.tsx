"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useRequireAuth } from "@/lib/useAuth";

const tips = [
  "Automating your savings on payday means you never have to think about it.",
  "Index funds beat most actively managed funds over a 10-year period.",
  "Your 20s are the most powerful decade for compound interest — start now.",
  "The 50/30/20 rule: 50% needs, 30% wants, 20% savings.",
  "An emergency fund of 3–6 months of expenses is your financial safety net.",
  "Maxing your employer 401k match is an instant 100% return on that money.",
  "Paying off high-interest debt first (avalanche method) saves the most money.",
  "Credit utilization below 30% helps keep your credit score healthy.",
];

const courses = [
  { title: "Budgeting Basics", icon: "💰", lessons: 5, href: "/courses/budgeting-basics", free: true },
  { title: "Investing 101", icon: "📈", lessons: 6, href: "/courses/investing-101", free: false },
  { title: "Wealth Building", icon: "🏦", lessons: 7, href: "/courses/wealth-building", free: false },
  { title: "Student Finance", icon: "🎓", lessons: 5, href: "/courses/student-finance", free: false },
  { title: "First Job Finance", icon: "🎯", lessons: 5, href: "/courses/first-job-finance", free: false },
];

const tools = [
  { title: "Budget Calculator", icon: "🧮", href: "/tools/budget-calculator", free: true },
  { title: "Investment Calculator", icon: "📊", href: "/tools/investment-calculator", free: false },
  { title: "Net Worth Tracker", icon: "💎", href: "/tools/net-worth-tracker", free: false },
  { title: "Loan Payoff Calculator", icon: "📉", href: "/tools/loan-payoff", free: false },
];

const articles = [
  { slug: "build-your-first-budget", title: "How to Build Your First Budget in 30 Minutes" },
  { slug: "50-30-20-rule", title: "The 50/30/20 Rule Explained Simply" },
  { slug: "start-investing-with-50-dollars", title: "How to Start Investing with Just $50" },
  { slug: "roth-ira-for-beginners", title: "What Is a Roth IRA?" },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user: authUser, ready } = useRequireAuth();
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string } } | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const tip = tips[new Date().getDay() % tips.length];

  useEffect(() => {
    if (!ready || !authUser) return;
    const supabase = createClient();
    setUser(authUser);
    supabase.from("user_subscriptions").select("status").eq("user_id", authUser.id).single().then(({ data: sub }) => {
      setIsPremium(sub?.status === "premium");
      setLoading(false);
    });
  }, [ready, authUser]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading...</div>
      </main>
    );
  }

  const name = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there";
  const firstName = name.split(" ")[0];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Nav — auth pages use their own simple nav */}
      <nav className="flex items-center justify-between px-5 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex items-center gap-3">
          <Link href="/account" className="text-sm text-gray-500 hover:text-gray-800 transition">Account</Link>
          <button onClick={handleLogout} className="text-sm bg-slate-100 hover:bg-slate-200 text-gray-700 px-3 py-1.5 rounded-lg transition">Log out</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>
              Welcome back, {firstName} 👋
            </h1>
            <p className="text-gray-500 text-sm">Keep building your financial future — one lesson at a time.</p>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-bold ${isPremium ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
            {isPremium ? "⭐ Premium Member" : "Free Plan"}
          </div>
        </div>

        {/* Upgrade banner — only for free users */}
        {!isPremium && (
          <div className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: "#1e3a5f" }}>
            <div>
              <div className="text-white font-bold text-lg mb-1">Unlock the full FinStart library</div>
              <p className="text-slate-300 text-sm">Get all 5 courses, 4 tools, and premium guides for just $12.99/month.</p>
            </div>
            <Link href="/pricing" className="shrink-0 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold text-sm whitespace-nowrap">
              Upgrade to Premium →
            </Link>
          </div>
        )}

        {/* Daily tip */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-4 mb-8 flex gap-3 items-start">
          <span className="text-2xl">💡</span>
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Daily Money Tip</div>
            <p className="text-emerald-900 text-sm">{tip}</p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Courses — takes 2 cols */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Your Courses</h2>
              <Link href="/courses" className="text-sm text-emerald-600 hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {courses.map((course) => {
                const locked = !course.free && !isPremium;
                return (
                  <Link
                    key={course.title}
                    href={locked ? "/pricing" : course.href}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition group ${locked ? "border-gray-100 opacity-60 hover:opacity-80" : "border-gray-100 hover:border-emerald-200 hover:bg-slate-50"}`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${locked ? "bg-slate-100" : "bg-emerald-50"}`}>
                      {locked ? "🔒" : course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-sm group-hover:text-emerald-700 transition truncate">{course.title}</div>
                      <div className="text-xs text-gray-400">{course.lessons} lessons · {course.free ? "Free" : "Premium"}</div>
                    </div>
                    <span className="text-gray-300 group-hover:text-emerald-500 transition text-sm shrink-0">
                      {locked ? "Unlock →" : "→"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Tools */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Tools</h2>
                <Link href="/tools" className="text-sm text-emerald-600 hover:underline">All →</Link>
              </div>
              <div className="space-y-2">
                {tools.map((tool) => {
                  const locked = !tool.free && !isPremium;
                  return (
                    <Link
                      key={tool.title}
                      href={locked ? "/pricing" : tool.href}
                      className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-emerald-700 transition group"
                    >
                      <span>{locked ? "🔒" : tool.icon}</span>
                      <span className="group-hover:underline truncate">{tool.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Account summary */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1e3a5f" }}>Account</h2>
              <div className="text-xs text-gray-400 mb-1 uppercase font-semibold">Email</div>
              <div className="text-sm text-gray-700 mb-4 truncate">{user?.email}</div>
              <div className="text-xs text-gray-400 mb-1 uppercase font-semibold">Plan</div>
              <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${isPremium ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                {isPremium ? "Premium" : "Free"}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <Link href="/account" className="text-sm text-emerald-600 hover:underline">Manage account →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Recommended Articles</h2>
            <Link href="/blog" className="text-sm text-emerald-600 hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition group"
              >
                <span className="text-emerald-500 mt-0.5 shrink-0">→</span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
