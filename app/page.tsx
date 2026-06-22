import Link from "next/link";

const testimonials = [
  {
    name: "Jordan, 19",
    text: "I paid off my first credit card and started investing — all within 3 months of joining FinStart.",
  },
  {
    name: "Maya, 22",
    text: "The budgeting calculator changed everything. I finally know where my money goes.",
  },
  {
    name: "Tyler, 24",
    text: "Investing 101 explained index funds better than anything I found on YouTube.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <span className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>
          FinStart
        </span>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-6" style={{ color: "#1e3a5f" }}>
          Take Control of Your Money
          <br />
          at Any Age
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10">
          Learn budgeting, investing, and wealth building — built for 16–28 year olds who are ready
          to start.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-700 transition"
        >
          Start for Free — No Credit Card
        </Link>
      </section>

      {/* Free vs Premium */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e3a5f" }}>
          Everything You Need to Build Wealth
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="text-emerald-600 font-bold text-sm uppercase mb-2">Free</div>
            <div className="text-3xl font-extrabold mb-4">$0 / month</div>
            <ul className="space-y-3 text-gray-600">
              {[
                "5–10 beginner finance articles",
                "Basic budgeting guide (PDF)",
                "1 free budgeting calculator",
                "Newsletter signup",
                "Community preview (read-only)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="mt-8 block text-center border border-emerald-600 text-emerald-600 py-3 rounded-xl hover:bg-emerald-50 transition"
            >
              Get Started Free
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-8 text-white" style={{ background: "#1e3a5f" }}>
            <div className="font-bold text-sm uppercase mb-2 text-emerald-300">Premium</div>
            <div className="text-3xl font-extrabold mb-1">$9.99 / month</div>
            <div className="text-sm text-slate-300 mb-4">or $89 / year — save 26%</div>
            <ul className="space-y-3 text-slate-200">
              {[
                "Full course library (investing, budgeting, wealth)",
                "Premium e-books & guides",
                "Advanced budgeting calculators",
                "Private community forum",
                "Monthly Q&A sessions",
                "Exclusive tools & templates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=premium"
              className="mt-8 block text-center bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-400 transition font-semibold"
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1e3a5f" }}>
          Real Students. Real Results.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>
          Your financial future starts today.
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Join thousands of young adults taking control of their money.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-700 transition"
        >
          Create Your Free Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-10 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/courses" className="hover:text-gray-600">Courses</Link>
          <Link href="/tools" className="hover:text-gray-600">Tools</Link>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <Link href="/login" className="hover:text-gray-600">Login</Link>
        </div>
        <p>© 2026 FinStart. Built for the next generation of investors.</p>
      </footer>
    </main>
  );
}
