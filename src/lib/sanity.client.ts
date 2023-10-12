import { createClient, type SanityClient } from 'next-sanity';
import { sanityApiVersion, sanityDataset, sanityProjectId } from './client.api';

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: false,
    perspective: 'published',
  });
  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts',
      })
    : client;
}
