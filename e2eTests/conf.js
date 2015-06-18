exports.config = {
    allScriptsTimeout: 11000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: [
    'scenario-specs.js'
  ],

    capabilities: {
        'browserName': 'chrome'
    },

    //baseUrl: 'http://localhost:8000/app/',
    baseUrl: 'http://127.0.0.1:49760/www/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};