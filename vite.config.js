import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Add this line for relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})