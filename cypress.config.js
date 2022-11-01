module.exports = {
  defaultCommandTimeout: 30000,
  projectId: "tog3xb",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://app.pitch.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
