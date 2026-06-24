import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your FinStart account and subscription.",
  robots: { index: false, follow: false },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
