import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

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
  { value: "5,000+", label: "Students enrolled", icon: "👥" },
  { value: "30+", label: "Lessons available", icon: "📚" },
  { value: "4.9★", label: "Average rating", icon: "⭐" },
  { value: "100%", label: "Beginner friendly", icon: "🎯" },
];

const steps = [
  {
    number: "01",
    title: "Create your free account",
    description: "Sign up in 30 seconds. No credit card. Start with a full free course and the budget calculator immediately.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 24l4 4 8-8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Learn at your own pace",
    description: "Short lessons you can finish in under an hour. Quizzes reinforce what you learn. No fluff — just what actually matters.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="#10b981" strokeWidth="2.5"/>
        <path d="M16 20h16M16 26h10" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 36v6M18 42h12" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Apply it to your money",
    description: "Use the interactive tools to run real numbers on your budget, investments, and loans. See results change in real time.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36l10-12 8 6 10-14 8 8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="24" r="3" fill="#10b981"/>
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Jordan M.",
    age: 19,
    text: "I paid off my first credit card and started a Roth IRA — all within 3 months of joining FinStart. Best decision I made this year.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Maya K.",
    age: 22,
    text: "The budgeting calculator changed everything. I finally know where my money goes and I'm saving $400 more per month.",
    stars: 5,
    initial: "M",
  },
  {
    name: "Tyler R.",
    age: 24,
    text: "Investing 101 explained index funds better than anything I found on YouTube. Simple, practical, and actually made sense.",
    stars: 5,
    initial: "T",
  },
];

const courses = [
  { title: "Budgeting Basics", lessons: 5, badge: "Free", badgeColor: "bg-emerald-100 text-emerald-700", description: "Track spending, build your first budget, and start saving — even on a tight income.", href: "/courses/budgeting-basics", icon: "💰", color: "bg-emerald-50" },
  { title: "Investing 101", lessons: 6, badge: "Premium", badgeColor: "bg-amber-100 text-amber-700", description: "Go from zero to confident investor. Stocks, ETFs, index funds, and your first brokerage account.", href: "/pricing", icon: "📈", color: "bg-blue-50" },
  { title: "Wealth Building", lessons: 7, badge: "Premium", badgeColor: "bg-amber-100 text-amber-700", description: "Net worth, compound interest, multiple income streams, and a real 10-year financial plan.", href: "/pricing", icon: "🏦", color: "bg-purple-50" },
  { title: "First Job Finance", lessons: 5, badge: "Premium", badgeColor: "bg-amber-100 text-amber-700", description: "401k, taxes, emergency fund, and the 5 money moves to make in your first 30 days.", href: "/pricing", icon: "🎯", color: "bg-orange-50" },
  { title: "Student Finance", lessons: 5, badge: "Premium", badgeColor: "bg-amber-100 text-amber-700", description: "Student loans, scholarships, side income in college, and money habits that last a lifetime.", href: "/pricing", icon: "🎓", color: "bg-pink-50" },
];

const tools = [
  { title: "50/30/20 Budget Calculator", description: "Enter your income and see exactly how to split it between needs, wants, and savings.", free: true, href: "/tools/budget-calculator", icon: "🧮", preview: "Instant breakdown · Pie chart · Annual view" },
  { title: "Investment Growth Calculator", description: "See how your money grows over time with compound interest. Adjust contributions and time horizons.", free: false, href: "/pricing", icon: "📊", preview: "Year-by-year table · Compound growth · Adjustable rate" },
  { title: "Net Worth Tracker", description: "Track your assets and liabilities to see your true financial picture and watch it grow.", free: false, href: "/pricing", icon: "💎", preview: "Assets vs liabilities · Net worth score · Progress" },
  { title: "Loan Payoff Calculator", description: "See how much interest you save by paying extra each month and exactly when you'll be debt-free.", free: false, href: "/pricing", icon: "📉", preview: "Extra payment savings · Payoff date · Interest saved" },
];

const articles = [
  { title: "How to Build Your First Budget in 30 Minutes", slug: "build-your-first-budget", icon: "💰" },
  { title: "The 50/30/20 Rule Explained Simply", slug: "50-30-20-rule", icon: "📊" },
  { title: "How to Start Investing with Just $50", slug: "start-investing-with-50-dollars", icon: "📈" },
  { title: "5 Money Mistakes Every College Student Makes", slug: "money-mistakes-college-students", icon: "🎓" },
  { title: "What Is a Roth IRA? A Beginner's Guide", slug: "roth-ira-for-beginners", icon: "🏦" },
  { title: "How to Pay Off Student Loans Faster", slug: "pay-off-student-loans-faster", icon: "💳" },
  { title: "The Beginner's Guide to Index Funds", slug: "index-funds-for-beginners", icon: "📉" },
  { title: "How to Build a 6-Month Emergency Fund", slug: "emergency-fund-guide", icon: "🛡️" },
  { title: "Your First Job: 5 Money Moves to Make Now", slug: "first-job-money-moves", icon: "🎯" },
  { title: "How to Build Credit Starting at 18", slug: "build-credit-at-18", icon: "⭐" },
];

