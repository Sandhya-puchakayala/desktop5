"use client";

import { useState } from "react";
import LoginPopup from "@/components/LoginPopup";
export default function Vet() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    // MAIN WRAPPER
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-sans">

      {/* 3-COLUMN GRID CONTAINER */}
      {/* Change from lg:grid-cols-2 to lg:grid-cols-3 to create a 1:2 ratio on desktop.
          All elements are now positioned within a grid, giving the text column more space. */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

        {/* ======================================= */}
        {/* LEFT COLUMN: THE IMAGE (Now spans 1 grid column) */}
        {/* ======================================= */}
        {/* FIXED: Added 'lg:col-span-1' to define its grid spanning.
            Kept alignment consistent, left on desktop with lg:justify-start. */}
        <div className="w-full flex justify-center lg:justify-start lg:col-span-1">

          {/* ===================================== */}
          {/* === THE SIZE INCREMENT IS HERE === */}
          {/* ===================================== */}
          <img
            src="/images/image 62.png"
            alt="Smiling male veterinarian holding a small Yorkshire Terrier puppy"
            // THE FIX:
            // 1. We removed the previous tiny specific pixel constraints ('max-w-[160px]...', etc.).
            // 2. We are allowing the image to scale larger within its new 1/3rd grid column.
            // 3. Added 'w-full h-auto object-contain' to responsively fill the space.
            // 4. Still keep 'max-w-md' on desktop to prevent it from getting overly large on large monitors.
            className="w-full max-w-sm md:max-w-md h-auto object-contain mx-auto lg:mx-0 drop-shadow-sm"
          />
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: THE CONTENT (Now spans 2 grid columns) */}
        {/* ======================================= */}
        {/* FIXED: Added 'lg:col-span-2' to consume the remaining two grid columns.
            Content remains identical, but now has more horizontal breathing room. */}
        <div className="flex flex-col items-start w-full lg:col-span-2">

          {/* === THE PILL BADGE === */}
          <div className="inline-flex items-center gap-2 border border-[#8a1551] rounded-full px-4 py-1.5 mb-6">
            <span className="text-2xl leading-none">🐶</span>
            <span className="font-['Nunito',sans-serif] text-[#8a1551] text-xs font-bold tracking-widest uppercase mt-0.5">
              For Dogs & Puppies
            </span>
            <span className="text-lg leading-none">🐶</span>
          </div>
          <br />
          {/* === THE HEADER & SUBTEXT === */}
          <h2 className="font-['Roboto_Serif',serif] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-tight tracking-tight mb-4">
            Comprehensive Health Insurance for Dogs
          </h2>

          <p className="font-['Nunito',sans-serif] text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            From playful puppies to senior dogs, our insurance covers every stage of your dog's life with specialized care plans.
          </p>
          <br />
          {/* === THE 2x2 FEATURE GRID === */}
          {/* Stacks on mobile, splits into 2 columns on small screens and up */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

            {/* Feature 1 */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                1
              </div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">
                Emergency surgeries
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                2
              </div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">
                Prescription medications
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                3
              </div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">
                Accident coverage
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 md:p-4 bg-white hover:border-[#8a1551] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#4a0429] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                4
              </div>
              <span className="font-['Nunito',sans-serif] text-gray-900 font-medium text-sm md:text-base">
                Hereditary conditions
              </span>
            </div>

          </div>
          <br />
          {/* === THE SPECIAL PUPPY COVERAGE CARD === */}
          {/* Using a soft pink/beige background to make it pop like the mockup */}
          <div className="w-full bg-[#e8d7dc] border border-[#dcbabf] rounded-xl px-8 py-10 md:px-10 md:py-14 flex flex-col items-start shadow-sm relative z-10">

            {/* Increased bottom margin from mb-3 to mb-4 */}
            <h3 className="font-['Roboto_Serif',serif] text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Special Puppy Coverage
            </h3>

            {/* Increased bottom margin from mb-4 to mb-6 */}
            <p className="font-['Nunito',sans-serif] text-[17px] md:text-lg text-gray-800 leading-relaxed mb-6">
              Puppies under 6 months get additional coverage for developmental issues and early health screenings.
            </p>

            {/* Increased bottom margin from mb-6 to mb-8 */}
            <p className="font-['Roboto_Serif',serif] text-2xl md:text-[28px] font-bold text-[#5c0f33] mb-8">
              Starting at $15/month
            </p>

            {/* Gave the button a bit more vertical padding (py-4) so it looks less squished */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="px-6 py-6 text-md font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
              Dog Pawsurance Quote
            </button>
          </div>
        </div>

      </div>
      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
}
