export default function What() {
  return (
    // MAIN WRAPPER
    // Added py-16 to give it space above and below, and flex justify-center to center everything inside!
    <section className="w-full bg-white py-16 md:py-24 flex justify-center items-center">

      {/* IMAGE CONTAINER */}
      {/* FIXED: Changed w-5xl to max-w-5xl. Added w-full so it responds to mobile screens perfectly. */}
      <div className="w-full max-w-5xl px-4 flex justify-center">
        
        <img
          src="/images/Group 181.png"
          alt="What We Require"
          className="w-full h-auto object-contain"
        />
        
      </div>
      
    </section>
  );
}
