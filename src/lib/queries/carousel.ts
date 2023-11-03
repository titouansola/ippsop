import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityFetch } from '@ippsop/lib/sanity-fetch';

import { CAROUSEL_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export function fetchCarouselImages() {
  return sanityFetch<SanityImageSource[]>(
    `*[_type == '${CAROUSEL_TAG_NAME}'][0].images`,
    CAROUSEL_TAG_NAME
  );
}
