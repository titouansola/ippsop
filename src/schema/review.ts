import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'review',
  title: 'Avis Google',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: "Nom d'utilisateur",
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'Photo de profil',
      type: 'url',
    }),
    defineField({
      name: 'rate',
      title: 'Note',
      type: 'number',
      validation: (rule) => rule.required().min(0).max(5),
    }),
    defineField({
      name: 'comment',
      title: 'Commentaire',
      type: 'text',
    }),
  ],
});
