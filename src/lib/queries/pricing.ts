import { Pricing } from '@ippsop/models/pricing';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { PRICING_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchPricings() {
  return sanityFetch<Pricing[]>(
    `*[_type == '${PRICING_TAG_NAME}'] | order(position)`,
    PRICING_TAG_NAME
  );
}
