"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const lessons = [
  {
    id: 1,
    title: "What Is Investing and Why It Matters",
    duration: "8 min",
    objectives: [
      "Understand what investing actually is",
      "Learn why investing beats saving alone",
      "See how compound growth works over time",
    ],
    content: [
      {
        type: "text",
        body: "Investing is putting your money to work so it grows without you doing anything extra. When you invest, you're buying an asset — a stock, a fund, a bond — that has the potential to increase in value over time.",
      },
      {
        type: "heading",
        body: "Why a Savings Account Isn't Enough",
      },
      {
        type: "text",
        body: "A typical savings account earns 0.5–1% interest per year. Inflation — the rising cost of everything — runs at roughly 3% per year on average. That means money sitting in a savings account is actually losing purchasing power every year. $10,000 today will buy less in 10 years if it only earns 1%.",
      },
      {
        type: "heading",
        body: "The Stock Market's Historical Return",
      },
      {
        type: "text",
        body: "The US stock market (measured by the S&P 500) has returned an average of about 10% per year over the last century — roughly 7% after adjusting for inflation. No single year looks exactly like that: some years are up 30%, some are down 20%. But over long periods, the trend is reliably upward.",
      },
      {
        type: "heading",
        body: "Compound Growth: The Most Powerful Force in Finance",
      },
      {
        type: "text",
        body: "Compound growth means your returns earn returns. If you invest $5,000 at 7% annually, after year one you have $5,350. In year two, that entire $5,350 earns 7% — not just your original $5,000. After 30 years, that single $5,000 investment grows to over $38,000 — without adding another dollar.",
      },
      {
        type: "text",
        body: "The earlier you start, the more powerful compounding becomes. A 22-year-old who invests $200/month until age 65 ends up with more money than a 32-year-old who invests $400/month for the same period — because the 22-year-old's money compounded for 10 extra years.",
      },
      {
        type: "heading",
        body: "Risk vs. Reward",
      },
      {
        type: "text",
        body: "Higher potential returns come with higher short-term risk. Stocks can drop 30–50% in a bad year. Bonds are more stable but grow more slowly. The key insight: risk shrinks dramatically over long time horizons. Over any 20-year period in S&P 500 history, investors have always come out ahead.",
      },
    ],
    takeaways: [
      "Investing grows money faster than savings accounts, which lose to inflation",
      "The S&P 500 has returned ~10%/year on average over 100 years",
      "Compound growth means starting early is more important than investing more",
    ],
    quiz: [
      {
        question: "What is the average annual return of the S&P 500 over the last century?",
        options: ["3–4%", "6–7%", "~10%", "~15%"],
        answer: 2,
      },
      {
        question: "Why does compound growth reward early investors more than late investors?",
        options: [
          "Early investors get better interest rates",
          "Returns earn returns over more years",
          "The market performs better for younger people",
          "Early investors pay lower taxes",
        ],
        answer: 1,
      },
      {
        question: "What happens to the purchasing power of money in a 1% savings account when inflation is 3%?",
        options: [
          "It stays the same",
          "It grows slowly",
          "It loses purchasing power",
          "It doubles every 10 years",
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Stocks, Bonds, and ETFs Explained",
    duration: "10 min",
    objectives: [
      "Understand what a stock actually represents",
      "Know the difference between stocks and bonds",
      "Learn why ETFs are ideal for most beginners",
    ],
    content: [
      {
        type: "text",
        body: "Before you invest a single dollar, you need to understand what you're actually buying. Most beginners skip this and end up making emotional decisions they don't understand.",
      },
      {
        type: "heading",
        body: "Stocks: Owning a Piece of a Company",
      },
      {
        type: "text",
        body: "When you buy a share of stock, you become a partial owner of that company. If Apple has 1 billion shares outstanding and you buy 10, you own 0.000001% of Apple. If Apple becomes more valuable, your shares become worth more. If Apple struggles, your shares drop.",
      },
      {
        type: "text",
        body: "Individual stocks are volatile. A single company can go bankrupt, get disrupted by a competitor, or see its CEO make a bad decision. Owning only a few stocks concentrates your risk significantly.",
      },
      {
        type: "heading",
        body: "Bonds: Lending Money for Interest",
      },
      {
        type: "text",
        body: "A bond is a loan you give to a government or company. They promise to pay you back with interest over a set time period. Bonds are more stable than stocks but grow more slowly. They're useful for reducing risk as you get older or approach a financial goal.",
      },
      {
        type: "heading",
        body: "ETFs: The Investor's Best Friend",
      },
      {
        type: "text",
        body: "An ETF (Exchange-Traded Fund) is a basket of many stocks or bonds that you buy as a single investment. Instead of picking one company, you buy a slice of hundreds or thousands at once. This is called diversification — and it's the single most effective way to reduce risk without reducing returns.",
      },
      {
        type: "text",
        body: "The most famous ETF tracks the S&P 500 — the 500 largest US companies. When you buy a single S&P 500 ETF, you instantly own a tiny piece of Apple, Microsoft, Amazon, Google, Tesla, and 495 more companies. If one goes bankrupt, the others carry on.",
      },
      {
        type: "heading",
        body: "How ETFs Are Priced",
      },
      {
        type: "text",
        body: "ETFs trade on stock exchanges just like individual stocks — you can buy and sell them throughout the day. Their price rises and falls based on the combined value of all the assets inside them. Popular S&P 500 ETFs include VOO (Vanguard), SPY (State Street), and IVV (iShares).",
      },
    ],
    takeaways: [
      "A stock is partial ownership in a company — value goes up and down with the company",
      "A bond is a loan to a company or government that pays interest",
      "ETFs bundle many stocks together, giving you instant diversification at low cost",
    ],
    quiz: [
      {
        question: "What do you actually own when you buy a share of stock?",
        options: [
          "A loan to the company",
          "A partial ownership stake in the company",
          "A guaranteed return from the company",
          "A bond from the company",
        ],
        answer: 1,
      },
      {
        question: "What is the primary advantage of an ETF over individual stocks?",
        options: [
          "ETFs always outperform individual stocks",
          "ETFs are guaranteed to make money",
          "ETFs provide instant diversification across many companies",
          "ETFs have no fees",
        ],
        answer: 2,
      },
      {
        question: "Which of these is an example of a popular S&P 500 ETF?",
        options: ["AAPL", "VOO", "USD", "FDIC"],
        answer: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Index Funds: The Simple Path to Wealth",
    duration: "9 min",
    objectives: [
      "Understand what an index fund is",
      "Learn why index funds beat most professional fund managers",
      "Know the key metrics to look for: expense ratio and diversification",
    ],
    content: [
      {
        type: "text",
        body: "An index fund is a type of ETF or mutual fund that simply tracks a market index — a pre-defined list of companies. The most common is the S&P 500 index, which includes the 500 largest publicly traded US companies.",
      },
      {
        type: "heading",
        body: "Active vs. Passive Investing",
      },
      {
        type: "text",
        body: "Active investing means a fund manager picks specific stocks trying to beat the market. Passive investing means you just buy the whole market and match its return. Here's the surprising truth: over 15-year periods, over 90% of actively managed funds underperform a simple S&P 500 index fund. Professional stock pickers, with all their research and resources, can't consistently beat the market.",
      },
      {
        type: "heading",
        body: "Why Index Funds Win",
      },
      {
        type: "text",
        body: "Three reasons index funds outperform most alternatives. First: fees. Active funds charge 0.5–2% in annual fees. Index funds charge 0.03–0.1%. Over 30 years, that difference in fees can cost you tens of thousands of dollars. Second: tax efficiency — index funds rarely sell holdings, so they generate fewer taxable events. Third: simplicity — there are no bad decisions to make.",
      },
      {
        type: "heading",
        body: "The Expense Ratio: The Only Fee That Matters",
      },
      {
        type: "text",
        body: "The expense ratio is the annual percentage fee charged by a fund. A 0.03% expense ratio means you pay $3 per year on every $10,000 invested. A 1% expense ratio means $100 per year on the same $10,000. Over 30 years at 7% growth, that difference compounds to over $30,000 on a $10,000 investment.",
      },
      {
        type: "heading",
        body: "Which Index Funds to Consider",
      },
      {
        type: "text",
        body: "For most beginner investors, a single total market index fund covers everything you need. Look for: VTI (Vanguard Total Stock Market ETF, 0.03% expense ratio), FZROX (Fidelity Zero Total Market, 0% expense ratio), or SWTSX (Schwab Total Stock Market, 0.03% expense ratio). These hold thousands of US stocks and cost almost nothing to own.",
      },
    ],
    takeaways: [
      "Index funds track a market index like the S&P 500 without a human picking stocks",
      "Over 90% of active fund managers underperform index funds over 15 years",
      "The expense ratio is the key fee to minimize — look for under 0.1%",
    ],
    quiz: [
      {
        question: "What percentage of actively managed funds underperform the S&P 500 over 15-year periods?",
        options: ["About 30%", "About 50%", "Over 90%", "About 70%"],
        answer: 2,
      },
      {
        question: "What is an expense ratio?",
        options: [
          "The ratio of stocks to bonds in a fund",
          "The annual percentage fee charged by a fund",
          "The fund's average annual return",
          "The minimum investment required",
        ],
        answer: 1,
      },
      {
        question: "Which expense ratio is best for a long-term investor?",
        options: ["2.0%", "1.0%", "0.5%", "0.03%"],
        answer: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Opening Your First Brokerage Account",
    duration: "8 min",
    objectives: [
      "Know which brokerage accounts are best for beginners",
      "Understand the difference between a taxable account and an IRA",
      "Complete the account setup process with confidence",
    ],
    content: [
      {
        type: "text",
        body: "A brokerage account is the account you use to buy and sell investments. Think of it like a bank account, but instead of storing cash, it stores stocks, ETFs, and other investments.",
      },
      {
        type: "heading",
        body: "The Three Best Brokerages for Beginners",
      },
      {
        type: "text",
        body: "Fidelity: No account minimums, no fees on trades, excellent customer service, and fractional shares (you can buy $10 of a $400 stock). Best overall for beginners. Vanguard: The gold standard for long-term index investors. Slightly less beginner-friendly UI but unmatched for low-cost ETFs. Charles Schwab: No minimums, no commissions, great mobile app. A strong alternative to Fidelity.",
      },
      {
        type: "heading",
        body: "Taxable Account vs. IRA: Which to Open First",
      },
      {
        type: "text",
        body: "A taxable brokerage account lets you invest with no restrictions — you can take money out whenever you want, but you pay taxes on gains each year. A Roth IRA is a retirement account where you invest after-tax dollars and your money grows completely tax-free. You can withdraw contributions (not earnings) at any time without penalty. For most people under 30, a Roth IRA should come first.",
      },
      {
        type: "text",
        body: "The Roth IRA annual contribution limit is $7,000 (2024). If you can't max it out, contribute what you can. Even $50/month into a Roth IRA at 22 grows to over $200,000 by retirement — completely tax-free.",
      },
      {
        type: "heading",
        body: "What You Need to Open an Account",
      },
      {
        type: "text",
        body: "Social Security Number, government-issued ID (driver's license or passport), bank account information for transferring money, and your employment information. The process takes 10–15 minutes online and your account is usually active within 1–2 business days.",
      },
    ],
    takeaways: [
      "Fidelity, Vanguard, and Schwab are the top three beginner-friendly brokerages",
      "A Roth IRA grows tax-free and should be the first account most young investors open",
      "Opening an account takes 15 minutes — you just need your SSN and bank info",
    ],
    quiz: [
      {
        question: "What is the key advantage of a Roth IRA over a taxable brokerage account?",
        options: [
          "You can invest more money per year",
          "Your money grows completely tax-free",
          "There are no contribution limits",
          "You get a tax deduction when you contribute",
        ],
        answer: 1,
      },
      {
        question: "Which brokerage is generally considered the best overall for beginners?",
        options: ["Robinhood", "E*Trade", "Fidelity", "Coinbase"],
        answer: 2,
      },
      {
        question: "What is the Roth IRA annual contribution limit in 2024?",
        options: ["$3,000", "$5,500", "$7,000", "$10,000"],
        answer: 2,
      },
    ],
  },
  {
    id: 5,
    title: "Dollar-Cost Averaging: How to Invest Consistently",
    duration: "7 min",
    objectives: [
      "Understand what dollar-cost averaging is",
      "Learn why timing the market is a losing strategy",
      "Set up automatic investing in 5 minutes",
    ],
    content: [
      {
        type: "text",
        body: "Dollar-cost averaging (DCA) means investing a fixed amount of money at regular intervals — regardless of what the market is doing. Instead of trying to buy at the perfect time, you just buy consistently.",
      },
      {
        type: "heading",
        body: "Why Market Timing Doesn't Work",
      },
      {
        type: "text",
        body: "Every year, financial researchers study whether investors who try to time the market (buy low, sell high) outperform those who just invest consistently. The result is always the same: market timers underperform. Missing just the 10 best trading days in a decade can cut your returns in half — and those days are impossible to predict in advance.",
      },
      {
        type: "heading",
        body: "How DCA Works in Practice",
      },
      {
        type: "text",
        body: "Say you invest $200 every month into a total market ETF. In January the price is $100/share — you buy 2 shares. In February it drops to $80 — you buy 2.5 shares. In March it recovers to $110 — you buy 1.8 shares. Your average cost per share ends up lower than if you'd tried to pick the perfect moment, because you automatically buy more when prices are low.",
      },
      {
        type: "heading",
        body: "Automating Your Investments",
      },
      {
        type: "text",
        body: "The best investment strategy is one you don't have to think about. Every major brokerage lets you set up automatic recurring investments — you choose the amount, the fund, and the frequency, and it happens automatically. This eliminates emotional decision-making and guarantees consistency.",
      },
      {
        type: "text",
        body: "Set it up like a bill: $50, $100, or $200 automatically transferred and invested on the 1st of every month. After a few months, you won't even notice it leaving your account — but your portfolio will keep growing.",
      },
    ],
    takeaways: [
      "Dollar-cost averaging means investing a fixed amount on a regular schedule",
      "Missing the 10 best trading days in a decade can cut your returns in half",
      "Automating investments removes emotion and guarantees consistency",
    ],
    quiz: [
      {
        question: "What is dollar-cost averaging?",
        options: [
          "Buying stocks only when the market is low",
          "Investing a fixed amount at regular intervals regardless of price",
          "Averaging your returns over multiple years",
          "Spreading investments across different countries",
        ],
        answer: 1,
      },
      {
        question: "What happens to investors who try to time the market?",
        options: [
          "They consistently outperform passive investors",
          "They slightly outperform on average",
          "They typically underperform consistent investors",
          "Results are mixed with no clear winner",
        ],
        answer: 2,
      },
      {
        question: "What is the biggest benefit of automating your investments?",
        options: [
          "You get a lower expense ratio",
          "It eliminates emotional decision-making",
          "The brokerage invests better on your behalf",
          "You pay no taxes on automated investments",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 6,
    title: "Thinking Long-Term: The Investor Mindset",
    duration: "8 min",
    objectives: [
      "Understand why most investors underperform the market",
      "Build the mental framework for staying invested during downturns",
      "Create your personal investing plan",
    ],
    content: [
      {
        type: "text",
        body: "The average investor earns about 3–4% per year in the stock market. The market itself returns about 10%. The difference isn't luck — it's behavior. Investors who earn less do so because they sell during downturns, chase hot stocks, and make emotional decisions.",
      },
      {
        type: "heading",
        body: "Market Crashes Are Normal — and Temporary",
      },
      {
        type: "text",
        body: "Since 1900, the US stock market has experienced over 30 bear markets (drops of 20% or more). Every single one was followed by a full recovery and new highs. The 2008 financial crisis dropped the market 50% — and within 5 years it had fully recovered. COVID crashed the market 35% in March 2020 — it recovered within 6 months.",
      },
      {
        type: "text",
        body: "The investors who got hurt were the ones who sold at the bottom. The ones who held — or bought more — came out ahead.",
      },
      {
        type: "heading",
        body: "Your Time Horizon Is Your Biggest Advantage",
      },
      {
        type: "text",
        body: "If you're 22 and investing for retirement at 65, you have a 43-year time horizon. Over any 20-year period in stock market history, the market has never had a negative return. Your biggest risk isn't a market crash — it's not investing at all, or selling during a dip.",
      },
      {
        type: "heading",
        body: "Your Personal Investing Plan",
      },
      {
        type: "text",
        body: "A simple plan beats a complex one: Pick one or two low-cost index funds (like VTI or a target-date retirement fund). Invest a fixed amount every month automatically. Don't check your portfolio more than once a quarter. Never sell during a downturn unless your life situation has fundamentally changed. Stay invested for decades.",
      },
      {
        type: "text",
        body: "That's it. You now know more about investing than 80% of adults. The next step is opening an account and making your first investment — even if it's $25.",
      },
    ],
    takeaways: [
      "The average investor earns 3–4% while the market returns 10% — the gap is behavioral",
      "Every market crash in history has been followed by full recovery",
      "A simple, automated, long-term plan is the most effective investing strategy",
    ],
    quiz: [
      {
        question: "Why do average investors earn 3–4% when the market returns ~10%?",
        options: [
          "They pick worse stocks",
          "They pay too many taxes",
          "They make emotional decisions — selling low, chasing returns",
          "They don't have access to good investments",
        ],
        answer: 2,
      },
      {
        question: "What has happened after every bear market (20%+ drop) in US stock market history?",
        options: [
          "The market stayed flat for years",
          "The market recovered and reached new highs",
          "The government had to intervene",
          "Investors lost money permanently",
        ],
        answer: 1,
      },
      {
        question: "For a 22-year-old investor, what is the biggest real risk?",
        options: [
          "A market crash wiping out savings",
          "Picking the wrong index fund",
          "Not investing at all or selling during downturns",
          "Interest rates rising",
        ],
        answer: 2,
      },
    ],
  },
];

export default function Investing101Page() {
  const router = useRouter();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { router.push("/login"); return; }
      const { data } = await supabase
        .from("user_subscriptions")
        .select("status")
        .eq("user_id", user.id)
        .single();
      if (data?.status !== "premium") { router.push("/courses/premium-gate"); return; }
      setChecking(false);
    });
  }, [router]);

  if (checking) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading...</div>
      </main>
    );
  }

  const lesson = lessons[activeLesson];
  const progress = (completedLessons.length / lessons.length) * 100;

  const handleComplete = () => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson]);
    }
    setQuizAnswers({});
    setQuizSubmitted(false);
    if (activeLesson < lessons.length - 1) setActiveLesson(activeLesson + 1);
  };

  const allAnswered = lesson.quiz.every((_, i) => quizAnswers[i] !== undefined);
  const score = lesson.quiz.filter((q, i) => quizAnswers[i] === q.answer).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <Link href="/courses" className="text-sm text-gray-500 hover:text-gray-800">← Back to Courses</Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📈</span>
            <h1 className="text-3xl font-extrabold" style={{ color: "#1e3a5f" }}>Investing 101</h1>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">Premium</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>{lessons.length} lessons</span>
            <span>·</span>
            <span>~50 min total</span>
            <span>·</span>
            <span>{completedLessons.length} of {lessons.length} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase mb-3">Lessons</div>
              <div className="space-y-1">
                {lessons.map((l, i) => (
                  <button
                    key={l.id}
                    onClick={() => { setActiveLesson(i); setQuizAnswers({}); setQuizSubmitted(false); }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition flex items-center gap-2 ${activeLesson === i ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${completedLessons.includes(i) ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                      {completedLessons.includes(i) ? "✓" : i + 1}
                    </span>
                    <span className="leading-tight">{l.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Lesson {lesson.id} of {lessons.length}</span>
                <span className="text-xs text-gray-400">{lesson.duration}</span>
              </div>
              <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>{lesson.title}</h2>

              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-400 uppercase mb-2">What you&apos;ll learn</div>
                <ul className="space-y-1">
                  {lesson.objectives.map((o) => (
                    <li key={o} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">✓</span> {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                {lesson.content.map((block, i) =>
                  block.type === "heading" ? (
                    <h3 key={i} className="text-lg font-bold pt-2" style={{ color: "#1e3a5f" }}>{block.body}</h3>
                  ) : (
                    <p key={i} className="text-gray-700 leading-relaxed">{block.body}</p>
                  )
                )}
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-8">
                <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Key Takeaways</div>
                <ul className="space-y-1">
                  {lesson.takeaways.map((t) => (
                    <li key={t} className="text-sm text-emerald-800 flex items-start gap-2">
                      <span className="mt-0.5">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <div className="text-lg font-bold mb-4" style={{ color: "#1e3a5f" }}>Quiz</div>
                <div className="space-y-6">
                  {lesson.quiz.map((q, qi) => (
                    <div key={qi}>
                      <div className="font-semibold text-gray-800 mb-3">{qi + 1}. {q.question}</div>
                      <div className="space-y-2">
                        {q.options.map((opt, oi) => {
                          let style = "border-gray-200 text-gray-700 hover:border-emerald-300";
                          if (quizSubmitted) {
                            if (oi === q.answer) style = "border-emerald-500 bg-emerald-50 text-emerald-800";
                            else if (quizAnswers[qi] === oi) style = "border-red-400 bg-red-50 text-red-700";
                          } else if (quizAnswers[qi] === oi) {
                            style = "border-emerald-400 bg-emerald-50 text-emerald-800";
                          }
                          return (
                            <button
                              key={oi}
                              disabled={quizSubmitted}
                              onClick={() => setQuizAnswers({ ...quizAnswers, [qi]: oi })}
                              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${style}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {!quizSubmitted ? (
                  <button
                    disabled={!allAnswered}
                    onClick={() => setQuizSubmitted(true)}
                    className="mt-6 bg-slate-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-700 transition disabled:opacity-40"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <div className="mt-6">
                    <div className={`text-sm font-semibold mb-4 ${score === lesson.quiz.length ? "text-emerald-600" : "text-amber-600"}`}>
                      You got {score} of {lesson.quiz.length} correct {score === lesson.quiz.length ? "— Perfect!" : "— Review the highlighted answers above"}
                    </div>
                    <button
                      onClick={handleComplete}
                      className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-400 transition"
                    >
                      {activeLesson < lessons.length - 1 ? "Next Lesson →" : "Complete Course ✓"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
