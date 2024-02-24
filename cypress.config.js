const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/my-test-output.xml',
      toConsole: true,
    },
    setupNodeEvents(on, config) {
     
    },
  },
});
