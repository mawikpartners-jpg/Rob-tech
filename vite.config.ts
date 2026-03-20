import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/demo/rob-tech/',   // domena główna = slash

  plugins: [react()],
})
