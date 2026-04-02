import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Serve the /mat folder as the static root so /mat/spendit_Logo.svg → /spendit_Logo.svg etc.
  publicDir: 'mat',
})
