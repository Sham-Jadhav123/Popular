
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import keyboard from "../pageobjects/keyboardpage.ts";




When(/^click on Trnsferiri button$/, async() => {
    await keyboard.TransferirButton();

});

Then(/^click on terceroc button$/, async() => {
    await keyboard.TercerosButton();
	
});

Then(/^click on select benificiary$/, () => {
	
});

Then(/^click on account holder$/, () => {

	
});

Then(/^Enter value using keyboard$/, async() => {
    await keyboard.EnterAmount();
	
});


// Then(/^enter value is "([^"]*)"$/, async(number) => {
//     await keyboard.EnterAmount(number);
	
// });
