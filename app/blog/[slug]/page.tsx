import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, {
  title: string;
  description: string;
  readTime: string;
  content: string;
}> = {
  "build-your-first-budget": {
    title: "How to Build Your First Budget in 30 Minutes",
    description: "A step-by-step walkthrough for building a budget that actually works — even if you've never tracked a dollar in your life.",
    readTime: "6 min read",
    content: `
## Why Most People Don't Budget (And Why That's Costing Them)

Most people in their 20s avoid budgeting because it sounds restrictive. But a budget isn't a punishment — it's a plan. Without one, you're spending money reactively. With one, you're making deliberate choices about where your money goes.

The average American in their 20s saves less than 5% of their income. A budget changes that — not by restricting your life, but by making your priorities visible.

## Step 1: Know Your Take-Home Income

Your budget starts with what actually hits your bank account each month — not your salary. If you're paid biweekly, multiply one paycheck by 26, then divide by 12. If your income varies, use your lowest typical month as your baseline.

**Example:** $3,200/month take-home income.

## Step 2: List Every Fixed Expense

Fixed expenses are the same every month — rent, car payment, loan minimums, subscriptions, insurance. Write them all down.

- Rent: $1,100
- Car insurance: $120
- Phone: $80
- Subscriptions (Netflix, Spotify, gym): $60
- Student loan minimum: $200

**Total fixed: $1,560**

## Step 3: Estimate Your Variable Expenses

Variable expenses change each month — groceries, gas, eating out, clothing, entertainment. Look at your last two bank statements and average them out.

- Groceries: $300
- Gas: $80
- Dining out: $150
- Miscellaneous: $100

**Total variable: $630**

## Step 4: Calculate What's Left

Take-home income minus all expenses = what's available for savings and investment.

$3,200 − $1,560 − $630 = **$1,010 remaining**

This is your opportunity. Even directing $300–500/month into savings or investments will compound into serious wealth over 5–10 years.

## Step 5: Assign Every Dollar a Job

Give every remaining dollar a purpose before the month starts:

- Emergency fund contribution: $200
- Investing (index funds/Roth IRA): $300
- Personal spending buffer: $200
- Short-term savings (travel, purchases): $150
- Unallocated buffer: $160

## The Tool That Makes This Easy

FinStart's free budget calculator does all the math automatically. Enter your income and it splits everything using the 50/30/20 rule — the most widely recommended budgeting framework for people just starting out.

## Key Takeaways

- **Your budget starts with take-home pay**, not your gross salary
- **Fixed expenses come first** — they're non-negotiable commitments
- **Every dollar should have a purpose** before the month begins
- Even saving $200–300/month in your 20s builds significant long-term wealth

Ready to build yours? [Start with our free budget calculator →](/tools)
    `,
  },
  "50-30-20-rule": {
    title: "The 50/30/20 Rule: The Only Budget Formula You Need",
    description: "Learn the one budgeting framework that financial advisors recommend most — and how to apply it to your exact income.",
    readTime: "5 min read",
    content: `
## What Is the 50/30/20 Rule?

The 50/30/20 rule is a budgeting framework that divides your take-home income into three categories:

- **50%** → Needs (essentials you can't live without)
- **30%** → Wants (lifestyle spending you choose)
- **20%** → Savings and debt repayment

It was popularized by Senator Elizabeth Warren in her book *All Your Worth* and has since become the default recommendation for financial beginners. Its power is in its simplicity — three numbers, and you have a complete financial plan.

## Breaking Down Each Category

### 50% — Needs
Needs are expenses you *must* pay to maintain your basic life. This includes:
- Rent or mortgage
- Utilities (electricity, water, internet)
- Groceries (basic food, not dining out)
- Transportation (car payment, gas, public transit)
- Minimum debt payments
- Health insurance

If your needs exceed 50% of your income — which is common in high-cost cities — you have two options: reduce a fixed expense (find cheaper housing, refinance a loan) or temporarily compress your wants category.

### 30% — Wants
Wants are everything that improves your life but isn't strictly necessary:
- Dining out and coffee
- Entertainment (streaming, concerts, games)
- Travel and vacations
- Clothing beyond basics
- Gym memberships
- Hobbies

This category is where most people overspend without realizing it. The goal isn't to eliminate wants — it's to be intentional about them.

### 20% — Savings and Debt Repayment
This is the category that builds your future. It includes:
- Emergency fund contributions
- Investing (Roth IRA, index funds, 401k beyond employer match)
- Extra debt payments (above minimums)
- Short-term savings goals

If you have high-interest debt, prioritize paying it down aggressively here before investing.

## Real Example: $3,500/Month Take-Home

| Category | Percentage | Amount |
|---|---|---|
| Needs | 50% | $1,750 |
| Wants | 30% | $1,050 |
| Savings/Debt | 20% | $700 |

$700/month invested at 8% average return over 10 years = **$128,000+**.

## When the 50/30/20 Rule Needs Adjusting

The 50/30/20 split is a starting framework, not a rigid rule. Adjust it based on your situation:

- **High debt load:** Shift to 50/20/30 (more toward debt payoff)
- **Aggressive savings goal:** Shift to 50/20/30 (compress wants, grow savings)
- **Entry-level income in high-cost city:** Focus on needs first, scale savings as income grows

## Key Takeaways

- The 50/30/20 rule divides income into **needs, wants, and savings**
- It's a starting framework — **adjust the ratios to match your goals**
- The savings category is what **builds long-term wealth**
- Use FinStart's calculator to apply this to your exact numbers in minutes

[Try the 50/30/20 Calculator →](/tools)
    `,
  },
  "start-investing-with-50-dollars": {
    title: "How to Start Investing with Just $50",
    description: "You don't need thousands of dollars to start investing. Here's how to open your first account and make your first investment this week.",
    readTime: "7 min read",
    content: `
## The Biggest Myth About Investing

Most people believe investing is for wealthy people. That used to be true — decades ago, brokerages required minimum deposits of $1,000 or more. Today, that barrier doesn't exist.

You can open a brokerage account with $0 and buy your first investment with $1. The real barrier isn't money — it's knowing where to start.

## Step 1: Choose the Right Account Type

Before picking investments, you need to choose where to hold them. Two options matter most for young investors:

**Roth IRA (Best for most people starting out)**
- Contributions are made with after-tax dollars
- Growth and withdrawals in retirement are 100% tax-free
- 2024 contribution limit: $7,000/year
- You must have earned income to contribute
- Best if you expect to be in a higher tax bracket later

**Taxable Brokerage Account**
- No contribution limits
- No tax advantages, but complete flexibility
- Best for goals before retirement age (a home, travel fund, financial independence)

For most people in their 20s, start with a Roth IRA. The tax-free growth over 30+ years is one of the best advantages available to you.

## Step 2: Pick a Brokerage

For beginners, these three are the most straightforward:

- **Fidelity** — No minimums, excellent educational resources, fractional shares
- **Schwab** — No minimums, strong customer service, fractional shares
- **Vanguard** — Best known for low-cost index funds, slightly less beginner-friendly interface

All three are reputable, SIPC-insured, and commission-free for most trades. Open an account online in about 10 minutes.

## Step 3: What to Buy with $50

With a small starting amount, you want broad diversification and low fees. The answer is almost always an index fund.

**For a Roth IRA or taxable account with $50:**

- **FSKAX** (Fidelity Total Market Index) — Owns ~4,000 US companies, 0.015% expense ratio, no minimum
- **VTI** (Vanguard Total Stock Market ETF) — Similar coverage, trades like a stock
- **FZROX** (Fidelity Zero Total Market) — 0% expense ratio, Fidelity accounts only

One of these funds gives you exposure to thousands of companies for essentially no cost.

## Step 4: Set Up Automatic Contributions

One $50 investment won't change your life. But $50/month — automatically invested — will.

Most brokerages let you set up automatic investments on a schedule. Set it and forget it. This strategy (dollar-cost averaging) removes emotion from investing and builds wealth systematically.

**$50/month at 8% average return:**
- After 10 years: ~$9,200
- After 20 years: ~$29,500
- After 30 years: ~$75,000

Start with $50. Increase it whenever your income grows.

## Key Takeaways

- You can start investing today with **as little as $50** — no minimums required
- A **Roth IRA** is the best first account for most young adults
- Buy a **low-cost total market index fund** for instant diversification
- Set up **automatic monthly contributions** and let time do the work

[Open a free FinStart account to track your investment journey →](/signup)
    `,
  },
  "money-mistakes-college-students": {
    title: "5 Money Mistakes Almost Every College Student Makes",
    description: "These five mistakes cost young adults thousands of dollars. Find out if you're making any of them — and how to course correct.",
    readTime: "6 min read",
    content: `
## Most Financial Habits Are Formed in Your 20s

The money patterns you establish between 18 and 25 tend to stick. The good news: the mistakes are predictable. The better news: they're all correctable.

Here are the five most common financial mistakes young adults make — and exactly how to fix them.

## Mistake 1: Ignoring Your Student Loans Until You Have To

Federal student loans have a 6-month grace period after graduation. Many borrowers treat this as free time and don't think about their loans until the first bill arrives.

**Why it hurts:** Interest on unsubsidized loans accrues during school and the grace period. By the time repayment starts, your balance may already be higher than what you borrowed.

**The fix:** Log into studentaid.gov while still in school. Know exactly what you owe, your interest rates, and your repayment options. Even $25–50/month during school reduces your principal before it capitalizes.

## Mistake 2: Treating a Credit Card Like Free Money

Credit cards aren't free money — they're 20–29% APR loans if you carry a balance. One month of carrying a $1,000 balance costs you $20–25 in interest. Compounded over years, that adds up to thousands.

**Why it hurts:** Many people in their 20s carry credit card balances for years without calculating the actual cost.

**The fix:** Treat your credit card like a debit card. Only charge what you already have in your checking account. Pay the full balance every single month. Used this way, credit cards give you free points and build your credit score — no cost.

## Mistake 3: Skipping the Emergency Fund

Without an emergency fund, any unexpected expense — a car repair, a medical bill, a job loss — goes straight onto a credit card or causes a missed payment that damages your credit.

**Why it hurts:** Financial emergencies don't wait for a convenient time. Without a buffer, one bad month can trigger a debt spiral that takes years to unwind.

**The fix:** Build a starter emergency fund of $1,000 before anything else. Then work toward 3–6 months of expenses. Keep it in a high-yield savings account (currently paying 4–5% APY) so it earns money while it sits.

## Mistake 4: Not Contributing to a 401(k) with an Employer Match

If your employer offers a 401(k) match and you don't contribute enough to get it, you are turning down free money — often hundreds or thousands of dollars per year.

**Why it hurts:** A 50% match on up to 6% of your salary is effectively a guaranteed 50% return on that portion of your contribution. No investment can reliably beat that.

**The fix:** On your first day of work, find out your employer's match policy and contribute at least enough to get the full match. This is the single highest-return financial move available to you.

## Mistake 5: Waiting to Start Investing

The most common reason young adults give for not investing: "I'll start when I have more money." This is the most expensive delay you can make.

**Why it hurts:** Time is the most powerful variable in investing. $5,000 invested at 22 grows to roughly $80,000 by 62. The same $5,000 invested at 32 grows to only ~$37,000. Waiting 10 years costs you $43,000 from a single $5,000 investment.

**The fix:** Start with whatever you have — $25, $50, $100/month. Open a Roth IRA, buy a low-cost index fund, and automate the contribution. Increase it as your income grows.

## Key Takeaways

- Know your **student loan balances and interest rates** before repayment begins
- Use credit cards as a **tool, not a loan** — pay the full balance monthly
- Build a **$1,000 emergency fund** before tackling other financial goals
- Always capture your **full employer 401(k) match** — it's free money
- **Start investing now** — time in the market beats amount invested every time

[Start your free FinStart account and build your financial plan →](/signup)
    `,
  },
  "roth-ira-for-beginners": {
    title: "What Is a Roth IRA and Why Every 18-Year-Old Should Open One",
    description: "A Roth IRA is one of the most powerful wealth-building tools available — and most young adults have no idea it exists.",
    readTime: "8 min read",
    content: `
## The Account Most People Wish They'd Opened Sooner

Ask any financial advisor what they'd tell their 22-year-old self and "open a Roth IRA immediately" is almost always near the top of the list. It's not complicated — but the tax advantage it offers is genuinely one of the best deals in personal finance.

## What Is a Roth IRA?

A Roth IRA (Individual Retirement Account) is an investment account with a specific tax structure: you contribute money you've already paid taxes on, and in return, all growth and qualified withdrawals in retirement are completely tax-free.

Compare this to a Traditional IRA or 401(k), where contributions reduce your taxes now, but you pay taxes when you withdraw in retirement.

**Roth IRA = pay taxes now, never again.**

## Why It's Especially Powerful When You're Young

Two factors make the Roth IRA uniquely valuable for people in their 20s:

**1. You're likely in a low tax bracket now.**
If you're earning $40,000–$65,000/year, your federal marginal tax rate is 22%. In retirement, if your investments have grown substantially, you might be withdrawing at a 32% or higher rate. Paying 22% now to never pay taxes again is a significant advantage.

**2. Your money has decades to compound.**
A Roth IRA invested in a total market index fund from age 22 to 65 has 43 years of tax-free compound growth. $6,000 invested at 22 at an 8% average return becomes approximately $165,000 by retirement — all tax-free.

## 2024 Roth IRA Rules

- **Contribution limit:** $7,000/year ($8,000 if you're 50+)
- **Income limit:** You must have earned income (wages, salary, freelance income)
- **Phase-out:** Contributions phase out at $146,000 (single) and $230,000 (married filing jointly)
- **Withdrawal rules:** Contributions (not earnings) can be withdrawn anytime without penalty — making it a flexible account even before retirement

## How to Open One in 10 Minutes

1. **Choose a brokerage:** Fidelity, Schwab, or Vanguard — all free to open, no minimums
2. **Select "Roth IRA"** during account setup
3. **Connect your bank account** and make an initial deposit (even $50)
4. **Choose your investment:** For most beginners, a total market index fund (FSKAX at Fidelity, SWTSX at Schwab, or VTSAX at Vanguard)
5. **Set up automatic monthly contributions**

The entire process takes about 10 minutes. The account is yours forever — it doesn't disappear if you change jobs.

## What to Invest in Inside Your Roth IRA

The account is just a container. What you buy inside it determines your returns.

For most young investors, the answer is simple: **one low-cost total market index fund**.

- Fidelity: **FSKAX** (0.015% expense ratio)
- Schwab: **SWTSX** (0.03% expense ratio)
- Vanguard: **VTSAX** (0.04% expense ratio, $3,000 minimum) or **VTI** ETF (no minimum)

These funds own thousands of companies simultaneously, providing instant diversification at near-zero cost.

## Roth IRA vs. 401(k): Which First?

If your employer offers a 401(k) match:
1. Contribute to 401(k) up to the full match (free money first)
2. Then max out your Roth IRA ($7,000/year)
3. Then return to 401(k) if you have more to invest

If no employer match: Roth IRA first, then 401(k).

## Key Takeaways

- A Roth IRA gives you **tax-free growth and withdrawals** in retirement
- It's most powerful when opened **young** — time amplifies the tax-free compounding
- You can open one at **Fidelity, Schwab, or Vanguard for free** with no minimum
- Invest in a **total market index fund** and contribute automatically each month
- The 2024 limit is **$7,000/year** — even $100–200/month gets you started

[Track your Roth IRA progress with FinStart →](/signup)
    `,
  },
  "pay-off-student-loans-faster": {
    title: "How to Pay Off Student Loans Faster Without Giving Up Your Life",
    description: "Practical strategies to accelerate your student loan payoff — without eating ramen every night or skipping everything you enjoy.",
    readTime: "7 min read",
    content: `
## The Student Loan Reality

The average college graduate carries $37,000 in student loan debt. At a 6.5% interest rate on the standard 10-year repayment plan, that's $420/month — and over $13,000 in interest paid over the life of the loan.

Paying it off faster doesn't require dramatic sacrifices. It requires a clear strategy and consistent execution.

## Step 1: Know Your Loans Before You Do Anything Else

Log into studentaid.gov and review every federal loan. For private loans, check with your loan servicer. For each loan, note:

- Current balance
- Interest rate
- Monthly minimum payment
- Loan servicer

This is your starting point. You can't make a payoff plan without knowing exactly what you owe.

## Step 2: Choose Your Payoff Strategy

**The Avalanche Method (Mathematically Optimal)**
Pay minimums on all loans, then put every extra dollar toward the loan with the highest interest rate. Once paid off, redirect that payment to the next-highest rate loan.

This method saves the most money in interest over time.

**The Snowball Method (Psychologically Effective)**
Pay minimums on all loans, then put extra toward the loan with the smallest balance. Pay it off fast, get the motivation boost, and roll that payment into the next loan.

This method doesn't save as much in interest, but the momentum it creates leads more people to follow through.

**Which to choose:** If you have high-interest private loans, use the avalanche. If staying motivated is your challenge, use the snowball.

## Step 3: Find the Extra Money

Even an extra $100–200/month dramatically shortens your payoff timeline. Common places to find it:

**Reduce subscriptions:** Review every recurring charge. Most people have $50–100/month in subscriptions they rarely use.

**Refinance high-rate private loans:** If your credit score has improved since graduation, private loan refinancing could lower your rate by 1–2%. Even a 1% rate reduction on $30,000 saves ~$3,000 over 10 years.

**Direct windfalls to your loans:** Tax refunds, bonuses, gift money — apply these directly to principal. A single $2,000 tax refund applied to principal can shave months off your payoff.

**Income-based strategies:** A side income of even $300–500/month applied entirely to loans can cut years off your timeline.

## Step 4: Know Your Federal Options

Before aggressively paying off federal loans, understand these programs:

**Public Service Loan Forgiveness (PSLF):** If you work for a government or qualifying nonprofit, your federal loans can be forgiven after 10 years of qualifying payments. If this is your situation, aggressive payoff may not be optimal.

**Income-Driven Repayment (IDR):** Plans like SAVE, PAYE, and IBR cap your payment at a percentage of your income. Useful if your income is low relative to your debt.

**Always check these options before refinancing federal loans** — refinancing federal loans into private loans eliminates these protections permanently.

## The Math on Extra Payments

On a $37,000 loan at 6.5% on a 10-year plan:
- Standard: $420/month, $13,400 in interest
- Extra $100/month: Paid off in ~8 years, save ~$2,800
- Extra $200/month: Paid off in ~7 years, save ~$4,500
- Extra $500/month: Paid off in ~5 years, save ~$7,200

Small extra payments have a compounding effect on payoff speed.

## Key Takeaways

- Know every loan's **balance, rate, and servicer** before building a payoff plan
- Use the **avalanche method** to minimize interest or the **snowball method** for motivation
- Even **$100–200/month extra** significantly shortens your payoff timeline
- Check **PSLF eligibility** before aggressively paying federal loans
- Never refinance federal loans to private without understanding what protections you lose

[Build your debt payoff plan with FinStart tools →](/signup)
    `,
  },
  "index-funds-for-beginners": {
    title: "The Beginner's Guide to Index Funds",
    description: "Index funds are the simplest, most proven investment for long-term wealth. Here's everything you need to know to get started.",
    readTime: "8 min read",
    content: `
## Why Warren Buffett Recommends Index Funds

Warren Buffett — arguably the greatest investor of all time — has repeatedly stated that most people, including professional investors, would be better served by simply buying a low-cost S&P 500 index fund. He's so confident in this that he's instructed the trustee of his estate to put 90% of his wife's inheritance into index funds.

If that's good enough for Buffett's family, it's worth understanding why.

## What Is an Index Fund?

An index fund is a type of investment fund designed to replicate the performance of a specific market index — like the S&P 500 (500 largest US companies) or the Total Stock Market (essentially every US company).

Instead of a fund manager picking individual stocks, an index fund simply owns every stock in its index, in proportion to that company's size. When the market goes up, the fund goes up. When it goes down, the fund goes down.

**The key insight:** Because no one is actively picking stocks, the costs are dramatically lower.

## Active vs. Passive: Why It Matters

**Actively managed fund:** A team of analysts researches and picks stocks, trying to beat the market. Average expense ratio: 0.5–1.5%/year.

**Index fund:** Computer-managed, no stock picking. Average expense ratio: 0.01–0.20%/year.

A 1% difference in annual fees sounds small. On $100,000 invested over 30 years, the difference is approximately $200,000 in wealth — to the fund company, not to you.

And the irony: most actively managed funds *underperform* their benchmark index after fees. Studies consistently show 80–90% of active funds lag the index over 20-year periods.

## The Three Index Funds That Cover Everything

**Total US Stock Market**
Owns essentially every publicly traded US company (~4,000 companies). Maximum US diversification.
- Fidelity: FSKAX (0.015%)
- Vanguard: VTSAX (0.04%) or VTI ETF
- Schwab: SWTSX (0.03%)

**S&P 500**
Owns the 500 largest US companies. Slightly less diversified but very similar returns historically.
- Fidelity: FXAIX (0.015%)
- Vanguard: VFIAX (0.04%) or VOO ETF
- Schwab: SWPPX (0.02%)

**Total World Stock Market**
Owns US + international stocks. True global diversification.
- Fidelity: FZILX (0%) or FTIHX (0.06%)
- Vanguard: VT ETF (0.07%)

For most beginners: start with a total US market fund. Add international exposure later as your portfolio grows.

## How to Buy Your First Index Fund

1. Open a brokerage account (Fidelity, Schwab, or Vanguard)
2. Fund the account via bank transfer
3. Search for the fund by ticker symbol
4. Buy shares (or fractional shares if the price is high)
5. Set up automatic monthly purchases

That's it. There's nothing else to do. No monitoring required, no rebalancing needed for years.

## The Power of Doing Nothing

The biggest mistake new investors make is checking their portfolio daily and selling when it drops. Index fund investing requires you to do the opposite: buy consistently and hold through market downturns.

Every market crash in history has eventually recovered and reached new highs. The investors who kept buying during crashes built the most wealth.

## Key Takeaways

- Index funds own **entire markets** at near-zero cost — no stock picking required
- The **fee difference** between index and active funds costs investors hundreds of thousands over a lifetime
- Start with a **total US market or S&P 500 index fund** at Fidelity, Schwab, or Vanguard
- **Buy consistently and hold** — the strategy works because you don't interfere with it
- Even $50–100/month in index funds grows to serious wealth over decades

[Start tracking your index fund investments with FinStart →](/signup)
    `,
  },
  "emergency-fund-guide": {
    title: "How to Build a 6-Month Emergency Fund on a Small Income",
    description: "An emergency fund is your financial foundation. Here's a realistic plan to build one — even when money is tight.",
    readTime: "6 min read",
    content: `
## Why an Emergency Fund Changes Everything

Without an emergency fund, you're one car repair, one medical bill, or one job loss away from credit card debt. With one, you have a financial buffer that turns a crisis into an inconvenience.

It's the single most impactful thing you can do for your financial stability — not because it earns you money, but because it prevents you from losing it.

## How Much Do You Actually Need?

The standard advice is 3–6 months of expenses. But let's be specific:

**Calculate your monthly essential expenses:**
- Rent/mortgage
- Utilities
- Groceries
- Transportation
- Insurance
- Loan minimums

Multiply by 3 for a starter fund. Multiply by 6 for a full fund.

**Example:** $2,400/month in essential expenses
- Starter goal (3 months): $7,200
- Full goal (6 months): $14,400

Don't let the full number paralyze you. Start with $1,000. Then build from there.

## Where to Keep It

Your emergency fund has one job: be there when you need it. That means:

- **High-yield savings account (HYSA)** — currently paying 4–5% APY at banks like Marcus by Goldman Sachs, Ally Bank, or SoFi. Your money grows while it sits, and you can access it within 1–3 days.
- **NOT the stock market** — investments can drop 30–40% right when you need them most
- **NOT your checking account** — too easy to spend

Open a dedicated HYSA specifically for your emergency fund. Keeping it separate from your day-to-day money removes the temptation to dip into it.

## Building It on a Tight Income: A Realistic Plan

If you can only save $100–200/month, that's enough. Here's a 12-month starter plan:

| Month | Monthly Savings | Running Total |
|---|---|---|
| 1–3 | $150/month | $450 |
| 4–6 | $200/month | $1,050 |
| 7–9 | $200/month | $1,650 |
| 10–12 | $250/month | $2,400 |

At $2,400, you've covered about one month of basic expenses. That's enough to handle most common emergencies. Keep going.

**Ways to accelerate:**
- Direct tax refunds entirely to the fund
- Apply any bonus or extra income immediately
- Find one recurring expense to cut ($50/month = $600/year)

## The Right Order of Operations

1. **$1,000 emergency starter fund** (before aggressive debt payoff or investing)
2. **Capture full 401(k) employer match** (free money, immediate 50–100% return)
3. **Pay down high-interest debt** (anything above 6–7%)
4. **Build to 3–6 months** of expenses
5. **Invest aggressively** (Roth IRA, index funds)

Many financial advisors debate the order of steps 3–5. The emergency fund starter isn't debatable — it comes first.

## When to Use It (And When Not To)

**Use it for:**
- Job loss or reduction in income
- Medical expenses not covered by insurance
- Essential car or home repairs
- Unavoidable emergency travel

**Don't use it for:**
- Planned expenses (that's what sinking funds are for)
- Wants disguised as emergencies
- Investment opportunities ("this is too good to pass up")

If you use it, rebuild it immediately. That's the fund's entire purpose.

## Key Takeaways

- Start with a **$1,000 starter fund** before anything else
- Keep it in a **high-yield savings account** earning 4–5% APY
- Build toward **3–6 months of essential expenses**
- Even **$100–150/month** builds a meaningful buffer within a year
- The emergency fund's job is to **prevent debt**, not earn returns

[Track your emergency fund progress with FinStart →](/signup)
    `,
  },
  "first-job-money-moves": {
    title: "Your First Job: The 5 Money Moves to Make in the First 30 Days",
    description: "The decisions you make in your first month of work set the tone for years of financial habits. Here's what to prioritize.",
    readTime: "6 min read",
    content: `
## The First Paycheck Moment

Your first real paycheck is a pivotal moment. For many young adults, it's the most money they've ever had access to at once. That moment is also when financial patterns are set — often without realizing it.

The people who use the first 30 days well don't need to scramble to catch up later. Here are the five moves that matter most.

## Move 1: Set Up Your 401(k) on Day One

Many companies require 30–90 days before 401(k) enrollment. The moment you're eligible, enroll. Specifically:

- **Contribute at least enough to capture the full employer match.** If your employer matches 50% of contributions up to 6% of your salary, contribute 6%. This is a guaranteed 50% return on that money — the best investment available to you.
- **Choose a target-date index fund** if you don't know what to pick. A "Target Date 2060 Fund" (or whatever year you expect to retire) automatically invests aggressively now and becomes more conservative over time.
- **Increase contributions over time.** Try to add 1% each year, or whenever you get a raise.

Many people skip this step and "get around to it later." Later often becomes years.

## Move 2: Update Your Tax Withholding

When you start a new job, you fill out a W-4 form. Most people just write "0" and move on, but understanding it matters:

- If you claim too many allowances, you may owe taxes in April
- If you claim too few, the government holds your money interest-free all year

Use the IRS withholding estimator at irs.gov/W4App to calculate the right withholding for your situation. Getting this right means no surprises in April.

## Move 3: Open and Fund a High-Yield Savings Account

If you don't already have one, open a high-yield savings account before your first paycheck arrives. Then set up automatic transfers on payday.

- **$200–400/month** directly to savings, automated before you have a chance to spend it
- This becomes your emergency fund base
- At 4–5% APY, it earns money while you build it

"Pay yourself first" is the most reliable saving strategy because it removes willpower from the equation.

## Move 4: Build a Spending Plan for Your New Income

Your first salary looks large until lifestyle inflation absorbs it. Before spending changes to match your new income, build a budget.

Use your take-home pay (not gross salary) and the 50/30/20 framework:
- 50% to needs (rent, bills, food, transportation)
- 30% to wants (dining out, entertainment, subscriptions)
- 20% to savings and debt repayment

Define these categories before the money arrives. Otherwise spending naturally expands to fill available space.

## Move 5: Start or Max Out a Roth IRA

After capturing the 401(k) match, a Roth IRA is your next priority. Open one at Fidelity or Schwab and automate a monthly contribution — even $100–200/month.

Your 20s are when a Roth IRA is most valuable:
- Your income (and tax rate) is typically lower now than it will be later
- You have the most time for tax-free compounding
- Contributions (not earnings) can be withdrawn anytime without penalty if needed

Starting a Roth IRA in your first job and contributing consistently is one of the highest-impact financial decisions of your entire life.

## Key Takeaways

- **Enroll in your 401(k)** the moment you're eligible and capture the full employer match
- **Correct your tax withholding** using the IRS estimator to avoid April surprises
- **Automate savings** before you have a chance to spend — pay yourself first
- **Build a budget with your actual take-home pay** before lifestyle inflation sets in
- **Open a Roth IRA** and contribute consistently — time is your biggest advantage

[Build your first-job financial plan with FinStart →](/signup)
    `,
  },
  "build-credit-at-18": {
    title: "Credit Cards 101: How to Build Credit Without Going Into Debt",
    description: "Used correctly, a credit card is one of the best tools for building credit. Here's how to use one responsibly from day one.",
    readTime: "7 min read",
    content: `
## The Credit Card Paradox

Credit cards are simultaneously one of the best financial tools available and one of the most common sources of debt for young adults. The difference between those two outcomes is entirely in how you use them.

Used correctly, a credit card builds your credit score, earns cash back or travel points, and costs you nothing. Used incorrectly, it charges you 20–29% interest and damages your financial progress for years.

The mechanics are simple. The discipline is the whole game.

## How Your Credit Score Is Calculated

Understanding your score helps you build it strategically. FICO — the dominant scoring model — weighs five factors:

| Factor | Weight |
|---|---|
| Payment history (on-time payments) | 35% |
| Credit utilization (balance vs. limit) | 30% |
| Length of credit history | 15% |
| Credit mix | 10% |
| New credit inquiries | 10% |

Two factors dominate: pay on time and keep your balance low relative to your limit. Everything else is secondary.

## The One Rule That Eliminates Credit Card Risk

**Pay your full statement balance every month, before the due date.**

Not the minimum. Not most of it. The full balance.

If you do this consistently, you pay zero interest — ever. The credit card becomes a free tool that tracks your spending, builds credit, and earns rewards.

If you carry a balance, interest compounds daily at 20–29% APR. A $500 balance at 24% APR costs you $10/month in interest. That's $120/year for the privilege of spending money you didn't have.

## The Best Starter Credit Cards

For someone with no or limited credit history:

**Discover it® Student Cash Back** — 5% cash back in rotating categories, no annual fee, no foreign transaction fee, free FICO score monitoring. Designed specifically for students.

**Capital One Quicksilver Student** — 1.5% cash back on everything, no annual fee, no minimum credit score requirement.

**Secured Credit Card (if you can't get approved)** — You deposit $200–500 as collateral, which becomes your credit limit. Use it like a debit card, pay in full monthly, and you'll build a credit history. Graduate to an unsecured card within 6–12 months.

## Credit Utilization: The Most Actionable Factor

Your credit utilization ratio is your current balance divided by your credit limit. Keeping it below 30% is standard advice. Below 10% is better.

**Example:** $1,000 credit limit, $200 balance = 20% utilization. Good.

If your balance temporarily spikes (unexpected expense, large purchase), pay it down before your statement closes — that's when utilization is reported to the bureaus.

One technique: make two smaller payments per month instead of one large payment at due date. This keeps your reported balance lower throughout the month.

## Building Credit Before You Have Income

If you're a student without significant income, two options:

**Become an authorized user** on a parent's credit card. You get added to their account and benefit from their payment history and credit age — even without using the card. This can boost a thin credit file quickly.

**Secured credit card** — As described above. $200 deposit, responsible use, builds real credit history within months.

## What to Avoid

- **Applying for multiple cards at once** — Each application is a hard inquiry that temporarily drops your score
- **Closing old cards** — Reduces your average account age and total available credit
- **Carrying a balance "to build credit"** — A complete myth. You build credit by using the card and paying in full
- **Spending more because you're earning rewards** — Rewards never offset interest charges

## Key Takeaways

- Pay your **full statement balance every month** — this is the only rule that truly matters
- Keep your **credit utilization below 30%** of your limit, ideally below 10%
- Start with a **no-annual-fee student card** or a secured card if you need to build from scratch
- **Become an authorized user** on a parent's card to build history quickly
- Never carry a balance — interest charges cost **far more than any rewards earned**

[Monitor your credit progress with FinStart →](/signup)
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  const lines = article.content.trim().split("\n");

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>
        <div className="flex gap-4">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">← All Articles</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started Free</Link>
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Free</span>
          <span className="text-xs text-gray-400">{article.readTime}</span>
        </div>
        <h1 className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: "#1e3a5f" }}>
          {article.title}
        </h1>
        <p className="text-xl text-gray-500 mb-10 leading-relaxed">{article.description}</p>

        <div className="prose prose-lg max-w-none">
          {lines.map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ color: "#1e3a5f" }}>{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return <p key={i} className="font-bold text-gray-800 mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>;
            }
            if (line.startsWith("- ")) {
              return <li key={i} className="ml-6 text-gray-700 list-disc mb-1">{line.replace("- ", "")}</li>;
            }
            if (line.startsWith("| ") && line.includes("|")) {
              return null;
            }
            if (line.trim() === "") return <div key={i} className="mt-2" />;
            const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            return <p key={i} className="text-gray-700 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: formatted }} />;
          })}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "#1e3a5f" }}>Ready to take action?</h3>
          <p className="text-gray-500 mb-6">Join FinStart free and get access to courses, tools, and guides that turn these concepts into results.</p>
          <Link href="/signup" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold">
            Create Your Free Account
          </Link>
        </div>
      </article>
    </main>
  );
}
