import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';
import pricing from './pricing';
import schedule from './schedule';
import services from './services';

export const schemaTypes = [pricing, qna, schedule, services];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
