"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useRequireAuth } from "@/lib/useAuth";
import { loadProgress, saveLesson } from "@/lib/lessonProgress";

const lessons = [
  {
    id: 1,
    title: "Your First Paycheck: What to Do Immediately",
    duration: "8 min",
    objectives: [
      "Understand the difference between gross and net pay",
      "Know exactly what to do with your first paycheck",
      "Set up the financial systems that run automatically",
    ],
    content: [
      {
        type: "text",
        body: "Your first real paycheck is a milestone — and the financial decisions you make with it create habits that can last decades. Most new employees spend the first few paychecks on lifestyle upgrades and tell themselves they'll figure out the financial planning 'later.' Later is one of the most expensive words in personal finance. Later often never comes.",
      },
      {
        type: "heading",
        body: "Gross vs. Net Pay: The Number That Actually Matters",
      },
      {
        type: "text",
        body: "Your salary is your gross pay — what you earn on paper before any deductions. Your net pay (also called take-home pay) is the actual amount deposited in your bank account after federal taxes, state taxes, Social Security (6.2%), Medicare (1.45%), and any benefits deductions like health insurance or 401(k) contributions.",
      },
      {
        type: "text",
        body: "The gap is larger than most people expect. A $60,000 annual salary typically translates to $3,800–4,200/month in take-home pay, depending on your state and benefit elections. That's $21,600–25,200 less per year than your headline salary — before you spend a dollar. Always budget from your net pay. Never plan your finances around a number that doesn't hit your account.",
      },
      {
        type: "heading",
        body: "The First 30 Days Financial Checklist",
      },
      {
        type: "text",
        body: "Enroll in your 401(k) immediately — at minimum, contribute enough to get the full employer match, which is free money you cannot recover if you miss it. Set up direct deposit split between checking (for daily spending) and savings (for your emergency fund) so the division is automatic. Open a Roth IRA if you don't already have one — contributions can start with as little as $50/month.",
      },
      {
        type: "text",
        body: "Review your health insurance enrollment options carefully — picking the wrong plan can cost thousands per year. Set up automatic transfers from your checking to savings on payday so money moves before you can spend it. These are not optional steps to get to eventually. These are the financial systems that will either work for you or against you for the next decade.",
      },
      {
        type: "heading",
        body: "Pay Yourself First: The Only Budgeting Strategy That Actually Works",
      },
      {
        type: "text",
        body: "The most reliable savings strategy is removing the choice entirely. Set up automatic transfers that move money to savings and investments on the same day you're paid. If you never see the money in your checking account, you cannot spend it. Most people try to save what's left after spending — which means they save nothing, or close to it.",
      },
      {
        type: "text",
        body: "Flip the order: savings and investments come out first, automatically, like taxes. Then you spend what's left. Even $100–200 automatically invested each payday builds substantial wealth over a decade — while you barely notice it's gone. The automation is more important than the amount. Start small and increase it.",
      },
      {
        type: "heading",
        body: "Building Your First Real Budget",
      },
      {
        type: "text",
        body: "Start with your monthly take-home pay. List fixed expenses first: rent, utilities, loan minimum payments, insurance premiums. Then list savings and investments as fixed, non-negotiable amounts — not whatever is left over. Finally, divide the remainder across variable expenses: groceries, transportation, dining, entertainment. The shift that changes everything: savings is a fixed expense that comes out automatically, not a bonus if anything is left.",
      },
    ],
    takeaways: [
      "Always budget from your take-home (net) pay — not your gross salary",
      "Set up automatic savings transfers on payday so the money moves before you can spend it",
      "Enroll in your 401(k) and get the full employer match within your first 30 days",
    ],
    quiz: [
      { question: "What is the difference between gross and net pay?", options: ["There is no difference", "Gross is what you earn before deductions; net is what you actually take home", "Net is higher than gross", "Gross is your hourly rate; net is your annual salary"], answer: 1 },
      { question: "What does 'pay yourself first' mean?", options: ["Spend money on yourself before paying bills", "Automatically save and invest before spending anything else", "Negotiate your salary before starting work", "Pay off debt before saving"], answer: 1 },
      { question: "How should you treat savings in your budget?", options: ["As whatever is left over after spending", "As a non-negotiable line item that comes out automatically like a bill", "As optional depending on the month", "As a reward for hitting financial goals"], answer: 1 },
    ],
  },
  {
    id: 2,
    title: "Your 401(k): Everything You Need to Know",
    duration: "9 min",
    objectives: [
      "Understand how a 401(k) works and how to maximize it",
      "Know how employer matching works and why it matters",
      "Choose the right investment options inside your 401(k)",
    ],
    content: [
      {
        type: "text",
        body: "The 401(k) is the cornerstone of American retirement savings — and your employer's plan is likely the single best wealth-building tool you have access to right now. Yet over a third of employees don't contribute enough to get their full employer match, leaving thousands of dollars in free money uncollected every year.",
      },
      {
        type: "heading",
        body: "How a 401(k) Actually Works",
      },
      {
        type: "text",
        body: "A traditional 401(k) lets you contribute pre-tax dollars directly from your paycheck. If you earn $5,000/month and contribute $500 to your 401(k), you're only taxed on $4,500. That means every dollar you contribute effectively costs you less than a dollar out of pocket — the government subsidizes your retirement savings by reducing your tax bill.",
      },
      {
        type: "text",
        body: "Your investments grow tax-deferred — you pay no capital gains or dividend taxes while the money is in the account. You pay income tax only when you withdraw in retirement. The 2024 contribution limit is $23,000/year. Many employers also offer a Roth 401(k) option — after-tax contributions with completely tax-free growth and withdrawals. For most people in their 20s, the Roth 401(k) is the better long-term choice.",
      },
      {
        type: "heading",
        body: "The Employer Match: The Best Return on Investment That Exists",
      },
      {
        type: "text",
        body: "An employer match is free money your company adds to your 401(k) based on what you contribute. A common match structure: 100% of your contributions up to 3% of salary, plus 50% of contributions from 3–5% of salary. On a $60,000 salary, maxing this match means contributing $3,000 (5% of salary) and receiving up to $2,400 from your employer — an instant 80% return on your contribution before the market does anything.",
      },
      {
        type: "text",
        body: "Not getting the full match is the equivalent of voluntarily taking a pay cut. There is no investment in the world that offers a guaranteed 50–100% instant return. Always contribute at least enough to get 100% of the match — this takes priority over everything except high-interest debt.",
      },
      {
        type: "heading",
        body: "Vesting Schedules: When the Match Is Really Yours",
      },
      {
        type: "text",
        body: "Employer match money often comes with a vesting schedule — meaning you earn ownership of it over time based on how long you stay. Cliff vesting: you own 0% of employer contributions until you hit a certain tenure (often 3 years), then 100% all at once. Graded vesting: you earn a percentage per year (e.g., 20% per year, fully vested after 5 years). Your own contributions are always 100% yours immediately.",
      },
      {
        type: "text",
        body: "This matters enormously when changing jobs. Leaving right before a cliff vest date can cost you thousands. Know your vesting schedule and factor it into any job change timeline.",
      },
      {
        type: "heading",
        body: "Choosing the Right Investments Inside Your 401(k)",
      },
      {
        type: "text",
        body: "Most 401(k) plans offer a limited menu of 10–30 fund options. Look for: target-date retirement funds (they automatically adjust allocation from aggressive to conservative as you approach retirement — a solid, hands-off default), and low-cost index funds tracking the S&P 500 or total market with expense ratios under 0.1%. Avoid: high-expense-ratio actively managed funds (above 0.5%), overweighting company stock (concentrates your risk in one place), and heavy bond allocations if you're under 40.",
      },
    ],
    takeaways: [
      "Always contribute enough to get 100% of your employer match — it's the highest guaranteed return available",
      "Know your vesting schedule before changing jobs — leaving early can cost thousands",
      "Choose low-cost index funds or a target-date fund as your default inside a 401(k)",
    ],
    quiz: [
      { question: "What is an employer 401(k) match?", options: ["A loan from your employer to invest", "Free money your employer adds based on your own contributions", "A government subsidy for retirement savings", "An automatic investment in company stock"], answer: 1 },
      { question: "What is a vesting schedule?", options: ["The investment schedule inside your 401(k)", "A timeline determining when you fully own the employer contributions", "The schedule for automatic payroll deductions", "A plan for when to retire"], answer: 1 },
      { question: "What is the best simple default investment inside a 401(k) for a new employee?", options: ["Company stock", "A high-yield bond fund", "A target-date retirement fund matching your expected retirement year", "A money market account"], answer: 2 },
    ],
  },
  {
    id: 3,
    title: "Taxes for Beginners: W-4, Withholding, and Filing",
    duration: "9 min",
    objectives: [
      "Understand how income taxes actually work",
      "Fill out your W-4 correctly to avoid owing money or over-withholding",
      "Know what to expect when you file your first tax return",
    ],
    content: [
      {
        type: "text",
        body: "Taxes are one of the largest expenses most Americans pay over their lifetime — yet very few people understand how they actually work. The misunderstanding starts with tax brackets, spreads to withholding, and peaks at filing season when people are surprised by a bill they didn't expect. This lesson gives you the foundation so none of that happens to you.",
      },
      {
        type: "heading",
        body: "How Tax Brackets Actually Work",
      },
      {
        type: "text",
        body: "The US uses a progressive tax system where different portions of your income are taxed at different rates. In 2024, single filers pay: 10% on income from $0–$11,600, 12% on income from $11,601–$47,150, 22% on income from $47,151–$100,525, and higher rates above that.",
      },
      {
        type: "text",
        body: "The critical point most people misunderstand: only the income in each bracket is taxed at that bracket's rate. A person earning $60,000 does not pay 22% on all $60,000. They pay 10% on the first $11,600 ($1,160 in tax), 12% on the next $35,550 ($4,266), and 22% on the remaining $12,850 ($2,827). Total tax: roughly $8,253 — an effective rate of about 14%, not 22%. Earning more never puts your entire income in a higher bracket.",
      },
      {
        type: "heading",
        body: "The W-4: Setting Your Withholding Correctly",
      },
      {
        type: "text",
        body: "When you start a job, you fill out a W-4 form that tells your employer how much federal income tax to withhold from each paycheck. The goal is accuracy: withhold too little and you'll owe money in April (plus possible penalties). Withhold too much and you get a refund — but you've given the government an interest-free loan all year.",
      },
      {
        type: "text",
        body: "For most single people with one job, the default W-4 settings produce reasonably accurate withholding. If you have multiple jobs, a working spouse, or significant deductions, use the IRS withholding estimator at irs.gov to fine-tune your W-4.",
      },
      {
        type: "heading",
        body: "Deductions That Reduce What You Owe",
      },
      {
        type: "text",
        body: "The standard deduction for 2024 is $14,600 for single filers. This is subtracted from your gross income before taxes are calculated — it's effectively the first $14,600 you earn that isn't taxed at all. Your traditional 401(k) contributions reduce taxable income dollar-for-dollar on top of this. HSA contributions are also pre-tax. If these factors apply to you, your actual tax bill can be significantly lower than you'd calculate from the brackets alone.",
      },
      {
        type: "heading",
        body: "Filing Your First Tax Return",
      },
      {
        type: "text",
        body: "You'll receive a W-2 from your employer by January 31st — it shows your annual earnings and total taxes withheld. File your federal return by April 15th. For simple situations (one job, no freelance income, standard deduction), the IRS Free File program covers returns with income under $79,000. TurboTax Free Edition and H&R Block Free also handle basic returns at no cost. Most software walks you through everything — you just enter the numbers from your W-2.",
      },
    ],
    takeaways: [
      "Tax brackets are marginal — earning more never puts your entire income in a higher bracket",
      "The standard deduction ($14,600 for single filers in 2024) means your first $14,600 of income isn't taxed",
      "Traditional 401(k) contributions reduce your taxable income dollar-for-dollar",
    ],
    quiz: [
      { question: "If you earn $60,000 and are in the 22% tax bracket, what is taxed at the 22% rate?", options: ["All $60,000", "About half of it", "Only the portion of income above $47,150", "None — 22% is just your effective average rate"], answer: 2 },
      { question: "What is the purpose of the W-4 form?", options: ["To report your annual income to the IRS", "To tell your employer how much federal tax to withhold from each paycheck", "To apply for a tax refund", "To claim deductions on your return"], answer: 1 },
      { question: "How do traditional 401(k) contributions affect your taxable income?", options: ["They don't affect taxable income at all", "They increase your taxable income", "They reduce your taxable income dollar-for-dollar", "They only reduce state taxes"], answer: 2 },
    ],
  },
  {
    id: 4,
    title: "Building Your Emergency Fund",
    duration: "7 min",
    objectives: [
      "Understand why an emergency fund is non-negotiable",
      "Know exactly how much to save and where to keep it",
      "Build one quickly on an entry-level salary",
    ],
    content: [
      {
        type: "text",
        body: "An emergency fund is money set aside exclusively for unexpected financial shocks — job loss, medical bills, car repairs, a broken phone, emergency travel. Without one, every unexpected expense becomes debt. With one, you pay it, move on, and start rebuilding. It's the difference between a setback and a financial spiral.",
      },
      {
        type: "heading",
        body: "How Much Do You Actually Need?",
      },
      {
        type: "text",
        body: "The standard recommendation is 3–6 months of essential living expenses. Note: expenses, not income. Calculate the minimum you need each month to survive: rent, food, utilities, transportation, insurance, minimum debt payments. For most people in their first job, this works out to $5,000–15,000 depending on where you live. Don't let the full number intimidate you. Start with a $1,000 starter emergency fund immediately — that alone prevents most financial emergencies from becoming crises.",
      },
      {
        type: "heading",
        body: "Where to Keep Your Emergency Fund",
      },
      {
        type: "text",
        body: "Your emergency fund should live in a high-yield savings account (HYSA) at an online bank — not your checking account. In 2024, high-yield savings accounts at banks like Marcus, Ally, SoFi, and Discover pay 4–5% APY. Compare this to traditional big-bank savings accounts paying 0.01–0.5%. On a $10,000 emergency fund, the difference is $400–500/year in interest for zero extra effort.",
      },
      {
        type: "text",
        body: "Keep this account separate from your everyday checking account. You want it accessible within 1–2 business days, but not so instantly accessible that you dip into it casually. The friction of a separate account and a short transfer window is intentional — it makes you pause before spending money meant for emergencies.",
      },
      {
        type: "heading",
        body: "Building It on an Entry-Level Salary",
      },
      {
        type: "text",
        body: "If you're earning $45,000–60,000/year in an expensive city, building a full emergency fund can feel overwhelming. Break it into stages. Stage 1: Get to $1,000 as fast as possible — even if that means cutting all discretionary spending for 2–3 months. Stage 2: Automate $150–300/month into your HYSA from every paycheck. Stage 3: Direct windfalls (tax refund, bonus, birthday money) entirely to this fund until it's full. Most people can build a full 3-month emergency fund within 12–18 months of starting their first job.",
      },
      {
        type: "heading",
        body: "What Counts as an Emergency",
      },
      {
        type: "text",
        body: "An emergency fund is for genuine, unexpected necessities: your car breaks down and you need it for work, an unexpected medical bill, job loss, an essential appliance fails, an emergency requiring immediate travel. It is not for: holiday gifts (planned expense), a sale on something you wanted (not an emergency), a vacation (not unexpected), or any expense you had time to predict and save for. Define your rules now, before you need the money, so you're not making financial decisions in a stressful moment.",
      },
    ],
    takeaways: [
      "Start with a $1,000 emergency fund immediately, then build to 3–6 months of essential expenses",
      "Keep your emergency fund in a high-yield savings account earning 4–5% APY — not your checking account",
      "Automate contributions and direct all windfalls to this fund until it's fully built",
    ],
    quiz: [
      { question: "How much should a fully-funded emergency fund cover?", options: ["1 month of income", "3–6 months of essential living expenses", "One full year of salary", "$10,000 regardless of your expenses"], answer: 1 },
      { question: "Where should you keep your emergency fund?", options: ["In your checking account for instant access", "Invested in the stock market for growth", "In a high-yield savings account at an online bank", "In cash at home for true emergencies"], answer: 2 },
      { question: "Which of these is a legitimate use of your emergency fund?", options: ["A Black Friday sale on a TV you've wanted", "Holiday gifts for your family", "An unexpected car repair that you need to get to work", "A planned vacation"], answer: 2 },
    ],
  },
  {
    id: 5,
    title: "Avoiding the Lifestyle Inflation Trap",
    duration: "8 min",
    objectives: [
      "Understand what lifestyle inflation is and why it's so dangerous",
      "Learn to distinguish intentional upgrades from passive drift",
      "Build a system for handling raises that builds wealth automatically",
    ],
    content: [
      {
        type: "text",
        body: "Lifestyle inflation is the tendency to spend more as you earn more — so your savings rate stays flat even as your income climbs. It's why many people earning $150,000 feel just as financially stressed as they did at $50,000. Every raise gets absorbed by a nicer apartment, a newer car, more subscriptions, more dining out — and somehow there's still nothing left at the end of the month.",
      },
      {
        type: "heading",
        body: "How It Starts: The Sequence Is Always the Same",
      },
      {
        type: "text",
        body: "You land your first real job and move to a nicer place than necessary because 'you deserve it.' You upgrade your car because the old one was embarrassing. You eat out more because you can finally afford it. You add streaming services, a gym membership, better clothes. Each upgrade feels completely reasonable on its own. Collectively, they absorb 100% of your income increase.",
      },
      {
        type: "text",
        body: "Two years later, you're earning $15,000 more per year than when you started — but saving the same dollar amount, or less, because your fixed expenses have ballooned. The lifestyle creep happened so gradually you barely noticed. And now it's nearly impossible to reverse because cutting back feels like going backwards.",
      },
      {
        type: "heading",
        body: "The 50% Rule for Every Raise",
      },
      {
        type: "text",
        body: "Every time you get a raise, immediately direct 50% of the after-tax increase to savings or investments before adjusting any part of your lifestyle. If you get a $5,000 raise — roughly $350/month after taxes — automatically increase your 401(k) contribution or savings transfer by $175/month on the day the raise takes effect. You get $175/month in lifestyle upgrades. Your wealth-building accelerates significantly.",
      },
      {
        type: "text",
        body: "Over a 10-year career with a few raises, consistently applying this rule can add $150,000–300,000 to your net worth compared to absorbing each raise entirely into spending. The math is simple. The hard part is doing it before you've had time to mentally spend the raise.",
      },
      {
        type: "heading",
        body: "Intentional Spending vs. Passive Drift",
      },
      {
        type: "text",
        body: "The antidote to lifestyle inflation is intentional spending — consciously evaluating every upgrade before making it the new normal. Before any lifestyle change, ask yourself three questions: Will I still value this in 6 months or is this novelty? Does this align with what I say actually matters to me? What am I trading off — in money, in time, in future freedom — to have this?",
      },
      {
        type: "text",
        body: "Intentional spending doesn't mean living like a monk. It means you still enjoy nice things — but only the ones you deliberately choose, not the ones you drift into by default. Passive drift is how lifestyle inflation takes hold. Intention is how you prevent it.",
      },
      {
        type: "heading",
        body: "Designing Your Financial Life from First Principles",
      },
      {
        type: "text",
        body: "Instead of spending by default and saving whatever is left, design your financial life backwards from your goals. What does financial independence mean to you? At what age do you want to be financially free? What savings rate gets you there? Once you know your target savings rate, that amount comes out automatically. Everything else — your lifestyle budget — is what remains. Spend freely within that design, without guilt, knowing your future is funded.",
      },
    ],
    takeaways: [
      "Lifestyle inflation silently absorbs every raise — your savings rate stays static even as income climbs",
      "Direct 50% of every raise's after-tax increase to savings before upgrading your lifestyle",
      "Intentional spending — choosing upgrades deliberately — prevents passive drift into lifestyle inflation",
    ],
    quiz: [
      { question: "What is lifestyle inflation?", options: ["Rising prices due to general economic inflation", "Spending more as you earn more, keeping your savings rate static", "Investing more aggressively as your income grows", "Upgrading your financial knowledge over time"], answer: 1 },
      { question: "What does the 50% rule for raises recommend?", options: ["Save 50% of your total income", "Direct 50% of each raise's after-tax increase to savings before adjusting your lifestyle", "Only spend 50% of your paycheck", "Increase your 401(k) contribution by 50% per year"], answer: 1 },
      { question: "What distinguishes intentional spending from passive drift?", options: ["Intentional spending is more expensive", "Passive spending means automating your savings", "Intentional spending means consciously choosing upgrades; passive drift means upgrading automatically by default", "There is no meaningful difference between the two"], answer: 2 },
    ],
  },
];

export default function FirstJobFinancePage() {
  const router = useRouter();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [checking, setChecking] = useState(true);

  const { user, ready } = useRequireAuth();
  useEffect(() => {
    if (!ready || !user) return;
    const supabase = createClient();
    supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single().then(({ data }) => {
      if (data?.status !== "premium") { router.push("/courses/premium-gate"); return; }
      setChecking(false);
      loadProgress("first-job-finance").then(setCompletedLessons);
    });
  }, [ready, user, router]);

  if (checking) return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;

  const lesson = lessons[activeLesson];
  const progress = (completedLessons.length / lessons.length) * 100;

  const handleComplete = () => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson]);
      saveLesson("first-job-finance", activeLesson);
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
            <span className="text-3xl">💼</span>
            <h1 className="text-3xl font-extrabold" style={{ color: "#1e3a5f" }}>First Job Finance</h1>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">Premium</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>{lessons.length} lessons</span><span>·</span><span>~40 min total</span><span>·</span>
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


