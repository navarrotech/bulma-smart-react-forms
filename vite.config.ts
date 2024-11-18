// Copyright © 2024 Navarrotech

import { defineConfig } from 'vitest/config'

// Node.js
import path from 'path'

// Plugins
import react from '@vitejs/plugin-react-swc'
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths'
// https://www.npmjs.com/package/vite-dts
import dts from 'vite-plugin-dts'

// For more information regarding this configuration:
// https://vitejs.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    // Absolute imports:
    tsconfigPaths(),
    // React language + JSX:
    react(),
    // Typescript definitions:
    dts({
      exclude: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.test.ts',
        '**/*.test.tsx'
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'] // Outputs ESM and CJS formats
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  esbuild: {
    exclude: [
      '**/*.stories.ts',
      '**/*.stories.tsx',
      '**/*.test.ts',
      '**/*.test.tsx'
    ]
  }
})
