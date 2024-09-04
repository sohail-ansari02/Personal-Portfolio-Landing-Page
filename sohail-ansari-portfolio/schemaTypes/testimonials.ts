import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'feedbackList',
      title: 'Feedback List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feedbackItem',
          title: 'Feedback Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Name is required.'),
            }),
            defineField({
              name: 'profession',
              title: 'Profession',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Profession is required.'),
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => 
                Rule.required()
                  .min(1).max(5)
                  .warning('Rating must be between 1 and 5.'),
            }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required().warning('Photo is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one feedback item.'),
    }),
  ],
})
