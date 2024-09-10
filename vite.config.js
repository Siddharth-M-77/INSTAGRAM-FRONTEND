// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://instagram-backend-6212.onrender.com',
        changeOrigin: true,
        secure: false, // If using self-signed certificates
      
      },
    },
  },
});
