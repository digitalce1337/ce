import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-owner-add-job',
  templateUrl: './owner-add-job.page.html',
  styleUrls: ['./owner-add-job.page.scss'],
})
export class OwnerAddJobPage implements OnInit {

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

  private access_token;
  public form: FormGroup;
  public UsrEmail:any;
  public OpList: any;
  public VehList: any;

  public VehicleTD: any[][];
  public OpTD: any [][];
  public counter:number;
  public selectedOp: any[];
  public selectedVeh: any[];
  
  VehArray: Array<{
      Vtype: string,
      Vsno: string}>;

  opname: string[];
  opemail: string[];
  opavail: string[];

  vehsno: string[];
  vehtype: string[];
  vehModel: string[];
  DispSno: string[];
  vehAvail: string[];

  constructor(public _translate: TranslateService,public _FB: FormBuilder, public appprov: AppService,
    public modalCtrl: ModalController) { 
      // this.access_token = this.navParams.get('access_token');
      this.VehicleTD = [];
      this.OpTD = [];
      this.selectedOp = [];
      this.selectedVeh = [];
      this.counter = 0;
      //FormBuilder: Angular form builder that creates desired form 
      this.form = this._FB.group({
        ClientName: ['',Validators.required],
        PayOut : ['',Validators.required],
        Loc: ['',Validators.required],
        DateFrom: ['',Validators.required],
        DateTo: ['',Validators.required],
        Desc: ['',Validators.required],
        OpVehPay : this._FB.array([
          this.initOpVehPay()
        ])//OpVehPay
      });//this.form
      // this._initializeTranslation(); 
    }

  ngOnInit() {
    this._translateLanguage();
  }
  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
  private _initializeTranslation(): void{
    this.title =  this._translate.instant("addjob.title");    
    this.client =  this._translate.instant("addjob.client");
    this.project_earning =  this._translate.instant("addjob.project_earning");
    this.location =  this._translate.instant("addjob.location");
    this.date_from =  this._translate.instant("addjob.date_from");
    this.date_to =  this._translate.instant("addjob.date_to");
    this.description =  this._translate.instant("addjob.description");
    this.operator_vehicle =  this._translate.instant("addjob.operator_vehicle");
    this.operator_name =  this._translate.instant("addjob.operator_name");
    this.submit =  this._translate.instant("addjob.submit");
    this.add =  this._translate.instant("addjob.add");
    this.back =  this._translate.instant("addjob.back");  
    this.addjobmsgtitle =  this._translate.instant("addjob.addjobmsgtitle");
    this.addjobmsg =  this._translate.instant("addjob.addjobmsg");
    // console.log(this.welcome);        
}

  initOpVehPay(): FormGroup{
    this.counter ++;
    
    return this._FB.group({
      Opname: [''],
      // Opname: ['',Validators.required],
      Vehtype: ['',Validators.required],
    });
  }

  /* */
  addNewInputField():void{
    if(this.form.valid){
      this.UpdateSelectedOpVeh(this.form.value.OpVehPay);
      const control = <FormArray>this.form.controls.OpVehPay;
      control.push(this.initOpVehPay());
    }else{
      console.log('Nope');
    }
  }

  removeInputField(i: number):void{
    this.counter--;
    const control = <FormArray>this.form.controls.OpVehPay;
    control.removeAt(i);
  }

  manage(val:any):void{
    let result: any;
    console.log(val);
    // console.log(val.OpVehPay)
    this.appprov.addJob(this.access_token,val.PayOut,val.DateFrom.toString(),val.DateTo.toString(),val.Loc,val.Desc,val.ClientName)
    .then(res => {
      console.log(res);
      result = res;
      //       let operatorjobs = this.form.get('technologies').value;
//       this.operator_names = [];
//       this.operator_vehicles = [];
//       for (let i=0; i<operatorjobs.length; i++){
//         //this.operator_names[i] = operatorjobs[i].name;
//         let index = this.operators.indexOf(operatorjobs[i].name);
//         let email = this.emails[0][index];
//         this.operator_names[i] = email;
//         this.operator_vehicles[i]  = operatorjobs[i].type;
//       }  
      let operatorjobs = val.OpVehPay;
      let names = [];
      let vehicles = [];
      for (let i=0; i<operatorjobs.length; i++){
        names[i] = operatorjobs[i].Opname;
        vehicles[i] = operatorjobs[i].Vehtype;
      }
      console.log('i am sending this when i am adding job');
      console.log(vehicles);
      this.appprov.insertOperatorJob(this.access_token, result.jid,names, vehicles).then(res => {
        this.appprov.presentAlert(this.addjobmsgtitle, this.addjobmsg);
        // this.viewctrl.dismiss('1');
        this.modalCtrl.dismiss('1');
        this.appprov.addJobDetails(this.access_token,val.DateFrom.toString(),val.DateTo.toString(), result.jid,names, vehicles);
      },err => {
        console.log(err);
      })
    },err => {
      console.log(err);
    })
  }// end of manage

