import { assert } from '@ippsop/lib/assert';

export const readToken = assert(
  process.env.SANITY_API_READ_TOKEN,
  'Missing environment variable: SANITY_API_READ_TOKEN'
);
