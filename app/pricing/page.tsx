"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const MONTHLY_PRICE_ID = "price_1TlJpGIDNA37hrc1TJWCXAYN";
const YEARLY_PRICE_ID = "price_1TlJpGIDNA37hrc1PT2rC51I";

export default function PricingPage() {
  const router = useRouter();
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.access_token) {
        setAccessToken(session.access_token);
      }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAccessToken(session?.access_token ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    const priceId = billing === "monthly" ? MONTHLY_PRICE_ID : YEARLY_PRICE_ID;

    if (!accessToken) {
      router.push("/login?next=/pricing");
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, accessToken }),
    });

    const data = await res.json();

    if (res.status === 401) {
      router.push("/login?next=/pricing");
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Simple, Transparent Pricing</h1>
          <p className="text-gray-500 text-lg">Start free. Upgrade when you&apos;re ready.</p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-xl p-1 mt-8">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${billing === "monthly" ? "bg-slate-800 text-white" : "text-gray-500 hover:text-gray-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${billing === "yearly" ? "bg-slate-800 text-white" : "text-gray-500 hover:text-gray-700"}`}
            >
              Yearly <span className="text-emerald-500 ml-1">Save 26%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="text-emerald-600 font-bold text-sm uppercase mb-2">Free</div>
            <div className="text-4xl font-extrabold mb-1">$0</div>
            <div className="text-gray-400 text-sm mb-6">Forever free — no credit card needed</div>
            <ul className="space-y-3 text-gray-600 mb-8">
              {[
                "Budgeting Basics course (5 lessons)",
                "50/30/20 budget calculator",
                "10 beginner finance articles",
                "Basic budgeting guide PDF",
                "Weekly newsletter",
                "Community read-only access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center border border-emerald-600 text-emerald-600 py-3 rounded-xl hover:bg-emerald-50 transition font-semibold">
              Get Started Free
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-8 text-white relative overflow-hidden" style={{ background: "#1e3a5f" }}>
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {billing === "yearly" ? "Best Value" : "Most Popular"}
            </div>
            <div className="text-emerald-300 font-bold text-sm uppercase mb-2">Premium</div>
            <div className="text-4xl font-extrabold mb-1">
              {billing === "monthly" ? "$9.99" : "$7.42"}
            </div>
            <div className="text-slate-300 text-sm mb-1">
              {billing === "monthly" ? "per month" : "per month, billed $89/year"}
            </div>
            {billing === "yearly" && (
              <div className="text-emerald-300 text-sm mb-6">You save $31/year vs monthly</div>
            )}
            {billing === "monthly" && <div className="mb-6" />}
            <ul className="space-y-3 text-slate-200 mb-8">
              {[
                "Everything in Free",
                "5 full courses (30+ lessons)",
                "All 4 interactive tools",
                "Premium e-books & guides",
                "Private community forum",
                "Monthly live Q&A sessions",
                "Exclusive templates & downloads",
                "Cancel anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-400 transition font-semibold disabled:opacity-60"
            >
              {loading ? "Loading..." : accessToken ? `Upgrade to Premium — ${billing === "monthly" ? "$9.99/mo" : "$89/yr"}` : "Log In to Upgrade"}
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">Secure checkout via Stripe · Cancel anytime</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#1e3a5f" }}>Common Questions</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel anytime from your account settings and you won't be charged again. You keep access until the end of your billing period.",
              },
              {
                q: "Do I need a credit card to sign up for free?",
                a: "No. The free plan requires no payment info at all. You only need a card when you choose to upgrade.",
              },
              {
                q: "What happens if I upgrade then cancel?",
                a: "You keep premium access until your billing period ends. After that you revert to the free plan with no data lost.",
              },
              {
                q: "Is my payment secure?",
                a: "Yes. All payments are processed by Stripe, which is trusted by millions of businesses. FinStart never stores your card details.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="font-semibold text-gray-800 mb-2">{faq.q}</div>
                <div className="text-gray-500 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
