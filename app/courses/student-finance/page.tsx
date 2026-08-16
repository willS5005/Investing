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
      "Understand how interest accrues and capitalizes on student loans",
      "Calculate your total loan cost before borrowing",
    ],
    content: [
      {
        type: "text",
        body: "Student loans are one of the most consequential financial decisions you'll ever make — and most people sign for them before they're financially literate enough to understand what they're agreeing to. A 17-year-old choosing between $30,000 and $80,000 in debt for college is making a decision that will shape the first decade of their adult financial life. This lesson gives you the foundation to make that decision with your eyes open.",
      },
      {
        type: "heading",
        body: "Federal vs. Private Student Loans: Not the Same Thing",
      },
      {
        type: "text",
        body: "Federal loans are issued by the US Department of Education. They come with fixed interest rates set by Congress, multiple repayment plan options, deferment and forbearance protections, income-driven repayment programs, and Public Service Loan Forgiveness eligibility. Private loans are issued by banks, credit unions, and other financial institutions. They can have variable interest rates, minimal protections, no income-driven repayment options, and no forgiveness programs.",
      },
      {
        type: "text",
        body: "Always exhaust federal loan options completely before turning to private loans. Federal loans are more flexible, better protected, and almost always cheaper in the long run — especially if your financial situation ever changes. Private loans should be a last resort for funding gaps after all federal aid is maximized.",
      },
      {
        type: "heading",
        body: "Subsidized vs. Unsubsidized: A Difference That Costs Thousands",
      },
      {
        type: "text",
        body: "Subsidized federal loans: the government pays the interest that accrues while you're enrolled at least half-time, during the 6-month grace period after graduation, and during approved deferment periods. You graduate owing exactly what you borrowed. Unsubsidized federal loans: interest accrues from day one — while you're in class, on break, during summer. You're responsible for all of it.",
      },
      {
        type: "text",
        body: "A $10,000 unsubsidized loan at 5.5% accumulates about $550 per year in interest during school. Over 4 years, that's $2,200 in interest added to your balance before you make a single payment. Subsidized loans are always preferable when available — borrow subsidized first, unsubsidized only after.",
      },
      {
        type: "heading",
        body: "Interest Capitalization: The Hidden Multiplier",
      },
      {
        type: "text",
        body: "Capitalization is when unpaid interest gets added to your principal balance — you start paying interest on your interest. A student who borrows $30,000 in unsubsidized loans at 6.5% and makes no payments during 4 years of school doesn't graduate with $30,000 in debt. They graduate with approximately $38,500 — the $8,500 difference being accumulated, capitalized interest.",
      },
      {
        type: "text",
        body: "The fix: pay the interest as it accrues while in school. Even $50–100/month in interest payments keeps your balance from ballooning. It's not glamorous, but on $30,000 in unsubsidized loans it prevents thousands of dollars in capitalized interest from following you for a decade.",
      },
      {
        type: "heading",
        body: "Borrowing Less: The Most Powerful Strategy",
      },
      {
        type: "text",
        body: "Lenders will offer you more than you need. The aid package from your school will show the maximum you're eligible to borrow — not a recommendation to borrow all of it. Before accepting any loan, calculate the monthly payment you'll owe on a 10-year repayment plan. A $40,000 loan at 6.5% = about $454/month. Is that manageable on an entry-level salary in your intended field? If not, you're borrowing too much.",
      },
    ],
    takeaways: [
      "Always use federal loans before private — they have far better protections and repayment options",
      "Unsubsidized loans accrue interest immediately — even paying $50/month while in school prevents thousands in capitalization",
      "Calculate your monthly payment before borrowing to make sure it fits an entry-level salary in your field",
    ],
    quiz: [
      { question: "What is the key difference between subsidized and unsubsidized federal loans?", options: ["Subsidized loans have lower interest rates", "The government pays interest on subsidized loans while you're in school", "Unsubsidized loans are only for graduate students", "Subsidized loans have higher borrowing limits"], answer: 1 },
      { question: "What is interest capitalization?", options: ["A lower interest rate offered to high-GPA students", "When unpaid interest is added to your loan principal, so you owe interest on interest", "When you pay interest in advance to reduce your rate", "A government program to reduce student debt balances"], answer: 1 },
      { question: "Which type of loan should you exhaust first when financing college?", options: ["Private bank loans", "Credit cards", "Federal student loans", "Parent PLUS loans"], answer: 2 },
    ],
  },
  {
    id: 2,
    title: "Paying Off Student Debt Faster",
    duration: "9 min",
    objectives: [
      "Understand the two main debt payoff strategies and when to use each",
      "See exactly how extra payments reduce total interest paid",
      "Know when income-driven repayment is the right choice",
    ],
    content: [
      {
        type: "text",
        body: "The average student loan balance at graduation is over $37,000. On a standard 10-year repayment plan at 6.5%, that's more than $13,000 in interest paid on top of the original amount borrowed. The right strategy can cut years and thousands of dollars off your repayment — the difference isn't minor.",
      },
      {
        type: "heading",
        body: "The Debt Avalanche: Mathematically Optimal",
      },
      {
        type: "text",
        body: "List all your loans by interest rate from highest to lowest. Make the minimum payment on every loan each month. Then put every extra dollar — any additional money you can scrape together — toward the highest-rate loan. When that loan is paid off, take its entire payment and roll it into the next highest-rate loan. Repeat until all loans are gone.",
      },
      {
        type: "text",
        body: "This method minimizes the total interest you pay over the life of your loans. It's the mathematically correct approach. The downside: if your highest-rate loan also has a large balance, it can feel like a long time before anything disappears. That psychological drag is real — which is why the avalanche isn't always the best choice for everyone.",
      },
      {
        type: "heading",
        body: "The Debt Snowball: Momentum That Actually Works",
      },
      {
        type: "text",
        body: "List loans by balance, smallest to largest. Pay minimums on everything, then put extra money toward the smallest balance first. When it's gone, roll that payment toward the next smallest. The snowball costs slightly more in total interest compared to the avalanche — but it produces quick wins. Watching a loan disappear entirely, even a small one, is motivating in a way that spreadsheets can't replicate.",
      },
      {
        type: "text",
        body: "Research consistently shows that the debt snowball leads to higher completion rates for many people. The 'best' strategy is the one you'll actually stick with for years. If you need visible progress to stay motivated, the snowball is the better choice.",
      },
      {
        type: "heading",
        body: "The Power of Extra Payments: Real Numbers",
      },
      {
        type: "text",
        body: "On a $30,000 loan at 6.5% with a 10-year term: your minimum payment is about $340/month, and you'll pay $10,800 in total interest. Add $100/month extra: paid off 2.5 years early, saves $2,500 in interest. Add $200/month extra: paid off 4 years early, saves $4,200 in interest. Add $300/month extra: paid off 5.5 years early, saves $5,500 in interest. The extra $100–300/month feels significant now. Over time it saves multiples of itself.",
      },
      {
        type: "heading",
        body: "Income-Driven Repayment: The Right Tool for the Right Situation",
      },
      {
        type: "text",
        body: "Income-driven repayment (IDR) plans cap your monthly payment at 5–10% of your discretionary income and forgive any remaining balance after 20–25 years (or 10 years for Public Service Loan Forgiveness). IDR is the right choice when: your total debt significantly exceeds your annual income (e.g., $80,000 in debt on a $45,000 salary), you're working in public service and pursuing PSLF, or you're in a low-income period and genuinely cannot make the standard payment.",
      },
      {
        type: "text",
        body: "Warning: IDR plans almost always result in paying more total interest over time because you're extending the repayment period significantly. They're a powerful tool when needed — not a default strategy for everyone with student loans.",
      },
    ],
    takeaways: [
      "The debt avalanche (highest rate first) minimizes total interest paid — mathematically optimal",
      "Adding $100/month to a $30,000 student loan saves over $2,500 in interest and 2.5 years",
      "Income-driven repayment is best for high debt-to-income ratios or public service careers — not a default choice",
    ],
    quiz: [
      { question: "Which debt payoff method minimizes total interest paid?", options: ["Debt Snowball", "Debt Avalanche", "Minimum payments only", "Income-driven repayment"], answer: 1 },
      { question: "What does income-driven repayment (IDR) do?", options: ["Eliminates your student debt immediately", "Caps monthly payments based on income and forgives remaining balance after years of qualifying payments", "Converts federal loans to private loans with better rates", "Freezes your interest rate for the life of the loan"], answer: 1 },
      { question: "What is the main advantage of the debt snowball method over the avalanche?", options: ["It's mathematically optimal", "It has lower interest rates", "It provides psychological momentum by eliminating smaller balances first", "It qualifies you for forgiveness programs faster"], answer: 2 },
    ],
  },
  {
    id: 3,
    title: "Scholarships, Grants, and FAFSA",
    duration: "8 min",
    objectives: [
      "Understand the critical difference between grants, scholarships, and loans",
      "Know how to maximize your FAFSA aid award",
      "Find scholarships most students don't know about",
    ],
    content: [
      {
        type: "text",
        body: "Every dollar you receive in grants and scholarships is a dollar you never have to repay — with interest, over 10 years. Yet an estimated $100 million or more in scholarship money goes unclaimed every year because students don't apply. The bottleneck is almost never eligibility. It's application volume and effort.",
      },
      {
        type: "heading",
        body: "Grants vs. Scholarships vs. Loans: The Priority Order",
      },
      {
        type: "text",
        body: "Grants are free money based primarily on financial need. The federal Pell Grant provides up to $7,395/year (2024) to qualifying undergraduates from lower-income households. State grants and institutional grants layer on top of this. Scholarships are free money based on merit — academic achievement, athletic ability, community service, a compelling essay, your intended career, your heritage, your employer's parent's job.",
      },
      {
        type: "text",
        body: "Loans are money you must repay with interest. The goal is to fund as much of your education as possible with grants and scholarships before using a single dollar of loans. Even if you lower your total loan burden by $5,000, you're eliminating roughly $6,800 in total cost (principal plus interest over 10 years) at a 6.5% rate.",
      },
      {
        type: "heading",
        body: "The FAFSA: Don't Skip It, Even If You Think You Won't Qualify",
      },
      {
        type: "text",
        body: "The Free Application for Federal Student Aid (FAFSA) is the gateway to federal grants, subsidized loans, and work-study programs. File it as early as possible after October 1 each year. Many states and colleges give aid on a first-come, first-served basis — applying in November versus March can mean the difference between receiving aid and not receiving aid with identical financial situations.",
      },
      {
        type: "text",
        body: "The single biggest mistake students make: assuming their family earns too much to qualify and not filing. The FAFSA is used to determine aid for all students, and eligibility cutoffs for various programs vary widely. Middle-income families who didn't expect to qualify frequently receive subsidized loans, work-study, and institutional grants after filing. Always file. It takes under an hour.",
      },
      {
        type: "heading",
        body: "Where to Find Scholarships Most People Miss",
      },
      {
        type: "text",
        body: "Most students apply exclusively to large, nationally advertised scholarships. The competition for these is ferocious — thousands of applicants for one award. The better strategy: local scholarships from community foundations, Rotary clubs, local businesses, and civic organizations often have under 50 applicants. A $500 local scholarship you win beats a $10,000 national scholarship you never had a realistic shot at.",
      },
      {
        type: "text",
        body: "Also check: department-specific scholarships at your school (many go unclaimed every year because no one applies), employer and union scholarships, scholarships tied to your intended major, career, ethnicity, or religion. Use Fastweb, Scholarships.com, and your college's financial aid office scholarship list as starting points.",
      },
      {
        type: "heading",
        body: "The High-Volume Essay Strategy",
      },
      {
        type: "text",
        body: "Write one strong core essay — 400–600 words about your goals, background, and why education matters to you. Then adapt it for each application, customizing details to match what each scholarship is looking for. A student who applies to 30 scholarships averaging $500 each expects to win $15,000 on even a 10% success rate. Someone who applies to one $15,000 national scholarship with 10,000 applicants has a 0.01% chance. Volume beats selectivity in the scholarship game.",
      },
    ],
    takeaways: [
      "File the FAFSA as early as possible after October 1 — some aid is awarded first-come, first-served",
      "Local and niche scholarships have far less competition than national ones — apply to many",
      "Write one strong core essay and adapt it for multiple scholarship applications",
    ],
    quiz: [
      { question: "What is the key difference between a grant and a loan?", options: ["Grants have lower interest rates", "Grants do not need to be repaid; loans do", "Loans are based on need; grants are merit-based", "There is no meaningful difference"], answer: 1 },
      { question: "When should you file the FAFSA?", options: ["After you are accepted to college in the spring", "As early as possible after October 1 each year", "In January of your senior year of high school", "Only if your family earns under $50,000"], answer: 1 },
      { question: "Which type of scholarship typically offers the best odds of winning?", options: ["Large national merit scholarships", "Division I athletic scholarships", "Local community and niche-specific scholarships", "University-wide general scholarships"], answer: 2 },
    ],
  },
  {
    id: 4,
    title: "Making Money in College",
    duration: "8 min",
    objectives: [
      "Learn income strategies built around a student schedule",
      "Understand work-study and why it's more valuable than a regular job",
      "Build income-generating skills that compound after graduation",
    ],
    content: [
      {
        type: "text",
        body: "Working during college reduces debt, builds real-world skills, and — contrary to the common belief that it hurts your grades — often improves academic performance by forcing better time management and eliminating procrastination. Research consistently shows that students who work 10–15 hours per week graduate at higher rates than those who don't work at all. The key is 10–15 hours, not 30+.",
      },
      {
        type: "heading",
        body: "Federal Work-Study: More Valuable Than It Looks",
      },
      {
        type: "text",
        body: "Federal work-study is a need-based program that provides part-time jobs for qualifying students, often on campus or with approved nonprofit organizations. Unlike regular part-time employment, work-study earnings are excluded from the income reported on your next FAFSA — meaning they don't count against your aid eligibility for the following year. That makes work-study dollars more valuable than equivalent regular-job dollars.",
      },
      {
        type: "text",
        body: "If you've been awarded work-study in your financial aid package, use it. Students frequently let work-study awards go unused, not realizing they're leaving money on the table that doesn't roll over. Contact your financial aid office or student employment center to see available positions.",
      },
      {
        type: "heading",
        body: "On-Campus Jobs: The Most Student-Friendly Option",
      },
      {
        type: "text",
        body: "On-campus employers understand that students have exams, finals weeks, and changing schedules. They're designed for flexibility. Top options: research assistant positions (pay $12–20+/hour, build technical skills, create faculty relationships that are invaluable for grad school and job applications), tutoring center staff, library work, campus recreation, and department administrative roles. These jobs look far better on a resume than fast food or retail.",
      },
      {
        type: "heading",
        body: "High-Value Side Income With Flexible Hours",
      },
      {
        type: "text",
        body: "Peer tutoring earns $20–80/hour for subjects you already know. If you're strong in calculus, chemistry, economics, or standardized test prep, you're sitting on a valuable asset. Platforms like Wyzant and Tutor.com, or simply posting in campus Facebook groups, get you clients quickly. You set your own hours and work around your schedule.",
      },
      {
        type: "text",
        body: "Freelancing in writing, graphic design, web development, video editing, or social media management can all be done remotely, asynchronously, and around your classes. A student who builds a small freelance client base earning $500–1,000/month during college graduates with real portfolio work, real references, and a head start on a side income stream.",
      },
      {
        type: "heading",
        body: "Choosing Work That Compounds",
      },
      {
        type: "text",
        body: "The smartest college income strategy does two things at once: pays you now and builds something that matters after graduation. A research assistant role pays you and creates a faculty relationship for graduate school letters. Tutoring pays you and strengthens your own understanding of the material. Freelance design pays you and builds a portfolio. Every hour you work should ideally earn money and build something that compounds. A job that only pays is a lesser use of your limited college hours than one that pays and builds.",
      },
    ],
    takeaways: [
      "Working 10–15 hours per week typically improves rather than hurts academic performance",
      "Work-study earnings don't count against future FAFSA eligibility — making them extra valuable",
      "Prioritize work that pays you now AND builds skills, relationships, or portfolio work for after graduation",
    ],
    quiz: [
      { question: "What is a key advantage of federal work-study over regular part-time employment?", options: ["Work-study pays significantly higher wages", "Work-study earnings don't count against your next year's FAFSA eligibility", "Work-study jobs require less time commitment", "Work-study is available to all students regardless of financial need"], answer: 1 },
      { question: "Which income strategy best serves both current pay and future career value?", options: ["Retail or food service jobs", "Research assistant or tutoring roles that build skills and faculty relationships", "Driving for rideshare apps", "Completing paid online surveys"], answer: 1 },
      { question: "How many hours per week of work do studies suggest improves academic performance?", options: ["0 hours — not working at all is always best", "5 hours per week", "10–15 hours per week", "Over 30 hours per week"], answer: 2 },
    ],
  },
  {
    id: 5,
    title: "Post-Graduation Money Moves",
    duration: "9 min",
    objectives: [
      "Know the financial steps to take in your first 90 days after graduation",
      "Understand your student loan repayment options before the grace period ends",
      "Avoid the lifestyle inflation trap that derails most new graduates",
    ],
    content: [
      {
        type: "text",
        body: "The first few months after graduation are more financially important than almost any other period of your adult life. The habits, accounts, and systems you set up — or fail to set up — in this window create the trajectory you'll follow for the next decade. This is not the time to coast.",
      },
      {
        type: "heading",
        body: "The Grace Period: Six Months to Get Ahead",
      },
      {
        type: "text",
        body: "Federal student loans give you a 6-month grace period after graduation or dropping below half-time enrollment before repayment begins. Most graduates treat this as a financial vacation. That's a mistake. Use the grace period to: build your emergency fund (aim for $1,000 minimum, ideally 1 month of expenses before repayment kicks in), choose your repayment plan before the standard plan is automatically assigned, and if you can make any interest payments, do it — they reduce the balance you'll be repaying for the next decade.",
      },
      {
        type: "heading",
        body: "Choosing the Right Repayment Plan",
      },
      {
        type: "text",
        body: "Standard repayment (10 years): fixed monthly payments, lowest total interest paid, finished in 10 years. This is the default and usually the best choice if the payment is manageable. On a $30,000 loan at 6.5%, that's $340/month. Extended repayment (25 years): lowers your monthly payment significantly, but you pay far more interest over time and are in debt for 15 more years. Generally worth avoiding if you can manage the standard payment.",
      },
      {
        type: "text",
        body: "Graduated repayment: starts low and increases every 2 years, designed for people who expect significant income growth. Can make sense in fields with clear income trajectories (medicine, law). Income-driven repayment: best when your total loan balance significantly exceeds your starting salary — for example, $70,000 in debt on a $40,000 salary. Also the path for Public Service Loan Forgiveness if you work in a qualifying public service role.",
      },
      {
        type: "heading",
        body: "Your First Job: The 30-Day Financial Checklist",
      },
      {
        type: "text",
        body: "Within 30 days of starting your first full-time job: enroll in your 401(k) and contribute at least enough to get the full employer match — this is free money you cannot recover. Set up automatic loan payments (most servicers offer a 0.25% interest rate reduction for autopay — small but worth doing). Open a Roth IRA if you don't already have one and set up even a $50/month automatic contribution. Create a monthly budget based on your actual take-home pay, not your gross salary.",
      },
      {
        type: "heading",
        body: "The Most Dangerous Financial Moment: Your First Real Paycheck",
      },
      {
        type: "text",
        body: "After years of living on $800/month in student budgets, a salary that produces $3,500/month in take-home pay feels like enormous wealth. The instinct is immediate: upgrade the apartment, get a new car, eat at restaurants, buy better clothes. Every single one of these upgrades feels reasonable individually. Together, they absorb your entire income increase before you've built anything.",
      },
      {
        type: "text",
        body: "The counterintuitive strategy: live like a student for 12–24 more months after graduation. Keep your rent under 25–30% of take-home pay. Keep the car. Cook more. Use the income gap between 'what you could spend' and 'what you are spending' to aggressively pay down student debt and build your investment foundation. You can always upgrade later. You cannot go back and reclaim the compound growth years you spent on lifestyle upgrades instead.",
      },
    ],
    takeaways: [
      "Use the 6-month grace period to build your emergency fund and actively choose your repayment plan",
      "Always contribute enough to your 401(k) for the full employer match from day one of your first job",
      "Live like a student for 12–24 months post-graduation to build your financial foundation before upgrading lifestyle",
    ],
    quiz: [
      { question: "How long is the federal student loan grace period after graduation?", options: ["3 months", "6 months", "1 year", "18 months"], answer: 1 },
      { question: "Which repayment plan minimizes total interest paid on student loans?", options: ["Extended 25-year repayment", "Income-driven repayment", "Graduated repayment", "Standard 10-year repayment"], answer: 3 },
      { question: "What is the biggest financial risk for new graduates in their first year?", options: ["High student loan interest rates", "Stock market volatility", "Lifestyle inflation — immediately upgrading spending to match the new salary", "Federal tax increases"], answer: 2 },
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


