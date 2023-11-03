import { defineArrayMember, defineField, defineType } from 'sanity';
import { CAROUSEL_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: CAROUSEL_TAG_NAME,
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
