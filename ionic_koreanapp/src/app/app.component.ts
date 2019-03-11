import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { OperatorstabsPage } from '../pages/operatorstabs/operatorstabs'
import { LoginPage } from '../pages/login/login';
import { TranslateService } from '@ngx-translate/core';

import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ; //rootPage will link to app.html file. this means everything of no specific page.

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    public authService: AuthProvider,
    splashScreen: SplashScreen,
    public kakao: KakaoCordovaSDK,
    private _translate : TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this._initTranslate();
    });

    this.authService.checkAuthentication().then((res)=>{
      console.log("res:" + res);
      if(res === ''){
        this.rootPage = LoginPage;
      }
      else{
        this.rootPage = TabsPage;
      }
    });
  }
  
  /* EDIT HERE TO DO TRANSLATION */
  private _initTranslate(){
    //this._translate.setDefaultLang('kr');
    this._translate.setDefaultLang('en');
    // if (this._translate.getBrowserLang() !== undefined){
    //   this._translate.use(this._translate.getBrowserLang());
    // }
    // else{
    //   this._translate.use('en');
    // }
  }
}
