import { SchemaTypeDefinition } from 'sanity';

import qna from './qna';

export const schemaTypes = [qna];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...schemaTypes],
};
