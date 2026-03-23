'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../../../studio/schemas'

const config = defineConfig({
  name: 'axis-designers',
  title: 'Axis Designers CMS',
  projectId: 'ks4zv4l4',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return <NextStudio config={config} unstable_noAuthBoundary />
}