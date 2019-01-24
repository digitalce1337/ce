import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { AppProvider } from '../../providers/app/app';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the UpdatecapopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatecapop',
  templateUrl: 'updatecapop.html',
})
export class UpdatecapopPage {

  public language: string;
  public skill_sets: string;
  public submit: string;

  vehicles: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;
  access_token:string;

  capabilities: any[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public appprov: AppProvider,
    public viewCtrl:ViewController,
    public _translate: TranslateService) {

    storage.ready().then(() => {
    });

    storage.get('access_token').then((val) => {
      if (val == null){
        console.log(this.access_token);
        console.log("No acccess token");
        this.navCtrl.setRoot(LoginPage);
      }
      else{
        var vehurl = ['http://18.220.42.164/static/vehicles/compactor.png',
                      'http://18.220.42.164/static/vehicles/Excavator.png',
                      'http://18.220.42.164/static/vehicles/loader.png',
                      'http://18.220.42.164/static/vehicles/truck.png'];
        var vehtype = ['Compactor','Excavator','Loader','Truck'];
        console.log("Got access token");
        this.access_token = val.toString();
        this.vehicles = [];
        this.capabilities = [];
        for(let i = 0; i<vehurl.length; i++){
          this.vehicles.push({
            vehicle_url:vehurl[i],
            vehicle_type:vehtype[i]
          })
        }
        this._initializeTranslation();
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UpdatecapopPage');
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
      this.skill_sets =  this._translate.instant("operatorhome.skill_sets");
      this.submit =  this._translate.instant("opjobdetails.submit");
  }


  selectVehicle(data){
    if (data.checked == true) {
      if(!(this.capabilities.indexOf(data.vehicle_type) > -1)){
        this.capabilities.push(data.vehicle_type);
      }
    }else{
      if(this.capabilities.indexOf(data.vehicle_type) > -1){
        var index = this.capabilities.indexOf(data.vehicle_type,0);
        this.capabilities.splice(index,1);
      }
    }
    console.log(this.capabilities.toString());
  }

  UpdateCap(){
    console.log(this.access_token);
    console.log(this.capabilities.toString());

    this.appprov.UpdateCapabilities(this.access_token,this.capabilities.toString()).then((res) => {
      this.appprov.presentAlert('Success!','Skillsets successfully updated!');
      this.close();
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
