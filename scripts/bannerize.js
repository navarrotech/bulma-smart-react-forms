// Copyright © 2024 Navarrotech

/* eslint-disable */

// PURPOSE:
// This script will add a copyright header to all dist/ files

// To run:
// yarn run bannerize

import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path, { join } from 'path'

// Settings
const DEBUG = false

// Defs
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Entry directory
const DIST_DIR = join(__dirname, '../dist')

// Automatically fetch the current year
const CURRENT_YEAR = new Date().getFullYear()

// The copyright header to prepend
const COPYRIGHT_HEADER_TEMPLATE = `// Copyright © ${CURRENT_YEAR} Navarrotech\n\n`

let headerCount = 0

// Recursively process files in a directory
const addHeaderToFiles = (dir) => {
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const entryPath = join(dir, entry)
    const stats = statSync(entryPath)

    if (stats.isDirectory()) {
      // If the entry is a directory, process it recursively
      addHeaderToFiles(entryPath)
    }
    else if (entry.endsWith('.js') || entry.endsWith('.d.ts')) {
      headerCount++

      // If the file is a .js or .d.ts, add the copyright header
      const content = readFileSync(entryPath, 'utf-8')

      // Skip adding the header if it already exists
      if (!content.startsWith(COPYRIGHT_HEADER_TEMPLATE)) {
        const updatedContent = COPYRIGHT_HEADER_TEMPLATE + content
        writeFileSync(entryPath, updatedContent, 'utf-8')
        if (DEBUG) {
          console.log(`Added header to: ${entryPath}`)
        }
      }
    }
    else {
      if (DEBUG) {
        console.log(`Skipped: ${entryPath}`)
      }
    }
  }
}

// Entry point
try {
  console.log(`Adding copyright banner to files in directory: ${DIST_DIR}`)
  addHeaderToFiles(DIST_DIR)
  console.log(`Added copyright banner to ${headerCount} files`)
}
catch (err) {
  console.error('Error processing files:', err)
}
