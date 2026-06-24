"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const lessons = [
  {
    id: 1,
    title: "Understanding Your Net Worth",
    duration: "8 min",
    objectives: [
      "Calculate your current net worth",
      "Understand why net worth matters more than income",
      "Set a realistic 5-year net worth target",
    ],
    content: [
      { type: "text", body: "Net worth is the single most important number in personal finance. It's simple: everything you own minus everything you owe. Assets minus liabilities. A doctor earning $300,000 a year with $500,000 in debt has a lower net worth than a teacher earning $60,000 who has been saving and investing for 20 years." },
      { type: "heading", body: "How to Calculate Your Net Worth" },
      { type: "text", body: "Assets include: checking and savings account balances, investment accounts, retirement accounts (401k, IRA), cash value of property you own, and any other valuables. Liabilities include: student loans, credit card balances, car loans, mortgage balance, and any other debts." },
      { type: "text", body: "Subtract your liabilities from your assets. If you're in your early 20s and your net worth is negative — that's completely normal. The average 22-year-old in the US has a negative net worth due to student loans. What matters is the trajectory: is it moving up?" },
      { type: "heading", body: "Income vs. Net Worth" },
      { type: "text", body: "High income alone doesn't build wealth. The US has millions of high-income earners with near-zero net worth because they spend everything they make. Wealth is built by consistently earning more than you spend and putting the difference to work. A person earning $50,000 who saves 20% will out-accumulate someone earning $150,000 who saves 2%." },
      { type: "heading", body: "Setting a Net Worth Target" },
      { type: "text", body: "A common benchmark: by age 30, aim for a net worth equal to your annual salary. By 40, aim for 3x your salary. By 50, aim for 6x. These are benchmarks, not rules — but they give you a concrete target to aim for and adjust your savings rate accordingly." },
    ],
    takeaways: [
      "Net worth = assets minus liabilities — calculate yours today",
      "Income doesn't build wealth; saving and investing the gap does",
      "Target a net worth equal to one year's salary by age 30",
    ],
    quiz: [
      { question: "How do you calculate net worth?", options: ["Annual income minus taxes", "Monthly savings times 12", "Assets minus liabilities", "Investments plus cash"], answer: 2 },
      { question: "Which person has the higher net worth?", options: ["Doctor earning $300k with $500k in debt", "Teacher earning $60k who has saved and invested for 20 years with $200k in assets and no debt", "They're equal", "Impossible to say without more info"], answer: 1 },
      { question: "What is the common benchmark net worth target by age 30?", options: ["$100,000", "Equal to 5 years of salary", "Equal to 1 year of salary", "Zero debt"], answer: 2 },
    ],
  },
  {
    id: 2,
    title: "The Power of Compound Interest",
    duration: "9 min",
    objectives: [
      "Understand exactly how compound interest works",
      "See the mathematical difference between starting at 22 vs. 32",
      "Calculate what your investments could grow to",
    ],
    content: [
      { type: "text", body: "Compound interest is earning returns on your returns. It's the financial concept that Einstein allegedly called 'the eighth wonder of the world.' Whether or not he said it, the math is genuinely remarkable." },
      { type: "heading", body: "The Math of Compounding" },
      { type: "text", body: "If you invest $10,000 at 7% annual return: Year 1: $10,700. Year 5: $14,026. Year 10: $19,672. Year 20: $38,697. Year 30: $76,123. Your original $10,000 grew to over $76,000 without you adding another dollar. The growth accelerates because each year's returns are calculated on a larger base." },
      { type: "heading", body: "The Cost of Waiting 10 Years" },
      { type: "text", body: "Person A starts investing $300/month at age 22 and stops at 32 — just 10 years of contributions, then leaves the money alone. Person B starts at 32 and invests $300/month until age 65 — 33 years of contributions. At 65, who has more money at a 7% return? Person A, despite contributing for only 10 years vs. 33. The 10-year head start compounds so powerfully that it can never be caught up." },
      { type: "heading", body: "The Three Variables You Control" },
      { type: "text", body: "Time: the more years your money compounds, the bigger the result. Contribution amount: more money in means more to compound. Return rate: higher returns accelerate growth, but chasing higher returns usually means taking on more risk. Of these three, time is the one young investors have the most of — and it's the one most people waste by starting too late." },
      { type: "heading", body: "Inflation: The Silent Eroder" },
      { type: "text", body: "Compound interest works against you too — in the form of compound inflation on debt and the erosion of cash. A debt left unpaid compounds in the lender's favor. Cash left uninvested loses purchasing power year after year. Compound interest rewards investors and punishes people who wait." },
    ],
    takeaways: [
      "$10,000 invested at 7% becomes $76,000 in 30 years without adding more",
      "Starting 10 years earlier can outperform investing 3x as long",
      "Time is your most valuable financial asset — investing early is non-negotiable",
    ],
    quiz: [
      { question: "What does 'compounding' mean in investing?", options: ["Investing in multiple asset classes", "Earning returns on your returns over time", "Reinvesting dividends only", "Borrowing to invest more"], answer: 1 },
      { question: "Of the three compounding variables, which do young investors have the most of?", options: ["Contribution amount", "Return rate", "Time", "Account type"], answer: 2 },
      { question: "What happens to $10,000 invested at 7% over 30 years?", options: ["It grows to about $21,000", "It grows to about $76,000", "It grows to about $40,000", "It grows to about $200,000"], answer: 1 },
    ],
  },
  {
    id: 3,
    title: "Building Multiple Income Streams",
    duration: "10 min",
    objectives: [
      "Understand the difference between active and passive income",
      "Learn 5 realistic income streams for people in their 20s",
      "Build a plan to add your first additional income stream",
    ],
    content: [
      { type: "text", body: "Most people have one income stream: their job. If that job disappears, so does 100% of their income. Wealthy people typically have multiple income streams — not because they work harder, but because they built systems over time that generate income without their constant attention." },
      { type: "heading", body: "Active vs. Passive Income" },
      { type: "text", body: "Active income requires your time and effort to generate: your salary, freelance work, consulting. Passive income generates money with minimal ongoing effort: dividends from investments, rental income, royalties, income from a business you've built. The goal isn't to stop working — it's to have income that doesn't stop if you do." },
      { type: "heading", body: "5 Realistic Income Streams for Your 20s" },
      { type: "text", body: "1. Dividend investing: stocks and ETFs that pay regular dividends create passive income. Even $10,000 in a dividend ETF might generate $300–400/year. 2. Freelancing or consulting: selling a skill you already have (writing, design, coding, marketing) on a project basis. 3. Digital products: templates, guides, or courses you create once and sell repeatedly. 4. High-yield savings/CDs: not exciting, but 4–5% on emergency fund money is real passive income. 5. Side business: a product or service with systems built around it." },
      { type: "heading", body: "The Right Order of Operations" },
      { type: "text", body: "Don't try to build 5 income streams at once. The right order: First, maximize your primary income — get raises, promotions, or a better-paying job. Second, invest consistently so your money starts working. Third, add one side income stream that aligns with your skills. Fourth, as that grows, add another. Building wealth is sequential, not simultaneous." },
      { type: "heading", body: "Starting Small Is Starting" },
      { type: "text", body: "The most common mistake is waiting until you have the 'perfect' plan. A freelance project that earns $500 this month is more valuable than a perfectly planned passive income business that launches next year. Start with the simplest version of an additional income stream and build from there." },
    ],
    takeaways: [
      "Wealthy people build multiple income streams — not by working harder, but smarter",
      "Start with maximizing your primary income before adding streams",
      "Dividend investing, freelancing, and digital products are realistic starting points",
    ],
    quiz: [
      { question: "What is passive income?", options: ["Income from a part-time job", "Money that requires no effort ever", "Income generated with minimal ongoing effort from systems you've built", "Guaranteed investment returns"], answer: 2 },
      { question: "What is the recommended first step before adding side income streams?", options: ["Start a dropshipping business", "Maximize your primary income first", "Buy rental property", "Launch a YouTube channel"], answer: 1 },
      { question: "Which of these is an example of passive income?", options: ["Driving for Uber", "Dividends from an investment portfolio", "Freelance design work", "Consulting fees"], answer: 1 },
    ],
  },
  {
    id: 4,
    title: "Tax-Advantaged Accounts: Keep More of What You Earn",
    duration: "10 min",
    objectives: [
      "Understand the main tax-advantaged accounts available to you",
      "Learn the difference between traditional and Roth accounts",
      "Know the contribution limits and how to maximize them",
    ],
    content: [
      { type: "text", body: "Taxes are one of your largest lifetime expenses. But the government provides legal ways to dramatically reduce what you owe — through tax-advantaged investment accounts. Using these accounts correctly can add hundreds of thousands of dollars to your retirement wealth." },
      { type: "heading", body: "The 401(k): Your Employer's Gift" },
      { type: "text", body: "A 401(k) is an employer-sponsored retirement account. You contribute pre-tax money, it grows tax-deferred, and you pay taxes when you withdraw in retirement. The 2024 contribution limit is $23,000. The biggest feature: employer matching. If your employer matches 50% of contributions up to 6% of your salary, and you earn $60,000, that's up to $1,800/year in free money. Always contribute enough to get the full match — it's an instant 50–100% return." },
      { type: "heading", body: "Roth IRA: Tax-Free Growth" },
      { type: "text", body: "A Roth IRA is funded with after-tax money. You don't get a tax break now, but your money grows completely tax-free — and withdrawals in retirement are tax-free. The 2024 limit is $7,000/year. For most people in their 20s and 30s (who are in lower tax brackets now than they will be later), the Roth IRA is the most powerful wealth-building account available." },
      { type: "heading", body: "Traditional vs. Roth: Which Is Better?" },
      { type: "text", body: "Traditional accounts (401k, Traditional IRA): tax deduction now, taxed on withdrawal. Best if you're in a high tax bracket now and expect to be in a lower bracket in retirement. Roth accounts: no deduction now, tax-free withdrawal. Best if you're in a lower tax bracket now and expect to be in a higher bracket in retirement — which describes most people in their 20s." },
      { type: "heading", body: "HSA: The Triple Tax Advantage" },
      { type: "text", body: "If you have a high-deductible health plan, you can open an HSA (Health Savings Account). It's the only account with a triple tax advantage: contributions are tax-deductible, growth is tax-free, and withdrawals for medical expenses are tax-free. After age 65, you can withdraw for any reason (like a traditional IRA). Max your HSA before your IRA if you have access to one." },
    ],
    takeaways: [
      "Always contribute enough to your 401(k) to get the full employer match — it's free money",
      "A Roth IRA offers tax-free growth and is ideal for most people in their 20s",
      "An HSA has a triple tax advantage and is worth maxing before your IRA",
    ],
    quiz: [
      { question: "What is the 401(k) employer match, and why does it matter?", options: ["A fee your employer charges", "Free money your employer adds to your contributions — an instant return", "A government subsidy", "An automatic investment strategy"], answer: 1 },
      { question: "When is a Roth IRA better than a Traditional IRA?", options: ["When you're in a high tax bracket now", "When you expect to be in a lower tax bracket in retirement", "When you're over 50", "When you're in a lower tax bracket now and expect to be higher later"], answer: 3 },
      { question: "What makes an HSA unique among investment accounts?", options: ["It has no contribution limits", "It earns guaranteed returns", "It has a triple tax advantage: deductible, grows tax-free, withdraws tax-free for medical expenses", "It's available to everyone"], answer: 2 },
    ],
  },
  {
    id: 5,
    title: "Building and Protecting Your Credit",
    duration: "8 min",
    objectives: [
      "Understand how your credit score is calculated",
      "Learn the fastest ways to build credit from scratch",
      "Know what protects and what destroys your credit",
    ],
    content: [
      { type: "text", body: "Your credit score is a 3-digit number (300–850) that determines how much it costs you to borrow money. A high score (750+) can save you tens of thousands of dollars over your lifetime in lower interest rates on mortgages, car loans, and more. A poor score can cost you those same tens of thousands — or prevent you from borrowing at all." },
      { type: "heading", body: "How Your Credit Score Is Calculated" },
      { type: "text", body: "Payment history (35%): Paying bills on time is the single biggest factor. One missed payment can drop your score 50–100 points. Credit utilization (30%): The percentage of available credit you're using. Keep it under 10% for the best score — under 30% at minimum. Length of credit history (15%): Older accounts help. Don't close old credit cards. Credit mix (10%): Having different types of credit (cards, loans). New credit (10%): Every new application is a hard inquiry that temporarily lowers your score." },
      { type: "heading", body: "Building Credit From Zero" },
      { type: "text", body: "If you have no credit history: get a secured credit card (you deposit $200–500 as collateral, get a card with that limit), use it for small purchases each month, pay the full balance every month, and your credit will build within 6–12 months. Alternatively, ask a family member with good credit to add you as an authorized user on their card — you instantly inherit part of their history." },
      { type: "heading", body: "What to Never Do" },
      { type: "text", body: "Never miss a payment — even one missed payment stays on your report for 7 years. Never max out a credit card — high utilization tanks your score even if you pay it off each month. Never apply for multiple cards at once — each application is a hard inquiry. Never close your oldest credit card — it shortens your credit history." },
    ],
    takeaways: [
      "Payment history (35%) is the biggest factor — never miss a payment",
      "Keep credit utilization under 10% for the best score",
      "A secured credit card is the fastest way to build credit from zero",
    ],
    quiz: [
      { question: "What is the biggest factor in your credit score?", options: ["Credit utilization", "Length of credit history", "Payment history", "Credit mix"], answer: 2 },
      { question: "What credit utilization percentage is ideal for the best score?", options: ["Under 50%", "Under 30%", "Under 10%", "0%"], answer: 2 },
      { question: "What is the best way to build credit from zero?", options: ["Take out a personal loan", "Get a secured credit card and pay it off monthly", "Apply for multiple credit cards at once", "Ask a bank for a credit limit increase"], answer: 1 },
    ],
  },
  {
    id: 6,
    title: "Real Estate Basics for Young Adults",
    duration: "9 min",
    objectives: [
      "Understand when buying a home makes sense vs. renting",
      "Learn how a mortgage works",
      "Know the true costs of homeownership",
    ],
    content: [
      { type: "text", body: "Real estate is often called the best investment you can make. It's also one of the most misunderstood. Buying a home is not always better than renting — and the decision depends heavily on your timeline, finances, and local market." },
      { type: "heading", body: "The Rent vs. Buy Debate" },
      { type: "text", body: "Renting is often smarter when: you plan to move within 5 years, you're in a high-cost city where price-to-rent ratios are extreme, or you don't have a 10–20% down payment saved. Buying is often smarter when: you plan to stay 5+ years, prices in your market are reasonable relative to rents, you have a down payment, and your income is stable." },
      { type: "heading", body: "How a Mortgage Works" },
      { type: "text", body: "A mortgage is a loan to buy property, secured by the property itself. You make monthly payments of principal (paying down the loan) and interest. With a $300,000 30-year mortgage at 7% interest, your monthly payment is about $1,996. Over 30 years, you'll pay roughly $419,000 in interest — more than the original loan. This is why paying extra on your mortgage early dramatically reduces total cost." },
      { type: "heading", body: "The True Cost of Homeownership" },
      { type: "text", body: "The purchase price is just the beginning. Add: closing costs (2–5% of the loan), property taxes (0.5–2.5% of value per year), homeowner's insurance, HOA fees (if applicable), and maintenance (budget 1% of home value per year). A $400,000 home can easily cost $3,000–4,000/month all-in — not just the mortgage payment." },
      { type: "heading", body: "Real Estate as an Investment" },
      { type: "text", body: "Homeownership builds equity over time, provides leverage (you control a $400k asset with $80k down), and historically appreciates around 3–4% annually. However, compared to the stock market's 10%, real estate often underperforms — especially when you account for all costs. The real wealth-builder is using leverage responsibly and holding long-term." },
    ],
    takeaways: [
      "Buying makes sense when you plan to stay 5+ years and have a down payment saved",
      "A 30-year mortgage at 7% means you pay more in interest than the original loan",
      "Budget 1% of home value per year for maintenance on top of your mortgage",
    ],
    quiz: [
      { question: "When does renting often make more financial sense than buying?", options: ["When you want to build equity", "When you plan to stay less than 5 years", "When mortgage rates are low", "When you have a large down payment"], answer: 1 },
      { question: "On a $300,000 mortgage at 7% over 30 years, approximately how much interest do you pay total?", options: ["$50,000", "$150,000", "$419,000", "$600,000"], answer: 2 },
      { question: "What is a good annual maintenance budget for a home as a percentage of its value?", options: ["0.1%", "0.5%", "1%", "5%"], answer: 2 },
    ],
  },
  {
    id: 7,
    title: "Your 10-Year Wealth Plan",
    duration: "10 min",
    objectives: [
      "Build a concrete 10-year financial plan",
      "Understand the order of financial operations",
      "Know the milestones to hit in your 20s and 30s",
    ],
    content: [
      { type: "text", body: "Wealth isn't built by accident. The people who reach financial independence follow a sequence — sometimes without even realizing it. This lesson gives you that sequence as a concrete plan you can start today." },
      { type: "heading", body: "The Financial Order of Operations" },
      { type: "text", body: "Step 1: Build a $1,000 emergency starter fund. Step 2: Get your full employer 401(k) match — this is a 50–100% instant return. Step 3: Pay off high-interest debt (credit cards, anything above 7%). Step 4: Max your Roth IRA ($7,000/year). Step 5: Max your 401(k) ($23,000/year). Step 6: Build a 3–6 month emergency fund. Step 7: Invest additional money in a taxable brokerage account. Step 8: Consider real estate or other assets." },
      { type: "heading", body: "Milestones by Age" },
      { type: "text", body: "By 25: zero high-interest debt, Roth IRA open and contributing, 3-month emergency fund, positive net worth trend. By 30: net worth equal to annual salary, 401(k) contributing at least enough for full match, Roth IRA maxed or close, beginning to invest beyond retirement accounts. By 35: net worth 2–3x annual salary, multiple income streams established, housing situation stable." },
      { type: "heading", body: "The Savings Rate Is Everything" },
      { type: "text", body: "The single biggest lever in your wealth-building journey is your savings rate — the percentage of your income you save and invest. At a 10% savings rate, it takes about 40 years to reach financial independence. At 25%, it takes 25 years. At 50%, it takes 15 years. You don't need to save 50% — but every extra percentage point you can consistently save shaves years off your timeline." },
      { type: "heading", body: "Avoiding the Lifestyle Inflation Trap" },
      { type: "text", body: "The greatest threat to wealth-building in your 20s and 30s is lifestyle inflation: spending more as you earn more, so your savings rate stays the same even as income rises. The antidote: every time you get a raise, immediately direct at least 50% of the increase to savings and investing before you adjust your lifestyle to the new income. You'll never miss what you never had." },
    ],
    takeaways: [
      "Follow the financial order of operations: emergency fund → employer match → high-interest debt → Roth IRA → 401(k)",
      "Your savings rate is the biggest lever — every 1% more shaves years off your timeline",
      "Direct 50% of every raise to savings before adjusting your lifestyle",
    ],
    quiz: [
      { question: "What is the first financial step in the order of operations?", options: ["Max your Roth IRA", "Pay off all debt", "Build a $1,000 emergency starter fund", "Get your employer 401(k) match"], answer: 2 },
      { question: "Why should you always contribute enough to get the full 401(k) employer match?", options: ["It lowers your tax bill the most", "It's an instant 50–100% return on that money", "It gives you the highest investment returns", "It's required by law"], answer: 1 },
      { question: "What is the biggest wealth-building threat in your 20s and 30s?", options: ["Stock market crashes", "High taxes", "Lifestyle inflation — spending more as you earn more", "Low interest rates"], answer: 2 },
    ],
  },
];

