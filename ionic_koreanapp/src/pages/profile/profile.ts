import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, Tab, LoadingController, ViewController } from 'ionic-angular';
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
import { OperatorstabsPage } from '../operatorstabs/operatorstabs';
import { MyApp } from '../../app/app.component';
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

  public companyName: string;
  public companyAdd: string;
  public email: string;
  public phone_no: string;
  public language: string;

  public result: any;
  public userinfo:any;

  public Uname: any;
  public Udob: any;
  public Uemail:any;
  public uimg:any; 
  public Ucompany: any;
  public Ucompanyadd: any;
  public Unum: any;
  
  profile: any;

  private access_token:string;
  loading: any;

  Role: any;
  toggled: any;

  constructor(public navCtrl: NavController, 
    public http: Http, 
    public authService:AuthProvider,
    public alertCtrl:AlertController,
    private view: ViewController,
    public navParams:NavParams,
    public loadingCtrl: LoadingController,
    public appprov:AppProvider,
    private storage: Storage,
    public kakao: KakaoCordovaSDK,
    public _translate: TranslateService) {
      this.toggled = navParams.data.toggled;
      storage.ready().then(() => {
        storage.get('access_token').then((val) => {
          this.access_token = val.toString();
          this.getUserInfo();
          this._initializeTranslation(); 
          this.appprov.checkRole(this.access_token).then((res) => {
            let data = JSON.stringify(res);
            data = JSON.parse(data);
            // this.loading.dismiss();
            if (data['result'] == "1") {
              this.Role = 1;
            }
            else if (data['result'] == "0") {
              this.Role = 0;
            }
            else {
              console.log("Not in database");
            }
          }, err => {
            console.log(err);
          });
        });// end of storage.get('access_token').then((val)
      });//end of storage.ready().then(()

  }// constructor
  
  /*app starts here. meaning all the id, translation, user info, job info, vehicle info, and all the info etc
    All are functions
  */

  ionViewDidEnter(){
    // this.getUserInfo();
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
  // this.title =  this._translate.instant("home.title");
    // this.title =  this._translate.instant("profile.title");
    // this.companyName = this._translate.instant("profile.companyName");
    // this.companyAdd = this._translate.instant("profile.companyAdd");
    // this.email = this._translate.instant("profile.email");
    // this.phone_no = this._translate.instant("profile.phone_no");
}

popToHome(){
  if(this.Role == 1 && this.toggled == true) {
    this.navCtrl.push(OperatorstabsPage);  
  }
  else if(this.Role ==1 && this.toggled == false) {
    this.navCtrl.push(TabsPage)
  }
  else {
    this.navCtrl.push(OperatorstabsPage);
  }
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
    this.Unum = this.userinfo.phone_no;
    this.appprov.setemail(this.userinfo.email);
  }, (err) => {
    console.log(err);
  });
}

}//ProfilePage
