export default function What() {
  return (
    // MAIN WRAPPER — Full width, no side constraints
    <section className="w-full bg-white py-12 md:py-20 flex justify-center items-center">

      {/* IMAGE CONTAINER — Full width, no max-w cap, no side padding */}
      <div className="w-full px-6 md:px-12 flex justify-center">
        
        <img
          src="/images/Group 181.png"
          alt="What We Require"
          className="w-full h-auto object-contain block"
        />
        
      </div>
      
    </section>
  );
}
