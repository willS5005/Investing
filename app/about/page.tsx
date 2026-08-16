import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "About FinStart",
  description: "FinStart is a personal finance education platform built for young adults who want to learn budgeting, investing, and wealth building — in plain English.",
  openGraph: {
    title: "About FinStart",
    description: "FinStart is a personal finance education platform built for young adults who want to learn budgeting, investing, and wealth building — in plain English.",
    url: "/about",
  },
};

const values = [
  { icon: "🎯", title: "Built for beginners", description: "No jargon, no assumed knowledge. Every lesson starts from zero and builds from there." },
  { icon: "⚡", title: "Practical over theoretical", description: "We skip the textbook definitions. Every concept is taught with real numbers and real-life examples." },
  { icon: "💰", title: "Honest about money", description: "We tell you what actually works — not what sounds impressive. Finance does not have to be complicated." },
  { icon: "🚀", title: "Start where you are", description: "Whether you have $50 or $5,000, FinStart meets you where you are and helps you move forward." },
];

const stats = [
  { value: "5,000+", label: "Students learning" },
  { value: "5", label: "Full courses" },
  { value: "18", label: "Free articles" },
  { value: "4", label: "Finance tools" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Our mission
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: "#1e3a5f" }}>
            Finance education that should have been taught in school
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            FinStart exists because most young adults graduate without ever learning how to budget, invest, or build wealth. We&apos;re here to change that.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>Why we built FinStart</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              Most people in their teens and 20s are making their biggest financial decisions &mdash; first credit card, first job, student loans, first investment &mdash; with almost no guidance. Schools don&apos;t teach it. Parents often don&apos;t know it. And most finance content online is either too complicated, too generic, or trying to sell you something.
            </p>
            <p>
              FinStart was built to fill that gap. We created a place where anyone &mdash; regardless of income, background, or how much they already know &mdash; can learn how money actually works and what to do with it.
            </p>
            <p>
              Our courses are short enough to finish in a weekend, practical enough to apply on Monday, and honest enough to tell you what actually matters versus what sounds impressive. No fluff. No upsells. Just the financial education you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>What we stand for</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles behind every course, article, and tool we build.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-7 flex gap-5">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Everything you need to start</h2>
            <p className="text-gray-500 max-w-xl mx-auto">FinStart is not just articles &mdash; it is a full learning platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "Courses", description: "5 structured courses covering budgeting, investing, wealth building, student finance, and your first job. Short lessons you can finish in under an hour.", href: "/courses", cta: "Browse courses", color: "bg-blue-50" },
              { icon: "🧮", title: "Interactive Tools", description: "Run real numbers on your budget, investments, and loans. See how small changes today lead to big results over time.", href: "/tools", cta: "Try the tools", color: "bg-emerald-50" },
              { icon: "📖", title: "Free Articles", description: "18 practical guides covering everything from building your first budget to understanding your 401k. All free, forever.", href: "/blog", cta: "Read articles", color: "bg-purple-50" },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-2xl p-7 flex flex-col">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{item.description}</p>
                <Link href={item.href} className="text-sm font-semibold text-emerald-600 hover:underline">
                  {item.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center" style={{ background: "#1e3a5f" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to take control of your finances?</h2>
          <p className="text-slate-300 mb-8">Start with a free account. No credit card. No catch.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup" className="inline-block bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-400 transition">
              Get Started Free
            </Link>
            <Link href="/courses" className="inline-block border border-slate-500 text-slate-200 font-semibold px-8 py-3.5 rounded-xl hover:border-slate-300 hover:text-white transition">
              Browse Courses
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-5">
            Questions? <a href="mailto:willsobotka2005@gmail.com" className="text-slate-300 hover:text-white transition">Contact us</a>
          </p>
        </div>
      </section>
    </main>
  );
}
