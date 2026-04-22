import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fukugyo-career-navi.myyr1-1108.workers.dev',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
