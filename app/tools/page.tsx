import type { Metadata } from "next";
import Link from "next/link";
import { getSubscription } from "@/lib/getSubscription";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Free Financial Tools & Calculators",
  description: "Interactive financial calculators for young adults — budget calculator, investment growth calculator, net worth tracker, and loan payoff calculator.",
  openGraph: {
    title: "Free Financial Tools & Calculators | FinStart",
    description: "Interactive financial calculators — budget, investment growth, net worth, and loan payoff.",
    url: "/tools",
  },
};

const tools = [
  {
    title: "50/30/20 Budget Calculator",
    description: "Enter your take-home income and instantly see how to split it across needs, wants, and savings — with a full breakdown and personalized tips.",
    icon: "🧮",
    href: "/tools/budget-calculator",
    free: true,
    features: ["Pie chart breakdown", "Category suggestions", "Annual view", "Investment projection"],
  },
  {
    title: "Investment Growth Calculator",
    description: "See exactly how much your monthly investments will grow over time with compound interest. Adjust return rate, timeline, and contributions.",
    icon: "📈",
    href: "/tools/investment-calculator",
    free: false,
    features: ["Year-by-year growth table", "Compound interest visualization", "Adjustable return rate", "Contribution vs. growth breakdown"],
  },
  {
    title: "Net Worth Tracker",
    description: "Add your assets and liabilities to calculate your real net worth. See your financial health at a glance and track your progress over time.",
    icon: "💰",
    href: "/tools/net-worth-tracker",
    free: false,
    features: ["Assets vs. liabilities breakdown", "Net worth calculation", "Category breakdown", "Progress tracking"],
  },
  {
    title: "Loan Payoff Calculator",
    description: "Enter any loan and see exactly how extra payments save you money and time. Compare payoff strategies side by side.",
    icon: "🏦",
    href: "/tools/loan-payoff",
    free: false,
    features: ["Extra payment savings", "Payoff date comparison", "Total interest saved", "Avalanche vs. snowball comparison"],
  },
];

export default async function ToolsPage() {
  const { isPremium } = await getSubscription();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Financial Tools</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Interactive calculators that turn financial concepts into real numbers for your life.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => {
            const locked = !tool.free && !isPremium;
            return (
              <div key={tool.href} className={`bg-white rounded-2xl border ${locked ? "border-gray-200 opacity-90" : "border-gray-200"} p-6`}>
                <div className="flex gap-5 items-start">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${locked ? "bg-slate-100" : "bg-emerald-50"}`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl font-bold" style={{ color: "#1e3a5f" }}>{tool.title}</h2>
                      {tool.free ? (
                        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">Free</span>
                      ) : locked ? (
                        <span className="text-xs bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded-full">🔒 Premium</span>
                      ) : (
                        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">Premium</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((f) => (
                        <span key={f} className={`text-xs px-3 py-1 rounded-full ${locked ? "bg-slate-100 text-slate-500" : "bg-slate-100 text-slate-600"}`}>{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 self-center">
                    {locked ? (
                      <Link href="/pricing" className="block bg-slate-800 text-white text-sm px-5 py-2 rounded-xl font-semibold hover:bg-slate-700 transition">
                        Unlock →
                      </Link>
                    ) : (
                      <Link href={tool.href} className="block bg-emerald-600 text-white text-sm px-5 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition">
                        Open Tool →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!isPremium && (
          <div className="mt-10 rounded-2xl p-8 text-white text-center" style={{ background: "#1e3a5f" }}>
            <h2 className="text-2xl font-extrabold mb-2">Unlock all 3 premium tools</h2>
            <p className="text-slate-300 mb-6">Investment calculator, net worth tracker, and loan payoff calculator — plus all 5 courses.</p>
            <Link href="/pricing" className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold">
              Upgrade to Premium
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
