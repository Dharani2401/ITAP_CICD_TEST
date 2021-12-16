
              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              const Get_Text = new Map();
              const Get_Attribute = new Map();
              describe('xyz-bank-demo', function() {
                    it('test-1_data1', function() {
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
element.all(by.xpath('//button')).get(2).click();
browser.sleep(500);
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//select[@name="userSelect"]//option[@value="2"]'))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath('//select[@name="userSelect"]//option[@value="2"]')).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');
element.all(by.xpath('//button')).get(2).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(3)), delay, 'Element taking too long to appear in the DOM');
element.all(by.xpath('//button')).get(3).click();
browser.sleep(500);
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//input'))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath('//input')).clear();
element(by.xpath('//input')).sendKeys("2000");

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(5)), delay, 'Element taking too long to appear in the DOM');
element.all(by.xpath('//button')).get(5).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(1)), delay, 'Element taking too long to appear in the DOM');
element.all(by.xpath('//button')).get(1).click();
browser.sleep(500);

browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(0)), delay, 'Element taking too long to appear in the DOM');
element.all(by.xpath('//button')).get(0).click();
browser.sleep(500);
browser.sleep(3000);});
});