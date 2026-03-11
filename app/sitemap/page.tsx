import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | Petoty",
  description: "Petoty Sitemap - Navigate through all sections and pages of our website.",
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2" style={{ color: '#52002D' }}>🗺️ Sitemap</h1>
          <p className="text-gray-600 text-lg">Welcome to the Petoty Sitemap</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p>
            This page helps you easily navigate through all sections of our website and find the information you're looking for.
          </p>
        </div>

        {/* Content Sections */}
        {/* <div className="space-y-10 text-gray-700"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 text-gray-700">
          {/* Section 1 - Main Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🏠 Main Pages</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">About Us</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Help Centre</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">FAQs</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Feedback</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Investors</a></li>
            </ul>
          </section>

          {/* Section 2 - Shop & Marketplace */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🛒 Shop & Marketplace</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Shop All Products</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Dog Products</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Cat Products</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Bird Products</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Aquarium Products</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">New Arrivals</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Best Sellers</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Offers & Deals</a></li>
            </ul>
          </section>

          {/* Section 3 - Pet Services */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🐾 Pet Services</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Grooming Services</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pet Spa</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pet Training</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pet Walking</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Vaccination Services</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Veterinarian Video Consultation</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Diet & Nutrition Consultation</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pet Behaviourist</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Home Visit Consultation</a></li>
            </ul>
          </section>

          {/* Section 4 - Pawscription */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>📍 Pawscription (Smart Pet Tracking)</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">About Pawscription</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Features</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">How It Works</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pricing & Plans</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Device Setup Guide</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Support & Troubleshooting</a></li>
            </ul>
          </section>

          {/* Section 5 - Pawsurance */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🛡️ Pawsurance (Pet Insurance)</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">About Pawsurance</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Insurance Plans</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Coverage Details</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Claim Process</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">FAQs</a></li>
            </ul>
          </section>

          {/* Section 6 - Franchise */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🏪 Franchise</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Petoty Franchise Overview</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Franchise Benefits</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Franchise Eligibility</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Franchise Onboarding Process</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Apply for Franchise</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Franchise Support</a></li>
            </ul>
          </section>

          {/* Section 7 - Partners */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🤝 Partners</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><Link href="/become-vendor" className="text-blue-600 hover:underline">Become a Seller</Link></li>
              <li><a href="#" className="text-blue-600 hover:underline">Seller Login</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Become a Service Partner</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Partner Support</a></li>
            </ul>
          </section>

          {/* Section 8 - Account */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>👤 Account</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Login</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Sign Up</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">My Account</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">My Orders</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">My Services</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Subscriptions</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Wallet / Payments</a></li>
            </ul>
          </section>

          {/* Section 9 - Payments */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>💳 Payments</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Payment Methods</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Subscription Billing</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Invoices</a></li>
            </ul>
          </section>

          {/* Section 10 - Legal */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>⚖️ Legal</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><Link href="/legal" className="text-blue-600 hover:underline">Legal Overview</Link></li>
              <li><Link href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</Link></li>
              <li><Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
              <li><a href="#" className="text-blue-600 hover:underline">Refund & Cancellation Policy</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Payment & Billing Policy</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Disclaimers</a></li>
            </ul>
          </section>

          {/* Section 11 - Support */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>📞 Support</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Help Centre</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Contact Support</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Raise a Ticket</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Live Chat</a></li>
            </ul>
          </section>

          {/* Section 12 - Social & Community */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#52002D' }}>🌍 Social & Community</h2>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-700">
              <li><a href="#" className="text-blue-600 hover:underline">Blog</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Pet Care Guides</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Community (Coming Soon)</a></li>
            </ul>
          </section>
            </div>

          {/* Closing */}
          <section className="mt-12 text-center">
  <h2 className="text-2xl font-bold mb-3" style={{ color: '#52002D' }}>
    ❤️ Thank You for Visiting Petoty
  </h2>
  <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
    Petoty is your complete pet care ecosystem — combining products, services, technology, insurance, and offline presence under one trusted platform.
  </p>
</section>
      
      </main>
      <Footer />
    </div>
  );
}
