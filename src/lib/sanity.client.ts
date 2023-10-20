import { createClient, type SanityClient } from 'next-sanity';
import { sanityApiVersion, sanityDataset, sanityProjectId } from './client.api';

export function getClient(): SanityClient {
  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: true,
    perspective: 'published',
  });
}
