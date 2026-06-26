"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function InvestmentCalculatorPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [monthly, setMonthly] = useState("300");
  const [years, setYears] = useState("30");
  const [rate, setRate] = useState("8");
  const [initial, setInitial] = useState("0");
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const user = session?.user ?? null;
      if (!user) { router.push("/login"); return; }
      const { data } = await supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single();
      if (data?.status !== "premium") { router.push("/pricing"); return; }
      setChecking(false);
    });
  }, [router]);

  if (checking) return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;

  const m = parseFloat(monthly) || 0;
  const y = parseInt(years) || 0;
  const r = parseFloat(rate) / 100 / 12;
  const p = parseFloat(initial) || 0;
  const n = y * 12;

  // Future value of initial investment + monthly contributions
  const fvInitial = r > 0 ? p * Math.pow(1 + r, n) : p;
  const fvMonthly = r > 0 ? m * ((Math.pow(1 + r, n) - 1) / r) : m * n;
  const total = fvInitial + fvMonthly;
  const contributed = p + m * n;
  const gains = total - contributed;

  // Year-by-year table
  const yearlyData = Array.from({ length: y }, (_, i) => {
    const yr = i + 1;
    const months = yr * 12;
    const fvI = r > 0 ? p * Math.pow(1 + r, months) : p;
    const fvM = r > 0 ? m * ((Math.pow(1 + r, months) - 1) / r) : m * months;
    const val = fvI + fvM;
    const contrib = p + m * months;
    return { year: yr, value: val, contributed: contrib, gains: val - contrib };
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <Link href="/tools" className="text-sm text-gray-500 hover:text-gray-800">← All Tools</Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">Premium Tool</div>
          <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Investment Growth Calculator</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">See exactly how your monthly investments compound into wealth over time.</p>
        </div>

        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Starting amount", value: initial, set: setInitial, prefix: "$", placeholder: "0" },
              { label: "Monthly contribution", value: monthly, set: setMonthly, prefix: "$", placeholder: "300" },
              { label: "Years to grow", value: years, set: setYears, prefix: "", suffix: "years", placeholder: "30" },
              { label: "Expected annual return", value: rate, set: setRate, prefix: "", suffix: "%", placeholder: "8" },
            ].map(({ label, value, set, prefix, suffix, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                <div className="relative">
                  {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">{prefix}</span>}
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => { set(e.target.value); setCalculated(false); }}
                    placeholder={placeholder}
                    className={`w-full border border-gray-200 rounded-xl py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${prefix ? "pl-8 pr-4" : suffix ? "pl-4 pr-16" : "px-4"}`}
                  />
                  {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">{suffix}</span>}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setCalculated(true)} className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
            Calculate Growth
          </button>
        </div>

        {calculated && total > 0 && (
          <>
            {/* Summary */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Final Value", value: total, color: "#1e3a5f", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Total Contributed", value: contributed, color: "#059669", bg: "bg-emerald-50", border: "border-emerald-100" },
                { label: "Investment Gains", value: gains, color: "#d97706", bg: "bg-amber-50", border: "border-amber-100" },
              ].map((c) => (
                <div key={c.label} className={`${c.bg} border ${c.border} rounded-2xl p-6 text-center`}>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{c.label}</div>
                  <div className="text-3xl font-extrabold" style={{ color: c.color }}>{fmt(c.value)}</div>
                </div>
              ))}
            </div>

            {/* Insight bar */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
              <div className="text-sm font-semibold text-gray-700 mb-3">Where your money comes from</div>
              <div className="flex rounded-full overflow-hidden h-6 mb-3">
                <div className="bg-emerald-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(contributed / total) * 100}%` }}>
                  {Math.round((contributed / total) * 100)}%
                </div>
                <div className="bg-amber-400 flex items-center justify-center text-white text-xs font-bold" style={{ width: `${(gains / total) * 100}%` }}>
                  {Math.round((gains / total) * 100)}%
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /><span className="text-gray-600">Contributions: {fmt(contributed)}</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-400" /><span className="text-gray-600">Compound gains: {fmt(gains)}</span></div>
              </div>
            </div>

            {/* Year by year table */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e3a5f" }}>Year-by-Year Growth</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                      <th className="text-left py-2 pr-4">Year</th>
                      <th className="text-right py-2 pr-4">Contributed</th>
                      <th className="text-right py-2 pr-4">Gains</th>
                      <th className="text-right py-2">Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyData.filter((_, i) => i === 0 || (i + 1) % 5 === 0 || i === yearlyData.length - 1).map((row) => (
                      <tr key={row.year} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2.5 pr-4 font-semibold text-gray-700">Year {row.year}</td>
                        <td className="py-2.5 pr-4 text-right text-emerald-700">{fmt(row.contributed)}</td>
                        <td className="py-2.5 pr-4 text-right text-amber-600">{fmt(row.gains)}</td>
                        <td className="py-2.5 text-right font-bold" style={{ color: "#1e3a5f" }}>{fmt(row.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">Assumes {rate}% average annual return, compounded monthly.</p>
            </div>

            {/* Key insight */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <div className="font-bold text-emerald-800 mb-2">Key insight</div>
              <p className="text-emerald-700 text-sm">
                Of your {fmt(total)} final value, {fmt(gains)} ({Math.round((gains / total) * 100)}%) comes purely from compound growth — not money you put in. This is why starting early is more important than how much you invest.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

