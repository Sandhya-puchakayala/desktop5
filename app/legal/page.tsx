import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Legal | Petoty",
  description: "Petoty Legal policies, compliance, and important disclaimers.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#52002D' }}>⚖️ Legal</h1>
          <p className="text-gray-600 text-lg">Transparency, Trust & Compliance</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            At Petoty, we are committed to operating with transparency, integrity, and compliance with applicable laws. This Legal page provides access to all policies governing the use of our website, mobile application, products, and services.
          </p>
          <p>
            By accessing or using Petoty, you agree to be bound by the policies listed below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-700">
          {/* Section 1 - Our Legal Policies */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#52002D' }}>📄 Our Legal Policies</h2>

            {/* Policy 1 - Terms of Use */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>📜 Terms of Use</h3>
              <p className="mb-4 text-gray-700">
                Outlines the rules, responsibilities, and conditions for using Petoty's platform, including products, services, Pawscription, Pawsurance, sellers, partners, and franchise operations.
              </p>
              <Link href="/terms-of-use" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Terms of Use
              </Link>
            </div>

            {/* Policy 2 - Privacy Policy */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>🔒 Privacy Policy</h3>
              <p className="mb-4 text-gray-700">
                Explains how we collect, use, store, and protect your personal, pet, and business information across our platform.
              </p>
              <Link href="/privacy-policy" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Privacy Policy
              </Link>
            </div>

            {/* Policy 3 - Payment & Billing */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>💳 Payment & Billing Policy</h3>
              <p className="mb-4 text-gray-700">
                Details accepted payment methods, subscription billing, refunds, failed transactions, and invoicing.
              </p>
              <a href="#" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Payment Methods
              </a>
            </div>

            {/* Policy 4 - Refund & Cancellation */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>↩️ Refund & Cancellation Policy</h3>
              <p className="mb-4 text-gray-700">
                Covers eligibility, timelines, and procedures for cancellations, returns, and refunds for products and services.
              </p>
              <a href="#" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Refund & Cancellation Policy
              </a>
            </div>

            {/* Policy 5 - Cookie Policy */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>🍪 Cookie Policy</h3>
              <p className="mb-4 text-gray-700">
                Describes how cookies and tracking technologies are used to improve user experience and platform performance.
              </p>
              <a href="#" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Cookie Policy
              </a>
            </div>

            {/* Policy 6 - Insurance Disclaimer */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>🛡️ Insurance Disclaimer (Pawsurance)</h3>
              <p className="mb-4 text-gray-700">
                Clarifies Petoty's role as a facilitator and outlines the responsibilities of insurance providers and policyholders.
              </p>
              <a href="#" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Insurance Disclaimer
              </a>
            </div>

            {/* Policy 7 - Device & Tracking Disclaimer */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>📍 Device & Tracking Disclaimer (Pawscription)</h3>
              <p className="mb-4 text-gray-700">
                Explains limitations related to GPS tracking, data accuracy, network dependency, and user responsibilities.
              </p>
              <a href="#" className="inline-block text-black-600 font-semibold hover:underline">
                👉 View Device Disclaimer
              </a>
            </div>

            {/* Policy 8 - Seller, Partner & Franchise Agreements */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#52002D' }}>🤝 Seller, Partner & Franchise Agreements</h3>
              <p className="mb-3 text-gray-700">Legal terms applicable to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
                <li>Marketplace sellers</li>
                <li>Service partners</li>
                <li>Franchise owners</li>
              </ul>
              <p className="mt-3 text-gray-600 italic">(Available upon onboarding or request)</p>
            </div>
          </section>

          {/* Section 2 - Legal Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#52002D' }}>⚠️ Legal Disclaimers</h2>
            <ul className="list-disc list-inside space-y-3 ml-2 text-gray-700">
              <li>Petoty does not provide veterinary diagnosis unless explicitly stated.</li>
              <li>All services are provided by independent professionals.</li>
              <li>Information on the platform is for general guidance and informational purposes only.</li>
              <li>Petoty is not liable for misuse of products or services beyond stated guidelines.</li>
            </ul>
          </section>

          {/* Section 3 - Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🌍 Governing Law</h2>
            <p className="text-gray-700">
              All legal matters related to Petoty are governed by the laws of India, and disputes are subject to the jurisdiction of courts located in Bengaluru/Karnataka.
            </p>
          </section>

          {/* Section 4 - Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>📞 Contact – Legal & Compliance</h2>
            <p className="mb-3 text-gray-700">
              For legal inquiries, notices, or compliance-related concerns:
            </p>
            <p className="text-lg font-bold text-black-600">
              📧 <a href="mailto:help@petoty.com" className="hover:underline">help@petoty.com</a>
            </p>
          </section>

          {/* Closing */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#52002D' }}>❤️ Our Commitment</h2>
            <p className="mb-4 text-gray-700">Petoty is dedicated to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li>Ethical business practices</li>
              <li>User data protection</li>
              <li>Transparent policies</li>
              <li>Long-term trust with customers, partners, and investors</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
