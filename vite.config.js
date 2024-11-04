import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
        //cname: resolve(__dirname, 'public/CNAME'),
      },
    },
  },
  server: {
    fs: {
      // Allow serving robots.txt and sitemap.txt
      allow: ['.', 'robots.txt', 'sitemap.txt'],
    },
      mimeTypes: {
            '.jsx': 'application/javascript'
        },
  },
});
