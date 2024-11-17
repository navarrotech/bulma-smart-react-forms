// Copyright © 2024 Navarrotech

import { defineConfig } from 'vitest/config'

// Node.js
import path from 'path'

// Plugins
import react from '@vitejs/plugin-react-swc'
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths'

// For more information regarding this configuration:
// https://vitejs.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    // Absolute imports:
    tsconfigPaths(),
    // React language + JSX:
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})
