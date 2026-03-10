import Image from "next/image";

const PromoCards = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="relative rounded-[32px] overflow-hidden min-h-[260px]">

          {/* Background Image */}
          <Image
            src="/assets/homepage_dog.png"
            alt="Dog"
            fill
            className="object-cover"
          />

          {/* Overlay Content */}
          <div className="relative z-10 px-10 py-10">
            <h3 className="text-3xl font-semibold leading-snug mb-6">
              Luxury for Loyal <br />
              <span className="font-bold">Companions</span>
            </h3>

            <button className="bg-white border border-gray-300 px-8 py-3 rounded-full text-base font-medium hover:bg-black hover:text-white transition">
              Shop now
            </button>
          </div>

        </div>

        {/* Card 2 */}
        <div className="relative rounded-[30px] overflow-hidden min-h-[290px]">

          {/* Background Image */}
          <Image
            src="/assets/homepage_cat.png"
            alt="Cat"
            fill
            className="object-cover"
          />

          {/* Overlay Content */}
          <div className="relative z-10 px-10 py-10">
            <h3 className="text-3xl font-semibold leading-snug mb-6">
              Elegance for <br />
              <span className="font-bold">Every Purr</span>
            </h3>

            <button className="bg-white border border-gray-300 px-8 py-3 rounded-full text-base font-medium hover:bg-black hover:text-white transition">
              Shop now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PromoCards;