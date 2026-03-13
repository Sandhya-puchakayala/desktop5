"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";

const helpCategories = [
  {
    icon: "🛒",
    title: "Orders & Shopping",
    links: [
      "How to place an order on Petoty",
      "Track your order status",
      "Modify or cancel an order",
      "Delivery timelines & locations",
      "Payment options & issues",
    ],
  },
  {
    icon: "🔄",
    title: "Returns, Refunds & Cancellations",
    links: [
      "Eligibility for returns",
      "How to request a return or refund",
      "Refund processing timelines",
      "Cancelled or failed orders",
      "Damaged or incorrect product received",
    ],
  },
  {
    icon: "🐶",
    title: "Pet Services",
    links: [
      "Booking grooming, spa & training services",
      "Rescheduling or cancelling a service",
      "What to expect during a doorstep service",
      "Service coverage areas",
      "Service provider verification",
    ],
  },
  {
    icon: "📍",
    title: "Pawscription – Smart Pet Tracking",
    links: [
      "How Pawscription works",
      "Device setup & activation",
      "Live GPS tracking & health insights",
      "Battery charging & maintenance",
      "App connectivity & troubleshooting",
    ],
  },
  {
    icon: "🛡️",
    title: "Pawsurance – Pet Insurance",
    links: [
      "What is covered under Pawsurance",
      "How to choose the right plan",
      "Claim process & required documents",
      "Policy renewal & cancellation",
      "Claim settlement timelines",
    ],
  },
  {
    icon: "👤",
    title: "Account & Profile",
    links: [
      "Creating a Petoty account",
      "Updating profile information",
      "Resetting password",
      "Managing multiple pets",
      "Deleting or deactivating your account",
    ],
  },
  {
    icon: "💳",
    title: "Payments & Billing",
    links: [
      "Accepted payment methods",
      "Payment failures & retries",
      "Invoice & billing details",
      "Subscription charges (Pawscription & Pawsurance)",
      "Refund status tracking",
    ],
  },
  {
    icon: "🤝",
    title: "Sellers & Service Partners",
    links: [
      "How to become a Petoty seller",
      "Seller onboarding process",
      "Managing products & inventory",
      "Service partner registration",
      "Payout cycles & reports",
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pb-20 font-sans mt-0">

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold text-black mb-6 flex items-center justify-center gap-3">
            <span className="text-4xl filter grayscale">🐾</span> Petoty Help Centre
          </h1>
          <p className="text-lg text-black font-medium mb-4">
            Welcome to the Petoty Help Centre.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            We’re here to make your pet parenting journey smooth, safe, and stress-free. Find answers to common questions, guides, and support options below.
          </p>
        </div>

        {/* Divider & Search Title */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-200 mb-10" />
          <h2 className="text-2xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <span className="text-3xl">🔎</span> How can we help you?
          </h2>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

            {/* Grouping into pairs to add a divider line between rows */}
            {Array.from({ length: Math.ceil(helpCategories.length / 2) }).map((_, rowIndex) => {
              const item1 = helpCategories[rowIndex * 2];
              const item2 = helpCategories[rowIndex * 2 + 1];

              return (
                <div key={rowIndex} className="col-span-1 md:col-span-2 contents">

                  {/* Item 1 (Left Col) */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-black">
                      <span className="text-2xl">{item1.icon}</span> {item1.title}
                    </h3>
                    <ul className="space-y-4 pl-4">
                      {item1.links.map((link, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#3b82f6] mt-1.5">•</span>
                          <Link href="#" className="text-[#3b82f6] text-[17px] font-medium hover:underline leading-snug">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Item 2 (Right Col) */}
                  {item2 && (
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-black">
                        <span className="text-2xl">{item2.icon}</span> {item2.title}
                      </h3>
                      <ul className="space-y-4 pl-4">
                        {item2.links.map((link, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#3b82f6] mt-1.5">•</span>
                            <Link href="#" className="text-[#3b82f6] text-[17px] font-medium hover:underline leading-snug">
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Row Divider - render after each row except the last one of the grid */}
                  {rowIndex < Math.ceil(helpCategories.length / 2) - 1 && (
                    <div className="col-span-1 md:col-span-2 py-4">
                      <hr className="border-t border-gray-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <hr className="border-t border-gray-200 mt-16 mb-12" />

          {/* Petoty Franchise Model Section */}
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
                <span className="text-3xl">🏪</span> Petoty Franchise Model
              </h3>
              <p className="text-lg text-black font-medium">
                Interested in owning a Petoty Franchise? Here’s everything you need to know.
              </p>
            </div>

            {/* About Franchise */}
            <div className="flex flex-col items-center">
              <h4 className="text-[22px] font-bold mb-6 flex items-center gap-2 text-black">
                <span className="text-2xl">📌</span> About Petoty Franchise
              </h4>
              <div className="w-full text-center">
                <p className="text-[17px] text-black mb-6">
                  Petoty Franchise partners operate <span className="font-bold">Petoty Experience Centres</span>, offering:
                </p>
                <ul className="text-left inline-block space-y-3">
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Pet products & accessories
                  </li>
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Grooming & doorstep services coordination
                  </li>
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Pawscription device sales & support
                  </li>
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Pawsurance insurance assistance
                  </li>
                </ul>
              </div>
            </div>

            {/* Franchise Eligibility */}
            <div className="flex flex-col items-center mt-2">
              <h4 className="text-[22px] font-bold mb-6 flex items-center gap-2 text-black">
                <span className="text-2xl">🧾</span> Franchise Eligibility
              </h4>
              <div className="w-full text-center">
                <ul className="text-left inline-block space-y-3">
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Passion for pets & entrepreneurship
                  </li>
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Commitment to providing excellent customer service
                  </li>
                  <li className="flex items-start gap-3 text-[17px] text-gray-800 font-medium">
                    <span className="text-black mt-1.5">•</span> Minimum area requirement of 500 sq ft.
                  </li>
                </ul>
              </div>
            </div>

            {/* Franchise Onboarding Process */}
            <div className="flex flex-col items-center mt-10">
              <h4 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
                <span className="text-2xl">📝</span> Franchise Onboarding Process
              </h4>

              <ul className="text-left inline-block space-y-4">
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Submit franchise inquiry form
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Initial discussion & city feasibility check
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Document verification & agreement
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Training & operational setup
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Franchise launch & go-live
                </li>
              </ul>
            </div>

            <hr className="border-t border-gray-200 my-10" />

            {/* Investment & Revenue */}
            <div className="flex flex-col items-center">
              <h4 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
                <span className="text-2xl">💰</span> Investment & Revenue
              </h4>

              <ul className="text-left inline-block space-y-4">
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Franchise investment varies by location and format
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Multiple revenue streams:
                </li>

                <ul className="ml-6 space-y-3">
                  <li className="text-lg text-gray-800">• Product sales</li>
                  <li className="text-lg text-gray-800">• Service commissions</li>
                  <li className="text-lg text-gray-800">• Pawscription device sales</li>
                  <li className="text-lg text-gray-800">• Pawsurance policy commissions</li>
                </ul>
              </ul>

              <p className="text-gray-700 text-lg mt-4">
                (Exact commercial details are shared during onboarding)
              </p>
            </div>

            <hr className="border-t border-gray-200 my-10" />

            {/* Franchise Support */}
            <div className="flex flex-col items-center">
              <h4 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
                <span className="text-2xl">📊</span> Franchise Support from Petoty
              </h4>

              <ul className="text-left inline-block space-y-4">
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Brand & marketing support
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Technology platform access
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Training for staff & operations
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Centralized customer support
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-800 font-medium">
                  <span className="mt-1.5">•</span> Supply chain & vendor assistance
                </li>
              </ul>
            </div>

            <hr className="border-t border-gray-200 my-10" />

            {/* Help Section */}
            <div className="text-center">
              <h4 className="text-[26px] font-bold mb-6">📞 Still need help?</h4>

              <p className="text-lg text-gray-800 mb-6">
                We’re always here for you.
              </p>

              <div className="space-y-3 text-lg">
                <p>📧 Email: help@petoty.com</p>
                <p>📱 In-App Support: Available 24/7</p>
                <p>💬 Live Chat: Mon–Sat, 9 AM – 8 PM</p>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-10" />

            {/* Closing Section */}
            <div className="text-center">
              <h4 className="text-[26px] font-bold mb-4">
                ❤️ Built for Pet Parents, Partners & Entrepreneurs
              </h4>

              <p className="text-lg text-gray-800 mb-3">
                Petoty is more than a platform — it’s a growing pet care ecosystem.
              </p>

              <p className="text-lg text-gray-800">
                Thank you for being part of our journey.
              </p>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
