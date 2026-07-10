import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>404</div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: "#1e3a5f" }}>Page not found</h1>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL might be wrong.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-white transition"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
