"use client";

import React from "react";
import { Clock, HelpCircle, Heart, PawPrint } from "lucide-react";
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

export default function ReturnExchangePolicy() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 space-y-8">
          
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-[34px] lg:text-[40px] font-bold">🔄 Return & Exchange Policy</h1>
            <p className="text-xl font-semibold">Hassle-Free Returns & Easy Exchanges</p>
            <p className="text-[17px] text-gray-600 font-medium">
              At Petoty, we want you and your pet to be completely satisfied with every purchase. If something isn't right, we're here to help.
            </p>
          </div>

          <Separator />

          {/* Eligible Products */}
          <Section icon={<span className="text-2xl">📦</span>} title="Eligible Products for Return & Exchange">
            <p className="text-center text-gray-600 font-medium mb-4">You may request a return or exchange if:</p>
            <div className="flex justify-center">
              <BulletList items={[
                <>The product is <strong className="text-black">damaged or defective</strong></>,
                <>You received an <strong className="text-black">incorrect item</strong></>,
                <>The product is <strong className="text-black">missing parts or accessories</strong></>,
              ]} />
            </div>
            <p className="text-center text-gray-600 font-medium mt-6 mb-4">Products must be:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "Unused and in original condition",
                "Returned with original packaging, tags, and invoice",
              ]} />
            </div>
          </Section>

          {/* Non-Returnable Items */}
          <Section icon={<span className="text-2xl">❌</span>} title="Non-Returnable Items">
            <p className="text-center text-gray-600 font-medium mb-4">
              The following items are <strong className="text-black">not eligible</strong> for return or exchange:
            </p>
            <div className="flex justify-center">
              <BulletList items={[
                "Perishable items (food, treats, supplements)",
                "Grooming or hygiene products once opened",
                "Customized or personalized products",
                "Products marked as Non-Returnable",
                "Used or damaged due to misuse",
              ]} />
            </div>
          </Section>

          {/* Return & Exchange Window */}
          <Section icon={<Clock className="h-6 w-6 text-black" />} title="Return & Exchange Window">
            <div className="flex justify-center">
              <BulletList items={[
                <>Requests must be raised within <strong className="text-black">48 hours</strong> of delivery</>,
                "Late requests may not be accepted",
              ]} />
            </div>
          </Section>

          {/* How to Request */}
          <Card className="border border-gray-200 mt-8 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                📋 How to Request a Return or Exchange
              </h2>
              <div className="flex justify-center">
                <BulletList items={[
                  <>Go to <strong className="text-black">My Orders → Select Order → Request Return/Exchange</strong></>,
                  "Choose the reason and upload supporting images/videos",
                  "Submit the request",
                  "Our team will review and confirm eligibility",
                  "Pickup or exchange will be scheduled (if applicable)",
                ]} />
              </div>
            </CardContent>
          </Card>

          {/* Return Pickup */}
          <Section icon={<span className="text-2xl">🚚</span>} title="Return Pickup">
            <div className="flex justify-center">
              <BulletList items={[
                "Reverse pickup will be arranged for eligible products",
                "In some locations, you may be asked to self-ship the product",
                "Pickup timelines depend on location and courier availability",
              ]} />
            </div>
          </Section>

          {/* Refund Process */}
          <Section icon={<span className="text-2xl">💰</span>} title="Refund Process">
            <div className="flex justify-center">
              <BulletList items={[
                <>Approved refunds are processed within <strong className="text-black">5–7 working days</strong></>,
                "Refunds are issued to the original payment method",
                "Shipping charges (if any) are non-refundable unless the issue is from Petoty's side",
              ]} />
            </div>
          </Section>

          {/* Exchange Process */}
          <Section icon={<span className="text-2xl">📦</span>} title="Exchange Process">
            <div className="flex justify-center">
              <BulletList items={[
                "Exchanges are subject to product availability",
                "Replacement products are shipped after return verification",
                "If the replacement item is unavailable, a refund will be issued",
              ]} />
            </div>
          </Section>

          {/* Pet Services */}
          <Section icon={<PawPrint className="h-6 w-6 text-black" />} title="Pet Services – Cancellation & Refund">
            <div className="flex justify-center">
              <BulletList items={[
                <>Service cancellations must be made at least <strong className="text-black">24 hours prior</strong></>,
                "Late cancellations or no-shows may not be eligible for refunds",
                "Refund eligibility varies by service type",
              ]} />
            </div>
          </Section>

          {/* Pawscription & Pawsurance */}
          <Section icon={<span className="text-2xl">📍</span>} title="Pawscription & 🛡️ Pawsurance">
            <h3 className="font-bold text-center mt-2 mb-4 text-lg">Pawscription Device</h3>
            <div className="flex justify-center">
              <BulletList items={[
                "Eligible for replacement in case of manufacturing defects",
                "Must be reported within the warranty period",
              ]} />
            </div>
            
            <h3 className="font-bold text-center mt-10 mb-4 text-lg">Pawsurance Insurance</h3>
            <div className="flex justify-center">
              <BulletList items={[
                "Policy cancellation and refunds are subject to insurer terms",
                "Claim-related refunds follow insurance policy guidelines",
              ]} />
            </div>
          </Section>

          <Separator />

          {/* Important Notes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              ❗ Important Notes
            </h2>
            <div className="flex justify-center">
              <BulletList items={[
                "Petoty reserves the right to reject returns that do not meet policy conditions",
                "Abuse of return/exchange policy may lead to account restrictions",
              ]} />
            </div>
          </div>

          <Separator />

          {/* Need Help */}
          <div className="text-center space-y-4 my-10">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-black" /> Need Help?
            </h2>
            <p className="text-[17px] font-medium text-gray-600">For return or exchange support:</p>
            <div className="space-y-2 text-[17px] font-medium text-black">
              <p>📧 help@petoty.com</p>
              <p>💬 Live Chat & In-App Support</p>
              <p>🕐 Mon–Sat, 9 AM – 8 PM</p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center space-y-3 pb-8 pt-6">
            <h2 className="text-[22px] font-bold flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-red-500 fill-red-500" /> Your Pet's Comfort Matters
            </h2>
            <p className="text-[17px] font-medium text-gray-700 max-w-xl mx-auto">
              We're committed to making your Petoty experience smooth, transparent, and worry-free.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
