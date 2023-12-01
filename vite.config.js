// vite.config.js
/*
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {
      '/all': {
        target: 'https://mkitapi.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/all/, '/all'),
      },
    },
  },
});


*/






import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
