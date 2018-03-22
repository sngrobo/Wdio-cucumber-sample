const config = {
    specs: [
        './test/features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
          args: ['start-maximized']
        }
    }],
    //services:['selenium-standalone'],
    logLevel: 'silent',
    coloredLogs: true,
    waitforTimeout: 1200000, 
    reporter: 'spec',
    framework: 'cucumber',
    cucumberOpts: { require: [ './test/steps/*.js', './test/utils/**/*.js',
                               './test/pageObjects/**/*.js' ], 
                    ignoreUndefinedDefinitions: false,
                    timeout:200000 },
    onPrepare: function (config, capabilities) {
      
    },
    beforeFeature: function (feature) {
    
    },
    beforeHook: function () {
      
    },
    before: function (capabilities, specs) {
    
     browser.addCommand("getUrlAndTitle", function () {
       return {
        url: this.getUrl(),
        title: this.getTitle()
       }
     })
    },
    beforeSuite: function (suite) {
    
    },
    after: function (result, capabilities, specs) {
      
    }

};
exports.config = config;