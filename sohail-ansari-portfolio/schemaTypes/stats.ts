import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required().max(60).warning('Keep the heading concise.'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required().max(120).warning('Subheading should not exceed 120 characters.'),
    }),
    defineField({
      name: 'statInformation',
      title: 'Stat Information',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statItem',
          title: 'Stat Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Stat name is required.'),
            }),
            defineField({
              name: 'info',
              title: 'Information',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Stat information is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one stat item.'),
    }),
  ],
})
