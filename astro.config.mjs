import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.mixnblend.com',
  server: { host: '0.0.0.0', port: 4321 },
  trailingSlash: 'always',
});
