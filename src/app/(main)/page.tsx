import { Hero } from '@ippsop/features/landing-page/components/Hero';
import { ValuePropositions } from '@ippsop/features/landing-page/components/ValuePropositions';
import { MainInformation } from '@ippsop/features/landing-page/components/MainInformation';
import { Carousel } from '@ippsop/features/landing-page/components/Carousel';
import { Pricing } from '@ippsop/features/landing-page/components/Pricing';
import { Reviews } from '@ippsop/features/landing-page/components/Reviews';
import { HandleScroll } from '@ippsop/features/common/components/HandleScroll';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropositions />
      <MainInformation />
      <Carousel />
      <Pricing />
      <Reviews />
      <HandleScroll />
    </>
  );
}