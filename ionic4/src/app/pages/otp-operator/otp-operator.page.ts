import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/apikey/api.service';

@Component({
  selector: 'app-otp-operator',
  templateUrl: './otp-operator.page.html',
  styleUrls: ['./otp-operator.page.scss'],
})
export class OtpOperatorPage implements OnInit {

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
  access_token: any;
  capabilities: any[];

  vehicles: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;

  vehurl;
  vehtype;

  constructor(public _translate: TranslateService, public appprov: AppService, public storage: Storage,
    public router: Router, public navCtrl: NavController, public api: ApiService) {
    this.vehurl = [this.api.apiKey + 'static/vehicles/compactor.png',
    this.api.apiKey + 'static/vehicles/Excavator.png',
    this.api.apiKey + 'static/vehicles/loader.png',
    this.api.apiKey + 'static/vehicles/truck.png'];
    console.log("this.vehurl: " + this.vehurl);
    this.vehtype = ['Compactor', 'Excavator', 'Loader', 'Truck'];
  }

  ngOnInit() {

    this.storage.ready().then(() => { });

    this.storage.get('access_token').then((val) => {
      if (val == null) {
        console.log(this.access_token);
        console.log("No acccess token");
        this.router.navigateByUrl('login');
        // this.nav.setRoot(LoginPage);
      }
      else {
        console.log("Got access token");
        this.access_token = val.toString();
        this._translateLanguage();
        this._initializeTranslation();
        this.vehicles = [];
        this.capabilities = [];
        for (let i = 0; i < this.vehurl.length; i++) {
          this.vehicles.push({
            vehicle_url: this.vehurl[i],
            vehicle_type: this.vehtype[i]
          })
        }
      }
    });

    // this._translateLanguage();
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    // this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("otp-operator.title");
    this.invitation_code = this._translate.instant("otp-operator.invitation_code");
    this.invited_by = this._translate.instant("otp-operator.invited_by");
    this.phone_no = this._translate.instant("otp-operator.phone_no");
    this.continue = this._translate.instant("otp-operator.continue");
    this.skill_sets = this._translate.instant("otp-operator.skill_sets");
    this.errormsgtitle = this._translate.instant("otp-operator.errormsgtitle");
    this.errormsg = this._translate.instant("otp-operator.errormsg");
    this.invite_error = this._translate.instant("otp-operator.invite_error");
  }

  Submit() {
    console.log('----HERE-----');
    console.log(this.access_token);
    console.log(this.capabilities);
    if (this.PhoneNo != null) {
      this.appprov.OperatorLogin(this.access_token, this.otp, this.PhoneNo).then((res: any) => {
        this.appprov.UpdateCapabilities(this.access_token, this.capabilities.toString()).then((res: any) => {
          console.log('Capabilities Updated');
        })
        if (res.result == 'true') {
          console.log('Operator Logged in');
          this.router.navigateByUrl('operator/tabs/operator-home');
          // this.nav.setRoot(OperatorstabsPage);
        }
      })
    }
    else {
      this.appprov.presentAlert(this.errormsgtitle, this.errormsg);
    }

  }

  selectVehicle(data) {
    if (data.checked == true) {
      if (!(this.capabilities.indexOf(data.vehicle_type) > -1)) {
        this.capabilities.push(data.vehicle_type);
      }
    } else {
      if (this.capabilities.indexOf(data.vehicle_type) > -1) {
        var index = this.capabilities.indexOf(data.vehicle_type, 0);
        this.capabilities.splice(index, 1);
      }
    }
    console.log(this.capabilities.toString());
  }

  CheckOTP() {
    if (this.otp.length == 6) {
      this.appprov.CheckOTP(this.otp.toLowerCase()).then((res: any) => {
        if (res.result == '0') {
          this.Owner = this.invite_error;
        }
        else if (res.result == '1') {
          this.Owner = res.Nick;
        }
      })
    }

  }


}
