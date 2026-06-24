import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your FinStart dashboard — track your courses, tools, and financial progress.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
