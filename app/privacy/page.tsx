import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FinStart Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-2" style={{ color: "#1e3a5f" }}>Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 9, 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>1. Who We Are</h2>
            <p>
              FinStart is a personal finance education platform. When we say &ldquo;FinStart,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; we mean the FinStart service operated by Will Sobotka. Questions? Email us at{" "}
              <a href="mailto:willsobotka2005@gmail.com" className="text-emerald-600 hover:underline">willsobotka2005@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>2. What Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Account information:</strong> When you sign up, we collect your email address and the password you create (stored securely via Supabase — we never see your plain-text password).
              </li>
              <li>
                <strong>Payment information:</strong> When you subscribe, payment is processed by Stripe. We never see or store your full card number. We receive confirmation of your subscription status from Stripe.
              </li>
              <li>
                <strong>Usage data:</strong> We may collect basic usage information such as pages visited and features used to improve the platform.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to keep you logged in and maintain your session. We do not use advertising or tracking cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To create and manage your account.</li>
              <li>To process your subscription and provide access to premium content.</li>
              <li>To send transactional emails (account confirmation, password reset).</li>
              <li>To improve the Service based on how it is used.</li>
              <li>To respond to your support requests.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information. We do not send marketing emails without your consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>4. Who We Share Data With</h2>
            <p>We only share your data with the following third-party services that are necessary to operate FinStart:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Supabase</strong> — authentication and database hosting.</li>
              <li><strong>Stripe</strong> — payment processing.</li>
              <li><strong>Vercel</strong> — website hosting.</li>
            </ul>
            <p className="mt-3">Each of these services has their own privacy policy and security practices. We do not share your data with advertisers or data brokers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>5. Data Retention</h2>
            <p>
              We retain your account information for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or billing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and data.</li>
              <li>Cancel your subscription at any time.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:willsobotka2005@gmail.com" className="text-emerald-600 hover:underline">willsobotka2005@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>7. Security</h2>
            <p>
              We take reasonable measures to protect your information, including encrypted connections (HTTPS), secure password hashing, and access controls. However, no system is 100% secure. Please use a strong, unique password for your FinStart account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>8. Children&apos;s Privacy</h2>
            <p>
              FinStart is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with their information, contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of FinStart after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>10. Contact</h2>
            <p>
              Questions about this Privacy Policy? Contact us at{" "}
              <a href="mailto:willsobotka2005@gmail.com" className="text-emerald-600 hover:underline">
                willsobotka2005@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
          <Link href="/terms" className="text-emerald-600 hover:underline">Terms of Service</Link>
          <span className="mx-3">·</span>
          <Link href="/" className="hover:text-gray-600">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
