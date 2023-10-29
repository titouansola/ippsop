import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'Contact / À propos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
