import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Free Personal Finance Articles",
  description: "Practical personal finance guides for young adults — budgeting, investing, student loans, credit, and more. Free, jargon-free, and actionable.",
  openGraph: {
    title: "Free Personal Finance Articles | FinStart",
    description: "Practical personal finance guides for young adults — budgeting, investing, student loans, credit, and more.",
    url: "/blog",
  },
};

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
  {
    slug: "how-to-negotiate-your-salary",
    title: "How to Negotiate Your Salary (And Why Most People Don't)",
    description: "Salary negotiation is one of the highest-ROI skills you can develop. Here's a simple, proven approach that works — even if you hate conflict.",
    keyword: "how to negotiate salary",
    readTime: "7 min read",
  },
  {
    slug: "compound-interest-explained",
    title: "Compound Interest Explained: Why Time Is Your Most Valuable Asset",
    description: "Compound interest is the most powerful force in personal finance. Here's how it works, with real numbers that show why starting early matters so much.",
    keyword: "compound interest explained",
    readTime: "5 min read",
  },
  {
    slug: "what-is-a-401k",
    title: "What Is a 401(k)? A Plain-English Guide for First-Time Employees",
    description: "Your employer offers a 401(k) — but what is it, how does it work, and how much should you contribute? Here's everything you need to know.",
    keyword: "what is a 401k",
    readTime: "6 min read",
  },
  {
    slug: "renting-vs-buying-a-home",
    title: "Renting vs. Buying a Home in Your 20s: What the Math Actually Says",
    description: "Everyone says buying is better than renting. The math is more complicated — and for many people in their 20s, renting is the smarter financial move.",
    keyword: "renting vs buying home 20s",
    readTime: "8 min read",
  },
  {
    slug: "how-to-invest-in-your-20s",
    title: "How to Invest in Your 20s: A Step-by-Step Starter Plan",
    description: "You don't need a lot of money or expertise to start investing. Here's a clear, step-by-step plan built for people in their 20s starting from zero.",
    keyword: "how to invest in your 20s",
    readTime: "7 min read",
  },
  {
    slug: "lifestyle-inflation",
    title: "Lifestyle Inflation: The Silent Killer of Wealth in Your 20s and 30s",
    description: "Most people earn more as they get older but never feel richer. The culprit is lifestyle inflation — and recognizing it is the key to building wealth.",
    keyword: "lifestyle inflation",
    readTime: "5 min read",
  },
  {
    slug: "understanding-taxes-first-job",
    title: "Understanding Your Taxes at Your First Job: W-4, Withholding, and Refunds",
    description: "Taxes at your first job are confusing. Here's a plain-English breakdown of W-4 forms, withholding, tax brackets, and refunds.",
    keyword: "taxes first job explained",
    readTime: "6 min read",
  },
  {
    slug: "how-to-save-money-in-your-20s",
    title: "How to Actually Save Money in Your 20s (Without Giving Up Everything Fun)",
    description: "Saving money doesn't mean cutting out everything you enjoy. Here's a realistic approach to saving more without feeling deprived.",
    keyword: "how to save money in your 20s",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-5 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Free Articles</h1>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          Practical financial guides for young professionals — clear, jargon-free, and actionable.
        </p>

        <div className="space-y-6">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-sm transition group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400 font-medium">#{i + 1}</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Free</span>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <h2 className="text-base md:text-lg font-bold group-hover:text-emerald-700 transition mb-2" style={{ color: "#1e3a5f" }}>
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

