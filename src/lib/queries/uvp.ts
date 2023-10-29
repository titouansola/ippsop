import { sanityClient } from '@ippsop/lib/sanity.client';
import { UVP } from '@ippsop/models/uvp';

export function fetchUvps() {
  return sanityClient.fetch<UVP[]>(
    `*[_type == 'uvp']{'slug': reference->slug.current, ...} | order(position asc)`
  );
}
