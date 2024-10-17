import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'





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
   get Element(){return  $("//*[@class = 'android.widget.TextView' and (@text = 'test' or . = 'test')]");}
  

public async Scroll(){

    //driver.pressKeyCode(AndroidKeyCode.ENTER);
   // await driver.pressKeyCode(AndroidKeyCode.ENTER);
   // await driver.keys(Keys.Enter);
    (browser as any).keys('Enter');

  

}


////////////

    public async menu() {


   // await this.menuclick.waitForDisplayed({timeout:50000});
    //await this.menuclick.click();

   // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
     //await driver.execute('mobile: scroll', {direction: 'down'});

//await this.Facilidadesdepagosbtn.waitForDisplayed({timeout:50000});


await this.transf.waitForDisplayed({timeout:50000});
 await this.transf.click();
 await this.tercerorosbutton.waitForDisplayed({timeout:50000});
 await this.tercerorosbutton.click();
 await this.benif.click();
 await this.seleacc.waitForDisplayed({timeout:90000});
// await this.seleacc.click();


    }

    // async  scrollToElement() {
    //     let isElementVisible = false;
    // await this.Facilidadesdepagosbtn.isDisplayed();
    //     while (!isElementVisible) {
    //         try {
    //             const element = await (this.Facilidadesdepagosbtn);
    //             isElementVisible = await element.isDisplayed();
    //         } catch (err) {
    //             // If the element is not found, scroll down
    //            // await driver.execute('mobile: scroll', { direction: 'down' });

    //            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
    //         }
    //     }
    // }
    
   
    









}
export default new checkcommands();