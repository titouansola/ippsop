import { defineField, defineType } from 'sanity';
import { ARTICLE_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: ARTICLE_TAG_NAME,
  title: 'Conférences',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(255),
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Miniature',
      type: 'image',
    }),
  ],
});
