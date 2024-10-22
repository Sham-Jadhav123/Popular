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



Then(/^Enter USD amount value$/, async() => {
    await TercerosUSD.EnterUSD();
	
});



Then(/^Enter descriptions for USD amount transfe$/, async() => {
	
    await TercerosUSD.EnterDiscriptionUSD();
});



Then(/^click on the continue button for USD Trans$/, async() => {
    await TercerosUSD.clickonContinueUSD();
	
});



Then(/^click on the Si transfer button for USD$/, async() => {
    await TercerosUSD.SitransfeririButtonUSD();
	
});




// Then(/^click on the Si transfer button$/, async() => {
	
// });

// Then(/^enter tocken for Transaction$/, async() => {
	
// });
