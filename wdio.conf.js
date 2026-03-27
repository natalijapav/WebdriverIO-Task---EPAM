exports.config = {

    runner: 'local',
    specs: ['./src/specs/**/*.js'],
    exclude: [ ],
    maxInstances: 1,
   
    capabilities: [
    {browserName:'chrome'},
    {browserName: 'MicrosoftEdge'}],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services:['visual'],
    framework: 'mocha',
    
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

   
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
