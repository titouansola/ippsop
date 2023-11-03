import { defineField, defineType } from 'sanity';
import { SERVICES_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: SERVICES_TAG_NAME,
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      hidden: ({ currentUser }) =>
        !currentUser?.roles.find(({ name }) => name === 'administrator'),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'content',
      title: 'Contenu texte',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
