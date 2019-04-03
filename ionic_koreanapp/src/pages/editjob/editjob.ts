import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { TranslateService } from '@ngx-translate/core';
import { BasePage } from '../base-page/basepage';

/**
 * Generated class for the AddjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editjob',
  templateUrl: 'editjob.html',
})
export class EditjobPage extends BasePage {

  public language: string;
  public title: string;
  public client: string;
  public project_earning: string;
  public location: string;
  public date_from: string;
  public date_to: string;
  public description: string;
  public operator_vehicle: string;
  public operator_name: string;
  public vehicle: string;
  public submit: string;
  public add: string;
  public back: string;
  public addjobmsgtitle: string;
  public addjobmsg: string;
  public update: string;

  // private access_token;
  public form: FormGroup;
  public UsrEmail: any;
  public OpList: any;
  public VehList: any;

  public VehicleTD: any[][];
  public OpTD: any[][];
  public counter: number;
  public selectedOp: any[];
  public selectedVeh: any[];

  VehArray: Array<{
    Vtype: string,
    Vsno: string
  }>;

  opname: string[];
  opemail: string[];

  vehsno: string[];
  vehtype: string[];
  DispSno: string[];
  vehModel: string[];

  jid: string;
  public Client_Name: string;
  public Earning: number;
  public locatio: string;
  public date_from_: string;
  public date_to_: string;
  public description_: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _FB: FormBuilder,
    public appprov: AppProvider,
    private storage: Storage,
    public viewctrl: ViewController,
    public _translate: TranslateService) {

    super(appprov);

    // storage.ready().then(() => {
    // });
    // storage.get('access_token').then((val) => {
    //   if (val == null){
    //     console.log("No acccess token");
    //     this.navCtrl.setRoot(LoginPage);
    //   }
    //   else{
    //     console.log("Got access token");
    //     this.access_token = val.toString();
    //     this.jid = navParams.get('jid');
    //     this.getJobInfo();  
    //   }
    // });
    this.jid = navParams.get('jid');
    // this.access_token = navParams.get('access_token');
    this.VehicleTD = [];
    this.OpTD = [];
    this.selectedOp = [];
    this.selectedVeh = [];
    this.counter = 0;
    this.form = this._FB.group({
      ClientName: ['', Validators.required],
      PayOut: ['', Validators.required],
      Loc: ['', Validators.required],
      DateFrom: ['', Validators.required],
      DateTo: ['', Validators.required],
      Desc: ['', Validators.required],
      OpVehPay: this._FB.array([
        this.initOpVehPay()
      ])
    });
    this.getJobInfo();
    this._initializeTranslation();

  }

  ionViewDidEnter() {
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
    this.title = this._translate.instant("addjob.title");
    this.client = this._translate.instant("addjob.client");
    this.project_earning = this._translate.instant("addjob.project_earning");
    this.date_from = this._translate.instant("addjob.date_from");
    this.date_to = this._translate.instant("addjob.date_to");
    this.description = this._translate.instant("addjob.description");
    this.operator_vehicle = this._translate.instant("addjob.operator_vehicle");
    this.operator_name = this._translate.instant("addjob.operator_name");
    this.vehicle = this._translate.instant("addjob.vehicle");
    this.submit = this._translate.instant("addjob.submit");
    this.add = this._translate.instant("addjob.add");
    this.back = this._translate.instant("addjob.back");
    this.addjobmsgtitle = this._translate.instant("addjob.addjobmsgtitle");
    this.addjobmsg = this._translate.instant("addjob.addjobmsg");
    this.update = this._translate.instant("addjob.update");
  }

  getJobInfo() {
    this.appprov.getJobInfo(this.access_token, this.jid).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("Job details retrieved");
      this.Client_Name = data['Client_Name'];
      this.Earning = data['Earning'];
      // console.log("Earning got: " + this.Earning);
      this.locatio = data['location'];
      this.date_from_ = data['date_from'];
      this.date_to_ = data['date_to'];
      this.description_ = data['description'];
    }, err => {
      console.log(err);
    });
  }

  /*Operator & vehicle pay*/
  initOpVehPay(): FormGroup {
    this.counter++;
    this.getOperators(this.access_token);
    return this._FB.group({
      Opname: ['', Validators.required],
      Vehtype: ['', Validators.required],
    });
  }

  addNewInputField(): void {
    if (this.form.valid) {
      this.UpdateSelectedOpVeh(this.form.value.OpVehPay);
      const control = <FormArray>this.form.controls.OpVehPay;
      control.push(this.initOpVehPay());
    } else {
      console.log('Nope');
    }
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.OpVehPay;
    control.removeAt(i);
  }

  manage(val: any): void {
    let result: any;
    console.log(val);
    // console.log(val.OpVehPay)
    this.appprov.updateJob(this.access_token, val.PayOut, val.DateFrom.toString(), val.DateTo.toString(), val.Loc, val.Desc, val.ClientName, this.jid)
      .then(res => {
        console.log(res);
        result = res;
        let operatorjobs = val.OpVehPay;
        let names = [];
        let vehicles = [];
        for (let i = 0; i < operatorjobs.length; i++) {
          names[i] = operatorjobs[i].Opname;
          vehicles[i] = operatorjobs[i].Vehtype;
        }
        this.appprov.updateOperatorJob(this.access_token, result.jid, names, vehicles).then(res => {
          this.appprov.presentAlert('Sucess!', 'Job Has been sucessfully updated!');
          this.viewctrl.dismiss('1');
        }, err => {
          console.log(err);
        })
      }, err => {
        console.log(err);
      })
  }

  getEmail() {
    this.appprov.getemail().then((res) => {
      this.UsrEmail = res;
      this.getOperators(res.toString());
      console.log("Email is: " + this.UsrEmail);
    }, err => {
      console.log(err);
    });
  }

  getOperators(email: string) {
    this.OpTD[this.counter] = [];
    this.appprov.getOperatorNames(this.access_token, this.date_from_, this.date_to_).then((res) => {
      console.log("no error");
      this.OpList = res;
      console.log(this.OpList);
      this.opname = this.OpList.operators;
      console.log(this.opname);
      this.opemail = this.OpList.emails;
      console.log(this.opemail);

      let i = this.opemail.length;
      while (i--) {
        if (this.selectedOp.indexOf(this.opemail[i]) > -1) {
          this.opemail.splice(i, 1);
          this.opname.splice(i, 1);
        }
      }

      for (let i = 0; i < this.opemail.length; i++) {
        this.OpTD[this.counter][i] = {
          email: this.opemail[i],
          name: this.opname[i]
        };
      }



    }, (err) => {
      console.log(err);
    });
  }

  getVehicles(email: string) {
    this.VehicleTD[this.counter] = [];

    this.appprov.getOperatorVehicles(this.access_token, this.date_from_, this.date_to_).then((res) => {
      console.log('1');
      console.log(JSON.stringify(res));
      this.DispSno = [];
      this.VehList = res;
      this.vehsno = this.VehList.vehsno;
      this.vehtype = this.VehList.vehtype;
      this.vehModel = this.VehList.model_no;

      let i = this.vehsno.length;
      console.log('2');
      for (let k = 0; k < i; k++) {
        this.DispSno.push(this.vehsno[k]);
        let concat = this.vehsno[k].toString() + '==**8**-' + this.vehModel[k].toString();
        this.vehsno[k] = concat;
      }
      console.log('3');
      // while(i--){
      //   if(this.selectedVeh.indexOf(this.vehsno[i]) > -1){
      //     this.vehsno.splice(i,1);
      //     this.vehtype.splice(i,1);
      //     // this.DispSno.splice(i,1);
      //   }
      // }

      console.log('4');
      console.log(this.vehsno.length);
      for (let i = 0; i < this.vehsno.length; i++) {
        this.VehicleTD[this.counter][i] = {
          sno: this.vehsno[i],
          vtype: this.vehtype[i],
          dissno: this.DispSno[i]

        }
        console.log('Vehicle TD -----');
        console.log(JSON.stringify(this.VehicleTD));
      }
    }, (err) => {
      console.log(err);
    });
  }

  UpdateSelectedOpVeh(Selected) {

    for (let i = 0; i < Selected.length; i++) {
      if (this.selectedOp.indexOf(Selected[i].Opname) < 0) {
        this.selectedOp.push(Selected[i].Opname);
      }
      if (this.selectedVeh.indexOf(Selected[i].Vehtype) < 0) {
        this.selectedVeh.push(Selected[i].Vehtype);
      }
    }

  }

  test(event) {
    this.getVehicles(event);
  }

  close() {
    this.viewctrl.dismiss('1');
  }

}
