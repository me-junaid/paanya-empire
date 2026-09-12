// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// @ts-ignore
const isVercel = typeof process !== 'undefined' && process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: isVercel ? vercel() : node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
