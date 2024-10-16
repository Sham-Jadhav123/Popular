import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import loginPage from '../pageobjects/login.page';
import scrollpage from '../pageobjects/scrollpage';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

 When(/^I login with (\w+) and (.+)$/, async (username:string, password:string) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async () => {
     await expect(SecurePage.flashAlert).toBeExisting();
     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining());
   // await LoginPage.checkMessage(msg);
});

// When('i am scroll the element with label {string}', (s: string) => {
//   // Write code here that turns the phrase above into concrete actions
// })


// When(/^i am scroll the screen$/,async () => {
//     await scrollpage.Scroll_Home()

	
// });


//     When(/^click on transferir button$/, async() => {
//     await scrollpage.clickbutton()
	
// });



// Then(/^text should be display$/, async () => {
//     // const text= await loginPage.print_text();
//     // console.log('text of the element is:', text);
//     // const home = await $("//*[@class = 'android.widget.TextView' and (@text = 'Ahorro' or . = 'Ahorro')]");
//     // await expect(home).toBeDisplayed();
// 	await LoginPage.checkMessage();
// });





 


// Given(/^open apk and verify open page$/, async() => {
// 	await loginPage.openapk();
// });

// Then(/^click on abc button$/, async() => {
// 	await loginPage.allowapk();
// });

// Then(/^handle the flashscreen$/, async() => {
// 	await loginPage.acc();
// });

// Then(/^user enter the id and password$/, async() => {
// 	await loginPage.idpass();
// });

// Then(/^click on the login buttion$/, async() => {
// 	await loginPage.submit();
// });








