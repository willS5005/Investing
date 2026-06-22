import Link from "next/link";

const articles = [
  {
    slug: "build-your-first-budget",
    title: "How to Build Your First Budget in 30 Minutes",
    description: "A step-by-step walkthrough for building a budget that actually works — even if you've never tracked a dollar in your life.",
    keyword: "budgeting for beginners",
    readTime: "6 min read",
  },
  {
    slug: "50-30-20-rule",
    title: "The 50/30/20 Rule: The Only Budget Formula You Need",
    description: "Learn the one budgeting framework that financial advisors recommend most — and how to apply it to your exact income.",
    keyword: "50 30 20 rule",
    readTime: "5 min read",
  },
  {
    slug: "start-investing-with-50-dollars",
    title: "How to Start Investing with Just $50",
    description: "You don't need thousands of dollars to start investing. Here's how to open your first account and make your first investment this week.",
    keyword: "how to start investing young",
    readTime: "7 min read",
  },
  {
    slug: "money-mistakes-college-students",
    title: "5 Money Mistakes Almost Every College Student Makes",
    description: "These five mistakes cost young adults thousands of dollars. Find out if you're making any of them — and how to course correct.",
    keyword: "money mistakes college students",
    readTime: "6 min read",
  },
  {
    slug: "roth-ira-for-beginners",
    title: "What Is a Roth IRA and Why Every 18-Year-Old Should Open One",
    description: "A Roth IRA is one of the most powerful wealth-building tools available — and most young adults have no idea it exists.",
    keyword: "roth ira for beginners",
    readTime: "8 min read",
  },
  {
    slug: "pay-off-student-loans-faster",
    title: "How to Pay Off Student Loans Faster Without Giving Up Your Life",
    description: "Practical strategies to accelerate your student loan payoff — without eating ramen every night or skipping everything you enjoy.",
    keyword: "how to pay off student loans fast",
    readTime: "7 min read",
  },
  {
    slug: "index-funds-for-beginners",
    title: "The Beginner's Guide to Index Funds",
    description: "Index funds are the simplest, most proven investment for long-term wealth. Here's everything you need to know to get started.",
    keyword: "index funds for beginners",
    readTime: "8 min read",
  },
  {
    slug: "emergency-fund-guide",
    title: "How to Build a 6-Month Emergency Fund on a Small Income",
    description: "An emergency fund is your financial foundation. Here's a realistic plan to build one — even when money is tight.",
    keyword: "emergency fund how much",
    readTime: "6 min read",
  },
  {
    slug: "first-job-money-moves",
    title: "Your First Job: The 5 Money Moves to Make in the First 30 Days",
    description: "The decisions you make in your first month of work set the tone for years of financial habits. Here's what to prioritize.",
    keyword: "first job financial advice",
    readTime: "6 min read",
  },
  {
    slug: "build-credit-at-18",
    title: "Credit Cards 101: How to Build Credit Without Going Into Debt",
    description: "Used correctly, a credit card is one of the best tools for building credit. Here's how to use one responsibly from day one.",
    keyword: "how to build credit at 18",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900">Courses</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Free Articles</h1>
        <p className="text-gray-500 text-lg mb-12">
          Practical financial guides for young professionals — clear, jargon-free, and actionable.
        </p>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-sm transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-400 font-medium">#{i + 1}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Free</span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold group-hover:text-emerald-700 transition mb-2" style={{ color: "#1e3a5f" }}>
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{article.description}</p>
                </div>
                <span className="text-emerald-500 text-xl mt-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
