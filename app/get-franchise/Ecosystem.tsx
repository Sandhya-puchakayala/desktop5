export default function Ecosystem() {
  return (
    // The soft beige background matches your design perfectly
    <section className="w-full bg-[#F8F5F1] py-20 md:py-32 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* Optional: A faint, decorative giant paw print in the background corner just like the mockup! */}
      <svg className="absolute -left-10 bottom-0 text-[#eaddd7] w-64 h-64 opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 5.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm5.5 2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm5.5 14.5c4 0 7-3.5 7-7.5 0-3-4.5-5.5-7-5.5s-7 2.5-7 5.5c0 4 3 7.5 7 7.5z" />
      </svg>

      {/* THE MAIN GRID CONTAINER */}
      {/* grid-cols-1 for mobile, md:grid-cols-2 for desktop */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* ========================================= */}
        {/* LEFT COLUMN (VIDEO PLACEHOLDER)             */}
        {/* ========================================= */}
        <div className="w-full flex justify-center">
          {/* We use aspect-video to force a perfect 16:9 YouTube video shape */}
          <div className="w-full max-w-lg aspect-video bg-gray-200/50 border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center text-center p-6 shadow-sm">
            <span className="text-2xl md:text-3xl font-medium text-gray-500 tracking-wide">
              YOUTUBE VIDEO
            </span>
            <span className="text-xl text-gray-400 mt-2">(IF ANY)</span>
          </div>
        </div>


        {/* ========================================= */}
        {/* RIGHT COLUMN (TEXT CONTENT)                 */}
        {/* ========================================= */}
        <div className="flex flex-col items-start text-left">
          
          {/* 1. Custom downloaded paw icon */}
<img 
  src="/images/Rectangle 188.svg" 
  alt="Petoty Paw Icon" 
  className="w-10 h-10 mb-4" 
/>
          {/* 2. Main Title */}
          <h2 className="text-5xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0f172a] tracking-tight">
            Petoty Ecosystem
          </h2>
<br/>
          {/* 3. Subtitle (Plum colored) */}
          <h3 className="text-lg md:text-xl text-[#8a1551] font-medium mt-4">
            A Modern, Complete Pet-Care Universe Built For Pet Parents.
          </h3>
<br/>
          {/* 4. Paragraph */}
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
            Step into the world of Petoty - where every pet gets the care, comfort, and joy they deserve. From premium retail products to expert grooming, vet partnerships, nutrition essentials, and pet lifestyle items, Petoty brings everything under one trusted roof.
          </p>
          
        </div>

      </div>
    </section>
  );
}
