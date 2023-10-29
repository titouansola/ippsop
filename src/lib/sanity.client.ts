import { createClient } from 'next-sanity';
import { sanityApiVersion, sanityDataset, sanityProjectId } from './client.api';

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: 'published',
});
