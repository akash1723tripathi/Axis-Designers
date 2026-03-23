import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemas'

export default defineConfig({
  name: 'axis-designers',
  title: 'Axis Designers CMS',
  projectId: 'ks4zv4l4',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})