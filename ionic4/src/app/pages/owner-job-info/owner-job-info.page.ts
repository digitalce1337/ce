import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ApiService } from 'src/app/apikey/api.service';

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

  public photos: any = [];
  public base64Image: string;

  private access_token: string;

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

  constructor(public navCtrl: NavController, public _translate: TranslateService, public appprov: AppService, private apiKey: ApiService) { }

  ngOnInit() {
    this.retrieveJobDetails(this.jid);
    this.retrieveJobOperators(this.jid);
    this.getJobCards(this.jid, '3');
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
            report_img: this.apiKey + this.report_imgs[i].toString(),
            // report_img: this.apiKey.slice(0,-1) + this.report_imgs[i].toString(),
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
      // this.date_from = data['date_from'].substring(0,10);
      this.date_from = data['date_from'];
      // this.date_to = data['date_to'].substring(0,10);
      this.date_to = data['date_to'];
      this.location = data['location'];
      this.description = data['description'];
      this.title = data['title'];
      this.completed = data['completed'];
      if (this.completed == '1'){
        this.buttonDisabled = true;
        this.buttonColor = 'secondary';
        this.editShow = false;      
      }
      else if(this.completed =='2') {
        this.buttonDisabled = true;
        this.buttonColor = 'secondary';
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
    // this.nav.push(EditjobPage, {'jid':this.jid, 'access_token':this.access_token});
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       token: this.access_token,
    //       id: this.jid
    //   }
    // };
    // this.navCtrl.navigateForward('/EditjobPage', navigationExtras);
    this.navCtrl.navigateForward('/owner-edit-job');
    // this.nav.push(EditjobPage, {'access_token':this.access_token,'jid':this.jid });
  }

}
