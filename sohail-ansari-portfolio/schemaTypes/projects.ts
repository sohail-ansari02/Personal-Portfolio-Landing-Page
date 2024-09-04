import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
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
      name: 'projectsList',
      title: 'Projects List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'projectItem',
          title: 'Project Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Project name is required.'),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required().warning('Project image is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one project item.'),
    }),
  ],
})
