import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
        name: 'phoneNumber',
      }).warning('Phone number is required.'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Address is required.'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().warning('A valid email is required.'),
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        defineField({
          name: 'startTime',
          title: 'Start Time',
          type: 'string',
          validation: (Rule) => Rule.required().regex(/^([1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/, {
            name: 'startTime',
          }).warning('Start time is required.'),
        }),
        defineField({
          name: 'endTime',
          title: 'End Time',
          type: 'string',
          validation: (Rule) => Rule.required().regex(/^([1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/, {
            name: 'endTime',
          }).warning('End time is required.'),
        }),
      ],
    }),
  ],
})
