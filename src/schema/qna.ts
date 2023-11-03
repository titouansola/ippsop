import { defineField, defineType } from 'sanity';
import { QNA_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: QNA_TAG_NAME,
  title: 'Foire aux Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
