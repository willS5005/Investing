import Link from "next/link";

export default function UpgradeSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
          Welcome to Premium!
        </h1>
        <p className="text-gray-500 mb-8">
          Your account has been upgraded. You now have full access to all courses, tools, guides, and the community.
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
