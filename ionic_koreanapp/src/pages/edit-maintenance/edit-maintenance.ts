import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the EditMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-maintenance',
  templateUrl: 'edit-maintenance.html',
})
export class EditMaintenancePage {

  public language: string;
  public title: string;
  public delete: string;

  vehInfo: any;
  maintenances: Array<{
    date_from:string,
    date_to: string, 
    location:string,
    desc:string}>;

  serial_no:string;
  date_from:string[];
  date_to: string[];
  location:string[];
  desc:string[];
  maint: any;

  private access_token: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appprov:AppProvider,
    private storage: Storage,
    private alertCtrl: AlertController,
    public view:ViewController,
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
          console.log(this.vehInfo);
          this.retrieveMaintenance(this.vehInfo.serial_no);
          this.serial_no = this.vehInfo.serial_no;
          this._initializeTranslation();
        }
      });
  } 

  ionViewDidEnter() {
    console.log('ionViewDidLoad EditMaintenancePage');
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
      this.title =  this._translate.instant("edit-maintenance.title");
      this.delete =  this._translate.instant("edit-maintenance.delete");
  }


  retrieveMaintenance(serial_no){
    this.appprov.retrieveMaintenance(this.access_token, serial_no).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.maint = res;
      this.date_from = this.maint.date_from;
      this.date_to = this.maint.date_to;
      this.location = this.maint.location;
      this.desc = this.maint.desc;
      this.maintenances = [];
      for(let i = 0; i < this.date_from.length; i++) {
        this.maintenances.push({
          date_from: this.date_from[i],
          date_to: this.date_to[i], 
          location:this.location[i],
          desc: this.desc[i], 
        });
      }
      }, err=>{
      console.log(err);
    });
  }

  close(){
    this.view.dismiss();
  }

  deleteMaintenance(date_from, date_to, location, desc){
    this.appprov.deleteMaintenance(this.access_token, this.serial_no, date_from, date_to, location, desc).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("record deleted");
      this.retrieveMaintenance(this.serial_no);
      }, err=>{
      console.log(err);
    });
  }

}