const faqs = [
  { q: "Is FinStart really free to start?", a: "Yes — the free plan includes a full course, the budget calculator, and all 18 articles with no credit card required." },
  { q: "Who is FinStart for?", a: "FinStart is built for people in their late teens and 20s who want to learn money basics without the jargon or overwhelm." },
  { q: "How much does Premium cost?", a: "Premium is $12.99/month or $119.99/year (billed annually). You can cancel anytime." },
  { q: "Do I need any financial knowledge to start?", a: "None at all. Every course and article is designed for complete beginners — we start from the very basics." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-14 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Built for ages 16–28 · Start completely free
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5" style={{ color: "#1e3a5f" }}>
              The Finance Education You Should Have Been Taught in School
            </h1>
            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
              FinStart teaches budgeting, investing, and wealth building through bite-sized courses, interactive tools, and plain-English guides — built for young adults starting from zero.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/signup" className="inline-block bg-emerald-600 text-white text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-emerald-700 transition shadow-sm text-center">
                Start Learning Free
              </Link>
              <a href="#courses" className="inline-block border border-gray-300 text-gray-700 text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition text-center">
                Browse Courses
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> No credit card needed</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Free course included</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-500">✓</span> Cancel anytime</span>
            </div>
          </div>

          {/* Hero visual — mock dashboard card */}
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 max-w-sm ml-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="font-bold text-sm" style={{ color: "#1e3a5f" }}>Your Dashboard</div>
                <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-full">⭐ Premium</span>
              </div>
              {/* Mini progress bars */}
              <div className="space-y-3 mb-5">
                {[
                  { label: "Budgeting Basics", pct: 80, color: "bg-emerald-500" },
                  { label: "Investing 101", pct: 45, color: "bg-blue-500" },
                  { label: "Wealth Building", pct: 20, color: "bg-purple-500" },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{c.label}</span>
                      <span className="font-semibold">{c.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-2 ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              {/* Mini stat row */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { value: "3", label: "Courses" },
                  { value: "$847", label: "Saved" },
                  { value: "12", label: "Lessons" },
                ].map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-2.5 text-center">
                    <div className="font-extrabold text-sm" style={{ color: "#1e3a5f" }}>{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Daily tip */}
              <div className="bg-emerald-50 rounded-xl p-3 flex gap-2">
                <span className="text-lg">💡</span>
                <div>
                  <div className="text-xs font-bold text-emerald-700 mb-0.5">Daily Tip</div>
                  <p className="text-xs text-emerald-800">Automate savings on payday — you can&apos;t spend what you never see.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-100 bg-white px-6 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>How FinStart Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From zero financial knowledge to real habits — in three steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-emerald-100" />
            {steps.map((step, i) => (
              <div key={i} className="relative text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 relative z-10">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-emerald-500 mb-2 tracking-widest">{step.number}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/signup" className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-700 transition">
              Get Started Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Personal Finance Courses</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Short, practical courses you can finish in a weekend. No fluff — just what you actually need to know.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {courses.map((course) => (
              <Link key={course.title} href={course.href} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition group flex flex-col">
                <div className={`w-14 h-14 ${course.color} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                  {course.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${course.badgeColor}`}>{course.badge}</span>
                  <span className="text-xs text-gray-400">{course.lessons} lessons</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>{course.title}</h3>
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
      <section id="tools" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Interactive Finance Tools</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Don&apos;t just learn — run the numbers on your own money and see results instantly.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <Link key={tool.title} href={tool.href} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition group bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">{tool.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>{tool.title}</h3>
                      {tool.free
                        ? <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Free</span>
                        : <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Premium</span>
                      }
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{tool.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.preview.split(" · ").map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
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
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#1e3a5f" }}>Real Students. Real Results.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>{t.name}</div>
                    <div className="text-xs text-gray-400">Age {t.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Free Personal Finance Guides</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Practical, jargon-free articles written for people who are just starting out with money.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-emerald-300 hover:shadow-sm transition group">
                <span className="text-xl shrink-0">{article.icon}</span>
                <span className="text-gray-700 group-hover:text-gray-900 text-sm flex-1">{article.title}</span>
                <span className="ml-auto text-gray-300 group-hover:text-emerald-500 transition text-sm shrink-0">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition text-sm font-semibold">
              Read All 18 Articles →
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
                {["Budgeting Basics course (5 lessons)", "50/30/20 budget calculator", "18 beginner finance articles", "Daily money tips"].map((item) => (
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
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
              <div className="text-emerald-300 font-bold text-sm uppercase mb-2">Premium</div>
              <div className="text-4xl font-extrabold mb-1">$12.99</div>
              <div className="text-slate-300 text-sm mb-1">per month</div>
              <div className="text-emerald-300 text-sm mb-6">or $119.99/year — save 23%</div>
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
      <section className="px-6 py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#1e3a5f" }}>Frequently Asked Questions</h2>
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
      <section className="text-center px-5 py-16 md:py-24" style={{ background: "#1e3a5f" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-white">Your financial future starts today.</h2>
          <p className="text-slate-300 mb-8 text-base md:text-lg">
            Join thousands of young adults learning how to budget smarter, invest earlier, and build real wealth — starting from zero.
          </p>
          <Link href="/signup" className="inline-block bg-emerald-500 text-white text-base md:text-lg font-semibold px-8 py-4 rounded-xl hover:bg-emerald-400 transition shadow-lg">
            Create Your Free Account
          </Link>
          <p className="text-slate-400 text-sm mt-4">No credit card required · Free forever plan available</p>
        </div>
      </section>
    </main>
  );
}
