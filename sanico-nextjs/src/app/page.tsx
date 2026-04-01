import StickyNav       from '@/components/StickyNav';
import Hero            from '@/components/Hero';
import StatsBand       from '@/components/StatsBand';
import Opportunity     from '@/components/Opportunity';
import WrongBusinesses from '@/components/WrongBusinesses';
import IncomeLogic     from '@/components/IncomeLogic';
import WhatsInside     from '@/components/WhatsInside';
import Templates       from '@/components/Templates';
import NotFluff        from '@/components/NotFluff';
import IdealBuyer      from '@/components/IdealBuyer';
import Proof           from '@/components/Proof';
import Offer           from '@/components/Offer';
import FAQ             from '@/components/FAQ';
import FinalCTA        from '@/components/FinalCTA';
import Footer          from '@/components/Footer';

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <StatsBand />
        <Opportunity />
        <WrongBusinesses />
        <IncomeLogic />
        <WhatsInside />
        <Templates />
        <NotFluff />
        <IdealBuyer />
        <Proof />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
