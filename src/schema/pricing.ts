import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricing',
  title: 'Tarif',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Valeur',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
