import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'qna',
  title: 'Foire aux Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
    }),
  ],
});
