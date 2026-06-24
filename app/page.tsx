import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FinStart — Personal Finance for Young Adults",
  description: "Free courses, tools, and guides that teach budgeting, investing, and wealth building to people in their 20s and 30s. Start free — no credit card needed.",
  openGraph: {
    title: "FinStart — Personal Finance for Young Adults",
    description: "Free courses, tools, and guides that teach budgeting, investing, and wealth building to people in their 20s and 30s.",
    url: "/",
  },
};

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

const freeCourses = [
  {
    title: "Budgeting Basics",
    lessons: 5,
    description: "Learn how to track spending, build your first budget, and start saving — even on a tight income.",
    topics: ["What is a budget?", "Tracking expenses", "The 50/30/20 method", "Cutting costs", "Setting savings goals"],
  },
];

const premiumCourses = [
  {
    title: "Investing 101",
    lessons: 6,
    description: "Go from zero to confident investor. Understand stocks, ETFs, index funds, and how to open your first account.",
    topics: ["Stocks vs bonds vs ETFs", "Index funds explained", "Opening a brokerage account", "Dollar-cost averaging", "Long-term thinking"],
  },
  {
    title: "Wealth Building for Young Adults",
    lessons: 7,
    description: "Build a real financial foundation — net worth, compound interest, credit, real estate basics, and a 10-year plan.",
    topics: ["Net worth basics", "Compound interest", "Multiple income streams", "Real estate basics", "Tax-advantaged accounts"],
  },
  {
    title: "Student Finance",
    lessons: 5,
    description: "Navigate student loans, scholarships, part-time income, and money habits that set you up for life after school.",
    topics: ["Student loans explained", "Paying off debt faster", "Scholarships & FAFSA", "Part-time income strategies", "Post-grad money moves"],
  },
  {
    title: "First Job Finance",
    lessons: 5,
    description: "Just started your first job? Learn the 5 money moves to make in your first 30 days — and build from there.",
    topics: ["401k & employer match", "Health insurance basics", "Tax withholding", "Building an emergency fund", "Lifestyle inflation trap"],
  },
];

const tools = [
  {
    title: "50/30/20 Budget Calculator",
    description: "Enter your income and instantly see how to split it between needs, wants, and savings. Includes a visual pie chart.",
    free: true,
  },
  {
    title: "Savings Goal Tracker",
    description: "Set a savings target and see exactly how long it will take based on your monthly contributions.",
    free: false,
  },
  {
    title: "Debt Payoff Planner",
    description: "Enter your debts and get a month-by-month payoff schedule using the avalanche or snowball method.",
    free: false,
  },
  {
    title: "Investment Growth Projector",
    description: "See how your money grows over time with compound interest. Adjust contribution amounts and time horizons.",
    free: false,
  },
];

