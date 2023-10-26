import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'uvp',
  title: 'Propositions de valeur',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'text',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
    }),
  ],
});
