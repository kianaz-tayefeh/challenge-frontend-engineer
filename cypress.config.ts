import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  viewportHeight: 1000,
  viewportWidth: 1280,
  // firefoxGcInterval: null,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  env: {
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: 'http://localhost:3001/__coverage__',
    },
  },
  experimentalStudio: true,
  projectId: 'a4c22c',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    // return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: 'http://localhost:3001',
    specPattern: 'cypress/tests/**/*.{js,jsx,ts,tsx}',
  },
})
