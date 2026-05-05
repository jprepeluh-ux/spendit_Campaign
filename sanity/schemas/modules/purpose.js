import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'purpose',
  title: 'Vorteile-Sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow-Text',
      type: 'string',
      description: 'Kleiner Text über der Headline (z. B. "Warum Lunchit?")',
    }),
    defineField({
      name: 'headline',
      title: 'Überschrift',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Einleitungstext',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'benefits',
      title: 'Vorteile',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Herz', value: 'Heart' },
                  { title: 'Trend aufwärts', value: 'TrendingUp' },
                  { title: 'Personen', value: 'Users' },
                  { title: 'Lächeln', value: 'Smile' },
                  { title: 'Stern', value: 'Star' },
                  { title: 'Blitz', value: 'Zap' },
                  { title: 'Schild', value: 'Shield' },
                  { title: 'Auszeichnung', value: 'Award' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Beschreibung',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'iconName' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
