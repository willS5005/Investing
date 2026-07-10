import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FinStart Terms of Service — the rules and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-2" style={{ color: "#1e3a5f" }}>Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 6, 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>1. Agreement to Terms</h2>
            <p>
              By accessing or using FinStart (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service. These terms apply to all visitors, users, and anyone who accesses the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>2. Description of Service</h2>
            <p>
              FinStart provides personal finance educational content, including articles, courses, and interactive tools, aimed at young adults. Some content is available for free; other content requires a paid subscription. FinStart is an educational platform — nothing on this site constitutes financial advice, investment advice, tax advice, or legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>3. Not Financial Advice</h2>
            <p>
              The content on FinStart is provided for educational and informational purposes only. It is not a substitute for professional financial, investment, tax, or legal advice. Always consult a qualified professional before making financial decisions. FinStart makes no guarantees about the accuracy, completeness, or suitability of any content for your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>4. Accounts</h2>
            <p>
              To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate information when creating your account. You must be at least 13 years old to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>5. Subscriptions and Billing</h2>
            <p>
              FinStart offers monthly and annual subscription plans for access to premium content. By subscribing, you authorize us to charge your payment method on a recurring basis. Subscriptions automatically renew unless cancelled before the renewal date.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Monthly plan:</strong> $12.99/month, billed every 30 days.</li>
              <li><strong>Annual plan:</strong> $119.99/year, billed once per year.</li>
              <li>All prices are in USD.</li>
              <li>You can cancel your subscription at any time from your account page. Cancellation takes effect at the end of the current billing period — you retain access until then.</li>
              <li>We do not offer refunds for partial billing periods.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Share your account credentials or subscription access with others.</li>
              <li>Copy, reproduce, or redistribute FinStart content without permission.</li>
              <li>Use the Service for any unlawful purpose.</li>
              <li>Attempt to gain unauthorized access to any part of the Service.</li>
              <li>Use automated tools to scrape or extract content from the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>7. Intellectual Property</h2>
            <p>
              All content on FinStart — including text, graphics, course materials, and tools — is owned by FinStart and protected by copyright law. You may access content for your personal, non-commercial use only. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses. We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FinStart shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service. Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>11. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Wisconsin, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>13. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:willsobotka2005@gmail.com" className="text-emerald-600 hover:underline">
                willsobotka2005@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
          <Link href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</Link>
          <span className="mx-3">·</span>
          <Link href="/" className="hover:text-gray-600">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
