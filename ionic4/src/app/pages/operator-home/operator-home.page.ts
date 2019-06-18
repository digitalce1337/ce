import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.page.html',
  styleUrls: ['./operator-home.page.scss'],
})
export class OperatorHomePage implements OnInit {
public language: string;
public welcome: string;
public title: string;
public forecast: string;
public jobstats: string;
public fleet: string;
public skill_sets: string;

@ViewChild('barCanvas') barCanvas;
  barChart: any;
  access_token: any;
  userinfo: any;
  Uemail: any;
  Unum: any;
  Uname: any;
  uimg: any;
  Ucompany: any;
  Ucompanyadd: any;

  // eventSource;
  eventSource =[];
  viewTitle;
  isToday:boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  capabilities: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;
  // constructor(public _translate: TranslateService) { }
  constructor(public _translate: TranslateService,public appprov: AppService, public alertCtrl: AlertController, public authService: AuthService) {}
  
  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
  private _initializeTranslation(): void{
    this.title =  this._translate.instant("operatorhome.title");
    this.welcome =  this._translate.instant("operatorhome.welcome");    
    this.forecast =  this._translate.instant("operatorhome.forecast");
    this.jobstats =  this._translate.instant("operatorhome.jobstats");
    this.fleet =  this._translate.instant("operatorhome.fleet");
    this.skill_sets =  this._translate.instant("operatorhome.skill_sets");
    // console.log(this.welcome);        
}
  ngOnInit() {    
    this._translateLanguage();
    // this.getUserInfo();
    // this.getOperatorJoblist();
    // this.getCapabilities();
    this.getJobStats();
    // this.getOperatorHomePageUtil()
    // this._initializeTranslation();
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onEventSelected(event){
    console.log("Event selected:" + event.startTime + '-' + event.endTime + "," +event.title);
  }
  changeMode(mode){
    this.calendar.mode = mode;
  }
  today(){
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev){
    console.log("Selected time: " + ev.selectedTime + ", hasEvents: " + (ev.events !== undefined && ev.events.length !==0) + ", disabled: " + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  getUserInfo(){
    this.authService.getUserinfo(this.access_token).then((result) => {
      this.userinfo = result;
      this.userinfo = JSON.parse(this.userinfo._body);
      this.Uemail = this.userinfo.email;
      this.Unum = this.userinfo.phone_no;
      this.Uname = this.userinfo.name;
      this.uimg = this.userinfo.profile_image_url;
      this.Ucompany = this.userinfo.company_name;
      this.Ucompanyadd = this.userinfo.company_add;
      this.appprov.setemail(this.userinfo.email);
    }, (err) => {
      console.log(err);
    });
  }

  getOperatorJoblist(){
    this.appprov.getOperatorJoblist(this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let job_desc = data['job_desc'];
      let job_datefrom = data['job_datefrom'];
      let job_dateto = data['job_dateto'];
      console.log(job_dateto);
      let job = {'job_desc':job_desc, 'job_dateto': job_dateto, 'job_datefrom':job_datefrom}
      console.log(job);
      this.loadEvents(job);
      this.plotSchedule(job);
      // this.getJobStats({'date_from':job_datefrom});
    }, err =>{
      console.log(err);
    });
  }
  loadEvents(job){
    this.eventSource = this.plotSchedule(job);
  }

  plotSchedule(jobs){
    var job = [];
    var dates_from = jobs.job_datefrom;
    var dates_to = jobs.job_dateto;
    var jids = jobs.job_desc;
    var today = new Date()
    for (let i=0; i<dates_from.length; i++){
      // var temp = parseInt(dates_to[i].substring(8,10), 10) + 1;
      // dates_to[i] = temp+dates_to[i].substring(5,7)+dates_to[i].substring(0,4);
      // var d = dates_from[i].substring(4,8)+"/"+dates_from[i].substring(0,2)+"/"+dates_from[i].substring(2,4);
      var start_day = new Date(Date.UTC(dates_from[i].substring(0,4), dates_from[i].substring(5,7)-1, parseInt(dates_from[i].substring(8,10), 10)));
      // var start_day = new Date(Date.UTC(dates_from[i].substring(0,4), dates_from[i].substring(5,7)-1, parseInt(dates_from[i].substring(8,10), 10)+1));
      var end_day = new Date(Date.UTC(dates_to[i].substring(0,4), dates_to[i].substring(5,7)-1, parseInt(dates_to[i].substring(8,10),10)+1));
      console.log("pushing job");
      job.push({
        title: jids[i],
        startTime: start_day,
        endTime: end_day,
        allDay: true
      })
    }
    return job;
  }

  // SwitchProfile(){
  //   this.storage.clear();
  //   this.navCtrl.setRoot(TabsPage);
  // }

  getCapabilities(){
    this.capabilities = [];
    this.appprov.getOpCapabilities(this.access_token.toString()).then((res:any) => {
      let caps = JSON.stringify(res);
      caps = JSON.parse(caps);
      let urls = caps['vehicle_url'];
      let types = caps['vehicle_type'];
      for(let i = 0; i<urls.length;i++){
        this.capabilities.push({
          vehicle_url:urls[i],
          vehicle_type: types[i]
        })
      }
    })
  }

  // public showCap(){
  //   let popover = this.popO.create(UpdatecapopPage);
  //   popover.present();
  //   popover.onDidDismiss(() => this.getCapabilities());
  // }

  getOperatorHomePageUtil(){
    this.appprov.getOperatorHomePageUtil(this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let chartData = data['chartData']                
      // this.getJobStats(chartData);              
    }, err=>{
      console.log(err);
    });
  }
  
  // getJobStats(chartData){
  getJobStats(){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var today = new Date();
    var month = today.getUTCMonth();
    var labels_month = [];
    var month_range = 4;
    var dataPack1 = ['7','14','14','4','22','20','15'];
    //Original real-live data
    // var chart_DataPack = chartData;
    //Default test data
    var chart_DataPack = dataPack1;
    for(let i=0; i<month_range; i++)
    {
      labels_month.push(months[(month+12 - i)%12]);
    }
    labels_month.reverse();
    for(let i=1; i<month_range; i++)
    {
      labels_month.push(months[(month+12 + i)%12]);
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data:{
        labels: labels_month,
        datasets: [{
          label: 'Statistics',
          data: chart_DataPack,
          backgroundColor: "rgba(0, 110,255, 0.2)",
          borderWidth:1
        }]
      },
      options:{
        scales: {
          xAxes: [{
            gridLines: {display:false},          
          }],
          yAxes: [{
            ticks:{
            min: 0,
            max: 100,
            gridLines: {display:false}, 
            callback: function(value){return value + "%"}
          },
        scaleLabel:{
          display:true,
          labelString: "Days"
        }
          }],
        },
        legend: {display:false}
      }
    }) 
  }
}
