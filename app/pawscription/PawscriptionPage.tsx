import Hero from './components/Hero'
import PawscriptionButton from './components/PawscriptionButton'
import Grid from './components/Grid'
import Information from './components/Information'
import PriceSection from './components/PriceSection'
import Watch from './components/Watch'
import Daily from './components/Daily'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function PawscriptionPage() {
  return (
    // 1. 'flex flex-col' stacks your sections like a tower
    // 2. 'gap-12 md:gap-16' moderate gap between sections
    // 3. 'pb-16' adds space at the very bottom of the page so it doesn't hit the screen edge
    <main className="flex flex-col gap-5 md:gap-5 pb-5">
      
      <Hero />
      <PawscriptionButton />
      <Grid/>
      <Information />
      <PriceSection />
      <Watch />
      <Daily />
      <Newsletter />
      <Footer />
     
    </main>
  )
}
