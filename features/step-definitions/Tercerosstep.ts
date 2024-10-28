import { Given, When,  Then} from "@wdio/cucumber-framework";
import Terceros from "../pageobjects/Tercerospage.ts";




When(/^successfully login click on transferi button$/, async() => {
    await Terceros.TransferirButton();
	
});


Then(/^click on Terceros$/, async() => {
    await Terceros.TercerosButton();
	
});

Then(/^select user selected account$/, async() => {
    await Terceros.seleccionaButton();
	
});



Then(/^select  account$/, async() => {
    await Terceros.SelectAccount();
	
});

Then(/^select benificiary$/,async() => {
    await Terceros.selectbenificiary();
	
});

Then(/^enter amount$/, async() => {
    await Terceros.EnterAmount();
	
});

Then(/^Enter descriptions$/, async() => {
    await Terceros.EnterDiscription();
	
});

Then(/^click on continue button$/, async() => {
    await Terceros.clickonContinue();
	
});

// Then(/^click on Si transfer button$/, async() => {
//     await Terceros.SitransfeririButton();
	
// });

// Then(/^enter tocken$/, async() => {
//     await Terceros.EnterToken();
	
// });



When(/^user login to app click on transferi$/, async() => {
    await Terceros.transferirButton1();
	
});



Then(/^click on Terceros button$/, async() => {
    await Terceros.TercerosButton1();
	
});

Then(/^select   user  account should be USD$/, async() => {
    await Terceros.seleccionaButton1();
	
});

Then(/^select USD account$/, async() => {
    await Terceros.selectUSDacc();
	
});

Then(/^select USD benificiary$/, async() => {
    await Terceros.USDAcc();
	
});

Then(/^enter USD amount$/, async() => {
    await Terceros.EnterUSD();
	
});

// Then(/^Enter descriptions for USD Transaction$/, async() => {
//     await Terceros.EnterDiscriptionUSD();

// });

Then(/^click on the continue button$/,async() => {
    await Terceros.clickonContinueUSD();

});

// Then(/^click on the Si transfer button$/, async() => {
//     await Terceros.SitransfeririButtonUSD();

// });

// Then(/^enter tocken for Transaction$/,async() => {
	
// });



