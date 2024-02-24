const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1680,
  viewportHeight: 1050,
  e2e: {
    experimentalStudio:true,
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Inline Reporter',
      embeddedScreenshots: true, 
      inlineAssets: true, //Adds the asserts inline
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
