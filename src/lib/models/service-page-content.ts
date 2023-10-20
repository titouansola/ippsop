import { PortableTextBlock } from 'sanity';

export type ServicePageContent = {
  title: string;
  slug: { current: string };
  position: number;
  content: PortableTextBlock[];
};
