import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, MenuClose, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { OperatorstabsPage } from '../pages/operatorstabs/operatorstabs'
import { LoginPage } from '../pages/login/login';
import { TranslateService } from '@ngx-translate/core';

// import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';

import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { AppProvider } from '../providers/app/app';

export interface PageInterface {
  title:string;
  pageName: any;
  pageComponent?: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ; //rootPage will link to app.html file. this means everything of no specific page.

  @ViewChild(Nav) nav: Nav;

  toggleButton: boolean = false;
  show: boolean = true;

  pages:PageInterface[] = [
    {title: 'Profile', pageName: ProfilePage, icon: 'person'}
  ]

  access_token: string;
  // Role: any = 1;
  // Role: any;
  Role: boolean;
  loading: any;
  roleValue: any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    public authService: AuthProvider,
    public appprov: AppProvider,
    splashScreen: SplashScreen,
    private menu: MenuClose,
    public event: Events,
    private storage: Storage,
    // public kakao: KakaoCordovaSDK,
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
        this.pages;
        this.rootPage = LoginPage;
      }
      else{
        this.rootPage = TabsPage;
      }
    });

    event.subscribe('roleReceived', (value) => {
      this.roleValue = value;
      this.Role = this.roleValue;
      console.log('refreshed', value);
    });
    
    storage.ready().then(() => {
      storage.get('access_token').then((val) => {
        this.access_token = val.toString();
        this.appprov.checkRole(this.access_token).then((res) => {
          let data = JSON.stringify(res);
          data = JSON.parse(data);
          // this.loading.dismiss();
          if (data['result'] == "1") {
            this.Role = true;
          }
          else if (data['result'] == "0") {
            this.Role = false;
          }
          else {
            console.log("Not in database");
          }
        }, err => {
          console.log(err);
        });
        // this.loading.dismiss();
      });
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

  openPage(page: PageInterface){
    // let params = {};

    // if(page.index){
    //   params = {tabIndex: page.index};
    // }

    // if(this.nav.getActiveChildNav() && page.index != undefined){
    //   this.nav.getActiveChildNav().select(page.index);
    // } 
    // else {
      // this.nav.setRoot(page.pageName, params);
      // this.nav.setRoot(page.pageName);
      // this.nav.push(page.pageName, {toggled: this.toggleButton});
      this.nav.setRoot(page.pageName, {toggled: this.toggleButton});
    // }
  }

  checkRole_() {
    if(this.Role == true) {
      this.toggleProfile();
    }
    else {
      return;
    }
  }

  toggleProfile(){
    if(this.toggleButton == true){
      this.nav.setRoot(OperatorstabsPage);
      this.menu.close();
    }
    else{
      this.nav.setRoot(TabsPage);
      this.menu.close();
    }
  }

}
