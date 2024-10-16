
import { $, browser, driver, expect } from '@wdio/globals'
//import { key} from 'webdriverio'
import Page from './page';
//import { browser } from '@webdriverio';


class scrollpage extends Page{

   public get menu () {
 
     // menu
     return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]");
   }

   public get transf () {
 
      // menu
     // return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]");
return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]");
   //return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[5]/android.view.View[1]/android.widget.TextView[1]");
   // return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[5]/android.view.View[1]/android.view.View[1]");


   }

   public get tercerorosbutton() { 
      return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]");
   }
 public get benif() {
   
   return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]");
 // return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona tu cuenta' or . = 'Selecciona tu cuenta')]");



 }
 
 public get seleacc() {
   
   return $("//*[@class = 'android.widget.TextView' and (@text = 'GREGORY THE PETS SPA' or . = 'GREGORY THE PETS SPA')]");
//return $("//*[@class = 'android.widget.TextView' and (@text = 'Ahorros O Corriente' or . = 'Ahorros O Corriente')]");

 }
 
 public get seleben() {

  return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]");
  //return $("//*[@class = 'android.widget.TextView' and (@text = 'Disponible: RD$1,004,813.00' or . = 'Disponible: RD$1,004,813.00')]");
 }

 public get acc(){
  //return $("//*[@class = 'android.widget.TextView' and (@text = 'Ahorros O Corriente' or . = 'Ahorros O Corriente')]");
 return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]");
}

 public get availbal() {
   
return $("//*[@class = 'android.widget.TextView' and (@text = 'Disponible: RD$0.00' or . = 'Disponible: RD$0.00')]");
  
//return $("//*[@class = 'android.widget.TextView' and (@text = 'Disponible: RD$1,004,813.00' or . = 'Disponible: RD$1,004,813.00')]");
 }

 public get transferamount() {
   return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]");
  // return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]");
 }


 public get clickoncontinue() {
   return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]");
 }

 public get clickonerrormsg() {
  return $("//*[@class = 'android.widget.TextView' and (@text = 'De acuerdo' or . = 'De acuerdo')]");
}

 
 public get clickoncontinue1() {
   return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]");
 }
public get Facilidadesdepagosbtn(){return $("//*[@class = 'android.widget.TextView' and (@text = 'Facilidades de pagos' or . = 'Facilidades de pagos')]")}

public async Facilidadesdepagos(){
   //await this.menu.click();
   // scroll 
   //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollDown(1, 5)');

//await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1, 5)');
  // await this.Facilidadesdepagosbtn.click();

//   for (let i = 0; i < 2; i++) {
//   // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollDown(1, 5)');

//   await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
// }

  // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');

  //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd()');

   //await this.Facilidadesdepagosbtn.click();

  // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1, 5)');

  await this.transf.waitForDisplayed({timeout:50000});
 await this.transf.click();
 await this.tercerorosbutton.waitForDisplayed({timeout:50000});
 await this.tercerorosbutton.click();
 await this.benif.click();
 //await this.seleben.click();
 //await this.acc.click();
 
 await this.seleacc.waitForDisplayed({timeout:90000});
 await this.seleacc.click();
//await this.availbal.waitForDisplayed();
// const bal= await $('availbal');
// await this.availbal.getText();
// console.log('availabale balance is:' );
}

//  public async terce() {

// //    await this.tercerorosbutton.click();
// await this.tercerorosbutton.waitForDisplayed({timeout:50000});
// await this.tercerorosbutton.click();


//  }

/////////////////////////

public async availb() {


  //  await this.availbal.waitForDisplayed();
  // let bal= await this.availbal.getText();
  
  //   await this.availbal.getText();
  //  console.log(await this.availbal.getText() );
//////////////////////////////////////////////////////////////////////////
   
await this.availbal.waitForDisplayed(); 
        const balanceText = await this.availbal.getText(); 
        const balanceValue = parseFloat(balanceText.replace(/[^0-9.-]+/g, "")); 
        console.log(`Available Balance: ${balanceValue}`);
        return balanceValue; 



}
 
  public async trans(additionalAmount: number){

   // await this.transferamount.click();

  //  let ball= this.availb + amount;

  //   this.transferamount.setValue(amount);
   
  // (browser as any).hideKeyboard();

  //////////////////////////////////
  const currentBalance = await this.availb(); 
  const totalAmount = currentBalance + additionalAmount; 
  console.log(`Total Amount to Transfer: ${totalAmount}`);

  await this.transferamount.click(); 
  await this.transferamount.setValue(totalAmount.toString());
   (browser as any).hideKeyboard();


 }

 public async clickbutton() {
  // await $('android.hidekeyboard');
//await client.hideKeyboard('tapOut')
 // await $('android=hideDeviceKeyboard('pressKey', 'Done')');
 //await this.availbal.click();
 //await browser.pressKey(66);
  //await browser.mobile.pressKey({ key: 'Enter' }); // Press Enter key
  //await browser.keys('Enter'); // Use the keys method to press Enter


 //await this.transferamount.pressKey(66); // Key code for Enter

 //await browser.execute(() => {
   // This function simulates the "Done" button on the keyboard
   // const { Keyboard } = require('webdriverio');
   // Keyboard.dismiss();

   //await browser.hideKeyboard(); 

   //await browser.keys('Enter');
   //await browser.pressButton('back');

   // const driver = require('webdriverio').remote();
   //  driver.pressKeyCode(4);
   //return driver.pressButton('back');
  // await browser.keys('Back');


    await this.clickoncontinue.waitForDisplayed ({timeout:30000});
   await this.clickoncontinue.click();
   await this.clickonerrormsg.waitForDisplayed ({timeout:30000});
   await this.clickonerrormsg.click();
    

 }
}




export default new scrollpage();
