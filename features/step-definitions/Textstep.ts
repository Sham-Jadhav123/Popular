import { Given, When, Then} from "@wdio/cucumber-framework";
import Transferir from "../pageobjects/textpage.ts";

//import scrollpage from "../pageobjects/scrollpage";


When(/^click on transferir button$/, async() => {
 await Transferir.clicktransferi();
	
});


Then(/^Select terceros$/, async() => {
    await Transferir.clickontercero();

});


Then(/^select benificiary account$/, async() => {
    await Transferir.selectbenificiary();

});


Then(/^click on account$/, async() => {
    await Transferir.selectacc();
	
});


Then(/^transfer zero amount$/, async() => {
    await Transferir.enteramount();
	
});


// Then(/^Transfer "([^"]*)" amount$/, async(trans) => {

// await Transferir.enteramount(trans);
	
// });



