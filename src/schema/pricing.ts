import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricing',
  title: 'Tarif',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Intitulé',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Montant',
      type: 'number',
      description: 'Montant de la prestation en €',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      description: 'Position sur la page web ⚠️ Ne pas mettre 2 fois la même !',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({ currentUser }) =>
        !currentUser?.roles.find(({ name }) => name === 'administrator'),
    }),
  ],
});
