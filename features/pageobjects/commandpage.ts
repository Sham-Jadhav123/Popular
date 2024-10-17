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

    public async menu() {


    await this.menuclick.waitForDisplayed({timeout:50000});
    await this.menuclick.click();

    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
     await driver.execute('mobile: scroll', {direction: 'down'});




    await this.Facilidadesdepagosbtn.waitForDisplayed({timeout:50000});

   // browser.execute('mobile: scroll', {direction: 'down'});

   // browser.execute('mobile: performEditorAction', { action: 'done' });

    }


    // async  scrollToElement(selector) {
    //     let isElementVisible = false;
    
    //     while (!isElementVisible) {
    //         try {
    //             const element = await $(selector);
    //             isElementVisible = await element.isDisplayed();
    //         } catch (err) {
    //             // If the element is not found, scroll down
    //             await driver.execute('mobile: scroll', { direction: 'down' });
    //         }
    //     }

    //    //  await this.Facilidadesdepagosbtn('android=new UiSelector().text("Your Element Text")');

    // }
    









}
export default new checkcommands();