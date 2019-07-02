import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ApiService } from 'src/app/apikey/api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-owner-job-info',
  templateUrl: './owner-job-info.page.html',
  styleUrls: ['./owner-job-info.page.scss'],
})
export class OwnerJobInfoPage implements OnInit {

  public language: string;
  public txtitle: string;
  public complete_job: string;
  public cancel_job: string;
  public reports: string;
  public view_reports: string;
  public past: string;
  public days: string;
  public all: string;
  public cancel: string;
  public completemsgtitle: string;
  public completemsg: string;
  // public cancelmsgtitle: string;
  public cancelmsg: string;
  public duration: any;

  public photos: any = [];
  public base64Image: string;

  private access_token: string;
  //Zul account
  // public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  // public access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';
  jid: string;
  payout: string;
  date_from: string;
  date_to: string;
  location: string;
  description: string;
  title: string;
  completed: string;

  editShow: boolean =true;

  buttonDisabled: boolean=true;
  buttonColor: string;

  jobOperators: Array<{
    profile_url: string,
    name: string,
    vehicle_url: string}>;

  profile_url: string[];
  name: string[];
  vehicle_url: string[];
  operators: any;

  ReportCards: Array<{
    report_img: string,
    report_desc: string,
    report_operator_name: string,
    report_location: string,
    report_serial_no: string,
    report_model_no: string,
    report_vehicle_type: string,
    report_fault: string
  }>;

  report_cards: any;
  report_imgs: string[];
  report_descs: string[];
  report_operator_names: string[];
  report_locations: string[];
  report_serial_nos: string[];
  report_model_nos: string[];
  report_vehicle_types: string[];
  report_faults: string[];

