import { Given, When,  Then} from "@wdio/cucumber-framework";
import TercerosUSD from "../pageobjects/TercerosUSDpage.ts";


When(/^user click on the transfe button$/, async() => {

    await TercerosUSD.TransferirBtn();
	
});


Then(/^click on Tercero btn$/, async() => {
    await TercerosUSD.TercerosBtn();

});

Then(/^select USD acc$/, async() => {
    await TercerosUSD.selectionfield();
	
});


Then(/^select account$/, async() => {
    await TercerosUSD.selectUSDacc();
	
});



Then(/^select USD acc benificiary$/, async() => {
    await TercerosUSD.USDAcc();
	
});




Then(/^enter USD amount$/, async() => {
	
});

Then(/^Enter descriptions for USD Transaction$/, async() => {
	
});

Then(/^click on the continue button$/, async() => {
	
});

Then(/^click on the Si transfer button$/, async() => {
	
});

Then(/^enter tocken for Transaction$/, async() => {
	
});
