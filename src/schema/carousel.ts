import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Image Carrousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
      validation: (Rule) => Rule.required().length(5),
    }),
  ],
});
