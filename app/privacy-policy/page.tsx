import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Petoty",
  description: "Petoty Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#52002D' }}>🔒 Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Last Updated: 07/01/2026</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Petoty ("Petoty", "we", "our", or "us") values your trust and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you access our website, mobile application, products, and services.
          </p>
          <p>
            By using Petoty, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>1. Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#52002D' }}>a. Personal Information</h3>
              <p className="mb-3">We may collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Name, email address, phone number</li>
                <li>Billing and delivery address</li>
                <li>Login credentials</li>
                <li>Identity details for verification (where required)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#52002D' }}>b. Pet Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Pet name, breed, age, weight</li>
                <li>Health details provided by you</li>
                <li>Activity and location data (via Pawscription)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#52002D' }}>c. Payment Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Payment method details (processed via secure third-party gateways)</li>
                <li>Transaction history</li>
                <li>We do not store full card or UPI details</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#52002D' }}>d. Device & Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>IP address</li>
                <li>Browser type & device details</li>
                <li>App usage data</li>
                <li>Location data (with consent)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#52002D' }}>e. Partner, Seller & Franchise Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Business details</li>
                <li>KYC documents</li>
                <li>Bank and payout information</li>
                <li>Operational and performance data</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>2. How We Use Your Information</h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Process orders and service bookings</li>
              <li>Provide customer support</li>
              <li>Enable Pawscription tracking & analytics</li>
              <li>Facilitate Pawsurance policy issuance & claims</li>
              <li>Improve platform functionality and user experience</li>
              <li>Send transactional notifications</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>3. Sharing of Information</h2>
            <p className="mb-3">We may share your data with:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Verified sellers and service partners</li>
              <li>Payment gateway providers</li>
              <li>Insurance partners (for Pawsurance)</li>
              <li>Technology and analytics service providers</li>
              <li>Franchise partners where applicable</li>
              <li>Legal or regulatory authorities when required by law</li>
            </ul>
            <p className="mt-4 italic text-gray-700">
              We do not sell your personal data to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>4. Data Security</h2>
            <p className="mb-3">Petoty implements industry-standard security measures including:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Encrypted data transmission</li>
              <li>Secure servers and firewalls</li>
              <li>Limited access controls</li>
              <li>Regular security audits</li>
            </ul>
            <p className="mt-4 italic text-gray-700">
              Despite best practices, no system is completely secure. Users are advised to protect their login credentials.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>5. Cookies & Tracking Technologies</h2>
            <p className="mb-3">We use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Improve website and app performance</li>
              <li>Understand user behavior</li>
              <li>Personalize content and experience</li>
            </ul>
            <p className="mt-4 text-gray-700">
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>6. Location Data & Pawscription</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Real-time location tracking is enabled only with user consent</li>
              <li>Location data is used exclusively for pet safety and tracking services</li>
              <li>Users can disable tracking via app settings</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>7. Data Retention</h2>
            <p className="mb-3">We retain your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>As long as your account is active</li>
              <li>As required to comply with legal obligations</li>
              <li>For legitimate business purposes</li>
            </ul>
            <p className="mt-4 text-gray-700">
              You may request deletion of your account and data, subject to regulatory requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Update or correct information</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent for certain data usage</li>
              <li>Opt out of promotional communications</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>9. Children's Privacy</h2>
            <p className="text-gray-700">
              Petoty does not knowingly collect personal information from children under 18 years of age. If such data is identified, it will be deleted promptly.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>10. Franchise, Seller & Partner Data</h2>
            <p className="mb-3">Business-related data is collected from:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Sellers</li>
              <li>Service partners</li>
              <li>Franchise owners</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Such data is used strictly for operational, compliance, and performance purposes and handled with confidentiality.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>11. Third-Party Links</h2>
            <p className="text-gray-700">
              Petoty may contain links to third-party services. We are not responsible for the privacy practices of external platforms.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>12. Changes to This Policy</h2>
            <p className="mb-4 text-gray-700">
              Petoty may update this Privacy Policy periodically. Updates will be posted on this page with the revised date.
            </p>
            <p className="text-gray-700">
              Continued use of our services indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>13. Contact Us</h2>
            <p className="mb-3 text-gray-700">
              For questions or concerns related to this Privacy Policy:
            </p>
            <p className="text-lg font-bold text-black-600">
              📧 <a href="mailto:help@petoty.com" className="hover:underline">help@petoty.com</a>
            </p>
          </section>

          {/* Closing */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#52002D' }}>❤️ Your Trust Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Petoty is committed to safeguarding your information and providing a safe, transparent, and reliable pet-care experience.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
