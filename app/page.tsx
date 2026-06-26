import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FinStart — Personal Finance Courses for Young Adults",
  description: "Learn budgeting, investing, and wealth building with free courses, tools, and guides built for people in their 20s. Start free — no credit card needed.",
  openGraph: {
    title: "FinStart — Personal Finance Courses for Young Adults",
    description: "Learn budgeting, investing, and wealth building with free courses, tools, and guides built for people in their 20s. Start free — no credit card needed.",
    url: "/",
  },
};

const stats = [
  { value: "5,000+", label: "Students enrolled" },
  { value: "30+", label: "Lessons available" },
  { value: "4.9★", label: "Average rating" },
  { value: "100%", label: "Beginner friendly" },
];

const testimonials = [
  {
    name: "Jordan M.",
    age: 19,
    text: "I paid off my first credit card and started a Roth IRA — all within 3 months of joining FinStart. Best decision I made this year.",
    stars: 5,
  },
  {
    name: "Maya K.",
    age: 22,
    text: "The budgeting calculator changed everything. I finally know where my money goes and I&apos;m saving $400 more per month.",
    stars: 5,
  },
  {
    name: "Tyler R.",
    age: 24,
    text: "Investing 101 explained index funds better than anything I found on YouTube. Simple, practical, and actually made sense.",
    stars: 5,
  },
];

const courses = [
  {
    title: "Budgeting Basics",
    lessons: 5,
    badge: "Free",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description: "Track spending, build your first budget, and start saving — even on a tight income.",
    href: "/courses/budgeting-basics",
    icon: "💰",
  },
  {
    title: "Investing 101",
    lessons: 6,
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "Go from zero to confident investor. Stocks, ETFs, index funds, and your first brokerage account.",
    href: "/pricing",
    icon: "📈",
  },
  {
    title: "Wealth Building",
    lessons: 7,
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "Net worth, compound interest, multiple income streams, and a real 10-year financial plan.",
    href: "/pricing",
    icon: "🏦",
  },
  {
    title: "First Job Finance",
    lessons: 5,
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "401k, taxes, emergency fund, and the 5 money moves to make in your first 30 days.",
    href: "/pricing",
    icon: "🎯",
  },
  {
    title: "Student Finance",
    lessons: 5,
    badge: "Premium",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "Student loans, scholarships, side income in college, and money habits that last a lifetime.",
    href: "/pricing",
    icon: "🎓",
  },
];

const tools = [
  {
    title: "50/30/20 Budget Calculator",
    description: "Enter your income and see exactly how to split it between needs, wants, and savings.",
    free: true,
    href: "/tools/budget-calculator",
    icon: "🧮",
  },
  {
    title: "Investment Growth Calculator",
    description: "See how your money grows over time with compound interest. Adjust contributions and time horizons.",
    free: false,
    href: "/pricing",
    icon: "📊",
  },
  {
    title: "Net Worth Tracker",
    description: "Track your assets and liabilities to see your true financial picture and watch it grow.",
    free: false,
    href: "/pricing",
    icon: "💎",
  },
  {
    title: "Loan Payoff Calculator",
    description: "See how much interest you save by paying extra each month and exactly when you'll be debt-free.",
    free: false,
    href: "/pricing",
    icon: "📉",
  },
];

const articles = [
  { title: "How to Build Your First Budget in 30 Minutes", slug: "build-your-first-budget" },
  { title: "The 50/30/20 Rule Explained Simply", slug: "50-30-20-rule" },
  { title: "How to Start Investing with Just $50", slug: "start-investing-with-50-dollars" },
  { title: "5 Money Mistakes Every College Student Makes", slug: "money-mistakes-college-students" },
  { title: "What Is a Roth IRA? A Beginner's Guide", slug: "roth-ira-for-beginners" },
  { title: "How to Pay Off Student Loans Faster", slug: "pay-off-student-loans-faster" },
  { title: "The Beginner's Guide to Index Funds", slug: "index-funds-for-beginners" },
  { title: "How to Build a 6-Month Emergency Fund", slug: "emergency-fund-guide" },
  { title: "Your First Job: 5 Money Moves to Make Now", slug: "first-job-money-moves" },
  { title: "How to Build Credit Starting at 18", slug: "build-credit-at-18" },
];

