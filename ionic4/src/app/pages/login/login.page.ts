import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, Events } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Role;
  public language: string;
  public title: string;
  public owner: string;
  public operator: string;
  public rolemsgtitle: string;
  public rolemsg: string;

  @ViewChild('email') email;
  @ViewChild('password') password;

  Role: string;
  loading: any;
  access_token: string;
  isLoggedIn = false;
  roleValue: boolean;

  provider = {
    loggedin: false,
    name: '',
    email: '',
    profilePicture: ''
  };

  constructor(public router: Router, public storage: Storage, public alertCtrl: AlertController,
    private fb: Facebook, public loadingCtrl: LoadingController, 
    public appprov: AppService, public event: Events) { }

  ngOnInit() {
  }

  showRole(){
    console.log("role is: "+this.Role);
  }

  // role(value) {
  //   this.Role = value;
  //   console.log("role is: " + ""+value);
  //   console.log("role is: " + ""+this.Role);
  //   console.log("role is: " + String(value));
  // }

  testLogin(){
    console.log("clicked");
    console.log("show me"+this.Role);
    if(this.Role == 'Owner') {
      this.router.navigateByUrl('owner/tabs/owner-home');
      console.log("clicked");
    }
    else {
      console.log("show me"+this.Role);
      this.router.navigateByUrl('operator/tabs/operator-home');
      // this.navCtrl.navigateRoot('/LoginPage');
    }
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      message: 'Loading...'
    });
    this.loading.present();
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Info',
      subHeader: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async roleAlert() {
    const alert = await this.alertCtrl.create({
      header: this.rolemsgtitle,
      subHeader: this.rolemsg,
      buttons: ['OK']
    });
    // }).then(alert => alert.present());
    await alert.present();
  }

  loginWithFacebook1() {

    if (this.Role == null || this.Role === undefined) {
      // const alert = this.alertCtrl.create({
      //   header: this.rolemsgtitle,
      //   subHeader: this.rolemsg,
      //   buttons: ['OK']
      // }).then(alert => alert.present());
      // alert.present();
      this.roleAlert();
      return;
    }// if role

    this.showLoader();

    this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {

      this.loading.dismiss();
      if (res.status === 'connected') {
        // this.showAlert(res.authResponse.userID + ": " + res.authResponse.accessToken);

        this.access_token = res.authResponse.accessToken;
        const userID = res.authResponse.userID;

        this.fb.api('/me?fields=id,name,email,picture,first_name,last_name,gender,location,locale,work,languages,birthday,relationship_status,hometown', []).then(
          profile => {
            const email = profile.email;
            // Get profile picture from url
            // let profile_url = profile['picture']['data']['url'];
            // Set profile_url as empty default
            const profile_url = 'assets/imgs/blank_profile.png';
            const name = profile.name;

            if (email != null && email !== '') {
              this.loading.dismiss();
              console.log('User is logged in either by new access_token or revisit user');
              this.appprov.checkExistingUser(email).then((res) => {
                let checkUser = JSON.stringify(res);
                checkUser = JSON.parse(checkUser);
                checkUser = checkUser['result'].toString();
                console.log(checkUser);

                if (checkUser === 'false') {
                  this.appprov.updateAccessToken(email, this.access_token, profile_url).then((res) => {
                    let update = JSON.stringify(res);
                    update = JSON.parse(update);
                    console.log(update);
                    this.storage.set('access_token', this.access_token);
                    let navigationExtras: NavigationExtras = {
                      queryParams: {
                          token: this.access_token,
                      }
                    };
                    if (this.Role == 'Owner') {
                      this.roleValue = true;
                      // this.event.publish('roleReceived', this.roleValue);
                      // this.nav.setRoot(TabsPage);
                      this.router.navigateByUrl('owner/tabs/owner-home', navigationExtras);
                      console.log("clicked" + "storage: " + this.storage);
                      return;
                    } else {
                      this.roleValue = false;
                      // this.event.publish('roleReceived', this.roleValue);
                      // this.nav.setRoot(OperatorstabsPage, this.storage);
                      console.log("show me "+this.Role + " storage: " + this.storage);
                      this.router.navigateByUrl('operator/tabs/operator-home',navigationExtras);
                      return;
                    }
                  }, err => { console.log(err); });
                } else {
                  this.loading.dismiss();
                  this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
                    let adduser = JSON.stringify(res);
                    adduser = JSON.parse(adduser);
                    // console.log(adduser['result']);
                  }, err => { console.log(err); });
                }
              }, err => {
                console.log(err);
              });

              this.storage.set('access_token', this.access_token);
              this.isLoggedIn = true;

              if (this.Role === 'Owner') {
                this.router.navigateByUrl('CreatecompanyPage');
                // this.navCtrl.navigateForward('/CreatecompanyPage', this.storage);
                // this.nav.push(CreatecompanyPage, this.storage);
              } else {
                this.router.navigateByUrl('OtpOperatorPage');
                // this.nav.push(OtpOperatorPage, this.storage);
              }
              return;
            }
          }
        );
      } else {
        this.isLoggedIn = false;
        this.showAlert(res.status);
      }
    }).catch(e => {
      console.log('Error logging into Facebook', e);
      console.log('Display value for isLoggedIn', this.isLoggedIn);
    });
    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    this.loading.dismiss();
  }




}
