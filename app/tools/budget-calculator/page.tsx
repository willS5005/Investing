"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { createClient } from "@/lib/supabase";

ChartJS.register(ArcElement, Tooltip, Legend);

const Pie = dynamic(() => import("react-chartjs-2").then((m) => m.Pie), { ssr: false });

const formatCurrency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function ToolsPage() {
  const [income, setIncome] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setIsLoggedIn(!!data.user);
    });
  }, []);
  const [calculated, setCalculated] = useState(false);

  const raw = parseFloat(income.replace(/,/g, "")) || 0;
  const needs = raw * 0.5;
  const wants = raw * 0.3;
  const savings = raw * 0.2;

  const needsCategories = [
    { label: "Rent / Housing", pct: 0.30, color: "#1e3a5f" },
    { label: "Groceries", pct: 0.10, color: "#2d5282" },
    { label: "Transportation", pct: 0.08, color: "#3b6cb7" },
    { label: "Utilities & Phone", pct: 0.06, color: "#4a7fcb" },
    { label: "Insurance", pct: 0.05, color: "#6a9fd8" },
    { label: "Debt Minimums", pct: 0.05, color: "#8ab8e6" },
  ];

  const wantsCategories = [
    { label: "Dining Out", pct: 0.10, color: "#059669" },
    { label: "Entertainment", pct: 0.07, color: "#10b981" },
    { label: "Clothing", pct: 0.06, color: "#34d399" },
    { label: "Subscriptions", pct: 0.04, color: "#6ee7b7" },
    { label: "Hobbies & Other", pct: 0.03, color: "#a7f3d0" },
  ];

  const savingsCategories = [
    { label: "Emergency Fund", pct: 0.08, color: "#d97706" },
    { label: "Investing (Roth IRA / Index Funds)", pct: 0.08, color: "#f59e0b" },
    { label: "Extra Debt Payoff", pct: 0.04, color: "#fcd34d" },
  ];

  const pieData = {
    labels: ["Needs (50%)", "Wants (30%)", "Savings (20%)"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#1e3a5f", "#059669", "#f59e0b"],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { position: "bottom" as const, labels: { padding: 20, font: { size: 13 } } },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; parsed: number }) =>
            raw > 0
              ? ` ${ctx.label}: ${formatCurrency((ctx.parsed / 100) * raw)}/mo`
              : ` ${ctx.label}`,
        },
      },
    },
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (raw > 0) setCalculated(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Articles</Link>
          <Link href="/courses/budgeting-basics" className="text-sm text-gray-600 hover:text-gray-900">Courses</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">Free Tool</div>
          <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>50/30/20 Budget Calculator</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Enter your monthly take-home income and see exactly how to allocate it across needs, wants, and savings.
          </p>
        </div>

        {/* Income input */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <form onSubmit={handleCalculate} className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly take-home income (after taxes)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input
                  type="number"
                  min="1"
                  value={income}
                  onChange={(e) => { setIncome(e.target.value); setCalculated(false); }}
                  placeholder="3,500"
                  className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Use your take-home pay, not your gross salary</p>
            </div>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition whitespace-nowrap"
            >
              Calculate My Budget
            </button>
          </form>
        </div>

        {calculated && raw > 0 && (
          <>
            {/* Summary cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Needs", sublabel: "50% — Essentials", amount: needs, color: "#1e3a5f", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Wants", sublabel: "30% — Lifestyle", amount: wants, color: "#059669", bg: "bg-emerald-50", border: "border-emerald-100" },
                { label: "Savings", sublabel: "20% — Future", amount: savings, color: "#d97706", bg: "bg-amber-50", border: "border-amber-100" },
              ].map((c) => (
                <div key={c.label} className={`${c.bg} border ${c.border} rounded-2xl p-6 text-center`}>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{c.sublabel}</div>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: c.color }}>
                    {formatCurrency(c.amount)}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Pie chart */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center">
                <h2 className="text-lg font-bold mb-6" style={{ color: "#1e3a5f" }}>Your Budget Breakdown</h2>
                <div className="w-64 h-64">
                  <Pie data={pieData} options={pieOptions} />
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  Based on {formatCurrency(raw)}/month take-home income
                </p>
              </div>

              {/* Annual view */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-lg font-bold mb-6" style={{ color: "#1e3a5f" }}>Annual View</h2>
                <div className="space-y-4">
                  {[
                    { label: "Total annual income", amount: raw * 12, color: "text-gray-800" },
                    { label: "Needs (50%)", amount: needs * 12, color: "text-blue-700" },
                    { label: "Wants (30%)", amount: wants * 12, color: "text-emerald-700" },
                    { label: "Savings (20%)", amount: savings * 12, color: "text-amber-600" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <span className="text-sm text-gray-600">{row.label}</span>
                      <span className={`font-bold ${row.color}`}>{formatCurrency(row.amount)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="text-xs font-bold text-amber-700 uppercase mb-1">If you invest your savings</div>
                  <div className="text-sm text-amber-800">
                    {formatCurrency(savings)}/month at 8% avg return
                    <br />
                    <span className="font-bold">10 years: {formatCurrency(savings * 12 * 10 * 1.48)}</span>
                    <span className="text-xs ml-1">(~{formatCurrency(savings * 12 * 10)} contributed)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Needs Breakdown", color: "#1e3a5f", bg: "bg-blue-50", categories: needsCategories },
                { title: "Wants Breakdown", color: "#059669", bg: "bg-emerald-50", categories: wantsCategories },
                { title: "Savings Breakdown", color: "#d97706", bg: "bg-amber-50", categories: savingsCategories },
              ].map((section) => (
                <div key={section.title} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-bold mb-4 text-sm uppercase" style={{ color: section.color }}>{section.title}</h3>
                  <div className="space-y-3">
                    {section.categories.map((cat) => (
                      <div key={cat.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{cat.label}</span>
                          <span className="font-semibold text-gray-800">{formatCurrency(raw * cat.pct)}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full"
                            style={{ width: `${(cat.pct / 0.5) * 100}%`, backgroundColor: cat.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
              <h2 className="text-lg font-bold mb-6" style={{ color: "#1e3a5f" }}>
                Personalized Tips for Your Income
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🏦",
                    title: "Open a high-yield savings account",
                    body: `Move your ${formatCurrency(savings * 0.4)}/month emergency fund contribution to an account earning 4–5% APY instead of the typical 0.01%.`,
                  },
                  {
                    icon: "📈",
                    title: "Max out your Roth IRA",
                    body: `With ${formatCurrency(savings)}/month in savings, you can contribute the full $583/month ($7,000/year) to a Roth IRA for tax-free retirement growth.`,
                  },
                  {
                    icon: "🍽️",
                    title: "Watch dining out",
                    body: `Your wants budget allows ${formatCurrency(raw * 0.10)}/month for dining. Track this category — it's where most budgets overspend first.`,
                  },
                  {
                    icon: "📋",
                    title: "Audit your subscriptions",
                    body: `Your budget includes ${formatCurrency(raw * 0.04)}/month for subscriptions. Review every recurring charge monthly and cancel anything unused.`,
                  },
                ].map((tip) => (
                  <div key={tip.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{tip.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">{tip.title}</div>
                      <p className="text-sm text-gray-500">{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8 text-center text-white" style={{ background: "#1e3a5f" }}>
              {isLoggedIn ? (
                saved ? (
                  <>
                    <div className="text-4xl mb-3">✅</div>
                    <h2 className="text-2xl font-extrabold mb-2">Budget saved!</h2>
                    <p className="text-slate-300 mb-6">Head to your dashboard to view your progress and continue learning.</p>
                    <Link href="/dashboard" className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold">
                      Go to Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold mb-2">Ready to put this plan into action?</h2>
                    <p className="text-slate-300 mb-6">Save your budget and track your progress from your dashboard.</p>
                    <button
                      onClick={() => setSaved(true)}
                      className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold"
                    >
                      Save My Budget
                    </button>
                  </>
                )
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold mb-2">Ready to put this plan into action?</h2>
                  <p className="text-slate-300 mb-6">
                    Create a free account to save your budget, track your progress, and access the Budgeting Basics course.
                  </p>
                  <Link href="/signup" className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold">
                    Save My Budget — It&apos;s Free
                  </Link>
                </>
              )}
            </div>
          </>
        )}

        {!calculated && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-6xl mb-4">🧮</div>
            <p className="text-lg">Enter your monthly income above to see your personalized budget breakdown.</p>
          </div>
        )}
      </div>
    </main>
  );
}
