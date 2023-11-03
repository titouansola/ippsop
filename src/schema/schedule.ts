import { defineField, defineType } from 'sanity';
import { orderedWeekdays } from '@ippsop/lib/constants/weekdays';
import { SCHEDULE_TAG_NAME } from '@ippsop/lib/constants/tag-names';

export default defineType({
  name: SCHEDULE_TAG_NAME,
  title: 'Horaires',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Jour',
      type: 'string',
      options: {
        list: orderedWeekdays.map((day) => ({ title: day, value: day })),
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'opened',
      title: 'Ouvert',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'opensAt',
      title: "Horaire d'ouverture",
      type: 'string',
      description: "Horaire d'ouverture au format 09h00",
      hidden: ({ document }) => !document?.opened,
      validation: (Rule) => Rule.regex(/^\d{2}h\d{2}$/),
    }),
    defineField({
      name: 'closesAt',
      title: 'Horaire de fermeture',
      type: 'string',
      description: 'Horaire de fermeture au format 09h00',
      hidden: ({ document }) => !document?.opened,
      validation: (Rule) => Rule.regex(/^\d{2}h\d{2}$/),
    }),
  ],
});
