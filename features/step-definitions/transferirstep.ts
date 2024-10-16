import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import transferir from '../pageobjects/transferir';



When(/^click on transferir button$/, async() => {
    await transferir.tranfrir();
	
});


Then(/^click on terceros button$/, async() => {
    await transferir.tercerButton();
	
});


Then(/^click on selecciona button$/, async() => {
    await transferir.benificiary();
	
});


Then(/^select account$/, async() => {
	
});


Then(/^check available balance$/, async() => {
	
});


Then(/^enter transfer ammount$/, async() => {
	
});


