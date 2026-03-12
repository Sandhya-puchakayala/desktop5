export default function FranchisePromo() {
  return (
    // The background color matches the soft beige in your design
    <section className="w-full bg-[#F8F5F1] py-16 md:py-24 px-6 md:px-12 font-sans overflow-hidden">
      
      {/* 1. THE GRID CONTAINER */}
      {/* grid-cols-1 for mobile (stacked), md:grid-cols-2 for desktop (side-by-side) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ========================================= */}
        {/* 2. LEFT COLUMN (TEXT)                       */}
        {/* ========================================= */}
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-xl md:text-xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight tracking-tight">
            Join India's <span className="text-[#8a1551]">Fastest-Growing</span> Pet Care Network and Launch Your Own Petoty Store
          </h2>

          <p className="mt-6 text-md md:text-md text-gray-700 max-w-lg leading-relaxed">
            Partner with a trusted brand and access a proven franchise model designed for success in the booming pet care industry.
          </p>
<br/>
          <button className="px-12 py-6 text-lg font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
        Apply Now
</button>
          
        </div>

        {/* ========================================= */}
        {/* 3. RIGHT COLUMN (IMAGE)                     */}
        {/* ========================================= */}
        <div className="relative w-full flex justify-center md:justify-end">
          
          {/* Note: I added a decorative abstract "blob" background shape behind the image using Tailwind to mimic your design. */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            
            {/* The dark maroon abstract blob behind the store */}
            <div className="absolute inset-0 bg-[#4a0122] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-90 translate-x-8 -translate-y-4"></div>
            
            {/* The Actual Image */}
            <img
              src="/images/shop image.png" // Replace this with the actual name of your illustration file!
              alt="Petoty Store Franchise Illustration"
              className="relative z-10 w-full h-auto object-contain"
            />

          </div>
          
        </div>

      </div>
    </section>
  );
}
