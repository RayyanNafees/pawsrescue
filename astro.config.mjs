import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "hybrid",
  adapter: netlify()
});