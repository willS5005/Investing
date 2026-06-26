"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function UpgradeSuccessPage() {
  const [status, setStatus] = useState<"loading" | "loggedIn" | "loggedOut">("loading");

  useEffect(() => {
    const supabase = createClient();

    // Give Supabase a moment to refresh the session after the Stripe redirect
    const check = async () => {
      // Try refreshing the session first
      await supabase.auth.refreshSession();
      const { data: { user } } = await supabase.auth.getUser();
      setStatus(user ? "loggedIn" : "loggedOut");
    };

    // Small delay to let the session settle after the cross-domain redirect
    const timer = setTimeout(check, 500);
    return () => clearTimeout(timer);
  }, []);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-gray-400 text-sm">Loading...</div>
      </main>
    );
  }

  if (status === "loggedOut") {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-2xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
            Payment Successful!
          </h1>
          <p className="text-gray-500 mb-2">
            Your premium account is active. Your session expired during checkout — just log back in to access everything.
          </p>
          <p className="text-emerald-600 text-sm font-semibold mb-8">
            Your payment and premium access are confirmed ✓
          </p>
          <Link
            href="/login"
            className="block bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition font-semibold"
          >
            Log In to Access Premium
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
          Welcome to Premium!
        </h1>
        <p className="text-gray-500 mb-8">
          Your account has been upgraded. You now have full access to all courses, tools, and guides.
        </p>
        <div className="space-y-3">
          <Link
            href="/courses"
            className="block bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition font-semibold"
          >
            Browse All Courses
          </Link>
          <Link
            href="/dashboard"
            className="block border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-slate-50 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
