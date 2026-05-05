import { createClient } from '@sanity/client'

const inPresentation = typeof window !== 'undefined' && window.parent !== window

export const client = createClient({
  projectId: 'skiqfugm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: !inPresentation,
  stega: {
    enabled: inPresentation,
    studioUrl: '/studio',
  },
})
