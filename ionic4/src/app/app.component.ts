import { Component } from '@angular/core';

import { Platform, MenuController, NavController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

import { TranslateService } from '@ngx-translate/core'
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

  toggle: boolean = false;
  public Role: boolean;
  // public Role: boolean = true;
  // public Role: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router,
    public navCtrl: NavController,
    private _translate : TranslateService,
    private languageService: LanguageService,
    public menu: MenuController,
    public event: Events
  ) {
    this.initializeApp();
    // this.toggle = false;
    this.event.subscribe('roleReceived', (value) => {
      // console.log("roleReceived: " + value);
      this.Role = value;
    });
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

  toggleProfile(){
    // this.event.publish('toggleValue',this.toggle);
    // console.log("this.toggle value: " + this.toggle);
    // console.log("roleReceived: " + this.Role);

    if(this.toggle == true){
      this.navCtrl.navigateForward(['operator/tabs/operator-home']);
      this.menu.close();
    }
    else{
      this.navCtrl.navigateForward(['owner/tabs/owner-home']);
      this.menu.close();
    }
  }

  openPage(page){
    console.log("openpage page: " + JSON.stringify(page));
    console.log("roleReceived: " + this.Role);

    this.event.publish('toggleValue',this.toggle);
    this.event.publish('role', this.Role);
    console.log("this.toggle value: " + this.toggle); 

    // this.nav.setRoot(page.pageName, {toggled: this.toggleButton});
    this.navCtrl.navigateForward(page);
  }

  Logout() {
    
  }

}
