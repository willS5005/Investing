"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useRequireAuth } from "@/lib/useAuth";

type Subscription = {
  status: string;
  stripe_customer_id: string | null;
  updated_at: string;
  created_at: string;
};

export default function AccountPage() {
  const router = useRouter();
  const { user: authUser, ready } = useRequireAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!ready || !authUser) return;
    const supabase = createClient();
    supabase
      .from("user_subscriptions")
      .select("status, stripe_customer_id, updated_at, created_at")
      .eq("user_id", authUser.id)
      .single()
      .then(({ data }) => {
        setSubscription(data);
        setLoading(false);
      });
  }, [ready, authUser]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleManageBilling = async () => {
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

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);

    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    if (newPassword.length < 8) {
      setPasswordMsg({ type: "error", text: "Password must be at least 8 characters." });
      return;
    }

    setPasswordLoading(true);
    const supabase = createClient();

    // Re-authenticate with current password first
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: authUser!.email!,
      password: currentPassword,
    });

    if (signInError) {
      setPasswordMsg({ type: "error", text: "Current password is incorrect." });
      setPasswordLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

    if (updateError) {
      setPasswordMsg({ type: "error", text: "Failed to update password. Please try again." });
    } else {
      setPasswordMsg({ type: "success", text: "Password updated successfully." });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
    setPasswordLoading(false);
  };

  const isPremium = subscription?.status === "premium";
  const email = authUser?.email ?? "";
  const memberSince = authUser?.created_at
    ? new Date(authUser.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : null;
  const planUpdated = subscription?.updated_at
    ? new Date(subscription.updated_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

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
        <div className="flex gap-4 items-center">
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 transition">Dashboard</Link>
          <button onClick={handleSignOut} className="text-sm text-gray-500 hover:text-gray-800 transition">Sign out</button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-8" style={{ color: "#1e3a5f" }}>My Account</h1>

        {/* Profile */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-5">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Profile</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold shrink-0">
              {email[0]?.toUpperCase() ?? "?"}
            </div>
            <div>
              <div className="font-semibold text-gray-800">{email}</div>
              {memberSince && (
                <div className="text-sm text-gray-400 mt-0.5">Member since {memberSince}</div>
              )}
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-5">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Subscription</h2>

          {isPremium ? (
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">
                  Premium
                </span>
                <span className="text-sm text-emerald-600 font-medium">Active</span>
              </div>
              {planUpdated && (
                <p className="text-xs text-gray-400 mb-4">Last updated {planUpdated}</p>
              )}
              <p className="text-gray-500 text-sm mb-5">
                You have full access to all 5 courses, 3 premium tools, and all future content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleManageBilling}
                  disabled={portalLoading}
                  className="bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-700 transition disabled:opacity-60"
                >
                  {portalLoading ? "Opening..." : "Manage Billing"}
                </button>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition"
                >
                  Go to Dashboard
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Cancel, update your payment method, or download invoices via the billing portal.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">Free</span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                Upgrade to unlock all 5 courses, the investment calculator, net worth tracker, and loan payoff calculator.
              </p>
              <div className="rounded-xl p-4 mb-4" style={{ background: "#f0f7ff" }}>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold" style={{ color: "#1e3a5f" }}>Premium Monthly</span>
                  <span className="font-bold" style={{ color: "#1e3a5f" }}>$12.99/mo</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold" style={{ color: "#1e3a5f" }}>Premium Annual</span>
                  <span className="font-bold text-emerald-600">$119.99/yr — save 23%</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition"
              >
                Upgrade to Premium →
              </Link>
            </div>
          )}
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-5">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Change Password</h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Your current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="At least 8 characters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Repeat new password"
              />
            </div>
            {passwordMsg && (
              <div className={`text-sm px-4 py-3 rounded-xl ${passwordMsg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {passwordMsg.text}
              </div>
            )}
            <button
              type="submit"
              disabled={passwordLoading}
              className="bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-700 transition disabled:opacity-60"
            >
              {passwordLoading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>

        {/* Sign out */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Session</h2>
          <p className="text-sm text-gray-500 mb-4">Signed in as <span className="font-medium text-gray-700">{email}</span></p>
          <button
            onClick={handleSignOut}
            className="text-sm text-red-500 hover:text-red-600 font-semibold transition"
          >
            Sign out of FinStart
          </button>
        </div>
      </div>
    </main>
  );
}
