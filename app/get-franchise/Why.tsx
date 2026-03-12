export default function Why() {
  return (
    <section className="relative w-full bg-[#fcfbfc] py-20 px-4 md:py-32 overflow-hidden">
      
      {/* ========================================= */}
      {/* 1. TOP TEXT HEADER                         */}
      {/* ========================================= */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-16 md:mb-24 relative z-20">
        
        {/* Main Title (Roboto Serif from earlier) */}
        <h2 className="font-['Roboto_Serif',serif] font-semibold text-[50px] leading-[140%] tracking-normal text-center text-[#0f172a]">
          WHY <span className="text-[#8a1551]">PETOTY</span>
        </h2>

        {/* 1. THE NEW MAIN SUBTITLE <p> TAG */}
        <p className="mt-2 font-['Nunito',sans-serif] font-normal text-[20px] leading-none tracking-normal text-center text-gray-600 max-w-3xl">
          We make pet healthcare affordable, convenient, and stress-free. Your furry family 
          deserves the best care without breaking the bank.
        </p>
      </div>


      {/* ========================================= */}
      {/* 2. MAIN GRID & BACKGROUND WRAPPER            */}
      {/* ========================================= */}
      <div className="w-full max-w-7xl mx-auto relative">
        
        {/* The Background */}
        <div className="absolute bottom-0 left-0 w-full aspect-square flex items-end justify-center pointer-events-none z-0">
          <img src="/images/Background.png" alt="Concentric Arch Pattern" className="w-full object-contain object-bottom" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 relative z-10 items-center lg:items-end">

          {/* === LEFT COLUMN (Points 1, 2, 3) === */}
          <div className="flex flex-col justify-center gap-12 lg:pb-16 text-right">
            
            <div className="flex items-center gap-5 justify-end">
              <div className="flex flex-col">
                {/* 3. THE NEW <h4> TAG */}
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">Strong Brand Trust</h4>
                {/* 2. THE NEW SIDE <p> TAG */}
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Loved by pet parents for quality and care.</p>
              </div>
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">1</span>
            </div>

            <div className="flex items-center gap-5 justify-end">
              <div className="flex flex-col">
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">End-To-End Support</h4>
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Complete guidance from setup to launch.</p>
              </div>
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">2</span>
            </div>

            <div className="flex items-center gap-5 justify-end">
              <div className="flex flex-col">
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">Booming Pet-Care Market</h4>
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Be part of a fast-expanding industry.</p>
              </div>
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">3</span>
            </div>

          </div>


          {/* === CENTER COLUMN (Dogs Image) === */}
          <div className="flex justify-center items-end relative z-20">
            <img src="/images/wing.png" alt="Group of diverse dogs" className="w-full max-w-[500px] h-auto object-contain" />
          </div>


          {/* === RIGHT COLUMN (Points 4, 5, 6) === */}
          {/* Note: Kept text-left here so it mirrors the left side perfectly */}
          <div className="flex flex-col justify-center gap-12 lg:pb-16 text-left">
            
            <div className="flex items-center gap-5 justify-start">
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">4</span>
              <div className="flex flex-col">
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">Multiple Revenue Streams</h4>
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Earn through retail, grooming & more.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-start">
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">5</span>
              <div className="flex flex-col">
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">Low-Risk, High-Potential</h4>
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Built for stability and consistent returns.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-start">
              <span className="flex-shrink-0 flex items-center justify-center font-bold text-2xl text-white bg-[#4a0429] w-14 h-14 rounded-full shadow-lg">6</span>
              <div className="flex flex-col">
                <h4 className="font-['Nunito',sans-serif] font-extrabold text-[20px] leading-[26px] tracking-normal capitalize align-middle text-[#0f172a]">Proven Success System</h4>
                <p className="mt-1 font-['Nunito',sans-serif] font-normal text-[14px] leading-none tracking-normal align-middle text-gray-600">Tested processes that help every store thrive.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
