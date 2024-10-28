import { $, browser, driver, expect } from '@wdio/globals'
import Page from './page';
import commandpage from "../pageobjects/commandpage.ts";


class Otros extends Page {

    get Transferir() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]")}
    get Otros() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Otros bancos' or . = 'Otros bancos')]")}
    get cuenta() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona tu cuenta' or . = 'Selecciona tu cuenta')]")}
    get acc() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Ahorros O Corriente' or . = 'Ahorros O Corriente')]")}
    get unbeni() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
    get accounttran() {return $("//*[@class = 'android.widget.TextView' and (@text = 'Banreservas Saving' or . = 'Banreservas Saving')]")}
    get rdamou() {return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]")}
    get selectach(){return $("//*[@class = 'android.widget.RadioButton' and (@text = '' or . = '')]")}
    get cont(){ return $("//*[@class = 'android.widget.TextView' and (@text = 'Continuar' or . = 'Continuar')]")}
    get text(){ return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]")}
    get rd(){return $("//*[@class = 'android.widget.TextView' and (@text = 'RD$1.00' or . = 'RD$1.00')]")}

    async clickonTransferirbutton() {
         browser.pause(7000)
        await this.Transferir.click();
    }
    async clickonotros() {
        await this.Otros.click();
    }
    async account() {
        await this.cuenta.click();
        browser.pause(4000);
        await this.acc.click();
        browser.pause(4000);
    }
    async beni(){
        await this.unbeni.click();
        browser.pause(5000)
    }
    async amount(){
        await this.accounttran.click();
        browser.pause(5000);
        await this.rdamou.setValue("1");

    }
    async radiobtn() {
        await this.selectach.click();
        await this.cont.click();
    }
    async print(){
        
       await this.rd.waitForDisplayed({timeout:1000000});
       await expect(await this.rd).toBeDisplayed();
       const transferamount= await this.rd.getText();
       console.log('Transfer amount is : ${transferamount}');

        const gtext=await this.text.getText();
        console.log("The text is : ${gtext}");

    }




}
export default new Otros();