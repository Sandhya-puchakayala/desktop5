import { Apple, Play } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="px-[35px] py-10">
      <div className="bg-[#7A3B66] rounded-[26px] h-[290px] px-12 flex items-center justify-between">

        {/* LEFT */}
        <div>
          <h2 className="text-[28px] font-bold text-white uppercase mb-3 whitespace-nowrap">
            Stay Up To Date About Our Latest Offers
          </h2>

          <p className="text-white/90 text-[15px] font-semibold mb-1">
            Let's keep in touch
          </p>

          <p className="text-white/70 text-[15px] mb-6">
            Get recommendations, tips, updates and more.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[260px] px-4 py-3 rounded-full bg-white text-sm outline-none"
            />

            <button className="bg-[#5a0b2f] text-white px-6 py-3 rounded-full text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-4">

          <button className="bg-white text-black px-6 py-2 rounded-full text-[25px] font-semibold">
            Download App
          </button>

          <p className="text-white/90 text-[16px]">
            The mobile app is available now
          </p>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white">
              <Apple size={18} />
            </button>

            <button className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white">
              <Play size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;