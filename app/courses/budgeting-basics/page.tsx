"use client";
import Link from "next/link";
import { useState } from "react";

const lessons = [
  {
    id: 1,
    title: "What Is a Budget and Why It Matters",
    duration: "8 min",
    objectives: [
      "Understand what a budget is and what it isn't",
      "Recognize the financial cost of not having one",
      "Set a clear personal goal for this course",
    ],
    content: [
      {
        type: "text",
        body: "A budget is a plan for your money. Nothing more, nothing less. It tells your income where to go before it arrives, rather than wondering where it went after it leaves.",
      },
      {
        type: "heading",
        body: "What a Budget Is Not",
      },
      {
        type: "text",
        body: "A budget is not a restriction on your freedom. It's not a spreadsheet that tells you to stop enjoying life. The most effective budgets include spending money on things you enjoy — intentionally, with full awareness of what you're choosing.",
      },
      {
        type: "heading",
        body: "The Real Cost of Not Budgeting",
      },
      {
        type: "text",
        body: "The average American household carries over $6,000 in credit card debt. Most of it isn't from emergencies — it's from months of untracked, unplanned spending that slowly exceeded income. Without a budget, overspending is almost inevitable because there's no system telling you when you've hit a limit.",
      },
      {
        type: "text",
        body: "People without budgets also save less. Studies consistently show that people who budget save 20–30% more than those who don't — not because they earn more, but because visibility creates accountability.",
      },
      {
        type: "heading",
        body: "The Two Things Every Effective Budget Does",
      },
      {
        type: "text",
        body: "First: It tracks what comes in. Your take-home pay (after taxes and deductions) is your actual budget number — not your salary. Many people build budgets based on gross income and wonder why they always come up short.",
      },
      {
        type: "text",
        body: "Second: It decides what goes where before the month starts. This is called a zero-based budget — every dollar gets assigned a job before you receive it. Savings, rent, groceries, entertainment — all decided in advance.",
      },
      {
        type: "heading",
        body: "Your Goal for This Course",
      },
      {
        type: "text",
        body: "By the end of Budgeting Basics, you will have a working monthly budget built around your actual income and expenses. Not a theoretical exercise — a real plan you can use starting this month.",
      },
    ],
    takeaways: [
      "A budget is a spending plan, not a spending restriction",
      "Use take-home pay, not gross salary, as your budget baseline",
      "Assigning every dollar a job before the month starts is the most effective budgeting approach",
    ],
    quiz: [
      {
        question: "What should you use as the starting number when building your budget?",
        options: ["Your annual salary", "Your take-home (after-tax) monthly pay", "Your gross monthly pay", "Your hourly wage"],
        answer: 1,
      },
      {
        question: "What is the primary purpose of a budget?",
        options: [
          "To stop you from spending money on things you enjoy",
          "To track past spending only",
          "To assign every dollar a job before the month begins",
          "To reduce your tax bill",
        ],
        answer: 2,
      },
      {
        question: "What do studies consistently show about people who budget vs. those who don't?",
        options: [
          "Budgeters earn more money",
          "Budgeters save 20–30% more",
          "Budgeters spend less on everything",
          "There is no significant difference",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Tracking Your Expenses",
    duration: "10 min",
    objectives: [
      "Categorize your expenses into fixed and variable",
      "Identify your actual monthly spending using bank statements",
      "Find the categories where most people unknowingly overspend",
    ],
    content: [
      {
        type: "text",
        body: "You can't build an accurate budget without knowing what you currently spend. Most people underestimate their spending by 20–40% because they track large purchases but miss the small, frequent ones.",
      },
      {
        type: "heading",
        body: "Fixed vs. Variable Expenses",
      },
      {
        type: "text",
        body: "Fixed expenses are the same every month: rent, car payment, insurance, subscriptions, loan minimums. You know exactly what they'll cost. List them first — they're non-negotiable in the short term.",
      },
      {
        type: "text",
        body: "Variable expenses change month to month: groceries, gas, dining out, clothing, entertainment, personal care. These are harder to predict and where most budgets get off track.",
      },
      {
        type: "heading",
        body: "How to Find Your Real Numbers",
      },
      {
        type: "text",
        body: "Don't guess. Open your last two bank and credit card statements and categorize every transaction. Take the average across both months for variable categories. This is your baseline.",
      },
      {
        type: "text",
        body: "Most people are surprised by two categories: dining out and subscriptions. The average American spends $200–400/month on restaurants and $200–300/month on subscriptions they've forgotten about. These are also the easiest to reduce without major lifestyle changes.",
      },
      {
        type: "heading",
        body: "The Categories to Track",
      },
      {
        type: "text",
        body: "Housing (rent/mortgage, utilities, internet), Transportation (car payment, gas, insurance, parking, transit), Food (groceries separate from dining out), Health (insurance, prescriptions, gym), Personal (clothing, haircuts, personal care), Entertainment (streaming, events, hobbies), Debt (all minimum payments), Savings (treated as a non-negotiable expense).",
      },
      {
        type: "heading",
        body: "Treat Savings as an Expense",
      },
      {
        type: "text",
        body: "The most effective budgeters put savings at the top of their expense list — not at the bottom as 'whatever's left.' Savings should be a fixed line item that comes out automatically on payday, before you have a chance to spend it.",
      },
    ],
    takeaways: [
      "Review two months of actual bank statements to find your real spending baseline",
      "Separate groceries from dining out — they require different strategies",
      "Treat savings as a fixed expense that comes first, not a leftover",
    ],
    quiz: [
      {
        question: "Which of the following is a fixed expense?",
        options: ["Groceries", "Dining out", "Monthly rent", "Gas"],
        answer: 2,
      },
      {
        question: "What is the most accurate way to find your actual monthly spending?",
        options: [
          "Estimate based on what you remember spending",
          "Review two months of bank and credit card statements",
          "Ask a friend what they spend in similar categories",
          "Use the national average for each category",
        ],
        answer: 1,
      },
      {
        question: "When should savings be placed in your budget?",
        options: [
          "At the end, with whatever money is left over",
          "Only after all expenses are covered",
          "At the top, treated as a fixed non-negotiable expense",
          "Only when you receive a raise or bonus",
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 3,
    title: "The 50/30/20 Method",
    duration: "9 min",
    objectives: [
      "Apply the 50/30/20 framework to your income",
      "Categorize your current expenses into needs, wants, and savings",
      "Identify where your spending is out of alignment",
    ],
    content: [
      {
        type: "text",
        body: "The 50/30/20 rule is the most widely recommended budgeting framework for people building their first real budget. It works because it's simple enough to stick to and flexible enough to adapt to any income level.",
      },
      {
        type: "heading",
        body: "The Three Categories",
      },
      {
        type: "text",
        body: "50% — Needs. Expenses you must pay to maintain your basic life: rent, utilities, groceries, transportation, insurance, and minimum debt payments. If your needs exceed 50% of take-home pay, address the largest fixed expense first (usually housing).",
      },
      {
        type: "text",
        body: "30% — Wants. Lifestyle spending you choose: dining out, entertainment, travel, clothing beyond basics, hobbies, streaming services. This isn't 'bad' spending — it's intentional spending on things that improve your quality of life, within a defined limit.",
      },
      {
        type: "text",
        body: "20% — Savings and Debt Repayment. Emergency fund contributions, investing (Roth IRA, 401k, index funds), and extra debt payments above minimums. This is the category that builds your future.",
      },
      {
        type: "heading",
        body: "Applying It to a Real Income",
      },
      {
        type: "text",
        body: "Take-home pay: $3,500/month. Needs (50%): $1,750. Wants (30%): $1,050. Savings/Debt (20%): $700. That $700/month invested at 8% average return over 10 years grows to approximately $128,000.",
      },
      {
        type: "heading",
        body: "When Your Numbers Don't Fit",
      },
      {
        type: "text",
        body: "If your needs exceed 50%, compress your wants temporarily — not your savings. The 20% savings target is more important than maintaining the full 30% wants category. Many young professionals in high-cost cities run closer to 60/20/20, which is fine as a starting point while income grows.",
      },
      {
        type: "heading",
        body: "The Most Common Misclassification",
      },
      {
        type: "text",
        body: "Most people classify dining out as a need. It isn't — grocery food is a need, restaurant food is a want. This distinction alone often reveals $150–300/month that can be redirected to savings without any reduction in actual nutrition.",
      },
    ],
    takeaways: [
      "50% needs, 30% wants, 20% savings — the framework scales to any income",
      "Dining out is a want, not a need — groceries are a need",
      "If needs exceed 50%, compress wants before touching savings",
    ],
    quiz: [
      {
        question: "In the 50/30/20 framework, which category does dining out belong to?",
        options: ["Needs (50%)", "Wants (30%)", "Savings (20%)", "It depends on the restaurant"],
        answer: 1,
      },
      {
        question: "If your needs exceed 50% of your income, what should you adjust first?",
        options: [
          "Reduce savings contributions",
          "Stop investing entirely",
          "Compress the wants (30%) category",
          "Switch to a different budgeting system",
        ],
        answer: 2,
      },
      {
        question: "$700/month saved and invested at 8% average return for 10 years grows to approximately:",
        options: ["$45,000", "$84,000", "$128,000", "$210,000"],
        answer: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Cutting Costs Without Cutting Your Life",
    duration: "8 min",
    objectives: [
      "Identify the highest-impact areas for cost reduction",
      "Distinguish between cuts that reduce quality of life and those that don't",
      "Build a specific list of expense reductions to implement this month",
    ],
    content: [
      {
        type: "text",
        body: "Cutting costs doesn't mean eliminating enjoyment. It means identifying which expenses deliver real value versus which ones drain your budget without much return. Most people have $200–500/month in spending they genuinely wouldn't miss if it disappeared.",
      },
      {
        type: "heading",
        body: "The High-Impact, Low-Pain Cuts",
      },
      {
        type: "text",
        body: "Subscriptions audit: The average person has 12 active subscriptions and actively uses 3–4. Log into your bank statement and list every recurring charge. Cancel anything you haven't actively used in the past 30 days. This typically frees $50–150/month immediately.",
      },
      {
        type: "text",
        body: "Dining out frequency: You don't need to stop eating out — you need to be intentional about it. Reducing restaurant visits from 5x/week to 2x/week while maintaining quality meals at home typically saves $150–300/month without feeling like deprivation.",
      },
      {
        type: "text",
        body: "Grocery strategy: Shopping with a list and buying store-brand products for staples (pasta, canned goods, oils) vs. name-brand typically reduces grocery bills by 15–25% with zero quality difference for most items.",
      },
      {
        type: "heading",
        body: "The Cuts That Aren't Worth It",
      },
      {
        type: "text",
        body: "Cutting things you genuinely value leads to budget burnout and abandonment. If you love your gym membership and actually use it, keep it. If you look forward to one streaming service every night, keep it. Sustainable budgets preserve the things that actually matter.",
      },
      {
        type: "text",
        body: "The goal is to eliminate spending that delivers no real value — automatic charges you forgot about, habits you've drifted into without choosing, purchases that seemed good in the moment but didn't deliver.",
      },
      {
        type: "heading",
        body: "The One-Week Spending Freeze",
      },
      {
        type: "text",
        body: "A powerful exercise: for one week, make no discretionary purchases. Only pay fixed expenses and buy groceries. At the end of the week, note which purchases you missed and which you didn't notice were gone. The ones you didn't miss are the cuts worth making permanent.",
      },
      {
        type: "heading",
        body: "Redirect Every Dollar You Free Up",
      },
      {
        type: "text",
        body: "Cutting expenses only improves your finances if the freed dollars go somewhere intentional — emergency fund, debt payoff, or investing. Cuts that don't get reassigned simply expand spending in other categories.",
      },
    ],
    takeaways: [
      "Audit subscriptions first — this is the easiest $50–150/month with no lifestyle impact",
      "Reduce dining out frequency, not quality — going from 5x to 2x/week saves more than you'd expect",
      "Every dollar freed up must be immediately redirected to a savings or debt goal",
    ],
    quiz: [
      {
        question: "What is the most common and easiest first target in a budget cost-cutting audit?",
        options: [
          "Canceling your gym membership",
          "Eliminating all dining out",
          "Auditing and canceling unused subscriptions",
          "Moving to a cheaper apartment",
        ],
        answer: 2,
      },
      {
        question: "Why is cutting things you genuinely value a poor budget strategy?",
        options: [
          "It reduces your credit score",
          "It leads to budget burnout and abandonment",
          "It violates the 50/30/20 rule",
          "It increases your tax liability",
        ],
        answer: 1,
      },
      {
        question: "After cutting an expense, what should you do with the freed-up money?",
        options: [
          "Leave it in your checking account as a buffer",
          "Spend it on something you were previously avoiding",
          "Immediately redirect it to a savings or debt payoff goal",
          "Wait until the end of the month to decide",
        ],
        answer: 2,
      },
    ],
  },
  {
    id: 5,
    title: "Setting and Achieving Savings Goals",
    duration: "9 min",
    objectives: [
      "Define specific, time-bound savings goals",
      "Calculate exactly how much to save monthly to hit each goal",
      "Build an automated savings system that removes willpower from the equation",
    ],
    content: [
      {
        type: "text",
        body: "Vague savings intentions — 'I should save more' — rarely result in actual saving. Specific, defined goals with monthly targets and deadlines consistently do. The difference between the two is the difference between intention and a plan.",
      },
      {
        type: "heading",
        body: "The Three Types of Savings Goals",
      },
      {
        type: "text",
        body: "Short-term goals (under 1 year): Emergency fund starter, vacation, laptop, security deposit. These go in a high-yield savings account. Target 4–5% APY at banks like Ally, Marcus, or SoFi.",
      },
      {
        type: "text",
        body: "Medium-term goals (1–5 years): Full emergency fund (3–6 months expenses), car replacement, down payment on an apartment. Still high-yield savings — you need the money accessible.",
      },
      {
        type: "text",
        body: "Long-term goals (5+ years): Retirement (Roth IRA, 401k), financial independence, home down payment in expensive markets. These belong in investment accounts — index funds — where time allows compound growth to work.",
      },
      {
        type: "heading",
        body: "Making Goals Specific and Actionable",
      },
      {
        type: "text",
        body: "Bad goal: 'Save for a vacation.' Good goal: 'Save $2,400 for a 10-day trip to Europe in June 2026 by setting aside $200/month for 12 months.' The specific goal tells you exactly what to do each month and when you're done.",
      },
      {
        type: "text",
        body: "For each goal, calculate: Target amount ÷ Months until deadline = Monthly savings required. Build this into your budget as a fixed line item before the month begins.",
      },
      {
        type: "heading",
        body: "The Priority Order for Savings Goals",
      },
      {
        type: "text",
        body: "1. Emergency fund starter ($1,000) — before anything else. 2. 401(k) up to full employer match — guaranteed return. 3. Pay down high-interest debt (above 7%). 4. Full emergency fund (3–6 months). 5. Roth IRA contributions. 6. Additional investing and medium-term goals.",
      },
      {
        type: "heading",
        body: "Automation: The Most Powerful Savings Tool",
      },
      {
        type: "text",
        body: "Set up automatic transfers from your checking to your savings account on the day after each paycheck arrives. The money moves before you have a chance to spend it. This removes saving from the category of things that require willpower and makes it the default outcome.",
      },
      {
        type: "text",
        body: "Most banks allow you to set up multiple savings buckets within one account or multiple linked accounts. Name each one for its goal: 'Emergency Fund,' 'Europe Trip,' 'Car Fund.' Named accounts make the purpose visible and reduce the temptation to dip into them.",
      },
    ],
    takeaways: [
      "Specific goals with monthly targets and deadlines outperform vague intentions every time",
      "Calculate monthly savings required: Target Amount ÷ Months = Monthly Savings",
      "Automate savings on payday — make saving the default, not the decision",
    ],
    quiz: [
      {
        question: "Where should you keep your emergency fund?",
        options: [
          "In a stock market index fund",
          "In your regular checking account",
          "In a high-yield savings account earning 4–5% APY",
          "In cash at home",
        ],
        answer: 2,
      },
      {
        question: "You want to save $3,600 in 12 months. How much should you save per month?",
        options: ["$250", "$300", "$350", "$400"],
        answer: 1,
      },
      {
        question: "What is the primary advantage of automating savings transfers?",
        options: [
          "It earns higher interest rates",
          "It removes saving from the category of things requiring willpower",
          "It reduces your tax liability",
          "It improves your credit score",
        ],
        answer: 1,
      },
    ],
  },
];

export default function BudgetingBasicsPage() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const lesson = lessons[activeLesson];

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons((prev) => [...prev, activeLesson]);
    }
  };

  const handleNextLesson = () => {
    if (activeLesson < lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
      setShowQuiz(false);
      setSelectedAnswers({});
      setQuizSubmitted(false);
    }
  };

  const score = lesson.quiz.filter((q, i) => selectedAnswers[i] === q.answer).length;

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900">← All Courses</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <div className="mb-4">
            <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full inline-block mb-2">Free Course</div>
            <h2 className="font-bold text-lg" style={{ color: "#1e3a5f" }}>Budgeting Basics</h2>
            <p className="text-xs text-gray-400 mt-1">{completedLessons.length}/{lessons.length} lessons complete</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all"
                style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="space-y-1">
            {lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => { setActiveLesson(i); setShowQuiz(false); setSelectedAnswers({}); setQuizSubmitted(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm flex items-center gap-3 transition ${activeLesson === i ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600 hover:bg-slate-50"}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${completedLessons.includes(i) ? "bg-emerald-500 text-white" : "border-2 border-gray-200 text-gray-400"}`}>
                  {completedLessons.includes(i) ? "✓" : i + 1}
                </span>
                <span className="leading-tight">{l.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {!showQuiz ? (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gray-400">Lesson {lesson.id} of {lessons.length}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-400">{lesson.duration}</span>
              </div>
              <h1 className="text-3xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>{lesson.title}</h1>

              <div className="bg-slate-50 rounded-2xl p-5 mb-8">
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">Learning Objectives</div>
                <ul className="space-y-2">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 mt-0.5">✓</span> {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mb-10">
                {lesson.content.map((block, i) => {
                  if (block.type === "heading") {
                    return <h2 key={i} className="text-xl font-bold mt-8" style={{ color: "#1e3a5f" }}>{block.body}</h2>;
                  }
                  return <p key={i} className="text-gray-700 leading-relaxed">{block.body}</p>;
                })}
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 mb-8">
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">Key Takeaways</div>
                <ul className="space-y-2">
                  {lesson.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 font-bold mt-0.5">→</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setShowQuiz(true)}
                className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold"
              >
                Take the Quiz →
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#1e3a5f" }}>Lesson {lesson.id} Quiz</h1>
              <p className="text-gray-500 mb-8">{lesson.title} — 3 questions</p>

              <div className="space-y-8">
                {lesson.quiz.map((q, qi) => (
                  <div key={qi} className="border border-gray-200 rounded-2xl p-6">
                    <p className="font-semibold text-gray-900 mb-4">{qi + 1}. {q.question}</p>
                    <div className="space-y-3">
                      {q.options.map((opt, oi) => {
                        let style = "border border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50";
                        if (selectedAnswers[qi] === oi && !quizSubmitted) style = "border-2 border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold";
                        if (quizSubmitted && oi === q.answer) style = "border-2 border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold";
                        if (quizSubmitted && selectedAnswers[qi] === oi && oi !== q.answer) style = "border-2 border-red-400 bg-red-50 text-red-700";
                        return (
                          <button
                            key={oi}
                            onClick={() => handleAnswer(qi, oi)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm transition ${style}`}
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
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                  className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </button>
              ) : (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6">
                  <div className="text-2xl font-extrabold mb-1" style={{ color: "#1e3a5f" }}>
                    {score}/{lesson.quiz.length} correct
                  </div>
                  <p className="text-gray-500 mb-6">
                    {score === 3 ? "Perfect score! You've mastered this lesson." : score === 2 ? "Great work — review the one you missed before moving on." : "Review the lesson content and retake when ready."}
                  </p>
                  {activeLesson < lessons.length - 1 ? (
                    <button onClick={handleNextLesson} className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold">
                      Next Lesson →
                    </button>
                  ) : (
                    <div>
                      <p className="font-bold text-emerald-700 mb-4">🎉 You&apos;ve completed Budgeting Basics!</p>
                      <Link href="/pricing" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl hover:bg-slate-700 transition font-semibold">
                        Unlock Premium Courses →
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
