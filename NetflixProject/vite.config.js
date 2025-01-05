import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      common: "/src/common",
      icons: "/src/icons",
      pages: "/src/pages",
    },
  },
})
