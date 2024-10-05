import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sohail Ansari Portfolio',

  projectId: '0b59bqps',
  dataset: 'production',
  
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
