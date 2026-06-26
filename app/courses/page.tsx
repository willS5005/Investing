import type { Metadata } from "next";
import Link from "next/link";
import { getSubscription } from "@/lib/getSubscription";

export const metadata: Metadata = {
  title: "Personal Finance Courses",
  description: "Short, practical finance courses for young adults. Learn budgeting, investing, wealth building, student loans, and first-job finance. Free and premium courses available.",
  openGraph: {
    title: "Personal Finance Courses | FinStart",
    description: "Short, practical finance courses for young adults. Free and premium options available.",
    url: "/courses",
  },
};

const courses = [
  {
    title: "Budgeting Basics",
    description: "Build your first real budget, track expenses, apply the 50/30/20 method, and set up automated savings goals that actually stick.",
    lessons: 5,
    duration: "~40 min",
    level: "Beginner",
    free: true,
    slug: "budgeting-basics",
    icon: "💰",
    topics: ["What is a budget?", "Tracking expenses", "The 50/30/20 method", "Cutting costs", "Setting savings goals"],
  },
  {
    title: "Investing 101",
    description: "Go from zero to confident investor. Understand stocks, ETFs, and index funds — then open your first brokerage account and start building wealth.",
    lessons: 6,
    duration: "~50 min",
    level: "Beginner",
    free: false,
    slug: "investing-101",
    icon: "📈",
    topics: ["What is investing?", "Stocks vs bonds vs ETFs", "Index funds explained", "Opening a brokerage account", "Dollar-cost averaging", "Long-term thinking"],
  },
  {
    title: "Wealth Building for Young Adults",
    description: "Build a real financial foundation with compound interest, multiple income streams, tax-advantaged accounts, and a concrete 10-year wealth plan.",
    lessons: 7,
    duration: "~60 min",
    level: "Intermediate",
    free: false,
    slug: "wealth-building",
    icon: "🏦",
    topics: ["Net worth basics", "Compound interest", "Multiple income streams", "Real estate basics", "Tax-advantaged accounts", "Building credit", "10-year wealth plan"],
  },
  {
    title: "Student Finance",
    description: "Navigate student loans, scholarships, part-time income strategies, and the money habits that set you up financially before and after graduation.",
    lessons: 5,
    duration: "~45 min",
    level: "Beginner",
    free: false,
    slug: "student-finance",
    icon: "🎓",
    topics: ["Student loans explained", "Paying off debt faster", "Scholarships & FAFSA", "Part-time income strategies", "Post-grad money moves"],
  },
  {
    title: "First Job Finance",
    description: "Just landed your first real job? Learn the five money moves to make in your first 30 days — 401k, taxes, savings, and avoiding lifestyle inflation.",
    lessons: 5,
    duration: "~40 min",
    level: "Beginner",
    free: false,
    slug: "first-job-finance",
    icon: "💼",
    topics: ["401k & employer match", "Health insurance basics", "Tax withholding", "Building an emergency fund", "Lifestyle inflation trap"],
  },
];

const levelColor: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
};

export default async function CoursesPage() {
  const { isPremium } = await getSubscription();
  const free = courses.filter((c) => c.free);
  const premium = courses.filter((c) => !c.free);

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Articles</Link>
          <Link href="/tools" className="text-sm text-gray-600 hover:text-gray-900">Tools</Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Courses</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Short, practical courses built for young adults who want to take control of their finances — no prior knowledge required.
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
            <span>✓ {courses.length} courses total</span>
            <span>✓ {courses.reduce((a, c) => a + c.lessons, 0)} lessons</span>
            <span>✓ Self-paced</span>
            <span>✓ Quizzes included</span>
          </div>
        </div>

        {/* Free */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full uppercase">Free</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="space-y-4">
            {free.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="block bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-sm transition group"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl font-bold group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>
                        {course.title}
                      </h2>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
                        {course.level}
                      </span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">Free</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((t) => (
                        <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{course.lessons} lessons</span>
                      <span>·</span>
                      <span>{course.duration}</span>
                      <span>·</span>
                      <span>Quizzes included</span>
                    </div>
                  </div>
                  <div className="shrink-0 self-center">
                    <span className="bg-emerald-600 text-white text-sm px-5 py-2 rounded-xl font-semibold group-hover:bg-emerald-700 transition">
                      Start Free →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Premium */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs bg-slate-200 text-slate-600 font-bold px-3 py-1 rounded-full uppercase">
              {isPremium ? "Premium" : "🔒 Premium — Locked"}
            </span>
            <div className="h-px flex-1 bg-gray-200" />
            {isPremium && (
              <span className="text-xs text-emerald-600 font-semibold">✓ Unlocked</span>
            )}
          </div>
          <div className="space-y-4 mb-8">
            {premium.map((course) =>
              isPremium ? (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="block bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-sm transition group"
                >
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-xl font-bold group-hover:text-emerald-700 transition" style={{ color: "#1e3a5f" }}>
                          {course.title}
                        </h2>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
                          {course.level}
                        </span>
                        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">Premium</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.topics.map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>{course.lessons} lessons</span>
                        <span>·</span>
                        <span>{course.duration}</span>
                        <span>·</span>
                        <span>Quizzes included</span>
                      </div>
                    </div>
                    <div className="shrink-0 self-center">
                      <span className="bg-emerald-600 text-white text-sm px-5 py-2 rounded-xl font-semibold group-hover:bg-emerald-700 transition">
                        Start Course →
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl border border-gray-200 p-6 opacity-90"
                >
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-xl font-bold" style={{ color: "#1e3a5f" }}>{course.title}</h2>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[course.level]}`}>
                          {course.level}
                        </span>
                        <span className="text-xs bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded-full">
                          🔒 Premium
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.topics.slice(0, 4).map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{t}</span>
                        ))}
                        {course.topics.length > 4 && (
                          <span className="text-xs bg-slate-100 text-slate-400 px-3 py-1 rounded-full">
                            +{course.topics.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>{course.lessons} lessons</span>
                        <span>·</span>
                        <span>{course.duration}</span>
                        <span>·</span>
                        <span>Quizzes included</span>
                      </div>
                    </div>
                    <div className="shrink-0 self-center">
                      <Link
                        href="/pricing"
                        className="block bg-slate-800 text-white text-sm px-5 py-2 rounded-xl font-semibold hover:bg-slate-700 transition"
                      >
                        Unlock →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {!isPremium && (
            <div className="rounded-2xl p-8 text-white text-center" style={{ background: "#1e3a5f" }}>
              <h2 className="text-2xl font-extrabold mb-2">Unlock all {premium.length} premium courses</h2>
              <p className="text-slate-300 mb-2">
                {premium.reduce((a, c) => a + c.lessons, 0)} lessons · Advanced tools · Private community · Monthly Q&amp;A
              </p>
              <p className="text-emerald-300 font-semibold mb-6">$12.99/month or $119.99/year — cancel anytime</p>
              <Link
                href="/pricing"
                className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-400 transition font-semibold"
              >
                Upgrade to Premium
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
