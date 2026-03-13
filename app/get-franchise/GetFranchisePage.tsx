import Header from '@/components/Header'
// import Hero from './Hero'
import Nav from './Nav'
import FranchiseForm from './FranchiseForm'
import Why from './Why'
import Ecosystem from './Ecosystem'
import Journey from './Journey'
import Franchise from './Franchise'
import What from './What'
import CTA from './CTA'
import Email from './Email'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function GetFranchisePage() {
  return (
    <main className="flex flex-col gap-10 md:gap-10 pb-10">
      <Header />
      {/* <Hero /> */}
      <Nav />
      <FranchiseForm />
      <Why />
      <Ecosystem />
      <Journey />
      <Franchise />
      <What />
      <CTA />
      <Email />
      <Newsletter />
      <Footer />
    </main>
  );
}
