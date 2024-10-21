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
        return $("//*[@class = 'android.widget.TextView' and (@text = 'GREGORY THE PETS SPA' or . = 'GREGORY THE PETS SPA')]");
       }
   

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
    await this.selectionaun.waitForDisplayed({timeout:3000});
}

async USDAcc() {
    await this.selectionaun.click();
   // await this.dummy.waitForDisplayed({ timeout:50000 });
   // await this.selectUSDacco.waitForDisplayed({timeout:30000});
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("QUIROZ")');
    await this.selectUSDacco.click();
}


}
export default new TercerosUSD();