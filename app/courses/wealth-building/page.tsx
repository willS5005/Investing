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
    title: "Understanding Your Net Worth",
    duration: "8 min",
    objectives: [
      "Calculate your current net worth",
      "Understand why net worth matters more than income",
      "Set a realistic 5-year net worth target",
    ],
    content: [
      {
        type: "text",
        body: "Net worth is the single most important number in personal finance. It's simple: everything you own minus everything you owe. Assets minus liabilities. A doctor earning $300,000 a year with $500,000 in student loans and a financed car has a lower net worth than a teacher earning $60,000 who has been steadily saving and investing for 20 years.",
      },
      {
        type: "text",
        body: "Most people track their income obsessively and their net worth not at all. That's backwards. Income is what you earn. Net worth is what you keep. They are very different numbers — and net worth is the one that determines your financial freedom.",
      },
      {
        type: "heading",
        body: "How to Calculate Your Net Worth",
      },
      {
        type: "text",
        body: "Assets include: checking and savings account balances, investment accounts, retirement accounts (401k, IRA), the market value of property you own, and any other valuables. Liabilities include: student loans, credit card balances, car loans, mortgage balance, and any other debts you owe.",
      },
      {
        type: "text",
        body: "Subtract your total liabilities from your total assets. If you're in your early 20s and your net worth is negative — that's completely normal. The average 22-year-old in the US has a negative net worth due to student loans. What matters is not the starting number. What matters is the direction: is it moving up every 6 months?",
      },
      {
        type: "heading",
        body: "Income vs. Net Worth: Why High Earners Stay Broke",
      },
      {
        type: "text",
        body: "High income alone does not build wealth. The US has millions of high-income earners with near-zero net worth because they spend everything they make — often more. Lifestyle expansion swallows every raise. A new salary means a new car, a nicer apartment, fancier restaurants, and more subscriptions. The savings rate stays flat even as income climbs.",
      },
      {
        type: "text",
        body: "Wealth is built by consistently earning more than you spend and putting the difference to work in investments. A person earning $50,000 who saves and invests 20% of their income will out-accumulate someone earning $150,000 who saves 2%. The math is brutal and unambiguous.",
      },
      {
        type: "heading",
        body: "Setting a Net Worth Target",
      },
      {
        type: "text",
        body: "A widely used benchmark: by age 30, aim for a net worth equal to your annual salary. By 40, aim for 3x your salary. By 50, aim for 6x. These are directional targets, not rules — they vary by career path, cost of living, and life choices. But they give you something concrete to aim for and a way to evaluate whether your current savings rate is on track.",
      },
      {
        type: "text",
        body: "Calculate your net worth today — right now, even a rough estimate. Then set a reminder to recalculate it every 6 months. That single habit, done consistently, is one of the most powerful things you can do for your financial life.",
      },
    ],
    takeaways: [
      "Net worth = assets minus liabilities — calculate yours today",
      "Income doesn't build wealth; saving and investing the difference does",
      "Target a net worth equal to one year's salary by age 30",
    ],
    quiz: [
      { question: "How do you calculate net worth?", options: ["Annual income minus taxes", "Monthly savings times 12", "Assets minus liabilities", "Investments plus cash"], answer: 2 },
      { question: "Which person has the higher net worth?", options: ["Doctor earning $300k with $500k in debt and $50k in assets", "Teacher earning $60k who has $200k in assets and no debt", "They're equal", "Impossible to say without more info"], answer: 1 },
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
      {
        type: "text",
        body: "Compound interest is earning returns on your returns. It's the financial concept that Einstein allegedly called 'the eighth wonder of the world.' Whether or not he said it, the math is genuinely remarkable — and understanding it is the single most motivating thing you can do for your investment habits.",
      },
      {
        type: "heading",
        body: "The Math of Compounding",
      },
      {
        type: "text",
        body: "If you invest $10,000 at a 7% annual return and never add another dollar: Year 1 you have $10,700. Year 5: $14,026. Year 10: $19,672. Year 20: $38,697. Year 30: $76,123. Your original $10,000 grew to over $76,000 without you doing anything.",
      },
      {
        type: "text",
        body: "The growth accelerates over time because each year's returns are calculated on a larger base — including all the previous years' gains. In year one, 7% of $10,000 is $700. In year 20, 7% of $38,000 is $2,660. Same percentage, more than triple the dollar gain. This acceleration is the core of compounding and why patience is the investor's greatest asset.",
      },
      {
        type: "heading",
        body: "The Cost of Waiting 10 Years",
      },
      {
        type: "text",
        body: "Here's the example that changes how most people think about investing: Person A starts investing $300/month at age 22 and stops at 32 — just 10 years of contributions totaling $36,000, then leaves the money completely alone. Person B starts at 32 and invests $300/month until age 65 — 33 years of contributions totaling $118,800.",
      },
      {
        type: "text",
        body: "At age 65, with a 7% average return, who has more money? Person A has approximately $567,000. Person B has approximately $431,000. Person A contributed less than a third as much money but ends up with more — because those 10 extra years of compounding are worth more than 23 additional years of contributions. This is why starting early matters more than almost anything else.",
      },
      {
        type: "heading",
        body: "The Three Variables You Control",
      },
      {
        type: "text",
        body: "Time: the more years your money compounds, the bigger the result — and you have the most influence over this when you're young. Contribution amount: more money invested means a larger base for compounding. Return rate: higher returns accelerate growth, but chasing higher returns usually means taking on more risk, which can backfire.",
      },
      {
        type: "text",
        body: "Of these three, time is the one young investors have the most of — and it's the one most people waste by waiting until they feel 'ready' to invest. The perfect time to start was yesterday. The second best time is today.",
      },
      {
        type: "heading",
        body: "Inflation: Compounding Works Against You Too",
      },
      {
        type: "text",
        body: "Compound interest is not always your friend. On debt, it works against you: a credit card balance left unpaid compounds in the lender's favor. On cash left uninvested, inflation compounds its purchasing power away year after year. $10,000 in a savings account earning 0.5% loses real value at 3% inflation — you end up poorer in purchasing power terms. Compound interest rewards investors and punishes people who wait.",
      },
    ],
    takeaways: [
      "$10,000 invested at 7% becomes $76,000 in 30 years without adding more",
      "Starting 10 years earlier can outperform investing 3x as long",
      "Time is your most valuable financial asset — start investing now, not later",
    ],
    quiz: [
      { question: "What does 'compounding' mean in investing?", options: ["Investing in multiple asset classes", "Earning returns on your returns over time", "Reinvesting dividends only", "Borrowing to invest more"], answer: 1 },
      { question: "Of the three compounding variables, which do young investors have the most of?", options: ["Contribution amount", "Return rate", "Time", "Account type"], answer: 2 },
      { question: "What happens to $10,000 invested at 7% over 30 years with no additional contributions?", options: ["It grows to about $21,000", "It grows to about $76,000", "It grows to about $40,000", "It grows to about $200,000"], answer: 1 },
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
      {
        type: "text",
        body: "Most people have one income stream: their job. If that job disappears — due to layoff, illness, or any other reason — 100% of their income disappears with it. Wealthy people typically have multiple income streams, not because they work harder, but because they built systems over time that generate income without requiring their constant attention.",
      },
      {
        type: "heading",
        body: "Active vs. Passive Income",
      },
      {
        type: "text",
        body: "Active income requires your time and effort to generate: your salary, freelance work, consulting gigs, driving for Uber. When you stop working, it stops. Passive income generates money with minimal ongoing effort: dividends from investments, rental income from a property, royalties from something you created, revenue from a business you've built systems around.",
      },
      {
        type: "text",
        body: "The goal isn't to never work again. It's to have income sources that don't all stop at once if something goes wrong — and to eventually have income that isn't entirely dependent on trading your hours for dollars.",
      },
      {
        type: "heading",
        body: "5 Realistic Income Streams for Your 20s",
      },
      {
        type: "text",
        body: "1. Dividend investing: index funds and ETFs that pay regular dividends create passive income that grows over time. Even $10,000 in a dividend ETF might generate $300–400/year — small now, but powerful at scale.",
      },
      {
        type: "text",
        body: "2. Freelancing or consulting: sell a skill you already have — writing, design, coding, marketing, photography — on a project basis. Platforms like Upwork, Fiverr, and LinkedIn are entry points. A skilled freelancer can earn $500–2,000/month on the side without a major time commitment.",
      },
      {
        type: "text",
        body: "3. Digital products: templates, guides, presets, or educational content you create once and sell repeatedly through platforms like Gumroad or Etsy. The upfront work is significant, but the income can recur indefinitely.",
      },
      {
        type: "text",
        body: "4. High-yield savings and CDs: not glamorous, but 4–5% on your emergency fund is real, genuine passive income. On a $10,000 emergency fund, that's $400–500/year for doing nothing.",
      },
      {
        type: "text",
        body: "5. Side business: a service or product with repeatable systems built around it. Dog walking, tutoring, event photography, reselling — anything that can be scaled or eventually handed off.",
      },
      {
        type: "heading",
        body: "The Right Order of Operations",
      },
      {
        type: "text",
        body: "Don't try to build 5 income streams at once. The right order: First, maximize your primary income — get raises, skills, promotions, or switch to a better-paying job. Second, invest consistently so your money starts compounding. Third, add one side income stream that aligns with skills you already have. Fourth, as it grows, reinvest the proceeds and consider adding another stream.",
      },
      {
        type: "text",
        body: "Building wealth is sequential, not simultaneous. People who try to do everything at once usually do nothing well. Pick one additional income stream, execute it for 6 months, then evaluate.",
      },
    ],
    takeaways: [
      "Wealthy people build multiple income streams — not by working harder, but by building systems",
      "Maximize your primary income first before adding side streams",
      "Dividend investing, freelancing, and digital products are realistic starting points in your 20s",
    ],
    quiz: [
      { question: "What is passive income?", options: ["Income from a part-time job", "Money that requires zero effort ever", "Income generated with minimal ongoing effort from systems you built", "Guaranteed investment returns"], answer: 2 },
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
      "Know the contribution limits and how to prioritize them",
    ],
    content: [
      {
        type: "text",
        body: "Taxes are one of the largest expenses you will pay over your lifetime — potentially more than housing, more than food, more than anything else. But the government provides legal ways to dramatically reduce what you owe through tax-advantaged investment accounts. Using these accounts correctly can add hundreds of thousands of dollars to your long-term wealth.",
      },
      {
        type: "heading",
        body: "The 401(k): Your Employer's Gift",
      },
      {
        type: "text",
        body: "A 401(k) is an employer-sponsored retirement account where you contribute pre-tax dollars directly from your paycheck. Those contributions reduce your taxable income — if you earn $5,000/month and contribute $500, you're only taxed on $4,500. Your investments grow tax-deferred, and you pay taxes only when you withdraw in retirement.",
      },
      {
        type: "text",
        body: "The 2024 contribution limit is $23,000. The single most valuable feature is employer matching. If your employer matches 100% of contributions up to 3% of your salary, and you earn $60,000, that's $1,800/year in free money added to your account. Always contribute at least enough to get the full match — it's an instant 50–100% return on that money.",
      },
      {
        type: "heading",
        body: "Roth IRA: Tax-Free Growth for the Rest of Your Life",
      },
      {
        type: "text",
        body: "A Roth IRA is funded with after-tax money. You don't get a tax break today, but your money grows completely tax-free — and every withdrawal in retirement is also tax-free. The 2024 contribution limit is $7,000/year (plus $1,000 catch-up if you're 50+).",
      },
      {
        type: "text",
        body: "For most people in their 20s and early 30s — who are typically in lower tax brackets now than they'll be in later years — the Roth IRA is the most powerful wealth-building account available. You pay taxes at today's low rate. You never pay taxes on the growth, no matter how large it becomes.",
      },
      {
        type: "heading",
        body: "Traditional vs. Roth: Which Is Right for You?",
      },
      {
        type: "text",
        body: "Traditional accounts (401k, Traditional IRA) give you a tax deduction now, but you pay taxes on withdrawals in retirement. Best if you're in a high tax bracket today and expect to be in a lower bracket in retirement.",
      },
      {
        type: "text",
        body: "Roth accounts give you no deduction now, but tax-free withdrawals later. Best if you're in a lower tax bracket now and expect to be in a higher bracket later — which describes most people in their 20s. When in doubt, default to Roth while you're young.",
      },
      {
        type: "heading",
        body: "HSA: The Only Triple Tax Advantage",
      },
      {
        type: "text",
        body: "If you have a high-deductible health plan (HDHP), you can open a Health Savings Account (HSA). It's the only account in existence with a triple tax advantage: contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. After age 65, you can withdraw for any reason — just like a traditional IRA.",
      },
      {
        type: "text",
        body: "The priority order: 401(k) up to the full employer match → max HSA if available → max Roth IRA → max 401(k) → taxable brokerage. Following this order is worth tens of thousands of dollars over a career.",
      },
    ],
    takeaways: [
      "Always contribute enough to your 401(k) to get the full employer match — it's free money",
      "A Roth IRA offers tax-free growth and is ideal for most people in their 20s",
      "An HSA has a triple tax advantage and is worth maxing before your Roth IRA",
    ],
    quiz: [
      { question: "What is the 401(k) employer match, and why does it matter?", options: ["A fee your employer charges", "Free money your employer adds to your contributions — an instant return", "A government subsidy", "An automatic investment strategy"], answer: 1 },
      { question: "When is a Roth IRA better than a Traditional IRA?", options: ["When you're in a high tax bracket now", "When you expect to be in a lower tax bracket in retirement", "When you're over 50", "When you're in a lower tax bracket now and expect to be in a higher bracket later"], answer: 3 },
      { question: "What makes an HSA unique among investment accounts?", options: ["It has no contribution limits", "It earns guaranteed returns", "It has a triple tax advantage: deductible contributions, tax-free growth, tax-free medical withdrawals", "It's available to everyone"], answer: 2 },
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
      {
        type: "text",
        body: "Your credit score is a 3-digit number between 300 and 850 that determines how much it costs you to borrow money for the rest of your life. A high score (750+) can save you tens of thousands of dollars in lower interest rates on mortgages, car loans, and more. A poor score (below 600) can cost you those same tens of thousands — or prevent you from renting an apartment or getting a job.",
      },
      {
        type: "text",
        body: "Most people treat their credit score as something that just happens to them. In reality, it's something you actively build and maintain by understanding the rules.",
      },
      {
        type: "heading",
        body: "How Your Credit Score Is Calculated",
      },
      {
        type: "text",
        body: "Payment history (35%): paying on time is the single biggest factor. One missed payment can drop your score 50–100 points overnight and stays on your report for 7 years. Set up autopay for at least the minimum on every account.",
      },
      {
        type: "text",
        body: "Credit utilization (30%): the percentage of your available credit that you're using. Keep it under 10% for the best scores — under 30% at minimum. If your credit limit is $5,000 and your balance is $2,000, your utilization is 40% — which hurts your score significantly.",
      },
      {
        type: "text",
        body: "Length of credit history (15%): older accounts help. Don't close your oldest credit card even if you don't use it much — just put a small recurring charge on it. New credit (10%): each new application triggers a hard inquiry that temporarily lowers your score by a few points. Credit mix (10%): having different types of credit (cards, installment loans) helps slightly.",
      },
      {
        type: "heading",
        body: "Building Credit From Zero",
      },
      {
        type: "text",
        body: "If you have no credit history, the fastest path is a secured credit card: deposit $200–500 as collateral, receive a card with that limit, use it for one or two small purchases each month, and pay the full balance every month. Within 6–12 months you'll have a real credit history. Alternatively, ask a family member with excellent credit to add you as an authorized user on their card — you instantly inherit part of their credit history.",
      },
      {
        type: "heading",
        body: "The Four Things to Never Do",
      },
      {
        type: "text",
        body: "Never miss a payment — even one missed payment devastates your score for years. Never max out a card — high utilization tanks your score even if you pay it off the same month. Never apply for multiple credit cards in a short period — each is a hard inquiry. Never close your oldest credit card — it shortens your average account age.",
      },
    ],
    takeaways: [
      "Payment history (35%) is the biggest factor — set up autopay and never miss",
      "Keep credit utilization under 10% of your available credit for the best score",
      "A secured credit card with full monthly payments is the fastest way to build credit from zero",
    ],
    quiz: [
      { question: "What is the biggest factor in your credit score?", options: ["Credit utilization", "Length of credit history", "Payment history", "Credit mix"], answer: 2 },
      { question: "What credit utilization percentage is ideal for the best score?", options: ["Under 50%", "Under 30%", "Under 10%", "Exactly 0%"], answer: 2 },
      { question: "What is the best way to build credit from zero?", options: ["Take out a personal loan", "Get a secured credit card and pay it off in full monthly", "Apply for multiple credit cards at once", "Ask a bank for a credit limit increase"], answer: 1 },
    ],
  },
  {
    id: 6,
    title: "Real Estate Basics for Young Adults",
    duration: "9 min",
    objectives: [
      "Understand when buying a home makes sense vs. renting",
      "Learn how a mortgage works and what it truly costs",
      "Know the hidden costs of homeownership",
    ],
    content: [
      {
        type: "text",
        body: "Real estate is often called the best investment you can make. It's also one of the most misunderstood. Buying a home is not always better than renting — and defaulting to homeownership without running the numbers is one of the most expensive mistakes young adults make.",
      },
      {
        type: "heading",
        body: "The Rent vs. Buy Debate",
      },
      {
        type: "text",
        body: "Renting is often the smarter financial move when: you plan to move within 5 years (buying and selling within 5 years often loses money after transaction costs), you're in a high-cost city where the price-to-rent ratio is extreme (buying a $600,000 condo that rents for $2,500/month rarely beats renting when you run the full numbers), or you don't have a 10–20% down payment plus reserves.",
      },
      {
        type: "text",
        body: "Buying makes more sense when: you plan to stay 5+ years, prices in your market are reasonable relative to rents, you have a stable income and a solid down payment, and you've factored in all the costs — not just the mortgage.",
      },
      {
        type: "heading",
        body: "How a Mortgage Actually Works",
      },
      {
        type: "text",
        body: "A mortgage is a loan to buy property, secured by the property itself. If you stop making payments, the lender can take the house. You make monthly payments split between principal (paying down the loan balance) and interest (the cost of borrowing).",
      },
      {
        type: "text",
        body: "With a $300,000 30-year mortgage at 7% interest, your monthly payment is about $1,996. Over 30 years, you'll pay roughly $419,000 in interest on top of the $300,000 you borrowed — more than the price of the home itself. Paying even $200/month extra dramatically reduces the total interest paid and pays off the loan years early.",
      },
      {
        type: "heading",
        body: "The True Cost of Homeownership",
      },
      {
        type: "text",
        body: "The purchase price is just the beginning. Add: closing costs (2–5% of the loan value), property taxes (0.5–2.5% of the home's value per year), homeowner's insurance, HOA fees (in many communities), and maintenance — budget at least 1% of the home's value per year. A $400,000 home can easily run $3,500–4,500/month all-in, not just the mortgage payment.",
      },
      {
        type: "heading",
        body: "Real Estate as an Investment",
      },
      {
        type: "text",
        body: "Homeownership builds equity over time, provides leverage (you control a $400k asset with $80k down), and historically appreciates around 3–4% annually. However, compared to the stock market's historical 10% return, real estate often underperforms when you honestly account for all costs, maintenance, and opportunity cost. The primary value of a home is stability and lifestyle, not investment return.",
      },
    ],
    takeaways: [
      "Buying makes financial sense when you plan to stay 5+ years and have a down payment saved",
      "A $300,000 mortgage at 7% over 30 years costs $419,000 in interest alone",
      "Budget at least 1% of home value per year for maintenance costs beyond your mortgage",
    ],
    quiz: [
      { question: "When does renting often make more financial sense than buying?", options: ["When you want to build equity", "When you plan to move within 5 years", "When mortgage rates are low", "When you have a large down payment"], answer: 1 },
      { question: "On a $300,000 mortgage at 7% over 30 years, approximately how much total interest do you pay?", options: ["$50,000", "$150,000", "$419,000", "$600,000"], answer: 2 },
      { question: "What is a good annual maintenance budget for a home as a percentage of its value?", options: ["0.1%", "0.5%", "1%", "5%"], answer: 2 },
    ],
  },
  {
    id: 7,
    title: "Your 10-Year Wealth Plan",
    duration: "10 min",
    objectives: [
      "Build a concrete 10-year financial plan",
      "Understand the correct order of financial priorities",
      "Know the milestones to hit in your 20s and 30s",
    ],
    content: [
      {
        type: "text",
        body: "Wealth is not built by accident. The people who reach financial independence almost always follow the same sequence of financial decisions — sometimes without even realizing it. This lesson gives you that sequence as a concrete plan you can start today, regardless of your current income or starting point.",
      },
      {
        type: "heading",
        body: "The Financial Order of Operations",
      },
      {
        type: "text",
        body: "Step 1: Build a $1,000 emergency starter fund — this prevents every minor financial shock from becoming credit card debt. Step 2: Get your full employer 401(k) match — this is a 50–100% instant return and nothing else competes with it. Step 3: Pay off high-interest debt (anything above 7%, especially credit cards). Step 4: Max your Roth IRA ($7,000/year in 2024).",
      },
      {
        type: "text",
        body: "Step 5: Max your 401(k) ($23,000/year). Step 6: Build your emergency fund to 3–6 months of expenses. Step 7: Invest additional money in a taxable brokerage account in low-cost index funds. Step 8: Consider real estate, rental properties, or other assets as your wealth base grows.",
      },
      {
        type: "heading",
        body: "Milestones to Hit by Age",
      },
      {
        type: "text",
        body: "By 25: zero high-interest debt, Roth IRA open and contributing, 3-month emergency fund started, positive net worth trend established. By 30: net worth equal to one year's salary, contributing enough to 401(k) for full match, Roth IRA maxed or close to it, starting to invest beyond retirement accounts.",
      },
      {
        type: "text",
        body: "By 35: net worth 2–3x annual salary, multiple income streams in place or developing, housing situation stable. These are targets, not grades. Life doesn't always go according to plan. The goal is direction, not perfection.",
      },
      {
        type: "heading",
        body: "The Savings Rate Is the Lever That Changes Everything",
      },
      {
        type: "text",
        body: "Your savings rate — the percentage of income you save and invest — is the single biggest variable in how quickly you build wealth. At a 10% savings rate, it takes roughly 40 years to reach financial independence. At 25%, about 25 years. At 50%, roughly 15 years. You don't need to save 50%, but every additional percentage point you can consistently hit shaves years off your timeline.",
      },
      {
        type: "heading",
        body: "Defending Against Lifestyle Inflation",
      },
      {
        type: "text",
        body: "The biggest wealth-building threat in your 20s and 30s is lifestyle inflation — the tendency to spend more as you earn more, keeping your savings rate flat even as income climbs. The antidote: every time you get a raise, immediately direct at least 50% of the after-tax increase to savings or investments before adjusting your lifestyle. You will not miss what you never learned to expect.",
      },
    ],
    takeaways: [
      "Follow the order: emergency starter fund → employer match → high-interest debt → Roth IRA → 401(k)",
      "Your savings rate is the single biggest lever — every 1% more shaves years off your timeline",
      "Direct 50% of every raise to savings before your lifestyle adjusts to the new income",
    ],
    quiz: [
      { question: "What is the first financial step in the order of operations?", options: ["Max your Roth IRA", "Pay off all debt", "Build a $1,000 emergency starter fund", "Get your employer 401(k) match"], answer: 2 },
      { question: "Why should you always contribute enough to get the full 401(k) employer match?", options: ["It lowers your tax bill the most", "It is an instant 50–100% return on that money", "It gives you the highest investment returns", "It is required by law"], answer: 1 },
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

  const { user, ready } = useRequireAuth();
  useEffect(() => {
    if (!ready || !user) return;
    const supabase = createClient();
    supabase.from("user_subscriptions").select("status").eq("user_id", user.id).single().then(({ data }) => {
      if (data?.status !== "premium") { router.push("/courses/premium-gate"); return; }
      setChecking(false);
      loadProgress("wealth-building").then(setCompletedLessons);
    });
  }, [ready, user, router]);

  if (checking) {
    return <main className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="text-gray-400 text-sm">Loading...</div></main>;
  }

  const lesson = lessons[activeLesson];
  const progress = (completedLessons.length / lessons.length) * 100;

  const handleComplete = () => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson]);
      saveLesson("wealth-building", activeLesson);
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


