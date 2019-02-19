import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, Alert, IonicPage } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { AddjobPage } from '../addjob/addjob';
import { LoginPage } from '../../pages/login/login';
import { JobinfoPage } from '../../pages/jobinfo/jobinfo';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { OpjobdetailsPage } from '../opjobdetails/opjobdetails';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the OperatorjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operatorjob',
  templateUrl: 'operatorjob.html',
})
export class OperatorjobPage {

  public language: string;
  public title: string;
  public history: string;
  public txongoing: string;
  public upcomming: string;

  private access_token: string;

  
  public image: any;
  public base64Image: string;

  pastJobs: Array<{
    jid: string,
    title: string,
    date_from: string, 
    date_to:string,
    description: string, 
    location: string,
    payout:string
     }>;

  pastJid: string[];
  pastTitle: string[];
  past_date_from: string[];
  past_date_to: string[];
  past_description: string[];
  past_location : string[];
  past_payout: string[];
  past: any;

  ongoingJobs: Array<{
    jid: string,
    title: string,
    date_from: string, 
    date_to:string,
    description: string, 
    location: string,
    payout:string
    }>;

  ongoingJid: string[];
  ongoingTitle: string[];
  ongoing_date_from: string[];
  ongoing_date_to: string[];
  ongoing_description: string[];
  ongoing_location: string[];
  ongoing_payout: string[];
  ongoing: any;

  upcomingJobs: Array<{
    jid: string,
    title: string,
    date_from: string, 
    date_to:string,
    description: string, 
    location: string,
    payout:string
  }>;
    
  upcomingJid: string[];
  upcomingTitle: string[];
  upcoming_date_from: string[];
  upcoming_date_to: string[];
  upcoming_description: string[];
  upcoming_location: string[];
  upcoming_payout: string[];
  upcoming: any;
  job: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appprov: AppProvider,
    private storage: Storage,
    public modalCtrl:ModalController,
    private alertCtrl: AlertController,
    private camera: Camera,
    private androidPermissions: AndroidPermissions,
    public _translate: TranslateService
  ) {

    storage.ready().then(() => {
    });
    storage.get('access_token').then((val) => {
      if (val == null){
        console.log("No acccess token");
        this.navCtrl.push(LoginPage);
      }
      else{
        console.log("Got access token");
        this.access_token = val.toString();
        this.job = "Ongoing";
        this.retrievePastJobs();
        this.retrieveOngoingJobs();
        this.retrieveUpcomingJobs();
        this._initializeTranslation();
      }
    });
  }
  ionViewDidEnter(){
    console.log("this is jobs page");
    this.retrievePastJobs();
    this.retrieveOngoingJobs();
    this.retrieveUpcomingJobs();
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
      this.title =  this._translate.instant("operatorjob.title");
      this.history =  this._translate.instant("operatorjob.history");
      this.txongoing =  this._translate.instant("operatorjob.txongoing");
      this.upcomming =  this._translate.instant("operatorjob.upcomming");
  }

  retrievePastJobs(){
    var totalPayout= 0;

    this.appprov.retrievePastJobsOps(this.access_token).then((res) => {
      this.past = res;
      this.pastJid = this.past.jid;
      this.pastTitle = this.past.title;
      this.past_description = this.past.description;
      this.past_date_from = this.past.date_from;
      this.past_date_to = this.past.date_to;
      this.past_location = this.past.location;  
      this.past_payout = this.past.payout;
      this.pastJobs = [];

      for(let i = 0; i < this.pastTitle.length; i++) {
        totalPayout += parseInt(this.past.payout[i],10);
      }
      
      try{
        for(let i = 0; i < this.pastTitle.length; i++) {
          this.pastJobs.push({
            jid: this.pastJid[i],
            title: this.pastTitle[i],
            description: this.past_description[i], 
            date_from: this.past_date_from[i].substring(0,10),
            date_to: this.past_date_to[i].substring(0,10),
            location: this.past_location[i],
            payout: this.past_payout[i]  

          });
        }
        
      }
      catch{
        console.log("Past job cannot retrieve length");
      }
      console.log("pastTitle: "+ this.pastTitle);
      console.log("pastPayout: "+ this.past_payout);
      console.log("1st Payout: "+ this.past_payout[0]+" 2ndPayout: "+ this.past_payout[1]);
      console.log("Get the total pastPayout: "+ totalPayout);
      console.log("History job pushed");
      
    }, err=>{
      console.log(err);
    });
  }

  retrieveOngoingJobs(){
    this.appprov.retrieveOngoingJobsOps(this.access_token).then((res) => {
      this.ongoing = res;
      this.ongoingJid = this.ongoing.jid;
      this.ongoingTitle = this.ongoing.title;
      this.ongoing_description = this.ongoing.description;
      this.ongoing_date_from = this.ongoing.date_from;
      this.ongoing_date_to = this.ongoing.date_to;
      this.ongoing_location = this.ongoing.location;
      this.ongoing_payout = this.ongoing.payout;
      this.ongoingJobs = [];
      try{
        for(let i = 0; i < this.ongoingTitle.length; i++) {
          this.ongoingJobs.push({
            jid: this.ongoingJid[i],
            title: this.ongoingTitle[i],
            description: this.ongoing_description[i],
            date_from: this.ongoing_date_from[i].substring(0,10),
            date_to: this.ongoing_date_to[i].substring(0,10),
            location: this.ongoing_location[i],
            payout: this.ongoing_payout[i]
          });
        }
      }
      catch{
        console.log("Ongoing job cannot retrieve length");
      }
      console.log("Ongoing jobs pushed");
      
    }, err=>{
      console.log(err);
    });
  }

  retrieveUpcomingJobs(){
    this.appprov.retrieveUpcomingJobsOps(this.access_token).then((res) => {
      this.upcoming = res;
      this.upcomingJid = this.upcoming.jid;
      this.upcomingTitle = this.upcoming.title;
      this.upcoming_description = this.upcoming.description;
      this.upcoming_date_from = this.upcoming.date_from;
      this.upcoming_date_to = this.upcoming.date_to;
      this.upcoming_location = this.upcoming.location;
      this.upcoming_payout = this.upcoming.payout;
      this.upcomingJobs = [];
      try{
        for(let i = 0; i < this.upcomingTitle.length; i++) {
          this.upcomingJobs.push({
            jid: this.upcomingJid[i],
            title: this.upcomingTitle[i],
            description: this.upcoming_description[i],
            date_from: this.upcoming_date_from[i].substring(0,10), 
            date_to: this.upcoming_date_to[i].substring(0,10),
            location: this.upcoming_location[i],
            payout: this.upcoming_payout[i]
          });
        }
      }
      catch{
        console.log("Upcoming Job cannot retrieve length");
      }
      console.log("Upcoming job pushed");
    }, err=>{
      console.log(err);
    });
  }

  viewJob($event, jid,title){
//    console.log("hi");
    this.navCtrl.push(OpjobdetailsPage, {
      Jid: jid,
      JTitle:title
    });
  }

}
