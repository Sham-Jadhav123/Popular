import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import checkcommands from "../pageobjects/commandpage.ts";
import commandpage from '../pageobjects/commandpage.ts';



When(/^click on menu bar button$/, async() => {
    await checkcommands.menu();


});


// Then(/^scroll upto element$/, async() => {
//     const timestampElement = await checkcommands.scrollToElement();
    
// });

Then(/^user select the account no$/, async() => {



// 	const timestampElement = await commandpage.getTimestampElement();
//    const isVisible = await timestampElement.isDisplayed();
//    if (isVisible) {
//       await timestampElement.click(); // Click the timestamp element
//   } else {
//       throw new Error(`The timestamp "23/09/2024 02:14 PM" is not visible.`);
//   }
 
});

// Then(/^click on the accoundt no$/, async() => {
//     const timestampElement = await commandpage.getTimestampElement();
//     const isVisible = await timestampElement.isDisplayed();

//     expect(isVisible).toBeClickable();
//  });
