//require('dotenv').load();




exports.config = {
  seleniumServerJar: './gulp-angular-protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',//process.env.SERVER
  specs: [
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2500000
  },
  //Un comment belwo code to run on headless browser
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  }
};
