import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

const apiUrl = process.env.VITE_API_DOMAIN;


export default defineConfig({
  plugins: [react()],
  base: '/web_frontend_week03/',
  server: {
    proxy: {
      '/api': {
        target: apiUrl, 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
})
