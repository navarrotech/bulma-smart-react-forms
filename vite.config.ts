// Copyright © 2024 Navarrotech

import { defineConfig } from 'vite'

// Node.js
import path from 'path'

// Plugins
import react from '@vitejs/plugin-react-swc'
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths'
// https://www.npmjs.com/package/vite-plugin-svgr
import svgr from 'vite-plugin-svgr'
// https://www.npmjs.com/package/vite-plugin-cesium
import cesium from 'vite-plugin-cesium'
// https://www.npmjs.com/package/vite-plugin-full-reload
import fullReload from 'vite-plugin-full-reload'
// Must polyfill node modules (like "global") for the browser
// Required for some NPM plugins to work in the browser
// https://github.com/vitejs/vite/discussions/5912#discussioncomment-1724947
// https://www.npmjs.com/package/vite-plugin-node-polyfills
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    // Absolute imports:
    tsconfigPaths(),
    // React language + JSX:
    react(),
    // Svgs:
    svgr(),
    // Cesium:
    cesium(),
    // Full reload when i18next en/translation.json changes:
    fullReload(['public/locales/**/*.json']),
    // Polyfill node modules for the browser:
    nodePolyfills(),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @use '@/sass/theme.sass' as *
          @use 'sass:color'
        `,
      },
      scss: {
        additionalData: `
          @use '@/sass/theme.sass' as *;
          @use 'sass:color';
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})
