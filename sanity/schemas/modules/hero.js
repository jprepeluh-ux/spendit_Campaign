import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Stage',
  type: 'document',
  fields: [
    defineField({
      name: 'headlineStart',
      title: 'Überschrift',
      type: 'string',
      description: 'Der Haupttext der Headline (ohne hervorgehobenes Wort).',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Hervorgehobenes Wort',
      type: 'string',
      description: 'Wird animiert und in Grün dargestellt (z. B. "Plus").',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'subheadline',
      title: 'Unterzeile',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA-Button Text',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA-Button Link',
      type: 'string',
      description: 'z. B. "#kontakt" oder eine vollständige URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hintergrundbild',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-Text',
          type: 'string',
          description: 'Beschreibung des Bilds für Screenreader.',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'headlineStart',
      subtitle: 'headlineHighlight',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `${title} ${subtitle}`,
        media,
      }
    },
  },
})
