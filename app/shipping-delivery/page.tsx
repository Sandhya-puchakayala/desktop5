"use client";

import React from "react";
import { Truck, Clock, DollarSign, MapPin, Package, PawPrint, AlertTriangle, PackageX, RotateCcw, HelpCircle, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        {icon} {title}
      </h2>
      {children}
    </CardContent>
  </Card>
);

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul className="space-y-2 list-disc list-inside text-gray-700">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default function ShippingDeliveryPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 space-y-8">
          
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-[34px] lg:text-[40px] font-bold">🚚 Shipping & Delivery</h1>
            <p className="text-xl font-semibold">Reliable, Fast & Pet-Friendly Delivery</p>
            <p className="text-[17px] text-gray-600 font-medium">
              At Petoty, we ensure your pet's essentials reach you safely and on time. Below are the details of our shipping and delivery process.
            </p>
          </div>

          <Separator />

          {/* Shipping Coverage */}
          <Section icon={<span className="text-2xl">📦</span>} title="Shipping Coverage">
            <BulletList items={[
              "We deliver products across India",
              "Service availability may vary by location",
              "Delivery timelines depend on product type, location, and courier partner",
            ]} />
          </Section>

          {/* Delivery Timelines */}
          <Section icon={<Clock className="h-6 w-6 text-black" />} title="Delivery Timelines">
            <h3 className="font-semibold text-center mb-4">Standard Delivery</h3>
            <div className="flex justify-center">
              <BulletList items={[
                <><strong className="text-black">Metro Cities:</strong> 2–5 business days</>,
                <><strong className="text-black">Non-Metro Cities:</strong> 4–7 business days</>,
                <><strong className="text-black">Remote Areas:</strong> 5–10 business days</>,
              ]} />
            </div>
            <p className="text-sm text-gray-500 font-medium mt-4 text-center">
              Delivery timelines are indicative and may vary due to unforeseen circumstances.
            </p>
          </Section>

          {/* Shipping Charges */}
          <Section icon={<DollarSign className="h-6 w-6 text-black" />} title="Shipping Charges">
            <BulletList items={[
              "Shipping charges (if applicable) are displayed at checkout",
              "Free shipping may be available on select products, orders, or promotions",
              "Heavy or oversized items may attract additional charges",
            ]} />
          </Section>

          {/* Order Tracking */}
          <Section icon={<MapPin className="h-6 w-6 text-black" />} title="Order Tracking">
            <p className="text-center text-gray-600 font-medium mb-4">Once your order is shipped:</p>
            <div className="flex justify-center">
              <BulletList items={[
                "You will receive a tracking link via SMS/email",
                <>Track your order under <strong className="text-black">My Orders → Track Order</strong></>,
                "Courier partner details are shared post-dispatch",
              ]} />
            </div>
          </Section>

          {/* Order Processing */}
          <Section icon={<Package className="h-6 w-6 text-black" />} title="Order Processing">
            <BulletList items={[
              <><strong className="text-black">Orders are processed within 24–48 working hours</strong></>,
              "Orders placed on weekends or public holidays are processed on the next working day",
              "Address changes are not possible once an order is dispatched",
            ]} />
          </Section>

          {/* Delivery of Pet Services */}
          <Card className="border border-gray-200 mt-8 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <PawPrint className="h-6 w-6 text-black" /> Delivery of Pet Services
              </h2>
              <div className="flex justify-center">
                <BulletList items={[
                  "Doorstep pet services are delivered as per scheduled date & time",
                  "Service availability depends on location and partner availability",
                  <>Any changes must be requested at least <strong className="text-black">24 hours prior</strong> to the service</>,
                ]} />
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Delivery Issues */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              ❌ Delivery Issues
            </h2>

            <div className="space-y-4">
              <h3 className="font-bold text-center text-lg">Delayed Delivery</h3>
              <p className="text-center text-gray-600 font-medium">Delays may occur due to:</p>
              <div className="flex justify-center">
                <BulletList items={[
                  "Weather conditions",
                  "Courier partner issues",
                  "Incorrect address or contact details",
                ]} />
              </div>
              <p className="text-[15px] font-medium text-gray-500 text-center mt-3">
                Our support team will assist in resolving delays.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="font-bold text-center text-lg">Failed Delivery</h3>
              <p className="text-center text-gray-600 font-medium">If delivery fails due to:</p>
              <div className="flex justify-center">
                <BulletList items={[
                  "Unavailability of recipient",
                  "Incorrect address",
                  "Refusal to accept order",
                ]} />
              </div>
              <p className="text-[15px] font-medium text-gray-500 text-center mt-3">
                Re-attempts or return-to-origin may be initiated.
              </p>
            </div>
          </div>

          <Separator />

          {/* Damaged or Missing Items */}
          <Section icon={<span className="text-2xl text-black">📦</span>} title="Damaged or Missing Items">
            <p className="text-center text-gray-600 font-medium mb-4">If you receive:</p>
            <div className="flex justify-center">
              <BulletList items={[
                <strong className="text-black">A damaged product</strong>,
                <strong className="text-black">An incorrect item</strong>,
                <strong className="text-black">Missing items</strong>,
              ]} />
            </div>
            <p className="text-[15px] font-medium text-gray-500 text-center mt-6">
              Please report within <strong className="text-black">48 hours</strong> of delivery via <strong className="text-black">Help Centre → Raise a Ticket</strong>, along with photos or videos.
            </p>
          </Section>

          {/* Returns & Refunds */}
          <Card className="border-none shadow-none bg-gray-50 rounded-2xl p-6 my-8">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold flex items-center justify-center gap-2">
                🔄 Returns & Refunds
              </h2>
              <p className="text-[17px] font-medium text-gray-700">
                Shipping-related returns and refunds are governed by our <strong className="underline cursor-pointer text-black">Refund & Cancellation Policy</strong>.
              </p>
              <p className="text-[17px] font-medium text-gray-700">
                Approved refunds are processed within <strong className="text-black">5–7 working days</strong>.
              </p>
            </div>
          </Card>

          {/* Need Help */}
          <div className="text-center space-y-4 my-10">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-black" /> Need Help with Delivery?
            </h2>
            <p className="text-[17px] font-medium text-gray-600">Our support team is here to help:</p>
            <div className="space-y-2 text-[17px] font-medium text-black">
              <p>📧 help@petoty.com</p>
              <p>💬 Live Chat & In-App Support</p>
              <p>🕐 Mon–Sat, 9 AM – 8 PM</p>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center space-y-3 pb-8 pt-6">
            <h2 className="text-[22px] font-bold flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-red-500 fill-red-500" /> Delivering Care, Right to Your Doorstep
            </h2>
            <p className="text-[17px] font-medium text-gray-700 max-w-xl mx-auto">
              Petoty is committed to providing a smooth and reliable delivery experience for you and your pets.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
