import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './sanity.api';

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: 'published',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provde a token to preview drafts');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}
