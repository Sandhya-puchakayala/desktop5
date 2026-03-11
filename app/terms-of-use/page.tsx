import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use | Petoty",
  description: "Petoty Terms of Use - Guidelines for using our platform and services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#52002D' }}>📜 Terms of Use</h1>
          <p className="text-gray-600 text-lg">Last Updated: 07/01/2026</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Welcome to Petoty. These Terms of Use ("Terms") govern your access to and use of the Petoty website, mobile application, products, and services. By accessing or using Petoty, you agree to comply with and be bound by these Terms.
          </p>
          <p>
            If you do not agree, please do not use our platform.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>1. Definitions</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>"Petoty", "we", "our", or "us" refers to Petoty and its affiliates.</li>
              <li>"User" refers to customers, sellers, service partners, franchise partners, or visitors.</li>
              <li>"Platform" refers to Petoty's website, mobile application, and related services.</li>
              <li>"Services" include pet products, doorstep services, Pawscription, Pawsurance, and franchise offerings.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>2. Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>You must be at least 18 years old to use Petoty.</li>
              <li>By using the platform, you confirm that all information provided is accurate and complete.</li>
              <li>Business users (sellers, partners, franchise owners) must have legal authority to operate.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>3. Account Registration & Security</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Users may be required to create an account.</li>
              <li>You are responsible for maintaining confidentiality of login credentials.</li>
              <li>Petoty is not liable for unauthorized account access due to user negligence.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>4. Use of the Platform</h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Use Petoty only for lawful purposes</li>
              <li>Not misuse, disrupt, or harm the platform</li>
              <li>Not upload false, misleading, or harmful content</li>
              <li>Not attempt unauthorized access to systems or data</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Petoty reserves the right to suspend or terminate accounts violating these Terms.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>5. Orders, Services & Payments</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Product availability and pricing may change without notice.</li>
              <li>Orders and service bookings are subject to acceptance.</li>
              <li>Payments must be made through approved payment methods.</li>
              <li>Refunds and cancellations are governed by Petoty's Refund Policy.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>6. Pet Services Disclaimer</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Petoty facilitates services through independent professionals.</li>
              <li>Petoty is not liable for outcomes resulting from services, except as required by law.</li>
              <li>Pet owners must provide accurate pet health and behavior information.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>7. Pawscription – Smart Pet Tracking</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Pawscription tracking features are subject to device connectivity and network availability.</li>
              <li>Location and health data are provided for informational purposes only.</li>
              <li>Petoty does not guarantee uninterrupted tracking or absolute accuracy.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>8. Pawsurance – Pet Insurance</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Insurance policies are issued by third-party insurers.</li>
              <li>Coverage, claims, and exclusions are governed by policy documents.</li>
              <li>Petoty acts as a facilitator and is not an insurer.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>9. Seller, Partner & Franchise Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Sellers and franchise partners must comply with onboarding agreements.</li>
              <li>Petoty reserves the right to monitor performance and compliance.</li>
              <li>Revenue sharing, payouts, and obligations are governed by separate agreements.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>10. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>All content, logos, trademarks, and software belong to Petoty.</li>
              <li>Unauthorized use, reproduction, or distribution is prohibited.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>11. User Content & Feedback</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Users grant Petoty the right to use submitted feedback or reviews.</li>
              <li>Content must not violate laws or third-party rights.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>12. Third-Party Links & Services</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Petoty may link to third-party services.</li>
              <li>We are not responsible for external platforms' content or practices.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>13. Limitation of Liability</h2>
            <p className="mb-3">To the fullest extent permitted by law:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Petoty is not liable for indirect, incidental, or consequential damages</li>
              <li>Use of the platform is at your own risk</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>14. Indemnification</h2>
            <p className="mb-3">You agree to indemnify and hold Petoty harmless from claims arising from:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Violation of these Terms</li>
              <li>Misuse of the platform</li>
              <li>Breach of applicable laws</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>15. Termination</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Petoty may suspend or terminate access for violation of Terms</li>
              <li>For legal or security reasons</li>
              <li>Without prior notice where required</li>
            </ul>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>16. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Courts located in Bengaluru / Karnataka shall have exclusive jurisdiction.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>17. Changes to Terms</h2>
            <p className="text-gray-700">
              Petoty may update these Terms periodically. Continued use after updates constitutes acceptance.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>18. Contact Information</h2>
            <p className="mb-3 text-gray-700">
              For questions or concerns regarding these Terms:
            </p>
            <p className="text-lg font-bold text-black-600">
              📧 <a href="mailto:help@petoty.com" className="hover:underline">help@petoty.com</a>
            </p>
          </section>

          {/* Closing */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#52002D' }}>❤️ Commitment to Fair Use</h2>
            <p className="text-gray-700 leading-relaxed">
              Petoty is committed to creating a safe, transparent, and reliable platform for pet parents, partners, and entrepreneurs.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
