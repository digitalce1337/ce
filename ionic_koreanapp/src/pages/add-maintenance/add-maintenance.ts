import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-maintenance',
  templateUrl: 'add-maintenance.html',
})
export class AddMaintenancePage {

  public language: string;
  public title: string;
  public start_date: string;
  public end_date: string;
  public location: string;
  public description: string;
  public add: string;
  public cancel: string;

  private access_token: string;
  vehInfo: any;
  Fromdatetime: any;
  Todatetime: any;
  LocationField: any;
  DescriptionField: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public appprov:AppProvider, 
    public viewctrl:ViewController,
    public _translate: TranslateService) {
      storage.ready().then(() => {
      });
      storage.get('access_token').then((val) => {
        if (val == null){
          console.log("No acccess token");
          this.navCtrl.setRoot(LoginPage);
        }
        else{
          console.log("Got access token");
          this.access_token = val.toString();
          this.vehInfo = this.navParams.get('vehicle');
          console.log(JSON.stringify(this.vehInfo));
          this._initializeTranslation();     
          }
      });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AddMaintenancePage');
    this._initializeTranslation();     
  }

  public changeLanguage(): void{
    this._translateLanguage();
  }
  
  private _translateLanguage() : void{
    this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.title =  this._translate.instant("add-maintenance.title");
      this.start_date = this._translate.instant("add-maintenance.start_date");
      this.end_date = this._translate.instant("add-maintenance.end_date");
      this.location = this._translate.instant("add-maintenance.location");
      this.description = this._translate.instant("add-maintenance.description");
      this.add = this._translate.instant("add-maintenance.add");
      this.cancel = this._translate.instant("add-maintenance.cancel");
  }
  
  addMaintenance(){
    let date_from = this.Fromdatetime;
    let date_to = this.Todatetime;
    let location = this.LocationField;
    let desc = this.DescriptionField;
    let serial_no = this.vehInfo.serial_no;
    let modelnum = this.vehInfo.model_no;
    this.appprov.addMaintenance(this.access_token, serial_no, date_from, date_to, location, desc,modelnum).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      
    }, err => {
      console.log(err);
    });
    this.close();
  }

  close(){
    this.viewctrl.dismiss();
  }

}
