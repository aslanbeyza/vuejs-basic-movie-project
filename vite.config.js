// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tüm tireli (dash) tagları custom element olarak tanımla
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ]
})
