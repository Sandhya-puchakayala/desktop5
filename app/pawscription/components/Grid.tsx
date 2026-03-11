export default function Grid() {
  return (
    // Increased overall section padding to py-32 for more top/bottom room
    // <section className="w-full bg-white py-16 flex flex-col items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] font-sans">
    <section className="w-full bg-white py-8 flex flex-col items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] font-sans">
      
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col">
        
        {/* ========================================= */}
        {/* 1. THE STATS GRID                           */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center items-center text-center w-full">

          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tighter mb-4">50,000+</h2>
            <p className="text-base md:text-lg text-gray-800 font-medium">Happy Pet Parents</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tighter mb-4">2M+</h2>
            <p className="text-base md:text-lg text-gray-800 font-medium">Pawsubscription Filled</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tighter mb-4">48hrs</h2>
            <p className="text-base md:text-lg text-gray-800 font-medium">Average Delivery</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tighter mb-4">50%</h2>
            <p className="text-base md:text-lg text-gray-800 font-medium">Average Savings</p>
          </div>

        </div>
        {/* === END OF GRID === */}
      

        {/* ========================================= */}
        {/* 2. THE SECTION HEADER                       */}
        {/* ========================================= */}
        
        {/* KEY CHANGE 1: Bumped margin from mt-32 to mt-48 (and mt-56 on desktop) to force a massive gap */}
        {/* <div className="w-full flex flex-col items-center mt-48 md:mt-56 text-center"> */}
        <div className="w-full flex flex-col items-center mt-10 md:mt-12 text-center">
          
          {/* KEY CHANGE 2: Increased margin bottom (mb-10) so the title stays far away from the paragraph */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0f172a] tracking-tight mb-10">
            Why Pet Parents Choose Pawscription
          </h2>
          
          {/* KEY CHANGE 3: Removed the <br/> tag so the text doesn't break weirdly, and increased max-w to 4xl */}
          <p className="text-md md:text-md text-gray-600 font-sans max-w-3xl leading-loose px-4">
            We make pet healthcare affordable, convenient, and stress-free. Your furry family deserves the best care without breaking the bank.
          </p>
          
        </div>
        {/* === END OF HEADER === */}

      </div>
    </section>
  );
}
