"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

type Subscription = {
  status: string;
  stripe_customer_id: string | null;
  updated_at: string;
};

export default function AccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const user = session?.user ?? null;
      if (!user) {
        router.push("/login");
        return;
      }
      setEmail(user.email ?? null);

      const { data } = await supabase
        .from("user_subscriptions")
        .select("status, stripe_customer_id, updated_at")
        .eq("user_id", user.id)
        .single();

      setSubscription(data);
      setLoading(false);
    });
  }, [router]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    const res = await fetch("/api/customer-portal", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Could not open billing portal. Please try again.");
      setPortalLoading(false);
    }
  };

  const isPremium = subscription?.status === "premium";

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
          <button onClick={handleSignOut} className="text-sm text-gray-600 hover:text-gray-900">Sign out</button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: "#1e3a5f" }}>My Account</h1>

        {/* Profile */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Profile</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold">
              {email?.[0]?.toUpperCase() ?? "?"}
            </div>
            <div>
              <div className="font-semibold text-gray-800">{email}</div>
              <div className="text-sm text-gray-400">FinStart member</div>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Subscription</h2>

          {isPremium ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">Premium</span>
                <span className="text-gray-500 text-sm">Active</span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                You have full access to all courses, tools, guides, and community features.
              </p>
              <button
                onClick={handleManageSubscription}
                disabled={portalLoading}
                className="bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-700 transition disabled:opacity-60"
              >
                {portalLoading ? "Opening..." : "Manage Subscription"}
              </button>
              <p className="text-xs text-gray-400 mt-2">Cancel, update payment method, or view invoices via Stripe.</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">Free</span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                Upgrade to Premium to unlock all 5 courses, interactive tools, and exclusive guides.
              </p>
              <Link
                href="/pricing"
                className="inline-block bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-400 transition"
              >
                Upgrade to Premium
              </Link>
            </div>
          )}
        </div>

        {/* Danger zone */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Account</h2>
          <button
            onClick={handleSignOut}
            className="text-sm text-red-500 hover:text-red-600 font-semibold"
          >
            Sign out of FinStart
          </button>
        </div>
      </div>
    </main>
  );
}
