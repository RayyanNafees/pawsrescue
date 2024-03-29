import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'server',
  adapter: netlify(),
})
