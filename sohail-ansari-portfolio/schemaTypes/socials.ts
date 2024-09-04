import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMediaList',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'link',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'icon',
      type: 'image',
    }),
  ],
})
