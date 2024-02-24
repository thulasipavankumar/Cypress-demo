const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
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
