import { sanityClient } from '@ippsop/lib/sanity.client';

export function sanityFetch<T>(query: string, tag: string) {
  return sanityClient.fetch<T>(
    query,
    {},
    { cache: 'force-cache', next: { tags: [tag] } }
  );
}
