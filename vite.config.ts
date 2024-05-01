import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  // resolve: {
  //   alias: {
  //     src: path.resolve(__dirname, './src')
  //   }
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
