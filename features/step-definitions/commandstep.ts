import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import checkcommands from "../pageobjects/commandpage.ts";



When(/^click on menu bar button$/, async() => {
    await checkcommands.menu();


});


// Then(/^scroll upto element$/, async() => {
//     await checkcommands.scrollToElement('android=new UiSelector().text("Your Element Text")');
//    // await scrollToElement('android=new UiSelector().text("Your Element Text")');

	
// });
