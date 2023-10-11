function assert<T>(v: T | undefined, errorMessage: string): T {
  if (typeof v === 'undefined') {
    throw new Error(errorMessage);
  }
  return v;
}

export const dataset = assert(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environnement variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assert(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environnement variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const readToken = process.env.SANITY_API_READ_TOKEN || '';

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-21';

export const previewSecretId: `${string}.${string}` = 'preview.secret';
