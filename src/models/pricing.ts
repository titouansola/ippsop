import { PortableTextBlock } from 'sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Pricing = {
  title: string;
  value: number;
  description: PortableTextBlock;
  image: SanityImageSource;
};
