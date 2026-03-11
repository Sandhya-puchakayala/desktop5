import { Metadata } from 'next';
import PawscriptionPage from './PawscriptionPage';

export const metadata: Metadata = {
  title: "Pawscription - Pet Health Monitoring & Subscription",
  description: "Advanced AI smart collar for continuous pet health and GPS location monitoring. Join 50,000+ happy pet parents.",
};

export default function Page() {
  return <PawscriptionPage />
}
