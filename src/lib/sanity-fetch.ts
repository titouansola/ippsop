import { sanityClient } from '@ippsop/lib/sanity.client';

export function sanityFetch<T>(query: string) {
  return sanityClient.fetch<T>(query, {}, { next: { revalidate: 3600 } });
}
