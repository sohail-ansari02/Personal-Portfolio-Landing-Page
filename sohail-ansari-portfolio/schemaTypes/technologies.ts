import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Technology',
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
      validation: (Rule) =>
        Rule.required().max(120).warning('Subheading should not exceed 120 characters.'),
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: (Rule) =>
        Rule.required().max(300).warning('Paragraph should not exceed 300 characters.'),
    }),
    defineField({
      name: 'technologyList',
      title: 'Technology List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'logo',
              type: 'image',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one technology item.'),
    }),
  ],
})
