import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutMe',
  title: 'About Me',
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one skill.'),
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{
        title: 'Award Item',
        name: 'awardItem',
        type: 'object',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Award Name',
          },
          {
            name: 'orgName',
            type: 'string',
            title: 'Organization Name',
          },
        ]
      }],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one award.'),
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          title: 'Education Item',
          name: 'educationItem',
          type: 'object',
          fields: [
            {
              name: 'instituteName',
              title: 'Institute Name',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Institute name is required.'),
            },
            {
              name: 'courseName',
              title: 'Course Name',
              type: 'string',
            },
            {name: 'passingYear', title: 'Passing Year', type: 'number'},
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one education entry.'),
    }),
    defineField({
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('Profile photo is required.'),
    }),
  ],
})
