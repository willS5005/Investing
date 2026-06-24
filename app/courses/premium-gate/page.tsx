import Link from "next/link";

export default function PremiumGatePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-3xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
          This is a Premium Course
        </h1>
        <p className="text-gray-500 mb-8">
          Upgrade to FinStart Premium to unlock all 5 courses, interactive tools, guides, and community access.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition mb-4"
        >
          Upgrade to Premium — from $89/yr
        </Link>
        <div className="mt-4">
          <Link href="/courses" className="text-sm text-gray-400 hover:text-gray-600">
            ← Back to courses
          </Link>
        </div>
      </div>
    </main>
  );
}
