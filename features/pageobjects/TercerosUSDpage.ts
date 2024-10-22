import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';



class TercerosUSD extends Page {

    get Transferir() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]")}
    get Terceros() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]")}
    get selectiona() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona tu cuenta' or . = 'Selecciona tu cuenta')]")}
    get selectUSD() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Movimientos Usd' or . = 'Movimientos Usd')]")}
    get selectionaun() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
    get selectUSDacco() { return $("//*[@class = 'android.widget.TextView' and (@text = 'SR IGOR THEN QUIROZ' or . = 'SR IGOR THEN QUIROZ')]")}
    public get dummy() {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'AAvelinoDontDelete' or . = 'AAvelinoDontDelete')]");
       }
    get USD() { return $("//*[@class = 'android.widget.EditText' and (@text = 'US$' or . = 'US$')]")}   
    get descriptions() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}
    get continue() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]")}
    get SiTransferiri() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Sí, transferir' or . = 'Sí, transferir')]")}
    get tocken() { return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]")}


async TransferirBtn() {
    await this.Transferir.click();
}
async TercerosBtn() {
    await this.Terceros.click();
}
async selectionfield() {
    await this.selectiona.click();
}
async selectUSDacc() {
    await this.selectUSD.click();
   // await this.selectionaun.waitForDisplayed({timeout:3000});
}

async USDAcc() {
    await this.selectionaun.click();
    await this.dummy.waitForDisplayed({ timeout:50000 });
   // await this.selectUSDacco.waitForDisplayed({timeout:30000});
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("QUIROZ")');
    await this.selectUSDacco.click();
}
async EnterUSD() {
    await this.USD.waitForDisplayed({timeout:3000});
    await this.USD.setValue("1");
}

async EnterDiscriptionUSD() {
    //await this.descriptions.click();
    await this.descriptions.waitForDisplayed({timeout:3000});
    await this.descriptions.setValue("Testing");
    browser.execute('mobile: performEditorAction', { action: 'done' });

}

async clickonContinueUSD() {
    await this.continue.click();
}
async SitransfeririButtonUSD() {
    await this.SiTransferiri.waitForDisplayed({timeout:6000});
    await this.SiTransferiri.click();
    await this.tocken.waitForDisplayed({timeout:3000});
    //browser.pause(3000);
    
}


}
export default new TercerosUSD();