import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Alert } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { apiKey } from '../../app/apiurls/serverurls.js';
import { EditjobPage } from '../../pages/editjob/editjob';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TranslateService } from '@ngx-translate/core';
import { BasePage } from '../base-page/basepage';

/**
 * Generated class for the JobinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobinfo',
  templateUrl: 'jobinfo.html',
})

export class JobinfoPage extends BasePage{

  public language: string;
  public txtitle: string;
  public complete_job: string;
  public reports: string;
  public past: string;
  public days: string;
  public all: string;
  public cancel: string;
  public completemsgtitle: string;
  public completemsg: string;

  public photos: any = [];
  public base64Image: string;

  // private access_token: string;

  jid: string;
  payout: string;
  date_from: string;
  date_to: string;
  location: string;
  description: string;
  title: string;
  completed: string;

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

  constructor(public navCtrl: NavController, 
    public appprov: AppProvider,
    private storage: Storage,
    public navParams: NavParams,
    private alertCtrl: AlertController, 
    public view:ViewController,
    private camera: Camera,
    public gloc:Geolocation,
    public iab: InAppBrowser,
    public _translate: TranslateService) {
      super(appprov);

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
          this.jid = navParams.get('jid');
          this.retrieveJobDetails(this.jid);
          this.retrieveJobOperators(this.jid);
          this.getJobCards(this.jid, '3');
          this._initializeTranslation();
        }
      });
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
      this.reports =  this._translate.instant("jobinfo.reports");
      this.past =  this._translate.instant("jobinfo.past");
      this.days =  this._translate.instant("jobinfo.days");
      this.all =  this._translate.instant("jobinfo.all");
      this.cancel =  this._translate.instant("jobinfo.cancel");
      this.completemsgtitle =  this._translate.instant("jobinfo.completemsgtitle");
      this.completemsg =  this._translate.instant("jobinfo.completemsg");
  }


  ionViewWillEnter(){
    this.storage.ready().then(() => {
    });
    this.storage.get('access_token').then((val) => {
      if (val == null){
        console.log("No acccess token");
        this.navCtrl.setRoot(LoginPage);
      }
      else{
        console.log("Got access token");
        this.access_token = val.toString();
        this.jid = this.navParams.get('jid');
        this.retrieveJobDetails(this.jid);
        this.retrieveJobOperators(this.jid);
        this.getJobCards(this.jid, '3');
      }
    });
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
            report_img: apiKey.slice(0,-1) + this.report_imgs[i].toString(),
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
      this.date_to = data['date_to'].substring(0,10);
      this.location = data['location'];
      this.description = data['description'];
      this.title = data['title'];
      this.completed = data['completed'];
      if (this.completed == '1'){
        this.buttonDisabled = true;
        this.buttonColor = 'secondary';
      }
      else{
        this.buttonDisabled = false;
        this.buttonColor = 'danger';
      }
    }, err=>{
      console.log(err);
    });
  }

  completeJob(){
    console.log("job completed");
    console.log(this.buttonDisabled);
    let alert = this.alertCtrl.create({
      title: this.completemsgtitle,
      message: this.completemsg,
      buttons:[
        {
          text: 'Yes',
          handler: () =>{
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
    alert.present()
  }

  updateJobComplete(){
    this.appprov.updateJobComplete(this.access_token, this.jid).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("Job completed");
      
    }, err=>{
      console.log(err);
    });

  }

  editJob(){
    console.log("editing");
    // this.navCtrl.push(EditjobPage, {'jid':this.jid, 'access_token':this.access_token});
    this.navCtrl.push(EditjobPage, {'access_token':this.access_token,'jid':this.jid });
    
  }
  
  onSelectChange(selectedValue: any){
    console.log('Selected', selectedValue);
    this.getJobCards(this.jid, selectedValue);
  }

  ionViewDidEnter() {
    this._initializeTranslation();     
  }

openMap(loc){
  console.log('https://www.google.com/maps/@' + loc + ',16z')
  const browser = this.iab.create('https://www.google.com/maps/@' + loc + ',16z','_blank');
  }

}
