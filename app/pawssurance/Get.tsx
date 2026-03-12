export default function Get() {
  return (
    // MAIN WRAPPER
    // Using a soft, warm off-white background to match the screenshot
    <section className="w-full bg-[#f6f3ee] py-16 md:py-24 px-4 md:px-8 font-sans">
      
      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
        
        {/* ======================================= */}
        {/* ROW 1: DOGS AND PUPPIES                 */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left: Image */}
          <div className="w-full order-1">
            <img 
              src="/images/image 59.png"
              alt="Veterinarian examining a cat while owner smiles" 
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col items-start text-left order-2">
            
            <h2 className="font-['Nunito',sans-serif] text-3xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Health Insurance for Dogs and Puppies
            </h2>
            <br/>
            <p className="font-['Nunito',sans-serif] text-[16px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
              Giving your pet a great life is never a waste of money. In fact, pet 
              parents, like you, spend an estimated <span className="border-b border-gray-400">$18 billion</span> a year on veterinary 
              expenses alone. While the amount may be shocking, the fact that we 
              are willing to splurge to keep our pups healthy isn't surprising. After 
              all, our dogs are family - a bond that spans the duration of our lives 
              (and theirs). When we are faced with an expensive procedure or 
              treatment, without a financial safety net, it can be heartbreaking.
            </p>
<br/>
            <p className="font-['Nunito',sans-serif] text-[16px] md:text-[16px] text-gray-800 leading-relaxed mb-8">
              As early as 8 weeks, you can cover your precocious pup with a puppy 
              insurance plan through Figo. Plans cover new injuries or illness-so, if 
              your curious pet eats a sock or has a bout of diarrhea, simply visit the 
              veterinarian, and submit your paid vet bill for reimbursement. Puppy 
              insurance frees you to concentrate on more important things, like 
              puppy playtime and snuggles!
            </p>
<br/>
             <button className="px-12 py-6 text-sm font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
                Get A Dog Pawsurance Quote
</button>
          </div>
        </div>

        {/* ======================================= */}
        {/* ROW 2: CATS AND KITTENS                 */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left (Desktop) / Bottom (Mobile): Text */}
          {/* THE FIX: order-2 on mobile forces text below the image. md:order-1 puts it on the left on desktop! */}
          <div className="flex flex-col items-start text-left order-2 md:order-1">
            
            <h2 className="font-['Nunito',sans-serif] text-3xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Health Insurance for Cats and Kittens
            </h2>
            <br/>
            <p className="font-['Nunito',sans-serif] text-[16px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
              The total cost of cat ownership can reach over $3,000 in the first year - 
              even without accounting for unforeseeable emergency expenses. Add 
              in unexpected vet visits, and those costs increase. Fortunately, for a 
              manageable monthly fee, you can purchase a cat health insurance plan 
              and reduce worry from having to shell out exorbitant money for your 
              cat's emergency care.
            </p>
<br/>
            <p className="font-['Nunito',sans-serif] text-[16px] md:text-[16px] text-gray-800 leading-relaxed mb-8">
              If you're the lucky owner of a kitten, you know how inquisitive they 
              can be. Kittens may get scared and dart out of the front door; and 
              they may unintentionally nosh on dangerous and toxic non-edible 
              items around the house. These common kitten mishaps can lead to 
              vet bills that aren't in the budget. It is in these instances kitten health 
              insurance can save your pet and your bank account.
            </p>
<br/>
             <button className="px-12 py-6 text-sm font-bold text-white bg-[#8a1551] hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto min-h-[60px] min-w-[200px]">
                Get A Cat Pawsurance Quote
</button>

          </div>

          {/* Right (Desktop) / Top (Mobile): Image */}
          {/* THE FIX: order-1 ensures the image ALWAYS stays on top on mobile screens */}
          <div className="w-full order-1 md:order-2">
            <img 
              src="/images/image 58.png"
              alt="Veterinarian examining a small dog with clipboard" 
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>

        </div>

      </div>

    </section>
  );
}
