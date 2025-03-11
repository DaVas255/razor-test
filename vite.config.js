import inject from "@rollup/plugin-inject";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    inject({   // => that should be first under plugins array
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
})
