"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

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
      { type: "text", body: "Your first real paycheck is a milestone — and the financial decisions you make with it create habits that can last decades. Most new employees spend the first few paychecks on lifestyle upgrades and figure out the financial planning 'later.' Later often never comes." },
      { type: "heading", body: "Gross vs. Net Pay" },
      { type: "text", body: "Your salary is your gross pay — what you earn before deductions. Your net pay (take-home pay) is what hits your bank account after federal taxes, state taxes, Social Security, Medicare, and any benefits deductions. A $60,000 salary might result in $3,800–4,200/month in take-home pay depending on your state, benefits, and 401(k) contributions. Always budget from your net pay, never your gross." },
      { type: "heading", body: "The First 30 Days Checklist" },
      { type: "text", body: "Enroll in your 401(k) — at minimum, contribute enough to get the full employer match. Set up direct deposit to split between checking (for spending) and savings (for emergency fund) automatically. Open a Roth IRA if you don't have one. Set automatic transfers on payday so savings move before you can spend them. Review your health insurance enrollment and make sure you're on the right plan." },
      { type: "heading", body: "Pay Yourself First" },
      { type: "text", body: "The most reliable savings strategy is removing the choice entirely. Set up automatic transfers that move money to savings and investments the same day you're paid. If you never see the money in your checking account, you can't spend it. Even $100–200 automatically invested each payday builds significant wealth over time — while you barely notice it's gone." },
      { type: "heading", body: "Building Your First Budget" },
      { type: "text", body: "Start with your take-home pay. Fixed expenses first: rent, utilities, loan payments, insurance. Then savings and investments as non-negotiable line items — not what's left over. Then variable expenses: food, transportation, entertainment. The key shift: treat savings like a bill, not a bonus. It goes out automatically before you budget the rest." },
    ],
    takeaways: [
      "Always budget from take-home (net) pay, never your gross salary",
      "Set up automatic savings transfers on payday so the money moves before you spend it",
      "Enroll in your 401(k) and get the full employer match within your first 30 days",
    ],
    quiz: [
      { question: "What is the difference between gross and net pay?", options: ["There is no difference", "Gross is what you earn before deductions; net is what you take home", "Net is higher than gross", "Gross is your hourly rate; net is your salary"], answer: 1 },
      { question: "What does 'pay yourself first' mean?", options: ["Spend money on yourself before paying bills", "Automatically save and invest before spending anything else", "Negotiate your salary before starting work", "Pay off debt before saving"], answer: 1 },
      { question: "How should you treat savings in your budget?", options: ["As whatever is left over after spending", "As a non-negotiable line item like a bill", "As optional depending on the month", "As a reward for hitting financial goals"], answer: 1 },
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
      { type: "text", body: "The 401(k) is the cornerstone of American retirement savings — and your employer's plan is likely the best wealth-building tool you have access to. Yet over a third of employees don't contribute enough to get their full employer match, leaving thousands of dollars on the table every year." },
      { type: "heading", body: "How a 401(k) Works" },
      { type: "text", body: "A traditional 401(k) lets you contribute pre-tax dollars from your paycheck. If you earn $5,000/month and contribute $500 to your 401(k), you're only taxed on $4,500. Your investments grow tax-deferred — you pay no taxes until you withdraw in retirement. The 2024 contribution limit is $23,000/year. Many employers also offer a Roth 401(k) option — after-tax contributions with tax-free growth." },
      { type: "heading", body: "The Employer Match: Never Leave It Behind" },
      { type: "text", body: "An employer match is free money added to your 401(k) based on your contributions. A common match: 100% of your contributions up to 3% of salary, plus 50% of contributions from 3–5% of salary. On a $60,000 salary, that's up to $2,400/year in free money. Not getting the full match is equivalent to turning down part of your salary. Always contribute at least enough to get 100% of the match." },
      { type: "heading", body: "Vesting Schedules" },
      { type: "text", body: "Employer match money often comes with a vesting schedule — meaning you only keep it if you stay long enough. Cliff vesting: you get 0% until you've worked for a set period (often 3 years), then 100%. Graded vesting: you earn a percentage each year (e.g., 20% per year over 5 years). Your own contributions are always 100% yours immediately. This matters when evaluating job offers and timing of job changes." },
      { type: "heading", body: "Choosing Investments in Your 401(k)" },
      { type: "text", body: "Most 401(k) plans offer a limited menu of funds. Look for: target-date retirement funds (automatically adjust allocation as you approach retirement — good simple default choice), low-cost index funds tracking the S&P 500 or total market (expense ratio under 0.1%). Avoid: high-expense-ratio actively managed funds, company stock (concentrates risk), and bond-heavy funds if you're under 35." },
    ],
    takeaways: [
      "Always contribute enough to get 100% of your employer match — it's part of your compensation",
      "Know your vesting schedule before changing jobs to avoid leaving match money behind",
      "Choose low-cost index funds or a target-date fund inside your 401(k)",
    ],
    quiz: [
      { question: "What is an employer 401(k) match?", options: ["A loan from your employer to invest", "Free money your employer adds based on your contributions", "A government subsidy for retirement savings", "An automatic investment in company stock"], answer: 1 },
      { question: "What is a vesting schedule?", options: ["The investment schedule inside your 401(k)", "A timeline determining when you fully own employer contributions", "The schedule for automatic payroll deductions", "A plan for when to retire"], answer: 1 },
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
      { type: "text", body: "Taxes are the largest single expense most Americans pay — yet very few people understand how they actually work. This lesson demystifies the basics so you're not caught off guard at tax time." },
      { type: "heading", body: "How Income Tax Actually Works: Tax Brackets" },
      { type: "text", body: "The US uses a progressive tax system with brackets. In 2024, single filers pay: 10% on income from $0–$11,600, 12% on income from $11,601–$47,150, 22% on income from $47,151–$100,525, and so on. Critically: only the income in each bracket is taxed at that rate. A person earning $60,000 doesn't pay 22% on all $60,000. They pay 10% on the first $11,600, 12% on the next $35,550, and 22% on the remaining $12,850. Their effective tax rate is closer to 14%." },
      { type: "heading", body: "The W-4: Controlling Your Withholding" },
      { type: "text", body: "Your employer withholds federal income tax from each paycheck based on the W-4 form you fill out. The goal is to withhold approximately the right amount so you neither owe a large sum in April nor get a large refund (which means you gave the government an interest-free loan). The new W-4 form uses dollar amounts for dependents and deductions instead of allowances. For most single people with one job, the default settings work fine." },
      { type: "heading", body: "Tax Deductions That Reduce What You Owe" },
      { type: "text", body: "The standard deduction for 2024 is $14,600 for single filers. This means your first $14,600 of income is effectively untaxed. Your 401(k) contributions reduce your taxable income dollar-for-dollar. HSA contributions are also deductible. If you work from home, have significant medical expenses, or have charitable contributions, you may benefit from itemizing deductions instead of taking the standard deduction." },
      { type: "heading", body: "Filing Your First Tax Return" },
      { type: "text", body: "You'll receive your W-2 (showing your annual earnings and taxes withheld) from your employer by January 31. File your federal return by April 15. For simple tax situations (one job, standard deduction), free filing tools like IRS Free File, TurboTax Free Edition, or H&R Block Free work well. If you contributed to a 401(k) or Roth IRA, there are additional forms — but filing software handles these automatically." },
    ],
    takeaways: [
      "Tax brackets are marginal — earning more never puts your entire income in a higher bracket",
      "The standard deduction ($14,600 for single filers in 2024) means your first $14,600 is effectively untaxed",
      "401(k) contributions reduce your taxable income dollar-for-dollar",
    ],
    quiz: [
      { question: "If you earn $60,000 and are in the 22% tax bracket, what percentage of your income is taxed at 22%?", options: ["All $60,000", "About half of it", "Only the income above $47,150", "None — 22% is your effective rate"], answer: 2 },
      { question: "What is the purpose of the W-4 form?", options: ["To report your annual income to the IRS", "To tell your employer how much federal tax to withhold from your paycheck", "To apply for a tax refund", "To claim deductions on your tax return"], answer: 1 },
      { question: "How do traditional 401(k) contributions affect your taxable income?", options: ["They don't affect taxable income", "They increase your taxable income", "They reduce your taxable income dollar-for-dollar", "They only reduce state taxes"], answer: 2 },
    ],
  },
  {
    id: 4,
    title: "Building Your Emergency Fund",
    duration: "7 min",
    objectives: [
      "Understand why an emergency fund is non-negotiable",
      "Know how much to save and where to keep it",
      "Build one quickly on an entry-level salary",
    ],
    content: [
      { type: "text", body: "An emergency fund is money set aside specifically for unexpected expenses — job loss, medical bills, car repairs, or any financial shock. Without one, every unexpected expense becomes debt. With one, you handle it and move on." },
      { type: "heading", body: "How Much Do You Need?" },
      { type: "text", body: "The standard recommendation is 3–6 months of essential expenses (not income — just the minimum you need: rent, food, utilities, transportation, minimum debt payments). For most people in their first job, that's $5,000–15,000. Start with a $1,000 starter emergency fund immediately, then build to the full amount over 6–12 months." },
      { type: "heading", body: "Where to Keep It" },
      { type: "text", body: "Your emergency fund should be in a high-yield savings account (HYSA) — not your checking account. In 2024, HYSAs at online banks pay 4–5% APY, compared to 0.01–0.5% at traditional banks. Keep it separate from your spending account so you're not tempted to dip into it. It should be accessible within 1–2 business days, but not instantly like a checking account." },
      { type: "heading", body: "Building It on an Entry-Level Salary" },
      { type: "text", body: "If you're making $45,000–60,000/year in a major city, building a full emergency fund can feel daunting. Strategy: automate $100–300/month directly from each paycheck into a dedicated HYSA. Add any windfalls (tax refund, bonus, birthday money) directly to this fund until it's fully funded. Cut one major discretionary expense temporarily — dining out, subscriptions, entertainment — until the fund is complete. Once funded, redirect those savings to investing." },
      { type: "heading", body: "What Counts as an Emergency" },
      { type: "text", body: "An emergency fund is for genuine emergencies: unexpected medical bills, job loss, essential car repair, emergency travel. It is not for: planned expenses (holiday gifts, vacation, car maintenance you knew was coming), sales or deals, or lifestyle upgrades. Having clear rules about what counts as an emergency prevents the fund from being slowly depleted on non-emergencies." },
    ],
    takeaways: [
      "Start with a $1,000 emergency fund immediately, then build to 3–6 months of expenses",
      "Keep your emergency fund in a high-yield savings account earning 4–5% APY",
      "Automate contributions to your emergency fund — treat it like a bill",
    ],
    quiz: [
      { question: "How much should a fully-funded emergency fund cover?", options: ["1 month of income", "3–6 months of essential expenses", "One year of salary", "$10,000 exactly"], answer: 1 },
      { question: "Where should you keep your emergency fund?", options: ["In your checking account for easy access", "Invested in the stock market", "In a high-yield savings account", "In cash at home"], answer: 2 },
      { question: "Which of these counts as a legitimate emergency fund expense?", options: ["Black Friday sale on a TV you've wanted", "Holiday gifts", "Unexpected car repair after a breakdown", "A planned vacation"], answer: 2 },
    ],
  },
  {
    id: 5,
    title: "Avoiding the Lifestyle Inflation Trap",
    duration: "8 min",
    objectives: [
      "Understand what lifestyle inflation is and why it's dangerous",
      "Learn to distinguish needs from wants at a higher income",
      "Build a system for intentional spending",
    ],
    content: [
      { type: "text", body: "Lifestyle inflation is the tendency to spend more as you earn more, so your savings rate stays roughly the same regardless of income growth. It's why many people earning $150,000 feel just as financially stressed as they did at $50,000 — their expenses grew in lockstep with their income." },
      { type: "heading", body: "How Lifestyle Inflation Happens" },
      { type: "text", body: "It starts subtly. You get your first job and move to a nicer apartment than you need. You buy a newer car. You eat out more because you can. You subscribe to more services. Each upgrade feels reasonable in isolation. Collectively, they consume your entire raise before you realize it. Two years later you're earning more but saving the same dollar amount — or less — than when you started." },
      { type: "heading", body: "The 50% Rule for Raises" },
      { type: "text", body: "Every time you get a raise, immediately direct 50% of the after-tax increase to savings and investments before adjusting your lifestyle. If you get a $5,000 raise (roughly $350/month after taxes), automatically increase your 401(k) contribution or savings transfer by $175/month. You get to enjoy $175/month in lifestyle upgrades AND your wealth-building accelerates. Over 10 years of career growth, this rule can add six figures to your net worth." },
      { type: "heading", body: "Intentional vs. Passive Spending" },
      { type: "text", body: "The antidote to lifestyle inflation is intentional spending: actively deciding which upgrades are worth it and which aren't. Before any lifestyle upgrade, ask: Will I still value this in 6 months? Does this align with what I say matters most to me? What am I trading off to have this? Passive spending — upgrading on autopilot because you can — is how lifestyle inflation takes hold. Intentional spending means you still enjoy nice things, but only the ones you consciously choose." },
      { type: "heading", body: "Designing Your Ideal Financial Life" },
      { type: "text", body: "Instead of spending by default and saving what's left, design your financial life from first principles. What does financial independence mean to you? What's your target retirement age? What savings rate gets you there? Work backwards from those goals to define the maximum lifestyle you can afford while still hitting your targets. Then spend freely within that design without guilt." },
    ],
    takeaways: [
      "Lifestyle inflation means spending more with every raise — keeping your savings rate static",
      "Direct 50% of every raise's after-tax amount to savings before adjusting lifestyle",
      "Intentional spending — choosing upgrades deliberately — beats passive spending by default",
    ],
    quiz: [
      { question: "What is lifestyle inflation?", options: ["Rising prices due to inflation", "Spending more as you earn more, keeping savings rate static", "Investing more as your income grows", "Upgrading your financial knowledge over time"], answer: 1 },
      { question: "What does the '50% rule for raises' recommend?", options: ["Save 50% of your total income", "Direct 50% of each raise's after-tax increase to savings before upgrading lifestyle", "Only spend 50% of your paycheck", "Increase your 401(k) contribution by 50% each year"], answer: 1 },
      { question: "What is the key difference between intentional and passive spending?", options: ["Intentional spending is more expensive", "Passive spending is automated savings", "Intentional spending means consciously choosing upgrades; passive spending upgrades by default", "There is no meaningful difference"], answer: 2 },
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

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { router.push("/login"); return; }
      const { data } = await supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single();
      if (data?.status !== "premium") { router.push("/courses/premium-gate"); return; }
      setChecking(false);
    });
  }, [router]);

  if (checking) return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;

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
