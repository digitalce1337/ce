import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppProvider} from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { OperatorstabsPage } from '../operatorstabs/operatorstabs';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the OtpOperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-operator',
  templateUrl: 'otp-operator.html',
})
export class OtpOperatorPage {

  public language: string;
  public title: string;
  public invitation_code: string;
  public invited_by: string;
  public phone_no: string;
  public continue: string;
  public skill_sets: string;  
  public errormsgtitle: string;
  public errormsg: string;
  public invite_error: string;

  otp: any = ' ';
  PhoneNo: any;
  Owner: any;
  access_token:any;
  capabilities: any[];

  vehicles: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appprov: AppProvider,
    public storage:Storage,
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
          //the url to display the image icon of the vehicles is the public DNS of AWS instance
          var vehurl = ['http://18.222.185.105/static/vehicles/compactor.png',
                        'http://18.222.185.105/static/vehicles/Excavator.png',
                        'http://18.222.185.105/static/vehicles/loader.png',
                        'http://18.222.185.105/static/vehicles/truck.png'];
          var vehtype = ['Compactor','Excavator','Loader','Truck'];
          console.log("Got access token");
          this.access_token = val.toString();
          this._initializeTranslation();
          this.vehicles = [];
          this.capabilities = [];
          for(let i = 0; i<vehurl.length; i++){
            this.vehicles.push({
              vehicle_url:vehurl[i],
              vehicle_type:vehtype[i]
            })
          }
        }
      });

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad OtpOperatorPage');
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
      this.title =  this._translate.instant("otp-operator.title");
      this.invitation_code =  this._translate.instant("otp-operator.invitation_code");
      this.invited_by =  this._translate.instant("otp-operator.invited_by");
      this.phone_no =  this._translate.instant("otp-operator.phone_no");
      this.continue =  this._translate.instant("otp-operator.continue");
      this.skill_sets =  this._translate.instant("otp-operator.skill_sets");
      this.errormsgtitle =  this._translate.instant("otp-operator.errormsgtitle");
      this.errormsg =  this._translate.instant("otp-operator.errormsg");
      this.invite_error =  this._translate.instant("otp-operator.invite_error");
  }

  Submit(){
    console.log('----HERE-----');
    console.log(this.access_token);
    console.log(this.capabilities);
    if(this.PhoneNo != null){
      this.appprov.OperatorLogin(this.access_token,this.otp,this.PhoneNo).then((res:any) => {
        this.appprov.UpdateCapabilities(this.access_token,this.capabilities.toString()).then((res:any) => {
          console.log('Capabilities Updated');
        })
        if(res.result == 'true'){
          console.log('Operator Logged in');
          this.navCtrl.setRoot(OperatorstabsPage);
        }
      })
    }
    else{
      this.appprov.presentAlert(this.errormsgtitle,this.errormsg);
    }

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

  CheckOTP(){
    if(this.otp.length == 6){
      this.appprov.CheckOTP(this.otp.toLowerCase()).then((res: any) => {
        if(res.result == '0'){
          this.Owner = this.invite_error;
        }
        else if(res.result == '1'){
          this.Owner = res.Nick;
        }
      })
    }


  }

}
