import { HeroData } from '@ippsop/models/hero-data';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { HERO_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchHeroData() {
  return sanityFetch<HeroData>(
    `*[_type == '${HERO_TAG_NAME}'][0]`,
    HERO_TAG_NAME
  );
}
