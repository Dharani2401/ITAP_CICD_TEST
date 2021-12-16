
             exports.config = {
            framework: 'jasmine',
            seleniumAddress: 'http://localhost:4444/wd/hub',
            specs: ['spec.js'],
            multiCapabilities: [
            {
                "browserName":"chrome",
                "shardTestFiles":true,
                "chromeOptions":{
                    "args":["--disable-gpu","-disable-dev-shm-usage","--no-sandbox","-disable-popup-blocking","--start-maximized","--disable-web-security","--allow-running-insecure-content","--disable-infobars"]
                }
            }
        ],
        useAllAngular2AppRoots: true,
      onPrepare: function(){
		   // Getting CLI report      
			//   const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
			//  jasmine.getEnv().addReporter(new SpecReporter({
			//  spec: {
			//	displayStacktrace: true
			//  }
		//	}));
	//Getting XML report    
			var jasmineReporters = require('jasmine-reporters');
			jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			   consolidateAll: true,
			   filePrefix: 'guitest-xmloutput',
			   savePath: 'D:\\Recorded_Scenarios\\xyz-bank-demo\\test-1_data1'
			}));
	//Getting screenshots  
		var fs = require('fs-extra');
		fs.emptyDir('screenshots/', function (err) {
				 console.log(err);
			 });
			 jasmine.getEnv().addReporter({
				 specDone: function(result) {
					 if (result.status == 'failed') {
						 browser.getCapabilities().then(function (caps) {
							 var browserName = caps.get('browserName');
							 browser.takeScreenshot().then(function (png) {
							var stream = fs.createWriteStream(`D:\\Recorded_Scenarios\\xyz-bank-demo\\test-1_data1\\screenshots`+ browserName + '-' + result.fullName+ '.png');
							stream.write(new Buffer.from(png, 'base64'));
								 stream.end();
							 });
						 });
					 }
				 }
			 });
			 }, 
		 onComplete: function() {
			 //Getting HTML reportvar browserName, browserVersion;
			 var capsPromise = browser.getCapabilities();
			 capsPromise.then(function (caps) {
				browserName = caps.get('browserName');
				browserVersion = caps.get('version');
				platform = caps.get('platform');
				var HTMLReport = require('protractor-html-reporter-2');
				testConfig = {
					reportTitle: 'Protractor Test Execution Report',
					outputPath: 'D:\\Recorded_Scenarios\\xyz-bank-demo\\test-1_data1',
					outputFilename: 'ProtractorTestReport',
					screenshotPath: `D:\\Recorded_Scenarios\\xyz-bank-demo\\test-1_data1\\screenshots`,
					testBrowser: browserName,
					browserVersion: browserVersion,
					modifiedSuiteName: false,
					screenshotsOnlyOnFailure: true,
					testPlatform: platform
				};
				new HTMLReport().from(`D:\\Recorded_Scenarios\\xyz-bank-demo\\test-1_data1\\guitest-xmloutput.xml`, testConfig);
			});
		},
       getPageTimeout: 20000,
                    allScriptsTimeout: 3000000,
                    jasmineNodeOpts: {defaultTimeoutInterval: 3000000},
                    defaultTimeoutInterval: 3000000
      }
        