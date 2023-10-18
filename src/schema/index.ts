import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';
import pricing from './pricing';
import schedule from './schedule';

export const schemaTypes = [pricing, qna, schedule];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
