import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Free & Premium Plans",
  description: "Start free forever or upgrade to FinStart Premium for $12.99/month or $119.99/year. Unlock all 5 courses, 4 tools, guides, and community access.",
  openGraph: {
    title: "FinStart Pricing — Free & Premium Plans",
    description: "Start free forever or upgrade to FinStart Premium. Unlock all courses, tools, and guides.",
    url: "/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
