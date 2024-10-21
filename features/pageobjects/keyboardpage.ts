import { $, browser, driver, expect } from '@wdio/globals'

import Page from './page';



class keyboard extends Page {

    get Transferir() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]")}
    get terceros()  { return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]")}
    get selecbenificiary() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
    get Enterdigit() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}
    get continue (){return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]")}

    async TransferirButton() {
    await this.Transferir.click();
    }
    async TercerosButton() {
        await this.terceros.click();
    }
    async EnterAmount() {
        await this.Enterdigit.click();
       // await driver.execute('mobile: performEditorAction', { action: 'focus' }); 
       // await this.Enterdigit.setValue("6");
       await browser.keys('5');
        (browser as any).keys('Enter');
        browser.execute('mobile: performEditorAction', { action: 'done' });
        //await this.Enterdigit.setValue("6");
        await this.continue.waitForDisplayed({timeout:50000});
    }


}

export default new keyboard();