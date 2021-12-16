
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('XYZ_Bank_App', function() {
                    it('Deposit_data1', function() {
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 5000;
                        browser.sleep(3000);
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');

                                                element.all(by.xpath('//button')).get(2).getText().then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Text.set('//button[2]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[2]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(2).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[2]', text);
                                                }
                                               else
                                                {
                                                Get_Attribute.set('//button[2]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                                element.all(by.xpath('//button')).get(2).click();
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//select[@name="userSelect"]//option[@value="2"]'))), delay, 'Element taking too long to appear in the DOM');
                                element.all(by.xpath('//select[@name="userSelect"]//option[@value="2"]')).getText().then(function (text) {
                            if( typeof text ==='object')
                            {
                            Get_Text.set('//select[@name="userSelect"]//option[@value="2"]', text);
                            }
                            else
                            {
                            Get_Text.set('//select[@name="userSelect"]//option[@value="2"]', text[0]);
                            }  
                            });
                            element.all(by.xpath('//select[@name="userSelect"]//option[@value="2"]')).getAttribute('value').then(function (text) {
                            if( typeof text ==='object')
                            {
                            Get_Attribute.set('//select[@name="userSelect"]//option[@value="2"]', text);
                            }
                            else
                            {
                            Get_Attribute.set('//select[@name="userSelect"]//option[@value="2"]', text[0]);
                            }  
                            });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                element(by.xpath('//select[@name="userSelect"]//option[@value="2"]')).click();
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');

                                                element.all(by.xpath('//button')).get(2).getText().then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Text.set('//button[2]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[2]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(2).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[2]', text);
                                                }
                                               else
                                                {
                                                Get_Attribute.set('//button[2]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                                element.all(by.xpath('//button')).get(2).click();
browser.sleep(3000);
                                   element.all(by.xpath(`//select[@name="userSelect"]//option[@value="2"]`)).isPresent().then(function (text) {
                                       console.log("presence");
                                       var assert='';
                                       if (text == true){
                                           console.log('xpath in same page');

                                            element.all(by.xpath(`//select[@name="userSelect"]//option[@value="2"]`)).getText().then(function (text){
                                                if( typeof text ==='object')
                                                    {
                                                    assert=text[0];
                                                    }
                                                    else
                                                    {
                                                    assert=text;
                                                    }  
                                                console.log("assert",assert);});
                                            }
                                       else{
                                            if("getText()"=="getText()"){
                                           assert=Get_Text.get(`//select[@name="userSelect"]//option[@value="2"]`)  }
                                           if("getText()"=="getAttribute('value')"){
                                           assert=Get_Attribute.get(`//select[@name="userSelect"]//option[@value="2"]`)  }
                                           if( typeof assert ==='object')
                                            {
                                            assert=assert[0];
                                            }
                                            else
                                            {
                                            assert=assert;
                                            }
                                            }
                                         element.all(by.xpath(`/html/body/div/div/div[2]/div/div[1]/strong/span`)).getText().then(function (text) {
                                       var assert1='';
                                       if( typeof text ==='object')
                                        {
                                        assert1=text[0];
                                        }
                                        else
                                        {
                                        assert1=text;
                                        }
                                    console.log(assert);
                                    if (assert1.indexOf(assert)!== -1){
                                   console.log('Assertion Passed: Expected', assert1, `for the Xpath/html/body/div/div/div[2]/div/div[1]/strong/span contain `, assert, '. :Assertion Passed');
                                    }else{
                                   console.log('Assertion Failed: Expected', assert1, `for the Xpath/html/body/div/div/div[2]/div/div[1]/strong/span But has`, assert , '. :Assertion Failed');
                                   browser.quit();
                                    }
                                        });

                                   });  

                            
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(3)), delay, 'Element taking too long to appear in the DOM');

                                                element.all(by.xpath('//button')).get(3).getText().then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Text.set('//button[3]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[3]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(3).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[3]', text);
                                                }
                                               else
                                                {
                                                Get_Attribute.set('//button[3]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                                element.all(by.xpath('//button')).get(3).click();
browser.sleep(3000);
                                        browser.wait(until.presenceOf(element(by.xpath('//input'))), delay, 'Element taking too long to appear in the DOM');
                                        element(by.xpath('//input')).clear();
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                        element(by.xpath('//input')).sendKeys("1000");
                                        element.all(by.xpath('//input')).getText().then(function (text) {
                                        if( typeof text ==='object')
                                        {
                                        Get_Text.set('//input', text);
                                        }
                                        else
                                        {
                                        Get_Text.set('//input', text[0]);
                                        }  
                                        });
                                        element.all(by.xpath('//input')).getAttribute('value').then(function (text) {
                                        if( typeof text ==='object')
                                        {
                                        Get_Attribute.set('//input', text);
                                        }
                                        else
                                        {
                                        Get_Attribute.set('//input', text[0]);
                                        }  
                                        });
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(5)), delay, 'Element taking too long to appear in the DOM');

                                                element.all(by.xpath('//button')).get(5).getText().then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Text.set('//button[5]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[5]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(5).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[5]', text);
                                                }
                                               else
                                                {
                                                Get_Attribute.set('//button[5]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                                element.all(by.xpath('//button')).get(5).click();
browser.sleep(3000);
                   var assert='';
                    element.all(by.xpath(`/html/body/div/div/div[2]/div/div[4]/div/span`)).getText().then(function (text) {
                    if( typeof text ==='object')
                            {
                            assert=text[0];
                            }
                            else
                            {
                            assert=text;
                            }
                        if (assert.indexOf( "Deposit Successful")!== -1){
                            console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/div/div/div[2]/div/div[4]/div/span contain Deposit Successful. :Assertion Passed` );

                        }else{
                            console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/div/div/div[2]/div/div[4]/div/span But has Deposit Successful. :Assertion Failed`);
                            browser.quit();
                        }

                    });

                
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(1)), delay, 'Element taking too long to appear in the DOM');

                                                element.all(by.xpath('//button')).get(1).getText().then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Text.set('//button[1]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[1]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(1).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[1]', text);
                                                }
                                               else
                                                {
                                                Get_Attribute.set('//button[1]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                                element.all(by.xpath('//button')).get(1).click();

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(0)), delay, 'Element taking too long to appear in the DOM');

                                            element.all(by.xpath('//button')).get(0).getText().then(function (text) {
                                                if( typeof text ==='object')
                                               {
                                                Get_Text.set('//button[0]', text);
                                                }
                                                else
                                                {
                                                Get_Text.set('//button[0]', text[0]);
                                                }  
                                                });
                                                element.all(by.xpath('//button')).get(0).getAttribute('value').then(function (text) {
                                                if( typeof text ==='object')
                                                {
                                                Get_Attribute.set('//button[0]', text);
                                                }
                                                else
                                                {
                                                Get_Attribute.set('//button[0]', text[0]);
                                                }  
                                                });
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Recorded_Scenarios\\XYZ_Bank_App\\Deposit_data1";
                        var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
                                            element.all(by.xpath('//button')).get(0).click();browser.sleep(3000);});
});