"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { useRequireAuth } from "@/lib/useAuth";

const lessons = [
  {
    id: 1,
    title: "Understanding Student Loans",
    duration: "9 min",
    objectives: [
      "Know the difference between federal and private student loans",
      "Understand how interest accrues on student loans",
      "Calculate your total loan cost before borrowing",
    ],
    content: [
      { type: "text", body: "Student loans are one of the most significant financial decisions you'll make — often before you're financially literate enough to understand what you're signing. This lesson breaks down exactly how they work so you can make informed decisions." },
      { type: "heading", body: "Federal vs. Private Loans" },
      { type: "text", body: "Federal loans are issued by the government. They have fixed interest rates, flexible repayment options, income-driven repayment plans, and forgiveness programs. Private loans are issued by banks and credit unions. They may have variable rates, fewer repayment options, and no forgiveness programs. Always exhaust federal loan options before considering private loans." },
      { type: "heading", body: "Subsidized vs. Unsubsidized Federal Loans" },
      { type: "text", body: "Subsidized loans: the government pays the interest while you're in school at least half-time. You leave school with the same balance you borrowed. Unsubsidized loans: interest starts accruing immediately, even while you're in school. A $10,000 unsubsidized loan at 5.5% accumulates about $550 per year in interest during school — adding to your principal through capitalization if unpaid." },
      { type: "heading", body: "Interest Capitalization: The Hidden Cost" },
      { type: "text", body: "When unpaid interest is added to your loan principal, it 'capitalizes.' This means you start paying interest on top of interest. A student who borrows $30,000 in unsubsidized loans at 6.5% and makes no payments for 4 years of school graduates with roughly $38,500 in debt — $8,500 in accrued interest added to the principal." },
      { type: "heading", body: "How to Minimize Total Cost" },
      { type: "text", body: "Borrow only what you need — not the maximum offered. Pay interest while in school if possible, even small amounts. Understand your monthly payment before you borrow: a $30,000 loan at 6.5% on a 10-year plan costs about $340/month. Make sure that payment fits on a realistic entry-level salary in your field." },
    ],
    takeaways: [
      "Always use federal loans before private — they have better protections and repayment options",
      "Unsubsidized loans accrue interest immediately, increasing your balance while you're in school",
      "Calculate your monthly payment before borrowing to ensure it's manageable on a realistic salary",
    ],
    quiz: [
      { question: "What is the key difference between subsidized and unsubsidized federal loans?", options: ["Subsidized loans have lower interest rates", "The government pays interest on subsidized loans while you're in school", "Unsubsidized loans are only for graduate students", "Subsidized loans have higher borrowing limits"], answer: 1 },
      { question: "What is interest capitalization?", options: ["A lower interest rate offered to good students", "When unpaid interest is added to your loan principal", "When you pay interest in advance", "A government program to reduce student debt"], answer: 1 },
      { question: "Which should you exhaust first when financing college?", options: ["Private loans", "Credit cards", "Federal loans", "Parent PLUS loans"], answer: 2 },
    ],
  },
  {
    id: 2,
    title: "Paying Off Student Debt Faster",
    duration: "9 min",
    objectives: [
      "Understand the two main debt payoff strategies",
      "Learn how extra payments dramatically reduce total interest",
      "Know when income-driven repayment makes sense",
    ],
    content: [
      { type: "text", body: "The average student loan balance is over $37,000. At a 6.5% interest rate on a 10-year standard plan, that's over $13,000 in interest paid. With the right strategy, you can cut years and thousands of dollars off your repayment." },
      { type: "heading", body: "The Debt Avalanche Method" },
      { type: "text", body: "List all your loans by interest rate, highest to lowest. Make minimum payments on all loans, then throw every extra dollar at the highest-rate loan. When it's paid off, roll that payment to the next highest rate. This method minimizes the total interest paid over time — mathematically optimal." },
      { type: "heading", body: "The Debt Snowball Method" },
      { type: "text", body: "List loans by balance, smallest to largest. Pay minimums on all, put extra toward the smallest balance. When it's paid off, roll that payment to the next smallest. This method costs slightly more in interest but provides psychological momentum — you see debts disappearing faster, which keeps motivation high. Research shows it leads to better payoff rates for many people." },
      { type: "heading", body: "The Power of Extra Payments" },
      { type: "text", body: "On a $30,000 loan at 6.5% with a 10-year term, your minimum payment is about $340/month and you'd pay $10,800 in interest. Adding just $100/month to that payment pays off the loan 2.5 years early and saves about $2,500 in interest. Adding $200/month saves 4 years and $4,000+. Small extra payments compound dramatically over time." },
      { type: "heading", body: "Income-Driven Repayment: When It Makes Sense" },
      { type: "text", body: "Income-driven repayment (IDR) plans cap your monthly payment at 5–10% of your discretionary income and forgive remaining balances after 10–25 years. They're valuable when: your debt significantly exceeds your income, you're pursuing Public Service Loan Forgiveness (10 years in qualifying public service jobs), or you're in a low-income period and need temporary relief. Warning: IDR plans often result in paying more total interest over time." },
    ],
    takeaways: [
      "The debt avalanche (highest rate first) minimizes total interest paid",
      "Adding $100/month to a $30,000 student loan saves over $2,500 in interest",
      "Income-driven repayment is valuable for high debt-to-income ratios or public service careers",
    ],
    quiz: [
      { question: "Which debt payoff method minimizes total interest paid?", options: ["Debt Snowball", "Debt Avalanche", "Minimum payments only", "Income-driven repayment"], answer: 1 },
      { question: "What does income-driven repayment (IDR) do?", options: ["Eliminates your student debt immediately", "Caps payments based on income and forgives remaining balance after years of payments", "Converts federal loans to private loans", "Freezes your interest rate"], answer: 1 },
      { question: "What is the main advantage of the debt snowball method?", options: ["It's the mathematically optimal approach", "It has lower interest rates", "It provides psychological momentum by eliminating smaller debts first", "It qualifies you for forgiveness faster"], answer: 2 },
    ],
  },
  {
    id: 3,
    title: "Scholarships, Grants, and FAFSA",
    duration: "8 min",
    objectives: [
      "Understand the difference between grants, scholarships, and loans",
      "Know how to maximize your FAFSA aid",
      "Find scholarships you may not know about",
    ],
    content: [
      { type: "text", body: "Every dollar you get in grants and scholarships is a dollar you don't have to repay. Yet billions of dollars in scholarship money go unclaimed every year because students don't apply. This lesson shows you how to find and win free money for school." },
      { type: "heading", body: "Grants vs. Scholarships vs. Loans" },
      { type: "text", body: "Grants: free money, usually based on financial need. The federal Pell Grant provides up to $7,395/year (2024) to qualifying undergraduates. Scholarships: free money, usually merit-based (academics, athletics, essays, community service). Loans: money you must repay with interest. The goal is to maximize grants and scholarships before touching loans." },
      { type: "heading", body: "The FAFSA: Your Starting Point" },
      { type: "text", body: "The Free Application for Federal Student Aid (FAFSA) determines your eligibility for federal grants, loans, and work-study programs. File it as early as possible after October 1 each year — some aid is first-come, first-served. Common mistakes: filing late, not including all required information, assuming your family earns too much to qualify. Even middle-income families often qualify for some aid." },
      { type: "heading", body: "Finding Scholarships" },
      { type: "text", body: "Most students only apply for large national scholarships. The competition is fierce. Instead, focus on: local scholarships from community foundations, local businesses, and civic organizations (far less competition), department-specific scholarships at your school (often go unclaimed), employer scholarships (many large employers offer them to employees' children), and identity-based scholarships aligned with your background or intended career." },
      { type: "heading", body: "The Essay Strategy" },
      { type: "text", body: "Write one strong core scholarship essay about your goals and background, then adapt it for multiple applications. Applying to 30 scholarships averaging $500 each is worth more than applying to one $15,000 scholarship with thousands of applicants. Smaller, targeted scholarships have dramatically better odds." },
    ],
    takeaways: [
      "File the FAFSA as early as possible after October 1 — some aid is first-come, first-served",
      "Local and niche scholarships have far less competition than national ones",
      "Write one strong core essay and adapt it for multiple scholarship applications",
    ],
    quiz: [
      { question: "What is the key difference between a grant and a loan?", options: ["Grants have lower interest rates", "Grants don't need to be repaid; loans do", "Loans are based on need; grants are merit-based", "There is no difference"], answer: 1 },
      { question: "When should you file the FAFSA?", options: ["After you're accepted to college", "As early as possible after October 1 each year", "In January of your senior year", "Only if your family earns under $50,000"], answer: 1 },
      { question: "Which type of scholarship typically has the least competition?", options: ["National merit scholarships", "Athletic scholarships", "Local community and niche scholarships", "University-wide scholarships"], answer: 2 },
    ],
  },
  {
    id: 4,
    title: "Making Money in College",
    duration: "8 min",
    objectives: [
      "Learn income strategies that work around a student schedule",
      "Understand work-study and on-campus employment",
      "Build income skills that pay off after graduation",
    ],
    content: [
      { type: "text", body: "Working during college reduces debt, builds skills, and — contrary to popular belief — often improves academic performance by forcing better time management. Students who work 10–15 hours per week in college tend to graduate at higher rates than those who don't work at all." },
      { type: "heading", body: "Work-Study Programs" },
      { type: "text", body: "Federal work-study is a program that provides part-time jobs for students with financial need. Jobs are often on-campus or with nonprofit organizations. Work-study earnings don't count against your FAFSA eligibility for the following year — making them more valuable than regular employment income. Check if you've been awarded work-study in your financial aid package and use it." },
      { type: "heading", body: "On-Campus Jobs: The Best Starting Point" },
      { type: "text", body: "On-campus jobs are designed around student schedules. Professors and campus employers are understanding about exams and class schedule changes. Common options: research assistant (pays well, looks great on a resume), tutoring center, campus recreation, library, and administrative work. Many also build direct professional skills." },
      { type: "heading", body: "High-Value Side Income for Students" },
      { type: "text", body: "Tutoring: $20–80/hour for subjects you already know well. If you're strong in calculus, chemistry, or test prep, platforms like Wyzant or local Facebook groups connect you with students immediately. Freelancing: writing, graphic design, web development, and social media management can all be done remotely on your own schedule. Campus-specific: buy textbooks at end-of-semester sales and resell them; offer services to other students like photography, moving help, or resume writing." },
      { type: "heading", body: "Building Skills That Pay After Graduation" },
      { type: "text", body: "The best college income strategy pays you now AND invests in your future earning potential. A tutoring job builds communication skills. A research assistant role builds technical skills and faculty relationships. A freelance design client builds a portfolio. Every hour you work should ideally do double duty: earn money and build something that compounds." },
    ],
    takeaways: [
      "Working 10–15 hours per week often improves academic performance, not hurts it",
      "Work-study earnings don't reduce future FAFSA eligibility — they're extra valuable",
      "Tutoring and freelancing pay $20–80/hour and build skills that matter after graduation",
    ],
    quiz: [
      { question: "What is a key advantage of federal work-study over regular part-time work?", options: ["Work-study pays higher wages", "Work-study earnings don't count against future FAFSA eligibility", "Work-study jobs are easier", "Work-study is available to all students regardless of need"], answer: 1 },
      { question: "What income strategy pays both immediately and builds long-term career value?", options: ["Retail or food service jobs", "Tutoring or research assistant roles that build skills and relationships", "Driving for rideshare apps", "Online surveys"], answer: 1 },
      { question: "Research suggests students who work how many hours per week perform better academically?", options: ["0 hours — not working is always better", "5 hours", "10–15 hours", "30+ hours"], answer: 2 },
    ],
  },
  {
    id: 5,
    title: "Post-Graduation Money Moves",
    duration: "9 min",
    objectives: [
      "Know the financial steps to take in your first 90 days after graduation",
      "Understand your student loan repayment options",
      "Avoid the lifestyle inflation trap that derails new graduates",
    ],
    content: [
      { type: "text", body: "The first few months after graduation are financially critical. The decisions you make about your student loans, savings, and spending habits in this window set the trajectory for the next decade." },
      { type: "heading", body: "The Grace Period: Use It Wisely" },
      { type: "text", body: "Federal student loans give you a 6-month grace period after graduation before repayment begins. Most graduates treat this as a vacation from financial responsibility. Instead: build your emergency fund during this period, choose your repayment plan before it's automatically assigned (the standard 10-year plan is usually best for most people), and if you can make interest payments during the grace period, do it." },
      { type: "heading", body: "Choosing Your Repayment Plan" },
      { type: "text", body: "Standard repayment (10 years): fixed payments, least total interest paid. Best if your payments are manageable. Extended repayment (25 years): lower monthly payment, significantly more interest paid over time. Graduated repayment: payments start low and increase every 2 years, good if you expect income growth. Income-driven repayment: best if your loan balance significantly exceeds your starting salary, or if you're pursuing public service loan forgiveness." },
      { type: "heading", body: "The First Job Financial Checklist" },
      { type: "text", body: "In your first 30 days of employment: enroll in your 401(k) and contribute at least enough for the employer match. Set up automatic loan payments (usually earns you a 0.25% interest rate reduction). Open a Roth IRA if you don't have one. Set up a separate savings account for your emergency fund. Create a monthly budget based on your actual take-home pay." },
      { type: "heading", body: "Avoiding Lifestyle Inflation" },
      { type: "text", body: "The most dangerous moment financially is getting your first real paycheck. After years of student budgets, a real salary feels enormous. The temptation: immediately upgrade your car, apartment, and lifestyle to match your new income. The smarter move: live like a student for 12–24 more months while you pay down debt and build your investment foundation. You can always upgrade later. You can't get back the compound growth years you burned." },
    ],
    takeaways: [
      "Use the 6-month grace period to build your emergency fund and choose your repayment plan",
      "Always contribute enough to your 401(k) for the full employer match from day one",
      "Live like a student for 12–24 months post-graduation to aggressively build your financial foundation",
    ],
    quiz: [
      { question: "How long is the federal student loan grace period after graduation?", options: ["3 months", "6 months", "1 year", "18 months"], answer: 1 },
      { question: "Which student loan repayment plan minimizes total interest paid?", options: ["Extended (25-year) repayment", "Income-driven repayment", "Graduated repayment", "Standard (10-year) repayment"], answer: 3 },
      { question: "What is the biggest financial risk for new graduates?", options: ["Student loan interest rates", "Stock market volatility", "Lifestyle inflation — upgrading spending to match new income immediately", "Tax increases"], answer: 2 },
    ],
  },
];

export default function StudentFinancePage() {
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
    });
  }, [ready, user, router]);

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
            <span className="text-3xl">🎓</span>
            <h1 className="text-3xl font-extrabold" style={{ color: "#1e3a5f" }}>Student Finance</h1>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">Premium</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>{lessons.length} lessons</span><span>·</span><span>~45 min total</span><span>·</span>
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


