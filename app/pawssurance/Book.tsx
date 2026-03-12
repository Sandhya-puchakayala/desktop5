export default function Book() {
  return (
    // MAIN WRAPPER
    <section className="w-full bg-[#fcfaf9] flex flex-col items-center pb-16 md:pb-24">
      
      {/* ======================================= */}
      {/* 1. THE TOP BACKGROUND IMAGE BLOCK       */}
      {/* ======================================= */}
      {/* Set explicit heights: 400px, 500px, 600px */}
      <div className="w-full max-w-6xl px-4 flex justify-center">
        
        <img
          src="/images/Family-child.png"
          alt="Family with child and pets"
          className="w-full h-auto object-contain"
        />
        
      </div>
      {/* ======================================= */}
      {/* 2. THE FOREGROUND CARD CONTAINER        */}
      {/* ======================================= */}
      {/* THE FIX: We make the negative margin EXACTLY HALF of the image heights above! 
          400/2 = 200, 500/2 = 250, 600/2 = 300. This guarantees a perfect 50% overlap on all screens. */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 -mt-[200px] md:-mt-[250px] lg:-mt-[300px]">
        
        {/* THE WHITE CARD */}
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-14 lg:p-16 flex flex-col items-center text-center border border-gray-100">
          
          {/* === HEADLINES === */}
          <h2 className="font-['Roboto_Serif',serif] text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Ready to Protect Your Pet?
          </h2>
          
          <p className="font-['Nunito',sans-serif] text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of pet parents who trust Pawsurance to keep their furry family members healthy and happy.
          </p>
<br/>
          {/* === STATS GRID === */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            
            {/* Stat Box 1 */}
            <div className="bg-[#eedddf] rounded-lg py-8 px-4 flex flex-col items-center justify-center">
              <span className="font-['Nunito',sans-serif] text-3xl md:text-[32px] font-bold text-gray-900 mb-1">50K+</span>
              <span className="font-['Nunito',sans-serif] text-sm text-gray-800">Happy Pet Parents</span>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-[#eedddf] rounded-lg py-8 px-4 flex flex-col items-center justify-center">
              <span className="font-['Nunito',sans-serif] text-3xl md:text-[32px] font-bold text-gray-900 mb-1">$2M+</span>
              <span className="font-['Nunito',sans-serif] text-sm text-gray-800">Claims Paid</span>
            </div>

            {/* Stat Box 3 */}
            <div className="bg-[#eedddf] rounded-lg py-8 px-4 flex flex-col items-center justify-center">
              <span className="font-['Nunito',sans-serif] text-3xl md:text-[32px] font-bold text-gray-900 mb-1">4.9 ★</span>
              <span className="font-['Nunito',sans-serif] text-sm text-gray-800">Customer Rating</span>
            </div>

          </div>
<br/>
          {/* === BUTTONS === */}
          {/* THE FIX: Added min-w-[220px] and w-full sm:w-auto to force the buttons to stay wide and never squish */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full mb-8">
            
            <button className="px-12 py-6 text-lg font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
                Get A Quote
            </button>
           <button className="px-12 py-6 text-2xl bg-white border border-[#4a0429] text-[#4a0429] font-['Nunito',sans-serif] rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
                Call Us
            </button>

          </div>
<br/>
          {/* === FOOTER NOTE === */}
          <p className="font-['Nunito',sans-serif] text-sm text-gray-400">
            Get your personalized quote in under 2 minutes. No commitment required.
          </p>

        </div>
      </div>

    </section>
  );
}
