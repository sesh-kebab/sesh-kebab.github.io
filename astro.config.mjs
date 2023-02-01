import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://sesh-kebab.github.io',
  base: '/sesh-kebab.github.io',
	integrations: [mdx(), sitemap()],
});
