export default function PawsuranceQuote() {
  return (
    // MAIN WRAPPER
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-sans flex justify-center items-center">
      
      {/* 2-COLUMN GRID CONTAINER */}
      {/* Stacks vertically on mobile (grid-cols-1), side-by-side on computers (md:grid-cols-2) */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ======================================= */}
        {/* LEFT COLUMN: THE ILLUSTRATION           */}
        {/* ======================================= */}
        <div className="flex justify-center md:justify-end w-full">
          {/* Replace this src with your actual illustration file */}
          <img 
            src="/images/pawsurance.png" 
            alt="Family with dog and cat" 
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: TEXT & FORM               */}
        {/* ======================================= */}
        <div className="flex flex-col w-full max-w-lg mx-auto md:mx-0">
          
          {/* The Description Paragraph */}
          <p className="font-['Nunito',sans-serif] text-[18px] md:text-[20px] text-gray-700 leading-relaxed mb-10">
            Pawsurance gives you peace of mind with coverage for accidents, vet 
            visits, diagnostics, and wellness add-ons — all managed in one place.
          </p>

          {/* The Form Area */}
          <div className="w-full flex flex-col">
            
            {/* Input Label */}
            <label className="font-['Nunito',sans-serif] text-gray-800 text-lg mb-3">
              Enter Pet's Name
            </label>
            
            {/* Input & Button Wrapper */}
            {/* flex-col on mobile so they stack, sm:flex-row so they sit side-by-side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 relative w-full">
              
              {/* The Input Field */}
              <input 
                type="text" 
                placeholder="Your Pet's Name" 
                className="flex-grow border border-gray-300 rounded-lg p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#4a0429] focus:ring-1 focus:ring-[#4a0429] transition-colors"
              />

              {/* The Button & Floating Doodle Wrapper */}
              <div className="relative flex-shrink-0">
                
                {/* The "TAP HERE" floating doodle */}
                {/* Positioned absolute so it hovers right above the button. 
                    pointer-events-none ensures it doesn't block the user from clicking the button! */}
                <img 
                  src="/images/tap-here.png" 
                  alt="Tap Here" 
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-auto object-contain pointer-events-none z-10 hidden sm:block"
                />
<br/>
                {/* The Submit Button */}
                <button 
                  type="button" 
                  className="w-full sm:w-auto bg-[#4a0429] text-white font-['Nunito',sans-serif] font-medium text-lg px-8 py-4 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Get a Quote
                </button>
                
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
