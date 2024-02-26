const { defineConfig } = require("cypress");
module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportWidth: 1680,
  viewportHeight: 1050,
  e2e: {
    experimentalStudio:true,
    video: false,
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
