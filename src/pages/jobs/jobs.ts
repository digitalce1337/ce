import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, Alert } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { AddjobPage } from '../addjob/addjob';
import { LoginPage } from '../../pages/login/login';
import { JobinfoPage } from '../../pages/jobinfo/jobinfo';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-Jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {

  public language: string;
  public title: string;
  public history: string;
  public txongoing: string;
  public upcomming: string;
  public add_job: string;

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
    payout:string}>;

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
    payout:string}>;

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
    payout:string}>;
    
  upcomingJid: string[];
  upcomingTitle: string[];
  upcoming_date_from: string[];
  upcoming_date_to: string[];
  upcoming_description: string[];
  upcoming_location: string[];
  upcoming_payout: string[];
  upcoming: any;
  job: any;
  
  date_day:string;
  date_mth:string;
  date_yr:string;
  // tempDate:string[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appprov: AppProvider,
    private storage: Storage,
    public modalCtrl:ModalController,
    private alertCtrl: AlertController,
    private camera: Camera,
    private androidPermissions: AndroidPermissions,
    public _translate: TranslateService) {
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
      this.title =  this._translate.instant("jobstx.title");
      this.history =  this._translate.instant("jobstx.history");
      this.txongoing =  this._translate.instant("jobstx.ongoing");
      this.upcomming =  this._translate.instant("jobstx.upcomming");
      this.add_job =  this._translate.instant("jobstx.add_job");
  }


  retrievePastJobs(){
    this.appprov.retrievePastJobs(this.access_token).then((res) => {
      this.past = res;
      this.pastJid = this.past.jid;
      this.pastTitle = this.past.title;
      this.past_description = this.past.description;
      this.past_date_from = this.past.date_from;
      this.past_date_to = this.past.date_to;
      this.past_location = this.past.location;
      this.past_payout = this.past.payout;
      this.pastJobs = [];
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
      console.log("History job pushed");
      
    }, err=>{
      console.log(err);
    });

    
    // this.date_yr = this.past_date_from.substring(0,4);
    // this.date_yr = this.past.date_from.substring(0,4);
    // this.date_mth =this.past.date_from.substring(5,7);
    // this.date_day = this.past.date_from.substring(8,10);
    // this.past.date_from = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;

    // this.date_yr = this.past.date_to.substring(0,4);
    // this.date_mth =this.past.date_to.substring(5,7);
    // this.date_day = this.past.date_to.substring(8,10);
    // this.past.date_to = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
    
  }

  retrieveOngoingJobs(){
    var totalPayout= 0;

    this.appprov.retrieveOngoingJobs(this.access_token).then((res) => {
      this.ongoing = res;
      this.ongoingJid = this.ongoing.jid;
      this.ongoingTitle = this.ongoing.title;
      this.ongoing_description = this.ongoing.description;
      this.ongoing_date_from = this.ongoing.date_from;
      // this.tempDate = this.ongoing.date_from;
      this.ongoing_date_to = this.ongoing.date_to;
      this.ongoing_location = this.ongoing.location;
      this.ongoing_payout = this.ongoing.payout;
      this.ongoingJobs = [];

      for(let i = 0; i < this.ongoingTitle.length; i++) {
        totalPayout += parseInt(this.ongoing.payout[i],10);
      }
      
      // for(let i=0; i <3; i++)
      // {
      //   this.date_yr = this.tempDate[i].substring(0,4);
      //   this.date_mth = this.tempDate[i].substring(5,7);
      //   this.date_day = this.tempDate[i].substring(8,10);
      //   this.ongoing_date_from[i] = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
      //   alert("ongoing date_from: " + this.ongoing_date_from[i]);
      // }

      
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
      // for(let i=0; i <3; i++)
      // {
      //   this.date_yr = this.ongoing_date_from[i].substring(0,4);
      //   this.date_mth = this.ongoing_date_from[i].substring(5,7);
      //   this.date_day = this.ongoing_date_from[i].substring(8,10);
      //   this.ongoing_date_from[i] = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
      //   alert("ongoing date_from: " + this.ongoing_date_from[i]);
      // }
      // this.ongoing_date_from = this.ongoing.date_from;
      console.log("Ongoing jobs pushed");
      console.log("Total Ongoing Payout: "+ totalPayout);
    }, err=>{
      console.log(err);
    });
    // for(let i=0; i <3; i++)
    // {
    //   this.date_yr = this.ongoing_date_from[i].substring(0,4);
    //   this.date_mth = this.ongoing_date_from[i].substring(5,7);
    //   this.date_day = this.ongoing_date_from[i].substring(8,10);
    //   this.ongoing_date_from[i] = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
    //   alert("ongoing date_from: " + this.ongoing_date_from[i]);
    // }
    // this.date_yr = this.ongoing.date_from.substring(0,4);
    // this.date_mth =this.ongoing.date_from.substring(5,7);
    // this.date_day = this.ongoing.date_from.substring(8,10);
    // this.ongoing.date_from = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;

    // this.date_yr = this.ongoing.date_from.substring(0,4);
    // this.date_mth =this.ongoing.date_from.substring(5,7);
    // this.date_day = this.ongoing.date_from.substring(8,10);
    // this.ongoing.date_from = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
  }

  retrieveUpcomingJobs(){
    var totalPayout= 0;

    this.appprov.retrieveUpcomingJobs(this.access_token).then((res) => {
      this.upcoming = res;
      this.upcomingJid = this.upcoming.jid;
      this.upcomingTitle = this.upcoming.title;
      this.upcoming_description = this.upcoming.description;
      this.upcoming_date_from = this.upcoming.date_from;
      this.upcoming_date_to = this.upcoming.date_to;
      this.upcoming_location = this.upcoming.location;
      this.upcoming_payout = this.upcoming.payout;
      this.upcomingJobs = [];

      for(let i = 0; i < this.upcomingTitle.length; i++) {
        totalPayout += parseInt(this.upcoming.payout[i],10);
      }

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
      console.log("Total Upcoming Payout: "+ totalPayout);
    }, err=>{
      console.log(err);
    });
    
    // this.date_yr = this.upcoming.date_from.substring(0,4);
    // this.date_mth =this.upcoming.date_from.substring(5,7);
    // this.date_day = this.upcoming.date_from.substring(8,10);
    // this.upcoming.date_from = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;

    // this.date_yr = this.upcoming.date_from.substring(0,4);
    // this.date_mth =this.upcoming.date_from.substring(5,7);
    // this.date_day = this.upcoming.date_from.substring(8,10);
    // this.upcoming.date_from = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
  }

 AddJob(){
    this.navCtrl.push(AddjobPage, {'access_token':this.access_token});
  }

  viewJob(event, jid){
    console.log(jid);
    this.navCtrl.push(JobinfoPage, {'jid':jid});
  }


  deletePhoto(index){
    let confirm = this.alertCtrl.create({
      title:"Sure you want?",
      message:"",
      buttons:[{
        text:"No",
        handler:() =>{
          console.log("canceled");
        }
      },
    {
      text:"Yes",
      handler: () => {
        console.log("Agree clicked");
        this.image.splice(index, 1);
      }
    }]
    });
    confirm.present();
  }

  takePhoto(){
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(res => {
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(res => {
        this.androidCamera();
    })
  })
}
androidCamera(){
  this.image = 'im an here';
  const options: CameraOptions = {
    quality: 50,
    targetHeight: 320,
    targetWidth: 320,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }
  this.takePhoto2(options); 
}

async takePhoto2(options){
  this.image = 'im an here2';
  try{
    this.camera.getPicture(options).then((img) =>{
      this.image = 'im an here3';
      this.image = "data:image/jpeg;base64," + img;
      console.log(this.image);
    });
  }
  catch(e){
    console.log(e);
  }
}

}
