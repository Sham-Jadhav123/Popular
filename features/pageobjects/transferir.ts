//import { $, expect } from '@wdio/globals'
import { $, expect } from '@wdio/globals'
import Page from './page';



class transferir extends Page {
   public get transferirbutton() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]")}
   public get tercerorosbutton() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Terceros' or . = 'Terceros')]") }
   public get selectben() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Selecciona un beneficiario' or . = 'Selecciona un beneficiario')]")}
   public  get accbutton() { return $("//*[@class = 'android.widget.TextView' and (@text = 'GREGORY THE PETS SPA' or . = 'GREGORY THE PETS SPA')]")}
   public get availbal() { return $("//*[@class = 'android.widget.TextView' and (@text = 'Disponible: RD$0.00' or . = 'Disponible: RD$0.00')]")}
   public  get clicktran() { return $("//*[@class = 'android.widget.EditText' and (@text = 'RD$' or . = 'RD$')]")}

async tranfrir() {
    await this.transferirbutton.click();
}
async tercerButton() {
    await this.tercerorosbutton.click();
}

async benificiary() {
    await this.selectben.click();
}





















}
export default new transferir ();