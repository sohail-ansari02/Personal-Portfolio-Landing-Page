import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required().max(60).warning('Keep the heading concise.'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: Rule => Rule.required().max(120).warning('Subheading should not exceed 120 characters.'),
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
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: Rule => Rule.required().max(300).warning('Paragraph should not exceed 300 characters.'),
    }),
    defineField({
      name: 'contactButton',
      title: 'Contact Button Text',
      type: 'string',
      validation: Rule => Rule.required().max(20).warning('Button text should be short.'),
    }),
    defineField({
      name: 'downloadCVButton',
      title: 'Download CV Button Text',
      type: 'string',
      validation: Rule => Rule.required().max(20).warning('Button text should be short.'),
    }),
  ],
})
