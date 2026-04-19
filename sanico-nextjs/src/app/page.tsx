import AnnounceBar      from '@/components/AnnounceBar';
import StickyNav        from '@/components/StickyNav';
import MobileStickyCTA  from '@/components/MobileStickyCTA';
import Hero             from '@/components/Hero';
import TrustStrip       from '@/components/TrustStrip';
import StatsBand        from '@/components/StatsBand';
import Problem          from '@/components/Problem';
import WhyNow           from '@/components/WhyNow';
import Revenue          from '@/components/Revenue';
import Steps            from '@/components/Steps';
import Included         from '@/components/Included';
import Templates        from '@/components/Templates';
import Differentiator   from '@/components/Differentiator';
import Buyer            from '@/components/Buyer';
import Proof            from '@/components/Proof';
import Offer            from '@/components/Offer';
import FAQ              from '@/components/FAQ';
import FinalCTA         from '@/components/FinalCTA';
import Footer           from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <StickyNav />
      <MobileStickyCTA />
      <main>
        <Hero />
        <TrustStrip />
        <StatsBand />
        <Problem />
        <WhyNow />
        <Revenue />
        <Steps />
        <Included />
        <Templates />
        <Differentiator />
        <Buyer />
        <Proof />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
