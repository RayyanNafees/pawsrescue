import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'hybrid',
  adapter: netlify({
    edgeMiddleware: true,
  }),
})
