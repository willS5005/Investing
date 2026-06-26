"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function calcPayoff(balance: number, annualRate: number, monthlyPayment: number) {
  if (monthlyPayment <= 0 || balance <= 0) return { months: 0, totalPaid: 0, totalInterest: 0 };
  const r = annualRate / 100 / 12;
  let bal = balance;
  let months = 0;
  let totalInterest = 0;
  while (bal > 0 && months < 600) {
    const interest = bal * r;
    totalInterest += interest;
    bal = bal + interest - monthlyPayment;
    months++;
    if (bal < 0) bal = 0;
  }
  return { months, totalPaid: monthlyPayment * months, totalInterest };
}

export default function LoanPayoffPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [balance, setBalance] = useState("30000");
  const [rate, setRate] = useState("6.5");
  const [payment, setPayment] = useState("400");
  const [extra, setExtra] = useState("100");
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

  const bal = parseFloat(balance) || 0;
  const r = parseFloat(rate) || 0;
  const pmt = parseFloat(payment) || 0;
  const ext = parseFloat(extra) || 0;

  const standard = calcPayoff(bal, r, pmt);
  const accelerated = calcPayoff(bal, r, pmt + ext);

  const monthsSaved = standard.months - accelerated.months;
  const interestSaved = standard.totalInterest - accelerated.totalInterest;

  const formatMonths = (m: number) => {
    if (m === 0) return "—";
    const yrs = Math.floor(m / 12);
    const mos = m % 12;
    if (yrs === 0) return `${mos} months`;
    if (mos === 0) return `${yrs} years`;
    return `${yrs}y ${mos}m`;
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <Link href="/tools" className="text-sm text-gray-500 hover:text-gray-800">← All Tools</Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">Premium Tool</div>
          <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Loan Payoff Calculator</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">See how extra payments save you thousands and cut years off your loan.</p>
        </div>

        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Loan balance", value: balance, set: setBalance, prefix: "$", placeholder: "30000" },
              { label: "Annual interest rate", value: rate, set: setRate, suffix: "%", placeholder: "6.5" },
              { label: "Monthly payment", value: payment, set: setPayment, prefix: "$", placeholder: "400" },
              { label: "Extra monthly payment", value: extra, set: setExtra, prefix: "$", placeholder: "100" },
            ].map(({ label, value, set, prefix, suffix, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                <div className="relative">
                  {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">{prefix}</span>}
                  <input
                    type="number"
                    min="0"
                    value={value}
                    onChange={(e) => { set(e.target.value); setCalculated(false); }}
                    placeholder={placeholder}
                    className={`w-full border border-gray-200 rounded-xl py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 ${prefix ? "pl-7 pr-4" : suffix ? "pl-4 pr-10" : "px-4"}`}
                  />
                  {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">{suffix}</span>}
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setCalculated(true)} className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
            Calculate Payoff
          </button>
        </div>

        {calculated && bal > 0 && pmt > 0 && (
          <>
            {/* Comparison */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-sm font-bold text-gray-400 uppercase mb-4">Standard Payoff</div>
                <div className="text-xs text-gray-400 mb-1">{fmt(pmt)}/month</div>
                <div className="space-y-3">
                  <div><div className="text-xs text-gray-400">Payoff time</div><div className="text-2xl font-extrabold" style={{ color: "#1e3a5f" }}>{formatMonths(standard.months)}</div></div>
                  <div><div className="text-xs text-gray-400">Total paid</div><div className="text-lg font-bold text-gray-800">{fmt(standard.totalPaid)}</div></div>
                  <div><div className="text-xs text-gray-400">Total interest</div><div className="text-lg font-bold text-red-500">{fmt(standard.totalInterest)}</div></div>
                </div>
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ background: "#1e3a5f" }}>
                <div className="text-sm font-bold text-emerald-300 uppercase mb-4">With Extra {fmt(ext)}/month</div>
                <div className="text-xs text-emerald-300 mb-1">{fmt(pmt + ext)}/month total</div>
                <div className="space-y-3">
                  <div><div className="text-xs text-slate-300">Payoff time</div><div className="text-2xl font-extrabold text-white">{formatMonths(accelerated.months)}</div></div>
                  <div><div className="text-xs text-slate-300">Total paid</div><div className="text-lg font-bold text-white">{fmt(accelerated.totalPaid)}</div></div>
                  <div><div className="text-xs text-slate-300">Total interest</div><div className="text-lg font-bold text-emerald-300">{fmt(accelerated.totalInterest)}</div></div>
                </div>
              </div>
            </div>

            {/* Savings callout */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-xs font-semibold text-emerald-600 uppercase mb-1">Time saved</div>
                  <div className="text-3xl font-extrabold text-emerald-700">{formatMonths(monthsSaved)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-emerald-600 uppercase mb-1">Interest saved</div>
                  <div className="text-3xl font-extrabold text-emerald-700">{fmt(interestSaved)}</div>
                </div>
              </div>
              <p className="text-center text-sm text-emerald-700 mt-4 font-medium">
                By adding just {fmt(ext)}/month, you save {fmt(interestSaved)} in interest and pay off {formatMonths(monthsSaved)} early.
              </p>
            </div>

            {/* What if table */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e3a5f" }}>What if you paid even more?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                      <th className="text-left py-2 pr-4">Extra/month</th>
                      <th className="text-right py-2 pr-4">Payoff time</th>
                      <th className="text-right py-2 pr-4">Interest paid</th>
                      <th className="text-right py-2">Interest saved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 50, 100, 200, 500].map((e) => {
                      const res = calcPayoff(bal, r, pmt + e);
                      const saved = standard.totalInterest - res.totalInterest;
                      return (
                        <tr key={e} className={`border-b border-gray-50 ${e === ext ? "bg-emerald-50" : "hover:bg-gray-50"}`}>
                          <td className="py-2.5 pr-4 font-semibold text-gray-700">+{fmt(e)}</td>
                          <td className="py-2.5 pr-4 text-right text-gray-600">{formatMonths(res.months)}</td>
                          <td className="py-2.5 pr-4 text-right text-red-500">{fmt(res.totalInterest)}</td>
                          <td className="py-2.5 text-right font-bold text-emerald-600">{fmt(saved)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