  getEmail(){
    this.appprov.getemail().then((res) => {
      this.UsrEmail = res;
      //this.getOperators(res.toString());
      
    }, err =>{
      console.log(err);
    });
  }

  getOperators(datefrom,dateto){
    console.log("---call---");
    console.log(datefrom);
    console.log(dateto);
    this.OpTD[this.counter] = [];
    this.appprov.getOperatorNames(this.access_token,datefrom,dateto).then((res) => {
      console.log("no error");
      this.OpList = res;
      console.log(JSON.stringify(res));
      this.opname = this.OpList.operators;
      console.log(this.opname);
      this.opemail = this.OpList.emails;
      console.log(this.opemail);
      this.opavail = this.OpList.availability;
      console.log(this.opavail)

      let i = this.opemail.length;
      while(i--){
        if(this.selectedOp.indexOf(this.opemail[i]) > -1){
          this.opemail.splice(i,1);
          this.opname.splice(i,1);
          this.opavail.splice(i,1);
        }
      }

      for(let i=0;i<this.opemail.length;i++){
        this.OpTD[this.counter][i] = {
          email: this.opemail[i],
          name: this.opname[i],
          availbility: this.opavail[i]
        };
      }



    },(err) => {
      console.log(err);
    });
  }// end of getOperators

  getVehicles(datefrom,dateto){
    this.VehicleTD[this.counter] = [];

    this.appprov.getOperatorVehicles(this.access_token,datefrom,dateto).then((res) => {
      console.log('1');
      console.log(JSON.stringify(res));
      this.DispSno = [];
      this.VehList = res;
      this.vehsno = this.VehList.vehsno;
      this.vehtype = this.VehList.vehtype;
      this.vehModel = this.VehList.model_no;
      this.vehAvail = this.VehList.availability;

      let i = this.vehsno.length;
      console.log('2');
      for (let k = 0; k<i;k++){
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
      for(let i=0;i<this.vehsno.length;i++){
        this.VehicleTD[this.counter][i] = {
          sno:this.vehsno[i],
          vtype:this.vehtype[i],
          dissno:this.DispSno[i],
          availability:this.vehAvail[i]
          
        }
        console.log('Vehicle TD -----');
        console.log(JSON.stringify(this.VehicleTD));
      }
    },(err) => {
      console.log(err);
    });
  }//end of getVehicles

  UpdateSelectedOpVeh(Selected){

    for(let i=0; i < Selected.length;i++){
      if(this.selectedOp.indexOf(Selected[i].Opname) < 0){
        this.selectedOp.push(Selected[i].Opname);
      }
      if(this.selectedVeh.indexOf(Selected[i].Vehtype) < 0){
        this.selectedVeh.push(Selected[i].Vehtype);
      }
    }

  }

  ValidateDate(event){
    var datefrom = (this.form.value.DateFrom)
    var dateto = (this.form.value.DateTo)
    if(dateto == '' || datefrom == ''){
      this.appprov.presentAlert('Error','Please Select Date From and Date to to continue')
    }
    if(datefrom > dateto || dateto < datefrom){
      this.appprov.presentAlert('Error','Please make sure Date from is earlier than date to and vice versa');
    }
  }

  close(){
    // this.viewctrl.dismiss('1');
    this.modalCtrl.dismiss('1');
  }
  LoadOpCheck(){
    var valueCheck = 0;
    var nullcheck = 0;
    var datefrom = (this.form.value.DateFrom);
    var dateto = (this.form.value.DateTo);
    console.log(datefrom)
    console.log(dateto)
    if(datefrom != '' && dateto != ''){
      nullcheck = 1;
    }
    if(datefrom <= dateto && dateto >= datefrom){
      valueCheck = 1;
    }
    if(nullcheck == 1 && valueCheck == 1){
      this.getOperators(datefrom.toString(),dateto.toString());
      this.getVehicles(datefrom.toString(),dateto.toString());
    }

  }
}
