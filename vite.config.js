import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ensure build output is optimized for production
    minify: 'terser',
    // Add source maps for better debugging
    sourcemap: true
  },
  // Add base URL configuration for production
  base: './'
})