const faqs = [
  {
    q: "Is FinStart really free to start?",
    a: "Yes — the free plan includes a full course, the budget calculator, and 10 articles with no credit card required.",
  },
  {
    q: "Who is FinStart for?",
    a: "FinStart is built for people in their late teens and 20s who want to learn money basics without the jargon or overwhelm.",
  },
  {
    q: "How much does Premium cost?",
    a: "Premium is $12.99/month or $119.99/year (billed annually). You can cancel anytime.",
  },
  {
    q: "Do I need any financial knowledge to start?",
    a: "None at all. Every course and article is designed for complete beginners — we start from the very basics.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-10">
        <span className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</span>
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#courses" className="hover:text-gray-900 transition">Courses</a>
          <a href="#tools" className="hover:text-gray-900 transition">Tools</a>
          <a href="#articles" className="hover:text-gray-900 transition">Articles</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Built for ages 16–28 · Start completely free
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl mx-auto" style={{ color: "#1e3a5f" }}>
          The Finance Education You Should Have Been Taught in School
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          FinStart teaches budgeting, investing, and wealth building through bite-sized courses, interactive tools,
          and plain-English guides — all built for young adults starting from zero.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/signup"
            className="inline-block bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-700 transition shadow-sm"
          >
            Start Learning Free
          </Link>
          <a
            href="#courses"
            className="inline-block border border-gray-300 text-gray-700 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition"
          >
            Browse Courses
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> No credit card needed</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Free course included</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Beginner friendly</span>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-100 bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
              Personal Finance Courses for Beginners
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Short, practical courses you can finish in a weekend. No fluff — just what you actually need to know.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {courses.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition group flex flex-col"
              >
                <div className="text-3xl mb-4">{course.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <span className="text-xs text-gray-400">{course.lessons} lessons</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm flex-1">{course.description}</p>
                <div className="mt-4 text-sm font-semibold text-emerald-600 group-hover:underline">
                  {course.badge === "Free" ? "Start free →" : "Unlock course →"}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition text-sm font-semibold">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
              Interactive Finance Tools
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Don&apos;t just learn — run the numbers on your own money and see results instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="border border-gray-200 rounded-2xl p-6 flex gap-4 hover:border-emerald-300 hover:shadow-md transition group"
              >
                <div className="text-3xl shrink-0">{tool.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>
                      {tool.title}
                    </h3>
                    {tool.free
                      ? <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Free</span>
                      : <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Premium</span>
                    }
                  </div>
                  <p className="text-gray-500 text-sm">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tools" className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition text-sm font-semibold">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#1e3a5f" }}>
            Real Students. Real Results.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>
                  {t.name}, {t.age}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
              Free Personal Finance Guides
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Practical, jargon-free articles written for people who are just starting out with money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-emerald-300 hover:shadow-sm transition group"
              >
                <span className="text-emerald-500 font-bold text-sm w-6 shrink-0">{i + 1}.</span>
                <span className="text-gray-700 group-hover:text-gray-900 text-sm">{article.title}</span>
                <span className="ml-auto text-gray-300 group-hover:text-emerald-500 transition text-sm">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition text-sm font-semibold">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-emerald-600 font-bold text-sm uppercase mb-2">Free</div>
              <div className="text-4xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>$0</div>
              <div className="text-gray-400 text-sm mb-6">Forever free — no credit card needed</div>
              <ul className="space-y-3 mb-8">
                {["Budgeting Basics course (5 lessons)", "50/30/20 budget calculator", "10 beginner finance articles", "Weekly newsletter"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block text-center border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl hover:bg-emerald-50 transition font-semibold">
                Get Started Free
              </Link>
            </div>
            <div className="rounded-2xl p-8 text-white relative" style={{ background: "#1e3a5f" }}>
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-emerald-300 font-bold text-sm uppercase mb-2">Premium</div>
              <div className="text-4xl font-extrabold mb-1">$12.99</div>
              <div className="text-slate-300 text-sm mb-1">per month</div>
              <div className="text-emerald-300 text-sm mb-6">or $119.99/year billed annually — save 23%</div>
              <ul className="space-y-3 mb-8">
                {["Everything in Free", "5 full courses (30+ lessons)", "All 4 interactive tools", "Premium guides & templates", "Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                    <span className="text-emerald-400 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="block text-center bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-400 transition font-semibold">
                Upgrade to Premium
              </Link>
              <p className="text-xs text-slate-400 text-center mt-3">Secure checkout via Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#1e3a5f" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 py-24" style={{ background: "#1e3a5f" }}>
        <h2 className="text-4xl font-extrabold mb-4 text-white">
          Your financial future starts today.
        </h2>
        <p className="text-slate-300 mb-8 text-lg max-w-xl mx-auto">
          Join thousands of young adults learning how to budget smarter, invest earlier, and build real wealth — starting from zero.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-emerald-500 text-white text-lg font-semibold px-10 py-4 rounded-xl hover:bg-emerald-400 transition shadow-lg"
        >
          Create Your Free Account
        </Link>
        <p className="text-slate-400 text-sm mt-4">No credit card required · Free forever plan available</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold mb-1" style={{ color: "#1e3a5f" }}>FinStart</div>
            <p className="text-xs text-gray-400">Personal finance education for the next generation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/courses" className="hover:text-gray-700 transition">Courses</Link>
            <Link href="/tools" className="hover:text-gray-700 transition">Tools</Link>
            <Link href="/blog" className="hover:text-gray-700 transition">Blog</Link>
            <Link href="/pricing" className="hover:text-gray-700 transition">Pricing</Link>
            <Link href="/login" className="hover:text-gray-700 transition">Login</Link>
            <Link href="/signup" className="hover:text-gray-700 transition">Sign Up</Link>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 mt-8">© 2026 FinStart. Built for the next generation of investors.</div>
      </footer>
    </main>
  );
}
