import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/healthwise-boost', // Substitua 'kure-saude-digital' pelo nome do seu repositório
})
