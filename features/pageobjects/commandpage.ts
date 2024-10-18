import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'
import {scrollToElement } from '../pageobjects/scrollUtil.ts';





class checkcommands extends Page {


    public get menuclick() {
      
        return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]");
      // return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]");
    }

    public get Facilidadesdepagosbtn(){
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Facilidades de pagos' or . = 'Facilidades de pagos')]");
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
   public get dummy() {
    return $("//*[@class = 'android.widget.TextView' and (@text = 'GREGORY THE PETS SPA' or . = 'GREGORY THE PETS SPA')]");
   }
  public  get element(){
    //return  $("//*[@class = 'android.widget.TextView' and (@text = 'test' or . = 'test')]");
    return $("//*[@class = 'android.widget.TextView' and (@text = 'ROCO' or . = 'ROCO')]");
  }

   //scrollableElement = $('android=new UiScrollable(new UiSelector().scrollable(true))');
   private scrollableElement= $('element');

  public get amountfield(){
    return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]");
  }

    public async menu() {


  //  await this.menuclick.waitForDisplayed({timeout:50000});
  //   await this.menuclick.click();
    // await this.Facilidadesdepagosbtn.waitForDisplayed({timeout:30000});
    // await this.Facilidadesdepagosbtn.scrollIntoView();

   // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
     //await driver.execute('mobile: scroll', {direction: 'down'});

//await this.Facilidadesdepagosbtn.waitForDisplayed({timeout:50000});


await this.transf.waitForDisplayed({timeout:50000});
 await this.transf.click();
 await this.tercerorosbutton.waitForDisplayed({timeout:50000});
 await this.tercerorosbutton.click();
 await this.benif.click();
 await this.seleacc.waitForDisplayed({timeout:90000});
//await this.seleacc.click();


    }


    
    public async Scroll(){

      await this.dummy.waitForDisplayed({ timeout:50000 });

     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("YUYU")');
     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollDown(1, 5)');
     //await this.element.scrollIntoView("ROCO");

  }




// public async scrollToElement() {
//   // Check if the element is already displayed
//   while (true) {
//       const isVisible = await $(element).isDisplayed();
//       if (isVisible) {
//           break;
//       }

//       // Use mobile: swipe to scroll up
//       await browser.execute('mobile: swipe', {
//           direction: 'up',
//           percentage: 0.75, // Adjust as needed for swipe length
//       });
//   }
// //await this.element.click();
// }

// async isTextVisible(): Promise<boolean> {
//   return await this.element.isDisplayed();
// }





}
export default new checkcommands();