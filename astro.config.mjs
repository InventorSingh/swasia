import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://inventorsingh.github.io',
  base: '/swasia',
  outDir: './dist',
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
  ]
});
