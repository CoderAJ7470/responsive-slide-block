import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/responsive-slide-block',
  plugins: [react()],
  server: {
    port: 3000,
    open: '/',
  },
  assetsInclude: ['**/*.JPG'],
});

