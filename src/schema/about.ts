import { defineField, defineType } from 'sanity';
import { ABOUT_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: ABOUT_TAG_NAME,
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
