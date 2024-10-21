import { $, expect } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get flash() {
        return $('//hierarchy/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]');
    }
    public get allow () {
        return $("//*[@class = 'android.widget.Button' and (@text = 'Allow' or . = 'Allow')]");
      
    }

    // public get siguiente () {
    //  return $("//*[@class = 'android.widget.TextView' and (@text = 'Siguiente' or . = 'Siguiente')]");
      
    // }
    // public get Iniciar () {
    //     return $("//*[@class = 'android.widget.TextView' and (@text = 'Iniciar' or . = 'Iniciar')]");
         
    //    }
    // public async button () {
    //     for (let i = 0; i < 3; i++) {
    //         (await this.siguiente).click();
    //    }
    // }


    public get acceso () {
        return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]");
         
       }

       public get cerrar () {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Cerrar' or . = 'Cerrar')]");
         
       }

       public get acceso_clients () {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Acceso clientes' or . = 'Acceso clientes')]");
         
       }



    public get inputUsername () {
       return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]");
       
       //get (User){return("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]" ") };
    }

    public get inputPassword () {
        return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]");
    }

    public get btnSubmit () {
       return $("//*[@class = 'android.widget.TextView' and (@text = 'Acceder' or . = 'Acceder')]");
      // return $('//*[@class="android.view.View" and normalize-space(.)=""]');
    }


     // re-enter password
    //  public get pwd () {
    //    // return $("//*[@class = 'android.widget.TextView' and (@text = 'Contraseña' or . = 'Contraseña')]");
    //     return $("//*[@class = 'android.widget.EditText' and (@text = '' or . = '')]");
    //  }
     
     public get acceder () {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Acceder' or . = 'Acceder')]");
       // return $('//*[@class="android.view.View" and normalize-space(.)=""]');
     }

     public get loginMessage () {
        return $("//*[@class = 'android.widget.TextView' and (@text = 'Ahorro' or . = 'Ahorro')]");
       // return $('//*[@class="android.view.View" and normalize-space(.)=""]');
     }

     public get Home_pause () {
//return $("//*[@class = 'android.widget.TextView' and (@text = 'Hola, Rosilia' or . = 'Hola, Rosilia')]");
       // return $('//*[@class="android.view.View" and normalize-space(.)=""]');
       return $("//*[@class = 'android.widget.TextView' and (@text = 'Transferir' or . = 'Transferir')]");

     }
     public get transferirbutton() { 
        //return $("//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[5]/android.view.View[1]/android.widget.TextView[1]")
    return $("//*[@class = 'android.view.View' and (@text = '' or . = '')]");
    }


     
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username, password) {
        await this.flash.click();
       await this.allow.click();
    //    for (let i = 0; i < 3; i++) {
    //             (await this.siguiente).click();
    //        }
           //await this.Iniciar.click();
           await this.acceso.click();
           await this.cerrar.click();
           await this.acceso_clients.click();


    //    }
       await this.inputUsername.setValue(username);
       
    
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
       
       // await this.pwd.setValue("321321");
     

        await this.Home_pause.waitForDisplayed({timeout:1000000});
       await expect(await this.Home_pause).toBeDisplayed();
      // await this.transferirbutton.waitForDisplayed({timeout:20000})
//await this.transferirbutton.click();
   
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }

}

export default new LoginPage();
