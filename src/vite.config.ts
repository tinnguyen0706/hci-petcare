import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    fs: { allow: ['..'] },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
    globals: true,
  },
})
