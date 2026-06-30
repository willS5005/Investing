"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useRequireAuth } from "@/lib/useAuth";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Item = { label: string; amount: string };

const defaultAssets: Item[] = [
  { label: "Checking Account", amount: "" },
  { label: "Savings Account", amount: "" },
  { label: "Investment Accounts", amount: "" },
  { label: "Retirement Accounts (401k/IRA)", amount: "" },
  { label: "Car Value", amount: "" },
  { label: "Other Assets", amount: "" },
];

const defaultLiabilities: Item[] = [
  { label: "Student Loans", amount: "" },
  { label: "Credit Card Balances", amount: "" },
  { label: "Car Loan", amount: "" },
  { label: "Personal Loans", amount: "" },
  { label: "Other Debt", amount: "" },
];

export default function NetWorthTrackerPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [assets, setAssets] = useState<Item[]>(defaultAssets);
  const [liabilities, setLiabilities] = useState<Item[]>(defaultLiabilities);
  const [calculated, setCalculated] = useState(false);

  const { user, ready } = useRequireAuth();
  useEffect(() => {
    if (!ready || !user) return;
    const supabase = createClient();
    supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single().then(({ data }) => {
      if (data?.status !== "premium") { router.push("/pricing"); return; }
      setChecking(false);
    });
  }, [ready, user, router]);

  if (checking) return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;

  const totalAssets = assets.reduce((sum, a) => sum + (parseFloat(a.amount) || 0), 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + (parseFloat(l.amount) || 0), 0);
  const netWorth = totalAssets - totalLiabilities;

  const updateAsset = (i: number, field: keyof Item, value: string) => {
    const updated = [...assets];
    updated[i] = { ...updated[i], [field]: value };
    setAssets(updated);
    setCalculated(false);
  };

  const updateLiability = (i: number, field: keyof Item, value: string) => {
    const updated = [...liabilities];
    updated[i] = { ...updated[i], [field]: value };
    setLiabilities(updated);
    setCalculated(false);
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
          <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Net Worth Tracker</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Add your assets and debts to calculate your true financial picture.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Assets */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-1" style={{ color: "#059669" }}>Assets</h2>
            <p className="text-xs text-gray-400 mb-5">Everything you own</p>
            <div className="space-y-3">
              {assets.map((a, i) => (
                <div key={i}>
                  <label className="block text-xs font-medium text-gray-500 mb-1">{a.label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      min="0"
                      value={a.amount}
                      onChange={(e) => updateAsset(i, "amount", e.target.value)}
                      placeholder="0"
                      className="w-full border border-gray-200 rounded-xl pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total Assets</span>
              <span className="text-xl font-extrabold text-emerald-600">{fmt(totalAssets)}</span>
            </div>
          </div>

          {/* Liabilities */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-1 text-red-600">Liabilities</h2>
            <p className="text-xs text-gray-400 mb-5">Everything you owe</p>
            <div className="space-y-3">
              {liabilities.map((l, i) => (
                <div key={i}>
                  <label className="block text-xs font-medium text-gray-500 mb-1">{l.label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      min="0"
                      value={l.amount}
                      onChange={(e) => updateLiability(i, "amount", e.target.value)}
                      placeholder="0"
                      className="w-full border border-gray-200 rounded-xl pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total Liabilities</span>
              <span className="text-xl font-extrabold text-red-500">{fmt(totalLiabilities)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCalculated(true)}
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-8"
        >
          Calculate My Net Worth
        </button>

        {calculated && (
          <>
            {/* Net worth result */}
            <div className={`rounded-2xl p-8 text-center mb-8 ${netWorth >= 0 ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}>
              <div className="text-sm font-semibold text-gray-500 mb-2">Your Net Worth</div>
              <div className={`text-5xl font-extrabold mb-2 ${netWorth >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                {netWorth >= 0 ? "" : "-"}{fmt(Math.abs(netWorth))}
              </div>
              <p className="text-sm text-gray-500">
                {netWorth >= 0
                  ? "Great — your assets exceed your debts. Keep building."
                  : "Your debts currently exceed your assets. Focus on reducing high-interest debt and building savings."}
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e3a5f" }}>Full Breakdown</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-600">Total Assets</span>
                  <span className="font-bold text-emerald-600">{fmt(totalAssets)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-600">Total Liabilities</span>
                  <span className="font-bold text-red-500">−{fmt(totalLiabilities)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-bold text-gray-800">Net Worth</span>
                  <span className={`font-extrabold text-lg ${netWorth >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                    {netWorth >= 0 ? "" : "−"}{fmt(Math.abs(netWorth))}
                  </span>
                </div>
              </div>
              {totalAssets > 0 && (
                <div className="mt-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Asset vs. Debt Ratio</div>
                  <div className="flex rounded-full overflow-hidden h-4">
                    <div className="bg-emerald-500" style={{ width: `${Math.min((totalAssets / (totalAssets + totalLiabilities)) * 100, 100)}%` }} />
                    <div className="bg-red-400" style={{ width: `${Math.min((totalLiabilities / (totalAssets + totalLiabilities)) * 100, 100)}%` }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Assets {Math.round((totalAssets / (totalAssets + totalLiabilities)) * 100)}%</span>
                    <span>Debt {Math.round((totalLiabilities / (totalAssets + totalLiabilities)) * 100)}%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Insight */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
              <div className="font-bold text-gray-800 mb-2">What to focus on next</div>
              {netWorth < 0 ? (
                <p className="text-gray-600 text-sm">Your net worth is negative — this is common and fixable. Prioritize paying down high-interest debt (anything above 7%), then build a small emergency fund, then start investing. Every dollar of debt eliminated directly raises your net worth.</p>
              ) : netWorth < 10000 ? (
                <p className="text-gray-600 text-sm">You&apos;re in positive territory — a great foundation. Focus on building your emergency fund to 3–6 months of expenses, then maximize your Roth IRA ($7,000/year) before growing other investments.</p>
              ) : (
                <p className="text-gray-600 text-sm">Strong net worth position. Make sure your investment accounts are diversified in low-cost index funds, your retirement accounts are being maximized, and you have 3–6 months of expenses in a high-yield savings account.</p>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}


