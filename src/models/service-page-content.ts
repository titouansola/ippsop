import { PortableTextBlock } from 'sanity';

export type LightService = {
  title: string;
  slug: string;
  position: number;
};

export type ServicePageContent = LightService & {
  content: PortableTextBlock[];
};
