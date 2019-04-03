import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, normalizeURL } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { CreatecompanyPage } from '../createcompany/createcompany';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';
import { AppProvider } from '../../providers/app/app';
import { OperatorstabsPage } from '../operatorstabs/operatorstabs';
import { OtpOperatorPage } from '../otp-operator/otp-operator';
import { OperatorhomePage } from '../operatorhome/operatorhome';
import { TranslateService } from '@ngx-translate/core';
import { BasePage } from '../base-page/basepage';

declare var Kakao: any;

/**
 * Generated class for the LoginKkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-kk',
  templateUrl: 'login-kk.html',
})
export class LoginKkPage {

  public language: string;
  public title: string;
  public owner: string;
  public operator: string;
  public rolemsgtitle: string;
  public rolemsg: string;
  public kakaomsgtitle: string;
  public kakaomsg: string;
  public kakaomsgtitle2: string;
  public kakaomsg2: string;

  username: string = '';
  password: string = '';

  errorMsg: string;
  loading: any;
  Role: String;
  email: string;
  access_token: string;

  kakao: any;
  /*note: console command is to see using java console when using web to test*/
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public alertCtrl: AlertController,
    private iab: InAppBrowser,
    public _kakaoCordovaSDK: KakaoCordovaSDK,
    public appprov: AppProvider,
    private storage: Storage,
    public _translate: TranslateService) {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    this._initializeTranslation();
    storage.ready().then(() => {
      storage.get('access_token').then((val) => {
        this.showLoader();
        if (val == null) {
          console.log("No acccess token");
          //this.navCtrl.push(CreatecompanyPage);
        }
        else {
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
      });//storage.get('access_token').then((val)
    });//storage.ready().then(()

  }//constructor

  //app starts from here.

  ionViewDidEnter() {
    console.log('ionViewDidLoad LoginKkPage');
    this._initializeTranslation();
  }

  public changeLanguage(): void {
    this._translateLanguage();
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
    this.kakaomsgtitle = this._translate.instant("login.kakaomsgtitle");
    this.kakaomsg = this._translate.instant("login.kakaomsg");
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }//showLoader()

  errorFunc(message) {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: message,
      buttons: ['OK'],
    });
    alert.present();
  }//errorFunc(message)

  myLogIn() {
    if (this.username.trim() !== '') {
      if (this.password.trim() === '') {
        this.errorFunc('Please Enter your Password!');
      }
      else {
        let credentials = {
          username: this.username,
          password: this.password
        };
        this.showLoader();
        this.authService.login(credentials).then((result) => {
          console.log(result);
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        }, (err) => {
          console.log(err);
          this.errorFunc('Wrong Credentials, Please try Again');
          this.loading.dismiss();
        }//(err)
        );//this.authService.login(credentials).then((result)
      }//else
    }//if(this.username.trim() !== '')
    else {
      this.errorFunc('Please input a valid password');
    }

  }//myLogIn()

  // myLogout(){
  //   this.authService.logout();
  // }

  role(value) {
    this.Role = value;
  }

  login() {
    if (this.Role == null || this.Role == undefined) {
      let alert = this.alertCtrl.create({
        title: this.rolemsgtitle,
        subTitle: this.rolemsg,
        buttons: ['OK']
      });
      alert.present();
      return;
    }//if role

    // if (this.Role=='Owner'){
    //   this.storage.clear();
    //   this.storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q');
    //   this.navCtrl.push(CreatecompanyPage);
    //   return;
    // }
    // else{
    //   this.storage.clear();
    //   this.storage.set('access_token', 'accessop');
    //   this.navCtrl.setRoot(OperatorstabsPage);
    //   return;
    // }

    //the page where user key in user's kakao credentials info
    console.log("Logging into kakao");
    this.showLoader();
    let loginOptions = {};
    loginOptions['authTypes'] = [
      AuthTypes.AuthTypeTalk,
      AuthTypes.AuthTypeStory,
      AuthTypes.AuthTypeAccount
    ];

    /*this connects kakaoTalk SDK manager account to user's KakaoTalk account*/
    this._kakaoCordovaSDK.login(loginOptions).then((res) => {
      console.log(JSON.stringify(res));
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.access_token = data['accessToken'];
      let name = data['properties']['nickname']
      let profile_url = data['properties']['thumbnail_image']
      if (profile_url == null || profile_url == undefined) {
        profile_url = 'assets/imgs/blank_profile.png';
      }
      let has_email = data['kakao_account']['has_email'].toString();
      let email = data['kakao_account']['email'];

      /*has email but does not allow link to account*/
      if (has_email == 'true' && (email == null)) {
        this.loading.dismiss();
        console.log("please allow email");
        this._kakaoCordovaSDK.unlinkApp().then(() => {
          console.log("Unlinked");
        }, err => { console.log("cannot unlinked") });
        let alert = this.alertCtrl.create({
          title: this.kakaomsgtitle,
          subTitle: this.kakaomsg,
          buttons: ['OK']
        });
        alert.present();
        console.log("User did not check email in permission");
        return;
      }
      else if (has_email == 'true' && (email != null)) {
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
              // this.storage.set('access_token', this.access_token);
              // if (this.Role == 'Owner'){
              //   this.navCtrl.push(CreatecompanyPage, this.storage);
              // }
              // else{
              //   this.navCtrl.push(OtpOperatorPage, this.storage);
              // }
            }, err => { console.log(err); });
          } else {
            this.loading.dismiss();
            this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
              let adduser = JSON.stringify(res);
              adduser = JSON.parse(adduser);
              console.log(adduser['result']);
            }, err => { console.log(err); });
          }//else
        }, err => {
          console.log(err);
        });//this.appprov.checkExistingUser(email).then((res)
        this.storage.set('access_token', this.access_token);
        if (this.Role == 'Owner') {
          this.navCtrl.push(CreatecompanyPage, this.storage);
        }
        else {
          this.navCtrl.push(OtpOperatorPage, this.storage);
        }
        return;
      }
      else {
        let alert = this.alertCtrl.create({
          title: this.kakaomsgtitle2,
          subTitle: this.kakaomsg2,
          buttons: ['OK']
        });
        alert.present();
        console.log("User do not have email in kakao");
        return;
      }
    }, err => {
      console.log(JSON.stringify(err));
      this.appprov.presentAlert('error', JSON.stringify(err));
    });

    this.loading.dismiss();

  }//login()

}//class LoginKkPage
