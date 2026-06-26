import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FinStart — Personal Finance Education for Young Adults",
  description: "FinStart was built to give young adults the financial education they never got in school. Learn about our mission, what we teach, and why we built this.",
  openGraph: {
    title: "About FinStart — Personal Finance Education for Young Adults",
    description: "FinStart was built to give young adults the financial education they never got in school.",
    url: "/about",
  },
};

const values = [
  {
    icon: "🎯",
    title: "Built for Beginners",
    desc: "No finance degree required. Every course, tool, and article is written for someone starting from zero — plain English, no jargon.",
  },
  {
    icon: "⚡",
    title: "Practical, Not Theoretical",
    desc: "We skip the textbook fluff. Everything on FinStart is actionable — things you can actually do with your money this week.",
  },
  {
    icon: "💰",
    title: "Affordable by Design",
    desc: "A full course library and interactive tools for less than the cost of a dinner out. Financial education shouldn't cost a fortune.",
  },
  {
    icon: "🔓",
    title: "Free to Start",
    desc: "You can learn budgeting basics, use the budget calculator, and read 10 articles without ever entering a credit card.",
  },
];

const topics = [
  { icon: "💰", title: "Budgeting", desc: "Track spending and stop living paycheck to paycheck" },
  { icon: "📈", title: "Investing", desc: "Stocks, ETFs, index funds — explained simply" },
  { icon: "🏦", title: "Wealth Building", desc: "Compound interest, net worth, and a 10-year plan" },
  { icon: "🎓", title: "Student Finance", desc: "Student loans, FAFSA, and college money moves" },
  { icon: "🎯", title: "First Job Finance", desc: "401k, taxes, and your first 30 days of work" },
  { icon: "💳", title: "Credit & Debt", desc: "Build great credit and pay down debt faster" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4 items-center">
          <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900 hidden md:block">Courses</Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 hidden md:block">Blog</Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Our Mission
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight" style={{ color: "#1e3a5f" }}>
          The Finance Education You Should Have Been Taught in School
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Most young adults enter the real world with zero financial knowledge. No one teaches you how to budget,
          invest, or build wealth — and by the time you figure it out, you&apos;ve already made expensive mistakes.
          FinStart exists to change that.
        </p>
      </section>

      {/* Mission statement */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="bg-slate-50 rounded-3xl p-10 text-center">
          <div className="text-4xl mb-4">🎓</div>
          <blockquote className="text-2xl font-bold leading-snug mb-4" style={{ color: "#1e3a5f" }}>
            &ldquo;We believe everyone deserves access to clear, honest financial education — not just the wealthy few.&rdquo;
          </blockquote>
          <p className="text-gray-500">— The FinStart Team</p>
        </div>
      </section>

      {/* The problem */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
              Why We Built FinStart
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              Most people in their teens and 20s are making critical money decisions — taking on student loans,
              getting their first paycheck, opening credit cards — with almost no guidance.
            </p>
            <p className="text-gray-500 mb-4 leading-relaxed">
              The existing financial content online is either too complicated, too generic, or designed to sell
              you something. We wanted to build something different: a focused, beginner-friendly platform
              designed specifically for young adults.
            </p>
            <p className="text-gray-500 leading-relaxed">
              FinStart covers everything from building your first budget to opening a Roth IRA — in plain
              language, with real examples, and tools you can actually use.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "5,000+", label: "Students enrolled" },
              { stat: "5", label: "In-depth courses" },
              { stat: "30+", label: "Lessons available" },
              { stat: "10+", label: "Free articles" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>{s.stat}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#1e3a5f" }}>
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: "#1e3a5f" }}>
            What You&apos;ll Learn
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            FinStart covers every financial topic a young adult needs — from your first budget to your first investment.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {topics.map((t) => (
              <div key={t.title} className="bg-slate-50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold mb-1" style={{ color: "#1e3a5f" }}>{t.title}</h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24" style={{ background: "#1e3a5f" }}>
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready to take control of your money?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
          Start with the free plan — no credit card needed. Upgrade when you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="inline-block bg-emerald-500 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-400 transition">
            Create Free Account
          </Link>
          <Link href="/courses" className="inline-block border border-slate-400 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-slate-700 transition">
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-10 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/courses" className="hover:text-gray-600">Courses</Link>
          <Link href="/tools" className="hover:text-gray-600">Tools</Link>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <Link href="/pricing" className="hover:text-gray-600">Pricing</Link>
        </div>
        <p>© 2026 FinStart. Built for the next generation of investors.</p>
      </footer>
    </main>
  );
}
