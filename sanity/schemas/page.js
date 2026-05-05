import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Stage',
      type: 'reference',
      to: [{ type: 'hero' }],
    }),
    defineField({
      name: 'purpose',
      title: 'Vorteile-Sektion',
      type: 'reference',
      to: [{ type: 'purpose' }],
    }),
    defineField({
      name: 'taxBenefit',
      title: 'Steuervorteil-Sektion',
      type: 'reference',
      to: [{ type: 'taxBenefit' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
