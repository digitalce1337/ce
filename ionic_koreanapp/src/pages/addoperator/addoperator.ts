import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { LoginPage } from '../../pages/login/login';
import { KakaoCordovaSDK, KLCustomTemplate } from 'kakao-sdk';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addoperator',
  templateUrl: 'addoperator.html',
})
export class AddoperatorPage {

  public language: string;
  public title: string;
  public email: string;
  public skills: string;
  public add: string;
  public errormsgtitle: string;
  public errormsg: string;
  public addmsg: string;

  private access_token:string;

  loading:any;

  vehicle: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;

  public vehicle_type: string[];
  public vehicle_url: string[];
  public check_email: string;
  public add_operator: string;
  emailField: string = "";

  selectedArray: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private view: ViewController,
    public appprov:AppProvider, 
    public alertCtrl: AlertController, 
    public http: HttpClient, 
    private iab: InAppBrowser, 
    private storage: Storage, 
    public _kakaoCordovaSDK: KakaoCordovaSDK,
    public loadingCtrl: LoadingController,
    public _translate: TranslateService) {
    storage.ready().then(() => {
    });
    storage.get('access_token').then((val) => {
      if (val == null){
        console.log("No acccess token");
        this.navCtrl.push(LoginPage);
      }
      else{
        console.log("Got access token");
        this.access_token = val.toString();
        this.getVehicleUrl();
        this._initializeTranslation();
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AddoperatorPage');
    this._initializeTranslation();
    //this.getVehicleUrl();
  }

  public changeLanguage(): void{
    this._translateLanguage();
  }
  
  private _translateLanguage() : void{
    this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.title =  this._translate.instant("addoperator.title");
      this.email = this._translate.instant("addoperator.email");
      this.skills = this._translate.instant("addoperator.skills");
      this.add = this._translate.instant("addoperator.add");
      this.errormsgtitle = this._translate.instant("addoperator.errormsgtitle");
      this.errormsg = this._translate.instant("addoperator.errormsg");
      this.addmsg = this._translate.instant("addoperator.addmsg");
  }


  closeModal(){
    this.view.dismiss();
  }

  getVehicleUrl(){
    console.log("getting vehicle url");
    this.appprov.getVehicleUrl(this.access_token).then((res) =>{
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle_url = data['vehicle_url'];
      this.vehicle_type= data['vehicle_type'];
      this.vehicle = [];
      console.log(this.vehicle_url);
      for (let i=0; i<this.vehicle_url.length; i++){
        this.vehicle.push({
          vehicle_url: this.vehicle_url[i],
          vehicle_type: this.vehicle_type[i],
        })
      } 
  }, err =>{
    console.log(err);
  });
  } 
  

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }

  itemTappedAdd(){
    console.log("adding oeprator");
    this.appprov.checkEmail(this.access_token, this.emailField).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.check_email = data['result'];
      if (this.check_email == 'false'){
        let alert = this.alertCtrl.create({
          title: 'Email does not exists',
          subTitle: 'Double check email or invite him via kakaotalk',
          buttons: ['OK']
        });
        alert.present();
      }
      else{
        let vehicletype = [];
        for (let i=0; i<this.selectedArray.length; i++){
          vehicletype[i] = this.selectedArray[i]['vehicle_type'];
        }
        this.appprov.addOperator(this.access_token, this.emailField, vehicletype).then((res) => {
          let data =JSON.stringify(res);
          data = JSON.parse(data);
          this.add_operator = data['result'];
          if (this.add_operator == 'false'){
            let alert = this.alertCtrl.create({
              title: 'Fail to add operator',
              subTitle: 'Please try again',
              buttons: ['OK']
            });
            alert.present();
          }
          else{
            let alert = this.alertCtrl.create({
              title: 'Operator added successfully',
              buttons: ['OK']
            });
            alert.present();
            this.closeModal();
          }
        })
      }
    }, err => {
      console.log(err);
    });
  }
 
  // itemTappedAd(){
  //   console.log(this.emailField);
  //   console.log(this.selectedArray);
  //   console.log(this.selectedArray.length);
  //   console.log(this.selectedArray[0]['vehicle_type']);
  //   let vehicletype = [];
  //   for (let i=0; i<this.selectedArray.length; i++){
  //     vehicletype[i] = this.selectedArray[i]['vehicle_type'];
  //   }
  //   console.log (vehicletype);
  // }

  selectVehicle(data){
    if (data.checked == true) {
      this.selectedArray.push(data);
    }else{
      let newArray = this.selectedArray.filter(function(el){
        return el.vehicle_type !== data.vehicle_type;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }

}
