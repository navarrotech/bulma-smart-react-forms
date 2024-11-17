// Copyright © 2024 Navarrotech

import { defineConfig } from 'vitest/config'

import config from './vite.config'

// For more information regarding this configuration:
// https://vitest.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  ...config,
  test: {
    passWithNoTests: true,

    // Reporting:
    reporters: [
      'verbose',
      'junit',
      'github-actions'
    ],
    outputFile: {
      'junit': './test-results.xml',
      'github-actions': './test-results.json',
    },

    // Coverage (V8)
    coverage: {
      enabled: true,
      reporter: [
        'text-summary',
      ],
      reportsDirectory: './coverage',
      provider: 'v8',
    },

    // Typescript
    typecheck: {
      enabled: true,
      allowJs: false,
      
    },

    // React.js:
    globals: true,
    environment: 'happy-dom',

    // Circle CI:
    minWorkers: 2,
    maxWorkers: 3,
    logHeapUsage: true,

    // Exclude node modules:
    exclude: [
      'node_modules/**',
    ],

    // Debugging:
    onStackTrace(error, { file, }): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return false
      }

      // Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false
      }

      return true
    },
  },
})
