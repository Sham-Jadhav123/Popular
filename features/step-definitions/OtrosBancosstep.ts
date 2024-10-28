import { Given, When,  Then} from "@wdio/cucumber-framework";
import Otros from '../pageobjects/Otrosbancopage.ts';



When(/^successfully login click on  the transferi button$/, async() => {
  await  Otros.clickonTransferirbutton();
	
});


Then(/^click on  the Otros bancos$/, async() => {
	await Otros.clickonotros();
});


Then(/^select user acc$/, async() => {
    await Otros.account();
	
});

Then(/^select the  benificiary$/, async() => {
    await Otros.beni();

});

Then(/^enter rd amount$/, async() => {
    await Otros.amount();
	
});

Then(/^select radio button$/, async() => {
    await Otros.radiobtn();
	
});
