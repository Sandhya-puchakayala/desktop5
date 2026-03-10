import { ArrowRight } from "lucide-react";

const PawStoryBanner = () => {
  return (
    <section className="container mx-auto px-10 py-10">
      <div className="bg-card rounded-2xl h-[350px] flex flex-col items-center justify-center text-center">

        <h2 className="text-4xl sm:text-5xl font-display text-foreground mb-4">
          Every Paw Tells a Story
        </h2>

        <p className="text-muted-foreground text-base mb-8">
          Create your pet&apos;s profile and keep everything in one place
        </p>

        <button className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-3 rounded-full font-semibold border border-border hover:bg-foreground hover:text-background transition-colors shadow-sm">
          Add Pet
          <span className="bg-foreground text-background rounded-full p-2">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>

      </div>
    </section>
  );
};

export default PawStoryBanner;