import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio';

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  darkMode: 'class', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})


