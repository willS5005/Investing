import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

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

  "how-to-negotiate-your-salary": {
    title: "How to Negotiate Your Salary (And Why Most People Don't)",
    description: "Salary negotiation is one of the highest-ROI skills you can develop. Here's a simple, proven approach that works — even if you hate conflict.",
    readTime: "7 min read",
    content: `
## The Uncomfortable Truth About Salaries

Most people accept the first number a company offers. That single decision — made in an uncomfortable moment — can cost them tens of thousands of dollars over their career.

Salaries compound. A $5,000 raise at 25 doesn't just add $5,000 this year. It raises the floor for your next job, your next raise, and your lifetime earnings trajectory. Research suggests that people who negotiate consistently earn $1 million more over a 45-year career than those who don't.

The company expects you to negotiate. Recruiters have a range. You're almost never at the top of it.

## When to Negotiate

Always negotiate a job offer. Never negotiate during the interview process itself — wait until you have a written offer.

The sequence:
1. Receive the written offer
2. Express enthusiasm for the role
3. Ask for 24–48 hours to review
4. Come back with a counter

Never negotiate in the moment of receiving the offer. You need time to research, think, and prepare your response.

## Research First: Know Your Number

Walk into negotiation with data, not feelings. Sources to find market salary data:

- **Levels.fyi** — tech roles, very detailed
- **Glassdoor** — broad, salary ranges by company
- **LinkedIn Salary** — filters by title, location, experience
- **Bureau of Labor Statistics** — government data, free
- **Peers** — ask people in similar roles what they make

Find the 75th percentile for your role, location, and experience level. That's your target. Not the median — you're not average.

## The Exact Script

When the recruiter shares the offer:

*"Thank you so much — I'm really excited about this opportunity and the team. I'd love to take 24 hours to review the full package before I respond."*

Then, when you come back:

*"I've reviewed the offer carefully, and I'm genuinely excited about the role. Based on my research into market rates for this position in [city], and given my [specific experience/skill], I was hoping we could get closer to $[your number]. Is there flexibility there?"*

Then stop talking. Silence is your friend.

## What They Might Say — and How to Respond

**"That's the top of our range."**
Ask about other levers: signing bonus, extra PTO, earlier performance review, remote flexibility, equity.

**"Let me check with my manager."**
Good sign. They're trying to make it work.

**"We can't move on base, but we can offer a $X signing bonus."**
Often acceptable — though signing bonuses don't compound into future salaries the way base pay does.

**"We need an answer by end of day."**
Rare and usually a pressure tactic. Most companies have more flexibility than that deadline suggests.

## What to Negotiate Beyond Base Salary

- **Signing bonus** — one-time, doesn't affect base
- **Remote work days** — worth real dollars in commute savings
- **Start date** — a week of PTO is worth money
- **Title** — affects future negotiating leverage
- **Performance review timing** — ask for a 6-month review instead of 12
- **Professional development budget**

## The Worst That Happens

Companies virtually never rescind an offer because you negotiated professionally. The absolute worst realistic outcome is they say no and you're back to the original offer.

The upside? Thousands of dollars annually, for the rest of your career.

Negotiate every time.

[Learn more money skills in our First Job Finance course →](/courses/first-job-finance)
    `,
  },

  "compound-interest-explained": {
    title: "Compound Interest Explained: Why Time Is Your Most Valuable Asset",
    description: "Compound interest is the most powerful force in personal finance. Here's how it works, with real numbers that show why starting early matters so much.",
    readTime: "5 min read",
    content: `
## The Eighth Wonder of the World

Albert Einstein allegedly called compound interest the eighth wonder of the world. Whether he said it or not, the math backs it up.

Compound interest is interest earned on interest. It sounds simple, but the effect over decades is genuinely extraordinary — and understanding it changes how you think about every financial decision.

## Simple vs. Compound Interest

**Simple interest** grows linearly. You earn interest only on your original deposit.

$10,000 at 7% simple interest:
- Year 1: $10,700
- Year 10: $17,000
- Year 30: $31,000

**Compound interest** grows exponentially. You earn interest on your original deposit AND on all the interest you've already earned.

$10,000 at 7% compound interest (compounded annually):
- Year 1: $10,700
- Year 10: $19,672
- Year 30: $76,123

Same starting amount. Same rate. 30 years later: $76,123 vs. $31,000.

That's the power of compounding.

## The Rule of 72

A quick mental math trick: divide 72 by your annual return rate to find how many years it takes to double your money.

- At 6% return: money doubles every 12 years
- At 7% return: money doubles every ~10 years
- At 10% return: money doubles every ~7 years

$10,000 invested at 7% for 30 years doubles roughly 3 times:
$10,000 → $20,000 → $40,000 → $80,000

## The Real Power: Starting Early

This is where most people underestimate compounding. The difference between starting at 22 vs. 32 is not 10 years of contributions — it's decades of exponential growth.

**Alex starts at 22, invests $300/month until 65 (43 years):**
Total contributed: $154,800
Portfolio at 65 (7% return): ~$1,060,000

**Jordan starts at 32, invests $300/month until 65 (33 years):**
Total contributed: $118,800
Portfolio at 65 (7% return): ~$510,000

Alex contributed only $36,000 more than Jordan. But ends up with $550,000 more.

Those 10 extra years of compounding are worth more than all of Jordan's contributions combined.

## The Enemy of Compounding: Fees

A 1% annual fee sounds tiny. Over 30 years, it costs you roughly 25% of your final portfolio.

$100,000 invested for 30 years at 7%:
- No fees: $761,226
- 1% annual fee: $574,349
- Difference: $186,877

This is why index funds (0.03% fees) beat actively managed funds (1–2% fees) over long time horizons. The return difference is almost never worth the fee difference.

## How to Put Compounding to Work

1. **Start now** — even $50/month at 22 matters more than $200/month at 32
2. **Automate contributions** — remove the decision from the equation
3. **Minimize fees** — use low-cost index funds
4. **Don't withdraw early** — every dollar pulled out loses all its future compounding
5. **Reinvest dividends** — most brokerage accounts do this automatically

## The Uncomfortable Math

If you're 25 and not investing yet, you've already given up some of your most valuable compounding years. But you still have more compounding runway than you'll have at 35.

The best time to start was yesterday. The second best time is today.

[Start learning how to invest in our Investing 101 course →](/courses/investing-101)
    `,
  },

  "what-is-a-401k": {
    title: "What Is a 401(k)? A Plain-English Guide for First-Time Employees",
    description: "Your employer offers a 401(k) — but what is it, how does it work, and how much should you contribute? Here's everything you need to know.",
    readTime: "6 min read",
    content: `
## The Account You Probably Have But Don't Understand

When you start a new job, someone from HR hands you a benefits packet and mentions something called a 401(k). Most people nod, sign the forms, and move on without fully understanding what they just enrolled in.

That's a mistake — because the 401(k) is one of the most powerful wealth-building tools available to working Americans, and the decisions you make early matter for decades.

## What a 401(k) Actually Is

A 401(k) is a retirement savings account offered through your employer. You contribute money directly from your paycheck — before it's taxed — and invest it in funds inside the account. It grows tax-free until you withdraw it in retirement (after age 59½).

The name comes from the section of the IRS tax code that created it. Not exactly inspiring, but the tax benefits are real.

## The Tax Advantage

Traditional 401(k): contributions reduce your taxable income today.

If you earn $60,000 and contribute $6,000 to your 401(k), you only pay income tax on $54,000. At a 22% tax rate, that's $1,320 saved in taxes this year alone.

The money grows tax-free inside the account. You pay taxes when you withdraw in retirement — ideally at a lower tax rate than you're at now.

**Roth 401(k):** some employers offer this variant. You contribute after-tax dollars, but withdrawals in retirement are completely tax-free. Generally better if you expect to be in a higher tax bracket in retirement.

## The Employer Match: Free Money

Many employers match a percentage of your 401(k) contributions. This is the single best return on investment available to you.

**Common match structures:**
- 100% match up to 3% of salary
- 50% match up to 6% of salary

**Example:** You earn $55,000 and your employer matches 100% up to 4%.

If you contribute 4% ($2,200), your employer adds another $2,200. That's an instant 100% return on your contribution — before any market gains.

**Never leave an employer match on the table.** Contributing less than the match threshold is turning down free compensation.

## How Much to Contribute

Priority order:
1. **Contribute enough to get the full employer match** — always, no exceptions
2. **Max out a Roth IRA** ($7,000/year limit in 2024 if under 50)
3. **Increase 401(k) contributions** toward the annual limit ($23,000 in 2024)

If you can only afford step 1 right now, that's fine. The match alone is powerful.

## What to Invest In

Most 401(k) plans offer a menu of mutual funds. For most people starting out:

**Target-date fund** — pick the fund with the year closest to when you turn 65. It automatically adjusts its allocation (more stocks when young, more bonds as you age). Simple, diversified, hands-off.

**If you want more control:** a simple three-fund portfolio works:
- US total market index fund (60%)
- International index fund (30%)
- Bond index fund (10%)

Avoid high-fee actively managed funds. Look at the expense ratio — anything above 0.5% is too high.

## What Happens When You Leave a Job

Your 401(k) money is yours. When you leave, you have options:

1. **Leave it** with the old employer's plan (if allowed)
2. **Roll it over** to your new employer's 401(k)
3. **Roll it over** to an IRA (usually the most flexible option)
4. **Cash it out** — almost always a bad idea (taxes + 10% penalty)

## Key Numbers for 2024

- Contribution limit: $23,000/year
- Catch-up contribution (50+): additional $7,500
- Early withdrawal penalty: 10% plus income taxes
- Required minimum distributions begin at age 73

## The Bottom Line

Your 401(k) is not complicated once you understand the basics. Contribute at least enough to get your full employer match. Choose low-cost index funds or a target-date fund. Increase contributions as your income grows.

Time in the market is everything. The earlier you start, the longer compounding has to work.

[Explore our First Job Finance course for more →](/courses/first-job-finance)
    `,
  },

  "renting-vs-buying-a-home": {
    title: "Renting vs. Buying a Home in Your 20s: What the Math Actually Says",
    description: "Everyone says buying is better than renting. The math is more complicated — and for many people in their 20s, renting is the smarter financial move.",
    readTime: "8 min read",
    content: `
## The Myth of Renting as Throwing Money Away

You've heard it before: renting is throwing money away. Every dollar you pay in rent builds someone else's equity, not yours.

This sounds logical. It's also incomplete — and for a lot of people in their 20s, it leads to a decision that costs them more money than renting would have.

Buying a home is not automatically better than renting. Whether it makes sense depends on your timeline, your local market, your financial situation, and a set of hidden costs most people ignore.

## The Real Costs of Homeownership

When you buy a home, the mortgage payment is only part of the cost. The true cost of owning includes:

**Upfront costs:**
- Down payment: typically 10–20% of purchase price
- Closing costs: 2–5% of the loan amount
- Moving/setup costs

On a $300,000 home with 10% down: that's $30,000 down payment + $7,500 in closing costs = $37,500 before you make a single mortgage payment.

**Ongoing costs:**
- Mortgage principal and interest
- Property taxes (typically 1–2% of home value per year)
- Homeowners insurance
- PMI if down payment is under 20%
- Maintenance (budget 1% of home value per year)
- HOA fees (if applicable)

A $300,000 home might cost you $2,200/month in mortgage — but add taxes, insurance, and maintenance and you're closer to $2,900–$3,200/month in true costs.

## The Break-Even Timeline

The big question isn't whether buying builds equity — it does. The question is: how long do you need to stay before buying beats renting financially?

Most analyses put the break-even point at **5–7 years** in a normal market. Before that, the transaction costs of buying and selling (agent commissions, closing costs, potential price fluctuations) often make renting cheaper.

**If you're not confident you'll stay in one place for 5+ years, renting is usually the better financial decision.**

## When Renting Makes Sense

- You might relocate for a career opportunity
- You're in a high cost-of-living market where price-to-rent ratios are extreme
- You don't have a 10–20% down payment saved
- You have high-interest debt to pay off first
- You're not sure about the city, neighborhood, or your life situation

Flexibility has real value that's hard to quantify. Taking a job opportunity in another city can add $20,000–$50,000 to your lifetime earnings. Owning a home makes that mobility harder.

## When Buying Makes Sense

- You plan to stay in one city for 5+ years
- You have a down payment of 10–20% saved (without emptying your emergency fund)
- Your mortgage payment would be comparable to what you'd pay in rent
- You have stable income and job security
- The local price-to-rent ratio is reasonable

## The Price-to-Rent Ratio

A quick way to compare buying vs. renting in any market:

Divide the home price by annual rent for a comparable property.

- Ratio below 15: buying is likely the better deal
- Ratio 15–20: it depends on your situation
- Ratio above 20: renting is often smarter financially

**Example:** $400,000 home, comparable rental costs $1,800/month ($21,600/year)
Ratio: 400,000 / 21,600 = **18.5** — in the gray zone

In expensive cities like San Francisco or NYC, this ratio commonly exceeds 30–40, which is why many financially sophisticated people in those cities rent indefinitely.

## What to Do With the Difference

One of the most underappreciated aspects of the rent vs. buy debate: if renting costs you $800/month less than owning, and you invest that $800/month in index funds instead — you may come out ahead financially even without building home equity.

The math depends on stock returns vs. home appreciation rates in your specific market. Over long periods, the S&P 500 has returned roughly 10% annually. Home appreciation has averaged 3–4% nationally (though it varies enormously by location).

## The Bottom Line

Buying a home is a life decision as much as a financial one. If you want stability, space, the ability to customize, and a community to put down roots in — and you're financially ready — buying can be deeply fulfilling.

But the idea that buying is always smarter than renting is a myth. Run the numbers for your specific situation, be honest about how long you'll stay, and don't let anyone pressure you into one of the largest financial decisions of your life before you're ready.

[Build your financial foundation with our Wealth Building course →](/courses/wealth-building)
    `,
  },

  "how-to-invest-in-your-20s": {
    title: "How to Invest in Your 20s: A Step-by-Step Starter Plan",
    description: "You don't need a lot of money or expertise to start investing. Here's a clear, step-by-step plan built for people in their 20s starting from zero.",
    readTime: "7 min read",
    content: `
## Why Your 20s Are the Best Time to Start

You have one asset in your 20s that no amount of money can buy later: time.

Time is the engine of compound growth. A dollar invested at 22 does more work than a dollar invested at 32, because it has ten extra years to compound. Starting in your 20s — even with small amounts — produces dramatically better outcomes than waiting until your income is higher.

This guide gives you a clear sequence to follow.

## Step 1: Build a $1,000 Emergency Fund First

Before investing a dollar in the market, have at least $1,000 in a high-yield savings account. This prevents you from selling investments at a loss the first time an unexpected expense hits.

Open a high-yield savings account with Marcus by Goldman Sachs, Ally Bank, or SoFi — they pay 4–5% APY vs. 0.01% at big banks.

## Step 2: Get Your Full Employer 401(k) Match

If your employer matches 401(k) contributions, contribute at least enough to get the full match before investing anywhere else. A 50% or 100% match is an instant guaranteed return that no investment can beat.

Log into your HR portal, find your 401(k) enrollment, and set your contribution to at least the match threshold.

## Step 3: Open a Roth IRA

A Roth IRA is the best investment account for most people in their 20s. You contribute after-tax dollars, and all growth and withdrawals in retirement are completely tax-free.

At 22 earning $45,000, you're likely in the 22% tax bracket now. In retirement, your income from investments might be taxed at a lower rate — or not at all with a Roth.

**How to open one:**
1. Go to Fidelity, Vanguard, or Charles Schwab (all free, no minimums)
2. Open a Roth IRA account
3. Link your bank account
4. Set up automatic monthly contributions

The 2024 contribution limit is $7,000/year ($583/month). Contribute what you can — even $100/month makes a meaningful difference over 40 years.

## Step 4: Choose What to Invest In

For most people in their 20s, one fund does the job:

**Fidelity:** FZROX (Total Market Index, 0% expense ratio)
**Vanguard:** VTI (Total Stock Market ETF, 0.03% expense ratio)
**Schwab:** SWTSX (Total Stock Market, 0.03% expense ratio)

These funds hold thousands of companies. When you buy one share, you own a tiny piece of Apple, Microsoft, Amazon, and thousands of other companies simultaneously. Your risk is spread across the entire economy.

Don't overthink the fund selection. Pick one total market index fund and stick with it.

## Step 5: Automate Everything

The biggest threat to long-term investing isn't market crashes — it's forgetting to contribute or pulling money out during a downturn.

Set up automatic transfers from your bank account to your Roth IRA on payday. Treat it like a bill. You can't spend what you never see.

Most brokerages let you set an automatic investment date and amount. Set it, then ignore it.

## Step 6: Increase Contributions Over Time

Start with whatever you can afford — even $50/month. Each time you get a raise, redirect half of it to investing before you adjust your lifestyle.

Going from $50/month to $200/month over a few years is how most people build real wealth on normal salaries.

## What Not to Do

- **Don't try to pick individual stocks** — even professional fund managers fail to beat index funds consistently
- **Don't check your portfolio daily** — it leads to emotional decisions that hurt returns
- **Don't withdraw early** — the 10% penalty plus taxes make early withdrawal extremely costly
- **Don't wait until you earn more** — the delay costs you more than the extra income gains

## A Simple Example

$200/month invested from age 22 to 65 at 7% average annual return:
**Total invested: $100,800**
**Portfolio at 65: ~$624,000**

That's not a typo. $100,800 in contributions becomes over $600,000 — entirely because of compounding over 43 years.

Start with what you have. Increase over time. Leave it alone.

[Take our Investing 101 course to go deeper →](/courses/investing-101)
    `,
  },

  "lifestyle-inflation": {
    title: "Lifestyle Inflation: The Silent Killer of Wealth in Your 20s and 30s",
    description: "Most people earn more as they get older but never feel richer. The culprit is lifestyle inflation — and learning to recognize it is the key to actually building wealth.",
    readTime: "5 min read",
    content: `
## The Raise That Changed Nothing

You land a $15,000 raise. You upgrade your apartment. You start eating out more. You buy a nicer car. You add a few more subscriptions.

A year later, you're saving about the same percentage of your income as before the raise. The money just... went somewhere.

This is lifestyle inflation — the unconscious expansion of your spending as your income grows. It's the reason most people never feel financially ahead, no matter how much more they earn.

## Why It Happens

Lifestyle inflation is a feature of being human, not a character flaw.

When you earn more, you feel you deserve more. You compare yourself to peers who are also spending more. You adapt quickly to new comforts and forget what life was like before them.

Psychologists call this hedonic adaptation — the tendency to return to a baseline level of happiness regardless of positive or negative life changes. The new apartment feels amazing for a few months. Then it's just where you live.

## The Math of Lifestyle Inflation

**Scenario A — No lifestyle inflation:**
- Age 25 income: $55,000 → saves 15% ($8,250/year)
- Age 35 income: $85,000 → still saves 15% ($12,750/year)
- Age 45 income: $110,000 → still saves 15% ($16,500/year)

**Scenario B — Lifestyle inflation:**
- Age 25 income: $55,000 → saves 10% ($5,500/year)
- Age 35 income: $85,000 → still saves 10% ($8,500/year — lifestyle expanded with income)
- Age 45 income: $110,000 → still saves 10% ($11,000/year)

Same income trajectory. At a 7% return, Scenario A builds roughly 50% more wealth by 65 — purely from maintaining a savings rate rather than letting spending expand.

## The Expenses Most Likely to Inflate

**Housing** — moving to a bigger, nicer place with every raise is the biggest source of lifestyle inflation. Housing eats 30–40% of most people's income.

**Cars** — trading up to a newer, more expensive vehicle is common after raises and bonuses.

**Food and dining** — restaurant spending and premium grocery habits are easy to inflate and hard to notice.

**Subscriptions** — individually small, but they accumulate. The average American underestimates their subscription spending by 2–3x.

**Travel** — going from budget travel to premium travel is one of the subtler, harder-to-reverse inflations.

## How to Fight It Without Being Miserable

The goal isn't to never improve your lifestyle — it's to be intentional about which improvements you actually choose.

**The 50% rule:** When you get a raise, automatically direct at least 50% of the after-tax increase to savings or investments. Spend the other half however you want. You still improve your lifestyle, but you also capture the financial benefit of earning more.

**Automate savings increases:** Set up a recurring increase in your 401(k) contribution percentage or investment transfers. If the money never hits your checking account, you don't feel like you're depriving yourself.

**Audit your expenses annually:** Look at your spending from 2 years ago vs. today. If your income grew 15% but your spending grew 25%, you have lifestyle inflation to address.

**Choose quality over quantity:** One truly meaningful upgrade (a nicer home in a neighborhood you love) beats five mediocre upgrades that don't actually improve your life much.

## The Trap of "I'll Save More Later"

The most dangerous version of lifestyle inflation isn't the apartment upgrade — it's the mindset that you'll start saving aggressively once you earn enough.

There is no income level where people naturally feel like they have enough to start saving. Spending expands to meet income at every level.

The people who build wealth aren't people who earn more. They're people who decided early that their savings rate wouldn't decrease as their income grew.

[Build better financial habits in our Budgeting Basics course →](/courses/budgeting-basics)
    `,
  },

  "understanding-taxes-first-job": {
    title: "Understanding Your Taxes at Your First Job: W-4, Withholding, and Refunds",
    description: "Taxes at your first job are confusing — W-4 forms, withholding, refunds, and tax brackets. Here's a plain-English breakdown of everything you need to know.",
    readTime: "6 min read",
    content: `
## Why Your First Paycheck Is Always a Surprise

You accepted a $55,000 salary. Your first paycheck shows up for $1,650 instead of the $2,292 you expected. Where did the rest go?

Taxes. But not just one kind — several.

Understanding what's being taken out and why helps you complete your W-4 correctly, plan your budget accurately, and make smarter decisions about retirement contributions and tax deductions.

## What Gets Taken Out of Your Paycheck

**Federal income tax** — the biggest deduction for most people. The rate depends on your income and tax bracket. In 2024, the brackets for single filers are:

- 10% on income up to $11,600
- 12% on income $11,601–$47,150
- 22% on income $47,151–$100,525
- And higher brackets above that

Important: these are marginal rates. If you earn $50,000, you don't pay 22% on all of it. You pay 10% on the first $11,600, 12% on the next chunk, and 22% only on the income above $47,150.

**Social Security tax** — 6.2% of your gross income up to $168,600 (2024 limit). Your employer pays another 6.2% on your behalf.

**Medicare tax** — 1.45% of all gross income. No cap. Again, your employer matches this.

**State income tax** — varies by state. Nine states have no income tax (Texas, Florida, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, New Hampshire). Others range from 2–13%.

**Total FICA taxes (Social Security + Medicare):** 7.65% on your first paycheck chunk.

## The W-4: What It Actually Does

When you start a job, you fill out a W-4 form. This tells your employer how much federal income tax to withhold from each paycheck.

The W-4 doesn't determine how much tax you owe — that's calculated when you file your return. It determines how much is withheld in advance throughout the year.

**The goal:** have your withholding closely match your actual tax liability.

If too much is withheld → you get a refund (the government held your money interest-free all year)
If too little is withheld → you owe money when you file (plus potentially a penalty)

## How to Fill Out Your W-4

For most single people with one job and no other income:
- Fill out your name, address, SSN, and filing status
- Step 3: claim dependents if applicable (most first-jobbers have none)
- Step 4: leave blank unless you have other income or deductions
- Sign and date

The IRS withholding estimator at irs.gov lets you calculate the right withholding if your situation is more complex.

## Tax Refunds Are Not Free Money

Getting a large refund feels great. But a large refund means you overpaid taxes throughout the year.

A $3,000 refund means the government held $250/month of your money interest-free. If you'd kept that $250/month and invested it, you'd have earned returns on it all year.

Ideally, you want your refund to be small — or owe a small amount — meaning your withholding closely matched your actual taxes.

## Tax-Advantaged Accounts Reduce Your Tax Bill

Contributing to a traditional 401(k) or HSA lowers your taxable income.

**Example:** You earn $58,000. You contribute $6,000 to a traditional 401(k). Your taxable income drops to $52,000. At a 22% marginal rate, that's $1,320 less in taxes.

Your take-home pay goes down by less than your contribution because the tax savings offset part of it.

## Simple Tax Moves for Your First Job

1. **Complete your W-4 accurately** — don't just write 0 everywhere without thinking
2. **Contribute to your 401(k)** — reduces your taxable income now
3. **Open a Roth IRA** — pay taxes now, withdraw tax-free in retirement
4. **Keep records** — any deductible job expenses, student loan interest, charitable donations
5. **File by April 15** — or request an extension (note: extension to file is not extension to pay)

## When to See a Tax Professional

Most first-job tax situations are simple enough to handle yourself with TurboTax or FreeTaxUSA. But consider professional help if you:

- Have freelance or self-employment income
- Received stock compensation or RSUs
- Had a major life event (marriage, home purchase, large medical expenses)
- Are confused about your state taxes

For straightforward W-2 employees, DIY tax software is fine.

[Learn more about first-job finances in our course →](/courses/first-job-finance)
    `,
  },

  "how-to-save-money-in-your-20s": {
    title: "How to Actually Save Money in Your 20s (Without Giving Up Everything Fun)",
    description: "Saving money doesn't mean cutting out everything you enjoy. Here's a realistic approach to saving more without feeling deprived.",
    readTime: "6 min read",
    content: `
## The Problem With Most Saving Advice

Most saving advice tells you to cut out coffee, stop eating out, and cancel your subscriptions. Then your life gets boring, you last three weeks, and you give up.

The problem isn't your discipline. It's the strategy. Cutting small pleasures is painful and produces modest results. The same energy spent optimizing your three biggest expenses produces 10x the savings with far less suffering.

This is how to actually save more money — while keeping the parts of life that matter to you.

## Start With Your Three Biggest Expenses

For most people in their 20s, the three biggest expenses are:
1. Housing (30–40% of income)
2. Transportation (10–20% of income)
3. Food (10–15% of income)

These three categories typically consume 50–70% of your take-home pay. Small changes here produce large savings. Cutting Netflix saves $15/month. Moving to a slightly cheaper apartment saves $300/month.

**Housing:** Having a roommate vs. living alone can save $500–$1,000/month in most cities. That's $6,000–$12,000/year — more than most people save by cutting every small expense combined.

**Transportation:** A car is expensive. Monthly payment, insurance, maintenance, gas, and parking can easily run $700–$1,000/month. If public transit, biking, or car-sharing is viable in your city, the savings are significant.

**Food:** The biggest lever here isn't eliminating restaurants — it's reducing food waste and cooking most meals at home. The average American throws away $1,500 in food per year. Meal planning cuts your grocery bill and your restaurant spending simultaneously.

## The Savings Rate Goal

Forget specific dollar amounts. Focus on percentage.

- 10% savings rate: you're doing better than most Americans
- 20% savings rate: you're on a strong track
- 30%+ savings rate: you're building wealth aggressively

If you make $48,000 take-home ($4,000/month) and save 20%, that's $800/month. At a 7% return, investing $800/month from age 25 to 65 produces over $2 million.

The percentage matters more than the amount because it scales with your income automatically.

## Automate First, Spend What's Left

The traditional approach: earn money, pay expenses, save what's left.
The problem: nothing is left.

The better approach: earn money, automatically move savings to a separate account, spend what remains.

Set up an automatic transfer to a high-yield savings account or investment account on payday — before you can spend it. Treat it like a bill. You adjust your spending to what's left rather than trying to resist spending first.

This one change — automating savings — is the most effective behavioral shift in personal finance.

## The Fun Budget

Don't eliminate fun. Budget for it explicitly.

Decide in advance how much you'll spend on restaurants, entertainment, travel, and hobbies each month. Put that number in your budget as a line item. Spend it guilt-free.

When you have a specific allowance for fun spending, you spend it more intentionally. You stop the mindless small purchases and save the budget for things you actually enjoy.

## High-Yield Savings Account

If your savings are sitting in a traditional bank savings account earning 0.01% APY, you're leaving money on the table.

High-yield savings accounts at online banks (Ally, Marcus, SoFi, Discover) pay 4–5% APY — 400x more than the national average.

On $10,000 in savings:
- Traditional bank: $1/year
- High-yield savings: $450–500/year

It takes 10 minutes to open one. The money is FDIC insured. There's no reason not to.

## What to Do With Your Savings Once You Have Them

Once you have 3 months of expenses in a high-yield savings account (your emergency fund), additional savings should be invested — not left in the savings account.

Savings accounts preserve purchasing power against inflation. They don't build wealth. Investing in index funds over a long time horizon builds wealth.

The order:
1. Emergency fund (3 months expenses) → high-yield savings account
2. 401(k) up to employer match → invest in index funds
3. Roth IRA → invest in index funds
4. Additional savings → taxable brokerage account

## The One Mindset Shift That Changes Everything

Stop asking "can I afford this?" Start asking "is this the best use of this money?"

That $200 weekend trip isn't the question. The question is whether that $200 creates more value for you as a weekend trip or as an investment that compounds for 40 years.

Sometimes the trip wins. Often it does — experiences matter. But making the trade-off conscious, rather than automatic, is what separates people who build wealth from people who wonder where their money went.

[Start with our Budgeting Basics course →](/courses/budgeting-basics)
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
      <Navbar />
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
