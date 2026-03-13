"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";

export default function FeedbackPage() {
  const feedbackOptions = [
    {
      icon: "⭐",
      title: "Product Feedback",
      desc: "Share your experience with pet products purchased on Petoty.",
    },
    {
      icon: "🐶",
      title: "Service Feedback",
      desc: "Tell us about grooming, training, vet consultations, or any doorstep service.",
    },
    {
      icon: "📍",
      title: "Pawscription Feedback",
      desc: "Help us improve our smart pet tracking & health monitoring device.",
    },
    {
      icon: "🛡️",
      title: "Pawsurance Feedback",
      desc: "Share your experience with our pet insurance plans and claims process.",
    },
    {
      icon: "🏪",
      title: "Franchise Feedback",
      desc: "For Petoty franchise partners to share operational, support, or growth feedback.",
    },
    {
      icon: "🤝",
      title: "Seller & Partner Feedback",
      desc: "For sellers and service partners to share platform and payout experiences.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pb-20 font-sans mt-0">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold text-black mb-8 flex items-center justify-center gap-3">
            <span className="text-4xl filter grayscale">💬</span> Feedback
          </h1>
          <h2 className="text-2xl font-bold text-black mb-6">
            Your Voice Helps Us Improve
          </h2>
          <p className="text-[17px] text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium">
            At <span className="font-bold">Petoty</span>, we believe the best ideas come from our customers and partners. Your feedback helps us improve our products, services, and overall experience for you and your pets.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* What Would You Like to Share? */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[26px] font-bold text-center mb-6 flex items-center justify-center gap-2">
            <span className="text-3xl">🐾</span> What Would You Like to Share?
          </h2>
          <p className="text-[17px] text-center text-gray-800 font-medium mb-12">
            Please choose the option that best describes your feedback:
          </p>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto text-left">
            {feedbackOptions.map((opt, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-xl font-bold text-black flex items-center gap-2 mb-3">
                  <span className="text-2xl">{opt.icon}</span> {opt.title}
                </h3>
                <p className="text-[17px] text-gray-800 pl-8 leading-snug">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* How Your Feedback Is Used */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-[26px] font-bold mb-8 flex items-center justify-center gap-2 text-black">
            <span className="text-3xl">📝</span> How Your Feedback Is Used?
          </h2>

          <ul className="text-left inline-block space-y-4 mb-8">
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Improve product and service quality
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Enhance app and website experience
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Train service partners and franchises
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Identify new features and innovations
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Resolve issues faster and more effectively
            </li>
          </ul>

          <p className="text-[17px] text-black font-medium">
            Every response is reviewed by our dedicated team.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* Your Feedback Is Safe */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-[26px] font-bold mb-8 flex items-center justify-center gap-2 text-black">
            <span className="text-3xl">🔒</span> Your Feedback Is Safe
          </h2>

          <ul className="text-left inline-block space-y-4">
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Feedback can be shared anonymously
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Your personal data is never misused
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> We follow strict data privacy standards
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* Need a Response? */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-[26px] font-bold mb-8 flex items-center justify-center gap-2 text-black">
            <span className="text-3xl filter grayscale">📞</span> Need a Response?
          </h2>

          <p className="text-[17px] text-gray-900 font-medium mb-8">
            If your feedback requires a follow-up, please provide:
          </p>

          <ul className="text-left inline-block space-y-4 mb-10">
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Your registered email or mobile number
            </li>
            <li className="flex items-start gap-3 text-lg text-black font-medium">
              <span className="mt-1.5 font-bold">•</span> Order / Service / Device / Policy ID (if applicable)
            </li>
          </ul>

          <p className="text-[17px] text-gray-900 font-medium">
            Our team will reach out within <span className="font-bold">24–48 working hours.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* Thank You Section */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[26px] font-bold mb-6 flex items-center justify-center gap-2 text-black">
            ❤️ Thank You for Helping Us Grow
          </h2>
          <p className="text-[18px] text-gray-900 font-medium">
            Your insights help Petoty build a better, smarter, and more caring pet ecosystem.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
}
