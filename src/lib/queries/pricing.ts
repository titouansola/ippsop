import { sanityClient } from '@ippsop/lib/sanity.client';
import { Pricing } from '@ippsop/models/pricing';

export function fetchPricings() {
  return sanityClient.fetch<Pricing[]>(
    "*[_type == 'pricing'] | order(position)"
  );
}
