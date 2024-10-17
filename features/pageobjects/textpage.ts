import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'



class Transferir extends Page {


    public get Transferi() {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]");
    }
    
    public get tercerorosbutton() { 
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]");
     }
     public get benif() {
   
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]");
      
      }

      public get acc() {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'JULIN THE PETS SPA' or . = 'JULIN THE PETS SPA')]");
      }

     public get amount() {
        return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]");
        // text

     }
     public get text() {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'El monto para transferir debe ser mayor a RD$0.01' or . = 'El monto para transferir debe ser mayor a RD$0.01')]");
     }

     public async clicktransferi() {
        await this.Transferi.waitForDisplayed({timeout:50000});
        await this.Transferi.click();
     }
     public async clickontercero() {
        await this.tercerorosbutton.waitForDisplayed({timeout:50000});
        await this.tercerorosbutton.click();
     }
    
    public async selectbenificiary() {

        await this.benif.click();
    }
    public async selectacc() {
        await this.acc.waitForDisplayed({timeout:50000}); 
        await this.acc.click();
    }
  
    public async enteramount() {
       await this.amount.click();
        await this.amount.setValue("00.00");
       
          //(browser as any).hideKeyboard();
       
        
        // (browser as any).keys('Enter');
         
        


        

       browser.execute('mobile: performEditorAction', { action: 'done' });
        
      //browser.execute('mobile: performEditorAction', { action: 'back' });

        


        // (browser as any).keys('done');
        //await browser.hidekeyboard();
        await this.text.waitForDisplayed({timeout:50000});
        { 
            if (await (await this.text).isDisplayed()) {
                const shownText = await this.text.getText(); 
                console.log(`Error Message is: ${shownText}`);
                return shownText; 

                
            } else {
                console.log('msg is not displayed');
                
            }
        }
        
       // await delay(2000);
    }


}

export default new Transferir();