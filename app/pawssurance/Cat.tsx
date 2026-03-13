"use client";

import { useState } from "react";
import LoginPopup from "@/components/LoginPopup";
export default function Cat() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    // MAIN WRAPPER
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-sans">

      {/* 3-COLUMN GRID CONTAINER */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

        {/* ======================================= */}
        {/* LEFT COLUMN: THE CONTENT (Spans 2 cols) */}
        {/* ======================================= */}
        {/* THE FIX: 'order-2 lg:order-1' makes the text sit BELOW the image on mobile, but on the LEFT on desktop. */}
        <div className="flex flex-col items-start w-full lg:col-span-2 order-2 lg:order-1">

          {/* === THE PILL BADGE === */}
          <div className="inline-flex items-center gap-2 border border-[#8a1551] rounded-full px-4 py-1.5 mb-6">
            <span className="text-lg leading-none">🐱</span>
            <span className="font-['Nunito',sans-serif] text-[#8a1551] text-xs font-bold tracking-widest uppercase mt-0.5">
              For Cats & Kittens
            </span>
            <span className="text-lg leading-none">🐱</span>
          </div>
          <br />
          {/* === THE HEADER & SUBTEXT === */}
          <h2 className="font-['Roboto_Serif',serif] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-tight tracking-tight mb-4">
            Specialized Health Insurance for Cats
          </h2>

          <p className="font-['Nunito',sans-serif] text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Cats have unique health needs. Our feline-focused insurance covers everything from routine care to complex treatments.
          </p>
          <br />
          {/* === THE 2x2 FEATURE GRID === */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">1</div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">Kidney disease treatment</span>
            </div>

            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">2</div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">Prescription medications</span>
            </div>

            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">3</div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">Accident coverage</span>
            </div>

            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">4</div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">Hereditary conditions</span>
            </div>

          </div>
          <br />
          {/* ======================================= */}
          {/* === THE SPECIAL KITTEN COVERAGE CARD === */}
          {/* ======================================= */}
          {/* Kept the massive padding (px-8 py-10 md:px-10 md:py-14) so it matches the height of the Dog section! */}
          <div className="w-full bg-[#e8d7dc] border border-[#dcbabf] rounded-xl px-8 py-10 md:px-10 md:py-14 flex flex-col items-start shadow-sm relative z-10">

            <h3 className="font-['Roboto_Serif',serif] text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Kitten Wellness Package
            </h3>

            <p className="font-['Nunito',sans-serif] text-[17px] md:text-lg text-gray-800 leading-relaxed mb-6">
              Kittens get comprehensive coverage including spay/neuter, vaccinations, and growth monitoring.
            </p>

            <p className="font-['Roboto_Serif',serif] text-2xl md:text-[28px] font-bold text-[#5c0f33] mb-8">
              Starting at $12/month
            </p>

            <button
              onClick={() => setIsLoginOpen(true)}
              className="px-6 py-6 text-md font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
              Cat Pawsurance Quote
            </button>
          </div>

        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: THE IMAGE (Spans 1 col)   */}
        {/* ======================================= */}
        {/* THE FIX: 'order-1 lg:order-2' makes the image sit on TOP on mobile, but on the RIGHT on desktop.
            Changed lg:justify-start to lg:justify-end to ensure it aligns nicely to the right edge. */}
        <div className="w-full flex justify-center lg:justify-end lg:col-span-1 order-1 lg:order-2">
          <img
            src="/images/image 63.png"
            alt="Smiling male veterinarian holding a tabby cat"
            className="w-full max-w-sm md:max-w-md h-auto object-contain mx-auto lg:mx-0 drop-shadow-sm"
          />
        </div>

      </div>
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
}
