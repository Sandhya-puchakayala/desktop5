export default function Watch() {
  return (
    // 1. MAIN WRAPPER CENTERING
    // 'flex flex-col items-center justify-center' forces everything to the absolute middle of the beige box
    <section className="w-full bg-[#F8F5F1] py-16 md:py-24 flex flex-col items-center justify-center font-sans px-4">
      
      {/* 2. INNER CONTENT CENTERING */}
      {/* 'mx-auto items-center text-center' makes sure the text itself is perfectly balanced */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-2xl md:text-4xl font-serif text-[#0f172a] tracking-tight mb-6">
          Start Tracking Your Pet's Health Today
        </h2>

        <p className="text-lg text-gray-600 font-sans max-w-2xl leading-relaxed mb-10">
          Join thousands of pet parents who are already using our health tracking 
          system to keep their furry friends happy and healthy.
        </p>

        {/* 3. THE FIXED BUTTON */}
        {/* Added 'px-10 py-4' back to give the button its spacious, clickable shape */}
        <button className="bg-[#4a0429] text-white font-sans font-medium text-lg px-10 py-4 rounded-md shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
          Watch Demo
        </button>

      </div>

    </section>
  );
}
