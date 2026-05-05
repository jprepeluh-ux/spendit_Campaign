import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'taxBenefit',
  title: 'Steuervorteil-Sektion',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow-Text',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Überschrift',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Hervorgehobener Zusatz',
      type: 'string',
      description: 'Wird in Grün dargestellt.',
    }),
    defineField({
      name: 'body',
      title: 'Fließtext',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights (Checkliste)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Jede Zeile erscheint mit einem grünen Haken.',
    }),
    defineField({
      name: 'figures',
      title: 'Kennzahlen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Bezeichnung', type: 'string' }),
            defineField({ name: 'value', title: 'Wert', type: 'string' }),
            defineField({ name: 'sub', title: 'Zusatz', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'string',
      description: 'Rechtlicher Hinweis unter den Kennzahlen.',
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
