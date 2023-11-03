import { Hero } from '@ippsop/features/landing-page/components/Hero';
import SubHero from '@ippsop/features/landing-page/components/SubHero';
import { ValuePropositions } from '@ippsop/features/landing-page/components/ValuePropositions';
import { MainInformation } from '@ippsop/features/landing-page/components/MainInformation';
import { Carousel } from '@ippsop/features/landing-page/components/Carousel';
import { Pricing } from '@ippsop/features/landing-page/components/Pricing';
import { Reviews } from '@ippsop/features/landing-page/components/Reviews';
import { HandleScroll } from '@ippsop/features/common/components/HandleScroll';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className={'px-main mx-auto max-w-content'}>
        <SubHero />
        <ValuePropositions />
        <MainInformation />
        <Carousel />
        <Pricing />
        <Reviews />
        <HandleScroll />
      </div>
    </main>
  );
}
