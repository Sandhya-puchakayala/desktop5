export default function FranchiseProcess() {
  return (
    // MAIN WRAPPER
    <section className="relative w-full bg-white py-16 md:py-24 flex justify-center items-center overflow-hidden">

      {/* ========================================= */}
      {/* THE MAIN FRAME CONTAINER                    */}
      {/* ========================================= */}
      <div className="relative w-full shadow-sm rounded-2xl">
        
        {/* 1. THE MAIN BACKGROUND FRAME (Base Layer) */}
        <img 
          src="/images/Frame 427321241.png" 
          alt="Petoty Franchise Process" 
          className="w-full h-auto object-contain block pointer-events-none" 
        />

        {/* 2. THE TIMELINE (Nested Inside) */}
        <div className="absolute bottom-[5%] md:bottom-[8%] left-0 w-full flex justify-center z-20 pointer-events-none">
          <img 
            src="/images/Group 122.png" 
            alt="Process Timeline" 
            className="w-[95%] md:w-[95%] h-auto object-contain" 
          />
        </div>

        {/* 3. THE DECORATIVE DOG (Nested Top Right) */}
        {/* FIXED: Reduced width classes (w-20, md:w-36, lg:w-48) to stop covering text */}
        <img
          src="/images/Group 28.png"
          alt="Petoty Mascot Dog"
          className="absolute -top-4 -right-4 md:top-0 md:right-0 w-20 md:w-36 lg:w-48 h-auto object-contain z-30 pointer-events-none drop-shadow-xl"
        />

      </div>

    </section>
  );
}