export default function WealthBuildingPage() {
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
      const { data } = await supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single();
      if (data?.status !== "premium") { router.push("/courses/premium-gate"); return; }
      setChecking(false);
    });
  }, [router]);

  if (checking) {
    return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;
  }

  const lesson = lessons[activeLesson];
  const progress = (completedLessons.length / lessons.length) * 100;

  const handleComplete = () => {
    if (!completedLessons.includes(activeLesson)) setCompletedLessons([...completedLessons, activeLesson]);
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
            <span className="text-3xl">🏦</span>
            <h1 className="text-3xl font-extrabold" style={{ color: "#1e3a5f" }}>Wealth Building for Young Adults</h1>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">Premium</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>{lessons.length} lessons</span><span>·</span><span>~60 min total</span><span>·</span>
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
                  <button key={l.id} onClick={() => { setActiveLesson(i); setQuizAnswers({}); setQuizSubmitted(false); }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition flex items-center gap-2 ${activeLesson === i ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
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
                <ul className="space-y-1">{lesson.objectives.map((o) => <li key={o} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span> {o}</li>)}</ul>
              </div>
              <div className="space-y-4 mb-8">
                {lesson.content.map((block, i) => block.type === "heading"
                  ? <h3 key={i} className="text-lg font-bold pt-2" style={{ color: "#1e3a5f" }}>{block.body}</h3>
                  : <p key={i} className="text-gray-700 leading-relaxed">{block.body}</p>)}
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-8">
                <div className="text-xs font-semibold text-emerald-700 uppercase mb-2">Key Takeaways</div>
                <ul className="space-y-1">{lesson.takeaways.map((t) => <li key={t} className="text-sm text-emerald-800 flex items-start gap-2"><span className="mt-0.5">✓</span> {t}</li>)}</ul>
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
                          if (quizSubmitted) { if (oi === q.answer) style = "border-emerald-500 bg-emerald-50 text-emerald-800"; else if (quizAnswers[qi] === oi) style = "border-red-400 bg-red-50 text-red-700"; }
                          else if (quizAnswers[qi] === oi) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
                          return <button key={oi} disabled={quizSubmitted} onClick={() => setQuizAnswers({ ...quizAnswers, [qi]: oi })} className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${style}`}>{opt}</button>;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {!quizSubmitted ? (
                  <button disabled={!allAnswered} onClick={() => setQuizSubmitted(true)} className="mt-6 bg-slate-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-700 transition disabled:opacity-40">Submit Quiz</button>
                ) : (
                  <div className="mt-6">
                    <div className={`text-sm font-semibold mb-4 ${score === lesson.quiz.length ? "text-emerald-600" : "text-amber-600"}`}>
                      You got {score} of {lesson.quiz.length} correct {score === lesson.quiz.length ? "— Perfect!" : "— Review the highlighted answers above"}
                    </div>
                    <button onClick={handleComplete} className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-400 transition">
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
