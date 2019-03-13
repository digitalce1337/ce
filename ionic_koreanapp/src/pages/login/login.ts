import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, } from 'ionic-angular';

// import { Facebook } from '@ionic-native/facebook';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

// import { AngularFireAuth } from 'angularfire2/auth';
// import firebase from 'firebase';

import { LoginKkPage } from '../login-kk/login-kk';
import { TabsPage } from '../tabs/tabs';
import { OperatorstabsPage } from '../operatorstabs/operatorstabs';
import { RegisterPage } from '../register/register';
import { CreatecompanyPage } from '../createcompany/createcompany';
import { OtpOperatorPage } from '../otp-operator/otp-operator';
import { Facebook } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AppProvider } from '../../providers/app/app';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  public language: string;
  public title: string;
  public owner: string;
  public operator: string;
  public rolemsgtitle: string;
  public rolemsg: string;

  Role: String;
  loading: any;
  access_token: string;
  isLoggedIn: boolean = false;

  provider = {
    loggedin: false,
    name: '',
    email: '',
    profilePicture: ''
  }

  // constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, private fb: Facebook,
  //   public navCtrl: NavController, public navParams: NavParams) {
  // }

  constructor(private alertCtrl: AlertController, private fb: Facebook, public navCtrl: NavController, public loadingCtrl: LoadingController, private storage: Storage, public appprov: AppProvider, public navParams: NavParams, public _translate: TranslateService) {
    storage.ready().then(() => {
      storage.get('access_token').then((val) => {
        this.showLoader();
        if (val !== null) {
          console.log("Got access token");
          this.access_token = val.toString();
          this.appprov.checkRole(this.access_token).then((res) => {
            let data = JSON.stringify(res);
            data = JSON.parse(data);
            this.loading.dismiss();
            if (data['result'] == "1") {
              this.navCtrl.setRoot(TabsPage, storage);
            }
            else if (data['result'] == "0") {
              this.navCtrl.setRoot(OperatorstabsPage, storage);
            }
            else {
              console.log("Not in database");
            }
          }, err => {
            console.log(err);
          });

        }
        this.loading.dismiss();
      });
    });
  }

  private _translateLanguage(): void {
    this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("login.title");
    this.owner = this._translate.instant("login.owner");
    this.operator = this._translate.instant("login.operator");
    this.rolemsgtitle = this._translate.instant("login.rolemsgtitle");
    this.rolemsg = this._translate.instant("login.rolemsg");
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this._initializeTranslation();
  }

  role(value) {
    this.Role = value;
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }//showLoader()

  signIn() {
    // this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(res => {
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.provider.profilePicture = res.user.photoURL;
    //   console.log('from Email', res);
    //   this.showAlert('Success! you\'re logged in by Email');
    //   this.navCtrl.setRoot(HomePage, this.provider);
    // }).catch(error => {
    //   console.log('got error', error);
    //   this.showAlert(error.message);
    // });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook() {
    // this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.provider.profilePicture = res.user.photoURL;
    //   console.log('from Facebook', res);
    //   this.showAlert('Success! you\'re logged in by Facebook');
    //   this.navCtrl.setRoot(HomePage, this.provider);
    // }).catch(error => {
    //   console.log('got error', error);
    //   this.showAlert(error.message);
    // });
  }

  loginWithFacebook1() {

    if (this.Role == null || this.Role == undefined) {
      let alert = this.alertCtrl.create({
        title: this.rolemsgtitle,
        subTitle: this.rolemsg,
        buttons: ['OK']
      });
      alert.present();
      return;
    }//if role

    this.showLoader();

    this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {

      this.loading.dismiss();
      if (res.status === "connected") {
        //this.showAlert(res.authResponse.userID + ": " + res.authResponse.accessToken);

        this.access_token = res.authResponse.accessToken;
        let userID = res.authResponse.userID;

        this.fb.api('/me?fields=id,name,email,picture,first_name,last_name', []).then(
          profile => {
            let email = profile['email'];
            let profile_url = profile['picture']['data']['url'];
            let name = profile['name'];

            if (email != null && email != "") {
              this.loading.dismiss();
              console.log("User is logged in either by new access_token or revisit user");
              this.appprov.checkExistingUser(email).then((res) => {
                let checkUser = JSON.stringify(res);
                checkUser = JSON.parse(checkUser);
                checkUser = checkUser['result'].toString();
                console.log(checkUser);
                
                if (checkUser == 'false') {
                  this.appprov.updateAccessToken(email, this.access_token, profile_url).then((res) => {
                    let update = JSON.stringify(res);
                    update = JSON.parse(update);
                    console.log(update);
                    this.storage.set('access_token', this.access_token);
                    if (this.Role == 'Owner') {
                      this.navCtrl.setRoot(TabsPage);
                      return;
                    }
                    else {
                      this.navCtrl.setRoot(OperatorstabsPage, this.storage);
                      return;
                    }
                  }, err => { console.log(err); });
                }
                else {
                  this.loading.dismiss();
                  this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
                    let adduser = JSON.stringify(res);
                    adduser = JSON.parse(adduser);
                    console.log(adduser['result']);
                  }, err => { console.log(err); });
                }
              }, err => {
                console.log(err);
              });

              this.storage.set('access_token', this.access_token);
              this.isLoggedIn = true;

              if (this.Role == 'Owner') {
                this.navCtrl.push(CreatecompanyPage, this.storage);
              } else {
                this.navCtrl.push(OtpOperatorPage, this.storage);
              }
              return;
            }
          }
        );
      }
      else {
        this.isLoggedIn = false;
        this.showAlert(res.status);
      }
    }).catch(e => {
      console.log('Error logging into Facebook', e)
    });

    this.loading.dismiss();
  }

  loginWithGoogle() {
    // this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.provider.profilePicture = res.user.photoURL;
    //   console.log('from Google', res);
    //   this.showAlert('Success! you\'re logged in by Google');
    //   this.navCtrl.setRoot(HomePage, this.provider);
    // }).catch(error => {
    //   console.log('got error', error);
    //   this.showAlert(error.message);
    // });
  }

  loginWithTwitter() {
    // this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => {
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.provider.profilePicture = res.user.photoURL;
    //   console.log('from Twitter', res);
    //   this.showAlert('Success! you\'re logged in by Twitter');
    //   this.navCtrl.setRoot(HomePage, this.provider);
    // }).catch(error => {
    //   console.log('got error', error);
    //   this.showAlert(error.message);
    // });
  }

  loginWithGithub() {
    // this.fire.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(res => {
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.provider.profilePicture = res.user.photoURL;
    //   console.log('from Github', res);
    //   this.showAlert('Success! you\'re logged in by Github');
    //   this.navCtrl.setRoot(HomePage, this.provider);
    // });
  }

  loginWithKakaoTalk() {
    // this.fire.auth.signInWithRedirect(new firebase.auth.OAuthProvider()).then(function () {
    //   firebase.auth().getRedirectResult().then(function (result) {
    //     // This gives you a Google Access Token.
    //     // You can use it to access the Google API.
    //     //var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //   }).catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //   });
    // });
    this.navCtrl.push(LoginKkPage);
  }

  logout() {
    this.fb.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }
}
