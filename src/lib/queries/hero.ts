import { sanityClient } from '@ippsop/lib/sanity.client';
import { HeroData } from '@ippsop/models/hero-data';

export function fetchHeroData() {
  return sanityClient.fetch<HeroData>(`*[_type == 'hero'][0]`);
}
