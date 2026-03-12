import HeroBanner from '@/components/HeroBanner'
import Header from '@/components/Header'
import About from '@/app/about-us/About'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function AboutusPage() {
  return (
    <main className="flex flex-col gap-12 md:gap-12 pb-12">
      <Header />
      <About />
      <Newsletter/>
      <Footer />
    </main>
  );
}
