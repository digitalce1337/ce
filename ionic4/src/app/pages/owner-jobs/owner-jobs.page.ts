import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AlertController, NavController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-owner-jobs',
  templateUrl: './owner-jobs.page.html',
  styleUrls: ['./owner-jobs.page.scss'],
})
export class OwnerJobsPage implements OnInit {

  public language: string;
  public title: string;
  public history: string;
  public txongoing: string;
  public upcomming: string;
  public cancelled: string;
  public add_job: string;

  private access_token: string;
  
  public image: any;
  public base64Image: string;

  cancelJobs: Array<{
    jid: string,
    title: string,
    date_from: string, 
    date_to:string,
    description: string, 
    location: string,
    payout:string}>;

  cancelJid: string[];
  cancelTitle: string[];
  cancel_date_from: string[];
  cancel_date_to: string[];
  cancel_description: string[];
  cancel_location : string[];
  cancel_payout: string[];
  cancel: any;

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

  constructor(public appprov: AppService, public alertCtrl: AlertController, public androidPermissions: AndroidPermissions,
    public camera: Camera, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  goto() {
    console.log("clickec. going to add job page");
    this.router.navigateByUrl('/owner-add-job');
  }

  retrieveCancelledJobs() {
    this.appprov.retrieveCancelledJobs(this.access_token).then((res) => {
      this.cancel = res;
      this.cancelJid = this.cancel.jid;
      this.cancelTitle = this.cancel.title;
      this.cancel_description = this.cancel.description;
      this.cancel_date_from = this.cancel.date_from;
      this.cancel_date_to = this.cancel.date_to;
      this.cancel_location = this.cancel.location;
      this.cancel_payout = this.cancel.payout;
      this.cancelJobs = [];
      try{
        for(let i = 0; i < this.cancelTitle.length; i++) {
          this.cancelJobs.push({
            jid: this.cancelJid[i],
            title: this.cancelTitle[i],
            description: this.cancel_description[i],
            date_from: this.cancel_date_from[i].substring(0,10),
            date_to: this.cancel_date_to[i].substring(0,10),
            location: this.cancel_location[i],
            payout: this.cancel_payout[i]
          });
        }
      }
      catch{
        console.log("Cancelled job cannot retrieve length");
      }
      console.log("Cancelled job pushed");
      
    }, err=>{
      console.log(err);
    });

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

  }

  AddJob(){
    // this.nav.push(AddjobPage, {'access_token':this.access_token});
    let navigationExtras: NavigationExtras = {
      queryParams: {
          token: this.access_token,
      }
    };
    this.router.navigateByUrl('owner-add-job', navigationExtras);
    // this.navCtrl.navigateForward('/owner-add-job')
  }

  viewJob(event, jid){
    console.log(jid);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          TakeJid: jid
      }
    };
    this.router.navigateByUrl('owner-job-info', navigationExtras );
    // this.nav.push(JobinfoPage, {'jid':jid});
  }


  async deletePhoto(index){
    let confirm = await this.alertCtrl.create({
      header:"Sure you want?",
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
    await confirm.present();
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
