import Header from '@/components/Header';
import Pawquote from '@/app/pawssurance/Pawquote';
import Enquire from '@/app/pawssurance/Enquire';
import Benifits from '@/app/pawssurance/Benifits';
import Grid from '@/app/pawssurance/Grid';
import Get from '@/app/pawssurance/Get';
import Vet from '@/app/pawssurance/Vet';
import Cat from '@/app/pawssurance/Cat';
import Book from '@/app/pawssurance/Book';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer'


export default function PawsurancePage() {
  return (
    <main className="flex flex-col gap-12 md:gap-12 pb-12">
      <Header />
      <Pawquote />
      <Enquire />
      <Benifits />
      <Grid />
      <Get />
      <Vet />
      <Cat />
      <Book />
      <Newsletter />
      <Footer />
    </main>
  );
}
