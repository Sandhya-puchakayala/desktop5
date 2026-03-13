export default function CTA() {
  return (
    // MAIN WRAPPER
    // Uses a soft, warm off-white background matching your screenshot
    <section className="w-full bg-[#f8f6f5] py-16 md:py-24 flex flex-col justify-center items-center font-sans">

      {/* CONTENT CONTAINER */}
      {/* max-w-4xl keeps the text from stretching too wide and becoming hard to read */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center">

        {/* === THE HEADLINE === */}
        {/* Using Roboto Serif to maintain your brand's bold, premium look */}
        <h2 className="font-['Roboto_Serif',serif] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2937] mb-4 md:mb-6 tracking-tight leading-tight">
          Join India's Fastest-Growing Pet Care Brand!
        </h2>

        {/* === THE SUBTEXT === */}
        {/* Using Nunito for clean, friendly readability. max-w-2xl forces the text to wrap exactly like your mockup! */}
        <p className="font-['Nunito',sans-serif] text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
          If you're passionate about pets and looking for a rewarding business opportunity, we'd love to discuss
          how you can become part of Petoty's success story
        </p>
        <br />
      </div>
      {/* 1. THE TOP NAVBAR IMAGE (Stretches Edge-to-Edge) */}
      <div className="w-full px-6 md:px-12 flex justify-center">
        <img
          src="/images/cta.png"
          alt="Navbar Navigation"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
