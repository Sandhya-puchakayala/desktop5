export default function Hero() {
  return (
    <section className="bg-white w-full flex flex-col">
      

      {/* 2. THE HEADER & IMAGE SECTION */}
      {/* FIXED: Removed 'pb-16' so there is no extra padding at the bottom of the section */}
      <div className="w-full pt-12 md:pt-16 pb-0 flex flex-col justify-center items-center relative bg-gradient-to-r from-white via-white to-pink-50/50">
        
        {/* === 1. THE TEXT WRAPPER === */}
        {/* FIXED: Changed bottom margin to mb-0 to eliminate the huge gap! */}
        <div className="relative inline-block text-center px-6 md:px-12 mb-0">
          
          {/* Top Right Paw */}
          <img 
            src="/images/Rectangle 189.png" 
            alt="Decorative Paw" 
            className="absolute -top-6 -right-2 md:-right-6 w-6 h-6 md:w-8 md:h-8 object-contain z-0 pointer-events-none"
          />

          {/* Bottom Left Paw */}
          <img 
            src="/images/Rectangle 189.png" 
            alt="Decorative Paw" 
            className="absolute -bottom-4 -left-4 md:-left-8 w-6 h-6 md:w-8 md:h-8 object-contain z-0 pointer-events-none"
          />

          <h2 className="font-['Roboto_Serif',serif] text-3xl md:text-4xl lg:text-[42px] font-bold text-black tracking-tight relative z-10">
            Top 4 Reasons You'll Love Owning a Petoty Franchise
          </h2>

          <img 
            src="/images/Vector 203 (Stroke) (1).png" 
            alt="Underline Stroke" 
            className="absolute -bottom-3 md:-bottom-5 right-0 w-[50%] md:w-[280px] h-auto object-contain z-0 pointer-events-none"
          />
        </div>
<br/>
        {/* === 2. THE FULL-WIDTH 4 REASONS IMAGE === */}
        {/* FIXED: Removed max-w-5xl and side padding. Added w-full so it stretches edge-to-edge across the entire device! */}
        {/* Added mt-10 to give just enough space for your stroke to breathe without a massive gap. */}
        <div className="w-full relative z-10 mt-10">
          <img 
            src="/images/Frame 112.png" // IMPORTANT: Replace this with your actual 4-reasons image file name!
            alt="4 Reasons Graphic" 
            className="w-full h-auto block"
          />
        </div>

      </div>

    </section>
  );
}