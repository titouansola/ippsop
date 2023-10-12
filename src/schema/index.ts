import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';
import pricing from './pricing';

export const schemaTypes = [pricing, qna];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
