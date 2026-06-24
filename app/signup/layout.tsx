import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Free Account",
  description: "Sign up for FinStart free — no credit card required. Get access to budgeting courses, tools, and 10 free finance articles.",
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
