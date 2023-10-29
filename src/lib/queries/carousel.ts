import { sanityClient } from '@ippsop/lib/sanity.client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export function fetchCarouselImages() {
  return sanityClient.fetch<SanityImageSource[]>(
    `*[_type == 'carousel'][0].images`
  );
}
