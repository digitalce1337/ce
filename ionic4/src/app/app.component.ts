import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

import {TranslateService} from '@ngx-translate/core'
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/owner/tabs/owner-home',
    //   icon: 'home'
    // },
    {
      title: 'Profile',
      url: '/profile-details',
      icon: 'person'
    }
  ];

  public toggle: boolean = false;
  public Role: boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router,
    public navCtrl: NavController,
    private _translate : TranslateService,
    private languageService: LanguageService,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.languageService.setInitialAppLanguage();
      this.authService.checkAuthentication().then((res) => {
        console.log('res: '+ res);
        if(res == ''){
          // this.router.initialNavigation('/LoginPage');
          this.router.navigateByUrl('login');
        }
        else {
          // this.authService.authenState.getValue();
          // this.router.navigateByUrl('owner/tabs');
        }
      })
    });
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
    let navToggle: NavigationExtras = {
      queryParams: {
        toggled: this.toggle
      }
    }

    if(this.toggle == true){
      // this.nav.setRoot(OperatorstabsPage);
      this.navCtrl.navigateRoot(['operator/tabs/operator-home']);
      // this.navCtrl.navigateForward(['operator/tabs/operator-home'], navToggle);

      this.menu.close();
    }
    else{
      // this.nav.setRoot(TabsPage);
      this.navCtrl.navigateRoot(['owner/tabs/owner-home']);
      // this.navCtrl.navigateForward(['owner/tabs/owner-home'], navToggle);
      this.menu.close();
    }
  }

  openPage(page){
    let navToggle: NavigationExtras = {
      queryParams: {
        toggled: this.toggle
      }
    }
    // this.nav.setRoot(page.pageName, {toggled: this.toggleButton});
    this.navCtrl.navigateForward(page, navToggle);
  }
}
