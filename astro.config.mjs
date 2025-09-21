import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://inventorsingh.github.io',
  base: '/swasia',
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  output: 'static',
  i18n: {
    defaultLocale: 'hi',
    locales: ['hi', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    react()
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
          chunkFileNames: 'assets/[name].js',
          entryFileNames: 'assets/[name].js'
        }
      }
    }
  }
});
