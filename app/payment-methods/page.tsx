"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PaymentMethodsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pb-20 font-sans mt-0">

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          {/* <h1 className="text-3xl lg:text-[40px] font-bold text-black mb-12 flex items-center justify-center gap-3"> */}
          <h1 className="text-[34px] lg:text-[46px] font-bold text-black mb-14 flex items-center justify-center gap-3">
            <span className="text-4xl filter grayscale">💳</span> Payment Methods
          </h1>
          <h2 className="text-[32px] font-bold text-black mb-6">
            Safe, Simple &amp; Secure Payments with Petoty
          </h2>
          <p className="text-[21px] text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium">
            At <span className="font-bold text-black">Petoty</span>, we offer multiple secure payment options to make your shopping and service booking experience smooth and hassle-free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <hr className="border-t border-gray-300 mb-12" />
        </div>

        {/* Categories / Methods */}
        <div className="max-w-3xl mx-auto px-6">

          {/* <h2 className="text-[28px] font-bold text-center mb-6 flex items-center justify-center gap-2 text-black"> */}
          <h2 className="text-[32px] font-bold text-center mb-10 flex items-center justify-center gap-2 text-black">
            <span className="text-3xl">✅</span> Accepted Payment Methods
          </h2>

          {/* 1. UPI */}
          <div className="flex flex-col items-center text-center mt-10">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">📱</span> UPI
            </h3>
            <p className="text-[19px] text-gray-800 font-medium mb-6">
              Pay easily using:
            </p>

            <ul className="text-left inline-block space-y-4 mb-6">
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Google Pay
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> PhonePe
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Paytm
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> BHIM UPI
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Any UPI-enabled banking app
              </li>
            </ul>

            <p className="text-[19px] text-gray-800 font-medium mt-4">
              Fast, secure, and widely accepted across India.
            </p>
          </div>

          <hr className="border-t border-gray-200 my-16" />

          {/* 2. Credit & Debit Cards */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">💳</span> Credit &amp; Debit Cards
            </h3>
            <p className="text-[19px] text-gray-800 font-medium mb-6">
              We accept all major cards:
            </p>

            <ul className="text-left inline-block space-y-4 mb-6">
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Visa
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> MasterCard
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> RuPay
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Maestro
              </li>
            </ul>

            <p className="text-[19px] text-gray-800 font-medium mt-4">
              Both domestic and international cards are supported (as per bank approval).
            </p>
          </div>

          <hr className="border-t border-gray-200 my-16" />

          {/* 3. Net Banking */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">🏦</span> Net Banking
            </h3>
            <p className="text-[19px] text-gray-800 font-medium">
              Pay directly through your bank account using trusted Indian banks.
            </p>
          </div>

          <hr className="border-t border-gray-200 my-16" />

          {/* 4. Wallets */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">👛</span> Wallets
            </h3>
            <p className="text-[19px] text-gray-800 font-medium mb-6">
              Use popular digital wallets for quick checkout:
            </p>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Paytm
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> PhonePe Wallet
              </li>
              <li className="flex items-center gap-3 text-xl text-black font-bold">
                <span className="text-black text-xs">●</span> Amazon Pay (if enabled)
              </li>
            </ul>
          </div>

          <hr className="border-t border-gray-200 my-16" />

          {/* 5. Subscription Payments */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">🔄</span> Subscription Payments
            </h3>
            <p className="text-[19px] text-gray-800 font-medium mb-6 text-black">
              <span className="font-bold">For Pawscription and Pawsurance:</span>
            </p>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span> Auto-debit enabled for uninterrupted service
              </li>
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span> Secure recurring billing
              </li>
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span> Easy subscription management from your account
              </li>
            </ul>
          </div>

          <hr className="border-t border-gray-200 my-16" />

          {/* 6. Franchise & Partner Payments */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[24px] font-bold mb-6 flex items-center gap-2 text-black">
              <span className="text-2xl filter grayscale">🏪</span> Franchise &amp; Partner Payments
            </h3>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span> Online bank transfer
              </li>
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span> Secure invoicing
              </li>
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium flex-col md:flex-row">
                <div className="flex gap-4">
                  <span className="text-black text-[10px] mt-2">●</span>
                  <span>Transparent payment cycles<br className="md:hidden" /> <span className="text-gray-600 block md:inline md:mt-0 mt-1">(Applicable for franchise onboarding and partner settlements)</span></span>
                </div>
              </li>
            </ul>
          </div>
          <hr className="border-t border-gray-300 my-16" />

          {/* Payment Security */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[28px] font-bold text-black mb-8 flex items-center gap-2">
              <span className="text-3xl">🔒</span> Payment Security
            </h2>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                100% secure and encrypted transactions
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                PCI-DSS compliant payment gateways
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Two-factor authentication (OTP / 3D Secure)
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                No card details stored without consent
              </li>
            </ul>

            <p className="text-[19px] text-gray-800 font-medium mt-8">
              Your financial safety is our priority.
            </p>
          </div>

          <hr className="border-t border-gray-300 my-16" />

          {/* Payment Failures & Refunds */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[28px] font-bold text-black mb-8 flex items-center gap-2">
              <span className="text-3xl text-red-600">❌</span> Payment Failures & Refunds
            </h2>

            <p className="text-[22px] font-bold mb-6">What if my payment fails?</p>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                No amount is deducted in most cases
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                If deducted, it is automatically refunded within 3–5 working days
              </li>
            </ul>
          </div>

          <hr className="border-t border-gray-300 my-16" />

          {/* Refund Process */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[26px] font-bold text-black mb-6">
              How are refunds processed?
            </h2>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Refunds are credited to the original payment method
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Refund timelines may vary based on banks or payment providers
              </li>
            </ul>
          </div>

          <hr className="border-t border-gray-300 my-16" />

          {/* Invoices & Billing */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[28px] font-bold text-black mb-8 flex items-center gap-2">
              <span className="text-3xl">📄</span> Invoices & Billing
            </h2>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Download invoices from My Orders
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                GST invoices available for eligible orders
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Billing details can be updated before checkout
              </li>
            </ul>
          </div>

          <hr className="border-t border-gray-300 my-16" />

          {/* Help Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[28px] font-bold text-black mb-8 flex items-center gap-2">
              <span className="text-red-600 text-3xl">❓</span> Need Help with Payments?
            </h2>

            <p className="text-[19px] text-gray-800 font-medium mb-6">
              If you face any issues during payment:
            </p>

            <ul className="text-left inline-block space-y-4">
              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Check your bank or UPI app status
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Retry with a different payment method
              </li>

              <li className="flex items-start gap-4 text-[19px] text-gray-800 font-medium">
                <span className="text-black text-[10px] mt-2">●</span>
                Contact our support team
              </li>
            </ul>

            <p className="mt-6 text-[19px] font-medium">📧 help@petoty.com</p>
            <p className="text-[19px] font-medium mt-2">💬 Live Chat & In-App Support</p>
          </div>

          <hr className="border-t border-gray-300 my-16" />

          {/* Transparent Payments */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold text-black mb-6">
              ❤️ Transparent Payments You Can Trust
            </h2>

            <p className="text-[19px] text-gray-800 font-medium leading-relaxed">
              Petoty is committed to providing a smooth, transparent, and secure
              payment experience for pet parents, partners, and franchise owners.
            </p>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}
