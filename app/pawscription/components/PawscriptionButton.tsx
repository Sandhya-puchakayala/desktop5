export default function PawscriptionButton() {
  return (
    // The main wrapper with a clean white background
    <section className="bg-white w-full flex flex-col">
      {/* 2. THE TEXT CONTENT */}
      {/* We are keeping the same clean spacing: mt-12, pb-16, px-4 */}
      {/* <div className="w-full flex flex-col items-center mt-12 pb-16 px-4"> */}
      <div className="w-full flex flex-col items-center mt-6 pb-8 px-4">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-serif text-center leading-tight" style={{ color: '#8B1E4F' }}>
          Tail-Wagging Convenience, <br /> Straight to Your Door
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-lg text-gray-600 font-sans text-center mt-6 max-w-2xl leading-relaxed">
          Pawscription is the most advanced AI smart collar for continuously <br className="hidden md:block" />
          monitoring your pet's health and GPS location.
        </p>
        <br/>
        <div className="mt-10">
          <button className="px-16 py-8 text-md font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
            Start My Pawscription
          </button>
        </div>
        <br/>
      </div>   
      {/* 1. ULTRA-WIDE CONTAINERIZED IMAGE */}
      <div className="w-full flex justify-center px-4 md:px-8">
        
        {/* We increased max-w-5xl to max-w-6xl to make it wider on large screens */}
        <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
          <img
            src="/family image.png"
            alt="Happy family with dogs"
            className="w-full aspect-[21/9] object-cover object-center block"
          />
        </div>
      </div>
 
    </section>

  );
}