const articles = [
  "How to Build Your First Budget in 30 Minutes",
  "The 50/30/20 Rule: The Only Budget Formula You Need at 20",
  "How to Start Investing with Just $50",
  "5 Money Mistakes Almost Every College Student Makes",
  "What Is a Roth IRA and Why Every 18-Year-Old Should Open One",
  "How to Pay Off Student Loans Faster",
  "The Beginner's Guide to Index Funds",
  "How to Build a 6-Month Emergency Fund on a Small Income",
  "Your First Job: 5 Money Moves in the First 30 Days",
  "Credit Cards 101: How to Build Credit Without Debt",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <span className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>
          FinStart
        </span>
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#courses" className="hover:text-gray-900">Courses</a>
          <a href="#tools" className="hover:text-gray-900">Tools</a>
          <a href="#articles" className="hover:text-gray-900">Articles</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Built for ages 16–28
        </div>
        <h1 className="text-5xl font-extrabold leading-tight mb-6" style={{ color: "#1e3a5f" }}>
          Take Control of Your Money
          <br />
          at Any Age
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          FinStart teaches you budgeting, investing, and wealth building through short courses,
          interactive tools, and a community of young adults doing the same thing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="inline-block bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-700 transition">
            Start for Free — No Credit Card
          </Link>
          <a href="#courses" className="inline-block border border-gray-300 text-gray-700 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition">
            See What&apos;s Inside
          </a>
        </div>
        <div className="flex justify-center gap-8 mt-12 text-sm text-gray-400">
          <span>✓ 5 free courses</span>
          <span>✓ 4 interactive tools</span>
          <span>✓ 10+ articles</span>
          <span>✓ No credit card needed</span>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>
          What You&apos;ll Learn
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          FinStart covers everything a young adult needs to go from confused about money to actually building wealth.
        </p>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "💰", title: "Budgeting", desc: "Track spending, build habits, and stop living paycheck to paycheck" },
            { icon: "📈", title: "Investing", desc: "Start investing with any amount — stocks, ETFs, index funds explained simply" },
            { icon: "🏦", title: "Wealth Building", desc: "Compound interest, multiple income streams, and a 10-year plan" },
            { icon: "🎓", title: "Student & First Job", desc: "Student loans, 401k, taxes, and the moves that matter most early on" },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-2xl p-6">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{item.title}</div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-slate-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>
            Courses
          </h2>
          <p className="text-center text-gray-500 mb-12">Short, practical courses you can finish in a weekend.</p>

          {/* Free course */}
          <div className="mb-4">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
              Free
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-4 mb-10">
            {freeCourses.map((course) => (
              <div key={course.title} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold" style={{ color: "#1e3a5f" }}>{course.title}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{course.lessons} lessons</span>
                  </div>
                  <p className="text-gray-500 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href="/signup" className="whitespace-nowrap bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition text-sm font-semibold">
                    Start Free
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Premium courses */}
          <div className="inline-block bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
            Premium
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {premiumCourses.map((course) => (
              <div key={course.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: "#1e3a5f" }}>{course.title}</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{course.lessons} lessons</span>
                  <span className="text-gray-400">🔒</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t}</span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">+{course.topics.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl hover:bg-slate-700 transition font-semibold">
              Unlock All Courses — $9.99/mo
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>
          Interactive Tools
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Don&apos;t just learn — actually run the numbers on your own finances.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.title} className="border border-gray-200 rounded-2xl p-6 flex gap-4">
              <div className="text-2xl">🧮</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold" style={{ color: "#1e3a5f" }}>{tool.title}</h3>
                  {tool.free
                    ? <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Free</span>
                    : <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">🔒 Premium</span>
                  }
                </div>
                <p className="text-gray-500 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-slate-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>
            Free Articles
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Practical guides written for young adults — no jargon, no fluff.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {articles.map((article, i) => (
              <Link
                key={article}
                href="/signup"
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-emerald-300 hover:shadow-sm transition group"
              >
                <span className="text-emerald-500 font-bold text-sm w-5">{i + 1}.</span>
                <span className="text-gray-700 group-hover:text-gray-900 text-sm">{article}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>
          Simple Pricing
        </h2>
        <p className="text-center text-gray-500 mb-12">Start free. Upgrade when you&apos;re ready.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="text-emerald-600 font-bold text-sm uppercase mb-2">Free</div>
            <div className="text-3xl font-extrabold mb-4">$0 / month</div>
            <ul className="space-y-3 text-gray-600 mb-8">
              {[
                "Budgeting Basics course (5 lessons)",
                "50/30/20 budget calculator",
                "10 beginner finance articles",
                "Basic budgeting guide PDF",
                "Newsletter",
                "Community read-only access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center border border-emerald-600 text-emerald-600 py-3 rounded-xl hover:bg-emerald-50 transition">
              Get Started Free
            </Link>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-8 text-white" style={{ background: "#1e3a5f" }}>
            <div className="font-bold text-sm uppercase mb-2 text-emerald-300">Premium</div>
            <div className="text-3xl font-extrabold mb-1">$9.99 / month</div>
            <div className="text-sm text-slate-300 mb-4">or $89 / year — save 26%</div>
            <ul className="space-y-3 text-slate-200 mb-8">
              {[
                "Everything in Free",
                "5 full courses (30+ lessons)",
                "All 4 interactive tools",
                "Premium e-books & guides",
                "Private community forum",
                "Monthly live Q&A sessions",
                "Exclusive templates & downloads",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="block text-center bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-400 transition font-semibold">
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
              <div className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 py-24" style={{ background: "#1e3a5f" }}>
        <h2 className="text-4xl font-extrabold mb-4 text-white">
          Your financial future starts today.
        </h2>
        <p className="text-slate-300 mb-8 text-lg max-w-xl mx-auto">
          Join thousands of young adults learning how to budget smarter, invest earlier, and build real wealth.
        </p>
        <Link href="/signup" className="inline-block bg-emerald-500 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-400 transition">
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
