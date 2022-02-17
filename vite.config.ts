import { defineConfig } from "vite";

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  build: {
    target: 'esnext',
    minify: 'esbuild'
  },
  plugins: [vue()]
})