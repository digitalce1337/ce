import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, Tab } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

import { Http } from '@angular/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../home/home';
// import { Component, ViewChild } from '@angular/core';
// import { NavController, AlertController, NavParams, Tab } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public title: string;
  public welcome: string;
  public forecast: string;
  public fleet: string;
  public jobstats: string;
  public language: string;

  public result: any;
  public userinfo:any;

  public Uname: any;
  public Udob: any;
  public Uemail:any;
  public uimg:any; 
  public Ucompany: any;
  public Ucompanyadd: any;

  private access_token:string;


  constructor(public navCtrl: NavController, 
    public http: Http, 
    public authService:AuthProvider,
    public alertCtrl:AlertController,
    public navParams:NavParams,
    public appprov:AppProvider,
    private storage: Storage,
    public kakao: KakaoCordovaSDK,
    public _translate: TranslateService) {
      storage.ready().then(() => {
        storage.get('access_token').then((val) => {
          if (val == null){
            console.log("No acccess token");
            this.navCtrl.setRoot(LoginPage);
          }
          else{
            console.log("Got access token");
            this.access_token = val.toString();
            this.getUserInfo();

            this._initializeTranslation();     
          }
        });//storage.get('access_token').then((val)
      });//storage.ready().then(()

      //storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q');
      //storage.clear();

  }// constructor
  
  /*app starts here. meaning all the id, translation, user info, job info, vehicle info, and all the info etc
    All are functions
  */

  ionViewDidEnter(){
    this._initializeTranslation();
  }

  ionViewDidLoad(){
    this._initializeTranslation();
  }



public changeLanguage(): void{
  this._translateLanguage();
}

private _translateLanguage() : void{
//  this._translate.use(this.language);
  this._translate.setDefaultLang(this.language);
  this._initializeTranslation();
}
  
private _initializeTranslation(): void{
  setTimeout(()=>{
    this.title =  this._translate.instant("home.title");
    this.welcome = this._translate.instant("home.welcome");
    this.forecast = this._translate.instant("home.forecast");
    this.fleet = this._translate.instant("home.fleet");
    this.jobstats = this._translate.instant("home.jobstats");
  }, 200);
}

popToHome(){
  this.navCtrl.setRoot(TabsPage);
}

getUserInfo(){
  this.authService.getUserinfo(this.access_token).then((result) => {
    this.userinfo = result;
    this.userinfo = JSON.parse(this.userinfo._body);
    this.Uemail = this.userinfo.email;
    this.Udob = this.userinfo.dob;
    this.Uname = this.userinfo.name;
    this.uimg = this.userinfo.profile_image_url;
    this.Ucompany = this.userinfo.company_name;
    this.Ucompanyadd = this.userinfo.company_add;
    this.appprov.setemail(this.userinfo.email);
  }, (err) => {
    console.log(err);
  });
}

}//ProfilePage

// constructor(public navCtrl: NavController, public navParams: NavParams) {
// }
// ionViewDidLoad() {
//   console.log('ionViewDidLoad ProfilePage');
// }
// ionViewDidEnter(){
//   console.log("entered profile page"); 
  
// }