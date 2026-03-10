import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import PromoCards from "@/components/PromoCards";
import BrowseCategories from "@/components/BrowseCategories";
import PawStoryBanner from "@/components/PawStoryBanner";
import PopularPicks from "@/components/PopularPicks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <PromoCards />
        <BrowseCategories />
        <PawStoryBanner />
        <PopularPicks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
