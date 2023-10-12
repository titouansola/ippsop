import { Hero } from '@ippsop/features/landing-page/components/Hero';
import { ValuePropositions } from '@ippsop/features/landing-page/components/ValuePropositions';
import { MainInformation } from '@ippsop/features/landing-page/components/MainInformation';
import { Pricing } from '@ippsop/features/landing-page/components/Pricing';
import { Reviews } from '@ippsop/features/landing-page/components/Reviews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropositions />
      <MainInformation />
      <Pricing />
      <Reviews />
    </>
  );
}
