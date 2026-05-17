// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), swup({
  })],
});