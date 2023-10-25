import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';
import pricing from './pricing';
import schedule from './schedule';
import services from './services';
import carousel from './carousel';
import hero from './hero';

export const schemaTypes = [pricing, qna, schedule, services, carousel, hero];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
