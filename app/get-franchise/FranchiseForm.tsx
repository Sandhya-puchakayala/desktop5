export default function FranchiseForm() {
  return (
    // MAIN SECTION WRAPPER
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-sans flex justify-center">
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: THE FORM                      */}
        {/* ========================================= */}
        <div className="bg-[#fdf8f8] border border-pink-100 p-8 md:p-12 rounded-2xl relative shadow-sm flex flex-col items-start text-left">
          
          <svg className="absolute top-8 right-8 w-12 h-12 text-[#f5e8e8] rotate-12 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm5.5 2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm5.5 14.5c4 0 7-3.5 7-7.5 0-3-4.5-5.5-7-5.5s-7 2.5-7 5.5c0 4 3 7.5 7 7.5z"/>
          </svg>

          {/* === HEADER & PARAGRAPH === */}
          <div className="relative z-10 w-full">
            <h2 className="font-['Roboto_Serif',serif] font-bold text-[30px] leading-[46px] tracking-normal text-[#0f172a]">
              WELCOME TO <br />
              <span className="text-[#8a1551]">PETOTY FRANCHISE</span>
            </h2>
            
            <p className="mt-4 font-['Nunito',sans-serif] font-normal text-[15.71px] leading-[24.09px] tracking-normal text-gray-600 max-w-md">
              We're excited to partner with passionate entrepreneurs who want to build a trusted pet-care destination in their city.
            </p>
          </div>
<br/>
          {/* === THE FIXED FORM === */}
          <form className="mt-10 flex flex-col gap-7 relative z-10 w-full">
            
            {/* Field 1: Full Name */}
            <div className="relative w-full mt-2">
              <label className="absolute -top-3 left-4 bg-[#fdf8f8] px-2 font-['Nunito',sans-serif] text-sm font-bold text-[#8a1551]">Full Name</label>
              {/* FIXED: Replaced p-3.5 with h-[54px] and px-4 */}
              <input type="text" placeholder="Your Full Name..." className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8a1551] focus:ring-1 focus:ring-[#8a1551] transition-colors bg-transparent" />
            </div>

            {/* Field 2: Email */}
            <div className="relative w-full mt-2">
              <label className="absolute -top-3 left-4 bg-[#fdf8f8] px-2 font-['Nunito',sans-serif] text-sm font-bold text-[#8a1551]">Email</label>
              {/* FIXED: Replaced p-3.5 with h-[54px] and px-4 */}
              <input type="email" placeholder="Your valid email id..." className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8a1551] focus:ring-1 focus:ring-[#8a1551] transition-colors bg-transparent" />
            </div>

            {/* Field 3: Mobile Number */}
            <div className="relative w-full mt-2">
              <label className="absolute -top-3 left-4 bg-[#fdf8f8] px-2 font-['Nunito',sans-serif] text-sm font-bold text-[#8a1551]">Mobile Number</label>
              {/* FIXED: Added h-[54px] to the wrapper, and h-full to the inputs inside it */}
              <div className="flex items-center w-full h-[54px] border border-gray-300 rounded-lg overflow-hidden bg-transparent focus-within:border-[#8a1551] focus-within:ring-1 focus-within:ring-[#8a1551] transition-colors">
                <div className="flex items-center gap-2 px-4 h-full bg-transparent border-r border-gray-300">
                  <span className="font-semibold text-gray-800 text-sm">US</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <input type="tel" placeholder="(201) 555-0123" className="w-full h-full px-4 text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent" />
              </div>
            </div>

            {/* Field 4: City / Location */}
            <div className="relative w-full mt-2">
              <label className="absolute -top-3 left-4 bg-[#fdf8f8] px-2 font-['Nunito',sans-serif] text-sm font-bold text-[#8a1551]">City / Location</label>
              {/* FIXED: Replaced p-3.5 with h-[54px] and px-4 */}
              <input type="text" placeholder="Your City and Country of Interest..." className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8a1551] focus:ring-1 focus:ring-[#8a1551] transition-colors bg-transparent" />
            </div>

            {/* Field 5: Budget Dropdown */}
            <div className="relative w-full mt-2">
              <label className="absolute -top-3 left-4 bg-[#fdf8f8] px-2 font-['Nunito',sans-serif] text-sm font-bold text-[#8a1551]">Budget</label>
              {/* FIXED: Replaced p-3.5 with h-[54px] and px-4 */}
              <select className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-gray-400 focus:outline-none focus:border-[#8a1551] focus:ring-1 focus:ring-[#8a1551] transition-colors bg-transparent appearance-none">
                <option value="" disabled selected>Select your Budget.....</option>
                <option value="low" className="text-gray-800">Under ₹10 Lakhs</option>
                <option value="med" className="text-gray-800">₹10 Lakhs - ₹25 Lakhs</option>
                <option value="high" className="text-gray-800">Above ₹25 Lakhs</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            {/* Submit Button */}
            <button type="button" className="mt-4 w-full h-[54px] bg-[#4a0429] text-white font-medium text-lg rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
              Apply Now
            </button>
            
            <p className="text-center font-['Nunito',sans-serif] text-xs text-gray-500 mt-1">
              *Our franchise team will contact you within 24–48 hours.
            </p>

          </form>
        </div>


        {/* ========================================= */}
        {/* RIGHT COLUMN: IMAGE & GLASS CARD           */}
        {/* ========================================= */}
        <div className="relative w-full h-full min-h-[550px] bg-gradient-to-b from-[#70B0C0] to-[#5A95A4] rounded-2xl overflow-hidden p-8 flex flex-col justify-between shadow-sm">
          
          <h3 className="font-['Nunito',sans-serif] text-2xl md:text-3xl font-bold text-white leading-snug tracking-wide relative z-20">
            HEALTHY PETS.<br />
            HAPPY COMMUNITIES.
          </h3>

          <img 
            src="/images/couple-dog.png" 
            alt="Happy couple with golden retriever" 
            className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] md:w-[80%] h-auto object-contain object-bottom z-10"
          />

          <div className="relative z-20 mt-auto bg-[#2b414a]/70 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl w-full">
            <p className="text-white font-['Nunito',sans-serif] font-semibold text-base md:text-lg leading-relaxed mb-4">
              Join India's Growing Pet-Care Ecosystem With Full Training, Setup Support & Operational Guidance.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#458191] bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=3')] bg-cover"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#458191] bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=4')] bg-cover"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#458191] bg-gray-300 bg-[url('https://i.pravatar.cc/100?img=8')] bg-cover"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-['Nunito',sans-serif] font-bold text-sm tracking-wide">1000+ HAPPY PET PARENTS</span>
                <span className="text-white/80 font-['Nunito',sans-serif] text-xs mt-0.5 flex items-center gap-1">
                  4.8 <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> Service Rating
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
