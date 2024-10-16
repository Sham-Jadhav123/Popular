import { Given, When, Then} from "@wdio/cucumber-framework";

import scrollpage from "../pageobjects/scrollpage";



// When(/^click on transferir button$/, async() => {
//     await scrollpage.Facilidadesdepagos();
	
// });


// When(/^click on menu$/, async() => {
// 	await scrollpage.Facilidadesdepagos();
// });




When(/^click on tranferir buttton$/, async() => {
	await scrollpage.Facilidadesdepagos();
});


Then(/^check availabale balance$/,async() => {
    await scrollpage.availb();
	
});




// Then(/^transfer money which is greater than availabale balance<amount>$/, async() => {
//     await scrollpage.trans();
	
// });

// Then(/^amount "([^"]*)" for transfer$/,async(amount:string)=> {

 
//    // await scrollpage.trans(amount);
//       await scrollpage.trans(amount);
    

// });


Then(/^transfer amount which is greater than availabale balance$/, async() => {
	await scrollpage.trans(100);
});





Then(/^Error msg should be display$/, async() => {
    await scrollpage.clickbutton();
	
});








// Then(/^click on terceros button$/, async() => {
//     await scrollpage.terce();
	
// });



	
// When(/^i am scroll to the element with label "([^"]*)"$/, async(label:string) => {
// 	//await scrollpage.scrollToElement(label)
	
// });




