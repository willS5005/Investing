import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const product = await stripe.products.create({
  name: "FinStart Premium",
  description: "Full access to all FinStart courses, tools, and community.",
});

const monthly = await stripe.prices.create({
  product: product.id,
  unit_amount: 999,
  currency: "usd",
  recurring: { interval: "month" },
  nickname: "Monthly",
});

const yearly = await stripe.prices.create({
  product: product.id,
  unit_amount: 8900,
  currency: "usd",
  recurring: { interval: "year" },
  nickname: "Yearly",
});

console.log("STRIPE_MONTHLY_PRICE_ID=" + monthly.id);
console.log("STRIPE_YEARLY_PRICE_ID=" + yearly.id);
