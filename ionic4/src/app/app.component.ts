import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import {TranslateService} from '@ngx-translate/core'
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/owner/tabs/owner-home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile-details',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router,
    private _translate : TranslateService,
    private languageService: LanguageService
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
}