  constructor(public navCtrl: NavController, public _translate: TranslateService, public appprov: AppService, private api: ApiService
    , public activeRoute:ActivatedRoute, public alertCtrl : AlertController, public storage : Storage) { 
    this.activeRoute.queryParams.subscribe(params => { 
      // console.log("Results: "+ params+ " OR: "+ params["TakeJid"]);
      console.log("Results: "+ params["TakeJid"]);
      this.jid = params["TakeJid"];
      console.log("Give result: "+ this.jid);
    });  
  }
  

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {
        this.access_token = val;
        this._translateLanguage();
        this.retrieveJobDetails(this.jid);
        this.retrieveJobOperators(this.jid);
        this.getJobCards(this.jid, '3');
        // this._initializeTranslation();
      })
    })
  }

  public changeLanguage(): void{
    this._translateLanguage();
  }
   
  // private _translateLanguage() : void{
  //   this._translate.use(this.language);
  //   this._initializeTranslation();
  // }
    
  private _translateLanguage() : void{    
      if (this.language === ('kr'))
      {
        this._translate.setDefaultLang('kr');      
      } else
      {
        this._translate.setDefaultLang('en');
      }      
      this._initializeTranslation();
    }

  private _initializeTranslation(): void{
      this.txtitle =  this._translate.instant("jobinfo.txtitle");
      this.complete_job =  this._translate.instant("jobinfo.complete_job");
      this.cancel_job =  this._translate.instant("jobinfo.cancel_job");
      this.reports =  this._translate.instant("jobinfo.reports");
      this.view_reports =  this._translate.instant("jobinfo.view_reports");
      this.past =  this._translate.instant("jobinfo.past");
      this.days =  this._translate.instant("jobinfo.days");
      this.all =  this._translate.instant("jobinfo.all");
      this.cancel =  this._translate.instant("jobinfo.cancel");
      this.completemsgtitle =  this._translate.instant("jobinfo.completemsgtitle");
      this.completemsg =  this._translate.instant("jobinfo.completemsg");
      // this.cancelmsgtitle =  this._translate.instant("jobinfo.cancelmsgtitle");
      this.cancelmsg =  this._translate.instant("jobinfo.cancelmsg");
  }

  getJobCards(jid, no_of_days){
    console.log("getting job card method called");
    console.log("Access_token:", this.access_token)
    console.log("JID:", jid)
    console.log("No. of days:", no_of_days)
    this.appprov.getJobCards(this.access_token, jid, no_of_days).then((res) => {
      console.log(JSON.stringify(res));
      this.report_cards = res;
      this.report_imgs = this.report_cards.img_urls;
      this.report_descs = this.report_cards.job_descs;
      this.report_locations = this.report_cards.locations;
      this.report_operator_names = this.report_cards.operator_names;
      this.report_serial_nos = this.report_cards.serial_nos;
      this.report_model_nos = this.report_cards.model_nos;
      this.report_vehicle_types = this.report_cards.vehicle_types;
      this.report_faults = this.report_cards.faults;
      this.ReportCards = [];
      if (this.report_imgs != undefined || this.report_imgs != null){
        for (let i=0; i<this.report_imgs.length; i++){
          this.ReportCards.push({
            report_img: this.api.apiKey + this.report_imgs[i].toString(),
            // report_img: this.api.apiKey.slice(0,-1) + this.report_imgs[i].toString(),
            report_desc: this.report_descs[i],
            report_location: this.report_locations[i],
            report_operator_name: this.report_operator_names[i],
            report_serial_no: this.report_serial_nos[i],
            report_model_no: this.report_model_nos[i],
            report_vehicle_type: this.report_vehicle_types[i],
            report_fault: this.report_faults[i],
          })
        }
        console.log(this.ReportCards);
        console.log("Job card retrieved");
      }
      else{
        console.log("No report Card");
      }
    }, err=>{
      console.log(err);
    });
  }

  retrieveJobOperators(jid){
    this.appprov.retrieveJobOperators(this.access_token, jid).then((res) => {
      this.operators = res; 
      console.log(res);
      this.profile_url = this.operators.profileUrl;
      console.log(this.profile_url);
      this.name = this.operators.names;
      this.vehicle_url = this.operators.vehicles_url;
      this.jobOperators = []; 
      if (this.profile_url != undefined || this.profile_url != null){
        for (let i=0; i<this.profile_url.length; i++){
          this.jobOperators.push({
            profile_url: this.profile_url[i],
            name: this.name[i],
            vehicle_url: this.vehicle_url[i]
          })
        }
        console.log("Job details retrieved");
      }
      else{
        console.log("No Operators");
      }
      }, err=>{
      console.log(err);
    });
  }

  retrieveJobDetails(jid){
    this.appprov.retrieveJobDetails(this.access_token, jid).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("Job details retrieved");
      this.jid = data['jid'];
      this.payout = data['payout'];
      this.date_from = data['date_from'].substring(0,10);
      // this.date_from = data['date_from'];
      this.date_to = data['date_to'].substring(0,10);
      // this.date_to = data['date_to'];
      this.location = data['location'];
      this.description = data['description'];
      this.title = data['title'];
      this.completed = data['completed'];
      if (this.completed == '1'){
        this.buttonDisabled = true;
        this.buttonColor = 'success';
        this.editShow = false;      
      }
      //cancelled
      else if(this.completed =='2') {
        this.buttonDisabled = true;
        this.buttonColor = 'medium';
        this.editShow = false;
      }
      else{
        this.buttonDisabled = false;
        this.buttonColor = 'danger';
        this.editShow = true;
      }
    }, err=>{
      console.log(err);
    });
  }

  editJob(){
    console.log("editing");
    console.log("Check jobID value: "+this.jid);  
    let navigationExtras: NavigationExtras = {
      queryParams: {          
          TakeJid: this.jid
      }
    };
    this.navCtrl.navigateForward(['owner-edit-job'], navigationExtras);
    // this.navCtrl.navigateForward('/owner-edit-job');
    // this.nav.push(EditjobPage, {'access_token':this.access_token,'jid':this.jid });
  }
  updateJobComplete() {
    this.appprov.updateJobComplete(this.access_token, this.jid).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("Job completed");
      console.log("going back to jobs management page");
      this.navCtrl.navigateBack(['owner/tabs/owner-jobs']);

    }, err => {
      console.log(err);
    });

  }
  async completeJob() {
    console.log("job completed");
    console.log(this.buttonDisabled);
    let alert = await this.alertCtrl.create({
      header: this.completemsgtitle,
      message: this.completemsg,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.buttonColor = 'secondary';
            this.buttonDisabled = true;
            this.updateJobComplete();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
   await alert.present()
  }

  updateJobCancelled() {
    this.appprov.updateJobCancelled(this.access_token, this.jid).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("Job cancelled");
      this.appprov.deleteJob(this.access_token, this.jid).then((res) => {
        let data = JSON.stringify(res);
        data = JSON.parse(data);
        console.log("Deleted rows from fullJobDetails");
        console.log("going back to jobs management page");
        this.navCtrl.navigateBack(['owner/tabs/owner-jobs']);
      }, err => {
        console.log(err);
      })
    }, err => {
      console.log(err);
    });
  }

  async cancelJob() {
    console.log("job cancelled");
    console.log(this.buttonDisabled);
    let alert = await this.alertCtrl.create({
      header: this.completemsgtitle,
      message: this.cancelmsg,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.buttonColor = 'secondary';
            this.buttonDisabled = true;
            this.updateJobCancelled();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    await alert.present()
  }
  
  onSelectChange(selectedValue: any) {
    // console.log('Selected val: ', selectedValue.value);        
    let item = this.duration;
    console.log("Item inner:"+ item);  
    this.getJobCards(this.jid, item);
    
  }
}
