// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://rsstst.github.io',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ['placehold.co']
  },

  integrations: [mdx(), swup({})],
});