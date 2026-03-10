import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="container mx-auto px-10 py-6">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/assets/hero-pets1.png"
          alt="Happy cat and dog"
          width={1200}
          height={450}
          className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display text-primary-foreground mb-3 drop-shadow-lg">
            Every Paw Tells a Story
          </h1>

          <p className="text-primary-foreground/90 text-sm sm:text-base lg:text-lg mb-6 drop-shadow-md max-w-lg">
            Create your pet&apos;s profile and keep everything in one place
          </p>

          <button className="flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-foreground hover:text-background transition-colors shadow-lg">
            Add Pet
            <span className="bg-foreground text-background rounded-full p-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;