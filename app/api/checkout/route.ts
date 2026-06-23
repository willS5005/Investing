import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  const { priceId, accessToken } = await request.json();

  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    client_reference_id: user.id,
    success_url: `${request.nextUrl.origin}/upgrade-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.nextUrl.origin}/pricing`,
    metadata: { user_id: user.id },
  });

  return NextResponse.json({ url: session.url });
}
