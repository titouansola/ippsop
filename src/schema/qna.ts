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
