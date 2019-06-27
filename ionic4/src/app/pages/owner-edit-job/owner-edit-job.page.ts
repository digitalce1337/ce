import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-edit-job',
  templateUrl: './owner-edit-job.page.html',
  styleUrls: ['./owner-edit-job.page.scss'],
})
export class OwnerEditJobPage implements OnInit {

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

  // public access_token;
  private access_token: string;
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

  vehsno: string[];
  vehtype: string[];
  DispSno:string[];
  vehModel:string[];

  jid: string;
  public Client_Name: string;
  public Earning: number;
  public locatio: string;
  public date_from_: string;
  public date_to_: string;
  public description_: string;
  public operator_: string;
  public vehicle_ : string;

  constructor(public _translate: TranslateService, public appprov: AppService, public _FB: FormBuilder,
    public modalCtrl: ModalController,public activeRoute:ActivatedRoute, public storage: Storage) { 
      this.activeRoute.queryParams.subscribe(params => { 
        // console.log("Results: "+ params+ " OR: "+ params["TakeJid"]);
        console.log("Results: "+ params["TakeJid"]);
        this.jid = params["TakeJid"];
        console.log("Give result: "+ this.jid);
      });
      // this.jid = navParams.get('jid');
      // this.access_token = navParams.get('access_token');
      this.VehicleTD = [];
      this.OpTD = [];
      this.selectedOp = [];
      this.selectedVeh = [];
      this.counter = 0;
      this.form = this._FB.group({
        ClientName: ['',Validators.required],
        PayOut : ['',Validators.required],
        Loc: ['',Validators.required],
        DateFrom: ['',Validators.required],
        DateTo: ['',Validators.required],
        Desc: ['',Validators.required],
        OpVehPay : this._FB.array([
          this.initOpVehPay()
        ])
      });
    }
  
    
  ngOnInit() {
    this.storage.ready().then(()=>{      
      this.storage.get('access_token').then((val)=>{        
        this.access_token = val;               
        this._translateLanguage();
        this.getJobInfo();   
      })})
  }
  //   this._initializeTranslation();
  // }

  public changeLanguage(): void{
    this._translateLanguage();
  }
  
  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.title =  this._translate.instant("addjob.edit_title");
      this.client = this._translate.instant("addjob.client");
      this.project_earning = this._translate.instant("addjob.project_earning");
      this.location =  this._translate.instant("addjob.location");
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

  getJobInfo(){
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
      this.operator_ = data['operators'];
      this.vehicle_ = data['vehicles'];
      // alert("operator_ :" + this.operator_ + " " + "vehicle_:" + this.vehicle_);
      this.getOperators();
      this.getVehicles();
    }, err => {
      console.log(err);
    });
  }

  /*Operator & vehicle pay*/
  initOpVehPay(): FormGroup{
    this.counter ++;
    // this.getOperators();
    // this.getOperators(this.access_token);
    return this._FB.group({
      Opname: ['',Validators.required],
      Vehtype: ['',Validators.required],
    });
  }

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
    const control = <FormArray>this.form.controls.OpVehPay;
    control.removeAt(i);
  }

  manage(val:any):void{
    let result: any;
    console.log(val);
    // console.log(val.OpVehPay)
    this.appprov.updateJob(this.access_token,val.PayOut,val.DateFrom.toString(),val.DateTo.toString(),val.Loc,val.Desc,val.ClientName, this.jid)
    .then(res => {
      console.log(res);
      result = res;
      let operatorjobs = val.OpVehPay;
      let names = [];
      let vehicles = [];
      for (let i=0; i<operatorjobs.length; i++){
        names[i] = operatorjobs[i].Opname;
        vehicles[i] = operatorjobs[i].Vehtype;
      }
      // this.appprov.aple(this.access_token,result.jid).then(res=>{
      this.appprov.deleteJob(this.access_token,result.jid).then(res=>{      
        console.log('Delete Success:'+res);
      //   this.appprov.presentAlert('Success!', 'Job Has been successfully updated!');
        // this.viewctrl.dismiss('1');
      }, err=>{console.log('Delete Failed error:'+err)})
      this.appprov.addJobDetails(this.access_token,val.DateFrom.toString(),val.DateTo.toString(), result.jid,names, vehicles).then(res=>{        
        console.log('Add Success:'+res);
      }, err=>{console.log('Add Failed error:'+err)})
      // add deletefullJobDetails with catch error
      // this.appprov.deletefullJobDetails(this.access_token,result.jid).then(res=>{
      //   console.log(res);                        
      // // add newfullJobDetails with catch error  
      // this.appprov.addJobDetails(this.access_token,val.DateFrom.toString(),val.DateTo.toString(), result.jid,names, vehicles).then(res=>{
      //   console.log(res);      
      //below here
      this.appprov.updateOperatorJob(this.access_token, result.jid,names, vehicles).then(res => {
        this.appprov.presentAlert('Success!', 'Job has been successfully updated!');
        // this.viewctrl.dismiss('1');
        this.modalCtrl.dismiss('1');
      },err => {
        console.log(err);
      })
      //above here
    //   },err => {
    //     console.log(err);
    //   })
    // },err => {
    //   console.log(err);
    // })
    },err => {
      console.log(err);
    })
  }

  getEmail(){
    this.appprov.getemail().then((res) => {
      this.UsrEmail = res;
      // this.getOperators(res.toString());
      console.log("Email is: " + this.UsrEmail);
    }, err =>{
      console.log(err);
    });
  }

  // getOperators(email: string){
  getOperators(){
    this.OpTD[this.counter] = [];    
    this.date_from_ = this.date_from_.substring(0,10);
    this.date_to_ = this.date_to_.substring(0,10);
    console.log("Prior to calling server, show me values:",this.access_token,this.date_from_,this.date_to_);
    this.appprov.getOperatorNames(this.access_token,this.date_from_,this.date_to_).then((res) => {
      console.log("no error");
      this.OpList = res;
      console.log(this.OpList);
      this.opname = this.OpList.operators;
      console.log(this.opname);
      this.opemail = this.OpList.emails;
      console.log(this.opemail);

      let i = this.opemail.length;
      while(i--){
        if(this.selectedOp.indexOf(this.opemail[i]) > -1){
          this.opemail.splice(i,1);
          this.opname.splice(i,1);
        }
      }

      for(let i=0;i<this.opemail.length;i++){
        this.OpTD[this.counter][i] = {
          email: this.opemail[i],
          name: this.opname[i]
        };
      }



    },(err) => {
      console.log(err);
    });
  }

  // getVehicles(email:string){
  getVehicles(){
    this.VehicleTD[this.counter] = [];
    console.log("Prior to calling server, show me values:",this.access_token,this.date_from_,this.date_to_);
    this.appprov.getOperatorVehicles(this.access_token,this.date_from_,this.date_to_).then((res) => {
      console.log('1');
      console.log(JSON.stringify(res));
      this.DispSno = [];
      this.VehList = res;
      this.vehsno = this.VehList.vehsno;
      this.vehtype = this.VehList.vehtype;
      this.vehModel = this.VehList.model_no;

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
          dissno:this.DispSno[i]
          
        }
        console.log('Vehicle TD -----');
        console.log(JSON.stringify(this.VehicleTD));
      }
    },(err) => {
      console.log(err);
    });
  }

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

  test(event){
    // this.getVehicles(event);
    this.getVehicles();
  }

  close(){
    // this.viewctrl.dismiss('1');
    this.modalCtrl.dismiss('1');
  }


}
