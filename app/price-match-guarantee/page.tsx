"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Adjusted components to use pure Tailwind
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ${className || ''}`}>
    {children}
  </div>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 ${className || ''}`}>
    {children}
  </div>
);

const Separator = () => <hr className="border-t border-gray-200 my-8" />;

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="border-none shadow-none">
    <CardContent className="pt-6">
      <h2 className="text-[24px] font-bold text-center mb-6 flex items-center justify-center gap-2">
        {icon} {title}
      </h2>
      {children}
    </CardContent>
  </Card>
);

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul className="space-y-4 list-disc list-inside text-gray-700">
    {items.map((item, i) => (
      <li key={i} className="text-[17px] font-medium leading-relaxed">{item}</li>
    ))}
  </ul>
);

export default function PriceMatchGuaranteePage() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 space-y-8">
          
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-[34px] lg:text-[40px] font-bold">💰 Price Match Guarantee</h1>
            <p className="text-xl font-semibold">The Best Price for Your Pet, Always</p>
            <p className="text-[17px] text-gray-600 font-medium">
              At <strong className="text-black">Petoty</strong>, we believe pet parents deserve the <strong className="text-black">best quality at the best price</strong>. That's why we offer a <strong className="text-black">Price Match Guarantee</strong> on eligible products.
            </p>
          </div>

          <Separator />

          {/* What Is It */}
          <Card className="border-none shadow-none bg-gray-50 rounded-2xl p-6 my-8">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold flex items-center justify-center gap-2">
                ✅ What Is the Petoty Price Match Guarantee?
              </h2>
              <p className="text-[17px] font-medium text-gray-700">
                If you find the <strong className="text-black">same product</strong> at a <strong className="text-black">lower price</strong> on another authorized online retailer, we'll <strong className="text-black">match the price</strong>—so you never have to compromise on quality or trust.
              </p>
            </div>
          </Card>

          {/* Eligible Products */}
          <Section icon={<span className="text-3xl">🐾</span>} title="Eligible Products">
            <p className="text-center text-gray-600 font-medium mb-4">Price Match applies to:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Identical product (same brand, size, variant, and packaging)",
                "Products sold and shipped by Petoty or authorized sellers",
                "In-stock products at both Petoty and the competitor's website",
              ]} />
            </div>
          </Section>

          {/* Eligible Competitors */}
          <Section icon={<span className="text-3xl">🔍</span>} title="Eligible Competitors">
            <div className="flex justify-center">
              <BulletList items={[
                "Reputed Indian e-commerce websites",
                "Authorized brand websites",
                "Local competitors with a valid online presence",
              ]} />
            </div>
            <p className="text-[15px] text-gray-500 font-medium text-center mt-6">
              (Petoty reserves the right to verify competitor pricing.)
            </p>
          </Section>

          {/* Not Eligible */}
          <Section icon={<span className="text-3xl">❌</span>} title="Not Eligible for Price Match">
            <p className="text-center text-gray-600 font-medium mb-4">Price Match does <strong className="text-black">not</strong> apply to:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Clearance, liquidation, or flash sale items",
                "Discount codes, coupons, cashback offers, or bundles",
                "Subscription-only pricing",
                "Marketplace sellers without verification",
                "Pricing errors or typographical mistakes",
                "Offline store prices",
              ]} />
            </div>
          </Section>

          {/* When Can You Request */}
          <Section icon={<span className="text-3xl">⏰</span>} title="When Can You Request a Price Match?">
            <div className="flex justify-center flex-col items-center">
              <BulletList items={[
                "Before placing the order",
              ]} />
              <p className="font-bold text-center my-4 text-lg">OR</p>
              <BulletList items={[
                <><strong className="text-black">Within 24 hours</strong> of purchase</>,
              ]} />
            </div>
            <p className="text-[15px] font-medium text-gray-500 text-center mt-6">
              Requests after this window may not be accepted.
            </p>
          </Section>

          {/* How to Request */}
          <Section icon={<span className="text-3xl">📧</span>} title="How to Request a Price Match">
            <div className="flex justify-center">
              <ol className="space-y-4 list-decimal list-inside text-gray-700 max-w-lg text-[17px] font-medium">
                <li>Contact Petoty Support via <strong className="text-black">Help Centre</strong></li>
                <li>Share:
                  <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-[17px] font-medium">
                    <li>Product link on Petoty</li>
                    <li>Competitor product link</li>
                    <li>Screenshot showing price, availability, and date</li>
                  </ul>
                </li>
                <li>Our team will verify and respond within <strong className="text-black">24–48 working hours</strong></li>
              </ol>
            </div>
          </Section>

          {/* How Will It Be Applied */}
          <Section icon={<span className="text-3xl">💳</span>} title="How Will the Price Match Be Applied?">
            <div className="flex justify-center">
              <BulletList items={[
                <>If approved <strong className="text-black">before purchase</strong> → Updated price will be applied</>,
                <>If approved <strong className="text-black">after purchase</strong> → Refund of the price difference will be issued to your original payment method</>,
              ]} />
            </div>
          </Section>

          {/* Important Terms */}
          <Card className="border border-gray-200 mt-8 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                📌 Important Terms
              </h2>
              <div className="flex justify-center">
                <BulletList items={[
                  <>Price Match is limited to <strong className="text-black">one request per product</strong></>,
                  "Petoty reserves the right to approve or reject requests",
                  "Final decision rests with Petoty",
                  "This policy may change without prior notice",
                ]} />
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Need Help */}
          <div className="text-center space-y-4 my-10">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              📞 Need Help?
            </h2>
            <div className="space-y-2 text-[17px] font-medium text-black">
              <p>📧 help@petoty.com</p>
              <p>💬 Live Chat & In-App Support</p>
              <p>🕐 Mon–Sat, 9 AM – 8 PM</p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center space-y-3 pb-8 pt-6">
            <h2 className="text-[22px] font-bold flex items-center justify-center gap-2">
              ❤️ Fair Prices. Happy Pets.
            </h2>
            <p className="text-[17px] font-medium text-gray-700 max-w-xl mx-auto">
              With Petoty's Price Match Guarantee, you can shop confidently knowing you're getting the best value for your pet.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
