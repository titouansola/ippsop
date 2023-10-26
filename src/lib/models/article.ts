import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Article = {
  title: string;
  description: string;
  url: string;
  thumbnail: SanityImageSource;
  _createdAt: string;
};
