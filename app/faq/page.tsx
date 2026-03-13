"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      icon: "🐾",
      questions: [
        {
          q: "Q1. What is Petoty?",
          a: (
            <>
              Petoty is an all-in-one pet care platform offering pet products, doorstep services, smart pet tracking (<strong>Pawscription</strong>), and pet insurance (<strong>Pawsurance</strong>).
            </>
          ),
        },
        {
          q: "Q2. Which pets does Petoty support?",
          a: (
            <>
              We currently support <strong>dogs, cats, birds, and aquarium pets.</strong>
            </>
          ),
        },
        {
          q: "Q3. Is Petoty available across India?",
          a: "Yes. Products are delivered pan-India. Services are available in selected cities and expanding rapidly.",
        },
      ],
    },

    {
      category: "Orders & Shopping",
      icon: "🛒",
      questions: [
        {
          q: "Q4. How do I place an order on Petoty?",
          a: "Browse products, add items to your cart, and complete checkout using your preferred payment method.",
        },
        {
          q: "Q5. How can I track my order?",
          a: (
            <>
              Go to <strong>My Orders → Track Order</strong> to view real-time delivery status.
            </>
          ),
        },
        {
          q: "Q6. Can I cancel or modify my order?",
          a: "Orders can be cancelled before dispatch. Once shipped, cancellation may not be possible.",
        },
      ],
    },

    {
      category: "Returns & Refunds",
      icon: "🔁",
      questions: [
        {
          q: "Q7. What is Petoty’s return policy?",
          a: "Returns are accepted for eligible products within the specified return window.",
        },
        {
          q: "Q8. How long does it take to receive a refund?",
          a: "Refunds are processed within 5–7 working days after approval.",
        },
      ],
    },

    {
      category: "Pet Services",
      icon: "🐶",
      questions: [
        {
          q: "Q9. What pet services does Petoty offer?",
          a: "Grooming, spa, training, walking, vet consultations, vaccinations, and behaviour support.",
        },
        {
          q: "Q10. Are service professionals verified?",
          a: "Yes. All service partners are background-verified and trained by Petoty.",
        },
        {
          q: "Q11. Can I reschedule a booked service?",
          a: "Yes. Services can be rescheduled from the app or website based on availability.",
        },
      ],
    },

    {
      category: "Pawscription – Smart Pet Tracking",
      icon: "📍",
      questions: [
        {
          q: "Q12. What is Pawscription?",
          a: "Pawscription is a smart pet tracking and health monitoring device by Petoty.",
        },
        {
          q: "Q13. Does Pawscription offer real-time tracking?",
          a: "Yes. It provides live GPS tracking along with activity and health insights.",
        },
        {
          q: "Q14. How do I set up my Pawscription device?",
          a: "Follow the step-by-step setup guide in the Petoty app.",
        },
      ],
    },

    {
      category: "Pawsurance – Pet Insurance",
      icon: "🛡️",
      questions: [
        {
          q: "Q15. What is Pawsurance?",
          a: "Pawsurance is Petoty’s pet insurance solution for dogs and cats.",
        },
        {
          q: "Q16. What does Pawsurance cover?",
          a: "Coverage includes medical treatments, hospitalisation, surgeries, and emergencies (as per plan).",
        },
        {
          q: "Q17. How do I raise an insurance claim?",
          a: "Submit a claim via the app or website with required documents.",
        },
      ],
    },

    {
      category: "Payments & Billing",
      icon: "💳",
      questions: [
        {
          q: "Q18. What payment methods are accepted?",
          a: "We accept UPI, credit/debit cards, net banking, and wallets.",
        },
        {
          q: "Q19. What if my payment fails?",
          a: "You can retry the payment or choose a different method. Failed payments are not charged.",
        },
      ],
    },

    {
      category: "Account & Profile",
      icon: "👤",
      questions: [
        {
          q: "Q20. How do I create a Petoty account?",
          a: "Sign up using your mobile number or email ID on the website or app.",
        },
        {
          q: "Q21. Can I manage multiple pets in one account?",
          a: "Yes. You can add and manage multiple pet profiles.",
        },
      ],
    },

    {
      category: "Sellers & Partners",
      icon: "🤝",
      questions: [
        {
          q: "Q22. How can I sell products on Petoty?",
          a: "Register as a seller through the Petoty Seller Portal and complete onboarding.",
        },
        {
          q: "Q23. How are seller payouts processed?",
          a: "Payouts are processed as per the agreed settlement cycle.",
        },
      ],
    },

    {
      category: "Franchise Model",
      icon: "🏪",
      questions: [
        {
          q: "Q24. What is the Petoty Franchise Model?",
          a: "Petoty Franchise allows entrepreneurs to operate Petoty Experience Centres in their city.",
        },
        {
          q: "Q25. What does a Petoty franchise offer?",
          a: "Product sales, pet services coordination, Pawscription device sales, and Pawsurance support.",
        },
        {
          q: "Q26. Does Petoty provide franchise training and support?",
          a: "Yes. We provide full training, technology access, marketing, and operational support.",
        },
        {
          q: "Q27. How do I apply for a Petoty franchise?",
          a: "Submit the franchise inquiry form on our website. Our team will contact you.",
        },
      ],
    },


    {
      category: "Support & Assistance",
      icon: "📞",
      questions: [
        {
          q: "Q28. How can I contact Petoty support?",
          a: "You can reach us via email, live chat, or in-app support.",
        },
        {
          q: "Q29. What are your support hours?",
          a: "Customer support is available Monday to Saturday, 9 AM – 8 PM.",
        },
      ],
    },
  ];
  {/* Still Have Questions */ }
  <div className="max-w-4xl mx-auto px-6 pt-10 pb-20 text-center">

    <hr className="border-t border-gray-300 mb-12" />

    <h2 className="text-[28px] font-bold mb-6 flex items-center justify-center gap-2">
      ❤️ Still Have Questions?
    </h2>

    <p className="text-[18px] text-gray-800 leading-relaxed mb-8">
      If you didn’t find what you’re looking for, our support team is always happy to help.
    </p>

    <div className="space-y-4 text-[18px] font-medium text-gray-900">
      <p>📧 help@petoty.com</p>
      <p>💬 Live Chat & In-App Support</p>
    </div>

  </div>


  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pb-20 font-sans mt-0">

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold text-black mb-6">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-[19px] text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium">
            Find quick answers to the most common questions about Petoty, our products, services, and partner programs.
          </p>
        </div>

        {/* Global Top Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-t border-gray-300" />
        </div>

        {/* FAQ Sections */}
        <div className="max-w-5xl mx-auto px-6">
          {faqs.map((section, idx) => (
            <div key={idx} className="py-12 flex flex-col items-center text-center">

              <h2 className="text-[26px] font-bold mb-10 flex items-center justify-center gap-2 text-black">
                <span className="text-3xl filter grayscale">{section.icon}</span>{" "}
                {section.category}
              </h2>

              <div className="space-y-10 w-full flex flex-col items-center">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="w-full max-w-4xl">
                    <h3 className="text-[22px] font-bold text-black mb-4">
                      {item.q}
                    </h3>
                    <p className="text-[19px] text-gray-800 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>

              {idx < faqs.length - 1 && (
                <div className="w-full max-w-4xl mt-14">
                  <hr className="border-t border-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
