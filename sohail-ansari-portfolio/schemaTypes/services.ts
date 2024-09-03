import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
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
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required().max(300).warning('Paragraph should not exceed 300 characters.'),
    }),
    defineField({
      name: 'servicesArray',
      title: 'Services Array',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Service Item',
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              validation: (Rule) => Rule.required().warning('Logo image is required.'),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Service name is required.'),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required().warning('Service description is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one service item.'),
    }),
  ],
})
