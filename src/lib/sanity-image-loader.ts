import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getClient } from '@ippsop/lib/sanity.client';

const builder = ImageUrlBuilder(getClient());

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
