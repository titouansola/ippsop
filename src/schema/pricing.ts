import { defineArrayMember, defineField, defineType } from 'sanity';
import { PRICING_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: PRICING_TAG_NAME,
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
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
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
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
