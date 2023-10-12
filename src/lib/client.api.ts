import { assert } from '@ippsop/lib/assert';

export const sanityDataset = assert(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const sanityProjectId = assert(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-21';

export const googleMapKey = assert(
  process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  'Missing environment variable: NEXT_PUBLIC_GOOGLE_MAP_API_KEY'
);
