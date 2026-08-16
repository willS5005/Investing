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
  { title: "Budgeting Basics", icon: "💰", lessons: 5, href: "/courses/budgeting-basics", free: true, color: "bg-emerald-50", progress: 0 },
  { title: "Investing 101", icon: "📈", lessons: 6, href: "/courses/investing-101", free: false, color: "bg-blue-50", progress: 0 },
  { title: "Wealth Building", icon: "🏦", lessons: 7, href: "/courses/wealth-building", free: false, color: "bg-purple-50", progress: 0 },
  { title: "Student Finance", icon: "🎓", lessons: 5, href: "/courses/student-finance", free: false, color: "bg-pink-50", progress: 0 },
  { title: "First Job Finance", icon: "🎯", lessons: 5, href: "/courses/first-job-finance", free: false, color: "bg-orange-50", progress: 0 },
];

const toolsList = [
  { title: "Budget Calculator", icon: "🧮", href: "/tools/budget-calculator", free: true, description: "Plan your monthly spending" },
  { title: "Investment Calculator", icon: "📊", href: "/tools/investment-calculator", free: false, description: "See your money grow" },
  { title: "Net Worth Tracker", icon: "💎", href: "/tools/net-worth-tracker", free: false, description: "Track assets & liabilities" },
  { title: "Loan Payoff Calculator", icon: "📉", href: "/tools/loan-payoff", free: false, description: "Get out of debt faster" },
];

const articles = [
  { slug: "build-your-first-budget", title: "How to Build Your First Budget in 30 Minutes", icon: "💰" },
  { slug: "50-30-20-rule", title: "The 50/30/20 Rule Explained Simply", icon: "📊" },
  { slug: "start-investing-with-50-dollars", title: "How to Start Investing with Just $50", icon: "📈" },
  { slug: "roth-ira-for-beginners", title: "What Is a Roth IRA?", icon: "🏦" },
  { slug: "emergency-fund-guide", title: "How to Build a 6-Month Emergency Fund", icon: "🛡️" },
  { slug: "first-job-money-moves", title: "Your First Job: 5 Money Moves to Make Now", icon: "🎯" },
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
  const unlockedCourses = isPremium ? courses.length : 1;
  const totalLessons = courses.reduce((sum, c) => sum + c.lessons, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Nav */}
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

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Courses Available", value: `${unlockedCourses} of ${courses.length}`, icon: "📚", color: "bg-blue-50 text-blue-700" },
            { label: "Total Lessons", value: `${isPremium ? totalLessons : courses[0].lessons} lessons`, icon: "✏️", color: "bg-emerald-50 text-emerald-700" },
            { label: "Finance Tools", value: `${isPremium ? toolsList.length : 1} of ${toolsList.length}`, icon: "🧮", color: "bg-purple-50 text-purple-700" },
            { label: "Free Articles", value: "18 available", icon: "📖", color: "bg-amber-50 text-amber-700" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="font-extrabold text-lg mb-0.5" style={{ color: "#1e3a5f" }}>{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upgrade banner — only for free users */}
        {!isPremium && (
          <div className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: "#1e3a5f" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl shrink-0">🚀</div>
              <div>
                <div className="text-white font-bold text-lg mb-0.5">Unlock the full FinStart library</div>
                <p className="text-slate-300 text-sm">Get all 5 courses, 4 tools, and premium guides for just $12.99/month.</p>
              </div>
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

          {/* Courses — 2 cols */}
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
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${locked ? "bg-slate-100" : course.color}`}>
                      {locked ? "🔒" : course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-semibold text-gray-800 text-sm group-hover:text-emerald-700 transition truncate">{course.title}</div>
                        {!locked && (
                          <span className="text-xs text-gray-400 shrink-0 ml-2">{course.lessons} lessons</span>
                        )}
                      </div>
                      {/* Progress bar */}
                      {!locked && (
                        <div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-1.5 bg-emerald-400 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {course.progress === 0 ? "Not started" : `${course.progress}% complete`}
                          </div>
                        </div>
                      )}
                      {locked && (
                        <div className="text-xs text-gray-400">{course.lessons} lessons · Premium</div>
                      )}
                    </div>
                    <span className="text-gray-300 group-hover:text-emerald-500 transition text-sm shrink-0">
                      {locked ? "Unlock →" : "Start →"}
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
                <h2 className="font-bold" style={{ color: "#1e3a5f" }}>Finance Tools</h2>
                <Link href="/tools" className="text-sm text-emerald-600 hover:underline">All →</Link>
              </div>
              <div className="space-y-3">
                {toolsList.map((tool) => {
                  const locked = !tool.free && !isPremium;
                  return (
                    <Link
                      key={tool.title}
                      href={locked ? "/pricing" : tool.href}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0 ${locked ? "bg-slate-100" : "bg-emerald-50"}`}>
                        {locked ? "🔒" : tool.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-700 group-hover:text-emerald-700 transition truncate">{tool.title}</div>
                        <div className="text-xs text-gray-400 truncate">{tool.description}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Account summary */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold mb-4" style={{ color: "#1e3a5f" }}>Account</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                  {firstName[0]?.toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-800 truncate">{name}</div>
                  <div className="text-xs text-gray-400 truncate">{user?.email}</div>
                </div>
              </div>
              <div className={`flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-4 ${isPremium ? "bg-amber-50 text-amber-700" : "bg-slate-50 text-slate-600"}`}>
                <span>{isPremium ? "⭐" : "🆓"}</span>
                <span>{isPremium ? "Premium Member" : "Free Plan"}</span>
              </div>
              <Link href="/account" className="block text-center text-sm text-emerald-600 border border-emerald-200 rounded-xl py-2 hover:bg-emerald-50 transition font-medium">
                Manage Account
              </Link>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Recommended Reading</h2>
            <Link href="/blog" className="text-sm text-emerald-600 hover:underline">All articles →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-slate-50 transition group"
              >
                <span className="text-xl shrink-0">{a.icon}</span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1 min-w-0">{a.title}</span>
                <span className="text-gray-300 group-hover:text-emerald-500 transition text-sm shrink-0">→</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
