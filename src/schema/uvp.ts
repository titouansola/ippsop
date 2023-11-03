import { defineField, defineType } from 'sanity';
import { UVP_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: UVP_TAG_NAME,
  title: 'Propositions de valeur',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reference',
      title: 'Référence',
      type: 'reference',
      to: [{ type: 'services' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
