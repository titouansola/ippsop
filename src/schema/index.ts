import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';
import pricing from './pricing';
import schedule from './schedule';
import services from './services';
import carousel from './carousel';
import hero from './hero';
import article from './article';
import uvp from './uvp';
import about from './about';

export const schemaTypes = [
  pricing,
  qna,
  schedule,
  services,
  carousel,
  hero,
  article,
  uvp,
  about,
];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
