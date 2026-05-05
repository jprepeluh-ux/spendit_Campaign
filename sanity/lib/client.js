import { createClient } from '@sanity/client'

const inPresentation = typeof window !== 'undefined' && window.parent !== window

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'skiqfugm',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: !inPresentation,
  stega: {
    enabled: inPresentation,
    studioUrl: '/studio',
  },
})
