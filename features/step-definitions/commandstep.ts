import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import checkcommands from "../pageobjects/commandpage.ts";
import commandpage from '../pageobjects/commandpage.ts';



When(/^click on menu bar button$/, async() => {
    await checkcommands.menu();


});


Then(/^click on the accoundt$/, async() => {
    await checkcommands.Scroll();
   
});


// When(/^i scroll the screen upto "([^"]*)"$/, async() => {
// 	await checkcommands.Scroll();
// });


// Then(/^I see the text "([^"]*)"$/, async() => {

//     const isVisible = await checkcommands.isTextVisible();
//     if (!isVisible) {
//         throw new Error(`Element with text "ROCO" is not visible.`);
//     }
	
// });
