import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/-josesampedro-portfolio/', // ← nombre del repo, con el guion inicial
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})